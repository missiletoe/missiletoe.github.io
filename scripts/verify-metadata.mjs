import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const siteUrl = 'https://missiletoe.github.io'

function readHead(file) {
  const html = readFileSync(file, 'utf-8')
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/)?.[1]
  assert.ok(head, `${file}: missing HTML head`)
  const tags = [...head.matchAll(/<(meta|link)\b[^>]*>/g)].map(([tag, type]) => ({
    type,
    ...Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])),
  }))

  function meta(key) {
    const matches = tags.filter((tag) => tag.type === 'meta' && (tag.property === key || tag.name === key))
    assert.equal(matches.length, 1, `${file}: expected exactly one ${key}`)
    assert.ok(matches[0].content?.trim(), `${file}: empty ${key}`)
    return matches[0].content
  }

  return { head, tags, meta }
}

// Discover source pages so new routes cannot silently skip share metadata checks.
const routes = readdirSync('app', { recursive: true })
  .map((file) => file.replaceAll('\\', '/'))
  .filter((file) => /(^|\/)page\.[jt]sx?$/.test(file))
  .map((file) => '/' + file.replace(/(^|\/)page\.[jt]sx?$/, ''))
  .sort()
assert.ok(routes.length > 0, 'No content pages found')

const titles = new Set()
const descriptions = new Set()

for (const route of routes) {
  const file = join('out', route === '/' ? 'index.html' : `${route.slice(1)}.html`)
  const { head, tags, meta } = readHead(file)
  const titleMatches = [...head.matchAll(/<title>([\s\S]*?)<\/title>/g)]
  assert.equal(titleMatches.length, 1, `${route}: expected exactly one document title`)
  const title = titleMatches[0][1]
  const description = meta('description')
  assert.ok(title.trim() && !titles.has(title), `${route}: missing or reused page title`)
  assert.ok(!descriptions.has(description), `${route}: reused page description`)
  titles.add(title)
  descriptions.add(description)

  assert.equal(meta('og:title'), title, `${route}: OG title differs from document title`)
  assert.equal(meta('twitter:title'), title, `${route}: Twitter title differs from document title`)
  assert.equal(meta('og:description'), description, `${route}: OG description differs from page description`)
  assert.equal(meta('twitter:description'), description, `${route}: Twitter description differs from page description`)
  assert.equal(new URL(meta('og:url')).href, new URL(route, siteUrl).href, `${route}: incorrect OG URL`)
  const canonical = tags.filter((tag) => tag.type === 'link' && tag.rel === 'canonical')
  assert.equal(canonical.length, 1, `${route}: expected exactly one canonical URL`)
  assert.equal(new URL(canonical[0].href).href, new URL(meta('og:url')).href, `${route}: incorrect canonical URL`)
  assert.equal(meta('og:site_name'), 'Max Portfolio')
  assert.equal(meta('og:locale'), 'ko_KR')
  assert.equal(meta('og:type'), 'website')
  assert.equal(meta('twitter:card'), 'summary_large_image')

  const image = new URL(meta('og:image'))
  assert.equal(image.origin, siteUrl, `${route}: image must use the production site URL`)
  assert.ok(existsSync(join('out', image.pathname.slice(1))), `${route}: share image is missing from export`)
  assert.ok(Number(meta('og:image:width')) > 0, `${route}: invalid image width`)
  assert.ok(Number(meta('og:image:height')) > 0, `${route}: invalid image height`)
  assert.equal(meta('twitter:image'), image.href, `${route}: Twitter image differs from OG image`)
  assert.equal(meta('twitter:image:alt'), meta('og:image:alt'), `${route}: image descriptions differ`)
  assert.ok(!meta('robots').includes('noindex'), `${route}: content page must be indexable`)
  console.log(`PASS: ${route} — title, description, URLs, OG and Twitter image`)
}

const notFound = readHead('out/404.html')
assert.ok(/<title>페이지를 찾을 수 없습니다 \| Max<\/title>/.test(notFound.head), '404: missing error page title')
// Next.js also emits its own noindex tag for 404 pages.
const robots = notFound.tags.filter((tag) => tag.name === 'robots')
assert.ok(robots.length > 0 && robots.every((tag) => {
  const directives = tag.content.split(',').map((value) => value.trim())
  return directives.includes('noindex') && !directives.includes('index')
}), '404: must not be indexed')
assert.equal(notFound.tags.filter((tag) => tag.rel === 'canonical').length, 0, '404: must not inherit a content canonical URL')
console.log(`PASS: All ${routes.length} content pages have complete share metadata; 404 is noindex`)
