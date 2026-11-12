import { environment } from "@raycast/api";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const STYLES = ["outline", "duotone", "filled"] as const;
export type Style = (typeof STYLES)[number];

export interface KineticIcon {
  /** kebab-case, as in the file name: `arrow-right` */
  name: string;
  title: string;
  category: string;
  tags: string[];
  /** what the icon does when pointed at */
  motion: string;
  grid: number;
  stroke: number;
  /** this icon's own motion CSS, which follows the shared stylesheet */
  css: string;
  /** the drawing of each style: what goes inside the `<svg>` after its `<style>` */
  svg: Partial<Record<Style, string>>;
}

interface IconData {
  version: string;
  /** the stylesheet every icon starts with */
  base: string;
  icons: KineticIcon[];
}

export const SITE_URL = "https://kineticons.fabwaseem.com";

let data: IconData | undefined;

/** The whole set, packed by scripts/sync-icons.mjs from the @kineticons/static package. */
export function loadIcons(): IconData {
  data ??= JSON.parse(readFileSync(join(environment.assetsPath, "icons.json"), "utf8")) as IconData;
  return data;
}

/** The style the icon is drawn in: every icon has all three today, but fall back to its first if one is missing. */
export function styleOf(icon: KineticIcon, style: Style): Style {
  return icon.svg[style] !== undefined ? style : (STYLES.find((s) => icon.svg[s] !== undefined) ?? "outline");
}

// must match openingTag() in scripts/sync-icons.mjs
function openingTag(icon: KineticIcon, style: Style): string {
  const g = icon.grid;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${g} ${g}" width="${g}" height="${g}" fill="none" stroke="currentColor" stroke-width="${icon.stroke}" stroke-linecap="round" stroke-linejoin="round" class="ki" data-icon="${icon.name}" data-variant="${style}" data-trigger="hover" aria-hidden="true">`;
}

/** The SVG file exactly as `@kineticons/static` ships it: the drawing with its motion inside, moving on hover. */
export function svgOf(icon: KineticIcon, style: Style): string {
  const s = styleOf(icon, style);
  return `${openingTag(icon, s)}<style>${loadIcons().base}${icon.css}</style>${icon.svg[s]}</svg>`;
}

/**
 * The still drawing for the grid, as a data URI. Without the stylesheet, a duotone body would lose its soft fill, so
 * that fill is written onto the shape; the rest of the drawing already carries its look in attributes.
 */
export function previewOf(icon: KineticIcon, style: Style): string {
  const s = styleOf(icon, style);
  const body = (icon.svg[s] ?? "").replace(/class="ki-tone"/g, 'fill="currentColor" fill-opacity="0.2" stroke="none"');
  const svg = `${openingTag(icon, s)}${body}</svg>`.replace(/currentColor/g, "#000");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

/** `arrow-right` → `arrowRight` */
const camelOf = (name: string) => name.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

/** The component name in `kineticons` and `@kineticons/vue`: `ArrowRight`. */
export const componentOf = (name: string) => camelOf(name).replace(/^./, (c) => c.toUpperCase());

// names the packages suffix with "Icon" because they are reserved words in JavaScript
const RESERVED = new Set(
  "package private public import export default delete new class function return switch case break continue var let const if else for while do in of this super throw try catch finally typeof void with yield enum interface static protected implements await null true false".split(
    " ",
  ),
);

/** The icon's data export in `@kineticons/svelte/icons`: `arrowRight`, or `packageIcon` for a reserved word. */
export const dataExportOf = (name: string) => (RESERVED.has(camelOf(name)) ? `${camelOf(name)}Icon` : camelOf(name));

const variantProp = (style: Style) => (style === "outline" ? "" : ` variant="${style}"`);

export function reactJsx(icon: KineticIcon, style: Style): string {
  return `<${componentOf(icon.name)}${variantProp(styleOf(icon, style))} />`;
}

export function reactImport(icon: KineticIcon): string {
  return `import { ${componentOf(icon.name)} } from "kineticons";`;
}

export function vueSnippet(icon: KineticIcon, style: Style): string {
  const c = componentOf(icon.name);
  return `<script setup lang="ts">
import { ${c} } from "@kineticons/vue";
</script>

<template>
  <${c}${variantProp(styleOf(icon, style))} />
</template>`;
}

export function svelteSnippet(icon: KineticIcon, style: Style): string {
  const d = dataExportOf(icon.name);
  return `<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { ${d} } from "@kineticons/svelte/icons";
</script>

<Icon icon={${d}}${variantProp(styleOf(icon, style))} />`;
}

export const pageOf = (icon: KineticIcon) => `${SITE_URL}/icons/${icon.name}/`;

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
