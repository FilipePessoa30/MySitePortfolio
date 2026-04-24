# Icons

The portfolio uses **Lucide** exclusively. At runtime the UI kit loads:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

Icons are rendered by setting `data-lucide="name"` on an `<i>` and calling `lucide.createIcons()` after the DOM is ready. Stroke weight 2px, default 24px. Used names on the site:

- Navigation & actions: `arrow-right`, `arrow-up-right`, `external-link`, `chevron-down`
- Identity: `graduation-cap`, `briefcase`, `award`, `code-2`
- Contact: `mail`, `phone`, `map-pin`
- Social: `github`, `linkedin`

**Brand motif:** the animated **gear** (`../gear.svg` or `<AnimatedGear>` component) is not a lucide icon — it is authored by the brand. Use it in corners of sections at 5–20% opacity, rotating continuously.

**Unicode glyphs** used as icons: `✓` inside a filled colored circle for "Destaques" items. Keep the glyph raw, don't substitute with an SVG.

**Emoji** are reserved for CV list markers only: 🎓 🏆 📚 ⚙️ 💻 👨‍🏫 🔬 📊 💼. Never on buttons or inside body paragraphs.
