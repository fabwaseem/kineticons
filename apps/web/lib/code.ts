import { toHtml, toSvg, type IconDef, type Trigger, type Variant } from "@kineticons/core";

// The code a visitor copies for one icon, in every way the packages offer.

export type CodeTab = "react" | "vue" | "svelte" | "svg" | "html";
export const CODE_TABS: { value: CodeTab; label: string; note: string; ext: string; mime: string; lang: string }[] = [
  { value: "react", label: "React", note: "npm install kineticons. Works in Server Components; only the icons you import are bundled.", ext: "tsx", mime: "text/plain", lang: "tsx" },
  { value: "vue", label: "Vue", note: "npm install @kineticons/vue. Vue 3 and Nuxt.", ext: "vue", mime: "text/plain", lang: "vue" },
  { value: "svelte", label: "Svelte", note: "npm install @kineticons/svelte. Svelte 5 and SvelteKit.", ext: "svelte", mime: "text/plain", lang: "svelte" },
  { value: "svg", label: "SVG", note: "An SVG file with its motion inside. Placed inline in a page, it moves when pointed at.", ext: "svg", mime: "image/svg+xml", lang: "svg" },
  { value: "html", label: "HTML", note: "For any web page: the styles once in the head, the icon wherever it goes.", ext: "html", mime: "text/html", lang: "html" },
];

const RESERVED = new Set(["package", "private", "public", "import", "export", "default", "delete", "new", "class", "function", "return", "switch", "case", "break", "continue", "var", "let", "const", "if", "else", "for", "while", "do", "in", "of", "this", "super", "throw", "try", "catch", "finally", "typeof", "void", "with", "yield", "enum", "interface", "static", "protected", "implements", "await", "null", "true", "false"]);
const camelOf = (n: string) => n.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
/** The icon's data export: bell, arrowRight, packageIcon */
export const dataName = (n: string) => (RESERVED.has(camelOf(n)) ? camelOf(n) + "Icon" : camelOf(n));
/** The icon's component: Bell, ArrowRight, Package */
export const componentName = (n: string) => camelOf(n).replace(/^./, (c) => c.toUpperCase());

export interface CodeOptions {
  variant?: Variant;
  size?: number;
  strokeWidth?: number;
  trigger?: Trigger;
  /** brand logos in their own colour */
  brand?: boolean;
}

function props(o: CodeOptions, style: "jsx" | "vue" | "svelte"): string {
  const out: string[] = [];
  const num = (k: string, v: number) => (style === "vue" ? `:${k}="${v}"` : `${k}={${v}}`);
  if (o.variant && o.variant !== "outline") out.push(`variant="${o.variant}"`);
  if (o.size && o.size !== 24) out.push(num("size", o.size));
  if (o.strokeWidth && o.strokeWidth !== 1.75) out.push(num(style === "vue" ? "stroke-width" : "strokeWidth", o.strokeWidth));
  if (o.trigger && o.trigger !== "hover") out.push(`trigger="${o.trigger}"`);
  if (o.brand) out.push("brand");
  return out.length ? " " + out.join(" ") : "";
}

export function codeFor(icon: IconDef, tab: CodeTab, o: CodeOptions = {}): string {
  const C = componentName(icon.name);
  const d = dataName(icon.name);
  if (tab === "react")
    return `import { ${C} } from "kineticons";

// moves when the button is pointed at or focused
<button className="ki-trigger">
  <${C}${props(o, "jsx")} />
  ${icon.title}
</button>`;
  if (tab === "vue")
    return `<script setup lang="ts">
import { ${C} } from "@kineticons/vue";
</script>

<template>
  <button class="ki-trigger">
    <${C}${props(o, "vue")} />
    ${icon.title}
  </button>
</template>`;
  if (tab === "svelte")
    return `<script lang="ts">
  import { Icon } from "@kineticons/svelte";
  import { ${d} } from "@kineticons/svelte/icons";
</script>

<button class="ki-trigger">
  <Icon icon={${d}}${props(o, "svelte")} />
  ${icon.title}
</button>`;
  if (tab === "svg") return toSvg(icon, { variant: o.variant, size: o.size, strokeWidth: o.strokeWidth, brand: o.brand });
  return toHtml(icon, { variant: o.variant, size: o.size, strokeWidth: o.strokeWidth, brand: o.brand });
}

export function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const t = document.createElement("textarea");
      t.value = text;
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      const ok = document.execCommand("copy");
      t.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/** A small highlighter for the snippets the site shows (TSX, Vue, Svelte, HTML, CSS): comments, strings, tags,
 * attributes, keywords and numbers. Escapes everything; returns HTML. */
export function highlight(src: string): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const re =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.:-]*)|(\b[a-zA-Z:@-]+(?==))|\b(import|from|export|const|let|function|return|default|type|interface|extends|true|false|null|undefined|new|await|async|if|else|setup|lang)\b|(\b\d+(?:\.\d+)?\b)/g;
  let out = "";
  let last = 0;
  for (const m of src.matchAll(re)) {
    out += esc(src.slice(last, m.index));
    const [t, com, str, tag, attr, key, num] = m;
    const cls = com ? "c" : str ? "s" : tag ? "t" : attr ? "a" : key ? "k" : num ? "n" : "";
    out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
    last = m.index! + t.length;
  }
  return out + esc(src.slice(last));
}
