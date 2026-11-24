"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

type Origin = { x: number; y: number };
const Ctx = createContext<{ theme: Theme; toggle: (from?: Origin) => void }>({ theme: "light", toggle: () => {} });

const THEME_COLOR: Record<Theme, string> = { light: "#ffffff", dark: "#09090b" };

/** The theme the page was painted with (the inline script in the layout set it before paint). */
const painted = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", THEME_COLOR[t]));
}

/**
 * Light or dark, nothing else: the first visit follows the system, and from the first switch on the choice is
 * remembered. Switching draws the new theme as a circle growing out of the switch (a view transition, so the whole
 * page swaps in one composited animation, nothing repaints mid-way); without view transitions, or with reduced
 * motion, it simply swaps.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // the server knows no theme, so the first render says "light" and an effect reads what was painted
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => setTheme(painted()), []);
  // until the visitor picks one, follow the system as it changes
  useEffect(() => {
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => {
      try {
        if (localStorage.getItem("ki.theme")) return;
      } catch {
        /* no storage: follow the system */
      }
      const t: Theme = m.matches ? "dark" : "light";
      apply(t);
      setTheme(t);
    };
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);

  const toggle = useCallback((from?: Origin) => {
    const next: Theme = painted() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("ki.theme", next);
    } catch {
      /* not remembered */
    }
    const swap = () => {
      apply(next);
      flushSync(() => setTheme(next));
    };
    const root = document.documentElement;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vt = (document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> } }).startViewTransition;
    if (!vt || still) return swap();

    const x = from?.x ?? window.innerWidth - 40;
    const y = from?.y ?? 40;
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    // colour transitions would play inside the new snapshot and smear it: off for the swap
    root.classList.add("theme-swap");
    const t = vt.call(document, swap);
    t.ready
      .then(() =>
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" },
        ),
      )
      .catch(() => {});
    t.finished.finally(() => root.classList.remove("theme-swap"));
  }, []);

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
