import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectLayout } from '@/components/project-layout'

export const metadata: Metadata = {
  title: 'YouTube MCP와 Tistory 글쓰기 흐름 | Max',
  description: '직접 개발한 YouTube MCP와 기존 오픈소스 Tistory MCP 활용을 소개합니다.',
}

export default function McpPublishingPage() {
  const project = projects.find((item) => item.slug === 'mcp-publishing')!
  const nextProject = projects.find((item) => item.slug === 'kbpm')!

  return (
    <ProjectLayout project={project} nextProject={nextProject}>
      <section aria-labelledby="mcp-detail-title">
        <h2 id="mcp-detail-title" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">구현 방식</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground">YouTube MCP</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
              재생목록의 현재 상태를 읽고 변경 목록과 API 할당량을 제시합니다. 사용자가 확인한 뒤 실행 결과를 기록합니다. 요청이 일부 실패하면 현재 목록을 다시 읽고, 할당량 소진으로 남은 작업은 YouTube 화면에서 마무리했습니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Tistory 글쓰기</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
              <a href="https://github.com/kim-se-hee/tistory-mcp" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">기존 오픈소스 MCP</a>를 연결해 글의 문체, Markdown, 이미지와 출처를 확인하며 초안을 작성·수정했습니다. 이 서버는 직접 개발한 코드에 포함하지 않습니다.
            </p>
          </div>
        </div>
      </section>
    </ProjectLayout>
  )
}
