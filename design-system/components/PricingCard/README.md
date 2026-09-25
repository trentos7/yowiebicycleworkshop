# PricingCard

The service-tier card used on the homepage pricing grid and the full Services & Pricing page. Built on the base Card pattern (`--surface-card`, `--border`, `--radius-lg`, `--shadow-card`) with a fixed internal structure, top to bottom: title (`ds-h3`), price (`ds-price-lg` in `--accent`), an optional price note (`ds-caption`, `--muted`), a one-sentence tagline (`ds-body`, `--muted`), a checklist of highlights (`ds-small`, check-mark bullets in `--accent`), then a full-width primary button pinned to the bottom of the card.

The **featured** variant (used for exactly one "MOST POPULAR" tier at a time) adds `--accent-line-strong` as the border colour, layers `--accent-glow` as an extra inset ring on top of `--shadow-card`, and adds a centred `--radius-pill` badge (`ds-badge` type style, `--accent` fill, `--on-accent` text) overlapping the card's top edge. Only ever mark one tier featured per grid — it exists to draw the eye to the recommended option, and loses that function with more than one.

Always present three tiers side by side (`--bp-lg` collapses to one column); each tier's price is exact, never a "from" price, matching the pricing rules in the top-level README.
