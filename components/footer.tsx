import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { GithubIcon, LinkedinIcon, TistoryIcon } from '@/components/icons'

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 py-12 text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-base font-bold text-foreground">
              허용석 — AI Engineer
            </p>
            <p className="text-sm text-foreground/80 mt-1">
              반복 업무를 실제 제품과 운영 흐름으로 연결합니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            <a
              href="https://github.com/missiletoe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              aria-label="Max의 GitHub"
              data-analytics-step="footer_github"
            >
              <GithubIcon className="h-4 w-4 text-foreground/75" />
              <span>GitHub ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yong-suk-heo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              aria-label="Max의 LinkedIn"
              data-analytics-step="footer_linkedin"
            >
              <LinkedinIcon className="h-4 w-4 text-foreground/75" />
              <span>LinkedIn ↗</span>
            </a>
            <a
              href="https://max-dev.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              aria-label="Max의 Tistory 블로그"
              data-analytics-step="footer_tistory"
            >
              <TistoryIcon className="h-4 w-4 text-foreground/75" />
              <span>Tistory ↗</span>
            </a>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-[13px] text-muted-foreground">
          <p>
            본 포트폴리오의 모든 서술은 Git 커밋, 릴리스, 저장소 코드 등 검증 가능한 증거를 기반으로 작성되었습니다.
          </p>
          <p className="font-mono">Next.js · GitHub Pages</p>
        </div>
      </div>
    </footer>
  )
}
