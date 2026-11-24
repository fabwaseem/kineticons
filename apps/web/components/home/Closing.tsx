import Link from "next/link";
import { KineticIcon } from "kineticons";
import { arrowRight } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { CopyButton } from "@/components/ui/bits";
import { btn } from "@/components/ui/controls";

/** The last word: the count, the licence, the way in and the install command, over a low glow. */
export function Closing() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-16 pb-28 text-center sm:pt-24 sm:pb-36" aria-labelledby="close-title">
      <div aria-hidden className="pointer-events-none absolute bottom-[-300px] left-1/2 -z-10 h-[560px] w-[min(960px,140vw)] -translate-x-1/2 opacity-60" style={{ background: "radial-gradient(closest-side, var(--glow), transparent 72%)" }} />
      <h2 id="close-title" className="display text-[clamp(44px,7vw,80px)]">
        {fmt(ICON_COUNT)} icons.
        <br className="sm:hidden" /> <span className="text-muted">Free, MIT.</span>
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link href="/icons" className={btn("primary", "lg", "pr-5")}>
          Browse icons
          <KineticIcon icon={arrowRight} size={18} />
        </Link>
        <span className="inline-flex h-12 items-center gap-3 rounded-full bg-surface pr-1.5 pl-5 font-mono text-[14px] text-ink-2 shadow-[var(--edge)]">
          <span>
            <span className="text-faint">$</span> npm i kineticons
          </span>
          <CopyButton text="npm i kineticons" compact label="Copy the install command" />
        </span>
      </div>
    </section>
  );
}
