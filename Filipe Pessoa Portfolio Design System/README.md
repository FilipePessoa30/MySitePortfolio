# Filipe Pessoa Portfolio — Design System

Design system for **Filipe Pessoa Sousa's personal portfolio site**, a one‑page React site presenting a profile in Production Engineering / Scientific Computing / Research. Language of the product: **Brazilian Portuguese (pt‑BR)**. Theme direction: **"Industrial Precision"** — minimal, technical, with animated gears as the signature motif.

## Sources

- **GitHub repo:** `FilipePessoa30/FilipePortfolio` (branch: `main`) — Vite + React 19 + Tailwind 4 + Radix + shadcn-style UI + Framer Motion + Wouter.
- Key files referenced:
  - `client/src/pages/Home.tsx` — shell with Hero + tabbed About / Projects / Contact
  - `client/src/components/Hero.tsx`, `About.tsx`, `Projects.tsx`, `Contact.tsx`
  - `client/src/components/AnimatedGear.tsx` — the brand's hero motif
  - `client/src/index.css` — CSS variables driving the theme
  - `client/src/components/ui/*` — shadcn/ui button, card, tabs, input, badge, etc.
  - `ideas.md` — explicit design direction ("Industrial Precision" was chosen)

## Products

- **Portfolio Website** — single product, single page. Sections: Hero, About (Formação / Experiência / Competências), Projects (featured + others + GitHub CTA), Contact (info + form).

## Index of this design system

| File / Folder | What's inside |
|---|---|
| `README.md` | this file — context, content + visual foundations, iconography |
| `colors_and_type.css` | CSS variables: colors, type, spacing, shadows, radii, motion |
| `SKILL.md` | Agent Skill entrypoint (compatible with Claude Code skills) |
| `fonts/` | **Google Fonts at runtime** — Space Mono + IBM Plex Sans loaded via `@import` in `colors_and_type.css` (no local `.ttf` files shipped; see **Fonts** note) |
| `assets/` | SVGs and logos (animated gear motif, FP monogram, lucide icon stubs), backgrounds |
| `preview/` | Cards rendered in the Design System tab (one HTML per concept) |
| `ui_kits/portfolio/` | Recreation of the portfolio site with modular JSX components + index.html click‑through |

## Content Fundamentals

**Language:** Brazilian Portuguese (pt‑BR), formal but warm. No slang.

**Voice & tone:**
- First person, third person used for credentials ("Doutorando em Ciências Computacionais na UERJ"). Never "we" — this is a personal portfolio.
- Declarative, short sentences. Credentials lead with the institution and year range. Example CTA copy: *"Ver Projetos"*, *"Entrar em Contato"*, *"Visitar GitHub"*, *"Enviar Mensagem"*.
- Addresses reader with *você*-implicit imperatives on CTAs; descriptions stay in third person / neutral.

**Casing:**
- Headlines use **Title Case in Portuguese** (content words capitalized, prepositions not): *"Projetos & Pesquisa"*, *"Entre em Contato"*, *"Sobre Mim"*, *"Informações de Contato"*.
- Section labels in the footer / meta use **UPPERCASE mono** (e.g. *"SCROLL"*) — sparingly, as a technical accent.
- Tech names preserve canonical casing: *Python*, *C++*, *Jupyter Notebook*, *Machine Learning*, *Power BI*.

**Punctuation & formatting:**
- Bold (`<strong>`) highlights skill keywords in a paragraph: *"Especialista em **Computação Científica**, **Otimização** e **Inteligência Artificial**."*
- Bullets use line‑level emoji as category markers in CV‑style lists: 🎓 formação, 📚 curso, 🏆 conquista, ⚙️ engenharia, 💻 dev, 👨‍🏫 docência, 🔬 pesquisa, 📊 revisão, 💼 admin. Body text stays emoji‑free.
- Checkmark "Destaques" items use a filled solid color circle with `✓` inside — **not** an emoji.
- Em‑dash not used; commas and periods carry the rhythm.

**Vibe:** technical, earnest, credentials‑forward. Proud but not boastful — specifies bolsa (CAPES scholarship), universities (UERJ, UFF, UFRJ), date ranges. A professor/researcher sensibility, not a startup founder one.

## Visual Foundations

**Color:** white background; **charcoal `#1a1a1a`** for text and heavy surfaces; **electric cyan `#00d9ff`** as the single accent (CTAs, focus rings, hovers, scrollbar thumb); **industrial orange `#ff6b35`** as the secondary (destructive states, secondary hovers, pill tags in "Especialidades"). Neutral ramp is flat grays (`#fafafa → #0a0a0a`). Light theme only is the authored default; dark tokens exist but are not wired into `App.tsx` (defaultTheme="light", not switchable).

**Signature color usage:** section headings include a colored bullet dot (`w-2 h-2 rounded-full` in cyan for primary sections, orange for secondary). Card hover *borders* transition to accent color — cyan borders on "primary" cards, orange on "secondary" cards, green for the "Competências" card. Pill tags inherit the matching pastel tint (cyan‑50 + cyan‑700 text, orange‑50 + orange‑700 text, blue‑50 + blue‑700 text).

**Gradients:** not surfaces — used on text (H1 spans: `from-cyan-500 to-blue-600`, `from-indigo-500 to-violet-600`, `from-orange-500 to-red-600`) and on CTA buttons. Dark "GitHub CTA" block uses `from-gray-900 to-gray-800`. The hero overlay is a *horizontal* gradient (`from-white via-white/80 to-transparent`) over a fixed‑attachment background image.

**Type:** **Space Mono 700** for all headings (`h1–h6`), `letter-spacing: -0.02em`. **IBM Plex Sans** for body (300–700). Mono is also used for small labels (`text-xs font-mono text-gray-600`: "FP" monogram subline, "SCROLL" indicator, pill tags, language chips). The pairing signals "code‑adjacent" without being a full terminal theme.

**Backgrounds:**
- Hero: full‑viewport background image (`hero-background-CFr2chodQBBTUTWnwornNo.webp`, a technical / industrial scene) with a horizontal white‑to‑transparent gradient overlay. `background-attachment: fixed` for subtle parallax.
- Other sections alternate between pure `bg-white` (Projects) and `bg-gradient-to-b from-white to-gray-50` or `from-gray-50 to-white` (About, Contact) — very gentle vertical washes, never loud.
- Every section has **1–2 animated gear SVGs** absolutely positioned in corners at `opacity 0.05–0.2`, rotating continuously at 60s / 40s / 20s durations. This is the single most distinctive decoration.

**Animation:**
- Gears: `animation: spin Ns linear infinite` — 60s slow / 40s medium / 20s fast. Mixed speeds on the same page create the "machine" feel.
- Hero social icons: `whileHover={{ y: -4, rotate: -4 }}, whileTap={{ scale: 0.88, rotate: 8 }}` with `type: 'spring', stiffness: 350, damping: 16`. Signature elastic tap.
- CTA buttons: `whileTap={{ scale: 0.96 }}, whileHover={{ y: -2 }}`, duration 180ms.
- Tab transitions via `AnimatePresence`: opacity + y translate 12px, 300ms `easeOut`.
- Signature easing curve (from `ideas.md`): `cubic-bezier(0.34, 1.56, 0.64, 1)` — "movimento elástico".

**Hover states:** borders change color (→ cyan‑400 / orange‑400 / green‑200); card lifts `-translate-y-1` + `shadow-lg`; icon chips brighten one pastel step (e.g. `from-cyan-100 to-blue-100` → `from-cyan-200 to-blue-200`). Text color shifts to match the section accent.

**Press states:** `scale(0.96)` on primary CTAs, `scale(0.88)` + counter‑rotate on icon buttons (spring‑damped). Buttons never flatten / invert colors on press — scale alone carries it.

**Borders:** hairline `1px solid var(--border)` with `#e0e0e0`. Cards use `border border-gray-100` or `border-gray-200`; on hover the border color animates to the section accent. Focus rings: 3px `ring-ring/50` in cyan.

**Shadows:** conservative. Resting cards are `shadow-sm`; hovered go `shadow-lg`. The single "brand glow" is a cyan box‑shadow (`0 0 20px rgba(0,217,255,0.3)`) reserved for emphasis / glow‑hover utility — see `.glow-accent` / `.glow-accent-hover` in index.css.

**Corner radii:** `0.5rem` (8px) is the base `--radius`. Cards / inputs / buttons all resolve to 6–12px. Pill tags and avatar bubbles use `rounded-full`. No super‑rounded "bubbly" surfaces; no sharp zero‑radius either.

**Cards:** white fill, thin gray border, `p-6` to `p-8` padding, `shadow-sm` resting. Icon header = colored pastel gradient square (`from-cyan-100 to-blue-100`) with a lucide icon inside at the accent color. Title below (bold, charcoal). Content as a vertical list with tight spacing.

**Transparency & blur:** used only in the hero overlay gradient (white at variable alpha). No glassmorphism, no backdrop‑blur elsewhere. Gears are rendered with numeric opacity props (`0.05`–`0.2`).

**Imagery color vibe:** cool/technical — the single hero background leans blue‑gray industrial. No warm filters, no grain, no sepia. Photography is subordinate to typography and the gear motif.

**Layout rules:**
- Centered container, `max-w-6xl` (1152px) for content sections, `max-w-4xl` (896px) for Hero copy block.
- Horizontal padding: `px-4` mobile → `px-6` sm → `px-8` lg.
- Vertical rhythm: `py-20` (80px) between major sections; `mb-16` before grid blocks; `gap-6`/`gap-8` inside grids.
- Grid breakpoints: mobile 1 col → `md:grid-cols-2` or `md:grid-cols-3` at 768px.
- Hero content: text‑left on `md+`, centered on mobile.
- Tabs bar sits in its own 80px‑tall section below the hero.

## Iconography

**Primary icon set:** **Lucide React** (`lucide-react@0.453.0`) — `ArrowRight`, `Github`, `Mail`, `Linkedin`, `GraduationCap`, `Briefcase`, `Award`, `Phone`, `MapPin`, `ExternalLink`, `Code2`. Stroke‑based, 2px stroke weight, `w-4 h-4` (16px) inline / `w-5 h-5` (20px) for emphasis / `w-6 h-6` inside colored chips / `w-8 h-8` for hero‑level icons. In the UI kit we load Lucide from CDN (`unpkg.com/lucide@latest`) and reference icons by name — see `assets/icons/README.md`.

**Brand motif — animated gear:** authored as a component (`AnimatedGear.tsx`), 12 rectangular teeth around a filled center circle, `viewBox 0 0 100 100`. Rendered at 120–320px with three speed presets. This is copied to `assets/gear.svg` (static) and replicated in the UI kit's `AnimatedGear.jsx`.

**Emoji:** used deliberately and **only** in CV‑style bullet lists as category markers — 🎓 🏆 📚 ⚙️ 💻 👨‍🏫 🔬 📊 💼. Never inline in body copy, never on buttons. Avoid introducing new emoji outside this vocabulary.

**Unicode glyphs as icons:** yes — the `✓` checkmark inside the colored "Destaques" circle is the raw character, not SVG. Use plain Unicode for simple marks.

**PNG/raster icons:** none — the project uses SVG (lucide) + animated SVG gear only. Do not introduce raster icons.

**Logo:** a small **"FP" monogram** in a cyan‑to‑blue gradient circle (`w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600`) with white bold text. This is the closest thing to a logo and is copied to `assets/fp-monogram.svg`.

---

## Font substitution note

**Font files are loaded at runtime from Google Fonts** (Space Mono + IBM Plex Sans) rather than bundled as `.ttf` in this design system — this matches how the production site loads them via the `<link>` tag in `client/index.html`. If you need offline `.ttf`/`.woff2` files, download from https://fonts.google.com/specimen/Space+Mono and https://fonts.google.com/specimen/IBM+Plex+Sans and drop them in `fonts/` with a local `@font-face` override.
