import { baseCss, iconCss } from "./motion";
import type { IconDef } from "./types";

const added = new Set<string>();

/**
 * Adds an icon's motion CSS to the page, once (the shared rules come with the first icon). Safe to call on every
 * render and on the server, where it does nothing. Framework packages call it for you.
 */
export function injectStyles(def: IconDef): void {
  if (typeof document === "undefined" || added.has(def.name)) return;
  let tag = document.getElementById("kineticons") as HTMLStyleElement | null;
  if (!tag) {
    tag = document.createElement("style");
    tag.id = "kineticons";
    tag.textContent = baseCss();
    document.head.appendChild(tag);
  }
  tag.appendChild(document.createTextNode("\n" + iconCss(def)));
  added.add(def.name);
}

/** The CSS one icon needs on a page that has none yet: the shared rules and its own. For server rendering. */
export const stylesFor = (def: IconDef): string => `${baseCss()}\n${iconCss(def)}`;
