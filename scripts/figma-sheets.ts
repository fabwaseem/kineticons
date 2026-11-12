// Writes dist/figma/kineticons-<style>.svg: every icon of one style on a grid, ready to drag into Figma.
// Each icon is a group whose id is its name (Figma names the layer after it), holding an empty 24x24 frame rect so
// the group is exactly one icon cell. Built from packages/static/iconify.json (run `pnpm --filter @kineticons/static build` first).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const set = JSON.parse(readFileSync(join(root, "packages", "static", "iconify.json"), "utf8")) as {
  icons: Record<string, { body: string }>;
  categories: Record<string, string[]>;
};
const out = join(root, "dist", "figma");
mkdirSync(out, { recursive: true });

const COLS = 32;
const CELL = 48;
const STYLES = [
  { id: "outline", suffix: "" },
  { id: "duotone", suffix: "-duotone" },
  { id: "filled", suffix: "-filled" },
];

for (const style of STYLES) {
  let row = 0;
  let body = "";
  for (const [category, names] of Object.entries(set.categories)) {
    const base = names.filter((n) => !n.endsWith("-duotone") && !n.endsWith("-filled"));
    let col = 0;
    body += `<g id="${category}">`;
    for (const name of base) {
      const icon = set.icons[name + style.suffix];
      if (!icon) continue;
      const x = col * CELL;
      const y = row * CELL;
      // ids must be unique in one SVG: masks in filled icons get the icon's name
      const drawing = icon.body.replace(/id="([^"]+)"/g, `id="$1-${style.id}"`).replace(/url\(#([^)]+)\)/g, `url(#$1-${style.id})`);
      body += `<g id="${name}" transform="translate(${x} ${y})"><rect width="24" height="24" fill="none"/>${drawing}</g>`;
      if (++col === COLS) {
        col = 0;
        row++;
      }
    }
    body += "</g>";
    row += col ? 2 : 1; // a blank row between categories
  }
  const w = COLS * CELL;
  const h = row * CELL;
  writeFileSync(
    join(out, `kineticons-${style.id}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" color="#1d1b22">${body}</svg>\n`,
  );
  console.log(`kineticons-${style.id}.svg  ${w}x${h}`);
}
