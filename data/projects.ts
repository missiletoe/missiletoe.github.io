import { Project, TechChoice } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'kbpm',
    title: 'KBPM: 데스크톱 자동화와 운영 신뢰성',
    shortTitle: 'KBPM',
    period: '2025.10 – 2026.08',
    status: 'shipped',
    statusLabel: 'v1.0.10 배포 완료 · v2 네이티브 개편 진행 중',
    category: '데스크톱 자동화 · 시스템 신뢰성',
    heroKicker: '사용자 환경의 실패를 겪고 제품 구조를 다시 고친 데스크톱 자동화 도구',
    summary:
      'KREAM 보관판매 신청 및 재고 관리를 위해 시작된 데스크톱 자동화 도구입니다. 개인 스크립트에서 출발해 CSR 타이밍, 로그인 세션 유지, macOS/Windows 패키징 및 보안 경고를 겪으며 배포 가능한 데스크톱 제품으로 고도화했습니다.',
    role: [
      '단독 설계 및 풀스택 개발',
      'macOS/Windows 크로스 플랫폼 배포 및 GitHub Actions 파이프라인 구축',
      '헤드리스 브라우저 세션 제어 아키텍처 및 세션 검증 계약 수립',
    ],
    context: [
      'KREAM 보관판매 신청 및 재고 관리 작업의 번거로운 반복을 줄이기 위해 시작된 프로젝트입니다.',
      '개인 로컬 환경에서 잘 동작하던 자동화 코드가 다른 사용자의 PC에 배포되자 수많은 사용자 환경 차이와 보안 제약에 직면했습니다.',
      '단순히 기능을 추가하는 것보다, 다양한 OS와 브라우저 환경에서 멈추지 않고 예측 가능하게 실행되는 제품 신뢰성이 핵심 과제가 되었습니다.',
    ],
    constraints: [
      'CSR(클라이언트 사이드 렌더링) 페이지 구조로 인한 요소 렌더링 및 동적 로딩 타이밍 불일치',
      'KREAM 로그인 세션 유지 및 헤드리스 환경과 실제 브라우저 렌더링 차이',
      '사용자 운영체제(macOS / Windows)별 환경 격리 및 바이너리 패키징 차이',
      'macOS Gatekeeper, Apple Notarization, Windows SmartScreen 등 배포 신뢰성 및 보안 경고',
      '브라우저 프로세스 고립 및 비정상 종료 시 좀비 프로세스 누수 방지',
    ],
    decisions: [
      'v1 배포본: Python + Selenium + PySide6 GUI + PyInstaller를 결합하여 macOS(.dmg) 및 Windows(.exe)로 패키징하고 GitHub Actions로 자동 릴리스',
      'v2 아키텍처 개편: macOS SwiftUI, Windows WinUI 3 네이티브 셸이 Python sidecar를 자식 프로세스(child process)로 소유·감시하는 IPC 구조 채택',
      '브라우저 분리 정책: 백그라운드 작업은 항상 헤드리스 Chrome for Testing(CDP User Agent 및 client hints 동기화)으로 실행하고, 사용자가 필요한 로그인 화면과 상품 검색(/search/stock)만 제한된 헤드풀 창으로 실행',
      '이중 세션 검증: 로그인 창 완료 후 헤드리스 드라이버가 "/my" 엔드포인트를 다시 확인하여 세션의 유효성을 확정한 뒤에만 다음 단계로 전환',
      '런타임 잠금: Stable Chrome for Testing과 매칭 ChromeDriver를 앱 내부에 고정하여 브라우저 자동 업데이트로 인한 파괴적 중단 방지',
    ],
    outputs: [
      'KBPM v1.0.10 바이너리 배포 (macOS Apple Silicon/Intel dmg, Windows exe)',
      'GitHub Actions 기반 크로스 플랫폼 자동 빌드 및 릴리스 배포 파이프라인',
      '결정론적 상태 머신 기반의 KREAM 로그인 확인 및 보관판매 신청 대기열 구성',
      'Xcode 및 .NET SDK exact 버전 고정 기반의 결정론적 로컬 빌드 환경',
    ],
    limitations: [
      '실제 KREAM 상태를 변경하는 queue.run.start 프로덕션 실행 엔진은 안전성 보장을 위해 QUEUE_RUN_NOT_IMPLEMENTED로 의도적 차단 상태',
      '외부 사이트(KREAM)의 비공개 UI/구조 변경 시 셀렉터 동기화가 필요한 의존성',
    ],
    nextSteps: [
      '신뢰성 중심 상태 머신 및 작업별 이벤트 로깅 체계 고도화',
      '에러 발생 시 사용자 환경의 문제를 신속히 재현할 수 있는 진단 로그 포맷 개선',
      '가격 및 거래량 데이터 시각화 차트 추가 검토',
      '오래된 레거시 자동화 코드 완전 정리 및 상태 전환 보증',
    ],
    stack: [
      {
        name: 'Python 3.14',
        reason: '자동화 로직 및 백그라운드 데이터 처리 sidecar 구현',
        constraintOrLearning: '단독 GUI보다 네이티브 셸과 연동할 때 OS 통합성이 크게 향상됨',
      },
      {
        name: 'Selenium & Chrome for Testing',
        reason: 'CSR 동적 렌더링 페이지 탐색 및 브라우저 세션 정밀 제어',
        constraintOrLearning: 'CDP UA와 client hints를 모두 일치시켜야 봇 탐지 및 불일치 회피 가능',
      },
      {
        name: 'Swift / SwiftUI & WinUI 3',
        reason: 'macOS와 Windows 플랫폼별 네이티브 셸 UI 및 프로세스 라이프사이클 관리',
        constraintOrLearning: '각 OS의 네이티브 툴체인(Xcode SDK 27, .NET 10 SDK)을 엄격히 고정해 빌드 재현성 확보',
      },
      {
        name: 'PyInstaller & uv',
        reason: '의존성 없는 단일 바이너리 데스크톱 패키지 생성 및 가상환경 격리',
        constraintOrLearning: '동결된 환경에서 번들된 ChromeDriver와 바이너리 크기 최적화 필요',
      },
      {
        name: 'GitHub Actions',
        reason: '태그 푸시 시 크로스 플랫폼 바이너리 자동 빌드 및 릴리스 배포',
        constraintOrLearning: 'macOS 및 Windows 매트릭스 빌드로 배포 아티팩트 자동 검증',
      },
    ],
    evidence: [
      {
        type: 'repository',
        label: 'GitHub 저장소 (KBPM 배포)',
        href: 'https://github.com/missiletoe/KBPM',
        verified: true,
      },
      {
        type: 'repository',
        label: 'GitHub 코드 저장소 (kream_inventory)',
        href: 'https://github.com/missiletoe/kream_inventory',
        verified: true,
      },
      {
        type: 'article',
        label: 'Tistory 기술 블로그 (KBPM 관련 기록)',
        href: 'https://max-dev.tistory.com/17',
        verified: true,
      },
    ],
  },
  {
    slug: 'mcp-publishing',
    title: 'YouTube & Tistory MCP 자동 배포 파이프라인',
    shortTitle: 'MCP Publishing',
    period: '2026.01 – 2026.08',
    status: 'shipped',
    statusLabel: '배포 및 운영 완료',
    category: '외부 서비스 연동 · 업무 자동화',
    heroKicker: '복사와 업로드를 반복하던 작업을 실제 배포 흐름으로 연결',
    summary:
      '플레이리스트 정리와 기술 블로그 발행에서 반복되던 수동 복사·붙여넣기 업무를 Model Context Protocol(MCP) 기반의 승인형 배포 파이프라인으로 전환했습니다. 단순한 AI 텍스트 생성이 아니라 사람의 Plan 검토를 거쳐 실제 API로 배포되는 안전한 자동화를 구축했습니다.',
    role: [
      'TypeScript 기반 YouTube MCP stdio 서버 개발',
      'Tistory API / WebMCP 연동 및 CDM 마크다운 변환기 구현',
      'Plan/Apply 및 롤백 안전성 검증 설계',
    ],
    context: [
      '플레이리스트 구성과 기술 블로그 게시물 발행은 한 번 작성하는 것보다 조사, 정리, 메타데이터 입력, 웹 콘솔 복사·붙여넣기, 발행 상태 확인을 반복하는 데 더 많은 시간이 소요되었습니다.',
      '단순히 AI에게 텍스트를 생성하게 하는 것을 넘어, 사람이 대화 안에서 검토하고 승인하면 실제 외부 서비스 API를 통해 안전하게 발행되는 엔드투엔드 흐름이 필요했습니다.',
    ],
    constraints: [
      'YouTube Data API v3의 엄격한 일일 할당량(Quota) 제한 (기본 10,000 units)',
      '재생목록 일괄 변경 시 누락·중복 발생 시 복구가 어려운 문제',
      '데스크톱 로컬 환경에서의 안전한 OAuth 2.0 PKCE 인증 및 토큰 보안 보관',
      'Tistory의 고유 에디터 CDM 포맷 및 이미지 블록 렌더링 규격 호환',
    ],
    decisions: [
      'YouTube MCP: TypeScript와 @modelcontextprotocol/sdk를 사용하여 Data API v3 및 Live Streaming API를 다루는 stdio 서버 구현',
      'Plan / Apply 워크플로: 재생목록 변경 시 즉시 수정하지 않고 snapshot -> plan -> 사용자 승인 -> apply -> journal 기록 순으로 안전 실행하며, 문제 시 inverse plan으로 롤백 지원',
      'OAuth 루프백: 127.0.0.1 로컬 포트와 PKCE를 결합한 데스크톱 OAuth 플로우를 구축하고, 토큰은 환경 변수나 tool 인자로 전달하지 않고 로컬 보안 파일에만 격리',
      'Tistory MCP: 마크다운 초안을 Tistory CDM 문법으로 자동 변환하고 태그/카테고리/슬러그를 함께 전달해 즉시 발행 및 URL 검증',
    ],
    outputs: [
      'YouTube Data API v3 전면 지원 로컬 TypeScript stdio MCP 서버',
      '재생목록 스냅샷, diff 계산, Quota 추정, 일괄 편집 및 역계획 롤백 엔진',
      'Tistory 마크다운/CDM 변환 및 원클릭 기술 블로그 포스팅 파이프라인',
    ],
    limitations: [
      'YouTube Music 전용 라이브러리나 Google 비공개 API(시청 기록 등)는 공식 Data API 범위 밖으로 지원 불가',
      'Google OAuth 앱이 Testing 모드일 경우 테스트 유저 인증 토큰 7일 만료 제약',
    ],
    nextSteps: [
      'Medium 및 Substack 등 멀티 플랫폼 동시 발행 어댑터 확장',
      '발행 후 트래픽 및 독자 반응 지표 피드백 루프 자동화',
    ],
    stack: [
      {
        name: 'TypeScript & Node.js 20+',
        reason: '타입 안전한 MCP SDK 구현 및 stdio IPC 프로토콜 준수',
        constraintOrLearning: 'stdio 통신 시 stdout을 프로토콜 전용으로 격리하고 진단 로그는 stderr로 분리',
      },
      {
        name: '@modelcontextprotocol/sdk',
        reason: 'Claude / Codex / ChatGPT 등 다양한 AI 에이전트 표준 도구 인터페이스',
        constraintOrLearning: '도구 입출력의 JSON Schema를 엄격히 정의해야 에이전트 오작동 방지 가능',
      },
      {
        name: 'Google YouTube Data API v3',
        reason: '동영상 및 재생목록 메타데이터 CRUD 연동',
        constraintOrLearning: '호출 전 예상 Quota를 계산하여 일일 한도 초과 방지',
      },
      {
        name: 'OAuth 2.0 PKCE & Loopback',
        reason: '로컬 환경에서 안전한 Google 사용자 인증 및 토큰 격리',
        constraintOrLearning: '설치형 데스크톱 앱의 표준 권장 인증 규격 준수',
      },
    ],
    evidence: [
      {
        type: 'article',
        label: 'Tistory WebMCP 소개 포스트',
        href: 'https://max-dev.tistory.com/',
        verified: true,
      },
    ],
    diagram: {
      title: '콘텐츠 배포 작업 흐름 비교',
      beforeTitle: '자동화 이전 (수동 반복 방식)',
      before: [
        '자료 조사 및 초안 작성',
        '별도 문서/노트에 수동 정리',
        '브라우저로 YouTube Studio / Tistory 접속',
        '제목·설명·태그 등 메타데이터 복사·붙여넣기',
        '수동 업로드 및 레이아웃 깨짐 확인',
        '수정 필요 시 콘솔에서 다시 수동 편집',
      ],
      afterTitle: '자동화 이후 (MCP 파이프라인)',
      after: [
        '대화 컨텍스트 안에서 자료 조사 및 구조화',
        'MCP가 API Quota 및 Diff를 포함한 Plan 생성',
        '사람이 Plan 및 변경 목록 검토 후 명시적 승인',
        'MCP stdio 서버가 API 직접 호출로 일괄 배포',
        '발행 결과 URL 및 스냅샷 즉시 검증 (필요 시 Undo)',
      ],
      humanGateNote:
        '모든 변경은 AI의 임의 실행이 아닌 사람의 Plan 검토 및 승인을 거쳐서만 배포됩니다.',
    },
  },
  {
    slug: 'game-promotion',
    title: '에버리프(EverLeaf) 홍보 자산 및 공식 포털 제작',
    shortTitle: 'Game Promotion',
    period: '2026.06 – 2026.08',
    status: 'shipped',
    statusLabel: '배포 및 운영 완료',
    category: '출시 인프라 · 홍보 파이프라인',
    heroKicker: '게임 파일 완성에서 멈추지 않고, 유저가 이해하고 유입되는 전체 출시 과정 구축',
    summary:
      '게임 실행 파일 제작에 머무르지 않고, 스토리보드 기반 영상·타이틀 그래픽·Next.js 기반 공식 웹 포털과 실시간 서비스 상태 모니터링을 결합해 하나의 출시 흐름으로 완성했습니다.',
    role: [
      '공식 웹 포털 풀스택 개발 (Next.js App Router, Tailwind CSS)',
      'MSW 인스턴스 Heartbeat 실시간 상태 텔레메트리 파이프라인 설계',
      '씬(Scene)별 스토리보드 수립, 게임플레이 캡처, 타이틀 그래픽 디자인',
    ],
    context: [
      'MapleStory Worlds 기반 횡스크롤 덱빌딩 게임 "에버리프(EverLeaf)" 프로젝트에서, 게임 빌드만으로는 유저에게 독특한 규칙과 세계관을 온전히 전달하기 어려웠습니다.',
      '플레이어가 게임을 시작하기 전에 분위기를 체감할 수 있는 홍보 미디어와 함께, 공지사항·카드 도감·실시간 서버 상태를 확인할 수 있는 공식 웹 인프라가 필요했습니다.',
    ],
    constraints: [
      'MapleStory Worlds(MSW)의 내부 인스턴스 수명주기와 웹 서버 간의 비동기 통신 격리',
      '소셜 플랫폼(YouTube, Discord, X, Instagram) 유입 채널별 최적화된 랜딩 경험 제공',
      '서버 점검 및 긴급 공지 시 관리자 권한의 안전한 제어 필요',
    ],
    decisions: [
      '공식 포털 풀스택 구축: Next.js 16 App Router, React 19, Tailwind CSS 4를 적용하고 전사/도적 카드 도감, 몬스터 도감, RSS 피드 뉴스 시스템 구현',
      'Heartbeat 상태 파이프라인: 출시된 MSW 인스턴스가 전용 Bearer 토큰으로 300초 주기의 Heartbeat를 전송하고, Upstash Redis의 원자적 Lua 스크립트로 활성 인스턴스 및 상태를 집계하여 /api/status v2로 제공',
      '관리자 점검 시스템: GitHub OAuth를 연동하여 특정 관리자(GitHub ID 116016950)만 접근할 수 있는 /admin/status 화면에서 점검 선언 및 공지 등록 구현',
      '통일된 시각 자산: 클래식 MMORPG 감성과 레트로 야구 타이포그래피를 결합한 타이틀 카드 및 씬별 스토리보드 기반 게임플레이 영상 제작',
    ],
    outputs: [
      '에버리프 반응형 공식 웹사이트 (도감, 뉴스, 가이드, 상태 모니터링)',
      'MSW 런타임 연동 실시간 서버 헬스체크 및 관리자 점검 시스템',
      '씬 1~4 단계별 스토리보드 및 게임플레이 홍보 영상 자산',
    ],
    limitations: [
      'MSW 공식 비공개 API(월드 관리 콘솔)를 직접 제어할 수 없어 인스턴스 전송 기반 Heartbeat로 상태 감지',
      '로컬 개발 환경에서는 실제 Redis 연결이 없을 경우 의도적으로 unknown 상태로 안전 폴백',
    ],
    nextSteps: [
      '게임 내 경매장 실시간 시세 조회 및 랭킹 시스템 웹 연동',
      '커뮤니티 덱 시뮬레이터 빌더 기능 확장',
    ],
    stack: [
      {
        name: 'Next.js 16 (App Router)',
        reason: '고성능 정적 도감 페이지 생성 및 상태 API 라우트 통합',
        constraintOrLearning: '정적 콘텐츠와 동적 상태 엔드포인트를 깔끔하게 분리',
      },
      {
        name: 'React 19 & TypeScript',
        reason: '타입 안전한 컴포넌트 구조 및 최신 리액트 런타임 활용',
        constraintOrLearning: '데이터 모델(도감, 몬스터, 뉴스)의 컴파일 타임 무결성 검증',
      },
      {
        name: 'Tailwind CSS 4',
        reason: '클래식 레트로 감성과 모던 다크 테마를 아우르는 전역 디자인 토큰',
        constraintOrLearning: '일관된 타이포그래피와 반응형 레이아웃 구성',
      },
      {
        name: 'Upstash Redis',
        reason: 'MSW 인스턴스 Heartbeat의 원자적 상태 집계 및 점검 플래그 관리',
        constraintOrLearning: 'Lua 스크립트를 통한 단일 트랜잭션 상태 갱신',
      },
      {
        name: 'GitHub OAuth',
        reason: '별도 비밀번호 DB 없이 관리자 권한을 안전하게 인증',
        constraintOrLearning: '숫자 ID 기반 화이트리스트로 관리자 권한 엄격 제한',
      },
    ],
    evidence: [
      {
        type: 'repository',
        label: 'GitHub 저장소 (MSW_EverLeaf)',
        href: 'https://github.com/missiletoe/MSW_EverLeaf',
        verified: true,
      },
    ],
  },
  {
    slug: 'ios-prototyping',
    title: '찍술(ZzikSool) 온디바이스 음주 기록 iOS 프로토타입',
    shortTitle: 'iOS Prototyping',
    period: '2026.07 – 2026.09',
    status: 'shipped',
    statusLabel: 'TestFlight 1.1 내부 빌드 배포 완료',
    category: '네이티브 앱 개발 · 온디바이스 AI',
    heroKicker: '아이디어를 긴 설명으로 남겨두지 않고 실행 가능한 Apple 네이티브 빌드로 전환',
    summary:
      '술자리 사진 1~5장의 라벨과 바코드를 기기 안에서 직접 분석하고 캘린더에 기록하는 온디바이스 음주 기록 iOS MVP를 Swift 6와 Apple Vision으로 구축하고 TestFlight로 배포했습니다. 환각 없는 온디바이스 비전 처리와 엄격한 휴먼 인 더 루프 기록을 실현했습니다.',
    role: [
      'iOS 네이티브 앱 아키텍처 및 전면 개발 (Swift 6, SwiftUI, SwiftData)',
      'Apple Vision 기반 2,560px 씬 및 다중 바코드 공간 분석 파이프라인 구현',
      'TestFlight 1.1 (26) 자동 서명 빌드 배포 및 230+개 테스트 슈트 작성',
    ],
    context: [
      '한국 술자리의 맥주·소주·막걸리 병은 표면 결로(물방울), 곡면 왜곡, 조명 반사, 라벨 가림 현상이 빈번하여 범용 클라우드 OCR만으로는 정확한 식별이 어려웠습니다.',
      '민감한 개인 사진을 외부 서버로 전송하지 않고 온디바이스에서 즉각 분석하며, AI가 수량을 자의적으로 단정하지 않고 사람이 실제 마신 양을 명시적으로 확인한 뒤 저장하는 안전한 MVP가 필요했습니다.',
    ],
    constraints: [
      '외부 서버/클라우드 API 없는 100% 온디바이스 프라이버시 원칙 준수',
      '저조도, 곡면 라벨, 난반사 환경에서의 OCR 오인식 및 환각(Hallucination) 방지',
      '사진에 찍힌 용기 수가 개인 음용량과 일치하지 않는 술자리 특성 반영',
      'Swift 6 Strict Concurrency 환경에서의 멀티스레드 비전 분석 안정성',
    ],
    decisions: [
      '온디바이스 비전 파이프라인: Apple Vision 프레임워크를 활용해 2,560px 고해상도 씬과 타일 단위에서 한글/영문 OCR 및 5종 바코드(EAN-13, EAN-8, QR 등)를 병렬 분석',
      '보수적 카탈로그 매칭: 검증된 11개 SKU에 대해 exactSKU, familyOnly, unknown으로 분류하고, 증거가 상충되거나 부족할 경우 자의적으로 확정하지 않고 더 약한 단계로 안전 기권(Abstention)',
      '명시적 휴먼 게이트: 사진 분석 결과는 "관찰 추정"일 뿐이며, 사용자가 실제 마신 양과 제품을 직접 확인하고 선택하기 전에는 DB 저장 버튼을 비활성화',
      '단일 트랜잭션 일괄 저장: SwiftData를 통해 여러 주류 기록을 원자적으로 저장하고, 취소 시 중간 이미지 캐시를 안전하게 보상 삭제',
    ],
    outputs: [
      'Apple Developer TestFlight 1.1 (26) 내부 빌드 배포 완료',
      'Swift Testing 232개 (38 suites), UI 테스트 20개, 접근성 감사 4개 무결점 통과',
      'App Shortcuts, Siri, Action Button 연동 및 한국어/영어 String Catalog 지원',
    ],
    limitations: [
      '현재 공용 타깃에는 Core ML 커스텀 분류 모델이 탑재되지 않았으며 Vision 공간 리졸버 기반으로 동작',
      'App Store 일반 공개 전 단계이며 현재 TestFlight 내부 테스터 대상 검증 진행',
    ],
    nextSteps: [
      '한국 주류 전용 온디바이스 경량 Core ML 분류기 학습 및 통합',
      '다양한 용기 잔량(Fill level) 정밀 추정 모델 고도화',
    ],
    stack: [
      {
        name: 'Swift 6 & SwiftUI',
        reason: '최신 Swift 언어 기능과 반응형 선언적 UI 구축',
        constraintOrLearning: 'Strict Concurrency 기반 안전한 비동기 상태 격리',
      },
      {
        name: 'Apple Vision Framework',
        reason: '온디바이스 한글/영문 OCR 및 바코드(EAN/QR) 고속 감지',
        constraintOrLearning: '클라우드 비용 및 지연 시간 없이 100% 기기 내에서 처리',
      },
      {
        name: 'SwiftData & Observation',
        reason: '로컬 퍼시스턴스 트랜잭션 관리 및 상태 반응형 바인딩',
        constraintOrLearning: '원자적 트랜잭션으로 부분 실패 시 롤백 보장',
      },
      {
        name: 'AppIntents & PhotosUI',
        reason: '시스템 액션 버튼, 단축어 및 순서가 보장된 1~5장 다중 사진 선택',
        constraintOrLearning: '시스템 네이티브 인터페이스와 완벽한 일체감 제공',
      },
      {
        name: 'Xcode Automatic Distribution',
        reason: 'CI 환경에서 TestFlight 내부 릴리스 자동 서명 및 배포',
        constraintOrLearning: '빌드 번호 및 프로비저닝 프로파일 검증 자동화',
      },
    ],
    evidence: [
      {
        type: 'image',
        label: 'ZzikSool 앱 아이콘 및 헤더 로고 자산',
        image: '/images/zziksool-icon.png',
        caption: 'ZzikSool 네이티브 앱 아이콘 및 그래픽 에셋',
        verified: true,
      },
    ],
  },
]

export const allTechChoices: TechChoice[] = [
  {
    name: 'Python',
    reason: 'KBPM의 실행 로직, 브라우저 제어 및 백그라운드 데이터 처리 sidecar',
    constraintOrLearning:
      'Selenium 및 Chrome for Testing과의 호환성을 위해 런타임을 고정하고 네이티브 셸과 IPC로 통신하도록 설계',
  },
  {
    name: 'Selenium & Chrome for Testing',
    reason: 'CSR 페이지 렌더링 동기화 및 정밀한 로그인 세션 제어',
    constraintOrLearning:
      'CDP 헤더 및 Client Hints를 JavaScript userAgentData와 정확히 일치시켜 세션 끊김을 방지',
  },
  {
    name: 'Swift / SwiftUI',
    reason: '찍술(ZzikSool) iOS 네이티브 앱 및 KBPM macOS 셸 UI',
    constraintOrLearning:
      'Swift 6 Strict Concurrency와 Apple Vision을 결합해 네트워크 없이 온디바이스에서 즉각적인 비전 처리',
  },
  {
    name: 'TypeScript & Node.js',
    reason: 'YouTube MCP stdio 서버 및 본 포트폴리오 웹사이트 구축',
    constraintOrLearning:
      'MCP stdio 통신 규격을 준수하고 정적 타입 검증을 통해 런타임 오류 방지',
  },
  {
    name: 'Next.js 15 & Tailwind CSS',
    reason: '본 포트폴리오 및 에버리프(EverLeaf) 공식 웹 포털',
    constraintOrLearning:
      'App Router와 정적 내보내기(Static Export)를 활용해 빠르고 안정적인 GitHub Pages / Firebase Hosting 배포 달성',
  },
  {
    name: 'GitHub Actions',
    reason: '크로스 플랫폼 바이너리 릴리스, CI 검증 및 자동 배포 파이프라인',
    constraintOrLearning:
      'macOS/Windows 빌드 매트릭스 검사로 릴리스 배포의 안정성 확보',
  },
]

export const operatingPrinciples = [
  {
    step: '01',
    title: '사람이 반복하는 작업을 관찰한다',
    description:
      '자동화나 제품을 만들기 전, 사람이 수동으로 어떤 단계를 거치며 어디서 병목과 피로가 발생하는지 파악합니다.',
    linkedProject: 'MCP Publishing',
    projectSlug: 'mcp-publishing',
  },
  {
    step: '02',
    title: '실제 실패 조건과 예외를 먼저 수집한다',
    description:
      'CSR 지연, 로그인 세션 만료, 난반사, 결로 현상 등 실제 사용자 환경에서 발생하는 실패 요인을 사전에 리스트업합니다.',
    linkedProject: 'KBPM',
    projectSlug: 'kbpm',
  },
  {
    step: '03',
    title: '가장 작은 동작 가능한 흐름을 만든다',
    description:
      '모든 기능을 한 번에 만들기보다, 핵심 입력과 출력이 끝까지 연결되는 MVP를 최우선으로 검증합니다.',
    linkedProject: 'iOS Prototyping (찍술)',
    projectSlug: 'ios-prototyping',
  },
  {
    step: '04',
    title: '다른 환경에서 실행해 본다',
    description:
      '개발자의 PC를 벗어나 macOS, Windows, 실기기 iPhone 등 다양한 실행 환경에서 예외를 확인합니다.',
    linkedProject: 'KBPM',
    projectSlug: 'kbpm',
  },
  {
    step: '05',
    title: '배포와 업데이트 방법을 함께 만든다',
    description:
      '코드를 작성하는 것으로 끝내지 않고 GitHub Actions 릴리스, TestFlight, GitHub Pages 등 실제 전달 경로를 구축합니다.',
    linkedProject: 'KBPM & 포트폴리오',
    projectSlug: 'kbpm',
  },
  {
    step: '06',
    title: '사용자가 이해할 설명과 홍보물까지 준비한다',
    description:
      '소프트웨어만 완성해 두지 않고, 스토리보드 기반 영상, 타이틀 그래픽, 공식 웹페이지로 제품의 가치를 온전히 전달합니다.',
    linkedProject: 'Game Promotion (에버리프)',
    projectSlug: 'game-promotion',
  },
  {
    step: '07',
    title: '실패 기록을 다음 구조 개편에 반영한다',
    description:
      '임시 땜질식 코드에 기대지 않고, 런타임 실패와 운영 한계를 다음 버전의 네이티브 아키텍처 재설계에 반영합니다.',
    linkedProject: 'KBPM v2',
    projectSlug: 'kbpm',
  },
]
