/**
 * The site's controls as class recipes, so every button, icon button, chip and field looks and behaves the same on
 * every page (see DESIGN.md, v3 "Spotlight"). Plain strings, so server and client components can both use them. Every control is a
 * pill; sizes share one height scale (36, 40, 48) and one type scale.
 */

export type BtnVariant = "accent" | "primary" | "secondary" | "ghost" | "soft";
export type BtnSize = "sm" | "md" | "lg";

const BASE =
  "ki-trigger inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 active:scale-[.98] disabled:pointer-events-none disabled:opacity-50";

const SIZE: Record<BtnSize, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-10 px-4 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

const LOOK: Record<BtnVariant, string> = {
  // the one loud action on a screen
  accent: "bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_12px_30px_-12px_var(--glow),inset_0_1px_0_rgba(255,255,255,.25)] hover:brightness-110",
  // the usual action
  primary: "bg-ink text-bg hover:bg-[color-mix(in_srgb,var(--ink)_88%,var(--bg))]",
  // a second choice beside a primary
  secondary: "bg-surface text-ink shadow-[var(--edge)] hover:bg-surface-2",
  // quiet, in toolbars and headers
  ghost: "text-ink-2 hover:bg-surface-3 hover:text-ink",
  // small utilities (copy, download)
  soft: "bg-surface-3 text-ink-2 hover:bg-[color-mix(in_srgb,var(--surface-3)_70%,var(--ink)_8%)] hover:text-ink",
};

export const btn = (variant: BtnVariant = "primary", size: BtnSize = "md", extra = "") => `${BASE} ${SIZE[size]} ${LOOK[variant]} ${extra}`;

/** A round button holding only an icon (give it an aria-label). `on` for a pressed toggle. */
export const iconBtn = (on = false, size: "sm" | "md" | "lg" = "md", extra = "") =>
  `ki-trigger grid shrink-0 place-items-center rounded-full transition-colors duration-200 ${size === "sm" ? "size-8" : size === "lg" ? "size-10" : "size-9"} ${
    on ? "bg-accent-soft text-accent-ink" : "text-muted hover:bg-surface-3 hover:text-ink"
  } ${extra}`;

/** A choice among several shown as separate pills (category tabs, parts, frameworks). */
export const chip = (on = false, extra = "") =>
  `ki-trigger inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-4 text-[13px] font-medium transition-colors duration-200 ${
    on ? "border-transparent bg-ink text-bg" : "border-transparent text-muted hover:bg-surface hover:text-ink"
  } ${extra}`;

/** A small label: a tag, a count, a note on a demo. */
export const tag = (extra = "") => `inline-flex items-center rounded-full bg-surface-3 px-3 py-1 text-[12px] text-ink-2 ${extra}`;

/** A text field's frame (a label wrapping an icon and an input). */
export const field = (extra = "") =>
  `flex min-w-0 items-center gap-2.5 rounded-full bg-surface transition-[background-color,box-shadow] duration-200 ${
    // a caller that sets its own shadows replaces these (two arbitrary shadows would fight over the cascade)
    extra.includes("shadow-") ? "" : "shadow-[var(--edge)] focus-within:shadow-[var(--edge),0_0_0_4px_var(--accent-soft)]"
  } ${extra}`;

/** A sidebar or menu item; `on` for the current one. */
export const navItem = (on = false, extra = "") =>
  `flex w-full items-center justify-between gap-3 rounded-full px-3.5 py-1.5 text-left text-[14px] transition-colors duration-200 ${
    on ? "bg-surface font-medium text-ink" : "text-muted hover:bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] hover:text-ink"
  } ${extra}`;

/** A small heading over a group (sidebar groups, footer columns, details on the icon page). */
export const eyebrow = "text-[13px] font-medium text-faint";
