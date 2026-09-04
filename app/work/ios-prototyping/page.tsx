import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: '찍술(ZzikSool) 온디바이스 음주 기록 iOS 프로토타입 | Max',
  description:
    'Swift 6와 Apple Vision을 활용해 클라우드 의존 없는 온디바이스 음주 기록 MVP를 구축하고 TestFlight로 배포한 사례 연구입니다.',
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
            찍술(ZzikSool)은 프라이버시 보호와 즉각적인 오프라인 사용성을 위해 <strong>100% 온디바이스 처리</strong>를 기본 원칙으로 설계했습니다.
          </p>
          <p>
            Apple Vision 프레임워크를 통해 2,560px 고해상도 이미지와 타일링 영역에서 한글/영문 라벨 OCR과 바코드를 감지합니다. 모델의 환각(Hallucination)으로 잘못된 음용량이 기록되는 문제를 방지하기 위해, AI 분석 결과는 '관찰 추정'으로만 제시하며 사용자가 실제 제품과 마신 양을 직접 확인하고 승인해야만 저장이 활성화되는 <strong>휴먼 게이트</strong>를 강제했습니다.
          </p>

          <div className="rounded-lg border border-border/80 bg-muted/40 p-4 text-sm font-mono flex flex-col gap-2">
            <div className="text-muted-foreground font-semibold">// Swift 6 및 엔지니어링 계약</div>
            <div>• Swift 6 Strict Concurrency 적용 (데이터 레이스 컴파일 타임 차단)</div>
            <div>• SwiftData 단일 트랜잭션 일괄 저장 및 취소 시 캐시 보상 삭제</div>
            <div>• Swift Testing 232개 (38개 suites) 및 UI/접근성 감사 0 failure</div>
            <div>• TestFlight 1.1 (26) 자동 서명 기반 내부 배포 완료</div>
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
                <strong>Vision Framework:</strong> 기기 내 하드웨어 가속을 활용한 제로 레이턴시 라벨/바코드 인식
              </li>
              <li>
                <strong>AppIntents & Shortcuts:</strong> 액션 버튼 및 시리(Siri)를 통한 '술 사진 찍기' 즉시 진입
              </li>
              <li>
                <strong>SwiftData & Observation:</strong> 최신 스위프트 반응형 모델링으로 부드러운 캘린더 인터랙션
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
