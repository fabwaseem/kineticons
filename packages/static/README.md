# @kineticons/static

**2,800+ animated SVG icons** in outline, duotone and filled, for plain HTML, any framework, CDNs and design tools.

[Browse the icons](https://kineticons.fabwaseem.com/icons) · [Docs](https://kineticons.fabwaseem.com/docs/static)

```bash
npm install @kineticons/static
```

- `svg/outline/<name>.svg`, `svg/duotone/<name>.svg`, `svg/filled/<name>.svg`: each icon with its motion inside.
  Inline in a page, it moves when pointed at.
- `kineticons.css`: the motion for every icon, for pages that inline plain SVGs.
- `icons.json`: every icon's name, title, category, tags and motion.
- `iconify.json`: every icon at rest (no motion) as an Iconify icon set, prefix `kineticons`. Outline has no suffix;
  the other styles add `-duotone` or `-filled` (`kineticons:bell-duotone`). For Iconify tools, Unplugin Icons,
  UnoCSS and Tailwind icon plugins.

```html
<img src="https://cdn.jsdelivr.net/npm/@kineticons/static/svg/duotone/bell.svg" alt="" width="24" height="24" />
```

MIT licence.
