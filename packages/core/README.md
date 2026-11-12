# @kineticons/core

The drawing and motion behind [Kineticons](https://kineticons.fabwaseem.com), without a framework. The React, Vue and
Svelte packages are built on it; use it directly for other renderers, server-side SVG or tooling.

```bash
npm install @kineticons/core
```

```ts
import { render, toSvg, injectStyles } from "@kineticons/core";
import { bell } from "@kineticons/core/icons";

const svg = toSvg(bell, { variant: "duotone", size: 20 }); // markup with the motion inside
const tree = render(bell, { variant: "filled" });           // { tag, attrs, children } for any renderer
injectStyles(bell);                                          // the icon's CSS, added to the page once
```

`@kineticons/core/icons` exports every icon by camelCase name and `ICONS`, the whole set.

MIT licence.
