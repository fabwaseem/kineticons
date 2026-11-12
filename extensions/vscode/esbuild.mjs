// Bundles the extension into dist/extension.js (vscode is provided by the editor).
// With --test, bundles the unit tests into out/ instead.
import { build } from "esbuild";

const test = process.argv.includes("--test");

await build({
  entryPoints: test ? { "snippets.test": "test/snippets.test.ts" } : { extension: "src/extension.ts" },
  outdir: test ? "out" : "dist",
  outExtension: test ? { ".js": ".cjs" } : undefined,
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node18",
  external: ["vscode"],
  minify: !test,
  sourcemap: false,
  logLevel: "info",
});
