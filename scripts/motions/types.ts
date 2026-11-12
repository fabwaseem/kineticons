import type { Category, IconDef } from "../../packages/core/src/types";
import type { Preset } from "../../packages/core/src/presets";

/**
 * A motion of an icon's own, in place of a generic preset. Keys of `motion` are part names: the importer names
 * the original's elements p0, p1, … in their order (a fill added from FILLS shares the name of the outline it fills), and
 * "root" moves the whole icon. `draw` lists the parts that need pathLength 1 for a stroke-dash drawing motion.
 */
export type Override = Pick<IconDef, "motion" | "keyframes"> & { draw?: string[]; note?: string };

/** One icon to bring over: the source shape's name, ours, a title, where it belongs, a fallback preset, words to find it by, a
 * line on the motion. */
export type Entry = [source: string, name: string, title: string, category: Category, preset: Preset, tags: string[], note: string];

/** A batch file (scripts/motions/e.ts and on): its own icons, their motions, and fill shapes for open outlines. */
export interface Batch {
  list: Entry[];
  motions: Record<string, Override>;
  /** fill areas by our name, for outlines the source draws open (see FILLS in import-icons.ts) */
  fills?: Record<string, string>;
  /** icons whose outline is drawn in several pieces (see OUTLINE_IN_PIECES in import-icons.ts) */
  pieces?: string[];
  /** icons whose closed shapes stay strokes (letters): filled gives them the cut-out tile */
  strokes?: string[];
}
