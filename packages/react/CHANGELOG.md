# kineticons

## 0.4.0

### Minor Changes

- [`963c321`](https://github.com/fabwaseem/kineticons/commit/963c321cf8ca6defc234f0424031960ed9f4fc02) Thanks [@fabwaseem](https://github.com/fabwaseem)! - Tech logos are a brand category of their own. The signal and Wi-Fi strength icons (`signal-zero`, `signal-low`, `signal-medium`, `signal-high`, `wifi-zero`, `wifi-low`, `wifi-high`) now draw their missing bars and arcs as dotted tracks, so each keeps the full shape at its real size instead of shrinking to a dot in a corner; the two "zero" icons blink their empty tracks in turn, as if searching.

### Patch Changes

- Updated dependencies [[`963c321`](https://github.com/fabwaseem/kineticons/commit/963c321cf8ca6defc234f0424031960ed9f4fc02)]:
  - @kineticons/core@0.4.0

## 0.3.0

### Minor Changes

- [`41cddec`](https://github.com/fabwaseem/kineticons/commit/41cddec322489380db2416e34c4f2ce6bd8c462c) Thanks [@fabwaseem](https://github.com/fabwaseem)! - `css={false}` leaves an icon's CSS out, for pages that load every icon's motion at once from `@kineticons/static/kineticons.css`. Hundreds of icons each adding a stylesheet slow a page down; one stylesheet does not.

### Patch Changes

- Updated dependencies [[`41cddec`](https://github.com/fabwaseem/kineticons/commit/41cddec322489380db2416e34c4f2ce6bd8c462c)]:
  - @kineticons/core@0.3.0

## 0.2.0

### Patch Changes

- Updated dependencies []:
  - @kineticons/core@0.2.0
