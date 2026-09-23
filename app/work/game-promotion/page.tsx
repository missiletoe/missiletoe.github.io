import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: '에버리프(EverLeaf) 공식 웹사이트와 EverWiki CMS | Max',
  description:
    'Next.js 기반 에버리프 공식 웹사이트와 게임 도감, 공지·업데이트를 운영하는 EverWiki CMS를 구축했습니다. 반응형 게임 소개부터 권한별 편집과 검토 후 게시까지 연결한 사례입니다.',
}

export default function GamePromotionPage() {
  const project = projects.find((p) => p.slug === 'game-promotion')!
  const nextProject = projects.find((p) => p.slug === 'ios-prototyping')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      {/* Deep Dive on the Official Website and Content Operations */}
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[웹사이트 운영]</span>
          <span>게임 소개부터 EverWiki 콘텐츠 관리까지</span>
        </h3>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-4 text-base text-foreground/90 leading-relaxed">
          <p>
            게임 '에버리프(EverLeaf)'를 처음 만나는 방문자가 게임플레이를 살펴보고, 필요한 정보를 찾고, 최신 소식을 확인할 수 있도록 공식 웹사이트를 만들었습니다.
          </p>
          <p>
            <strong>Next.js 16 App Router</strong>와 React 19로 반응형 Sky Portal 메인 화면, 게임플레이 미디어, 직업별 카드·몬스터 도감을 구성했습니다. 기기와 모션 설정에 맞춰 메인 영상 재생을 제한하고, <strong>EverWiki 폴더 탐색</strong>으로 게임 정보를 분류했습니다.
          </p>
          <p>
            <strong>Supabase 기반 CMS</strong>에서 위키, 공지, 업데이트를 함께 관리합니다. GitHub 계정에 관리자·영역별 편집 권한을 부여하고, 초안과 공개본을 분리해 게시 전 변경이 공개 페이지에 노출되지 않도록 했습니다. 외부 자료는 운영자가 기존 문서와 비교하고 검토한 뒤 게시하며, 수정 이력과 기존 주소를 보존합니다.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-muted/30 p-6 sm:p-7">
          <h4 className="text-base font-bold text-foreground">Codex 스킬 연결부터 배포까지</h4>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground/85">
            디자인·프론트엔드 구현·브라우저 검증·배포에 필요한 스킬을 Codex 작업 흐름에 연결한 뒤, 공식 사이트를 구현하고 브라우저에서 확인해 Vercel에 배포했습니다.
          </p>
        </div>

        {/* Media Assets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/everleaf-banner.png"
                alt="에버리프 공식 타이틀 및 아트워크 그래픽"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">
              에버리프 공식 타이틀 및 아트워크 배너
            </p>
            <p className="text-xs text-muted-foreground">
              레트로 픽셀 아트와 클래식 타이포그래피를 결합한 홍보 비주얼
            </p>
          </div>

          <div className="flex flex-col gap-3.5 rounded-xl border border-border bg-muted/30 p-6 justify-center">
            <h4 className="text-base font-bold text-foreground">
              구현한 웹사이트와 콘텐츠 운영 기능
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-foreground/90 leading-relaxed">
              <li>반응형 게임 소개와 키보드·터치로 탐색하는 미디어 목록</li>
              <li>카드·몬스터 등 일곱 분류로 구성한 EverWiki</li>
              <li>공지·업데이트 상세 페이지, RSS, 사이트맵</li>
              <li>GitHub 계정별 편집 권한, 초안 복구, 게시·휴지통·복원</li>
              <li>Discord 업데이트 자료의 검토·가져오기와 이미지 보존</li>
              <li>소셜 채널별 랜딩 페이지와 개인정보를 최소화한 링크 분석</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
            <h4 className="text-base font-bold text-foreground">Notion 자료 이관과 검토</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              2026년 9월 17일 기록 기준으로 문서 114개와 커버 이미지 106개를 반영했습니다. 누락되거나 불완전한 자료는 자동 공개하지 않고 검토 대기로 남겼습니다.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
            <h4 className="text-base font-bold text-foreground">MapleStory Worlds UI 공동 작업</h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">
              웹사이트·CMS 작업과 구분되는 팀 기여입니다. 인벤토리·상태창과 HUD, 팝업 표시 순서, 직업 선택 피드백, 단축키 안내와 카드 상세 UX를 동료와 함께 다듬었습니다.
            </p>
            <a className="mt-3 inline-flex text-sm font-semibold text-foreground underline underline-offset-4" href="https://scandalous-sunfish-d36.notion.site/ui-3de545198ca080acb09fdb9655cc34ea?pvs=25" target="_blank" rel="noopener noreferrer">
              2026.09.18 UI 병합 기록 보기
            </a>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
