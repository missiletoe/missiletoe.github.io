import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'YouTube & Tistory MCP 자동 배포 파이프라인 | Max',
  description:
    'Model Context Protocol(MCP)을 이용해 플레이리스트와 기술 블로그 글을 실제 배포 단계까지 연결한 업무 자동화 사례 연구입니다.',
}

export default function McpPublishingPage() {
  const project = projects.find((p) => p.slug === 'mcp-publishing')!
  const nextProject = projects.find((p) => p.slug === 'game-promotion')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      {/* Detailed Technical Deep Dive */}
      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-base font-bold">[세부 구현]</span>
          <span>YouTube MCP와 Tistory MCP의 배포 파이프라인</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube MCP Column */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-foreground">
              01. YouTube MCP (Plan / Apply)
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm sm:text-[15px] text-foreground/90 leading-relaxed">
              <li>
                <strong>스냅샷 생성:</strong> 재생목록의 현재 순서와 고유 ID를 조회하여 기준 스냅샷을 생성합니다.
              </li>
              <li>
                <strong>Plan 단계:</strong> 변경할 항목의 diff와 예상 YouTube Data API Quota(단위)를 계산해 사용자에게 제시합니다.
              </li>
              <li>
                <strong>Apply 단계:</strong> 사용자 승인 후 실제 API를 순차 호출하고 실행 저널(Journal)을 기록합니다.
              </li>
              <li>
                <strong>Undo 지원:</strong> 문제 발생 시 저널에 기록된 이전 스냅샷을 기반으로 역계획(Inverse Plan)을 생성해 롤백합니다.
              </li>
            </ul>
          </div>

          {/* Tistory MCP Column */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-foreground">
              02. Tistory MCP (마크다운 → CDM)
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm sm:text-[15px] text-foreground/90 leading-relaxed">
              <li>
                <strong>구조화된 초안:</strong> 에이전트 대화 내에서 글의 구조와 코드를 정리합니다.
              </li>
              <li>
                <strong>CDM 렌더링:</strong> Tistory 에디터 전용 포맷(코드 블록 구문 강조, 이미지 태그, 수식)으로 자동 변환합니다.
              </li>
              <li>
                <strong>원클릭 발행:</strong> 카테고리 ID, 태그, 공개/비공개 설정을 포함해 Tistory API로 직접 발행합니다.
              </li>
              <li>
                <strong>발행 URL 검증:</strong> 실제 배포된 웹 주소의 정상 응답을 확인하고 완료를 알립니다.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
