'use client'

import * as React from 'react'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={'sticky top-0 z-40 w-full transition-[padding] duration-300 ' + (isScrolled ? 'px-2 pt-2' : '')}>
      <div className={'transition-[background-color,border-radius,border-color,box-shadow,margin,max-width] duration-300 ' + (isScrolled
        ? 'mx-auto max-w-6xl rounded-2xl border border-border/80 bg-background/90 shadow-md backdrop-blur-xl'
        : 'w-full border-b border-border/80 bg-background/95 backdrop-blur-sm')}>
        <div className="mx-auto flex h-14 max-w-5xl items-center px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/75 sm:text-base"
            data-analytics-step="header_logo"
          >
            Max, the Software Engineer
          </Link>
        </div>
      </div>
    </header>
  )
}
