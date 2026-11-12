---
"@kineticons/core": minor
---

Each moving part now carries an icon-specific class (`ki-bell__clapper`) and the motion CSS targets it instead of `[data-p]`. Browsers file class selectors by name, so a part is only tested against its own icon's rules: a page with every icon's CSS loaded restyles in milliseconds instead of seconds.
