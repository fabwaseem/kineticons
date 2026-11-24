import type { Decl, IconDef, PartMotion } from "./types";

/**
 * The motion system. Every moving part arrives with a little spring and leaves calmly (never bouncing on the way out),
 * parts follow each other by a few tens of milliseconds, and movements stay small (1–2 units of a 24 grid).
 * Everything is CSS, so the same motion plays in React, in a standalone SVG and in plain HTML.
 */
export const TOKENS = {
  /** way in: with a little overshoot */
  springIn: "cubic-bezier(.34,1.56,.64,1)",
  /** way in for turns and sweeps, and every way out: no overshoot */
  smooth: "cubic-bezier(.22,1,.36,1)",
  durationIn: 460,
  durationOut: 260,
  /** the duotone fill at rest and while active */
  toneRest: 0.16,
  toneActive: 0.28,
} as const;

const css = (d?: Decl): string => {
  if (!d) return "";
  const out: string[] = [];
  if (d.transform !== undefined) out.push(`transform:${d.transform}`);
  if (d.opacity !== undefined) out.push(`opacity:${d.opacity}`);
  if (d.d !== undefined) out.push(`d:${d.d}`);
  if (d.strokeDasharray !== undefined) out.push(`stroke-dasharray:${d.strokeDasharray}`);
  if (d.strokeDashoffset !== undefined) out.push(`stroke-dashoffset:${d.strokeDashoffset}`);
  return out.join(";");
};

/** What an icon moves with when pointed at or focused: anything marked `ki-trigger`, and the controls icons sit in. */
export const TRIGGERS: string = `:is(.ki-trigger,button,a,summary,[role="button"],[role="tab"],[role="menuitem"],[role="option"],[role="checkbox"],[role="radio"],[role="switch"])`;

/** Where an icon is active: pointed at or focused (itself, or the control around it), or set active. */
const ACTIVE = `${TRIGGERS}:is(:hover,:focus-visible) svg.ki[data-trigger="hover"],svg.ki[data-trigger="hover"]:hover,svg.ki[data-active="true"]:not([data-trigger="none"])`;

/** The brand logos' motion, as a part's `animation`: a traced outline draws itself along its path; a logo drawn as
 * a fill (filled, and line-art logos) is revealed across, at its exact shape. The keyframes are in the base CSS, so a thousand logos share one set. */
export const REDRAW = "var(--ki-redraw) 1.15s cubic-bezier(.65,0,.35,1) both";

/** What every icon shares: the box, the duotone fill, the way parts move, the redraw keyframes, and calm for reduced
 * motion. */
export function baseCss(): string {
  const t = TOKENS;
  return `
svg.ki{overflow:visible;--ki-tone:${t.toneRest};flex-shrink:0}
svg.ki [data-p]{transform-box:fill-box;transform-origin:center;transition-property:transform,opacity,d,stroke-dashoffset;transition-duration:var(--ki-out,${t.durationOut}ms);transition-timing-function:${t.smooth}}
svg.ki .ki-tone{fill:currentColor;stroke:none;fill-opacity:var(--ki-tone);transition:fill-opacity .25s ${t.smooth}}
svg.ki .ki-halo{stroke-opacity:var(--ki-tone);transition:stroke-opacity .25s ${t.smooth}}
${ACTIVE}{--ki-tone:${t.toneActive}}
svg.ki:is(${ACTIVE}) [data-p]{transition-duration:var(--ki-in,${t.durationIn}ms);transition-timing-function:var(--ki-ease,${t.springIn});transition-delay:var(--ki-delay,0ms)}
svg.ki{--ki-redraw:ki-redraw-line}svg.ki [data-p][fill]{--ki-redraw:ki-redraw-fill}
@keyframes ki-redraw-line{from{stroke-dasharray:1;stroke-dashoffset:1}to{stroke-dasharray:1;stroke-dashoffset:0}}
@keyframes ki-redraw-fill{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@media (prefers-reduced-motion:reduce){svg.ki [data-p]{transition:none!important;animation:none!important}}
`.trim();
}

/**
 * One icon's motion, as CSS: its parts at rest, then (once, with each part's rule nested inside) the condition under
 * which it is active, so the long trigger selector is written once per icon rather than once per part.
 */
export function iconCss(def: IconDef): string {
  const rest: string[] = [];
  const on: string[] = [];
  for (const [part, m] of Object.entries(def.motion ?? {})) {
    const [r, o] = partCss(def.name, part, m);
    if (r) rest.push(r);
    if (o) on.push(o);
  }
  const out: string[] = [];
  // nested under the icon's own class, so only this icon's <svg> is ever tested against these rules
  const root = `.ki-${def.name}`;
  if (rest.length) out.push(`svg${root}{${rest.join("")}}`);
  if (on.length) out.push(`:is(${ACTIVE})${root}{${on.join("")}}`);
  if (def.keyframes) out.push(def.keyframes.trim());
  return out.join("\n");
}

/** The class a part of an icon carries (`ki-bell__clapper`; the <svg> itself carries `ki-bell`). Rules aim at these
 * rather than at `[data-p]` or `[data-icon]`: browsers file class selectors by name, so an element is only tested
 * against its own icon's rules, not every icon's. */
export const partClass = (icon: string, part: string): string => `ki-${icon}__${part.replace(/[^\w-]/g, "_")}`;

/** A part's rules: at rest, and while its icon is active (each nested under its icon). "root" is the icon itself. */
function partCss(icon: string, part: string, m: PartMotion): [string, string] {
  const sel = `.${partClass(icon, part)}`;
  const rest: string[] = [];
  if (m.origin) rest.push(`transform-origin:${m.origin}`);
  if (m.box) rest.push(`transform-box:${m.box}`);
  const from = css(m.from);
  if (from) rest.push(from);
  const on: string[] = [];
  const to = css(m.to);
  if (to) on.push(to);
  if (m.animation) on.push(`animation:${m.animation}`);
  if (m.delay) on.push(`--ki-delay:${m.delay}ms`);
  if (m.duration) on.push(`--ki-in:${m.duration}ms`);
  if (m.ease === "smooth") on.push(`--ki-ease:${TOKENS.smooth}`);
  return [rest.length ? `${sel}{${rest.join(";")}}` : "", on.length ? `${sel}{${on.join(";")}}` : ""];
}

/** All the CSS for these icons (the base once). */
export function stylesheet(defs: IconDef[]): string {
  return [baseCss(), ...defs.map(iconCss)].join("\n");
}
