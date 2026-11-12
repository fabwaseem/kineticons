"use client";

import { useState } from "react";
import { KineticIcon } from "kineticons";
import {
  send,
} from "@kineticons/core/icons";
import { Button, CodeBlock, Reveal, SectionHead, Segmented } from "@/components/ui/bits";

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

/** The same icon in React, as an SVG file, in plain HTML. */
export function Everywhere() {
  const [tab, setTab] = useState<Tab>("react");
  const s = SNIPPETS[tab];
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-28 sm:px-6" aria-labelledby="use-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <Reveal>
          <SectionHead
            title={<span id="use-title">Works where your interface lives</span>}
            text="One drawing and one motion, in four packages: React, Vue, Svelte and plain HTML. The motion is CSS, so an icon moves the same everywhere. Put the trigger on the button and the whole button wakes its icon."
          />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" className="ki-trigger card inline-flex h-12 items-center gap-2.5 rounded-[14px] px-5 text-[15px] font-medium">
              <KineticIcon icon={send} variant="duotone" size={20} />
              Point at this button
            </button>
            <Button variant="ghost" to="/docs">
              Read the docs
            </Button>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-col gap-3">
            <Segmented
              label="Where"
              value={tab}
              onChange={setTab}
              options={[
                { value: "react", label: "React" },
                { value: "vue", label: "Vue" },
                { value: "svelte", label: "Svelte" },
                { value: "html", label: "HTML" },
              ]}
            />
            <CodeBlock code={s.code} lang={s.lang} />
            <p className="text-[13.5px] text-muted">{s.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
