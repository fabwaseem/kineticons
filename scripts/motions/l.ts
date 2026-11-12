import type { Entry, Override } from "./types";

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** a keyframe named after its icon */
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** play one of the icon's keyframes */
const play = (icon: string, name: string, ms: number, delay = 0, extra: Record<string, string> = {}) => ({
  ...extra,
  animation: `ki-${icon}-${name} ${ms}ms ${SMOOTH}${delay ? ` ${delay}ms backwards` : ""}`,
});
/** a shield (or any frame) that gives a small squash from its base */
const bumpKf = (icon: string) => kf(icon, "bump", "0%{transform:none}30%{transform:scale(.95,.93)}60%{transform:scale(1.02,1.03)}100%{transform:none}");
const bump = (icon: string, delay = 0) => play(icon, "bump", 600, delay, { origin: "50% 100%" });
/** a mark that grows in from nothing */
const growKf = (icon: string) => kf(icon, "grow", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}");
/** a part that drops in from above */
const dropKf = (icon: string) => kf(icon, "drop", "0%{transform:translateY(-2.5px);opacity:0}55%{transform:translateY(.4px);opacity:1}80%{transform:translateY(-.15px)}100%{transform:none;opacity:1}");
/** a part that rises in from below */
const riseKf = (icon: string) => kf(icon, "rise", "0%{transform:translateY(2px);opacity:0}60%{transform:translateY(-.4px);opacity:1}100%{transform:none;opacity:1}");

/** Batch l: its icons (pnpm import-icons l) and their motions. */
export const list: Entry[] = [
  ["ShieldX", "shield-x", "Not protected", "status", "shake", ["shield", "security", "unsafe", "remove"], "The cross draws itself on the shield."],
  ["ShieldOff", "shield-off", "Protection off", "status", "shake", ["shield", "security", "disabled", "off"], "The slash cuts across the shield."],
  ["ShieldPlus", "shield-plus", "Add protection", "status", "pop", ["shield", "security", "add", "plus"], "The plus grows inside the shield."],
  ["ShieldMinus", "shield-minus", "Remove protection", "status", "pop", ["shield", "security", "remove", "minus"], "The minus draws across the shield."],
  ["ShieldUser", "shield-user", "Account security", "people", "pop", ["shield", "user", "account", "guard"], "The person rises inside the shield."],
  ["ShieldHalf", "shield-half", "Partly protected", "status", "pop", ["shield", "security", "half", "partial"], "The half fills down the shield."],
  ["ShieldBan", "shield-ban", "Blocked", "status", "shake", ["shield", "ban", "block", "forbidden"], "The ban line cuts through the shield."],
  ["ShieldLock", "shield-lock", "Secure", "status", "pop", ["shield", "lock", "secure", "privacy"], "The lock drops into the shield."],
  ["ShieldCog", "shield-cog", "Security settings", "status", "spin-90", ["shield", "settings", "cog", "security"], "The cog turns inside the shield."],
  ["Ship", "ship", "Ship", "travel", "float", ["boat", "sea", "shipping", "cruise"], "The ship rocks on the waves."],
  ["ShipWheel", "ship-wheel", "Ship wheel", "travel", "spin", ["helm", "wheel", "navigate", "sail"], "The wheel turns and settles."],
  ["Shirt", "shirt", "Shirt", "commerce", "tilt", ["clothes", "tshirt", "apparel", "fashion"], "The sleeves flap."],
  ["ShoppingBag", "shopping-bag", "Shopping bag", "commerce", "bounce", ["bag", "shop", "buy", "store"], "The bag hops and its handle swings."],
  ["ShoppingBasket", "basket", "Basket", "commerce", "bounce", ["basket", "shop", "groceries", "buy"], "The basket dips and its handle swings."],
  ["ShoppingCart", "cart", "Cart", "commerce", "nudge-right", ["cart", "shop", "buy", "checkout"], "The cart rolls forward and back on its wheels."],
  ["ShoppingCartPlus", "cart-plus", "Add to cart", "commerce", "pop", ["cart", "add", "buy", "shop"], "The plus drops into the cart."],
  ["ShoppingCartMinus", "cart-minus", "Remove from cart", "commerce", "pop", ["cart", "remove", "shop", "minus"], "The minus lifts out of the cart."],
  ["Shovel", "shovel", "Shovel", "nature", "tilt", ["dig", "garden", "spade", "tool"], "The shovel digs in and lifts."],
  ["ShowerHead", "shower", "Shower", "health", "pop", ["shower", "bath", "water", "wash"], "Drops fall from the shower head."],
  ["Shredder", "shredder", "Shredder", "actions", "nudge-down", ["shred", "destroy", "paper", "delete"], "The paper feeds in and the strips come out."],
  ["Shrimp", "shrimp", "Shrimp", "food", "wiggle", ["seafood", "prawn", "food", "sea"], "The shrimp curls and flicks its tail."],
  ["Shrink", "shrink", "Shrink", "actions", "pop", ["shrink", "collapse", "minimize", "smaller"], "The arrows pull in to the middle."],
  ["Shrub", "shrub", "Shrub", "nature", "wiggle", ["bush", "plant", "garden", "green"], "The shrub sways from its root."],
  ["Sigma", "sigma", "Sum", "text", "draw", ["sum", "total", "math", "sigma"], "The sigma writes itself."],
  ["Signal", "signal", "Signal", "status", "pulse", ["signal", "bars", "reception", "network"], "The bars rise one after another."],
  ["Signature", "signature", "Signature", "text", "draw", ["sign", "signature", "autograph", "contract"], "The signature writes itself."],
  ["Signpost", "signpost", "Signpost", "navigation", "swing", ["sign", "direction", "way", "road"], "The signs swing on the post."],
  ["Siren", "siren", "Siren", "status", "flash", ["alarm", "emergency", "alert", "police"], "The light flashes and its rays pulse."],
  ["SkipBack", "skip-back", "Previous", "media", "nudge-left", ["previous", "back", "track", "rewind"], "The triangle jumps back to the bar."],
  ["SkipForward", "skip-forward", "Next", "media", "nudge-right", ["next", "forward", "track", "skip"], "The triangle jumps on to the bar."],
  ["Slice", "slice", "Slice", "actions", "tilt", ["knife", "cut", "slice", "split"], "The blade cuts down."],
  ["Smartphone", "smartphone", "Phone", "devices", "wiggle", ["phone", "mobile", "device", "cell"], "The phone buzzes."],
  ["SmartphoneCharging", "phone-charging", "Charging", "devices", "flash", ["phone", "charging", "battery", "power"], "The bolt flashes on the phone."],
  ["SmartphoneNfc", "phone-nfc", "Tap to pay", "devices", "wave", ["nfc", "contactless", "tap", "pay"], "The waves ripple out from the phone."],
  ["Snail", "snail", "Slow", "nature", "nudge-right", ["snail", "slow", "speed", "turtle"], "The snail stretches forward and its shell follows."],
  ["Snowflake", "snowflake", "Snow", "weather", "spin-90", ["snow", "cold", "winter", "freeze"], "The flake turns a sixth of a turn."],
  ["Sofa", "sofa", "Sofa", "app", "bounce", ["couch", "furniture", "living", "relax"], "The seat sinks and springs back."],
  ["SolarPanel", "solar-panel", "Solar panel", "nature", "flash", ["solar", "energy", "sun", "power"], "The sun's rays shine onto the panel."],
  ["Soup", "soup", "Soup", "food", "float", ["soup", "bowl", "meal", "hot"], "Steam rises from the bowl."],
  ["Space", "space", "Space", "text", "nudge-down", ["spacebar", "space", "key", "whitespace"], "The space bar presses down."],
  ["Spade", "spade", "Spade", "shapes", "pop", ["cards", "suit", "spade", "game"], "The spade pops."],
  ["Sparkle", "sparkle", "Sparkle", "media", "pop", ["sparkle", "shine", "new", "ai"], "The star twinkles."],
  ["Speaker", "speaker", "Speaker", "devices", "pulse", ["speaker", "audio", "sound", "music"], "The cone pumps to the beat."],
  ["Speech", "speech", "Speech", "people", "wave", ["speak", "talk", "voice", "person"], "The words ripple from the mouth."],
  ["SpellCheck", "spell-check", "Spell check", "text", "draw", ["spelling", "check", "grammar", "proof"], "The tick draws under the letters."],
  ["Spline", "spline", "Curve", "development", "draw", ["curve", "bezier", "path", "vector"], "The curve draws between its points."],
  ["SplinePointer", "bezier", "Pen tool", "development", "tilt", ["pen", "bezier", "vector", "path"], "The pointer drags the curve."],
  ["Split", "split", "Split", "actions", "nudge-up", ["split", "fork", "branch", "divide"], "The path splits into two."],
  ["SplitSquareHorizontal", "split-horizontal", "Split view", "app", "pop", ["split", "columns", "side by side", "layout"], "The halves part and come back."],
  ["SprayCan", "spray-can", "Spray", "actions", "shake", ["spray", "paint", "graffiti", "clean"], "The can shakes and sprays."],
  ["Sprout", "sprout", "Grow", "nature", "nudge-up", ["plant", "grow", "seed", "eco"], "The leaves unfold from the stem."],
  ["Spotlight", "spotlight", "Spotlight", "media", "flash", ["light", "highlight", "feature", "stage"], "The beam sweeps on."],
  ["SquareDashedText", "text-select", "Select text", "text", "pop", ["select", "text", "selection", "caret"], "The selection marches round the text."],
  ["SquareDimensions", "dimensions", "Dimensions", "development", "pop", ["size", "dimensions", "measure", "width"], "The measures stretch along the sides."],
  ["SquareRoundCorner", "round-corner", "Corner radius", "development", "pop", ["radius", "corner", "round", "border"], "The corner rounds."],
  ["SquaresUnite", "shape-unite", "Union", "shapes", "pop", ["union", "combine", "merge", "boolean"], "The two squares slide together."],
  ["SquaresIntersect", "shape-intersect", "Intersect", "shapes", "pop", ["intersect", "overlap", "boolean", "shape"], "The squares slide in to overlap."],
  ["SquaresSubtract", "shape-subtract", "Subtract", "shapes", "pop", ["subtract", "cut", "boolean", "shape"], "The front square bites out of the back one."],
  ["SquaresExclude", "shape-exclude", "Exclude", "shapes", "pop", ["exclude", "difference", "boolean", "shape"], "The squares slide apart and back."],
  ["SquareStack", "square-stack", "Stack", "app", "pop", ["stack", "copies", "layers", "duplicate"], "The cards fan out."],
  ["SquareTerminal", "terminal-square", "Terminal", "development", "pop", ["terminal", "console", "shell", "command"], "The prompt types and the cursor blinks."],
  ["SquareX", "square-x", "Close box", "actions", "pop", ["close", "remove", "cancel", "x"], "The cross draws itself."],
  ["Squircle", "squircle", "Squircle", "shapes", "pop", ["squircle", "shape", "rounded", "app"], "The shape squashes and springs back."],
  ["Squirrel", "squirrel", "Squirrel", "nature", "bounce", ["squirrel", "animal", "save", "stash"], "The tail flicks."],
  ["Stamp", "stamp", "Stamp", "actions", "nudge-down", ["stamp", "approve", "seal", "mark"], "The stamp presses down."],
  ["StarHalf", "star-half", "Half star", "status", "pop", ["rating", "half", "star", "review"], "The half star twinkles."],
  ["StarOff", "star-off", "Unfavorite", "status", "shake", ["star", "unfavorite", "off", "remove"], "The slash cuts the star."],
  ["StepBack", "step-back", "Step back", "media", "nudge-left", ["step", "back", "frame", "previous"], "The triangle steps back one."],
  ["StepForward", "step-forward", "Step forward", "media", "nudge-right", ["step", "forward", "frame", "next"], "The triangle steps on one."],
  ["Stethoscope", "stethoscope", "Stethoscope", "health", "swing", ["doctor", "health", "medical", "checkup"], "The chest piece swings on its tube."],
  ["Sticker", "sticker", "Sticker", "app", "tilt", ["sticker", "emoji", "label", "peel"], "The corner peels up."],
  ["StickyNote", "sticky-note", "Note", "files", "tilt", ["note", "memo", "sticky", "post-it"], "The note flutters at its corner."],
  ["Store", "store", "Store", "commerce", "pop", ["shop", "store", "market", "storefront"], "The awning ripples."],
  ["StretchHorizontal", "stretch", "Stretch", "app", "pop", ["stretch", "fill", "full width", "layout"], "The rows stretch out."],
  ["Spool", "spool", "Thread", "app", "spin", ["thread", "sewing", "spool", "craft"], "The spool winds."],
  ["SquareRadical", "radical", "Square root", "text", "draw", ["root", "math", "radical", "formula"], "The root sign writes itself."],
  ["Strikethrough", "strikethrough", "Strikethrough", "text", "draw", ["strike", "cross out", "format", "text"], "The line strikes through."],
  ["Subscript", "subscript", "Subscript", "text", "nudge-down", ["subscript", "format", "text", "below"], "The small digit drops down."],
  ["Superscript", "superscript", "Superscript", "text", "nudge-up", ["superscript", "format", "text", "power"], "The small digit lifts up."],
  ["SunDim", "sun-dim", "Dim", "weather", "pulse", ["brightness", "dim", "sun", "low"], "The rays dim and glow."],
  ["SunMoon", "sun-moon", "Auto theme", "app", "spin-180", ["theme", "auto", "day", "night"], "The rays turn round the sun."],
  ["Sunrise", "sunrise", "Sunrise", "weather", "nudge-up", ["morning", "dawn", "sun", "rise"], "The sun rises."],
  ["Sunset", "sunset", "Sunset", "weather", "nudge-down", ["evening", "dusk", "sun", "set"], "The sun sets."],
  ["SwatchBook", "swatches", "Swatches", "app", "tilt", ["colors", "swatch", "palette", "theme"], "The swatches fan open."],
  ["SwitchCamera", "switch-camera", "Switch camera", "media", "spin-180", ["camera", "switch", "flip", "selfie"], "The arrows turn round the lens."],
  ["Sword", "sword", "Sword", "app", "tilt", ["sword", "fight", "game", "attack"], "The sword swings."],
  ["Swords", "swords", "Battle", "app", "pop", ["battle", "fight", "versus", "game"], "The swords cross and clash."],
  ["Syringe", "syringe", "Vaccine", "health", "nudge-left", ["vaccine", "injection", "shot", "medicine"], "The plunger pushes in."],
  ["Table", "table", "Table", "files", "pop", ["table", "grid", "spreadsheet", "data"], "The rows and columns draw in."],
  ["TableOfContents", "table-of-contents", "Contents", "text", "pop", ["contents", "toc", "outline", "chapters"], "The lines draw in, one after another."],
  ["TableCellsMerge", "merge-cells", "Merge cells", "files", "pop", ["merge", "cells", "table", "combine"], "The arrows push the cells together."],
  ["TableCellsSplit", "split-cells", "Split cells", "files", "pop", ["split", "cells", "table", "divide"], "The dividing line draws in."],
  ["Tablet", "tablet", "Tablet", "devices", "wiggle", ["tablet", "ipad", "device", "screen"], "The tablet tips and settles."],
  ["Tablets", "pills", "Pills", "health", "pop", ["pills", "medicine", "tablets", "pharmacy"], "The pills roll."],
  ["TabletSmartphone", "tablet-phone", "Devices", "devices", "pop", ["devices", "responsive", "mobile", "tablet"], "The phone slides out from the tablet."],
  ["TagPlus", "tag-plus", "Add tag", "actions", "pop", ["tag", "label", "add", "plus"], "The tag swings and the plus grows."],
  ["TagX", "tag-x", "Remove tag", "actions", "pop", ["tag", "label", "remove", "x"], "The tag swings and the cross draws."],
  ["SoapDispenserDroplet", "soap", "Hand wash", "health", "nudge-down", ["soap", "wash", "hygiene", "clean"], "The pump presses and a drop falls."],
  ["SportShoe", "sneaker", "Sneaker", "commerce", "bounce", ["shoe", "sneaker", "run", "sport"], "The shoe steps."],
  ["SquarePadding", "padding", "Padding", "development", "pop", ["padding", "spacing", "box", "inset"], "The inset breathes."],
  ["Summary", "summary", "Summary", "text", "pop", ["summary", "summarize", "digest", "tldr"], "The lines draw in."],
  ["SwissFranc", "franc", "Franc", "commerce", "draw", ["currency", "franc", "money", "chf"], "The franc writes itself."],
];

export const fills: Record<string, string> = {
  // the basket's body, which the source leaves open at the top under its rim
  basket: "M3.5 11h17.1l-1.7 7.4a2 2 0 0 1-2 1.6H7.1a2 2 0 0 1-2-1.6Z",
  // the cart's basket, closed along the frame
  cart: "M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25Z",
  // the sheet above the slot
  shredder: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5Z",
  // the can under its cap
  "spray-can": "M15 9h4l2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11Z",
  // the handle, open where it meets the base
  stamp: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13Z",
  // the half star, closed down its middle
  "star-half":
    "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2Z",
  // the square with its one round corner
  "round-corner": "M13 3a8 8 0 0 1 8 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  // the walls under the awning
  // the wall under the awning, with the doorway left open (the door stands on the wall's bottom edge)
  store: "M4 10.95V19a2 2 0 0 0 2 2h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3a2 2 0 0 0 2-2v-8.05Z",
  // the shield, cut around the lock (a unit clear of it, its own stroke included) where the source leaves its lower right open
  "shield-lock":
    "M20 9.807V6a1 1 0 0 0-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 0 0-1.52 0C9.5 3.8 7 5 5 5a1 1 0 0 0-1 1v7c0 3.88 2.107 6.254 5 7.796L10.25 20V18C10.25 16 12.09 14.08 12.8 12.75A4.75 4.75 0 0 1 20 11.32Z",
  // the back, between its top and the arms and seat
  sofa: "M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0-2 2v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-2-2Z",
  // the bottle and its cap, cut down its right side a unit clear of the drop (the source leaves that side open for it)
  soap: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V11.8C11.8 13.3 10.25 15.6 10.25 17.95C10.25 19.3 10.4 20.3 10.6 21Z",
  // the tablet, cut around the phone (a unit clear of it) where the source leaves its lower left open
  "tablet-phone": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4H15.75V10A4.75 4.75 0 0 0 11 5.25H5Z",
  // the angled swatch (between its outline and the front one) and the flat one (under the angled one's edge)
  swatches:
    "M11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8A4 4 0 0 0 11 17Z M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7A4 4 0 0 0 9.9 19.8Z",
  // the hull, cut along the waves a unit clear of them (the source leaves it open at the water), and the cabin; each closed
  // along the deck line, so the deck stays a stroke on their edge
  ship: "M3 13.001L11.188 9.361a2 2 0 0 1 1.624 0L21 13A11.6 11.6 0 0 1 20.54 16.323L20 16.267L19 16.268L18 16.418L17 16.753L16 17.312L15 18.074L14.5 18.2L14 18.084L13 17.298L12 16.741L11 16.412L10 16.267L9 16.268L8 16.418L7 16.753L6 17.312L5 18.074L4.124 18.174A11.6 11.6 0 0 1 3 13.001Z M5 12.11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.11L12.812 9.361a2 2 0 0 0-1.624 0Z",
  // the whole squirrel: body, tail and head, closed across the chest between the arm and the bottom line
  squirrel:
    "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10L16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4Z",
};

export const motions: Record<string, Override> = {
  "shield-x": {
    note: "The shield gives a little and the cross draws itself on it, one stroke after the other.",
    draw: ["p1", "p2"],
    motion: { p0: bump("shield-x"), p1: draw("shield-x", 360, 80), p2: draw("shield-x", 360, 200) },
    keyframes: bumpKf("shield-x") + drawKf("shield-x"),
  },

  "shield-off": {
    note: "The slash cuts across and the two halves of the shield shift apart along it, then close up.",
    draw: ["p0"],
    motion: {
      p0: draw("shield-off", 450),
      p1: play("shield-off", "a", 650, 120),
      p2: play("shield-off", "b", 650, 120),
    },
    keyframes:
      drawKf("shield-off") +
      kf("shield-off", "a", "0%{transform:none}35%{transform:translate(-.7px,.7px)}100%{transform:none}") +
      kf("shield-off", "b", "0%{transform:none}35%{transform:translate(.7px,-.7px)}100%{transform:none}"),
  },

  "shield-plus": {
    note: "The shield gives a little and the plus grows in, its bar then its stem.",
    motion: { p0: bump("shield-plus"), p1: play("shield-plus", "grow", 500, 80), p2: play("shield-plus", "grow", 500, 160) },
    keyframes: bumpKf("shield-plus") + growKf("shield-plus"),
  },

  "shield-minus": {
    note: "The shield gives a little and the minus draws across it.",
    draw: ["p1"],
    motion: { p0: bump("shield-minus"), p1: draw("shield-minus", 400, 100) },
    keyframes: bumpKf("shield-minus") + drawKf("shield-minus"),
  },

  "shield-user": {
    note: "The shoulders, then the head, rise into the shield, which gives a little.",
    motion: { p0: bump("shield-user"), p1: play("shield-user", "rise", 550, 40), p2: play("shield-user", "rise", 550, 130) },
    keyframes: bumpKf("shield-user") + riseKf("shield-user"),
  },

  "shield-half": {
    note: "The dividing line draws up the middle while the shield rocks on its point.",
    draw: ["p1"],
    motion: { p0: play("shield-half", "rock", 700, 0, { origin: "50% 100%" }), p1: draw("shield-half", 500, 60) },
    keyframes: kf("shield-half", "rock", "0%{transform:none}30%{transform:rotate(-5deg)}65%{transform:rotate(3deg)}100%{transform:none}") + drawKf("shield-half"),
  },

  "shield-ban": {
    note: "The ban line cuts through and the shield shakes it off.",
    draw: ["p1"],
    motion: { p1: draw("shield-ban", 420), p0: play("shield-ban", "shake", 550, 200) },
    keyframes:
      drawKf("shield-ban") +
      kf("shield-ban", "shake", "0%{transform:none}20%{transform:translateX(-1px)}45%{transform:translateX(.8px)}70%{transform:translateX(-.4px)}100%{transform:none}"),
  },

  "shield-lock": {
    note: "The lock drops in front of the shield, its shackle snapping down a beat later; the shield takes the knock.",
    motion: {
      p2: play("shield-lock", "drop", 550),
      p1: play("shield-lock", "drop", 550, 70),
      p0: play("shield-lock", "knock", 600, 150),
    },
    keyframes:
      dropKf("shield-lock") + kf("shield-lock", "knock", "0%{transform:none}30%{transform:translateY(.5px)}100%{transform:none}"),
  },

  "shield-cog": {
    note: "The cog turns one tooth on its centre inside the shield.",
    motion: {
      ...Object.fromEntries(
        ["p0", "p1", "p2", "p3", "p4", "p5", "p7", "p8", "p9"].map((p) => [p, play("shield-cog", "turn", 750, 0, { box: "view-box", origin: "12.077px 11.695px" })]),
      ),
      p6: bump("shield-cog"),
    },
    keyframes: kf("shield-cog", "turn", "0%{transform:none}70%{transform:rotate(52deg)}100%{transform:rotate(45deg)}") + bumpKf("shield-cog"),
  },

  ship: {
    note: "The ship rocks on its keel while the waves roll under it.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2", "p3"].map((p) => [p, play("ship", "rock", 900, 0, { box: "view-box", origin: "12px 19px" })])),
      p4: play("ship", "waves", 900),
    },
    keyframes:
      kf("ship", "rock", "0%{transform:none}25%{transform:rotate(-4deg)}55%{transform:rotate(3deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("ship", "waves", "0%{transform:none}50%{transform:translateX(-1px)}100%{transform:none}"),
  },

  "ship-wheel": {
    note: "The spokes and hub turn a quarter turn inside the rim and settle.",
    motion: Object.fromEntries(
      ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"].map((p) => [p, play("ship-wheel", "turn", 850, 0, { box: "view-box", origin: "12px 12px" })]),
    ),
    keyframes: kf("ship-wheel", "turn", "0%{transform:none}75%{transform:rotate(100deg)}100%{transform:rotate(90deg)}"),
  },

  shirt: {
    note: "The sleeves flap up and fall back, as if the shirt were shaken out.",
    motion: { p0: { animation: `ki-shirt-flap .7s ${SMOOTH}` } },
    keyframes: kf(
      "shirt",
      "flap",
      `0%,100%{d:path("M20.38 3.46L16 2A4 4 0 0 1 8 2L3.62 3.46A2 2 0 0 0 2.28 5.69L2.86 9.16A1 1 0 0 0 3.85 10H6V20C6 21.1 6.9 22 8 22H16A2 2 0 0 0 18 20V10H20.15A1 1 0 0 0 21.14 9.16L21.72 5.69A2 2 0 0 0 20.38 3.46Z")}` +
        `35%{d:path("M20.38 3.46L16 2A4 4 0 0 1 8 2L3.62 3.46A2 2 0 0 0 1.9 5.2L2.3 8.6A1 1 0 0 0 3.3 9.3H6V20C6 21.1 6.9 22 8 22H16A2 2 0 0 0 18 20V9.3H20.7A1 1 0 0 0 21.7 8.6L22.1 5.2A2 2 0 0 0 20.38 3.46Z")}`,
    ),
  },

  "shopping-bag": {
    note: "The bag hops and its handle follows a beat behind.",
    motion: {
      p2: play("shopping-bag", "hop", 650),
      p1: play("shopping-bag", "hop", 650),
      p0: play("shopping-bag", "hop", 650, 70),
    },
    keyframes: kf("shopping-bag", "hop", "0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.3px)}75%{transform:translateY(-.3px)}100%{transform:none}"),
  },

  basket: {
    note: "The basket dips under a load and its two handles swing out and back on their ends.",
    motion: {
      ...Object.fromEntries(["p0", "p2", "p3", "p4", "p6"].map((p) => [p, play("basket", "dip", 600)])),
      p5: play("basket", "left", 700, 0, { origin: "0% 100%" }),
      p1: play("basket", "right", 700, 0, { origin: "100% 100%" }),
    },
    keyframes:
      kf("basket", "dip", "0%{transform:none}35%{transform:translateY(.8px)}70%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("basket", "left", "0%{transform:none}30%{transform:rotate(-10deg)}65%{transform:rotate(4deg)}100%{transform:none}") +
      kf("basket", "right", "0%{transform:none}30%{transform:rotate(10deg)}65%{transform:rotate(-4deg)}100%{transform:none}"),
  },

  cart: {
    note: "The cart rolls forward and back; the basket bobs on the frame as it stops.",
    motion: {
      p0: play("cart", "roll", 700),
      p2: play("cart", "roll", 700),
      p3: play("cart", "roll", 700),
      p1: play("cart", "basket", 700),
    },
    keyframes:
      kf("cart", "roll", "0%{transform:none}35%{transform:translateX(1.6px)}70%{transform:translateX(-.4px)}100%{transform:none}") +
      kf("cart", "basket", "0%{transform:none}35%{transform:translate(1.6px,-.6px)}70%{transform:translate(-.5px,.2px)}100%{transform:none}"),
  },

  "cart-plus": {
    note: "The plus drops into the cart, which dips under it.",
    motion: {
      p0: play("cart-plus", "drop", 550),
      p1: play("cart-plus", "drop", 550),
      ...Object.fromEntries(["p2", "p3", "p4"].map((p) => [p, play("cart-plus", "dip", 500, 260)])),
    },
    keyframes: dropKf("cart-plus") + kf("cart-plus", "dip", "0%{transform:none}40%{transform:translateY(.7px)}100%{transform:none}"),
  },

  "cart-minus": {
    note: "The minus lifts out of the cart and comes back, and the lighter cart rises a little.",
    motion: {
      p0: play("cart-minus", "lift", 650),
      ...Object.fromEntries(["p1", "p2", "p3"].map((p) => [p, play("cart-minus", "rise", 500, 120)])),
    },
    keyframes:
      kf("cart-minus", "lift", "0%{transform:none;opacity:1}40%{transform:translateY(-2px);opacity:0}41%{transform:translateY(1.2px);opacity:0}100%{transform:none;opacity:1}") +
      kf("cart-minus", "rise", "0%{transform:none}40%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  shovel: {
    note: "The shovel drives in along its shaft and levers up from the handle, the grip squeezing as it goes.",
    motion: {
      p1: play("shovel", "dig", 800, 0, { box: "view-box", origin: "19px 5px" }),
      p2: play("shovel", "dig", 800, 0, { box: "view-box", origin: "19px 5px" }),
      p0: play("shovel", "grip", 800),
    },
    keyframes:
      kf("shovel", "dig", "0%{transform:none}30%{transform:translate(-1px,1px)}60%{transform:rotate(-8deg)}100%{transform:none}") +
      kf("shovel", "grip", "0%{transform:none}30%{transform:translate(-1px,1px) scale(.9)}60%{transform:translate(.4px,-.4px)}100%{transform:none}"),
  },

  shower: {
    note: "The head gives a small shake and the drops stream out of it, nearest first.",
    motion: {
      p1: play("shower", "head", 500, 0, { box: "view-box", origin: "6px 6px" }),
      p2: play("shower", "head", 500, 0, { box: "view-box", origin: "6px 6px" }),
      p5: play("shower", "drop", 450, 60),
      p6: play("shower", "drop", 450, 120),
      p4: play("shower", "drop", 450, 120),
      p3: play("shower", "drop", 450, 200),
      p8: play("shower", "drop", 450, 200),
      p7: play("shower", "drop", 450, 280),
      p9: play("shower", "drop", 450, 280),
    },
    keyframes:
      kf("shower", "head", "0%{transform:none}30%{transform:rotate(-5deg)}65%{transform:rotate(2deg)}100%{transform:none}") +
      kf("shower", "drop", "0%{transform:translate(-1.5px,-1.5px);opacity:0}60%{transform:translate(.2px,.2px);opacity:1}100%{transform:none;opacity:1}"),
  },

  shredder: {
    note: "The sheet feeds down into the slot and the strips push out underneath, one after another.",
    motion: {
      p0: play("shredder", "feed", 650),
      p1: play("shredder", "feed", 650),
      p6: play("shredder", "strip", 500, 80, { origin: "50% 0%" }),
      p2: play("shredder", "strip", 500, 140, { origin: "50% 0%" }),
      p3: play("shredder", "strip", 500, 200, { origin: "50% 0%" }),
      p4: play("shredder", "strip", 500, 260, { origin: "50% 0%" }),
    },
    keyframes:
      kf("shredder", "feed", "0%{transform:none}40%{transform:translateY(1.2px)}100%{transform:none}") +
      kf("shredder", "strip", "0%{transform:scaleY(.3)}60%{transform:scaleY(1.2)}100%{transform:none}"),
  },

  shrimp: {
    note: "The shrimp curls on itself, its legs paddle and its tail flicks.",
    motion: {
      p0: play("shrimp", "curl", 750, 0, { box: "view-box", origin: "12px 12px" }),
      p1: play("shrimp", "curl", 750, 0, { box: "view-box", origin: "12px 12px" }),
      p3: play("shrimp", "curl", 750, 0, { box: "view-box", origin: "12px 12px" }),
      p2: play("shrimp", "flick", 650, 80, { origin: "100% 0%" }),
      p4: play("shrimp", "legs", 600, 40, { origin: "100% 100%" }),
    },
    keyframes:
      kf("shrimp", "curl", "0%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("shrimp", "flick", "0%{transform:none}35%{transform:rotate(10deg)}65%{transform:rotate(-5deg)}100%{transform:none}") +
      kf("shrimp", "legs", "0%{transform:none}25%{transform:rotate(-12deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-4deg)}100%{transform:none}"),
  },

  shrink: {
    note: "The four arrows pull in towards the middle and spring back.",
    motion: {
      p0: play("shrink", "br", 600),
      p1: play("shrink", "bl", 600),
      p2: play("shrink", "tr", 600),
      p3: play("shrink", "tl", 600),
    },
    keyframes:
      kf("shrink", "br", "0%{transform:none}35%{transform:translate(-1.2px,-1.2px)}65%{transform:translate(.3px,.3px)}100%{transform:none}") +
      kf("shrink", "bl", "0%{transform:none}35%{transform:translate(1.2px,-1.2px)}65%{transform:translate(-.3px,.3px)}100%{transform:none}") +
      kf("shrink", "tr", "0%{transform:none}35%{transform:translate(-1.2px,1.2px)}65%{transform:translate(.3px,-.3px)}100%{transform:none}") +
      kf("shrink", "tl", "0%{transform:none}35%{transform:translate(1.2px,1.2px)}65%{transform:translate(-.3px,-.3px)}100%{transform:none}"),
  },

  shrub: {
    note: "The leaves sway from the root and the branches follow, a little less.",
    motion: {
      p2: play("shrub", "sway", 800, 0, { box: "view-box", origin: "12px 22px" }),
      p0: play("shrub", "branch", 800, 40, { box: "view-box", origin: "12px 22px" }),
      p1: play("shrub", "branch", 800, 40, { box: "view-box", origin: "12px 22px" }),
    },
    keyframes:
      kf("shrub", "sway", "0%{transform:none}25%{transform:rotate(-5deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}") +
      kf("shrub", "branch", "0%{transform:none}25%{transform:rotate(-3deg)}55%{transform:rotate(2deg)}100%{transform:none}"),
  },

  sigma: {
    note: "The sigma writes itself from its top end to its bottom end.",
    draw: ["p0"],
    motion: { p0: draw("sigma", 650) },
    keyframes: drawKf("sigma"),
  },

  signal: {
    note: "The dot blinks and the bars grow up from the base, shortest first.",
    motion: {
      p0: play("signal", "dot", 400),
      p1: play("signal", "bar", 450, 60, { origin: "50% 100%" }),
      p2: play("signal", "bar", 450, 120, { origin: "50% 100%" }),
      p3: play("signal", "bar", 450, 180, { origin: "50% 100%" }),
      p4: play("signal", "bar", 450, 240, { origin: "50% 100%" }),
    },
    keyframes:
      kf("signal", "dot", "0%{transform:none}40%{transform:scale(1.6)}100%{transform:none}") +
      kf("signal", "bar", "0%{transform:scaleY(0)}60%{transform:scaleY(1.12)}100%{transform:none}"),
  },

  signature: {
    note: "The baseline draws, then the signature writes itself across it in one stroke.",
    draw: ["p0", "p1"],
    motion: { p1: draw("signature", 350), p0: draw("signature", 800, 150) },
    keyframes: drawKf("signature"),
  },

  signpost: {
    note: "The sign swings round on its nail at the post and settles.",
    motion: {
      p2: play("signpost", "swing", 850, 0, { box: "view-box", origin: "12px 9.5px" }),
      p1: play("signpost", "post", 850),
    },
    keyframes:
      kf("signpost", "swing", "0%{transform:none}25%{transform:rotate(8deg)}55%{transform:rotate(-5deg)}80%{transform:rotate(2deg)}100%{transform:none}") +
      kf("signpost", "post", "0%{transform:none}25%{transform:translateX(.3px)}55%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  siren: {
    note: "The light inside flashes twice and the rays pulse out from the dome with it.",
    motion: {
      p7: play("siren", "flash", 800),
      p0: play("siren", "dome", 800, 0, { origin: "50% 100%" }),
      ...Object.fromEntries(["p2", "p3", "p4", "p5", "p6"].map((p) => [p, play("siren", "ray", 800, 0, { box: "view-box", origin: "12px 12px" })])),
    },
    keyframes:
      kf("siren", "flash", "0%{opacity:1}20%{opacity:.15}40%{opacity:1}60%{opacity:.15}80%,100%{opacity:1}") +
      kf("siren", "dome", "0%{transform:none}20%{transform:scale(1.05)}40%{transform:none}60%{transform:scale(1.05)}100%{transform:none}") +
      kf("siren", "ray", "0%{transform:none}20%{transform:scale(1.14)}40%{transform:none}60%{transform:scale(1.14)}100%{transform:none}"),
  },

  "skip-back": {
    note: "The triangle jumps back against the bar, which takes the knock.",
    motion: { p0: play("skip-back", "tri", 600), p1: play("skip-back", "bar", 600) },
    keyframes:
      kf("skip-back", "tri", "0%{transform:none}35%{transform:translateX(-1.8px)}60%{transform:translateX(.3px)}100%{transform:none}") +
      kf("skip-back", "bar", "0%,25%{transform:none}40%{transform:translateX(-.6px)}70%{transform:none}100%{transform:none}"),
  },

  "skip-forward": {
    note: "The triangle jumps on against the bar, which takes the knock.",
    motion: { p1: play("skip-forward", "tri", 600), p0: play("skip-forward", "bar", 600) },
    keyframes:
      kf("skip-forward", "tri", "0%{transform:none}35%{transform:translateX(1.8px)}60%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("skip-forward", "bar", "0%,25%{transform:none}40%{transform:translateX(.6px)}70%{transform:none}100%{transform:none}"),
  },

  slice: {
    note: "The knife draws itself from the handle to the tip in one cut.",
    draw: ["p0"],
    motion: { p0: draw("slice", 650) },
    keyframes: drawKf("slice"),
  },

  smartphone: {
    note: "The phone buzzes on the spot and its home dot lights up.",
    motion: {
      p0: play("smartphone", "buzz", 550),
      p1: play("smartphone", "dot", 550),
    },
    keyframes:
      kf("smartphone", "buzz", "0%{transform:none}15%{transform:rotate(-5deg)}35%{transform:rotate(5deg)}55%{transform:rotate(-3deg)}75%{transform:rotate(2deg)}100%{transform:none}") +
      kf("smartphone", "dot", "0%{transform:none}15%{transform:translateX(-.5px) scale(1.6)}35%{transform:translateX(.5px) scale(1.6)}55%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  "phone-charging": {
    note: "The bolt strikes down the screen and the phone gives a small jolt.",
    draw: ["p1"],
    motion: { p1: draw("phone-charging", 450), p0: play("phone-charging", "jolt", 500, 250) },
    keyframes: drawKf("phone-charging") + kf("phone-charging", "jolt", "0%{transform:none}30%{transform:scale(1.04)}100%{transform:none}"),
  },

  "phone-nfc": {
    note: "The phone taps forward and the waves ripple out from it, nearest first.",
    motion: {
      p0: play("phone-nfc", "tap", 500),
      p1: play("phone-nfc", "wave", 450, 80),
      p2: play("phone-nfc", "wave", 450, 160),
      p3: play("phone-nfc", "wave", 450, 240),
    },
    keyframes:
      kf("phone-nfc", "tap", "0%{transform:none}30%{transform:translateX(.8px)}100%{transform:none}") +
      kf("phone-nfc", "wave", "0%{transform:translateX(-1.2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  snail: {
    note: "The body stretches forward, the shell is pulled after it, and the feelers wave.",
    motion: {
      p2: play("snail", "body", 850),
      p1: play("snail", "shell", 850),
      p0: play("snail", "shell", 850),
      p3: play("snail", "feeler", 650, 60, { origin: "100% 100%" }),
      p4: play("snail", "feeler", 650, 120, { origin: "0% 100%" }),
    },
    keyframes:
      kf("snail", "body", "0%{transform:none}35%{transform:translateX(1px)}100%{transform:none}") +
      kf("snail", "shell", "0%,20%{transform:none}55%{transform:translateX(1px)}100%{transform:none}") +
      kf("snail", "feeler", "0%{transform:none}30%{transform:rotate(-14deg)}65%{transform:rotate(8deg)}100%{transform:none}"),
  },

  snowflake: {
    note: "Every arm turns together a sixth of a turn round the centre, landing where the next arm was.",
    motion: Object.fromEntries(
      Array.from({ length: 12 }, (_, i) => [`p${i}`, play("snowflake", "turn", 850, 0, { box: "view-box", origin: "12px 12px" })]),
    ),
    keyframes: kf("snowflake", "turn", "0%{transform:none}75%{transform:rotate(66deg)}100%{transform:rotate(60deg)}"),
  },

  sofa: {
    note: "The seat sinks and springs back; the back cushion settles a beat later.",
    motion: {
      p1: play("sofa", "seat", 650, 0, { origin: "50% 100%" }),
      p0: play("sofa", "back", 650, 60),
    },
    keyframes:
      kf("sofa", "seat", "0%{transform:none}30%{transform:scaleY(.88)}60%{transform:scaleY(1.04)}100%{transform:none}") +
      kf("sofa", "back", "0%{transform:none}35%{transform:translateY(.7px)}70%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "solar-panel": {
    note: "The sun's rays reach out and the panel lifts to catch them.",
    motion: {
      p5: play("solar-panel", "sun", 700, 0, { box: "view-box", origin: "3px 2px" }),
      ...Object.fromEntries(["p0", "p3", "p6"].map((p) => [p, play("solar-panel", "ray", 700, 0, { box: "view-box", origin: "3px 2px" })])),
      ...Object.fromEntries(["p1", "p2", "p4"].map((p) => [p, play("solar-panel", "panel", 600, 180)])),
    },
    keyframes:
      kf("solar-panel", "sun", "0%{transform:none}35%{transform:scale(1.15)}100%{transform:none}") +
      kf("solar-panel", "ray", "0%{transform:none}35%{transform:scale(1.18)}100%{transform:none}") +
      kf("solar-panel", "panel", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  soup: {
    note: "Steam rises from the bowl in three wisps while the spoon tips in the soup.",
    motion: {
      p4: play("soup", "steam", 550),
      p0: play("soup", "steam", 550, 90),
      p1: play("soup", "steam", 550, 180),
      p2: play("soup", "spoon", 650, 0, { origin: "0% 100%" }),
    },
    keyframes:
      kf("soup", "steam", "0%{transform:translateY(1.5px);opacity:0}60%{transform:translateY(-.3px);opacity:1}100%{transform:none;opacity:1}") +
      kf("soup", "spoon", "0%{transform:none}35%{transform:rotate(-12deg)}70%{transform:rotate(4deg)}100%{transform:none}"),
  },

  space: {
    note: "The space bar presses down, its ends squashing, and springs back up.",
    motion: { p0: { animation: `ki-space-press .5s ${SMOOTH}` } },
    keyframes: kf(
      "space",
      "press",
      `0%,100%{transform:none;d:path("M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1")}35%{transform:translateY(.6px);d:path("M22 17.6v.4c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-.4")}`,
    ),
  },

  spade: {
    note: "The spade swells up off its stem, which squashes under it, and settles.",
    motion: {
      p1: play("spade", "pop", 600, 0, { origin: "50% 100%" }),
      p0: play("spade", "stem", 600, 0, { origin: "50% 100%" }),
    },
    keyframes:
      kf("spade", "pop", "0%{transform:none}30%{transform:translateY(-.6px) scale(1.1)}60%{transform:scale(.97)}100%{transform:none}") +
      kf("spade", "stem", "0%{transform:none}30%{transform:scaleY(.8)}60%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  sparkle: {
    note: "The star twinkles: it pinches small, turns a quarter on its centre and flares back.",
    motion: { p0: play("sparkle", "twinkle", 700) },
    keyframes: kf("sparkle", "twinkle", "0%{transform:none}40%{transform:rotate(45deg) scale(.7)}80%{transform:rotate(90deg) scale(1.08)}100%{transform:rotate(90deg)}"),
  },

  speaker: {
    note: "The cone pumps to a beat, the dust cap a touch harder, and the tweeter flickers.",
    motion: {
      p2: play("speaker", "cone", 700),
      p3: play("speaker", "cap", 700),
      p1: play("speaker", "tweet", 700, 60),
    },
    keyframes:
      kf("speaker", "cone", "0%{transform:none}20%{transform:scale(1.1)}40%{transform:scale(.96)}60%{transform:scale(1.07)}100%{transform:none}") +
      kf("speaker", "cap", "0%{transform:none}20%{transform:scale(1.8)}40%{transform:scale(.8)}60%{transform:scale(1.5)}100%{transform:none}") +
      kf("speaker", "tweet", "0%{transform:none}25%{transform:scale(1.8)}50%{transform:none}75%{transform:scale(1.5)}100%{transform:none}"),
  },

  speech: {
    note: "The head nods forward as it speaks and the sound waves ripple out from the mouth.",
    motion: {
      p0: play("speech", "nod", 650, 0, { box: "view-box", origin: "6px 20px" }),
      p2: play("speech", "wave", 450, 80),
      p1: play("speech", "wave", 450, 170),
    },
    keyframes:
      kf("speech", "nod", "0%{transform:none}30%{transform:rotate(3deg)}100%{transform:none}") +
      kf("speech", "wave", "0%{transform:translateX(-1.2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "spell-check": {
    note: "The letter hops up and the tick draws itself beneath it.",
    draw: ["p0"],
    motion: {
      p1: play("spell-check", "hop", 500),
      p2: play("spell-check", "hop", 500),
      p0: draw("spell-check", 420, 180),
    },
    keyframes: kf("spell-check", "hop", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.2px)}100%{transform:none}") + drawKf("spell-check"),
  },

  spline: {
    note: "The first point pops in, the curve draws itself across, and the second point pops in where it lands.",
    draw: ["p2"],
    motion: {
      p1: play("spline", "point", 400),
      p2: draw("spline", 500, 120),
      p0: play("spline", "point", 400, 480),
    },
    keyframes: kf("spline", "point", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:none;opacity:1}") + drawKf("spline"),
  },

  bezier: {
    note: "The pointer pulls on the curve, which flattens towards it and springs back.",
    motion: {
      p0: play("bezier", "pull", 700),
      p1: { animation: `ki-bezier-bend .7s ${SMOOTH}` },
    },
    keyframes:
      kf("bezier", "pull", "0%{transform:none}40%{transform:translate(.9px,.9px)}100%{transform:none}") +
      kf("bezier", "bend", `0%,100%{d:path("M5 17A12 12 0 0 1 17 5")}40%{d:path("M5 17A20 20 0 0 1 17 5")}`),
  },

  split: {
    note: "The path draws up from the bottom and forks; the two arrowheads push out apart.",
    draw: ["p2", "p3"],
    motion: {
      p2: draw("split", 450),
      p3: draw("split", 350, 220),
      p1: play("split", "left", 600, 200),
      p0: play("split", "right", 600, 200),
    },
    keyframes:
      drawKf("split") +
      kf("split", "left", "0%{transform:none}40%{transform:translate(-1px,-1px)}100%{transform:none}") +
      kf("split", "right", "0%{transform:none}40%{transform:translate(1px,-1px)}100%{transform:none}"),
  },

  "split-horizontal": {
    note: "The two halves part on either side of the divider, which stretches, and close up again.",
    motion: {
      p2: play("split-horizontal", "left", 600),
      p1: play("split-horizontal", "right", 600),
      p0: play("split-horizontal", "mid", 600),
    },
    keyframes:
      kf("split-horizontal", "left", "0%{transform:none}35%{transform:translateX(-1px)}70%{transform:translateX(.2px)}100%{transform:none}") +
      kf("split-horizontal", "right", "0%{transform:none}35%{transform:translateX(1px)}70%{transform:translateX(-.2px)}100%{transform:none}") +
      kf("split-horizontal", "mid", "0%{transform:none}35%{transform:scaleY(1.06)}100%{transform:none}"),
  },

  "spray-can": {
    note: "The can is shaken on its base, then the spray puffs out of the nozzle, nearest drops first.",
    motion: {
      ...Object.fromEntries(["p6", "p7", "p8", "p9"].map((p) => [p, play("spray-can", "shake", 450, 0, { box: "view-box", origin: "17px 22px" })])),
      p2: play("spray-can", "puff", 400, 300),
      p1: play("spray-can", "puff", 400, 370),
      p4: play("spray-can", "puff", 400, 370),
      p0: play("spray-can", "puff", 400, 440),
      p3: play("spray-can", "puff", 400, 440),
      p5: play("spray-can", "puff", 400, 440),
    },
    keyframes:
      kf("spray-can", "shake", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("spray-can", "puff", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.5);opacity:1}100%{transform:none;opacity:1}"),
  },

  sprout: {
    note: "The stem stretches up and the left leaf unfolds from it.",
    motion: {
      p0: play("sprout", "grow", 650, 0, { origin: "50% 100%" }),
      p1: play("sprout", "leaf", 650, 100, { origin: "100% 100%" }),
    },
    keyframes:
      kf("sprout", "grow", "0%{transform:scaleY(.85)}55%{transform:scaleY(1.05)}100%{transform:none}") +
      kf("sprout", "leaf", "0%{transform:rotate(-25deg) scale(.6)}60%{transform:rotate(4deg) scale(1.03)}100%{transform:none}"),
  },

  spotlight: {
    note: "The lamp swings on its rod and the beams flick on in front of it.",
    motion: {
      p3: play("spotlight", "swing", 750, 0, { box: "view-box", origin: "8px 9px" }),
      p4: play("spotlight", "swing", 750, 0, { box: "view-box", origin: "8px 9px" }),
      p2: play("spotlight", "beam", 750, 0, { box: "view-box", origin: "8px 9px" }),
      p1: play("spotlight", "beam", 750, 60, { box: "view-box", origin: "8px 9px" }),
      p0: play("spotlight", "beam", 750, 120, { box: "view-box", origin: "8px 9px" }),
    },
    keyframes:
      kf("spotlight", "swing", "0%{transform:none}30%{transform:rotate(-8deg)}65%{transform:rotate(3deg)}100%{transform:none}") +
      kf("spotlight", "beam", "0%{transform:rotate(-8deg);opacity:0}30%{transform:rotate(-8deg);opacity:0}65%{transform:rotate(3deg);opacity:1}100%{transform:none;opacity:1}"),
  },

  "text-select": {
    note: "The dashes of the selection light up in turn round the box while the text lines write themselves.",
    draw: ["p12", "p10", "p11"],
    motion: {
      ...Object.fromEntries(
        ["p9", "p14", "p1", "p2", "p5", "p3", "p4", "p0", "p13", "p8", "p6", "p7"].map((p, i) => [p, play("text-select", "dash", 450, i * 40)]),
      ),
      p12: draw("text-select", 350, 60),
      p10: draw("text-select", 350, 160),
      p11: draw("text-select", 300, 260),
    },
    keyframes: kf("text-select", "dash", "0%{opacity:.15}50%{opacity:1}100%{opacity:1}") + drawKf("text-select"),
  },

  dimensions: {
    note: "The two corner measures stretch out to the edges and back.",
    motion: { p1: play("dimensions", "tl", 600), p2: play("dimensions", "br", 600) },
    keyframes:
      kf("dimensions", "tl", "0%{transform:none}35%{transform:translate(-1.2px,-1.2px)}70%{transform:translate(.2px,.2px)}100%{transform:none}") +
      kf("dimensions", "br", "0%{transform:none}35%{transform:translate(1.2px,1.2px)}70%{transform:translate(-.2px,-.2px)}100%{transform:none}"),
  },

  "round-corner": {
    note: "The round corner draws itself in and the square settles towards it.",
    draw: ["p0"],
    motion: { p0: draw("round-corner", 500), p1: play("round-corner", "settle", 600, 100, { origin: "100% 0%" }) },
    keyframes: drawKf("round-corner") + kf("round-corner", "settle", "0%{transform:none}35%{transform:scale(.96)}100%{transform:none}"),
  },

  "shape-unite": {
    note: "The joined shape pinches in on its middle and swells back out as one.",
    motion: { p0: play("shape-unite", "join", 600) },
    keyframes: kf("shape-unite", "join", "0%{transform:none}30%{transform:scale(.9) rotate(-4deg)}60%{transform:scale(1.04) rotate(1deg)}100%{transform:none}"),
  },

  "shape-intersect": {
    note: "The two squares slide in from opposite corners and their overlap pops.",
    motion: {
      ...Object.fromEntries(["p4", "p10", "p1", "p3", "p8"].map((p) => [p, play("shape-intersect", "tl", 600)])),
      ...Object.fromEntries(["p5", "p6", "p7", "p2", "p0"].map((p) => [p, play("shape-intersect", "br", 600)])),
      p9: play("shape-intersect", "pop", 500, 200),
    },
    keyframes:
      kf("shape-intersect", "tl", "0%{transform:translate(-1.2px,-1.2px)}60%{transform:translate(.2px,.2px)}100%{transform:none}") +
      kf("shape-intersect", "br", "0%{transform:translate(1.2px,1.2px)}60%{transform:translate(-.2px,-.2px)}100%{transform:none}") +
      kf("shape-intersect", "pop", "0%{transform:none}40%{transform:scale(1.15)}100%{transform:none}"),
  },

  "shape-subtract": {
    note: "The front square pushes in from its corner and the back square gives way where it bites.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p3", "p4", "p5"].map((p) => [p, play("shape-subtract", "front", 600)])),
      p2: play("shape-subtract", "back", 600, 0, { origin: "0% 0%" }),
    },
    keyframes:
      kf("shape-subtract", "front", "0%{transform:none}35%{transform:translate(-1px,-1px)}70%{transform:translate(.2px,.2px)}100%{transform:none}") +
      kf("shape-subtract", "back", "0%,15%{transform:none}40%{transform:scale(.95)}100%{transform:none}"),
  },

  "shape-exclude": {
    note: "The two squares slide apart from each other and back together.",
    motion: { p1: play("shape-exclude", "tl", 600), p0: play("shape-exclude", "br", 600) },
    keyframes:
      kf("shape-exclude", "tl", "0%{transform:none}35%{transform:translate(-1px,-1px)}70%{transform:translate(.2px,.2px)}100%{transform:none}") +
      kf("shape-exclude", "br", "0%{transform:none}35%{transform:translate(1px,1px)}70%{transform:translate(-.2px,-.2px)}100%{transform:none}"),
  },

  "square-stack": {
    note: "The cards behind fan out from the front one, the back card furthest, and slide home.",
    motion: {
      p0: play("square-stack", "back", 650),
      p1: play("square-stack", "mid", 650, 30),
      p2: play("square-stack", "front", 650),
    },
    keyframes:
      kf("square-stack", "back", "0%{transform:none}35%{transform:translate(-1.2px,-1.2px)}100%{transform:none}") +
      kf("square-stack", "mid", "0%{transform:none}35%{transform:translate(-.6px,-.6px)}100%{transform:none}") +
      kf("square-stack", "front", "0%{transform:none}35%{transform:scale(1.05)}100%{transform:none}"),
  },

  "terminal-square": {
    note: "The prompt nudges forward and the cursor types itself out after it.",
    draw: ["p1"],
    motion: { p0: play("terminal-square", "prompt", 500), p1: draw("terminal-square", 320, 150) },
    keyframes: kf("terminal-square", "prompt", "0%{transform:none}35%{transform:translateX(.9px)}100%{transform:none}") + drawKf("terminal-square"),
  },

  "square-x": {
    note: "The box gives a little and the cross draws itself, one stroke after the other.",
    draw: ["p1", "p2"],
    motion: { p0: bump("square-x"), p1: draw("square-x", 340, 80), p2: draw("square-x", 340, 190) },
    keyframes: bumpKf("square-x") + drawKf("square-x"),
  },

  squircle: {
    note: "The squircle squashes down on its base and springs back up.",
    motion: { p0: play("squircle", "squash", 600, 0, { origin: "50% 100%" }) },
    keyframes: kf("squircle", "squash", "0%{transform:none}30%{transform:scale(1.08,.9)}60%{transform:scale(.97,1.04)}100%{transform:none}"),
  },

  squirrel: {
    note: "The body and tail flick back from the feet while the head looks up and the paw steps.",
    motion: {
      p3: play("squirrel", "flick", 750, 0, { box: "view-box", origin: "12px 22px" }),
      p1: play("squirrel", "head", 700, 60, { box: "view-box", origin: "16px 17px" }),
      p2: play("squirrel", "head", 700, 60, { box: "view-box", origin: "16px 17px" }),
      p0: play("squirrel", "paw", 600, 100),
    },
    keyframes:
      kf("squirrel", "flick", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(2deg)}100%{transform:none}") +
      kf("squirrel", "head", "0%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("squirrel", "paw", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  stamp: {
    note: "The stamp presses down, its handle a beat after the base, and the mark it leaves draws in below.",
    draw: ["p2"],
    motion: {
      p1: play("stamp", "press", 600),
      p0: play("stamp", "press", 600, 40),
      p2: draw("stamp", 300, 220),
    },
    keyframes:
      kf("stamp", "press", "0%{transform:none}25%{transform:translateY(-.8px)}45%{transform:translateY(1px)}70%{transform:translateY(-.2px)}100%{transform:none}") +
      drawKf("stamp"),
  },

  "star-half": {
    note: "The half star swings out on its straight edge and springs back.",
    motion: { p0: play("star-half", "twinkle", 600, 0, { origin: "100% 50%" }) },
    keyframes: kf("star-half", "twinkle", "0%{transform:none}35%{transform:scale(1.12) rotate(-8deg)}70%{transform:scale(.97) rotate(2deg)}100%{transform:none}"),
  },

  "star-off": {
    note: "The slash cuts across and the star's two pieces shift apart along it.",
    draw: ["p2"],
    motion: {
      p2: draw("star-off", 420),
      p0: play("star-off", "a", 650, 120),
      p1: play("star-off", "b", 650, 120),
    },
    keyframes:
      drawKf("star-off") +
      kf("star-off", "a", "0%{transform:none}35%{transform:translate(.6px,-.6px)}100%{transform:none}") +
      kf("star-off", "b", "0%{transform:none}35%{transform:translate(-.6px,.6px)}100%{transform:none}"),
  },

  "step-back": {
    note: "The triangle steps back one and the bar follows it a beat later.",
    motion: { p0: play("step-back", "step", 600), p1: play("step-back", "step", 600, 70) },
    keyframes: kf("step-back", "step", "0%{transform:none}35%{transform:translateX(-1.5px)}65%{transform:translateX(.3px)}100%{transform:none}"),
  },

  "step-forward": {
    note: "The triangle steps on one and the bar follows it a beat later.",
    motion: { p0: play("step-forward", "step", 600), p1: play("step-forward", "step", 600, 70) },
    keyframes: kf("step-forward", "step", "0%{transform:none}35%{transform:translateX(1.5px)}65%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  stethoscope: {
    note: "The chest piece swings on its tube from the fork, and the ear tips bob.",
    motion: {
      p3: play("stethoscope", "swing", 800, 0, { box: "view-box", origin: "8px 15px" }),
      p4: play("stethoscope", "swing", 800, 0, { box: "view-box", origin: "8px 15px" }),
      p0: play("stethoscope", "ear", 500, 80),
      p1: play("stethoscope", "ear", 500, 80),
    },
    keyframes:
      kf("stethoscope", "swing", "0%{transform:none}25%{transform:rotate(-9deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("stethoscope", "ear", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  sticker: {
    note: "The corner peels up while the face blinks and smiles wider.",
    motion: {
      p1: play("sticker", "peel", 650, 0, { origin: "0% 100%" }),
      p2: play("sticker", "blink", 450, 80),
      p3: play("sticker", "blink", 450, 80),
      p4: play("sticker", "smile", 550, 60, { origin: "50% 0%" }),
    },
    keyframes:
      kf("sticker", "peel", "0%{transform:none}35%{transform:scale(1.3)}70%{transform:scale(.95)}100%{transform:none}") +
      kf("sticker", "blink", "0%{transform:none}35%{transform:scaleY(.15)}70%{transform:none}100%{transform:none}") +
      kf("sticker", "smile", "0%{transform:none}40%{transform:scale(1.2,1.4)}100%{transform:none}"),
  },

  "sticky-note": {
    note: "The note tips on its bottom corner and its folded corner flutters.",
    motion: {
      p0: play("sticky-note", "tip", 700, 0, { origin: "0% 100%" }),
      p1: play("sticky-note", "flutter", 700, 0, { origin: "0% 100%" }),
    },
    keyframes:
      kf("sticky-note", "tip", "0%{transform:none}30%{transform:rotate(-3deg)}65%{transform:rotate(1deg)}100%{transform:none}") +
      kf("sticky-note", "flutter", "0%{transform:none}30%{transform:translate(-.4px,-.3px) scale(1.25)}55%{transform:scale(.9)}80%{transform:scale(1.06)}100%{transform:none}"),
  },

  store: {
    note: "The awning ripples on the shop front and the door swings open and shut.",
    motion: {
      p1: play("store", "awning", 700, 0, { origin: "50% 0%" }),
      p0: play("store", "door", 700, 80, { origin: "0% 50%" }),
    },
    keyframes:
      kf("store", "awning", "0%{transform:none}25%{transform:scaleY(1.08)}50%{transform:scaleY(.95)}75%{transform:scaleY(1.03)}100%{transform:none}") +
      kf("store", "door", "0%{transform:none}40%{transform:scaleX(.55)}100%{transform:none}"),
  },

  stretch: {
    note: "The two bars squeeze in and stretch out to full width, one after the other.",
    motion: { p0: play("stretch", "bar", 600), p1: play("stretch", "bar", 600, 70) },
    keyframes: kf("stretch", "bar", "0%{transform:none}30%{transform:scaleX(.82)}65%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  spool: {
    note: "The spool turns on its upright axis, its two flanges narrowing and widening as it winds.",
    motion: {
      p0: play("spool", "wind", 800, 0, { box: "view-box", origin: "12px 12px" }),
      p1: play("spool", "wind", 800, 40, { box: "view-box", origin: "12px 12px" }),
    },
    keyframes: kf("spool", "wind", "0%{transform:none}25%{transform:scaleX(.7)}50%{transform:none}75%{transform:scaleX(.8)}100%{transform:none}"),
  },

  radical: {
    note: "The root sign writes itself, tick first, inside the box, which gives a little.",
    draw: ["p0"],
    motion: { p1: bump("radical"), p0: draw("radical", 600, 60) },
    keyframes: bumpKf("radical") + drawKf("radical"),
  },

  strikethrough: {
    note: "The letter's two halves pull apart a touch and the line strikes through between them.",
    draw: ["p2"],
    motion: {
      p0: play("strikethrough", "up", 600),
      p1: play("strikethrough", "down", 600),
      p2: draw("strikethrough", 400, 120),
    },
    keyframes:
      kf("strikethrough", "up", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}") +
      kf("strikethrough", "down", "0%{transform:none}35%{transform:translateY(.6px)}100%{transform:none}") +
      drawKf("strikethrough"),
  },

  subscript: {
    note: "The cross gives a little and the small digit drops in below it.",
    motion: { p0: play("subscript", "x", 500), p1: play("subscript", "x", 500), p2: play("subscript", "drop", 550, 100) },
    keyframes: kf("subscript", "x", "0%{transform:none}35%{transform:scale(.9)}100%{transform:none}") + dropKf("subscript"),
  },

  superscript: {
    note: "The cross gives a little and the small digit rises in above it.",
    motion: { p0: play("superscript", "x", 500), p1: play("superscript", "x", 500), p2: play("superscript", "rise", 550, 100) },
    keyframes: kf("superscript", "x", "0%{transform:none}35%{transform:scale(.9)}100%{transform:none}") + riseKf("superscript"),
  },

  "sun-dim": {
    note: "The sun's core swells and its dots of light pulse out and back.",
    motion: {
      p0: play("sun-dim", "core", 650),
      ...Object.fromEntries(
        ["p1", "p5", "p2", "p6", "p3", "p7", "p4", "p8"].map((p, i) => [p, play("sun-dim", "ray", 600, i * 30, { box: "view-box", origin: "12px 12px" })]),
      ),
    },
    keyframes:
      kf("sun-dim", "core", "0%{transform:none}35%{transform:scale(1.08)}100%{transform:none}") +
      kf("sun-dim", "ray", "0%{transform:none;opacity:1}40%{transform:scale(1.18);opacity:.4}100%{transform:none;opacity:1}"),
  },

  "sun-moon": {
    note: "The rays sweep round the centre one way while the moon rocks back the other.",
    motion: {
      ...Object.fromEntries(["p0", "p2", "p3", "p4"].map((p) => [p, play("sun-moon", "rays", 800, 0, { box: "view-box", origin: "12px 12px" })])),
      p1: play("sun-moon", "moon", 800, 0, { box: "view-box", origin: "12px 12px" }),
    },
    keyframes:
      kf("sun-moon", "rays", "0%{transform:none}45%{transform:rotate(25deg)}100%{transform:none}") +
      kf("sun-moon", "moon", "0%{transform:none}45%{transform:rotate(-12deg)}100%{transform:none}"),
  },

  sunrise: {
    note: "The sun rises over the horizon, the arrow climbs above it and the rays come out, low ones first.",
    draw: ["p0"],
    motion: {
      p7: play("sunrise", "rise", 600),
      p0: draw("sunrise", 400, 120),
      p6: play("sunrise", "arrow", 550, 120),
      p2: play("sunrise", "ray", 400, 200),
      p3: play("sunrise", "ray", 400, 200),
      p1: play("sunrise", "ray", 400, 280),
      p4: play("sunrise", "ray", 400, 280),
    },
    keyframes:
      kf("sunrise", "rise", "0%{transform:translateY(2.5px);opacity:0}60%{transform:translateY(-.3px);opacity:1}100%{transform:none;opacity:1}") +
      drawKf("sunrise") +
      kf("sunrise", "arrow", "0%{transform:translateY(2px);opacity:0}60%{transform:translateY(-.4px);opacity:1}100%{transform:none;opacity:1}") +
      kf("sunrise", "ray", "0%{opacity:0}100%{opacity:1}"),
  },

  sunset: {
    note: "The arrow pushes the sun down below the horizon, the rays fade, and it comes back up.",
    motion: {
      p0: play("sunset", "arrow", 750),
      p6: play("sunset", "arrow", 750),
      p7: play("sunset", "set", 750, 60),
      ...Object.fromEntries(["p1", "p2", "p3", "p4"].map((p) => [p, play("sunset", "dim", 750, 60)])),
    },
    keyframes:
      kf("sunset", "arrow", "0%{transform:none}35%{transform:translateY(1.5px)}100%{transform:none}") +
      kf("sunset", "set", "0%{transform:none;opacity:1}40%{transform:translateY(2.5px);opacity:0}100%{transform:none;opacity:1}") +
      kf("sunset", "dim", "0%{opacity:1}40%{opacity:.2}100%{opacity:1}"),
  },

  swatches: {
    note: "The swatches fan open from their shared corner: the front one tilts, the two behind it swing out, and they close.",
    motion: {
      p0: play("swatches", "front", 700, 0, { origin: "50% 100%" }),
      p2: play("swatches", "front", 700, 0, { box: "view-box", origin: "7px 21px" }),
      p3: play("swatches", "fan", 700, 40, { box: "view-box", origin: "7px 17px" }),
      // the flat swatch fans with the angled one: their fill is one shape (named after the angled one's outline)
      p1: play("swatches", "fan", 700, 40, { box: "view-box", origin: "7px 17px" }),
    },
    keyframes:
      kf("swatches", "front", "0%{transform:none}35%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("swatches", "fan", "0%{transform:none}35%{transform:rotate(8deg)}70%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "switch-camera": {
    note: "The two arrows swap round the lens in a half turn, and the lens flips as they pass.",
    motion: {
      p3: play("switch-camera", "swap", 800, 0, { box: "view-box", origin: "12px 12px" }),
      p4: play("switch-camera", "swap", 800, 0, { box: "view-box", origin: "12px 12px" }),
      p2: play("switch-camera", "flip", 800),
    },
    keyframes:
      kf("switch-camera", "swap", "0%{transform:none}75%{transform:rotate(190deg)}100%{transform:rotate(180deg)}") +
      kf("switch-camera", "flip", "0%{transform:none}40%{transform:scaleX(.15)}75%{transform:scaleX(1.06)}100%{transform:none}"),
  },

  sword: {
    note: "The blade swings from the hilt and the grip turns with it a little less.",
    motion: {
      p3: play("sword", "blade", 700, 0, { box: "view-box", origin: "5px 19px" }),
      p0: play("sword", "blade", 700, 0, { box: "view-box", origin: "5px 19px" }),
      p1: play("sword", "grip", 700, 0, { box: "view-box", origin: "5px 19px" }),
      p2: play("sword", "grip", 700, 0, { box: "view-box", origin: "5px 19px" }),
    },
    keyframes:
      kf("sword", "blade", "0%{transform:none}30%{transform:rotate(-12deg)}60%{transform:rotate(5deg)}100%{transform:none}") +
      kf("sword", "grip", "0%{transform:none}30%{transform:rotate(-9deg)}60%{transform:rotate(4deg)}100%{transform:none}"),
  },

  swords: {
    note: "The two swords swing in from their hilts and clash where they cross.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p3", "p4"].map((p) => [p, play("swords", "a", 650, 0, { box: "view-box", origin: "18px 18px" })])),
      ...Object.fromEntries(["p2", "p5", "p6", "p7"].map((p) => [p, play("swords", "b", 650, 0, { box: "view-box", origin: "6px 18px" })])),
    },
    keyframes:
      kf("swords", "a", "0%{transform:none}30%{transform:rotate(-8deg)}45%{transform:rotate(2deg)}70%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("swords", "b", "0%{transform:none}30%{transform:rotate(8deg)}45%{transform:rotate(-2deg)}70%{transform:rotate(1deg)}100%{transform:none}"),
  },

  syringe: {
    note: "The plunger pushes in down the barrel and the needle gives a small jab.",
    motion: {
      p0: play("syringe", "push", 650),
      p1: play("syringe", "push", 650),
      p4: play("syringe", "jab", 650, 120),
    },
    keyframes:
      kf("syringe", "push", "0%{transform:none}40%{transform:translate(-1.2px,1.2px)}100%{transform:none}") +
      kf("syringe", "jab", "0%{transform:none}35%{transform:translate(-.6px,.6px)}100%{transform:none}"),
  },

  table: {
    note: "The table gives a little and its row and column lines draw themselves in.",
    draw: ["p2", "p3", "p0"],
    motion: {
      p1: bump("table"),
      p2: draw("table", 350, 60),
      p3: draw("table", 350, 140),
      p0: draw("table", 350, 220),
    },
    keyframes: bumpKf("table") + drawKf("table"),
  },

  "table-of-contents": {
    note: "Each line writes itself in and its page dot pops at its end, top to bottom.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p0: draw("table-of-contents", 350),
      p1: draw("table-of-contents", 350, 90),
      p2: draw("table-of-contents", 350, 180),
      p3: play("table-of-contents", "dot", 400, 120),
      p4: play("table-of-contents", "dot", 400, 210),
      p5: play("table-of-contents", "dot", 400, 300),
    },
    keyframes: drawKf("table-of-contents") + growKf("table-of-contents").replace("-grow", "-dot"),
  },

  "merge-cells": {
    note: "The rows squeeze together on the middle row and the dividers above and below shrink back, then all settles.",
    motion: {
      p3: play("merge-cells", "down", 650),
      p2: play("merge-cells", "up", 650),
      p1: play("merge-cells", "shrink", 650, 0, { origin: "50% 0%" }),
      p0: play("merge-cells", "shrink", 650, 0, { origin: "50% 100%" }),
    },
    keyframes:
      kf("merge-cells", "down", "0%{transform:none}35%{transform:translateY(1px)}100%{transform:none}") +
      kf("merge-cells", "up", "0%{transform:none}35%{transform:translateY(-1px)}100%{transform:none}") +
      kf("merge-cells", "shrink", "0%{transform:none}35%{transform:scaleY(.75)}100%{transform:none}"),
  },

  "split-cells": {
    note: "The rows ease apart and the divider draws in down the middle cell.",
    draw: ["p0"],
    motion: {
      p2: play("split-cells", "up", 600),
      p1: play("split-cells", "down", 600),
      p0: draw("split-cells", 350, 150),
    },
    keyframes:
      kf("split-cells", "up", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}") +
      kf("split-cells", "down", "0%{transform:none}35%{transform:translateY(.6px)}100%{transform:none}") +
      drawKf("split-cells"),
  },

  tablet: {
    note: "The tablet tips on its bottom edge and settles, and its home dot lights up.",
    motion: {
      p0: play("tablet", "tip", 650, 0, { origin: "50% 100%" }),
      p1: play("tablet", "dot", 500, 100),
    },
    keyframes:
      kf("tablet", "tip", "0%{transform:none}30%{transform:rotate(-5deg)}60%{transform:rotate(2deg)}100%{transform:none}") +
      kf("tablet", "dot", "0%{transform:none}40%{transform:scale(1.8)}100%{transform:none}"),
  },

  pills: {
    note: "The two pills roll half a turn on the spot, one after the other.",
    motion: {
      p0: play("pills", "roll", 800, 0, { box: "view-box", origin: "7px 7px" }),
      p3: play("pills", "roll", 800, 0, { box: "view-box", origin: "7px 7px" }),
      p1: play("pills", "roll", 800, 90, { box: "view-box", origin: "17px 17px" }),
      p2: play("pills", "roll", 800, 90, { box: "view-box", origin: "17px 17px" }),
    },
    keyframes: kf("pills", "roll", "0%{transform:none}75%{transform:rotate(-190deg)}100%{transform:rotate(-180deg)}"),
  },

  "tablet-phone": {
    note: "The phone slides out from in front of the tablet and back.",
    motion: {
      p0: play("tablet-phone", "phone", 650),
      p2: play("tablet-phone", "phone", 650),
      p1: play("tablet-phone", "tablet", 650),
    },
    keyframes:
      kf("tablet-phone", "phone", "0%{transform:none}35%{transform:translateX(-1.2px)}70%{transform:translateX(.2px)}100%{transform:none}") +
      kf("tablet-phone", "tablet", "0%{transform:none}35%{transform:translateX(.5px)}100%{transform:none}"),
  },

  "tag-plus": {
    note: "The tag swings on its hole and the plus grows in beside it.",
    motion: {
      p1: play("tag-plus", "swing", 750, 0, { box: "view-box", origin: "7.5px 7.5px" }),
      p3: play("tag-plus", "swing", 750, 0, { box: "view-box", origin: "7.5px 7.5px" }),
      p0: play("tag-plus", "grow", 500, 120),
      p2: play("tag-plus", "grow", 500, 200),
    },
    keyframes:
      kf("tag-plus", "swing", "0%{transform:none}25%{transform:rotate(-8deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      growKf("tag-plus"),
  },

  "tag-x": {
    note: "The tag swings on its hole and the cross draws itself beside it.",
    draw: ["p1", "p2"],
    motion: {
      p0: play("tag-x", "swing", 750, 0, { box: "view-box", origin: "7.5px 7.5px" }),
      p3: play("tag-x", "swing", 750, 0, { box: "view-box", origin: "7.5px 7.5px" }),
      p1: draw("tag-x", 320, 120),
      p2: draw("tag-x", 320, 230),
    },
    keyframes:
      kf("tag-x", "swing", "0%{transform:none}25%{transform:rotate(-8deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      drawKf("tag-x"),
  },

  soap: {
    note: "The pump presses down and the drop squashes out and springs round.",
    motion: {
      p0: play("soap", "pump", 600),
      p1: play("soap", "pump", 600),
      p2: play("soap", "drop", 650, 150, { origin: "50% 100%" }),
    },
    keyframes:
      kf("soap", "pump", "0%{transform:none}30%{transform:translateY(1px)}100%{transform:none}") +
      kf("soap", "drop", "0%{transform:none}35%{transform:scale(1.08,.88)}65%{transform:scale(.96,1.06)}100%{transform:none}"),
  },

  sneaker: {
    note: "The heel lifts off the toe in a step while the laces and stripe lag a little.",
    motion: {
      p2: play("sneaker", "step", 700, 0, { box: "view-box", origin: "20px 20px" }),
      p0: play("sneaker", "step", 700, 50, { box: "view-box", origin: "20px 20px" }),
      p1: play("sneaker", "stripe", 700, 50),
    },
    keyframes:
      kf("sneaker", "step", "0%{transform:none}35%{transform:rotate(-7deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("sneaker", "stripe", "0%{transform:none}35%{transform:translate(-.6px,-.8px)}100%{transform:none}"),
  },

  padding: {
    note: "The four inset marks breathe in towards the middle and back out.",
    motion: Object.fromEntries(["p1", "p2", "p3", "p4"].map((p) => [p, play("padding", "breathe", 650, 0, { box: "view-box", origin: "12px 12px" })])),
    keyframes: kf("padding", "breathe", "0%{transform:none}35%{transform:scale(.82)}70%{transform:scale(1.04)}100%{transform:none}"),
  },

  summary: {
    note: "The lines write themselves in, top to bottom, and the arrow pushes on out of the corner.",
    draw: ["p0", "p4", "p3"],
    motion: {
      p0: draw("summary", 320),
      p4: draw("summary", 380, 90),
      p3: draw("summary", 320, 180),
      p1: play("summary", "push", 550, 250),
    },
    keyframes: drawKf("summary") + kf("summary", "push", "0%{transform:none}40%{transform:translateX(1.2px)}100%{transform:none}"),
  },

  franc: {
    note: "The franc writes itself: the stem and top, then its two bars.",
    draw: ["p1", "p0", "p2"],
    motion: { p1: draw("franc", 450), p0: draw("franc", 280, 260), p2: draw("franc", 280, 340) },
    keyframes: drawKf("franc"),
  },
};
