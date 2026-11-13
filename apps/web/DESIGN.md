# Kineticons site, v2: design system

The site for an icon library whose point is motion. Version 2 borrows a structure, not a look: big rounded colour
panels stacked down the page, each one a live demo; a serif display set against a plain sans, with italic for the
second half of a phrase; a floating pill navigation; sections that pin and play as you scroll. The colours, type and
drawing are Kineticons' own: signal orange, ink with a plum cast, lilac, warm paper.

Every section must let the visitor do something to an icon (point, scroll, pick, type). If a section only shows text,
it does not belong.

## Colour

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#f7f5f0` | `#0f0d12` | page background; paper panels |
| `--paper-2` | `#efece5` | `#17141b` | raised areas on paper: inputs, tiles |
| `--card` | `#ffffff` | `#1d1922` | cards, menus, the nav pill |
| `--ink` | `#15121a` | `#f4f2f7` | text, primary buttons |
| `--ink-2` | `#3a3540` | `#d6d2dc` | secondary text |
| `--muted` | `#6c6672` | `#a39dab` | supporting text (4.6:1 on paper) |
| `--faint` | `#9a94a0` | `#6f6977` | captions, placeholders; never body text |
| `--line` | `rgba(21,18,26,.09)` | `rgba(255,255,255,.08)` | borders, dividers |
| `--orange` | `#ff5a2d` | `#ff6b3d` | the one accent: calls to action, active icons, the orange panel |
| `--orange-ink` | `#c93c12` | `#ff9c5e` | orange text on paper (4.6:1) |
| `--lilac` | `#e6defc` | `#2a2340` | the lilac panel |
| `--plum` | `#15111c` | `#1c1724` | the ink panels (always dark, in both themes) |

Panels keep their colour in both themes; only paper and its text change. On the orange panel text is `#1a0f0a`
(10:1); on plum, `#f4f2f7`. Success `#16a34a`, error `#dc2626`, only in forms and copy feedback.

## Typography

- **Display:** Instrument Serif (400, roman and italic). Headlines and big numbers only. A headline's second clause is
  italic ("Icons that move, *like they mean it*"), never one lone word.
- **Text:** Geist (400, 500, 600). Everything else.
- **Code:** Geist Mono (400).

| Step | Size / line height | Use |
|---|---|---|
| `display-xl` | clamp(64px, 10vw, 148px) / 0.92 | the hero headline |
| `display-l` | clamp(48px, 7vw, 104px) / 0.95 | panel headlines |
| `display-m` | clamp(36px, 4.6vw, 64px) / 1.0 | section headlines on paper |
| `title` | 24px / 1.2, Geist 600 | card and step titles |
| `lead` | 19px / 1.55 | the line under a headline |
| `body` | 16px / 1.6 | text, max 68 characters a line |
| `small` | 14px / 1.5 | labels, captions, controls |
| `micro` | 12-13px / 1.4 | metadata, kbd, tags |

Interface text uses whole pixels only: 11, 12, 13, 14, 15, 16, 17, 18 (no 12.5 or 13.5).

No all-caps labels and no eyebrows above display headlines. Small group headings (sidebar groups, "On this page",
"Category") are 13px Geist 500 in `--faint`: `eyebrow` in `components/ui/controls.ts`.

## Spacing and layout

- 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content width 1240px; text columns 640px.
- Panels sit 12px in from the viewport (8px on phones), radius `--r-panel`, and overlap the one above by 48px so
  each slides over the last. Section padding 128px top and bottom (80px on phones).

## Shape and depth

- Radius, as Tailwind utilities: `rounded-xs` 6px (kbd), `rounded-tile` 14px (grid cells, palette rows, small
  icon tiles), `rounded-card` 20px (code, tables, notices, neighbour links, the customize card), `rounded-box` 28px
  (big cards, sidebars, the details panel, drawers, menus, dialogs), `--r-panel` 56px (panels; 32px on phones).
  Every control is a full pill: buttons, icon buttons, fields, chips, tags, segmented switches, sidebar items.
  No other radius values.
- Shadows: `--shadow-float` (the nav, menus: `0 10px 30px -12px rgba(21,18,26,.25)`) and `--shadow-lift` (a card being
  pointed at). Nothing else casts a shadow.

## Motion

- The icons' own motion is the star; the site's motion frames it. Interface: 180ms for colour, 320ms for movement,
  `cubic-bezier(.22,1,.36,1)`; things that arrive overshoot a little with `cubic-bezier(.34,1.56,.64,1)`.
- Scroll drives the storytelling sections (progress read once per frame); nothing animates while off screen.
- `prefers-reduced-motion`: panels do not pin or slide, demos show their end state, icons stay still.

## Components

- **Nav:** a floating pill (card colour, 1px line, float shadow) centred at the top: the K mark and name, a
  segmented Icons / Docs switch, GitHub, and an orange "Browse icons" pill. Collapses to mark, search and menu on phones.
- **Controls live in `components/ui/controls.ts`** as class recipes, used by server and client components alike;
  never restyle a control inline.
  - `btn(variant, size)`: `accent` (orange, dark text: the one loud action on a screen), `primary` (ink),
    `secondary` (card with a line), `ghost` (toolbars), `soft` (small utilities). Sizes 36 / 40 / 48px.
  - `iconBtn(on)`: a round icon-only button (32 / 36 / 40px); `on` for a pressed toggle (orange tint).
  - `chip(on)`: one of several choices shown side by side; the chosen one is ink.
  - `tag()`: a search word or small label. `field()`: a pill text field frame. `navItem(on)`: sidebar rows.
  - Focus is a 2px orange ring offset 2px everywhere; disabled at 50% opacity.
- **Inputs:** pill search fields with the search icon, a kbd hint, and results in a card below.
- **Sidebars** (icon browser, docs): a `rounded-box` card in `--surface-2`, sticky under the nav, with `navItem` rows;
  the chosen row is a white pill. The icon browser runs the full width of the window.
- **Cards and tiles:** `--card` with a line; tiles on panels use the panel's colour mixed 8% with white or black.
- **Footer:** a plum panel.

## Icons and imagery

Only Kineticons, drawn by the library itself. No photos, no stock illustrations, no brand logos: frameworks and tools
are named in text. The K mark is the only logo.
