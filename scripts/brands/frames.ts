// Motion contact sheets: every brand logo frozen at points through its hover animation (outline and filled), to judge
// the motion by eye. Writes apps/web/public/_frames/<n>.html. pnpm exec tsx scripts/brands/frames.ts [per-page]
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import * as brands from "../../packages/core/src/icons/brands";
import { baseCss, iconCss, toSvg, type IconDef } from "../../packages/core/src/index";

const per = Number(process.argv[2] ?? 100);
const dir = join(import.meta.dirname, "..", "..", "apps", "web", "public", "_frames");
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
const icons = (Object.values(brands) as IconDef[]).filter((i) => i && i.parts);
const AT = [0.3, 0.55, 0.8];
// each frame: the icon active, its animation paused at a point (negative delay)
const frameCss = AT.map((t, k) => `.f${k} svg.ki [data-p]{animation-play-state:paused!important;animation-delay:${-(t * 1.15).toFixed(3)}s!important}`).join("");
const pages = Math.ceil(icons.length / per);
for (let p = 0; p < pages; p++) {
  const list = icons.slice(p * per, (p + 1) * per);
  const cells = list.map((i, k) => {
    const row = (v: "outline" | "filled") =>
      `<div class="r"><span class="v">${v[0]}</span>${toSvg(i, { variant: v, size: 32 }, false)}${AT.map((_, f) => `<span class="f${f}">${toSvg(i, { variant: v, size: 32, active: true, trigger: "manual" }, false)}</span>`).join("")}</div>`;
    return `<div class="c">${row("outline")}${row("filled")}<div class="n">${p * per + k} ${i.name.replace(/-logo$/, "")}</div></div>`;
  });
  writeFileSync(
    join(dir, `${p}.html`),
    `<!doctype html><meta charset="utf-8"><style>${baseCss()}${list.map(iconCss).join("")}${frameCss}</style><style>body{margin:0;padding:6px;font:10px system-ui;background:#f7f5f0;color:#15121a}.g{display:grid;grid-template-columns:repeat(8,1fr);gap:4px}.c{background:#fff;border-radius:6px;padding:4px}.r{display:flex;gap:6px;align-items:center}.v{width:8px;color:#aaa}.n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}</style><div class="g">${cells.join("")}</div>`,
  );
}
console.log(`${icons.length} logos on ${pages} frame sheets`);
