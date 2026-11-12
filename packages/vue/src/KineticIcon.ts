import { defineComponent, h, onBeforeUnmount, onMounted, ref, type PropType, type VNode } from "vue";
import { injectStyles, render, type IconDef, type SvgNode, type Trigger, type Variant } from "@kineticons/core";

const props = {
  /** the icon to draw, e.g. `bell` from "@kineticons/vue/icons" (or use a named component like <Bell />) */
  icon: { type: Object as PropType<IconDef>, required: true as const },
  /** "outline" (default), "duotone" or "filled" */
  variant: { type: String as PropType<Variant>, default: "outline" },
  /** width and height in pixels; default 24 */
  size: { type: [Number, String] as PropType<number | string>, default: undefined },
  /** stroke in 24-grid units, the same visual weight at any size; default 1.75 */
  strokeWidth: { type: Number, default: undefined },
  /** "hover" (default), "manual" (set `active`), "loop", "none" */
  trigger: { type: String as PropType<Trigger>, default: "hover" },
  /** with trigger "manual": plays while true */
  active: { type: Boolean, default: false },
  /** with trigger "loop": one beat in ms; default 1800 */
  loopEvery: { type: Number, default: 1800 },
  /** an accessible name; the icon is then announced as an image */
  title: { type: String, default: undefined },
};

function toVNode(n: SvgNode, extra?: Record<string, unknown>): VNode {
  const attrs: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(n.attrs)) if (v !== undefined) attrs[k] = v;
  if (extra) Object.assign(attrs, extra);
  return h(n.tag, attrs, n.text != null ? n.text : n.children?.map((c) => toVNode(c)));
}

/**
 * Any icon, with its own motion.
 *
 *   <button class="ki-trigger"><KineticIcon :icon="bell" variant="duotone" /> Notifications</button>
 */
export const KineticIcon = defineComponent({
  name: "KineticIcon",
  inheritAttrs: false,
  props,
  setup(p, { attrs }) {
    const beat = ref(false);
    let timer = 0;
    // the motion CSS goes in the page once per icon (in the browser; on the server the icon is drawn still)
    injectStyles(p.icon);
    onMounted(() => {
      injectStyles(p.icon);
      if (p.trigger === "loop")
        timer = window.setInterval(() => {
          if (!document.hidden) beat.value = !beat.value;
        }, p.loopEvery / 2);
    });
    onBeforeUnmount(() => window.clearInterval(timer));
    return () => {
      const loop = p.trigger === "loop";
      const px = typeof p.size === "string" ? parseFloat(p.size) : p.size;
      const node = render(p.icon, {
        variant: p.variant,
        size: px,
        strokeWidth: p.strokeWidth,
        trigger: loop ? "manual" : p.trigger,
        active: loop ? beat.value : p.active,
        title: p.title,
      });
      const labelled = attrs["aria-label"] != null || attrs["aria-labelledby"] != null;
      return toVNode(node, {
        ...(typeof p.size === "string" ? { width: p.size, height: p.size } : {}),
        ...(labelled ? { "aria-hidden": undefined, role: "img" } : {}),
        ...attrs,
        class: ["ki", attrs.class].filter(Boolean),
      });
    };
  },
});

/** A named component for one icon: <Bell :size="20" />. */
export function createIcon(icon: IconDef, name: string) {
  return defineComponent({
    name,
    inheritAttrs: false,
    props: { ...props, icon: { type: Object as PropType<IconDef>, default: () => icon } },
    setup(p, { attrs }) {
      return () => h(KineticIcon, { ...attrs, ...p, icon });
    },
  });
}
