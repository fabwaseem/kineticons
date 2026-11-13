"use client";

import { KineticIcon } from "kineticons";
import { arrowRight } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { Button, CopyButton } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";
import { HeroSearch } from "./HeroSearch";
import { Track } from "./Track";

/**
 * The opening: the promise, a search, and the track (icons riding a curve, waking as they pass the lens).
 */
export function Hero() {
  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-hidden pt-[var(--nav-h)]" aria-labelledby="hero-title">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]" style={{ background: "radial-gradient(60% 55% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)" }} />

      <div className="mx-auto flex max-w-[1100px] flex-col items-center px-6 pt-16 text-center sm:pt-24">
        <a
          href="/icons"
          onMouseEnter={prefetchCatalog}
          className="rise group inline-flex items-center gap-2 rounded-full border border-line bg-card py-1 pr-3.5 pl-1 text-[14px] text-ink-2 shadow-sm transition-colors hover:border-line-strong"
        >
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[12px] font-medium text-[#1a0f0a]">New</span>
          Now in Figma, VS Code and JSR
          <KineticIcon icon={arrowRight} size={14} className="text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
        <h1 id="hero-title" className="display rise mt-8 text-[clamp(44px,10vw,148px)] text-balance text-ink" style={{ animationDelay: "90ms" }}>
          Icons that move,
          <br />
          <em>like they mean it.</em>
        </h1>
        <p className="rise mt-8 max-w-[600px] text-[clamp(17px,1.7vw,20px)] leading-relaxed text-ink-2" style={{ animationDelay: "210ms" }}>
          {fmt(ICON_COUNT)} open-source icons in outline, duotone and filled, each with a motion of its own. Plain CSS, for React, Vue, Svelte and HTML.
        </p>
        <div className="rise relative z-20 mt-10 w-full max-w-[600px]" style={{ animationDelay: "330ms" }}>
          <HeroSearch />
        </div>
        <div className="rise relative z-10 mt-5 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "430ms" }}>
          <Button to="/icons" size="lg" variant="accent" className="pr-5">
            <span onMouseEnter={prefetchCatalog} className="contents">
              Browse the icons
              <KineticIcon icon={arrowRight} size={18} />
            </span>
          </Button>
          <span className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-card pr-1.5 pl-5 font-mono text-[14px] text-ink-2">
            <span>
              <span className="text-faint">$</span> npm i kineticons
            </span>
            <CopyButton text="npm i kineticons" compact label="Copy the install command" />
          </span>
        </div>
      </div>

      <div className="fade-in mt-10 sm:mt-6" style={{ animationDelay: "500ms", animationDuration: "1.2s" }}>
        <Track />
      </div>
    </section>
  );
}
