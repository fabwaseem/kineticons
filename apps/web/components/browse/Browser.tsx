"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { KineticIcon } from "kineticons";
import type { Category, IconDef, Trigger, Variant } from "@kineticons/core";
import { arrowUpRight, close, refresh, search as searchIcon, sliders } from "@kineticons/core/icons";
import { IconDetail } from "./IconDetail";
import { Grid } from "./Grid";
import { countByCategory, loadCatalog, search, sortIcons } from "@/lib/catalog";
import { CATEGORIES, fmt, ICON_COUNT } from "@/lib/categories";
import { useLook, type Look } from "@/lib/store";
import { Kbd, Segmented } from "@/components/ui/bits";

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
  const searchRef = useRef<HTMLInputElement>(null);

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
      const typing = (e.target as HTMLElement)?.closest("input, textarea, [contenteditable]");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === "Escape") {
        if (open) set({ icon: null });
        else if (typing === searchRef.current && q) set({ q: null });
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
    <div className="mx-auto flex w-full max-w-[1920px] gap-6 px-4 sm:px-6">
      {/* the sidebar: customize, then categories */}
      <aside aria-label="Customize and filter" className="sticky top-[var(--nav-h)] hidden h-[calc(100vh-var(--nav-h))] w-[256px] shrink-0 overflow-y-auto py-6 pr-2 [scrollbar-width:thin] lg:block">
        <Customize look={look} patch={patch} reset={reset} />
        <Categories counts={counts} category={category} total={all?.length ?? ICON_COUNT} onPick={goCategory} />
      </aside>

      <div className="min-w-0 flex-1">
        {/* the search */}
        <div className="sticky top-[var(--nav-h)] z-20 -mx-4 bg-[color-mix(in_srgb,var(--bg)_90%,transparent)] px-4 pt-5 pb-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex items-center gap-2">
            <label className="flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-[14px] border border-line bg-surface px-4 shadow-sm transition-colors focus-within:border-[color-mix(in_srgb,var(--accent)_55%,transparent)]">
              <KineticIcon icon={searchIcon} size={19} className="text-faint" />
              <input
                ref={searchRef}
                value={q}
                onChange={(e) => set({ q: e.target.value || null })}
                placeholder={`Search ${fmt(inCategory.length || ICON_COUNT)} icons by name, tag or idea`}
                aria-label="Search icons"
                className="h-full min-w-0 flex-1 bg-transparent text-[15.5px] outline-none placeholder:text-faint"
                autoComplete="off"
                spellCheck={false}
                type="search"
                enterKeyHint="search"
              />
              {q ? (
                <button type="button" onClick={() => set({ q: null })} aria-label="Clear search" className="ki-trigger grid size-8 place-items-center rounded-[9px] text-faint hover:bg-surface-3 hover:text-ink">
                  <KineticIcon icon={close} size={16} />
                </button>
              ) : (
                <span className="hidden sm:inline-grid">
                  <Kbd>/</Kbd>
                </span>
              )}
            </label>
            <button
              type="button"
              onClick={() => setSheet(true)}
              className="ki-trigger inline-flex h-12 shrink-0 items-center gap-2 rounded-[14px] border border-line bg-surface px-4 text-[14px] font-medium shadow-sm lg:hidden"
            >
              <KineticIcon icon={sliders} size={18} />
              <span className="hidden sm:inline">Customize</span>
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
            <h1 className="heading text-[20px]">
              {label}
              <span className="ml-2.5 align-middle text-[13.5px] font-normal text-faint tabular" aria-live="polite">
                {!all ? "" : q.trim() ? `${fmt(shown.length)} of ${fmt(inCategory.length)}` : fmt(shown.length)}
              </span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="hidden text-[12.5px] text-faint xl:block">Point at an icon to see it move. Arrow keys move, Enter opens.</span>
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
            </div>
          </div>
        </div>

        <div className="pb-24">
          {failed ? (
            <Notice title="The icons could not be loaded" text="Check your connection, then try again.">
              <button type="button" onClick={load} className="h-10 rounded-[12px] bg-ink px-4 text-[14px] font-medium text-bg">
                Try again
              </button>
            </Notice>
          ) : !all ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(116px,1fr))] gap-2" aria-busy="true" aria-label="Loading icons">
              {Array.from({ length: 48 }, (_, i) => (
                <div key={i} className="skeleton h-[116px] rounded-[16px]" />
              ))}
            </div>
          ) : shown.length ? (
            <Grid icons={shown} look={look} selected={open} onOpen={onOpen} />
          ) : (
            <Notice title={`No icon matches “${q.trim()}”`} text="Try a simpler word, or what the icon shows: “money” instead of “payment gateway”.">
              <button type="button" onClick={() => set({ q: null })} className="h-10 rounded-[12px] bg-ink px-4 text-[14px] font-medium text-bg">
                Clear the search
              </button>
              {category && (
                <button type="button" onClick={() => goCategory(null)} className="h-10 rounded-[12px] border border-line px-4 text-[14px] font-medium">
                  Search every category
                </button>
              )}
            </Notice>
          )}
        </div>
      </div>

      {/* the details: docked on wide screens */}
      {openIcon && (
        <aside aria-labelledby="panel-title" className="sticky top-[var(--nav-h)] hidden h-[calc(100vh-var(--nav-h))] w-[400px] shrink-0 overflow-y-auto border-l border-line py-6 pl-6 [scrollbar-width:thin] 2xl:block">
          <Details icon={openIcon} look={look} onClose={() => set({ icon: null })} />
        </aside>
      )}
      {/* ...and a drawer below that width */}
      {openIcon && (
        <Drawer label={openIcon.title} onClose={() => set({ icon: null })} className="2xl:hidden">
          <Details icon={openIcon} look={look} onClose={() => set({ icon: null })} />
        </Drawer>
      )}
      {/* customize and categories on small screens */}
      {sheet && (
        <Drawer label="Customize" onClose={() => setSheet(false)} className="lg:hidden" side="left">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="heading text-[22px]">Customize</h2>
            <button type="button" onClick={() => setSheet(false)} aria-label="Close" className="ki-trigger grid size-9 place-items-center rounded-[11px] text-muted hover:bg-surface-3">
              <KineticIcon icon={close} size={18} />
            </button>
          </div>
          <Customize look={look} patch={patch} reset={reset} />
          <Categories counts={counts} category={category} total={all?.length ?? ICON_COUNT} onPick={goCategory} />
        </Drawer>
      )}
    </div>
  );
}

function Customize({ look, patch, reset }: { look: Look; patch: (p: Partial<Look>) => void; reset: () => void }) {
  return (
    <section aria-labelledby="customize-title" className="rounded-[18px] border border-line bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 id="customize-title" className="text-[13px] font-semibold">
          Customize
        </h2>
        <button type="button" onClick={reset} className="ki-trigger inline-flex items-center gap-1 rounded-[8px] px-1.5 py-1 text-[12px] text-muted hover:bg-surface-3 hover:text-ink">
          <KineticIcon icon={refresh} size={13} />
          Reset
        </button>
      </div>
      <div className="space-y-4">
        <Row label="Style">
          <Segmented size="sm" label="Style" value={look.variant} onChange={(v) => patch({ variant: v })} options={STYLES.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))} />
        </Row>
        <Row label="Motion">
          <Segmented
            size="sm"
            label="When icons move"
            value={look.trigger}
            onChange={(v: Trigger) => patch({ trigger: v })}
            options={[
              { value: "hover", label: "Hover" },
              { value: "loop", label: "Always" },
              { value: "none", label: "Still" },
            ]}
          />
        </Row>
        <Slider label="Size" value={look.size} min={16} max={48} step={2} unit="px" onChange={(v) => patch({ size: v })} />
        <Slider label="Stroke" value={look.stroke ?? 1.75} min={1} max={2.5} step={0.25} onChange={(v) => patch({ stroke: v === 1.75 ? null : v })} />
        <Row label="Colour">
          <div className="flex flex-wrap items-center gap-1.5" role="radiogroup" aria-label="Colour">
            {COLOURS.map((c) => (
              <button
                key={c || "ink"}
                type="button"
                role="radio"
                aria-checked={look.color === c}
                aria-label={c || "Ink"}
                onClick={() => patch({ color: c })}
                className={`size-6 rounded-full border-2 transition-transform hover:scale-110 ${look.color === c ? "border-ink" : "border-transparent"}`}
                style={{ background: c || "var(--ink-2)" }}
              />
            ))}
            <label className="relative size-6 cursor-pointer overflow-hidden rounded-full border border-line-strong" title="Any colour" style={{ background: "conic-gradient(red,yellow,lime,aqua,blue,magenta,red)" }}>
              <input type="color" value={look.color || "#3b3846"} onChange={(e) => patch({ color: e.target.value })} className="absolute inset-0 cursor-pointer opacity-0" aria-label="Any colour" />
            </label>
          </div>
        </Row>
        <label className="flex cursor-pointer items-center justify-between text-[13px] text-muted">
          Show names
          <input type="checkbox" checked={look.labels} onChange={(e) => patch({ labels: e.target.checked })} className="size-4 accent-[var(--accent)]" />
        </label>
      </div>
    </section>
  );
}

function Categories({ counts, category, total, onPick }: { counts: Record<string, number> | null; category: Category | null; total: number; onPick: (c: Category | null) => void }) {
  return (
    <nav aria-label="Categories" className="mt-5">
      <RailItem on={!category} label="All icons" count={total} onClick={() => onPick(null)} />
      <div className="my-2 h-px bg-line" />
      {CATEGORIES.map((c) => (
        <RailItem key={c.value} on={category === c.value} label={c.label} count={counts?.[c.value]} onClick={() => onPick(c.value)} />
      ))}
    </nav>
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
          <p className="mt-0.5 truncate font-mono text-[12.5px] text-faint">{icon.name}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          <Link href={`/icons/${icon.name}`} className="ki-trigger inline-flex h-9 items-center gap-1.5 rounded-[11px] px-3 text-[13px] font-medium text-ink-2 hover:bg-surface-3 hover:text-ink">
            Page
            <KineticIcon icon={arrowUpRight} size={15} />
          </Link>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close details" className="ki-trigger grid size-9 place-items-center rounded-[11px] text-muted hover:bg-surface-3 hover:text-ink">
            <KineticIcon icon={close} size={18} />
          </button>
        </div>
      </header>
      <IconDetail icon={icon} look={look} />
      <div className="mt-6 flex flex-wrap gap-1.5">
        {icon.tags.map((t) => (
          <Link key={t} href={`/icons?q=${encodeURIComponent(t)}`} className="rounded-full bg-surface-3 px-2.5 py-1 text-[12px] text-muted hover:text-ink">
            {t}
          </Link>
        ))}
      </div>
    </>
  );
}

function Drawer({ children, label, onClose, className = "", side = "right" }: { children: ReactNode; label: string; onClose: () => void; className?: string; side?: "left" | "right" }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, []);
  return (
    <div className={`fixed inset-0 z-50 flex ${side === "right" ? "justify-end" : "justify-start"} ${className}`} role="dialog" aria-modal="true" aria-label={label}>
      <button type="button" tabIndex={-1} aria-label="Close" className="absolute inset-0 bg-[rgba(15,13,20,.32)] backdrop-blur-[2px]" style={{ animation: "scrim-in .25s ease both" }} onClick={onClose} />
      <div
        className={`relative h-full w-full max-w-[460px] overflow-y-auto bg-bg px-5 py-5 shadow-lg ${side === "right" ? "border-l" : "border-r"} border-line`}
        style={{ animation: "drawer-in .4s var(--ease-smooth) both" }}
      >
        {children}
      </div>
    </div>
  );
}

function Notice({ title, text, children }: { title: string; text: string; children?: ReactNode }) {
  return (
    <div className="grid place-items-center rounded-[24px] border border-dashed border-line-strong px-6 py-24 text-center">
      <h2 className="heading text-[24px]">{title}</h2>
      <p className="mt-3 max-w-[420px] text-[15px] text-muted">{text}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">{children}</div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-[12.5px] text-muted">{label}</div>
      {children}
    </div>
  );
}

function RailItem({ on, label, count, onClick }: { on: boolean; label: string; count?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={on ? "true" : undefined}
      className={`flex w-full items-center justify-between rounded-[10px] px-3 py-1.5 text-left text-[14px] transition-colors ${on ? "bg-surface font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
    >
      {label}
      <span className={`text-[12px] tabular ${on ? "text-accent-ink" : "text-faint"}`}>{count != null ? fmt(count) : ""}</span>
    </button>
  );
}

function Slider({ label, value, min, max, step, unit = "", onChange }: { label: string; value: number; min: number; max: number; step: number; unit?: string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex justify-between text-[12.5px] text-muted">
        {label}
        <span className="text-ink tabular">
          {value}
          {unit}
        </span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="w-full accent-[var(--accent)]" aria-label={label} />
    </label>
  );
}
