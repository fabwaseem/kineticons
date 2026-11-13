"use client";

import { useEffect, useRef } from "react";
import { KineticIcon } from "kineticons";
import type { Variant } from "@kineticons/core";
import { arrowRight } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { Button, CopyButton, reducedMotion } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";
import { FIELD } from "./fieldIcons";
import { HeroSearch } from "./HeroSearch";

const TRACK = FIELD.slice(0, 22);
const VARIANTS: Variant[] = ["outline", "duotone", "filled"];
const LOOP_MS = 46000; // one icon's trip along the whole track
const PATH = "M -80 150 C 260 40, 520 40, 800 120 S 1340 220, 1680 90";
const VIEW_W = 1600;
const VIEW_H = 240;
const LENS = 70; // px either side of the centre where an icon wakes

/**
 * The opening: the promise, a search, and the track. Icons ride a curve across the page; as each passes the lens in
 * the middle it grows, turns orange and plays its motion. Positions are written straight to the DOM once a frame, only
 * while the hero is on screen; pointing at the track slows it down, and reduced motion leaves the icons where they are.
 */
export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const host = trackRef.current;
    const path = pathRef.current;
    if (!host || !path) return;
    const items = [...host.querySelectorAll<HTMLElement>("[data-rider]")];
    const lens = host.querySelector<HTMLElement>("[data-lens]");
    const len = path.getTotalLength();
    // sample the curve once, finely, and blend between neighbouring samples: positions move continuously, with no
    // stepping however slowly the icons ride
    const N = 1200;
    const xs = new Float32Array(N + 1);
    const ys = new Float32Array(N + 1);
    for (let i = 0; i <= N; i++) {
      const p = path.getPointAtLength((i / N) * len);
      xs[i] = p.x;
      ys[i] = p.y;
    }
    const at = (t: number) => {
      const f = (((t % 1) + 1) % 1) * N;
      const i = Math.floor(f);
      const k = f - i;
      const j = Math.min(N, i + 1);
      return [xs[i] + (xs[j] - xs[i]) * k, ys[i] + (ys[j] - ys[i]) * k];
    };
    // the curve's height at a given x (for the lens, which sits on the curve at the centre)
    const yAtX = (x: number) => {
      let best = 0;
      for (let i = 1; i <= N; i++) if (Math.abs(xs[i] - x) < Math.abs(xs[best] - x)) best = i;
      return ys[best];
    };

    let w = host.clientWidth;
    let h = host.clientHeight;
    const fit = () => {
      w = host.clientWidth;
      h = host.clientHeight;
      if (lens) lens.style.transform = `translate(-50%, -50%) translateY(${(yAtX(VIEW_W / 2) * h) / VIEW_H}px)`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(host);

    const place = (clock: number) => {
      const sx = w / VIEW_W;
      const sy = h / VIEW_H;
      const cx = w / 2;
      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        const [px, py] = at(clock + i / items.length);
        const x = px * sx;
        const y = py * sy;
        const d = Math.abs(x - cx);
        const near = Math.max(0, 1 - d / (LENS * 2.2));
        const ease = near * near * (3 - 2 * near); // smoothstep: grows and shrinks without a kink
        el.style.transform = `translate3d(${(x - 22).toFixed(2)}px, ${(y - 22).toFixed(2)}px, 0) scale(${(1 + ease * 0.85).toFixed(3)})`;
        const awake = d < LENS;
        if (awake !== (el.dataset.awake === "1")) {
          el.dataset.awake = awake ? "1" : "0";
          const svg = el.querySelector("svg");
          if (awake) svg?.setAttribute("data-active", "true");
          else svg?.removeAttribute("data-active");
        }
      }
    };

    if (reducedMotion()) {
      place(0.04);
      return () => ro.disconnect();
    }

    let raf = 0;
    let last = performance.now();
    let clock = 0;
    let speed = 1;
    let target = 1;
    let visible = true;
    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      speed += (target - speed) * 0.06;
      clock = (clock + (dt / LOOP_MS) * speed) % 1;
      place(clock);
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !document.hidden;
      if (visible && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(host);
    const slow = () => (target = 0.25);
    const fast = () => (target = 1);
    host.addEventListener("pointerenter", slow);
    host.addEventListener("pointerleave", fast);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointerenter", slow);
      host.removeEventListener("pointerleave", fast);
    };
  }, []);

  return (
    <section className="relative isolate -mt-[var(--nav-h)] overflow-hidden pt-[var(--nav-h)]" aria-labelledby="hero-title">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]" style={{ background: "radial-gradient(60% 55% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)" }} />

      <div className="mx-auto flex max-w-[1100px] flex-col items-center px-6 pt-16 text-center sm:pt-24">
        <a
          href="/icons"
          onMouseEnter={prefetchCatalog}
          className="rise group inline-flex items-center gap-2 rounded-full border border-line bg-card py-1 pr-3.5 pl-1 text-[13.5px] text-ink-2 shadow-sm transition-colors hover:border-line-strong"
        >
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[12px] font-medium text-[#1a0f0a]">New</span>
          Now in Figma, VS Code and JSR
          <span className="text-faint transition-transform duration-300 group-hover:translate-x-0.5">→</span>
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
          <Button to="/icons" size="lg" className="rounded-full pr-4">
            <span onMouseEnter={prefetchCatalog} className="contents">
              Browse the icons
              <KineticIcon icon={arrowRight} size={18} />
            </span>
          </Button>
          <span className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-card pr-1.5 pl-5 font-mono text-[13.5px] text-ink-2">
            <span>
              <span className="text-faint">$</span> npm i kineticons
            </span>
            <CopyButton text="npm i kineticons" compact label="Copy the install command" className="rounded-full" />
          </span>
        </div>
      </div>

      {/* the track */}
      <div ref={trackRef} className="fade-in relative mt-10 h-[200px] w-full sm:mt-6 sm:h-[260px]" aria-hidden style={{ animationDelay: "500ms", animationDuration: "1.2s" }}>
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
          <path ref={pathRef} d={PATH} fill="none" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <div data-lens className="absolute top-0 left-1/2 h-[92px] w-[140px] rounded-full border border-line-strong bg-card/70 shadow-[var(--shadow-md)] backdrop-blur-sm" style={{ transform: "translate(-50%, -50%) translateY(120px)" }} />
        {TRACK.map((icon, i) => (
          <span key={icon.name} data-rider className="rider absolute top-0 left-0 grid size-11 place-items-center will-change-transform">
            <KineticIcon icon={icon} size={30} variant={VARIANTS[i % 3]} trigger="manual" />
          </span>
        ))}
      </div>
      <style>{`.rider svg.ki{color:var(--ink-2);transition:color .4s var(--ease-smooth)}.rider[data-awake="1"] svg.ki{color:var(--accent);transition-duration:.15s}`}</style>
    </section>
  );
}
