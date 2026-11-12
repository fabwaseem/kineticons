// Finds badges that crowd a solid fill: an open stroke (a plus, a pen, a clock) that sits outside an icon's fill area
// but closer than CLEAR units to it, so in the filled style the gap between them closes up. The fill is drawn with the
// outline's stroke around it (0.875 past its path) and the badge's own stroke is as wide, so a visible gap of about one
// unit needs 2.75 between the badge's centreline and the fill's path.
//   pnpm exec tsx scripts/motions/gaps.ts [letter ...]
import { readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import svgpath from "svgpath";
import type { IconDef } from "../../packages/core/src/types";

const CLEAR = Number(process.env.CLEAR ?? 2.6);
// a stroke that reaches the fill (a handle, a stand, a leg) is attached on purpose: not a crowded badge
const JOINED = 0.3;
type Pt = [number, number];

function flatten(d: string): Pt[][] {
  const polys: Pt[][] = [];
  let cur: Pt[] = [];
  let p: Pt = [0, 0];
  let start: Pt = [0, 0];
  const bez = (pts: Pt[]) => {
    for (let k = 1; k <= 16; k++) {
      const t = k / 16;
      let q = pts.map((x) => [...x] as Pt);
      while (q.length > 1) q = q.slice(1).map((b, i) => [q[i][0] + (b[0] - q[i][0]) * t, q[i][1] + (b[1] - q[i][1]) * t] as Pt);
      cur.push(q[0]);
    }
  };
  svgpath(d).abs().unarc().unshort().iterate((seg) => {
    const c = seg[0] as string;
    const n = seg.slice(1) as number[];
    if (c === "M") {
      if (cur.length > 1) polys.push(cur);
      p = [n[0], n[1]];
      start = [...p];
      cur = [[...p]];
      return;
    }
    if (c === "L") p = [n[0], n[1]];
    else if (c === "H") p = [n[0], p[1]];
    else if (c === "V") p = [p[0], n[0]];
    else if (c === "Z") p = [...start];
    else if (c === "C") return void (bez([p, [n[0], n[1]], [n[2], n[3]], [n[4], n[5]]]), (p = [n[4], n[5]]));
    else if (c === "Q") return void (bez([p, [n[0], n[1]], [n[2], n[3]]]), (p = [n[2], n[3]]));
    cur.push([...p]);
  });
  if (cur.length > 1) polys.push(cur);
  return polys;
}
const samples = (d: string): Pt[] => {
  const out: Pt[] = [];
  for (const poly of flatten(d))
    for (let i = 1; i < poly.length; i++) {
      const [a, b] = [poly[i - 1], poly[i]];
      const s = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.25));
      for (let k = 0; k <= s; k++) out.push([a[0] + ((b[0] - a[0]) * k) / s, a[1] + ((b[1] - a[1]) * k) / s]);
    }
  return out;
};
const edge = (pt: Pt, polys: Pt[][]) => {
  let best = Infinity;
  for (const poly of polys)
    for (let i = 1; i < poly.length; i++) {
      const [a, b] = [poly[i - 1], poly[i]];
      const [dx, dy] = [b[0] - a[0], b[1] - a[1]];
      const t = Math.max(0, Math.min(1, ((pt[0] - a[0]) * dx + (pt[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
      best = Math.min(best, Math.hypot(pt[0] - a[0] - t * dx, pt[1] - a[1] - t * dy));
    }
  return best;
};
const inside = (pt: Pt, polys: Pt[][]) => {
  let n = 0;
  for (const poly of polys)
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i];
      const [xj, yj] = poly[j];
      if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) n++;
    }
  return n % 2 === 1;
};

const dir = `${import.meta.dirname}/../../packages/core/src/icons`;
const only = process.argv.slice(2);
/** batch-a.ts holds the LIST in import-icons.ts ("core"); batch-e.ts and on, the batches */
const label = (f: string) => (f === "batch-a.ts" ? "core" : f.replace(/^batch-|\.ts$/g, ""));
const files = readdirSync(dir).filter((f) => /^batch-[a-z]\.ts$/.test(f) && (!only.length || only.includes(label(f))));
let found = 0;
for (const f of files) {
  const icons = Object.values((await import(pathToFileURL(`${dir}/${f}`).href)) as Record<string, IconDef>);
  for (const icon of icons) {
    if (icon.tile) continue;
    const fills = icon.parts.filter((p) => p.role === "body" && p.area).map((p) => flatten(p.area!));
    if (!fills.length) continue;
    const polys = fills.flat();
    const owners = new Set(icon.parts.filter((p) => p.area).map((p) => p.p));
    let worst = Infinity;
    let who = "";
    for (const pt of icon.parts) {
      // a badge is an open stroke, or a small solid of its own (a notification dot) beside the fill
      if (!pt.d || pt.knock || owners.has(pt.p) || pt.role === "detail" || (pt.role === "body" && pt.area)) continue;
      const s = samples(pt.d);
      // a stroke along the fill's edge is part of the outline, not a badge
      if (s.filter((x) => edge(x, polys) < 0.6).length > s.length * 0.4) continue;
      const out = s.filter((x) => !inside(x, polys));
      if (out.length < s.length * 0.6) continue;
      const d = Math.min(...out.map((x) => edge(x, polys)));
      if (d < worst) [worst, who] = [d, pt.p ?? "?"];
    }
    if (worst >= JOINED && worst < CLEAR) {
      found++;
      console.log(`${label(f)} ${icon.name}: ${who} is ${worst.toFixed(2)} from the fill`);
    }
  }
}
console.log(`${found} icon(s) with a badge closer than ${CLEAR}`);
