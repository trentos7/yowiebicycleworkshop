# Logos

Four real lockups, already in `../../../assets/` (this file just documents which one to use where — the images aren't duplicated here).

- **`assets/logo-front.png`** — Horizontal lockup: black rounded pill, gold "YOWIE" script wordmark over a black "BICYCLE WORKSHOP" band, "NORTHERN BEACHES" subtext. **This is the one actually used in the live site** — header brand mark and footer logo. Default choice for any horizontal placement (headers, email headers, business cards).
- **`assets/logo-fork.png`** — The Yowie mascot (black silhouette, holding a chainring and a fork) standing on the stacked "YOWIE / BICYCLE WORKSHOP" wordmark, transparent background. Used in the homepage hero card, set on a `--text` (#f6f1e8) coloured padded block per the source CSS rule targeting this specific file. Best for square/portrait placements and as a standalone mark where the mascot should read on its own.
- **`assets/logo-badge.jpg`** — Compact sticker/badge format: rounded-rect gold panel, mascot at left, wordmark at right, black "NORTHERN BEACHES" strip along the bottom. Not currently used on the site. Suited to small applications — stickers, favicons at larger sizes, social profile photos — where the horizontal `logo-front` would be unreadably small.
- **`assets/logo-main.png`** — Wide "mountain skyline" lockup: mascot walking across a black mountain silhouette, gold "YOWIE" wordmark below, "BICYCLE WORKSHOP / NORTHERN BEACHES" stacked to the right. Not currently used on the site. The most illustrative/widescreen lockup — suited to banners, signage and wide social headers (Phase 2 print/signage work) rather than in-product UI.

All four are supplied as flat raster files (PNG/JPG) at high resolution, not vector — there is no SVG source in the repo. **Inference:** if crisp small-scale reproduction (favicon, app icon) is needed, the mascot silhouette in `logo-fork`/`logo-badge` is the simplest shape to redraw as SVG; that redraw doesn't exist yet and should be flagged as a new asset, not assumed.

No favicon is currently declared in any page `<head>` — another gap to close in a later phase, not one this system invents an answer for.
