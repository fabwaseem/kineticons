"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { arrowRight, search as searchIcon } from "@kineticons/core/icons";
import { loadCatalog, search } from "@/lib/catalog";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { Kbd } from "@/components/ui/bits";

const IDEAS = ["rocket", "upload", "heart", "weather", "money", "chat"];

/**
 * Search from the first screen: the catalog loads when the box is focused, matches show as you type (each plays its
 * motion when pointed at), Enter opens the full results in the browser. Arrow keys move through the matches.
 */
export function HeroSearch() {
  const router = useRouter();
  const [all, setAll] = useState<IconDef[] | null>(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const dq = useDeferredValue(q);
  const listId = useId();
  const boxRef = useRef<HTMLDivElement>(null);

  const warm = () => void loadCatalog().then(setAll, () => {});
  const results = useMemo(() => (all && dq.trim() ? search(all, dq) : []), [all, dq]);
  const top = results.slice(0, 8);
  useEffect(() => setCursor(-1), [dq]);

  // close when focus or a click goes elsewhere
  useEffect(() => {
    const on = (e: PointerEvent) => !boxRef.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("pointerdown", on);
    return () => document.removeEventListener("pointerdown", on);
  }, []);

  const go = () => {
    const pick = cursor >= 0 ? top[cursor] : null;
    router.push(pick ? `/icons/${pick.name}` : q.trim() ? `/icons?q=${encodeURIComponent(q.trim())}` : "/icons");
  };

  return (
    <div ref={boxRef} className="relative text-left" onFocus={() => (warm(), setOpen(true))}>
      <label className="flex h-[60px] items-center gap-3 rounded-[18px] border border-line-strong bg-surface pr-3 pl-5 shadow-[var(--shadow-md)] transition-[border-color,box-shadow] focus-within:border-[color-mix(in_srgb,var(--accent)_55%,transparent)] focus-within:shadow-[0_0_0_4px_var(--accent-soft),var(--shadow-md)]">
        <KineticIcon icon={searchIcon} size={21} className="shrink-0 text-faint" />
        <input
          value={q}
          onChange={(e) => (setQ(e.target.value), setOpen(true))}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") (e.preventDefault(), setCursor((c) => Math.min(top.length - 1, c + 1)));
            else if (e.key === "ArrowUp") (e.preventDefault(), setCursor((c) => Math.max(-1, c - 1)));
            else if (e.key === "Enter") (e.preventDefault(), go());
            else if (e.key === "Escape") setOpen(false);
          }}
          placeholder={`Search ${fmt(ICON_COUNT)} icons: try “rocket” or “money”`}
          aria-label="Search icons"
          role="combobox"
          aria-expanded={open && top.length > 0}
          aria-controls={listId}
          aria-activedescendant={cursor >= 0 ? `${listId}-${cursor}` : undefined}
          autoComplete="off"
          spellCheck={false}
          className="h-full min-w-0 flex-1 bg-transparent text-[16.5px] outline-none placeholder:text-faint"
        />
        <span className="hidden sm:inline-grid">
          <Kbd>Enter</Kbd>
        </span>
      </label>

      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] overflow-hidden rounded-[18px] border border-line bg-surface shadow-[var(--shadow-lg)]" style={{ animation: "rise .3s var(--ease-smooth) both" }}>
          {!q.trim() ? (
            <div className="flex flex-wrap items-center gap-1.5 p-3">
              <span className="px-2 text-[12.5px] text-faint">Try</span>
              {IDEAS.map((w) => (
                <button key={w} type="button" onClick={() => setQ(w)} className="rounded-full bg-surface-3 px-3 py-1 text-[13px] text-ink-2 hover:text-ink">
                  {w}
                </button>
              ))}
            </div>
          ) : !all ? (
            <p className="p-4 text-[13.5px] text-muted">Loading the icons…</p>
          ) : top.length ? (
            <>
              <ul id={listId} role="listbox" aria-label="Matching icons" className="grid grid-cols-2 gap-1 p-2 sm:grid-cols-4">
                {top.map((icon, i) => (
                  <li key={icon.name} id={`${listId}-${i}`} role="option" aria-selected={cursor === i}>
                    <Link
                      href={`/icons/${icon.name}`}
                      onMouseEnter={() => setCursor(i)}
                      className={`ki-trigger flex flex-col items-center gap-2 rounded-[13px] px-2 py-3.5 text-center transition-colors ${cursor === i ? "bg-accent-soft text-accent-ink" : "text-ink-2 hover:bg-surface-2"}`}
                    >
                      <KineticIcon icon={icon} size={26} />
                      <span className="w-full truncate text-[12.5px]">{icon.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/icons?q=${encodeURIComponent(q.trim())}`}
                className="ki-trigger flex items-center justify-between border-t border-line px-4 py-3 text-[13.5px] font-medium text-ink-2 hover:bg-surface-2 hover:text-ink"
              >
                See all {fmt(results.length)} {results.length === 1 ? "match" : "matches"}
                <KineticIcon icon={arrowRight} size={16} />
              </Link>
            </>
          ) : (
            <p className="p-4 text-[13.5px] text-muted">No icon matches “{q.trim()}”. Try what it shows: “money” instead of “payment”.</p>
          )}
        </div>
      )}
    </div>
  );
}
