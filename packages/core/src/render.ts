import type { IconDef, Part, Trigger, Variant } from "./types";
import { partClass } from "./motion";

/**
 * An SVG element as plain data: what every framework package turns into its own elements, and what the string
 * exporter prints. Attribute names are SVG's own (`stroke-width`, `viewBox`, `class`); `text` is a text child.
 */
export interface SvgNode {
  tag: string;
  attrs: Record<string, string | number | undefined>;
  children?: SvgNode[];
  text?: string;
}

export interface RenderOptions {
  variant?: Variant;
  /** pixels (the icon is square); default: the icon's grid (24) */
  size?: number;
  /** stroke in 24-grid units, kept visually the same at any size; default the icon's own (1.75) */
  strokeWidth?: number;
  trigger?: Trigger;
  active?: boolean;
  /** an accessible name: the icon is then announced as an image */
  title?: string;
  /** extra classes on the <svg> */
  className?: string;
  /** brand logos: draw in the brand's own colour instead of the text colour */
  brand?: boolean;
}

/** The style an icon actually draws in (window controls come in outline only). */
export const variantOf = (def: IconDef, v: Variant = "outline"): Variant => (def.variants && !def.variants.includes(v) ? def.variants[0] : v);

/** A short, stable id for one way of drawing an icon. Two identical drawings share their mask ids harmlessly; any
 * difference (style, stroke, size) gives different ids, so masks never collide on a page. */
function uid(def: IconDef, variant: string, sw: number): string {
  let h = 2166136261;
  for (const c of `${def.name}|${variant}|${sw}`) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0).toString(36);
}

const el = (tag: string, attrs: SvgNode["attrs"], children?: (SvgNode | null | false | undefined)[]): SvgNode => ({
  tag,
  attrs,
  children: children?.filter(Boolean) as SvgNode[] | undefined,
});

/** One drawing, three styles: the icon as an SVG node tree. */
export function render(def: IconDef, o: RenderOptions = {}): SvgNode {
  const grid = def.grid ?? 24;
  const variant = variantOf(def, o.variant);
  const size = o.size ?? grid;
  const sw = o.strokeWidth != null ? (o.strokeWidth * grid) / 24 : (def.stroke ?? (1.75 * grid) / 24);
  const mask = `ki-${def.name}-${uid(def, variant, sw)}`;
  const parts = def.parts;

  const stroke = (pt: Part, extra: SvgNode["attrs"] = {}) =>
    pt.d ? el("path", { "data-p": pt.p, d: pt.d, pathLength: pt.draw ? 1 : undefined, ...extra }) : null;
  const solid = (pt: Part) => el("path", { "data-p": pt.p, d: pt.area ?? pt.d, fill: "currentColor", stroke: pt.exact ? "none" : undefined, pathLength: 1 });
  const fullRect = (fill: string) => el("rect", { x: -grid, y: -grid, width: grid * 3, height: grid * 3, fill });
  const maskEl = (id: string, children: (SvgNode | null)[]) =>
    el("mask", { id, maskUnits: "userSpaceOnUse", x: -grid, y: -grid, width: grid * 3, height: grid * 3 }, [fullRect("#fff"), ...children]);

  // an icon made only of lines (or lines with small solid bits) has little to fill: filled cuts the drawing out of a
  // solid tile, and duotone lays a soft, wide highlight of the lines behind them
  const lineOnly = !parts.some((p) => p.role === "body" || p.solid);
  let body: SvgNode[];
  let wrapped = false;
  if ((lineOnly || def.tile) && variant === "filled") {
    const k = 0.62;
    const c = grid / 2;
    const inset = grid / 12;
    // lines are cut out at a weight that stays legible on the tile; a solid shape (a line-art logo) is cut out as drawn
    const glyph = parts.map((pt) => (pt.solid ? el("path", { d: pt.area ?? pt.d, fill: "#000", stroke: "none" }) : stroke(pt, { stroke: "#000", "stroke-width": (sw * 1.15) / k })));
    // a logo cut out of the tile moves as the tile (its motion would not play inside a mask)
    const tileP = parts.find((pt) => pt.solid)?.p;
    body = [
      maskEl(mask, [
        el("g", { transform: `translate(${c} ${c}) scale(${k}) translate(${-c} ${-c})` }, def.motion?.root ? [el("g", { "data-p": "root" }, glyph)] : glyph),
      ]),
      el("rect", { "data-p": tileP, x: inset, y: inset, width: grid - 2 * inset, height: grid - 2 * inset, rx: grid / 4, fill: "currentColor", stroke: "none", mask: `url(#${mask})` }),
    ];
    wrapped = true;
  } else if (lineOnly && variant === "duotone") {
    body = [
      // the attribute is a fallback: the stylesheet's --ki-tone (soft at rest, stronger when active) wins when loaded
      ...parts.map((pt) =>
        pt.d ? el("path", { class: "ki-halo", "data-p": pt.p, d: pt.d, pathLength: pt.draw ? 1 : undefined, "stroke-width": sw * 3, "stroke-opacity": 0.16 }) : null,
      ),
      ...parts.map((pt) => stroke(pt)),
    ].filter(Boolean) as SvgNode[];
  } else if (variant === "filled") {
    const bodies = parts.filter((p) => p.role === "body");
    const details = parts.filter((p) => p.role === "detail");
    const lines = parts.filter((p) => !p.role || p.role === "line");
    const knocks = lines.filter((p) => p.knock);
    const cut = details.length + knocks.length > 0;
    body = [
      // details, and lines that cross a body, are cut out of the bodies...
      cut ? maskEl(mask, [...details, ...knocks].map((pt) => stroke(pt, { stroke: "#000", "stroke-width": sw + 0.5 }))) : null,
      // ...and a crossing line is drawn only where it runs outside them (a power line above its circle)
      knocks.length
        ? maskEl(`${mask}-out`, bodies.map((pt) => el("path", { "data-p": pt.p, d: pt.area ?? pt.d, fill: "#000", stroke: "#000", "stroke-width": sw })))
        : null,
      el("g", { mask: cut ? `url(#${mask})` : undefined }, bodies.flatMap((pt) => [solid(pt), pt.exact ? null : stroke(pt)])),
      ...lines.map((pt) => (pt.solid ? solid(pt) : pt.knock ? el("g", { mask: `url(#${mask}-out)` }, [stroke(pt)]) : stroke(pt))),
    ].filter(Boolean) as SvgNode[];
  } else {
    const inset = grid / 12;
    body = [
      // a line-art logo has little area of its own to tint: duotone lays it on a soft tile, the one filled cuts it from
      variant === "duotone" && def.tile
        ? el("rect", { class: "ki-tone", x: inset, y: inset, width: grid - 2 * inset, height: grid - 2 * inset, rx: grid / 4 })
        : null,
      ...(variant === "duotone" && !def.tile ? parts.filter((p) => p.role === "body" || p.tint).map((pt) => el("path", { class: "ki-tone", "data-p": pt.p, d: pt.tint ?? pt.area ?? pt.d })) : []),
      ...parts.map((pt) => (pt.solid ? solid(pt) : stroke(pt))),
    ].filter(Boolean) as SvgNode[];
  }

  const content = def.motion?.root && !wrapped ? [el("g", { "data-p": "root" }, body)] : body;
  // each moving part also carries its icon-specific class, which the motion CSS aims at (see partClass)
  const tag = (n: SvgNode | null): void => {
    if (!n) return;
    const p = n.attrs["data-p"];
    if (p != null) n.attrs.class = [n.attrs.class, partClass(def.name, String(p))].filter(Boolean).join(" ");
    n.children?.forEach(tag);
  };
  content.forEach((n) => tag(n as SvgNode | null));
  return el(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: `0 0 ${grid} ${grid}`,
      width: size,
      height: size,
      fill: "none",
      stroke: "currentColor",
      "stroke-width": sw,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      // a brand logo in its own colour: `color` sets currentColor for the drawing
      color: o.brand && def.brandColor ? def.brandColor : undefined,
      class: ["ki", `ki-${def.name}`, o.className].filter(Boolean).join(" "),
      "data-icon": def.name,
      "data-variant": variant,
      "data-trigger": o.trigger ?? "hover",
      "data-active": o.active ? "true" : undefined,
      role: o.title ? "img" : undefined,
      "aria-hidden": o.title ? undefined : "true",
    },
    [o.title ? { tag: "title", attrs: {}, text: o.title } : null, ...content],
  );
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** A node tree as markup. */
export function stringify(n: SvgNode): string {
  const attrs = Object.entries(n.attrs)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => ` ${k}="${esc(String(v))}"`)
    .join("");
  const inner = n.text != null ? esc(n.text) : (n.children ?? []).map(stringify).join("");
  return inner ? `<${n.tag}${attrs}>${inner}</${n.tag}>` : `<${n.tag}${attrs}/>`;
}
