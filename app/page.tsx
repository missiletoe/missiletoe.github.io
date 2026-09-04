import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  GitBranch,
  Terminal,
  Layers,
  ArrowUpRight,
} from 'lucide-react'
import { projects, allTechChoices, operatingPrinciples } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TechTable } from '@/components/tech-table'
import { FlowDiagram } from '@/components/flow-diagram'
import { GithubIcon, LinkedinIcon, TistoryIcon, TechIcon } from '@/components/icons'

export default function HomePage() {
  const kbpm = projects.find((p) => p.slug === 'kbpm')!
  const mcp = projects.find((p) => p.slug === 'mcp-publishing')!
  const game = projects.find((p) => p.slug === 'game-promotion')!
  const ios = projects.find((p) => p.slug === 'ios-prototyping')!

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-20">
      {/* 1. Hero Section */}
      <section aria-labelledby="hero-title" className="flex flex-col gap-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Intro & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300 w-fit">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Max — Software Engineer</span>
            </div>

            <h1
              id="hero-title"
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.2]"
            >
              반복 업무를 실제 제품과
              <br />
              운영 흐름으로 바꿉니다.
            </h1>

            <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed">
              지난 1년 동안 데스크톱 자동화 도구, MCP 기반 배포 파이프라인, 게임 출시 홍보 포털, 온디바이스 iOS 앱 프로토타입까지 직접 설계하고 배포했습니다. 기술의 이름보다 <strong>어떤 제약을 풀었고 무엇을 운영했는지</strong>를 보여줍니다.
            </p>

            {/* Competency Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs sm:text-[13px] font-semibold text-foreground/90">
                🖥️ 데스크톱 엔지니어링
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs sm:text-[13px] font-semibold text-foreground/90">
                ⚡ 자동화 & 배포 파이프라인
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs sm:text-[13px] font-semibold text-foreground/90">
                🌐 풀스택 포털 & API
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs sm:text-[13px] font-semibold text-foreground/90">
                📱 온디바이스 네이티브 MVP
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="text-sm font-semibold h-11 px-5"
                aria-label="최근 작업 섹션으로 이동"
                data-analytics-step="hero_cta_works"
              >
                <a href="#works" className="flex items-center gap-2">
                  <span>작업 보기</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">최근 작업 목록으로 이동</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm font-semibold h-11 px-5"
                aria-label="Max의 GitHub 코드 보기 (새 창에서 열림)"
                data-analytics-step="hero_cta_github"
              >
                <a
                  href="https://github.com/missiletoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="h-4 w-4 text-foreground" aria-hidden="true" />
                  <span>GitHub</span>
                  <span className="sr-only">코드 저장소 방문</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: 5초 인지형 인터랙티브 목차 네비게이션 보드 */}
          <div className="lg:col-span-5 rounded-xl border border-border bg-card p-5 flex flex-col gap-3.5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                최근 1년 핵심 작업 목차 (4)
              </span>
              <span className="text-xs text-muted-foreground">클릭 시 바로 이동</span>
            </div>

            <nav aria-label="최근 작업 목차" className="flex flex-col gap-2.5">
              <a
                href="#case-kbpm"
                className="group rounded-lg border border-border/80 bg-background/60 p-3.5 hover:border-foreground/40 hover:bg-muted/40 transition-all flex flex-col gap-1.5"
                data-analytics-step="toc_kbpm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:underline">KBPM</span>
                    <span className="text-xs text-muted-foreground font-medium">데스크톱 자동화</span>
                  </div>
                  <Badge variant="shipped" className="text-[11px] py-0 px-2">v1.0.10 배포</Badge>
                </div>
                <p className="text-xs sm:text-[13px] text-foreground/80 leading-snug">
                  사용자 PC 환경별 런타임 실패를 극복한 크로스플랫폼 도구
                </p>
              </a>

              <a
                href="#case-mcp"
                className="group rounded-lg border border-border/80 bg-background/60 p-3.5 hover:border-foreground/40 hover:bg-muted/40 transition-all flex flex-col gap-1.5"
                data-analytics-step="toc_mcp"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:underline">MCP Publishing</span>
                    <span className="text-xs text-muted-foreground font-medium">업무 자동화</span>
                  </div>
                  <Badge variant="shipped" className="text-[11px] py-0 px-2">운영 중</Badge>
                </div>
                <p className="text-xs sm:text-[13px] text-foreground/80 leading-snug">
                  플레이리스트와 글을 실제 서비스 배포 단계까지 연결
                </p>
              </a>

              <a
                href="#case-game"
                className="group rounded-lg border border-border/80 bg-background/60 p-3.5 hover:border-foreground/40 hover:bg-muted/40 transition-all flex flex-col gap-1.5"
                data-analytics-step="toc_game"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:underline">Game Promotion</span>
                    <span className="text-xs text-muted-foreground font-medium">출시 파이프라인</span>
                  </div>
                  <Badge variant="shipped" className="text-[11px] py-0 px-2">오픈 완료</Badge>
                </div>
                <p className="text-xs sm:text-[13px] text-foreground/80 leading-snug">
                  영상·이미지·Next.js 공식 포털을 하나의 메시지로 제작
                </p>
              </a>

              <a
                href="#case-ios"
                className="group rounded-lg border border-border/80 bg-background/60 p-3.5 hover:border-foreground/40 hover:bg-muted/40 transition-all flex flex-col gap-1.5"
                data-analytics-step="toc_ios"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-foreground group-hover:underline">iOS Prototyping</span>
                    <span className="text-xs text-muted-foreground font-medium">네이티브 MVP</span>
                  </div>
                  <Badge variant="shipped" className="text-[11px] py-0 px-2">TestFlight</Badge>
                </div>
                <p className="text-xs sm:text-[13px] text-foreground/80 leading-snug">
                  아이디어를 온디바이스 Vision 기반 실제 실행 가능한 빌드로 전환
                </p>
              </a>
            </nav>
          </div>
        </div>
      </section>

      <Separator />

      {/* 2. Works Section */}
      <section id="works" aria-labelledby="works-title" className="flex flex-col gap-12">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Case Studies
          </div>
          <h2 id="works-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            최근 1년, 실제로 한 일
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            새로운 기술을 사용했다는 사실보다, 그 기술을 기존 작업에 어떻게 붙였고 실제 배포 이후 무엇이 달라졌는지를 기록했습니다.
          </p>
        </div>

        {/* Case 1: Flagship - KBPM */}
        <article
          id="case-kbpm"
          className="rounded-2xl border border-border bg-card p-6 sm:p-9 flex flex-col gap-7 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded bg-muted px-2.5 py-1 font-mono text-xs font-bold text-muted-foreground">
                대표 사례 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                KBPM: 데스크톱 자동화와 운영 신뢰성
              </h3>
            </div>
            <Badge variant="shipped" className="text-xs sm:text-[13px] font-semibold">{kbpm.statusLabel}</Badge>
          </div>

          {/* 3초 요약 칩 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs sm:text-[13px] font-semibold text-emerald-800 dark:text-emerald-300">
              ⚡ 핵심 성과: v1.0.10 크로스플랫폼 배포 (macOS dmg / Windows exe)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🎯 역할: 단독 설계 & 풀스택 개발
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🛡️ 신뢰성: Chrome for Testing 고정 & 2중 세션 유효성 검증
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <p className="font-semibold text-foreground">
              처음에는 반복 신청을 줄이기 위한 개인 스크립트였지만, 실제 배포 후에는 기능보다 <strong>사용자 PC 환경의 파편화</strong>가 더 큰 문제였습니다.
            </p>
            <p className="text-base text-foreground/85">
              CSR 페이지 로딩 타이밍, 브라우저 세션 차이, macOS Gatekeeper 및 Windows SmartScreen 경고를 해결하며 멈추지 않고 예측 가능하게 실행되는 제품으로 재설계했습니다.
            </p>
          </div>

          {/* 문제 - 해결 - 성과 3단 하이라이트 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>🛑 01. 마주친 제약</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>CSR 렌더링 타이밍 불일치 및 요소 탐색 실패</li>
                <li>헤드리스 환경과 브라우저 간 로그인 세션 유지 차이</li>
                <li>macOS Gatekeeper / Windows SmartScreen 경고</li>
                <li>사용자 PC 환경별 브라우저 및 Python 버전 파편화</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                <span>🛠️ 02. 해결과 아키텍처 판단</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>SwiftUI / WinUI 3 네이티브 셸 + Python child IPC</li>
                <li>헤드리스 Chrome for Testing 런타임 앱 내부 고정</li>
                <li>CDP Client Hints 동기화 및 2중 세션 검증 계약</li>
                <li>GitHub Actions 크로스 플랫폼 자동 빌드 파이프라인</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <span>🚀 03. 실제 결과와 운영 검증</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>v1.0.10 패키징 배포 완료 (dmg / exe 릴리스)</li>
                <li>보관판매 대기열 안정적 탐색 및 상태 머신 구축</li>
                <li>실제 변경 엔진은 QUEUE_RUN_NOT_IMPLEMENTED 차단</li>
                <li>실패 재현 로그 중심의 신뢰성 개편 진행</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Python" className="h-4 w-4 text-foreground/80" />
                <span>Python 3.14</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Selenium" className="h-4 w-4 text-foreground/80" />
                <span>Selenium</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Swift" className="h-4 w-4 text-foreground/80" />
                <span>SwiftUI / WinUI 3</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="GitHub Actions" className="h-4 w-4 text-foreground/80" />
                <span>GitHub Actions</span>
              </span>
            </div>

            <Button
              asChild
              className="text-sm font-semibold h-10 px-4"
              aria-label="KBPM 상세 사례 연구 보기"
              data-analytics-step="case_cta_kbpm"
            >
              <Link href="/work/kbpm" className="flex items-center gap-2">
                <span>상세 사례 연구 보기</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">KBPM 데스크톱 자동화</span>
              </Link>
            </Button>
          </div>
        </article>

        {/* Case 2: MCP Publishing */}
        <article
          id="case-mcp"
          className="rounded-2xl border border-border bg-card p-6 sm:p-9 flex flex-col gap-7 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded bg-muted px-2.5 py-1 font-mono text-xs font-bold text-muted-foreground">
                사례 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                MCP Publishing: 외부 서비스 연결과 업무 자동화
              </h3>
            </div>
            <Badge variant="shipped" className="text-xs sm:text-[13px] font-semibold">{mcp.statusLabel}</Badge>
          </div>

          {/* 3초 요약 칩 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs sm:text-[13px] font-semibold text-emerald-800 dark:text-emerald-300">
              ⚡ 핵심 성과: YouTube & Tistory 배포 파이프라인 실사용 운영
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🎯 역할: MCP 서버 2종 단독 설계 및 외부 서비스 연동
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🛡️ 신뢰성: OAuth 2.0 PKCE 토큰 갱신 & 휴먼 승인 게이트
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <p className="font-semibold text-foreground">
              콘텐츠는 만드는 것보다 <strong>조사, 정리, 메타데이터 입력, 업로드를 수동 반복하는 데</strong> 훨씬 많은 시간이 들었습니다.
            </p>
            <p className="text-base text-foreground/85">
              YouTube MCP와 Tistory MCP를 연결해 대화 안에서 콘텐츠를 가공하고 실제 외부 서비스의 배포 단계까지 자동화했습니다. 핵심은 AI 텍스트 생성이 아니라, 사람이 하던 복사·붙여넣기와 업로드 병목을 제거한 것입니다.
            </p>
          </div>

          {/* 문제 - 해결 - 성과 3단 하이라이트 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>🛑 01. 마주친 제약</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>생성 후 복사·붙여넣기 및 업로드 반복 소요 시간 과다</li>
                <li>외부 API(YouTube, Tistory) 권한 획득 및 토큰 만료</li>
                <li>무검증 자동 게시 시 잘못된 콘텐츠가 노출될 위험</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                <span>🛠️ 02. 해결과 아키텍처 판단</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>Model Context Protocol(MCP) 표준 서버 2종 직접 구축</li>
                <li>OAuth 2.0 PKCE 인증 및 로컬 보안 토큰 자동 갱신</li>
                <li>최종 배포 전 사람이 직접 확인하는 휴먼 게이트 도입</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <span>🚀 03. 실제 결과와 운영 검증</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>YouTube 플레이리스트 및 블로그 원클릭 배포 실사용</li>
                <li>업무 흐름 단절 없는 대화형 엔드투엔드 파이프라인</li>
                <li>불필요한 반복 수작업 소요 시간 대폭 단축</li>
              </ul>
            </div>
          </div>

          {/* Code-native Diagram */}
          <FlowDiagram
            title={mcp.diagram?.title}
            beforeTitle={mcp.diagram?.beforeTitle}
            before={mcp.diagram?.before || []}
            afterTitle={mcp.diagram?.afterTitle}
            after={mcp.diagram?.after || []}
            humanGateNote={mcp.diagram?.humanGateNote}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="TypeScript" className="h-4 w-4 text-foreground/80" />
                <span>TypeScript</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="MCP" className="h-4 w-4 text-foreground/80" />
                <span>@modelcontextprotocol/sdk</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="YouTube" className="h-4 w-4 text-foreground/80" />
                <span>YouTube Data API v3</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="OAuth" className="h-4 w-4 text-foreground/80" />
                <span>OAuth 2.0 PKCE</span>
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              className="text-sm font-semibold h-10 px-4"
              aria-label="MCP 배포 상세 사례 보기"
              data-analytics-step="case_cta_mcp"
            >
              <Link href="/work/mcp-publishing" className="flex items-center gap-2">
                <span>상세 사례 연구 보기</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">MCP 배포 파이프라인</span>
              </Link>
            </Button>
          </div>
        </article>

        {/* Case 3: Game Promotion */}
        <article
          id="case-game"
          className="rounded-2xl border border-border bg-card p-6 sm:p-9 flex flex-col gap-7 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded bg-muted px-2.5 py-1 font-mono text-xs font-bold text-muted-foreground">
                사례 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Game Promotion: 게임 홍보 영상·이미지·웹 포털 제작
              </h3>
            </div>
            <Badge variant="shipped" className="text-xs sm:text-[13px] font-semibold">{game.statusLabel}</Badge>
          </div>

          {/* 3초 요약 칩 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs sm:text-[13px] font-semibold text-emerald-800 dark:text-emerald-300">
              ⚡ 핵심 성과: Next.js 16 공식 포털 런칭 & 홍보 에셋 풀세트 제작
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🎯 역할: 웹 포털 풀스택 개발 & 홍보 미디어 자산 디렉팅
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🛡️ 운영: MSW 연동 실시간 Heartbeat 헬스체크 & 관리자 점검 시스템
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <p className="font-semibold text-foreground">
              게임 파일만 완성하지 않고, <strong>외부 사용자가 직관적으로 이해하고 플레이할 수 있는 접점까지</strong> 구축했습니다.
            </p>
            <p className="text-base text-foreground/85">
              에버리프 프로젝트에서는 홍보용 영상 스토리보드, 타이틀 카드, Next.js 기반 반응형 공식 포털을 함께 제작해 게임의 핵심 규칙과 분위기를 하나의 통일된 메시지로 전달했습니다. 또한 MapleStory Worlds 연동 Heartbeat 기반의 실시간 서버 상태 API와 관리자 점검 시스템까지 운영했습니다.
            </p>
          </div>

          {/* 문제 - 해결 - 성과 3단 하이라이트 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>🛑 01. 마주친 제약</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>게임 플레이 규칙과 세계관을 알릴 전용 랜딩 부재</li>
                <li>인게임 서버 상태와 웹 포털 간의 실시간 동기화 필요</li>
                <li>점검이나 서버 이상 발생 시 사용자 이탈 및 혼선</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                <span>🛠️ 02. 해결과 아키텍처 판단</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>Next.js 16 App Router 기반 반응형 공식 포털 구축</li>
                <li>Heartbeat 기반 MSW 인스턴스 헬스체크 API 구현</li>
                <li>GitHub OAuth 기반 관리자 긴급 점검 공지 시스템</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <span>🚀 03. 실제 결과와 운영 검증</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>카드/몬스터 도감, RSS 피드, 소셜 유입 랜딩 오픈</li>
                <li>영상 스토리보드, 인게임 캡처, 타이포그래피 카드 제작</li>
                <li>단절 없는 홍보-유입-게임 접속 파이프라인 완결</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Next.js" className="h-4 w-4 text-foreground/80" />
                <span>Next.js 16</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="React" className="h-4 w-4 text-foreground/80" />
                <span>React 19</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Tailwind CSS" className="h-4 w-4 text-foreground/80" />
                <span>Tailwind CSS 4</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Database" className="h-4 w-4 text-foreground/80" />
                <span>Upstash Redis</span>
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              className="text-sm font-semibold h-10 px-4"
              aria-label="게임 홍보 상세 사례 보기"
              data-analytics-step="case_cta_game"
            >
              <Link href="/work/game-promotion" className="flex items-center gap-2">
                <span>상세 사례 연구 보기</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">에버리프 게임 홍보 자산</span>
              </Link>
            </Button>
          </div>
        </article>

        {/* Case 4: iOS Prototyping */}
        <article
          id="case-ios"
          className="rounded-2xl border border-border bg-card p-6 sm:p-9 flex flex-col gap-7 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded bg-muted px-2.5 py-1 font-mono text-xs font-bold text-muted-foreground">
                사례 04
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                iOS Prototyping: 아이디어의 실행 가능한 네이티브 빌드 전환
              </h3>
            </div>
            <Badge variant="shipped" className="text-xs sm:text-[13px] font-semibold">{ios.statusLabel}</Badge>
          </div>

          {/* 3초 요약 칩 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs sm:text-[13px] font-semibold text-emerald-800 dark:text-emerald-300">
              ⚡ 핵심 성과: Apple TestFlight 1.1 (26) 실기기 내부 배포 완료
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🎯 역할: iOS 네이티브 MVP 단독 기획 & Swift 6 풀스택 개발
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs sm:text-[13px] font-semibold text-foreground/85">
              🛡️ 신뢰성: 100% 온디바이스 Vision OCR & 256개 테스트 무결점 통과
            </span>
          </div>

          <div className="flex flex-col gap-3 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <p className="font-semibold text-foreground">
              아이디어를 말이나 기획서로 남겨두지 않고, <strong>사용자가 즉각 만져볼 수 있는 실행 가능한 iOS 빌드로</strong> 바꿉니다.
            </p>
            <p className="text-base text-foreground/85">
              찍술(ZzikSool) 프로젝트에서는 술자리 사진 1~5장으로 마신 주류를 판별하고 캘린더에 기록하는 MVP를 구축했습니다. 외부 클라우드 전송 없이 기기 안에서 Apple Vision OCR 및 바코드를 분석하며, AI의 자의적 단정을 막고 사용자가 실제 마신 양을 확인할 때만 저장하는 엄격한 휴먼 게이트를 설계했습니다.
            </p>
          </div>

          {/* 문제 - 해결 - 성과 3단 하이라이트 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <span>🛑 01. 마주친 제약</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>음주 기록의 높은 번거로움 (주종·도수·라벨 수기 입력)</li>
                <li>사진 외부 클라우드 전송 시 개인정보 및 서버 비용</li>
                <li>AI OCR 오인식으로 인한 잘못된 데이터 누적 위험</li>
              </ul>
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                <span>🛠️ 02. 해결과 아키텍처 판단</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>100% 온디바이스 Apple Vision OCR & 바코드 파이프라인</li>
                <li>Swift 6 Strict Concurrency 기반 스레드 안전성 확보</li>
                <li>사용자 검증 후에만 저장되는 엄격한 휴먼 게이트 설계</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <span>🚀 03. 실제 결과와 운영 검증</span>
              </h4>
              <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-foreground/90 leading-relaxed">
                <li>TestFlight 1.1 (26) 실기기 내부 배포 완료</li>
                <li>Swift Testing 232개 + UI 20개 + 접근성 4개 무결점</li>
                <li>사진 외부 유출 없는 완전 무추적 프라이버시 보호</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Swift" className="h-4 w-4 text-foreground/80" />
                <span>Swift 6</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="SwiftUI" className="h-4 w-4 text-foreground/80" />
                <span>SwiftUI & SwiftData</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Apple Vision" className="h-4 w-4 text-foreground/80" />
                <span>Apple Vision</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 font-mono font-medium text-foreground/80">
                <TechIcon name="Xcode" className="h-4 w-4 text-foreground/80" />
                <span>TestFlight</span>
              </span>
            </div>

            <Button
              asChild
              variant="outline"
              className="text-sm font-semibold h-10 px-4"
              aria-label="iOS 프로토타이핑 상세 사례 보기"
              data-analytics-step="case_cta_ios"
            >
              <Link href="/work/ios-prototyping" className="flex items-center gap-2">
                <span>상세 사례 연구 보기</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">찍술 온디바이스 프로토타입</span>
              </Link>
            </Button>
          </div>
        </article>
      </section>

      <Separator />

      {/* 3. Operating Process Section */}
      <section id="process" aria-labelledby="process-title" className="flex flex-col gap-8">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Work Method
          </div>
          <h2 id="process-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            제가 반복해서 사용하는 작업 순서
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            추상적인 가치관 대신, 실제 프로젝트를 진행하며 검증된 7단계 작업 흐름입니다.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card shadow-sm">
          {operatingPrinciples.map((item) => (
            <div
              key={item.step}
              className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  {item.step}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              <Link
                href={`/work/${item.projectSlug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/80 hover:text-foreground shrink-0 border border-border rounded-md px-3 py-1.5 bg-muted/40 hover:bg-muted transition-colors"
              >
                <span>{item.linkedProject}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* 4. Tech Stack Section */}
      <section id="stack" aria-labelledby="stack-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Technical Rationale
          </div>
          <h2 id="stack-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            기술은 결과 옆에서 설명합니다
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            도구 로고나 숙련도 퍼센트 대신, 어떤 문제를 풀기 위해 기술을 선택했고 무엇을 배웠는지를 기록합니다.
          </p>
        </div>

        <TechTable items={allTechChoices} />
      </section>

      <Separator />

      {/* 5. Ongoing & Roadmap Section */}
      <section id="ongoing" aria-labelledby="ongoing-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Engineering Roadmap
          </div>
          <h2 id="ongoing-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            지금은 KBPM을 기능 추가가 아니라 신뢰성 중심으로 다시 설계하고 있습니다
          </h2>
          <p className="text-base text-foreground/80 max-w-3xl leading-relaxed">
            완료된 기능과 앞으로의 계획을 엄격히 구분하여 표시합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipped / Verified Column */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>현재 확인 및 구현 완료된 상태</span>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-foreground/90 leading-relaxed">
              <li>Selenium 기반 헤드리스 Chrome for Testing 세션 제어</li>
              <li>macOS dmg 및 Windows exe 크로스 플랫폼 바이너리 릴리스 (v1.0.10)</li>
              <li>GitHub Actions 기반 자동 빌드 및 배포 파이프라인</li>
              <li>KREAM 로그인 세션 이중 확인 및 보관판매 신청 대기열 구성</li>
              <li>Swift 6 & WinUI 3 네이티브 셸 아키텍처 및 자식 sidecar 프로세스 제어</li>
            </ul>
          </div>

          {/* Planned / Ongoing Column */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Sparkles className="h-5 w-5 text-muted-foreground" />
              <span>개편 중 또는 향후 계획</span>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2.5 text-sm text-foreground/85 leading-relaxed">
              <li>명시적인 상태 머신 기반의 실패 조건 격리 및 자동 복구</li>
              <li>작업별 이벤트 스트림 및 환경별 오류 재현성 로그 체계</li>
              <li>완료·실패 알림 및 프로세스 수명주기 텔레메트리</li>
              <li>가격과 거래량 시계열 데이터 시각화 차트 검토</li>
              <li>임시 예외 처리 제거 및 런타임 의존성 고정</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* 6. Contact & About Summary */}
      <section aria-labelledby="contact-title" className="flex flex-col gap-6 py-6">
        <div className="flex flex-col gap-2.5">
          <h2 id="contact-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            소개와 연결
          </h2>
          <p className="text-base sm:text-lg text-foreground/85 max-w-3xl leading-relaxed">
            새로운 도구를 사용했다는 사실보다, 그 도구를 기존 작업 흐름에 붙여 실제 결과를 만든 경험을 중요하게 봅니다. 개발이 끝난 뒤에도 배포, 운영, 설명과 홍보가 남는다는 전제로 작업합니다.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            asChild
            variant="outline"
            className="text-sm font-semibold h-10 px-4"
            aria-label="Max의 GitHub 프로필 방문 (새 창에서 열림)"
            data-analytics-step="contact_github"
          >
            <a
              href="https://github.com/missiletoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubIcon className="h-4 w-4 text-foreground" aria-hidden="true" />
              <span>GitHub</span>
              <span className="sr-only">프로필 방문</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="text-sm font-semibold h-10 px-4"
            aria-label="Max의 LinkedIn 프로필 방문 (새 창에서 열림)"
            data-analytics-step="contact_linkedin"
          >
            <a
              href="https://www.linkedin.com/in/yong-suk-heo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <LinkedinIcon className="h-4 w-4 text-foreground" aria-hidden="true" />
              <span>LinkedIn</span>
              <span className="sr-only">프로필 방문</span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="text-sm font-semibold h-10 px-4"
            aria-label="Max의 Tistory 블로그 방문 (새 창에서 열림)"
            data-analytics-step="contact_tistory"
          >
            <a
              href="https://max-dev.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <TistoryIcon className="h-4 w-4 text-foreground" aria-hidden="true" />
              <span>Tistory</span>
              <span className="sr-only">기술 블로그 방문</span>
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
