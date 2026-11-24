"use client";

import { useEffect, useMemo, useState } from "react";
import { KineticIcon } from "kineticons";
import { btn, chip, iconBtn } from "@/components/ui/controls";
import { VARIANTS, type IconDef, type Variant } from "@kineticons/core";
import {
  download as downloadIcon, grid as gridIcon, pause, play, snail,
} from "@kineticons/core/icons";
import { CODE_TABS, codeFor, componentName, download, type CodeTab } from "@/lib/code";
import type { Look } from "@/lib/store";
import { CodeBlock, CopyButton, Segmented } from "@/components/ui/bits";
import { partsOf, Specimen } from "@/components/ui/Specimen";

const partLabel = (name: string) => (/^p\d+$/.test(name) ? `part ${Number(name.slice(1)) + 1}` : name.replace(/-/g, " "));

/** One icon up close: its styles, its motion on demand, the sizes it is drawn for, and the code to use it. Shared by
 * the browser's side panel and the icon's own page. */
export function IconDetail({ icon, look, big = false }: { icon: IconDef; look: Look; big?: boolean }) {
  const variants = icon.variants ?? VARIANTS;
  const [variant, setVariant] = useState<Variant>(variants.includes(look.variant) ? look.variant : variants[0]);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false);
  const [slow, setSlow] = useState(false);
  const [grid, setGrid] = useState(true);
  const [focus, setFocus] = useState<string | null>(null);
  useEffect(() => setVariant(variants.includes(look.variant) ? look.variant : variants[0]), [icon, look.variant]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => setFocus(null), [icon]);
  // playing: on and off on a beat (a longer one in slow motion, so each play can finish)
  useEffect(() => {
    if (!playing) return setActive(false);
    let on = true;
    setActive(true);
    const id = window.setInterval(() => setActive((on = !on)), slow ? 3400 : 1100);
    return () => window.clearInterval(id);
  }, [playing, slow]);
  const small = icon.grid === 12;
  const stroke = look.stroke ?? undefined;
  const parts = partsOf(icon);
  const box = big ? 320 : 232;
  // brand logos: one style, and the choice of their own colour
  const logo = !!icon.brandColor;
  const [brand, setBrand] = useState(!!look.brand);
  useEffect(() => setBrand(!!look.brand), [look.brand]);
  const color = logo && brand ? icon.brandColor : look.color || undefined;

  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-box bg-bg shadow-[inset_0_0_0_1px_var(--line)]">
        <div
          className={`ki-trigger relative grid place-items-center ${big ? "py-12" : "py-8"}`}
          style={{ background: "radial-gradient(closest-side at 50% 48%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 80%)" }}
        >
          <Specimen icon={icon} variant={variant} size={small ? Math.round(box * 0.8) : box} strokeWidth={stroke} active={active} slow={slow ? 0.25 : 1} grid={grid} focus={focus} color={color} className="max-w-full text-ink" />
          {slow && <span className="absolute top-3 right-3 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-ink">4× slower</span>}
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-line px-3 py-2.5">
          {logo ? (
            <button type="button" onClick={() => setBrand(!brand)} aria-pressed={brand} className={chip(brand, "h-9 pl-2.5")}>
              <span className="size-4 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,.12)]" style={{ background: icon.brandColor }} />
              Brand colour
              <span className={`font-mono text-[12px] ${brand ? "opacity-60" : "text-faint"}`}>{icon.brandColor}</span>
            </button>
          ) : (
            <Segmented
              size="sm"
              label="Style"
              value={variant}
              onChange={setVariant}
              options={variants.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))}
            />
          )}
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setSlow(!slow)} aria-pressed={slow} title="Slow motion" aria-label="Slow motion" className={iconBtn(slow)}>
              <KineticIcon icon={snail} size={17} />
            </button>
            <button type="button" onClick={() => setGrid(!grid)} aria-pressed={grid} title="Grid" aria-label="Grid" className={iconBtn(grid)}>
              <KineticIcon icon={gridIcon} size={17} />
            </button>
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-pressed={playing}
              className={btn("primary", "sm")}
            >
              <KineticIcon icon={playing ? pause : play} size={15} variant="filled" />
              {playing ? "Stop" : "Play"}
            </button>
          </div>
        </div>
      </div>

      {parts.length > 1 && (
        <ul className="-mt-1 flex flex-wrap gap-1.5" onMouseLeave={() => setFocus(null)} aria-label="Parts">
          {parts.map((pt) => (
            <li key={pt.name}>
              <button
                type="button"
                onMouseEnter={() => setFocus(pt.name)}
                onFocus={() => setFocus(pt.name)}
                onBlur={() => setFocus(null)}
                className={chip(focus === pt.name, "h-8 px-3 text-[12px] font-normal")}
              >
                {partLabel(pt.name)}
                <span className={focus === pt.name ? "opacity-60" : "text-faint"}>{pt.role}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="text-[15px] leading-relaxed text-ink-2">{icon.motionNote}</p>

      <div className="flex items-end justify-around rounded-card bg-bg px-4 py-4 text-ink-2 shadow-[inset_0_0_0_1px_var(--line)]">
        {(small ? [10, 12, 14, 16, 20] : [16, 20, 24, 32, 40]).map((s) => (
          <span key={s} className="ki-trigger flex flex-col items-center gap-2">
            <KineticIcon icon={icon} variant={variant} size={s} strokeWidth={stroke} />
            <span className="text-[11px] text-faint tabular">{s}</span>
          </span>
        ))}
      </div>

      <Code icon={icon} variant={variants.length > 1 ? variant : undefined} stroke={stroke} brand={logo && brand} />
    </div>
  );
}

function Code({ icon, variant, stroke, brand }: { icon: IconDef; variant?: Variant; stroke?: number; brand?: boolean }) {
  const [tab, setTab] = useState<CodeTab>("react");
  const meta = CODE_TABS.find((t) => t.value === tab)!;
  const code = useMemo(() => codeFor(icon, tab, { variant, size: icon.grid === 12 ? 12 : 24, strokeWidth: stroke, brand }), [icon, tab, variant, stroke, brand]);
  const svg = useMemo(() => codeFor(icon, "svg", { variant, strokeWidth: stroke, brand }), [icon, variant, stroke, brand]);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="no-scrollbar -mx-1 overflow-x-auto px-1">
        <Segmented size="sm" label="Code for" value={tab} onChange={setTab} options={CODE_TABS.map((t) => ({ value: t.value, label: t.label }))} />
      </div>
      <CodeBlock code={code} lang={meta.lang} maxH={320} />
      <p className="text-[13px] leading-relaxed text-muted">{meta.note}</p>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={svg} label="Copy SVG" />
        <CopyButton text={componentName(icon.name)} label={`Copy <${componentName(icon.name)} />`} />
        <button
          type="button"
          onClick={() => download(`${icon.name}${!variant || variant === "outline" ? "" : "-" + variant}.svg`, svg, "image/svg+xml")}
          className="ki-trigger inline-flex h-8 items-center gap-1.5 rounded-full bg-surface-3 px-3 text-[13px] font-medium text-ink-2 transition-colors hover:text-ink"
        >
          <KineticIcon icon={downloadIcon} size={14} />
          Download SVG
        </button>
      </div>
    </div>
  );
}
