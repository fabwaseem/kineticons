import * as React from "react";
import { createElement, forwardRef, type CSSProperties, type ReactElement, type SVGProps } from "react";
import { baseCss, iconCss, injectStyles, render, type IconDef, type SvgNode, type Trigger, type Variant } from "@kineticons/core";
import { LoopIcon } from "./LoopIcon";

export interface KineticIconProps extends Omit<SVGProps<SVGSVGElement>, "children" | "ref" | "stroke" | "strokeWidth"> {
  /** the icon to draw, e.g. `bell` from "@kineticons/core/icons" (or use a named component like <Bell />) */
  icon: IconDef;
  /** "outline" (default), "duotone" or "filled" */
  variant?: Variant;
  /** width and height in pixels; default 24 */
  size?: number | string;
  /** stroke in 24-grid units, the same visual weight at any size; default 1.75 */
  strokeWidth?: number;
  /** when it moves: "hover" (default: the icon, or the nearest .ki-trigger, button or link around it), "manual" (set
   * `active`), "loop", "none" */
  trigger?: Trigger;
  /** with trigger "manual": plays while true */
  active?: boolean;
  /** with trigger "loop": one beat in ms, its motion included; default 1800 */
  loopEvery?: number;
  /** an accessible name; the icon is then announced as an image (otherwise it is hidden from screen readers) */
  title?: string;
  /** false: leave the icon's CSS out, for pages that load every icon's motion at once (`@kineticons/static/kineticons.css`).
   * Many icons each bringing a stylesheet slow a page down; one stylesheet does not. Default true. */
  css?: boolean;
  /** brand logos: draw in the brand's own colour (e.g. Spotify green) instead of the text colour */
  brand?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** SVG attribute names to React's (stroke-width → strokeWidth, class → className); data- and aria- stay as they are. */
const prop = (k: string) => (k === "class" ? "className" : k.startsWith("data-") || k.startsWith("aria-") ? k : k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()));

function toElement(n: SvgNode, key: number | undefined, extra?: Record<string, unknown>): ReactElement {
  const props: Record<string, unknown> = { key };
  for (const [k, v] of Object.entries(n.attrs)) if (v !== undefined) props[prop(k)] = v;
  if (extra) Object.assign(props, extra);
  const children = n.text != null ? n.text : n.children?.map((c, i) => toElement(c, i));
  return createElement(n.tag, props, children);
}

/** React 19 hoists <style href precedence> into the head and keeps one of each, on the server as in the browser, so
 * icons work in Server Components with no client code. React 18 has no such hoisting: there the CSS is injected. */
const HOISTS = Number(React.version.split(".")[0]) >= 19;

function useLegacyStyles(icon: IconDef, on: boolean) {
  // a constant branch (the React version never changes at runtime), so hooks are called in the same order every time
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // (read off the namespace: a named import of a client hook would stop the module loading in a Server Component)
  if (!HOISTS) React.useInsertionEffect(() => void (on && injectStyles(icon)), [icon, on]);
}

/**
 * Any icon, with its own motion. Server-safe (no client code) except with trigger="loop".
 *
 *   <button className="ki-trigger"><KineticIcon icon={bell} variant="duotone" /> Notifications</button>
 */
export const KineticIcon = forwardRef<SVGSVGElement, KineticIconProps>(function KineticIcon(
  { icon, variant, size, strokeWidth, trigger = "hover", active, loopEvery = 1800, title, className, style, css = true, brand, ...rest },
  ref,
) {
  useLegacyStyles(icon, css);
  if (trigger === "loop") return <LoopIcon ref={ref} icon={icon} every={loopEvery} {...{ variant, size, strokeWidth, title, className, style, css, brand, ...rest }} />;
  const px = typeof size === "string" ? parseFloat(size) : size;
  const node = render(icon, { variant, size: px, strokeWidth, trigger, active, title, className, brand });
  const labelled = rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const svg = toElement(node, undefined, {
    ref,
    style,
    ...(typeof size === "string" ? { width: size, height: size } : {}),
    ...(labelled ? { "aria-hidden": undefined, role: rest.role ?? "img" } : {}),
    ...rest,
  });
  if (!HOISTS || !css) return svg;
  return (
    <>
      <style href="kineticons" precedence="kineticons">{baseCss()}</style>
      <style href={`kineticons-${icon.name}`} precedence="kineticons">{iconCss(icon)}</style>
      {svg}
    </>
  );
});

/** A named component for one icon: <Bell size={20} />. */
export function createIcon(icon: IconDef, displayName: string) {
  const C = forwardRef<SVGSVGElement, Omit<KineticIconProps, "icon">>(function Icon(props, ref) {
    return <KineticIcon ref={ref} icon={icon} {...props} />;
  });
  C.displayName = displayName;
  return C;
}
