# PHALENDROME SOLUTIONS

**Public website for PHALENDROME SOLUTIONS, served live at [phalendrome.co.za](https://phalendrome.co.za/) via GitHub Pages.**

A static portfolio site built with semantic HTML, custom CSS, and lightweight JavaScript. Designed to communicate agency services, process, and contact details with a premium, motion-led user experience.

## Pages

- `index.html` — homepage with hero, capabilities, delivery snapshot, product walkthrough, and CTA
- `about.html` — agency story and working philosophy
- `services.html` — service offerings and delivery model
- `contact.html` — validated contact form, consent checkbox, WhatsApp + email fallback
- `privacy.html` — privacy policy
- `terms.html` — terms of service
- `404.html` — branded error page

## Features

- Fully responsive layout for desktop and mobile
- Premium dark visual system with glassmorphism and gradient accents
- Animated hero with `IntersectionObserver` scroll reveals
- Accessible mobile overlay navigation
- Contact form validation with consent checkbox and `mailto:` fallback
- WhatsApp floating button
- SEO metadata: canonical URLs, Open Graph tags, sitemap, robots.txt
- `prefers-reduced-motion` support

## Tech stack

- HTML5 + CSS3 (custom properties) + vanilla JavaScript
- Google Fonts: Inter + JetBrains Mono
- No build step; GitHub Pages serves the repo root
- Tooling: Node.js, ESLint, `node:test`

## Local development

Requires Node.js >= 20.

```bash
npm install
npm run dev    # serve the repo root at http://localhost:3000
```

## Validation

Quality gates run in CI (`.github/workflows/static-site-check.yml`):

```bash
npm run lint   # ESLint (scripts/test) + HTML link & head checks
npm run build  # verifies all deployment-required files exist
npm test       # page-level content and metadata tests
```

## Contact

- Email: `info@phalendrome.co.za`
- WhatsApp: `https://wa.me/27820941967`
- Company registration: `2026/092056/07`

## Notes

- `contact.html` validates client-side and opens the visitor's mail app to send the enquiry. A live form endpoint can be wired by replacing the empty `data-endpoint` attribute on `#contactForm` (see `TODO.md`).
- Canonical URLs point at `www.phalendrome.co.za`; confirm this matches the production DNS setup before final SEO rollout.