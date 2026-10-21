# Product introduction QA

Date: 2026-10-22 (Asia/Seoul).
Scope: the three product detail pages and their shared header variants. This supersedes the older homepage-only QA record.

## Visual truth and capture normalization

The three user-approved concept paths are recorded in `DESIGN.md`. Source raster sizes are KBPM 881×1785, EverLeaf 807×1949, and 찍술 824×1908.

Browser evidence is saved under:

`/Users/max/.codex/visualizations/2026/10/21/01a16019-1a7d-7693-9d5e-425075795092/product-pages/`

Desktop CSS viewport: 1440×900. Full-page browser captures have a 1440px raster width: KBPM 1440×3251, EverLeaf 1440×2542, 찍술 1440×3572. Each concept is proportionally normalized to the same width before comparison. Full-view comparisons use two 650px-wide columns without stretching page height. Focused hero comparisons use the first 900px of the full-page capture; the viewport-only capture API sometimes returned a mismatched raster width and was not used for final comparison.

Final implementation evidence:

- `kbpm-desktop.png`, `everleaf-desktop.png`, `zziksool-desktop.png`.
- Full-view concept/implementation pairs: `kbpm-comparison.png`, `everleaf-comparison.png`, `zziksool-comparison.png`.
- Focused pairs: `kbpm-hero-comparison.png`, `everleaf-hero-comparison.png`, `zziksool-hero-comparison.png`.
- Responsive captures: each product's `-tablet.png` at 768×1024 and `-mobile.png` at 390×844, plus `mobile-overview.png`.
- Interaction evidence: `layout-checks.json`, `interaction-checks.json`, `contact-light-mobile.png`, `zziksool-story-mobile.png` and the three `-reflow.png` captures.

## Findings and comparison history

1. Initial comparison found a P2 first-view issue: KBPM's real workspace appeared too far below the headline, and EverLeaf's primary action extended below a 1280×720 viewport. The KBPM availability line now sits beside the actions on desktop, screenshot-only outer margins are cropped in CSS, and the game hero's logo/spacing are reduced. Final primary-action bottoms at 1280×720 are 477px, 689px and 622px respectively.
2. Initial EverLeaf detail showed too much of the whole scene rather than the hand of cards. A P2 crop adjustment now emphasizes the original cards without recreating game UI. The cropped original remains paired with explanatory text and an actual-play screenshot caption.
3. Initial 찍술 workflow heading wrapped at an awkward point. An explicit semantic line break now follows the opening clause; the source miniapp screenshot has a larger desktop presentation and an explicit platform caption.
4. Post-fix full-view, focused and mobile comparisons were opened and reviewed together with the source. No unresolved P0/P1/P2 issue remains within the approved product-page direction and corrections.

### Required fidelity surfaces

- **Typography:** Korean Pretendard remains the body/display family, with original EverLeaf and 찍술 brand artwork. Explicit title/control sizes, deliberate heading breaks and a 16px mobile body remain legible. Desktop type is restrained relative to the generated concept so the primary action fits a small laptop.
- **Spacing/layout:** the broad KBPM workspace, split game hero, pale game workflow band, white calendar-led 찍술 page and shared lower disclosure retain the approved hierarchy. Navigation wraps on narrow screens; no document-level horizontal overflow was observed.
- **Colors/tokens:** page-local graphite/mint, blue/red and white/red identities are implemented by shared product tokens. Action-label contrast is 9.24:1 for KBPM, 5.25:1 for EverLeaf and 5.59:1 for 찍술. Muted 찍술 text is 5.41:1 against white.
- **Image quality:** all product screenshots and logos use original repository assets. The wrong generated KBPM icon is replaced. Game backgrounds use the existing game pixels rather than invented scenery; screenshots are cropped but not recolored or redrawn. 찍술 is explicitly captioned as an Apps-in-Toss development screen.
- **Copy/content:** purpose and available next actions lead. Public installation readiness, explicit user confirmation and separate app storage remain visible. Role, stack, implementation constraints and historical verification evidence remain inside the closed development disclosure.

Intentional differences: the global brand text and existing Contact menu are preserved; original game art replaces generated scenery; existing Lucide icons replace illustrative concept icons; the FAQ starts closed and includes the requested synchronization answer. The implementation follows the approved direction and corrections, not an assertion of identical generated pixels.

## Functional verification

PASS:

- `npm run check`: TypeScript, content integrity, static export and all five pages' OG/Twitter/canonical metadata; 404 remains noindex.
- `git diff --check`.
- `designmd lint DESIGN.md`: zero errors. The linter reports 21 warnings for independent product palettes/no single primary and tokens referenced by runtime CSS rather than its generated component graph. The documented CSS mapping remains the owner; no palette is auto-generated.
- Desktop 1440×900, tablet 768×1024 and mobile 390×844: all three pages have no document overflow, broken loaded images, invalid fragment targets or initially expanded development stories.
- All nine product navigation links: valid destinations, with section tops below the 56px sticky header. External actions retain explicit destinations, new-window names and `noopener noreferrer`.
- Native development disclosure opens/closes with Enter. On mobile its technology table scrolls internally without widening the document. FAQ opens with Enter and closes with Space.
- Contact on light mobile and dark product pages: initial GitHub focus, forward/backward focus wrapping, scroll lock, Escape/button close and trigger-focus restoration.
- Return to the gallery clears the product theme; About retains three project links; its KBPM link opens the correct product route and header theme.
- Reduced-motion emulation: ordinary document scrolling, `scroll-behavior: auto`, correct anchor offset. Emulation was cleared afterward.
- 720×450 CSS-pixel reflow as a 200%-equivalent layout check: headings and primary actions fit, with no horizontal document overflow. This is a reflow simulation, not a claim of native browser zoom testing.
- Current production-preview browser tab reported no console warnings/errors after route and interaction checks.

NOT_RUN: physical mobile devices, Safari/VoiceOver, native browser zoom, actual KREAM transactions, game-client launch, iPhone/Toss execution and public deployment. These are outside the page-redesign evidence boundary.

The preview server uses an absolute export directory so rebuilding `out/` does not invalidate its working directory. A stale browser error tab encountered during the first rebuild was replaced before final browser verification.

## Implementation checklist

- [x] User-facing introductions and product-specific visual identities.
- [x] Honest actions/readiness, original assets and retained development evidence.
- [x] Responsive, keyboard, Contact, navigation and reduced-motion checks.
- [x] Full-view and focused source/render comparisons after fixes.
- [x] Build, metadata, content and final diff checks.

final result: passed
