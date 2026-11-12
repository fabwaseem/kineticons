import type { Entry, Override } from "./types";

/** Batch g: its icons (pnpm import-icons g) and their motions. */
export const list: Entry[] = [
  ["Copyright", "copyright", "Copyright", "text", "spin-90", ["copyright", "license", "rights", "legal"], "The C turns in its ring."],
  ["CircleParking", "parking-sign", "Parking", "travel", "pop", ["parking", "car", "park", "lot"], "The P drops into place."],
  ["CircleMinus", "circle-minus", "Remove", "actions", "pop", ["minus", "remove", "subtract", "less"], "The bar shrinks and grows."],
  ["CirclePlus", "circle-plus", "Add circle", "actions", "spin-90", ["plus", "add", "new", "create"], "The cross turns."],
  ["CircleX", "circle-x", "Cancel", "status", "shake", ["close", "cancel", "error", "remove"], "The cross turns."],
  ["CirclePause", "circle-pause", "Pause circle", "media", "pop", ["pause", "hold", "wait"], "The bars squeeze."],
  ["CirclePlay", "circle-play", "Play circle", "media", "nudge-right", ["play", "start", "video", "listen"], "The triangle steps forward."],
  ["CircleStop", "circle-stop", "Stop circle", "media", "pop", ["stop", "end", "halt"], "The square presses in."],
  ["CirclePercent", "circle-percent", "Discount", "commerce", "spin-90", ["percent", "discount", "sale", "rate"], "The slash turns."],
  ["CircuitBoard", "circuit-board", "Circuit board", "devices", "pulse", ["circuit", "hardware", "electronics", "board"], "Current runs the traces."],
  ["Citrus", "citrus", "Citrus", "food", "spin", ["lemon", "orange", "lime", "fruit"], "The slice turns."],
  ["ClefTreble", "treble-clef", "Treble clef", "media", "wiggle", ["music", "clef", "notes", "score"], "The clef sways."],
  ["Clipboard", "clipboard", "Clipboard", "files", "tilt", ["clipboard", "paste", "board", "notes"], "The clip snaps."],
  ["ClipboardCopy", "clipboard-copy", "Copy to clipboard", "actions", "nudge-left", ["copy", "clipboard", "duplicate"], "The arrow goes in."],
  ["ClipboardList", "clipboard-list", "Task list", "files", "tilt", ["list", "tasks", "todo", "checklist"], "The lines write."],
  ["ClipboardPen", "clipboard-edit", "Edit clipboard", "files", "wiggle", ["edit", "form", "sign", "write"], "The pen writes."],
  ["ClipboardPlus", "clipboard-plus", "Add to clipboard", "files", "pop", ["add", "new", "clipboard", "form"], "The plus appears."],
  ["ClipboardX", "clipboard-x", "Clear clipboard", "files", "shake", ["remove", "clear", "clipboard", "reject"], "The cross shakes."],
  ["ClockAlert", "clock-alert", "Overdue", "status", "shake", ["late", "overdue", "deadline", "alert"], "The clock rattles."],
  ["ClockCheck", "clock-check", "On time", "status", "draw", ["on time", "done", "schedule", "check"], "The tick draws."],
  ["ClockPlus", "clock-plus", "Add time", "actions", "pop", ["add time", "schedule", "reminder", "plus"], "The plus appears."],
  ["CloudAlert", "cloud-alert", "Cloud error", "status", "shake", ["cloud", "sync error", "warning", "alert"], "The mark drops in."],
  ["CloudCheck", "cloud-check", "Saved to cloud", "status", "draw", ["synced", "saved", "cloud", "done"], "The tick draws."],
  ["CloudDownload", "cloud-download", "Cloud download", "actions", "nudge-down", ["download", "cloud", "fetch", "sync"], "The arrow drops."],
  ["CloudSync", "cloud-sync", "Cloud sync", "actions", "spin", ["sync", "cloud", "refresh", "update"], "The arrows turn."],
  ["CloudCog", "cloud-settings", "Cloud settings", "development", "spin", ["cloud", "settings", "server", "config"], "The cog turns."],
  ["Cloudy", "cloudy", "Cloudy", "weather", "float", ["clouds", "overcast", "weather"], "The clouds drift."],
  ["CloudDrizzle", "drizzle", "Drizzle", "weather", "float", ["drizzle", "light rain", "weather"], "Drops fall."],
  ["CloudRain", "rain", "Rain", "weather", "float", ["rain", "showers", "weather", "wet"], "Rain falls."],
  ["CloudSnow", "snow", "Snow", "weather", "float", ["snow", "winter", "cold", "weather"], "Flakes fall."],
  ["CloudHail", "hail", "Hail", "weather", "float", ["hail", "storm", "ice", "weather"], "Hail falls."],
  ["CloudFog", "fog", "Fog", "weather", "float", ["fog", "mist", "haze", "weather"], "Fog drifts."],
  ["CloudLightning", "storm", "Thunderstorm", "weather", "flash", ["storm", "thunder", "lightning", "weather"], "Lightning strikes."],
  ["CloudSun", "partly-sunny", "Partly sunny", "weather", "float", ["sun", "clouds", "partly cloudy", "weather"], "The sun peeks out."],
  ["CloudMoon", "cloudy-night", "Cloudy night", "weather", "float", ["night", "moon", "clouds", "weather"], "The moon peeks out."],
  ["Clover", "clover", "Clover", "nature", "spin-90", ["clover", "luck", "plant", "leaf"], "The leaves sway."],
  ["Club", "club", "Club", "shapes", "pop", ["club", "cards", "suit", "game"], "The club pops."],
  ["CodeXml", "code-xml", "Markup", "development", "pop", ["code", "html", "xml", "markup", "tags"], "The brackets part."],
  ["Cog", "cog", "Cog", "app", "spin", ["settings", "gear", "config", "cog"], "The cog turns."],
  ["Coins", "coins", "Coins", "commerce", "bounce", ["money", "coins", "cash", "payment"], "The coin flips."],
  ["Columns2", "columns", "Columns", "text", "pop", ["columns", "layout", "split", "panes"], "The divider slides."],
  ["Combine", "combine", "Combine", "actions", "pop", ["merge", "combine", "join", "group"], "The pieces come together."],
  ["Component", "component", "Component", "development", "spin-90", ["component", "module", "design system", "block"], "The pieces gather."],
  ["Computer", "computer", "Computer", "devices", "pop", ["computer", "desktop", "pc", "tower"], "The screen lights."],
  ["ConciergeBell", "concierge-bell", "Service bell", "commerce", "bounce", ["service", "reception", "hotel", "bell"], "The button is rung."],
  ["Cone", "cone", "Cone", "shapes", "pop", ["cone", "shape", "3d", "geometry"], "The cone bobs."],
  ["Construction", "construction", "Under construction", "status", "shake", ["construction", "work in progress", "barrier", "roadwork"], "The barrier rocks."],
  ["Contact", "contact", "Contact", "people", "tilt", ["contact", "card", "person", "address book"], "The card tilts."],
  ["Container", "container", "Container", "development", "bounce", ["container", "docker", "box", "shipping"], "The container lands."],
  ["Contrast", "contrast", "Contrast", "app", "spin", ["contrast", "theme", "display", "accessibility"], "The half turns."],
  ["Cookie", "cookie", "Cookie", "food", "wiggle", ["cookie", "biscuit", "consent", "snack"], "The cookie turns."],
  ["CookingPot", "cooking-pot", "Cooking pot", "food", "bounce", ["cook", "pot", "recipe", "kitchen"], "The lid lifts."],
  ["CopyCheck", "copy-check", "Copied", "status", "draw", ["copied", "done", "duplicate", "check"], "The tick draws."],
  ["CopyPlus", "copy-plus", "Duplicate", "actions", "pop", ["duplicate", "copy", "add", "clone"], "The plus appears."],
  ["CornerDownLeft", "corner-down-left", "Enter", "navigation", "nudge-left", ["enter", "return", "submit", "newline"], "The arrow turns the corner."],
  ["CornerDownRight", "corner-down-right", "Indent", "navigation", "nudge-right", ["reply", "sub-item", "nested", "indent"], "The arrow turns the corner."],
  ["CornerUpLeft", "corner-up-left", "Reply", "navigation", "nudge-left", ["reply", "back", "return", "undo"], "The arrow turns the corner."],
  ["CornerUpRight", "corner-up-right", "Forward", "navigation", "nudge-right", ["forward", "share", "redirect"], "The arrow turns the corner."],
  ["CreditCard", "credit-card", "Credit card", "commerce", "tilt", ["card", "payment", "pay", "billing"], "The card swipes."],
  ["Croissant", "croissant", "Croissant", "food", "wiggle", ["croissant", "bakery", "breakfast", "pastry"], "The croissant bobs."],
  ["Crop", "crop", "Crop", "actions", "pop", ["crop", "trim", "image", "resize"], "The corners close in."],
  ["Cross", "cross", "Cross", "shapes", "pop", ["cross", "church", "religion", "faith"], "The cross pops."],
  ["Crosshair", "crosshair", "Target", "navigation", "pulse", ["aim", "target", "focus", "locate"], "The sights close in."],
  ["Crown", "crown", "Crown", "status", "bounce", ["premium", "king", "vip", "crown", "pro"], "The crown hops."],
  ["Cuboid", "cuboid", "Cuboid", "shapes", "spin-90", ["box", "cube", "3d", "shape"], "The box turns."],
  ["Cylinder", "cylinder", "Cylinder", "shapes", "bounce", ["cylinder", "shape", "3d", "can"], "The cylinder squashes."],
  ["Cupcake", "cupcake", "Cupcake", "food", "bounce", ["cupcake", "cake", "dessert", "birthday"], "The frosting bounces."],
  ["CupSoda", "soda", "Soft drink", "food", "bounce", ["soda", "drink", "cup", "beverage"], "The straw wiggles."],
  ["Currency", "currency", "Currency", "commerce", "spin-90", ["currency", "money", "exchange", "price"], "The coin turns."],
  ["Database", "database", "Database", "development", "bounce", ["database", "storage", "data", "server"], "The disks stack."],
  ["DatabaseBackup", "database-backup", "Backup", "development", "spin-back", ["backup", "restore", "database", "history"], "The arrow turns back."],
  ["DatabaseSearch", "database-search", "Search data", "development", "wiggle", ["search", "query", "database", "find"], "The lens scans."],
  ["DatabaseZap", "database-zap", "Fast data", "development", "flash", ["cache", "fast", "database", "power"], "The bolt flashes."],
  ["Delete", "backspace", "Backspace", "text", "nudge-left", ["backspace", "delete", "erase", "clear"], "The key pulls left."],
  ["DiagramFlowVertical", "flowchart", "Flowchart", "charts", "draw", ["flowchart", "diagram", "process", "workflow"], "The flow runs."],
  ["Diamond", "diamond", "Diamond", "shapes", "pop", ["diamond", "rhombus", "shape", "decision"], "The diamond turns."],
  ["Diff", "diff", "Diff", "development", "pop", ["diff", "compare", "changes", "plus minus"], "The signs swap."],
  ["Disc", "disc", "Disc", "media", "spin", ["disc", "cd", "dvd", "record"], "The disc spins."],
  ["DiscAlbum", "album", "Album", "media", "spin", ["album", "record", "music", "vinyl"], "The record spins."],
  ["Divide", "divide", "Divide", "text", "pop", ["divide", "math", "division", "calculate"], "The dots part."],
  ["Dna", "dna", "DNA", "health", "wave", ["dna", "genetics", "biology", "science"], "The helix twists."],
  ["Dog", "dog", "Dog", "nature", "wiggle", ["dog", "pet", "animal", "puppy"], "The ears perk."],
  ["DollarSign", "dollar", "Dollar", "commerce", "spin-90", ["dollar", "money", "price", "usd"], "The S draws."],
  ["Donut", "donut", "Donut", "food", "spin", ["donut", "doughnut", "snack", "sweet"], "The donut rolls."],
  ["DoorClosed", "door-closed", "Door", "travel", "tilt", ["door", "exit", "room", "close"], "The door rattles."],
  ["DoorOpen", "door-open", "Open door", "travel", "tilt", ["door", "enter", "open", "exit"], "The door swings."],
  ["Dot", "dot", "Dot", "shapes", "pulse", ["dot", "point", "bullet", "status"], "The dot pulses."],
  ["DraftingCompass", "drafting-compass", "Drafting compass", "development", "swing", ["compass", "design", "drawing", "geometry"], "The leg swings."],
  ["Drama", "theater-masks", "Theater", "media", "wiggle", ["theater", "drama", "masks", "acting"], "The masks tilt."],
  ["Drill", "drill", "Drill", "development", "shake", ["drill", "tools", "diy", "build"], "The bit spins."],
  ["Drone", "drone", "Drone", "devices", "float", ["drone", "aerial", "flying", "quadcopter"], "The drone hovers."],
  ["Droplet", "droplet", "Droplet", "weather", "bounce", ["water", "drop", "liquid", "humidity"], "The drop wobbles."],
  ["Dice3", "dice-three", "Dice three", "app", "spin-90", ["dice", "game", "chance", "three"], "The die rolls."],
  ["CpuAi", "ai-chip", "AI chip", "development", "pulse", ["ai", "chip", "model", "processor"], "The chip glows."],
  ["CreditCardCheck", "payment-done", "Payment done", "commerce", "draw", ["paid", "payment", "card", "success"], "The tick draws."],
  ["Columns3", "columns-three", "Three columns", "text", "pop", ["columns", "layout", "board", "kanban"], "The columns slide."],
  ["DatabasePlus", "database-plus", "Add database", "development", "pop", ["database", "add", "new", "storage"], "The plus appears."],
  ["CircleStar", "circle-star", "Rating", "status", "spin-90", ["star", "rating", "featured", "badge"], "The star turns."],
  ["ClockArrowUp", "clock-arrow-up", "Sort by newest", "actions", "nudge-up", ["sort", "time", "newest", "ascending"], "The arrow rises."],
  ["CloudSunRain", "sun-shower", "Sun shower", "weather", "float", ["rain", "sun", "showers", "weather"], "Drops fall in the sun."],
  ["Dessert", "sundae", "Ice cream", "food", "bounce", ["ice cream", "dessert", "sweet", "sundae"], "The scoop wobbles."],
  ["CreditCardReader", "card-reader", "Card reader", "commerce", "tilt", ["pos", "card", "terminal", "payment"], "The card goes in."],
  ["DropletOff", "droplet-off", "No water", "weather", "shake", ["dry", "no water", "off", "drop"], "The slash draws."],
  ["Dock", "dock", "Dock", "app", "bounce", ["dock", "taskbar", "apps", "launcher"], "The bar bounces."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a pivot in icon units (24 grid) rather than in the part's own box */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a stroke drawing itself in from its start (or, with `end`, from its end); the part must be listed in `draw` */
const drawKf = (icon: string) =>
  `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}` +
  `@keyframes ki-${icon}-draw-end{from{stroke-dashoffset:-1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0, end = false) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw${end ? "-end" : ""} ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** a small mark that pops in from nothing */
const popKf = (icon: string) =>
  `@keyframes ki-${icon}-pop{0%{transform:scale(0);opacity:0}60%{transform:scale(1.3);opacity:1}100%{transform:none;opacity:1}}`;
const pop = (icon: string, delay = 0, ms = 420) => ({ animation: `ki-${icon}-pop ${ms}ms ${SMOOTH} ${delay}ms backwards` });
/** a plus that turns a quarter round (x, y) and springs back to size (a plus looks the same a quarter round) */
const plusKf = (icon: string) =>
  `@keyframes ki-${icon}-plus{0%{transform:none}45%{transform:rotate(90deg) scale(.7)}75%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}}`;
const plus = (icon: string, x: number, y: number, delay = 0) => ({ ...at(x, y), animation: `ki-${icon}-plus .6s ${SMOOTH} ${delay}ms` });
/** a cross that shrinks and twists, then springs back */
const crossKf = (icon: string) =>
  `@keyframes ki-${icon}-cross{0%{transform:none}35%{transform:rotate(-45deg) scale(.6)}70%{transform:rotate(8deg) scale(1.1)}100%{transform:none}}`;
const cross = (icon: string, x: number, y: number, delay = 0) => ({ ...at(x, y), animation: `ki-${icon}-cross .6s ${SMOOTH} ${delay}ms` });
/** a side-to-side shake of the head */
const shakeKf = (icon: string) =>
  `@keyframes ki-${icon}-shake{0%{transform:none}20%{transform:translateX(-.8px)}40%{transform:translateX(.7px)}60%{transform:translateX(-.4px)}80%{transform:translateX(.2px)}100%{transform:none}}`;
const shake = (icon: string, delay = 0) => ({ animation: `ki-${icon}-shake .55s ${SMOOTH} ${delay}ms` });
/** a whole ring breathing in once */
const ringKf = (icon: string) => `@keyframes ki-${icon}-ring{0%{transform:none}35%{transform:scale(.94)}70%{transform:scale(1.03)}100%{transform:none}}`;
const ring = (icon: string, delay = 0) => ({ animation: `ki-${icon}-ring .6s ${SMOOTH} ${delay}ms` });
/** a cloud that rises a touch and settles */
const cloudKf = (icon: string) => `@keyframes ki-${icon}-cloud{0%{transform:none}35%{transform:translateY(-.8px)}70%{transform:translateY(.3px)}100%{transform:none}}`;
const cloud = (icon: string) => ({ animation: `ki-${icon}-cloud .8s ${SMOOTH}` });
/** a drop that falls out of view and comes back in from above */
const fallKf = (icon: string) =>
  `@keyframes ki-${icon}-fall{0%{transform:none;opacity:1}45%{transform:translateY(2.5px);opacity:0}46%{transform:translateY(-2px);opacity:0}100%{transform:none;opacity:1}}`;
const fall = (icon: string, delay = 0, ms = 700) => ({ animation: `ki-${icon}-fall ${ms}ms ${SMOOTH} ${delay}ms` });
/** a mark that leaves one way and comes back in from the other side (dx, dy: where it goes) */
const throughKf = (icon: string, dx: number, dy: number) =>
  `@keyframes ki-${icon}-through{0%{transform:none;opacity:1}32%{transform:translate(${dx}px,${dy}px);opacity:0}33%{transform:translate(${-dx}px,${-dy}px);opacity:0}100%{transform:none;opacity:1}}`;
const through = (icon: string, delay = 0) => ({ animation: `ki-${icon}-through .65s ${SMOOTH} ${delay}ms` });
/** a clipboard's clip lifting and snapping back down on the board */
const clipKf = (icon: string) =>
  `@keyframes ki-${icon}-clip{0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}100%{transform:none}}`;
const clip = (icon: string) => ({ animation: `ki-${icon}-clip .6s ${SMOOTH}` });
/** clock hands making one full turn round the centre (12, 12) */
const handsKf = (icon: string) => `@keyframes ki-${icon}-hands{from{transform:none}to{transform:rotate(360deg)}}`;
const hands = (icon: string, ms = 700) => ({ ...at(12, 12), animation: `ki-${icon}-hands ${ms}ms ${SMOOTH}` });
/** the same turn for several parts round one pivot */
const turning = (parts: string[], icon: string, x: number, y: number, ms = 750, delay = 0) =>
  Object.fromEntries(parts.map((p) => [p, { ...at(x, y), animation: `ki-${icon}-turn ${ms}ms ${SMOOTH} ${delay}ms` }]));
const turnKf = (icon: string, deg: number) => `@keyframes ki-${icon}-turn{from{transform:none}to{transform:rotate(${deg}deg)}}`;

/** fill areas for outlines the source draws open */
const BOARD = "M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z";
const CLOUD = "M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z";

export const fills: Record<string, string> = {
  clipboard: BOARD,
  "clipboard-copy": BOARD,
  "clipboard-list": BOARD,
  "clipboard-plus": BOARD,
  "clipboard-x": BOARD,
  // the board, cut along the pen a unit clear of it where the source leaves the corner open
  "clipboard-edit": "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V7.11L10.52 16.59L8.94 22Z",
  // the cloud, with a round-topped notch a unit clear of the middle drop, which starts lower than the two that run out of it
  rain: "M17.5 17H14.75V16A2.75 2.75 0 0 0 9.25 16V17H9A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 1 1 17.5 17Z",
  // the cloud, its bottom raised a unit clear of the lower drops, with a notch round the middle drop on its edge
  drizzle: "M19.987 16.25H14.75V16A2.75 2.75 0 0 0 9.25 16V16.25H5.847A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 19.987 16.25Z",
  hail: CLOUD,
  // the cloud, its bottom raised a unit clear of the lower flakes, with a notch round the middle flake on its edge
  snow: "M19.987 16.25H14.698A2.8 2.8 0 0 0 9.302 16.25H5.847A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 19.987 16.25Z",
  fog: CLOUD,
  storm: CLOUD,
  "cloud-check": CLOUD,
  "cloud-alert": CLOUD,
  // the cloud, cut straight across a unit clear of the arrowhead under it
  "cloud-download": "M3.438 14.25A7 7 0 1 1 15.71 8H17.5A4.5 4.5 0 0 1 21.646 14.25Z",
  // the cloud, cut across its open bottom a unit clear of the lower arrow (the upper one is cut out of it)
  "cloud-sync": "M2.996 13.607A7 7 0 1 1 15.705 8H17.495A4.5 4.5 0 0 1 20.996 15.251L6 15.25Z",
  // the cloud, with a round bite a unit clear of the cog that sits in its open bottom
  "cloud-settings": "M4.2 15.1A7 7 0 1 1 14.13 5.242A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2L18.73 16.5A6.75 6.75 0 0 0 5.42 15.5Z",
  // the door leaf, which the source leaves open along the floor
  "door-closed": "M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z",
  // the card, cut round the tick a unit clear of it in the corner the source leaves open for it
  "payment-done": "M12.5 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V12.25A2.75 2.75 0 0 0 20.055 13.055L18 15.112A2.75 2.75 0 0 0 13.374 16.185Z",
  // the frosting, drawn as two open strokes round the cherry
  // (with a round notch a unit clear of the cherry, so the two stay separate)
  cupcake: "M3 13v-2a4 4 0 0 1 3-3.875V7A3 3 0 0 1 7.281 4.541A4.75 4.75 0 0 0 16.719 4.541A3 3 0 0 1 18 7v.125A4 4 0 0 1 21 11v2Z",
  // the bell's dome above its base
  "concierge-bell": "M4 16a8 8 0 1 1 16 0Z",
  // the cup, under its lid
  soda: "M6 8h12l-1.75 12.28a2 2 0 0 1-2 1.72H9.75a2 2 0 0 1-2-1.72Z",
  // the pot, under its rim
  "cooking-pot": "M4 12h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
  // the scoop and its drips, which the source leaves open under the cherry
  // (with a round notch a unit clear of the cherry)
  sundae: "M7.254 4.198A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0A10 10 0 0 0 16.746 4.198A4.75 4.75 0 0 1 7.254 4.198Z",
  // clock faces, cut about a unit clear of the badge that sits in the gap the source leaves in the ring
  "clock-alert": "M16 21.16A10 10 0 1 1 21.25 8.2L17.25 10.2V19.5Z",
  "clock-check": "M13.265 21.92A10 10 0 1 1 21.95 13L20.055 15.055L18 17.11L17.945 17.055A2.75 2.75 0 0 0 13.25 19Z",
  "clock-plus": "M13.267 21.92A10 10 0 1 1 21.92 13.267L22 16.25H21.75V16A2.75 2.75 0 0 0 16.25 16V16.25H16A2.75 2.75 0 0 0 13.25 19Z",
  "clock-arrow-up": "M13.227 21.925A10 10 0 1 1 21.994 12.337L19.945 12.055A2.75 2.75 0 0 0 16.055 12.055L12.055 16.055A2.75 2.75 0 0 0 11.25 18V19.5Z",
  // the cloud, closed along its bottom a unit clear of the two drops
  "sun-shower": "M3 20A5 5 0 1 1 11.9 16H13a3 3 0 0 1 2 5.24L13.75 20A2.75 2.75 0 0 0 9.44 17.73A2.75 2.75 0 0 0 4.25 19Z",
  // the whole head: ears, crown and face as one silhouette
  dog: "M6.156 11C4.225 11.722 2.58 10.703 2.5 10C2.387 9.006 3.677 3.47 6.5 3C8.423 2.679 10.151 3.845 10.151 5.235A7.497 7.497 0 0 1 14 5.277C14 3.887 15.844 2.679 17.767 3C20.59 3.47 21.88 9.006 21.767 10C21.687 10.703 20.042 11.722 18.111 11L19.507 11.247A11.702 11.702 0 0 1 20 14.556C20 18.728 16.418 21 12 21C7.582 21 4 18.728 4 14.556A13.152 13.152 0 0 1 4.42 11.247Z",
  // the body, chuck and grip (the trigger guard stays open)
  drill: "M4 2h9a1 1 0 0 1 1 1V4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3V9a1 1 0 0 1-1 1H9L7 18H3L5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
  // the mask behind, stopping a unit short of the front mask so the two stay separate
  "theater-masks": "M7.383 7.918C6.952 8.112 6.493 8.339 6 8.6C2.5 10.6 1.3 12.5 2.3 14.2C6.8 22 11.8 22.6 13.5 21.6C14.022 21.31 14.578 20.65 14.952 19.639L14.85 19.62L13.77 19.26L12.73 18.7L11.74 17.96L10.82 17.02L9.96 15.9L9.2 14.59L8.54 13.08L8 11.37L7.59 9.46Z",
  // the drum under the lid, its top edge four units below the lid's rim so the lid stays its own disc (the bands are
  // cut out), and cut about a unit clear of a badge where the source leaves the side open for it
  database: "M3 9A9 3 0 0 0 21 9V19A9 3 0 0 1 3 19Z",
  cylinder: "M3 9A9 3 0 0 0 21 9V19A9 3 0 0 1 3 19Z",
  // (the badge fills the drum's open side: only the strip left of it stays, its edge a unit clear of the arrowhead)
  "database-backup": "M3 9A9 3 0 0 0 9.25 11.857V16L9.47 21.88A9 3 0 0 1 3 19Z",
  "database-search": "M3 9A9 3 0 0 0 21 9V13.095A5.75 5.75 0 0 0 13.02 20.875L12.28 21.999A9 3 0 0 1 3 19Z",
  "database-zap": "M3 9A9 3 0 0 0 18.311 11.139L15.643 15.586A2.75 2.75 0 0 0 17.213 19.636L16.643 20.586L15 21.84A9 3 0 0 1 3 19Z",
  "database-plus": "M3 9A9 3 0 0 0 21 9V14.11A2.75 2.75 0 0 0 16.25 16V16.25H16A2.75 2.75 0 0 0 13.25 19L13.318 21.968A9 3 0 0 1 3 19Z",
};

export const motions: Record<string, Override> = {
  copyright: {
    note: "The C writes itself round inside the ring, which breathes in once.",
    draw: ["p0"],
    motion: { p0: draw("copyright", 520), p1: ring("copyright") },
    keyframes: drawKf("copyright") + ringKf("copyright"),
  },

  "parking-sign": {
    note: "The P drops into the sign and the ring gives under it.",
    motion: {
      p0: { animation: `ki-parking-sign-drop .6s ${SMOOTH}` },
      p1: ring("parking-sign", 120),
    },
    keyframes:
      "@keyframes ki-parking-sign-drop{0%{transform:translateY(-3px);opacity:0}45%{transform:translateY(.6px);opacity:1}70%{transform:translateY(-.2px)}100%{transform:none}}" +
      ringKf("parking-sign"),
  },

  "circle-minus": {
    note: "The bar shrinks to a stub and springs back out to full width.",
    motion: {
      p1: { animation: `ki-circle-minus-bar .55s ${SMOOTH}` },
      p0: ring("circle-minus", 60),
    },
    keyframes:
      "@keyframes ki-circle-minus-bar{0%{transform:none}35%{transform:scaleX(.35)}70%{transform:scaleX(1.15)}100%{transform:none}}" + ringKf("circle-minus"),
  },

  "circle-plus": {
    note: "The cross turns a quarter round its centre and springs back to size.",
    motion: { p1: plus("circle-plus", 12, 12), p2: plus("circle-plus", 12, 12), p0: ring("circle-plus") },
    keyframes: plusKf("circle-plus") + ringKf("circle-plus"),
  },

  "circle-x": {
    note: "The cross shrinks and twists, then springs back while the ring shakes its head.",
    motion: { p1: cross("circle-x", 12, 12), p2: cross("circle-x", 12, 12), p0: shake("circle-x") },
    keyframes: crossKf("circle-x") + shakeKf("circle-x"),
  },

  "circle-pause": {
    note: "The two bars squeeze down one after the other, like a press of the button.",
    motion: {
      p1: { animation: `ki-circle-pause-bar .5s ${SMOOTH}` },
      p2: { animation: `ki-circle-pause-bar .5s ${SMOOTH} 80ms` },
      p0: ring("circle-pause"),
    },
    keyframes: "@keyframes ki-circle-pause-bar{0%{transform:none}35%{transform:scaleY(.55)}70%{transform:scaleY(1.1)}100%{transform:none}}" + ringKf("circle-pause"),
  },

  "circle-play": {
    note: "The triangle steps forward inside the ring and settles back.",
    motion: {
      p0: { animation: `ki-circle-play-step .6s ${SMOOTH}` },
      p1: ring("circle-play", 40),
    },
    keyframes:
      "@keyframes ki-circle-play-step{0%{transform:none}35%{transform:translateX(1.6px) scale(1.08)}70%{transform:translateX(-.3px)}100%{transform:none}}" +
      ringKf("circle-play"),
  },

  "circle-stop": {
    note: "The square is pressed in and springs back out.",
    motion: {
      p1: { animation: `ki-circle-stop-press .55s ${SMOOTH}` },
      p0: ring("circle-stop", 60),
    },
    keyframes: "@keyframes ki-circle-stop-press{0%{transform:none}35%{transform:scale(.65)}70%{transform:scale(1.12)}100%{transform:none}}" + ringKf("circle-stop"),
  },

  "circle-percent": {
    note: "The slash turns half round and the two dots pop back in, one after the other.",
    motion: {
      ...turning(["p1"], "circle-percent", 12, 12, 600),
      p2: pop("circle-percent", 120),
      p3: pop("circle-percent", 220),
    },
    keyframes: turnKf("circle-percent", 180) + popKf("circle-percent"),
  },

  "circle-star": {
    note: "The star turns a fifth of a turn in its ring and springs to size.",
    motion: {
      p1: { origin: "50% 55%", animation: `ki-circle-star-turn .65s ${SMOOTH}` },
      p0: ring("circle-star", 60),
    },
    keyframes:
      "@keyframes ki-circle-star-turn{0%{transform:none}50%{transform:rotate(60deg) scale(.8)}80%{transform:rotate(72deg) scale(1.1)}100%{transform:rotate(72deg)}}" +
      ringKf("circle-star"),
  },

  "circuit-board": {
    note: "Current runs along the two traces and lights up each pad at the end.",
    draw: ["p1", "p3"],
    motion: {
      p3: draw("circuit-board", 420),
      p4: pop("circuit-board", 330),
      p2: pop("circuit-board", 80),
      p1: draw("circuit-board", 420, 200),
    },
    keyframes: drawKf("circuit-board") + popKf("circuit-board"),
  },

  citrus: {
    note: "The rind draws round the slice while the segments squeeze and the slice tips.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-citrus-tip .7s ${SMOOTH}` },
      p1: draw("citrus", 500, 60),
      p2: { origin: "100% 0%", animation: `ki-citrus-squeeze .55s ${SMOOTH} 80ms` },
      p3: { origin: "0% 100%", animation: `ki-citrus-squeeze .55s ${SMOOTH} 80ms` },
    },
    keyframes:
      drawKf("citrus") +
      "@keyframes ki-citrus-tip{0%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(2deg)}100%{transform:none}}" +
      "@keyframes ki-citrus-squeeze{0%{transform:none}40%{transform:scale(.85)}75%{transform:scale(1.04)}100%{transform:none}}",
  },

  "treble-clef": {
    note: "The clef writes itself in one stroke, from its tail up and round.",
    draw: ["p0"],
    motion: { p0: draw("treble-clef", 850) },
    keyframes: drawKf("treble-clef"),
  },

  clipboard: {
    note: "The clip lifts and snaps back down onto the board, which takes the knock.",
    motion: {
      p0: clip("clipboard"),
      p1: { animation: `ki-clipboard-board .6s ${SMOOTH}` },
    },
    keyframes: clipKf("clipboard") + "@keyframes ki-clipboard-board{0%,30%{transform:none}50%{transform:translateY(.5px)}100%{transform:none}}",
  },

  "clipboard-copy": {
    note: "The arrow slides on into the board and comes back in from the right; the board takes the knock.",
    motion: {
      p3: through("clipboard-copy"),
      p4: through("clipboard-copy"),
      p1: { animation: `ki-clipboard-copy-board .65s ${SMOOTH}` },
      p2: { animation: `ki-clipboard-copy-board .65s ${SMOOTH}` },
    },
    keyframes:
      throughKf("clipboard-copy", -3, 0) + "@keyframes ki-clipboard-copy-board{0%,18%{transform:none}30%{transform:translateX(-.6px)}55%{transform:none}}",
  },

  "clipboard-list": {
    note: "The clip snaps, then each bullet pops and its line writes itself, top to bottom.",
    draw: ["p2", "p3"],
    motion: {
      p0: clip("clipboard-list"),
      p4: pop("clipboard-list", 100),
      p2: draw("clipboard-list", 360, 160),
      p5: pop("clipboard-list", 260),
      p3: draw("clipboard-list", 360, 320),
    },
    keyframes: clipKf("clipboard-list") + popKf("clipboard-list") + drawKf("clipboard-list"),
  },

  "clipboard-edit": {
    note: "The pen scribbles from its tip across the corner of the board, and the clip snaps.",
    motion: {
      p1: { origin: "0% 100%", animation: `ki-clipboard-edit-pen .75s ${SMOOTH}` },
      p3: clip("clipboard-edit"),
    },
    keyframes:
      "@keyframes ki-clipboard-edit-pen{0%{transform:none}20%{transform:rotate(-7deg) translateX(-.4px)}40%{transform:rotate(5deg) translateX(.4px)}60%{transform:rotate(-4deg)}80%{transform:rotate(2deg)}100%{transform:none}}" +
      clipKf("clipboard-edit"),
  },

  "clipboard-plus": {
    note: "The clip snaps and the plus turns a quarter on the board.",
    motion: { p0: clip("clipboard-plus"), p2: plus("clipboard-plus", 12, 14, 80), p3: plus("clipboard-plus", 12, 14, 80) },
    keyframes: clipKf("clipboard-plus") + plusKf("clipboard-plus"),
  },

  "clipboard-x": {
    note: "The cross twists and springs back while the board shakes its head.",
    motion: {
      p2: cross("clipboard-x", 12, 14),
      p3: cross("clipboard-x", 12, 14),
      p1: shake("clipboard-x"),
      p0: shake("clipboard-x"),
    },
    keyframes: crossKf("clipboard-x") + shakeKf("clipboard-x"),
  },

  "clock-alert": {
    note: "The hands race once round the face, which rattles, and the mark drops in beside it.",
    motion: {
      p0: hands("clock-alert", 650),
      p3: { ...at(12, 12), animation: `ki-clock-alert-rattle .6s ${SMOOTH}` },
      p1: { origin: "50% 0%", animation: `ki-clock-alert-bar .45s ${SMOOTH} 120ms backwards` },
      p2: pop("clock-alert", 300),
    },
    keyframes:
      handsKf("clock-alert") +
      popKf("clock-alert") +
      "@keyframes ki-clock-alert-rattle{0%{transform:none}20%{transform:rotate(-4deg)}40%{transform:rotate(4deg)}60%{transform:rotate(-2deg)}80%{transform:rotate(1deg)}100%{transform:none}}" +
      "@keyframes ki-clock-alert-bar{0%{transform:scaleY(0)}60%{transform:scaleY(1.2)}100%{transform:none}}",
  },

  "clock-check": {
    note: "The hands sweep once round and the tick draws itself in the corner.",
    draw: ["p2"],
    motion: { p1: hands("clock-check"), p2: draw("clock-check", 420, 300) },
    keyframes: handsKf("clock-check") + drawKf("clock-check"),
  },

  "clock-plus": {
    note: "The hands sweep once round and the plus turns a quarter in the corner.",
    motion: { p0: hands("clock-plus"), p1: plus("clock-plus", 19, 19, 120), p2: plus("clock-plus", 19, 19, 120) },
    keyframes: handsKf("clock-plus") + plusKf("clock-plus"),
  },

  "clock-arrow-up": {
    note: "The hands sweep once round while the arrow beside the face rises out and back in from below.",
    motion: { p0: hands("clock-arrow-up"), p2: through("clock-arrow-up", 60), p3: through("clock-arrow-up", 60) },
    keyframes: handsKf("clock-arrow-up") + throughKf("clock-arrow-up", 0, -2.5),
  },

  "cloud-alert": {
    note: "The cloud lifts, the mark drops down from it and the dot pops below.",
    motion: {
      p2: cloud("cloud-alert"),
      p0: { origin: "50% 0%", animation: `ki-cloud-alert-bar .45s ${SMOOTH} 80ms backwards` },
      p1: pop("cloud-alert", 260),
    },
    keyframes: cloudKf("cloud-alert") + popKf("cloud-alert") + "@keyframes ki-cloud-alert-bar{0%{transform:scaleY(0)}60%{transform:scaleY(1.2)}100%{transform:none}}",
  },

  "cloud-check": {
    note: "The cloud lifts and the tick draws itself under it, short stroke first.",
    draw: ["p0"],
    motion: { p1: cloud("cloud-check"), p0: draw("cloud-check", 450, 120, true) },
    keyframes: cloudKf("cloud-check") + drawKf("cloud-check"),
  },

  "cloud-download": {
    note: "The arrow drops out of the cloud and comes back down from inside it.",
    motion: { p2: cloud("cloud-download"), p0: through("cloud-download"), p1: through("cloud-download") },
    keyframes: cloudKf("cloud-download") + throughKf("cloud-download", 0, 2.5),
  },

  "cloud-sync": {
    note: "The two arrows chase each other half way round under the cloud.",
    motion: { ...turning(["p0", "p1", "p3", "p4"], "cloud-sync", 12, 16), p2: cloud("cloud-sync") },
    keyframes: turnKf("cloud-sync", 180) + cloudKf("cloud-sync"),
  },

  "cloud-settings": {
    note: "The cog under the cloud turns a quarter on its hub.",
    motion: { ...turning(["p0", "p1", "p2", "p3", "p4", "p5", "p7", "p8"], "cloud-settings", 12, 17), p6: cloud("cloud-settings") },
    keyframes: turnKf("cloud-settings", 90) + cloudKf("cloud-settings"),
  },

  cloudy: {
    note: "The front cloud drifts right and the back one left, then they settle.",
    motion: {
      p0: { animation: `ki-cloudy-front .8s ${SMOOTH}` },
      p1: { animation: `ki-cloudy-back .8s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-cloudy-front{0%{transform:none}40%{transform:translateX(1.2px)}75%{transform:translateX(-.3px)}100%{transform:none}}" +
      "@keyframes ki-cloudy-back{0%{transform:none}40%{transform:translateX(-1.2px)}75%{transform:translateX(.3px)}100%{transform:none}}",
  },

  drizzle: {
    note: "The little drops fall out of the cloud one after another.",
    motion: {
      p0: cloud("drizzle"),
      p2: fall("drizzle", 0),
      p6: fall("drizzle", 80),
      p4: fall("drizzle", 160),
      p1: fall("drizzle", 120),
      p5: fall("drizzle", 200),
      p3: fall("drizzle", 280),
    },
    keyframes: cloudKf("drizzle") + fallKf("drizzle"),
  },

  rain: {
    note: "The three streaks of rain fall out of the cloud in turn.",
    motion: { p0: cloud("rain"), p2: fall("rain", 0), p3: fall("rain", 90), p1: fall("rain", 180) },
    keyframes: cloudKf("rain") + fallKf("rain"),
  },

  snow: {
    note: "The flakes drift down from the cloud, swaying, one after another.",
    motion: {
      p0: cloud("snow"),
      p1: { animation: `ki-snow-flake .9s ${SMOOTH}` },
      p3: { animation: `ki-snow-flake .9s ${SMOOTH} 80ms` },
      p5: { animation: `ki-snow-flake .9s ${SMOOTH} 160ms` },
      p2: { animation: `ki-snow-flake .9s ${SMOOTH} 120ms` },
      p4: { animation: `ki-snow-flake .9s ${SMOOTH} 200ms` },
      p6: { animation: `ki-snow-flake .9s ${SMOOTH} 280ms` },
    },
    keyframes:
      cloudKf("snow") +
      "@keyframes ki-snow-flake{0%{transform:none;opacity:1}25%{transform:translate(.6px,1px)}50%{transform:translate(-.4px,2.2px);opacity:0}51%{transform:translateY(-1.5px);opacity:0}100%{transform:none;opacity:1}}",
  },

  hail: {
    note: "The hailstones drop from the cloud and bounce where they land.",
    motion: {
      p0: cloud("hail"),
      p2: fall("hail", 0),
      p5: fall("hail", 80),
      p1: fall("hail", 160),
      p4: { animation: `ki-hail-bounce .5s ${SMOOTH} 120ms` },
      p6: { animation: `ki-hail-bounce .5s ${SMOOTH} 200ms` },
      p3: { animation: `ki-hail-bounce .5s ${SMOOTH} 280ms` },
    },
    keyframes:
      cloudKf("hail") + fallKf("hail") + "@keyframes ki-hail-bounce{0%{transform:none}30%{transform:translateY(-1.4px)}60%{transform:none}80%{transform:translateY(-.4px)}100%{transform:none}}",
  },

  fog: {
    note: "The two bands of fog drift past each other under the cloud.",
    motion: {
      p0: cloud("fog"),
      p1: { animation: `ki-fog-left .85s ${SMOOTH}` },
      p2: { animation: `ki-fog-right .85s ${SMOOTH} 60ms` },
    },
    keyframes:
      cloudKf("fog") +
      "@keyframes ki-fog-left{0%{transform:none}45%{transform:translateX(-1.6px)}100%{transform:none}}" +
      "@keyframes ki-fog-right{0%{transform:none}45%{transform:translateX(1.6px)}100%{transform:none}}",
  },

  storm: {
    note: "The bolt strikes down out of the cloud, which rumbles.",
    draw: ["p1"],
    motion: {
      p1: draw("storm", 300),
      p0: { animation: `ki-storm-rumble .6s ${SMOOTH} 120ms` },
    },
    keyframes:
      drawKf("storm") +
      "@keyframes ki-storm-rumble{0%{transform:none}20%{transform:translate(-.5px,.3px)}40%{transform:translate(.5px,-.2px)}60%{transform:translate(-.3px,.2px)}80%{transform:translateX(.2px)}100%{transform:none}}",
  },

  "partly-sunny": {
    note: "The cloud slides aside and the sun's rays turn as it comes out.",
    motion: {
      p5: { animation: `ki-partly-sunny-cloud .8s ${SMOOTH}` },
      ...Object.fromEntries(["p0", "p1", "p2", "p3"].map((p) => [p, { ...at(12, 12), animation: `ki-partly-sunny-rays .8s ${SMOOTH}` }])),
      p4: { ...at(12, 12), animation: `ki-partly-sunny-sun .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-partly-sunny-cloud{0%{transform:none}40%{transform:translateX(-1.5px)}75%{transform:translateX(.2px)}100%{transform:none}}" +
      "@keyframes ki-partly-sunny-rays{0%{transform:none}50%{transform:rotate(25deg) scale(1.06)}100%{transform:none}}" +
      "@keyframes ki-partly-sunny-sun{0%{transform:none}50%{transform:scale(1.08)}100%{transform:none}}",
  },

  "cloudy-night": {
    note: "The moon rocks on its curve behind the cloud, which drifts a little.",
    motion: {
      p1: { ...at(16, 9), animation: `ki-cloudy-night-moon .8s ${SMOOTH}` },
      p0: { animation: `ki-cloudy-night-cloud .8s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-cloudy-night-moon{0%{transform:none}35%{transform:rotate(-14deg)}70%{transform:rotate(4deg)}100%{transform:none}}" +
      "@keyframes ki-cloudy-night-cloud{0%{transform:none}40%{transform:translateX(-1px)}75%{transform:translateX(.2px)}100%{transform:none}}",
  },

  "sun-shower": {
    note: "The sun's rays turn while two drops fall from the cloud in front.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2", "p3"].map((p) => [p, { ...at(12, 12), animation: `ki-sun-shower-rays .8s ${SMOOTH}` }])),
      p5: cloud("sun-shower"),
      p7: fall("sun-shower", 60),
      p6: fall("sun-shower", 160),
    },
    keyframes:
      "@keyframes ki-sun-shower-rays{0%{transform:none}50%{transform:rotate(25deg) scale(1.06)}100%{transform:none}}" + cloudKf("sun-shower") + fallKf("sun-shower"),
  },

  clover: {
    note: "The clover sways from the foot of its stem, the leaves trailing a moment behind.",
    motion: {
      p0: { ...at(2, 22), animation: `ki-clover-sway .8s ${SMOOTH}` },
      p1: { ...at(2, 22), animation: `ki-clover-sway .8s ${SMOOTH} 60ms` },
      p2: { ...at(2, 22), animation: `ki-clover-sway .8s ${SMOOTH} 60ms` },
    },
    keyframes: "@keyframes ki-clover-sway{0%{transform:none}30%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}85%{transform:rotate(-1deg)}100%{transform:none}}",
  },

  club: {
    note: "The club squashes down on its stem and springs back up.",
    motion: {
      p0: { origin: "50% 100%", animation: `ki-club-squash .6s ${SMOOTH}` },
      p1: { origin: "50% 100%", animation: `ki-club-stem .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-club-squash{0%{transform:none}30%{transform:scale(1.1,.86)}60%{transform:scale(.96,1.06)}100%{transform:none}}" +
      "@keyframes ki-club-stem{0%{transform:none}30%{transform:scaleY(.8)}60%{transform:scaleY(1.05)}100%{transform:none}}",
  },

  "code-xml": {
    note: "The brackets step apart and the slash leans between them.",
    motion: {
      p0: { to: { transform: "translateX(1.5px)" } },
      p1: { to: { transform: "translateX(-1.5px)" } },
      p2: { to: { transform: "rotate(10deg)" }, delay: 60 },
    },
  },

  cog: {
    note: "The cog turns a third of a turn and its hub gives a little bump as it stops.",
    motion: {
      ...turning(["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p13"], "cog", 12, 12),
      p12: { animation: `ki-cog-hub .5s ${SMOOTH} 350ms` },
    },
    keyframes: turnKf("cog", 120) + "@keyframes ki-cog-hub{0%{transform:none}40%{transform:scale(1.3)}100%{transform:none}}",
  },

  coins: {
    note: "The front coin flips over and the coins behind it bob.",
    motion: {
      p3: { ...at(16, 8), animation: `ki-coins-flip .7s ${SMOOTH}` },
      p1: { ...at(16, 8), animation: `ki-coins-flip .7s ${SMOOTH}` },
      p0: { animation: `ki-coins-bob .6s ${SMOOTH} 120ms` },
      p2: { animation: `ki-coins-bob .6s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-coins-flip{0%{transform:none}25%{transform:translateY(-1.5px) scaleX(.1)}50%{transform:translateY(-2px) scaleX(-1)}75%{transform:translateY(-1px) scaleX(.1)}100%{transform:none}}" +
      "@keyframes ki-coins-bob{0%{transform:none}40%{transform:translateY(.6px)}100%{transform:none}}",
  },
  columns: {
    note: "The divider slides left, then springs back past the middle and settles.",
    motion: { p1: { animation: `ki-columns-slide .65s ${SMOOTH}` } },
    keyframes: "@keyframes ki-columns-slide{0%{transform:none}35%{transform:translateX(-2px)}70%{transform:translateX(.6px)}100%{transform:none}}",
  },

  "columns-three": {
    note: "The two dividers slide out to the sides and spring back, one after the other.",
    motion: {
      p1: { animation: `ki-columns-three-left .6s ${SMOOTH}` },
      p2: { animation: `ki-columns-three-right .6s ${SMOOTH} 70ms` },
    },
    keyframes:
      "@keyframes ki-columns-three-left{0%{transform:none}35%{transform:translateX(-1.4px)}70%{transform:translateX(.4px)}100%{transform:none}}" +
      "@keyframes ki-columns-three-right{0%{transform:none}35%{transform:translateX(1.4px)}70%{transform:translateX(-.4px)}100%{transform:none}}",
  },

  combine: {
    note: "The top square moves toward the bottom one along the arrow, which pushes on; the bottom square takes it in.",
    motion: {
      p5: { animation: `ki-combine-move .6s ${SMOOTH}` },
      p2: { animation: `ki-combine-arrow .5s ${SMOOTH} 60ms` },
      p3: { animation: `ki-combine-arrow .5s ${SMOOTH} 60ms` },
      p0: { animation: `ki-combine-stack .5s ${SMOOTH}` },
      p1: { animation: `ki-combine-stack .5s ${SMOOTH} 50ms` },
      p4: { animation: `ki-combine-take .5s ${SMOOTH} 200ms` },
    },
    keyframes:
      "@keyframes ki-combine-move{0%{transform:none}40%{transform:translate(1.2px,1.2px)}100%{transform:none}}" +
      "@keyframes ki-combine-arrow{0%{transform:none}40%{transform:translateX(1px)}100%{transform:none}}" +
      "@keyframes ki-combine-stack{0%{transform:none}40%{transform:translateX(-.8px)}100%{transform:none}}" +
      "@keyframes ki-combine-take{0%{transform:none}40%{transform:scale(1.1)}100%{transform:none}}",
  },

  component: {
    note: "The four pieces gather in toward the middle.",
    motion: {
      p0: { to: { transform: "translateX(-1.4px)" } },
      p1: { to: { transform: "translateX(1.4px)" } },
      p2: { to: { transform: "translateY(-1.4px)" }, delay: 50 },
      p3: { to: { transform: "translateY(1.4px)" }, delay: 50 },
    },
  },

  computer: {
    note: "The screen lifts from its base, the drive slot and the line on screen draw in, and the power light pops.",
    draw: ["p0", "p2"],
    motion: {
      p4: { origin: "50% 100%", animation: `ki-computer-screen .6s ${SMOOTH}` },
      p2: draw("computer", 300, 120),
      p0: draw("computer", 350, 60),
      p1: pop("computer", 220),
    },
    keyframes: "@keyframes ki-computer-screen{0%{transform:none}35%{transform:translateY(-.6px) scale(1.03)}100%{transform:none}}" + drawKf("computer") + popKf("computer"),
  },

  "concierge-bell": {
    note: "The button is struck down into the dome, which squashes on its base and springs back.",
    motion: {
      p2: { animation: `ki-concierge-bell-press .55s ${SMOOTH}` },
      p3: { animation: `ki-concierge-bell-press .55s ${SMOOTH}` },
      p1: { origin: "50% 100%", animation: `ki-concierge-bell-dome .55s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-concierge-bell-press{0%{transform:none}25%{transform:translateY(1.4px)}60%{transform:translateY(-.3px)}100%{transform:none}}" +
      "@keyframes ki-concierge-bell-dome{0%{transform:none}25%{transform:scaleY(.9)}60%{transform:scaleY(1.04)}100%{transform:none}}",
  },

  cone: {
    note: "The cone squashes onto its base, which spreads, then springs back up.",
    motion: {
      p0: { origin: "50% 100%", animation: `ki-cone-squash .6s ${SMOOTH}` },
      p1: { animation: `ki-cone-base .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-cone-squash{0%{transform:none}30%{transform:scaleY(.86)}60%{transform:scaleY(1.05)}100%{transform:none}}" +
      "@keyframes ki-cone-base{0%{transform:none}30%{transform:scaleX(1.06)}60%{transform:scaleX(.98)}100%{transform:none}}",
  },

  construction: {
    note: "The barrier hops and lands on its legs, which give under it.",
    motion: {
      ...Object.fromEntries(["p0", "p3", "p4", "p5", "p6", "p7"].map((p) => [p, { animation: `ki-construction-hop .6s ${SMOOTH}` }])),
      p1: { origin: "50% 100%", animation: `ki-construction-legs .6s ${SMOOTH}` },
      p2: { origin: "50% 100%", animation: `ki-construction-legs .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-construction-hop{0%{transform:none}30%{transform:translateY(-1.4px)}55%{transform:translateY(.8px)}75%{transform:translateY(-.2px)}100%{transform:none}}" +
      "@keyframes ki-construction-legs{0%,30%{transform:none}55%{transform:scaleY(.88)}75%{transform:scaleY(1.02)}100%{transform:none}}",
  },

  contact: {
    note: "The person on the card nods, head then shoulders, and the binder rings bob.",
    motion: {
      p3: { animation: `ki-contact-nod .55s ${SMOOTH}` },
      p1: { animation: `ki-contact-nod .55s ${SMOOTH} 70ms` },
      p0: { animation: `ki-contact-ring .5s ${SMOOTH} 40ms` },
      p2: { animation: `ki-contact-ring .5s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-contact-nod{0%{transform:none}35%{transform:translateY(-.9px)}70%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-contact-ring{0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}}",
  },

  container: {
    note: "The container drops onto its corner and the ridges on its side follow a moment later.",
    motion: {
      p0: { animation: `ki-container-drop .6s ${SMOOTH}` },
      p1: { animation: `ki-container-drop .6s ${SMOOTH}` },
      p2: { animation: `ki-container-drop .6s ${SMOOTH}` },
      p3: { animation: `ki-container-drop .6s ${SMOOTH} 50ms` },
      p4: { animation: `ki-container-drop .6s ${SMOOTH} 90ms` },
    },
    keyframes: "@keyframes ki-container-drop{0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.5px)}75%{transform:translateY(-.2px)}100%{transform:none}}",
  },

  contrast: {
    note: "The dark half turns once round inside the ring.",
    motion: { ...turning(["p1"], "contrast", 12, 12, 750), p0: ring("contrast", 60) },
    keyframes: turnKf("contrast", 360) + ringKf("contrast"),
  },

  cookie: {
    note: "The cookie tips, its chips pop one by one and the crumbs by the bite scatter.",
    motion: {
      p1: { origin: "50% 50%", animation: `ki-cookie-tip .7s ${SMOOTH}` },
      p8: pop("cookie", 60),
      p2: pop("cookie", 120),
      p7: pop("cookie", 180),
      p0: pop("cookie", 240),
      p3: pop("cookie", 300),
      p4: { animation: `ki-cookie-crumb .6s ${SMOOTH}` },
      p5: { animation: `ki-cookie-crumb .6s ${SMOOTH} 60ms` },
      p6: { animation: `ki-cookie-crumb .6s ${SMOOTH} 120ms` },
    },
    keyframes:
      popKf("cookie") +
      "@keyframes ki-cookie-tip{0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(2deg)}100%{transform:none}}" +
      "@keyframes ki-cookie-crumb{0%{transform:none;opacity:1}40%{transform:translate(1px,-1px);opacity:0}41%{transform:scale(0);opacity:0}100%{transform:none;opacity:1}}",
  },

  "cooking-pot": {
    note: "The lid lifts off the pot and rattles back down on it.",
    motion: {
      p2: { ...at(12, 6), animation: `ki-cooking-pot-lid .7s ${SMOOTH}` },
      p3: { ...at(12, 6), animation: `ki-cooking-pot-lid .7s ${SMOOTH}` },
      p1: { animation: `ki-cooking-pot-pot .7s ${SMOOTH}` },
      p0: { animation: `ki-cooking-pot-pot .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-cooking-pot-lid{0%{transform:none}25%{transform:translateY(-1.6px) rotate(-5deg)}50%{transform:translateY(-.4px) rotate(4deg)}70%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-cooking-pot-pot{0%,45%{transform:none}55%{transform:translateY(.4px)}100%{transform:none}}",
  },

  "copy-check": {
    note: "The copy behind slides out a little and back while the tick draws itself on the front.",
    draw: ["p0"],
    motion: {
      p2: { animation: `ki-copy-check-back .6s ${SMOOTH}` },
      p0: draw("copy-check", 420, 120),
    },
    keyframes: "@keyframes ki-copy-check-back{0%{transform:none}40%{transform:translate(-1px,-1px)}100%{transform:none}}" + drawKf("copy-check"),
  },

  "copy-plus": {
    note: "The copy behind slides out a little and back while the plus turns a quarter on the front.",
    motion: {
      p3: { animation: `ki-copy-plus-back .6s ${SMOOTH}` },
      p0: plus("copy-plus", 15, 15, 80),
      p1: plus("copy-plus", 15, 15, 80),
    },
    keyframes: "@keyframes ki-copy-plus-back{0%{transform:none}40%{transform:translate(-1px,-1px)}100%{transform:none}}" + plusKf("copy-plus"),
  },

  "corner-down-left": {
    note: "The line runs down and round the corner, and the head arrives pointing left.",
    draw: ["p0"],
    motion: { p0: draw("corner-down-left", 420), p1: { animation: `ki-corner-down-left-head .45s ${SMOOTH} 260ms backwards` } },
    keyframes:
      drawKf("corner-down-left") +
      "@keyframes ki-corner-down-left-head{0%{transform:translateX(2px);opacity:0}60%{transform:translateX(-.6px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "corner-down-right": {
    note: "The line runs down and round the corner, and the head arrives pointing right.",
    draw: ["p1"],
    motion: { p1: draw("corner-down-right", 420), p0: { animation: `ki-corner-down-right-head .45s ${SMOOTH} 260ms backwards` } },
    keyframes:
      drawKf("corner-down-right") +
      "@keyframes ki-corner-down-right-head{0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.6px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "corner-up-left": {
    note: "The line runs up and round the corner, and the head arrives pointing left.",
    draw: ["p0"],
    motion: { p0: draw("corner-up-left", 420), p1: { animation: `ki-corner-up-left-head .45s ${SMOOTH} 260ms backwards` } },
    keyframes:
      drawKf("corner-up-left") +
      "@keyframes ki-corner-up-left-head{0%{transform:translateX(2px);opacity:0}60%{transform:translateX(-.6px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "corner-up-right": {
    note: "The line runs up and round the corner, and the head arrives pointing right.",
    draw: ["p1"],
    motion: { p1: draw("corner-up-right", 420), p0: { animation: `ki-corner-up-right-head .45s ${SMOOTH} 260ms backwards` } },
    keyframes:
      drawKf("corner-up-right") +
      "@keyframes ki-corner-up-right-head{0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.6px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "credit-card": {
    note: "The card swipes right and back, and the number line writes itself on it.",
    draw: ["p2"],
    motion: {
      p0: { animation: `ki-credit-card-swipe .65s ${SMOOTH}` },
      p1: { animation: `ki-credit-card-swipe .65s ${SMOOTH}` },
      p2: draw("credit-card", 300, 300),
    },
    keyframes:
      "@keyframes ki-credit-card-swipe{0%{transform:none}35%{transform:translateX(1.6px) rotate(-3deg)}70%{transform:translateX(-.3px)}100%{transform:none}}" +
      drawKf("credit-card"),
  },

  croissant: {
    note: "The middle puffs up and the two horns stretch out along the croissant.",
    motion: {
      p4: { animation: `ki-croissant-puff .6s ${SMOOTH}` },
      p1: { animation: `ki-croissant-up .6s ${SMOOTH} 40ms` },
      p2: { animation: `ki-croissant-up .6s ${SMOOTH} 40ms` },
      p0: { animation: `ki-croissant-down .6s ${SMOOTH} 40ms` },
      p3: { animation: `ki-croissant-down .6s ${SMOOTH} 40ms` },
    },
    keyframes:
      "@keyframes ki-croissant-puff{0%{transform:none}40%{transform:scale(1.08)}100%{transform:none}}" +
      "@keyframes ki-croissant-up{0%{transform:none}40%{transform:translate(.7px,-.7px)}100%{transform:none}}" +
      "@keyframes ki-croissant-down{0%{transform:none}40%{transform:translate(-.7px,.7px)}100%{transform:none}}",
  },

  crop: {
    note: "The two corners close in on the frame and open back out.",
    motion: {
      p0: { animation: `ki-crop-in .6s ${SMOOTH}` },
      p1: { animation: `ki-crop-out .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-crop-in{0%{transform:none}40%{transform:translate(1.2px,-1.2px)}75%{transform:translate(-.2px,.2px)}100%{transform:none}}" +
      "@keyframes ki-crop-out{0%{transform:none}40%{transform:translate(-1.2px,1.2px)}75%{transform:translate(.2px,-.2px)}100%{transform:none}}",
  },

  cross: {
    note: "The cross swells from its middle and settles.",
    motion: { p0: { animation: `ki-cross-swell .6s ${SMOOTH}` } },
    keyframes: "@keyframes ki-cross-swell{0%{transform:none}35%{transform:scale(1.12)}65%{transform:scale(.97)}100%{transform:none}}",
  },

  crosshair: {
    note: "The four ticks close in on the centre and the ring tightens, taking aim.",
    motion: {
      p1: { to: { transform: "translateX(-1.5px)" } },
      p2: { to: { transform: "translateX(1.5px)" } },
      p3: { to: { transform: "translateY(1.5px)" } },
      p4: { to: { transform: "translateY(-1.5px)" } },
      p0: { to: { transform: "scale(.94)" }, delay: 60 },
    },
  },

  crown: {
    note: "The crown hops, tilting, and lands back on its band, which spreads under it.",
    motion: {
      p0: { origin: "50% 100%", animation: `ki-crown-hop .65s ${SMOOTH}` },
      p1: { animation: `ki-crown-band .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-crown-hop{0%{transform:none}30%{transform:translateY(-2px) rotate(-5deg)}55%{transform:translateY(.3px) rotate(2deg)}75%{transform:translateY(-.2px)}100%{transform:none}}" +
      "@keyframes ki-crown-band{0%,40%{transform:none}55%{transform:scaleX(1.1)}100%{transform:none}}",
  },

  cuboid: {
    note: "The box squashes on its base while its inner edges draw themselves in.",
    draw: ["p0", "p1"],
    motion: {
      p2: { origin: "50% 100%", animation: `ki-cuboid-squash .6s ${SMOOTH}` },
      p1: draw("cuboid", 450, 60),
      p0: draw("cuboid", 300, 260),
    },
    keyframes: "@keyframes ki-cuboid-squash{0%{transform:none}35%{transform:scale(1.04,.93)}70%{transform:scale(.99,1.02)}100%{transform:none}}" + drawKf("cuboid"),
  },

  cylinder: {
    note: "The cylinder stretches up from its base, its top rising with it, then settles.",
    motion: {
      p1: { origin: "50% 100%", animation: `ki-cylinder-side .6s ${SMOOTH}` },
      p0: { animation: `ki-cylinder-top .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-cylinder-side{0%{transform:none}35%{transform:scaleY(1.06)}70%{transform:scaleY(.98)}100%{transform:none}}" +
      "@keyframes ki-cylinder-top{0%{transform:none}35%{transform:translateY(-1.1px)}70%{transform:translateY(.35px)}100%{transform:none}}",
  },

  cupcake: {
    note: "The cupcake squashes down on its base and springs up, and the cherry hops off the top and lands back.",
    motion: {
      // the frosting's fill moves with the cup (p3), so the whole cake squashes as one
      ...Object.fromEntries(["p0", "p1", "p2", "p3", "p4", "p5"].map((p) => [p, { ...at(12, 22), animation: `ki-cupcake-squash .6s ${SMOOTH}` }])),
      p6: { animation: `ki-cupcake-hop .6s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-cupcake-squash{0%{transform:none}30%{transform:scale(1.05,.92)}60%{transform:scale(.98,1.04)}100%{transform:none}}" +
      "@keyframes ki-cupcake-hop{0%{transform:none}35%{transform:translateY(-2px)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  soda: {
    note: "The straw wiggles in the lid while the drink sloshes inside the cup.",
    motion: {
      p3: { origin: "0% 100%", animation: `ki-soda-straw .7s ${SMOOTH}` },
      p2: { animation: `ki-soda-slosh .7s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-soda-straw{0%{transform:none}25%{transform:rotate(-12deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-3deg)}100%{transform:none}}" +
      "@keyframes ki-soda-slosh{0%{transform:none}30%{transform:translateX(-.8px) rotate(-4deg)}60%{transform:translateX(.6px) rotate(3deg)}100%{transform:none}}",
  },

  currency: {
    note: "The coin swells and its four rays spread out from the corners.",
    motion: {
      p0: { to: { transform: "scale(1.08)" } },
      p1: { to: { transform: "translate(-.8px,-.8px)" }, delay: 40 },
      p2: { to: { transform: "translate(.8px,-.8px)" }, delay: 40 },
      p3: { to: { transform: "translate(-.8px,.8px)" }, delay: 40 },
      p4: { to: { transform: "translate(.8px,.8px)" }, delay: 40 },
    },
  },

  database: {
    note: "The top disk lifts off the stack and the middle one follows, then they settle back.",
    motion: {
      p0: { animation: `ki-database-lift .6s ${SMOOTH}` },
      p2: { animation: `ki-database-mid .6s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-database-lift{0%{transform:none}35%{transform:translateY(-1.3px)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-database-mid{0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}}",
  },

  "database-backup": {
    note: "The round arrow turns once backwards beside the stack, whose top disk bobs.",
    motion: {
      ...turning(["p4", "p5"], "database-backup", 17.5, 17, 750),
      p0: { animation: `ki-database-backup-lift .6s ${SMOOTH}` },
    },
    keyframes: turnKf("database-backup", -360) + "@keyframes ki-database-backup-lift{0%{transform:none}35%{transform:translateY(-1px)}100%{transform:none}}",
  },

  "database-search": {
    note: "The lens scans round in a small circle over the stack.",
    motion: {
      p4: { animation: `ki-database-search-scan .8s ${SMOOTH}` },
      p1: { animation: `ki-database-search-scan .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-database-search-scan{0%{transform:none}25%{transform:translate(-1px,-.6px)}50%{transform:translate(.2px,-1.2px)}75%{transform:translate(.8px,-.3px)}100%{transform:none}}",
  },

  "database-zap": {
    note: "The bolt strikes down beside the stack and the top disk jumps.",
    draw: ["p3"],
    motion: {
      p3: draw("database-zap", 320),
      p0: { animation: `ki-database-zap-jump .5s ${SMOOTH} 160ms` },
    },
    keyframes: drawKf("database-zap") + "@keyframes ki-database-zap-jump{0%{transform:none}35%{transform:translateY(-1.2px)}100%{transform:none}}",
  },

  "database-plus": {
    note: "The plus turns a quarter beside the stack and the top disk lifts.",
    motion: {
      p0: plus("database-plus", 19, 19),
      p2: plus("database-plus", 19, 19),
      p5: { animation: `ki-database-plus-lift .6s ${SMOOTH} 80ms` },
    },
    keyframes: plusKf("database-plus") + "@keyframes ki-database-plus-lift{0%{transform:none}35%{transform:translateY(-1px)}100%{transform:none}}",
  },

  backspace: {
    note: "The key pulls left and the cross in it twists and springs back.",
    motion: {
      p0: { animation: `ki-backspace-pull .55s ${SMOOTH}` },
      p1: cross("backspace", 15, 12, 60),
      p2: cross("backspace", 15, 12, 60),
    },
    keyframes:
      "@keyframes ki-backspace-pull{0%{transform:none}35%{transform:translateX(-1.4px)}70%{transform:translateX(.3px)}100%{transform:none}}" + crossKf("backspace"),
  },

  flowchart: {
    note: "The top step presses, the flow runs down both branches and each box at the end bumps as it arrives.",
    draw: ["p0", "p1"],
    motion: {
      p4: { animation: `ki-flowchart-bump .45s ${SMOOTH}` },
      p0: draw("flowchart", 400, 100),
      p1: draw("flowchart", 400, 100),
      p2: { animation: `ki-flowchart-bump .45s ${SMOOTH} 420ms` },
      p3: { animation: `ki-flowchart-bump .45s ${SMOOTH} 420ms` },
    },
    keyframes: drawKf("flowchart") + "@keyframes ki-flowchart-bump{0%{transform:none}40%{transform:scale(1.15)}100%{transform:none}}",
  },

  diamond: {
    note: "The diamond dips and turns a quarter, springing back to size.",
    motion: { p0: { animation: `ki-diamond-turn .65s ${SMOOTH}` } },
    keyframes: "@keyframes ki-diamond-turn{0%{transform:none}45%{transform:rotate(60deg) scale(.8)}75%{transform:rotate(90deg) scale(1.08)}100%{transform:rotate(90deg)}}",
  },

  diff: {
    note: "The plus folds down to a minus and back, and the minus under it stretches.",
    motion: {
      p0: { animation: `ki-diff-fold .6s ${SMOOTH}` },
      p2: { animation: `ki-diff-stretch .5s ${SMOOTH} 200ms` },
    },
    keyframes:
      "@keyframes ki-diff-fold{0%{transform:none}40%{transform:scaleY(0)}75%{transform:scaleY(1.1)}100%{transform:none}}" +
      "@keyframes ki-diff-stretch{0%{transform:none}40%{transform:scaleX(1.15)}100%{transform:none}}",
  },

  disc: {
    note: "The hole in the middle pulses and the disc gives a small bounce round it.",
    motion: { p1: { animation: `ki-disc-hole .55s ${SMOOTH}` }, p0: ring("disc", 60) },
    keyframes: "@keyframes ki-disc-hole{0%{transform:none}35%{transform:scale(1.4)}70%{transform:scale(.9)}100%{transform:none}}" + ringKf("disc"),
  },

  album: {
    note: "The record slides partly out of its sleeve and back in.",
    motion: {
      p1: { animation: `ki-album-slide .7s ${SMOOTH}` },
      p2: { animation: `ki-album-slide .7s ${SMOOTH}` },
    },
    keyframes: "@keyframes ki-album-slide{0%{transform:none}40%{transform:translateX(1.6px) rotate(20deg)}100%{transform:none}}",
  },

  divide: {
    note: "The two dots move apart from the bar, which stretches.",
    motion: {
      p0: { to: { transform: "translateY(-1.5px)" } },
      p2: { to: { transform: "translateY(1.5px)" } },
      p1: { to: { transform: "scaleX(1.1)" }, delay: 40 },
    },
  },

  dna: {
    note: "The strand draws itself across and the rungs pop in along it, left to right.",
    draw: ["p5", "p2", "p10"],
    motion: {
      p5: draw("dna", 600),
      p10: draw("dna", 350, 80),
      p2: draw("dna", 350, 260),
      p7: pop("dna", 60, 300),
      p8: pop("dna", 120, 300),
      p9: pop("dna", 180, 300),
      p0: pop("dna", 240, 300),
      p1: pop("dna", 300, 300),
      p4: pop("dna", 340, 300),
      p3: pop("dna", 380, 300),
      p6: pop("dna", 440, 300),
    },
    keyframes: drawKf("dna") + popKf("dna"),
  },

  dog: {
    note: "The ears perk up, the eyes blink and the nose twitches.",
    motion: {
      p4: { animation: `ki-dog-ears .55s ${SMOOTH}` },
      p1: { animation: `ki-dog-blink .45s ${SMOOTH} 120ms` },
      p3: { animation: `ki-dog-blink .45s ${SMOOTH} 120ms` },
      p0: { animation: `ki-dog-nose .5s ${SMOOTH} 200ms` },
    },
    keyframes:
      "@keyframes ki-dog-ears{0%{transform:none}30%{transform:translateY(-.9px)}60%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-dog-blink{0%{transform:none}35%{transform:scaleY(.1)}60%{transform:none}}" +
      "@keyframes ki-dog-nose{0%{transform:none}25%{transform:translateY(-.5px)}50%{transform:translateY(.2px)}75%{transform:translateY(-.3px)}100%{transform:none}}",
  },

  dollar: {
    note: "The S writes itself over the bar, which stretches as it does.",
    draw: ["p1"],
    motion: {
      p1: draw("dollar", 600),
      p0: { animation: `ki-dollar-bar .6s ${SMOOTH}` },
    },
    keyframes: drawKf("dollar") + "@keyframes ki-dollar-bar{0%{transform:none}40%{transform:scaleY(1.1)}100%{transform:none}}",
  },

  donut: {
    note: "The donut rolls a little way to the right and back, its hole rolling with it.",
    motion: {
      p0: { ...at(12, 12), animation: `ki-donut-roll .75s ${SMOOTH}` },
      p1: { ...at(12, 12), animation: `ki-donut-roll .75s ${SMOOTH}` },
    },
    keyframes: "@keyframes ki-donut-roll{0%{transform:none}45%{transform:translateX(1.5px) rotate(45deg)}100%{transform:none}}",
  },

  "door-closed": {
    note: "The handle is pressed and the locked door rattles in its frame.",
    motion: {
      p2: { animation: `ki-door-closed-handle .5s ${SMOOTH}` },
      p0: { animation: `ki-door-closed-rattle .55s ${SMOOTH} 80ms` },
    },
    keyframes:
      "@keyframes ki-door-closed-handle{0%{transform:none}30%{transform:translateY(.8px)}100%{transform:none}}" +
      "@keyframes ki-door-closed-rattle{0%{transform:none}20%{transform:translateX(-.5px)}40%{transform:translateX(.5px)}60%{transform:translateX(-.3px)}80%{transform:translateX(.15px)}100%{transform:none}}",
  },

  "door-open": {
    note: "The door swings further open on its hinge and back.",
    motion: {
      p3: { ...at(10, 12), animation: `ki-door-open-swing .7s ${SMOOTH}` },
      p2: { ...at(10, 12), animation: `ki-door-open-swing .7s ${SMOOTH}` },
    },
    keyframes: "@keyframes ki-door-open-swing{0%{transform:none}40%{transform:scaleX(.6)}75%{transform:scaleX(1.05)}100%{transform:none}}",
  },

  dot: {
    note: "The dot swells and settles, like a ping.",
    motion: { p0: { animation: `ki-dot-ping .55s ${SMOOTH}` } },
    keyframes: "@keyframes ki-dot-ping{0%{transform:none}35%{transform:scale(1.8)}70%{transform:scale(.9)}100%{transform:none}}",
  },

  "drafting-compass": {
    note: "The legs open on their hinge and the arc draws itself between them.",
    draw: ["p1"],
    motion: {
      p0: { ...at(12, 5), animation: `ki-drafting-compass-right .7s ${SMOOTH}` },
      p2: { ...at(12, 5), animation: `ki-drafting-compass-right .7s ${SMOOTH}` },
      p3: { ...at(12, 5), animation: `ki-drafting-compass-left .7s ${SMOOTH}` },
      p1: draw("drafting-compass", 500, 120),
    },
    keyframes:
      drawKf("drafting-compass") +
      "@keyframes ki-drafting-compass-right{0%{transform:none}40%{transform:rotate(-6deg)}100%{transform:none}}" +
      "@keyframes ki-drafting-compass-left{0%{transform:none}40%{transform:rotate(6deg)}100%{transform:none}}",
  },

  "theater-masks": {
    note: "The two masks tilt away from each other and back, one smiling, one frowning.",
    motion: {
      ...Object.fromEntries(["p4", "p1", "p2", "p5"].map((p) => [p, { ...at(16, 10), animation: `ki-theater-masks-front .7s ${SMOOTH}` }])),
      ...Object.fromEntries(["p6", "p0", "p3", "p7"].map((p) => [p, { ...at(8, 15), animation: `ki-theater-masks-back .7s ${SMOOTH} 60ms` }])),
    },
    keyframes:
      "@keyframes ki-theater-masks-front{0%{transform:none}35%{transform:rotate(8deg)}70%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-theater-masks-back{0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(2deg)}100%{transform:none}}",
  },

  drill: {
    note: "The bit buzzes and the body kicks back a little in the hand.",
    motion: {
      p3: { animation: `ki-drill-bit .6s linear` },
      p2: { animation: `ki-drill-chuck .6s linear` },
      p1: { animation: `ki-drill-kick .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-drill-bit{0%,100%{transform:none}10%,30%,50%,70%{transform:translateX(.6px)}20%,40%,60%,80%{transform:translateX(-.3px)}}" +
      "@keyframes ki-drill-chuck{0%,100%{transform:none}10%,30%,50%,70%{transform:translateY(.3px)}20%,40%,60%,80%{transform:translateY(-.3px)}}" +
      "@keyframes ki-drill-kick{0%{transform:none}20%{transform:translateX(-.5px)}100%{transform:none}}",
  },

  drone: {
    note: "The four rotors spin round their hubs while the body pulses.",
    motion: {
      p4: { ...at(16.92, 7.07), animation: `ki-drone-spin .9s ${SMOOTH}` },
      p5: { ...at(16.92, 16.93), animation: `ki-drone-spin .9s ${SMOOTH}` },
      p6: { ...at(7.09, 7.07), animation: `ki-drone-spin .9s ${SMOOTH}` },
      p7: { ...at(7.08, 16.93), animation: `ki-drone-spin .9s ${SMOOTH}` },
      p8: { animation: `ki-drone-body .5s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-drone-spin{from{transform:none}to{transform:rotate(720deg)}}" +
      "@keyframes ki-drone-body{0%{transform:none}40%{transform:scale(1.15)}100%{transform:none}}",
  },

  droplet: {
    note: "The drop squashes on its base and wobbles back into shape.",
    motion: { p0: { origin: "50% 100%", animation: `ki-droplet-wobble .65s ${SMOOTH}` } },
    keyframes: "@keyframes ki-droplet-wobble{0%{transform:none}30%{transform:scale(1.08,.9)}55%{transform:scale(.95,1.05)}80%{transform:scale(1.02,.98)}100%{transform:none}}",
  },

  "droplet-off": {
    note: "The drop wobbles and the slash draws itself across it.",
    draw: ["p1"],
    motion: {
      p0: { ...at(12, 22), animation: `ki-droplet-off-wobble .6s ${SMOOTH}` },
      p2: { ...at(12, 22), animation: `ki-droplet-off-wobble .6s ${SMOOTH}` },
      p1: draw("droplet-off", 400, 120),
    },
    keyframes: drawKf("droplet-off") + "@keyframes ki-droplet-off-wobble{0%{transform:none}30%{transform:scale(1.06,.92)}60%{transform:scale(.97,1.03)}100%{transform:none}}",
  },

  "dice-three": {
    note: "The die tips as if rolled and its three pips pop back in, corner to corner.",
    motion: {
      p0: { animation: `ki-dice-three-tip .6s ${SMOOTH}` },
      p1: pop("dice-three", 100, 350),
      p2: pop("dice-three", 180, 350),
      p3: pop("dice-three", 260, 350),
    },
    keyframes: "@keyframes ki-dice-three-tip{0%{transform:none}35%{transform:rotate(-12deg)}70%{transform:rotate(3deg)}100%{transform:none}}" + popKf("dice-three"),
  },

  "ai-chip": {
    note: "The letters write themselves on the chip, which pulses.",
    draw: ["p14", "p13", "p2"],
    motion: {
      p15: { animation: `ki-ai-chip-pulse .6s ${SMOOTH}` },
      p14: draw("ai-chip", 400, 60),
      p13: draw("ai-chip", 200, 380),
      p2: draw("ai-chip", 250, 300),
    },
    keyframes: drawKf("ai-chip") + "@keyframes ki-ai-chip-pulse{0%{transform:none}35%{transform:scale(1.05)}100%{transform:none}}",
  },

  "payment-done": {
    note: "The card lifts a touch and the tick draws itself at its corner.",
    draw: ["p3"],
    motion: {
      p0: { animation: `ki-payment-done-lift .55s ${SMOOTH}` },
      p1: { animation: `ki-payment-done-lift .55s ${SMOOTH}` },
      p2: { animation: `ki-payment-done-lift .55s ${SMOOTH}` },
      p3: draw("payment-done", 420, 150),
    },
    keyframes: "@keyframes ki-payment-done-lift{0%{transform:none}35%{transform:translateY(-.8px)}100%{transform:none}}" + drawKf("payment-done"),
  },

  sundae: {
    note: "The scoop wobbles in the bowl and the cherry hops on top.",
    motion: {
      p0: { ...at(12, 17), animation: `ki-sundae-wobble .65s ${SMOOTH}` },
      p2: { animation: `ki-sundae-cherry .55s ${SMOOTH} 100ms` },
    },
    keyframes:
      "@keyframes ki-sundae-wobble{0%{transform:none}30%{transform:scale(1.05,.94)}60%{transform:scale(.98,1.03)}100%{transform:none}}" +
      "@keyframes ki-sundae-cherry{0%{transform:none}35%{transform:translateY(-1.6px)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  "card-reader": {
    note: "The card dips down into the reader and comes back up.",
    motion: {
      p1: { animation: `ki-card-reader-dip .65s ${SMOOTH}` },
      p3: { animation: `ki-card-reader-dip .65s ${SMOOTH}` },
      p0: { animation: `ki-card-reader-dip .65s ${SMOOTH}` },
      p2: { animation: `ki-card-reader-slot .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-card-reader-dip{0%{transform:none}40%{transform:translateY(1.5px)}75%{transform:translateY(-.3px)}100%{transform:none}}" +
      "@keyframes ki-card-reader-slot{0%,25%{transform:none}40%{transform:translateY(.4px)}100%{transform:none}}",
  },

  dock: {
    note: "The row of apps in the dock bounces, like an app being opened.",
    motion: { p2: { origin: "50% 100%", animation: `ki-dock-bounce .6s ${SMOOTH}` } },
    keyframes: "@keyframes ki-dock-bounce{0%{transform:none}30%{transform:translateY(-1.6px)}55%{transform:translateY(.2px) scaleX(1.08)}75%{transform:translateY(-.4px)}100%{transform:none}}",
  },
};

