// Checks the motion overrides: every part name exists on its icon, every animation names a keyframe the icon defines
// (and named after the icon), every icon moves more than just "root", and draw parts are listed for dash motions.
// pnpm exec tsx scripts/motions/check.ts [a|b|c|…]  (a batch must be imported first: pnpm import-icons <batch>)
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import svgpath from "svgpath";
import type { Override } from "./types";

const which = process.argv[2];
const batches = readdirSync(import.meta.dirname).map((f) => f.match(/^([e-z])\.ts$/)?.[1]).filter(Boolean) as string[];
const files = which ? [which] : ["a", "b", "c", "d", ...batches.sort()];
const ICON_DIR = join(import.meta.dirname, "..", "..", "packages", "core", "src", "icons");
// a–d hold motions for the LIST in import-icons.ts (icons/batch-a.ts); e and on are batches with files of their own
const genOf = (f: string) => readFileSync(join(ICON_DIR, f <= "d" ? "batch-a.ts" : `batch-${f}.ts`), "utf8");
let generated = "";
const partsOf = (name: string): Set<string> | null => {
  const i = generated.indexOf(`name: ${JSON.stringify(name)}`);
  if (i < 0) return null;
  const line = generated.slice(i).split("\n").find((l) => l.trim().startsWith("parts:"))!;
  return new Set([...line.matchAll(/"p":"(p\d+)"/g)].map((m) => m[1]));
};

/** Each part's own stroke path (the first piece with that name that has one). */
const pathsOf = (name: string): Map<string, string> => {
  const i = generated.indexOf(`name: ${JSON.stringify(name)}`);
  const line = generated.slice(i).split("\n").find((l) => l.trim().startsWith("parts:"))!;
  const parts = JSON.parse(line.trim().replace(/^parts:\s*/, "").replace(/,$/, "")) as { p: string; d?: string }[];
  const map = new Map<string, string>();
  for (const p of parts) if (p.d && !map.has(p.p)) map.set(p.p, p.d);
  return map;
};
/** The commands of a path, one letter per segment (implicit repeats spelled out, case ignored). */
const signature = (d: string): string => {
  const out: string[] = [];
  svgpath(d).iterate((seg) => void out.push((seg[0] as string).toUpperCase()));
  return out.join("");
};

let problems = 0;
const bad = (icon: string, msg: string) => {
  problems++;
  console.log(`${icon}: ${msg}`);
};
for (const f of files) {
  const mod = (await import(`./${f}.ts`)) as Record<string, Record<string, Override>>;
  const batch = mod.motions ?? Object.values(mod)[0];
  generated = genOf(f);
  // every icon of a batch has a motion of its own
  const listed = (mod as unknown as { list?: [string, string][] }).list ?? [];
  for (const [, name] of listed) if (!batch[name]) bad(name, "no motion of its own");
  for (const [icon, o] of Object.entries(batch)) {
    const parts = partsOf(icon);
    if (!parts) {
      bad(icon, "no such imported icon");
      continue;
    }
    const keys = Object.keys(o.motion ?? {});
    if (keys.length === 0) bad(icon, "no motion");
    if (keys.every((k) => k === "root")) bad(icon, 'only "root" moves: give the parts their own motion');
    for (const k of keys) if (k !== "root" && !parts.has(k)) bad(icon, `${k} is not one of its parts (${[...parts].join(" ")})`);
    for (const d of o.draw ?? []) if (!parts.has(d)) bad(icon, `draw: ${d} is not one of its parts`);
    const defined = new Set([...(o.keyframes ?? "").matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]));
    for (const name of defined) if (!name.startsWith(`ki-${icon}`)) bad(icon, `keyframes ${name} should be named ki-${icon}-…`);
    for (const [k, m] of Object.entries(o.motion ?? {})) {
      const anim = m.animation?.match(/^\s*([\w-]+)/)?.[1];
      if (anim && !defined.has(anim)) bad(icon, `${k} uses ${anim}, which its keyframes do not define`);
      const dashes = JSON.stringify(m).includes("strokeDash") || /stroke-dash/.test(o.keyframes ?? "");
      if (dashes && k !== "root" && !(o.draw ?? []).includes(k) && JSON.stringify(m).includes("strokeDash"))
        bad(icon, `${k} uses a dash motion but is not in draw`);
    }
    // a d morph only animates when the target has the same commands as the part's own path (else it snaps)
    const ownD = pathsOf(icon);
    for (const [k, m] of Object.entries(o.motion ?? {})) {
      const own = ownD.get(k);
      const targets = [m.to?.d, m.from?.d].filter(Boolean) as string[];
      const anim = m.animation?.match(/^\s*([\w-]+)/)?.[1];
      if (anim) {
        const block = (o.keyframes ?? "").match(new RegExp(`@keyframes\\s+${anim}\\s*\\{((?:[^{}]*\\{[^{}]*\\})*)[^{}]*\\}`))?.[1] ?? "";
        targets.push(...[...block.matchAll(/d\s*:\s*(path\([^)]*\))/g)].map((x) => x[1]));
      }
      for (const t of targets) {
        if (!own) {
          bad(icon, `${k} morphs d but has no path of its own`);
          continue;
        }
        const target = t.match(/path\(\s*["']([^"']+)["']\s*\)/)?.[1];
        if (!target) bad(icon, `${k}: cannot read ${t}`);
        else if (signature(target) !== signature(own)) bad(icon, `${k}: d morph commands ${signature(target)} differ from its path ${signature(own)}`);
      }
    }
  }
  console.log(`${f}: ${Object.keys(batch).length} icons checked`);
}
// a full run (no batch named) also draws the whole kit: every icon in every style, as an app would
if (!which) {
  const { ICONS } = await import("../../packages/core/src/all-icons");
  const { render, stringify, VARIANTS, iconCss, stylesheet } = await import("../../packages/core/src/index");
  const names = new Set<string>();
  const frames = new Map<string, string>();
  for (const icon of ICONS) {
    if (names.has(icon.name)) bad(icon.name, "two icons have this name");
    names.add(icon.name);
    if (!icon.title || !icon.tags.length) bad(icon.name, "no title or tags");
    for (const v of VARIANTS) {
      let svg = "";
      try {
        svg = stringify(render(icon, { variant: v, size: 24 }));
      } catch (e) {
        bad(icon.name, `${v} does not draw: ${(e as Error).message}`);
        continue;
      }
      if (/NaN|undefined|Infinity/.test(svg)) bad(icon.name, `${v} draws NaN/undefined`);
      // the filled style must fill something: a body, a solid part, or the cut-out tile
      if (v === "filled" && !/fill="currentColor"/.test(svg)) bad(icon.name, "filled has nothing solid");
    }
    // a keyframe name defined twice (in two icons) would let one icon's motion override the other's
    for (const m of (icon.keyframes ?? "").matchAll(/@keyframes\s+([\w-]+)/g)) {
      if (frames.has(m[1]) && frames.get(m[1]) !== icon.name) bad(icon.name, `keyframes ${m[1]} also defined by ${frames.get(m[1])}`);
      frames.set(m[1], icon.name);
    }
    const css = iconCss(icon);
    if (/undefined|NaN/.test(css)) bad(icon.name, "its CSS has undefined/NaN");
  }
  const sheet = stylesheet(ICONS);
  const open = (sheet.match(/\{/g) ?? []).length;
  if (open !== (sheet.match(/\}/g) ?? []).length) bad("stylesheet", "braces do not balance");
  console.log(`kit: ${ICONS.length} icons drawn in ${VARIANTS.length} styles`);
}
console.log(problems ? `${problems} problem(s)` : "all good");
process.exit(problems ? 1 : 0);
