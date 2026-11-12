/**
 * Kineticons core: the drawing and the motion, without a framework. Icons themselves are in "@kineticons/core/icons".
 *
 *   import { render, toSvg, injectStyles } from "@kineticons/core";
 *   import { bell } from "@kineticons/core/icons";
 *   document.body.insertAdjacentHTML("beforeend", toSvg(bell, { variant: "duotone" }));
 */
export { render, stringify, variantOf, type RenderOptions, type SvgNode } from "./render";
export { toSvg, toHtml } from "./svg";
export { injectStyles, stylesFor } from "./dom";
export { baseCss, iconCss, stylesheet, TOKENS, TRIGGERS } from "./motion";
export { preset, type Preset } from "./presets";
export * from "./types";
