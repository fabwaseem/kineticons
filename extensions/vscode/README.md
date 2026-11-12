# Kineticons for VS Code

Search and insert [Kineticons](https://kineticons.fabwaseem.com) without leaving the editor: 2,000+ open-source,
rounded icons in outline, duotone and filled, each with a motion of its own.

Every icon is bundled with the extension, so search, previews and SVG markup all work offline.

## Commands

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and type **Kineticons**.

| Command | What it does |
| --- | --- |
| **Kineticons: Insert icon** | Search every icon by name, category or tag, pick a style, and insert it at the cursor. |
| **Kineticons: Copy SVG** | Same search; copies the icon's SVG, motion included, to the clipboard. |
| **Kineticons: Open in browser** | Opens the icon's page on kineticons.fabwaseem.com. |

The picker shows a preview of each icon. Search matches the icon's name, its category and its tags, so
"alert" finds `bell` and "secure" finds `lock`.

## What gets inserted

The insert command writes the right thing for the file you are in, and adds the import for you.

**React** (`.jsx`, `.tsx`), using the [`kineticons`](https://www.npmjs.com/package/kineticons) package:

```tsx
import { Bell } from "kineticons";

<Bell variant="duotone" />
```

If the file already imports from `kineticons`, the icon is added to that import.

**Vue** (`.vue`), using [`@kineticons/vue`](https://www.npmjs.com/package/@kineticons/vue). The import goes into
`<script setup>`, which is created when the file has no script yet:

```vue
<script setup lang="ts">
import { Bell } from "@kineticons/vue";
</script>

<template>
  <Bell variant="duotone" />
</template>
```

**Svelte** (`.svelte`), using [`@kineticons/svelte`](https://www.npmjs.com/package/@kineticons/svelte):

```svelte
<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { bell } from "@kineticons/svelte/icons";
</script>

<Icon icon={bell} variant="duotone" />
```

**HTML and everything else**: the icon's SVG markup. Each SVG carries its own motion CSS, so it animates on hover
with nothing else to load.

Outline is the default style, so it is inserted without a `variant` prop.

## Install the icon package

The extension inserts code; your project still needs the package for its framework:

```bash
npm install kineticons           # React
npm install @kineticons/vue      # Vue
npm install @kineticons/svelte   # Svelte
```

## Links

- [Website and icon browser](https://kineticons.fabwaseem.com)
- [Docs](https://kineticons.fabwaseem.com/docs)
- [Source and issues](https://github.com/fabwaseem/kineticons)

## Licence

[MIT](LICENSE) © Waseem Anjum and Kineticons contributors.
