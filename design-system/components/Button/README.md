# Button

Full-pill CTA used across every page for booking, calling and texting actions. Four fills share one shape and one focus treatment; pick the fill by what the button *does*, not by visual hierarchy alone.

- **Primary** (`--accent` fill, `--on-accent` text) — the default action: "Services & Pricing", "Book Basic Tune-Up". Use for the single most important action in a block.
- **Secondary** (transparent fill, `--border` outline, `--text` colour) — a lower-emphasis or alternate action beside a primary button, e.g. "Book a Service" next to the hero's primary link.
- **SMS** (`--sms-green` fill, `--on-sms` text) — reserved exclusively for "Text us" actions. Never use this fill for a non-SMS action.
- **Call** (`--surface-card` fill, `--border` outline, `--text` colour) — reserved for `tel:` call actions placed beside an SMS button (e.g. the hero quick-contact row).

All four: `--radius-pill`, `font-weight: 700`, `padding: 0.95rem 1.2rem` (≈ `--space-3` vertical rhythm), 2px `focus-visible` outline in `--accent` (or `--text` for the secondary button) offset 3px. Hover states darken/lighten the fill only — the shape and border never change on hover.

See `preview.html` for all four variants rendered.
