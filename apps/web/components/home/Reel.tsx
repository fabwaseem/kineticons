"use client";

import { useEffect, useRef } from "react";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { alarm, compass, download, eye, gift, heart, refresh, rocket, send, trash, umbrella, wifi } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { Button, reducedMotion } from "@/components/ui/bits";

const REEL: IconDef[] = [trash, send, rocket, umbrella, refresh, heart, download, wifi, gift, alarm, compass, eye];
const STEP = 650; // ms between one tile starting and the next
const HOLD = 1100; // ms a tile stays awake

/**
 * The motion reel: a night section where the icons play one after another, like a conductor going down the line,
 * while it is on screen. Pointing at a tile plays it too. Nothing runs off screen or for reduced motion.
 */
export function Reel() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || reducedMotion() || !("IntersectionObserver" in window)) return;
    const svgs = [...list.querySelectorAll<SVGElement>("svg.ki")];
    let i = 0;
    let timer = 0;
    const offs: number[] = [];
    const step = () => {
      const el = svgs[i % svgs.length];
      el.setAttribute("data-active", "true");
      el.closest("li")?.setAttribute("data-on", "");
      offs.push(
        window.setTimeout(() => {
          el.removeAttribute("data-active");
          el.closest("li")?.removeAttribute("data-on");
        }, HOLD),
      );
      i++;
      timer = window.setTimeout(step, i % svgs.length === 0 ? STEP * 3 : STEP);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        window.clearTimeout(timer);
        if (e.isIntersecting && !document.hidden) timer = window.setTimeout(step, 300);
      },
      { threshold: 0.35 },
    );
    io.observe(list);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      offs.forEach(window.clearTimeout);
      svgs.forEach((s) => s.removeAttribute("data-active"));
    };
  }, []);

  return (
    <section className="night relative overflow-hidden" aria-labelledby="reel-title">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 85% 0%, rgba(255,107,61,.16), transparent 70%), radial-gradient(50% 50% at 0% 100%, rgba(167,150,255,.12), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[1280px] px-4 py-28 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[620px]">
            <h2 id="reel-title" className="heading text-[clamp(32px,4.4vw,52px)]">
              {fmt(ICON_COUNT)} icons, {fmt(ICON_COUNT)} motions
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              No icon borrows another’s motion. Parts move against each other around real pivots, lines draw themselves, shapes give and spring back. All of it is CSS, and it stays still for anyone who asks for less motion.
            </p>
          </div>
          <Button to="/icons" variant="secondary">
            See them all
          </Button>
        </div>

        <ul ref={ref} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-box border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {REEL.map((icon) => (
            <li key={icon.name} className="reel-tile group bg-bg">
              <div className="ki-trigger flex h-full flex-col gap-6 p-6 transition-colors duration-500 hover:bg-surface">
                <span className="reel-icon grid size-14 place-items-center rounded-card bg-surface text-ink-2 transition-[color,background-color,box-shadow] duration-500">
                  <KineticIcon icon={icon} size={30} variant="duotone" />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{icon.title}</span>
                  <span className="mt-1.5 line-clamp-2 block text-[14px] leading-relaxed text-muted">{icon.motionNote}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style>{`.reel-tile[data-on] .reel-icon,.reel-tile:hover .reel-icon{color:var(--accent);background:var(--accent-soft);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 30%,transparent),0 12px 40px -12px var(--accent);transition-duration:.15s}`}</style>
    </section>
  );
}
