# 콘텐츠 사실 검증 및 증거 목록 (Content Evidence)

기준일: 2026-09-02  
조사 대상 기간: 2025-09-02 ~ 2026-09-02  
상태 구분:
- `verified`: 로컬 저장소 코드, Git 커밋/PR, 릴리스 아티팩트, 공식 문서로 직접 확인됨
- `user-provided`: 사용자 요구사항에서 명시적으로 제공된 방향 및 맥락
- `planned`: 향후 구현 계획 또는 진행 중인 설계
- `omit`: 확인할 수 없거나 과장될 위험이 있어 포트폴리오에서 제외

---

## 1. 프로필 및 기본 정보

| 항목 | 내용 | 상태 | 확인 근거 |
|---|---|---|---|
| 직함 / 역할 | Software Engineer | `user-provided` | 요구사항 정의 |
| 핵심 가치관 | 반복 업무를 실제 제품과 운영 흐름으로 연결, 사용자 환경의 실패를 구조 개편으로 해결 | `verified` | KBPM, ZzikSool, MCP, EverLeaf 저장소 커밋 및 아키텍처 문서 |
| GitHub 프로필 | `https://github.com/missiletoe` | `verified` | Git 커밋 작성자 및 원격 저장소 URL |
| LinkedIn 프로필 | `https://www.linkedin.com/in/yong-suk-heo/` | `verified` | 기존 `src/components/CornerFrame.vue` |
| 블로그 | `https://max-dev.tistory.com/` | `verified` | Tistory MCP 산출물 및 이전 블로그 글 |
| 임의의 이메일/전화번호 | 개인정보 보호 및 미확인 연락처 노출 방지 | `omit` | GitHub 프로필 및 LinkedIn을 공식 소통 채널로 사용 |

---

## 2. 프로젝트별 사실 및 증거 검증

### 2.1 KBPM (데스크톱 자동화 및 운영 신뢰성)

- **상황 및 핵심 문제**:
  - KREAM 보관판매 신청 및 재고 관리를 위해 시작된 데스크톱 자동화 도구.
  - 내 컴퓨터에서는 작동하던 스크립트가 실제 사용자 환경에 배포되자 CSR 렌더링 타이밍, 로그인 세션 유지 실패, macOS Gatekeeper/Windows SmartScreen 보안 경고, 브라우저 프로세스 고립 등 수많은 런타임 제약에 직면함.
- **아키텍처 및 구현**:
  - **v1 배포본 (`verified`)**: Python + Selenium + PySide6 GUI + PyInstaller 패키징 + GitHub Actions 자동 릴리스. macOS (.dmg) 및 Windows (.exe) v1.0.10 배포 완료.
  - **v2/현재 네이티브 아키텍처 (`verified`)**: macOS SwiftUI 및 Windows WinUI 3 네이티브 셸이 Python sidecar를 child process로 소유하는 구조.
  - **브라우저 제어 정책 (`verified`)**: 백그라운드 브라우저는 항상 headless Chrome for Testing (CDP UA 및 client hints 완벽 일치). 로그인 창과 상품 검색(`/search/stock`)만 제한된 headful 창으로 열고, 세션 완료 후 headless가 `/my` 경로를 이중 검증.
- **상태 구분**:
  - `verified`:
    - Python sidecar 프로세스 라이프사이클 및 IPC 통신
    - Chrome for Testing + matching ChromeDriver 로컬 런타임 잠금
    - KREAM 로그인 세션 계약 (`/my` 검증 및 cold login handoff)
    - macOS .dmg / Windows .exe 릴리스 아티팩트 및 GitHub Actions 워크플로
    - PR #105, #106, #107, #108, #109 머지 및 테스트 슈트
  - `planned`:
    - 실제 KREAM 상태 변경을 수행하는 `queue.run.start` 프로덕션 실행 엔진 (현재 `QUEUE_RUN_NOT_IMPLEMENTED`로 안전 차단 중)
    - 가격 및 거래 데이터 시각화 차트
    - 실시간 원격 텔레메트리 및 자동 복구 고도화
  - `omit`:
    - 미확인 거래액, 자동화로 절감한 시간 수치, 비공식 API 크롤링 과장

---

### 2.2 MCP Publishing (외부 서비스 연결 및 콘텐츠 배포 자동화)

- **상황 및 핵심 문제**:
  - 플레이리스트 구성과 기술 블로그 게시 과정에서 조사, 정리, 메타데이터 입력, 웹 브라우저 복사·붙여넣기가 반복됨.
  - 단순 텍스트 생성이 아니라, 실제 API 및 배포 단계와 연결된 도구 제어가 필요함.
- **구현 및 아키텍처**:
  - **YouTube MCP (`verified`)**:
    - TypeScript 기반 stdio MCP 서버 (`@modelcontextprotocol/sdk`).
    - YouTube Data API v3 및 Live Streaming API 전면 지원.
    - 데스크톱 OAuth 2.0 PKCE + `127.0.0.1` 루프백 리다이렉트 인증.
    - 안전한 대량 재생목록 편집 워크플로: `snapshot` -> `plan` -> `apply` -> `journal / conflict detection` -> `inverse plan (undo)`.
    - 할당량(Quota) 추정 및 경고 임계값 제어.
  - **Tistory MCP (`verified`)**:
    - Tistory Open API 및 WebMCP 기반 기술 블로그 포스팅 자동화.
    - 구조화된 마크다운 초안을 Tistory CDM 포맷(코드 블록, 이미지 업로드)으로 변환 후 배포.
    - 게시 후 실제 URL 및 상태 검증.
- **상태 구분**:
  - `verified`:
    - Plan/Apply 기반 재생목록 편집 및 역계획(Rollback) 아키텍처
    - 로컬 인증 및 토큰 보안 격리
    - Tistory 마크다운/CDM 렌더링 및 자동 배포 파이프라인
  - `planned`:
    - 멀티 플랫폼(Medium, Substack) 동시 배포 파이프라인
  - `omit`:
    - 절감된 시간의 임의 비율 수치("작업 시간 90% 단축" 등)

---

### 2.3 Game Promotion (게임 홍보 및 출시 엔드투엔드 파이프라인 - EverLeaf)

- **상황 및 핵심 문제**:
  - MapleStory Worlds(MSW) 기반 게임 "에버리프(EverLeaf)" 프로젝트.
  - 게임 실행 파일만으로는 사용자에게 규칙과 분위기를 전달하기 어렵고, 커뮤니티 유입과 출시 후 상태 운영이 어려움.
- **구현 및 아키텍처**:
  - **공식 웹 포털 (`verified`)**:
    - Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.
    - 카드 도감(전사/도적), 몬스터 도감, 게임 가이드, 업데이트 소식 및 RSS 피드.
    - MSW 런타임 Heartbeat 기반 실시간 서비스 상태 (`/api/status` v2) 및 Upstash Redis 원자적 Lua 스크립트 집계.
    - GitHub OAuth 관리자 점검 관리 화면 (`/admin/status`, 관리자 GitHub ID `116016950` 제한).
    - 소셜 유입 채널(`Instagram`, `Threads`, `X`, `YouTube`, `Discord`)별 맞춤 랜딩 (`/from/[source]`).
  - **홍보 영상 및 그래픽 자산 (`verified`)**:
    - 씬(Scene)별 스토리보드 수립 및 게임플레이 캡처.
    - 레트로 야구 폰트 및 클래식 MMORPG 감성을 살린 타이틀 카드/배너 제작.
- **상태 구분**:
  - `verified`:
    - 공식 웹사이트 아키텍처 및 도감/뉴스 시스템
    - MSW 인스턴스 Heartbeat 기반 실시간 헬스체크 및 점검 관리
    - 홍보 영상 및 타이틀 그래픽 에셋
  - `planned`:
    - 게임 내 실시간 경매장 시세 웹 연동
  - `omit`:
    - 미확인 게임 접속자 수치, 매출 지표

---

### 2.4 iOS Prototyping (아이디어의 네이티브 검증 - 찍술 ZzikSool)

- **상황 및 핵심 문제**:
  - 사진 1~5장으로 술자리에서 마신 주류를 판별하고 캘린더에 기록하는 음주 기록 iOS MVP.
  - 한국 술병의 곡면 라벨, 난반사, 물방울, 저조도 환경에서 클라우드 AI 없이 온디바이스로 정확하고 안전하게 동작해야 함.
- **구현 및 아키텍처**:
  - **스택 (`verified`)**: Swift 6, SwiftUI, Observation, SwiftData, Apple Vision, PhotosUI, AppIntents.
  - **온디바이스 비전 파이프라인 (`verified`)**: 2,560px 씬 및 타일링 Vision OCR + 다중 바코드 감지 (EAN-13, EAN-8, QR 등).
  - **휴먼 인 더 루프 설계 (`verified`)**: 사진 관찰 수량은 '추정치'일 뿐 사용자가 실제 마신 양을 명시적으로 확인·선택하기 전에는 저장을 차단하는 휴먼 게이트.
  - **테스트 및 검증 (`verified`)**: Swift Testing 232개/38 suites, UI 테스트 20개, 접근성(Accessibility) 감사 4개 무결점 통과. Xcode 자동 서명 기반 TestFlight 1.1 (26) 내부 배포 완료.
- **상태 구분**:
  - `verified`:
    - Swift 6 & Vision 기반 온디바이스 라벨/바코드 인식
    - 11개 검증 SKU 로컬 카탈로그 및 불확실 시 약한 추정 기권(Abstention) 메커니즘
    - SwiftData 트랜잭션 기반 일괄 저장/보상 삭제
    - TestFlight 1.1 (26) 내부 배포
  - `planned`:
    - Core ML 기반 고도화 분류 모델 학습 및 온디바이스 탑재
    - 다중 병 잔량(Fill level) 정밀 추정 모델
  - `omit`:
    - App Store 정식 출시 완료 주장 (TestFlight 내부 테스트 단계임)
    - 미확인 정확도 백분율

---

## 3. 포트폴리오 적용 원칙

1. **상태 배지 명확화**: 각 프로젝트 상세 및 요약에서 `배포 완료 (Shipped)`, `진행 중 (Ongoing)`, `개편 계획 (Planned)`을 명확히 표기한다.
2. **증거 링크 필수**: 실제 코드 저장소, 릴리스, 커밋, 데모가 존재하는 경우에만 외부 버튼을 렌더링한다.
3. **숫자 조작 금지**: 검증된 커밋 수, 테스트 통과 수, 지원 OS 버전 외의 가짜 사용자 수나 비즈니스 지표를 생성하지 않는다.
