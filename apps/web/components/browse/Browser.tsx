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
import { btn, chip, iconBtn, tag } from "@/components/ui/controls";

const STYLES = ["outline", "duotone", "filled"] as const;
const COLOURS = ["", "#ff5a2d", "#7c5cff", "#14b8a6", "#f43f5e", "#f59e0b", "#3b82f6"];
type Sort = "category" | "name";

/**
 * Every icon, full width: a sticky toolbar (style, order, a customizer behind one button, the categories as a row of
 * chips), a virtualized grid of soft tiles, and the chosen icon's details (docked beside the grid on wide screens, a drawer otherwise). The
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
    <div className="flex w-full gap-4 px-3 sm:px-5 lg:gap-6">
      {/* every icon's motion in one stylesheet: the grid's icons bring none of their own */}
      <link rel="stylesheet" href="/kineticons.css" precedence="default" />

      <div className="min-w-0 flex-1">
        {/* the toolbar: what is shown and how many, style, order and the customizer; then the categories as one row */}
        <div className="sticky top-[var(--nav-h)] z-20 -mx-3 bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] px-3 pt-6 pb-3 backdrop-blur-xl sm:-mx-5 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="heading text-[26px] leading-none sm:text-[30px]">
              {label}
              <span className="ml-3 align-middle font-sans text-[14px] font-normal tracking-normal text-faint tabular" aria-live="polite">
                {!all ? "" : q.trim() ? `${fmt(shown.length)} of ${fmt(inCategory.length)}` : fmt(shown.length)}
              </span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="hidden sm:block">
                <Segmented size="sm" label="Style" value={look.variant} onChange={(v) => patch({ variant: v })} options={STYLES.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))} />
              </span>
              <span className="hidden md:block">
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
              </span>
              <CustomizeMenu look={look} patch={patch} reset={reset} onPhone={() => setSheet(true)} />
            </div>
          </div>
          <nav aria-label="Categories" className="no-scrollbar -mx-3 mt-4 flex gap-1 overflow-x-auto px-3 sm:-mx-5 sm:px-5">
            <button type="button" onClick={() => goCategory(null)} aria-current={!category ? "true" : undefined} className={chip(!category, "h-8 px-3.5")}>
              All
              <span className="text-[11.5px] opacity-60 tabular">{fmt(all?.length ?? ICON_COUNT)}</span>
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.value} type="button" onClick={() => goCategory(c.value)} aria-current={category === c.value ? "true" : undefined} className={chip(category === c.value, "h-8 px-3.5")}>
                {c.label}
                <span className="text-[11.5px] opacity-60 tabular">{counts?.[c.value] != null ? fmt(counts[c.value]) : ""}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-2 pb-24">
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
      <Drawer open={sheet} label="Customize" onClose={() => setSheet(false)} hideAt={768} className="md:hidden" side="right">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="heading text-[26px]">Customize</h2>
            <button type="button" onClick={() => setSheet(false)} aria-label="Close" className={iconBtn()}>
              <KineticIcon icon={close} size={18} />
            </button>
          </div>
          <Customize look={look} patch={patch} reset={reset} />
          <div className="mt-4 px-3.5">
            <Segmented size="sm" full label="Sort" value={sort} onChange={(v: Sort) => set({ sort: v === "category" ? null : v })} options={[{ value: "category", label: "By category" }, { value: "name", label: "A–Z" }]} />
          </div>
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
      className="anim-panel sticky top-[calc(var(--nav-h)+16px)] mt-4 hidden h-[calc(100vh-var(--nav-h)-32px)] w-[380px] shrink-0 flex-col overflow-hidden rounded-[28px] bg-surface shadow-[var(--edge)] xl:flex 2xl:w-[420px]"
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
      <button type="button" tabIndex={-1} aria-label="Close" data-state={state} className="anim-scrim absolute inset-0 bg-[rgba(0,0,0,.42)] backdrop-blur-[2px]" onClick={onClose} />
      <div
        data-state={state}
        className={`${side === "right" ? "anim-sheet-r" : "anim-sheet-l"} relative m-2 flex h-[calc(100%-16px)] w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] bg-card shadow-[var(--shadow-lg),var(--edge)]`}
      >
        <div className="scroll-area my-4 mr-1 min-h-0 flex-1 pr-3 pl-5">{typeof children === "function" ? children(last as T) : children}</div>
      </div>
    </div>
  );
}

function Notice({ title, text, children }: { title: string; text: string; children?: ReactNode }) {
  return (
    <div className="tile grid place-items-center rounded-[28px] px-6 py-24 text-center">
      <h2 className="heading text-[32px]">{title}</h2>
      <p className="mt-3 max-w-[420px] text-[15px] text-muted">{text}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">{children}</div>
    </div>
  );
}

/** The customizer behind one button: a popover under it on wider screens, a sheet on phones. */
function CustomizeMenu({ look, patch, reset, onPhone }: { look: Look; patch: (p: Partial<Look>) => void; reset: () => void; onPhone: () => void }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const { mounted, state } = usePresence(open, 220);
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => !box.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", away);
    window.addEventListener("keydown", esc);
    return () => (document.removeEventListener("pointerdown", away), window.removeEventListener("keydown", esc));
  }, [open]);
  const changed = (Object.keys(DEFAULT_LOOK) as (keyof Look)[]).some((k) => look[k] !== DEFAULT_LOOK[k]);
  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => (window.innerWidth < 768 ? onPhone() : setOpen(!open))}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={btn(open ? "primary" : "secondary", "sm", "relative")}
      >
        <KineticIcon icon={sliders} size={16} />
        <span className="hidden sm:inline">Customize</span>
        {changed && <span aria-label="changed" className="absolute top-1 right-1 size-2 rounded-full bg-accent" />}
      </button>
      {mounted && (
        <div role="dialog" aria-label="Customize" data-state={state} className="anim-pop absolute top-[calc(100%+8px)] right-0 z-30 w-[300px] rounded-box bg-card p-1.5 shadow-[var(--shadow-lg),var(--edge)]">
          <Customize look={look} patch={patch} reset={reset} />
        </div>
      )}
    </div>
  );
}

/** How the grid draws icons: style, motion, size, stroke, colour, names. Compact, so the sidebar fits a screen. */
function Customize({ look, patch, reset }: { look: Look; patch: (p: Partial<Look>) => void; reset: () => void }) {
  const changed = (Object.keys(DEFAULT_LOOK) as (keyof Look)[]).some((k) => look[k] !== DEFAULT_LOOK[k]);
  return (
    <section aria-labelledby="customize-title" className="rounded-card p-3.5">
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
        <div className="mt-2.5">
          <Switch label="Brand colours" hint="Logos in their own colours" checked={!!look.brand} onChange={(v) => patch({ brand: v })} />
        </div>
      </div>
    </section>
  );
}
