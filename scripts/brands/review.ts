// Review sheets: every brand logo in outline, duotone and filled at rest, and outline and filled halfway through
// their hover motion, with its build kind and stroke, for checking one by one.
// Writes apps/web/public/_review/<n>.html. pnpm exec tsx scripts/brands/review.ts [per-page]
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import * as brands from "../../packages/core/src/icons/brands";
import { baseCss, iconCss, toSvg, type IconDef } from "../../packages/core/src/index";

const per = Number(process.argv[2] ?? 48);
const dir = join(import.meta.dirname, "..", "..", "apps", "web", "public", "_review");
rmSync(dir, { recursive: true, force: true });
mkdirSync(dir, { recursive: true });
const reviewFile = join(import.meta.dirname, "review.json");
const review = (existsSync(reviewFile) ? JSON.parse(readFileSync(reviewFile, "utf8")) : {}) as Record<string, string>;
const only = process.argv[3]?.split(",");
const icons = (Object.values(brands) as IconDef[]).filter((i) => i && i.parts && (!only || only.includes(i.name.replace(/-logo$/, ""))));
const frame = `.mid svg.ki [data-p]{animation-play-state:paused!important;animation-delay:-0.5s!important}`;
const S = 46;
const pages = Math.ceil(icons.length / per);
for (let p = 0; p < pages; p++) {
  const list = icons.slice(p * per, (p + 1) * per);
  const cells = list.map((i, k) => {
    const rest = (["outline", "duotone", "filled"] as const).map((v) => toSvg(i, { variant: v, size: S }, false)).join("");
    const mid = (["outline", "filled"] as const).map((v) => `<span class="mid">${toSvg(i, { variant: v, size: S, active: true, trigger: "manual" }, false)}</span>`).join("");
    const anim = i.parts[0]?.p && JSON.stringify(i.motion).includes("fill") ? "wipe" : "trace";
    return `<div class="c"><div class="i">${rest}<b></b>${mid}</div><div class="n">${p * per + k} ${i.name.replace(/-logo$/, "")}</div><div class="m">${review[i.name] ?? ""} w${i.stroke ?? "-"} ${anim}</div></div>`;
  });
  writeFileSync(
    join(dir, `${p}.html`),
    `<!doctype html><meta charset="utf-8"><title>review ${p}</title><style>${baseCss()}${list.map(iconCss).join("")}${frame}</style><style>body{margin:0;padding:6px;font:11px system-ui;background:#eceae4;color:#15121a}.g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}.c{background:#fff;border-radius:6px;padding:5px}.i{display:flex;gap:4px;align-items:center}.i svg{display:block}.i b{width:1px;height:46px;background:#ddd;margin:0 2px}.n{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700;margin-top:2px}.m{color:#888;font-size:10px}</style><div class="g">${cells.join("")}</div>`,
  );
}
console.log(`${icons.length} logos on ${pages} review pages`);
