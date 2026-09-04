import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'KBPM: 데스크톱 자동화와 운영 신뢰성 | Max',
  description:
    'KREAM 보관판매 신청 및 재고 관리를 위해 시작된 데스크톱 자동화 도구 KBPM의 운영 및 아키텍처 사례 연구입니다.',
}

export default function KbpmPage() {
  const project = projects.find((p) => p.slug === 'kbpm')!
  const nextProject = projects.find((p) => p.slug === 'mcp-publishing')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      {/* Architecture Deep Dive Section */}
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[심층 분석]</span>
          <span>네이티브 셸과 Python Sidecar 자식 프로세스 아키텍처</span>
        </h3>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-4 text-base text-foreground/90 leading-relaxed">
          <p>
            초기 v1 버전은 Python과 PySide6 GUI, PyInstaller로 하나의 바이너리를 만들어 배포했습니다. 하지만 OS별 윈도우 매니저와의 충돌, 사용자 환경의 Python/C++ 런타임 누락, 시스템 트레이 및 메뉴바 통합의 한계가 있었습니다.
          </p>
          <p>
            v2 아키텍처에서는 이를 전면 개편하여 <strong>macOS는 SwiftUI, Windows는 WinUI 3</strong>의 네이티브 셸이 UI와 프로세스 라이프사이클을 직접 소유하고, 자동화 엔진인 Python sidecar를 격리된 <strong>child process</strong>로 실행하여 표준 입출력(IPC)으로 통신하는 구조를 채택했습니다.
          </p>

          <div className="rounded-lg border border-border/80 bg-muted/40 p-4 text-sm font-mono flex flex-col gap-2">
            <div className="text-muted-foreground font-semibold">// 브라우저 세션 제어 및 격리 원칙</div>
            <div>1. 백그라운드 브라우저: 항상 Headless Chrome for Testing 실행</div>
            <div>2. 브라우저 식별 정보: CDP userAgentData & client hints 완벽 일치</div>
            <div>3. 사용자 로그인 창: 허용된 /login, /my, /search/stock 경로만 제한 실행</div>
            <div>4. 세션 완료 확인: visible 창 닫힘 후 headless driver가 /my 세션 재검증</div>
          </div>
        </div>

        {/* Real Screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/1.png"
                alt="KBPM 실행 화면 및 인터페이스"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">
              KBPM 데스크톱 애플리케이션 실행 화면
            </p>
            <p className="text-xs text-muted-foreground">
              재고 조회 및 보관판매 신청 대기열 인터페이스
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/2.png"
                alt="KBPM 설정 및 로그인 세션 확인 화면"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">
              KBPM 브라우저 세션 및 환경 설정
            </p>
            <p className="text-xs text-muted-foreground">
              사용자 계정 정보 비저장 및 안전한 세션 검증 흐름
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
