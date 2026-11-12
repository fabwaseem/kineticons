"use client";

import { KineticIcon } from "kineticons";
import { TOKENS, type IconDef } from "@kineticons/core";
import {
  batteryCharging, bell, lockOpen, mail, refresh, rocket, send, trash, umbrella,
} from "@kineticons/core/icons";
import { Reveal, SectionHead, useInView } from "@/components/ui/bits";

const SHOWN: IconDef[] = [bell, lockOpen, trash, send, batteryCharging, mail, rocket, refresh, umbrella];

/** Each icon's motion, played while on screen, with the line that says what it shows. Then the timing every motion
 * shares, drawn from the kit's own tokens. */
export function Motion() {
  const [ref, inView] = useInView<HTMLDivElement>("-10% 0px");
  return (
    <section className="border-y border-line bg-bg-2" aria-labelledby="motion-title">
      <div className="mx-auto max-w-[1240px] px-4 py-28 sm:px-6">
        <Reveal>
          <SectionHead
            title={<span id="motion-title">Every icon moves its own way</span>}
            text="Motion follows what the object does: parts move against each other around a real pivot, lines draw themselves, shapes give and spring back. Nothing is a generic bounce."
          />
        </Reveal>
        <div ref={ref} className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SHOWN.map((icon) => (
            <figure key={icon.name} className="ki-trigger group flex items-start gap-5 bg-surface p-6 transition-colors hover:bg-surface-2">
              <span className="grid size-[72px] shrink-0 place-items-center rounded-[20px] bg-haze text-ink">
                <KineticIcon icon={icon} size={40} variant="duotone" trigger={inView ? "loop" : "hover"} loopEvery={2400} />
              </span>
              <figcaption>
                <span className="block text-[15px] font-semibold">{icon.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-muted">{icon.motionNote}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Reveal>
          <Timing />
        </Reveal>
      </div>
    </section>
  );
}

/** Points along a CSS cubic-bezier, as an SVG path over a w × h box (y may overshoot above the top). */
function curve(x1: number, y1: number, x2: number, y2: number, w: number, h: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const s = i / 60;
    const bx = 3 * (1 - s) ** 2 * s * x1 + 3 * (1 - s) * s ** 2 * x2 + s ** 3;
    const by = 3 * (1 - s) ** 2 * s * y1 + 3 * (1 - s) * s ** 2 * y2 + s ** 3;
    pts.push(`${(bx * w).toFixed(1)},${(h - by * h).toFixed(1)}`);
  }
  return "M" + pts.join("L");
}
const nums = (s: string) => s.match(/[\d.]+/g)!.map(Number) as [number, number, number, number];

function Timing() {
  const [a, b, c, d] = nums(TOKENS.springIn);
  const [e, f, g, h] = nums(TOKENS.smooth);
  const W = 460;
  const H = 120;
  const outW = (W * TOKENS.durationOut) / TOKENS.durationIn;
  return (
    <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <h3 className="heading text-[26px]">One timing for all of them</h3>
        <p className="mt-3 max-w-[460px] text-[15px] leading-relaxed text-muted">
          In with a little spring over {TOKENS.durationIn} ms, out calmly over {TOKENS.durationOut} ms with no bounce. Parts follow each other by
          40 to 80 ms, and movements stay within one or two units of the grid. When a visitor asks for reduced motion, icons stay still.
        </p>
      </div>
      <div className="card rounded-[24px] p-6">
        <svg viewBox={`-10 -30 ${W + outW + 50} ${H + 70}`} className="w-full" role="img" aria-label={`Timing curves: in, ${TOKENS.durationIn} milliseconds with overshoot; out, ${TOKENS.durationOut} milliseconds, smooth`}>
          <line x1={0} y1={0} x2={W} y2={0} stroke="var(--line-strong)" strokeDasharray="3 4" />
          <line x1={0} y1={H} x2={W + outW + 30} y2={H} stroke="var(--line-strong)" />
          <path d={curve(a, b, c, d, W, H)} fill="none" stroke="var(--accent)" strokeWidth={3} strokeLinecap="round" />
          <g transform={`translate(${W + 30} 0)`}>
            <path d={curve(e, f, g, h, outW, H)} fill="none" stroke="var(--haze-ink)" strokeWidth={3} strokeLinecap="round" transform={`translate(0 ${H}) scale(1 -1)`} />
          </g>
          <text x={0} y={H + 30} fill="var(--muted)" fontSize={13}>In: {TOKENS.durationIn} ms with a spring</text>
          <text x={W + 30} y={H + 30} fill="var(--muted)" fontSize={13}>Out: {TOKENS.durationOut} ms, smooth</text>
          <text x={W - 4} y={-10} fill="var(--faint)" fontSize={11} textAnchor="end">overshoot</text>
        </svg>
      </div>
    </div>
  );
}
