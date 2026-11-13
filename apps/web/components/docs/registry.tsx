import Link from "next/link";
import type { ReactNode } from "react";
import { KineticIcon } from "kineticons";
import { TOKENS, type Variant } from "@kineticons/core";
import { bell, dictionary, home, mic, play, settings, trash } from "@kineticons/core/icons";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { REPO_URL } from "@/lib/site";
import { CodeTabs } from "./CodeTabs";
import { Callout, Code, H2, H3, Install, Props } from "./parts";

export interface Doc {
  slug: string;
  title: string;
  group: "Start" | "Using icons" | "Project";
  /** for the page's meta description and the docs index */
  description: string;
  /** the page's sections, for its table of contents */
  toc: { id: string; title: string }[];
  body: () => ReactNode;
}

const COMMON_PROPS: (string | ReactNode)[][] = [
  ["variant", `"outline" | "duotone" | "filled"`, `"outline"`, "The style."],
  ["size", "number | string", "24", "Width and height, in pixels (or any CSS length as a string)."],
  ["strokeWidth", "number", "1.75", "Stroke in 24-grid units; the same visual weight at any size."],
  ["trigger", `"hover" | "manual" | "loop" | "none"`, `"hover"`, "When the icon moves."],
  ["active", "boolean", "false", `With trigger "manual": plays while true.`],
  ["loopEvery", "number", "1800", `With trigger "loop": one beat, in milliseconds.`],
  ["title", "string", "", "An accessible name: the icon is then announced as an image."],
];

export const DOCS: Doc[] = [
  {
    slug: "",
    title: "Getting started",
    group: "Start",
    description: `Install Kineticons and draw your first animated icon in React, Vue, Svelte or plain HTML. ${fmt(ICON_COUNT)} icons, MIT licensed.`,
    toc: [
      { id: "what", title: "What Kineticons is" },
      { id: "install", title: "Install" },
      { id: "first-icon", title: "Your first icon" },
      { id: "next", title: "Where next" },
    ],
    body: () => (
      <>
        <H2 id="what">What Kineticons is</H2>
        <p>
          Kineticons is an open-source set of {fmt(ICON_COUNT)} rounded icons. Each comes in outline, duotone and filled, and each has a motion of its own
          that plays when you point at it: a bell swings from its top, a padlock’s shackle drops shut, a battery fills. The motion is plain CSS, so it
          plays the same in React, Vue, Svelte and a plain HTML page, and stays still for visitors who ask for reduced motion.
        </p>
        <H2 id="install">Install</H2>
        <p>Pick the package for your framework:</p>
        <CodeTabs
          label="Framework"
          tabs={[
            { label: "React", code: "npm install kineticons", lang: "shell" },
            { label: "Vue", code: "npm install @kineticons/vue", lang: "shell" },
            { label: "Svelte", code: "npm install @kineticons/svelte", lang: "shell" },
            { label: "HTML / CDN", code: "npm install @kineticons/static", lang: "shell" },
          ]}
        />
        <H2 id="first-icon">Your first icon</H2>
        <CodeTabs
          label="Framework"
          tabs={[
            {
              label: "React",
              lang: "tsx",
              code: `import { Bell } from "kineticons";

export function Notifications() {
  return (
    <button className="ki-trigger">
      <Bell variant="duotone" size={20} />
      Notifications
    </button>
  );
}`,
            },
            {
              label: "Vue",
              lang: "vue",
              code: `<script setup lang="ts">
import { Bell } from "@kineticons/vue";
</script>

<template>
  <button class="ki-trigger">
    <Bell variant="duotone" :size="20" />
    Notifications
  </button>
</template>`,
            },
            {
              label: "Svelte",
              lang: "svelte",
              code: `<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { bell } from "@kineticons/svelte/icons";
</script>

<button class="ki-trigger">
  <Icon icon={bell} variant="duotone" size={20} />
  Notifications
</button>`,
            },
            {
              label: "HTML / CDN",
              lang: "html",
              code: `<!-- every icon's SVG carries its own motion: paste it, or load the file -->
<img src="https://cdn.jsdelivr.net/npm/@kineticons/static/svg/duotone/bell.svg" alt="" width="20" height="20" />`,
            },
          ]}
        />
        <p>
          Point at the button and the bell swings. Putting <code>ki-trigger</code> on the button makes the whole button wake its icon; buttons, links and
          tabs count as triggers on their own too.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="ki-trigger card inline-flex h-11 items-center gap-2.5 rounded-full px-5 text-[14px] font-medium">
            <KineticIcon icon={bell} variant="duotone" size={20} />
            Notifications
          </button>
        </div>
        <H2 id="next">Where next</H2>
        <ul>
          <li>
            Find icons in the <Link href="/icons">browser</Link>: every icon’s page has its code for each framework.
          </li>
          <li>
            Read the guide for <Link href="/docs/react">React</Link>, <Link href="/docs/nextjs">Next.js</Link>, <Link href="/docs/vue">Vue</Link>,{" "}
            <Link href="/docs/svelte">Svelte</Link> or <Link href="/docs/static">HTML and CDNs</Link>.
          </li>
          <li>
            Learn the three <Link href="/docs/styles">styles</Link> and how <Link href="/docs/motion">motion</Link> is triggered.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "react",
    title: "React",
    group: "Start",
    description: "Use Kineticons in React: named icon components, the KineticIcon component, props, Server Components and tree-shaking.",
    toc: [
      { id: "install", title: "Install" },
      { id: "usage", title: "Usage" },
      { id: "props", title: "Props" },
      { id: "dynamic", title: "Icons chosen at runtime" },
      { id: "server", title: "Server Components" },
      { id: "size", title: "Bundle size" },
    ],
    body: () => (
      <>
        <H2 id="install">Install</H2>
        <Install pkg="kineticons" />
        <p>Works with React 18 and 19, Vite, Next.js, Remix and anything that bundles ES modules.</p>
        <H2 id="usage">Usage</H2>
        <p>Every icon is a component named after it in PascalCase: <code>bell</code> is <code>Bell</code>, <code>arrow-right</code> is <code>ArrowRight</code>. Each also has an <code>…Icon</code> alias (<code>BellIcon</code>) for when the plain name clashes with your own.</p>
        <Code
          lang="tsx"
          code={`import { ArrowRight, Bell, Trash } from "kineticons";

<button className="ki-trigger">
  <Trash variant="filled" size={18} />
  Delete
</button>

<a href="/next" className="ki-trigger">
  Continue <ArrowRight size={16} strokeWidth={2} />
</a>`}
        />
        <H2 id="props">Props</H2>
        <p>Every icon component takes these, plus any SVG attribute (<code>className</code>, <code>style</code>, <code>aria-*</code>, event handlers), and forwards its ref to the <code>&lt;svg&gt;</code>.</p>
        <Props rows={COMMON_PROPS} />
        <H2 id="dynamic">Icons chosen at runtime</H2>
        <p>
          When the icon comes from data, pass its definition to <code>KineticIcon</code>. Definitions are named in camelCase in{" "}
          <code>kineticons/data</code>; <code>ICONS</code> holds all of them (importing it bundles every icon, so keep that for tools like a picker).
        </p>
        <Code
          lang="tsx"
          code={`import { KineticIcon } from "kineticons";
import { bell, mail, trash } from "kineticons/data";

const ACTIONS = { notify: bell, email: mail, remove: trash };

<KineticIcon icon={ACTIONS[action]} variant="duotone" />`}
        />
        <H2 id="server">Server Components</H2>
        <p>
          With React 19, icons render in Server Components with no client JavaScript: each icon’s CSS is hoisted into the page’s head once, however many
          times it appears. Only <code>trigger="loop"</code> needs the client, and that part is marked for it, so you never write{" "}
          <code>"use client"</code> for an icon.
        </p>
        <H2 id="size">Bundle size</H2>
        <p>
          The package is free of side effects and every icon is its own export, so bundlers keep only the icons you import. A typical icon adds well
          under 1 KB gzipped, its motion included.
        </p>
      </>
    ),
  },
  {
    slug: "nextjs",
    title: "Next.js",
    group: "Start",
    description: "Kineticons in Next.js: Server Components with no client JavaScript, the App Router and the Pages Router.",
    toc: [
      { id: "install", title: "Install" },
      { id: "app-router", title: "App Router" },
      { id: "pages-router", title: "Pages Router" },
      { id: "optimize", title: "Faster builds" },
    ],
    body: () => (
      <>
        <H2 id="install">Install</H2>
        <Install pkg="kineticons" />
        <H2 id="app-router">App Router</H2>
        <p>Import icons straight into Server Components. The icon renders on the server and moves on hover with no client code.</p>
        <Code
          lang="tsx"
          code={`// app/page.tsx (a Server Component)
import { Rocket } from "kineticons";

export default function Page() {
  return (
    <a href="/start" className="ki-trigger">
      <Rocket variant="duotone" /> Get started
    </a>
  );
}`}
        />
        <H2 id="pages-router">Pages Router</H2>
        <p>Icons work the same way in pages and components; their CSS is added on first render.</p>
        <H2 id="optimize">Faster builds</H2>
        <p>
          With thousands of named exports, dev builds are faster when Next optimises the import. Add the package to{" "}
          <code>optimizePackageImports</code>:
        </p>
        <Code
          lang="ts"
          code={`// next.config.ts
export default {
  experimental: { optimizePackageImports: ["kineticons"] },
};`}
        />
      </>
    ),
  },
  {
    slug: "vue",
    title: "Vue",
    group: "Start",
    description: "Use Kineticons in Vue 3 and Nuxt: named icon components, the KineticIcon component and props.",
    toc: [
      { id: "install", title: "Install" },
      { id: "usage", title: "Usage" },
      { id: "props", title: "Props" },
      { id: "dynamic", title: "Icons chosen at runtime" },
      { id: "nuxt", title: "Nuxt" },
    ],
    body: () => (
      <>
        <H2 id="install">Install</H2>
        <Install pkg="@kineticons/vue" />
        <H2 id="usage">Usage</H2>
        <Code
          lang="vue"
          code={`<script setup lang="ts">
import { Bell, Trash } from "@kineticons/vue";
</script>

<template>
  <button class="ki-trigger">
    <Bell variant="duotone" :size="20" /> Notifications
  </button>
</template>`}
        />
        <H2 id="props">Props</H2>
        <p>The same props as React (in templates, <code>:stroke-width</code> or <code>:strokeWidth</code>), plus any attribute for the <code>&lt;svg&gt;</code>.</p>
        <Props rows={COMMON_PROPS} />
        <H2 id="dynamic">Icons chosen at runtime</H2>
        <Code
          lang="vue"
          code={`<script setup lang="ts">
import { KineticIcon } from "@kineticons/vue";
import { bell, mail } from "@kineticons/vue/icons";
const icon = props.unread ? mail : bell;
</script>

<template>
  <KineticIcon :icon="icon" variant="duotone" />
</template>`}
        />
        <H2 id="nuxt">Nuxt</H2>
        <p>Import components where you use them, as above. On the server the icon renders as SVG; its motion CSS is added when the page loads in the browser.</p>
      </>
    ),
  },
  {
    slug: "svelte",
    title: "Svelte",
    group: "Start",
    description: "Use Kineticons in Svelte 5 and SvelteKit with the Icon component.",
    toc: [
      { id: "install", title: "Install" },
      { id: "usage", title: "Usage" },
      { id: "props", title: "Props" },
    ],
    body: () => (
      <>
        <H2 id="install">Install</H2>
        <Install pkg="@kineticons/svelte" />
        <p>Requires Svelte 5.</p>
        <H2 id="usage">Usage</H2>
        <Code
          lang="svelte"
          code={`<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { bell, trash } from "@kineticons/svelte/icons";
  let recording = $state(false);
</script>

<button class="ki-trigger">
  <Icon icon={bell} variant="duotone" size={20} /> Notifications
</button>

<Icon icon={trash} trigger="manual" active={recording} />`}
        />
        <H2 id="props">Props</H2>
        <p>
          <code>icon</code> (required), then the same props as the other packages. <code>class</code> and any SVG attribute go on the <code>&lt;svg&gt;</code>.
        </p>
        <Props rows={[["icon", "IconDef", "", "The icon to draw, from @kineticons/svelte/icons."], ...COMMON_PROPS]} />
      </>
    ),
  },
  {
    slug: "static",
    title: "SVG, HTML and CDN",
    group: "Start",
    description: "Use Kineticons without a framework: animated SVG files, one stylesheet for many icons, and jsDelivr or unpkg.",
    toc: [
      { id: "files", title: "SVG files" },
      { id: "cdn", title: "From a CDN" },
      { id: "many", title: "Many icons on one page" },
      { id: "attributes", title: "Attributes" },
    ],
    body: () => (
      <>
        <H2 id="files">SVG files</H2>
        <Install pkg="@kineticons/static" />
        <p>
          The package has every icon in each style, <code>svg/outline/bell.svg</code>, <code>svg/duotone/bell.svg</code> and <code>svg/filled/bell.svg</code>,
          each with its motion inside. Placed inline in a page, an SVG moves when pointed at; as an <code>&lt;img&gt;</code> it stays still, since images
          can’t be hovered into.
        </p>
        <H2 id="cdn">From a CDN</H2>
        <Code lang="html" code={`<img src="https://cdn.jsdelivr.net/npm/@kineticons/static/svg/outline/rocket.svg" alt="" width="24" height="24" />
<img src="https://unpkg.com/@kineticons/static/svg/filled/heart.svg" alt="" width="24" height="24" />`} />
        <H2 id="many">Many icons on one page</H2>
        <p>
          <code>kineticons.css</code> holds the motion for every icon, so plain SVGs (without their own <code>&lt;style&gt;</code>) move too. It is large;
          for a few icons, prefer the self-contained SVG files, or copy each icon’s HTML from its page, which includes just the CSS it needs.
        </p>
        <Code lang="html" code={`<link rel="stylesheet" href="node_modules/@kineticons/static/kineticons.css" />

<button class="ki-trigger">
  <svg class="ki" data-icon="bell" data-trigger="hover" …>…</svg>
  Notifications
</button>`} />
        <H2 id="attributes">Attributes</H2>
        <Props
          head={["Attribute", "Values", "What it does"]}
          rows={[
            ["data-trigger", `hover | manual | none`, "When the icon moves (as the trigger prop)."],
            ["data-active", `"true"`, "With manual: plays while set."],
            ["class=\"ki-trigger\"", "on any parent", "Makes that element wake the icons inside it."],
          ]}
        />
        <p>
          <code>icons.json</code> lists every icon’s name, title, category, tags and motion, for building pickers and search.
        </p>
      </>
    ),
  },
  {
    slug: "styles",
    title: "Styles",
    group: "Using icons",
    description: "Outline, duotone and filled: how Kineticons draws three styles from one drawing.",
    toc: [
      { id: "three", title: "Three styles" },
      { id: "how", title: "How it works" },
    ],
    body: () => (
      <>
        <H2 id="three">Three styles</H2>
        <p>Every icon is one drawing whose parts know what they are, so switching style never shifts an icon.</p>
        <StyleRow />
        <ul>
          <li>
            <strong>Outline</strong>: every part stroked. Light; right for dense interfaces.
          </li>
          <li>
            <strong>Duotone</strong>: shapes get a soft fill of the icon’s own colour, which deepens while the icon is active.
          </li>
          <li>
            <strong>Filled</strong>: shapes are solid and lines inside them are cut out. Icons made only of lines become a solid rounded tile with the
            lines cut out. Good for selected states and small sizes.
          </li>
        </ul>
        <H2 id="how">How it works</H2>
        <p>
          Each part of an icon is a <em>shape</em> (a closed outline), a <em>detail</em> (a line inside a shape) or a <em>line</em>. Outline strokes them
          all; duotone tints the shapes; filled fills the shapes and cuts the details out, leaving a gap around any badge (a plus, a lock) so it stays
          separate.
        </p>
      </>
    ),
  },
  {
    slug: "motion",
    title: "Motion and triggers",
    group: "Using icons",
    description: "How Kineticons icons move: per-icon motion, triggers (hover, manual, loop, none), timing and reduced motion.",
    toc: [
      { id: "own", title: "A motion of its own" },
      { id: "triggers", title: "Triggers" },
      { id: "timing", title: "Timing" },
      { id: "reduced", title: "Reduced motion" },
    ],
    body: () => (
      <>
        <H2 id="own">A motion of its own</H2>
        <p>
          Every icon moves the way its object does: parts move against each other around a real pivot, lines draw themselves, shapes give and spring back.
          Each icon’s page says what its motion shows.
        </p>
        <H2 id="triggers">Triggers</H2>
        <Props
          head={["Trigger", "When it moves", "Use it for"]}
          rows={[
            ["hover", "When the icon, or a button, link, tab or .ki-trigger around it, is pointed at or focused", "The default: interface controls."],
            ["manual", "While active is true", "A state that is on: recording, playing, syncing."],
            ["loop", "On a steady beat", "Something ongoing. Use sparingly."],
            ["none", "Never", "Icons in dense lists, print, screenshots."],
          ]}
        />
        <div className="flex flex-wrap gap-3">
          <button type="button" className="ki-trigger card inline-flex h-11 items-center gap-2.5 rounded-full px-5 text-[14px] font-medium">
            <KineticIcon icon={bell} variant="duotone" size={20} />
            The whole button wakes the bell
          </button>
          <span className="card inline-flex h-11 items-center gap-2.5 rounded-full px-5 text-[14px] text-muted">
            <KineticIcon icon={mic} variant="duotone" size={20} trigger="loop" />
            Loop
          </span>
        </div>
        <H2 id="timing">Timing</H2>
        <p>
          Motion arrives with a little spring over {TOKENS.durationIn} ms and leaves smoothly over {TOKENS.durationOut} ms. Parts follow each other by 40
          to 80 ms, and movements stay within one or two units of the grid.
        </p>
        <H2 id="reduced">Reduced motion</H2>
        <p>When a visitor’s system asks for reduced motion, every icon stays still, whatever its trigger. Nothing to configure.</p>
      </>
    ),
  },
  {
    slug: "sizing",
    title: "Size, stroke and colour",
    group: "Using icons",
    description: "Sizing Kineticons icons, adjusting stroke weight and colouring them with currentColor.",
    toc: [
      { id: "size", title: "Size" },
      { id: "stroke", title: "Stroke" },
      { id: "colour", title: "Colour" },
    ],
    body: () => (
      <>
        <H2 id="size">Size</H2>
        <p>Icons are drawn on a 24-unit grid and look sharpest at 16, 20, 24 and 32 pixels.</p>
        <div className="flex flex-wrap items-end gap-8 text-ink-2">
          {[16, 20, 24, 32, 48].map((s) => (
            <span key={s} className="ki-trigger flex flex-col items-center gap-2">
              <KineticIcon icon={trash} size={s} variant="duotone" />
              <span className="text-[12px] text-faint tabular">{s}px</span>
            </span>
          ))}
        </div>
        <H2 id="stroke">Stroke</H2>
        <p>
          <code>strokeWidth</code> is in grid units and keeps the same visual weight at any size: 1.75 by default, 1.5 for a lighter look, 2 for bolder.
        </p>
        <H2 id="colour">Colour</H2>
        <p>
          Icons draw with <code>currentColor</code>, so they take the text colour of what they sit in. Set <code>color</code> on the icon or its parent;
          duotone’s fill follows the same colour.
        </p>
      </>
    ),
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    group: "Using icons",
    description: "Kineticons and accessibility: hidden decorative icons, labelled standalone icons, focus and reduced motion.",
    toc: [
      { id: "decorative", title: "Decorative icons" },
      { id: "meaningful", title: "Icons that carry meaning" },
      { id: "motion", title: "Motion" },
    ],
    body: () => (
      <>
        <H2 id="decorative">Decorative icons</H2>
        <p>Icons are hidden from screen readers by default (<code>aria-hidden</code>), since most sit beside a text label that already says it all.</p>
        <H2 id="meaningful">Icons that carry meaning</H2>
        <p>
          An icon that stands alone, such as an icon-only button, needs a name: put <code>aria-label</code> on the button, or give the icon a{" "}
          <code>title</code> (it is then announced as an image).
        </p>
        <Code
          lang="tsx"
          code={`<button className="ki-trigger" aria-label="Delete">
  <Trash />
</button>`}
        />
        <H2 id="motion">Motion</H2>
        <ul>
          <li>Motion plays on keyboard focus as well as on pointing, so keyboard users see the same thing.</li>
          <li>Reduced motion turns every icon’s motion off.</li>
          <li>Loops pause while the page is hidden.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "api",
    title: "API reference",
    group: "Using icons",
    description: "The Kineticons API: components, the core renderer, toSvg, injectStyles, types and package entry points.",
    toc: [
      { id: "packages", title: "Packages" },
      { id: "core", title: "@kineticons/core" },
      { id: "types", title: "Types" },
    ],
    body: () => (
      <>
        <H2 id="packages">Packages</H2>
        <Props
          head={["Package", "Entry points", "What it gives you"]}
          rows={[
            ["kineticons", "kineticons, kineticons/data", "React: one component per icon, KineticIcon, and the icon data."],
            ["@kineticons/vue", "@kineticons/vue, /icons", "Vue 3: one component per icon, KineticIcon, and the icon data."],
            ["@kineticons/svelte", "@kineticons/svelte, /icons", "Svelte 5: the Icon component and the icon data."],
            ["@kineticons/static", "svg/*, kineticons.css, icons.json", "Plain files for HTML, CDNs and tooling."],
            ["@kineticons/core", "@kineticons/core, /icons", "The renderer and motion, without a framework."],
          ]}
        />
        <H2 id="core">@kineticons/core</H2>
        <Props
          head={["Export", "Signature", "What it does"]}
          rows={[
            ["render", "(icon, options) => SvgNode", "The icon as a tree of SVG elements, for any renderer."],
            ["toSvg", "(icon, options, animated = true) => string", "The icon as SVG markup, its motion inside."],
            ["toHtml", "(icon, options) => string", "Markup for a plain page: styles once, then the icon."],
            ["injectStyles", "(icon) => void", "Adds an icon’s motion CSS to the page once (browser only)."],
            ["iconCss / baseCss", "(icon) => string / () => string", "The CSS one icon needs, and the CSS all icons share."],
            ["stylesheet", "(icons) => string", "The motion for many icons in one stylesheet."],
            ["TOKENS", "object", "The motion timing every icon shares."],
          ]}
        />
        <Code
          lang="ts"
          code={`import { toSvg } from "@kineticons/core";
import { rocket } from "@kineticons/core/icons";

document.querySelector("#start")!.innerHTML = toSvg(rocket, { variant: "duotone", size: 20 });`}
        />
        <H2 id="types">Types</H2>
        <p>
          <code>IconDef</code> (an icon: its name, title, category, tags, parts and motion), <code>Variant</code>, <code>Trigger</code> and{" "}
          <code>Category</code> are exported by every package.
        </p>
      </>
    ),
  },
  {
    slug: "design-system",
    title: "Design system",
    group: "Project",
    description: "The rules every Kineticons icon follows: the 24-unit grid, stroke and corners, three styles and the motion tokens.",
    toc: [
      { id: "grid", title: "Grid" },
      { id: "stroke", title: "Stroke and corners" },
      { id: "tokens", title: "Motion tokens" },
    ],
    body: () => (
      <>
        <p>Every icon follows the same rules for its shape and its motion, so they sit together anywhere.</p>
        <H2 id="grid">Grid</H2>
        <p>A 24-unit square with a 2-unit margin. Round shapes go a touch past square ones, so they look the same size.</p>
        <div className="flex flex-wrap gap-4">
          {[home, mic, settings, dictionary].map((i) => (
            <div key={i.name} className="ki-trigger relative grid size-[156px] place-items-center rounded-card bg-surface-2 text-ink-2">
              <GridLines />
              <KineticIcon icon={i} size={132} strokeWidth={1.75} />
            </div>
          ))}
        </div>
        <H2 id="stroke">Stroke and corners</H2>
        <p>1.75 units with round caps and joins, and no sharp corners: rectangles round at 2.5 units or more.</p>
        <H2 id="tokens">Motion tokens</H2>
        <Props
          head={["Token", "Value", "Meaning"]}
          rows={[
            ["In", `${TOKENS.durationIn} ms`, "With a little spring: cubic-bezier(.34, 1.56, .64, 1)"],
            ["Out", `${TOKENS.durationOut} ms`, "Smooth, no overshoot: cubic-bezier(.22, 1, .36, 1)"],
            ["Stagger", "40–80 ms", "Parts follow each other"],
            ["Duotone", `${Math.round(TOKENS.toneRest * 100)}% to ${Math.round(TOKENS.toneActive * 100)}%`, "The fill deepens while active"],
          ]}
        />
      </>
    ),
  },
  {
    slug: "contributing",
    title: "Contributing",
    group: "Project",
    description: "How to contribute to Kineticons: set up the repository, add an icon with its motion, and run the checks.",
    toc: [
      { id: "setup", title: "Set up" },
      { id: "add", title: "Add an icon" },
      { id: "checks", title: "Checks" },
    ],
    body: () => (
      <>
        <H2 id="setup">Set up</H2>
        <Code
          lang="shell"
          code={`git clone ${REPO_URL}.git
cd kineticons
pnpm install
pnpm build      # the packages
pnpm dev        # this site, http://localhost:5190`}
        />
        <H2 id="add">Add an icon</H2>
        <p>
          Icons live in batch files under <code>scripts/motions/</code>: each lists its icons and gives every one a motion of its own, and fill shapes where
          an outline is drawn open. Hand-drawn icons live in <code>packages/core/src/icons/</code>.
        </p>
        <Code
          lang="ts"
          code={`// scripts/motions/n.ts
export const list: Entry[] = [
  ["BellRing", "bell-ring", "Bell ringing", "status", "swing", ["alert", "notify"], "The bell rings."],
];
export const motions = {
  "bell-ring": { note: "The bell swings from its top.", motion: { p0: { origin: "50% 0%", animation: "…" } } },
};`}
        />
        <H3 id="rule">The rule for motion</H3>
        <p>The drawing acts: parts move against each other, lines draw themselves, shapes morph. Never only the whole icon.</p>
        <H2 id="checks">Checks</H2>
        <p>
          <code>pnpm check</code> draws every icon in every style and checks every motion, and lists any badge that crowds a filled shape. Open a pull
          request when it passes.
        </p>
      </>
    ),
  },
  {
    slug: "licence",
    title: "Licence",
    group: "Project",
    description: "Kineticons is free and open source under the MIT licence.",
    toc: [{ id: "mit", title: "MIT licence" }],
    body: () => (
      <>
        <H2 id="mit">MIT licence</H2>
        <p>
          Kineticons is released under the MIT licence: use it in personal and commercial work, change it and ship it. The full text is in the{" "}
          <a href={`${REPO_URL}/blob/main/LICENSE`}>LICENSE file</a>.
        </p>
        <Callout>You don’t need to credit Kineticons in your product. A link back is always appreciated.</Callout>
      </>
    ),
  },
];

export const docBySlug = (slug: string) => DOCS.find((d) => d.slug === slug);

function StyleRow() {
  return (
    <div className="not-prose grid gap-3 sm:grid-cols-3">
      {(["outline", "duotone", "filled"] as Variant[]).map((v) => (
        <div key={v} className="card ki-trigger flex flex-col items-center gap-4 rounded-card py-8">
          <div className="flex gap-5 text-ink-2">
            {[home, bell, trash, play].map((i) => (
              <KineticIcon key={i.name} icon={i} variant={v} size={28} />
            ))}
          </div>
          <span className="text-[14px] font-semibold capitalize">{v}</span>
        </div>
      ))}
    </div>
  );
}

function GridLines() {
  return (
    <svg viewBox="0 0 24 24" className="pointer-events-none absolute inset-3 size-[132px]" aria-hidden>
      {Array.from({ length: 25 }, (_, i) => (
        <g key={i} stroke="var(--line-strong)" strokeWidth={0.04}>
          <line x1={i} y1={0} x2={i} y2={24} />
          <line x1={0} y1={i} x2={24} y2={i} />
        </g>
      ))}
      <rect x={2} y={2} width={20} height={20} rx={1} fill="none" stroke="var(--accent)" strokeOpacity={0.55} strokeWidth={0.06} strokeDasharray="0.4 0.3" />
    </svg>
  );
}
