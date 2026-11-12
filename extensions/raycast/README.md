# Kineticons

Search [Kineticons](https://kineticons.fabwaseem.com), 2,000+ open-source animated icons in outline, duotone and filled, and drop them straight into your code.

## Search Icons

Every icon in a grid, grouped by category. Search by name, title, category or tag, and switch the style from the dropdown next to the search bar. Hover an icon to read what it does when it moves.

| Action                                                   | Shortcut (macOS / Windows) |
| -------------------------------------------------------- | -------------------------- |
| Copy SVG, with its motion inside                         | `↵` / `Enter`              |
| Paste SVG into the frontmost app                         | `⌘ ↵` / `Ctrl Enter`       |
| Copy React JSX (`<Bell variant="duotone" />`)            | `⌘ J` / `Ctrl J`           |
| Copy React import (`import { Bell } from "kineticons";`) | `⌘ I` / `Ctrl I`           |
| Copy Vue snippet                                         | `⌘ U` / `Ctrl U`           |
| Copy Svelte snippet                                      | `⌘ ⇧ S` / `Ctrl Shift S`   |
| Copy name                                                | `⌘ ⇧ .` / `Ctrl Shift .`   |
| Open the icon's page                                     | `⌘ O` / `Ctrl O`           |

The copied SVG moves when it is pointed at, wherever you paste it inline. The code snippets use the npm packages:

- React: [`kineticons`](https://www.npmjs.com/package/kineticons)
- Vue: [`@kineticons/vue`](https://www.npmjs.com/package/@kineticons/vue)
- Svelte: [`@kineticons/svelte`](https://www.npmjs.com/package/@kineticons/svelte)
- Plain SVG and CSS: [`@kineticons/static`](https://www.npmjs.com/package/@kineticons/static)

The icons are bundled with the extension, so it works offline.

## Updating the icons

`assets/icons.json` is generated from the `@kineticons/static` package. After bumping that devDependency, run:

```bash
npm run sync-icons
```

## License

MIT. Kineticons is made by [Waseem Anjum](https://github.com/fabwaseem/kineticons).
