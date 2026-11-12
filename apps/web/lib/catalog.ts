import type { Category, IconDef } from "@kineticons/core";
import { CATEGORIES } from "./categories";

// The whole catalog in the browser: fetched once from /catalog.json (a static file the build writes), so no page's
// JavaScript carries two thousand icons. Server components import "@kineticons/core/icons" instead.

let loading: Promise<IconDef[]> | null = null;

/** Every icon, fetched once and kept. */
export function loadCatalog(): Promise<IconDef[]> {
  if (!loading)
    loading = fetch("/catalog.json")
      .then((r) => {
        if (!r.ok) throw new Error(`catalog: ${r.status}`);
        return r.json() as Promise<IconDef[]>;
      })
      .catch((e) => {
        loading = null; // let the next call try again
        throw e;
      });
  return loading;
}

/** Warm the catalog while the visitor heads to the icon pages. */
export const prefetchCatalog = () => void loadCatalog().catch(() => {});

/** Icons in browsing order: by category (the site's order), then by title. */
export function sortIcons(list: IconDef[]): IconDef[] {
  const rank = new Map(CATEGORIES.map((c, i) => [c.value, i]));
  return [...list].sort((a, b) => (rank.get(a.category) ?? 99) - (rank.get(b.category) ?? 99) || a.title.localeCompare(b.title));
}

export function countByCategory(list: IconDef[]): Record<Category, number> {
  return list.reduce((acc, i) => ((acc[i.category] = (acc[i.category] ?? 0) + 1), acc), {} as Record<Category, number>);
}

type Hay = { name: string; words: string[]; title: string; tags: string[]; category: string };
const hays = new WeakMap<IconDef, Hay>();
const hay = (i: IconDef): Hay => {
  let h = hays.get(i);
  if (!h) hays.set(i, (h = { name: i.name, words: i.name.split("-"), title: i.title.toLowerCase(), tags: i.tags.map((t) => t.toLowerCase()), category: i.category }));
  return h;
};

/** How well one word matches an icon: its name first, then its title, tags and category. 0: not at all. */
function scoreWord(h: Hay, w: string): number {
  if (h.name === w) return 100;
  if (h.words.includes(w)) return 70;
  if (h.name.startsWith(w)) return 60;
  if (h.title.split(/\s+/).includes(w)) return 50;
  if (h.name.includes(w)) return 40;
  if (h.tags.includes(w)) return 38;
  if (h.title.includes(w)) return 30;
  if (h.tags.some((t) => t.startsWith(w))) return 24;
  if (h.category.startsWith(w)) return 14;
  if (h.tags.some((t) => t.includes(w))) return 10;
  return 0;
}

/** Icons matching the query, best first: those matching every word, then (for several words) those matching some.
 * The list itself when there is no query. */
export function search(list: IconDef[], query: string): IconDef[] {
  const words = [...new Set(query.toLowerCase().trim().split(/[\s,]+/).filter(Boolean))];
  if (!words.length) return list;
  const scored: { icon: IconDef; s: number; n: number }[] = [];
  for (const icon of list) {
    const h = hay(icon);
    let s = 0;
    let n = 0;
    for (const w of words) {
      const ws = scoreWord(h, w);
      if (ws) (s += ws), n++;
    }
    if (n === words.length || (words.length > 1 && n > 0)) scored.push({ icon, s, n });
  }
  return scored.sort((a, b) => b.n - a.n || b.s - a.s || a.icon.name.length - b.icon.name.length).map((x) => x.icon);
}

/** Icons like this one: the same family of names, shared tags, the same category. */
export function related(all: IconDef[], icon: IconDef, n = 18): IconDef[] {
  const stem = icon.name.split("-")[0];
  const tags = new Set(icon.tags.map((t) => t.toLowerCase()));
  return all
    .filter((i) => i.name !== icon.name)
    .map((i) => ({
      i,
      s: (i.name.split("-")[0] === stem ? 6 : 0) + i.tags.filter((t) => tags.has(t.toLowerCase())).length * 2 + (i.category === icon.category ? 1 : 0),
    }))
    .filter((x) => x.s > 1)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.i);
}
