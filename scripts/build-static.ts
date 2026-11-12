// Builds @kineticons/static:
//   svg/<style>/<name>.svg   every icon in outline, duotone and filled, its motion inside (moves when placed inline)
//   kineticons.css           the motion for every icon, once: for pages that inline many plain SVGs
//   icons.json               name, title, category, tags and what each motion shows
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
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
