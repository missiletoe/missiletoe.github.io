import type { Metadata } from 'next'
import './globals.css'
import './gallery.css'
import { AnalyticsListener } from '@/components/analytics/analytics-listener'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Max, the Software Engineer | Portfolio',
  description:
    '허용석의 프로젝트 갤러리. MCP, 브라우저 자동화, 웹과 앱 개발 작업을 소개합니다.',
  metadataBase: new URL('https://missiletoe.github.io'),
  openGraph: {
    title: 'Max, the Software Engineer',
    description: '허용석의 프로젝트 갤러리.',
    url: 'https://missiletoe.github.io',
    siteName: 'Max Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max, the Software Engineer',
    description: '허용석의 프로젝트 갤러리.',
  },
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
