// Copies the icon data the extension needs from @kineticons/static into media/, so it works offline.
//
//   media/icons.json               name, title, category, tags and variants of every icon
//   media/svg/<variant>.json       { "<name>": "<svg …>" }: the full SVG, motion CSS included, per style
//   media/preview/<theme>/<name>.svg   a small still drawing of the outline icon for the picker,
//                                      coloured for light and dark themes (the picker cannot use currentColor)
//
// The full SVGs are packed into one JSON file per style rather than 6,000+ loose files: the .vsix stays
// small and installs fast, because the motion CSS that every SVG repeats compresses away.
import { createRequire } from "node:module";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const pkg = dirname(require.resolve("@kineticons/static/package.json"));
const media = join(root, "media");

const VARIANTS = ["outline", "duotone", "filled"];
const PREVIEW = { light: "#424242", dark: "#c5c5c5" };

rmSync(media, { recursive: true, force: true });
mkdirSync(join(media, "svg"), { recursive: true });
for (const theme of Object.keys(PREVIEW)) mkdirSync(join(media, "preview", theme), { recursive: true });

const icons = JSON.parse(readFileSync(join(pkg, "icons.json"), "utf8"));
const slim = icons
  .map(({ name, title, category, tags, variants }) => ({ name, title, category, tags, variants }))
  .sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(join(media, "icons.json"), JSON.stringify(slim));

for (const variant of VARIANTS) {
  const dir = join(pkg, "svg", variant);
  const out = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".svg")).sort()) {
    out[file.slice(0, -4)] = readFileSync(join(dir, file), "utf8").trim();
  }
  writeFileSync(join(media, "svg", `${variant}.json`), JSON.stringify(out));
  if (variant === "outline") {
    for (const [name, svg] of Object.entries(out)) {
      const still = svg
        .replace(/<style>[\s\S]*?<\/style>/g, "")
        .replace(/\s(class|data-[a-z-]+|aria-hidden)="[^"]*"/g, "");
      for (const [theme, color] of Object.entries(PREVIEW)) {
        writeFileSync(join(media, "preview", theme, `${name}.svg`), still.replaceAll("currentColor", color));
      }
    }
  }
  console.log(`${variant}: ${Object.keys(out).length} SVGs`);
}
console.log(`${slim.length} icons written to media/`);
