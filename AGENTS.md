# AGENTS.md — AI Context & Guidelines for Yowie Bicycle Workshop

## Project Overview
This is a lightweight, plain static HTML/CSS/JS website for Yowie Bicycle Workshop hosted on **GitHub Pages** (`yowiebicycleworkshop.com.au`).

## Tech Stack & Environment
- **Architecture:** Static HTML5 / CSS / Vanilla JS. No build framework or server-side rendering.
- **Hosting:** GitHub Pages (Root deployment).
- **CSS:** Plain CSS / Tailwind CSS utility classes.

## Development Rules & Constraints
1. **GitHub Pages Compatibility:** Always use valid relative file paths (e.g., `./styles.css` or `css/styles.css`). Never use hardcoded local paths.
2. **Do Not Delete `.nojekyll`:** Ensures GitHub Pages does not run Jekyll build routines.
3. **Responsive First:** All grid layouts (e.g., pricing cards, service tiers) must use mobile-first responsive classes (1 column on mobile, 3 columns on desktop).

## Domain & Copy Guidelines
- **Business Name:** Yowie Bicycle Workshop
- **Primary Location:** Northern Beaches / North Narrabeen, NSW, Australia
- **Pricing Rules:**
  - Base Tune-Up & Safety Check: `$110`
  - Standard Workshop Service: `From $150 + parts` (`+$30` for e-bikes and dual-suspension MTBs)
  - Ultimate Service & Custom Rebuild: `From $400 + parts`
- **Parts Policy Wording:** Standard wear items (cables, pads, chains) are replaced as needed. Major/high-value components are always quoted and pre-approved before fitting.
- **Mobile Concierge Rates:** Local zone `$20` each way (`$40` round trip); Extended Northern Beaches `$40` each way (`$80` round trip).

## File Boundaries
- Do not add Node.js server scripts or backend API endpoints to this repo.
- Keep HTML semantic and maintain consistent navigation header/footer markup across all `.html` pages.