import Link from 'next/link'

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__inner" aria-label="주 메뉴">
        <Link href="/" className="site-header__brand" data-analytics-step="header_logo">
          Max, the Software Engineer
        </Link>
        <Link href="/about" className="site-header__about">About</Link>
      </nav>
    </header>
  )
}
