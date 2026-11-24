# @kineticons/core

## 0.4.0

### Minor Changes

- [`963c321`](https://github.com/fabwaseem/kineticons/commit/963c321cf8ca6defc234f0424031960ed9f4fc02) Thanks [@fabwaseem](https://github.com/fabwaseem)! - Tech logos are a brand category of their own. The signal and Wi-Fi strength icons (`signal-zero`, `signal-low`, `signal-medium`, `signal-high`, `wifi-zero`, `wifi-low`, `wifi-high`) now draw their missing bars and arcs as dotted tracks, so each keeps the full shape at its real size instead of shrinking to a dot in a corner; the two "zero" icons blink their empty tracks in turn, as if searching.

## 0.3.0

### Minor Changes

- [`41cddec`](https://github.com/fabwaseem/kineticons/commit/41cddec322489380db2416e34c4f2ce6bd8c462c) Thanks [@fabwaseem](https://github.com/fabwaseem)! - Each moving part now carries an icon-specific class (`ki-bell__clapper`) and the motion CSS targets it instead of `[data-p]`. Browsers file class selectors by name, so a part is only tested against its own icon's rules: a page with every icon's CSS loaded restyles in milliseconds instead of seconds.

## 0.2.0

No changes in this release.
