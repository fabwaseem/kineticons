/**
 * Kineticons for React: 2,800+ rounded icons in outline, duotone and filled, each with a motion of its own.
 *
 *   import { Bell } from "kineticons";
 *   <button className="ki-trigger"><Bell variant="duotone" size={20} /> Notifications</button>
 *
 * Works in Server Components (React 19): only trigger="loop" needs the client.
 */
export { KineticIcon, createIcon, type KineticIconProps } from "./KineticIcon";
export * from "./icons";
export type { IconDef, Trigger, Variant } from "@kineticons/core";
