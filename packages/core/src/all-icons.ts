/** Every icon, by name (camelCase: bell, arrowRight, packageIcon), and ICONS, the whole set. */
import * as app from "./icons/app";
import * as actions from "./icons/actions";
import * as media from "./icons/media";
import * as win from "./icons/window";
import * as more from "./icons/batch-a";
import * as moreE from "./icons/batch-e";
import * as moreF from "./icons/batch-f";
import * as moreG from "./icons/batch-g";
import * as moreH from "./icons/batch-h";
import * as moreI from "./icons/batch-i";
import * as moreJ from "./icons/batch-j";
import * as moreK from "./icons/batch-k";
import * as moreL from "./icons/batch-l";
import * as moreM from "./icons/batch-m";
import * as moreN from "./icons/batch-n";
import * as moreO from "./icons/batch-o";
import * as moreP from "./icons/batch-p";
import * as moreQ from "./icons/batch-q";
import * as moreR from "./icons/batch-r";
import * as moreS from "./icons/batch-s";
import * as moreT from "./icons/batch-t";
import * as moreU from "./icons/batch-u";
import * as moreV from "./icons/batch-v";
import * as moreW from "./icons/batch-w";
import * as brands from "./icons/brands";
import type { IconDef } from "./types";

export * from "./icons/app";
export * from "./icons/actions";
export * from "./icons/media";
export * from "./icons/window";
export * from "./icons/batch-a";
export * from "./icons/batch-e";
export * from "./icons/batch-f";
export * from "./icons/batch-g";
export * from "./icons/batch-h";
export * from "./icons/batch-i";
export * from "./icons/batch-j";
export * from "./icons/batch-k";
export * from "./icons/batch-l";
export * from "./icons/batch-m";
export * from "./icons/batch-n";
export * from "./icons/batch-o";
export * from "./icons/batch-p";
export * from "./icons/batch-q";
export * from "./icons/batch-r";
export * from "./icons/batch-s";
export * from "./icons/batch-t";
export * from "./icons/batch-u";
export * from "./icons/batch-v";
export * from "./icons/batch-w";
export * from "./icons/brands";

/** Every icon in the given modules. No side effects: a bundle that never uses ICONS drops it, and with it every icon
 * the bundle does not import by name. */
/*#__NO_SIDE_EFFECTS__*/
function all(...mods: object[]): IconDef[] {
  return mods.flatMap((m) => Object.values(m) as IconDef[]);
}

/** Every icon. */
export const ICONS: IconDef[] = /*#__PURE__*/ all(
  app, actions, media, win, more,
  moreE, moreF, moreG, moreH, moreI, moreJ, moreK, moreL, moreM,
  moreN, moreO, moreP, moreQ, moreR, moreS, moreT, moreU, moreV, moreW,
  brands,
);

/** An icon by its name ("arrow-right"), or undefined. */
export const byName = (name: string): IconDef | undefined => ICONS.find((i) => i.name === name);
