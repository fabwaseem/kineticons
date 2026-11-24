<!--
  Any icon, with its own motion (Svelte 5).

    <button class="ki-trigger"><Icon icon={bell} variant="duotone" /> Notifications</button>
-->
<script lang="ts">
  import { injectStyles, render, type IconDef, type Trigger, type Variant } from "@kineticons/core";
  import type { SVGAttributes } from "svelte/elements";
  import Node from "./Node.svelte";

  interface Props extends Omit<SVGAttributes<SVGSVGElement>, "stroke-width" | "class"> {
    /** extra classes on the <svg> */
    class?: string;
    /** the icon to draw, e.g. `bell` from "@kineticons/svelte/icons" */
    icon: IconDef;
    /** "outline" (default), "duotone" or "filled" */
    variant?: Variant;
    /** width and height in pixels; default 24 */
    size?: number;
    /** stroke in 24-grid units, the same visual weight at any size; default 1.75 */
    strokeWidth?: number;
    /** "hover" (default), "manual" (set `active`), "loop", "none" */
    trigger?: Trigger;
    /** with trigger "manual": plays while true */
    active?: boolean;
    /** with trigger "loop": one beat in ms; default 1800 */
    loopEvery?: number;
    /** an accessible name; the icon is then announced as an image */
    title?: string;
    /** brand logos: draw in the brand's own colour instead of the text colour */
    brand?: boolean;
  }

  let { icon, variant = "outline", size, strokeWidth, trigger = "hover", active = false, loopEvery = 1800, title, brand = false, class: cls = "", ...rest }: Props = $props();

  let beat = $state(false);
  $effect(() => {
    injectStyles(icon);
  });
  $effect(() => {
    if (trigger !== "loop") return;
    const id = setInterval(() => {
      if (!document.hidden) beat = !beat;
    }, loopEvery / 2);
    return () => clearInterval(id);
  });

  const node = $derived.by(() => {
    const loop = trigger === "loop";
    const n = render(icon, { variant, size, strokeWidth, trigger: loop ? "manual" : trigger, active: loop ? beat : active, title, className: cls || undefined, brand });
    const labelled = rest["aria-label"] != null || rest["aria-labelledby"] != null;
    return { ...n, attrs: { ...n.attrs, ...(labelled ? { "aria-hidden": undefined, role: "img" } : {}), ...(rest as Record<string, string | number | undefined>) } };
  });
</script>

<Node {node} />
