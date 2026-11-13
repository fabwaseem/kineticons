"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { KineticIcon } from "kineticons";
import { arrowRight, bell, heart, rocket, search, sparkles, star } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { CopyButton } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";

const ORBIT = [bell, heart, rocket, sparkles, star];

/** The last word, on orange: search from right here, or install. */
export function Closing() {
  const [q, setQ] = useState("");
  const router = useRouter();
  return (
    <section className="tone-orange panel py-24 sm:py-32" aria-labelledby="close-title">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 flex justify-center gap-[clamp(28px,6vw,90px)] opacity-90">
        {ORBIT.map((icon, i) => (
          <span key={icon.name} className="ki-trigger pointer-events-auto grid size-14 place-items-center rounded-card bg-surface" style={{ transform: `translateY(${[18, 0, 26, 4, 14][i]}px) rotate(${[-8, 4, -3, 7, -5][i]}deg)` }}>
            <KineticIcon icon={icon} size={26} variant="filled" />
          </span>
        ))}
      </div>
      <div className="relative mx-auto flex max-w-[980px] flex-col items-center px-6 pt-20 text-center">
        <h2 id="close-title" className="display text-[clamp(48px,7.6vw,116px)]">
          Start with one icon.
          <br />
          <em>Keep all {fmt(ICON_COUNT)}.</em>
        </h2>
        <form
          className="mt-12 flex w-full max-w-[580px] items-center gap-2 rounded-full bg-[#fff7f2] p-2 pl-5 text-[#1a0f0a] shadow-[0_30px_60px_-30px_rgba(26,15,10,.55)]"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(q.trim() ? `/icons?q=${encodeURIComponent(q.trim())}` : "/icons");
          }}
        >
          <KineticIcon icon={search} size={20} className="opacity-50" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={prefetchCatalog}
            placeholder="Try “upload”, “weather” or “money”"
            aria-label="Search icons"
            className="h-12 min-w-0 flex-1 bg-transparent text-[17px] outline-none placeholder:text-[rgba(26,15,10,.45)]"
          />
          <button type="submit" className="ki-trigger inline-flex h-12 items-center gap-2 rounded-full bg-[#1a0f0a] px-6 text-[15px] font-medium text-[#fff7f2] transition-transform hover:-translate-y-px">
            Search
            <KineticIcon icon={arrowRight} size={17} />
          </button>
        </form>
        <span className="mt-5 inline-flex h-12 items-center gap-3 rounded-full border border-line pr-1.5 pl-5 font-mono text-[14px]">
          <span>
            <span className="opacity-50">$</span> npm i kineticons
          </span>
          <CopyButton text="npm i kineticons" compact label="Copy the install command" />
        </span>
      </div>
    </section>
  );
}
