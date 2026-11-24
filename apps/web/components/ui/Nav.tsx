"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { KineticIcon } from "kineticons";
import { close, menu, moon, search, sun } from "@kineticons/core/icons";
import { prefetchCatalog } from "@/lib/catalog";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { FIGMA_URL, REPO_URL } from "@/lib/site";
import { useTheme } from "@/lib/theme";
import { Kbd, Mark, Wordmark } from "./bits";
import { btn, field, iconBtn } from "./controls";
import { usePresence } from "./presence";
import { openPalette } from "./palette-bus";

const LINKS = [
  { href: "/icons", label: "Icons" },
  { href: "/docs", label: "Docs" },
];

const isActive = (path: string, href: string) => path === href || path.startsWith(href + "/");

/** The bar: the mark, the main pages in the middle, then search, GitHub, theme and the way in. Clear over the page
 * top, frosted once it scrolls. */
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

  if (path.replace(/\/$/, "") === "/icons") return <IconsBar path={path} open={open} setOpen={setOpen} />;

  return (
    <header
      className={`sticky top-0 z-40 h-[var(--nav-h)] border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-line bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-full max-w-[1200px] items-center gap-2 px-4 sm:px-6">
        <Link href="/" aria-label="Kineticons, home" className="shrink-0 rounded-full lg:w-[240px]">
          <Wordmark />
        </Link>

        <TextLinks path={path} className="hidden flex-1 justify-center md:flex" />

        <div className="ml-auto flex items-center justify-end gap-1 lg:w-[240px]">
          <button
            type="button"
            onClick={openPalette}
            onMouseEnter={prefetchCatalog}
            className="ki-trigger hidden h-9 items-center gap-2 rounded-full bg-surface px-3 text-[13px] text-muted shadow-[var(--edge)] transition-colors hover:text-ink lg:flex"
          >
            <KineticIcon icon={search} size={15} />
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
          <Link href="/icons" onMouseEnter={prefetchCatalog} className={btn("primary", "sm", "ml-1 max-sm:hidden")}>
            Browse icons
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

      <PhoneMenu open={open} path={path} onClose={() => setOpen(false)} />
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

/** Light or dark. The new theme grows out of this button as a circle; the sun turns into the moon. */
function ThemeButton() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        toggle({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className={iconBtn(false, "lg", "relative overflow-hidden")}
    >
      <span className={`absolute inset-0 grid place-items-center transition-[transform,opacity] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${dark ? "scale-50 -rotate-90 opacity-0" : "opacity-100"}`}>
        <KineticIcon icon={sun} size={18} variant="duotone" />
      </span>
      <span className={`absolute inset-0 grid place-items-center transition-[transform,opacity] duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] ${dark ? "opacity-100" : "scale-50 rotate-90 opacity-0"}`}>
        <KineticIcon icon={moon} size={18} variant="duotone" />
      </span>
    </button>
  );
}

/** The main pages as quiet text links; the current one is ink. */
function TextLinks({ path, className = "" }: { path: string; className?: string }) {
  return (
    <nav aria-label="Main" className={`items-center gap-1 ${className}`}>
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onMouseEnter={l.href === "/icons" ? prefetchCatalog : undefined}
          aria-current={isActive(path, l.href) ? "page" : undefined}
          className={`rounded-full px-3.5 py-1.5 text-[14px] transition-colors ${isActive(path, l.href) ? "text-ink" : "text-muted hover:text-ink"}`}
        >
          {l.label}
        </Link>
      ))}
      <a href={FIGMA_URL} target="_blank" rel="noreferrer" className="rounded-full px-3.5 py-1.5 text-[14px] text-muted transition-colors hover:text-ink">
        Figma
      </a>
    </nav>
  );
}

/** The menu on phones: the main pages in display type. */
function PhoneMenu({ open, path, onClose }: { open: boolean; path: string; onClose: () => void }) {
  const { mounted, state } = usePresence(open, 280);
  if (!mounted) return null;
  return (
    <>
      <button type="button" tabIndex={-1} aria-label="Close menu" onClick={onClose} data-state={state} className="anim-scrim pointer-events-auto fixed inset-0 top-[var(--nav-h)] z-30 bg-[rgba(0,0,0,.4)] backdrop-blur-[2px] md:hidden" />
    <div data-state={state} className="anim-pop pointer-events-auto fixed inset-x-2 top-[calc(var(--nav-h)+8px)] z-40 rounded-box bg-card p-3 shadow-[var(--shadow-lg),var(--edge)] md:hidden">
      <nav aria-label="Main" className="flex flex-col">
        {[{ href: "/", label: "Home" }, ...LINKS, { href: "/docs/react", label: "React" }, { href: "/docs/design-system", label: "Design system" }].map((l) => (
          <Link key={l.href} href={l.href} className={`heading rounded-card px-4 py-3 text-[28px] transition-colors hover:bg-surface-3 ${path === l.href ? "text-ink" : "text-muted"}`}>
            {l.label}
          </Link>
        ))}
        <a href={REPO_URL} className="heading rounded-card px-4 py-3 text-[28px] text-muted hover:bg-surface-3">
          GitHub
        </a>
        <Link href="/icons" className={btn("primary", "lg", "mt-2 w-full")}>
          Browse icons
        </Link>
      </nav>
    </div>
    </>
  );
}

/**
 * The icon browser's own bar: solid and full width, so the grid never shows around it, with the search in the
 * middle (it drives the browser's ?q=) instead of the way in, since the visitor is already in.
 */
function IconsBar({ path, open, setOpen }: { path: string; open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header data-appbar className="sticky top-0 z-40 h-[var(--nav-h)] border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <div className="flex h-full items-center gap-3 px-3 sm:px-4 lg:gap-4">
        <div className="flex shrink-0 items-center gap-3 lg:w-[272px]">
          <Link href="/" aria-label="Kineticons, home" className="shrink-0 rounded-full">
            <span className="max-sm:hidden">
              <Wordmark />
            </span>
            <span className="sm:hidden">
              <Mark size={30} />
            </span>
          </Link>
          <TextLinks path={path} className="hidden xl:flex" />
        </div>
        <Suspense fallback={<div className="h-11 flex-1" />}>
          <BarSearch />
        </Suspense>
        <div className="flex shrink-0 items-center gap-1">
          <TextLinks path={path} className="mr-1 hidden md:flex xl:hidden" />
          <a href={REPO_URL} target="_blank" rel="noreferrer" aria-label="Kineticons on GitHub" className={iconBtn(false, "lg", "max-sm:hidden")}>
            <GitHubMark />
          </a>
          <ThemeButton />
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className={iconBtn(false, "lg", "md:hidden")}>
            <KineticIcon icon={open ? close : menu} size={19} />
          </button>
        </div>
      </div>
      <PhoneMenu open={open} path={path} onClose={() => setOpen(false)} />
    </header>
  );
}

/** The icon search in the app bar: the browser reads ?q=, so typing here filters the grid. "/" focuses it. */
function BarSearch() {
  const params = useSearchParams();
  const router = useRouter();
  const q = params.get("q") ?? "";
  const set = (v: string) => {
    const next = new URLSearchParams(params.toString());
    if (v) next.set("q", v);
    else next.delete("q");
    const qs = next.toString();
    router.replace(qs ? `/icons?${qs}` : "/icons", { scroll: false });
  };
  return (
    <label className={field("mx-auto h-11 flex-1 pr-1.5 pl-4 lg:max-w-[680px]")}>
      <KineticIcon icon={search} size={18} className="shrink-0 text-faint" />
      <input
        id="icon-search"
        value={q}
        onChange={(e) => set(e.target.value)}
        placeholder={`Search ${fmt(ICON_COUNT)} icons by name, tag or idea`}
        aria-label="Search icons"
        className="h-full min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-faint"
        autoComplete="off"
        spellCheck={false}
        type="search"
        enterKeyHint="search"
      />
      {q ? (
        <button type="button" onClick={() => set("")} aria-label="Clear search" className={iconBtn(false, "sm")}>
          <KineticIcon icon={close} size={16} />
        </button>
      ) : (
        <span className="hidden pr-2.5 sm:inline-grid">
          <Kbd>/</Kbd>
        </span>
      )}
    </label>
  );
}
