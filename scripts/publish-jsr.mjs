// Publishes @kineticons/core to JSR (jsr.io) when its version is not there yet. The version comes from
// packages/core/package.json and is written into jsr.json first, so the two never drift.
// In GitHub Actions, JSR signs in with the workflow's identity once the package on jsr.io is linked to this repository.
//   node scripts/publish-jsr.mjs [--dry-run]
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join("packages", "core");
const { version } = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
const jsrPath = join(dir, "jsr.json");
const jsr = JSON.parse(readFileSync(jsrPath, "utf8"));
const dryRun = process.argv.includes("--dry-run");

const res = await fetch(`https://jsr.io/${jsr.name}/meta.json`, { headers: { accept: "application/json" } });
const versions = res.ok ? Object.keys((await res.json()).versions ?? {}) : [];
if (versions.includes(version)) {
  console.log(`${jsr.name}@${version} is already on JSR`);
  process.exit(0);
}

if (jsr.version !== version) writeFileSync(jsrPath, JSON.stringify({ ...jsr, version }, null, 2) + "\n");
console.log(`publishing ${jsr.name}@${version} to JSR${dryRun ? " (dry run)" : ""}`);
execFileSync("npx", ["-y", "jsr", "publish", "--allow-dirty", ...(dryRun ? ["--dry-run"] : [])], {
  cwd: dir,
  stdio: "inherit",
  shell: process.platform === "win32",
});
