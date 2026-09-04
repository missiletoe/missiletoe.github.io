import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Max — Software Engineer | 포트폴리오',
  description:
    '반복 업무를 실제 자동화 흐름으로 연결하고 배포, 운영, 패키징, 홍보, 문서화까지 완결하는 소프트웨어 엔지니어 Max의 포트폴리오입니다.',
  metadataBase: new URL('https://missiletoe.github.io'),
  openGraph: {
    title: 'Max — Software Engineer',
    description: '반복 업무를 실제 제품과 운영 흐름으로 바꿉니다.',
    url: 'https://missiletoe.github.io',
    siteName: 'Max Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max — Software Engineer',
    description: '반복 업무를 실제 제품과 운영 흐름으로 바꿉니다.',
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
