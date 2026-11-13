"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import { btn } from "@/components/ui/controls";
import type { Category, IconDef } from "@kineticons/core";
import { arrowRight } from "@kineticons/core/icons";
import { loadCatalog, sortIcons } from "@/lib/catalog";
import { CATEGORIES, CATEGORY_COUNTS, fmt, ICON_COUNT } from "@/lib/categories";
import { reducedMotion, useInView } from "@/components/ui/bits";

const TABS: Category[] = ["app", "actions", "status", "communication", "media", "commerce", "weather", "nature", "food", "development"];
const SHOWN = 24;
const STEP = 45; // ms between neighbours in the wave
const HOLD = 950;

/**
 * A lilac panel: pick a category and its icons ripple through their motions, a wave running from the top left.
 * Every tile also plays on its own when pointed at. The catalog is fetched when the panel comes near the screen.
 */
export function Motions() {
  const [ref, near] = useInView<HTMLElement>("300px");
  const [all, setAll] = useState<IconDef[] | null>(null);
  const [tab, setTab] = useState<Category>("app");
  const gridRef = useRef<HTMLUListElement>(null);
  const [seen, inView] = useInView<HTMLDivElement>();

  useEffect(() => {
    if (near && !all) loadCatalog().then((list) => setAll(sortIcons(list)), () => {});
  }, [near, all]);

  const icons = all ? all.filter((i) => i.category === tab).slice(0, SHOWN) : [];

  // the wave: each time the tab changes (and the first time the grid is seen)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !icons.length || !inView || reducedMotion()) return;
    const cols = Math.max(1, Math.round(grid.clientWidth / ((grid.firstElementChild as HTMLElement | null)?.clientWidth || 1)));
    const timers: number[] = [];
    grid.querySelectorAll<SVGElement>("svg.ki").forEach((svg, i) => {
      const d = ((i % cols) + Math.floor(i / cols)) * STEP + 120;
      timers.push(window.setTimeout(() => svg.setAttribute("data-active", "true"), d));
      timers.push(window.setTimeout(() => svg.removeAttribute("data-active"), d + HOLD));
    });
    return () => timers.forEach(window.clearTimeout);
  }, [tab, all, inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={ref} className="tone-lilac panel -mt-12 py-24 sm:py-32" aria-labelledby="motions-title">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="motions-title" className="display max-w-[900px] text-[clamp(44px,6.6vw,100px)]">
            {fmt(ICON_COUNT)} icons,
            <br />
            <em>{fmt(ICON_COUNT)} motions.</em>
          </h2>
          <p className="max-w-[360px] text-[17px] leading-relaxed text-ink-2">
            No icon borrows another’s motion. Pick a shelf and watch it come alive, or point at any one of them.
          </p>
        </div>

        <div role="tablist" aria-label="Category" className="no-scrollbar -mx-6 mt-12 flex gap-2 overflow-x-auto px-6 pb-1">
          {TABS.map((c) => {
            const label = CATEGORIES.find((x) => x.value === c)?.label ?? c;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={tab === c}
                onClick={() => setTab(c)}
                className={`h-11 shrink-0 rounded-full border px-5 text-[15px] font-medium transition-[background-color,color,border-color] duration-200 ${
                  tab === c ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink"
                }`}
              >
                {label}
                <span className={`ml-2 text-[13px] tabular ${tab === c ? "opacity-60" : "text-faint"}`}>{fmt(CATEGORY_COUNTS[c] ?? 0)}</span>
              </button>
            );
          })}
        </div>

        <div ref={seen} className="mt-8">
          {all ? (
            <ul ref={gridRef} role="tabpanel" aria-label={`${CATEGORIES.find((x) => x.value === tab)?.label} icons`} className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              {icons.map((icon) => (
                <li key={icon.name}>
                  <Link
                    href={`/icons/${icon.name}`}
                    title={icon.title}
                    className="ki-trigger group flex aspect-square flex-col items-center justify-center gap-2 rounded-card bg-surface text-ink-2 transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-card hover:text-ink"
                  >
                    <KineticIcon icon={icon} size={30} variant="duotone" className="transition-colors duration-300 [&[data-active]]:text-accent" />
                    <span className="hidden max-w-[85%] truncate text-[12px] text-faint group-hover:text-muted sm:block">{icon.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8" aria-busy="true" aria-label="Loading icons">
              {Array.from({ length: SHOWN }, (_, i) => (
                <div key={i} className="aspect-square rounded-card bg-surface opacity-60" />
              ))}
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <Link href={`/icons?category=${tab}`} className={btn("primary", "lg")}>
              All {fmt(CATEGORY_COUNTS[tab] ?? 0)} {CATEGORIES.find((x) => x.value === tab)?.label.toLowerCase()} icons
              <KineticIcon icon={arrowRight} size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
