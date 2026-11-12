import { baseCss, iconCss } from "./motion";
import { render, stringify, type RenderOptions } from "./render";
import type { IconDef } from "./types";

const minify = (s: string) => s.replace(/\s*\n\s*/g, "").replace(/\s{2,}/g, " ");

/**
 * The icon as SVG markup. With `animated` (the default) its motion is inside it in a `<style>`, so it moves on hover
 * wherever it is placed inline; without, it is a still drawing.
 */
export function toSvg(def: IconDef, o: RenderOptions = {}, animated = true): string {
  const svg = stringify(render(def, { trigger: animated ? "hover" : "none", ...o }));
  return animated ? svg.replace(/(<svg[^>]*>)/, `$1<style>${minify(baseCss() + "\n" + iconCss(def))}</style>`) : svg;
}

/** For a plain web page: the styles once in the head, the icon wherever it goes. */
export function toHtml(def: IconDef, o: RenderOptions = {}): string {
  const svg = stringify(render(def, { trigger: "hover", ...o }));
  return `<!-- once per page, in <head> (or link @kineticons/static/kineticons.css) -->
<style>
${baseCss()}
${iconCss(def)}
</style>

<!-- the icon moves when pointed at; class="ki-trigger" on a button around it makes the whole button its trigger -->
<button class="ki-trigger">
  ${svg}
</button>`;
}
