import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: '에버리프(EverLeaf) 게임 홍보 및 공식 포털 제작 | Max',
  description:
    '게임 빌드뿐만 아니라 스토리보드 영상, 타이틀 그래픽, Next.js 기반 공식 웹 포털과 실시간 서비스 상태 모니터링을 구축한 출시 사례 연구입니다.',
}

export default function GamePromotionPage() {
  const project = projects.find((p) => p.slug === 'game-promotion')!
  const nextProject = projects.find((p) => p.slug === 'ios-prototyping')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      {/* Deep Dive on Promotion & Web Infrastructure */}
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[출시 인프라]</span>
          <span>공식 웹 포털과 MapleStory Worlds 실시간 텔레메트리</span>
        </h3>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-4 text-base text-foreground/90 leading-relaxed">
          <p>
            게임 '에버리프(EverLeaf)'는 단순한 게임 클라이언트 제작을 넘어, 유저가 유입되고 유지되는 전체 라이프사이클을 설계했습니다.
          </p>
          <p>
            <strong>Next.js 16 App Router</strong> 기반으로 전사/도적 카드 도감과 몬스터 도감을 구현하고, MSW 인스턴스에서 전송하는 <strong>Heartbeat 신호</strong>를 수신하여 서비스 가동 상태 및 실시간 점검 공지를 표시하는 텔레메트리 파이프라인을 구축했습니다.
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
              제작된 홍보 및 출시 자산
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-foreground/90 leading-relaxed">
              <li>씬 1~4 단계별 게임플레이 스토리보드 및 캡처 영상</li>
              <li>전사·도적 카드 도감 및 몬스터 정보 데이터베이스</li>
              <li>YouTube, Discord, X, Instagram 유입 전용 랜딩 페이지</li>
              <li>GitHub ID 기반 관리자 인증 점검 관리 시스템 (/admin/status)</li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
