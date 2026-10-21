---
version: alpha
colors:
  kbpm-background: "#111417"
  kbpm-surface: "#1d2326"
  kbpm-text: "#edf0ef"
  kbpm-muted: "#abb5b3"
  kbpm-border: "#36403e"
  kbpm-action: "#a9d0c2"
  everleaf-background: "#10283e"
  everleaf-surface: "#17354e"
  everleaf-text: "#f4f8fc"
  everleaf-muted: "#c3d5e5"
  everleaf-border: "#3d586f"
  everleaf-action: "#ca322a"
  everleaf-sky: "#79bdea"
  everleaf-workflow: "#eaf6ff"
  zziksool-background: "#ffffff"
  zziksool-surface: "#f3f4f5"
  zziksool-text: "#25292c"
  zziksool-muted: "#626b76"
  zziksool-border: "#dfe2e6"
  zziksool-action: "#bf352b"
typography:
  sans:
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
    fontSize: "18px"
    lineHeight: "1.75"
rounded:
  action: "6px"
  mobile-screenshot: "20px"
spacing:
  section: "76px"
  section-mobile: "48px"
components:
  product-action:
    height: "48px"
  product-navigation-link:
    height: "44px"
---

# Product introduction design

## Overview

Approved 2026-10-22. These are user-facing product introductions within Max's existing site. The first view answers what the product does, shows real product imagery, and offers an honest next action. Lunar and Movist inform the explanation style; they are not visual templates to copy.

Each product owns a distinct identity. KBPM is a desktop workspace, EverLeaf is an invitation to play, and 찍술 is an everyday record app. The home gallery and About keep their existing design.

Approved visual sources:

- KBPM: `/Users/max/.codex/generated_images/01a16019-1a7d-7693-9d5e-425075795092/exec-ac32c1fc-53f5-40d8-b638-158d743bba3d.png`
- EverLeaf: `/Users/max/.codex/generated_images/01a16019-1a7d-7693-9d5e-425075795092/exec-3b2fd73b-1879-497d-9cfe-55dc15a0ecae.png`
- 찍술: `/Users/max/.codex/generated_images/01a16019-1a7d-7693-9d5e-425075795092/exec-71803636-5831-4564-99a1-12a47c98f187.png`

Approved corrections: use the real KBPM cube icon, existing game artwork, and untouched product screenshots. Preserve the existing global brand text and Contact behavior. Product screenshots are supporting imagery, never functional website controls.

## Colors

`app/products.css` owns the runtime values. Each `[data-product]` selector defines one set of `--product-*` semantic tokens, consumed by both the detail article and header variant. Page-local legacy tokens adapt these same values for the existing development evidence components. Do not redefine global gallery tokens or copy product colors into independent component themes.

KBPM uses graphite, silver and subdued mint. EverLeaf uses deep blue, sky blue and maple red; its workflow section is pale blue. 찍술 uses true white, dark ink and its existing red. Muted text is intentionally darker than the generated 찍술 concept for readability.

## Typography

Reuse the site's Korean-capable Pretendard family. Brand artwork supplies the distinct EverLeaf and 찍술 lettering; do not rebuild those logos as styled text. Hero type scales from about 32px on phones to 54–64px on desktop; section titles are 26–51px. Body copy is 20px desktop and 16px mobile, with explicit 14–17px navigation/control text. Component height tokens are minimums, never fixed heights that clip wrapped text.

## Layout

Detail content has a 1280px maximum width. Gutters are at least 64px desktop, 32px tablet and 20px phone. Standard section spacing is 76px desktop and 48px mobile, with product-specific hero/media spacing.

KBPM leads with a broad real workspace and a closer view of its management panel. EverLeaf pairs its logo and invitation with real combat, then highlights the hand of cards. 찍술 pairs open white space with the actual miniapp calendar, explicitly captioned as an Apps-in-Toss development screen.

At 700px and below, all narrative and workflow layouts become one column. Navigation wraps; natural document scrolling remains the owner. At 1000px, reduce gutters and media proportions. No scroll locking or content-reveal requirement on product pages. Anchors leave space below the existing sticky header.

## Elevation & Depth

Sections use whitespace and fine separators. Only the 찍술 screenshot has subtle elevation. No card grids, nested panels, ornamental glows or new device frames. EverLeaf may mask the edge of an actual image to support readable text, without recoloring game pixels.

## Shapes

Use 6px action corners and 20px screenshot corners for 찍술. Do not put entire sections inside rounded containers. Step numbers indicate real order, not decorative project numbering.

## Components

The product shell owns local navigation, the collapsed development story and the return link. Shared hero/actions, ordered workflow, availability and native FAQ disclosures use typed content from `data/product-intros.ts`. Product-specific narrative composition stays in its route.

External actions identify their destination and new-window behavior. Internal actions navigate to visible explanatory content. Contact retains its existing Radix dialog and dark menu. Native disclosures remain keyboard-operable. Icons use the installed Lucide library.

## Do's and Don'ts

- Put purpose, real imagery, readiness and the next action before engineering history.
- Keep installation readiness and consequential limitations visible outside the development disclosure.
- Keep original screenshots and their historical contents; never label the miniapp screenshot as native iPhone UI.
- Show development/internal-test status without inventing downloads, release dates, waitlists or live acceptance.
- Keep role, stack, old screenshots and detailed verification history in the collapsed development story.
- Honor reduced motion, visible keyboard focus and forced-color borders. Do not hide scrollbars or rely on hover for content.
