import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Layers, Map, Swords } from 'lucide-react'
import type { ProductAction, ProductIntroduction, ProductMedia, Project } from '@/lib/types'
import { EvidenceList } from '@/components/evidence-card'
import { TechTable } from '@/components/tech-table'

export function ProductActions({ actions }: { actions: ProductAction[] }) {
  return (
    <div className="product-actions">
      {actions.map((action) => (
        <a
          key={action.href}
          href={action.href}
          className={action.primary ? 'product-action product-action--primary' : 'product-action'}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          aria-label={action.external ? action.label + ' (새 창에서 열림)' : undefined}
          data-analytics-step="product_action"
        >
          {action.label}
          {action.external ? <ArrowUpRight size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}
        </a>
      ))}
    </div>
  )
}

export function ProductImage({ media, className = '', priority = false }: { media: ProductMedia; className?: string; priority?: boolean }) {
  return (
    <figure className={'product-media ' + className}>
      <div className="product-media__frame">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 80vw, 1200px"
          priority={priority}
        />
      </div>
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  )
}

export function ProductHero({ intro }: { intro: ProductIntroduction }) {
  return (
    <section className="product-hero product-container">
      <div className="product-hero__copy">
        {intro.theme === 'everleaf' && (
          <Image className="product-hero__logo" src={intro.logo.src} width={intro.logo.width} height={intro.logo.height} alt="" priority />
        )}
        <h1>
          <span className="sr-only">{intro.name}: </span>
          {intro.headline[0]}<br />
          <span>{intro.headline[1]}</span>
        </h1>
        <p className="product-hero__description">{intro.description}</p>
        <ProductActions actions={intro.actions} />
        <p className="product-hero__availability">{intro.availability}</p>
      </div>
      <ProductImage media={intro.hero} className="product-hero__media" priority />
    </section>
  )
}

const adventureIcons = [Map, Layers, Swords]

export function ProductWorkflow({ intro, children }: { intro: ProductIntroduction; children?: ReactNode }) {
  return (
    <section id="workflow" className="product-workflow product-section">
      <div className="product-container">
        <h2>{intro.workflow.title}</h2>
        {intro.workflow.description && <p className="product-section__intro">{intro.workflow.description}</p>}
        {children}
        <ol className="product-steps" role="list">
          {intro.workflow.steps.map((step, index) => {
            const Icon = adventureIcons[index]
            return (
              <li key={step.title}>
                <div className="product-steps__marker" aria-hidden="true">
                  {intro.theme === 'everleaf' && Icon ? <Icon size={42} strokeWidth={1.5} /> : String(index + 1).padStart(2, '0')}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < intro.workflow.steps.length - 1 && <ArrowRight className="product-steps__arrow" size={23} aria-hidden="true" />}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export function ProductAvailability({ title, id = 'availability', children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className="product-availability product-section product-container">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function ProductFaq({ intro }: { intro: ProductIntroduction }) {
  if (intro.faq.length === 0) return null
  return (
    <section id="faq" className="product-faq product-container">
      <h2>자주 묻는 질문</h2>
      <div>
        {intro.faq.map((item) => (
          <details key={item.question} className="product-disclosure">
            <summary>{item.question}<ChevronDown size={18} aria-hidden="true" /></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <section>
      <h3>{title}</h3>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  )
}

export function ProjectLayout({ project, intro, children, storyChildren }: {
  project: Project
  intro: ProductIntroduction
  children: ReactNode
  storyChildren?: ReactNode
}) {
  return (
    <article className="product-page" data-product={intro.theme}>
      <nav className="product-nav product-container" aria-label={intro.name + ' 소개'}>
        <a href="#product-top" className="product-nav__brand" aria-label={intro.name + ' 소개 처음으로'}>
          <Image src={intro.logo.src} alt="" width={intro.logo.width} height={intro.logo.height} />
          {intro.theme === 'kbpm' ? <span>KBPM</span> : <span className="sr-only">{intro.name}</span>}
        </a>
        <div className="product-nav__links">
          {intro.navigation.map((link) => <a key={link.href} href={link.href} data-analytics-step="product_section">{link.label}</a>)}
        </div>
      </nav>
      <div id="product-top">{children}</div>
      <div className="product-container">
        <details className="product-disclosure product-story">
          <summary>만든 과정과 기술 이야기<ChevronDown size={19} aria-hidden="true" /></summary>
          <div className="product-story__content">
            <p className="product-story__meta">{project.category} · {project.period} · {project.statusLabel}</p>
            <p>{project.summary}</p>
            <DetailList title="담당한 일" items={project.role} />
            {project.recentUpdate && (
              <section>
                <h3>개발 기록</h3>
                <p><time dateTime={project.recentUpdate.date}>{project.recentUpdate.date.replaceAll('-', '.')}</time> · {project.recentUpdate.summary}</p>
              </section>
            )}
            <section><h3>배경</h3>{project.context.map((item) => <p key={item}>{item}</p>)}</section>
            <DetailList title="구현한 것" items={project.outputs} />
            <DetailList title="제약과 주요 판단" items={[...project.constraints, ...project.decisions]} />
            <DetailList title="검증 범위와 남은 한계" items={project.limitations} />
            <DetailList title="다음 작업" items={project.nextSteps} />
            <section><h3>기술 선택</h3><TechTable items={project.stack} /></section>
            {storyChildren}
            <EvidenceList items={project.evidence} />
          </div>
        </details>
        <footer className="product-footer">
          <Link href="/" data-analytics-step="project_back_to_works"><ArrowLeft size={17} aria-hidden="true" /> 다른 프로젝트 보기</Link>
          <span>{intro.name}</span>
        </footer>
      </div>
    </article>
  )
}
