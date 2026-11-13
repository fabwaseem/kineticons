"use client";

import Link from "next/link";
import { KineticIcon } from "kineticons";
import { type IconDef } from "@kineticons/core";
import {
  alignLeft, apple, arrowRight, bird, bold, cart, chart, chartPie, check, chevronDown, circle, cloudy, code, coffee, copy, creditCard, database, download, file, fileText, flower, folder, heartPulse, hexagon, home, laptop, leaf, loader, mail, map, mapPin, menu, messageCircle, monitor, music, phone, pill, pizza, plane, play, rain, settings, smartphone, smile, stethoscope, sun, terminal, alert, trash, trendingUp, triangle, type, user, userPlus, users, volume, wallet, windowClose, windowMaximize, windowMinimize,
} from "@kineticons/core/icons";
import { CATEGORIES, CATEGORY_COUNTS, fmt } from "@/lib/categories";
import { Reveal, SectionHead } from "@/components/ui/bits";
import { prefetchCatalog } from "@/lib/catalog";

const SAMPLES: Record<string, IconDef[]> = {
  app: [home, settings, user],
  actions: [copy, trash, download],
  navigation: [arrowRight, chevronDown, menu],
  status: [check, alert, loader],
  media: [play, volume, music],
  files: [file, folder, fileText],
  text: [type, alignLeft, bold],
  communication: [mail, messageCircle, phone],
  people: [users, userPlus, smile],
  devices: [laptop, smartphone, monitor],
  development: [code, terminal, database],
  charts: [chart, chartPie, trendingUp],
  commerce: [cart, creditCard, wallet],
  travel: [plane, map, mapPin],
  weather: [sun, cloudy, rain],
  nature: [leaf, flower, bird],
  food: [pizza, coffee, apple],
  health: [pill, stethoscope, heartPulse],
  shapes: [circle, triangle, hexagon],
  window: [windowClose, windowMaximize, windowMinimize],
};

/** Every category, with how many icons it holds: a way into the browser. */
export function Categories() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-28 sm:px-6" aria-labelledby="cats-title">
      <Reveal>
        <SectionHead title={<span id="cats-title">Something for every screen</span>} text="From app chrome to weather, food and finance. Start from a category, or search by what the icon shows." />
      </Reveal>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {CATEGORIES.filter((c) => CATEGORY_COUNTS[c.value]).map((c) => (
          <li key={c.value}>
            <Link
              href={`/icons?category=${c.value}`}
              onMouseEnter={prefetchCatalog}
              className="ki-trigger group card flex h-full flex-col justify-between gap-6 rounded-card p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong"
            >
              <span className="flex gap-3 text-ink-2 transition-colors group-hover:text-accent">
                {(SAMPLES[c.value] ?? []).map((icon) => (
                  <KineticIcon key={icon.name} icon={icon} size={24} />
                ))}
              </span>
              <span>
                <span className="block text-[15px] font-semibold">{c.label}</span>
                <span className="mt-0.5 block text-[13px] text-muted tabular">{fmt(CATEGORY_COUNTS[c.value])} icons</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
