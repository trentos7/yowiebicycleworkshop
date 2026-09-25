# Yowie Bicycle Workshop — Design System

Reverse-engineered from the live static site (`../styles.css`, `../index.html`, `../about.html`, `../contact.html`, `../services-and-pricing.html`). This documents that site's actual design language for reuse — it is not a redesign. It's also published as an interactive Claude Artifact with live component previews; ask Trent for that link if you don't have it.

- `tokens.json` — the token source of truth (colours, type, spacing, radius, shadow, breakpoints, z-index), each with a usage note.
- `tokens.css` — the same tokens compiled to CSS custom properties + type-style classes, ready to `<link>` into a new page.
- `components/` — one folder per UI pattern, each with a `README.md` (usage rules) and a `preview.html` you can open directly in a browser.
- `assets/logos/README.md` — which of the four logo lockups in `../assets/` to use where.

## Voice

Straight-talking, local, unpretentious, quietly capable — "small enough to care, skilled enough to compete with anyone." Real copy from the site:

> "Honest repairs, quality servicing, and practical advice to keep you riding smoothly."
> "No nonsense. Just good mechanical support from a local workshop that cares."
> "Text us a photo of the issue, or call to book."

Rules drawn from that copy:
- Short sentences, second person ("you", "your bike"), no jargon, no hype adjectives ("world-class", "cutting-edge").
- Lead with the honest/practical angle before the technical one — service-tier copy always states what's included before it sells the tier.
- Australian English throughout: **labour**, **tyre**, **colour**.
- Prices are always exact and unhedged ("$110", "$150 + parts", "+$30 for e-bikes") — never "from $X" language.
- CTAs are verbs, not slogans: "Book Basic Tune-Up", "Text us", "Call now", "View Mobile Zones & Service Details →". Arrow-suffixed links (`→`) mark a link that goes deeper into detail on the same topic.
- One emoji is used sparingly as a literal marker, not decoration (🚚 on the Mobile Concierge banner) — don't scatter emoji elsewhere.

## Colour

Single dark theme — the site has no light mode. `--bg` #111111 is the canvas; `--surface-card` #1f1f1f is every raised panel; `--text` #f6f1e8 and `--muted` #d6cfbf carry all copy. **Accent gold** `--accent` #f1b51c is the one colour that means "brand" — eyebrows, links, prices, the primary button, focus rings, the active nav pill. **SMS green** `--sms-green` #1fa463 is a deliberate second action colour reserved *only* for "Text us" CTAs, so texting always reads as the fastest path to booking, distinct from the general-purpose gold button. Never use SMS green for anything that isn't a text/SMS action, and never use gold for it either — the two must stay visually distinct actions.

Borders are always a soft white hairline (`--border` / `--border-hover`) on dark surfaces, never a hard colour line, except the three tint families (`--green-line*`, `--accent-line-strong`) used to tie a panel back to a specific action (concierge → green, featured pricing → gold). Backgrounds occasionally use soft directional gradients (`--gradient-*` tokens) instead of flat fills, on exactly three panel types: the hero, the "Get in touch" callout / cancellation-policy panel, and the concierge banner — don't add a fourth gradient treatment without reason.

`--on-sms` (white on sms-green) is a real-source pairing that only reaches ~3.2:1 contrast — see its note in `tokens.json`. Keep it to short bold button labels; never set body copy in white on sms-green.

## Type

System sans only — `Arial, Helvetica, sans-serif` — no webfont is loaded anywhere on the site. Headings (`h1`–`h3`) are tight (`line-height: 1.1`) and browser-bold; body copy runs at `line-height: 1.6` for readability against the dark background. `h1` and `h2` are fluid (`clamp()` in the source — see each style's usage note in `tokens.json` for the exact min–max); everything else is fixed.

Use **Display** styles only for page/section-level headings, **Label** styles for uppercase kickers and badges (always with `letter-spacing`, always short), **Body** styles for running copy, and **Price** styles exclusively for currency figures — never reuse `price-lg` for a heading, even though it's visually bold.

## Spacing, radius & shadow

Spacing in `tokens.json` (`--space-1`…`--space-9`) is an **inferred** 8px-based scale rationalising the source's ad hoc rem paddings — apply it to new work rather than copying a raw rem value from an old page.

Radius is a real, consistent scale already in the source: `--radius-pill` (999px) is the system's signature — every button, nav link and badge is a full stadium shape. Cards sit at `--radius-lg` (24px); the two largest banner-style panels step up to `--radius-xl` (28px). Never introduce a small (4–12px) card radius — it doesn't exist anywhere in the source and would read as off-brand.

`--shadow-card` is the default lift under any raised panel; reach for `--shadow-image` only under real photography for extra depth, and `--shadow-sticky-bar` only on the fixed mobile bar.

## Layout & responsiveness

Content sits in a single `max-width: 1120px` container, centred, with a `2rem` total side gutter (`width: min(calc(100% - 2rem), 1120px)`). Two-column layouts (hero, split sections, pricing/zone/suspension grids) collapse to one column at `--bp-lg` (860px). Below `--bp-md` (768px), a fixed **mobile contact bar** (Text us / Call) appears at the bottom of the viewport on every page, and the page gains bottom padding so content and footer clear it — this is the site's core mobile conversion pattern and should ship on every new page, not just the ones it currently exists on.

## Imagery & photography

Workshop and bike photography is real, on-location, unstyled — no stock imagery, no heavy filters. Photos are always framed in a rounded panel (`--radius-md`, `--shadow-image`) with a thin `--border` hairline, exactly like the about-page workshop photo and the Google Maps embed. Treat any new photography the same way: real workshop/bike subjects, natural light, no text overlays baked into the image (copy lives in HTML, not in the photo).

## Iconography

The only icons on the site are two hand-inlined social SVGs in the footer (Instagram, Facebook glyphs, `fill: currentColor` inside `--footer-icon-bg` circles) — there is no icon font or icon library in use. **Inference:** if the system grows a broader icon need, match this pattern — simple single-path outline glyphs, monochrome, sized to sit inside a `--radius-full` circle at `--border` weight, colour by `currentColor` so they inherit `--muted`/`--accent` per state.

## Logo & brand marks

Four real lockups exist in `../assets/`, catalogued in `assets/logos/README.md`. **Primary** (horizontal, black pill — `logo-front.png`) is the one actually used in the site header/footer; the other three are alternate lockups for other formats (hero/badge/wide) — see that README before picking one for a new surface.
