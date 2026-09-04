import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, Target, AlertTriangle, Cpu, Rocket } from 'lucide-react'
import { Project } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { TechTable } from '@/components/tech-table'
import { EvidenceList } from '@/components/evidence-card'
import { FlowDiagram } from '@/components/flow-diagram'

interface ProjectLayoutProps {
  project: Project
  nextProject?: Project
  children?: React.ReactNode
}

export function ProjectLayout({
  project,
  nextProject,
  children,
}: ProjectLayoutProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 py-12 flex flex-col gap-12">
      {/* Top Back Link */}
      <div>
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:rounded"
          data-analytics-step="project_back_to_works"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>전체 프로젝트 목록으로 돌아가기</span>
        </Link>
      </div>

      {/* Header */}
      <header className="flex flex-col gap-5 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{project.category}</span>
          <span>·</span>
          <span className="font-mono">{project.period}</span>
          <Badge
            variant={
              project.status === 'shipped'
                ? 'shipped'
                : project.status === 'ongoing'
                ? 'ongoing'
                : 'planned'
            }
            className="ml-1"
          >
            {project.statusLabel}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.2]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* 3초 핵심 요약 배너 (TL;DR Summary Banner) */}
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 rounded-xl border border-emerald-500/25 bg-emerald-500/5 dark:bg-emerald-950/20 p-5">
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-mono">
                담당 역할
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.role[0]}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 font-mono">
                핵심 제약
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.constraints[0]}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 font-mono">
                해결 아키텍처
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.decisions[0]}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-mono">
                검증된 결과
              </span>
              <span className="text-sm font-medium text-foreground">
                {project.outputs[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Evidence Links in Header */}
        <EvidenceList items={project.evidence} />
      </header>

      {/* 1. 내가 맡은 역할 */}
      <section aria-labelledby="section-role" className="flex flex-col gap-4">
        <h2 id="section-role" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400">01.</span>
          <span>내가 맡은 역할</span>
        </h2>
        <ul className="list-disc list-inside flex flex-col gap-2 text-base text-foreground/90 leading-relaxed">
          {project.role.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* 2. 시작 당시 상황 */}
      <section aria-labelledby="section-context" className="flex flex-col gap-4">
        <h2 id="section-context" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400">02.</span>
          <span>시작 당시 상황</span>
        </h2>
        <div className="flex flex-col gap-3.5 text-base text-foreground/90 leading-relaxed">
          {project.context.map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </section>

      <Separator />

      {/* 3. 실제로 마주친 제약 */}
      <section aria-labelledby="section-constraints" className="flex flex-col gap-4">
        <h2 id="section-constraints" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-amber-600 dark:text-amber-400">03.</span>
          <span>실제로 마주친 제약</span>
        </h2>
        <div className="rounded-xl border border-border/80 bg-muted/25 p-6 flex flex-col gap-3">
          {project.constraints.map((constraint, i) => (
            <div key={i} className="flex items-start gap-3 text-base text-foreground/90 leading-relaxed">
              <span className="font-mono text-sm font-bold text-amber-700 dark:text-amber-400 mt-0.5 shrink-0">
                [{i + 1}]
              </span>
              <span>{constraint}</span>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* 4. 내가 내린 주요 판단 */}
      <section aria-labelledby="section-decisions" className="flex flex-col gap-4">
        <h2 id="section-decisions" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400">04.</span>
          <span>내가 내린 주요 판단</span>
        </h2>
        <div className="flex flex-col gap-3.5 text-base text-foreground/90 leading-relaxed">
          {project.decisions.map((decision, i) => (
            <div key={i} className="flex items-start gap-3.5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
              <span>{decision}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Flow Diagram */}
      {project.diagram && (
        <FlowDiagram
          title={project.diagram.title}
          beforeTitle={project.diagram.beforeTitle}
          before={project.diagram.before}
          afterTitle={project.diagram.afterTitle}
          after={project.diagram.after}
          humanGateNote={project.diagram.humanGateNote}
        />
      )}

      {/* Custom Body / Injected Media */}
      {children}

      <Separator />

      {/* 5. 구현하거나 배포한 결과 */}
      <section aria-labelledby="section-outputs" className="flex flex-col gap-4">
        <h2 id="section-outputs" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400">05.</span>
          <span>구현하거나 배포한 결과</span>
        </h2>
        <ul className="list-disc list-inside flex flex-col gap-2.5 text-base text-foreground/90 leading-relaxed">
          {project.outputs.map((output, i) => (
            <li key={i}>{output}</li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* 6. 실패하거나 예상과 달랐던 부분 & 그 경험으로 바뀐 다음 설계 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section aria-labelledby="section-limitations" className="flex flex-col gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
          <h2 id="section-limitations" className="text-base font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span>06. 실패 또는 남은 한계</span>
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
            {project.limitations.map((lim, i) => (
              <li key={i}>{lim}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="section-nextsteps" className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
          <h2 id="section-nextsteps" className="text-base font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span>07. 다음 설계 및 개편 계획</span>
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
            {project.nextSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </section>
      </div>

      <Separator />

      {/* 7. 사용 기술과 선택 이유 */}
      <section aria-labelledby="section-stack" className="flex flex-col gap-4">
        <h2 id="section-stack" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400">08.</span>
          <span>사용 기술과 선택 이유</span>
        </h2>
        <TechTable items={project.stack} />
      </section>

      <Separator />

      {/* Next Project Footer */}
      {nextProject && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-muted-foreground uppercase font-mono tracking-wider">다음 프로젝트</span>
            <span className="text-base font-bold text-foreground">
              {nextProject.shortTitle} — {nextProject.heroKicker}
            </span>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-sm font-semibold"
            aria-label={`다음 사례 연구: ${nextProject.shortTitle} 보기`}
            data-analytics-step="next_project_cta"
          >
            <Link href={`/work/${nextProject.slug}`} className="flex items-center gap-2">
              <span>사례 연구 보기</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{`다음 프로젝트: ${nextProject.shortTitle}`}</span>
            </Link>
          </Button>
        </div>
      )}
    </article>
  )
}
