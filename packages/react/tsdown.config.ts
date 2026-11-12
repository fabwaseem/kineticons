import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/data.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  target: "es2020",
  // one file per module, so "use client" stays on the loop component and bundlers can drop unused icons
  unbundle: true,
  external: [/^@kineticons\/core/, "react", "react-dom", "vue"],
});
