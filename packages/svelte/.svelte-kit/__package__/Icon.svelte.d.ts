import { type IconDef, type Trigger, type Variant } from "@kineticons/core";
import type { SVGAttributes } from "svelte/elements";
interface Props extends Omit<SVGAttributes<SVGSVGElement>, "stroke-width" | "class"> {
    /** extra classes on the <svg> */
    class?: string;
    /** the icon to draw, e.g. `bell` from "@kineticons/svelte/icons" */
    icon: IconDef;
    /** "outline" (default), "duotone" or "filled" */
    variant?: Variant;
    /** width and height in pixels; default 24 */
    size?: number;
    /** stroke in 24-grid units, the same visual weight at any size; default 1.75 */
    strokeWidth?: number;
    /** "hover" (default), "manual" (set `active`), "loop", "none" */
    trigger?: Trigger;
    /** with trigger "manual": plays while true */
    active?: boolean;
    /** with trigger "loop": one beat in ms; default 1800 */
    loopEvery?: number;
    /** an accessible name; the icon is then announced as an image */
    title?: string;
    /** brand logos: draw in the brand's own colour instead of the text colour */
    brand?: boolean;
}
declare const Icon: import("svelte").Component<Props, {}, "">;
type Icon = ReturnType<typeof Icon>;
export default Icon;
