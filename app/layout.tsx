import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: '허용석 · AI Engineer | Max Portfolio',
  description:
    '허용석의 AI Engineer 포트폴리오. MCP, 브라우저 자동화, 데스크톱·모바일 앱 개발 사례를 소개합니다.',
  metadataBase: new URL('https://missiletoe.github.io'),
  openGraph: {
    title: '허용석 · AI Engineer',
    description: 'MCP, 브라우저 자동화와 앱 개발 사례를 소개합니다.',
    url: 'https://missiletoe.github.io',
    siteName: 'Max Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '허용석 · AI Engineer',
    description: 'MCP, 브라우저 자동화와 앱 개발 사례를 소개합니다.',
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
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased">
        <Providers>
          <a href="#main-content" className="skip-to-content">
            본문으로 건너뛰기
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
