---
"kineticons": minor
---

`css={false}` leaves an icon's CSS out, for pages that load every icon's motion at once from `@kineticons/static/kineticons.css`. Hundreds of icons each adding a stylesheet slow a page down; one stylesheet does not.
