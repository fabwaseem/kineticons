<div align="center">

# Kineticons

**Icons that move like they mean it.**

2,800+ open-source, rounded icons and tech logos in outline, duotone and filled, each with a motion of its own.<br />
For React, Vue, Svelte and plain HTML.

[Website](https://kineticons.fabwaseem.com) · [Browse icons](https://kineticons.fabwaseem.com/icons) · [Docs](https://kineticons.fabwaseem.com/docs) · [npm](https://www.npmjs.com/package/kineticons)

[![npm](https://img.shields.io/npm/v/kineticons?color=ff5a2d&label=kineticons)](https://www.npmjs.com/package/kineticons)
[![CI](https://github.com/fabwaseem/kineticons/actions/workflows/ci.yml/badge.svg)](https://github.com/fabwaseem/kineticons/actions/workflows/ci.yml)
[![MIT licence](https://img.shields.io/badge/licence-MIT-15131c)](LICENSE)

</div>

---

Every icon moves the way its object does: a bell swings from its top, a padlock's shackle drops shut, a battery fills up.
The motion is plain CSS, so it plays the same in every framework, needs no animation library, and stays still for
visitors who ask for reduced motion.

## Packages

| Package | For | Install |
| --- | --- | --- |
| [`kineticons`](packages/react) | React 18/19, Next.js (Server Components), Remix, Vite | `npm install kineticons` |
| [`@kineticons/vue`](packages/vue) | Vue 3, Nuxt | `npm install @kineticons/vue` |
| [`@kineticons/svelte`](packages/svelte) | Svelte 5, SvelteKit | `npm install @kineticons/svelte` |
| [`@kineticons/static`](packages/static) | Plain HTML, CDNs, design tools: SVG files, one stylesheet, a JSON index | `npm install @kineticons/static` |
| [`@kineticons/core`](packages/core) | The renderer and motion, without a framework | `npm install @kineticons/core` or [`jsr add @kineticons/core`](https://jsr.io/@kineticons/core) |

Also on [Iconify](packages/static#readme) (`iconify.json` in `@kineticons/static`), in [Figma](https://www.figma.com/community/file/1702809638068059955/kineticons)
(every icon a component with a Style property), in [VS Code](https://marketplace.visualstudio.com/items?itemName=fabwaseem.kineticons)
([source](extensions/vscode)) and in [Raycast](extensions/raycast).

## Quick start

```tsx
import { Bell } from "kineticons";

<button className="ki-trigger">
  <Bell variant="duotone" size={20} />
  Notifications
</button>;
```

Point at the button and the bell swings. `ki-trigger` makes the whole button wake its icon; buttons, links and tabs
count as triggers on their own too.

```vue
<script setup lang="ts">
import { Bell } from "@kineticons/vue";
</script>

<template>
  <Bell variant="duotone" :size="20" />
</template>
```

```svelte
<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { bell } from "@kineticons/svelte/icons";
</script>

<Icon icon={bell} variant="duotone" size={20} />
```

```html
<!-- every SVG carries its own motion -->
<img src="https://cdn.jsdelivr.net/npm/@kineticons/static/svg/duotone/bell.svg" alt="" width="20" height="20" />
```

## Features

- **2,800+ icons** across 21 categories, from app chrome to weather, food and finance, including 750+ tech stack logos (languages, frameworks, databases, cloud and developer tools).
- **Three styles from one drawing**: outline, duotone and filled switch without anything shifting.
- **A motion for every icon**, triggered on hover or focus, while something is on, on a loop, or never.
- **Server-first**: in React 19 icons render in Server Components with no client JavaScript.
- **Tree-shakeable**: only the icons you import are bundled; each adds well under 1 KB gzipped.
- **Accessible**: hidden from screen readers unless labelled, motion on keyboard focus, still for reduced motion.
- **Typed**: written in TypeScript, with types for every package.

## Props

| Prop | Type | Default | |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "duotone" \| "filled"` | `"outline"` | The style |
| `size` | `number \| string` | `24` | Width and height |
| `strokeWidth` | `number` | `1.75` | Stroke in 24-grid units, the same weight at any size |
| `trigger` | `"hover" \| "manual" \| "loop" \| "none"` | `"hover"` | When the icon moves |
| `active` | `boolean` | `false` | With `trigger="manual"`: plays while true |
| `title` | `string` | | An accessible name |

See the [docs](https://kineticons.fabwaseem.com/docs) for each framework, styles, motion, accessibility and the API.

## Development

```bash
pnpm install
pnpm build          # every package
pnpm dev            # the website, http://localhost:5190
pnpm check          # draws every icon in every style and checks every motion
```

The repository is a pnpm workspace:

```
packages/core     the renderer, motion CSS and every icon's data
packages/react    kineticons
packages/vue      @kineticons/vue
packages/svelte   @kineticons/svelte
packages/static   @kineticons/static (built from core)
apps/web          the website (Next.js, static export)
scripts/          icon import, per-icon motions, package generation and checks
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) to add or improve an icon.

## Licence

[MIT](LICENSE) © Waseem Anjum and Kineticons contributors.
