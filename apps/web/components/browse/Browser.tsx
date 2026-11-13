"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { KineticIcon } from "kineticons";
import type { Category, IconDef, Trigger, Variant } from "@kineticons/core";
import { arrowUpRight, close, refresh, sliders } from "@kineticons/core/icons";
import { IconDetail } from "./IconDetail";
import { Grid } from "./Grid";
import { countByCategory, loadCatalog, search, sortIcons } from "@/lib/catalog";
import { CATEGORIES, fmt, ICON_COUNT } from "@/lib/categories";
import { DEFAULT_LOOK, useLook, type Look } from "@/lib/store";
import { Segmented } from "@/components/ui/bits";
import { ColorPicker, Slider, Switch } from "@/components/ui/inputs";
import { usePresence } from "@/components/ui/presence";
import { btn, eyebrow, iconBtn, navItem, tag } from "@/components/ui/controls";

const STYLES = ["outline", "duotone", "filled"] as const;
const COLOURS = ["", "#ff5a2d", "#7c5cff", "#14b8a6", "#f43f5e", "#f59e0b", "#3b82f6"];
type Sort = "category" | "name";

/**
 * Every icon, full width: a sidebar to customize how icons are drawn and to pick a category, a sticky search, a
 * virtualized grid, and the chosen icon's details (docked beside the grid on wide screens, a drawer otherwise). The
 * search, category, sort and open icon live in the URL, so any view can be shared.
 */
export default function Browser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { look, patch, reset } = useLook();
  const [all, setAll] = useState<IconDef[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [sheet, setSheet] = useState(false);
  const q = params.get("q") ?? "";
  const category = (params.get("category") as Category | null) ?? null;
  const sort: Sort = params.get("sort") === "name" ? "name" : "category";
  const open = params.get("icon");
  const dq = useDeferredValue(q);
  const searchEl = () => document.getElementById("icon-search") as HTMLInputElement | null;

  const load = useCallback(() => {
    setFailed(false);
    loadCatalog().then(setAll, () => setFailed(true));
  }, []);
  useEffect(load, [load]);

  const set = useCallback(
    (p: Record<string, string | null>, push = false) => {
      const next = new URLSearchParams(params.toString());
      for (const [k, v] of Object.entries(p)) v ? next.set(k, v) : next.delete(k);
      const qs = next.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;
      if (push) router.push(url, { scroll: false });
      else router.replace(url, { scroll: false });
    },
    [params, pathname, router],
  );

  // ?style= from a link sets the style once
  const styleParam = params.get("style");
  useEffect(() => {
    if (styleParam && (STYLES as readonly string[]).includes(styleParam)) {
      patch({ variant: styleParam as Variant });
      set({ style: null });
    }
  }, [styleParam]); // eslint-disable-line react-hooks/exhaustive-deps

  const sorted = useMemo(() => (all ? (sort === "name" ? [...all].sort((a, b) => a.name.localeCompare(b.name)) : sortIcons(all)) : []), [all, sort]);
  const counts = useMemo(() => (all ? countByCategory(all) : null), [all]);
  const inCategory = useMemo(() => (category ? sorted.filter((i) => i.category === category) : sorted), [category, sorted]);
  const shown = useMemo(() => search(inCategory, dq), [inCategory, dq]);
  const openIcon = open && all ? (all.find((i) => i.name === open) ?? null) : null;

  // "/" focuses the search; Escape closes the details or clears the search
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      const typing = e.target instanceof Element ? e.target.closest("input, textarea, [contenteditable]") : null;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchEl()?.focus();
      } else if (e.key === "Escape") {
        if (open) set({ icon: null });
        else if (typing && typing === searchEl() && q) set({ q: null });
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [open, q, set]);

  const onOpen = useCallback((i: IconDef) => set({ icon: i.name }, true), [set]);
  const goCategory = (c: Category | null) => {
    set({ category: c });
    setSheet(false);
    window.scrollTo({ top: 0 });
  };
  const label = category ? (CATEGORIES.find((c) => c.value === category)?.label ?? category) : "All icons";

  return (
    <div className="flex w-full gap-3 px-2 sm:px-3 lg:gap-4">
      {/* every icon's motion in one stylesheet: the grid's icons bring none of their own */}
      <link rel="stylesheet" href="/kineticons.css" precedence="default" />
      {/* the sidebar: customize, then categories */}
      <aside aria-label="Customize and filter" className="sticky top-[calc(var(--nav-h)+12px)] mt-3 hidden max-h-[calc(100vh-var(--nav-h)-24px)] w-[272px] shrink-0 flex-col self-start overflow-hidden rounded-box border border-line bg-surface-2 lg:flex">
        {/* the scroller sits inside the rounded box, clear of its corners; on most screens it never needs to scroll */}
        <div className="scroll-area my-3 mr-1 min-h-0 flex-1 pr-1 pl-3">
          <Customize look={look} patch={patch} reset={reset} />
          <Categories counts={counts} category={category} total={all?.length ?? ICON_COUNT} onPick={goCategory} />
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        {/* the toolbar: what is shown, how many, the order (the search lives in the app bar) */}
        <div className="sticky top-[var(--nav-h)] z-20 -mx-2 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-2 pt-5 pb-3 backdrop-blur-xl sm:-mx-3 sm:px-3 lg:mx-0 lg:px-0">
          <div className="flex flex-wrap items-center justify-between gap-3 px-2">
            <h1 className="heading text-[26px] leading-none">
              {label}
              <span className="ml-3 align-middle font-sans text-[14px] font-normal text-faint tabular" aria-live="polite">
                {!all ? "" : q.trim() ? `${fmt(shown.length)} of ${fmt(inCategory.length)}` : fmt(shown.length)}
              </span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="mr-1 hidden text-[13px] text-faint xl:block">Point at an icon to see it move. Arrow keys move, Enter opens.</span>
              <Segmented
                size="sm"
                label="Sort"
                value={sort}
                onChange={(v: Sort) => set({ sort: v === "category" ? null : v })}
                options={[
                  { value: "category", label: "By category" },
                  { value: "name", label: "A–Z" },
                ]}
              />
              <button type="button" onClick={() => setSheet(true)} aria-label="Customize and filter" className={btn("secondary", "sm", "lg:hidden")}>
                <KineticIcon icon={sliders} size={16} />
                <span className="hidden sm:inline">Customize</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pb-24">
          {failed ? (
            <Notice title="The icons could not be loaded" text="Check your connection, then try again.">
              <button type="button" onClick={load} className={btn("primary")}>
                Try again
              </button>
            </Notice>
          ) : !all ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(116px,1fr))] gap-2" aria-busy="true" aria-label="Loading icons">
              {Array.from({ length: 48 }, (_, i) => (
                <div key={i} className="skeleton h-[116px] rounded-tile" />
              ))}
            </div>
          ) : shown.length ? (
            <Grid icons={shown} look={look} selected={open} onOpen={onOpen} />
          ) : (
            <Notice title={`No icon matches “${q.trim()}”`} text="Try a simpler word, or what the icon shows: “money” instead of “payment gateway”.">
              <button type="button" onClick={() => set({ q: null })} className={btn("primary")}>
                Clear the search
              </button>
              {category && (
                <button type="button" onClick={() => goCategory(null)} className={btn("secondary")}>
                  Search every category
                </button>
              )}
            </Notice>
          )}
        </div>
      </div>

      {/* the details: docked on wide screens */}
      <DetailsDock icon={openIcon} look={look} onClose={() => set({ icon: null })} />
      {/* ...and a sheet below that width */}
      <Drawer open={openIcon} label={openIcon?.title ?? "Icon"} onClose={() => set({ icon: null })} hideAt={1280} className="xl:hidden">
        {(icon) => <Details icon={icon} look={look} onClose={() => set({ icon: null })} />}
      </Drawer>
      {/* customize and categories on small screens */}
      <Drawer open={sheet} label="Customize and filter" onClose={() => setSheet(false)} hideAt={1024} className="lg:hidden" side="left">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="heading text-[26px]">Customize and filter</h2>
            <button type="button" onClick={() => setSheet(false)} aria-label="Close" className={iconBtn()}>
              <KineticIcon icon={close} size={18} />
            </button>
          </div>
          <Customize look={look} patch={patch} reset={reset} />
          <Categories counts={counts} category={category} total={all?.length ?? ICON_COUNT} onPick={goCategory} />
        </Drawer>
    </div>
  );
}



function Details({ icon, look, onClose }: { icon: IconDef; look: Look; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => closeRef.current?.focus({ preventScroll: true }), [icon]);
  return (
    <>
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 id="panel-title" className="heading truncate text-[24px]">
            {icon.title}
          </h2>
          <p className="mt-0.5 truncate font-mono text-[13px] text-faint">{icon.name}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          <Link href={`/icons/${icon.name}`} className={btn("ghost", "sm", "px-3")}>
            Page
            <KineticIcon icon={arrowUpRight} size={15} />
          </Link>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close details" className={iconBtn()}>
            <KineticIcon icon={close} size={18} />
          </button>
        </div>
      </header>
      <IconDetail icon={icon} look={look} />
      <div className="mt-6 flex flex-wrap gap-1.5">
        {icon.tags.map((t) => (
          <Link key={t} href={`/icons?q=${encodeURIComponent(t)}`} className={tag("transition-colors hover:text-ink")}>
            {t}
          </Link>
        ))}
      </div>
    </>
  );
}

/** The details docked beside the grid on wide screens: slides in, and out again when closed. */
function DetailsDock({ icon, look, onClose }: { icon: IconDef | null; look: Look; onClose: () => void }) {
  const { mounted, state, last } = usePresence(icon, 260);
  if (!mounted || !last) return null;
  return (
    <aside
      aria-labelledby="panel-title"
      data-state={state}
      className="anim-panel sticky top-[calc(var(--nav-h)+12px)] mt-3 hidden h-[calc(100vh-var(--nav-h)-24px)] w-[400px] shrink-0 flex-col overflow-hidden rounded-box border border-line bg-surface-2 xl:flex 2xl:w-[440px]"
    >
      <div className="scroll-area my-4 mr-1 min-h-0 flex-1 pr-3 pl-5">
        <Details icon={last} look={look} onClose={onClose} />
      </div>
    </aside>
  );
}

/** A sheet from the side over a dimmed page; slides in and out. Children can be a function of the last open value. */
function Drawer<T>({ open, children, label, onClose, hideAt, className = "", side = "right" }: { open: T | null | false | undefined; children: ReactNode | ((v: T) => ReactNode); label: string; onClose: () => void; hideAt: number; className?: string; side?: "left" | "right" }) {
  const { mounted, state, last } = usePresence(open, 300);
  useEffect(() => {
    // lock the page only while the sheet is actually showing (it is hidden from `hideAt` px up)
    if (!open || window.innerWidth >= hideAt) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, [open]);
  if (!mounted || last == null) return null;
  return (
    <div className={`fixed inset-0 z-50 flex ${side === "right" ? "justify-end" : "justify-start"} ${className}`} role="dialog" aria-modal="true" aria-label={label} data-state={state}>
      <button type="button" tabIndex={-1} aria-label="Close" data-state={state} className="anim-scrim absolute inset-0 bg-[rgba(15,13,20,.32)] backdrop-blur-[2px]" onClick={onClose} />
      <div
        data-state={state}
        className={`${side === "right" ? "anim-sheet-r" : "anim-sheet-l"} relative m-2 flex h-[calc(100%-16px)] w-full max-w-[460px] flex-col overflow-hidden rounded-box border border-line bg-bg shadow-[var(--shadow-lg)]`}
      >
        <div className="scroll-area my-4 mr-1 min-h-0 flex-1 pr-3 pl-5">{typeof children === "function" ? children(last as T) : children}</div>
      </div>
    </div>
  );
}

function Notice({ title, text, children }: { title: string; text: string; children?: ReactNode }) {
  return (
    <div className="grid place-items-center rounded-box border border-dashed border-line-strong px-6 py-24 text-center">
      <h2 className="heading text-[32px]">{title}</h2>
      <p className="mt-3 max-w-[420px] text-[15px] text-muted">{text}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">{children}</div>
    </div>
  );
}

/** How the grid draws icons: style, motion, size, stroke, colour, names. Compact, so the sidebar fits a screen. */
function Customize({ look, patch, reset }: { look: Look; patch: (p: Partial<Look>) => void; reset: () => void }) {
  const changed = (Object.keys(DEFAULT_LOOK) as (keyof Look)[]).some((k) => look[k] !== DEFAULT_LOOK[k]);
  return (
    <section aria-labelledby="customize-title" className="rounded-card border border-line bg-surface p-3.5 shadow-[var(--shadow-sm)]">
      <div className="flex h-7 items-center justify-between">
        <h2 id="customize-title" className="text-[14px] font-semibold">
          Customize
        </h2>
        <button
          type="button"
          onClick={reset}
          disabled={!changed}
          className="ki-trigger inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-[12px] text-muted transition-[color,background-color,opacity] hover:bg-surface-3 hover:text-ink disabled:pointer-events-none disabled:opacity-0"
        >
          <KineticIcon icon={refresh} size={13} />
          Reset
        </button>
      </div>
      <div className="mt-3 space-y-2">
        <Segmented size="sm" full label="Style" value={look.variant} onChange={(v) => patch({ variant: v })} options={STYLES.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))} />
        <Segmented
          size="sm"
          full
          label="When icons move"
          value={look.trigger}
          onChange={(v: Trigger) => patch({ trigger: v })}
          options={[
            { value: "hover", label: "On hover" },
            { value: "loop", label: "Always" },
            { value: "none", label: "Still" },
          ]}
        />
      </div>
      <div className="mt-4 space-y-3">
        <Slider label="Size" value={look.size} min={16} max={48} step={2} onChange={(v) => patch({ size: v })} format={(v) => `${v}px`} />
        <Slider label="Stroke" value={look.stroke ?? 1.75} min={1} max={2.5} step={0.25} onChange={(v) => patch({ stroke: v === 1.75 ? null : v })} format={(v) => v.toFixed(2)} />
      </div>
      <div className="mt-4">
        <div className="mb-2 text-[13px] text-muted">Colour</div>
        <ColorPicker label="Colour" value={look.color} colors={COLOURS} onChange={(c) => patch({ color: c })} />
      </div>
      <div className="mt-4 border-t border-line pt-3">
        <Switch label="Show names" checked={look.labels} onChange={(v) => patch({ labels: v })} />
      </div>
    </section>
  );
}

function Categories({ counts, category, total, onPick }: { counts: Record<string, number> | null; category: Category | null; total: number; onPick: (c: Category | null) => void }) {
  const row = (on: boolean) => navItem(on, "py-[5px]");
  const count = (on: boolean, n?: number) => <span className={`text-[12px] tabular ${on ? "text-accent-ink" : "text-faint"}`}>{n != null ? fmt(n) : ""}</span>;
  return (
    <nav aria-label="Categories" className="mt-4">
      <h2 className={`${eyebrow} mb-1.5 px-3.5`}>Categories</h2>
      <button type="button" onClick={() => onPick(null)} aria-current={!category ? "true" : undefined} className={row(!category)}>
        All icons
        {count(!category, total)}
      </button>
      <ul className="mt-0.5">
        {CATEGORIES.map((c) => (
          <li key={c.value}>
            <button type="button" onClick={() => onPick(c.value)} aria-current={category === c.value ? "true" : undefined} className={row(category === c.value)}>
              {c.label}
              {count(category === c.value, counts?.[c.value])}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
