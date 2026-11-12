"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeChoice = "light" | "dark" | "system";

const Ctx = createContext<{ choice: ThemeChoice; dark: boolean; setChoice: (c: ThemeChoice) => void }>({
  choice: "system",
  dark: false,
  setChoice: () => {},
});

const media = () => window.matchMedia("(prefers-color-scheme: dark)");

function stored(): ThemeChoice {
  try {
    const v = localStorage.getItem("ki.theme");
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

/** Light, dark or the system's: applied to <html data-theme>, remembered. index.html sets it before paint too. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // read in an effect, not during render: the server knows neither, and the first render must match its HTML
  // (the inline script in the layout has already set data-theme, so nothing flashes meanwhile)
  const [choice, setChoice] = useState<ThemeChoice>("system");
  const [systemDark, setSystemDark] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setChoice(stored());
    setSystemDark(media().matches);
    setReady(true);
  }, []);
  useEffect(() => {
    const m = media();
    const on = () => setSystemDark(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  const dark = choice === "dark" || (choice === "system" && systemDark);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0f0d14" : "#f4f4f7");
    try {
      if (choice === "system") localStorage.removeItem("ki.theme");
      else localStorage.setItem("ki.theme", choice);
    } catch {
      /* not remembered */
    }
  }, [dark, choice, ready]);
  return <Ctx.Provider value={{ choice, dark, setChoice }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
