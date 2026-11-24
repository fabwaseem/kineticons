"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { battery, bell, heart, lock, send, settings, sparkles, trash } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { reducedMotion } from "@/components/ui/bits";
import { HeroSearch } from "./HeroSearch";
import { verb } from "./verbs";

const SHOW: IconDef[] = [bell, lock, heart, send, battery, trash, settings, sparkles];

/**
 * The opening: one icon on a glowing key that changes every couple of seconds and plays its motion, the promise,
 * and the search. Pointing at a popular name puts that icon on the key.
 */
export function Hero() {
  const [icon, setIcon] = useState<IconDef>(SHOW[0]);
  const [active, setActive] = useState(false);
  const held = useRef(false);

  // show an icon on the key and play it once
  const show = (next: IconDef) => {
    setIcon(next);
    setActive(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
  };

  useEffect(() => {
    if (reducedMotion()) return;
    let i = 0;
    const first = window.setTimeout(() => setActive(true), 700);
    const id = window.setInterval(() => {
      if (held.current || document.hidden) return;
      i = (i + 1) % SHOW.length;
      show(SHOW[i]);
    }, 2400);
    return () => (window.clearTimeout(first), window.clearInterval(id));
  }, []);
  // each play is a single beat: settle after it
  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => setActive(false), 1200);
    return () => window.clearTimeout(t);
  }, [active, icon]);

  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-hidden pt-[var(--nav-h)]" aria-labelledby="hero-title">
      <div aria-hidden className="pointer-events-none absolute top-[-220px] left-1/2 -z-10 h-[680px] w-[min(1000px,140vw)] -translate-x-1/2 opacity-60" style={{ background: "radial-gradient(closest-side, var(--glow), transparent 72%)" }} />

      <div className="mx-auto flex max-w-[960px] flex-col items-center px-5 pt-14 pb-24 text-center sm:pt-20">
        <Link href={`/icons/${icon.name}`} aria-label={`${icon.title} icon`} className="rise group relative">
          <span
            className="relative grid size-[132px] place-items-center rounded-[34px] text-white sm:size-[164px] sm:rounded-[42px]"
            style={{
              background: "linear-gradient(150deg, var(--accent), var(--accent-2))",
              boxShadow: "0 40px 90px -24px var(--glow), inset 0 0 0 1px rgba(255,255,255,.16), inset 0 2px 0 rgba(255,255,255,.35), inset 0 -12px 30px rgba(0,0,0,.16)",
            }}
          >
            <KineticIcon key={icon.name} icon={icon} size={88} strokeWidth={1.6} trigger="manual" active={active} className="max-sm:size-[72px] fade-in" />
          </span>
        </Link>
        <p className="rise mt-5 h-5 font-mono text-[12px] text-faint" aria-live="polite" style={{ animationDelay: "60ms" }}>
          {icon.name} · {verb(icon)}
        </p>

        <h1 id="hero-title" className="display rise mt-6 text-[clamp(48px,8.6vw,96px)] text-balance text-ink" style={{ animationDelay: "120ms" }}>
          Icons with a <em>pulse</em>.
        </h1>
        <p className="rise mt-6 max-w-[520px] text-[clamp(16px,1.6vw,18px)] leading-relaxed text-muted" style={{ animationDelay: "200ms" }}>
          {fmt(ICON_COUNT)} open-source icons that move when you point at them. Plain CSS, for React, Vue, Svelte and HTML.
        </p>

        <div className="rise relative z-20 mt-10 w-full max-w-[600px]" style={{ animationDelay: "280ms" }}>
          <HeroSearch />
        </div>
        <p className="rise mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13.5px] text-faint" style={{ animationDelay: "340ms" }}>
          Popular:
          {SHOW.slice(0, 6).map((p) => (
            <Link
              key={p.name}
              href={`/icons/${p.name}`}
              onMouseEnter={() => ((held.current = true), show(p))}
              onMouseLeave={() => (held.current = false)}
              onFocus={() => ((held.current = true), show(p))}
              onBlur={() => (held.current = false)}
              className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-current"
            >
              {p.name}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}
