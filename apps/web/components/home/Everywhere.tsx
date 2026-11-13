"use client";

import { useState } from "react";
import { KineticIcon } from "kineticons";
import { chip } from "@/components/ui/controls";
import {
  send,
} from "@kineticons/core/icons";
import { Button, CodeBlock } from "@/components/ui/bits";

type Tab = "react" | "vue" | "svelte" | "html";

const SNIPPETS: Record<Tab, { code: string; lang: string; note: string }> = {
  react: {
    lang: "tsx",
    note: "npm install kineticons. Import only the icons you use; they render in Server Components too.",
    code: `import { Send } from "kineticons";

export function SendButton() {
  return (
    <button className="ki-trigger">
      <Send variant="duotone" size={20} />
      Send
    </button>
  );
}`,
  },
  vue: {
    lang: "vue",
    note: "npm install @kineticons/vue. The same props, for Vue 3 and Nuxt.",
    code: `<script setup lang="ts">
import { Send } from "@kineticons/vue";
</script>

<template>
  <button class="ki-trigger">
    <Send variant="duotone" :size="20" />
    Send
  </button>
</template>`,
  },
  svelte: {
    lang: "svelte",
    note: "npm install @kineticons/svelte. For Svelte 5 and SvelteKit.",
    code: `<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { send } from "@kineticons/svelte/icons";
</script>

<button class="ki-trigger">
  <Icon icon={send} variant="duotone" size={20} />
  Send
</button>`,
  },
  html: {
    lang: "html",
    note: "No framework: every icon’s SVG carries its own motion. Paste it from the icon’s page, or load it from a CDN.",
    code: `<!-- the whole button wakes the icon -->
<button class="ki-trigger">
  <svg class="ki" data-icon="send" data-trigger="hover" …>
    <style>/* its motion, inside */</style>
    …
  </svg>
  Send
</button>

<!-- or as a file: https://cdn.jsdelivr.net/npm/@kineticons/static/svg/duotone/send.svg -->`,
  },
};

const FACTS = [
  { title: "Server Components", text: "Icons render on the server with no client code; React hoists each icon’s CSS once." },
  { title: "Plain CSS", text: "No animation library and nothing running in JavaScript until an icon is pointed at." },
  { title: "Only what you use", text: "One module per icon, so bundlers keep the icons you import and drop the rest." },
  { title: "Reduced motion", text: "Visitors who ask for less motion get still icons, with nothing to configure." },
];

/** A plum panel: the same icon in React, Vue, Svelte and HTML, a button to point at, and how it works. */
export function Everywhere() {
  const [tab, setTab] = useState<Tab>("react");
  const s = SNIPPETS[tab];
  return (
    <section className="night panel -mt-12 py-24 sm:py-32" aria-labelledby="use-title">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 45% at 90% 10%, rgba(255,107,61,.14), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <h2 id="use-title" className="display max-w-[900px] text-[clamp(44px,6.6vw,100px)]">
          Drop it in.
          <br />
          <em>It moves.</em>
        </h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="grid place-items-center rounded-box border border-line bg-surface px-6 py-14">
              <button type="button" className="ki-trigger inline-flex h-14 items-center gap-3 rounded-full bg-accent pr-6 pl-5 text-[16px] font-medium text-[#1a0f0a] shadow-[0_18px_40px_-18px_var(--accent)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
                <KineticIcon icon={send} variant="duotone" size={22} />
                Point at this button
              </button>
              <p className="mt-5 text-[14px] text-muted">The button is the trigger: its icon wakes when you point anywhere on it.</p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-box border border-line bg-line sm:grid-cols-2">
              {FACTS.map((f) => (
                <div key={f.title} className="bg-bg p-6">
                  <dt className="text-[16px] font-semibold text-ink">{f.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{f.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <div role="tablist" aria-label="Framework" className="flex flex-wrap gap-2">
              {(["react", "vue", "svelte", "html"] as Tab[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={chip(tab === t)}
                >
                  {{ react: "React", vue: "Vue", svelte: "Svelte", html: "HTML" }[t]}
                </button>
              ))}
            </div>
            <CodeBlock code={s.code} lang={s.lang} className="rounded-box" />
            <p className="text-[14px] text-muted">{s.note}</p>
            <div className="mt-2">
              <Button variant="secondary" to="/docs">
                Read the docs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
