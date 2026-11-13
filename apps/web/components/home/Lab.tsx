"use client";

import { useEffect, useRef, useState } from "react";
import { KineticIcon } from "kineticons";
import type { IconDef, Variant } from "@kineticons/core";
import {
  batteryCharging, bell, camera, grid as gridIcon, lock, mail, pause, play, rocket, send, snail, trash, umbrella, wifi,
} from "@kineticons/core/icons";
import { Segmented } from "@/components/ui/bits";
import { partsOf, Specimen } from "@/components/ui/Specimen";

const PICKS: IconDef[] = [bell, lock, trash, send, batteryCharging, mail, rocket, umbrella, wifi, camera];
const STYLES: Variant[] = ["outline", "duotone", "filled"];
const SLOW = 0.2;

const partLabel = (name: string) => (/^p\d+$/.test(name) ? `part ${Number(name.slice(1)) + 1}` : name.replace(/-/g, " "));

/**
 * Look closer: one icon on its grid with its parts named. Play it, slow it down five times, pick out a part. The
 * section that shows what "a motion of its own" means, part by part.
 */
export function Lab() {
  const [icon, setIcon] = useState<IconDef>(bell);
  const [variant, setVariant] = useState<Variant>("outline");
  const [active, setActive] = useState(false);
  const [loop, setLoop] = useState(false);
  const [slow, setSlow] = useState(false);
  const [grid, setGrid] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const focus = hovered ?? pinned;
  const timer = useRef(0);
  const parts = partsOf(icon);

  // one play: on long enough for the motion to finish (longer in slow motion), then off
  const playOnce = () => {
    window.clearTimeout(timer.current);
    setActive(true);
    timer.current = window.setTimeout(() => setActive(false), slow ? 5200 : 1300);
  };
  useEffect(() => {
    if (!loop) return;
    const every = slow ? 6400 : 1900;
    let on = true;
    setActive(true);
    const id = window.setInterval(() => {
      on = !on;
      setActive(on);
    }, every / 2);
    return () => (window.clearInterval(id), setActive(false));
  }, [loop, slow]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => (setPinned(null), setHovered(null)), [icon]);

  return (
    <section className="relative mx-auto max-w-[1240px] px-6 pt-36 pb-32 sm:pt-44" aria-labelledby="lab-title">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        {/* the specimen */}
        <div className="card overflow-hidden rounded-[40px]">
          <div
            className="ki-trigger relative grid place-items-center px-6 py-10 sm:py-14"
            onMouseEnter={() => !loop && playOnce()}
            style={{ background: "radial-gradient(circle at 50% 45%, var(--accent-soft), transparent 62%)" }}
          >
            <Specimen icon={icon} variant={variant} size={300} active={active} slow={slow ? SLOW : 1} grid={grid} focus={focus} className="max-w-full text-ink" />
            <span className="absolute top-4 left-5 font-mono text-[11.5px] text-faint">{icon.name}.svg · 24 × 24</span>
            {slow && <span className="absolute top-4 right-5 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11.5px] font-medium text-accent-ink">5× slower</span>}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-3 py-3">
            <Segmented size="sm" label="Style" value={variant} onChange={setVariant} options={STYLES.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))} />
            <div className="flex items-center gap-1">
              <Toggle on={slow} onClick={() => setSlow(!slow)} icon={snail} label="Slow motion" />
              <Toggle on={grid} onClick={() => setGrid(!grid)} icon={gridIcon} label="Grid" />
              <button
                type="button"
                onClick={() => (loop ? setLoop(false) : playOnce())}
                onDoubleClick={() => setLoop(true)}
                className="ki-trigger inline-flex h-9 items-center gap-1.5 rounded-[11px] bg-ink px-3.5 text-[13px] font-medium text-bg"
              >
                <KineticIcon icon={loop ? pause : play} size={15} variant="filled" />
                {loop ? "Stop" : "Play"}
              </button>
            </div>
          </div>
        </div>

        {/* the story */}
        <div className="lg:pt-6">
          <h2 id="lab-title" className="display text-[clamp(44px,6vw,88px)]">
            Look <em>closer.</em>
          </h2>
          <p className="mt-4 max-w-[520px] text-[16.5px] leading-relaxed text-muted">
            Each icon is drawn on a 24-unit grid out of named parts, and each part moves for a reason. Slow it down, pick out a part, switch the style: the drawing is the same in all three.
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5" role="radiogroup" aria-label="Icon">
            {PICKS.map((p) => (
              <button
                key={p.name}
                type="button"
                role="radio"
                aria-checked={icon === p}
                aria-label={p.title}
                title={p.title}
                onClick={() => setIcon(p)}
                className={`ki-trigger grid size-11 place-items-center rounded-[13px] border transition-[background-color,border-color,color] ${
                  icon === p ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)] bg-accent-soft text-accent-ink" : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink"
                }`}
              >
                <KineticIcon icon={p} size={22} variant={variant} />
              </button>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <h3 className="heading text-[24px]">{icon.title}</h3>
            <p className="mt-2 max-w-[520px] text-[15px] leading-relaxed text-ink-2">{icon.motionNote}</p>
          </div>

          <div className="mt-6">
            <p className="mb-2.5 text-[13px] text-faint">Parts: point at one to pick it out, click to keep it</p>
            <ul className="flex flex-wrap gap-1.5" onMouseLeave={() => setHovered(null)}>
              {parts.map((pt) => (
                <li key={pt.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setHovered(pt.name)}
                    onFocus={() => setHovered(pt.name)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setPinned(pinned === pt.name ? null : pt.name)}
                    aria-pressed={pinned === pt.name}
                    className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[13px] transition-colors ${
                      focus === pt.name ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-2 hover:border-line-strong"
                    }`}
                  >
                    <span className="font-medium">{partLabel(pt.name)}</span>
                    <span className={focus === pt.name ? "text-bg/60" : "text-faint"}>
                      {pt.role}
                      {pt.moves ? " · moves" : ""}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Toggle({ on, onClick, icon, label }: { on: boolean; onClick: () => void; icon: IconDef; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      title={label}
      className={`ki-trigger inline-flex h-9 items-center gap-1.5 rounded-[11px] px-3 text-[13px] font-medium transition-colors ${on ? "bg-accent-soft text-accent-ink" : "text-muted hover:bg-surface-3 hover:text-ink"}`}
    >
      <KineticIcon icon={icon} size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
