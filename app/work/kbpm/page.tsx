import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'KBPM v2: KREAM 네이티브 데스크톱 작업 공간 | Max',
  description:
    'SwiftUI·WinUI 3와 Python sidecar로 KREAM 검색, 거래 내역, 관심 상품과 입찰 비용 미리보기를 연결하는 KBPM v2의 개발 기록입니다.',
}

export default function KbpmPage() {
  const project = projects.find((p) => p.slug === 'kbpm')!
  const nextProject = projects.find((p) => p.slug === 'mcp-publishing')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[심층 분석]</span>
          <span>거래를 한곳에서 확인하는 네이티브 작업 공간</span>
        </h3>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-4 text-base text-foreground/90 leading-relaxed">
          <p>
            보관판매 대기열로 시작한 KBPM은 현재 <strong>내 거래·입찰 관리·관심 상품·상품 검색·발매 정보</strong>를 연결하는 v2를 개발 중입니다. 검색과 거래 내역을 네이티브 화면에 표시하고, 상품·옵션을 선택해 보관판매 조건이나 구매·판매 입찰의 비용과 약관을 미리 확인할 수 있도록 확장했습니다.
          </p>
          <p>
            <strong>macOS는 SwiftUI, Windows는 WinUI 3</strong> 셸이 화면과 앱 수명을 담당합니다. 공용 로직은 자식 프로세스로 실행되는 <strong>Python sidecar</strong>에 두고, 표준 입출력의 JSON-RPC로 연결합니다. 브라우저 세션과 SQLite 데이터 관리를 두 플랫폼에서 공유하면서 운영체제별 화면과 메뉴 막대·트레이 동작을 분리했습니다.
          </p>

          <div className="rounded-lg border border-border/80 bg-muted/40 p-4 text-sm font-mono flex flex-col gap-2">
            <div className="text-muted-foreground font-semibold">// API 조회와 네이티브 표시의 연결</div>
            <div>1. 백그라운드는 Headless Chrome for Testing, 로그인·재인증만 사용자 창으로 실행</div>
            <div>2. KREAM API 응답을 검증하고 계정 자격증명은 브라우저 내부에 유지</div>
            <div>3. 값과 이미지를 현재 화면에 연결한 뒤 표시 확인 응답(ACK) 전송</div>
            <div>4. 20행 단위 페이지 조회와 탭 캐시, 계정·검색 변경 뒤 늦은 응답 폐기</div>
          </div>

          <p>
            2026년 9월 8일 개발 기록에는 macOS 실제 계정의 대표 거래 목록, 상품 검색, 스크롤 추가 조회와 탭 이동 후 상태 복원이 확인되어 있습니다. 창을 닫고 다시 열 때 같은 sidecar와 로그인 상태를 유지하는 동작도 확인했습니다. Python 회귀, macOS 테스트·빌드와 공용 C# 계약 검증은 별도로 기록했습니다.
          </p>
          <p>
            <strong>실제 입찰 생성·변경, 자동 감시 실행과 보관판매 최종 신청은 비활성 상태</strong>입니다. 입찰 미리보기의 실제 화면 조작, Windows 11 네이티브 실행, 서명·공증과 v2 공개 배포는 아직 검증을 마치지 않았습니다. KBPM은 KREAM과 무관한 독립·비공식 프로젝트입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/1.png"
                alt="2025년 KBPM v1의 상품 검색 결과 화면"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">
              v1 화면 기록 · 상품 검색
            </p>
            <p className="text-xs text-muted-foreground">
              2025년 배포 버전의 검색 결과입니다. 현재 개발 중인 v2 화면과는 다릅니다.
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3.5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/2.png"
                alt="2025년 KBPM v1의 보관판매 신청 대기열 화면"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">
              v1 화면 기록 · 보관판매 대기열
            </p>
            <p className="text-xs text-muted-foreground">
              초기 신청 대기열과 진행 상태 화면입니다. v2의 자동 실행은 아직 비활성 상태입니다.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
