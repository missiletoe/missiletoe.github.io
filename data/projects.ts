import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    slug: 'kbpm',
    title: 'KBPM: KREAM 네이티브 거래 작업공간',
    shortTitle: 'KBPM',
    period: '2025.05 – 현재',
    status: 'ongoing',
    statusLabel: 'v2 개발 중',
    category: '네이티브 데스크톱 · 거래 안전성',
    preview: 'SwiftUI·WinUI 3 화면과 Python 실행 계층을 연결한 KREAM 데스크톱 앱을 개발하고 있습니다. 실제 거래 실행은 비활성 상태입니다.',
    summary:
      '기존 보관판매 도구를 네이티브 데스크톱 앱으로 재설계하고 있습니다. SwiftUI·WinUI 3 화면과 Python 실행 계층을 연결해 상품 검색, 계정 조회와 비용 미리보기를 구현했습니다.',
    recentUpdate: {
      date: '2026-09-21',
      summary: '첫 출시 범위와 요구사항·검증 순서를 다시 정리했습니다. 이 작업은 계획·문서 정비이며, 최종 거래 제출은 계속 비활성 상태입니다.',
    },
    role: [
      '제품 설계, macOS·Windows 네이티브 UI 및 Python 엔진 개발',
      '상품·계정 데이터를 네이티브 화면으로 전달하는 계약과 프로세스 수명주기 설계',
      '거래 미리보기, 승인 조건, 실행 차단 및 로컬 검증 체계 구축',
    ],
    context: [
      '보관판매 신청과 재고 확인을 반복하는 수고를 줄이기 위해 Python 기반 데스크톱 도구로 시작했습니다.',
      '사용자 PC마다 다른 브라우저 세션, 운영체제, 패키징 제약을 겪으며 기능뿐 아니라 조회 결과의 정확성과 거래 안전성을 제품의 중심으로 옮겼습니다.',
    ],
    constraints: [
      '로그인 성공과 실제 계정 데이터 조회·화면 표시의 성공을 각각 확인해야 하는 외부 서비스 연동',
      '입찰·보관판매 등 실제 거래는 비용과 상태 변경을 수반하므로 불확실한 결과를 자동 재시도할 수 없음',
      'macOS와 Windows의 UI·프로세스·서명 환경 차이',
    ],
    decisions: [
      'macOS SwiftUI와 Windows WinUI 3 셸이 Python sidecar를 자식 프로세스로 소유하고 IPC로 조회 결과와 상태를 전달하도록 구성',
      'KREAM API 조회와 브라우저 세션을 연결하되, 상품·옵션·계정 근거가 부족하면 거래 단계로 진행하지 않도록 설계',
      '조회·수수료 미리보기와 실제 제출을 분리하고, 현재 버전에서는 최종 거래 worker를 비활성 상태로 유지',
      'GitHub Actions를 통한 자동 배포 대신, 소스 버전과 연결된 로컬 검증 기록으로 공통·macOS·Windows·실서비스·서명 상태를 구분',
    ],
    outputs: [
      '상품 검색, 계정 내역, 관심 상품과 보관판매·입찰 비용 미리보기 화면 구현',
      'SwiftUI·WinUI 3 네이티브 셸과 Python sidecar 연결',
      '9월 8일 macOS 목록·페이지 이동·창 수명주기 확인 기록',
    ],
    limitations: [
      '최종 거래 제출은 비활성 상태입니다. macOS 확인 기록은 Windows 실행·실제 거래·공개 배포 검증을 대신하지 않습니다.',
      '외부 서비스의 로그인·데이터 구조가 바뀌면 조회 계약과 화면 표시를 다시 확인해야 합니다.',
    ],
    nextSteps: [
      '실제 Windows와 KREAM 주요 흐름의 검증 범위를 넓히고, 최종 제출 활성화에 필요한 근거를 확보',
      '서명·공증·공개 배포 결과를 기능 구현과 별도로 확인',
    ],
    stack: [
      { name: 'Python', reason: '조회·거래 제어 엔진과 네이티브 셸을 연결하는 sidecar', constraintOrLearning: '프로세스 종료와 불완전한 조회 결과를 UI 상태에 반영' },
      { name: 'Swift / SwiftUI & WinUI 3', reason: 'macOS·Windows의 네이티브 화면과 창 수명주기 관리', constraintOrLearning: '공통 계약을 사용하되 OS별 실행 증거는 따로 확인' },
      { name: 'KREAM API & Browser Session', reason: '상품·계정 조회와 로그인 세션 연계', constraintOrLearning: '세션 보유만으로 조회나 거래 성공을 판정하지 않음' },
      { name: 'Local Validation', reason: '현재 소스 버전과 연결된 기능·실행·배포 검증 기록', constraintOrLearning: '실행하지 않은 플랫폼과 거래는 미검증 상태로 유지' },
    ],
    evidence: [
      { type: 'article', label: 'KBPM 프로젝트 소개와 개발 소식', href: 'https://max-dev.tistory.com/17', verified: true },
    ],
  },
  {
    slug: 'mcp-publishing',
    title: 'YouTube MCP와 Tistory 글쓰기 흐름',
    shortTitle: 'YouTube MCP',
    period: '2026.08 – 현재',
    status: 'ongoing',
    statusLabel: '로컬 도구 운영',
    category: '외부 서비스 연동 · 업무 자동화',
    preview: 'YouTube 플레이리스트 편집을 위한 MCP 서버를 만들고, Tistory의 기존 오픈소스 MCP를 글 작성에 연결했습니다.',
    summary:
      'TypeScript로 YouTube 재생목록을 편집하는 로컬 MCP 서버를 만들었습니다. Tistory 글 작성에는 기존 오픈소스 MCP를 연결해 사용했습니다.',
    recentUpdate: {
      date: '2026-09-23',
      summary: '실제 플레이리스트 정리에 사용했습니다. API 할당량이 소진된 뒤 남은 변경은 YouTube 화면에서 마무리하고, 부분 반영 상태를 다시 확인하는 흐름을 기록했습니다.',
    },
    role: [
      'TypeScript 기반 YouTube MCP stdio 서버 설계·개발',
      '기존 오픈소스 Tistory MCP 연결과 개인 문체·Markdown 작성 흐름 구성',
      '계획 확인, 중복·충돌 검사와 실패 뒤 현재 상태를 다시 확인하는 절차 설계',
    ],
    context: [
      '플레이리스트 구성과 기술 블로그 게시물 발행은 한 번 작성하는 것보다 조사, 정리, 메타데이터 입력, 웹 콘솔 복사·붙여넣기, 발행 상태 확인을 반복하는 데 더 많은 시간이 소요되었습니다.',
      '단순히 AI에게 텍스트를 생성하게 하는 것을 넘어, 사람이 대화 안에서 검토하고 승인하면 실제 외부 서비스 API를 통해 안전하게 발행되는 엔드투엔드 흐름이 필요했습니다.',
    ],
    constraints: [
      'YouTube Data API 할당량과 외부 인증 제약',
      '재생목록 일괄 변경 시 누락·중복 발생 시 복구가 어려운 문제',
      '데스크톱 로컬 환경에서의 안전한 OAuth 2.0 PKCE 인증 및 토큰 보안 보관',
      'Tistory 도구는 직접 구현한 MCP 서버가 아니라 공개된 기존 MCP를 연결해 사용',
    ],
    decisions: [
      'YouTube MCP: TypeScript와 @modelcontextprotocol/sdk를 사용하여 Data API v3 및 Live Streaming API를 다루는 stdio 서버 구현',
      'Plan / Apply 워크플로: snapshot -> 변경 목록·할당량 확인 -> 사용자 승인 -> apply -> 작업 기록 순으로 진행하고, 실패 뒤 현재 목록을 다시 조회해 반영 상태를 재조정',
      'OAuth 루프백: 127.0.0.1 로컬 포트와 PKCE를 결합한 데스크톱 OAuth 플로우를 구축하고, 토큰은 환경 변수나 tool 인자로 전달하지 않고 로컬 보안 파일에만 격리',
      'Tistory 글쓰기: 공개 저장소 kim-se-hee/tistory-mcp를 개인 문체, Markdown, 이미지·출처 확인 절차에 맞춰 연결',
    ],
    outputs: [
      'YouTube 동영상·재생목록 작업을 연결한 로컬 TypeScript stdio MCP 서버',
      '재생목록 스냅샷·diff·Quota 추정·승인 실행·작업 기록과 부분 실패 뒤 상태 재조회',
      'Tistory 개인화 흐름에서 초안 작성·수정과 발행 전 검토 수행',
    ],
    limitations: [
      'API 할당량 소진과 부분 적용 시 현재 목록을 다시 확인하고, 남은 작업은 직접 마무리합니다.',
      '외부 서비스의 인증·할당량·에디터 변경에 따라 실행 흐름을 다시 확인해야 합니다.',
    ],
    nextSteps: [
      '실제 운영에서 확인된 복구·재개 조건을 YouTube MCP 문서와 공개 예제에 반영',
      'Tistory 발행은 기존 MCP 도구의 제공 범위와 직접 만든 서버의 범위를 명확히 유지',
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
        label: 'Tistory MCP를 활용해 발행한 기술 글',
        href: 'https://max-dev.tistory.com/28',
        verified: true,
      },
      {
        type: 'repository',
        label: 'Tistory MCP 원본 저장소 (기존 오픈소스)',
        href: 'https://github.com/kim-se-hee/tistory-mcp',
        verified: true,
      },
    ],
  },
  {
    slug: 'game-promotion',
    title: '에버리프: 공식 웹사이트와 EverWiki CMS',
    shortTitle: 'EverLeaf',
    period: '2026.06 – 현재',
    status: 'ongoing',
    statusLabel: '공식 사이트 운영',
    category: '풀스택 웹 · 콘텐츠 운영',
    preview: '게임 공식 사이트를 Vercel에 배포하고, 위키·공지 콘텐츠를 관리하는 CMS를 확장했습니다.',
    summary:
      'MapleStory Worlds 게임 에버리프의 공식 사이트와 EverWiki CMS를 만들었습니다. 게임 내 UI는 동료와 함께 개선했습니다.',
    recentUpdate: {
      date: '2026-09-18',
      summary: 'Notion 문서 114개와 표지 이미지 106개를 CMS에 반영하고 불완전한 자료는 검토 대기 상태로 남겼습니다. 게임 UI 병합에도 동료와 함께 참여했습니다.',
    },
    role: [
      'Next.js 공식 웹사이트와 EverWiki CMS 설계·개발',
      'GitHub 로그인, 편집 권한, 콘텐츠 개정 이력과 발행 흐름 구현',
      '게임플레이 미디어 구성, 반응형 랜딩과 소셜 유입 경험 개선',
    ],
    context: [
      '게임의 규칙과 분위기를 플레이 전에 이해할 수 있도록 공식 소개 페이지와 홍보 미디어를 함께 구성했습니다.',
      '도감과 가이드가 늘면서 코드 수정 없이 운영자가 콘텐츠를 관리하고, 검토 전 초안이 공개되지 않는 편집 흐름이 필요해졌습니다.',
    ],
    constraints: [
      '편집 중인 초안과 현재 공개된 문서를 분리하고 동시 편집으로 인한 덮어쓰기를 방지해야 함',
      '외부 문서·이미지를 가져올 때 출처와 첨부 파일을 확인하고 발행 전에 검토해야 함',
      '모바일·저속 네트워크·모션 감소 설정에서 영상이 탐색을 방해하지 않아야 함',
    ],
    decisions: [
      'Next.js 16과 Supabase로 EverWiki·공지·게임 데이터를 관리하는 통합 CMS 구성',
      'GitHub 계정에 역할별 편집 권한을 부여하고 초안·발행 개정본을 분리해 발행 시점에 공개 데이터를 갱신',
      '가져온 콘텐츠는 운영자가 검토한 뒤 반영하고 동시 발행 충돌을 검사',
      '랜딩 영상과 갤러리를 화면·접근성 조건에 맞게 조정하고 일반 링크 클릭 분석 추가',
      '이전 Heartbeat·Redis 상태 모니터링을 종료하고 관련 경로는 410 Gone으로 정리',
    ],
    outputs: [
      '공개 EverWiki와 게임 소개·뉴스를 연결한 공식 웹사이트',
      '역할별 권한, 초안·발행본 분리, 개정 이력과 발행 충돌 방지를 포함한 CMS',
      '반응형 히어로·갤러리와 개인정보를 최소화한 링크 클릭 분석',
      'MapleStory Worlds 인벤토리·상태창, HUD, 팝업 순서, 직업 선택 피드백과 단축키·카드 상세 UX 공동 개선',
      'Notion 문서·표지 이관 시 누락 자료는 자동 발행하지 않고 검토 대기 처리',
    ],
    limitations: [
      'CMS 코드는 병합했고 공개 페이지 응답도 확인했습니다. 관리자 계정의 편집·발행 전 과정과 외부 문서 이관은 별도 확인이 필요합니다.',
      '종료한 상태 모니터링은 현재 제공 기능에 포함하지 않습니다.',
    ],
    nextSteps: [
      '검토를 거친 문서 이관과 운영자 편집·발행 흐름의 실제 사용 검증',
      '도감·가이드 콘텐츠의 출처와 개정 이력 보완',
    ],
    stack: [
      { name: 'Next.js 16 & React 19', reason: '공식 사이트와 CMS의 공개·관리자 화면 구성', constraintOrLearning: '공개 콘텐츠와 편집 중인 상태를 분리' },
      { name: 'Supabase / PostgreSQL', reason: '문서·개정 이력·역할과 발행 상태 저장', constraintOrLearning: '권한 검사와 원자적 발행으로 일관성 유지' },
      { name: 'GitHub OAuth', reason: '운영자 로그인과 역할별 편집 권한', constraintOrLearning: '로그인 성공과 콘텐츠 수정 권한을 별도로 확인' },
      { name: 'Tailwind CSS & Vercel Analytics', reason: '반응형 레이아웃과 링크 사용 흐름 확인', constraintOrLearning: '모션·네트워크 조건과 개인정보 최소화 고려' },
    ],
    evidence: [
      { type: 'demo', label: 'EverWiki 공개 사이트', href: 'https://project-dol-everleaf.vercel.app/everwiki', verified: true },
      { type: 'demo', label: '최종 공개 게임 웹사이트', href: 'https://project-dol-everleaf.vercel.app/', verified: true },
      { type: 'article', label: 'MapleStory Worlds UI 공동 작업 기록 (Notion)', href: 'https://scandalous-sunfish-d36.notion.site/ui-3de545198ca080acb09fdb9655cc34ea?pvs=25', verified: true },
    ],
  },
  {
    slug: 'ios-prototyping',
    title: '찍술: iOS와 앱인토스로 이어지는 음주 기록',
    shortTitle: '찍술',
    period: '2026.07 – 현재',
    status: 'ongoing',
    statusLabel: '미니앱 출시 준비',
    category: 'iOS 네이티브 · 앱인토스 미니앱',
    preview: 'iOS 기록 앱과 별도의 앱인토스 미니앱을 개발 중입니다. Toss 실기기 검증과 심사는 진행 전입니다.',
    summary:
      'SwiftUI 음주 기록 앱과 별도의 앱인토스 미니앱을 개발하고 있습니다. 미니앱의 촬영·후보 확인·기록 저장 흐름과 .ait 패키지 생성을 마쳤고, Toss 실기기 검증과 심사는 진행 전입니다.',
    recentUpdate: {
      date: '2026-09-20',
      summary: '앱인토스 앱을 콘솔에 등록하고 별도 React 미니앱과 로컬 .ait 패키지를 만들었습니다. 심사·출시·실기기 테스트는 진행 전이며, iOS와 미니앱 간 기록 동기화도 구현하지 않았습니다.',
    },
    role: [
      'SwiftUI·SwiftData 기반 iOS 앱 설계와 개발',
      'Vision OCR·바코드 분석, 제품 후보 확인과 명시적 저장 흐름 구현',
      '한국어·영어 UI, 접근성 검사와 내부 TestFlight 배포 절차 구축',
      '앱인토스 미니앱 구조, Toss SDK 기기·저장소 연결과 .ait 패키징 구현',
    ],
    context: [
      '사진만으로는 실제로 마신 양을 알 수 없고, 곡면 라벨·반사·물방울 때문에 제품 식별도 불확실할 수 있습니다.',
      'iOS 앱은 제품 후보와 실제 마신 양을 확인해 기록하는 경험을 제공하고, 앱인토스 미니앱은 별도 저장소와 진입 흐름으로 먼저 배포할 계획입니다.',
    ],
    constraints: [
      '사진 속 제품·용기 수를 사용자의 실제 음용량으로 간주할 수 없음',
      '제품 카탈로그와 OCR 근거가 부족할 때 확정 대신 후보·미확인 상태를 유지해야 함',
      '시뮬레이터 검사와 실제 iPhone 카메라·Vision 검증의 차이',
    ],
    decisions: [
      'Vision OCR·바코드와 출처를 확인한 로컬 카탈로그로 제품 후보를 만들고 실제 음용량은 사용자가 입력하도록 구성',
      '촬영·사진 선택·직접 입력 모두 확인 화면을 거쳐 명시적으로 저장할 때만 기록 생성',
      '기본 브랜치의 한 장 입력과 개발 중인 1~5장 세션 인식을 구분하고, 다중 사진의 중복·불확실한 후보는 보수적으로 처리',
      'SwiftData 기록·수정·삭제·내보내기와 한국어·영어, Dynamic Type 접근성 흐름을 함께 검증',
      '웹뷰 미니앱은 React 18·Toss SDK를 사용하고 iOS 앱과 저장·로그인 경계를 분리; 두 앱 사이 동기화는 구현 범위에 포함하지 않음',
    ],
    outputs: [
      'Today·캘린더·제품 확인·직접 입력·내보내기를 연결한 iOS MVP',
      '기본 브랜치에 기록 경험, Xcode Canvas 프리뷰, App Intents와 워드마크 개선 병합',
      '별도 다중 사진 PR에 내부 TestFlight 1.1 (26) 업로드·처리·테스터 그룹 연결 기록',
      'Toss 앱 등록, 카메라·사진 선택·SDK 저장소 흐름과 zziksool.ait 로컬 산출물',
    ],
    limitations: [
      '앱인토스 미니앱은 Toss 실기기 검증, 콘솔 업로드, 심사 전입니다.',
      'iOS와 미니앱은 별도 저장소를 사용하며 기록 동기화는 구현되지 않았습니다.',
      '인식 기능은 기본 앱의 처리 범위와 별도 실험 기능, 미니앱의 로컬 OCR 범위를 나누어 보며 외부 인식 기능은 비활성 상태입니다.',
      '다중 사진 인식은 미병합 PR이며, 내부 TestFlight 업로드를 테스터의 설치·실행 성공이나 App Store 출시로 간주하지 않습니다.',
      '기존 실제 사진 검사는 독립된 정확도 평가셋이 아니므로 제품 식별 정확도 수치를 주장하지 않습니다.',
      '실제 기기 카메라·Apple Intelligence·iOS 18 동작은 별도 검증이 필요합니다.',
    ],
    nextSteps: [
      '실제 iPhone 설치·촬영 흐름과 독립된 촬영 세션에서 제품 식별·중복 처리 검증',
      '다중 사진 PR의 검증 결과를 정리한 뒤 기본 기록 흐름에 통합',
    ],
    stack: [
      { name: 'Swift 6 & SwiftUI', reason: 'iPhone 앱 UI와 비동기 분석 상태 관리', constraintOrLearning: '분석 취소·화면 전환·오래된 결과의 반영을 제어' },
      { name: 'Apple Vision', reason: '기기 내 한글·영문 라벨 OCR과 바코드 분석', constraintOrLearning: '사진 조건에 따른 오인식을 후보 확인 흐름으로 처리' },
      { name: 'SwiftData & Observation', reason: '로컬 기록과 캘린더 상태 관리', constraintOrLearning: '저장·삭제 실패 시 일관성과 복구 확인' },
      { name: 'AppIntents & PhotosUI', reason: '촬영·사진 선택·직접 입력으로 연결하는 시스템 진입점', constraintOrLearning: '단축어 진입이 기록 저장을 대신하지 않도록 분리' },
      { name: 'Xcode & TestFlight', reason: '빌드·접근성 검사와 내부 배포', constraintOrLearning: '업로드·처리·설치·실행 상태를 각각 기록' },
    ],
    evidence: [],
  },
]

export const additionalWork = [
  {
    date: '2026-09-21',
    title: 'Codex 개발 스킬 구성과 검증',
    summary:
      'Apple·웹·문서·미디어 작업에 필요한 개인 스킬을 정리하고, 중복 진입점을 줄였습니다. 당시 활성화된 21개 스킬과 프로젝트별 검색 흐름의 로컬 검증을 마쳤습니다.',
  },
  {
    date: '2026-09-16',
    title: '제품 문서와 실행 근거 정리',
    summary:
      'KBPM 개발 문서를 현재 구조, 작업 절차, 과거 기록으로 나누고, 코드에서 확인한 동작과 실제 플랫폼·거래 검증 상태를 구분했습니다.',
  },
  {
    date: '2026-09-05',
    title: 'Python 입문 수업 자료 제작',
    summary:
      '초보자용 60분 수업을 위해 Thonny 설치, print·input·변수, 오류 읽기와 작은 실습을 23장 슬라이드와 3쪽 활동지·PDF로 구성하고 렌더링을 확인했습니다.',
  },
] as const
