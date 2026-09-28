import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ChevronDown } from 'lucide-react'
import type { Project } from '@/lib/types'
import { EvidenceList } from '@/components/evidence-card'
import { TechTable } from '@/components/tech-table'

interface ProjectLayoutProps {
  project: Project
  nextProject?: Project
  children?: React.ReactNode
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null

  return (
    <section>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}

export function ProjectLayout({ project, nextProject, children }: ProjectLayoutProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/about#works"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        data-analytics-step="project_back_to_works"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 프로젝트
      </Link>

      <header className="mt-8 border-b border-border pb-9">
        <p className="text-sm text-muted-foreground">{project.category} · {project.period}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg">
          {project.summary}
        </p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2 sm:gap-6">
          <div>
            <dt className="text-muted-foreground">담당</dt>
            <dd className="mt-1 text-foreground">{project.role[0]}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">상태</dt>
            <dd className="mt-1 text-foreground">{project.statusLabel}</dd>
          </div>
        </dl>
        <EvidenceList items={project.evidence} />
      </header>

      <section className="border-b border-border py-10" aria-labelledby="section-outputs">
        <h2 id="section-outputs" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">구현한 것</h2>
        <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-foreground/85">
          {project.outputs.slice(0, 3).map((output) => <li key={output}>{output}</li>)}
        </ul>
      </section>

      {children && <div className="border-b border-border py-10 [&>section]:my-0">{children}</div>}

      <section className="border-b border-border py-10" aria-labelledby="section-limitations">
        <h2 id="section-limitations" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">현재 상태</h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">{project.limitations[0]}</p>
      </section>

      <details className="group border-b border-border py-5">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
          설계 과정과 추가 정보
          <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="space-y-9 pb-7 pt-5">
          {project.recentUpdate && (
            <section>
              <h3 className="text-sm font-semibold text-foreground">최근 작업</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                <time dateTime={project.recentUpdate.date}>{project.recentUpdate.date.replaceAll('-', '.')}</time> · {project.recentUpdate.summary}
              </p>
            </section>
          )}
          <DetailList title="추가 담당 범위" items={project.role.slice(1)} />
          <section>
            <h3 className="text-sm font-semibold text-foreground">배경</h3>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              {project.context.map((item) => <p key={item}>{item}</p>)}
            </div>
          </section>
          <DetailList title="제약" items={project.constraints} />
          <DetailList title="주요 판단" items={project.decisions} />
          <DetailList title="추가 구현" items={project.outputs.slice(3)} />
          <DetailList title="남은 한계" items={project.limitations.slice(1)} />
          <DetailList title="다음 작업" items={project.nextSteps} />
          <section>
            <h3 className="mb-4 text-sm font-semibold text-foreground">기술 선택</h3>
            <TechTable items={project.stack} />
          </section>
        </div>
      </details>

      {nextProject && (
        <Link
          href={'/work/' + nextProject.slug}
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:underline"
          data-analytics-step="next_project_cta"
        >
          다음 프로젝트: {nextProject.shortTitle} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      )}
    </article>
  )
}
