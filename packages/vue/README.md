# @kineticons/vue

**2,000+ animated Vue 3 icons** in outline, duotone and filled, each with a motion of its own.

[Browse the icons](https://kineticons.fabwaseem.com/icons) · [Docs](https://kineticons.fabwaseem.com/docs/vue)

```bash
npm install @kineticons/vue
```

```vue
<script setup lang="ts">
import { Bell } from "@kineticons/vue";
</script>

<template>
  <button class="ki-trigger">
    <Bell variant="duotone" :size="20" />
    Notifications
  </button>
</template>
```

Props: `variant`, `size`, `strokeWidth`, `trigger`, `active`, `loopEvery`, `title`, plus any SVG attribute. For an
icon chosen at runtime, use `KineticIcon` with data from `@kineticons/vue/icons`:

```vue
<KineticIcon :icon="bell" variant="duotone" />
```

MIT licence.
