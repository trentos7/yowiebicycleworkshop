# Contact page updates
_Exported on 21/07/2026 at 11:23:28 GMT+10 from Cursor (3.12.17)_

---

**User**

I want to remove our personal mobile numbers from this website completely and just leave the business number  +61485022101. I think the only place they exist is on the contaxt.html page. Add a Call Now button next to the text us button on the Contact page , like the call now button on the home page. 

Change the text where it said Trent: Number, Jason: number to "Contact Jason or Trent here:"



---

**Cursor**

I'll search the site for phone numbers and compare the Contact page with the home page Call Now button.


Updating `contact.html` and cleaning up the unused personal number in `js/config.js`.


Done. Here’s what changed:

**Contact page (`contact.html`)**
- Replaced the Trent and Jason personal numbers with: **Contact Jason or Trent here:** linked to the business number `0485 022 101` (`+61485022101`)
- Added a **Call now** button next to **Text us**, matching the home page styling (`button button-call-hero`)
- Updated the booking note from “Text us on the numbers provided…” to “Text us with a brief description…” (and fixed the “breif” typo)

**`js/config.js`**
- Removed the unused personal number config; it now only references the business number

A search confirmed no personal numbers remain anywhere in the site. Every other page already used only `+61485022101`.

---

**User**

where the business number is displayed on cntact page, space out the number like this: 0485 02 2101

---

**Cursor**

Updated the displayed number on the contact page to **0485 02 2101**. The `tel:` link still uses `+61485022101` so calling works correctly.

---

**User**

# TASK: Implement "Services & Pricing" Update + Mobile Concierge for Yowie Bicycle Workshop

## Overview
We need to update our website (`yowiebicycleworkshop.com.au`) to introduce clear, transparent pricing and introduce our Mobile Pick-Up & Delivery Concierge service. 

This involves:
1. Updating site navigation and routing from `/services` (or renaming if appropriate) to present a unified "Services & Pricing" experience.
2. Building a "What We Do & Pricing" summary section on the Homepage with links to full details.
3. Building a full, itemized "Services & Pricing" page including tier breakdowns, notes on parts/labor, and a Mobile Concierge pricing section.

---

### 1. Homepage Changes (`/` or `index`)

Locate the existing section titled **"Workshop support for everyday riders and enthusiasts"** (or add it directly below the Hero section if missing).

Use this as the main section header, and place the 3 new pricing cards directly beneath it:

- **Section Title:** "Workshop support for everyday riders and enthusiasts"
- **Sub-header:** "From quick commuter tune-ups to complete mountain & road bike overhauls. Transparent labor rates with no unexpected costs."
- **3-Card Grid:** [Basic Tune-Up ($110) | Standard Service ($150 + parts) | Ultimate Rebuild ($400 + parts)]
- **Mobile Concierge Banner:** Placed immediately below the 3 cards, linking to `/services-and-pricing#mobile-concierge`.
### Card 1: Basic Tune-Up & Safety Check
- **Price:** `$110` (Labor only)
- **Tagline:** Perfect for kids' bikes, commuters, or clean bikes with gears/brakes that just need a quick dial-in to get back on the road safely.
- **Key Highlights (Bullet Points):**
  - Precise gear & brake adjustment / dial-in
  - Full safety inspection & bolt torque check
  - Chain lube & tire pressure check
- **CTA Button:** `Book Basic Tune-Up` (Links to booking/contact with prepopulated tier selection if applicable).

### Card 2: Standard Workshop Service (Feature as "MOST POPULAR")
- **Badge/Ribbon:** "MOST POPULAR"
- **Price:** `From $150 + parts`
- **Sub-note under price:** `+$30 for e-bikes & dual-suspension MTBs`
- **Tagline:** Our most popular comprehensive service. Drivetrain deep wash, precise adjustments, and safety check.
- **Key Highlights (Bullet Points):**
  - Full drivetrain wash (chain, cassette, chainrings)
  - Precise gear & brake indexing
  - Bolt torque check & basic wheel truing
- **CTA Button:** `Book Standard Service`

### Card 3: Ultimate Service & Custom Rebuild
- **Price:** `From $400 + parts`
- **Tagline:** The total reset. Bike stripped to the bare frame, deep cleaned, all bearings inspected/serviced, and premium rebuild.
- **Key Highlights (Bullet Points):**
  - Complete strip-down to bare frame
  - Ultrasonic / deep cleaning of all components
  - Bearing service, fresh inner cables & premium rebuild
- **CTA Button:** `Book Ultimate Rebuild`

---

### Mobile Concierge Teaser (Homepage Banner below the 3 Cards)
Add a sleek full-width card or callout block:
- **Title:** "🚚 Mobile Pick-Up & Delivery Concierge"
- **Body Text:** "No rack? No time? We offer door-to-door pick-up and return across the Northern Beaches. Local zone rates starting from $20 each way."
- **Action Link:** "View Mobile Zones & Service Details →" (Links to `/services-and-pricing#mobile-concierge`).

---

## 2. Dedicated "Services & Pricing" Page (`/services` or `/services-and-pricing`)

Ensure navigation links point to this page as **"Services & Pricing"**.

### Section A: Detailed Service Tiers
Render full, itemized task lists for each of the 3 tiers (Basic $110, Standard $150+, Ultimate $400+).

### Section B: Important Policy Notes Callout Box
Place a clean quote/callout block directly below the main service cards:
- **Headline:** "Important Notes on Parts & Servicing"
- **Bullets:**
  - **Parts Excluded:** All listed prices cover labor only. Any required replacement parts (e.g., chains, cassettes, brake pads, cables) will be quoted and approved with you before installation.
  - **E-Bikes & Dual Suspension:** Add $30 surcharge on Standard Services to cover additional linkage torque checks and e-system motor/drivetrain checks.
  - **After-Hours Drop-Off:** Flexible contact-free drop-off and collection options available upon request when booking.

### Section C: Mobile Pick-Up & Delivery Concierge
Add a dedicated section anchor `#mobile-concierge` with clear zone pricing:
- **Header:** "Concierge Mobile Pick-Up & Delivery"
- **Description:** "We collect your bike from your home or workplace in our workshop van and return it dialed-in and ready to ride."
- **Pricing Breakdown (2 Column Cards or Table):**
  - **Local Zone ($20 each way / $40 round trip):** North Narrabeen, Narrabeen, Elanora Heights, Collaroy, Mona Vale, Warriewood.
  - **Extended Northern Beaches ($40 each way / $80 round trip):** 
    - *North:* Newport, Bilgola, Avalon, Palm Beach.
    - *South:* Dee Why, Curl Curl, Freshwater, Manly, Fairlight, Balgowlah.
- **Special Perk Note:** "Complimentary local pick-up & delivery included on all Ultimate Services or repair bills over $350."

---

## 3. Navigation & SEO Requirements
- Update Navbar header & footer menu links to display **"Services & Pricing"**.
- Ensure meta titles and descriptions reflect keywords: *"Bicycle Service Pricing Northern Beaches | Yowie Bicycle Workshop"*.
- Ensure CTA buttons link cleanly to the existing booking flow/contact form or pre-select the appropriate service tier.

Please review the codebase structure, implement these UI updates cleanly using existing Tailwind CSS / styling tokens, and verify responsive design across mobile and desktop breakpoints.

---

**Cursor**

Exploring the site structure and existing services/homepage patterns before implementing the pricing update.


Implementing the pricing update: creating the services page, updating the homepage, adding styles, and setting up redirects.


Implemented the full Services & Pricing update. Here's what changed:

### Homepage (`index.html`)
- Replaced the old 3 generic cards with **pricing tier cards** (Basic $110, Standard $150+, Ultimate $400+)
- Added the **Mobile Pick-Up & Delivery Concierge** banner linking to `#mobile-concierge`
- Added a link to the full pricing page
- Hero CTA updated to **Services & Pricing**

### New page (`services-and-pricing.html`)
- **Section A:** Summary pricing cards + detailed itemized task lists for all 3 tiers
- **Section B:** "Important Notes on Parts & Servicing" policy callout
- **Section C:** Mobile Concierge with zone pricing at `#mobile-concierge`
- SEO title: *Bicycle Service Pricing Northern Beaches | Yowie Bicycle Workshop*

### Navigation & routing
- All nav links now read **Services & Pricing** and point to `services-and-pricing.html`
- `services.html` redirects to the new page (meta refresh + Netlify 301)
- Netlify pretty URL: `/services-and-pricing` → works without `.html`

### Booking CTAs
- All "Book …" buttons link to `contact.html?service=…`
- New `js/contact-booking.js` pre-fills SMS and email with the selected service tier

### Styling (`styles.css`)
- New components: pricing cards, "MOST POPULAR" badge, concierge banner, policy callout, zone grid — all responsive down to mobile

Old `/services` URLs redirect automatically. Want any copy tweaks or different itemized task lists on the full pricing page?

---

**User**

# TASK: Debug & Fix Layout Rendering Issue on GitHub Pages

The pricing cards on `https://yowiebicycleworkshop.com.au/services-and-pricing.html` are rendering incorrectly compared to local preview.

## Debugging Checklist:
1. **Styles & CSS Build:** Check how Tailwind CSS / styles are linked in `services-and-pricing.html`. If using a build step (e.g. PostCSS/Tailwind CLI), ensure compiled CSS is committed to git or built prior to deployment.
2. **Path Resolution:** Verify all `<link rel="stylesheet">` and `<script>` paths in `.html` files use proper relative paths or root-relative paths suitable for GitHub Pages.
3. **Jekyll Processing:** Ensure a `.nojekyll` file exists in the repository root so GitHub Pages doesn't ignore directories prefixed with underscores or specialized build outputs.
4. **Console Inspection:** Check for broken assets or JavaScript errors when inspecting the DOM.

Please review `services-and-pricing.html` and the stylesheet links to ensure all layout grid/card classes render identical to local dev.

---

**Cursor**

Investigating the GitHub Pages deployment setup and comparing it with the local stylesheet and layout.


Production CSS includes pricing styles. Checking the live HTML structure and whether caching or path issues are involved.


Production CSS is deployed and matches local. Likely causes: relative asset paths on extensionless GitHub Pages URLs and missing `.nojekyll`. Hardening deployment with root-relative paths and `.nojekyll`.


Updating all HTML files to use root-relative asset paths.


