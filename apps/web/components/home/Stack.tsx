"use client";

import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { astroLogo, box, braces, code, command, figmaLogo, flame, html5Logo, iconifyLogo, jsdelivrLogo, nextjsLogo, npmLogo, nuxtLogo, reactLogo, remixLogo, server, tailwindCssLogo, unocssLogo, unpkgLogo, vuejsLogo } from "@kineticons/core/icons";

type Item = { name: string; icon: IconDef };

// what Kineticons runs in and ships to, with each one's own logo (from the Brands set; a generic icon where there is
// no logo to show)
const ROW_A: Item[] = [
  { name: "React", icon: reactLogo },
  { name: "Next.js", icon: nextjsLogo },
  { name: "Remix", icon: remixLogo },
  { name: "Vue", icon: vuejsLogo },
  { name: "Nuxt", icon: nuxtLogo },
  { name: "Svelte", icon: flame },
  { name: "SvelteKit", icon: box },
  { name: "Astro", icon: astroLogo },
  { name: "Plain HTML", icon: html5Logo },
  { name: "Server Components", icon: server },
];
const ROW_B: Item[] = [
  { name: "Figma", icon: figmaLogo },
  { name: "VS Code", icon: code },
  { name: "Raycast", icon: command },
  { name: "Iconify", icon: iconifyLogo },
  { name: "Tailwind CSS", icon: tailwindCssLogo },
  { name: "UnoCSS", icon: unocssLogo },
  { name: "JSR", icon: braces },
  { name: "npm", icon: npmLogo },
  { name: "jsDelivr", icon: jsdelivrLogo },
  { name: "unpkg", icon: unpkgLogo },
];


/** A plum panel: what the icons work with, on two rows drifting in opposite directions. Pointing pauses a row. */
export function Stack() {
  return (
    <section className="night panel py-20 sm:py-24" aria-labelledby="stack-title">
      <h2 id="stack-title" className="heading px-6 text-center text-[clamp(28px,3.4vw,40px)] text-ink">
        Works with <em>your whole stack</em>
      </h2>
      <div className="mt-12 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  );
}

function Row({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      {/* two copies, so the loop is seamless; the second is hidden from assistive tech */}
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className="flex shrink-0 gap-3 pr-3 [animation:marquee-x_90s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ animationDirection: reverse ? "reverse" : "normal" }}
        >
          {/* three rounds of the list per copy, so a copy is always wider than the screen and the loop never shows a gap */}
          {[...items, ...items, ...items].map((it, i) => (
            <li key={`${it.name}-${i}`} className="ki-trigger group/item flex h-14 shrink-0 items-center gap-3 rounded-full border border-line bg-surface px-5 text-[16px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
              <KineticIcon icon={it.icon} size={20} className="text-ink-2 transition-colors group-hover/item:text-accent" />
              {it.name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
