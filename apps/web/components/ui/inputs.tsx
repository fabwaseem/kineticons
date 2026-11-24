"use client";

import { useId, type ReactNode } from "react";

/**
 * The site's own form controls, drawn to match the rest of the interface (pills, the orange accent, the ring focus)
 * instead of each browser's defaults. Each keeps a real native input underneath, so the keyboard, screen readers
 * and form behaviour are the platform's.
 */

/** A labelled slider: a thin track, the filled part in orange, a round thumb. Arrow keys, Home and End work. */
export function Slider({ label, value, min, max, step, onChange, format = (v) => String(v) }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; format?: (v: number) => string }) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-[13px] text-muted">
          {label}
        </label>
        <output htmlFor={id} className="text-[13px] font-medium text-ink tabular">
          {format(value)}
        </output>
      </div>
      <div className="relative mt-1 h-6">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(+e.target.value)}
          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none opacity-0"
        />
        <span aria-hidden className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-surface-3">
          <span className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" style={{ width: `${pct}%` }} />
        </span>
        <span
          aria-hidden
          className="absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,.3)] transition-[transform,box-shadow] duration-150 peer-hover:scale-110 peer-active:scale-95 peer-focus-visible:shadow-[0_0_0_4px_var(--accent-soft)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--ring)]"
          style={{ left: `clamp(9px, ${pct}%, calc(100% - 9px))` }}
        />
      </div>
    </div>
  );
}

/** A row of colour swatches plus one for any colour; the chosen one wears a ring. "" means the text colour. */
export function ColorPicker({ label, value, colors, onChange }: { label: string; value: string; colors: string[]; onChange: (c: string) => void }) {
  const custom = value !== "" && !colors.includes(value);
  const ring = (on: boolean) => (on ? "shadow-[0_0_0_2px_var(--surface),0_0_0_4px_var(--ink)]" : "hover:scale-110");
  return (
    <div role="radiogroup" aria-label={label} className="grid grid-cols-8 gap-1.5">
      {colors.map((c) => (
        <button
          key={c || "ink"}
          type="button"
          role="radio"
          aria-checked={value === c}
          aria-label={c ? `Colour ${c}` : "Text colour"}
          title={c || "Text colour"}
          onClick={() => onChange(c)}
          className={`aspect-square w-full rounded-full transition-[transform,box-shadow] duration-200 ${ring(value === c)}`}
          style={{ background: c || "var(--ink-2)" }}
        />
      ))}
      <label
        title="Any colour"
        className={`relative aspect-square w-full cursor-pointer overflow-hidden rounded-full transition-[transform,box-shadow] duration-200 focus-within:ring-2 focus-within:ring-[var(--ring)] ${ring(custom)}`}
        style={{ background: custom ? value : "conic-gradient(from 90deg, #ff5a5a, #ffd23f, #3fe08a, #3fb6ff, #8a5cff, #ff5ad2, #ff5a5a)" }}
      >
        <input type="color" value={custom ? value : "#ff5a2d"} onChange={(e) => onChange(e.target.value)} aria-label="Any colour" className="absolute inset-0 size-full min-w-0 cursor-pointer opacity-0" />
      </label>
    </div>
  );
}

/** An on/off switch with its label (a button with role="switch"). */
export function Switch({ label, checked, onChange, hint }: { label: ReactNode; checked: boolean; onChange: (v: boolean) => void; hint?: ReactNode }) {
  return (
    <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className="group flex w-full items-center justify-between gap-3 rounded-full text-left">
      <span className="min-w-0">
        <span className="block text-[13px] text-muted transition-colors group-hover:text-ink">{label}</span>
        {hint && <span className="block text-[12px] text-faint">{hint}</span>}
      </span>
      <span className={`relative h-6 w-10 shrink-0 rounded-full transition-colors duration-200 ${checked ? "bg-accent" : "bg-surface-3 shadow-[inset_0_0_0_1px_var(--line)]"}`}>
        <span
          className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.25)] transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] ${checked ? "translate-x-4" : ""}`}
        />
      </span>
    </button>
  );
}
