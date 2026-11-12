"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Nav } from "./Nav";
import { onOpenPalette } from "./palette-bus";

const Palette = dynamic(() => import("./Palette"), { ssr: false });

/** Every page: the nav, the page, the footer, and the icon search on ⌘K / Ctrl K. */
export function Shell({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const [palette, setPalette] = useState(false);
  const path = usePathname();
  useEffect(() => onOpenPalette(() => setPalette(true)), []);
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
  const bare = path === "/icons";
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
