# Design QA

## Visual truth

- Selected source: `/Users/max/.codex/generated_images/01a02d8b-32bd-7c83-baff-11e14ce4e574/exec-4c284070-752a-4035-aece-e5353d33d2e6.png`
- Source dimensions: 1487 × 1058.
- Evaluated state: dark system appearance, opening wallpaper.
- Latest user-directed overrides: Edu NSW ACT Hand Cursive title, icon-only system appearance indicator, and `back to top` return label.
- Comparison viewport: 1440 × 1024 CSS pixels. The browser reported `devicePixelRatio: 2`; the screenshot API produced a 1440 × 1024 raster.
- Normalization: the source was scaled to 1440 × 1024 for like-for-like comparison.

## Evidence

- Final implementation capture: `artifacts/design-qa/home-dark-v2.png`
- Full-view comparison, source left and implementation right: `artifacts/design-qa/home-dark-comparison-v2.png`
- Focused top-corner comparison: `artifacts/design-qa/home-dark-top-comparison-v2.png`
- Supporting responsive captures: `artifacts/design-qa/home-light-v1.png`, `artifacts/design-qa/home-mobile-dark.png`, and `artifacts/design-qa/about-mobile-dark.png`

## Comparison history

1. The first implementation matched the four-corner composition, dark surface, social placement, and bottom prompts, but the title was visually oversized at about 43.2 px and 369.7 px wide.
2. The title was reduced to 36 px and about 308.1 px wide, bringing its scale and corner balance in line with the source.
3. The post-fix full-view and focused comparisons show no remaining P0, P1, or P2 mismatch.

## Functional verification

- Production build served from `docs/` at `/KBPM/` with no browser console warnings or errors.
- One desktop wheel gesture moved the internal scroller from 0 to 1024 px and aligned the introduction at the top of the viewport.
- The accessible return button moved the scroller from 1024 px back to 0.
- At 390 × 844, one scroll moved from 0 to 844 px; all four fixed-corner elements remained inside the viewport and the introduction stayed between them without overlap.
- System appearance resolved to `rgb(10, 10, 10)` in dark mode and `rgb(244, 241, 234)` in light mode.
- Edu NSW ACT Cursive loaded as the computed title font, matching the Google Fonts family behind the Edu NSW ACT Hand Cursive display name.
- LinkedIn and GitHub links resolved to the intended profiles, opened in a new tab, and used `noopener noreferrer`.
- The icon-only system appearance indicator uses the existing daisyUI ghost/circle component styling and retains an accessible label and title.
- The introduction control still reads `scroll to meet me`; its return state now reads `back to top` and returns the scroller to 0.

## Remaining differences

- P3, intentional: the mock has a barely perceptible raster grain. The implementation keeps the wallpaper flat and asset-free so the light/dark system surface remains crisp, matching the requested simple wallpaper direction.
- P3, user-directed override: the title now uses Edu NSW ACT Hand Cursive rather than the script face shown in the selected mock.
- The selected visual source shows only the opening screen. The introduction screen was therefore checked against the explicit user brief and the desktop/mobile responsive captures rather than a second source image.

final result: passed
