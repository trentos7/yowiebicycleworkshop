# Navigation

Sticky site header: `--bg` at 92% opacity with a backdrop blur, `--border` bottom hairline, `--z-header`. Holds the primary logo lockup on the left and a horizontal nav on the right.

Nav links are `--muted` text in a `--radius-pill` hit area; the current page's link gets the **active** treatment (`--accent` fill, `--on-accent` text) — identical to a hover state on any other link, so "active" and "hovered" always look the same. The trailing **"Text us"** link is visually distinct from the rest of the nav: a small green-tinted pill (`--green-wash` fill, `--green-line-strong` border, `#dff5ea` text) that brightens on hover (`--green-wash-strong` / `--green-line-hover` / white text) — it reads as a lightweight CTA embedded in the nav, not a fifth nav item, and must never take the gold active/hover treatment the other links use.

Below `--bp-lg` the header stacks (logo above nav, both left-aligned); below `--bp-md` the header is joined by the fixed Mobile Contact Bar (see that component) as the primary mobile conversion path.
