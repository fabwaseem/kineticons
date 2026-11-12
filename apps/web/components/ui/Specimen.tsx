"use client";

import { useEffect, useRef } from "react";
import { KineticIcon } from "kineticons";
import type { IconDef, Variant } from "@kineticons/core";

/**
 * One icon up close, the way a designer sees it: drawn large on its 24-unit grid with the keylines, able to play its
 * motion on demand, slow it down (every CSS animation and transition inside runs at `slow` speed) and pick out one of
 * its parts while the others fade back.
 */
export function Specimen({
  icon,
  variant = "outline",
  size = 288,
  strokeWidth,
  active = false,
  slow = 1,
  grid = true,
  focus = null,
  color,
  className = "",
}: {
  icon: IconDef;
  variant?: Variant;
  size?: number;
  strokeWidth?: number;
  active?: boolean;
  /** playback rate of the motion: 1 is real time, 0.2 is five times slower */
  slow?: number;
  grid?: boolean;
  /** a part name to pick out */
  focus?: string | null;
  color?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const units = icon.grid ?? 24;

  // slow motion: every animation that starts inside runs at the chosen rate (CSS animations and transitions alike)
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof el.getAnimations !== "function") return;
    const apply = () => el.getAnimations({ subtree: true }).forEach((a) => (a.playbackRate = slow));
    apply();
    el.addEventListener("animationstart", apply);
    el.addEventListener("transitionrun", apply);
    return () => {
      el.removeEventListener("animationstart", apply);
      el.removeEventListener("transitionrun", apply);
    };
  }, [slow]);

  return (
    <div ref={ref} className={`specimen relative grid aspect-square place-items-center ${className}`} data-focus={focus ?? undefined} style={{ width: size, maxWidth: "100%", color }}>
      {grid && <Keylines units={units} />}
      <KineticIcon icon={icon} variant={variant} size="100%" strokeWidth={strokeWidth} active={active} className="relative" />
      {focus && (
        <style>{`.specimen[data-focus] svg.ki [data-p]{transition:opacity .25s var(--ease-smooth)}.specimen[data-focus="${CSS.escape(focus)}"] svg.ki [data-p]:not([data-p="${CSS.escape(focus)}"]){opacity:.13}`}</style>
      )}
    </div>
  );
}

/** The drawing grid: a line every unit, the live area, and the circle and square every icon is sized against. */
function Keylines({ units }: { units: number }) {
  const lines = Array.from({ length: units + 1 }, (_, i) => i);
  const c = units / 2;
  const pad = units / 12; // 2 units of 24
  return (
    <svg viewBox={`0 0 ${units} ${units}`} className="pointer-events-none absolute inset-0 size-full text-ink" aria-hidden fill="none" stroke="currentColor">
      <g strokeOpacity={0.07} vectorEffect="non-scaling-stroke">
        {lines.map((i) => (
          <g key={i}>
            <line x1={i} y1={0} x2={i} y2={units} vectorEffect="non-scaling-stroke" strokeWidth={1} />
            <line x1={0} y1={i} x2={units} y2={i} vectorEffect="non-scaling-stroke" strokeWidth={1} />
          </g>
        ))}
      </g>
      <g stroke="var(--accent)" strokeOpacity={0.35} vectorEffect="non-scaling-stroke">
        <rect x={pad} y={pad} width={units - pad * 2} height={units - pad * 2} vectorEffect="non-scaling-stroke" strokeWidth={1} strokeDasharray="3 3" />
        <circle cx={c} cy={c} r={c - pad} vectorEffect="non-scaling-stroke" strokeWidth={1} />
        <rect x={pad * 1.5} y={pad * 1.5} width={units - pad * 3} height={units - pad * 3} rx={units / 12} vectorEffect="non-scaling-stroke" strokeWidth={1} />
      </g>
    </svg>
  );
}

/** The parts of an icon a visitor can pick out: one entry per part name, with what kind of part it is. */
export function partsOf(icon: IconDef): { name: string; role: string; moves: boolean }[] {
  const seen = new Map<string, { name: string; role: string; moves: boolean }>();
  icon.parts.forEach((pt, i) => {
    const name = pt.p ?? `p${i}`;
    if (seen.has(name)) return;
    const role = pt.role === "body" ? "shape" : pt.role === "detail" ? "detail" : "line";
    seen.set(name, { name, role, moves: !!icon.motion?.[name] });
  });
  return [...seen.values()];
}
