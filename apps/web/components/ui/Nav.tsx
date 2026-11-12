"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { KineticIcon } from "kineticons";
import { close, menu, monitor, moon, search, sun } from "@kineticons/core/icons";
import { prefetchCatalog } from "@/lib/catalog";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { REPO_URL } from "@/lib/site";
import { useTheme, type ThemeChoice } from "@/lib/theme";
import { Kbd, Wordmark } from "./bits";
import { openPalette } from "./palette-bus";

const LINKS = [
  { href: "/icons", label: "Icons" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/react", label: "React" },
  { href: "/docs/design-system", label: "Design system" },
];

const isActive = (path: string, href: string) => (href === "/docs" ? path === "/docs" || (path.startsWith("/docs/") && !LINKS.some((l) => l.href !== "/docs" && path.startsWith(l.href))) : path === href || path.startsWith(href + "/"));

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 4);
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

  return (
    <header
      className={`sticky top-0 z-40 h-[var(--nav-h)] border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-line bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-[10px] focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-full max-w-[1400px] items-center gap-2 px-4 sm:px-6">
        <Link href="/" aria-label="Kineticons, home" className="mr-3 shrink-0 rounded-[10px]">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onMouseEnter={l.href === "/icons" ? prefetchCatalog : undefined}
              aria-current={isActive(path, l.href) ? "page" : undefined}
              className={`rounded-[10px] px-3 py-2 text-[14px] font-medium transition-colors ${isActive(path, l.href) ? "text-ink" : "text-muted hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={openPalette}
            onMouseEnter={prefetchCatalog}
            className="ki-trigger hidden h-9 items-center gap-2 rounded-[11px] border border-line bg-surface px-2.5 text-[13px] text-faint shadow-sm transition-colors hover:border-line-strong hover:text-muted sm:flex"
          >
            <KineticIcon icon={search} size={16} />
            <span className="w-[150px] text-left">Search {fmt(ICON_COUNT)} icons</span>
            <span className="flex gap-0.5">
              <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
              <Kbd>K</Kbd>
            </span>
          </button>
          <button type="button" onClick={openPalette} aria-label="Search icons" className="ki-trigger grid size-9 place-items-center rounded-[11px] text-ink-2 hover:bg-surface-3 sm:hidden">
            <KineticIcon icon={search} size={18} />
          </button>
          <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="Kineticons on GitHub" className="hidden size-9 place-items-center rounded-[11px] text-ink-2 transition-colors hover:bg-surface-3 sm:grid">
            <GitHubMark />
          </a>
          <ThemeButton />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="ki-trigger grid size-9 place-items-center rounded-[11px] text-ink-2 hover:bg-surface-3 md:hidden"
          >
            <KineticIcon icon={open ? close : menu} size={19} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fade-in fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 bg-bg px-4 pt-4 md:hidden">
          <nav aria-label="Main" className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...LINKS].map((l) => (
              <Link key={l.href} href={l.href} className={`heading border-b border-line py-4 text-[26px] ${path === l.href ? "text-ink" : "text-muted"}`}>
                {l.label}
              </Link>
            ))}
            <a href={REPO_URL} className="heading border-b border-line py-4 text-[26px] text-muted">
              GitHub
            </a>
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
      className="ki-trigger grid size-9 place-items-center rounded-[11px] text-ink-2 transition-colors hover:bg-surface-3"
    >
      <KineticIcon icon={current.icon} size={18} variant="duotone" />
    </button>
  );
}
