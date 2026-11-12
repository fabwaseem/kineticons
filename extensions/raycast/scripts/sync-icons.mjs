// Packs the icons of the @kineticons/static npm package (a devDependency) into assets/icons.json.
//
// The package ships 6,249 SVG files (2,083 icons in three styles, about 27 MB), and every file repeats the same
// shared stylesheet. This keeps one copy of that stylesheet, the motion CSS of each icon once, and the drawing of
// each style, so the extension carries one 6 MB file instead. src/icons.ts puts every file back together exactly, and
// this script checks that before it writes anything.
//
// Run it after bumping @kineticons/static: npm run sync-icons
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkgDir = dirname(require.resolve("@kineticons/static/package.json"));
const { version } = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));
const index = JSON.parse(readFileSync(join(pkgDir, "icons.json"), "utf8"));

const STYLES = ["outline", "duotone", "filled"];
const FILE =
  /^<svg [^>]*viewBox="0 0 ([\d.]+) [\d.]+"[^>]*stroke-width="([\d.]+)"[^>]*><style>(.*?)<\/style>(.*)<\/svg>\n?$/s;

// must match openingTag() in src/icons.ts
const openingTag = (name, style, grid, stroke) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${grid} ${grid}" width="${grid}" height="${grid}" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" class="ki" data-icon="${name}" data-variant="${style}" data-trigger="hover" aria-hidden="true">`;

const num = (s) => {
  if (String(Number(s)) !== s) throw new Error(`${s} does not survive as a number`);
  return Number(s);
};
const read = (style, name) => readFileSync(join(pkgDir, "svg", style, `${name}.svg`), "utf8");

// the stylesheet every icon starts with: the longest prefix all of them share
let base = null;
for (const icon of index) {
  const css = read(icon.variants[0], icon.name).match(FILE)?.[3] ?? "";
  if (base === null) base = css;
  let i = 0;
  while (i < base.length && base[i] === css[i]) i++;
  base = base.slice(0, i);
}

const icons = index.map((icon) => {
  const drawings = {};
  let grid, stroke, css;
  for (const style of icon.variants) {
    const file = read(style, icon.name);
    const m = file.match(FILE);
    if (!m) throw new Error(`unexpected markup in svg/${style}/${icon.name}.svg`);
    if (css !== undefined && (m[1] !== grid || m[2] !== stroke || m[3] !== base + css))
      throw new Error(`the styles of ${icon.name} differ in grid, stroke or motion`);
    [grid, stroke, css] = [m[1], m[2], m[3].slice(base.length)];
    drawings[style] = m[4];
    const rebuilt = `${openingTag(icon.name, style, grid, stroke)}<style>${base}${css}</style>${m[4]}</svg>`;
    if (rebuilt !== file.replace(/\n$/, "")) throw new Error(`svg/${style}/${icon.name}.svg does not rebuild exactly`);
  }
  for (const style of icon.variants) if (!STYLES.includes(style)) throw new Error(`unknown style ${style}`);
  return {
    name: icon.name,
    title: icon.title,
    category: icon.category,
    tags: icon.tags,
    motion: icon.motion,
    grid: num(grid),
    stroke: num(stroke),
    css,
    svg: drawings,
  };
});

const out = join(root, "assets", "icons.json");
writeFileSync(out, JSON.stringify({ version, base, icons }));
console.log(`${icons.length} icons from @kineticons/static ${version} written to assets/icons.json`);
