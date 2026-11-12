"use client";

import { useEffect, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import { arrowRight } from "@kineticons/core/icons";
import { CATEGORIES, fmt, ICON_COUNT } from "@/lib/categories";
import { Button, CopyButton, reducedMotion } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";
import { FIELD } from "./fieldIcons";
import { HeroSearch } from "./HeroSearch";

const RADIUS = 120; // px around the pointer that wakes icons
const HOLD = 720; // ms an icon stays awake, so its motion plays through

/**
 * The opening: a field of icons behind the promise. Each icon wakes when the pointer comes near (its own motion
 * plays, and it turns orange), so moving across the page sets off ripples; when nobody is pointing, a wave sweeps
 * through on its own now and then. Activation writes data-active on the SVGs directly, so nothing re-renders.
 */
/** How many icons fill the hero at this window size (the field repeats its list when it needs more). */
const fieldSize = () => {
  if (typeof window === "undefined") return FIELD.length;
  const cols = Math.max(4, Math.floor((window.innerWidth - 48 + 34) / 72));
  const rows = Math.ceil(Math.min(900, window.innerHeight) / 68) + 1;
  return Math.min(cols * rows, FIELD.length * 2);
};

export function Hero() {
  const fieldRef = useRef<HTMLDivElement>(null);
  // the server draws a fixed number; the browser then fits the field to the window (after hydration, so they match)
  const [n, setN] = useState(FIELD.length);
  useEffect(() => {
    let t = 0;
    setN(fieldSize());
    const on = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => setN(fieldSize()), 200);
    };
    window.addEventListener("resize", on);
    return () => (window.removeEventListener("resize", on), window.clearTimeout(t));
  }, []);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field || reducedMotion()) return;
    const host = field.parentElement!;
    let cells: { el: SVGElement; x: number; y: number }[] = [];
    const until = new Map<SVGElement, number>();
    let raf = 0;
    let px = -1e4;
    let py = -1e4;
    let lastMove = 0;
    let visible = true;

    const measure = () => {
      const r = field.getBoundingClientRect();
      cells = [...field.querySelectorAll<SVGElement>("svg.ki")].map((el) => {
        const b = el.getBoundingClientRect();
        return { el, x: b.left - r.left + b.width / 2, y: b.top - r.top + b.height / 2 };
      });
    };
    const wake = (el: SVGElement, t: number) => {
      if (!until.has(el)) el.setAttribute("data-active", "true");
      until.set(el, t + HOLD);
    };
    const tick = () => {
      raf = 0;
      const now = performance.now();
      for (const c of cells) {
        const d = Math.hypot(c.x - px, c.y - py);
        if (d < RADIUS) wake(c.el, now);
      }
      for (const [el, t] of until)
        if (t < now) {
          el.removeAttribute("data-active");
          until.delete(el);
        }
      if (until.size) raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      const r = field.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
      const hr = host.getBoundingClientRect();
      host.style.setProperty("--mx", `${e.clientX - hr.left}px`);
      host.style.setProperty("--my", `${e.clientY - hr.top}px`);
      host.style.setProperty("--glow", "1");
      lastMove = performance.now();
      schedule();
    };
    const onLeave = () => {
      px = py = -1e4;
      host.style.setProperty("--glow", "0");
    };
    // the wave: a diagonal sweep, each icon woken as it passes
    const timers: number[] = [];
    const wave = () => {
      if (!visible || document.hidden) return;
      const w = field.clientWidth || 1;
      for (const c of cells) {
        const delay = ((c.x + c.y * 0.35) / w) * 1400;
        timers.push(
          window.setTimeout(() => {
            wake(c.el, performance.now());
            schedule();
          }, delay),
        );
      }
    };
    const idle = window.setInterval(() => {
      if (performance.now() - lastMove > 4000) wave();
    }, 7000);
    const first = window.setTimeout(wave, 700);

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(field);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(field);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerdown", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(idle);
      window.clearTimeout(first);
      timers.forEach(window.clearTimeout);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerdown", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [n]);

  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-hidden pt-[var(--nav-h)]" aria-labelledby="hero-title">
      {/* the field */}
      <div
        ref={fieldRef}
        aria-hidden
        className="field fade-in absolute inset-x-0 top-[calc(var(--nav-h)+20px)] bottom-0 -z-10 grid content-start justify-center gap-x-[34px] gap-y-[30px] px-6 [grid-template-columns:repeat(auto-fill,38px)]"
        style={{ animationDuration: "1.4s" }}
      >
        {Array.from({ length: n }, (_, i) => FIELD[(i + Math.floor(i / FIELD.length) * 13) % FIELD.length]).map((icon, i) => (
          <KineticIcon
            key={i}
            icon={icon}
            size={30}
            trigger="manual"
            variant={i % 11 === 4 ? "filled" : i % 5 === 2 ? "duotone" : "outline"}
            className="justify-self-center"
          />
        ))}
      </div>
      {/* a clearing behind the words, and the field fading into the page at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 46% 42% at 50% 47%, var(--bg) 42%, color-mix(in srgb, var(--bg) 70%, transparent) 64%, transparent 100%), linear-gradient(to bottom, transparent 70%, var(--bg))",
        }}
      />

      {/* a soft light that follows the pointer across the field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
        style={{ opacity: "var(--glow, 0)", background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 40%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)" }}
      />

      <div className="mx-auto flex min-h-[min(900px,calc(100svh-24px))] max-w-[1040px] flex-col items-center justify-center px-6 pt-12 pb-20 text-center">
        <a
          href="/icons"
          onMouseEnter={prefetchCatalog}
          className="rise group inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pr-3 pl-1 text-[13px] text-ink-2 shadow-sm backdrop-blur transition-colors hover:border-line-strong"
          style={{ animationDelay: "0ms" }}
        >
          <span className="rounded-full bg-accent px-2 py-0.5 text-[11.5px] font-semibold text-white">New</span>
          {fmt(ICON_COUNT)} icons, in Figma and VS Code too
          <span className="text-faint transition-transform group-hover:translate-x-0.5">→</span>
        </a>
        <h1 id="hero-title" className="display rise mt-7 text-[clamp(50px,8.8vw,124px)] text-ink" style={{ animationDelay: "80ms" }}>
          Icons that move
          <br />
          like they mean it
        </h1>
        <p className="rise mt-7 max-w-[620px] text-[clamp(16px,1.6vw,19px)] leading-relaxed text-ink-2" style={{ animationDelay: "200ms" }}>
          {fmt(ICON_COUNT)} rounded icons in outline, duotone and filled. Each has a motion of its own: a bell swings from its top, a padlock’s shackle drops
          shut, a battery fills up.
        </p>

        <div className="rise relative z-10 mt-10 w-full max-w-[600px]" style={{ animationDelay: "320ms" }}>
          <HeroSearch />
        </div>

        <div className="rise mt-5 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "420ms" }}>
          <Button to="/icons" size="lg" className="pr-4">
            <span onMouseEnter={prefetchCatalog} className="contents">
              Browse the icons
              <KineticIcon icon={arrowRight} size={18} />
            </span>
          </Button>
          <span className="card inline-flex h-12 items-center gap-3 rounded-[14px] pr-1.5 pl-4 font-mono text-[13.5px] text-ink-2">
            <span>
              <span className="text-faint">$</span> npm i kineticons
            </span>
            <CopyButton text="npm i kineticons" compact label="Copy the install command" />
          </span>
        </div>

        <dl className="rise mt-14 grid grid-cols-2 gap-x-10 gap-y-4 text-left sm:grid-cols-4" style={{ animationDelay: "540ms" }}>
          {[
            [fmt(ICON_COUNT), "icons"],
            ["3", "styles each"],
            [String(CATEGORIES.length), "categories"],
            ["4", "frameworks"],
          ].map(([n, l]) => (
            <div key={l} className="border-l border-line-strong pl-4">
              <dt className="sr-only">{l}</dt>
              <dd className="display text-[30px] leading-none text-ink tabular">{n}</dd>
              <dd className="mt-1.5 text-[12.5px] text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
      <style>{`.field svg.ki{color:var(--faint);opacity:.55;transition:color .5s var(--ease-smooth),opacity .5s var(--ease-smooth)}
.field svg.ki[data-active]{color:var(--accent);opacity:1;transition-duration:.15s}`}</style>
    </section>
  );
}
