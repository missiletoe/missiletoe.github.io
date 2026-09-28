'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { GalleryArtwork } from '@/components/gallery-artwork'
import { galleryProjects } from '@/data/gallery'

const count = galleryProjects.length

function slotFor(index: number, active: number) {
  const offset = (index - active + count) % count
  if (offset === 0) return 'active'
  if (offset === 1) return 'next'
  if (offset === count - 1) return 'previous'
  return 'rear'
}

export function GalleryHome() {
  const [active, setActive] = React.useState(0)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const pauseUntil = React.useRef(0)
  const lastWheel = React.useRef(0)
  const touchStartX = React.useRef<number | null>(null)
  const interacting = React.useRef(false)

  const select = React.useCallback((index: number) => {
    pauseUntil.current = Date.now() + 3000
    setActive((index + count) % count)
  }, [])

  const move = React.useCallback((direction: number) => {
    pauseUntil.current = Date.now() + 3000
    setActive((index) => (index + direction + count) % count)
  }, [])

  React.useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  React.useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible' && !interacting.current && Date.now() >= pauseUntil.current) {
        setActive((index) => (index + 1) % count)
      }
    }, 4500)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        move(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        move(-1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [move])

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaY) < 8 || Date.now() - lastWheel.current < 700) return
    lastWheel.current = Date.now()
    move(event.deltaY > 0 ? 1 : -1)
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return
    const distance = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1)
  }

  const current = galleryProjects[active]

  return (
    <div className="gallery-home" style={{ '--gallery-accent': current.accent } as React.CSSProperties}>
      <section
        className="gallery-stage"
        aria-label="프로젝트 갤러리"
        onWheel={handleWheel}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX }}
        onTouchEnd={handleTouchEnd}
        onPointerEnter={() => { interacting.current = true }}
        onPointerLeave={() => { interacting.current = false }}
        onFocusCapture={() => { interacting.current = true }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) interacting.current = false
        }}
      >
        <Link href="/about" className="gallery-about-link">
          About <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <div className="gallery-perspective">
          {galleryProjects.map((item, index) => {
            const slot = slotFor(index, active)
            return (
              <div className="gallery-panel" data-slot={slot} key={item.slug} style={{ '--panel-overlay': item.overlay ?? 0.16 } as React.CSSProperties}>
                {slot === 'active' ? (
                  <Link href={'/work/' + item.slug} className="gallery-panel__target" aria-label={item.title + ' 자세히 보기'}>
                    <GalleryArtwork item={item} decorative priority={index === 0} />
                  </Link>
                ) : slot === 'rear' ? (
                  <div className="gallery-panel__target" aria-hidden="true">
                    <GalleryArtwork item={item} decorative />
                  </div>
                ) : (
                  <button type="button" className="gallery-panel__target" onClick={() => select(index)} aria-label={item.title + ' 선택'}>
                    <GalleryArtwork item={item} decorative />
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <h1 className="gallery-headline">Selected <em>work.</em></h1>

        <div className="gallery-bottom">
          <div className="gallery-caption" aria-live={reducedMotion || interacting.current ? 'polite' : 'off'}>
            <p className="gallery-counter">{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</p>
            <p className="gallery-caption__title">{current.title}</p>
            <p className="gallery-caption__note">{current.field} · {current.imageNote}</p>
          </div>
          <div className="gallery-controls" aria-label="갤러리 이동">
            <button type="button" onClick={() => move(-1)} aria-label="이전 프로젝트">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="다음 프로젝트">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <Link href={'/work/' + current.slug} className="gallery-open">
            프로젝트 보기 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="gallery-hint">스크롤 · 방향키 · 스와이프로 이동</p>
      </section>
    </div>
  )
}
