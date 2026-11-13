"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KineticIcon } from "kineticons";
import { arrowRight, close, menu, monitor, moon, search, sun } from "@kineticons/core/icons";
import { prefetchCatalog } from "@/lib/catalog";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { REPO_URL } from "@/lib/site";
import { useTheme, type ThemeChoice } from "@/lib/theme";
import { Kbd, Wordmark } from "./bits";
import { btn, iconBtn } from "./controls";
import { openPalette } from "./palette-bus";

const LINKS = [
  { href: "/icons", label: "Icons" },
  { href: "/docs", label: "Docs" },
];

const isActive = (path: string, href: string) => path === href || path.startsWith(href + "/");

/** The floating pill: the mark, a switch between the icons and the docs, search, GitHub, theme, and the way in. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => void (document.body.style.overflow = "");
  }, [open]);
  const [isMac, setIsMac] = useState(false);
  useEffect(() => setIsMac(/Mac|iPhone|iPad/.test(navigator.platform)), []);
  const activeIndex = LINKS.findIndex((l) => isActive(path, l.href));

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex h-[var(--nav-h)] items-center justify-center px-2 sm:px-3">
      <a href="#main" className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div
        className={`pointer-events-auto flex h-14 w-full max-w-[1120px] items-center gap-2 rounded-full border pr-2 pl-4 transition-[background-color,border-color,box-shadow] duration-300 sm:pl-5 ${
          scrolled || open ? "border-line bg-[color-mix(in_srgb,var(--card)_86%,transparent)] shadow-[var(--shadow-md)] backdrop-blur-xl backdrop-saturate-150" : "border-line bg-[color-mix(in_srgb,var(--card)_60%,transparent)] backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label="Kineticons, home" className="mr-1 shrink-0 rounded-full">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="relative ml-2 hidden h-10 items-center rounded-full bg-surface-3 p-1 md:flex">
          {activeIndex >= 0 && (
            <span
              aria-hidden
              className="absolute top-1 bottom-1 w-[76px] rounded-full bg-card shadow-sm transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]"
              style={{ transform: `translateX(${activeIndex * 76}px)` }}
            />
          )}
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={l.href === "/icons" ? prefetchCatalog : undefined}
              aria-current={isActive(path, l.href) ? "page" : undefined}
              className={`relative z-10 grid h-8 w-[76px] place-items-center rounded-full text-[14px] font-medium transition-colors ${isActive(path, l.href) ? "text-ink" : "text-muted hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onClick={openPalette}
            onMouseEnter={prefetchCatalog}
            className="ki-trigger hidden h-10 items-center gap-2 rounded-full border border-line bg-card px-3.5 text-[13px] text-faint transition-colors hover:border-line-strong hover:text-muted lg:flex"
          >
            <KineticIcon icon={search} size={16} />
            <span className="w-[132px] text-left">Search {fmt(ICON_COUNT)} icons</span>
            <span className="flex gap-0.5">
              <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
              <Kbd>K</Kbd>
            </span>
          </button>
          <button type="button" onClick={openPalette} aria-label="Search icons" className={iconBtn(false, "lg", "lg:hidden")}>
            <KineticIcon icon={search} size={18} />
          </button>
          <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="Kineticons on GitHub" className={iconBtn(false, "lg", "max-sm:hidden")}>
            <GitHubMark />
          </a>
          <ThemeButton />
          <Link
            href="/icons"
            onMouseEnter={prefetchCatalog}
            className={btn("accent", "md", "ml-1 pr-3.5 max-sm:hidden")}
          >
            Browse icons
            <KineticIcon icon={arrowRight} size={16} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={iconBtn(false, "lg", "md:hidden")}
          >
            <KineticIcon icon={open ? close : menu} size={19} />
          </button>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-x-2 top-[calc(var(--nav-h)-4px)] z-40 rounded-box border border-line bg-card p-3 shadow-[var(--shadow-lg)] md:hidden" style={{ animation: "rise .35s var(--ease-smooth) both" }}>
          <nav aria-label="Main" className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...LINKS, { href: "/docs/react", label: "React" }, { href: "/docs/design-system", label: "Design system" }].map((l) => (
              <Link key={l.href} href={l.href} className={`heading rounded-card px-4 py-3 text-[28px] transition-colors hover:bg-surface-3 ${path === l.href ? "text-ink" : "text-muted"}`}>
                {l.label}
              </Link>
            ))}
            <a href={REPO_URL} className="heading rounded-card px-4 py-3 text-[28px] text-muted hover:bg-surface-3">
              GitHub
            </a>
            <Link href="/icons" className={btn("accent", "lg", "mt-2 w-full")}>
              Browse icons
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/** GitHub's mark (a brand mark, drawn here rather than in the icon set). */
export function GitHubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

const THEMES: { value: ThemeChoice; label: string; icon: typeof sun }[] = [
  { value: "light", label: "Light", icon: sun },
  { value: "dark", label: "Dark", icon: moon },
  { value: "system", label: "System", icon: monitor },
];

/** Light, dark or the system's: cycles on click. */
function ThemeButton() {
  const { choice, setChoice } = useTheme();
  const i = Math.max(0, THEMES.findIndex((t) => t.value === choice));
  const next = THEMES[(i + 1) % THEMES.length];
  const current = THEMES[i];
  return (
    <button
      type="button"
      onClick={() => setChoice(next.value)}
      aria-label={`Theme: ${current.label}. Switch to ${next.label}`}
      title={`Theme: ${current.label}`}
      className={iconBtn(false, "lg")}
    >
      <KineticIcon icon={current.icon} size={18} variant="duotone" />
    </button>
  );
}
