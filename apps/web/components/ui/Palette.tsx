"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { KineticIcon } from "kineticons";
import { type IconDef } from "@kineticons/core";
import { loadCatalog, search, sortIcons } from "@/lib/catalog";
import { categoryLabel, fmt, ICON_COUNT } from "@/lib/categories";
import { Kbd } from "./bits";

/** The icon search dialog (⌘K / Ctrl K): type, move with the arrows, Enter opens the icon. Loaded on first use. */
export default function Palette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const dq = useDeferredValue(q);
  const [sel, setSel] = useState(0);
  const router = useRouter();
  const nav = (to: string) => router.push(to);
  const [all, setAll] = useState<IconDef[]>([]);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    loadCatalog().then((l) => setAll(sortIcons(l)), () => setFailed(true));
  }, []);
  const list = useRef<HTMLUListElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const results = useMemo(() => (dq.trim() ? search(all, dq) : []), [dq, all]);
  const shown = results.slice(0, 60);
  useEffect(() => setSel(0), [dq]);
  useEffect(() => {
    input.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = prev);
  }, []);
  useEffect(() => {
    list.current?.querySelector(`[data-i="${sel}"]`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  const go = (icon: IconDef) => {
    onClose();
    nav(`/icons/${icon.name}`);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-3 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search icons">
      <button type="button" aria-label="Close search" tabIndex={-1} className="absolute inset-0 bg-[rgba(15,13,20,.38)] backdrop-blur-[3px]" style={{ animation: "scrim-in .2s ease both" }} onClick={onClose} />
      <div className="card relative flex max-h-[min(620px,76vh)] w-full max-w-[640px] flex-col overflow-hidden rounded-box shadow-[var(--shadow-lg)]" style={{ animation: "rise .35s var(--ease-smooth) both" }}>
        <div className="flex items-center gap-3 border-b border-line px-4">
          <svg viewBox="0 0 24 24" className="size-5 text-faint" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden>
            <circle cx="10.75" cy="10.75" r="6.5" />
            <path d="M15.6 15.6 20.25 20.25" />
          </svg>
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose();
              else if (e.key === "ArrowDown") (e.preventDefault(), setSel((s) => Math.min(shown.length - 1, s + 1)));
              else if (e.key === "ArrowUp") (e.preventDefault(), setSel((s) => Math.max(0, s - 1)));
              else if (e.key === "Enter" && shown[sel]) go(shown[sel]);
            }}
            placeholder={`Search ${fmt(ICON_COUNT)} icons by name, tag or idea`}
            aria-label="Search icons"
            aria-controls="palette-results"
            aria-activedescendant={shown[sel] ? `pal-${shown[sel].name}` : undefined}
            className="h-14 flex-1 bg-transparent text-[16px] outline-none placeholder:text-faint"
            autoComplete="off"
            spellCheck={false}
          />
          <Kbd>Esc</Kbd>
        </div>
        {q.trim() === "" ? (
          <div className="px-5 py-8 text-[14px] text-muted">
            Try <Hint set={setQ} q="upload" />, <Hint set={setQ} q="arrow right" />, <Hint set={setQ} q="weather" /> or <Hint set={setQ} q="money" />.
          </div>
        ) : failed ? (
          <div className="px-5 py-8 text-[14px] text-muted">The icon list could not be loaded. Check your connection and open the search again.</div>
        ) : !all.length ? (
          <div className="px-5 py-8" aria-busy="true">
            <div className="skeleton h-4 w-56 rounded-xs" />
          </div>
        ) : shown.length === 0 ? (
          <div className="px-5 py-8 text-[14px] text-muted">No icon matches “{q.trim()}”. Try a simpler word, or what the icon shows.</div>
        ) : (
          <ul ref={list} id="palette-results" role="listbox" className="overflow-y-auto p-2">
            {shown.map((icon, i) => (
              <li key={icon.name} id={`pal-${icon.name}`} role="option" aria-selected={i === sel} data-i={i}>
                <button
                  type="button"
                  onMouseMove={() => setSel(i)}
                  onClick={() => go(icon)}
                  className={`ki-trigger flex w-full items-center gap-3 rounded-tile px-3 py-2 text-left transition-colors ${i === sel ? "bg-surface-3" : ""}`}
                >
                  <span className="grid size-10 place-items-center rounded-tile border border-line bg-surface-2 text-ink-2">
                    <KineticIcon icon={icon} size={20} trigger={i === sel ? "manual" : "hover"} active={i === sel} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium">{icon.title}</span>
                    <span className="block truncate font-mono text-[12px] text-faint">{icon.name}</span>
                  </span>
                  <span className="text-[12px] text-faint">{categoryLabel(icon.category)}</span>
                </button>
              </li>
            ))}
            {results.length > shown.length && (
              <li className="px-3 py-2 text-[13px] text-faint">
                {fmt(results.length - shown.length)} more: keep typing, or{" "}
                <button type="button" className="text-accent-ink underline-offset-2 hover:underline" onClick={() => (onClose(), nav(`/icons?q=${encodeURIComponent(q.trim())}`))}>
                  see them all
                </button>
                .
              </li>
            )}
          </ul>
        )}
        <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 text-[12px] text-faint">
          <span className="flex items-center gap-1.5"><Kbd>↑</Kbd><Kbd>↓</Kbd> move</span>
          <span className="flex items-center gap-1.5"><Kbd>↵</Kbd> open</span>
        </div>
      </div>
    </div>
  );
}

function Hint({ q, set }: { q: string; set: (q: string) => void }) {
  return (
    <button type="button" onClick={() => set(q)} className="rounded-full bg-surface-3 px-2.5 py-0.5 font-medium text-ink-2 transition-colors hover:text-ink">
      {q}
    </button>
  );
}
