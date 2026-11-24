// Path helpers for the brand logos.
import svgpath from "svgpath";

type Seg = { t: "L"; p: [number, number] } | { t: "C"; c1: [number, number]; c2: [number, number]; p: [number, number] } | { t: "Q"; c: [number, number]; p: [number, number] };
type Sub = { start: [number, number]; segs: Seg[] };

/** The path as closed subpaths of absolute L, C and Q segments. */
function subpaths(d: string): Sub[] {
  const subs: Sub[] = [];
  let cur: [number, number] = [0, 0];
  let sub: Sub | null = null;
  const close = () => {
    if (!sub) return;
    if (cur[0] !== sub.start[0] || cur[1] !== sub.start[1]) sub.segs.push({ t: "L", p: [...sub.start] as [number, number] });
    cur = [...sub.start] as [number, number];
  };
  svgpath(d)
    .abs()
    .unarc()
    .unshort()
    .iterate((s) => {
      const n = s as unknown as (string | number)[];
      const k = n[0] as string;
      if (k === "M") {
        close();
        cur = [n[1] as number, n[2] as number];
        sub = { start: [...cur] as [number, number], segs: [] };
        subs.push(sub);
      } else if (k === "Z") close();
      else if (sub) {
        if (k === "L") cur = [n[1] as number, n[2] as number], sub.segs.push({ t: "L", p: [...cur] as [number, number] });
        else if (k === "H") cur = [n[1] as number, cur[1]], sub.segs.push({ t: "L", p: [...cur] as [number, number] });
        else if (k === "V") cur = [cur[0], n[1] as number], sub.segs.push({ t: "L", p: [...cur] as [number, number] });
        else if (k === "C") {
          const seg: Seg = { t: "C", c1: [n[1] as number, n[2] as number], c2: [n[3] as number, n[4] as number], p: [n[5] as number, n[6] as number] };
          sub.segs.push(seg);
          cur = [...seg.p] as [number, number];
        } else if (k === "Q") {
          const seg: Seg = { t: "Q", c: [n[1] as number, n[2] as number], p: [n[3] as number, n[4] as number] };
          sub.segs.push(seg);
          cur = [...seg.p] as [number, number];
        }
      }
    });
  close();
  return subs.filter((s) => s.segs.length);
}

/** Signed area (shoelace over the curve sampled at its control polygon, close enough for a sign). */
function area(s: Sub): number {
  const pts: [number, number][] = [s.start];
  for (const g of s.segs) {
    if (g.t === "C") pts.push(g.c1, g.c2);
    if (g.t === "Q") pts.push(g.c);
    pts.push(g.p);
  }
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[(i + 1) % pts.length];
    a += x0 * y1 - x1 * y0;
  }
  return a / 2;
}

function reverse(s: Sub): Sub {
  const ends = [s.start, ...s.segs.map((g) => g.p)];
  const segs: Seg[] = [];
  for (let i = s.segs.length - 1; i >= 0; i--) {
    const g = s.segs[i];
    const to = ends[i];
    if (g.t === "L") segs.push({ t: "L", p: to });
    else if (g.t === "C") segs.push({ t: "C", c1: g.c2, c2: g.c1, p: to });
    else segs.push({ t: "Q", c: g.c, p: to });
  }
  return { start: ends[ends.length - 1], segs };
}

const f = (n: number) => +n.toFixed(2);
const print = (subs: Sub[]) =>
  subs
    .map(
      (s) =>
        `M${f(s.start[0])} ${f(s.start[1])}` +
        s.segs.map((g) => (g.t === "L" ? `L${f(g.p[0])} ${f(g.p[1])}` : g.t === "C" ? `C${f(g.c1[0])} ${f(g.c1[1])} ${f(g.c2[0])} ${f(g.c2[1])} ${f(g.p[0])} ${f(g.p[1])}` : `Q${f(g.c[0])} ${f(g.c[1])} ${f(g.p[0])} ${f(g.p[1])}`)).join("") +
        "Z",
    )
    .join("");

/** The areas a line-art logo's lines enclose, holes included: every subpath turned the same way round, so the
 * nonzero fill takes in what the logo's holes leave out. Duotone's soft fill. */
export function filledIn(d: string): string {
  return print(subpaths(d).map((s) => (area(s) < 0 ? reverse(s) : s)));
}
