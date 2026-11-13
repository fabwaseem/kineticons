"use client";

import { useEffect, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import type { Variant } from "@kineticons/core";
import { reducedMotion } from "@/components/ui/bits";
import { FIELD } from "./fieldIcons";

const TRACK = FIELD.slice(0, 22);
const VARIANTS: Variant[] = ["outline", "duotone", "filled"];
const LOOP_S = 48; // one icon's trip along the whole track
const PATH = "M -80 150 C 260 40, 520 40, 800 120 S 1340 220, 1680 90";
const VIEW_W = 1600;
const VIEW_H = 240;
const STEPS = 120; // keyframes along the curve
const PILL_W = 140; // the lens, in px
const WAKE = PILL_W / 2 - 18; // px either side of the centre: an icon wakes only while fully inside the pill
const GROW = PILL_W * 0.85; // px either side of the centre over which an icon grows and shrinks

/**
 * Icons riding a curve, waking as they pass the lens in the middle. The movement runs on the compositor: the curve is
 * sampled once into CSS keyframes (position as a percentage of the track, so it fits any width), each icon plays them
 * with its own offset, and the main thread only reads the animation clock to tell which icon is in the lens. So the
 * ride stays smooth whatever else the page is doing. Pointing at the track slows it; off screen it pauses; reduced
 * motion leaves the icons where they are.
 */
export function Track() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [css, setCss] = useState("");
  const [lensY, setLensY] = useState(50);
  const xsRef = useRef<number[]>([]);

  const [width, setWidth] = useState(0);
  const widthRef = useRef(0);
  widthRef.current = width;
  // the track's width: the growth and the wake zone are measured in pixels, so they follow the pill on any screen
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let t = 0;
    setWidth(host.clientWidth);
    const ro = new ResizeObserver(() => {
      window.clearTimeout(t);
      t = window.setTimeout(() => setWidth(host.clientWidth), 150);
    });
    ro.observe(host);
    return () => (ro.disconnect(), window.clearTimeout(t));
  }, []);

  // sample the curve into keyframes (again whenever the width changes)
  useEffect(() => {
    const path = pathRef.current;
    if (!path || !width) return;
    const len = path.getTotalLength();
    const pts = Array.from({ length: STEPS + 1 }, (_, i) => path.getPointAtLength((i / STEPS) * len));
    const xs = pts.map((p) => p.x / VIEW_W);
    xsRef.current = xs;
    const move = pts.map((p, i) => `${((i / STEPS) * 100).toFixed(3)}%{transform:translate(${((p.x / VIEW_W) * 100).toFixed(3)}%,${((p.y / VIEW_H) * 100).toFixed(3)}%)}`).join("");
    // growth: by the icon's distance from the centre in pixels. A pixel-based ramp needs finer keyframes near the
    // centre than STEPS gives on a wide screen, so the grow animation gets its own, denser sampling there
    const growStops: string[] = [];
    const G = 600;
    let prev = "";
    for (let i = 0; i <= G; i++) {
      const f = i / G;
      const x = path.getPointAtLength(f * len).x / VIEW_W;
      const d = Math.abs(x - 0.5) * width;
      const near = Math.max(0, 1 - d / GROW);
      const sc = (1 + near * near * (3 - 2 * near) * 0.85).toFixed(3);
      if (sc === prev && i !== G && i !== 0) continue; // flat stretches need no keyframes
      if (prev === "1.000" && sc !== "1.000" && i > 0) growStops.push(`${(((i - 1) / G) * 100).toFixed(3)}%{transform:scale(1)}`);
      growStops.push(`${(f * 100).toFixed(3)}%{transform:scale(${sc})}`);
      prev = sc;
    }
    setCss(`@keyframes ki-track-move{${move}}@keyframes ki-track-grow{${growStops.join("")}}`);
    // the lens sits on the curve at the centre
    let best = 0;
    pts.forEach((p, i) => Math.abs(p.x - VIEW_W / 2) < Math.abs(pts[best].x - VIEW_W / 2) && (best = i));
    setLensY((pts[best].y / VIEW_H) * 100);
  }, [width]);

  // once the keyframes exist: offsets, waking, slowing, pausing
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !css) return;
    const riders = [...host.querySelectorAll<HTMLElement>("[data-rider]")];
    const xs = xsRef.current;
    const still = reducedMotion();
    riders.forEach((el, i) => {
      const inner = el.firstElementChild as HTMLElement;
      const delay = `${-((i / riders.length) * LOOP_S).toFixed(3)}s`;
      if (still) {
        const k = Math.round(((i / riders.length + 0.02) % 1) * STEPS);
        const p = pathRef.current!.getPointAtLength((k / STEPS) * pathRef.current!.getTotalLength());
        el.style.transform = `translate(${(p.x / VIEW_W) * 100}%,${(p.y / VIEW_H) * 100}%)`;
        return;
      }
      el.style.animation = `ki-track-move ${LOOP_S}s linear ${delay} infinite`;
      inner.style.animation = `ki-track-grow ${LOOP_S}s linear ${delay} infinite`;
    });
    if (still) return;

    const anims = () => host.getAnimations({ subtree: true });
    // which icon is in the lens: read from the animation clock, not from layout
    let raf = 0;
    let visible = true;
    const awake = new Set<number>();
    const tick = () => {
      const a = riders[0].getAnimations()[0];
      const t = a ? ((Number(a.currentTime ?? 0) / 1000 / LOOP_S) % 1) : 0;
      riders.forEach((el, i) => {
        const f = (t + i / riders.length) % 1;
        const k = f * STEPS;
        const lo = Math.floor(k);
        const x = (xs[lo] ?? 0) + ((xs[Math.min(STEPS, lo + 1)] ?? 0) - (xs[lo] ?? 0)) * (k - lo);
        const on = Math.abs(x - 0.5) * widthRef.current < WAKE;
        if (on !== awake.has(i)) {
          const svg = el.querySelector("svg");
          if (on) (awake.add(i), svg?.setAttribute("data-active", "true"), el.setAttribute("data-awake", ""));
          else (awake.delete(i), svg?.removeAttribute("data-active"), el.removeAttribute("data-awake"));
        }
      });
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    raf = requestAnimationFrame(tick);

    // pointing slows the ride down gently; leaving speeds it back up
    let rate = 1;
    let target = 1;
    let ramp = 0;
    const toward = (r: number) => {
      target = r;
      cancelAnimationFrame(ramp);
      const step = () => {
        rate += (target - rate) * 0.12;
        if (Math.abs(target - rate) < 0.01) rate = target;
        anims().forEach((a) => a.updatePlaybackRate(rate));
        if (rate !== target) ramp = requestAnimationFrame(step);
      };
      ramp = requestAnimationFrame(step);
    };
    const slow = () => toward(0.3);
    const fast = () => toward(1);
    host.addEventListener("pointerenter", slow);
    host.addEventListener("pointerleave", fast);

    // off screen (or in a hidden tab): pause everything
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      anims().forEach((a) => (visible ? a.play() : a.pause()));
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(host);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(ramp);
      io.disconnect();
      host.removeEventListener("pointerenter", slow);
      host.removeEventListener("pointerleave", fast);
    };
  }, [css]);

  return (
    <div ref={hostRef} className={`relative h-[200px] w-full transition-opacity duration-700 sm:h-[260px] ${css ? "opacity-100" : "opacity-0"}`} aria-hidden>
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <path ref={pathRef} d={PATH} fill="none" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute left-1/2 h-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line-strong bg-card shadow-[var(--shadow-md)]" style={{ top: `${lensY}%`, width: PILL_W }} />
      {TRACK.map((icon, i) => (
        // the outer box is the size of the track, so translate(%) moves along the track; the inner box grows
        <div key={icon.name} data-rider className="rider pointer-events-none absolute inset-0 will-change-transform">
          <span className="absolute top-0 left-0 -mt-[22px] -ml-[22px] grid size-11 place-items-center will-change-transform">
            <KineticIcon icon={icon} size={30} variant={VARIANTS[i % 3]} trigger="manual" />
          </span>
        </div>
      ))}
      {css && <style>{`${css}.rider svg.ki{color:var(--ink-2);transition:color .4s var(--ease-smooth)}.rider[data-awake] svg.ki{color:var(--accent);transition-duration:.15s}`}</style>}
    </div>
  );
}
