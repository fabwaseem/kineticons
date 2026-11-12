import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/all-icons.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  target: "es2020",
  treeshake: true,
});
