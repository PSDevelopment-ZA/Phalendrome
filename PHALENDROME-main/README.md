# PHALENDROME SOLUTIONS

**Premium digital agency website for South Africa-based PHALENDROME SOLUTIONS.**

A static portfolio site built with semantic HTML, custom CSS, and lightweight JavaScript. Designed to communicate agency services, process, and contact details with a premium, motion-led user experience.

---

## Project overview

This repository contains the public website for PHALENDROME SOLUTIONS, including:

- `index.html` — homepage with hero, service overview, process, and CTA
- `about.html` — agency story, philosophy, values, and brand positioning
- `services.html` — service offering details and conversion-focused copy
- `contact.html` — contact form, email/phone/WhatsApp details, and lead capture layout
- `privacy.html` — privacy policy content
- `terms.html` — terms of service content
- `404.html` — branded error page

The site is built as a static HTML/CSS/JS experience with no front-end framework dependency.

## Features

- Fully responsive layout for desktop and mobile
- Premium dark visual system with glassmorphism and gradient accents
- Custom animated hero background glows
- Scroll-triggered reveal animations using `IntersectionObserver`
- Accessible mobile overlay navigation
- Contact form validation with a connected-endpoint placeholder
- WhatsApp floating button for quick messaging
- SEO-friendly metadata with Open Graph and Twitter Card tags
- Dark mode support and reduced motion friendliness

## Tech stack

- HTML5
- CSS3 (custom properties, layout, responsive design)
- Vanilla JavaScript
- Google Fonts: Inter
- Static asset delivery from `assets/`

## Repository structure

- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `privacy.html`
- `terms.html`
- `404.html`
- `css/style.css`
- `js/main.js`
- `assets/` — logos, favicon, images, and visual support files
- `.github/` — workflow configuration

## Local setup

To preview the site locally, use any static server. Example with `serve`:

```bash
npm install -g serve
serve .
```

Or use VS Code Live Server and open `index.html`.

## Deployment

This repository is intended for deployment as a static website. Recommended options:

- GitHub Pages (branch: `main`, root directory)
- Netlify
- Vercel
- Static site hosting on any web server

If using GitHub Pages, enable Pages for this repository and serve from the root of the `main` branch.

## Contact information

- Email: `info@phalendrome.co.za`
- Phone: `+27 67 771 5045`
- WhatsApp: `https://wa.me/27820941967`
- Company registration: `2026/092056/07`

## Notes

- The contact form currently uses a blank endpoint and shows a connection notice when submissions are attempted.
- Update `contact.html` and `js/main.js` once a live backend or Cloudflare endpoint is available.
