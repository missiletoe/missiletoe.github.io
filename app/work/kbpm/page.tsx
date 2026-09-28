import type { Metadata } from 'next'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'KBPM: KREAM 데스크톱 작업공간 | Max',
  description: '실제 KREAM 브라우저와 보관신청·가격 관리를 연결한 Electron 기반 KBPM v2 개발 기록입니다.',
}

export default function KbpmPage() {
  const project = projects.find((item) => item.slug === 'kbpm')!
  const nextProject = projects.find((item) => item.slug === 'game-promotion')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      <figure>
        <Image
          src="/images/kbpm-v2-screenshot-2.png"
          alt="실제 KREAM 페이지와 작업 패널을 함께 배치한 KBPM v2 화면"
          width={2864}
          height={1924}
          sizes="(max-width: 896px) 100vw, 848px"
          className="h-auto w-full rounded-xl"
        />
        <figcaption className="mt-3 text-xs text-muted-foreground">KBPM v2 · Electron 데스크톱 작업공간</figcaption>
      </figure>

      <section aria-labelledby="kbpm-structure-title">
        <h2 id="kbpm-structure-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">앱 구조</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
          <p>현재 v2는 Electron 창 안에 React 작업 패널과 실제 KREAM 브라우저 탭을 배치합니다. TypeScript 실행 계층은 검증된 IPC로 화면과 연결되고, 작업·승인 조건·실행 기록은 로컬 SQLite에 저장합니다.</p>
          <p>보관판매와 일반판매 탭은 로그인 세션을 공유하면서 각 페이지를 유지합니다. 실행 전에 조건을 다시 확인하고 결과가 불확실하면 자동으로 재제출하지 않습니다.</p>
          <p>이전 SwiftUI·WinUI 3·Python 구현은 별도 프로젝트로 남아 있습니다. 현재 화면은 새 Electron 구현입니다.</p>
        </div>

        <details className="group mt-8 border-t border-border pt-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
            이전 v1 화면 · 2025년
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-5 pb-2 pt-4 sm:grid-cols-2">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <Image src="/images/kbpm-v1-screenshot-1.png" alt="KBPM v1 상품 검색 결과 화면" fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">2025년 v1 · 상품 검색</figcaption>
            </figure>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <Image src="/images/kbpm-v1-screenshot-2.png" alt="KBPM v1 보관판매 대기열 화면" fill className="object-cover" />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">2025년 v1 · 보관판매 대기열</figcaption>
            </figure>
          </div>
        </details>
      </section>
    </ProjectLayout>
  )
}
