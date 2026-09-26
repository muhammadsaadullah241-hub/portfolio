# techpotions.app — Design Notes (Best-Effort Extraction)

> ⚠️ **How this was built:** I don't have a live browser/screenshot on this site, so this isn't
> pulled from computed CSS. It's reconstructed from the page's meta tags, content structure,
> copy tone, and standard patterns for this kind of SaaS landing page. Confidence is marked
> per section:
> - 🟢 **Confirmed** — pulled directly from page metadata
> - 🟡 **Inferred** — strongly implied by structure/copy, likely accurate
> - 🔴 **Assumed** — a reasonable guess, verify before copying exactly

---

## 1. Color Palette

| Token | Value | Confidence | Notes |
|---|---|---|---|
| `--bg-base` | `#fbf3e9` | 🟢 | From `theme-color` meta tag — a warm, off-white cream/parchment. Sets the whole "warm" brand tone. |
| `--text-primary` | dark warm brown/near-black (e.g. `#1f1a15`–`#2a231c`) | 🔴 | Cream backgrounds in this genre almost always pair with a warm dark ink rather than pure black. |
| `--text-secondary` | muted warm gray-brown (e.g. `#6b6357`) | 🔴 | For sub-copy, meta text (e.g. "4d ago", source URLs). |
| `--accent-hot` | warm red/orange (e.g. `#e2523a`–`#d94f2b`) | 🔴 | Used for "Hot" status badges — matches "warm leads" fire/heat metaphor. |
| `--accent-warm` | amber/gold (e.g. `#e0a239`) | 🔴 | Used for "Warm" status badges — one step down from "Hot." |
| `--accent-primary/CTA` | likely a single strong accent (dark green, ink-black, or deep orange) | 🔴 | For primary buttons like "Start free" — cream backgrounds usually pair with **one** high-contrast accent, not a blue (blue would clash with the warm palette). |
| `--border-subtle` | soft warm beige/tan, low contrast | 🟡 | Card and table borders — the whole site reads "soft," not high-contrast/harsh lines. |
| `--surface-card` | slightly lighter/whiter than base, or a warm white | 🟡 | Lead cards, feature cards sit on a subtly distinct surface from the page background. |

**Overall palette character:** warm, editorial, "paper-like" — cream/parchment base, ink-brown text, fire/amber accents tied directly to the "hot/warm lead" temperature metaphor. This is a deliberate departure from the typical cold blue/white/gray SaaS palette.

---

## 2. Typography

| Role | Likely Treatment | Confidence |
|---|---|---|
| Display / H1 ("Warm leads, found fresh.") | Serif or high-contrast display serif | 🔴 | The line-broken, editorial phrasing ("Warm leads, / found fresh.") and the cream/paper background strongly suggest a serif or semi-serif display face — this genre of "editorial SaaS" (warm tones, short poetic headlines) very often pairs a serif headline with a sans body. |
| Section headers (H2, e.g. "One run. Five warm leads.") | Same serif family, smaller weight | 🔴 |
| Body copy | Clean geometric/humanist sans-serif (Inter, Söhne, General Sans, or similar) | 🔴 | Standard for SaaS body text — optimized for readability at small sizes. |
| Eyebrow/labels (e.g. "Live web · not a database", "01The shift") | Small-caps or uppercase, letter-spaced, sans-serif, muted color | 🟡 | The numbered-section pattern (`01`, `02`...) reads as a deliberate editorial/report-style device. |
| UI chrome (nav links, buttons, badges) | Sans-serif, medium weight | 🟡 |

**Hierarchy pattern observed:**
- Numbered section eyebrows (`01The shift`, `02How it works`...) — small, muted, tracked-out
- Large headline per section
- Supporting paragraph, slightly muted/secondary color
- Content block (cards/table/demo)

---

## 3. Layout & Grid

- **Page structure:** Single-column, vertically stacked full-width sections — classic long-scroll SaaS landing page, sections separated by generous vertical whitespace rather than hard dividers/color blocks.
- **Section numbering system (🟡 inferred, distinctive):** Every major section is prefixed with a two-digit number + label:
  - `01 The shift`
  - `02 How it works`
  - `03 The product`
  - `04 How we compare`
  - `05 Pricing`
  - `06 FAQ`
  This is a strong, easily-copyable structural signature — treat it as a design system rule, not decoration.
- **Nav bar:** Simple horizontal bar — logo/wordmark left, anchor links center/right (`Proof`, `How it works`, `Features`, `Pricing`, `FAQ`), auth actions far right (`Sign in`, `Start free` as a filled button).
- **Hero:** Full-bleed background image/texture behind headline + subhead + dual CTA (`Start free` primary, `Book a demo` secondary) + a small trust line (`No card to start · AI included · no markup`) + a live "product proof" card floated below/beside it.
- **Feature grid:** Alternating text block + screenshot pattern (not a rigid 3-column grid) — each feature gets its own full-width or half-width row with a heading, short paragraph, and a product screenshot.
- **Cards:** Lead cards use a consistent internal structure: title, location/category meta line, status badge + recency ("Hot · 4d ago"), a "why now" explanation block, source link + action button.
- **Comparison table:** Simple row-based feature comparison, 3 columns (`techpotions`, `Contact DBs`, `Manual VA`), checkmarks/short text per cell.
- **Pricing:** 3-tier card layout, middle tier visually emphasized ("Most popular" ribbon/badge), monthly/annual toggle above.
- **Footer:** Multi-column link layout (Product / Guides / Get started / Contact) + legal line + company entity name in small caps at the very bottom.

---

## 4. Spacing & Rhythm

- 🟡 Generous vertical padding between sections (large — likely 96–160px equivalent) to support the "editorial breathing room" feel of a cream/paper background.
- 🟡 Card internal padding moderate-to-generous, rounded corners (soft, not sharp — matches the "soft warm" palette).
- 🔴 Likely uses a consistent border-radius scale (e.g. 8/12/16px) across buttons, cards, and badges — small pill-shaped badges for status ("Hot", "Warm", "Most popular").

---

## 5. Components (recurring patterns to copy)

1. **Status/temperature badge** — small pill, colored by state (`Hot` = red/orange, `Warm` = amber), paired with a relative timestamp (`4d ago`).
2. **Numbered section eyebrow** — `01`, `02`... + short label, always precedes an H2.
3. **"Why now" callout block** — a distinct, slightly-indented or bordered block inside lead cards explaining the buying signal in plain English — this is a core brand moment, worth replicating exactly.
4. **Stat strip** — a row of large numbers + small labels underneath (`5 warm leads`, `12 sources swept`, `6 min run time`, `100% dated & sourced`) — big number, small caption, no borders between them, just spacing.
5. **Old-way vs new-way split** — two-column contrast block (`The old way` vs `The techpotions way`), each a bullet list, used to sell the core differentiator.
6. **Dual CTA pattern** — primary filled button + secondary text/outline button, repeated at hero and at the bottom CTA section (`Start free` / `Book a demo`).
7. **Pricing card** — price with strikethrough original price next to discounted price (`$39 ~~$49~~/mo`), annual-discount note below, bullet feature list, single CTA button; middle card gets a "Most popular" tag and likely a border/shadow to lift it visually.
8. **Testimonial/quote block** — founder quote in larger italic/serif type, attribution (name + title) below.
9. **Accordion FAQ** — question rows that expand; only two shown expanded in the scraped content, rest collapsed by default.
10. **Chat/outreach mockup** — a simulated message bubble UI showing an outbound WhatsApp/email message + reply, used to visually prove the "tracked outreach" feature.

---

## 6. Imagery Style

- 🟢 Uses Next.js `_next/image` optimized assets — real product screenshots (`/assets/features/*.png`) rather than illustrations, for every feature callout.
- 🟡 Hero uses a background texture/image (`/assets/hero/bg-b.png`) rather than a flat color — likely a subtle gradient, paper-grain, or abstract texture consistent with the cream palette, not a photo.
- 🟡 One embedded product demo video (`/assets/product/demo.mp4`), autoplay-style, showing the live agent working — reinforces the "real, live product" positioning over static mockups.
- No icon-heavy illustration style detected — the design leans on real screenshots + typography + color, not custom iconography or 3D illustrations.

---

## 7. Voice & Microcopy (design-adjacent)

- Short, punchy, lowercase-friendly headline style with a poetic line break (`Warm leads, / found fresh.`).
- Heavy use of em-dashes and short fragments for emphasis ("Live web · not a database").
- Middot (`·`) used consistently as an inline separator instead of pipes or bullets (`No card to start · AI included · no markup`).
- Numbers are the hero of the copy (`5 warm leads`, `12 sources`, `6 min`, `100%`) — data-forward, proof-driven tone rather than adjective-heavy marketing speak.

---

## 8. CONFIRMED — Hero Section (from actual screenshot)

Everything below is now 🟢 **confirmed visually**, not inferred. This replaces/corrects the guesses above wherever they conflict.

### Colors (real)
| Token | Value (approx) | Where used |
|---|---|---|
| `--bg-cream` | `#F7EDE0` (warm parchment) | Page background, nav bar |
| `--text-ink` | `#1A1512` (near-black, warm) | Headline, nav links, body strong text |
| `--text-muted` | `#6E655A` | Body paragraph, sub-labels, timestamps |
| `--accent-rust` | `#C1502E` (burnt orange/terracotta) | Italic headline word, "Hot" badge, "WHY THIS LEAD, WHY NOW" label, "SEE A RUN'S OUTPUT" link, small bullet dot in eyebrow badge |
| `--accent-green` | `#1E8E5A`–`#25A35C` | "DONE" checkmark + progress line, "Message" button (WhatsApp green) |
| `--surface-white` | `#FFFFFF` | Floating product-demo cards |
| `--surface-badge` | off-white/cream, subtle border | "LIVE WEB · NOT A DATABASE" eyebrow pill |
| `--btn-primary-bg` | `#161311` (near-black) | "Start free" button |
| `--btn-secondary-bg` | white/cream with 1px dark border | "Book a demo" button |

### Typography (real)
- **Headline ("Warm leads,")** — bold, heavy-weight **grotesque sans-serif** (geometric/humanist, tight letter-spacing, large size ~56–64px equivalent). Reads like Neue Montreal, General Sans, or Söhne territory.
- **Headline accent ("found fresh.")** — switches to an **italic serif**, in the rust accent color. This is the single most distinctive typographic move on the page: bold sans line 1 → italic serif line 2 in accent color. Confirmed, not guessed.
- **Body paragraph** — regular-weight sans-serif, same family as headline, muted ink color, with select **bold black inline words** ("this week," "why now") for emphasis mid-sentence.
- **Eyebrow/micro-labels** ("LIVE WEB · NOT A DATABASE," "NO CARD TO START · AI INCLUDED · NO MARKUP," "WHY THIS LEAD, WHY NOW") — uppercase, small size, wide letter-spacing (tracked out), monospace-leaning or condensed sans. These read almost like a distinct "label" typeface/style separate from body copy.
- **Nav "LEADS" sub-tag** next to the wordmark — small, uppercase, gray, wide tracking — a lightweight product-line tag beside the bold "techpotions" logotype.

### Components (real)
- **Logo mark**: a small circular/disc icon in the rust accent color (abstract — reads like a stacked/layered coin or potion-cap shape) immediately left of the wordmark. Wordmark "techpotions" is bold black; "LEADS" sits beside it as a smaller, gray, letter-spaced tag — i.e. logo + product-name pattern, not two separate logos.
- **Nav bar**: no border/shadow separating it from hero — it sits flush on the same cream background, fully borderless top bar.
- **Primary button** ("Start free"): fully rounded pill, near-black fill, white bold text, trailing arrow icon (→).
- **Secondary button** ("Book a demo"): fully rounded pill, cream/white fill, thin dark border, black text, no icon.
- **Eyebrow pill badge**: rounded pill, very subtle border, cream/off-white fill (barely distinct from page bg), small colored dot bullet + uppercase tracked text.
- **Hero background texture**: a soft illustrated **network/particle graphic** — scattered dots connected by faint lines, plus large soft blurred circular blobs in warm peach/orange, low-opacity, fading toward the right/bottom of the hero. Purely decorative, sits behind all content, no hard edges.
- **Floating product card (primary)**: white rounded rectangle, soft drop shadow, header row with a small sparkle icon + bold title ("Finding warm leads") on the left and a green checkmark + "DONE" on the right, a thin **green progress line** directly under the header. Body is a vertical list of steps, each with a small circular icon (magnifying glass, source-site icon, globe, checkmark) + text; some sub-lines are muted/italic.
- **Floating product card (secondary, overlapping)**: a second white card layered on top of the first, offset down and to the right (classic overlapping-card hero pattern). Contains:
  - Small uppercase label "NEW WARM LEAD" top-left
  - Colored pill badge top-right: rust background, white text, "Hot · 4d ago" (status + relative time, same pattern as noted earlier)
  - Bold business name + muted location/category line
  - An inset sub-block with rust uppercase label "WHY THIS LEAD, WHY NOW" + a plain-English paragraph — visually distinct (looks like a slightly different/inset background)
  - Footer row: muted source link with external-link arrow icon (left) + a green pill "Message" button with a small chat-bubble icon (right)
- **Ticker/marquee strip**: below the hero, a full-width horizontal auto-scrolling ticker of data-source names ("Social," "Reddit & forums," "Google Maps," "Hiring posts," "Review sites," "Freelance boards," "Business directories," "Active ad libraries"), separated by small dots, in muted gray uppercase-or-title-case text on the same cream background — implies infinite/looping horizontal scroll animation, no visible container border.

### Icon style
- Small circular "chip" icons (colored circle background + simple glyph inside) used consistently for: search/magnifying glass, source platforms (Reddit, Indeed), globe/verification, and checkmark-complete states. Icon backgrounds are soft pastel/tinted versions of the palette (light red, light blue-gray, light green) rather than flat black-and-white icons.

---

## 9. What I'd Verify Before Copying 1:1

The hero section is now confirmed from a screenshot (Section 8). Everything below that section (features, pricing, FAQ, footer) is still inference — same caveat applies:
- [ ] Exact hex values for text, accent, and badge colors elsewhere on the page
- [ ] Actual font-family names + weights (headline sans + accent italic serif — need exact names)
- [ ] Border-radius values on buttons/cards (visually large/full-pill on buttons, moderately rounded on cards)
- [ ] Exact spacing scale (px/rem values between sections)
- [ ] Button hover/active states, any transitions or micro-animations
- [ ] Marquee/ticker scroll speed and direction
- [ ] Breakpoints for mobile layout (nav collapse, feature grid stacking)

The fastest way to get 100%-accurate values: open devtools on the live page, inspect a heading and a button, and copy the computed `font-family`, `color`, and `border-radius` — then send those to me and I'll fold them into this doc.