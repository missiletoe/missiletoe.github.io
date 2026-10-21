'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { contactLinks } from '@/data/contact-links'
import './contact-menu.css'

export function Header() {
  const firstLink = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()
  const productTheme = pathname === '/work/kbpm' ? 'kbpm'
    : pathname === '/work/game-promotion' ? 'everleaf'
      : pathname === '/work/ios-prototyping' ? 'zziksool' : undefined

  return (
    <header className="site-header" data-product={productTheme}>
      <nav className="site-header__inner" aria-label="주 메뉴">
        <Link href="/" className="site-header__brand" data-analytics-step="header_logo">
          Max, the Software Engineer
        </Link>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button type="button" className="contact-menu__trigger">Contact</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="contact-menu__backdrop" />
            <Dialog.Content
              className="contact-menu"
              onOpenAutoFocus={(event) => {
                event.preventDefault()
                firstLink.current?.focus()
              }}
            >
              <div className="contact-menu__inner">
                <div className="contact-menu__header">
                  <Dialog.Title className="contact-menu__title">Contact</Dialog.Title>
                  <Dialog.Close className="contact-menu__close" aria-label="Contact 메뉴 닫기">
                    <X size={22} strokeWidth={1.5} aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  외부 프로필과 블로그를 새 창에서 엽니다.
                </Dialog.Description>
                <nav className="contact-menu__links" aria-label="외부 연락처 링크">
                  {contactLinks.map((link, index) => (
                    <Dialog.Close asChild key={link.href}>
                      <a
                        ref={index === 0 ? firstLink : undefined}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label + ' (새 창에서 열림)'}
                        data-analytics-step="contact_link"
                      >
                        {link.label}
                      </a>
                    </Dialog.Close>
                  ))}
                </nav>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  )
}
