"use client";

import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import type { Look } from "@/lib/store";

/**
 * The icons, virtualized: only the rows on screen (and a few around them) are in the page, however long the list.
 * The page scrolls (window virtualizer), so the sidebar and search stay put. Arrow keys move between icons, Enter
 * opens one; the focused icon is scrolled into view even when its row is not drawn yet.
 */
export function Grid({ icons, look, selected, onOpen }: { icons: IconDef[]; look: Look; selected: string | null; onOpen: (i: IconDef) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      setWidth(el.clientWidth);
      setOffset(el.getBoundingClientRect().top + window.scrollY);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => (ro.disconnect(), window.removeEventListener("resize", measure));
  }, []);

  const w = width || 1100;
  const narrow = w < 640;
  const cellMin = look.labels ? Math.max(narrow ? 100 : 116, look.size + (narrow ? 60 : 80)) : Math.max(narrow ? 56 : 68, look.size + 34);
  const cols = Math.max(2, Math.floor(w / cellMin));
  const rowH = look.labels ? Math.round(Math.max(cellMin, look.size + 80)) : Math.round(w / cols);
  const rows = Math.ceil(icons.length / cols);

  const v = useWindowVirtualizer({ count: rows, estimateSize: () => rowH, overscan: 6, scrollMargin: offset });
  useEffect(() => v.measure(), [rowH, cols, v]);

  /** focus the icon at index i, drawing its row first if it is off screen */
  const focusAt = useCallback(
    (i: number) => {
      const n = Math.max(0, Math.min(icons.length - 1, i));
      v.scrollToIndex(Math.floor(n / cols), { align: "auto" });
      requestAnimationFrame(() => requestAnimationFrame(() => ref.current?.querySelector<HTMLButtonElement>(`[data-i="${n}"]`)?.focus({ preventScroll: true })));
    },
    [cols, icons.length, v],
  );
  const onKey = (e: KeyboardEvent) => {
    const i = Number((e.target as HTMLElement).dataset.i);
    if (Number.isNaN(i)) return;
    const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols, PageDown: cols * 4, PageUp: -cols * 4 }[e.key];
    if (step) {
      e.preventDefault();
      focusAt(i + step);
    } else if (e.key === "Home") (e.preventDefault(), focusAt(0));
    else if (e.key === "End") (e.preventDefault(), focusAt(icons.length - 1));
  };

  return (
    <div
      ref={ref}
      role="grid"
      aria-label="Icons"
      aria-rowcount={rows}
      aria-colcount={cols}
      onKeyDown={onKey}
      // one tab stop for the whole grid: entering it focuses the first icon on screen (or the open one)
      tabIndex={0}
      onFocus={(e) => {
        if (e.target !== e.currentTarget) return;
        const el = e.currentTarget.querySelector<HTMLButtonElement>('[aria-pressed="true"]') ?? [...e.currentTarget.querySelectorAll<HTMLButtonElement>("[data-i]")].find((b) => b.getBoundingClientRect().top >= 0);
        el?.focus();
      }}
      className="relative w-full rounded-[16px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
      style={{ height: v.getTotalSize() }}
    >
      {v.getVirtualItems().map((row) => (
        <div
          key={row.key}
          role="row"
          aria-rowindex={row.index + 1}
          className="absolute inset-x-0 top-0 grid"
          style={{ height: rowH, transform: `translateY(${row.start - v.options.scrollMargin}px)`, gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {icons.slice(row.index * cols, row.index * cols + cols).map((icon, k) => (
            <Cell key={icon.name} i={row.index * cols + k} icon={icon} look={look} on={selected === icon.name} onOpen={onOpen} />
          ))}
        </div>
      ))}
    </div>
  );
}

const Cell = memo(function Cell({ i, icon, look, on, onOpen }: { i: number; icon: IconDef; look: Look; on: boolean; onOpen: (i: IconDef) => void }) {
  return (
    <div role="gridcell" className="p-1">
      <button
        type="button"
        data-i={i}
        tabIndex={-1}
        onClick={() => onOpen(icon)}
        title={icon.title}
        aria-label={`${icon.title} (${icon.name})`}
        aria-pressed={on}
        className={`ki-trigger group relative flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-[16px] border px-2 outline-none transition-[background-color,border-color,color] duration-200 focus-visible:border-[color-mix(in_srgb,var(--accent)_60%,transparent)] focus-visible:bg-surface ${
          on ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft text-accent-ink" : "border-transparent text-ink-2 hover:border-line hover:bg-surface"
        }`}
        style={look.color && !on ? { color: look.color } : undefined}
      >
        <KineticIcon icon={icon} variant={look.variant} size={look.size} strokeWidth={look.stroke ?? undefined} trigger={look.trigger} loopEvery={2200} css={false} />
        {look.labels ? (
          <span className="w-full truncate text-center text-[12px] text-muted group-hover:text-ink">{icon.name}</span>
        ) : (
          <span className="pointer-events-none absolute inset-x-1 bottom-1 truncate text-center text-[10.5px] text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">{icon.name}</span>
        )}
      </button>
    </div>
  );
});

