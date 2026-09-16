# KILLS.MD — The PHALENDROME Website Redesign Playbook

> Load this file whenever the user says "revamp a website" or "redesign" or "make it pop".
> This is a living document. Edit it as we level up.

---

## 1. PRE-FLIGHT CHECKLIST

Before touching a single file:

```
[ ] Read KILLS.md (you're here)
[ ] Read the company documents for business context
[ ] Read the existing website code to understand structure
[ ] Research 3 premium competitor/reference sites (Starbucks, Stripe, Linear level)
[ ] Identify the lies: testimonials, fake stats, placeholder content
[ ] Identify the tells: em dashes, blinking dots, AI-sounding copy
[ ] Plan the design direction and get sign off
```

## 2. THE PHALENDROME DESIGN SYSTEM

### Color Palette
```
Background: #05080F (black) → #0B1120 → #0F172A → #141C30
Text:       #FFFFFF → #E2E8F0 → #94A3B8 → #64748B
Primary:    #2563EB → #1D4ED8 → #60A5FA
Accent:     #06B6D4 → #0891B2
Borders:    rgba(255,255,255,0.06) → rgba(255,255,255,0.1)
Glass:      rgba(8,12,24,0.85) with backdrop-filter: blur(24px)
```

### Design Tokens
- Container: 1200px
- Header height: 72px
- Border radius: 6px / 10px / 16px / 24px
- Shadows: black based (not grey), with blue glow on CTAs
- Easing: cubic-bezier(0.65, 0, 0.35, 1) — premium feel
- Spring easing for hover effects: cubic-bezier(0.34, 1.56, 0.64, 1)

### What We DON'T Do
- No Bootstrap, no Tailwind, no CSS frameworks — pure custom
- No jQuery
- No em dashes (—) anywhere in copy — use periods or commas
- No blinking/flashing/pulsing elements
- No fake testimonials or inflated stats
- No placeholder images or lorem ipsum
- No AI-sounding corporate copy ("in today's digital landscape...")
- No light mode hero sections — go dark and premium

### What We ALWAYS Do
- Dark header with glassmorphism (backdrop-filter blur)
- Full-screen mobile overlay nav (not a slide-out drawer)
- Hero with animated glow blobs + grid pattern overlay
- Cards with gradient top borders on hover
- Scroll triggered animations via IntersectionObserver
- Staggered entrance animations for grids
- Registration number in footer
- WhatsApp floating button
- JSON-LD structured data
- Open Graph + Twitter Card meta tags
- Canonical URLs on every page
- WCAG 2.1 AA accessible (focus-visible, semantic HTML, ARIA)

## 3. THE BUILD ORDER

```
Phase 1: CSS Design System
  - CSS custom properties (colors, spacing, typography, shadows)
  - Reset + typography
  - Layout (container, sections, grids)
  - Navigation (header, glass effect, mobile overlay)
  - Buttons (primary, outline, ghost, sizes)
  - Hero section (dark background, glows, grid pattern)
  - Cards (service cards, value cards, feature cards)
  - Process timeline
  - FAQ accordion
  - Contact form (dark inputs)
  - Footer
  - Animations (reveal, stagger, float)
  - Accessibility (focus-visible, reduced motion)
  - Responsive breakpoints (768px, 480px)

Phase 2: JavaScript
  - Year updater (all #year elements)
  - IntersectionObserver for scroll reveals
  - FAQ accordion toggle
  - Mobile overlay toggle
  - Form validation + mailto fallback
  - Smart header border on scroll

Phase 3: HTML Pages
  - index.html (hero, services, values, process, CTA)
  - about.html (story, philosophy, values)
  - services.html (cards, FAQ)
  - contact.html (form split + info cards)
  - privacy.html (legal content)
  - terms.html (legal content)
  - 404.html (error page)

Phase 4: Polish
  - Remove all em dashes
  - Remove all blinking/pulsing elements
  - Remove fake testimonials and inflated numbers
  - Update copy to match startup stage
  - Fix the README to be professional
  - Update sitemap.xml
  - Update robots.txt
```

## 4. QUALITY GATE

Before shipping:

```
[ ] All 7 HTML pages accounted for
[ ] Zero Bootstrap references
[ ] Zero em dashes in copy
[ ] Zero blinking/pulsing elements
[ ] Zero fake testimonials or inflated stats
[ ] Registration number in every footer
[ ] CSS link on every page
[ ] JS link on every page
[ ] Favicon on every page
[ ] Mobile overlay on every page
[ ] Meta descriptions unique per page
[ ] Canonical URLs on every page
[ ] JSON-LD structured data
[ ] Open Graph tags
[ ] Responsive at 768px and 480px
[ ] reduced-motion media query present
[ ] No console errors
```

## 5. COPYWRITING RULES

- No em dashes. Replace with periods, commas, or rephrase.
- Write like a human, not a corporate brochure.
- No "in today's digital landscape" or any AI-sounding filler.
- Short sentences. Active voice. Use "you" and "we".
- For startups: aspirational, forward looking. Don't fake experience.
- For established companies: lean into track record and results.
- Every page needs a unique meta description under 160 chars.

## 6. KNOWN GOTCHAS (add as we learn)

- (empty — fill these in over time)
