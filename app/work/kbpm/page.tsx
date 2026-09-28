import type { Metadata } from 'next'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'KBPM: KREAM 네이티브 데스크톱 앱 | Max',
  description: 'SwiftUI·WinUI 3 화면과 Python 실행 계층을 연결한 KBPM 개발 기록입니다.',
}

export default function KbpmPage() {
  const project = projects.find((item) => item.slug === 'kbpm')!
  const nextProject = projects.find((item) => item.slug === 'game-promotion')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      <section aria-labelledby="kbpm-structure-title">
        <h2 id="kbpm-structure-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">앱 구조</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
          <p>SwiftUI macOS 앱과 WinUI 3 Windows 앱이 Python sidecar를 실행합니다. 두 화면은 표준 입출력 JSON-RPC로 상품·계정 조회 결과와 실행 상태를 받습니다.</p>
          <p>KREAM API 응답을 검증하고 브라우저 세션의 로그인 상태와 화면 표시 상태를 나눠 확인합니다. 조회와 비용 미리보기는 실제 거래 제출과 분리했습니다.</p>
          <p>2026년 9월 8일 기록에는 macOS에서 실제 계정 목록, 검색, 추가 페이지 조회, 탭 이동 뒤 상태 복원과 창 수명주기 확인이 있습니다. 이를 Windows 실행이나 거래 완료 근거로 확대하지 않습니다.</p>
        </div>

        <details className="group mt-8 border-t border-border pt-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
            이전 버전 화면
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-5 pb-2 pt-4 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <Image src="/images/1.png" alt="KBPM v1 상품 검색 결과 화면" fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">2025년 v1 · 상품 검색</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <Image src="/images/2.png" alt="KBPM v1 보관판매 대기열 화면" fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">2025년 v1 · 보관판매 대기열</figcaption>
            </figure>
          </div>
        </details>
      </section>
    </ProjectLayout>
  )
}
