'use client'

import { useRef, type PointerEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionTemplate, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { GalleryArtwork } from '@/components/gallery-artwork'
import { galleryProjects, type GalleryProject } from '@/data/gallery'

function ProjectChapter({ item, index }: { item: GalleryProject; index: number }) {
  const chapter = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: chapter, offset: ['start start', 'end end'] })
  const isGame = item.slug === 'game-promotion'
  const isPhone = item.slug === 'ios-prototyping'
  const reveal = useTransform(scrollYProgress, [0, 0.7, 1], isPhone
    ? ['translate3d(0, 36px, 0) rotate(-7deg) scale(.9)', 'translate3d(0, 0px, 0) rotate(0deg) scale(1)', 'translate3d(0, 0px, 0) rotate(0deg) scale(1)']
    : isGame
      ? ['translate3d(0, 28px, 0) scale(.88)', 'translate3d(0, 0px, 0) scale(1)', 'translate3d(0, 0px, 0) scale(1)']
      : ['perspective(1400px) translate3d(0, 28px, 0) rotateX(12deg) scale(.9)', 'perspective(1400px) translate3d(0, 0px, 0) rotateX(0deg) scale(1)', 'perspective(1400px) translate3d(0, 0px, 0) rotateX(0deg) scale(1)'])
  const coverOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [1, 1, 0])
  const inspection = useSpring(0, { duration: 0.5, bounce: 0.2 })
  const artworkOpacity = useTransform(() => Math.max(0, Math.min(1, coverOpacity.get() * (1 - inspection.get()))))
  const titleTransform = useTransform(scrollYProgress, [0, 0.7], ['translate3d(0, 0px, 0)', 'translate3d(0, -12px, 0)'])
  const rotateX = useSpring(0, { duration: 0.5, bounce: 0.2 })
  const rotateY = useSpring(0, { duration: 0.5, bounce: 0.2 })
  const tilt = useMotionTemplate`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

  function resetPointer() {
    rotateX.set(0)
    rotateY.set(0)
    inspection.set(0)
  }

  function followPointer(event: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const depth = isPhone ? 5 : isGame ? 3 : 2
    rotateX.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -depth)
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * depth)
    inspection.set(1)
  }

  return (
    <section ref={chapter} className="project-chapter" data-project={item.slug} aria-labelledby={item.slug + '-title'}>
      <div className="chapter-stage">
        <motion.div className="chapter-identity" style={{ transform: reduceMotion ? 'none' : titleTransform }}>
          <Link href={'/work/' + item.slug} className="chapter-title-link">
            <Image src={item.icon} alt="" width={96} height={96} className="chapter-icon" priority={index === 0} />
            <h2 id={item.slug + '-title'}>{item.title}</h2>
          </Link>
        </motion.div>

        <motion.div className="chapter-reveal" style={{ transform: reduceMotion ? 'none' : reveal }}>
          <Link
            href={'/work/' + item.slug}
            className="chapter-preview"
            aria-label={item.title + ' 자세히 보기'}
            onPointerMove={followPointer}
            onPointerLeave={resetPointer}
            onPointerCancel={resetPointer}
            onFocus={() => inspection.set(1)}
            onBlur={resetPointer}
          >
            <motion.div className="chapter-tilt" style={{ transform: reduceMotion ? 'none' : tilt }}>
              <div className="chapter-screen">
                <GalleryArtwork item={item} decorative priority={index === 0} sizes={isPhone ? '(max-width: 700px) 70vw, 360px' : '(max-width: 700px) 94vw, 1100px'} />
                {isGame && (
                  <motion.div className="chapter-cover" aria-hidden="true" style={{ opacity: reduceMotion ? 0 : artworkOpacity }}>
                    <Image src="/images/everleaf-banner.png" alt="" fill sizes="(max-width: 700px) 94vw, 1100px" className="chapter-cover__image" />
                  </motion.div>
                )}
              </div>
              <span className="chapter-open" aria-hidden="true"><ArrowUpRight /></span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export function GalleryHome() {
  return (
    <div className="gallery-home">
      <h1 className="sr-only">프로젝트</h1>
      {galleryProjects.map((item, index) => <ProjectChapter item={item} index={index} key={item.slug} />)}
    </div>
  )
}
