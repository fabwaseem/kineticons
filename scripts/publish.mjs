// Publishes every package whose version is not on npm yet, core first. Run after `pnpm build`.
// `pnpm pack` turns workspace:^ ranges into real versions; `npm publish` then signs in with the
// GitHub Actions identity (npm trusted publishing) and adds provenance.
// In GitHub Actions it then tags each release (`kineticons@0.2.0`, `v0.2.0`), pushes the tags and opens a
// GitHub release for the version, its notes taken from the React package's changelog.
//   node scripts/publish.mjs [--dry-run]
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORDER = ["core", "react", "vue", "svelte", "static"];
const win = process.platform === "win32";
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: ["ignore", "pipe", "inherit"], shell: win }).toString().trim();
const dryRun = process.argv.includes("--dry-run");
const inCI = !!process.env.GITHUB_ACTIONS;

const onNpm = (name, version) => {
  try {
    return run("npm", ["view", `${name}@${version}`, "version"]) === version;
  } catch {
    return false; // not published at all yet
  }
};

const published = [];
for (const dir of ORDER) {
  const cwd = join("packages", dir);
  const { name, version, private: isPrivate } = JSON.parse(readFileSync(join(cwd, "package.json"), "utf8"));
  if (isPrivate) continue;
  if (onNpm(name, version)) {
    console.log(`${name}@${version} is already on npm`);
    continue;
  }
  const out = mkdtempSync(join(tmpdir(), "ki-pack-"));
  run("pnpm", ["pack", "--pack-destination", out], cwd);
  const tarball = join(out, readdirSync(out).find((f) => f.endsWith(".tgz")));
  console.log(`publishing ${name}@${version}${dryRun ? " (dry run)" : ""}`);
  const res = spawnSync("npm", ["publish", tarball, "--access", "public", ...(dryRun ? ["--dry-run"] : [])], { encoding: "utf8", shell: win });
  process.stdout.write(res.stdout ?? "");
  process.stderr.write(res.stderr ?? "");
  if (res.status !== 0) {
    // a version npm is still reviewing ("staged") is not visible to `npm view` yet, but it is published
    if (/previously published|cannot publish over/i.test(`${res.stdout}${res.stderr}`)) {
      console.log(`${name}@${version} was already published (awaiting npm's release)`);
      continue;
    }
    process.exit(res.status ?? 1);
  }
  published.push({ name, version });
}

if (!published.length) {
  console.log("nothing to publish");
  process.exit(0);
}
for (const p of published) console.log(`New tag: ${p.name}@${p.version}`);
if (dryRun || !inCI) process.exit(0);

// tags, then one GitHub release for the version (all packages share it)
const version = published[0].version;
const tag = `v${version}`;
for (const p of published) run("git", ["tag", `${p.name}@${p.version}`]);
run("git", ["tag", tag]);
run("git", ["push", "origin", "--tags"]);

let notes = "";
try {
  const log = readFileSync(join("packages", "react", "CHANGELOG.md"), "utf8");
  const section = log.split(/^## /m).find((s) => s.startsWith(`${version}\n`)) ?? "";
  notes = section.slice(section.indexOf("\n") + 1).trim();
} catch {
  // no changelog yet
}
notes = [
  notes || `Kineticons ${version}.`,
  "",
  `**Packages:** ${published.map((p) => `\`${p.name}@${p.version}\``).join(", ")}`,
  "",
  "Install with `npm install kineticons` (React), `@kineticons/vue`, `@kineticons/svelte` or `@kineticons/static`. Browse every icon at https://kineticons.fabwaseem.com",
].join("\n");
const notesFile = join(mkdtempSync(join(tmpdir(), "ki-notes-")), "notes.md");
writeFileSync(notesFile, notes);
execFileSync("gh", ["release", "create", tag, "--title", tag, "--notes-file", notesFile], { stdio: "inherit" });
