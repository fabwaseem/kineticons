"use client";

import { useState } from "react";
import { KineticIcon } from "kineticons";
import { type Trigger, type Variant } from "@kineticons/core";
import {
  alarm, bell, bookmark, calendar, camera, cart, cloud, compass, copy, download, flame, folder, gift, globe, heart, home, key, lightbulb, lock, mail, mic, palette, rocket, search, send, settings, star, sun, trash, wallet,
} from "@kineticons/core/icons";
import { CodeBlock, SectionHead, Segmented } from "@/components/ui/bits";

const ICONS = [home, search, bell, mail, settings, trash, heart, star, send, mic, camera, folder, calendar, cart, cloud, sun, rocket, gift, lock, key, compass, wallet, lightbulb, globe, flame, bookmark, alarm, palette, copy, download];

const COLOURS = [
  { label: "Ink", value: "" },
  { label: "Orange", value: "#ff5a2d" },
  { label: "Violet", value: "#7c5cff" },
  { label: "Teal", value: "#14b8a6" },
  { label: "Rose", value: "#f43f5e" },
  { label: "Amber", value: "#f59e0b" },
];

/** Try every setting on a page of icons and get the code for it. A night section, so colour reads on dark. */
export function Playground() {
  const [variant, setVariant] = useState<Variant>("outline");
  const [trigger, setTrigger] = useState<Trigger>("hover");
  const [size, setSize] = useState(28);
  const [stroke, setStroke] = useState(1.75);
  const [color, setColor] = useState("");

  const props = [
    variant !== "outline" && `variant="${variant}"`,
    size !== 24 && `size={${size}}`,
    stroke !== 1.75 && `strokeWidth={${stroke}}`,
    trigger !== "hover" && `trigger="${trigger}"`,
  ].filter(Boolean);
  const code = `import { Bell } from "kineticons";

<button className="ki-trigger"${color ? ` style={{ color: "${color}" }}` : ""}>
  <Bell${props.length ? " " + props.join(" ") : ""} />
  Notifications
</button>`;

  return (
    <section className="night relative overflow-hidden" aria-labelledby="play-title">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[90px]" style={{ background: "radial-gradient(closest-side, rgba(255,107,61,.35), rgba(124,92,255,.18), transparent)" }} />
      <div className="relative mx-auto max-w-[1280px] px-4 py-28 sm:px-6">
        <SectionHead
          title={<span id="play-title">Make them yours</span>}
          text="Size, stroke, colour, style and when they move: every icon takes the same few settings. Try them here; the code under the controls follows along."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="flex flex-col gap-6 rounded-[24px] border border-line bg-surface p-6">
            <Field label="Style">
              <Segmented label="Style" value={variant} onChange={setVariant} options={(["outline", "duotone", "filled"] as const).map((v) => ({ value: v, label: v[0].toUpperCase() + v.slice(1) }))} />
            </Field>
            <Field label="Moves">
              <Segmented
                label="When icons move"
                value={trigger}
                onChange={setTrigger}
                options={[
                  { value: "hover", label: "On hover" },
                  { value: "loop", label: "Always" },
                  { value: "none", label: "Never" },
                ]}
              />
            </Field>
            <Range label="Size" value={size} min={16} max={48} step={2} unit="px" onChange={setSize} />
            <Range label="Stroke" value={stroke} min={1} max={2.5} step={0.25} onChange={setStroke} />
            <Field label="Colour">
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Colour">
                {COLOURS.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    role="radio"
                    aria-checked={color === c.value}
                    aria-label={c.label}
                    title={c.label}
                    onClick={() => setColor(c.value)}
                    className={`size-8 rounded-full border-2 transition-transform hover:scale-110 ${color === c.value ? "border-ink" : "border-transparent"}`}
                    style={{ background: c.value || "var(--ink)" }}
                  />
                ))}
              </div>
            </Field>
          </div>
          <div className="flex min-w-0 flex-col gap-4">
            <div className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(68px,1fr))] gap-1 rounded-[24px] border border-line bg-surface p-4" style={{ color: color || undefined }}>
              {ICONS.map((icon) => (
                <span key={icon.name} className="ki-trigger grid aspect-square place-items-center rounded-[14px] transition-colors hover:bg-surface-3" title={icon.title}>
                  <KineticIcon icon={icon} variant={variant} size={size} strokeWidth={stroke} trigger={trigger} loopEvery={2200} />
                </span>
              ))}
            </div>
            <CodeBlock code={code} lang="tsx" className="!bg-surface" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2.5 text-[13px] font-medium text-muted">{label}</div>
      {children}
    </div>
  );
}

function Range({ label, value, min, max, step, unit = "", onChange }: { label: string; value: number; min: number; max: number; step: number; unit?: string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="mb-2.5 flex justify-between text-[13px] font-medium text-muted">
        {label}
        <span className="text-ink tabular">
          {value}
          {unit}
        </span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="w-full accent-[var(--accent)]" />
    </label>
  );
}
