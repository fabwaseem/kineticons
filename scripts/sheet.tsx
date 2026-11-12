// Writes dist/sheet.html: every icon in outline, duotone and filled side by side, still, for checking by eye.
// pnpm tsx scripts/sheet.tsx [name ...]   (no names: every icon)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ICONS } from "../packages/core/src/all-icons";
import { baseCss, render, stringify, stylesheet } from "../packages/core/src/index";

const only = process.argv.slice(2);
// FRAME=300: every icon frozen 300 ms into its motion (transitions at their end state), to check the shapes mid-move
const FRAME = process.env.FRAME ? Number(process.env.FRAME) : 0;
const list = only.length ? ICONS.filter((i) => only.includes(i.name)) : ICONS;
const cells = list
  .map((icon, n) => {
    const svgs = (["outline", "duotone", "filled"] as const)
      .map((v) => stringify(render(icon, { variant: v, size: Number(process.env.SIZE ?? 40), trigger: FRAME ? "hover" : "none", active: !!FRAME })))
      .join("");
    return `<div class="c"><div class="i">${svgs}</div><b>${icon.name}</b></div>`;
  })
  .join("");
const html = `<!doctype html><meta charset="utf-8"><title>Sheet</title><style>${baseCss()}${FRAME ? stylesheet(list) + `svg.ki [data-p]{transition:none!important;animation-play-state:paused!important;animation-delay:-${FRAME}ms!important}` : ""}
body{font:12px system-ui;background:#f3f4f7;color:#2b2f38;margin:16px}.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px}
.c{background:#fff;border-radius:12px;padding:10px;text-align:center}.i{display:flex;gap:12px;justify-content:center;margin-bottom:6px}</style><div class="g">${cells}</div>`;
mkdirSync(join(import.meta.dirname, "..", "dist"), { recursive: true });
writeFileSync(join(import.meta.dirname, "..", "dist", "sheet.html"), html);
console.log(`${list.length} icons in dist/sheet.html`);
