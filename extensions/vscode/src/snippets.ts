// What to insert for an icon in each kind of file, and the import it needs.
// Pure functions with no editor dependency, so they can be unit tested.

export type Variant = "outline" | "duotone" | "filled";

export interface TextEdit {
  /** offset in the original document text */
  offset: number;
  /** characters to replace from offset */
  length: number;
  text: string;
}

export interface Insertion {
  /** what goes at the cursor */
  snippet: string;
  /** import edits, against the original document text */
  edits: TextEdit[];
  /** shown to the user when the import could not be added on its own */
  note?: string;
}

const RESERVED = new Set(["package", "private", "public", "import", "export", "default", "delete", "new", "class", "function", "return", "switch", "case", "break", "continue", "var", "let", "const", "if", "else", "for", "while", "do", "in", "of", "this", "super", "throw", "try", "catch", "finally", "typeof", "void", "with", "yield", "enum", "interface", "static", "protected", "implements", "await", "null", "true", "false"]);

/** bell-ring → bellRing, axis-3d → axis3d */
export const camelName = (name: string): string => name.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

/** bell-ring → BellRing: the React and Vue component */
export const componentName = (name: string): string => camelName(name).replace(/^./, (c) => c.toUpperCase());

/** bell-ring → bellRing, package → packageIcon: the export of @kineticons/svelte/icons */
export const svelteIconName = (name: string): string => {
  const c = camelName(name);
  return RESERVED.has(c) ? `${c}Icon` : c;
};

export const REACT_LANGUAGES = new Set(["javascriptreact", "typescriptreact", "jsx", "tsx"]);

const variantAttr = (variant: Variant) => (variant === "outline" ? "" : ` variant="${variant}"`);

/**
 * The snippet and import edits for an icon in a document of the given language.
 * `svg` is the icon's markup in the chosen style, used for every other language.
 */
export function buildInsertion(languageId: string, text: string, name: string, variant: Variant, svg: string): Insertion {
  if (REACT_LANGUAGES.has(languageId)) {
    const comp = componentName(name);
    return { snippet: `<${comp}${variantAttr(variant)} />`, edits: addImports(text, 0, text.length, [[comp, "kineticons"]], false) };
  }
  if (languageId === "vue") {
    const comp = componentName(name);
    const snippet = `<${comp}${variantAttr(variant)} />`;
    const line = `import { ${comp} } from "@kineticons/vue";`;
    const setup = findScript(text, (attrs) => /\bsetup\b/.test(attrs));
    if (setup) return { snippet, edits: addImports(text, setup.start, setup.end, [[comp, "@kineticons/vue"]], true) };
    if (findScript(text, () => true)) {
      return { snippet, edits: [], note: `Add ${line} and register ${comp} in your component.` };
    }
    return { snippet, edits: [{ offset: 0, length: 0, text: `<script setup lang="ts">\n${line}\n</script>\n\n` }] };
  }
  if (languageId === "svelte") {
    const id = svelteIconName(name);
    const snippet = `<Icon icon={${id}}${variantAttr(variant)} />`;
    const wanted: [string, string][] = [
      ["Icon", "@kineticons/svelte"],
      [id, "@kineticons/svelte/icons"],
    ];
    const script = findScript(text, (attrs) => !/\b(context\s*=\s*["']module["']|module)\b/.test(attrs));
    if (script) return { snippet, edits: addImports(text, script.start, script.end, wanted, true) };
    const lines = wanted.map(([n, from]) => `  import { ${n} } from "${from}";`).join("\n");
    return { snippet, edits: [{ offset: 0, length: 0, text: `<script lang="ts">\n${lines}\n</script>\n\n` }] };
  }
  return { snippet: svg, edits: [] };
}

/** the content range of the first <script> block whose attributes pass the test */
function findScript(text: string, test: (attrs: string) => boolean): { start: number; end: number } | undefined {
  const re = /<script\b([^>]*)>/gi;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (!test(m[1])) continue;
    const start = m.index + m[0].length;
    const close = text.indexOf("</script>", start);
    return { start, end: close === -1 ? text.length : close };
  }
  return undefined;
}

const IMPORT_RE = /^[ \t]*import\s*(?:[^;'"]*?\bfrom\s*)?(["'])[^"'\n]+\1[ \t]*;?/gm;

/**
 * Imports each [name, module] into the code between start and end: merged into an existing
 * `import { … } from "module"` when there is one, or a new line after the last import.
 */
export function addImports(text: string, start: number, end: number, wanted: [string, string][], indent: boolean): TextEdit[] {
  const code = text.slice(start, end);
  const edits: TextEdit[] = [];
  const fresh: string[] = [];
  const quote = /\bfrom\s*'/.test(code) && !/\bfrom\s*"/.test(code) ? "'" : '"';
  const semi = /\bfrom\s*["'][^"']+["'](?!;)/.test(code) && !/\bfrom\s*["'][^"']+["'];/.test(code) ? "" : ";";

  for (const [name, from] of wanted) {
    const esc = from.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
    const named = new RegExp(`import\\s*\\{([^}]*)\\}\\s*from\\s*["']${esc}["']`, "g");
    let merged = false;
    for (let m = named.exec(code); m; m = named.exec(code)) {
      const specs = m[1].split(",").map((s) => s.trim()).filter(Boolean);
      if (specs.some((s) => s === name || s.endsWith(` as ${name}`))) {
        merged = true;
        break;
      }
      const braceStart = start + m.index + m[0].indexOf("{") + 1;
      const multiline = m[1].includes("\n");
      if (multiline) {
        const lastLine = m[1].trimEnd().split("\n").pop() ?? "";
        const pad = lastLine.match(/^\s*/)?.[0] ?? "  ";
        const body = m[1].trimEnd();
        const comma = body.endsWith(",") ? "" : ",";
        edits.push({ offset: braceStart, length: body.length, text: `${body}${comma}\n${pad}${name}` });
      } else {
        edits.push({ offset: braceStart, length: m[1].length, text: ` ${[...specs, name].join(", ")} ` });
      }
      merged = true;
      break;
    }
    if (!merged) fresh.push(`import { ${name} } from ${quote}${from}${quote}${semi}`);
  }
  if (fresh.length === 0) return edits;

  let last: RegExpExecArray | undefined;
  IMPORT_RE.lastIndex = 0;
  for (let m = IMPORT_RE.exec(code); m; m = IMPORT_RE.exec(code)) last = m;
  // line up with the last import, or with the script's own indentation
  const pad = last ? (last[0].match(/^[ \t]*/)?.[0] ?? "") : indent ? (code.match(/\n([ \t]+)\S/)?.[1] ?? "  ") : "";
  if (last) {
    const at = start + last.index + last[0].length;
    edits.push({ offset: at, length: 0, text: fresh.map((l) => `\n${pad}${l}`).join("") });
  } else if (indent) {
    // inside a <script> block: right after the opening tag
    edits.push({ offset: start, length: 0, text: fresh.map((l) => `\n${pad}${l}`).join("") });
  } else {
    // top of the file, after any "use client" style directives and leading comments
    const head = /^(?:\s*(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/|["']use [a-z]+["'];?))*\s*/.exec(code)?.[0] ?? "";
    const trimmed = head.replace(/\s*$/, "");
    if (trimmed) edits.push({ offset: start + trimmed.length, length: 0, text: fresh.map((l) => `\n${l}`).join("") });
    else edits.push({ offset: start, length: 0, text: `${fresh.join("\n")}\n` });
  }
  return edits;
}

/** applies edits (non-overlapping, against the original text) and returns the new text */
export function applyEdits(text: string, edits: TextEdit[]): string {
  return [...edits]
    .sort((a, b) => b.offset - a.offset)
    .reduce((t, e) => t.slice(0, e.offset) + e.text + t.slice(e.offset + e.length), text);
}
