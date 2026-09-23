import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: '찍술(ZzikSool): iOS 앱과 앱인토스 미니앱 | Max',
  description:
    'SwiftUI iOS 앱과 별도의 React 기반 앱인토스 미니앱을 개발하고, Toss 실기기·심사 전 상태를 구분한 사례입니다.',
}

export default function IosPrototypingPage() {
  const project = projects.find((p) => p.slug === 'ios-prototyping')!
  const nextProject = projects.find((p) => p.slug === 'kbpm')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      {/* Deep Dive on Vision and Swift 6 Architecture */}
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[아키텍처]</span>
          <span>온디바이스 비전 처리와 엄격한 휴먼 인 더 루프 설계</span>
        </h3>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-4 text-base text-foreground/90 leading-relaxed">
          <p>
            찍술(ZzikSool)은 사진을 외부 서버에 전송하지 않고 <strong>기기 안에서 라벨과 바코드를 분석</strong>하도록 설계했습니다. 사용자가 제품 후보를 수정하고 실제 마신 양을 입력한 뒤 저장하면 Today와 캘린더에 반영됩니다.
          </p>
          <p>
            기본 브랜치에는 한 장 입력과 기록 경험 개선을 반영했습니다. 별도 PR에서는 1~5장의 사진을 순서대로 분석하고, 사진 사이에 반복해서 등장하는 병과 불확실한 제품 후보를 보수적으로 처리하는 기능을 개발하고 있습니다. 사진 속 용기 수가 실제 음용량을 대신하지 않도록 <strong>사용자 확인 전 저장을 차단</strong>합니다.
          </p>

          <div className="rounded-lg border border-border/80 bg-muted/40 p-4 text-sm font-mono flex flex-col gap-2">
            <div className="text-muted-foreground font-semibold">구현과 검증 범위</div>
            <div>• 기본 브랜치: 기록·수정·삭제·내보내기, 한국어·영어 UI</div>
            <div>• 진행 중인 PR: 다중 사진 인식, 제품별 확인과 일괄 저장</div>
            <div>• 해당 PR 기록: 내부 TestFlight 1.1 (26) 업로드·처리·그룹 연결</div>
            <div>• 남은 확인: 테스터 설치·실행, 실제 촬영, 독립된 사진 평가</div>
          </div>
        </div>

        {/* Visual Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4 items-center justify-center">
            <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl bg-muted p-4">
              <Image
                src="/images/zziksool-icon.png"
                alt="찍술 네이티브 앱 아이콘"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-sm font-semibold text-foreground text-center mt-1">
              ZzikSool 네이티브 앱 아이콘
            </p>
            <p className="text-xs text-muted-foreground text-center">
              한국 주류(소주·맥주) 모티프의 벡터 아이콘 디자인
            </p>
          </div>

          <div className="flex flex-col gap-3.5 rounded-xl border border-border bg-muted/30 p-6 justify-center">
            <h4 className="text-base font-bold text-foreground">
              Apple 네이티브 프레임워크 선택 이유
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-foreground/90 leading-relaxed">
              <li>
                <strong>Vision Framework:</strong> 기기 내 라벨·바코드 분석과 근거에 따른 제품 후보 제시
              </li>
              <li>
                <strong>AppIntents & Shortcuts:</strong> 촬영·사진 선택·직접 입력 화면으로 연결하는 진입점. 실제 시스템 화면에서의 동작은 별도 확인
              </li>
              <li>
                <strong>SwiftData & Observation:</strong> 로컬 기록 변경과 Today·캘린더 상태 연결
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-foreground">앱인토스 선출시를 준비한 별도 미니앱</h3>
          <div className="mt-4 flex flex-col gap-4 text-sm sm:text-base leading-relaxed text-foreground/85">
            <p>
              기존 SwiftUI iOS 앱을 유지하면서, 앱인토스에서 먼저 기록을 시작하고 이후 네이티브 iOS 앱으로 확장하는 별도 React·TypeScript·Vite 미니앱을 만들었습니다. Toss SDK 카메라·사진 선택·저장소 API를 연결하고, 사진 선택 → 인식 후보 검토 → 실제 마신 양 확인 → 명시적 저장으로 이어지게 했습니다.
            </p>
            <p>
              앱 등록과 .ait 로컬 패키지 생성까지 진행했습니다. Toss 비공개 테스트 QR로 실기기 검증하거나 콘솔에 빌드를 업로드·심사 제출·출시하지는 않았습니다. iOS 앱과 미니앱은 저장소가 분리되어 있으며, 기록 동기화는 구현되지 않았습니다.
            </p>
            <p>
              클라우드 이미지 분석은 기본 비활성 상태입니다. 인식 후보나 사진 속 병 수를 확정 데이터로 취급하지 않고, 사용자가 직접 확인한 뒤에만 기록하도록 설계했습니다.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
