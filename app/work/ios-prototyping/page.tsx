import type { Metadata } from 'next'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: '찍술: iOS 앱과 앱인토스 미니앱 | Max',
  description: '찍술의 iOS 기록 앱과 별도 앱인토스 미니앱 개발 기록입니다.',
}

export default function IosPrototypingPage() {
  const project = projects.find((item) => item.slug === 'ios-prototyping')!
  return (
    <ProjectLayout project={project}>
      <section aria-labelledby="zziksool-ios-title">
        <h2 id="zziksool-ios-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">iOS 기록 앱</h2>
        <div className="mt-5 grid gap-6 sm:grid-cols-[112px_1fr] sm:items-start">
          <figure>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image src="/images/project-icons/zziksool.webp" alt="찍술 앱 아이콘" fill className="object-contain" />
            </div>
          </figure>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
            <p>SwiftUI와 Apple Vision으로 라벨·바코드를 분석합니다. 제품 후보와 실제 마신 양은 사용자가 확인한 뒤 저장하며, 기록은 Today와 캘린더에 표시됩니다.</p>
            <p>다중 사진 인식은 별도 개발 작업입니다. 내부 TestFlight 업로드 기록은 있으나 테스터 설치·실행과 실제 기기 촬영 검증은 남아 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="zziksool-toss-title">
        <h2 id="zziksool-toss-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">앱인토스 미니앱</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
          <p>기존 iOS 앱과 별도로 React·TypeScript·Vite 미니앱을 만들었습니다. Toss SDK의 카메라·사진 선택·저장소를 연결해 사진 선택, 후보 검토, 음용량 확인, 저장으로 이어집니다.</p>
          <p>콘솔에 앱을 등록하고 로컬 .ait 패키지를 생성했습니다. Toss 실기기 테스트와 심사·출시는 진행 전입니다. 두 앱의 기록은 동기화되지 않으며, 클라우드 이미지 분석은 비활성 상태입니다.</p>
        </div>
      </section>
    </ProjectLayout>
  )
}
