# Culvera AI — Website

Static HTML/CSS/JS — no build step, no framework. This is deliberate so it's
trivial for Giulio to drop into whatever he's already set up on GitHub
(GitHub Pages, a framework's `public/`, etc.) — every file here is plain and
self-contained.

## What's built so far

- **Homepage** (`index.html`) — hero/header intro, then Why Culvera → Why
  Vietnam → Our Goal → a one-line tech statement → Meet our founders → the
  global footer.
- **About page** (`about.html`) — a short editorial intro (the page's `<h1>`)
  followed by the *same* Why Culvera / Why Vietnam / Our Goal / founders
  sections as the homepage, rendered from the same shared data/components.
- **Contact page** (`contact.html`) — editorial intro, contact info + form,
  and a crawlable FAQ accordion with matching FAQPage JSON-LD.
- **Global footer** — one component (`js/footer.js` + `js/footer-data.js`),
  rendered into every page via a `<footer id="site-footer"></footer>` mount
  point. Editing footer copy/links only ever means editing `footer-data.js`.

**Homepage hero sequence:** full-bleed looping video → centered gold flower
logo fades/scales in (0.28 → 0.8), holds, grows further while fading out
(→ 1.1) → "CULVERA AI" wordmark fades in gold, shifts to white, holds →
wordmark dissolves into the permanent transparent header (white logo +
wordmark top-left, DEMO / ABOUT / CONTACT top-right) → on the video's first
complete playthrough only, the page auto-scrolls to the Why Culvera section.

Once scrolled past the hero onto the Warm Ivory content below, the header
itself switches from "white on video" to "navy on ivory" (`js/header-scroll-mode.js`) —
otherwise the white nav text would be unreadable over a light background.
This only recolours the header; visibility/timing is still entirely owned by
the `[data-hero-stage]` state machine in `hero.js`/`hero.css`.

## Running it locally

Open `index.html` directly with `file://` will **not** work — the hero
script is an ES module, and browsers block module scripts from the `file://`
origin. Serve the folder instead:

```bash
cd "culvera ai"
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## File structure

```
index.html              Homepage — header + hero + About-content sections
about.html              About page — intro + the same About-content sections
contact.html            Contact page — intro, contact info + form, FAQ
css/
  variables.css           All design tokens + every animation timing value
  base.css                Reset/base styles
  hero.css                Hero + header (structure, intro animation)
  footer.css              Global footer
  contact.css             Static/light header variant, editorial intro
                          block, contact form, FAQ — shared by contact.html
                          and about.html
  about-sections.css      Why Culvera / Why Vietnam / Our Goal / tech
                          statement / founders — shared by index.html and
                          about.html. Also the homepage's scroll-triggered
                          header colour swap.
js/
  hero.js                 Homepage intro sequencing + video-loop/auto-scroll
  header-scroll-mode.js   Homepage-only: recolours the header once scrolled
                          past the hero (see above)
  footer.js               Renders the footer into #site-footer on every page
  footer-data.js          All editable footer copy/links
  contact-form.js         Contact form validation + submit lifecycle
  faq-accordion.js        Progressive-enhancement smooth accordion for FAQ
  data/
    site-content.js         Why Culvera / Why Vietnam / Our Goal / tech
                            statement copy — shared by index.html + about.html
    founders.js             Founder names/photos/bios (see below)
  components/
    why-culvera.js          Each renders its section from data/site-content.js
    why-vietnam.js          or data/founders.js into a matching
    goals-section.js        `<section data-why-culvera>`-style mount point.
    tech-statement.js       Include the script + the empty <section> on any
    founder-grid.js         page and it renders itself.
assets/
  images/logo-gold.png     Durian-flower mark, background removed
  images/logo-white.png    Same mark recolored white, for dark backgrounds
  video/hero-banner.mp4    Hero background montage
```

## Adding the footer / header to a new page

Every page needs three things: the CSS links, an empty footer mount, and the
footer script:

```html
<link rel="stylesheet" href="css/footer.css" />
...
<footer id="site-footer"></footer>
<script type="module" src="js/footer.js"></script>
```

For an interior (non-hero) page, use the light/static header variant instead
of copying the homepage's animated one — see `contact.html` for the exact
markup (`class="site-header site-header--static"`, gold logo instead of
white). The animated version in `index.html` is untouched by this.

## Editing footer or contact-page content

- **Footer copy/links/contact details** — all in `js/footer-data.js`. Nothing
  in `footer.js` or `footer.css` needs to change to update text or add/remove
  a link.
- **FAQ questions/answers** — edited directly in `contact.html`, inside
  `.faq-list`. They're plain HTML on purpose (see below), so there's no data
  file to keep in sync — just edit the visible text. If you do change an
  answer, update the matching entry in the `FAQPage` JSON-LD `<script>` in
  `<head>` too; the two must stay word-for-word identical.
- **Contact form fields** — the fields themselves live in `contact.html`;
  validation rules and submit behaviour live in `js/contact-form.js`.

## Editing the About content (Why Culvera, Why Vietnam, Our Goal, founders)

This copy is shared verbatim between `index.html` and `about.html` — edit it
once and both pages update:

- **Why Culvera / Why Vietnam / Our Goal / tech statement** — `js/data/site-content.js`.
- **Founders** — `js/data/founders.js`. To add a real photo, set that
  founder's `image` to a path (e.g. `"assets/images/founders/kaya.jpg"`);
  the muted placeholder block disappears automatically. To add or remove a
  founder, add/remove an entry in the array — `founder-grid.js` renders
  however many are in it.

Right now the homepage and About page show identical content. The intent
(per the brief) is for the homepage version to become more concise later
while About carries the fuller story — when that split happens, it likely
means the components take a "variant" or "excerpt" flag rather than
duplicating the data.

### Why the FAQ isn't data-driven

Every other repeated bit of content on this site (footer links, contact
info) is rendered from a JS data object, which is the more maintainable
pattern. The FAQ is deliberately the exception: its content is written
directly as static HTML (native `<details>/<summary>`), so it's guaranteed
readable by search engines and screen readers with zero JavaScript, and the
JSON-LD can be hand-verified against it line by line. `faq-accordion.js`
only adds the smooth open/close animation on top — if it fails to load, the
FAQ still works (just with the browser's default instant toggle).

## Wiring up the contact form to a real backend

`js/contact-form.js` has one function, `submitInquiry(payload)`, that
currently just waits ~900ms and resolves. Replace its body with a real
`fetch()` call (to your own API route, or a form service like Formspree /
Netlify Forms) — the loading/success/error UI around it doesn't need to
change.

## Retiming or restyling the intro

Every duration, easing curve, and colour lives in `css/variables.css` as a
CSS custom property — nothing is hard-coded in `hero.js`. `hero.js` reads
those variables at runtime, so changing e.g. `--hero-wordmark-hold` in the
CSS file is enough; no JS edit needed.

The whole animation is a state machine: `hero.js` writes one of these values
to `document.body.dataset.heroStage`, and every visual reacts to that
attribute in `hero.css`. To add a stage later (e.g. a CTA button fading in
after the header), add its name to `STAGE_SEQUENCE` in `hero.js`, give it a
hold duration in `getStageHoldDuration()`, and style
`body[data-hero-stage="your-stage"] .your-element` in CSS.

`prefers-reduced-motion: reduce` is handled by overriding the same CSS
variables (shorter durations, no scaling) plus a check in `hero.js` that
skips the forced auto-scroll — no separate code path to maintain.

The centered logo's size at each moment is three independent constants
rather than one scale plus a derived multiplier — `--hero-logo-scale-from`
(how small it starts), `--hero-logo-scale-to` (its size while visible/
holding), and `--hero-logo-scale-exit` (how large it grows while fading
out). Tune any one without affecting the others.

## Known follow-ups before this goes live

- **`assets/video/hero-banner.mp4` is ~40 MB** (a single ~17s clip, 1920×1080)
  — fine for local testing, still worth compressing before this goes to
  GitHub. HandBrake or
  `ffmpeg -i hero-banner.mp4 -vcodec h264 -crf 23 -vf scale=1920:-2 hero-banner-compressed.mp4`
  work well. Consider also exporting a `.webm` and using `<source>` fallbacks
  for smaller file size.
- Nav/footer links to `DEMO` and `Research`/`Vietnam Pilot`/
  `Research Partnerships`/`Technology` are still placeholders (`#` or
  `index.html#demo`-style anchors) until those pages/sections exist. `ABOUT`
  and `CONTACT` are real routes now.
- Founder photos are placeholders (`image: null` in `js/data/founders.js`)
  and bios are the bracketed placeholder text from the brief — swap both in
  that one file when ready.
- Footer placeholders to swap in `js/footer-data.js`: `location`, `linkedin`.
  Contact page placeholders to swap in `contact.html`: the same location and
  LinkedIn text appears again in the contact info list there.
- Field Green (`#59785A`) + Warm Ivory (`#F5F1E8`) body text measures ~4.4:1
  contrast — just under the strict 4.5:1 AA threshold for small text (large
  text/headings clear it easily at 3:1). Both are your specified brand
  colors so I kept them exact rather than adjusting either; worth a look if
  a formal accessibility audit is planned later.
- The manual video-loop technique (listening for `ended`, then resetting
  `currentTime = 0` and calling `play()`) is intentional, not an oversight —
  the native `loop` attribute never fires `ended`, so this is the standard
  way to reliably detect "first complete playthrough" while still looping
  seamlessly afterward.
