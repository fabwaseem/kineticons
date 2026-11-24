# @kineticons/svelte

**2,800+ animated Svelte 5 icons** in outline, duotone and filled, each with a motion of its own.

[Browse the icons](https://kineticons.fabwaseem.com/icons) · [Docs](https://kineticons.fabwaseem.com/docs/svelte)

```bash
npm install @kineticons/svelte
```

```svelte
<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { bell } from "@kineticons/svelte/icons";
</script>

<button class="ki-trigger">
  <Icon icon={bell} variant="duotone" size={20} />
  Notifications
</button>
```

Props: `icon` (required), `variant`, `size`, `strokeWidth`, `trigger`, `active`, `loopEvery`, `title`, plus any SVG
attribute.

MIT licence.
