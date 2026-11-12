// Next.js names static-export prefetch files by turning a segment path's "/" into "." (__next.icons.$d$name.__PAGE__.txt).
// On Windows the path it starts from uses "\", so it writes folders (__next.icons\$d$name\__PAGE__.txt) that the browser
// never asks for. This moves them to the names the browser requests. On Linux and macOS there is nothing to do.
import { readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

if (sep !== "\\") process.exit(0);
const out = join(import.meta.dirname, "..", "out");
let moved = 0;
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (!e.isDirectory()) continue;
    if (e.name.startsWith("__next.")) {
      const files = [];
      const collect = (d) => readdirSync(d, { withFileTypes: true }).forEach((f) => (f.isDirectory() ? collect(join(d, f.name)) : files.push(join(d, f.name))));
      collect(p);
      for (const f of files) {
        renameSync(f, join(dir, relative(dir, f).split(sep).join(".")));
        moved++;
      }
      rmSync(p, { recursive: true, force: true });
    } else walk(p);
  }
};
if (statSync(out, { throwIfNoEntry: false })) walk(out);
console.log(`fix-export: ${moved} prefetch files renamed`);
