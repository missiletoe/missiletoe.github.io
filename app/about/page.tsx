import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { GalleryArtwork } from '@/components/gallery-artwork'
import { galleryProjects } from '@/data/gallery'
import { projects } from '@/data/projects'
import { contactLinks } from '@/data/contact-links'

export const metadata: Metadata = {
  title: 'About Max | Max, the Software Engineer',
  description: '허용석의 소개와 메이플스토리월드 에버리프, KBPM, 찍술 프로젝트.',
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page__inner">
        <section className="about-hero" aria-labelledby="about-title">
          <p className="about-hero__role">AI Engineer</p>
          <h1 id="about-title">허용석</h1>
          <p className="about-hero__description">
            MCP와 브라우저 자동화, 데스크톱·모바일 앱을 개발합니다. 콘텐츠와 커머스 운영에서 겪은 반복 작업을 소프트웨어로 구현해 왔습니다.
          </p>
          <nav className="about-contact" aria-label="연락처 링크">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label + ' (새 창에서 열림)'}
              >
                {link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </section>

        <section id="works" className="about-project-grid" aria-label="프로젝트">
          {galleryProjects.map((item) => {
            const project = projects.find((entry) => entry.slug === item.slug)!
            return (
              <Link
                key={item.slug}
                href={'/work/' + item.slug}
                className="about-project"
                style={{ '--project-accent': item.accent } as CSSProperties}
                aria-label={project.shortTitle + ' 자세히 보기'}
              >
                <div className="about-project__media">
                  <GalleryArtwork item={item} sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="about-project__body">
                  <div className="about-project__meta">
                    <span>{project.category}</span>
                    <span>{project.statusLabel}</span>
                  </div>
                  <div className="about-project__heading">
                    <h2>{project.shortTitle}</h2>
                  </div>
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}
