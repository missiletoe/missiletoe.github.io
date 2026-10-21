import type { Metadata } from 'next'
import './globals.css'
import './gallery.css'
import { AnalyticsListener } from '@/components/analytics/analytics-listener'
import { Header } from '@/components/header'
import { siteUrl } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        <AnalyticsListener />
        <a href="#main-content" className="skip-to-content">
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
