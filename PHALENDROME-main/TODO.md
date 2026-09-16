# PHALENDROME SOLUTIONS — Current Launch Checklist

**Project Status:** 🟡 In review — static website ready for launch once back-end and legal details are confirmed.

---

## Completed

- [x] Remove unused Bootstrap and consolidate styling into `css/style.css`
- [x] Add reduced motion support via `prefers-reduced-motion`
- [x] Add scroll reveal animations using `IntersectionObserver`
- [x] Add hero canvas background animation with pause behavior
- [x] Add `.detail-card`, `.intro-grid`, and `.stat-stack` styling for about/services/contact pages
- [x] Add contact form validation and consent checkbox
- [x] Update privacy and terms content with POPIA-style language
- [x] Add responsive mobile fixes for WhatsApp button and legal page spacing
- [x] Replace outdated workflow with static site validation workflow

## Open / To finish

- [ ] Connect `contact.html` to a live form endpoint and remove the stubbed fallback messaging
- [ ] Confirm the canonical email address used on the site
- [ ] Confirm the company registration number and legal format
- [ ] Add a real `og:image` asset across the site
- [ ] Update canonical URLs and `CNAME` when the .co.za domain goes live

## Notes

- The contact form currently validates client-side but will show a connection notice until a real endpoint is provided.
- Current content does not include FAQ accordion markup or JSON-LD structured data.
- `CONTACT-FORM-AND-FAVICON-SETUP.md`, `GITHUB-SETUP.md`, and `GITHUB-SETUP-SCRIPT.ps1` now carry legacy warning text.

---

## Technical inventory

- HTML5 + CSS3 + Vanilla JS
- Static site file structure with no build step
- Google Fonts: Inter
- Responsive navigation, form validation, reduced motion support
