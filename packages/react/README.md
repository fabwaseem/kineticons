# kineticons

**2,000+ animated React icons** in outline, duotone and filled, each with a motion of its own. Server Component
friendly, tree-shakeable, typed.

[Browse the icons](https://kineticons.fabwaseem.com/icons) · [Docs](https://kineticons.fabwaseem.com/docs/react)

```bash
npm install kineticons
```

```tsx
import { Bell, Trash } from "kineticons";

<button className="ki-trigger">
  <Bell variant="duotone" size={20} />
  Notifications
</button>;
```

Point at the button and the bell swings. Every icon is a component named in PascalCase (`arrow-right` is
`ArrowRight`), with an `…Icon` alias (`BellIcon`).

## Props

| Prop | Type | Default | |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "duotone" \| "filled"` | `"outline"` | The style |
| `size` | `number \| string` | `24` | Width and height |
| `strokeWidth` | `number` | `1.75` | Stroke in 24-grid units, the same weight at any size |
| `trigger` | `"hover" \| "manual" \| "loop" \| "none"` | `"hover"` | When the icon moves |
| `active` | `boolean` | `false` | With `trigger="manual"`: plays while true |
| `loopEvery` | `number` | `1800` | With `trigger="loop"`: one beat in ms |
| `title` | `string` | | An accessible name |

Plus any SVG attribute; refs go to the `<svg>`.

## Icons chosen at runtime

```tsx
import { KineticIcon } from "kineticons";
import { bell, mail } from "kineticons/data";

<KineticIcon icon={unread ? mail : bell} variant="duotone" />;
```

## Server Components

With React 19 icons render on the server with no client JavaScript; each icon's CSS is hoisted into the head once.
Only `trigger="loop"` uses the client. Reduced motion keeps every icon still.

MIT licence.
