# Yowie Bicycle Workshop Static Site

Static website for **Yowie Bicycle Workshop** (`yowiebicycleworkshop.com.au`), hosted on **GitHub Pages**.

## Site Structure & Key Files
Only `site/` is published. Everything else (`AGENTS.md`, `design-system/`, `Yowie Site Photos/`, scripts) stays in the repo only.

- `site/index.html` - Main landing page (hero, summary pricing cards, mobile concierge teaser)
- `site/services-and-pricing.html` - Full itemized service menu, wear-and-tear policies, and mobile concierge zone rates
- `site/about.html` - Workshop overview and mechanic background
- `site/contact.html` - Booking links, phone, SMS, and workshop location details
- `site/styles.css` - Custom styles and CSS framework overrides
- `site/robots.txt`, `site/sitemap.xml` - Search engine crawl rules and page list (add new pages to the sitemap)
- `site/assets/` - Images, icons, and static visual media

## Hosting & Deployment
This site is hosted on **GitHub Pages** (Settings → Pages → Source: **GitHub Actions**).

1. Pushing changes under `site/` to `main` runs `.github/workflows/deploy.yml`, which publishes only the `site/` folder.
2. Custom domain DNS points to `yowiebicycleworkshop.com.au` (`site/CNAME`).

## Key Policies Reflected on Site
- **Pricing Basis:** Labour rates displayed are base prices (`+ parts`).
- **Parts Policy:** Standard wear items (cables, pads, chains) replaced during servicing as needed; major components (cranks, chainrings, suspension) are quoted and pre-approved.
- **E-Bike / Dual Suspension:** +$30 surcharge applied on Standard Services.
- **Mobile Concierge:** Local zone ($20 each way / $40 round trip), Extended zone ($40 each way / $80 round trip).