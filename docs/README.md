# Kineticons: working notes

For whoever works on the project next: how it is put together, how icons are made, how the packages and the site are
built and released. The public introduction is the top-level `README.md`; contributor steps are in `CONTRIBUTING.md`.

## Layout

```
packages/core       @kineticons/core: icon data, the renderer and the motion CSS (no framework)
  src/types.ts        IconDef, Part, PartMotion, Variant, Trigger, Category
  src/render.ts       render(def, options) -> SvgNode tree; stringify(node) -> markup
  src/motion.ts       TOKENS, baseCss(), iconCss(def), stylesheet(defs)
  src/svg.ts          toSvg / toHtml
  src/dom.ts          injectStyles(def) (browsers), stylesFor(def)
  src/presets.ts      generic motions, a fallback for icons with no motion of their own
  src/icons/*.ts      hand-drawn icons (app, actions, media, window) and generated batches (batch-*.ts)
  src/all-icons.ts    every icon by name, and ICONS ("@kineticons/core/icons")
packages/react      kineticons: KineticIcon, createIcon, one component per icon (src/icons.ts, generated)
packages/vue        @kineticons/vue: the same for Vue 3
packages/svelte     @kineticons/svelte: Icon.svelte (renders the node tree), icon data re-exported
packages/static     @kineticons/static: svg/<style>/<name>.svg, kineticons.css, icons.json (all generated)
apps/web            the website: Next.js App Router, static export, Tailwind v4
scripts/
  import-icons.ts     turns source shapes (scripts/source/shapes.json) plus a batch's list into icons/batch-*.ts
  motions/            a.ts-d.ts: motions for the LIST in import-icons.ts; e.ts-w.ts: batches (list, motions, fills)
  motions/check.ts    every motion valid; with no argument, also draws every icon in every style
  motions/gaps.ts     badges that sit too close to a filled shape
  build-packages.ts   writes the per-icon component modules and the site's icon counts
  build-static.ts     writes @kineticons/static
  sheet.tsx           dist/sheet.html: every icon in all three styles, to check by eye
```

## One drawing, three styles

Each icon is a list of parts with a role: `body` (closed; outline strokes it, duotone tints it, filled makes it
solid), `detail` (a line inside a body; filled cuts it out) or `line` (an open stroke). A body may carry an `area`
(the closed shape to fill when the stroke is open). A `knock` line crosses a body: cut out where inside, drawn where
outside. Icons with no bodies, or whose bodies are small (`tile: true`), become a solid rounded tile in filled with the
drawing cut out. Duotone gives line-only icons a soft wide halo instead.

`render()` is the single drawing routine; React, Vue, Svelte and the static files all call it.

## Motion

Motion is CSS, per icon: parts at rest, then one rule per icon for the active state (pointed at or focused, itself or a
`ki-trigger`/button/link/tab around it, or `data-active`), with each part's rule nested inside it. Tokens: in 460 ms
with a spring, out 260 ms smooth, parts 40-80 ms apart, movements of 1-2 units. Reduced motion turns it all off.
Keyframes are named after the icon (`ki-<name>-…`); `check.ts` enforces this and that no two icons share a keyframe.

How each framework gets the CSS onto the page:

- **React 19**: `<style href precedence>` beside the icon; React hoists it into the head and keeps one of each, on the
  server too, so icons work in Server Components. React 18: injected with `injectStyles`.
- **Vue, Svelte**: `injectStyles` when the icon is set up in the browser.
- **Static**: inside each SVG, or `kineticons.css` for many plain SVGs.

## Adding icons

See `CONTRIBUTING.md`. In short: a line in a batch's `list`, `pnpm import-icons <letter>`, `dump.ts <letter>` for the
parts, a motion in the batch's `motions`, then `pnpm check`. When a badge sits in a gap of an outline, the fill must
stay at least 2.75 units from the badge's centreline (`gaps.ts` measures it).

## The website

`apps/web` is a static export (`output: "export"`, folder-style URLs): every icon page, every docs page, the home page,
the sitemap and robots are written at build time.

- The icon browser loads the catalog from `/catalog.json` (a static route), so no page's JavaScript carries every icon.
- Icon pages render on the server with the React package: the library is its own demo.
- SEO: metadata and canonical URLs per page; JSON-LD for the site (WebSite with search, SoftwareSourceCode), each icon
  (ImageObject, BreadcrumbList), docs (TechArticle) and the FAQ; `sitemap.xml` lists every page.
- `scripts/fix-export.mjs` renames prefetch files that Next.js writes as folders when it builds on Windows.

`NEXT_PUBLIC_SITE_URL` sets the canonical address (default `https://kineticons.fabwaseem.com`).

## Deploying the site (Coolify)

The repository's `Dockerfile` builds the core and React packages, then the site, and serves `apps/web/out` with nginx
(`deploy/nginx.conf`: clean URLs, long caching for hashed files, gzip, the 404 page). In Coolify: a new resource from
this repository, build pack "Dockerfile", port 80, domain `kineticons.fabwaseem.com`.

## Releasing the packages

All packages share one version (Changesets, `fixed`). Describe changes with `pnpm changeset`; on `main` the release
workflow opens a "Version packages" pull request, and merging it publishes to npm with provenance (it needs the
`NPM_TOKEN` secret). To publish by hand: `npm login`, then `pnpm release`.

Before a release: `pnpm check`, `pnpm build`, `pnpm lint:packages` (publint and Are The Types Wrong).
