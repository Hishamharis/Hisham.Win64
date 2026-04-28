# Mohammed Hisham Haris Portfolio Design System

## Purpose

Create a high-fidelity personal portfolio website for **Mohammed Hisham Haris**, a **UI/UX Designer & Full-Stack Web Developer** based in **Kannur, Kerala**.

The site should feel:

- clean
- cinematic
- premium
- calm
- client-facing
- design-led but still practical

This is not a playful portfolio, a startup landing page, or a noisy concept piece. It should feel like a polished freelance website that helps clients trust the person behind it.

## Product Intent

The website should help Mohammed:

- present himself as both a designer and developer
- attract freelance website clients
- communicate taste, clarity, and technical capability
- showcase work and future writing
- support contact inquiries through a real form

## Audience

Primary audience:

- freelance clients
- small businesses
- founders
- personal brands
- people looking for website design and development help

Secondary audience:

- recruiters
- collaborators
- peers reviewing the quality of the work

## Experience Principles

1. The experience should feel **premium before flashy**.
2. The interface should feel **structured before experimental**.
3. The content should feel **credible before self-promotional**.
4. Motion should support elegance, not draw attention to itself.
5. Even placeholder content should look deliberate and well-composed.

## Brand Personality

Keywords:

- editorial
- cinematic
- warm-dark
- refined
- confident
- minimal
- modern

Avoid:

- generic SaaS dashboard styling
- purple-heavy gradients
- cartoonish illustrations
- over-rounded cards
- neon cyberpunk aesthetics
- overuse of blur or glass effects
- giant hero marketing sections

## Information Architecture

Use a **single-page tabbed portfolio** with a **persistent sidebar** and a **main content workspace**.

Navigation tabs:

1. About
2. Resume
3. Services
4. Portfolio
5. Blog
6. Contact

The sidebar remains visible on desktop and moves above the main workspace on smaller screens.

## Layout System

### Desktop

- Max content width: around `1380px`
- Outer layout: `330px` sidebar + flexible main content
- Gap between sidebar and main content: `24px`
- Panel surfaces should feel framed and intentional, not floating randomly
- Main workspace should resemble a refined content studio rather than a landing page

### Tablet and Mobile

- Collapse to one-column layout below roughly `1160px`
- Sidebar stacks above the content area
- Navigation becomes horizontally scrollable on smaller screens
- Preserve readable spacing and avoid cramped card stacks
- Headers and body text must reflow cleanly without overlap

## Visual Direction

### Background

The page background should feel like a restrained cinematic set:

- deep charcoal to near-black base
- subtle warm glow in corners
- faint grid or texture layer
- low-contrast atmospheric layering

Do not use:

- bright colorful gradients
- bokeh blobs
- glossy product-landing-page backgrounds

### Panels

Panels should feel like soft architectural surfaces:

- dark translucent charcoal
- subtle border strokes
- light blur only where helpful
- shadow depth that feels soft and expensive
- border radius should stay restrained, around `8px`

## Color System

Base palette:

- `#111213` page background
- `#161719` primary panel surface
- `#1c1d1f` stronger panel surface
- `#f4efe6` primary text
- `rgba(244, 239, 230, 0.74)` secondary text
- `rgba(244, 239, 230, 0.5)` faint text
- `#d7ba79` primary accent
- `rgba(215, 186, 121, 0.12)` soft accent fill
- `#7ed5a4` success
- `#f39c92` error

Accent usage rules:

- gold accent is the primary signature color
- use it for eyebrows, active states, portrait monogram, and select borders
- accent should feel intentional and sparse
- do not let the whole interface turn gold

Secondary accent moments may appear in project cards:

- muted plum
- muted teal
- muted warm red

These should only appear in controlled portfolio card visuals.

## Typography

Typography should mix **editorial elegance** with **practical readability**.

Recommended families:

- display serif: similar to `Cormorant Garamond`
- UI sans: similar to `Manrope`

Usage:

- Display serif for major headings and personal name
- Sans serif for navigation, labels, cards, paragraphs, forms, and metadata

Type guidance:

- Name should feel prominent and elegant, not oversized
- H2 section titles should feel cinematic and editorial
- Body copy should remain highly readable
- Uppercase eyebrow labels should be small, refined, and gold-toned
- Avoid tight negative tracking and avoid oversized all-caps blocks

## Core Components

### Sidebar

Contains:

- availability line with status dot
- portrait placeholder or image block
- name
- role line
- location
- short positioning summary
- contact placeholder list
- focus/service tags

Sidebar tone:

- intimate
- credible
- compact
- quiet

### Portrait Block

If no photo is available:

- use a premium placeholder treatment
- preserve a portrait ratio near `4:5`
- monogram is acceptable
- never let the placeholder feel cheap or temporary

### Tab Navigation

- horizontal tab list in the main workspace header
- each tab includes icon + label
- active tab should be clearly indicated with subtle gold emphasis
- hover states should feel lifted but not animated excessively

### Content Cards

Used for:

- highlights
- services
- blog previews
- contact methods
- tool groups

Rules:

- consistent radius
- subtle border
- quiet background contrast
- strong spacing rhythm
- no nested-card look

### Portfolio Cards

Each project card should contain:

- category label
- title
- summary
- stack tags
- outcome/result text
- cinematic top visual area with controlled accent color

These visuals should feel like abstract case-study covers, not fake screenshots.

### Contact Form

The contact form must feel:

- trustworthy
- clear
- quiet
- premium

Fields:

- Name
- Email
- Project type
- Message

Requirements:

- visible success and error states
- strong focus states
- dark field styling with readable contrast
- production-ready tone

## Section Design Guidance

### About

Purpose:

- quickly establish taste, value, and positioning

Include:

- strong headline
- short lead paragraph
- approach statement
- 3 highlight cards
- workflow/process area

### Resume

Purpose:

- show depth and seriousness even while placeholder data exists

Include:

- experience timeline
- education/growth timeline
- design/front-end/delivery skills blocks

Placeholder content should look intentional and clearly swappable later.

### Services

Purpose:

- make the portfolio more client-facing than the original reference template

Include:

- 3 core services
- deliverables per service
- “good fit” explanation
- typical client asks

### Portfolio

Purpose:

- show 4 case-study-style placeholders that can later become real projects

The section should feel more like selected work than a generic gallery.

### Blog

Purpose:

- keep room for future writing
- support the impression of thoughtful process and perspective

Use 3 article preview cards with category, title, summary, and reading time.

### Contact

Purpose:

- convert interest into inquiry

Include:

- direct contact cards
- contact form
- supportive copy about reaching out for projects

## Motion

Motion should be subtle and brief.

Allowed:

- soft tab-state transitions
- gentle content fade/rise on section change
- tiny hover lift on buttons and cards
- focus transitions on form fields

Avoid:

- parallax-heavy motion
- dramatic page transitions
- bouncing or springy card animation
- decorative looping animation

## Responsive Rules

- mobile should still feel intentional, not like the desktop was merely squeezed
- navigation may scroll horizontally, but should remain easy to read and tap
- large serif headlines should scale down before breaking the layout
- form controls should stay full-width and comfortable to use
- sidebar blocks should maintain rhythm when stacked
- avoid visual clutter when cards collapse into one column

## Content Tone

Voice should be:

- professional
- calm
- confident
- clear
- modern

Avoid:

- hype-heavy startup language
- vague “creative visionary” phrasing
- overly technical developer jargon in client-facing copy

The site should sound like someone who can both design and deliver.

## Accessibility

- maintain strong color contrast
- preserve readable body text sizes
- interactive controls need clear hover and focus states
- form labels must remain explicit
- tab states should be visually obvious
- do not rely on color alone to indicate important status

## Implementation Constraints

The existing coded version already follows these foundations:

- React + Vite
- single-page tabbed layout
- dark cinematic palette
- serif + sans type pairing
- data-driven content model
- Netlify form compatibility

Design updates should refine this system, not discard it.

## What Must Stay True

- persistent sidebar on desktop
- tabbed content workspace
- dark cinematic tone
- clean and professional mood
- client-facing service emphasis
- both Blog and Services sections must exist
- contact form must remain Netlify-compatible

## What Can Be Improved

- spacing rhythm
- hierarchy and type balance
- mobile tab behavior
- card polish
- sidebar density
- project-card art direction
- form refinement
- hover/focus states

## Direct Prompt for Stitch

Design a premium one-page portfolio for Mohammed Hisham Haris, a UI/UX designer and full-stack web developer based in Kannur, Kerala. Use a persistent left sidebar on desktop and a refined tabbed content workspace for About, Resume, Services, Portfolio, Blog, and Contact. The visual style should be deep charcoal, cinematic, editorial, and clean, with warm gold accents, elegant serif headlines, modern sans-serif UI text, restrained motion, soft panel borders, and a professional freelance-client tone. Avoid startup landing page clichés, purple gradients, neon styling, oversized hero marketing sections, and playful illustration-heavy visuals. The result should feel polished, premium, and credible, with strong responsive behavior and a trustworthy contact form.
