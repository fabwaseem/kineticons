# Kineticons site, v3 "Spotlight": design system

The site for an icon library whose point is motion. Version 3 takes the calm polish of product sites like Linear and
Raycast, puts search and the grid first like Lucide, and gives every icon a stage like Lordicon: big previews, a play
button, style thumbnails. Fewer boxes and rules: surfaces are soft tiles with space between them. One accent, an
orange-to-pink gradient, kept for the one thing on a screen that should catch the eye.

Every section must let the visitor do something to an icon (point, pick, play, copy). If a section only shows text,
it does not belong.

## Colour

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` (`--paper`) | `#ffffff` | `#09090b` | page background |
| `--surface` | `#f5f5f7` | `#131316` | soft tiles, fields, cards, panels |
| `--surface-2` | `#f0f0f3` | `#18181c` | a tile being pointed at, a selected tile |
| `--surface-3` | `#e9e9ee` | `#1f1f24` | tracks, kbd, quiet fills inside tiles |
| `--card` | `#ffffff` | `#141417` | menus, popovers, drawers, dialogs |
| `--ink` | `#0b0b0d` | `#f4f4f6` | text, primary buttons |
| `--ink-2` | `#3b3b43` | `#cdcdd4` | secondary text |
| `--muted` | `#6b6b74` | `#8f8f98` | supporting text |
| `--faint` | `#9d9da6` | `#5f5f68` | captions, placeholders; never body text |
| `--line` | `rgba(11,11,13,.07)` | `rgba(255,255,255,.07)` | hairlines: the nav once scrolled, panel dividers |
| `--accent` (`--orange`) | `#ff5a1f` | `#ff6a2b` | gradient start, focus ring, the selected icon's ring |
| `--accent-2` (`--pink`) | `#f0245a` | `#ff2e63` | gradient end |
| `--accent-ink` | `#d9410e` | `#ff8a5c` | orange text (links in docs) |
| `--glow` | 32% orange | 50% orange | the soft light behind the hero key, stages and the closing |

The gradient (`linear-gradient(150deg, accent, accent-2)`) appears on: the hero key, one showcase tile, the logo, the
doc page's icon, the `accent` button, the slider fill. Nowhere else. `.tone-orange` is a gradient surface with white
text; `.night` keeps a section dark in both themes. Success `#16a34a`, error `#dc2626`, only in forms and feedback.

## Typography

- **Display:** Inter Tight 600, tight tracking (-0.05em for `display`, -0.035em for `heading`). Headlines only. In a
  `display` headline an `<em>` is the gradient ("Icons with a *pulse*."); in a `heading` it is muted grey
  ("Drop it in. *It moves.*"). Never italic.
- **Text:** Inter (400, 500, 600). Everything else.
- **Code:** Geist Mono (400).

| Step | Size / line height | Use |
|---|---|---|
| `display` | clamp(48px, 8.6vw, 96px) / 0.98 | the hero headline, the closing line |
| `heading` | clamp(34px, 4.6vw, 52px) / 1.06 | section headlines |
| page title | clamp(40px, 5vw, 60px) | doc and icon page titles (`display`) |
| `lead` | 16-18px / 1.6 | the line under a headline, in `--muted` |
| `body` | 15-16px / 1.65 | text, max 68 characters a line |
| `small` | 13-14px / 1.5 | labels, captions, controls |
| `micro` | 11-12px | metadata in mono, kbd, counts |

No all-caps labels and no eyebrows above display headlines.

## Spacing and layout

- 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content width 1200px; text columns 640px. Sections 112px apart (80px on phones), with no rules between them.
- Home is five calm sections: hero, showcase, the browser window, code, questions, then the closing line.

## Shape and depth

- Radius: `rounded-xs` 6px (kbd), `rounded-tile` 16px (grid tiles, small icon tiles), `rounded-card` 20px (code,
  tables, FAQ rows, stages), `rounded-box` 24px (menus, popovers, showcase tiles), 28px for big panels (the browser
  window, the details dock, drawers). Every control is a full pill.
- Depth comes from fills, not borders: a tile is `--surface` with `--edge` (a 1px top highlight and a hairline
  inset). Use the `tile` utility or `shadow-[var(--edge)]`. Borders are only for hairline dividers.
- Shadows: `--shadow-md` (code window), `--shadow-lg` (menus, popovers, the browser window). The glow is a radial
  gradient, never a box shadow on text.

## Motion

- The icons' own motion is the star; the site's motion frames it. Interface: 200ms for colour, 300ms for movement,
  `cubic-bezier(.22,1,.36,1)`; things that arrive overshoot a little with `cubic-bezier(.34,1.56,.64,1)`.
- One orchestrated entrance (the hero rises in). The hero key changes icon every 2.4s and plays it once; it stops
  while the tab is hidden or a popular name is pointed at.
- `prefers-reduced-motion`: no entrance, the key holds still, icons do not play.

## Components

- **Nav:** a full-width bar, clear over the page top and frosted with a hairline once scrolled. The K mark and name
  left, Icons / Docs / Figma as text links in the middle, then search (Ctrl K), GitHub, theme and a primary
  "Browse icons". The icon browser has its own bar with the search in the middle.
- **Controls live in `components/ui/controls.ts`** as class recipes; never restyle a control inline.
  - `btn(variant, size)`: `accent` (the gradient, white text: rare), `primary` (ink: the usual action),
    `secondary` (a soft tile), `ghost` (toolbars), `soft` (small utilities). Sizes 36 / 40 / 48px.
  - `chip(on)`: category and choice rows; plain text until chosen, then ink.
  - `iconBtn(on)`, `tag()`, `field()` (a soft pill), `navItem(on)` (docs sidebar rows).
  - Focus is a 2px orange ring offset 2px everywhere; disabled at 50% opacity.
- **Icon browser:** a sticky toolbar (title and count, style, order, a Customize button that opens a popover, or a
  sheet on phones), the categories as one row of chips, a grid of soft tiles, the details docked on the right.
- **Stages:** where one icon is shown big (the details, the home window, the icon page) it sits on the page colour
  with a faint orange glow behind it, with a play button.
- **Footer:** quiet link columns on the page colour under a hairline.

## Icons and imagery

Only Kineticons, drawn by the library itself. No photos, no stock illustrations, no brand logos: frameworks and tools
are named in text. The K mark is the only logo.
