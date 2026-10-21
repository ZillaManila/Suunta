# Suunta Labs website

The website for [suuntalabs.com](https://suuntalabs.com): Suunta Labs Inc., human-centered AI consulting by
John Hyttinen. *Direction for Better Work.*

Built with [Astro](https://astro.build) as a fast static, single-page site.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs the finished site to dist/
npm run preview   # serve the built site
```

**Single HTML file:** `npm run build:single` writes `suunta-labs-website.html`, one self-contained file
(styles, scripts, fonts and images embedded) that opens by double-clicking, with no server or internet.

The `dist/` folder can be hosted anywhere static sites are hosted (Netlify, Vercel, Cloudflare Pages, etc.).

## Design direction

A blend of the three reference sites, tuned to the brief ("calm, direction-oriented, quietly confident"):

- **Manyone**: editorial serif headlines with italic emphasis, restrained palette, long arrow links, oversized
  wordmark in the footer.
- **IDEO**: small grey section labels, hairline rules instead of boxes, question-style rows.
- **Board of Innovation**: big, quiet statistic figures; split heading/intro layout; diagram-led visuals.

Signature motif: the teal **direction line** (Suunta means *direction* in Finnish), used in the hero diagram,
the approach timeline, and links.

- Type: Newsreader (headlines) + Geist (text), self-hosted via Fontsource.
- Colour: warm paper `#f5f4f0`, navy ink `#14213a` / `#1b2a4a`, one accent teal `#0e7490`.
  All tokens live at the top of `src/styles/global.css`.

## Icons, images and motion

- **Icons**: Phosphor "light" set (`@phosphor-icons/core`). Use `<Icon name="compass" />` or the round
  `<IconBadge name="compass" />`. Browse names at [phosphoricons.com](https://phosphoricons.com).
- **Images**: every image position is an `<ImageSlot>` (`src/components/ImageSlot.astro`). Without `src` it
  shows a designed placeholder labelled with the intended shot. To add a photo, put it in `public/images/`
  and pass `src="/images/your-photo.jpg" alt="..."`. The layout, wipe-in reveal and parallax stay the same.
- **Motion** (`src/scripts/motion.ts` + component styles): word-by-word headline reveals, image wipes with
  parallax, counting statistics, stacking method cards, a drawing approach timeline, magnetic
  buttons, and a header that hides while scrolling down. All of it is switched off for visitors who set
  "reduce motion" in their system settings.

## Page sections

| Section | File |
| --- | --- |
| Header + mobile menu | `src/components/Header.astro` |
| Hero (full-width background photo) | `src/components/Hero.astro` |
| The executive opportunity (McKinsey stats) | `src/components/Opportunity.astro` |
| The method: Work → Workflow → Value | `src/components/Method.astro` |
| Built to keep adapting (Gartner 2×) | `src/components/Adaptation.astro` |
| The approach (5-step accordion) | `src/components/Approach.astro` |
| Services (card carousel, "What's included" expanders) | `src/components/Services.astro` |
| About John + Why Suunta Labs | `src/components/About.astro` |
| The belief | `src/components/Belief.astro` |
| Executive insights (photo + accordion; each brief swaps the photo) | `src/components/Insights.astro` |
| Contact | `src/components/Contact.astro` |
| Footer | `src/components/Footer.astro` |

## Updating content

- **Email, LinkedIn, booking link**: `src/data/site.ts` (`site`). The "Book a Direction Call" buttons all use
  `site.bookingUrl`, currently a `mailto:` placeholder. Swap in a Calendly (or similar) link when ready.
- **Services, approach steps, credentials, insights, stats**: also in `src/data/site.ts`.
- Copy source: *JOHN HYTTINEN MASTER DOC, Oct 7 2026* (final website copy).

## Placeholders to replace

- **Photos**: stock photos from Pexels, Burst and StockSnap, all free for commercial use (see
  `public/images/CREDITS.md`). Most are 1800px wide; consider original photography for launch.
  John's portrait (About) and headshot (Contact) use his supplied photo.
- **Logo**: the official logo is `public/images/suunta-labs-logo.png` (plus a `-light` version for dark
  backgrounds), used via `src/components/Logo.astro`. The arrowhead alone (`Mark.astro`, `favicon.svg`) is a
  vector traced from it. A vector (SVG) master of the full logo would be sharper still if one exists.
- **Share image**: `public/images/og.png`, regenerated with `npm run render:og` (`tools/render-og.mjs`).
