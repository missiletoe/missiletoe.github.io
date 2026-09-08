# Max — Developer Portfolio

반복되던 업무를 실제 자동화 흐름으로 연결하고, 배포·운영·패키징·홍보·문서화까지 완성하는 소프트웨어 엔지니어 **Max**의 포트폴리오 웹사이트입니다.

기술 스택 나열을 지양하고, **어떤 상황에서 무엇이 어려웠고, 어떤 판단을 내려 무엇을 배포하고 검증했는지**를 증거 중심으로 기록합니다.

---

## 1. 구현 기술 스택

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4, shadcn/ui 기반 컴포넌트
- **Icons & Buttons**: Lucide React 기반 아이콘 우선(Icon-First) 및 접근성(a11y) 표준 버튼 시스템
- **Analytics**: Firebase Analytics & Google Analytics 4 (익명 유저 여정, 앵커 이동, 활성 시간 하트비트 계측)
- **Deployment**: GitHub Pages (https://missiletoe.github.io/) & GitHub Actions CI/CD
- **Testing**: Node.js 기반 정적 무결성 및 슬러그/링크 검증 스크립트

---

## 2. 프로젝트 구조 및 주요 경로

### 2.1 라우트 구조

- `/` : 전체 경력과 핵심 역량을 10초 안에 파악할 수 있는 홈 (대표 사례 및 작업 방식, 기술 선택, 로드맵)
- `/work/kbpm` : **KBPM** 네이티브 거래 작업공간과 거래 안전성 사례 연구
- `/work/mcp-publishing` : **YouTube & Tistory MCP** 자동 배포 파이프라인 사례 연구
- `/work/game-promotion` : **에버리프(EverLeaf)** 공식 웹사이트와 EverWiki CMS 사례 연구
- `/work/ios-prototyping` : **찍술(ZzikSool)** 온디바이스 기록 앱과 다중 사진 인식 실험 사례 연구
- `/robots.txt` & `/sitemap.xml` : 검색 엔진 최적화 메타데이터
- `/_not-found` (`404.html`) : 정적 404 안내 페이지

### 2.2 핵심 디렉토리

```
├── app/                  # Next.js App Router 페이지 및 레이아웃
│   ├── layout.tsx        # 메타데이터, 시맨틱 레이아웃, 스킵 링크
│   ├── page.tsx          # 홈 화면 (Hero, Works, Process, Stack, Ongoing)
│   ├── not-found.tsx     # 404 페이지 (아이콘 우선 복귀 버튼)
│   ├── providers.tsx     # ThemeProvider 및 AnalyticsListener 통합 진입점
│   ├── sitemap.ts        # 동적 사이트맵
│   ├── robots.ts         # 검색 로봇 설정
│   └── work/             # 프로젝트 상세 사례 연구 라우트
├── components/           # UI 및 공통 컴포넌트
│   ├── analytics/        # 클라이언트 분석 이벤트 리스너 (경로/앵커/클릭/활성초 수집)
│   ├── ui/               # shadcn/ui 기반 원자 컴포넌트 (아이콘 우선 Button, badge 등)
│   ├── header.tsx        # 접근성 헤더, 모바일 내비게이션 및 테마 토글
│   ├── footer.tsx        # 검증된 소셜 링크 및 푸터 (계측 태그 포함)
│   ├── flow-diagram.tsx  # 코드 네이티브 Before/After 비교 다이어그램
│   ├── tech-table.tsx    # 기술 선택 및 제약/학습 정리 테이블
│   ├── evidence-card.tsx # 검증 가능한 증거 링크 렌더러 (계측 태그 포함)
│   └── project-layout.tsx# 표준화된 편집형 사례 연구 레이아웃
├── data/
│   └── projects.ts       # 타입 안전한 프로젝트 단일 소스 (SSOT)
├── docs/
│   ├── analytics.md      # Firebase Analytics & User Journey 추적 아키텍처 (SSOT)
│   └── content-evidence.md # 저장소 커밋/릴리스 기반 사실 검증 내부 문서
├── lib/
│   ├── analytics/        # Firebase 초기화, 파라미터 새니타이징 및 이벤트 전송 SSOT
│   └── utils.ts          # 공통 유틸리티
├── public/
│   ├── .nojekyll         # GitHub Pages Jekyll 우회 (_next 정적 에셋 서빙 보장)
│   └── images/           # 프로젝트 실행 화면, 아이콘, 배너 등 실제 이미지 에셋
├── scripts/
│   └── verify-content.mjs# 슬러그 중복, 필수 필드, 라우트 파일 무결성 자동 검사
├── .env.example          # Firebase Analytics 및 기능 플래그 환경 변수 템플릿
├── .github/workflows/
│   ├── ci.yml            # PR 및 푸시 시 린트, 타입체크, 빌드 자동 검사
│   └── deploy.yml        # main 브랜치 푸시 시 GitHub Pages 자동 빌드 및 배포
└── firebase.json         # Firebase Hosting 정적 캐싱 및 cleanUrls 설정
```

---

## 3. 로컬 개발 및 실행 방법

### 3.1 사전 요구사항

- Node.js 20.9 이상 (권장: Node.js 22 LTS)
- npm 10 이상

### 3.2 의존성 설치

```bash
npm install
```

### 3.3 환경 변수 설정 (Firebase Analytics)

분석 기능을 로컬 또는 배포 환경에서 활성화하려면 `.env.example`을 복사하여 `.env.local`을 생성합니다:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_ANALYTICS_ENABLED=true` 및 Firebase 웹 앱 자격증명을 입력합니다. 비활성화 상태(`false` 또는 미설정)에서는 모든 이벤트 추적이 안전하게 no-op 처리됩니다.

### 3.4 로컬 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.
- 테마 모드 우선순위: `System (default) -> Light/Dark override`.
- 분석 디버그 모드: `http://localhost:3000/?firebase_debug=1` 접속 시 Firebase DebugView 모드 즉시 활성화.

### 3.5 정적 검사 및 전체 빌드

```bash
npm run check
```

`check` 스크립트는 다음 단계를 순차적으로 실행합니다:
1. `npm run typecheck` (TypeScript 정적 타입 검사)
2. `npm run test` (슬러그 중복 및 필수 라우트 무결성 검사)
3. `npm run build` (Next.js 정적 내보내기 빌드 -> `out/` 생성)

---

## 4. 프로젝트 콘텐츠 및 증거 자료 추가 방법

### 4.1 새 프로젝트 추가 또는 수정

모든 프로젝트 데이터는 [`data/projects.ts`](data/projects.ts)에서 타입 안전하게 관리됩니다.

홈의 목차·사례 카드·상태 배지는 같은 프로젝트 데이터를 사용합니다. `portfolioUpdatedAt`에는 GitHub 확인일을, 확인된 최근 작업에는 `recentUpdate: { date, summary }`를 기록합니다. 최근 작업과 현재 진행 목록은 `recentUpdate`가 있는 프로젝트만 표시합니다. 상세 페이지의 심층 본문·메타데이터와 [`docs/content-evidence.md`](docs/content-evidence.md)의 근거도 함께 갱신합니다.

1. `Project` 인터페이스 규격에 맞춰 새로운 프로젝트 객체를 추가합니다.
2. 상태(`status`)는 다음 중 하나로 명확히 분리합니다:
   - `'shipped'`: 배포 및 운영 완료
   - `'ongoing'`: 현재 진행 중
   - `'planned'`: 향후 개편 계획
3. `role`, `context`, `constraints`, `decisions`, `outputs`, `limitations`, `nextSteps`, `stack`, `evidence` 필드를 작성합니다.
4. `app/work/[slug]/page.tsx` 라우트 파일을 생성하고 `ProjectLayout`을 사용하여 렌더링합니다.
5. `npm run check`를 실행하여 슬러그 중복이나 누락이 없는지 검증합니다.

### 4.2 이미지 및 증거 자료 추가

1. 민감 정보(개인정보, 로그인 토큰, API 키 등)가 없는 실제 스크린샷 또는 그래픽을 `public/images/`에 배치합니다.
2. `data/projects.ts`의 `evidence` 배열에 항목을 추가합니다.
   ```typescript
   {
     type: 'repository' | 'release' | 'article' | 'video' | 'image',
     label: '표시할 텍스트',
     href: '외부 링크 (선택)',
     image: '/images/파일명.png (선택)',
     caption: '이미지 설명 캡션 (선택)',
     verified: true
   }
   ```
3. URL이 없거나 깨진 임시 링크는 렌더링되지 않도록 방어 설계되어 있습니다.

---

## 5. 사실 검증 원칙 (Content Evidence)

본 포트폴리오의 모든 텍스트는 [`docs/content-evidence.md`](docs/content-evidence.md)에 정리된 검증 사실을 기반으로 작성되었습니다.

- **과장된 수치 금지**: Git 커밋, 릴리스 로그, 실제 실행 기록으로 증명할 수 없는 가짜 전환율이나 작업 시간 절감 비율은 일절 기재하지 않습니다.
- **역할의 분리**: 팀 또는 협업 작업의 경우 전체 프로젝트 성과와 Max가 직접 구현한 역할을 엄격히 분리합니다.
- **계획과 완료의 시각적 분리**: 앞으로 구현할 로드맵은 "개편 계획" 배지와 분리된 섹션으로 명시하여 완료된 기능처럼 호도하지 않습니다.

---

## 6. GitHub Pages 배포 및 CI/CD 파이프라인

본 포트폴리오는 **GitHub Actions** 기반의 GitHub Pages 자동 배포 파이프라인을 사용합니다.

- **배포 사이트 URL**: [https://missiletoe.github.io/](https://missiletoe.github.io/)
- **배포 워크플로우**: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

### 6.1 자동 배포 동작 원리
1. `main` 브랜치에 코드가 푸시되면 배포 워크플로우가 자동 실행됩니다.
2. `npm ci` 후 TypeScript 정적 타입 검사(`npm run typecheck`) 및 슬러그/라우트 무결성 검증(`npm run test`)을 수행합니다.
3. `npm run build`를 통해 Next.js 정적 내보내기(`output: 'export'`)를 실행하여 `out/` 폴더에 프로덕션 에셋을 생성합니다.
4. `actions/upload-pages-artifact`와 `actions/deploy-pages`를 통해 무중단으로 GitHub Pages 환경에 배포됩니다.
5. `public/.nojekyll` 파일이 포함되어 있어 GitHub Pages(Jekyll 엔진)가 `_next/` 경로의 정적 자산을 누락하지 않습니다.

### 6.2 Firebase Hosting 수동 배포 (선택 지원)

Firebase Hosting 환경을 사용할 경우:

```bash
npm run build
npx firebase deploy --only hosting
```

---

## 7. 분석 및 사용자 여정 모니터링 (Analytics)

본 포트폴리오는 개인정보(PII) 수집 없이 브라우저 단위의 익명 세션(`user_pseudo_id`, `journey_id`)을 통해 방문, 활성 분(Active Minutes), 목차 탐색 여정 및 외부 링크 이탈을 정량 분석합니다.

- **단일 진실 소스(SSOT) 명세**: 이벤트 파라미터 스키마, BigQuery 추출 SQL 및 디버그 가이드는 [`docs/analytics.md`](docs/analytics.md)를 참조하십시오.
- **UI 표준 라벨링**: 핵심 CTA 및 내비게이션 링크는 `data-analytics-step` 속성을 통해 이벤트 흐름이 표준화되어 있습니다.
- **버튼 및 접근성 표준**: 모든 상호작용 버튼은 아이콘 우선(Icon-First) 배치와 44px 터치 타깃, 스크린리더 라벨(`aria-label`/`sr-only`)을 갖추고 있습니다.
