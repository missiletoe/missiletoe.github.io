'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-base font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80 focus-visible:rounded"
          data-analytics-step="header_logo"
        >
          Max
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium" aria-label="메인 내비게이션">
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
          <a
            href="https://github.com/missiletoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground/75 transition-colors hover:text-foreground focus-visible:rounded"
            aria-label="Max의 GitHub 프로필 (새 창에서 열림)"
            data-analytics-step="header_github"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="모바일 메뉴 열기"
                data-analytics-step="header_mobile_menu_trigger"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">모바일 메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-lg font-bold">메뉴</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 text-base font-medium" aria-label="모바일 내비게이션">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-foreground/80 transition-colors hover:text-foreground"
                    data-analytics-step={`mobile_nav_${item.href.replace('/#', '').replace('#', '')}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a
                    href="https://github.com/missiletoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
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
                    className="py-1 flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
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
    </header>
  )
}
