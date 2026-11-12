# Contributing to Kineticons

Thank you for helping. Icon requests, bug reports, new icons, better motions and docs fixes are all welcome.

## Before you start

- **A bug or an idea:** open an [issue](https://github.com/fabwaseem/kineticons/issues/new/choose) first.
- **A new icon:** use the "Icon request" template, so we can agree on the name and the motion before you draw.
- **Small fixes** (typos, docs, a motion that snaps): a pull request on its own is fine.

## Set up

You need Node 20 or newer and pnpm.

```bash
git clone https://github.com/fabwaseem/kineticons.git
cd kineticons
pnpm install
pnpm build      # the packages
pnpm dev        # the website, http://localhost:5190
```

## How an icon is made

Each icon is one drawing whose parts have roles, plus a motion of its own:

- a **body** is a closed shape (outline strokes it, duotone tints it, filled makes it solid);
- a **detail** is a line inside a body (filled cuts it out);
- a **line** is an open stroke (the same in every style).

Most icons live in batch files under `scripts/motions/` (`e.ts` … `w.ts`). Each batch lists its icons, gives every
icon its own motion, and adds fill shapes where an outline is drawn open. Hand-drawn icons live in
`packages/core/src/icons/`.

### Add an icon to a batch

1. Add a line to the batch's `list`:
   `["SourceName", "our-name", "Title", "category", "preset", ["search", "tags"], "What the motion shows."]`
2. `pnpm import-icons <letter>` builds that batch, then `pnpm exec tsx scripts/motions/dump.ts <letter>` writes its
   parts (names, roles, paths) to `<letter>.parts.txt`.
3. Write the icon's motion in the batch's `motions`, keyed by its name.

### The rule for motion

The drawing acts: parts move against each other around a real pivot, lines draw themselves, shapes morph. Never only
the whole icon. About 0.4 to 0.9 seconds, springy in and calm out, movements of one or two grid units, and nothing loops
unless it shows something ongoing. Name keyframes after the icon (`ki-<name>-…`).

### The filled style

When a badge (a plus, a lock, a clock) sits in a gap of an outline, its fill must stop at least 2.75 units from the
badge's centreline, so a gap stays visible once filled.

## Checks

```bash
pnpm check      # every motion, every icon drawn in every style, and badges that crowd a fill
pnpm build      # every package
```

Both must pass. Then look at your icon on its page (`/icons/<name>`) in all three styles, pointing at it and with
"Play on a loop".

## Pull requests

- Keep a pull request to one change.
- For a change to a published package, add a changeset: `pnpm changeset`.
- Describe what changed and how you checked it; add a screenshot or recording for visual changes.

By contributing you agree that your work is released under the [MIT licence](LICENSE).
