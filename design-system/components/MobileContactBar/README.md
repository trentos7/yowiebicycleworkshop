# MobileContactBar

Fixed bottom bar shown only below `--bp-md` (768px) — the site's primary mobile conversion surface, present on every page regardless of what else is on it. `--bg-footer` at 96% opacity, blurred, `--border` top hairline, `--shadow-sticky-bar` cast upward, `--z-mobile-bar` (above the sticky header).

Always exactly two buttons, equal width, filling the bar: an **SMS** button (`--sms-green` / `--on-sms`, same fill as the standalone SMS button) and a **Call** button (`--surface-card` fill, `--border` outline — same fill as the standalone Call button). Never add a third action to this bar; it exists specifically to keep the two fastest booking paths one thumb-tap away. The page body gains bottom padding equal to the bar's height plus safe-area inset so footer content is never hidden behind it.
