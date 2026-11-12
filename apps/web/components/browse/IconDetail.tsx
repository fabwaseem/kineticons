"use client";

import { useEffect, useMemo, useState } from "react";
import { KineticIcon } from "kineticons";
import { VARIANTS, type IconDef, type Variant } from "@kineticons/core";
import {
  download as downloadIcon, pause, play,
} from "@kineticons/core/icons";
import { CODE_TABS, codeFor, componentName, download, type CodeTab } from "@/lib/code";
import type { Look } from "@/lib/store";
import { CodeBlock, CopyButton, Segmented } from "@/components/ui/bits";

/** One icon up close: its styles, its motion on demand, the sizes it is drawn for, and the code to use it. Shared by
 * the browser's side panel and the icon's own page. */
export function IconDetail({ icon, look, big = false }: { icon: IconDef; look: Look; big?: boolean }) {
  const variants = icon.variants ?? VARIANTS;
  const [variant, setVariant] = useState<Variant>(variants.includes(look.variant) ? look.variant : variants[0]);
  const [playing, setPlaying] = useState(false);
  useEffect(() => setVariant(variants.includes(look.variant) ? look.variant : variants[0]), [icon, look.variant]); // eslint-disable-line react-hooks/exhaustive-deps
  const small = icon.grid === 12;
  const stroke = look.stroke ?? undefined;

  return (
    <div className="flex flex-col gap-5">
      <div className="card relative overflow-hidden rounded-[24px]">
        <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-50" />
        <div
          className={`ki-trigger relative grid place-items-center ${big ? "py-20" : "py-12"}`}
          style={look.color ? { color: look.color } : undefined}
        >
          <KineticIcon icon={icon} variant={variant} size={small ? (big ? 96 : 64) : big ? 168 : 120} strokeWidth={stroke} trigger={playing ? "loop" : "hover"} loopEvery={2200} />
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-line px-3 py-2.5">
          <Segmented
            size="sm"
            label="Style"
            value={variant}
            onChange={setVariant}
            options={variants.map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))}
          />
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-pressed={playing}
            className="ki-trigger inline-flex h-9 items-center gap-1.5 rounded-[11px] bg-accent-soft px-3 text-[13px] font-medium text-accent-ink"
          >
            <KineticIcon icon={playing ? pause : play} size={15} variant="filled" />
            {playing ? "Stop" : "Play on a loop"}
          </button>
        </div>
      </div>

      <p className="text-[14.5px] leading-relaxed text-ink-2">{icon.motionNote}</p>

      <div className="flex items-end justify-around rounded-[18px] border border-line px-4 py-4 text-ink-2">
        {(small ? [10, 12, 14, 16, 20] : [16, 20, 24, 32, 40]).map((s) => (
          <span key={s} className="ki-trigger flex flex-col items-center gap-2">
            <KineticIcon icon={icon} variant={variant} size={s} strokeWidth={stroke} />
            <span className="text-[11px] text-faint tabular">{s}</span>
          </span>
        ))}
      </div>

      <Code icon={icon} variant={variant} stroke={stroke} />
    </div>
  );
}

function Code({ icon, variant, stroke }: { icon: IconDef; variant: Variant; stroke?: number }) {
  const [tab, setTab] = useState<CodeTab>("react");
  const meta = CODE_TABS.find((t) => t.value === tab)!;
  const code = useMemo(() => codeFor(icon, tab, { variant, size: icon.grid === 12 ? 12 : 24, strokeWidth: stroke }), [icon, tab, variant, stroke]);
  const svg = useMemo(() => codeFor(icon, "svg", { variant, strokeWidth: stroke }), [icon, variant, stroke]);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="no-scrollbar -mx-1 overflow-x-auto px-1">
        <Segmented size="sm" label="Code for" value={tab} onChange={setTab} options={CODE_TABS.map((t) => ({ value: t.value, label: t.label }))} />
      </div>
      <CodeBlock code={code} lang={meta.lang} maxH={320} />
      <p className="text-[12.5px] leading-relaxed text-muted">{meta.note}</p>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={svg} label="Copy SVG" />
        <CopyButton text={componentName(icon.name)} label={`Copy <${componentName(icon.name)} />`} />
        <button
          type="button"
          onClick={() => download(`${icon.name}${variant === "outline" ? "" : "-" + variant}.svg`, svg, "image/svg+xml")}
          className="ki-trigger inline-flex h-8 items-center gap-1.5 rounded-[9px] bg-surface-3 px-2.5 text-[12.5px] font-medium text-ink-2 hover:text-ink"
        >
          <KineticIcon icon={downloadIcon} size={14} />
          Download SVG
        </button>
      </div>
    </div>
  );
}
