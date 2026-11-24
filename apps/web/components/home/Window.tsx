"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { KineticIcon } from "kineticons";
import { VARIANTS, type IconDef, type Variant } from "@kineticons/core";
import {
  arrowRight, bell, bellRing, calendar, circleCheck, clock, download, heart, mail, messageCircle, play, search, send, share, sparkles, star, upload, volume2, wifi, x, zap,
} from "@kineticons/core/icons";
import { componentName } from "@/lib/code";
import { CopyButton, reducedMotion } from "@/components/ui/bits";
import { btn } from "@/components/ui/controls";
import { verb } from "./verbs";

const ICONS: IconDef[] = [bell, bellRing, messageCircle, mail, circleCheck, x, clock, calendar, heart, star, zap, sparkles, send, share, upload, download, volume2, wifi];

/** The icon browser in miniature: a search, a grid, and the picked icon on a stage with play, style and copy. */
export function Window() {
  const [icon, setIcon] = useState<IconDef>(bellRing);
  const [variant, setVariant] = useState<Variant>("outline");
  const [run, setRun] = useState(0);
  const variants = icon.variants ?? VARIANTS;
  const v = variants.includes(variant) ? variant : variants[0];
  const pick = (i: IconDef) => (setIcon(i), setRun((n) => n + 1));
  // a play is one beat: on, then off again
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!run || reducedMotion()) return;
    setActive(false);
    const on = requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
    const off = window.setTimeout(() => setActive(false), 1200);
    return () => (cancelAnimationFrame(on), window.clearTimeout(off));
  }, [run]);

  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 sm:pb-28" aria-labelledby="window-title">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 id="window-title" className="heading max-w-[15ch] text-[clamp(34px,4.6vw,52px)]">
          Find it, play it, copy it.
        </h2>
        <p className="max-w-[38ch] text-[16px] leading-relaxed text-muted">Search by name or idea, watch the motion, copy the component. One window, no account.</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-[28px] bg-surface shadow-[var(--edge),var(--shadow-lg)]">
        <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
          <KineticIcon icon={search} size={18} className="text-muted" />
          <span className="text-[15px] text-ink">notif</span>
          <span className="h-5 w-px animate-pulse bg-accent" aria-hidden />
          <Link href="/icons?q=notification" className={btn("ghost", "sm", "ml-auto")}>
            Open the browser
            <KineticIcon icon={arrowRight} size={15} />
          </Link>
        </div>
        <div className="grid md:grid-cols-[minmax(0,1fr)_320px]">
          <ul className="grid grid-cols-4 content-start gap-1.5 p-4 sm:grid-cols-6" aria-label="Icons">
            {ICONS.map((i) => (
              <li key={i.name}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={i === icon}
                  aria-label={i.title}
                  title={i.title}
                  className={`ki-trigger grid aspect-square w-full place-items-center rounded-tile transition-colors ${i === icon ? "bg-surface-3 text-ink shadow-[inset_0_0_0_1.5px_var(--accent)]" : "text-ink-2 hover:bg-surface-2 hover:text-ink"}`}
                >
                  <KineticIcon icon={i} size={26} variant={v} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex min-w-0 flex-col gap-4 border-line p-5 max-md:border-t md:border-l">
            <div className="relative grid aspect-[1.2] place-items-center overflow-hidden rounded-card bg-bg shadow-[inset_0_0_0_1px_var(--line)]">
              <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 22%, transparent), transparent 75%)" }} />
              <KineticIcon key={icon.name + v} icon={icon} variant={v} size={96} strokeWidth={1.5} trigger="manual" active={active} className="relative text-ink" />
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setRun((n) => n + 1)} aria-label={`Play ${icon.title}`} className="ki-trigger grid size-8 shrink-0 place-items-center rounded-full bg-ink text-bg">
                <KineticIcon icon={play} size={13} variant="filled" />
              </button>
              <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
                <span key={run} className="scrub absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
              </span>
              <span className="font-mono text-[11.5px] text-muted">{icon.name}</span>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="heading text-[22px]">{icon.title}</h3>
              <span className="truncate font-mono text-[11.5px] text-muted">{verb(icon)}</span>
            </div>
            <div role="radiogroup" aria-label="Style" className="grid grid-cols-3 gap-2">
              {VARIANTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={v === s}
                  disabled={!variants.includes(s)}
                  onClick={() => (setVariant(s), setRun((n) => n + 1))}
                  className={`ki-trigger flex flex-col items-center gap-1.5 rounded-tile px-2 pt-2.5 pb-2 text-[11.5px] capitalize transition-colors disabled:opacity-40 ${v === s ? "bg-bg text-ink shadow-[inset_0_0_0_1.5px_var(--ink)]" : "bg-bg text-muted shadow-[inset_0_0_0_1px_var(--line)] hover:text-ink"}`}
                >
                  <KineticIcon icon={icon} variant={s} size={22} className="text-ink" />
                  {s}
                </button>
              ))}
            </div>
            <CopyButton text={`<${componentName(icon.name)} />`} label={`Copy <${componentName(icon.name)} />`} className="h-10 w-full justify-center !bg-ink !text-bg" />
          </div>
        </div>
      </div>
    </section>
  );
}
