// Publishes every package whose version is not on npm yet, core first. Run after `pnpm build`.
// `pnpm pack` turns workspace:^ ranges into real versions; `npm publish` then signs in with the
// GitHub Actions identity (npm trusted publishing) and adds provenance. Prints changesets-style
// "New tag" lines and tags each release in git.
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ORDER = ["core", "react", "vue", "svelte", "static"];
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, stdio: ["ignore", "pipe", "inherit"], shell: process.platform === "win32" }).toString().trim();

const onNpm = (name, version) => {
  try {
    return run("npm", ["view", `${name}@${version}`, "version"]) === version;
  } catch {
    return false; // not published at all yet
  }
};

const dryRun = process.argv.includes("--dry-run");
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
  const res = spawnSync("npm", ["publish", tarball, "--access", "public", ...(dryRun ? ["--dry-run"] : [])], { encoding: "utf8", shell: process.platform === "win32" });
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
  published.push(`${name}@${version}`);
}

for (const tag of published) {
  console.log(`New tag: ${tag}`);
  if (!dryRun) run("git", ["tag", tag]);
}
if (!published.length) console.log("nothing to publish");
