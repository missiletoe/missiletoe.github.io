# Firebase 기반 포트폴리오 분석 아키텍처 및 이벤트 명세 (SSOT)

본 문서는 Max 포트폴리오 사이트의 사용자 행동 분석(방문수, 활성 분, 유저 여정)을 위한 **단일 진실 소스(Single Source of Truth, SSOT)** 문서입니다.  
클라이언트 이벤트 수집부터 Firebase Analytics/GA4 및 BigQuery 심층 분석 파이프라인까지의 전체 명세를 정의합니다.

---

## 1. 개요 및 분석 목표

### 1.1 핵심 목표
1. **유저 방문 분석**: 방문자수(Active Users), 세션수(Sessions), 페이지뷰(Page Views), 참여율(Engagement Rate) 정량화.
2. **활성 시간 분석**: 단순 체류가 아닌 실제 브라우저 포커스 및 화면 가시성(Visibility) 기반의 사용자별 활성 시간(Active Minutes/Seconds) 측정.
3. **유저 여정(Journey) 분석**: 첫 유입부터 목차 탐색, 사례 연구(Case Study) 심층 열람, 검증 자료(Evidence) 클릭, 외부 릴리스/GitHub 이탈까지의 이동 경로 시퀀스 추적.

### 1.2 기본 원칙 및 프라이버시
- **익명 식별자(`user_pseudo_id`)**: 회원가입이나 로그인이 없는 정적 포트폴리오 특성에 맞춰 브라우저 단위의 익명 인스턴스 ID(`user_pseudo_id`)와 세션 단위 `journey_id`만을 활용합니다.
- **개인정보(PII) 수집 금지**: 이름, 이메일, IP 주소, 구체적인 기기 식별값 등 개인 식별 정보를 일절 수집하거나 전송하지 않습니다.
- **안전한 기능 플래그 제어**: `NEXT_PUBLIC_ANALYTICS_ENABLED` 환경 변수를 통해 빌드 및 배포 환경별로 수집 기능을 안전하게 비활성화할 수 있습니다.

---

## 2. 환경 변수 및 의존성 명세

### 2.1 의존성
- **패키지**: `firebase` (`^11.9.1` 이상)
- **런타임**: 클라이언트 사이드 브라우저 전용 (SSR/Node.js 환경에서는 자동으로 no-op 처리).

### 2.2 필수 환경 변수 ([`.env.example`](file:///Users/max/dev/missiletoe.github.io/.env.example) 기준)
Firebase 프로젝트 생성 및 웹 앱 등록 후 발급된 키를 설정합니다:

| 환경 변수명 | 필수 여부 | 설명 |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | 필수 | Firebase Web API Key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | 선택 | Firebase Auth 도메인 (예: `project.firebaseapp.com`) |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | 필수 | Firebase 프로젝트 ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | 선택 | Cloud Storage 버킷 URL |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | 선택 | FCM 발송자 ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | 필수 | Firebase App ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | 필수 | GA4 측정 ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | 필수 | 기능 활성화 플래그 (`true`, `1`, `yes`, `on`) |

---

## 3. 런타임 아키텍처 및 계측 모듈

```
[ 브라우저 사용자 상호작용 ]
          │
          ├── 라우트 이동 (usePathname) ───────┐
          ├── 앵커/목차 클릭 (hashchange) ────┤
          ├── CTA/링크 클릭 (이벤트 위임) ────┼─> [ AnalyticsListener ] (components/analytics)
          └── 활성 상태 하트비트 (60초 주기) ──┘           │
                                                          ▼
                                            [ lib/analytics/firebase.ts ]
                                                          │
                                                          ▼
                                            [ Firebase Analytics SDK ]
                                                          │
                                    ┌─────────────────────┴─────────────────────┐
                                    ▼                                           ▼
                           [ Google Analytics 4 ]                    [ BigQuery Export ]
                           (DebugView / Funnel)                   (사용자별 경로 / 활성분 SQL)
```

### 3.1 [`lib/analytics/firebase.ts`](file:///Users/max/dev/missiletoe.github.io/lib/analytics/firebase.ts)
Firebase SDK 초기화 및 공통 이벤트 전송 래퍼를 담당하는 런타임 SSOT 모듈입니다.
- **SSR 방어**: `typeof window !== 'undefined'` 및 `isSupported()` 검사로 빌드 타임 정적 내보내기(Static Export) 환경에서 절대 실패하지 않습니다.
- **중복 방지**: GA4 기본 `page_view` 자동 발송을 차단(`send_page_view: false`)하고 Next.js App Router와 해시 이동에 맞추어 정밀하게 수동 발행합니다.
- **디버그 모드**: URL 쿼리 파라미터 `?firebase_debug=1` 또는 `?firebase_debug=true` 감지 시 Firebase DebugView 모드를 즉시 활성화합니다.
- **여정 ID 생성(`getJourneyId`)**: 세션 동안 유지되는 고유 ID(`portfolio_journey_id`)를 `sessionStorage`에 보관하며, 브라우저 보안 정책으로 스토리지 접근이 차단된 경우에도 메모리 fallback으로 끊김 없이 지원합니다.
- **파라미터 새니타이징(`sanitizeAnalyticsParams`)**: `null`/`undefined` 값을 사전에 걸러내어 불필요한 네트워크 페이로드를 줄이고 GA4 데이터 유효성을 보장합니다.

### 3.2 [`components/analytics/analytics-listener.tsx`](file:///Users/max/dev/missiletoe.github.io/components/analytics/analytics-listener.tsx)
클라이언트 전역 이벤트 리스너 컴포넌트입니다.
- **라우트 변경 감지**: `usePathname()` 훅을 통해 페이지 변경 시 `trackPageView` 및 `portfolio_journey_step`(`step_type: 'page'`)을 발행합니다.
- **앵커 네비게이션 감지**: `window.addEventListener('hashchange')`를 통해 `#works`, `#case-kbpm`, `#process` 등의 내부 섹션 이동 시 `portfolio_journey_step`(`step_type: 'section'`)을 발행합니다.
- **클릭 이벤트 위임**: 문서 최상단에서 `a` 태그 클릭을 감지하여:
  - `data-analytics-step` 속성이 있는 경우 해당 라벨을 `step_name`으로 수집.
  - 외부 링크(호스트명이 다른 URL) 클릭 시 `trackOutboundClick` 및 `portfolio_journey_step`(`step_type: 'outbound_click'`) 동시 수집.
  - 내부 링크 이동 시 `portfolio_journey_step`(`step_type: 'internal_nav'`) 수집.
- **활성 시간 하트비트**: 브라우저 탭이 활성화(`document.visibilityState === 'visible'`)되고 창 포커스(`document.hasFocus()`)가 유지된 상태에서만 누적 초를 측정하여, 60초마다 `portfolio_active_seconds`를 전송합니다.

### 3.3 [`app/providers.tsx`](file:///Users/max/dev/missiletoe.github.io/app/providers.tsx)
- 앱의 최상위 Provider 트리에 `AnalyticsListener`를 마운트하여 전역 페이지에서 자동 계측을 보장합니다.

---

## 4. 이벤트 스키마 명세

### 4.1 기본 이벤트: `page_view`
페이지 전환 시마다 1회 발송됩니다.

| 파라미터명 | 타입 | 설명 | 예시 값 |
| :--- | :--- | :--- | :--- |
| `page_location` | string | 현재 브라우저의 전체 URL | `https://missiletoe.github.io/work/kbpm` |
| `page_path` | string | 현재 경로 | `/work/kbpm` |
| `page_title` | string | 문서 제목 | `KBPM 사례 연구 — Max` |
| `page_referrer` | string | 직전 유입 경로 | `https://missiletoe.github.io/` |

### 4.2 커스텀 이벤트: `portfolio_journey_step`
사용자의 모든 유의미한 화면 탐색 및 상호작용 흐름을 순차적으로 기록합니다.

| 파라미터명 | 타입 | 필수 | 허용값 / 설명 |
| :--- | :--- | :---: | :--- |
| `step_type` | string | Y | `'page'`, `'section'`, `'internal_nav'`, `'outbound_click'` |
| `step_name` | string | Y | 이벤트 식별자 (예: `'home'`, `'work_kbpm'`, `'hero_cta_works'`, `'github_profile'`) |
| `from` | string | N | 출발 경로 또는 앵커 (예: `'/'`, `'#works'`) |
| `to` | string | Y | 도착 경로 또는 URL (예: `'/work/kbpm'`, `'https://github.com/...'`) |
| `journey_id` | string | Y | 세션 단위 고유 여정 ID |

### 4.3 커스텀 이벤트: `portfolio_outbound_click`
외부 링크(GitHub, LinkedIn, Tistory, 검증 증거 자료 링크 등)로의 이탈을 추적합니다.

| 파라미터명 | 타입 | 필수 | 설명 |
| :--- | :--- | :---: | :--- |
| `link_url` | string | Y | 이동 대상 전체 URL |
| `link_domain` | string | Y | 이동 대상 도메인 (예: `'github.com'`, `'linkedin.com'`) |
| `link_label` | string | Y | 클릭된 요소의 텍스트 또는 라벨 |
| `target_blank` | boolean | Y | 새 창(`_blank`) 열림 여부 |

### 4.4 커스텀 이벤트: `portfolio_active_seconds`
사용자가 실제로 화면을 보고 조작 중인 유효 체류 시간을 정밀 측정합니다.

| 파라미터명 | 타입 | 필수 | 설명 |
| :--- | :--- | :---: | :--- |
| `seconds` | number | Y | 누적 활성 초 (기본 주기: 60초) |
| `path` | string | Y | 현재 페이지 경로 |
| `route` | string | Y | 현재 활성 라우트 명칭 |

---

## 5. UI 컴포넌트 표준 라벨링 (`data-analytics-step`)

명확한 여정 분석을 위해 핵심 UI 컴포넌트 링크 및 버튼에 `data-analytics-step` 속성을 표준화하여 부착합니다.

| 파일 위치 | 대상 요소 | 부여 값 (`data-analytics-step`) |
| :--- | :--- | :--- |
| [`app/page.tsx`](file:///Users/max/dev/missiletoe.github.io/app/page.tsx) | Hero 최근 작업 보기 CTA | `hero_cta_works` |
| [`app/page.tsx`](file:///Users/max/dev/missiletoe.github.io/app/page.tsx) | Hero GitHub 코드 보기 CTA | `hero_cta_github` |
| [`app/page.tsx`](file:///Users/max/dev/missiletoe.github.io/app/page.tsx) | 목차 네비게이션 항목들 | `toc_kbpm`, `toc_mcp`, `toc_game`, `toc_ios` |
| [`app/page.tsx`](file:///Users/max/dev/missiletoe.github.io/app/page.tsx) | 각 사례별 상세 연구 보기 CTA | `case_cta_kbpm`, `case_cta_mcp`, `case_cta_game`, `case_cta_ios` |
| [`app/page.tsx`](file:///Users/max/dev/missiletoe.github.io/app/page.tsx) | 하단 연락/프로필 링크들 | `contact_github`, `contact_linkedin`, `contact_tistory` |
| [`components/header.tsx`](file:///Users/max/dev/missiletoe.github.io/components/header.tsx) | 로고, 메뉴 링크, 모바일 메뉴 | `header_logo`, `header_nav_<name>`, `header_mobile_menu` |
| [`components/project-layout.tsx`](file:///Users/max/dev/missiletoe.github.io/components/project-layout.tsx) | 다음 프로젝트 사례 보기 CTA | `next_project_cta` |
| [`components/evidence-card.tsx`](file:///Users/max/dev/missiletoe.github.io/components/evidence-card.tsx) | 검증 가능한 증거 링크 | `evidence_link` |
| [`components/footer.tsx`](file:///Users/max/dev/missiletoe.github.io/components/footer.tsx) | 푸터 소셜 링크 | `footer_github`, `footer_linkedin`, `footer_tistory` |
| [`app/not-found.tsx`](file:///Users/max/dev/missiletoe.github.io/app/not-found.tsx) | 홈으로 돌아가기 버튼 | `not_found_home` |

---

## 6. 운영 설정 및 BigQuery 쿼리 설계

### 6.1 Firebase 콘솔 및 GA4 설정
1. **Firebase 콘솔** -> 프로젝트 설정 -> 웹 앱(`max-portfolio`) 생성 후 설정 키 획득.
2. **Google Analytics (GA4)** 데이터 스트림 생성 후 스트림 설정에서 `send_page_view` 자동 수집 동작 확인.
3. **DebugView 검증**: 브라우저에서 `https://도메인/?firebase_debug=1` 접속 시 GA4 콘솔 DebugView에 실시간 타임라인이 찍히는지 확인.
4. **BigQuery 연결**: Firebase 콘솔 -> 프로젝트 설정 -> 통합 -> Google BigQuery 내보내기 설정(매일 일괄 내보내기 및 스트리밍 활성화 권장).

### 6.2 BigQuery 심화 분석 SQL 쿼리 예시

#### 1) 일자별 방문자수, 세션수, 총 활성 분(Minutes) 집계
```sql
SELECT
  PARSE_DATE('%Y%m%d', event_date) AS date,
  COUNT(DISTINCT user_pseudo_id) AS active_users,
  COUNT(DISTINCT CONCAT(user_pseudo_id, CAST(
    (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'ga_session_id') AS STRING
  ))) AS sessions,
  COUNTIF(event_name = 'page_view') AS total_page_views,
  ROUND(SUM(
    COALESCE((SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'engagement_time_msec'), 0)
  ) / 60000.0, 1) AS total_active_minutes
FROM
  `YOUR_PROJECT_ID.analytics_XXXXXXXXX.events_*`
WHERE
  _TABLE_SUFFIX BETWEEN FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY))
                    AND FORMAT_DATE('%Y%m%d', CURRENT_DATE())
GROUP BY
  date
ORDER BY
  date DESC;
```

#### 2) 사용자별 탐색 여정 시퀀스 재구성
```sql
SELECT
  user_pseudo_id,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'journey_id') AS journey_id,
  TIMESTAMP_MICROS(event_timestamp) AS event_time,
  event_name,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'step_type') AS step_type,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'step_name') AS step_name,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'from') AS from_location,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'to') AS to_location
FROM
  `YOUR_PROJECT_ID.analytics_XXXXXXXXX.events_*`
WHERE
  event_name IN ('portfolio_journey_step', 'portfolio_outbound_click', 'page_view')
  AND _TABLE_SUFFIX = FORMAT_DATE('%Y%m%d', CURRENT_DATE())
ORDER BY
  user_pseudo_id, event_timestamp ASC;
```

#### 3) 외부 링크 이탈(Outbound Click) 분석
```sql
SELECT
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'link_domain') AS domain,
  (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'link_label') AS label,
  COUNT(*) AS click_count
FROM
  `YOUR_PROJECT_ID.analytics_XXXXXXXXX.events_*`
WHERE
  event_name = 'portfolio_outbound_click'
GROUP BY
  domain, label
ORDER BY
  click_count DESC;
```

---

## 7. 테스트 및 무결성 검증 시나리오

1. **로컬 빌드 검증**:
   - `npm run check` (`tsc --noEmit` + `verify-content.mjs` + `next build`) 100% 통과.
2. **디버그 모드 검증**:
   - `http://localhost:3000/?firebase_debug=1` 접속 시 브라우저 콘솔 및 네트워크 탭에서 GA4 엔드포인트(`collect?v=2...`)로 `debug_mode: true` 파라미터가 포함되어 전송되는지 확인.
3. **이벤트 정밀도 검증**:
   - 페이지 전환 시 `page_view`와 `portfolio_journey_step(step_type='page')`가 각각 1회씩만 발행되는지 확인 (중복 발송 방지).
   - 해시 앵커 클릭 시 `step_type='section'`이 기록되는지 확인.
   - 외부 링크 클릭 시 `portfolio_outbound_click`에 대상 도메인과 라벨이 정확히 수집되는지 확인.
   - 백그라운드 탭 전환 시 활성 초가 일시정지되고, 포커스 복귀 후 60초 경과 시에만 `portfolio_active_seconds`가 발행되는지 확인.
4. **배포 후 모니터링**:
   - 정식 배포 후 초기 24~48시간 동안 이벤트 수집 누락 또는 급증 여부를 Firebase 콘솔에서 점검.
