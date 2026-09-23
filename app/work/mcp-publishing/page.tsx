import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'YouTube MCP와 Tistory 글쓰기 흐름 | Max',
  description:
    '직접 개발한 YouTube MCP와 기존 오픈소스 Tistory MCP 활용을 구분해 소개하는 콘텐츠 업무 자동화 사례입니다.',
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
          <span>직접 구현한 서버와 연결해 사용한 MCP 도구</span>
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
                <strong>실패 뒤 재조정:</strong> 일부 API 요청이 실패하면 현재 플레이리스트를 다시 조회합니다. 할당량이 소진된 작업은 화면에서 마무리하고, 자동 완료로 표시하지 않습니다.
              </li>
            </ul>
          </div>

          {/* Tistory MCP Column */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7 flex flex-col gap-3.5">
            <h4 className="text-base font-bold text-foreground">
              02. Tistory 글쓰기 (기존 오픈소스 MCP 활용)
            </h4>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm sm:text-[15px] text-foreground/90 leading-relaxed">
              <li>
                <strong>구조화된 초안:</strong> 에이전트 대화 내에서 글의 구조와 코드를 정리합니다.
              </li>
              <li>
                <strong>도구 연결:</strong> 공개 저장소 <a className="underline underline-offset-4" href="https://github.com/kim-se-hee/tistory-mcp" target="_blank" rel="noopener noreferrer">kim-se-hee/tistory-mcp</a>를 사용했습니다. 이 MCP와 Tistory의 CDM 변환기를 직접 개발한 것은 아닙니다.
              </li>
              <li>
                <strong>개인화:</strong> 대화 맥락과 기존 글의 문체를 반영해 Markdown 초안을 작성하고, 출처·이미지를 확인하며 기존 글 수정 흐름을 구성했습니다.
              </li>
              <li>
                <strong>공개 글:</strong> <a className="underline underline-offset-4" href="https://max-dev.tistory.com/28" target="_blank" rel="noopener noreferrer">실제 발행한 기술 글</a>에서 결과를 볼 수 있습니다.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-muted/30 p-5 text-sm sm:text-base leading-relaxed text-foreground/85">
          <strong className="text-foreground">실행 경계 · </strong>
          YouTube MCP는 TypeScript로 직접 개발했습니다. 반면 Tistory는 기존 오픈소스 MCP를 개인화해 사용했습니다. 실제 플레이리스트 작업 중 API 할당량이 소진된 경우 남은 변경을 YouTube 화면에서 마무리하고, 현재 반영 상태를 다시 조회했습니다. 이 사례는 완전 무인 발행을 뜻하지 않습니다.
        </div>
      </section>
    </ProjectLayout>
  )
}
