# Ads by Effexia — Website

A premium, motion-rich agency website built for Ads by Effexia: white and
elegant by default, with deep navy/purple accents used sparingly for
gradients, glows, and calls to action.

Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, using design tokens matched to the brand
- **Framer Motion** for scroll reveals, the hide-on-scroll navbar, and the
  Hero's scroll-linked parallax/zoom
- **Embla Carousel** (+ autoplay plugin) for the team carousel
- **Lenis** for smooth-scroll physics
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx           → fonts (Manrope + Inter), metadata, wraps the
                          page in the Lenis smooth-scroll provider
  page.tsx              → assembles every section in order
  globals.css            → base styles, subtle grid background, Lenis CSS
components/
  SmoothScroll.tsx        → Lenis provider (wheel physics + anchor-link scrolling)
  Navbar.tsx, Hero.tsx, About.tsx, OurStory.tsx, MissionVision.tsx,
  Services.tsx, Portfolio.tsx, WhyChooseUs.tsx, Team.tsx, Values.tsx,
  Contact.tsx, Footer.tsx      → one file per section, in page order
  ui/                            → shared primitives (Button — with
                                    magnetic hover, Container,
                                    SectionHeading, RevealText)
lib/
  content.ts          → all editable copy: services, team, values,
                         stats, timeline, nav links, etc.
  images.ts            → every image/video URL on the site, in one place
public/images/         → where your real photography goes
public/videos/          → where your real hero background video goes
```

## Swapping placeholder images (and the hero video) for real ones

Every image on the site is a placeholder right now (`picsum.photos` for
general photography, `i.pravatar.cc` for team headshots) so the site
looks finished immediately. To use real photos:

1. Add the file to the matching folder in `public/images/`.
2. Open `lib/images.ts` and replace that one URL with the local path,
   e.g. `"/images/team/abin-t-peter.jpg"`.

The Hero's fullscreen background video works the same way — drop an
`.mp4` into `public/videos/` (see `public/videos/README.md` for specs)
and it's picked up automatically at `images.hero.video`. Until then, the
Hero shows the poster image in its place, so nothing ever looks broken.

No component code needs to change either way — Next/Image (and the
`<video>` element) handle the rest automatically.

## Editing copy

Section-specific text (services, team members, values, why-choose-us
list, story timeline, stats) all lives in `lib/content.ts`. Everything
else (headings, hero copy, contact details) is written directly in its
section component under `components/`.

## The contact form

`components/Contact.tsx` currently simulates a submission (it just
shows a success state) since no backend was specified. To make it send
real messages, wire the `handleSubmit` function to a Next.js API route,
or a service like Resend, Formspree, or Web3Forms.

## Notable interactions

- **Navbar** — transparent over the Hero video, gains a blurred white
  surface once scrolled, and hides on scroll-down / reappears on
  scroll-up (see `components/Navbar.tsx`).
- **Hero** — fullscreen looping video with dark/gradient overlays for
  legibility; on scroll the whole hero eases back with a slight
  zoom-out, fade, and parallax (see the `useScroll`/`useTransform` hooks
  in `components/Hero.tsx`).
- **Our Story** — a radial glow and a timeline progress line both grow
  as the section scrolls through view, for a "moving toward a
  destination" feel.
- **Services** — image-backed mosaic cards with a rotating gradient ring
  that appears on hover.
- **Team** — a draggable, looping Embla carousel that autoplays and
  pauses on hover.
- **Footer** — a huge low-opacity "EFFEXIA" wordmark sits behind the
  normal footer content as background branding.
- **Buttons** — `components/ui/Button.tsx` has a subtle magnetic hover
  (it nudges toward the cursor); pass `magnetic={false}` to disable it
  on a specific button.

## Design tokens

Colors, radii, shadows, and the accent gradient are defined once in
`tailwind.config.js` so the whole system stays consistent:

- Background `#FFFFFF`, grid lines `#ECECEC`
- Ink black `#111111`, heading `#161616`, body `#666666`, muted `#999999`
- Border `#E7E7E7`
- Accent: navy `#1D4ED8` → purple `#6D28D9` (used only in gradients,
  glows, hover states, and CTAs — `bg-accent-gradient` utility)
- Radii: `16px` / `24px` / `32px`, hero `36px`
- Shadows: soft `0 10px 40px rgba(0,0,0,.05)`, lifted `0 20px 60px rgba(0,0,0,.08)`
