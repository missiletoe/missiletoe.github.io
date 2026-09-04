import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

console.log('--- Starting Portfolio Content & Integrity Verification ---')

const projectFile = resolve('data/projects.ts')
if (!existsSync(projectFile)) {
  console.error('FAIL: data/projects.ts not found')
  process.exit(1)
}

const content = readFileSync(projectFile, 'utf-8')

// Check slugs
const requiredSlugs = ['kbpm', 'mcp-publishing', 'game-promotion', 'ios-prototyping']
for (const slug of requiredSlugs) {
  if (!content.includes(`slug: '${slug}'`)) {
    console.error(`FAIL: Missing required project slug "${slug}"`)
    process.exit(1)
  }
}
console.log('✓ All 4 required project slugs present')

// Check slug uniqueness
const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const uniqueSlugs = new Set(slugMatches)
if (uniqueSlugs.size !== slugMatches.length) {
  console.error('FAIL: Duplicate slugs detected:', slugMatches)
  process.exit(1)
}
console.log(`✓ ${slugMatches.length} unique slugs confirmed (no duplicates)`)

// Check content-evidence doc exists
const evidenceDoc = resolve('docs/content-evidence.md')
if (!existsSync(evidenceDoc)) {
  console.error('FAIL: docs/content-evidence.md not found')
  process.exit(1)
}
console.log('✓ docs/content-evidence.md verified')

// Check required route pages exist
const routeFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/not-found.tsx',
  'app/sitemap.ts',
  'app/robots.ts',
  'app/work/kbpm/page.tsx',
  'app/work/mcp-publishing/page.tsx',
  'app/work/game-promotion/page.tsx',
  'app/work/ios-prototyping/page.tsx',
]

for (const rf of routeFiles) {
  if (!existsSync(resolve(rf))) {
    console.error(`FAIL: Required route file "${rf}" does not exist`)
    process.exit(1)
  }
}
console.log('✓ All 9 core App Router page files exist')

console.log('--- Content & Integrity Verification Passed Successfully! ---')
