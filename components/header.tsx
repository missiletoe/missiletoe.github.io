'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  { label: '최근 작업', href: '/#works' },
  { label: '작업 방식', href: '/#process' },
  { label: '기술 선택', href: '/#stack' },
  { label: '현재 진행 중', href: '/#ongoing' },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`sticky top-0 z-40 w-full transition-[padding] duration-300 ${isScrolled ? 'px-2 pt-2' : ''}`}>
      <div className={`transition-[background-color,border-radius,border-color,box-shadow,margin,max-width] duration-300 ${isScrolled ? 'mx-auto max-w-6xl rounded-2xl border border-border/80 bg-background/90 shadow-md backdrop-blur-xl' : 'w-full border-b border-border/80 bg-background/95 backdrop-blur-sm'}`}>
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-mono text-base font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80 focus-visible:rounded"
          data-analytics-step="header_logo"
        >
          Max
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-sm font-medium lg:flex xl:gap-7" aria-label="메인 내비게이션">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/75 transition-colors hover:text-foreground focus-visible:rounded"
              data-analytics-step={`header_nav_${item.href.replace('/#', '').replace('#', '')}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com/missiletoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:rounded-full"
            aria-label="Max의 GitHub 프로필 (새 창에서 열림)"
            data-analytics-step="header_github"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="!h-11 !w-11 rounded-full"
                aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
                data-analytics-step="header_mobile_menu_trigger"
              >
                <span className={`inline-flex transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                </span>
                <span className="sr-only">{isOpen ? '메뉴 닫기' : '메뉴 열기'}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-lg font-bold">메뉴</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 text-base font-medium" aria-label="모바일 내비게이션">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    data-analytics-step={`mobile_nav_${item.href.replace('/#', '').replace('#', '')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                  <a
                    href="https://github.com/missiletoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    aria-label="GitHub 프로필"
                    data-analytics-step="mobile_nav_github"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub ↗</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yong-suk-heo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    aria-label="LinkedIn 프로필"
                    data-analytics-step="mobile_nav_linkedin"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn ↗</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
    </header>
  )
}
