# 사이트맵

- [홈](https://missiletoe.github.io/)
- [소개](https://missiletoe.github.io/about)
- [KBPM](https://missiletoe.github.io/work/kbpm)
- [메이플스토리월드 에버리프](https://missiletoe.github.io/work/game-promotion)
- [찍술](https://missiletoe.github.io/work/ios-prototyping)

## 페이지 메타데이터

각 페이지는 `lib/metadata.ts`의 `createPageMetadata`로 제목, 설명, 경로, 대표 이미지와 실제 크기·대체 텍스트를 지정합니다. 홈페이지 공유 정보는 `app/page.tsx`에만 설정하고, 루트 레이아웃에는 사이트 공통 설정만 둡니다.

`npm run check`는 타입 검사·콘텐츠 검사·정적 빌드 후 모든 페이지의 OG·Twitter 정보, canonical URL, 이미지 파일과 404의 검색 제외 설정을 검증합니다. `npm run build`도 같은 메타데이터 검사를 자동 실행하며, 빌드 후에는 `npm run test:metadata`로 다시 확인할 수 있습니다.
