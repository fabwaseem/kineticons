// Builds @kineticons/static:
//   svg/<style>/<name>.svg   every icon in outline, duotone and filled, its motion inside (moves when placed inline)
//   kineticons.css           the motion for every icon, once: for pages that inline many plain SVGs
//   icons.json               name, title, category, tags and what each motion shows
//   iconify.json             every icon at rest (no motion) in Iconify's JSON format, for Iconify, Figma and tools
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ICONS } from "../packages/core/src/all-icons";
import { stylesheet, toSvg, variantOf, VARIANTS } from "../packages/core/src/index";

const out = join(import.meta.dirname, "..", "packages", "static");
rmSync(join(out, "svg"), { recursive: true, force: true });
for (const v of VARIANTS) mkdirSync(join(out, "svg", v), { recursive: true });

let files = 0;
for (const icon of ICONS) {
  for (const v of VARIANTS) {
    if (variantOf(icon, v) !== v) continue; // window controls come in outline only
    writeFileSync(join(out, "svg", v, `${icon.name}.svg`), toSvg(icon, { variant: v }) + "\n");
    files++;
  }
}
writeFileSync(
  join(out, "kineticons.css"),
  `/* Kineticons: the motion for every icon. MIT licence. */\n${stylesheet(ICONS)}\n`,
);
writeFileSync(
  join(out, "icons.json"),
  JSON.stringify(
    ICONS.map((i) => ({ name: i.name, title: i.title, category: i.category, tags: i.tags, motion: i.motionNote, variants: i.variants ?? VARIANTS })),
  ) + "\n",
);
console.log(`${files} SVG files, kineticons.css and icons.json in packages/static`);

// Iconify: outline is `kineticons:bell`, the other styles add a suffix (`bell-duotone`, `bell-filled`).
// No motion here, so nothing depends on CSS: the duotone tint becomes attributes and the markup loses its classes.
const ATTRS = 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
const bodyOf = (svg: string) =>
  `<g ${ATTRS}>${svg
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>$/, "")
    .replace(/ class="ki-tone"/g, ' fill="currentColor" stroke="none" fill-opacity="0.16"')
    .replace(/ class="[^"]*"/g, "")
    .replace(/ data-[a-z-]+="[^"]*"/g, "")
    .replace(/ pathLength="1"/g, "")}</g>`;
const titleCase = (c: string) => c.replace(/(^|-)([a-z])/g, (_, d, ch) => (d ? " " : "") + ch.toUpperCase());
const iconify = {
  prefix: "kineticons",
  info: {
    name: "Kineticons",
    total: 0,
    version: JSON.parse(readFileSync(join(out, "package.json"), "utf8")).version,
    author: { name: "Waseem Anjum", url: "https://github.com/fabwaseem/kineticons" },
    license: { title: "MIT", spdx: "MIT", url: "https://github.com/fabwaseem/kineticons/blob/main/LICENSE" },
    samples: ["bell", "settings-duotone", "heart-filled"],
    height: 24,
    category: "General",
    tags: ["Has Padding", "Stroke"],
    palette: false,
  },
  lastModified: Math.floor(Date.now() / 1000),
  width: 24,
  height: 24,
  icons: {} as Record<string, { body: string }>,
  categories: {} as Record<string, string[]>,
  suffixes: { "": "Outline", duotone: "Duotone", filled: "Filled" },
};
for (const icon of ICONS) {
  const cat = titleCase(icon.category);
  for (const v of VARIANTS) {
    if (variantOf(icon, v) !== v) continue;
    const name = v === "outline" ? icon.name : `${icon.name}-${v}`;
    iconify.icons[name] = { body: bodyOf(toSvg(icon, { variant: v }, false)) };
    (iconify.categories[cat] ??= []).push(name);
  }
}
iconify.info.total = Object.keys(iconify.icons).length;
writeFileSync(join(out, "iconify.json"), JSON.stringify(iconify) + "\n");
console.log(`iconify.json: ${iconify.info.total} icons`);
