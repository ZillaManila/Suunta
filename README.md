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
  parallax, counting statistics, a slow marquee, stacking method cards, a drawing approach timeline, magnetic
  buttons, and a header that hides while scrolling down. All of it is switched off for visitors who set
  "reduce motion" in their system settings.

## Page sections

| Section | File |
| --- | --- |
| Header + mobile menu | `src/components/Header.astro` |
| Hero (full-width background photo) | `src/components/Hero.astro` |
| Marquee band | `src/components/Marquee.astro` |
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

- **Photos**: 8 of the 10 image slots use free CC0 stock photos from StockSnap (see
  `public/images/CREDITS.md`). They are served at 960px wide, so for launch consider higher-resolution or
  original photography. The **portrait** (About) and **headshot** (Contact) remain labelled placeholders until
  real photos of John are available.
- **Logo**: `src/components/Mark.astro` and `public/favicon.svg` are a vector redraw of the draft arrowhead.
  Replace the path with the final logo when available.
- **Share image**: `public/images/og.png`, regenerated with `npm run render:og` (`tools/render-og.mjs`).
