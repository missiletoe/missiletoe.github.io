import { Project, TechChoice } from '@/lib/types'

export const portfolioUpdatedAt = '2026-09-08'

export const projects: Project[] = [
  {
    slug: 'kbpm',
    title: 'KBPM: KREAM 네이티브 거래 작업공간',
    shortTitle: 'KBPM',
    period: '2025.10 – 현재',
    status: 'ongoing',
    statusLabel: 'v2 개발 중 · 최종 거래 실행 비활성',
    category: '네이티브 데스크톱 · 거래 안전성',
    heroKicker: '거래 정보를 읽고 비교하는 화면부터, 실행을 멈추는 조건까지 설계',
    summary:
      'KREAM 보관판매 자동화에서 시작해 거래·보유·발매 정보를 모아 보는 무료 네이티브 데스크톱 작업공간으로 발전시키고 있습니다. SwiftUI와 WinUI 3 화면에 Python sidecar를 연결하고, 상품 검색·계정 내역·관심 상품·수수료 미리보기를 구현했습니다.',
    recentUpdate: {
      date: '2026-09-08',
      summary: 'v2 거래 제어와 네이티브 조회 화면을 통합했습니다. macOS의 목록·페이지 이동·창 수명주기 검증 기록을 남기고, 최종 거래 실행은 비활성 상태로 유지했습니다.',
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
      '최종 거래 제출은 비활성 상태이며, 일부 macOS 확인 결과를 Windows·전체 KREAM 거래·공개 배포 검증으로 확대하지 않습니다.',
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
    title: 'YouTube & Tistory MCP 자동 배포 파이프라인',
    shortTitle: 'MCP Publishing',
    period: '2026.01 – 2026.08',
    status: 'shipped',
    statusLabel: '기존 콘텐츠 자동화 사례',
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
      'YouTube Data API 호출별 할당량과 외부 인증 제약',
      '재생목록 일괄 변경 시 누락·중복 발생 시 복구가 어려운 문제',
      '데스크톱 로컬 환경에서의 안전한 OAuth 2.0 PKCE 인증 및 토큰 보안 보관',
      'Tistory의 고유 에디터 CDM 포맷 및 이미지 블록 렌더링 규격 호환',
    ],
    decisions: [
      'YouTube MCP: TypeScript와 @modelcontextprotocol/sdk를 사용하여 Data API v3 및 Live Streaming API를 다루는 stdio 서버 구현',
      'Plan / Apply 워크플로: 재생목록 변경 시 즉시 수정하지 않고 snapshot -> plan -> 사용자 승인 -> apply -> journal 기록 순으로 안전 실행하며, 문제 시 inverse plan으로 롤백 지원',
      'OAuth 루프백: 127.0.0.1 로컬 포트와 PKCE를 결합한 데스크톱 OAuth 플로우를 구축하고, 토큰은 환경 변수나 tool 인자로 전달하지 않고 로컬 보안 파일에만 격리',
      'Tistory MCP: 마크다운 초안을 Tistory CDM 문법으로 자동 변환하고 태그/카테고리/슬러그를 함께 전달해 발행 결과 확인',
    ],
    outputs: [
      'YouTube 동영상·재생목록 작업을 연결한 로컬 TypeScript stdio MCP 서버',
      '재생목록 스냅샷, diff 계산, Quota 추정, 일괄 편집 및 역계획 롤백 엔진',
      'Tistory 마크다운/CDM 변환 및 원클릭 기술 블로그 포스팅 파이프라인',
    ],
    limitations: [
      'YouTube Music 전용 라이브러리나 Google 비공개 API(시청 기록 등)는 공식 Data API 범위 밖으로 지원 불가',
      '외부 서비스의 인증·할당량·에디터 변경에 따라 실행 흐름을 다시 확인해야 합니다.',
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
        label: 'Max 기술 블로그',
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
        'API 결과와 공개 화면을 각각 확인 (필요 시 Undo)',
      ],
      humanGateNote:
        '모든 변경은 AI의 임의 실행이 아닌 사람의 Plan 검토 및 승인을 거쳐서만 배포됩니다.',
    },
  },
  {
    slug: 'game-promotion',
    title: '에버리프: 공식 웹사이트와 EverWiki CMS',
    shortTitle: 'EverLeaf',
    period: '2026.06 – 현재',
    status: 'ongoing',
    statusLabel: '공식 사이트 공개 · EverWiki CMS 확장',
    category: '풀스택 웹 · 콘텐츠 운영',
    heroKicker: '게임을 소개하는 랜딩에서 운영자가 직접 고치는 도감까지',
    summary:
      'MapleStory Worlds 게임 에버리프의 소개·게임플레이 미디어·도감을 담은 공식 웹사이트를 만들었습니다. 최근에는 흩어진 게임 정보를 EverWiki로 정리하고, 운영자가 초안을 편집하고 발행할 수 있는 Supabase 기반 CMS로 확장했습니다.',
    recentUpdate: {
      date: '2026-09-08',
      summary: 'EverWiki와 통합 CMS 변경을 병합했습니다. GitHub 역할별 권한, 초안·발행본 분리, 발행 충돌 방지와 검토형 가져오기 흐름을 추가했습니다.',
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
    ],
    limitations: [
      'CMS 병합과 공개 페이지 응답은 확인했으며, 실제 관리자 계정의 전체 편집·발행 흐름 검증과 외부 문서 이관 완료 여부는 별도입니다.',
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
    ],
  },
  {
    slug: 'ios-prototyping',
    title: '찍술: 기기 안에서 분석하고 직접 확인하는 음주 기록',
    shortTitle: 'ZzikSool',
    period: '2026.07 – 현재',
    status: 'ongoing',
    statusLabel: 'iOS MVP · 다중 사진 인식 실험 중',
    category: 'iOS 네이티브 · 온디바이스 인식',
    heroKicker: '사진에서 읽은 제품 정보와 실제로 마신 양을 구분하는 기록 경험',
    summary:
      '술병·술캔의 라벨과 바코드를 기기 안에서 분석하고, 사용자가 제품과 실제 마신 양을 확인한 뒤 캘린더에 저장하는 iPhone 앱입니다. 기록 경험 개선을 기본 브랜치에 반영했고, 여러 사진의 관찰 결과를 모으는 인식 기능은 별도 PR에서 검증하고 있습니다.',
    recentUpdate: {
      date: '2026-08-31',
      summary: 'Today·캘린더·확인 화면과 워드마크 개선을 병합했습니다. 다중 사진 인식 PR은 열려 있으며, 내부 TestFlight 업로드 기록과 실기기 설치·실행 검증을 구분했습니다.',
    },
    role: [
      'SwiftUI·SwiftData 기반 iOS 앱 설계와 개발',
      'Vision OCR·바코드 분석, 제품 후보 확인과 명시적 저장 흐름 구현',
      '한국어·영어 UI, 접근성 검사와 내부 TestFlight 배포 절차 구축',
    ],
    context: [
      '사진만으로는 실제로 마신 양을 알 수 없고, 곡면 라벨·반사·물방울 때문에 제품 식별도 불확실할 수 있습니다.',
      '사진을 외부 서버로 보내지 않고 분석하되, 부족한 근거를 사용자가 확인하고 수정할 수 있는 기록 앱을 만들고자 했습니다.',
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
    ],
    outputs: [
      'Today·캘린더·제품 확인·직접 입력·내보내기를 연결한 iOS MVP',
      '기본 브랜치에 기록 경험, Xcode Canvas 프리뷰, App Intents와 워드마크 개선 병합',
      '별도 다중 사진 PR에 내부 TestFlight 1.1 (26) 업로드·처리·테스터 그룹 연결 기록',
    ],
    limitations: [
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
    evidence: [
      { type: 'image', label: 'ZzikSool 앱 아이콘', image: '/images/zziksool-icon.png', caption: '찍술 iOS 앱을 위해 제작한 아이콘 자산', verified: true },
    ],
  },
]

export const allTechChoices: TechChoice[] = [
  { name: 'Python & IPC', reason: 'KBPM 조회·거래 제어 엔진과 네이티브 셸 연결', constraintOrLearning: '프로세스 수명주기와 불완전한 응답을 명시적인 상태로 전달' },
  { name: 'Swift / SwiftUI & WinUI 3', reason: 'KBPM 데스크톱 셸과 찍술 iPhone 앱', constraintOrLearning: '공통 기능 구현과 OS·실기기 검증을 구분' },
  { name: 'Apple Vision & SwiftData', reason: '찍술의 기기 내 제품 분석과 개인 기록 저장', constraintOrLearning: '인식 결과와 실제 음용량 확인을 분리' },
  { name: 'TypeScript & Node.js', reason: 'MCP 서버와 웹사이트의 데이터·도구 계약', constraintOrLearning: '외부 서비스 변경과 실패를 처리할 경계 설계' },
  { name: 'Next.js & Tailwind CSS', reason: '포트폴리오의 정적 배포와 에버리프 공식 사이트·CMS', constraintOrLearning: '포트폴리오는 Next.js 15 정적 export, 에버리프는 Next.js 16 기반 서버 기능 사용' },
  { name: 'Supabase & GitHub OAuth', reason: 'EverWiki 콘텐츠·개정 이력과 운영자 권한', constraintOrLearning: '로그인·편집·발행 권한과 공개 버전을 구분' },
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
      '시뮬레이터와 실제 기기, macOS와 Windows의 확인 결과를 나누어 기록하고 미검증 범위를 남깁니다.',
    linkedProject: 'KBPM',
    projectSlug: 'kbpm',
  },
  {
    step: '05',
    title: '배포와 업데이트 방법을 함께 만든다',
    description:
      '코드를 작성하는 것으로 끝내지 않고 GitHub Actions 릴리스, TestFlight, GitHub Pages 등 실제 전달 경로를 구축합니다.',
    linkedProject: '찍술 & 포트폴리오',
    projectSlug: 'ios-prototyping',
  },
  {
    step: '06',
    title: '사용자가 이해할 설명과 홍보물까지 준비한다',
    description:
      '소프트웨어만 완성해 두지 않고, 스토리보드 기반 영상, 타이틀 그래픽, 공식 웹페이지로 제품의 가치를 온전히 전달합니다.',
    linkedProject: 'EverLeaf',
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
