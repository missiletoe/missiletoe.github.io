import Link from 'next/link'
import { ArrowRight, GitBranch, Sparkles } from 'lucide-react'
import { projects, allTechChoices, operatingPrinciples, portfolioUpdatedAt } from '@/data/projects'
import type { Project } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TechTable } from '@/components/tech-table'
import { GithubIcon, LinkedinIcon, TistoryIcon, TechIcon } from '@/components/icons'

// Preserve existing bookmarks and analytics events as the project copy changes.
const projectSections: Record<string, { id: string; analyticsSuffix: string }> = {
  kbpm: { id: 'case-kbpm', analyticsSuffix: 'kbpm' },
  'mcp-publishing': { id: 'case-mcp', analyticsSuffix: 'mcp' },
  'game-promotion': { id: 'case-game', analyticsSuffix: 'game' },
  'ios-prototyping': { id: 'case-ios', analyticsSuffix: 'ios' },
}

function statusVariant(status: Project['status']) {
  return status === 'shipped' ? 'shipped' : status === 'ongoing' ? 'ongoing' : 'planned'
}

export default function HomePage() {
  const recentProjects = projects.filter((project) => project.recentUpdate)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-20">
      <section aria-labelledby="hero-title" className="flex flex-col gap-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Max · Software Engineer</span>
            </div>
            <h1 id="hero-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]">
              반복 업무를 실제 제품과<br />운영 흐름으로 바꿉니다.
            </h1>
            <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed">
              데스크톱 도구와 웹 서비스, iOS 앱을 만들고 반복되는 작업을 자동화합니다. 각 프로젝트에서 <strong>어떤 제약을 풀었고, 어디까지 구현하고 확인했는지</strong>를 기록합니다.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['데스크톱 엔지니어링', '자동화 & 서비스 연동', '웹 포털 & 콘텐츠 운영', '온디바이스 iOS 앱'].map((label) => (
                <span key={label} className="inline-flex items-center rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs sm:text-[13px] font-semibold text-foreground/90">{label}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="text-sm font-semibold h-11 px-5" aria-label="최근 작업 섹션으로 이동" data-analytics-step="hero_cta_works">
                <a href="#works" className="flex items-center gap-2"><span>작업 보기</span><ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm font-semibold h-11 px-5" aria-label="Max의 GitHub 코드 보기 (새 창에서 열림)" data-analytics-step="hero_cta_github">
                <a href="https://github.com/missiletoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><GithubIcon className="h-4 w-4 text-foreground" aria-hidden="true" /><span>GitHub</span></a>
              </Button>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
              <span>GitHub 작업 확인 · <time dateTime={portfolioUpdatedAt}>{portfolioUpdatedAt.replaceAll('-', '.')}</time></span>
            </p>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-border bg-card p-5 flex flex-col gap-3.5 shadow-sm">
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">주요 작업 목차 ({projects.length})</span>
              <span className="text-xs text-muted-foreground">클릭 시 바로 이동</span>
            </div>
            <nav aria-label="최근 작업 목차" className="flex flex-col gap-2.5">
              {projects.map((project) => (
                <a key={project.slug} href={'#' + projectSections[project.slug].id} className="group rounded-lg border border-border/80 bg-background/60 p-3.5 hover:border-foreground/40 hover:bg-muted/40 transition-colors flex flex-col gap-2" data-analytics-step={'toc_' + projectSections[project.slug].analyticsSuffix}>
                  <span className="text-sm sm:text-base font-bold text-foreground group-hover:underline">{project.shortTitle}</span>
                  <Badge variant={statusVariant(project.status)} className="text-[11px] py-0 px-2 w-fit">{project.statusLabel}</Badge>
                  <p className="text-xs sm:text-[13px] text-foreground/80 leading-relaxed">{project.heroKicker}</p>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <Separator />

      <section id="works" aria-labelledby="works-title" className="flex flex-col gap-12">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Case Studies</div>
          <h2 id="works-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">직접 만들고 이어가는 작업</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">프로젝트의 시작점부터 주요 판단, 구현한 결과와 남은 한계까지 정리했습니다.</p>
        </div>

        {projects.map((project, index) => (
          <article key={project.slug} id={projectSections[project.slug].id} className="rounded-2xl border border-border bg-card p-6 sm:p-9 flex flex-col gap-7 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-xs font-bold text-muted-foreground">사례 {String(index + 1).padStart(2, '0')} · {project.period}</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
              </div>
              <Badge variant={statusVariant(project.status)} className="text-xs sm:text-[13px] font-semibold">{project.statusLabel}</Badge>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">{project.heroKicker}</p>
              <p className="text-base text-foreground/85 leading-relaxed">{project.summary}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">담당 · {project.role[0]}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col gap-2.5">
                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">01. 마주친 제약</h4>
                <ul className="list-disc pl-4 flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                  {project.constraints.slice(0, 2).map((constraint) => <li key={constraint}>{constraint}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex flex-col gap-2.5">
                <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300">02. 주요 판단</h4>
                <ul className="list-disc pl-4 flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                  {project.decisions.slice(0, 2).map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 flex flex-col gap-2.5">
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">03. 구현한 결과</h4>
                <ul className="list-disc pl-4 flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                  {project.outputs.slice(0, 2).map((output) => <li key={output}>{output}</li>)}
                </ul>
              </div>
            </div>

            {project.limitations[0] && (
              <p className="rounded-lg border border-border/80 bg-muted/30 px-4 py-3 text-sm text-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">남은 한계 · </span>{project.limitations[0]}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
                {project.stack.slice(0, 4).map((technology) => (
                  <span key={technology.name} className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                    <TechIcon name={technology.name} className="h-4 w-4 shrink-0" /><span>{technology.name}</span>
                  </span>
                ))}
              </div>
              <Button asChild variant={index === 0 ? 'default' : 'outline'} className="text-sm font-semibold h-10 px-4" aria-label={project.shortTitle + ' 상세 사례 연구 보기'} data-analytics-step={'case_cta_' + projectSections[project.slug].analyticsSuffix}>
                <Link href={'/work/' + project.slug} className="flex items-center gap-2"><span>상세 사례 연구 보기</span><ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </article>
        ))}
      </section>

      <Separator />

      <section aria-labelledby="recent-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Recent Work</div>
          <h2 id="recent-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">최근 GitHub 작업</h2>
          <p className="text-base text-foreground/80 leading-relaxed">저장소에서 확인한 최근 변경을 프로젝트별로 모았습니다.</p>
        </div>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm">
          {recentProjects.map((project) => {
            const update = project.recentUpdate
            if (!update) return null

            return (
              <div key={project.slug} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex flex-col gap-1.5 sm:w-36 sm:shrink-0">
                  <h3 className="text-base font-bold text-foreground">{project.shortTitle}</h3>
                  <time dateTime={update.date} className="text-xs font-mono text-muted-foreground">{update.date.replaceAll('-', '.')}</time>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{update.summary}</p>
                  <Link href={'/work/' + project.slug} className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline w-fit">
                    <span>작업 자세히 보기</span><ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /><span className="sr-only">{project.shortTitle}</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Separator />

      <section id="process" aria-labelledby="process-title" className="flex flex-col gap-8">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Work Method</div>
          <h2 id="process-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">제가 반복해서 사용하는 작업 순서</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">문제를 관찰하고 작은 흐름을 구현한 뒤, 실행 환경에서 확인하고 다음 작업으로 연결합니다.</p>
        </div>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm">
          {operatingPrinciples.map((item) => (
            <div key={item.step} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-muted/20 transition-colors">
              <div className="flex items-start gap-4">
                <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">{item.step}</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
              <Link href={'/work/' + item.projectSlug} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-foreground shrink-0 border border-border rounded-md px-3 py-1.5 bg-muted/40 hover:bg-muted transition-colors">
                <span>{item.linkedProject}</span><ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section id="stack" aria-labelledby="stack-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Technical Rationale</div>
          <h2 id="stack-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">기술은 결과 옆에서 설명합니다</h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">어떤 문제를 풀기 위해 기술을 선택했고 무엇을 배웠는지를 기록합니다.</p>
        </div>
        <TechTable items={allTechChoices} />
      </section>

      <Separator />

      <section id="ongoing" aria-labelledby="ongoing-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Next Steps</div>
          <h2 id="ongoing-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">각 프로젝트에서 다음으로 확인할 것</h2>
          <p className="text-base text-foreground/80 max-w-3xl leading-relaxed">현재 구현에서 남은 과제를 바탕으로 다음 작업을 정했습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <div key={project.slug} className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Sparkles className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" /><h3>{project.shortTitle}</h3>
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">{project.nextSteps[0]}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section aria-labelledby="contact-title" className="flex flex-col gap-6 py-6">
        <div className="flex flex-col gap-2.5">
          <h2 id="contact-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">소개와 연결</h2>
          <p className="text-base sm:text-lg text-foreground/85 max-w-3xl leading-relaxed">도구를 기존 작업 흐름에 붙여 실제 결과를 만든 경험을 중요하게 봅니다. 개발이 끝난 뒤에도 배포, 운영, 설명과 홍보가 남는다는 전제로 작업합니다.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild variant="outline" className="text-sm font-semibold h-10 px-4" aria-label="Max의 GitHub 프로필 방문 (새 창에서 열림)" data-analytics-step="contact_github">
            <a href="https://github.com/missiletoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><GithubIcon className="h-4 w-4 text-foreground" aria-hidden="true" /><span>GitHub</span></a>
          </Button>
          <Button asChild variant="outline" className="text-sm font-semibold h-10 px-4" aria-label="Max의 LinkedIn 프로필 방문 (새 창에서 열림)" data-analytics-step="contact_linkedin">
            <a href="https://www.linkedin.com/in/yong-suk-heo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><LinkedinIcon className="h-4 w-4 text-foreground" aria-hidden="true" /><span>LinkedIn</span></a>
          </Button>
          <Button asChild variant="outline" className="text-sm font-semibold h-10 px-4" aria-label="Max의 Tistory 블로그 방문 (새 창에서 열림)" data-analytics-step="contact_tistory">
            <a href="https://max-dev.tistory.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><TistoryIcon className="h-4 w-4 text-foreground" aria-hidden="true" /><span>Tistory</span></a>
          </Button>
        </div>
      </section>
    </div>
  )
}
