// Writes the imported icons' parts (names, roles, paths): the reference for writing motions.
//   pnpm exec tsx scripts/motions/dump.ts       a.parts.txt … d.parts.txt, for the LIST in import-icons.ts
//   pnpm exec tsx scripts/motions/dump.ts e     e.parts.txt, for batch e (import it first: pnpm import-icons e)
import { writeFileSync } from "node:fs";
import type { IconDef } from "../../packages/core/src/types";

const show = (i: IconDef) => {
  const parts = i.parts
    .map((p) => `    ${p.p}${p.area ? " (fill area)" : ""} ${p.role ?? "line"}${p.knock ? " knock" : ""}: ${p.area ?? p.d}`)
    .join("\n");
  return `${i.name} — "${i.title}" (now: ${JSON.stringify(i.motion)})\n${parts}`;
};

const only = process.argv[2];
if (only) {
  const icons = Object.values((await import(`../../packages/core/src/icons/batch-${only}.ts`)) as Record<string, IconDef>);
  writeFileSync(`${import.meta.dirname}/${only}.parts.txt`, icons.map(show).join("\n\n") + "\n");
  console.log(only, icons.length);
} else {
  const icons = Object.values((await import("../../packages/core/src/icons/batch-a")) as Record<string, IconDef>);
  const per = Math.ceil(icons.length / 4);
  ["a", "b", "c", "d"].forEach((b, n) => {
    const slice = icons.slice(n * per, (n + 1) * per);
    writeFileSync(`${import.meta.dirname}/${b}.parts.txt`, slice.map(show).join("\n\n") + "\n");
    console.log(b, slice.length);
  });
}
