"use client";

import { useState } from "react";
import { KineticIcon } from "kineticons";
import { type Variant } from "@kineticons/core";
import {
  bell, calendar, camera, cloud, folder, heart, home, lockOpen, mail, mic, settings, shield, star, trash,
} from "@kineticons/core/icons";
import { Reveal, SectionHead, Segmented } from "@/components/ui/bits";

const STRIP = [home, mail, trash, settings, folder, camera, calendar, heart, cloud, shield, star, lockOpen];

const ROLES: { title: string; text: string }[] = [
  { title: "Shapes", text: "Closed outlines like a bell’s body or a folder. Duotone tints them; filled makes them solid." },
  { title: "Details", text: "Lines inside a shape, like a clock’s hands. Filled cuts them out, so they stay readable." },
  { title: "Lines", text: "Open strokes like sound waves. The same in every style." },
];

/** One drawing, three styles: switch them and watch the same icons change. */
export function Styles() {
  const [v, setV] = useState<Variant>("duotone");
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-28 sm:px-6" aria-labelledby="styles-title">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <SectionHead
            title={<span id="styles-title">Three styles from one drawing</span>}
            text="Every icon comes in outline, duotone and filled. They are not three sets drawn apart: each part of an icon knows what it is, and each style draws it accordingly. Switch styles anywhere and nothing shifts."
          />
          <div className="mt-8">
            <Segmented
              label="Style"
              value={v}
              onChange={setV}
              options={[
                { value: "outline", label: "Outline" },
                { value: "duotone", label: "Duotone" },
                { value: "filled", label: "Filled" },
              ]}
            />
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {ROLES.map((r) => (
              <div key={r.title} className="border-t border-line-strong pt-4">
                <dt className="text-[14px] font-semibold">{r.title}</dt>
                <dd className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{r.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="card relative overflow-hidden rounded-[28px] p-6 sm:p-10">
            <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative grid place-items-center">
              <div className="ki-trigger grid size-[min(260px,62vw)] place-items-center rounded-[32px] bg-haze text-ink">
                <KineticIcon key={v} icon={bell} variant={v} size={150} className="fade-in" />
              </div>
              <p className="mt-5 text-[13px] text-muted">Point at the bell to ring it</p>
            </div>
            <div className="relative mt-8 grid grid-cols-6 gap-2 text-ink-2">
              {[mic, ...STRIP.slice(0, 11)].map((icon) => (
                <span key={icon.name} className="ki-trigger grid aspect-square place-items-center rounded-[14px] transition-colors hover:bg-surface-2">
                  <KineticIcon icon={icon} variant={v} size={26} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
