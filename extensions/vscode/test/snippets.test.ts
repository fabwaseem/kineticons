import { test } from "node:test";
import assert from "node:assert/strict";
import { applyEdits, buildInsertion, componentName, svelteIconName } from "../src/snippets";

const SVG = '<svg data-icon="bell"></svg>';
const run = (lang: string, text: string, name = "bell", variant: "outline" | "duotone" | "filled" = "outline") => {
  const r = buildInsertion(lang, text, name, variant, SVG);
  return { ...r, out: applyEdits(text, r.edits) };
};

test("names follow the packages' exports", () => {
  assert.equal(componentName("bell"), "Bell");
  assert.equal(componentName("bell-ring"), "BellRing");
  assert.equal(componentName("axis-3d"), "Axis3d");
  assert.equal(componentName("arrow-down-1-0"), "ArrowDown10");
  assert.equal(svelteIconName("bell-ring"), "bellRing");
  assert.equal(svelteIconName("package"), "packageIcon");
  assert.equal(svelteIconName("import"), "importIcon");
});

test("react: adds an import to an empty file", () => {
  const r = run("typescriptreact", "");
  assert.equal(r.snippet, "<Bell />");
  assert.equal(r.out, 'import { Bell } from "kineticons";\n');
});

test("react: variant prop when not outline", () => {
  assert.equal(run("javascriptreact", "", "bell", "duotone").snippet, '<Bell variant="duotone" />');
  assert.equal(run("typescriptreact", "", "bell", "filled").snippet, '<Bell variant="filled" />');
});

test("react: merges into an existing kineticons import", () => {
  const r = run("typescriptreact", 'import { Heart } from "kineticons";\n\nexport const A = () => null;\n');
  assert.equal(r.out, 'import { Heart, Bell } from "kineticons";\n\nexport const A = () => null;\n');
});

test("react: merges into a multi-line import", () => {
  const src = 'import {\n  Heart,\n  Star\n} from "kineticons";\n';
  assert.equal(run("typescriptreact", src).out, 'import {\n  Heart,\n  Star,\n  Bell\n} from "kineticons";\n');
});

test("react: leaves an existing import alone", () => {
  const src = 'import { Bell, Heart } from "kineticons";\n';
  assert.deepEqual(run("typescriptreact", src).edits, []);
});

test("react: new import after the last import, keeping quote and semicolon style", () => {
  const src = "import React from 'react'\nimport { x } from './x'\n\nexport default 1\n";
  assert.equal(run("typescriptreact", src).out, "import React from 'react'\nimport { x } from './x'\nimport { Bell } from 'kineticons'\n\nexport default 1\n");
});

test("react: after a 'use client' directive", () => {
  const src = '"use client";\n\nexport default function A() {}\n';
  assert.equal(run("typescriptreact", src).out, '"use client";\nimport { Bell } from "kineticons";\n\nexport default function A() {}\n');
});

test("react: does not merge into a type-only import", () => {
  const src = 'import type { IconProps } from "kineticons";\n';
  assert.equal(run("typescriptreact", src).out, 'import type { IconProps } from "kineticons";\nimport { Bell } from "kineticons";\n');
});

test("vue: imports into <script setup>", () => {
  const src = '<script setup lang="ts">\nimport { ref } from "vue";\n</script>\n\n<template>\n</template>\n';
  const r = run("vue", src, "bell-ring", "duotone");
  assert.equal(r.snippet, '<BellRing variant="duotone" />');
  assert.equal(r.out, '<script setup lang="ts">\nimport { ref } from "vue";\nimport { BellRing } from "@kineticons/vue";\n</script>\n\n<template>\n</template>\n');
});

test("vue: merges into an existing @kineticons/vue import", () => {
  const src = '<script setup>\nimport { Heart } from "@kineticons/vue";\n</script>\n';
  assert.equal(run("vue", src).out, '<script setup>\nimport { Heart, Bell } from "@kineticons/vue";\n</script>\n');
});

test("vue: adds <script setup> when there is no script", () => {
  const r = run("vue", "<template>\n</template>\n");
  assert.equal(r.out, '<script setup lang="ts">\nimport { Bell } from "@kineticons/vue";\n</script>\n\n<template>\n</template>\n');
});

test("vue: options-API script gets a note, not an edit", () => {
  const r = run("vue", "<script>\nexport default {}\n</script>\n");
  assert.deepEqual(r.edits, []);
  assert.match(r.note ?? "", /import \{ Bell \} from "@kineticons\/vue"/);
});

test("svelte: Icon plus the icon data, into the instance script", () => {
  const src = '<script context="module">\nexport const x = 1;\n</script>\n<script lang="ts">\n  let a = 1;\n</script>\n';
  const r = run("svelte", src, "package", "filled");
  assert.equal(r.snippet, '<Icon icon={packageIcon} variant="filled" />');
  assert.equal(
    r.out,
    '<script context="module">\nexport const x = 1;\n</script>\n<script lang="ts">\n  import { Icon } from "@kineticons/svelte";\n  import { packageIcon } from "@kineticons/svelte/icons";\n  let a = 1;\n</script>\n',
  );
});

test("svelte: merges into existing imports", () => {
  const src = '<script>\n  import { Icon } from "@kineticons/svelte";\n  import { heart } from "@kineticons/svelte/icons";\n</script>\n';
  assert.equal(run("svelte", src).out, '<script>\n  import { Icon } from "@kineticons/svelte";\n  import { heart, bell } from "@kineticons/svelte/icons";\n</script>\n');
});

test("svelte: adds a script when there is none", () => {
  assert.equal(
    run("svelte", "<h1>Hi</h1>\n").out,
    '<script lang="ts">\n  import { Icon } from "@kineticons/svelte";\n  import { bell } from "@kineticons/svelte/icons";\n</script>\n\n<h1>Hi</h1>\n',
  );
});

test("html and others: raw SVG, no imports", () => {
  for (const lang of ["html", "markdown", "plaintext", "typescript"]) {
    const r = run(lang, "<p></p>");
    assert.equal(r.snippet, SVG);
    assert.deepEqual(r.edits, []);
  }
});
