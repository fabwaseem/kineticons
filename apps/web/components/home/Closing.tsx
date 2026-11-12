"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KineticIcon } from "kineticons";
import { arrowRight, search } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { SectionHead } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";

/** The last word: search from right here. */
export function Closing() {
  const [q, setQ] = useState("");
  const router = useRouter();
  const nav = (to: string) => router.push(to);
  return (
    <section className="night relative overflow-hidden" aria-labelledby="close-title">
      <div aria-hidden className="pointer-events-none absolute -bottom-48 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-[100px]" style={{ background: "radial-gradient(closest-side, rgba(255,107,61,.4), rgba(124,92,255,.16), transparent)" }} />
      <div className="relative mx-auto flex max-w-[860px] flex-col items-center px-6 py-32 text-center">
        <SectionHead align="center" title={<span id="close-title" className="display block text-[clamp(40px,6vw,76px)]">Find yours in seconds</span>} text={`${fmt(ICON_COUNT)} icons, searchable by name, tag or idea.`} />
        <form
          className="mt-10 flex w-full max-w-[560px] items-center gap-2 rounded-[18px] border border-line-strong bg-surface p-2 shadow-lg focus-within:border-[color-mix(in_srgb,var(--accent)_60%,transparent)]"
          onSubmit={(e) => {
            e.preventDefault();
            nav(q.trim() ? `/icons?q=${encodeURIComponent(q.trim())}` : "/icons");
          }}
        >
          <KineticIcon icon={search} size={20} className="ml-2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={prefetchCatalog}
            placeholder="Try “upload”, “weather” or “money”"
            aria-label="Search icons"
            className="h-11 min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-faint"
          />
          <button type="submit" className="ki-trigger inline-flex h-11 items-center gap-2 rounded-[12px] bg-accent px-4 text-[15px] font-medium text-white hover:bg-[color-mix(in_srgb,var(--accent)_88%,white)]">
            Search
            <KineticIcon icon={arrowRight} size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
