import Link from 'next/link'
import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react'
import { additionalWork, projects } from '@/data/projects'
import type { Project } from '@/lib/types'

const projectSections: Record<string, { id: string; analyticsSuffix: string }> = {
  'mcp-publishing': { id: 'case-mcp', analyticsSuffix: 'mcp' },
  kbpm: { id: 'case-kbpm', analyticsSuffix: 'kbpm' },
  'game-promotion': { id: 'case-game', analyticsSuffix: 'game' },
  'ios-prototyping': { id: 'case-ios', analyticsSuffix: 'ios' },
}

export default function HomePage() {
  const featuredProjects = (['mcp-publishing', 'kbpm', 'game-promotion', 'ios-prototyping'] as const)
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="border-b border-border py-16 sm:py-24" aria-labelledby="hero-title">
        <p className="text-sm font-medium text-muted-foreground">AI Engineer</p>
        <h1 id="hero-title" className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          허용석
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
          MCP와 브라우저 자동화, 데스크톱·모바일 앱을 개발합니다. 콘텐츠와 커머스 운영에서 겪은 반복 작업을 소프트웨어로 구현해 왔습니다.
        </p>
        <a
          href="#works"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
          data-analytics-step="hero_cta_works"
        >
          프로젝트 보기 <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section id="works" className="scroll-mt-24 py-16 sm:py-20" aria-labelledby="works-title">
        <h2 id="works-title" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          프로젝트
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => {
            const section = projectSections[project.slug]
            return (
              <article
                key={project.slug}
                id={section.id}
                className="flex flex-col rounded-xl border border-border bg-card p-6 scroll-mt-24 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.statusLabel}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {project.shortTitle}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {project.preview}
                </p>
                <Link
                  href={'/work/' + project.slug}
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                  aria-label={project.shortTitle + ' 자세히 보기'}
                  data-analytics-step={'case_cta_' + section.analyticsSuffix}
                >
                  자세히 보기 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8 sm:py-20" aria-labelledby="about-title">
        <h2 id="about-title" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          소개
        </h2>
        <div className="mt-5 sm:mt-0">
          <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            콘텐츠와 커머스 운영에서 수집·확인·입력을 반복해 왔습니다. 제품을 만들 때는 인증, 실패 후 복구, 사용자 확인을 함께 설계합니다.
          </p>
          <details className="group mt-8 border-t border-border pt-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
              다른 작업 기록
              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="space-y-5 pb-2 pt-3">
              {additionalWork.map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title} <time dateTime={item.date} className="ml-2 font-normal text-muted-foreground">{item.date.replaceAll('-', '.')}</time>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75">{item.summary}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>
    </div>
  )
}
