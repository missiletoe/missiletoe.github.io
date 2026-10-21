import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  path: '/work/game-promotion',
  title: '메이플스토리월드 에버리프 | Max',
  description: '덱빌딩 로그라이트 에버리프의 게임 UI 공동 개발과 공식 웹사이트·EverWiki CMS 작업 기록입니다.',
  image: {
    url: '/images/everleaf-logo.png',
    width: 1672,
    height: 941,
    alt: '메이플스토리월드 에버리프 로고',
  },
})

export default function GamePromotionPage() {
  const project = projects.find((item) => item.slug === 'game-promotion')!
  const nextProject = projects.find((item) => item.slug === 'ios-prototyping')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      <section aria-labelledby="everleaf-play-title">
        <h2 id="everleaf-play-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">탐험에서 카드 전투로</h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          2D 필드를 탐험하다 적을 만나면 손에 든 카드로 다음 행동을 결정합니다. 적의 의도와 남은 MP를 살피며 공격·방어를 고르고 턴을 넘기는 덱빌딩 로그라이트입니다.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="everleaf-web-title">
        <h2 id="everleaf-web-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">웹사이트와 콘텐츠 운영</h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          디자인·프론트엔드 구현·브라우저 확인·배포 스킬을 Codex 작업 흐름에 연결해 공식 사이트를 제작하고 Vercel에 배포했습니다.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          <figure>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image src="/images/everleaf-banner.png" alt="에버리프 공식 타이틀과 게임 아트워크" fill className="object-cover" />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">에버리프 공식 웹사이트 아트워크</figcaption>
          </figure>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
            <p>Next.js와 React로 게임 소개·미디어·EverWiki를 구성했습니다. 영상은 화면 크기와 모션 감소 설정에 맞춰 재생을 제한합니다.</p>
            <p>Supabase CMS에서는 역할별 편집 권한, 초안과 공개본 분리, 개정 이력과 발행 충돌 검사를 다룹니다.</p>
            <p>2026년 9월 17일 기록 기준, Notion 문서 114개와 커버 이미지 106개를 반영했습니다. 누락된 자료는 검토 대기로 남겼습니다.</p>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="everleaf-game-title">
        <h2 id="everleaf-game-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">게임 UI 공동 작업</h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          웹사이트 작업과 별개로 동료와 인벤토리·상태창, HUD, 팝업 순서, 직업 선택 피드백, 단축키 안내와 카드 상세 UX를 다듬었습니다.
        </p>
        <a href="https://scandalous-sunfish-d36.notion.site/ui-3de545198ca080acb09fdb9655cc34ea?pvs=25" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline">
          UI 병합 기록 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    </ProjectLayout>
  )
}
