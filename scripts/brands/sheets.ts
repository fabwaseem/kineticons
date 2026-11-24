// Contact sheets of every brand logo in filled, outline and duotone, with its measurements, for checking by eye.
// Writes apps/web/public/_sheets/<n>.html (served by the dev server; delete when done).
// pnpm exec tsx scripts/brands/sheets.ts [per-page]
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import * as brands from "../../packages/core/src/icons/brands";
import { baseCss, toSvg, type IconDef } from "../../packages/core/src/index";

const per = Number(process.argv[2] ?? 120);
const dir = join(import.meta.dirname, "..", "..", "apps", "web", "public", "_sheets");
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
const metrics = JSON.parse(readFileSync(join(import.meta.dirname, "metrics.json"), "utf8")) as Record<string, { aspect: number; shapes: number; thin: Record<string, number>; gaps: Record<string, number> }>;
// optional: only these review groups (from REVIEW=1 build.ts), e.g. "cut-line,cut-wide"
const reviewFile = join(import.meta.dirname, "review.json");
const review = (existsSync(reviewFile) ? JSON.parse(readFileSync(reviewFile, "utf8")) : {}) as Record<string, string>;
const only = process.argv[3]?.split(",");
const icons = (Object.values(brands) as IconDef[]).filter((i) => i && i.parts && (!only || only.includes(review[i.name])));
const slugOf = (i: IconDef) => i.tags.find((t) => metrics[t]) ?? "";

const pages = Math.ceil(icons.length / per);
for (let p = 0; p < pages; p++) {
  const cells = icons.slice(p * per, (p + 1) * per).map((i, k) => {
    const m = metrics[slugOf(i)];
    const info = m ? `a${m.aspect} s${m.shapes} t${m.thin["0.6"]} g${m.gaps["0.6"]} w${i.stroke ?? ""}` : "";
    return `<div class="c"><div class="i">${(["filled", "outline", "duotone"] as const).map((v) => toSvg(i, { variant: v, size: 40 }, false)).join("")}</div><div class="n">${p * per + k} ${i.name.replace(/-logo$/, "")} <i>${review[i.name] ?? ""}</i></div><div class="m">${info}</div></div>`;
  });
  writeFileSync(
    join(dir, `${p}.html`),
    `<!doctype html><meta charset="utf-8"><title>sheet ${p}</title><style>${baseCss()}</style><style>body{margin:0;padding:8px;font:10px system-ui;background:#f7f5f0;color:#15121a}.g{display:grid;grid-template-columns:repeat(10,1fr);gap:4px}.c{background:#fff;border-radius:6px;padding:4px}.i{display:flex;justify-content:space-between}.i svg{display:block}.n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}.m{color:#888;font-size:9px}</style><div class="g">${cells.join("")}</div>`,
  );
}
console.log(`${icons.length} logos on ${pages} sheets`);
