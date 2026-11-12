import type { Entry, Override } from "./types";

/** Batch q: its icons (pnpm import-icons q) and their motions. */
export const list: Entry[] = [
  ["CreditCardMinus", "credit-card-minus", "Remove card", "commerce", "pop", ["card", "remove", "payment", "minus"], "The minus draws in."],
  ["CreditCardPlus", "credit-card-plus", "Add card", "commerce", "pop", ["card", "add", "payment", "new"], "The plus draws in."],
  ["CreditCardX", "credit-card-x", "Card declined", "commerce", "shake", ["card", "declined", "remove", "error"], "The cross draws in."],
  ["Dam", "dam", "Dam", "travel", "wave", ["dam", "water", "reservoir", "hydro"], "The water flows over."],
  ["DatabaseArrowDown", "database-arrow-down", "Database download", "development", "nudge-down", ["database", "download", "import", "data"], "The arrow drops."],
  ["DatabaseArrowUp", "database-arrow-up", "Database upload", "development", "nudge-up", ["database", "upload", "export", "data"], "The arrow rises."],
  ["DatabaseCheck", "database-check", "Database ok", "development", "draw", ["database", "check", "healthy", "data"], "The tick draws."],
  ["DatabaseCog", "database-cog", "Database settings", "development", "spin", ["database", "settings", "config", "data"], "The cog turns."],
  ["DatabaseMinus", "database-minus", "Remove database", "development", "pop", ["database", "remove", "minus", "data"], "The minus draws in."],
  ["DatabaseX", "database-x", "Database error", "development", "shake", ["database", "error", "delete", "data"], "The cross draws in."],
  ["DecimalsArrowLeft", "decimals-arrow-left", "Fewer decimals", "text", "nudge-left", ["decimal", "round", "number", "precision"], "The arrow pulls left."],
  ["DecimalsArrowRight", "decimals-arrow-right", "More decimals", "text", "nudge-right", ["decimal", "number", "precision", "digits"], "The arrow pushes right."],
  ["DiagramFlowHorizontal", "diagram-flow-horizontal", "Flow diagram", "charts", "draw", ["diagram", "flow", "chart", "process"], "The links draw across."],
  ["Diameter", "diameter", "Diameter", "shapes", "draw", ["diameter", "circle", "measure", "geometry"], "The line draws across."],
  ["DiamondMinus", "diamond-minus", "Diamond minus", "shapes", "pop", ["diamond", "minus", "remove", "shape"], "The minus draws in."],
  ["DiamondPercent", "diamond-percent", "Discount tag", "commerce", "spin-90", ["percent", "discount", "sale", "offer"], "The slash turns."],
  ["DiamondPlus", "diamond-plus", "Diamond plus", "shapes", "pop", ["diamond", "plus", "add", "shape"], "The plus draws in."],
  ["Dice1", "dice-one", "Dice one", "app", "bounce", ["dice", "one", "game", "roll"], "The die rolls."],
  ["Dice2", "dice-two", "Dice two", "app", "bounce", ["dice", "two", "game", "roll"], "The die rolls."],
  ["Dice4", "dice-four", "Dice four", "app", "bounce", ["dice", "four", "game", "roll"], "The die rolls."],
  ["Dice5", "dice-five", "Dice five", "app", "bounce", ["dice", "five", "game", "roll"], "The die rolls."],
  ["Dice6", "dice-six", "Dice six", "app", "bounce", ["dice", "six", "game", "roll"], "The die rolls."],
  ["Disc2", "disc-2", "Disc label", "media", "spin", ["cd", "disc", "album", "music"], "It spins."],
  ["Disc3", "disc-3", "Disc grooves", "media", "spin", ["vinyl", "record", "cd", "music"], "It spins."],
  ["SquareDivide", "square-divide", "Divide in a square", "text", "pop", ["divide", "math", "calculator", "split"], "The dots part."],
  ["DnaOff", "dna-off", "No DNA", "health", "shake", ["dna", "gene", "off", "genetics"], "The strands twist."],
  ["Dome", "dome", "Dome", "travel", "pop", ["dome", "building", "planetarium", "observatory"], "The dome rises."],
  ["DoorClosedCog", "door-closed-cog", "Door settings", "travel", "spin", ["door", "settings", "access", "control"], "The cog turns."],
  ["DoorClosedLocked", "door-closed-locked", "Locked door", "travel", "shake", ["door", "locked", "secure", "private"], "The lock rattles."],
  ["DoorClosedPackage", "door-closed-package", "Delivered to the door", "commerce", "bounce", ["delivery", "package", "door", "parcel"], "The parcel drops."],
  ["DoorStairwell", "door-stairwell", "Stairwell", "travel", "nudge-up", ["stairs", "exit", "door", "stairwell"], "The steps climb."],
  ["SquareDot", "square-dot", "Dot in a square", "shapes", "pop", ["dot", "square", "point", "select"], "The dot pops."],
  ["Download", "download-tray", "Download to tray", "actions", "nudge-down", ["download", "save", "get", "tray"], "The arrow drops in."],
  ["EarbudsOff", "earbuds-off", "Earbuds off", "devices", "shake", ["earbuds", "off", "audio", "disconnected"], "They shake off."],
  ["EarthLock", "earth-lock", "Private world", "status", "shake", ["vpn", "secure", "private", "web"], "The lock rattles."],
  ["EggOff", "egg-off", "No eggs", "food", "shake", ["egg", "allergy", "vegan", "off"], "It wobbles."],
  ["Ellipse", "ellipse", "Ellipse", "shapes", "pop", ["ellipse", "oval", "shape", "circle"], "It stretches."],
  ["EmiratiDirham", "emirati-dirham", "Dirham", "commerce", "pop", ["money", "currency", "aed", "dirham"], "It draws itself."],
  ["Engine", "engine", "Engine", "travel", "shake", ["engine", "motor", "car", "power"], "It revs."],
  ["EqualApproximately", "equal-approximately", "Approximately", "text", "wave", ["approximately", "about", "math", "roughly"], "The waves ripple."],
  ["EqualApproximatelyNot", "equal-approximately-not", "Not approximately", "text", "shake", ["not", "approximately", "math", "different"], "The slash crosses."],
  ["EqualNot", "equal-not", "Not equal", "text", "shake", ["not equal", "math", "different", "unequal"], "The slash crosses."],
  ["SquareEqual", "square-equal", "Equals in a square", "text", "pop", ["equal", "math", "calculator", "result"], "The lines meet."],
  ["ExclamationMark", "exclamation-mark", "Exclamation mark", "status", "shake", ["alert", "warning", "important", "attention"], "It jumps."],
  ["ExternalLink", "external-link", "Open link", "navigation", "nudge-right", ["external", "link", "open", "new tab"], "The arrow leaves."],
  ["EyeDashed", "eye-dashed", "Partly visible", "actions", "blink", ["visibility", "preview", "hidden", "eye"], "It blinks."],
  ["Faucet", "faucet", "Faucet", "food", "nudge-down", ["tap", "water", "sink", "kitchen"], "It drips."],
  ["Fence", "fence", "Fence", "nature", "wave", ["fence", "garden", "yard", "boundary"], "The posts settle."],
  ["FileAxis3d", "file-axis-3d", "3D file", "files", "tilt", ["3d", "model", "axis", "file"], "The axes draw."],
  ["FileBadge", "file-badge", "Certificate", "files", "tilt", ["certificate", "award", "badge", "file"], "The badge swings."],
  ["FileChartColumnIncreasing", "file-chart-column-increasing", "Growth report", "files", "tilt", ["report", "chart", "growth", "file"], "The bars grow."],
  ["FileBox", "file-box", "Package file", "files", "tilt", ["package", "archive", "box", "file"], "The box drops in."],
  ["FileBracesCorner", "file-braces-corner", "JSON file", "files", "tilt", ["json", "code", "data", "file"], "The braces open."],
  ["FileChartLine", "file-chart-line", "Trend report", "files", "tilt", ["report", "chart", "trend", "file"], "The line draws."],
  ["FileChartPie", "file-chart-pie", "Pie report", "files", "tilt", ["report", "pie", "chart", "file"], "The slice lifts out."],
  ["FileCheck", "file-check-center", "Approved file", "files", "draw", ["done", "approved", "check", "file"], "The tick draws."],
  ["FileCodeCorner", "file-code-corner", "Code file corner", "files", "tilt", ["code", "source", "script", "file"], "The brackets open."],
  ["FileDatabase", "file-database", "Database file", "files", "tilt", ["database", "sql", "data", "file"], "The disks stack."],
  ["FileDigit", "file-digit", "Binary file", "files", "tilt", ["binary", "number", "digit", "file"], "The digits flip."],
  ["FileHeart", "file-heart", "Favourite file", "files", "tilt", ["favourite", "like", "heart", "file"], "The heart beats."],
  ["FileInput", "file-input", "Import file", "files", "nudge-right", ["import", "input", "open", "file"], "The arrow goes in."],
  ["FileMinusCorner", "file-minus-corner", "Remove file corner", "files", "tilt", ["remove", "delete", "minus", "file"], "The minus draws in."],
  ["FileMusic", "file-music", "Music file", "files", "tilt", ["music", "audio", "song", "file"], "The note bobs."],
  ["FileOutput", "file-output", "Export file", "files", "nudge-left", ["export", "output", "save", "file"], "The arrow goes out."],
  ["FilePenLine", "file-pen-line", "Sign document", "files", "wiggle", ["sign", "signature", "edit", "contract"], "The pen signs."],
  ["FilePlusCorner", "file-plus-corner", "New file corner", "files", "tilt", ["new", "add", "create", "file"], "The plus draws in."],
  ["FileScan", "file-scan", "Scan file", "files", "pop", ["scan", "document", "ocr", "file"], "The corners close in."],
  ["FileSearchCorner", "file-search-corner", "Find in file", "files", "tilt", ["search", "find", "look", "file"], "The lens searches."],
  ["FileSignal", "file-signal", "Audio level file", "files", "tilt", ["audio", "signal", "sound", "file"], "The waves ripple."],
  ["FileSliders", "file-sliders", "File settings sliders", "files", "tilt", ["settings", "adjust", "sliders", "file"], "The sliders slide."],
  ["FileStack", "file-stack", "File stack", "files", "tilt", ["stack", "copies", "documents", "files"], "The pages fan out."],
  ["FileSymlink", "file-symlink", "File shortcut", "files", "nudge-right", ["link", "shortcut", "alias", "file"], "The arrow points."],
  ["FileType", "file-type", "Text file", "files", "tilt", ["text", "font", "type", "file"], "The letter stamps."],
  ["FileTypeCorner", "file-type-corner", "Text file corner", "files", "tilt", ["text", "font", "type", "file"], "The letter stamps."],
  ["FileVideoCamera", "file-video-camera", "Video recording file", "files", "tilt", ["video", "camera", "movie", "file"], "The camera rolls."],
  ["FileVolume", "file-volume", "Sound file", "files", "tilt", ["sound", "audio", "volume", "file"], "The waves ripple."],
  ["FileXCorner", "file-x-corner", "File error corner", "files", "shake", ["error", "delete", "remove", "file"], "The cross draws in."],
  ["FishingHook", "fishing-hook", "Fishing hook", "nature", "swing", ["fishing", "hook", "catch", "bait"], "The hook swings."],
  ["FishingRod", "fishing-rod", "Fishing rod", "nature", "swing", ["fishing", "rod", "cast", "hobby"], "The rod casts."],
  ["FishOff", "fish-off", "No fish", "food", "shake", ["fish", "allergy", "seafood", "off"], "It flops."],
  ["FishSymbol", "fish-symbol", "Fish symbol", "food", "wiggle", ["fish", "symbol", "sea", "ichthys"], "It swims."],
  ["FlagOff", "flag-off", "Flag off", "status", "shake", ["flag", "unflag", "off", "report"], "The flag droops."],
  ["FlagTriangleLeft", "flag-triangle-left", "Pennant left", "status", "wave", ["flag", "pennant", "mark", "goal"], "The pennant waves."],
  ["FlagTriangleRight", "flag-triangle-right", "Pennant", "status", "wave", ["flag", "pennant", "mark", "golf"], "The pennant waves."],
  ["FlameKindling", "flame-kindling", "Campfire", "nature", "flash", ["campfire", "fire", "camping", "wood"], "The flame flickers."],
  ["FlashlightOff", "flashlight-off", "Flashlight off", "devices", "shake", ["torch", "off", "dark", "light"], "It switches off."],
  ["FlaskConicalOff", "flask-off", "No lab", "development", "shake", ["experiment", "off", "lab", "science"], "The liquid sloshes."],
  ["FlaskRound", "flask-round", "Round flask", "development", "wiggle", ["experiment", "lab", "science", "potion"], "The liquid sloshes."],
  ["FlipHorizontal2", "flip-horizontal-2", "Mirror sideways", "actions", "pop", ["mirror", "flip", "reflect", "symmetry"], "It flips across."],
  ["FlipVertical2", "flip-vertical-2", "Mirror upside down", "actions", "pop", ["mirror", "flip", "reflect", "symmetry"], "It flips over."],
  ["Flower2", "flower-2", "Tulip flower", "nature", "spin-90", ["flower", "spring", "garden", "bloom"], "It blooms."],
  ["FolderBookmark", "folder-bookmark", "Bookmarked folder", "files", "bounce", ["bookmark", "saved", "favourite", "folder"], "The ribbon drops."],
  ["FolderClock", "folder-clock", "Recent folder", "files", "bounce", ["recent", "history", "pending", "folder"], "The clock ticks."],
  ["FolderClosed", "folder-closed", "Closed folder", "files", "bounce", ["folder", "directory", "closed"], "The folder settles."],
  ["FolderCog", "folder-cog", "Folder settings", "files", "spin", ["settings", "config", "preferences", "folder"], "The cog turns."],
  ["FolderDot", "folder-dot", "Folder with dot", "files", "bounce", ["folder", "dot", "unread", "new"], "The dot pops."],
  ["FolderPen", "folder-pen", "Rename folder", "files", "wiggle", ["rename", "edit", "write", "folder"], "The pen writes."],
  ["FolderGit", "folder-git", "Git folder", "development", "bounce", ["git", "repo", "repository", "folder"], "The commit lands."],
];

/** the smooth curve (no overshoot) for drawings and keyframe motions that carry their own bounce */
const E = "cubic-bezier(.22,1,.36,1)";
/** a keyframe block named after the icon */
const kf = (icon: string, name: string, frames: string) => `@keyframes ki-${icon}-${name}{${frames}}`;
/** an animation of one of the icon's keyframes */
const an = (icon: string, name: string, ms: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${E} ${delay}ms${fill ? " " + fill : ""}`;
/** a pivot in icon units (24 grid) rather than in the part's own box */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** the same motion for several parts */
const all = <T,>(parts: string[], m: T): Record<string, T> => Object.fromEntries(parts.map((p) => [p, m]));
/** a line drawn in from its start (needs the part in `draw`), or from its end */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const drawIn = (icon: string, ms: number, delay = 0, reverse = false) => ({
  from: { strokeDasharray: 1 },
  animation: an(icon, reverse ? "undraw" : "draw", ms, delay, "backwards"),
});
/** a small bounce of a folder or page that takes a knock */
const knockKf = (icon: string) => kf(icon, "knock", "0%{transform:none}30%{transform:translateY(.6px) scale(1.02,.97)}60%{transform:translateY(-.2px)}100%{transform:none}");
/** a side-to-side shiver */
const shiverKf = (icon: string) => kf(icon, "shiver", "0%{transform:none}25%{transform:translateX(-.6px)}50%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}");
/** pops in from small (a node, a pip) */
const popInKf = (icon: string) => kf(icon, "pop", "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}");
/** a dot that swells and settles */
const swellKf = (icon: string) => kf(icon, "swell", "0%{transform:none}35%{transform:scale(1.6)}65%{transform:scale(.85)}100%{transform:none}");
/** a whole ring breathing in once */
const ringKf = (icon: string) => kf(icon, "ring", "0%{transform:none}35%{transform:scale(.96)}70%{transform:scale(1.02)}100%{transform:none}");
/** a lock: the shackle lifts and drops, the body rattles from its top */
const lockKf = (icon: string) =>
  kf(icon, "shackle", "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}75%{transform:none}100%{transform:none}") +
  kf(icon, "rattle", "0%,30%{transform:none}45%{transform:rotate(-7deg)}62%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}");
const lock = (icon: string, body: string, shackle: string) => ({
  [shackle]: { animation: an(icon, "shackle", 700) },
  [body]: { origin: "50% 0%", animation: an(icon, "rattle", 700) },
});
/** a magnifier that circles over what it searches */
const searchKf = (icon: string) =>
  kf(icon, "search", "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}");
/** a mark that leaves one way and comes back in from the other side */
const throughKf = (icon: string, dx: number, dy: number) =>
  kf(icon, "through", `0%{transform:none;opacity:1}35%{transform:translate(${dx}px,${dy}px);opacity:0}36%{transform:translate(${-dx}px,${-dy}px);opacity:0}100%{transform:none;opacity:1}`);
/** something that drops in from above and lands */
const dropKf = (icon: string) => kf(icon, "drop", "0%{transform:translateY(-3px);opacity:0}55%{transform:translateY(.5px);opacity:1}100%{transform:none;opacity:1}");
/** a pen that scribbles around its nib */
const scribbleKf = (icon: string) =>
  kf(icon, "write", "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}");
/** a cog (or clock hands) turning round its hub; a cog with eight teeth looks the same a quarter round */
const turnKf = (icon: string, deg: number) => kf(icon, "turn", `from{transform:none}to{transform:rotate(${deg}deg)}`);
const turning = (icon: string, parts: string[], x: number, y: number, ms = 800, delay = 0) => all(parts, { ...at(x, y), animation: an(icon, "turn", ms, delay) });
/** the top disk of a database stack lifting off and settling */
const liftKf = (icon: string) => kf(icon, "lift", "0%{transform:none}35%{transform:translateY(-1.2px)}70%{transform:translateY(.3px)}100%{transform:none}");
/** a card swiping a little to the side, round the card's middle */
const swipeKf = (icon: string) => kf(icon, "swipe", "0%{transform:none}35%{transform:translateX(-1px) rotate(2deg)}70%{transform:translateX(.3px)}100%{transform:none}");
/** a die tipping as if rolled */
const tipKf = (icon: string) => kf(icon, "tip", "0%{transform:none}35%{transform:rotate(-12deg)}70%{transform:rotate(3deg)}100%{transform:none}");
/** a head shake */
const shakeKf = (icon: string) => kf(icon, "shake", "0%{transform:none}25%{transform:translateX(-.7px)}50%{transform:translateX(.6px)}75%{transform:translateX(-.3px)}100%{transform:none}");
/** a flask tipping on its base while its liquid sloshes the other way */
const flaskKf = (icon: string) =>
  kf(icon, "tip", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
  kf(icon, "slosh", "0%{transform:none}30%{transform:rotate(10deg)}60%{transform:rotate(-7deg)}85%{transform:rotate(2deg)}100%{transform:none}");
/** a flag rippling out from its pole */
const waveKf = (icon: string, deg: number) =>
  kf(icon, "wave", `0%{transform:none}20%{transform:skewY(${deg}deg)}45%{transform:skewY(${-deg * 0.66}deg)}70%{transform:skewY(${deg * 0.33}deg)}100%{transform:none}`);
/** an arrow pushing one way and springing back */
const pushKf = (icon: string, dx: number) =>
  kf(icon, "push", `0%{transform:none}35%{transform:translateX(${dx}px)}65%{transform:translateX(${-dx * 0.2}px)}100%{transform:none}`);
/** a letter stamped onto the page */
const stampKf = (icon: string) =>
  kf(icon, "stamp", "0%{transform:none}30%{transform:translateY(-1.2px) scale(1.1)}55%{transform:translateY(.3px) scale(.95)}100%{transform:none}");
/** a sound wave fading out and back as it ripples */
const rippleKf = (icon: string) =>
  kf(icon, "ripple", "0%{transform:none;opacity:1}30%{transform:translateX(-.6px);opacity:.2}70%{transform:translateX(.2px);opacity:1}100%{transform:none;opacity:1}");

/** a die (body p0) that tips as if rolled while its pips pop back in */
const dice = (icon: string, pips: string[]): Override => ({
  note: "The die tips as if rolled and its pips pop back in, one after another.",
  motion: {
    p0: { animation: an(icon, "tip", 600) },
    ...Object.fromEntries(pips.map((p, i) => [p, { animation: an(icon, "pop", 350, 100 + i * 70, "backwards") }])),
  },
  keyframes: tipKf(icon) + popInKf(icon),
});

/** the eight teeth of the small cog the source puts in a corner */
const COG = ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"];

export const motions: Record<string, Override> = {
  "credit-card-minus": {
    note: "The minus draws itself beside the card, which swipes a little to the side.",
    draw: ["p3"],
    motion: {
      p3: drawIn("credit-card-minus", 400),
      ...all(["p0", "p1", "p2"], { ...at(12, 12), animation: an("credit-card-minus", "swipe", 650, 150) }),
    },
    keyframes: drawKf("credit-card-minus") + swipeKf("credit-card-minus"),
  },

  "credit-card-plus": {
    note: "The plus draws itself, across and then down, and the card swipes a little to the side.",
    draw: ["p3", "p4"],
    motion: {
      p3: drawIn("credit-card-plus", 350),
      p4: drawIn("credit-card-plus", 350, 120),
      ...all(["p0", "p1", "p2"], { ...at(12, 12), animation: an("credit-card-plus", "swipe", 650, 200) }),
    },
    keyframes: drawKf("credit-card-plus") + swipeKf("credit-card-plus"),
  },

  "credit-card-x": {
    note: "The cross draws itself, one stroke and then the other, and the declined card shivers.",
    draw: ["p3", "p4"],
    motion: {
      p3: drawIn("credit-card-x", 320),
      p4: drawIn("credit-card-x", 320, 120),
      ...all(["p0", "p1", "p2"], { animation: an("credit-card-x", "shiver", 500, 350) }),
    },
    keyframes: drawKf("credit-card-x") + shiverKf("credit-card-x"),
  },

  dam: {
    note: "The water rolls past the wall in two waves, and the levels behind it draw in from the top.",
    draw: ["p5", "p2", "p3", "p4"],
    motion: {
      p0: { animation: an("dam", "flow", 800) },
      p1: { animation: an("dam", "flow", 800, 120) },
      p5: drawIn("dam", 250),
      p2: drawIn("dam", 250, 80),
      p3: drawIn("dam", 250, 160),
      p4: drawIn("dam", 250, 240),
    },
    keyframes: drawKf("dam") + kf("dam", "flow", "0%{transform:none}40%{transform:translateX(1.2px)}70%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  "database-arrow-down": {
    note: "The arrow drops out of view and comes back in from above, and the top disk dips as it lands.",
    motion: {
      p0: { animation: an("database-arrow-down", "through", 650) },
      p1: { animation: an("database-arrow-down", "through", 650) },
      p5: { animation: an("database-arrow-down", "dip", 500, 300) },
    },
    keyframes: throughKf("database-arrow-down", 0, 2.5) + kf("database-arrow-down", "dip", "0%{transform:none}35%{transform:translateY(.6px)}100%{transform:none}"),
  },

  "database-arrow-up": {
    note: "The arrow rises out of view and comes back up from below, and the top disk lifts.",
    motion: {
      p0: { animation: an("database-arrow-up", "through", 650) },
      p2: { animation: an("database-arrow-up", "through", 650) },
      p5: { animation: an("database-arrow-up", "lift", 600, 80) },
    },
    keyframes: throughKf("database-arrow-up", 0, -2.5) + liftKf("database-arrow-up"),
  },

  "database-check": {
    note: "The tick draws itself beside the stack and the top disk lifts.",
    draw: ["p0"],
    motion: { p0: drawIn("database-check", 450), p4: { animation: an("database-check", "lift", 600, 250) } },
    keyframes: drawKf("database-check") + liftKf("database-check"),
  },

  "database-cog": {
    note: "The cog turns a quarter on its hub and the top disk lifts.",
    motion: {
      ...turning("database-cog", [...COG, "p11"], 18, 18),
      p12: { animation: an("database-cog", "lift", 600, 80) },
    },
    keyframes: turnKf("database-cog", 90) + liftKf("database-cog"),
  },

  "database-minus": {
    note: "The minus draws itself beside the stack and the top disk lifts.",
    draw: ["p1"],
    motion: { p1: drawIn("database-minus", 400), p4: { animation: an("database-minus", "lift", 600, 200) } },
    keyframes: drawKf("database-minus") + liftKf("database-minus"),
  },

  "database-x": {
    note: "The cross draws itself, one stroke and then the other, and the stack shivers.",
    draw: ["p0", "p3"],
    motion: {
      p0: drawIn("database-x", 320),
      p3: drawIn("database-x", 320, 120),
      ...all(["p1", "p2", "p4", "p5", "p6"], { animation: an("database-x", "shiver", 500, 350) }),
    },
    keyframes: drawKf("database-x") + shiverKf("database-x"),
  },

  "decimals-arrow-left": {
    note: "The arrow pushes left and the last zero squeezes up against it.",
    motion: {
      p0: { animation: an("decimals-arrow-left", "push", 600) },
      p1: { animation: an("decimals-arrow-left", "push", 600) },
      p3: { origin: "0% 50%", animation: an("decimals-arrow-left", "squeeze", 600, 80) },
    },
    keyframes:
      pushKf("decimals-arrow-left", -1.5) +
      kf("decimals-arrow-left", "squeeze", "0%{transform:none}35%{transform:scaleX(.8)}65%{transform:scaleX(1.04)}100%{transform:none}"),
  },

  "decimals-arrow-right": {
    note: "The arrow pushes right and a new zero pops in after the first.",
    motion: {
      p0: { animation: an("decimals-arrow-right", "push", 600) },
      p1: { animation: an("decimals-arrow-right", "push", 600) },
      p3: { animation: an("decimals-arrow-right", "pop", 450, 120, "backwards") },
    },
    keyframes: pushKf("decimals-arrow-right", 1.5) + popInKf("decimals-arrow-right"),
  },

  "diagram-flow-horizontal": {
    note: "The two links draw out of the first box and each box they reach pops in.",
    draw: ["p1", "p0"],
    motion: {
      p1: drawIn("diagram-flow-horizontal", 400),
      p0: drawIn("diagram-flow-horizontal", 400, 80),
      p3: { animation: an("diagram-flow-horizontal", "pop", 400, 320, "backwards") },
      p2: { animation: an("diagram-flow-horizontal", "pop", 400, 400, "backwards") },
    },
    keyframes: drawKf("diagram-flow-horizontal") + popInKf("diagram-flow-horizontal"),
  },

  diameter: {
    note: "The first end point pops, the line draws across the circle and the far end point pops.",
    draw: ["p3"],
    motion: {
      p1: { animation: an("diameter", "pop", 350, 0, "backwards") },
      p3: drawIn("diameter", 400, 120),
      p0: { animation: an("diameter", "pop", 350, 450, "backwards") },
      p2: { ...at(12, 12), animation: an("diameter", "ring", 700, 100) },
      p4: { ...at(12, 12), animation: an("diameter", "ring", 700, 100) },
    },
    keyframes: drawKf("diameter") + popInKf("diameter") + ringKf("diameter"),
  },

  "diamond-minus": {
    note: "The minus draws itself across the diamond, which takes the knock.",
    draw: ["p1"],
    motion: { p1: drawIn("diamond-minus", 400), p0: { animation: an("diamond-minus", "knock", 600, 200) } },
    keyframes: drawKf("diamond-minus") + knockKf("diamond-minus"),
  },

  "diamond-percent": {
    note: "The slash spins half way round and the two dots swell after it.",
    motion: {
      p2: { ...at(12, 12), animation: an("diamond-percent", "turn", 700) },
      p1: { animation: an("diamond-percent", "swell", 500, 150) },
      p3: { animation: an("diamond-percent", "swell", 500, 250) },
    },
    keyframes: turnKf("diamond-percent", 180) + swellKf("diamond-percent"),
  },

  "diamond-plus": {
    note: "The plus draws itself, across and then down, and the diamond takes the knock.",
    draw: ["p2", "p0"],
    motion: {
      p2: drawIn("diamond-plus", 350),
      p0: drawIn("diamond-plus", 350, 120),
      p1: { animation: an("diamond-plus", "knock", 600, 300) },
    },
    keyframes: drawKf("diamond-plus") + knockKf("diamond-plus"),
  },

  "dice-one": dice("dice-one", ["p1"]),
  "dice-two": dice("dice-two", ["p1", "p2"]),
  "dice-four": dice("dice-four", ["p2", "p1", "p3", "p4"]),
  "dice-five": dice("dice-five", ["p2", "p1", "p5", "p3", "p4"]),
  "dice-six": dice("dice-six", ["p4", "p1", "p5", "p2", "p6", "p3"]),

  "disc-2": {
    note: "The label swells and settles, the hole pops, and the disc gives a small bounce round them.",
    motion: {
      p1: { animation: an("disc-2", "label", 600) },
      p2: { animation: an("disc-2", "swell", 500, 120) },
      p0: { animation: an("disc-2", "ring", 600, 60) },
    },
    keyframes:
      kf("disc-2", "label", "0%{transform:none}35%{transform:scale(1.15)}70%{transform:scale(.95)}100%{transform:none}") + swellKf("disc-2") + ringKf("disc-2"),
  },

  "disc-3": {
    note: "The record spins one full turn, its grooves catching the light, and the hole pulses.",
    motion: {
      p1: { ...at(12, 12), animation: an("disc-3", "turn", 850) },
      p3: { ...at(12, 12), animation: an("disc-3", "turn", 850) },
      p2: { animation: an("disc-3", "hole", 550) },
    },
    keyframes: turnKf("disc-3", 360) + kf("disc-3", "hole", "0%{transform:none}35%{transform:scale(1.3)}70%{transform:scale(.92)}100%{transform:none}"),
  },

  "square-divide": {
    note: "The two dots move apart from the bar, which stretches.",
    motion: {
      p3: { to: { transform: "translateY(-1.5px)" } },
      p2: { to: { transform: "translateY(1.5px)" } },
      p1: { to: { transform: "scaleX(1.12)" }, delay: 40 },
    },
  },

  "dna-off": {
    note: "The slash draws itself across the strand, which gives a small shake.",
    draw: ["p3"],
    motion: {
      p3: drawIn("dna-off", 420),
      ...all(["p0", "p1", "p2", "p4", "p5", "p6", "p7", "p8", "p9"], { animation: an("dna-off", "shake", 600, 200) }),
    },
    keyframes: drawKf("dna-off") + shakeKf("dna-off"),
  },

  dome: {
    note: "The dome swells up from its walls and the spire on top rises after it.",
    motion: {
      p4: { origin: "50% 100%", animation: an("dome", "rise", 650) },
      p1: { animation: an("dome", "spire", 600, 60) },
    },
    keyframes:
      kf("dome", "rise", "0%{transform:none}35%{transform:scaleY(1.12)}65%{transform:scaleY(.97)}100%{transform:none}") +
      kf("dome", "spire", "0%{transform:none}40%{transform:translateY(-1px)}70%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "door-closed-cog": {
    note: "The cog turns a quarter on its hub and the door handle is pressed.",
    motion: {
      ...turning("door-closed-cog", ["p0", "p1", "p2", "p3", "p5", "p6", "p8", "p9", "p11"], 18, 18),
      p10: { animation: an("door-closed-cog", "handle", 500) },
    },
    keyframes: turnKf("door-closed-cog", 90) + kf("door-closed-cog", "handle", "0%{transform:none}30%{transform:translateY(.8px)}100%{transform:none}"),
  },

  "door-closed-locked": {
    note: "The handle is pressed, and the lock's shackle lifts and drops while the lock rattles.",
    motion: {
      ...lock("door-closed-locked", "p4", "p2"),
      p3: { animation: an("door-closed-locked", "handle", 500) },
    },
    keyframes: lockKf("door-closed-locked") + kf("door-closed-locked", "handle", "0%{transform:none}30%{transform:translateY(.8px)}100%{transform:none}"),
  },

  "door-closed-package": {
    note: "The parcel drops in front of the door and the door takes the knock.",
    motion: {
      p4: { animation: an("door-closed-package", "drop", 550, 0, "backwards") },
      p0: { animation: an("door-closed-package", "drop", 550, 0, "backwards") },
      p1: { animation: an("door-closed-package", "knock", 600, 250) },
      p3: { animation: an("door-closed-package", "knock", 600, 250) },
    },
    keyframes: dropKf("door-closed-package") + knockKf("door-closed-package"),
  },

  "door-stairwell": {
    note: "The steps draw themselves one after another, climbing up the doorway.",
    draw: ["p1", "p0", "p3"],
    motion: {
      p1: drawIn("door-stairwell", 300, 0, true),
      p0: drawIn("door-stairwell", 300, 140),
      p3: drawIn("door-stairwell", 300, 280, true),
    },
    keyframes: drawKf("door-stairwell") + undrawKf("door-stairwell"),
  },

  "square-dot": {
    note: "The dot swells and settles, and the square gives a small bounce round it.",
    motion: {
      p1: { animation: an("square-dot", "swell", 550) },
      p0: { animation: an("square-dot", "ring", 600, 60) },
    },
    keyframes: swellKf("square-dot") + ringKf("square-dot"),
  },

  "download-tray": {
    note: "The arrow drops in from above and the tray gives under it.",
    motion: {
      p0: { animation: an("download-tray", "drop", 550, 0, "backwards") },
      p2: { animation: an("download-tray", "drop", 550, 0, "backwards") },
      p1: { origin: "50% 100%", animation: an("download-tray", "give", 650) },
    },
    keyframes:
      dropKf("download-tray") + kf("download-tray", "give", "0%,30%{transform:none}50%{transform:scaleY(.85)}75%{transform:scaleY(1.04)}100%{transform:none}"),
  },

  "earbuds-off": {
    note: "The slash draws itself across the earbuds, which give a small shake.",
    draw: ["p3"],
    motion: {
      p3: drawIn("earbuds-off", 420),
      ...all(["p0", "p1", "p2"], { animation: an("earbuds-off", "shake", 600, 200) }),
    },
    keyframes: drawKf("earbuds-off") + shakeKf("earbuds-off"),
  },

  "earth-lock": {
    note: "The continents slide across the turning globe while the lock's shackle lifts and drops.",
    motion: {
      ...lock("earth-lock", "p5", "p4"),
      p1: { animation: an("earth-lock", "turn", 750) },
      p2: { animation: an("earth-lock", "turn", 750, 60) },
      p0: { animation: an("earth-lock", "turn", 750, 120) },
    },
    keyframes: lockKf("earth-lock") + kf("earth-lock", "turn", "0%{transform:none}40%{transform:translateX(1.2px)}70%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  "egg-off": {
    note: "The slash draws itself across the egg, which wobbles on its base.",
    draw: ["p0"],
    motion: {
      p0: drawIn("egg-off", 420),
      p1: { ...at(12, 22), animation: an("egg-off", "wobble", 800, 150) },
      p2: { ...at(12, 22), animation: an("egg-off", "wobble", 800, 150) },
    },
    keyframes:
      drawKf("egg-off") +
      kf("egg-off", "wobble", "0%{transform:none}20%{transform:rotate(-8deg)}45%{transform:rotate(6deg)}68%{transform:rotate(-3deg)}85%{transform:rotate(1deg)}100%{transform:none}"),
  },

  ellipse: {
    note: "The ellipse stretches wide and flat, then springs back taller before it settles.",
    motion: { p0: { animation: an("ellipse", "stretch", 650) } },
    keyframes: kf("ellipse", "stretch", "0%{transform:none}35%{transform:scale(1.08,.85)}65%{transform:scale(.97,1.06)}100%{transform:none}"),
  },

  "emirati-dirham": {
    note: "The two bars draw themselves across the letter, which settles under them.",
    draw: ["p1", "p2"],
    motion: {
      p1: drawIn("emirati-dirham", 350),
      p2: drawIn("emirati-dirham", 350, 100),
      p0: { animation: an("emirati-dirham", "settle", 600, 150) },
    },
    keyframes: drawKf("emirati-dirham") + kf("emirati-dirham", "settle", "0%{transform:none}30%{transform:scale(.96)}60%{transform:scale(1.02)}100%{transform:none}"),
  },

  engine: {
    note: "The engine revs: the block shudders and the cap on top hops.",
    motion: {
      ...all(["p4", "p2", "p3"], { animation: an("engine", "rev", 700) }),
      p0: { animation: an("engine", "hop", 600) },
      p1: { animation: an("engine", "hop", 600) },
    },
    keyframes:
      kf("engine", "rev", "0%{transform:none}10%{transform:translate(-.4px,.2px)}20%{transform:translate(.4px,-.2px)}30%{transform:translate(-.4px,.1px)}40%{transform:translate(.3px,-.1px)}55%{transform:translateX(-.2px)}70%{transform:translateX(.1px)}100%{transform:none}") +
      kf("engine", "hop", "0%{transform:none}30%{transform:translateY(-.8px)}55%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "equal-approximately": {
    note: "The two waves ripple sideways, against each other, and settle.",
    motion: {
      p1: { animation: an("equal-approximately", "right", 700) },
      p0: { animation: an("equal-approximately", "left", 700, 60) },
    },
    keyframes:
      kf("equal-approximately", "right", "0%{transform:none}35%{transform:translateX(1px)}70%{transform:translateX(-.2px)}100%{transform:none}") +
      kf("equal-approximately", "left", "0%{transform:none}35%{transform:translateX(-1px)}70%{transform:translateX(.2px)}100%{transform:none}"),
  },

  "equal-approximately-not": {
    note: "The two waves push apart and the slash draws itself across them.",
    draw: ["p2"],
    motion: {
      p1: { animation: an("equal-approximately-not", "up", 600) },
      p0: { animation: an("equal-approximately-not", "down", 600) },
      p2: drawIn("equal-approximately-not", 400, 150),
    },
    keyframes:
      drawKf("equal-approximately-not") +
      kf("equal-approximately-not", "up", "0%{transform:none}35%{transform:translateY(-.7px)}100%{transform:none}") +
      kf("equal-approximately-not", "down", "0%{transform:none}35%{transform:translateY(.7px)}100%{transform:none}"),
  },

  "equal-not": {
    note: "The two bars draw themselves from opposite ends and the slash crosses them out.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p0: drawIn("equal-not", 350),
      p1: drawIn("equal-not", 350, 90, true),
      p2: drawIn("equal-not", 400, 220),
    },
    keyframes: drawKf("equal-not") + undrawKf("equal-not"),
  },

  "square-equal": {
    note: "The two bars draw themselves from opposite ends inside the square.",
    draw: ["p1", "p2"],
    motion: {
      p1: drawIn("square-equal", 400),
      p2: drawIn("square-equal", 400, 90, true),
    },
    keyframes: drawKf("square-equal") + undrawKf("square-equal"),
  },

  "exclamation-mark": {
    note: "The stroke jumps up and lands with a squash, and the dot swells after it.",
    motion: {
      p0: { origin: "50% 100%", animation: an("exclamation-mark", "jump", 600) },
      p1: { animation: an("exclamation-mark", "swell", 500, 150) },
    },
    keyframes:
      kf("exclamation-mark", "jump", "0%{transform:none}30%{transform:translateY(-1.2px) scaleY(1.06)}55%{transform:translateY(.3px) scaleY(.94)}100%{transform:none}") +
      swellKf("exclamation-mark"),
  },

  "external-link": {
    note: "The arrow flies out of the box at its corner and comes back in, and the box gives a little.",
    motion: {
      p0: { animation: an("external-link", "through", 650) },
      p1: { animation: an("external-link", "through", 650) },
      p2: { animation: an("external-link", "ring", 600, 250) },
    },
    keyframes: throughKf("external-link", 2, -2) + ringKf("external-link"),
  },

  "eye-dashed": {
    note: "The dashed eye blinks shut and opens again.",
    motion: all(["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"], { ...at(12, 12), animation: an("eye-dashed", "blink", 500) }),
    keyframes: kf("eye-dashed", "blink", "0%{transform:none}30%{transform:scaleY(.15)}55%{transform:none}100%{transform:none}"),
  },

  faucet: {
    note: "The tap's handle turns on its hub and the spout tips as the water starts.",
    motion: {
      ...all(["p0", "p2", "p6"], { ...at(12, 6), animation: an("faucet", "turn", 650) }),
      p5: { ...at(18, 15), animation: an("faucet", "tip", 650, 120) },
    },
    keyframes:
      kf("faucet", "turn", "0%{transform:none}35%{transform:scaleX(.6)}65%{transform:scaleX(1.05)}100%{transform:none}") +
      kf("faucet", "tip", "0%{transform:none}35%{transform:rotate(-4deg)}70%{transform:rotate(1deg)}100%{transform:none}"),
  },

  fence: {
    note: "The posts are knocked in one after another and settle.",
    motion: {
      p0: { origin: "50% 100%", animation: an("fence", "post", 550) },
      p3: { origin: "50% 100%", animation: an("fence", "post", 550, 100) },
      p6: { origin: "50% 100%", animation: an("fence", "post", 550, 200) },
    },
    keyframes: kf("fence", "post", "0%{transform:none}30%{transform:translateY(-1px)}55%{transform:translateY(.3px) scaleY(.98)}100%{transform:none}"),
  },

  "file-axis-3d": {
    note: "The two axes draw themselves out from the corner and the depth axis follows.",
    draw: ["p3", "p2"],
    motion: { p3: drawIn("file-axis-3d", 450), p2: drawIn("file-axis-3d", 300, 300) },
    keyframes: drawKf("file-axis-3d"),
  },

  "file-badge": {
    note: "The rosette swings on its ribbon from the top and settles.",
    motion: all(["p3", "p2"], { ...at(6, 11), animation: an("file-badge", "swing", 800) }),
    keyframes: kf("file-badge", "swing", "0%{transform:none}25%{transform:rotate(-12deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  "file-chart-column-increasing": {
    note: "The three bars grow up from the bottom of the page, one after another.",
    motion: {
      p2: { origin: "50% 100%", animation: an("file-chart-column-increasing", "grow", 500, 0, "backwards") },
      p3: { origin: "50% 100%", animation: an("file-chart-column-increasing", "grow", 500, 80, "backwards") },
      p4: { origin: "50% 100%", animation: an("file-chart-column-increasing", "grow", 500, 160, "backwards") },
    },
    keyframes: kf("file-chart-column-increasing", "grow", "0%{transform:scaleY(.15)}60%{transform:scaleY(1.12)}100%{transform:none}"),
  },

  "file-box": {
    note: "The box drops in at the corner of the page, which takes the knock.",
    motion: {
      ...all(["p3", "p2", "p4"], { animation: an("file-box", "drop", 550, 0, "backwards") }),
      p1: { animation: an("file-box", "knock", 600, 220) },
      p0: { animation: an("file-box", "knock", 600, 220) },
    },
    keyframes: dropKf("file-box") + knockKf("file-box"),
  },

  "file-braces-corner": {
    note: "The two braces spread apart and spring back.",
    motion: {
      p2: { to: { transform: "translateX(-1px)" } },
      p3: { to: { transform: "translateX(1px)" } },
    },
  },

  "file-chart-line": {
    note: "The trend line draws itself up across the page.",
    draw: ["p2"],
    motion: { p2: drawIn("file-chart-line", 550, 0, true) },
    keyframes: undrawKf("file-chart-line"),
  },

  "file-chart-pie": {
    note: "The slice lifts out of the pie and the pie's rim draws round under it.",
    draw: ["p2"],
    motion: {
      p3: { animation: an("file-chart-pie", "lift", 700) },
      p2: drawIn("file-chart-pie", 500),
    },
    keyframes:
      drawKf("file-chart-pie") +
      kf("file-chart-pie", "lift", "0%{transform:none}35%{transform:translate(.8px,-.8px)}65%{transform:translate(.6px,-.6px)}100%{transform:none}"),
  },

  "file-check-center": {
    note: "The tick draws itself on the page, which takes the knock.",
    draw: ["p2"],
    motion: { p2: drawIn("file-check-center", 450), p0: { animation: an("file-check-center", "knock", 600, 300) } },
    keyframes: drawKf("file-check-center") + knockKf("file-check-center"),
  },

  "file-code-corner": {
    note: "The two brackets spread apart and spring back.",
    motion: {
      p2: { to: { transform: "translateX(-1px)" } },
      p3: { to: { transform: "translateX(1px)" } },
    },
  },

  "file-database": {
    note: "The top disk lifts off the stack and the middle one follows, then they settle back.",
    motion: {
      p4: { animation: an("file-database", "lift", 600) },
      p1: { animation: an("file-database", "mid", 600, 60) },
    },
    keyframes: liftKf("file-database") + kf("file-database", "mid", "0%{transform:none}35%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  "file-digit": {
    note: "The zero and then the one flip over like a counter.",
    motion: {
      p4: { animation: an("file-digit", "flip", 600) },
      p2: { ...at(12, 19), animation: an("file-digit", "flip", 600, 120) },
      p3: { ...at(12, 19), animation: an("file-digit", "flip", 600, 120) },
    },
    keyframes: kf("file-digit", "flip", "0%{transform:none}40%{transform:scaleY(.1)}60%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  "file-heart": {
    note: "The heart beats twice on the corner of the page.",
    motion: { p2: { animation: an("file-heart", "beat", 800) } },
    keyframes: kf("file-heart", "beat", "0%{transform:none}25%{transform:scale(1.18)}45%{transform:scale(.95)}65%{transform:scale(1.08)}100%{transform:none}"),
  },

  "file-input": {
    note: "The arrow pushes into the page, which gives a little as it arrives.",
    motion: {
      p2: { animation: an("file-input", "push", 600) },
      p3: { animation: an("file-input", "push", 600) },
      p0: { animation: an("file-input", "take", 500, 150) },
    },
    keyframes: pushKf("file-input", 1.5) + kf("file-input", "take", "0%{transform:none}40%{transform:translateX(.4px)}100%{transform:none}"),
  },

  "file-minus-corner": {
    note: "The minus draws itself at the corner of the page, which takes the knock.",
    draw: ["p2"],
    motion: { p2: drawIn("file-minus-corner", 400), p0: { animation: an("file-minus-corner", "knock", 600, 200) } },
    keyframes: drawKf("file-minus-corner") + knockKf("file-minus-corner"),
  },

  "file-music": {
    note: "The note bobs on its head like a beat.",
    motion: all(["p2", "p3"], { ...at(6, 20), animation: an("file-music", "bob", 600) }),
    keyframes: kf("file-music", "bob", "0%{transform:none}30%{transform:rotate(12deg)}60%{transform:rotate(-5deg)}100%{transform:none}"),
  },

  "file-output": {
    note: "The arrow pushes out of the page, which gives a little as it leaves.",
    motion: {
      p2: { animation: an("file-output", "push", 600) },
      p3: { animation: an("file-output", "push", 600) },
      p0: { animation: an("file-output", "give", 500, 80) },
    },
    keyframes: pushKf("file-output", -1.5) + kf("file-output", "give", "0%{transform:none}40%{transform:translateX(.4px)}100%{transform:none}"),
  },

  "file-pen-line": {
    note: "The pen scribbles from its nib and the signature line writes itself.",
    draw: ["p3"],
    motion: {
      p0: { ...at(13.3, 17.6), animation: an("file-pen-line", "write", 700) },
      p3: drawIn("file-pen-line", 300, 150),
    },
    keyframes: scribbleKf("file-pen-line") + drawKf("file-pen-line"),
  },

  "file-plus-corner": {
    note: "The plus draws itself, across and then down, at the corner of the page.",
    draw: ["p2", "p3"],
    motion: { p2: drawIn("file-plus-corner", 350), p3: drawIn("file-plus-corner", 350, 120) },
    keyframes: drawKf("file-plus-corner"),
  },

  "file-scan": {
    note: "The four scan corners close in on the page and open again.",
    motion: {
      p2: { to: { transform: "translate(.8px,.8px)" } },
      p3: { to: { transform: "translate(.8px,-.8px)" } },
      p4: { to: { transform: "translate(-.8px,.8px)" } },
      p5: { to: { transform: "translate(-.8px,-.8px)" } },
    },
  },

  "file-search-corner": {
    note: "The magnifier circles over the corner of the page, searching.",
    motion: {
      p2: { animation: an("file-search-corner", "search", 800) },
      p3: { animation: an("file-search-corner", "search", 800) },
    },
    keyframes: searchKf("file-search-corner"),
  },

  "file-signal": {
    note: "The dot swells and the two waves ripple out from it, one after the other.",
    motion: {
      p2: { animation: an("file-signal", "swell", 450) },
      p3: { animation: an("file-signal", "ripple", 650, 80) },
      p4: { animation: an("file-signal", "ripple", 650, 180) },
    },
    keyframes: swellKf("file-signal") + rippleKf("file-signal"),
  },

  "file-sliders": {
    note: "The two slider knobs slide along their lines in opposite directions and come back.",
    motion: {
      p3: { animation: an("file-sliders", "right", 800) },
      p5: { animation: an("file-sliders", "left", 800, 80) },
    },
    keyframes:
      kf("file-sliders", "right", "0%{transform:none}40%{transform:translateX(3px)}70%{transform:translateX(2.6px)}100%{transform:none}") +
      kf("file-sliders", "left", "0%{transform:none}40%{transform:translateX(-3px)}70%{transform:translateX(-2.6px)}100%{transform:none}"),
  },

  "file-stack": {
    note: "The pages fan out, the front one up and the back one down.",
    motion: {
      p2: { to: { transform: "translate(.7px,-.7px)" } },
      p0: { to: { transform: "translate(-.7px,.7px)" }, delay: 40 },
    },
  },

  "file-symlink": {
    note: "The arrow head points ahead along its link and springs back.",
    motion: { p2: { animation: an("file-symlink", "push", 600) } },
    keyframes: pushKf("file-symlink", 1.2),
  },

  "file-type": {
    note: "The letter is stamped onto the page, which takes the knock.",
    motion: {
      ...all(["p2", "p3", "p4"], { ...at(12, 15), animation: an("file-type", "stamp", 650) }),
      p0: { animation: an("file-type", "knock", 600, 200) },
    },
    keyframes: stampKf("file-type") + knockKf("file-type"),
  },

  "file-type-corner": {
    note: "The letter is stamped onto the corner of the page, which takes the knock.",
    motion: {
      ...all(["p2", "p3", "p4"], { ...at(7, 18), animation: an("file-type-corner", "stamp", 650) }),
      p0: { animation: an("file-type-corner", "knock", 600, 200) },
    },
    keyframes: stampKf("file-type-corner") + knockKf("file-type-corner"),
  },

  "file-video-camera": {
    note: "The camera rolls forward and its lens opens wide.",
    motion: {
      p3: { animation: an("file-video-camera", "roll", 600) },
      p2: { origin: "0% 50%", animation: an("file-video-camera", "lens", 600, 60) },
    },
    keyframes:
      kf("file-video-camera", "roll", "0%{transform:none}35%{transform:translateX(.6px)}65%{transform:translateX(-.2px)}100%{transform:none}") +
      kf("file-video-camera", "lens", "0%{transform:none}35%{transform:translateX(.6px) scaleX(1.2)}65%{transform:scaleX(.95)}100%{transform:none}"),
  },

  "file-volume": {
    note: "The speaker pulses and its wave ripples out.",
    motion: {
      p3: { animation: an("file-volume", "pulse", 600) },
      p2: { animation: an("file-volume", "ripple", 650, 100) },
    },
    keyframes: kf("file-volume", "pulse", "0%{transform:none}30%{transform:scale(1.08)}60%{transform:scale(.97)}100%{transform:none}") + rippleKf("file-volume"),
  },

  "file-x-corner": {
    note: "The cross draws itself, one stroke and then the other, and the page shivers.",
    draw: ["p2", "p3"],
    motion: {
      p2: drawIn("file-x-corner", 320),
      p3: drawIn("file-x-corner", 320, 120),
      p0: { animation: an("file-x-corner", "shiver", 500, 350) },
    },
    keyframes: drawKf("file-x-corner") + shiverKf("file-x-corner"),
  },

  "fishing-hook": {
    note: "The hook swings on its line and settles.",
    motion: all(["p0", "p1", "p2"], { ...at(22, 7), animation: an("fishing-hook", "swing", 900) }),
    keyframes: kf("fishing-hook", "swing", "0%{transform:none}25%{transform:rotate(5deg)}50%{transform:rotate(-4deg)}75%{transform:rotate(1.5deg)}100%{transform:none}"),
  },

  "fishing-rod": {
    note: "The rod flicks from the handle and the float bobs on the water after it.",
    motion: {
      p1: { ...at(6, 15), animation: an("fishing-rod", "flick", 700) },
      p0: { ...at(6, 15), animation: an("fishing-rod", "flick", 700) },
      p2: { animation: an("fishing-rod", "bob", 800) },
    },
    keyframes:
      kf("fishing-rod", "flick", "0%{transform:none}25%{transform:rotate(-4deg)}55%{transform:rotate(2deg)}100%{transform:none}") +
      kf("fishing-rod", "bob", "0%,20%{transform:none}45%{transform:translateY(.9px)}70%{transform:translateY(-.3px)}100%{transform:none}"),
  },

  "fish-off": {
    note: "The fish flops: its tail swishes and its body sways behind the slash.",
    motion: {
      p1: { ...at(7, 12), animation: an("fish-off", "tail", 700) },
      p0: { ...at(12, 12), animation: an("fish-off", "flop", 700) },
    },
    keyframes:
      kf("fish-off", "tail", "0%{transform:none}25%{transform:rotate(7deg)}50%{transform:rotate(-6deg)}75%{transform:rotate(2deg)}100%{transform:none}") +
      kf("fish-off", "flop", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(3deg)}100%{transform:none}"),
  },

  "fish-symbol": {
    note: "The fish swims forward with a wag of its body.",
    motion: { p0: { animation: an("fish-symbol", "swim", 800) } },
    keyframes:
      kf("fish-symbol", "swim", "0%{transform:none}25%{transform:translateX(.8px) rotate(-4deg)}50%{transform:translateX(1px) rotate(3deg)}75%{transform:translateX(.4px) rotate(-1deg)}100%{transform:none}"),
  },

  "flag-off": {
    note: "The flag droops on its pole and the slash draws itself across it.",
    draw: ["p1"],
    motion: {
      p0: { ...at(4, 12), animation: an("flag-off", "droop", 800) },
      p3: { ...at(4, 12), animation: an("flag-off", "droop", 800) },
      p1: drawIn("flag-off", 420, 150),
    },
    keyframes: drawKf("flag-off") + kf("flag-off", "droop", "0%{transform:none}35%{transform:skewY(7deg)}65%{transform:skewY(-2deg)}100%{transform:none}"),
  },

  "flag-triangle-left": {
    note: "The pennant ripples out from its pole and settles.",
    motion: { p0: { ...at(18, 8), animation: an("flag-triangle-left", "wave", 850) } },
    keyframes: waveKf("flag-triangle-left", 6),
  },

  "flag-triangle-right": {
    note: "The pennant ripples out from its pole and settles.",
    motion: { p0: { ...at(6, 8), animation: an("flag-triangle-right", "wave", 850) } },
    keyframes: waveKf("flag-triangle-right", -6),
  },

  "flame-kindling": {
    note: "The flame flickers from side to side over the logs, which settle under it.",
    motion: {
      p0: { origin: "50% 100%", animation: an("flame-kindling", "flicker", 900) },
      p1: { animation: an("flame-kindling", "settle", 600) },
      p2: { animation: an("flame-kindling", "settle", 600, 60) },
    },
    keyframes:
      kf("flame-kindling", "flicker", "0%{transform:none}25%{transform:skewX(-4deg) scaleY(1.06)}50%{transform:skewX(3deg) scaleY(.97)}75%{transform:skewX(-1deg) scaleY(1.02)}100%{transform:none}") +
      kf("flame-kindling", "settle", "0%{transform:none}40%{transform:translateY(.4px)}100%{transform:none}"),
  },

  "flashlight-off": {
    note: "The switch clicks, the light dims and the slash draws itself across it.",
    draw: ["p3"],
    motion: {
      p1: { animation: an("flashlight-off", "click", 450) },
      p3: drawIn("flashlight-off", 420, 150),
      ...all(["p0", "p2", "p4"], { animation: an("flashlight-off", "dim", 600, 100) }),
    },
    keyframes:
      drawKf("flashlight-off") +
      kf("flashlight-off", "click", "0%{transform:none}35%{transform:translateY(.7px) scaleY(.5)}100%{transform:none}") +
      kf("flashlight-off", "dim", "0%{opacity:1}30%{opacity:.4}55%{opacity:1}70%{opacity:.6}100%{opacity:1}"),
  },

  "flask-off": {
    note: "The flask tips on its base, the liquid sloshes and the slash draws itself across it.",
    draw: ["p2"],
    motion: {
      ...all(["p0", "p1", "p3", "p5"], { ...at(12, 22), animation: an("flask-off", "tip", 800) }),
      p4: { ...at(12, 15), animation: an("flask-off", "slosh", 800, 60) },
      p2: drawIn("flask-off", 420, 150),
    },
    keyframes: flaskKf("flask-off") + drawKf("flask-off"),
  },

  "flask-round": {
    note: "The flask tips on its round base and the liquid inside sloshes the other way.",
    motion: {
      p0: { ...at(12, 22), animation: an("flask-round", "tip", 800) },
      p2: { ...at(12, 22), animation: an("flask-round", "tip", 800) },
      p1: { ...at(12, 15), animation: an("flask-round", "slosh", 800, 60) },
    },
    keyframes: flaskKf("flask-round"),
  },

  "flip-horizontal-2": {
    note: "The two triangles flip across the dashed line, swapping places, and flip back.",
    motion: {
      ...all(["p4", "p5"], { ...at(12, 12), animation: an("flip-horizontal-2", "flip", 850) }),
      ...all(["p0", "p1", "p2", "p3"], { animation: an("flip-horizontal-2", "dash", 850) }),
    },
    keyframes:
      kf("flip-horizontal-2", "flip", "0%{transform:none}40%,55%{transform:scaleY(-1)}100%{transform:none}") +
      kf("flip-horizontal-2", "dash", "0%{opacity:1}40%,55%{opacity:.35}100%{opacity:1}"),
  },

  "flip-vertical-2": {
    note: "The two triangles flip across the dashed line, swapping sides, and flip back.",
    motion: {
      ...all(["p4", "p5"], { ...at(12, 12), animation: an("flip-vertical-2", "flip", 850) }),
      ...all(["p0", "p1", "p2", "p3"], { animation: an("flip-vertical-2", "dash", 850) }),
    },
    keyframes:
      kf("flip-vertical-2", "flip", "0%{transform:none}40%,55%{transform:scaleX(-1)}100%{transform:none}") +
      kf("flip-vertical-2", "dash", "0%{opacity:1}40%,55%{opacity:.35}100%{opacity:1}"),
  },

  "flower-2": {
    note: "The petals close a little and open wide, the centre pops, and the leaves sway on the stem.",
    motion: {
      p0: { ...at(12, 8), animation: an("flower-2", "bloom", 800) },
      p1: { animation: an("flower-2", "core", 700, 60) },
      p3: { ...at(12, 22), animation: an("flower-2", "right", 800, 100) },
      p4: { ...at(12, 22), animation: an("flower-2", "left", 800, 100) },
    },
    keyframes:
      kf("flower-2", "bloom", "0%{transform:none}35%{transform:scale(.85)}65%{transform:scale(1.06)}100%{transform:none}") +
      kf("flower-2", "core", "0%{transform:none}35%{transform:scale(1.2)}70%{transform:scale(.95)}100%{transform:none}") +
      kf("flower-2", "right", "0%{transform:none}35%{transform:rotate(8deg)}70%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("flower-2", "left", "0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "folder-bookmark": {
    note: "The ribbon unrolls down the folder and the folder takes the knock.",
    motion: {
      p0: { origin: "50% 0%", animation: an("folder-bookmark", "unroll", 600, 0, "backwards") },
      p1: { animation: an("folder-bookmark", "knock", 600, 250) },
    },
    keyframes: kf("folder-bookmark", "unroll", "0%{transform:scaleY(.4)}55%{transform:scaleY(1.1)}100%{transform:none}") + knockKf("folder-bookmark"),
  },

  "folder-clock": {
    note: "The clock's hands sweep one full turn and the clock gives a tick.",
    motion: {
      p0: { ...at(16, 16), animation: an("folder-clock", "turn", 800) },
      p2: { animation: an("folder-clock", "tick", 800) },
    },
    keyframes: turnKf("folder-clock", 360) + kf("folder-clock", "tick", "0%{transform:none}20%{transform:scale(1.06)}45%{transform:none}100%{transform:none}"),
  },

  "folder-closed": {
    note: "The folder's tab lifts as the folder bobs.",
    motion: {
      p0: {
        to: { d: 'path("M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 2.6A2 2 0 0 0 7.93 1.7H4a2 2 0 0 0-2 2v14.3a2 2 0 0 0 2 2Z")' },
        animation: an("folder-closed", "bob", 650),
      },
      p1: { animation: an("folder-closed", "bob", 650) },
    },
    keyframes: kf("folder-closed", "bob", "0%{transform:none}35%{transform:translateY(.5px) scale(1.02,.97)}65%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "folder-cog": {
    note: "The cog turns a quarter on its hub and the folder takes the knock.",
    motion: {
      ...turning("folder-cog", ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"], 18, 18),
      p0: { animation: an("folder-cog", "knock", 600, 200) },
    },
    keyframes: turnKf("folder-cog", 90) + knockKf("folder-cog"),
  },

  "folder-dot": {
    note: "The dot swells and settles, and the folder takes the knock.",
    motion: {
      p1: { animation: an("folder-dot", "swell", 550) },
      p0: { animation: an("folder-dot", "knock", 600, 100) },
    },
    keyframes: swellKf("folder-dot") + knockKf("folder-dot"),
  },

  "folder-pen": {
    note: "The pen scribbles over the corner of the folder from its nib.",
    motion: { p1: { ...at(2.5, 21.2), animation: an("folder-pen", "write", 700) } },
    keyframes: scribbleKf("folder-pen"),
  },

  "folder-git": {
    note: "The branch line draws in, the commit pops onto it, and the line carries on out.",
    draw: ["p3", "p2"],
    motion: {
      p3: drawIn("folder-git", 250),
      p0: { animation: an("folder-git", "commit", 500, 180) },
      p2: drawIn("folder-git", 250, 320),
    },
    keyframes: drawKf("folder-git") + kf("folder-git", "commit", "0%{transform:none}35%{transform:scale(1.35)}65%{transform:scale(.92)}100%{transform:none}"),
  },
};

/** the page, closed */
const PAGE = "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2Z";
/** the leaf of a door, closed along the floor */
const DOOR = "M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z";
export const fills: Record<string, string> = {
  // cards with a corner left open for a badge: the fill stops short of it
  "credit-card-minus": "M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.536L13.25 17A2.75 2.75 0 0 1 16 14.25H22Z",
  "credit-card-plus": "M22 11.354V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.536L13.25 17A2.75 2.75 0 0 1 16 14.25L16.25 14A2.75 2.75 0 0 1 19 11.25H22Z",
  "credit-card-x": "M22 11.75V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8.5L13.75 14.5A2.75 2.75 0 0 1 16.5 11.75H22Z",
  // door leaves, open along the floor, cut short of the badge in their corner
  "door-stairwell": DOOR,
  "door-closed-cog": "M7 3h10a2 2 0 0 1 2 2v5.35L11.5 12.5V21H5V5a2 2 0 0 1 2-2Z",
  "door-closed-locked": "M7 3h10a2 2 0 0 1 2 2v3L18 9.25A4.75 4.75 0 0 0 13.886 11.625L11.25 14.5V21H5V5a2 2 0 0 1 2-2Z",
  "door-closed-package": "M7 3h10a2 2 0 0 1 2 2v4L15 10.25A3.75 3.75 0 0 0 11.25 14V21H5V5a2 2 0 0 1 2-2Z",
  // switched off: the whole shape, the slash is cut through it
  "egg-off": "M12 2c4 0 8 6 8 12a8 8 0 0 1-16 0c0-6 4-12 8-12Z",
  "flag-off":
    "M4 4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528Z",
  "flask-off": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2Z",
  // the round flask, closed across its mouth
  "flask-round": "M10 2v6.292a7 7 0 1 0 4 0V2Z",
  // the pennants, off their poles
  "flag-triangle-left": "M18 2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5Z",
  "flag-triangle-right": "M6 2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5Z",
  // the box, closed across the corner the arrow leaves through
  "external-link": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6Z",
  // the page the arrow passes through: the whole page
  "file-input": PAGE,
  // the page open on the left where the arrow leaves: cut round the arrowhead
  "file-output": "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127L5 8.25A2.75 2.75 0 0 1 7.75 11V17A2.75 2.75 0 0 1 5 19.75Z",
  // pages with a corner left open for a badge: the fill stops short of it, 2.75 from its centreline
  "file-badge": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3L6 8.25A5.75 5.75 0 0 1 11.75 14V22Z",
  "file-box": "M14.692 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.804L9.3 8.4L14.75 11.6V22Z",
  "file-braces-corner": "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6L11 11.25L13.75 14V22Z",
  "file-chart-pie": "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512L12 7.2l5.3 5.5v9.3Z",
  "file-code-corner": "M14.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v8.15L14.65 14Z",
  "file-database": "M15.57 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.3L14.75 7.25V22Z",
  "file-digit": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.25V13.25Z",
  "file-heart": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7L10.5 11L13.75 14V22Z",
  "file-minus-corner": "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5.25V18A2.75 2.75 0 0 1 14 15.25H20Z",
  "file-music": "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35L5.25 13A2.75 2.75 0 0 1 9.213 10.532L12.213 12.006A2.75 2.75 0 0 1 13.75 14.474V22Z",
  "file-pen-line": "M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516L10.27 13.84V20.73H17.2L20 17.93Z",
  "file-plus-corner": "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35L17 13.25A2.75 2.75 0 0 0 14.25 16L14 16.25A2.75 2.75 0 0 0 11.25 19Z",
  "file-scan": "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35L11.25 20V11.25H20Z",
  "file-search-corner": "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25H16A5.75 5.75 0 0 0 10.25 17Z",
  "file-type-corner": "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6L11 11.25A2.75 2.75 0 0 1 13.75 14V22Z",
  "file-video-camera": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.25V13.25Z",
  "file-volume": "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-2.25V11.25H4Z",
  "file-x-corner": "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6.25H15A2.75 2.75 0 0 0 12.25 17Z",
  // folders with a corner left open for a badge: the fill stops short of it
  "folder-clock": "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2L17.204 7.333A8.75 8.75 0 0 0 7.25 16L7 20Z",
  "folder-cog": "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3H11.7V20Z",
  // the folder, cut round the pen that lies across its corner
  "folder-pen":
    "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5L13.32 15.57A4.87 4.87 0 0 0 13.32 8.68A4.87 4.87 0 0 0 6.43 8.68L2 13.11Z",
};
