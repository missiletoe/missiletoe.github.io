# 콘텐츠 사실 검증 및 증거 목록

확인일: 2026-09-08 (Asia/Seoul)

이번 갱신은 GitHub 기본 브랜치, 최근 PR 상태와 저장소의 검증 기록을 확인해 작성했다. GitHub 커넥터는 프로필을 반환했지만 비공개 저장소 접근은 404/빈 목록이어서, 이미 인증된 GitHub CLI의 읽기 전용 조회를 사용했다.

## 판정 원칙

- **병합·구현**: GitHub의 현재 기본 브랜치와 병합 상태로 확인한다.
- **실행 기록**: 저장소 문서나 PR에 기록된 당시 결과다. 이번 포트폴리오 작업에서 해당 제품 테스트를 재실행했다는 뜻이 아니다.
- **진행 중**: 열린 PR, 비활성 기능, 미검증 실환경을 완료 기능과 구분한다.
- **공개 접근**: 저장소가 비공개이면 방문자용 GitHub 증거 버튼을 제공하지 않는다. 아래 소스 링크는 관리자를 위한 내부 근거다.
- **기존 사례**: 새 GitHub 근거가 없는 사례의 기간과 내용을 최근 작업으로 표시하지 않는다.

기존 GitHub 프로필·LinkedIn·블로그와 담당 역할은 유지했다. 새 이메일, 전화번호, 사용자 수, 처리 시간 절감률, 제품 인식 정확도는 추가하지 않았다.

## GitHub 확인 범위

| 프로젝트 | 기본 브랜치 HEAD | 최근 확인 상태 |
|---|---|---|
| KBPM | `9803a43bf7ace26cc75e6f2ffa211258a8aefada` | PR #111 병합, 2026-09-08 17:03 KST |
| everleaf_web | `f02f2ef18c05457e7dabfe65bbff01ed96b32aa8` | PR #4 병합, 2026-09-08 07:23 KST |
| zziksool | `7335cfc3366fe7f95cd888861b930b041e60336f` | PR #1–6 병합, 다중 사진 PR #7은 OPEN |
| missiletoe.github.io | `5c5d55a` | 이번 변경 전 Next.js 포트폴리오 기준 버전 |

세 제품 저장소와 포트폴리오는 조회 당시 비공개였다. 예전 EverLeaf 게임 저장소 `MSW_EverLeaf`는 보관 상태여서 현재 웹사이트 근거를 `everleaf_web`로 교체했다.

## KBPM

근거:

- [현재 README](https://github.com/missiletoe/KBPM/blob/9803a43bf7ace26cc75e6f2ffa211258a8aefada/README.md)
- [PR #111](https://github.com/missiletoe/KBPM/pull/111)
- [배포 계획](https://github.com/missiletoe/KBPM/blob/9803a43bf7ace26cc75e6f2ffa211258a8aefada/docs/v2-deployment-plan.md)
- [KREAM API·네이티브 검증 기록](https://github.com/missiletoe/KBPM/blob/9803a43bf7ace26cc75e6f2ffa211258a8aefada/docs/evidence/kream-api-native-2026-09-07.md)
- [거래 작업공간 검증 기록](https://github.com/missiletoe/KBPM/blob/9803a43bf7ace26cc75e6f2ffa211258a8aefada/docs/evidence/trade-workspace-2026-09-08.md)

현재 제품은 무료 네이티브 거래 작업공간 개발 단계다. SwiftUI·WinUI 3 셸과 Python sidecar, KREAM API 기반 상품·계정 조회, 관심 상품, 페이지 조회·상태 복원, 비용·약관 미리보기가 현재 설명의 중심이다. GitHub Actions는 비활성이고 로컬 검증 기록을 사용한다.

9월 8일 문서에는 실제 macOS 계정 목록·검색·페이지 이동·거래 상세·상태 복원·창 수명주기 결과가 있다. 이 문서는 **미커밋 작업 트리에서 수행한 검증 기록**을 포함하므로 main의 exact-head 전체 통과라고 쓰지 않는다. 테스트 수는 웹사이트에서 생략했다.

자동 입찰 worker, 실제 입찰 제출·변경, 보관판매 최종 신청은 비활성이다. `queue.run.start`는 `QUEUE_RUN_NOT_IMPLEMENTED`다. 실제 Windows 실행·서명·공증·v2 공개 배포를 완료로 표시하지 않는다.

과거 최신 release 목록에는 v1.1.3(2025-12-17)이 있으나 비공개이고 v2 배포가 아니다. 기존 v1.0.10을 현재 대표 상태로 표시하던 문구를 제거했다. `public/images/1.png`는 v1 검색, `2.png`는 v1 대기열 화면으로 직접 확인해 역사 이미지라고 표시했다.

방문자용 링크는 공개 응답을 확인한 [KBPM 프로젝트 소개·개발 소식](https://max-dev.tistory.com/17)이다. 글 상단에 2026-09-02 v2 개발 공지가 있고 사용법 본문은 v1이다.

## EverLeaf 공식 사이트와 EverWiki

근거:

- [현재 README](https://github.com/missiletoe/everleaf_web/blob/f02f2ef18c05457e7dabfe65bbff01ed96b32aa8/README.md)
- [CMS 통합 PR #4](https://github.com/missiletoe/everleaf_web/pull/4)
- [Sky Portal·미디어 PR #3](https://github.com/missiletoe/everleaf_web/pull/3)
- [상태 서비스 종료 PR #2](https://github.com/missiletoe/everleaf_web/pull/2)
- [CMS 검증 기록](https://github.com/missiletoe/everleaf_web/blob/f02f2ef18c05457e7dabfe65bbff01ed96b32aa8/docs/cms/verification.md)

Next.js 16·React 19·Supabase 기반 공식 웹사이트와 EverWiki CMS를 반영했다. 일곱 분류의 위키, GitHub 관리자·영역별 편집 권한, 초안·공개 개정본 분리, 원자적 발행과 충돌 검사, 주소·이력 보존, 검토형 가져오기 흐름이 병합됐다. 히어로·갤러리의 반응형 동작과 모션·네트워크 조건, 링크 클릭 분석도 최근 작업이다.

기존 Heartbeat·Redis 상태 서비스와 관리자 점검 기능은 종료됐다. 이번 HTTP 확인에서 `/status`와 `/api/status`는 410을 반환했다. 이를 현재 제공 기능으로 설명하던 홈·상세·기술 표를 수정했다.

저장소 문서에는 GitHub 로그인과 CMS 공개 작업 결과가 있으나 이번 작업에서 로그인·발행을 다시 실행하지 않았다. Notion 원본 이관과 Discord 실제 알림 전송은 완료로 표시하지 않는다. 과거 문서의 PR OPEN 문구보다 현재 GitHub의 MERGED 상태를 우선했다.

공개 확인: [EverWiki](https://project-dol-everleaf.vercel.app/everwiki)와 [업데이트 목록](https://project-dol-everleaf.vercel.app/news?type=update)은 HTTP 200. 홈페이지 `/`는 한 차례 HTTP 500이 관측되어 사이트 전체 정상 또는 현재 HEAD 배포 완료로 확대하지 않는다. 방문자용 링크는 확인된 EverWiki 경로를 사용한다.

## 찍술 ZzikSool

근거:

- [기본 브랜치 README](https://github.com/missiletoe/zziksool/blob/7335cfc3366fe7f95cd888861b930b041e60336f/README.md)
- [기본 브랜치 현재 검증 범위](https://github.com/missiletoe/zziksool/blob/7335cfc3366fe7f95cd888861b930b041e60336f/Docs/VALIDATION.md#current-revision)
- [기록 경험 개선 PR #6](https://github.com/missiletoe/zziksool/pull/6)
- [워드마크 PR #5](https://github.com/missiletoe/zziksool/pull/5)
- [다중 사진 인식 PR #7](https://github.com/missiletoe/zziksool/pull/7), OPEN, HEAD `d4093811794618d48c777524182d1229829fa1b3`

기본 브랜치는 Swift 6·SwiftUI·SwiftData·Vision 기반 한 장 입력, 제품·실제 음용량 확인 후 저장, Today·캘린더·수정·삭제·내보내기, 한국어·영어 UI다. 제품별 공식 출처를 가진 작은 로컬 카탈로그를 사용한다. 기본 브랜치와 미병합 인식 기능을 같은 완료 상태로 묶지 않는다.

PR #7에는 1~5장 세션, 타일 OCR·바코드, 사진 간 중복 처리, 보수적 제품 판정, 제품별 확인·원자적 일괄 저장이 포함된다. 카탈로그 11개 SKU와 232 Swift Testing/38 suites·20 UI·4 접근성 감사 기록은 이 PR의 특정 소스에 속하며 기본 브랜치 전체나 현재 실기기 성공 수치가 아니다. 홈페이지의 고정 테스트 숫자와 무결점 표현은 삭제했다.

PR에 TestFlight 1.1 (26) 업로드·App Store Connect 처리·내부 테스터 그룹 연결 기록이 있다. 바이너리 소스는 `4f0a7b26f015aa1d18feb84bb61d037935157904`이고 이후 문서 커밋과 구분된다. 테스터 초대 수락·설치·실행은 NOT RUN이다. 실제 사진 4장은 회귀·수용 자료이며 독립 정확도 holdout이 아니다.

따라서 App Store 출시, 실제 iPhone 실행 완료, 제품 인식 정확도, 무조건적인 식별 성공, 제로 지연을 주장하지 않는다. 방문자에게는 기존 앱 아이콘을 보여 주고 비공개 저장소 링크는 추가하지 않는다.

## MCP Publishing: 기존 사례 유지

이번 GitHub 소유 저장소 목록에서는 MCP 작업에 해당하는 새 저장소·커밋을 확인하지 못했다. 따라서 기존 포트폴리오의 승인형 Plan/Apply, 재생목록 스냅샷·역계획, 마크다운/CDM 발행 사례는 유지하되 최근 작업 목록에는 넣지 않았다. 기간은 2026.01–2026.08로 유지한다.

과거 자료에 기반한 기존 사례이며 이번에 API를 실행하거나 운영 상태를 재확인한 것이 아니다. API 전면 지원·임의 시간 절감 표현을 제거하고, API 결과와 공개 페이지 응답·렌더링을 구분하도록 정리했다.

## 콘텐츠 유지 관리

- `data/projects.ts`의 `projects`가 홈 목차·카드·상세 정보의 기준이다.
- `portfolioUpdatedAt`은 GitHub 확인일, 프로젝트별 `recentUpdate.date`는 해당 작업일이다.
- `recentUpdate`가 있는 프로젝트만 최근 작업과 현재 진행 항목에 표시한다.
- 상태 배지·요약·현재 작업은 홈에 별도로 복사하지 않는다. 심층 본문과 메타데이터는 `app/work/*/page.tsx`도 함께 확인한다.
- 변경 후 `npm run check`와 영향받은 화면·앵커·라이트/다크·모바일 탐색을 검증한다.

## 이번 포트폴리오 변경 검증

- `npm run check`: TypeScript 검사, 기존 콘텐츠 무결성 검사, Next.js 정적 export 빌드 통과.
- 정적 산출물을 로컬 서버에서 열어 홈과 네 개 상세 경로를 확인했다. 브라우저 페이지 오류가 보고되지 않았다.
- 1440px 데스크톱, 390px 모바일에서 홈과 변경된 콘텐츠의 배치를 확인했다. 검사한 페이지에서 가로 넘침이 없었다.
- 홈 목차의 EverLeaf 앵커와 상세 링크, 모바일 메뉴의 현재 진행 항목 이동·닫힘, 라이트→다크 전환을 확인했다.
- 제품 저장소의 테스트, 실제 KREAM 거래, CMS 발행, iPhone 실행을 이번 작업에서 재실행하지 않았다.
