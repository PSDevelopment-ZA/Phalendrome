# PHALENDROME SOLUTIONS — Launch Checklist

**Project Status:** 🟡 In review — static website live on phalendrome.co.za; back-end and legal details pending confirmation.

---

## Completed

- [x] Remove unused Bootstrap and consolidate styling into `css/style.css`
- [x] Add reduced motion support via `prefers-reduced-motion`
- [x] Add scroll reveal animations using `IntersectionObserver`
- [x] Add hero canvas background animation with pause behavior
- [x] Add contact form validation and consent checkbox
- [x] Update privacy and terms content with POPIA-style language
- [x] Add responsive mobile fixes for WhatsApp button and legal page spacing
- [x] Replace outdated workflow with `static-site-check.yml` (lint + build + test)
- [x] Add engineering tooling: `package.json`, ESLint flat config, `scripts/lint-html.js`, `scripts/build.js`, `test/pages.test.js`
- [x] Clean up legacy docs and scripts (`GITHUB-SETUP.md`, `GITHUB-SETUP-SCRIPT.ps1`, `CONTACT-FORM-AND-FAVICON-SETUP.md`, `js/gtag.js`) and unreferenced assets
- [x] Delete orphan branch `PLDM-0003-Copyright` and the stale workflow registration

## Open / To finish

- [ ] Connect `contact.html` to a live form endpoint and remove the stubbed fallback messaging
- [ ] Confirm the canonical email address used on the site
- [ ] Confirm the company registration number and legal format
- [ ] Add a real `og:image` asset across the site
- [ ] Confirm canonical URLs (`www.phalendrome.co.za`) match production DNS / add `www` redirect

## Notes

- The contact form validates client-side and opens the visitor's mail app until a live endpoint is wired via the `data-endpoint` attribute on `#contactForm`.
- Current content does not include FAQ accordion markup or JSON-LD structured data.

---

## Technical inventory

- HTML5 + CSS3 + Vanilla JS, served from repo root via GitHub Pages
- Node.js tooling: `npm run lint` (ESLint + HTML checks), `npm run build`, `npm test` (`node:test`)
- CI: `.github/workflows/static-site-check.yml` runs on PRs and pushes to `main`
- Google Fonts: Inter + JetBrains Mono
- Responsive navigation, form validation, reduced motion support