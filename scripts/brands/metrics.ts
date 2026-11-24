// Measures every brand logo's shape, for choosing how it is drawn: its bounds, how many separate shapes it has, how
// much of it is thin (gone under an opening of a given radius) and how much is narrow gap (filled by a closing).
// Writes scripts/brands/metrics.json. pnpm exec tsx scripts/brands/metrics.ts
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import svgpath from "svgpath";
import * as si from "simple-icons";
import { DEV_SLUGS } from "./dev";
import { GROUPS } from "./list";

const PX = 10;
type SI = { title: string; slug: string; path: string };
const bySlug = new Map<string, SI>();
for (const v of Object.values(si) as unknown[]) {
  const i = v as SI;
  if (i && typeof i === "object" && "slug" in i && "path" in i) bySlug.set(i.slug, i);
}

export interface Metrics {
  /** width / height of the drawing */
  aspect: number;
  /** separate closed shapes (subpaths) */
  shapes: number;
  /** share of the inked area gone under an opening of radius r units */
  thin: Record<string, number>;
  /** narrow gaps filled by a closing of radius r units, as a share of the inked area */
  gaps: Record<string, number>;
  /** inked share of its own bounding box */
  density: number;
}

const RADII = [0.4, 0.6, 0.8, 1.1];

async function measure(d: string): Promise<Metrics> {
  const b = { x0: 24, y0: 24, x1: 0, y1: 0 };
  svgpath(d)
    .abs()
    .unarc()
    .unshort()
    .iterate((seg) => {
      for (let i = 1; i + 1 < seg.length; i += 2) {
        const x = seg[i] as number, y = seg[i + 1] as number;
        if (seg[0] === "H" || seg[0] === "V") continue;
        b.x0 = Math.min(b.x0, x); b.x1 = Math.max(b.x1, x); b.y0 = Math.min(b.y0, y); b.y1 = Math.max(b.y1, y);
      }
    });
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32" width="${32 * PX}" height="${32 * PX}"><rect x="-4" y="-4" width="32" height="32"/><path d="${d}" fill="#fff"/></svg>`);
  const gray = (img: sharp.Sharp) => img.greyscale().raw().toBuffer();
  const base = await gray(sharp(svg));
  let area = 0;
  for (const v of base) if (v > 127) area++;
  const thin: Record<string, number> = {};
  const gaps: Record<string, number> = {};
  for (const r of RADII) {
    const px = Math.max(1, Math.round(r * PX));
    const opened = await gray(sharp(svg).greyscale().erode(px).dilate(px));
    const closed = await gray(sharp(svg).greyscale().dilate(px).erode(px));
    let t = 0, g = 0;
    for (let i = 0; i < base.length; i++) {
      if (base[i] > 127 && opened[i] <= 127) t++;
      if (base[i] <= 127 && closed[i] > 127) g++;
    }
    thin[r] = +(t / area).toFixed(3);
    gaps[r] = +(g / area).toFixed(3);
  }
  const w = Math.max(0.01, b.x1 - b.x0), h = Math.max(0.01, b.y1 - b.y0);
  return { aspect: +(w / h).toFixed(2), shapes: d.match(/[Mm]/g)?.length ?? 0, thin, gaps, density: +((area / (PX * PX)) / (w * h)).toFixed(3) };
}

const slugs = [...new Set([...GROUPS.flatMap((g) => g.slugs), ...DEV_SLUGS])].filter((s) => bySlug.has(s));
const out: Record<string, Metrics> = {};
for (const s of slugs) out[s] = await measure(bySlug.get(s)!.path);
writeFileSync(join(import.meta.dirname, "metrics.json"), JSON.stringify(out));
console.log(`${slugs.length} logos measured`);
