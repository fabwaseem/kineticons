import type { Category } from "@kineticons/core";
import { CATEGORY_COUNTS as COUNTS, ICON_COUNT as COUNT } from "./stats.generated";

/** The categories in the order the site lists them, with a line on what each holds. No icons are imported here, so
 * any page can use it without loading the catalog. */
export const CATEGORIES: { value: Category; label: string; blurb: string }[] = [
  { value: "app", label: "App", blurb: "Home, settings, accounts and the screens of an app" },
  { value: "actions", label: "Actions", blurb: "Add, copy, edit, delete and everything a button does" },
  { value: "navigation", label: "Navigation", blurb: "Arrows, chevrons, menus and panels" },
  { value: "status", label: "Status", blurb: "Alerts, checks, progress and states" },
  { value: "media", label: "Media", blurb: "Play, record, volume, music and video" },
  { value: "files", label: "Files", blurb: "Documents, folders and archives" },
  { value: "text", label: "Text", blurb: "Type, alignment, lists and formatting" },
  { value: "communication", label: "Communication", blurb: "Mail, messages, calls and sharing" },
  { value: "people", label: "People", blurb: "Users, groups, faces and hands" },
  { value: "devices", label: "Devices", blurb: "Phones, laptops, screens and hardware" },
  { value: "development", label: "Development", blurb: "Code, git, terminals and data" },
  { value: "charts", label: "Charts", blurb: "Bars, lines, pies and trends" },
  { value: "commerce", label: "Commerce", blurb: "Carts, cards, money and stores" },
  { value: "travel", label: "Travel", blurb: "Maps, places and getting around" },
  { value: "weather", label: "Weather", blurb: "Sun, cloud, rain and the sky at night" },
  { value: "nature", label: "Nature", blurb: "Plants, animals and the outdoors" },
  { value: "food", label: "Food", blurb: "Food, drink and the kitchen" },
  { value: "health", label: "Health", blurb: "Medicine, fitness and care" },
  { value: "shapes", label: "Shapes & math", blurb: "Shapes, symbols and math" },
  { value: "window", label: "Window", blurb: "Title-bar controls for desktop apps" },
];

export const categoryLabel = (c: string) => CATEGORIES.find((x) => x.value === c)?.label ?? c;

/** "2,084" */
export const fmt = (n: number) => n.toLocaleString("en-US");

export const ICON_COUNT: number = COUNT;
export const CATEGORY_COUNTS: Record<string, number> = COUNTS;
