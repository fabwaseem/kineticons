// Writes packages/core/src/icons/brands.ts: the tech stack logos a developer needs (the developer groups of
// scripts/brands/list.ts, then every developer logo in dev.ts), as Kineticons icons. Each logo is fitted to the set's live area and drawn by the same
// renderer as every other icon, as a shape: outline traces its contour, duotone adds the soft tint, filled is solid,
// all with the set's round joins. Logos too intricate to trace cleanly come filled only, drawn exactly. Each keeps its
// brand colour and gets the motion of its group. The drawings come from the simple-icons package (CC0); brand names
// and logos remain trademarks of their owners.
// pnpm exec tsx scripts/brands/build.ts
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import * as si from "simple-icons";
import svgpath from "svgpath";
import { readFileSync } from "node:fs";
import { DEV_SLUGS, DEV_TAGS } from "./dev";
import { filledIn } from "./shape";
import { GROUPS, type Motion } from "./list";

/** only the developer's tech stack: tools, languages, frameworks, data, AI and design tools (no social, shops, media) */
const STACK = new Set(["dev", "language", "framework", "data", "ai", "design"]);
const OUT = join(import.meta.dirname, "..", "..", "packages", "core", "src", "icons", "brands.ts");

type SI = { title: string; slug: string; path: string; hex: string };
const bySlug = new Map<string, SI>();
for (const v of Object.values(si) as unknown[]) {
  const i = v as SI;
  if (i && typeof i === "object" && "slug" in i && "path" in i) bySlug.set(i.slug, i);
}

/** Every logo moves the same way: it redraws itself along its own outline (the shared keyframes in the base CSS). */
const MOTION_NOTE = "The logo redraws itself: its outline traces along its path, or the logo is revealed across.";
const MOTION = { logo: { animation: "var(--ki-redraw) 1.15s cubic-bezier(.65,0,.35,1) both" } };
/** a logo of many separate pieces traces in scattered bits: it is revealed across instead, in every style */
const REVEAL = { logo: { animation: "ki-redraw-fill 1.15s cubic-bezier(.65,0,.35,1) both" } };

// names may not start with a digit (they become export names)
// and a few titles read badly once their symbols go (".NET", "F#")
const NUMERAL: Record<string, string> = {
  "500px": "fivehundredpx", "1password": "onepassword", "3m": "threem", "1panel": "onepanel", "1dot1dot1dot1": "cloudflare-one-one-one-one",
  "2fas": "twofas", "30secondsofcode": "thirty-seconds-of-code", "7zip": "seven-zip", dotnet: "dotnet", fsharp: "fsharp", cplusplus: "cpp",
};
const slugify = (title: string, slug: string) =>
  (NUMERAL[slug] ??
    title
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\+/g, " plus ")
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/\.(?=[a-z])/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")).replace(/^(\d)/, "n$1");
/** the logo scaled about the centre into the set's live area (19 of 24 units, the same optical size as the icons) */
const fit = (d: string) => svgpath(d).translate(-12, -12).scale(19 / 24).translate(12, 12).round(2).toString();
const weights: Record<string, number> = {};
/** shape measurements from metrics.ts (run it first) */
const METRICS = JSON.parse(readFileSync(join(import.meta.dirname, "metrics.json"), "utf8")) as Record<string, { aspect: number; shapes: number; density: number; thin: Record<string, number> }>;
const kinds: Record<string, number> = {};
const dropped: string[] = [];
const imperfect: string[] = [];
const review: Record<string, string> = {};
/** medium logos checked on the contact sheets: traced at 1.0 they come out clean */
const MEDIUM_TRACE = new Set("alwaysdata antv apachespark bentoml cinnamon codecov denodeploy docsdotrs etsy fdroid flydotio forgejo graphite hackmd hasura headlessui hedgedoc lastpass lucia macports mailtrap metasploit microbit nixos nuxt openid ory overleaf paddle platformio pnpm searxng sketch snapcraft tesla theodinproject wakatime webmin hyper twitch localsend jupyter openbao gitbook".split(" "));
/** medium logos made of bands would turn to double lines traced, and read as solid shapes drawn as line art: none kept */
const MEDIUM_LINE = new Set<string>([]);
/** looked at on the contact sheets and left out: they do not draw cleanly in every style */
const IMPERFECT = new Set<string>("actix alternativeto almalinux apacheparquet apachepdfbox apachekylin apachetomcat asterisk backstage battledotnet bower buymeacoffee caprover chef cloudfoundry cockpit codechef codemirror codeproject cocos dapr formik githubcopilot gogdotcom gdal grunt harbor harmonyos helm elastic makerbot mailgun materialdesign mysql ohdear onepanel orchardcore owaspdependencycheck mercadopago notebooklm opensearch owasp paperspace phabricator phoenixframework probot quasar raylib rocketdotchat rocksdb scrapy scylladb prosemirror pm2 rubygems shell sfml socketdotio starbucks testinglibrary timescale ubereats ubisoft upstash tauri travisci vitepress sst sourceforge odin linuxmint akamai algolia antdesign alphaxiv apachearrow arangodb autoit autohotkey axios babel bit codesignal commonworkflowlanguage dailymotion dell eclipsejetty express getx gitignoredotio goodreads cloudflareworkers opensourceinitiative readthedocs semver slint svg udacity wikidotjs yaml yunohost zod textual vuetify virustotal web3dotjs yandexcloud pytorch pipx looker mobxstatetree 1panel dependencycheck imdb jfrog jss htop honeybadger apifox".split(" "));


/** checked one by one on the review sheets (review.ts), by icon name: too intricate to draw cleanly in every style
 * and motion at icon size */
const CUT = new Set("asahi-linux avajs boost apache-nifi canonical chainguard chocolatey c-plus-plus-builder chrome-web-store circuitverse cloudcannon chromatic codebuddy codenewbie code-blocks codewars compiler-explorer contao coolify cytoscapejs dbeaver docusaurus devbox directus enterprisedb emberjs etcd excalidraw ferretdb ffmpeg filezilla fluent-bit git-for-windows glitch gitea godot-engine google-cloud-composer google-cloud-spanner google-cloud-storage google-fonts google-search-console google-dataflow grav graylog h3 hermes hedgedoc html-academy inkscape interbase jasmine jinja joomla kde knime krita kubespray laragon lets-encrypt lighthouse linkerd livewire lua mamp maptiler mdbook meta-ai mikrotik micropython mingw-w64 mobx modelscope multisim node-red normalizecss nsis ocaml openzfs openscad pandas parrot-security pi-hole pinia plotly poe pop-os prettier primefaces primeng primevue protractor pulumi pypy qemu quarkus r ratatui redwoodjs redmine risc-v rubocop rxdb scipy seafile scaleway sequelize server-fault sidekiq spacemacs spidermonkey spyder-ide stackhawk standardjs stimulus stylelint subversion swarm svgo tanstack testrail the-odin-project tiddlywiki tower turso turbo uml v8 vaadin virtualbox wayland wasmer wireguard wp-engine xampp zap webgpu webmin epel kali-linux mariadb hackerrank rad-studio nunjucks luau quicktype".split(" "));
/** busy but needed: traced at the lighter 1.0, which leaves room inside their small parts */
const THIN = new Set("docker kubernetes sass ruby yarn cloudflare firefox-browser webpack symfony nestjs prometheus preact zig cpp numpy unity selenium".split(" "));

const camel = (name: string) => name.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());

const seen = new Set<string>();
const names = new Set<string>();
const missing = new Set<string>();
const out: string[] = [];

/** adds one logo; false when it is not in simple-icons or already in */
async function add(g: (typeof GROUPS)[number], slug: string): Promise<boolean> {
  if (seen.has(slug)) return false;
  const icon = bySlug.get(slug);
  if (!icon) return (missing.add(slug), false);
  let name = `${slugify(icon.title, slug)}-logo`;
  if (names.has(name)) name = `${slugify(slug, slug)}-logo`;
  if (names.has(name)) return false;
  seen.add(slug);
  names.add(name);
  const m = METRICS[slug];
  const short = name.replace(/-logo$/, "");
  if (CUT.has(short) && !process.env.REVIEW) {
    names.delete(name);
    seen.delete(slug);
    return (imperfect.push(slug), false);
  }
  // a wordmark much wider than tall is unreadable at icon size in any style: left out
  if (m.aspect >= 3.2) return (dropped.push(slug), false);
  const d = fit(icon.path);
  // three kinds of logo, each drawn the way the set draws such shapes:
  // - solid (bold shapes with little thinner than two units): outline traces the contour at the set's weight,
  //   duotone adds the soft fill, filled is the exact logo
  // - line art (made of lines: X, Instagram, Airbnb, React): outline is the logo's own lines, duotone fills the
  //   areas they enclose softly, filled cuts the logo out of a solid tile (as the set's own line icons do)
  // - wide (more than 1.5 times as wide as tall): a tile would shrink it too far, so the exact logo, with the soft
  //   fill in duotone
  // solid: almost nothing thinner than 1.6 units, and under a third thinner than 2.2 (wider bands, like Ceph's arcs,
  // are lines); the full weight when little is thinner than 2.2
  // medium: nothing much thinner than 1.2 units, but too many parts 1.6–2.2 units wide for the full weight: traced at
  // a lighter 1.0, which still leaves clear space inside parts that wide
  let w =
    m.thin["0.8"] < 0.15 && m.thin["1.1"] < 0.3
      ? m.thin["1.1"] < 0.15 ? 1.5 : 1.25
      : m.thin["0.6"] < 0.15 && m.thin["0.8"] < 0.5 && m.thin["1.1"] < 0.55
        ? 1
        : 0; // mostly bands (Algolia's rings, Ceph's arcs): tracing would make hollow double lines, so line art
  // the medium ones (traced at 1.0) were each looked at: clean traces stay, band logos become line art, the rest go
  if (THIN.has(short) && w >= 1) w = 1;
  const medium = w === 1 && !THIN.has(short);
  const asLine = medium && MEDIUM_LINE.has(slug);
  const kind = asLine ? "line" : w >= 1 ? "solid" : m.aspect > 1.5 ? "wide" : "line";
  // only logos that draw cleanly in all three styles are kept: a wide logo gets no real outline (all three would be
  // the same drawing); line art with large solid areas, or too many pieces, is an illustration rather than a mark;
  // and a few more were taken out by eye (IMPERFECT)
  const busy = m.shapes >= 30 || (m.shapes >= 12 && m.density < 0.25);
  const cut =
    kind === "wide" ||
    (medium && !asLine && !MEDIUM_TRACE.has(slug)) ||
    (kind === "line" && !asLine && (m.thin["1.1"] < 0.55 || busy)) ||
    IMPERFECT.has(slug);
  review[name] = cut ? `cut-${kind}` : asLine ? "medium-line" : medium ? "medium" : kind;
  // REVIEW=1 keeps every logo (for the contact sheets), noting which the rules would cut
  if (cut && !process.env.REVIEW) {
    names.delete(name);
    seen.delete(slug);
    return (imperfect.push(slug), false);
  }
  kinds[kind] = (kinds[kind] ?? 0) + 1;
  if (kind === "solid") weights[w] = (weights[w] ?? 0) + 1;
  const detail =
    kind === "solid"
      ? `  stroke: ${w},
  parts: [{ p: "logo", role: "body", exact: true, draw: true, d: ${JSON.stringify(d)} }],`
      : `${kind === "line" ? "  tile: true,\n" : ""}  parts: [{ p: "logo", solid: true, exact: true, d: ${JSON.stringify(d)}, tint: ${JSON.stringify(filledIn(d))} }],`;
  const words = icon.title.toLowerCase().split(/[^a-z0-9+#.]+/).filter((w) => w.length > 1);
  const tags = [...new Set([...words, slug, "logo", "brand", ...g.tags])];
  out.push(
    `export const ${camel(name)}: IconDef = {
  name: ${JSON.stringify(name)},
  title: ${JSON.stringify(icon.title)},
  category: "brands",
  tags: ${JSON.stringify(tags)},
  motionNote: ${JSON.stringify(MOTION_NOTE)},
  brandColor: ${JSON.stringify(`#${icon.hex}`)},
${detail}
  motion: ${JSON.stringify(m.shapes > 3 ? REVEAL : MOTION)},
};`,
  );
  return true;
}

// the developer groups in order, then every developer and tech logo not already in
for (const g of GROUPS) if (STACK.has(g.key)) for (const slug of g.slugs) await add(g, slug);
const top = out.length;
const dev = { key: "dev-all", motion: "lift" as Motion, tags: DEV_TAGS, slugs: DEV_SLUGS };
for (const slug of DEV_SLUGS) await add(dev, slug);
const count = out.length;

writeFileSync(
  OUT,
  `// Generated by scripts/brands/build.ts from scripts/brands/list.ts. Do not edit by hand.
// Brand logos (drawings from simple-icons, CC0). Brand names and logos are trademarks of their owners; use each
// one as its owner's brand guidelines allow.
import type { IconDef } from "../types";

${out.join("\n\n")}
`,
);
writeFileSync(join(import.meta.dirname, "review.json"), JSON.stringify(review));
console.log(`left out as not clean in every style (${imperfect.length}): ${imperfect.join(" ")}`);
console.log(`left out as unreadable wordmarks: ${dropped.join(" ")}`);
console.log(`${count} brand icons written (${top} from the stack groups, ${count - top} more developer logos; kinds ${JSON.stringify(kinds)}, solid weights ${JSON.stringify(weights)}); not in simple-icons: ${[...missing].join(", ") || "none"}`);
