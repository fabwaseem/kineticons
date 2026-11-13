"use client";

import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { arrowUpRight, braces, code, command, globe, layers, packageIcon, penTool } from "@kineticons/core/icons";
import { FIGMA_URL, JSR_URL, NPM_URL, REPO_URL, VSCODE_URL } from "@/lib/site";
import { Reveal } from "@/components/ui/bits";

type Place = { icon: IconDef; name: string; what: string; detail: string; href: string; soon?: boolean };

const PLACES: Place[] = [
  { icon: packageIcon, name: "npm", what: "React, Vue, Svelte and static SVG", detail: "npm install kineticons", href: NPM_URL },
  { icon: penTool, name: "Figma", what: "Every icon a component, with a Style property", detail: "Kineticons on Figma Community", href: FIGMA_URL },
  { icon: code, name: "VS Code", what: "Insert any icon as JSX, Vue, Svelte or SVG", detail: "fabwaseem.kineticons", href: VSCODE_URL },
  { icon: braces, name: "JSR", what: "The renderer and motion for Deno, Bun and Node", detail: "jsr add @kineticons/core", href: JSR_URL },
  { icon: layers, name: "Iconify", what: "iconify.json for Unplugin Icons, UnoCSS and Tailwind", detail: "@kineticons/static/iconify.json", href: `${REPO_URL}/tree/main/packages/static#readme` },
  { icon: globe, name: "CDN", what: "Plain SVG files and one stylesheet, no build step", detail: "cdn.jsdelivr.net/npm/@kineticons/static", href: "https://www.jsdelivr.com/package/npm/@kineticons/static" },
  { icon: command, name: "Raycast", what: "Search the set and paste an icon anywhere", detail: "Coming to the Raycast Store", href: `${REPO_URL}/tree/main/extensions/raycast`, soon: true },
];

/** Where the icons live: one list, every place a designer or developer might reach for them. */
export function Ecosystem() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-36 pb-28 sm:pt-44" aria-labelledby="eco-title">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-[calc(var(--nav-h)+48px)] lg:self-start">
          <h2 id="eco-title" className="display text-[clamp(44px,6vw,88px)]">
            Wherever
            <br />
            <em>you work.</em>
          </h2>
          <p className="mt-4 max-w-[440px] text-[17px] leading-relaxed text-muted">
            The same drawings in your code, your design files and your editor. One source, rebuilt and published together on every release.
          </p>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line">
          {PLACES.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="ki-trigger group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 py-5 transition-colors sm:py-6"
              >
                <span className="grid size-12 place-items-center rounded-tile border border-line bg-surface text-ink-2 transition-[color,border-color,background-color] duration-300 group-hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] group-hover:bg-accent-soft group-hover:text-accent-ink">
                  <KineticIcon icon={p.icon} size={24} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-[17px] font-semibold text-ink">{p.name}</span>
                    {p.soon && <span className="rounded-full bg-surface-3 px-2 py-0.5 text-[11px] font-medium text-muted">Soon</span>}
                  </span>
                  <span className="mt-0.5 block text-[15px] text-muted">{p.what}</span>
                  <span className="mt-1.5 block truncate font-mono text-[12px] text-faint">{p.detail}</span>
                </span>
                <span className="grid size-10 place-items-center rounded-full text-faint transition-[color,transform,background-color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-surface-3 group-hover:text-ink">
                  <KineticIcon icon={arrowUpRight} size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
