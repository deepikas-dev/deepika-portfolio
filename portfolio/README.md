# Deepika S — Portfolio

A cinematic, Awwwards-style developer portfolio built with **React + Vite**, **Tailwind CSS**,
**Framer Motion**, **GSAP (ScrollTrigger)**, and **Lenis** for buttery smooth scrolling.

## Quick start

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     -> one file per section (Hero, About, Skills, Projects, ...)
  data/content.js -> ALL editable text lives here: name, roles, skills, projects,
                      experience, services, testimonials, socials
  index.css       -> design tokens (glass, glow, gradient utilities)
  App.jsx         -> wires up Lenis smooth scroll + GSAP ScrollTrigger + section order
tailwind.config.js -> color palette (crimson / violet / cyan), fonts, animations
```

## Things to personalize before deploying

1. **`src/data/content.js`** — swap in your real projects, links, testimonials, socials, and
   contact details. Project images currently point to Unsplash placeholders — replace `image`
   fields with your own screenshots.
2. **`public/resume.pdf`** — replace the placeholder PDF with your actual resume. The
   "Download Resume" button in the Hero already points to `/resume.pdf`.
3. **Hero profile photo** — swap the Unsplash URL in `src/components/Hero.jsx` for your own photo
   (drop a file in `/public` and reference it as `/your-photo.jpg`).
4. **Contact form** — the form currently simulates a send. Wire it up to a real backend
   (e.g. Formspree, EmailJS, or your own API route) inside `handleSubmit` in
   `src/components/Contact.jsx`.
5. **Map** — the embedded Google Map defaults to Chennai; update the `src` query in
   `src/components/Contact.jsx`.
6. **Display font** — the design calls for a bold geometric display face ("Clash Display" style).
   `Sora` is wired up as a free fallback in `index.html`. If you have a Clash Display license,
   drop the font files in `/public/fonts` and update the `@font-face` rule in `index.html`.

## Notes on the stack

- **Lenis + GSAP ScrollTrigger** are synced through GSAP's ticker in `App.jsx`, so all
  scroll-triggered animations stay perfectly in sync with the smooth-scroll easing.
- **`MarqueeBanner.jsx`** is the signature motion moment: an infinite tech-stack marquee whose
  speed and direction respond live to your scroll velocity via GSAP.
- All components respect `prefers-reduced-motion` — heavy animation loops are skipped for users
  who've requested reduced motion at the OS level.
- Images use `loading="lazy"`. Fonts are preconnected. Vite code-splits GSAP and Framer Motion
  into separate chunks for faster first paint.

## Deploying

Any static host works great: **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build
# deploy the generated /dist folder
```
