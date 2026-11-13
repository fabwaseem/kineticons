"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { prefetchCatalog } from "@/lib/catalog";
import { Nav } from "./Nav";
import Palette from "./Palette";
import { onOpenPalette } from "./palette-bus";

/** Every page: the nav, the page, the footer, and the icon search on ⌘K / Ctrl K. */
export function Shell({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const [palette, setPalette] = useState(false);
  const path = usePathname();
  useEffect(() => onOpenPalette(() => setPalette(true)), []);
  // the search opens instantly: its code ships with the page, and the icon list is fetched once the page is idle
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(prefetchCatalog, { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(prefetchCatalog, 1500);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);
  useEffect(() => setPalette(false), [path]);
  // the full-width icon browser has no footer: the grid runs on
  const bare = path.replace(/\/$/, "") === "/icons";
  return (
    <>
      <Nav />
      <main id="main" className="min-h-[calc(100vh-var(--nav-h))]">
        {children}
      </main>
      {!bare && footer}
      {palette && <Palette onClose={() => setPalette(false)} />}
    </>
  );
}
