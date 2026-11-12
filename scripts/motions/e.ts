import type { Entry, Override } from "./types";
import type { PartMotion } from "../../packages/core/src/types";

/** Batch e: its icons (pnpm import-icons e) and their motions. */
export const list: Entry[] = [
  ["AArrowDown", "font-size-down", "Smaller text", "text", "nudge-down", ["font", "size", "smaller", "decrease", "text"], "The arrow pushes down and the letter shrinks."],
  ["AArrowUp", "font-size-up", "Larger text", "text", "nudge-up", ["font", "size", "bigger", "increase", "text"], "The arrow pushes up and the letter grows."],
  ["ALargeSmall", "text-size", "Text size", "text", "pop", ["font", "size", "scale", "text"], "The big and small letters trade sizes."],
  ["Baseline", "text-baseline", "Text color", "text", "pop", ["font", "color", "underline", "baseline"], "The baseline draws under the letter."],
  ["Accessibility", "accessibility", "Accessibility", "people", "wave", ["a11y", "disability", "wheelchair", "access"], "The wheel rolls forward a turn."],
  ["Airplay", "airplay", "Cast to screen", "devices", "nudge-up", ["cast", "stream", "screen", "mirror"], "The triangle rises into the screen."],
  ["AirVent", "air-vent", "Air conditioning", "devices", "wave", ["ac", "air", "vent", "cooling"], "The air streams wave out of the vent."],
  ["AlarmClock", "alarm", "Alarm", "status", "shake", ["alarm", "clock", "wake", "reminder"], "The clock rattles and the bells shake."],
  ["AlarmClockCheck", "alarm-check", "Alarm set", "status", "pop", ["alarm", "set", "done", "reminder"], "The tick draws in as the bells ring once."],
  ["AlarmClockOff", "alarm-off", "Alarm off", "status", "shake", ["alarm", "off", "silence", "snooze"], "The slash strikes through the clock."],
  ["AlarmClockPlus", "alarm-plus", "Add alarm", "actions", "pop", ["alarm", "add", "new", "reminder"], "The plus spins in as the bells ring."],
  ["AlarmSmoke", "smoke-alarm", "Smoke alarm", "devices", "pulse", ["smoke", "fire", "detector", "alarm"], "The waves under the detector pulse down."],
  ["Album", "photo-album", "Album", "media", "pop", ["album", "photos", "collection", "bookmark"], "The ribbon bookmark drops down."],
  ["CircleAlert", "circle-alert", "Error", "status", "shake", ["error", "alert", "info", "warning"], "The exclamation mark drops in and the circle shakes."],
  ["OctagonAlert", "octagon-alert", "Stop alert", "status", "shake", ["stop", "error", "alert", "critical"], "The sign shakes and the mark drops in."],
  ["AlignLeft", "align-left", "Align left", "text", "nudge-left", ["align", "left", "text", "paragraph"], "The lines slide to the left edge."],
  ["AlignCenter", "align-center", "Align center", "text", "pop", ["align", "center", "text", "paragraph"], "The lines draw out from the middle."],
  ["AlignRight", "align-right", "Align right", "text", "nudge-right", ["align", "right", "text", "paragraph"], "The lines slide to the right edge."],
  ["AlignJustify", "align-justify", "Justify", "text", "pop", ["justify", "align", "text", "paragraph"], "The lines stretch to both edges."],
  ["AlignCenterVertical", "align-objects-center", "Align centers", "development", "pop", ["align", "center", "layout", "objects"], "The two blocks slide onto the centre line."],
  ["AlignHorizontalDistributeCenter", "distribute-horizontal", "Distribute across", "development", "pop", ["distribute", "spacing", "layout", "horizontal"], "The blocks spread out evenly."],
  ["AlignVerticalDistributeCenter", "distribute-vertical", "Distribute down", "development", "pop", ["distribute", "spacing", "layout", "vertical"], "The blocks spread out evenly."],
  ["Ambulance", "ambulance", "Ambulance", "health", "nudge-right", ["ambulance", "emergency", "hospital", "medical"], "The van drives on and the cross flashes."],
  ["Ampersand", "ampersand", "Ampersand", "text", "draw", ["and", "symbol", "character"], "The ampersand writes itself."],
  ["Anchor", "anchor", "Anchor", "travel", "swing", ["anchor", "ship", "harbor", "sea"], "The anchor swings from its ring."],
  ["Angry", "angry", "Angry", "people", "shake", ["angry", "mad", "face", "emotion"], "The brows knit and the face shakes."],
  ["Annoyed", "annoyed", "Annoyed", "people", "tilt", ["annoyed", "face", "meh", "emotion"], "The eyes roll to the side."],
  ["Antenna", "antenna", "Antenna", "devices", "pulse", ["antenna", "signal", "broadcast", "tv"], "The antenna arms spread and sway."],
  ["Aperture", "aperture", "Aperture", "media", "spin-90", ["camera", "lens", "shutter", "photo"], "The shutter blades turn."],
  ["Apple", "apple", "Apple", "food", "wiggle", ["fruit", "apple", "food", "healthy"], "The leaf flutters on its stem."],
  ["AppWindow", "app-window", "App window", "app", "pop", ["window", "app", "browser", "program"], "The window springs open."],
  ["Archive", "archive", "Archive", "files", "nudge-down", ["archive", "box", "store", "old"], "The lid lifts and settles back."],
  ["ArchiveRestore", "archive-restore", "Restore", "files", "nudge-up", ["restore", "unarchive", "box", "recover"], "The arrow rises out of the box."],
  ["ArchiveX", "archive-x", "Delete archive", "files", "shake", ["archive", "delete", "remove", "box"], "The cross draws on the box."],
  ["ChartArea", "chart-area", "Area chart", "charts", "bounce", ["chart", "area", "graph", "stats"], "The area rises up from the axis."],
  ["ChartBar", "chart-bar", "Bar chart", "charts", "bounce", ["chart", "bars", "horizontal", "stats"], "The bars grow out from the axis."],
  ["ArrowBigUp", "upvote", "Upvote", "actions", "nudge-up", ["upvote", "like", "up", "vote"], "The arrow jumps up."],
  ["ArrowBigDown", "downvote", "Downvote", "actions", "nudge-down", ["downvote", "dislike", "down", "vote"], "The arrow drops down."],
  ["ArrowBigRight", "arrow-big-right", "Forward", "navigation", "nudge-right", ["forward", "next", "right", "arrow"], "The arrow pushes forward."],
  ["ArrowDownAZ", "sort-a-z", "Sort A to Z", "actions", "nudge-down", ["sort", "alphabetical", "order", "az"], "The letters swap and the arrow points down."],
  ["ArrowDown01", "sort-numbers", "Sort by number", "actions", "nudge-down", ["sort", "numeric", "order", "numbers"], "The arrow draws down beside the numbers."],
  ["ArrowDownWideNarrow", "sort-desc", "Sort descending", "actions", "nudge-down", ["sort", "descending", "order", "filter"], "The bars shrink in turn as the arrow falls."],
  ["ArrowUpNarrowWide", "sort-asc", "Sort ascending", "actions", "nudge-up", ["sort", "ascending", "order", "filter"], "The bars grow in turn as the arrow rises."],
  ["CircleArrowRight", "arrow-right-circle", "Next", "navigation", "nudge-right", ["next", "forward", "right", "continue"], "The arrow slides out and back in the circle."],
  ["CircleArrowLeft", "arrow-left-circle", "Previous", "navigation", "nudge-left", ["back", "previous", "left", "return"], "The arrow slides out and back in the circle."],
  ["CircleArrowUp", "arrow-up-circle", "Up", "navigation", "nudge-up", ["up", "top", "raise", "arrow"], "The arrow slides out and back in the circle."],
  ["CircleArrowDown", "arrow-down-circle", "Down", "navigation", "nudge-down", ["down", "lower", "arrow"], "The arrow slides out and back in the circle."],
  ["ArrowUp", "arrow-up", "Arrow up", "navigation", "nudge-up", ["up", "arrow", "top", "direction"], "The arrow shoots up and comes back."],
  ["ArrowUpRight", "arrow-up-right", "Arrow up right", "navigation", "nudge-up", ["diagonal", "trend", "open", "arrow"], "The arrow shoots off up and to the right."],
  ["ArrowDownRight", "arrow-down-right", "Arrow down right", "navigation", "nudge-down", ["diagonal", "trend", "down", "arrow"], "The arrow shoots off down and to the right."],
  ["ArrowUpDown", "arrow-up-down", "Sort", "actions", "pop", ["sort", "reorder", "up", "down"], "The two arrows pass each other."],
  ["ArrowRightLeft", "swap", "Swap", "actions", "pop", ["swap", "exchange", "transfer", "switch"], "The two arrows trade places."],
  ["ArrowUpToLine", "arrow-up-line", "To top", "navigation", "nudge-up", ["top", "first", "up", "start"], "The arrow rises to the line."],
  ["ArrowLeftToLine", "arrow-left-line", "To start", "navigation", "nudge-left", ["start", "first", "left", "home"], "The arrow runs to the line."],
  ["ArrowRightToLine", "arrow-right-line", "To end", "navigation", "nudge-right", ["end", "last", "right", "tab"], "The arrow runs to the line."],
  ["Asterisk", "asterisk", "Asterisk", "text", "spin-90", ["required", "star", "footnote", "wildcard"], "The asterisk spins a sixth of a turn."],
  ["AtSign", "at-sign", "Mention", "communication", "spin", ["at", "mention", "email", "handle"], "The tail of the @ writes around it."],
  ["Atom", "atom", "Atom", "development", "spin", ["atom", "science", "physics", "react"], "The orbits turn around the nucleus."],
  ["AudioLines", "audio-lines", "Audio", "media", "wave", ["audio", "sound", "equalizer", "waveform"], "The bars bounce like an equalizer."],
  ["Award", "award", "Award", "status", "swing", ["award", "badge", "prize", "achievement"], "The medal swings on its ribbon."],
  ["Axis3D", "axis-3d", "3D axes", "development", "pop", ["3d", "axis", "coordinates", "model"], "The axes draw out from the origin."],
  ["Baby", "baby", "Baby", "people", "wiggle", ["baby", "child", "infant", "kid"], "The baby rocks gently."],
  ["Backpack", "backpack", "Backpack", "travel", "bounce", ["backpack", "bag", "school", "hiking"], "The pack bounces and its flap lifts."],
  ["BadgeCheck", "verified", "Verified", "status", "pop", ["verified", "check", "approved", "badge"], "The badge turns and the tick draws in."],
  ["BadgePercent", "badge-percent", "Discount", "commerce", "pop", ["discount", "sale", "percent", "deal"], "The badge turns and the percent sign pops."],
  ["BadgeAlert", "badge-alert", "Badge alert", "status", "shake", ["alert", "warning", "badge", "attention"], "The badge shakes and the mark drops in."],
  ["BadgeDollarSign", "badge-dollar", "Price", "commerce", "pop", ["price", "money", "dollar", "cost"], "The badge turns and the dollar sign flips."],
  ["Badge", "badge", "Badge", "shapes", "spin-90", ["badge", "seal", "shape", "rosette"], "The badge turns a notch."],
  ["BaggageClaim", "baggage", "Baggage", "travel", "nudge-right", ["luggage", "baggage", "airport", "suitcase"], "The trolley rolls forward with its cases."],
  ["Balloon", "balloon", "Balloon", "app", "float", ["party", "celebration", "birthday", "balloon"], "The balloon floats up and sways on its string."],
  ["Banana", "banana", "Banana", "food", "wiggle", ["fruit", "banana", "food"], "The banana rocks on its back."],
  ["Bandage", "bandage", "Bandage", "health", "pop", ["bandage", "plaster", "injury", "first aid"], "The bandage stretches and settles."],
  ["Banknote", "banknote", "Banknote", "commerce", "pop", ["money", "cash", "bill", "payment"], "The note flaps and the coin spins."],
  ["BanknoteCheck", "banknote-check", "Paid", "commerce", "pop", ["paid", "payment", "cash", "done"], "The note lifts and the tick draws in."],
  ["BanknoteArrowUp", "banknote-up", "Send money", "commerce", "nudge-up", ["send", "pay", "money", "withdraw"], "The arrow lifts off the note."],
  ["Barcode", "barcode", "Barcode", "commerce", "flash", ["barcode", "scan", "product", "sku"], "The bars light up as a scan runs across."],
  ["Bath", "bath", "Bath", "travel", "wave", ["bath", "bathroom", "tub", "hotel"], "The tap drips and the tub rocks."],
  ["Battery", "battery", "Battery", "devices", "pop", ["battery", "power", "energy", "charge"], "The battery fills and empties."],
  ["BatteryCharging", "battery-charging", "Charging", "devices", "flash", ["charging", "battery", "power", "plug"], "The bolt flashes as it charges."],
  ["BatteryLow", "battery-low", "Low battery", "devices", "blink", ["low", "battery", "power", "empty"], "The last bar blinks."],
  ["BatteryFull", "battery-full", "Battery full", "devices", "pop", ["full", "battery", "charged", "power"], "The bars fill one after another."],
  ["BatteryWarning", "battery-warning", "Battery warning", "devices", "shake", ["battery", "warning", "error", "power"], "The battery shakes and the mark drops in."],
  ["Beaker", "beaker", "Beaker", "development", "wiggle", ["lab", "science", "experiment", "test"], "The beaker swirls."],
  ["Bed", "bed", "Bed", "travel", "nudge-down", ["bed", "sleep", "hotel", "rest"], "The pillow plumps and the bed settles."],
  ["BedDouble", "bed-double", "Double bed", "travel", "nudge-down", ["bed", "double", "hotel", "room"], "The pillows plump one after the other."],
  ["Beer", "beer", "Beer", "food", "tilt", ["beer", "drink", "pub", "alcohol"], "The mug tips for a toast and the foam rises."],
  ["Beef", "beef", "Meat", "food", "wiggle", ["meat", "beef", "steak", "food"], "The steak sizzles."],
  ["Bacon", "bacon", "Bacon", "food", "wave", ["bacon", "breakfast", "meat", "food"], "The rasher ripples."],
  ["Avocado", "avocado", "Avocado", "food", "wiggle", ["avocado", "fruit", "healthy", "food"], "The stone bobs in the fruit."],
  ["BellRing", "bell-ring", "Ringing", "status", "swing", ["bell", "ring", "alert", "notification"], "The bell swings and the rings ripple out."],
  ["BellOff", "bell-off", "Notifications off", "status", "shake", ["bell", "mute", "silence", "off"], "The slash strikes the bell, which shudders."],
  ["BellDot", "bell-dot", "New notification", "status", "swing", ["bell", "unread", "new", "badge"], "The bell swings and the dot pops."],
  ["BellPlus", "bell-plus", "Subscribe", "actions", "swing", ["bell", "subscribe", "add", "notification"], "The bell swings and the plus spins in."],
  ["BicepsFlexed", "strength", "Strength", "health", "pop", ["strength", "muscle", "fitness", "gym"], "The arm flexes."],
  ["Bike", "bike", "Bike", "travel", "nudge-right", ["bike", "bicycle", "cycling", "ride"], "The wheels turn as it rolls forward."],
  ["Binary", "binary", "Binary", "development", "flash", ["binary", "code", "bits", "data"], "The digits flip."],
  ["Ad", "ad", "Advertisement", "commerce", "pop", ["ad", "advert", "sponsored", "promo"], "The tag bounces."],
  ["Armchair", "armchair", "Armchair", "travel", "bounce", ["chair", "seat", "lounge", "furniture"], "The cushion sinks and springs back."],
  ["Axe", "axe", "Axe", "nature", "swing", ["axe", "chop", "wood", "tool"], "The axe chops down."],
  ["Angle", "angle", "Angle", "shapes", "pop", ["angle", "measure", "geometry", "degrees"], "The arm opens and the arc draws."],
  ["BetweenHorizontalStart", "insert-row", "Insert row", "development", "nudge-right", ["insert", "row", "table", "add"], "The new row slides in between."],
  ["BetweenVerticalStart", "insert-column", "Insert column", "development", "nudge-down", ["insert", "column", "table", "add"], "The new column slides in between."],
];


/** no overshoot: every keyframe here carries its own bounce */
const S = "cubic-bezier(.22,1,.36,1)";
const f = (v: number) => +v.toFixed(2);
const T = (x: number, y: number) => `translate(${f(x)}px,${f(y)}px)`;
/** a keyframe block named after its icon */
const k = (icon: string, what: string, body: string) => `@keyframes ki-${icon}-${what}{${body}}`;
/** an animation of that block (backwards: hold its first frame through the delay) */
const run = (icon: string, what: string, ms: number, delay = 0, back = false) =>
  `ki-${icon}-${what} ${ms}ms ${S} ${delay}ms${back ? " backwards" : ""}`;
/** a line drawn in from its start, or from its end (the part must be listed in `draw`) */
const drawIn = (icon: string, ms: number, delay = 0, rev = false) => ({
  from: { strokeDasharray: 1 },
  animation: run(icon, rev ? "undraw" : "draw", ms, delay, true),
});
const DRAW = (icon: string) => k(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const UNDRAW = (icon: string) => k(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
/** turn or scale around a point of the 24 grid */
const vb = (origin: string) => ({ box: "view-box" as const, origin });

// keyframe bodies
const nudge = (x: number, y: number) => `0%{transform:none}35%{transform:${T(x, y)}}65%{transform:${T(-x * 0.25, -y * 0.25)}}100%{transform:none}`;
/** out one side, fading, and back in from the other */
const pass = (x: number, y: number) =>
  `0%{transform:none;opacity:1}32%{transform:${T(x, y)};opacity:0}33%{transform:${T(-x, -y)};opacity:0}100%{transform:none;opacity:1}`;
const pop = (s: number) => `0%{transform:none}35%{transform:scale(${s})}65%{transform:scale(${f(1 - (s - 1) * 0.4)})}100%{transform:none}`;
const popIn = "0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:none;opacity:1}";
const drop = "0%{transform:translateY(-2.5px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}";
const shake = (d: number) =>
  `0%{transform:none}15%{transform:rotate(${-d}deg)}30%{transform:rotate(${d}deg)}45%{transform:rotate(${f(-d * 0.7)}deg)}60%{transform:rotate(${f(d * 0.5)}deg)}75%{transform:rotate(${f(-d * 0.25)}deg)}100%{transform:none}`;
const jitter = (x: number) =>
  `0%{transform:none}20%{transform:translateX(${-x}px)}40%{transform:translateX(${x}px)}60%{transform:translateX(${f(-x * 0.6)}px)}80%{transform:translateX(${f(x * 0.3)}px)}100%{transform:none}`;
const swing = (d: number) => `0%{transform:none}25%{transform:rotate(${d}deg)}50%{transform:rotate(${f(-d * 0.6)}deg)}75%{transform:rotate(${f(d * 0.3)}deg)}100%{transform:none}`;
const blink = "0%,100%{opacity:1}25%{opacity:.2}50%{opacity:1}75%{opacity:.2}";
const spinIn = "0%{transform:rotate(-90deg) scale(.4);opacity:0}60%{transform:rotate(10deg) scale(1.1);opacity:1}100%{transform:none;opacity:1}";
const grow = (axis: "X" | "Y") => `0%{transform:scale${axis}(0)}60%{transform:scale${axis}(1.1)}100%{transform:none}`;
const squeeze = (axis: "X" | "Y", s: number) => `0%{transform:none}35%{transform:scale${axis}(${s})}70%{transform:scale${axis}(1.05)}100%{transform:none}`;
const hop = "0%{transform:none}30%{transform:translateY(-1.1px)}60%{transform:translateY(.25px)}100%{transform:none}";
/** a coin or medal seen turning edge-on and back */
const flip = "0%{transform:none}35%{transform:scaleX(.15)}70%{transform:scaleX(1.06)}100%{transform:none}";

/** an arrow that leaves through one side and comes back in from the other, its ring taking a small beat */
const arrowCircle = (icon: string, x: number, y: number): Override => ({
  note: "The arrow slides out of the circle and back in from the other side; the ring gives a small beat.",
  motion: {
    p0: { animation: run(icon, "ring", 500, 150) },
    p1: { animation: run(icon, "pass", 650) },
    p2: { animation: run(icon, "pass", 650) },
  },
  keyframes: k(icon, "pass", pass(x, y)) + k(icon, "ring", pop(1.05)),
});

/** a bell swinging from its top, with its clapper (p0) swinging after it */
const bell = (icon: string, body: string) => ({
  [body]: { ...vb("12px 3px"), animation: run(icon, "swing", 800) },
  p0: { ...vb("12px 3px"), animation: run(icon, "clapper", 800, 40) },
});
const bellKf = (icon: string, deg: number) => k(icon, "swing", swing(deg)) + k(icon, "clapper", swing(deg * 1.5));

/** an alarm clock's bells, rattling at the ends that touch the clock */
const bells = (icon: string, left: string, right: string, delay = 0) => ({
  [left]: { origin: "100% 0%", animation: run(icon, "bell", 600, delay) },
  [right]: { origin: "0% 0%", animation: run(icon, "bell", 600, delay) },
});

/** the badge outline turning a notch (its eight lobes land on themselves) */
const badgeTurn = (icon: string) => ({ ...vb("12px 12px"), animation: run(icon, "turn", 700) });
const badgeTurnKf = (icon: string) => k(icon, "turn", "0%{transform:none}60%{transform:rotate(52deg) scale(1.05)}100%{transform:rotate(45deg)}");

const each = (parts: string[], m: (i: number) => PartMotion): Record<string, PartMotion> => Object.fromEntries(parts.map((p, i) => [p, m(i)]));

export const motions: Record<string, Override> = {
  "font-size-down": {
    note: "The arrow pushes down and the letter shrinks on its baseline, then springs back.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("font-size-down", "arrow", 600) })),
      ...each(["p2", "p3"], () => ({ ...vb("6.5px 16px"), animation: run("font-size-down", "letter", 600, 60) })),
    },
    keyframes: k("font-size-down", "arrow", nudge(0, 1.5)) + k("font-size-down", "letter", pop(0.84)),
  },
  "font-size-up": {
    note: "The arrow pushes up and the letter grows on its baseline, then settles.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("font-size-up", "arrow", 600) })),
      ...each(["p2", "p3"], () => ({ ...vb("6.5px 16px"), animation: run("font-size-up", "letter", 600, 60) })),
    },
    keyframes: k("font-size-up", "arrow", nudge(0, -1.5)) + k("font-size-up", "letter", pop(1.15)),
  },
  "text-size": {
    note: "The big letter shrinks while the small one grows, both standing on the baseline, then they trade back.",
    motion: {
      ...each(["p2", "p3"], () => ({ ...vb("6.5px 16px"), animation: run("text-size", "big", 700) })),
      ...each(["p0", "p1"], () => ({ ...vb("18.5px 16px"), animation: run("text-size", "small", 700) })),
    },
    keyframes:
      k("text-size", "big", "0%{transform:none}40%,60%{transform:scale(.82)}100%{transform:none}") +
      k("text-size", "small", "0%{transform:none}40%,60%{transform:scale(1.2)}100%{transform:none}"),
  },
  "text-baseline": {
    note: "The letter hops and the colour bar draws itself in under it.",
    draw: ["p0"],
    motion: {
      ...each(["p1", "p2"], () => ({ animation: run("text-baseline", "hop", 550) })),
      p0: drawIn("text-baseline", 450, 120),
    },
    keyframes: k("text-baseline", "hop", hop) + DRAW("text-baseline"),
  },
  accessibility: {
    note: "The wheel rolls a full turn forward while the rider leans with it.",
    motion: {
      ...each(["p3", "p4"], () => ({ ...vb("9px 16px"), animation: run("accessibility", "wheel", 800) })),
      ...each(["p0", "p1", "p2"], () => ({ animation: run("accessibility", "rider", 800, 30) })),
    },
    keyframes:
      k("accessibility", "wheel", "0%{transform:none}35%{transform:translateX(.8px) rotate(200deg)}65%{transform:translateX(-.2px) rotate(330deg)}100%{transform:rotate(360deg)}") +
      k("accessibility", "rider", nudge(0.8, 0)),
  },
  airplay: {
    note: "The triangle rises into the screen from below, and the screen answers with a small beat.",
    motion: {
      p1: { animation: run("airplay", "rise", 600, 0, true) },
      p0: { animation: run("airplay", "screen", 500, 200) },
    },
    keyframes:
      k("airplay", "rise", "0%{transform:translateY(2.5px);opacity:0}55%{transform:translateY(-.8px);opacity:1}100%{transform:none;opacity:1}") +
      k("airplay", "screen", pop(1.04)),
  },
  "air-vent": {
    note: "The two air streams flow down out of the vent and the slat flutters.",
    draw: ["p0", "p3"],
    motion: {
      p3: drawIn("air-vent", 550, 0, true),
      p0: drawIn("air-vent", 550, 100, true),
      p2: { animation: run("air-vent", "slat", 500) },
    },
    keyframes: UNDRAW("air-vent") + k("air-vent", "slat", squeeze("X", 0.8)),
  },
  alarm: {
    note: "The clock rattles on its centre while the two bells shake at the ends that touch it.",
    motion: {
      ...each(["p0", "p1"], () => ({ ...vb("12px 13px"), animation: run("alarm", "rattle", 600) })),
      ...bells("alarm", "p2", "p3"),
    },
    keyframes: k("alarm", "rattle", shake(7)) + k("alarm", "bell", shake(16)),
  },
  "alarm-check": {
    note: "The bells ring once and the tick draws itself on the clock face.",
    draw: ["p5"],
    motion: {
      p0: { ...vb("12px 13px"), animation: run("alarm-check", "rattle", 500) },
      ...bells("alarm-check", "p1", "p2"),
      p5: drawIn("alarm-check", 420, 160),
    },
    keyframes: k("alarm-check", "rattle", shake(4)) + k("alarm-check", "bell", shake(14)) + DRAW("alarm-check"),
  },
  "alarm-off": {
    note: "The slash strikes through and the clock gives a last shudder.",
    draw: ["p4"],
    motion: {
      p4: drawIn("alarm-off", 450),
      ...each(["p0", "p1", "p3"], () => ({ ...vb("12px 13px"), animation: run("alarm-off", "rattle", 500, 150) })),
      ...bells("alarm-off", "p5", "p2", 150),
    },
    keyframes: DRAW("alarm-off") + k("alarm-off", "rattle", shake(4)) + k("alarm-off", "bell", shake(12)),
  },
  "alarm-plus": {
    note: "The plus spins in on the face while the bells ring.",
    motion: {
      p0: { ...vb("12px 13px"), animation: run("alarm-plus", "rattle", 500) },
      ...bells("alarm-plus", "p1", "p2"),
      ...each(["p5", "p6"], () => ({ ...vb("12px 13px"), animation: run("alarm-plus", "plus", 550, 80, true) })),
    },
    keyframes: k("alarm-plus", "rattle", shake(4)) + k("alarm-plus", "bell", shake(14)) + k("alarm-plus", "plus", spinIn),
  },
  "smoke-alarm": {
    note: "The detector gives a beat and three waves run down from it, one after another.",
    draw: ["p4", "p0", "p1"],
    motion: {
      p3: { animation: run("smoke-alarm", "beat", 500) },
      p2: { animation: run("smoke-alarm", "beat", 500, 30) },
      p4: drawIn("smoke-alarm", 450, 120, true),
      p0: drawIn("smoke-alarm", 450, 200, true),
      p1: drawIn("smoke-alarm", 450, 280, true),
    },
    keyframes: k("smoke-alarm", "beat", nudge(0, -0.6)) + UNDRAW("smoke-alarm"),
  },
  "photo-album": {
    note: "The ribbon bookmark slips down from the top edge and springs back.",
    motion: {
      p0: { origin: "50% 0%", animation: run("photo-album", "ribbon", 600) },
      p1: { animation: run("photo-album", "cover", 500) },
    },
    keyframes: k("photo-album", "ribbon", "0%{transform:scaleY(.3)}55%{transform:scaleY(1.15)}100%{transform:none}") + k("photo-album", "cover", pop(1.03)),
  },
  "circle-alert": {
    note: "The circle shakes, the bar drops in and the dot pops under it.",
    motion: {
      p0: { ...vb("12px 12px"), animation: run("circle-alert", "shake", 550) },
      p1: { animation: run("circle-alert", "drop", 450, 80, true) },
      p2: { animation: run("circle-alert", "dot", 400, 220, true) },
    },
    keyframes: k("circle-alert", "shake", shake(6)) + k("circle-alert", "drop", drop) + k("circle-alert", "dot", popIn),
  },
  "octagon-alert": {
    note: "The sign shakes, the bar drops in and the dot pops under it.",
    motion: {
      p2: { ...vb("12px 12px"), animation: run("octagon-alert", "shake", 550) },
      p1: { animation: run("octagon-alert", "drop", 450, 80, true) },
      p0: { animation: run("octagon-alert", "dot", 400, 220, true) },
    },
    keyframes: k("octagon-alert", "shake", shake(6)) + k("octagon-alert", "drop", drop) + k("octagon-alert", "dot", popIn),
  },
  "align-left": {
    note: "The lines tuck in to the left edge and spring back out, one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: "0% 50%", animation: run("align-left", "line", 550, i * 70) })),
    keyframes: k("align-left", "line", squeeze("X", 0.5)),
  },
  "align-center": {
    note: "The lines draw in to the middle and spring back out, one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: "50% 50%", animation: run("align-center", "line", 550, i * 70) })),
    keyframes: k("align-center", "line", squeeze("X", 0.5)),
  },
  "align-right": {
    note: "The lines tuck in to the right edge and spring back out, one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: "100% 50%", animation: run("align-right", "line", 550, i * 70) })),
    keyframes: k("align-right", "line", squeeze("X", 0.5)),
  },
  "align-justify": {
    note: "Each line shrinks toward one edge, alternating sides, and stretches back to both.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: i === 1 ? "100% 50%" : "0% 50%", animation: run("align-justify", "line", 550, i * 70) })),
    keyframes: k("align-justify", "line", squeeze("X", 0.6)),
  },
  "align-objects-center": {
    note: "The centre line draws down and the two blocks slide onto it from opposite sides.",
    draw: ["p0"],
    motion: {
      p0: drawIn("align-objects-center", 450),
      ...each(["p1", "p2"], () => ({ animation: run("align-objects-center", "top", 550, 60) })),
      ...each(["p3", "p4"], () => ({ animation: run("align-objects-center", "bottom", 550, 120) })),
    },
    keyframes:
      DRAW("align-objects-center") +
      k("align-objects-center", "top", "0%{transform:translateX(-2px)}55%{transform:translateX(.4px)}100%{transform:none}") +
      k("align-objects-center", "bottom", "0%{transform:translateX(2px)}55%{transform:translateX(-.4px)}100%{transform:none}"),
  },
  "distribute-horizontal": {
    note: "The two blocks and their guides draw together, then spread back out evenly.",
    motion: {
      ...each(["p0", "p4", "p5"], () => ({ animation: run("distribute-horizontal", "left", 650) })),
      ...each(["p1", "p2", "p3"], () => ({ animation: run("distribute-horizontal", "right", 650) })),
    },
    keyframes: k("distribute-horizontal", "left", nudge(1.5, 0)) + k("distribute-horizontal", "right", nudge(-1.5, 0)),
  },
  "distribute-vertical": {
    note: "The two blocks and their guides draw together, then spread back out evenly.",
    motion: {
      ...each(["p5", "p1", "p3"], () => ({ animation: run("distribute-vertical", "top", 650) })),
      ...each(["p4", "p0", "p2"], () => ({ animation: run("distribute-vertical", "bottom", 650) })),
    },
    keyframes: k("distribute-vertical", "top", nudge(0, 1.5)) + k("distribute-vertical", "bottom", nudge(0, -1.5)),
  },
  ambulance: {
    note: "The van rocks back and drives on, and the cross on its side flashes twice.",
    motion: {
      ...each(["p1", "p2", "p4", "p5", "p6"], () => ({ animation: run("ambulance", "drive", 700) })),
      ...each(["p0", "p3"], () => ({ animation: `${run("ambulance", "drive", 700)}, ${run("ambulance", "flash", 700)}` })),
    },
    keyframes:
      k("ambulance", "drive", "0%{transform:none}30%{transform:translate(-.6px,.3px)}60%{transform:translate(.9px,-.3px)}100%{transform:none}") +
      k("ambulance", "flash", "0%,100%{opacity:1}20%{opacity:.2}40%{opacity:1}60%{opacity:.2}80%{opacity:1}"),
  },
  ampersand: {
    note: "The ampersand writes itself in one stroke, then its tail crosses it.",
    draw: ["p1", "p0"],
    motion: { p1: drawIn("ampersand", 650), p0: drawIn("ampersand", 300, 450) },
    keyframes: DRAW("ampersand"),
  },
  anchor: {
    note: "The anchor swings from its ring like a pendulum and settles.",
    motion: {
      ...each(["p0", "p1", "p2"], () => ({ ...vb("12px 4px"), animation: run("anchor", "swing", 850) })),
      p3: { animation: run("anchor", "ring", 500) },
    },
    keyframes: k("anchor", "swing", swing(9)) + k("anchor", "ring", pop(1.12)),
  },
  angle: {
    note: "The corner flexes and the arc measuring it draws itself across.",
    draw: ["p1"],
    motion: {
      p0: { origin: "0% 100%", animation: run("angle", "corner", 600) },
      p1: drawIn("angle", 550, 80),
    },
    keyframes: k("angle", "corner", squeeze("Y", 0.86)) + DRAW("angle"),
  },
  angry: {
    note: "The brows knit down at the middle and the face shakes with rage.",
    motion: {
      p2: { origin: "100% 100%", animation: run("angry", "brow-l", 700) },
      p1: { origin: "0% 100%", animation: run("angry", "brow-r", 700) },
      ...each(["p5", "p0", "p3", "p4"], () => ({ animation: run("angry", "shake", 450, 200) })),
    },
    keyframes:
      k("angry", "brow-l", "0%{transform:none}30%,70%{transform:translateY(.5px) rotate(14deg)}100%{transform:none}") +
      k("angry", "brow-r", "0%{transform:none}30%,70%{transform:translateY(.5px) rotate(-14deg)}100%{transform:none}") +
      k("angry", "shake", jitter(0.6)),
  },
  annoyed: {
    note: "The eyes roll up to the side and the flat mouth twists.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("annoyed", "eyes", 800) })),
      p2: { animation: run("annoyed", "mouth", 800, 80) },
    },
    keyframes:
      k("annoyed", "eyes", "0%{transform:none}30%,65%{transform:translate(1px,-.8px)}100%{transform:none}") +
      k("annoyed", "mouth", "0%{transform:none}35%,70%{transform:rotate(-7deg)}100%{transform:none}"),
  },
  antenna: {
    note: "The antenna arms sway from their feet one after another, as if catching a signal.",
    motion: {
      ...each(["p0", "p1", "p2", "p3"], (i) => ({ origin: "0% 100%", animation: run("antenna", "sway", 700, i * 50) })),
      p4: { animation: run("antenna", "bar", 600, 60) },
    },
    keyframes:
      k("antenna", "sway", "0%{transform:none}30%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}85%{transform:rotate(-1.5deg)}100%{transform:none}") +
      k("antenna", "bar", nudge(-0.5, 0)),
  },
  aperture: {
    note: "The shutter blades turn together around the centre, a sixth of a turn.",
    motion: each(["p1", "p2", "p3", "p4", "p5", "p6"], () => ({ ...vb("12px 12px"), to: { transform: "rotate(60deg)" }, ease: "smooth", duration: 600 })),
  },
  apple: {
    note: "The apple bounces on its base and the stem flutters on top.",
    motion: {
      p0: { origin: "0% 100%", animation: run("apple", "stem", 750, 60) },
      p1: { origin: "50% 100%", animation: run("apple", "fruit", 600) },
    },
    keyframes:
      k("apple", "stem", "0%{transform:none}25%{transform:rotate(18deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(5deg)}100%{transform:none}") +
      k("apple", "fruit", "0%{transform:none}30%{transform:scale(1.05,.94)}60%{transform:scale(.98,1.03)}100%{transform:none}"),
  },
  "app-window": {
    note: "The window springs open, its title bar draws across and the two dots pop in.",
    draw: ["p2"],
    motion: {
      p0: { animation: run("app-window", "frame", 500) },
      p2: drawIn("app-window", 400, 80),
      p3: { animation: run("app-window", "dot", 350, 160, true) },
      p1: { animation: run("app-window", "dot", 350, 230, true) },
    },
    keyframes: k("app-window", "frame", pop(1.05)) + DRAW("app-window") + k("app-window", "dot", popIn),
  },
  archive: {
    note: "The lid lifts off the box on one side and drops back, and the handle squeezes.",
    motion: {
      p0: { origin: "0% 100%", animation: run("archive", "lid", 650) },
      p2: { animation: run("archive", "handle", 500, 80) },
    },
    keyframes:
      k("archive", "lid", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-6deg)}65%{transform:translateY(.3px)}100%{transform:none}") +
      k("archive", "handle", squeeze("X", 0.4)),
  },
  "archive-restore": {
    note: "The lid lifts and the arrow rises up out of the box.",
    motion: {
      p0: { origin: "0% 100%", animation: run("archive-restore", "lid", 650) },
      ...each(["p3", "p4"], () => ({ animation: run("archive-restore", "arrow", 550, 100, true) })),
    },
    keyframes:
      k("archive-restore", "lid", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-6deg)}65%{transform:translateY(.3px)}100%{transform:none}") +
      k("archive-restore", "arrow", "0%{transform:translateY(3px);opacity:0}60%{transform:translateY(-.6px);opacity:1}100%{transform:none;opacity:1}"),
  },
  "archive-x": {
    note: "The lid hops and the cross draws itself on the box, one stroke then the other.",
    draw: ["p2", "p3"],
    motion: {
      p0: { animation: run("archive-x", "lid", 500) },
      p2: drawIn("archive-x", 300, 120),
      p3: drawIn("archive-x", 300, 260),
    },
    keyframes: k("archive-x", "lid", hop) + DRAW("archive-x"),
  },
  armchair: {
    note: "The seat sinks as if sat in and springs back, the backrest giving a little.",
    motion: {
      p1: { origin: "50% 100%", animation: run("armchair", "seat", 650) },
      p0: { animation: run("armchair", "back", 650, 40) },
    },
    keyframes: k("armchair", "seat", squeeze("Y", 0.88)) + k("armchair", "back", nudge(0, 0.8)),
  },
  "arrow-big-right": {
    note: "The arrow gathers itself back, then stretches forward and settles.",
    motion: { p0: { origin: "0% 50%", animation: run("arrow-big-right", "push", 650) } },
    keyframes: k("arrow-big-right", "push", "0%{transform:none}30%{transform:translateX(-.6px) scaleX(.9)}60%{transform:translateX(1.6px) scaleX(1.05)}100%{transform:none}"),
  },
  upvote: {
    note: "The arrow crouches on its stem, then jumps up and lands.",
    motion: { p0: { origin: "50% 100%", animation: run("upvote", "jump", 650) } },
    keyframes: k("upvote", "jump", "0%{transform:none}30%{transform:translateY(.6px) scaleY(.88)}60%{transform:translateY(-2px) scaleY(1.05)}100%{transform:none}"),
  },
  downvote: {
    note: "The arrow draws itself up, then drops down and lands.",
    motion: { p0: { origin: "50% 0%", animation: run("downvote", "drop", 650) } },
    keyframes: k("downvote", "drop", "0%{transform:none}30%{transform:translateY(-.6px) scaleY(.88)}60%{transform:translateY(2px) scaleY(1.05)}100%{transform:none}"),
  },
  "sort-a-z": {
    note: "The arrow pushes down while the A and the Z hop in order.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("sort-a-z", "arrow", 600) })),
      ...each(["p2", "p3"], () => ({ animation: run("sort-a-z", "hop", 500, 80) })),
      p4: { animation: run("sort-a-z", "hop", 500, 170) },
    },
    keyframes: k("sort-a-z", "arrow", nudge(0, 1.5)) + k("sort-a-z", "hop", hop),
  },
  "sort-numbers": {
    note: "The arrow pushes down while the 0 and the 1 hop in order.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("sort-numbers", "arrow", 600) })),
      p2: { animation: run("sort-numbers", "hop", 500, 80) },
      ...each(["p3", "p4"], () => ({ animation: run("sort-numbers", "hop", 500, 170) })),
    },
    keyframes: k("sort-numbers", "arrow", nudge(0, 1.5)) + k("sort-numbers", "hop", hop),
  },
  "sort-desc": {
    note: "The arrow pushes down and the bars shrink and spring back from longest to shortest.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("sort-desc", "arrow", 600) })),
      ...each(["p2", "p3", "p4"], (i) => ({ origin: "0% 50%", animation: run("sort-desc", "bar", 550, i * 70) })),
    },
    keyframes: k("sort-desc", "arrow", nudge(0, 1.5)) + k("sort-desc", "bar", squeeze("X", 0.5)),
  },
  "sort-asc": {
    note: "The arrow pushes up and the bars shrink and spring back from shortest to longest.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("sort-asc", "arrow", 600) })),
      ...each(["p2", "p3", "p4"], (i) => ({ origin: "0% 50%", animation: run("sort-asc", "bar", 550, i * 70) })),
    },
    keyframes: k("sort-asc", "arrow", nudge(0, -1.5)) + k("sort-asc", "bar", squeeze("X", 0.5)),
  },
  "arrow-right-circle": arrowCircle("arrow-right-circle", 4, 0),
  "arrow-left-circle": arrowCircle("arrow-left-circle", -4, 0),
  "arrow-up-circle": arrowCircle("arrow-up-circle", 0, -4),
  "arrow-down-circle": arrowCircle("arrow-down-circle", 0, 4),
  "arrow-up": {
    note: "The arrow shoots up out of view and comes back in from below.",
    motion: { p0: { animation: run("arrow-up", "pass", 650) }, p1: { animation: run("arrow-up", "pass", 650, 30) } },
    keyframes: k("arrow-up", "pass", pass(0, -4)),
  },
  "arrow-up-right": {
    note: "The arrow shoots off up and to the right and comes back in from the other corner.",
    motion: { p0: { animation: run("arrow-up-right", "pass", 650) }, p1: { animation: run("arrow-up-right", "pass", 650, 30) } },
    keyframes: k("arrow-up-right", "pass", pass(3, -3)),
  },
  "arrow-down-right": {
    note: "The arrow shoots off down and to the right and comes back in from the other corner.",
    motion: { p1: { animation: run("arrow-down-right", "pass", 650) }, p0: { animation: run("arrow-down-right", "pass", 650, 30) } },
    keyframes: k("arrow-down-right", "pass", pass(3, 3)),
  },
  "arrow-up-down": {
    note: "The two arrows push past each other, one down and one up, and come back.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrow-up-down", "down", 600) })),
      ...each(["p2", "p3"], () => ({ animation: run("arrow-up-down", "up", 600, 50) })),
    },
    keyframes: k("arrow-up-down", "down", nudge(0, 2)) + k("arrow-up-down", "up", nudge(0, -2)),
  },
  swap: {
    note: "The two arrows push past each other, one right and one left, and come back.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("swap", "right", 600) })),
      ...each(["p2", "p3"], () => ({ animation: run("swap", "left", 600, 50) })),
    },
    keyframes: k("swap", "right", nudge(2, 0)) + k("swap", "left", nudge(-2, 0)),
  },
  "arrow-up-line": {
    note: "The arrow draws back, then runs up to the line, which takes the knock.",
    motion: {
      ...each(["p1", "p2"], () => ({ animation: run("arrow-up-line", "run", 650) })),
      p0: { animation: run("arrow-up-line", "knock", 650) },
    },
    keyframes:
      k("arrow-up-line", "run", "0%{transform:none}30%{transform:translateY(2px)}55%{transform:translateY(-1.2px)}100%{transform:none}") +
      k("arrow-up-line", "knock", "0%,45%{transform:none}57%{transform:translateY(-.6px)}80%{transform:none}"),
  },
  "arrow-left-line": {
    note: "The arrow draws back, then runs to the line, which takes the knock.",
    motion: {
      ...each(["p1", "p2"], () => ({ animation: run("arrow-left-line", "run", 650) })),
      p0: { animation: run("arrow-left-line", "knock", 650) },
    },
    keyframes:
      k("arrow-left-line", "run", "0%{transform:none}30%{transform:translateX(2px)}55%{transform:translateX(-1.2px)}100%{transform:none}") +
      k("arrow-left-line", "knock", "0%,45%{transform:none}57%{transform:translateX(-.6px)}80%{transform:none}"),
  },
  "arrow-right-line": {
    note: "The arrow draws back, then runs to the line, which takes the knock.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrow-right-line", "run", 650) })),
      p2: { animation: run("arrow-right-line", "knock", 650) },
    },
    keyframes:
      k("arrow-right-line", "run", "0%{transform:none}30%{transform:translateX(-2px)}55%{transform:translateX(1.2px)}100%{transform:none}") +
      k("arrow-right-line", "knock", "0%,45%{transform:none}57%{transform:translateX(.6px)}80%{transform:none}"),
  },
  asterisk: {
    note: "Its three strokes turn a sixth of a turn around the centre, one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ ...vb("12px 12px"), animation: run("asterisk", "turn", 650, i * 50) })),
    keyframes: k("asterisk", "turn", "0%{transform:none}100%{transform:rotate(60deg)}"),
  },
  "at-sign": {
    note: "The inner ring pops and the tail of the @ writes itself around it.",
    draw: ["p1"],
    motion: { p0: { animation: run("at-sign", "ring", 500) }, p1: drawIn("at-sign", 700, 60) },
    keyframes: k("at-sign", "ring", pop(1.12)) + DRAW("at-sign"),
  },
  atom: {
    note: "The two orbits turn half a turn in opposite directions around the pulsing nucleus.",
    motion: {
      p1: { ...vb("12px 12px"), animation: run("atom", "orbit-a", 850) },
      p2: { ...vb("12px 12px"), animation: run("atom", "orbit-b", 850) },
      p0: { animation: run("atom", "core", 500, 100) },
    },
    keyframes:
      k("atom", "orbit-a", "0%{transform:none}100%{transform:rotate(180deg)}") +
      k("atom", "orbit-b", "0%{transform:none}100%{transform:rotate(-180deg)}") +
      k("atom", "core", pop(1.5)),
  },
  "audio-lines": {
    note: "The bars bounce like a level meter, one after another.",
    motion: each(["p0", "p1", "p2", "p3", "p4", "p5"], (i) => ({ origin: "50% 50%", animation: run("audio-lines", "bar", 650, i * 60) })),
    keyframes: k("audio-lines", "bar", "0%{transform:none}25%{transform:scaleY(.4)}55%{transform:scaleY(1.25)}80%{transform:scaleY(.85)}100%{transform:none}"),
  },
  award: {
    note: "The medal turns edge-on and back while its ribbon swings under it.",
    motion: {
      p1: { animation: run("award", "medal", 650) },
      p0: { ...vb("12px 13px"), animation: run("award", "ribbon", 750, 60) },
    },
    keyframes: k("award", "medal", flip) + k("award", "ribbon", swing(7)),
  },
  "axis-3d": {
    note: "The two axes draw out from the corner and the depth ticks pop in along the third.",
    draw: ["p1"],
    motion: {
      p1: drawIn("axis-3d", 600),
      ...each(["p2", "p3", "p0"], (i) => ({ animation: run("axis-3d", "tick", 350, 250 + i * 90, true) })),
    },
    keyframes: DRAW("axis-3d") + k("axis-3d", "tick", popIn),
  },
  baby: {
    note: "The baby's head rocks gently from the chin and the eyes blink.",
    motion: {
      ...each(["p2", "p0"], () => ({ ...vb("12px 21px"), animation: run("baby", "rock", 900) })),
      ...each(["p1", "p3"], () => ({ ...vb("12px 21px"), animation: `${run("baby", "rock", 900)}, ${run("baby", "blink", 500, 200)}` })),
    },
    keyframes:
      k("baby", "rock", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}100%{transform:none}") +
      k("baby", "blink", "0%,100%{opacity:1}40%{opacity:0}60%{opacity:1}"),
  },
  backpack: {
    note: "The pack bounces on its straps and the carry handle lifts a beat later.",
    motion: {
      ...each(["p0", "p1", "p2", "p3"], () => ({ animation: run("backpack", "pack", 650) })),
      p4: { animation: run("backpack", "handle", 650, 60) },
    },
    keyframes:
      k("backpack", "pack", "0%{transform:none}30%{transform:translateY(.8px)}60%{transform:translateY(-.8px)}100%{transform:none}") +
      k("backpack", "handle", "0%{transform:none}30%{transform:translateY(.8px)}55%{transform:translateY(-1.5px)}100%{transform:none}"),
  },
  verified: {
    note: "The badge turns a notch and the tick draws itself in.",
    draw: ["p1"],
    motion: { p0: badgeTurn("verified"), p1: drawIn("verified", 400, 200) },
    keyframes: badgeTurnKf("verified") + DRAW("verified"),
  },
  "badge-percent": {
    note: "The badge turns a notch, the slash draws and the two dots pop in.",
    draw: ["p1"],
    motion: {
      p0: badgeTurn("badge-percent"),
      p1: drawIn("badge-percent", 350, 150),
      p2: { animation: run("badge-percent", "dot", 350, 300, true) },
      p3: { animation: run("badge-percent", "dot", 350, 380, true) },
    },
    keyframes: badgeTurnKf("badge-percent") + DRAW("badge-percent") + k("badge-percent", "dot", popIn),
  },
  "badge-alert": {
    note: "The badge shakes, the bar drops in and the dot pops under it.",
    motion: {
      p0: { ...vb("12px 12px"), animation: run("badge-alert", "shake", 550) },
      p1: { animation: run("badge-alert", "drop", 450, 80, true) },
      p2: { animation: run("badge-alert", "dot", 400, 220, true) },
    },
    keyframes: k("badge-alert", "shake", shake(6)) + k("badge-alert", "drop", drop) + k("badge-alert", "dot", popIn),
  },
  "badge-dollar": {
    note: "The badge turns a notch and the dollar sign flips like a coin.",
    motion: {
      p0: badgeTurn("badge-dollar"),
      ...each(["p1", "p2"], () => ({ ...vb("12px 12px"), animation: run("badge-dollar", "flip", 600, 100) })),
    },
    keyframes: badgeTurnKf("badge-dollar") + k("badge-dollar", "flip", flip),
  },
  badge: {
    note: "The badge turns a notch with a small swell and lands on its points.",
    motion: { p0: badgeTurn("badge") },
    keyframes: badgeTurnKf("badge"),
  },
  baggage: {
    note: "The trolley rolls forward and the cases on it jolt a beat behind.",
    motion: {
      ...each(["p0", "p3", "p4"], () => ({ animation: run("baggage", "roll", 650) })),
      ...each(["p1", "p2"], () => ({ animation: run("baggage", "cases", 650, 40) })),
    },
    keyframes:
      k("baggage", "roll", nudge(1.2, 0)) +
      k("baggage", "cases", "0%{transform:none}35%{transform:translate(.9px,-.8px)}60%{transform:translate(-.2px,.2px)}100%{transform:none}"),
  },
  balloon: {
    note: "The balloon floats up and sways while its string trails after it.",
    motion: {
      ...each(["p2", "p1"], () => ({ ...vb("12px 16px"), animation: run("balloon", "float", 900) })),
      p0: { origin: "0% 0%", animation: run("balloon", "string", 900, 60) },
    },
    keyframes:
      k("balloon", "float", "0%{transform:none}40%{transform:translateY(-1.5px) rotate(4deg)}75%{transform:translateY(-.4px) rotate(-2deg)}100%{transform:none}") +
      k("balloon", "string", "0%{transform:none}40%{transform:translateY(-1.5px) rotate(-8deg)}75%{transform:translateY(-.4px) rotate(4deg)}100%{transform:none}"),
  },
  banana: {
    note: "The banana rocks on its curved back, its inner line lagging a beat.",
    motion: {
      p1: { ...vb("12px 21px"), animation: run("banana", "rock", 800) },
      p0: { ...vb("12px 21px"), animation: run("banana", "rock", 800, 50) },
    },
    keyframes: k("banana", "rock", "0%{transform:none}25%{transform:rotate(-9deg)}55%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}100%{transform:none}"),
  },
  bandage: {
    note: "The plaster stretches out, its pads pull apart and the holes pop.",
    motion: {
      p6: { animation: run("bandage", "stretch", 600) },
      p5: { animation: run("bandage", "pad-l", 600) },
      p4: { animation: run("bandage", "pad-r", 600) },
      ...each(["p0", "p1", "p2", "p3"], (i) => ({ animation: run("bandage", "hole", 400, 100 + i * 50) })),
    },
    keyframes:
      k("bandage", "stretch", "0%{transform:none}35%{transform:scale(1.08,.92)}70%{transform:scaleX(.98)}100%{transform:none}") +
      k("bandage", "pad-l", nudge(-0.8, 0)) +
      k("bandage", "pad-r", nudge(0.8, 0)) +
      k("bandage", "hole", pop(1.8)),
  },
  banknote: {
    note: "The note flaps and the coin in its middle turns edge-on and back.",
    motion: {
      ...each(["p0", "p2"], () => ({ animation: run("banknote", "flap", 650) })),
      p1: { animation: run("banknote", "coin", 600, 80) },
    },
    keyframes:
      k("banknote", "flap", "0%{transform:none}30%{transform:skewX(-6deg) scaleY(.94)}60%{transform:skewX(3deg)}100%{transform:none}") + k("banknote", "coin", flip),
  },
  "banknote-check": {
    note: "The note lifts, its coin turns, and the tick draws itself in at the corner.",
    draw: ["p1"],
    motion: {
      ...each(["p0", "p2", "p3"], () => ({ animation: run("banknote-check", "lift", 600) })),
      p4: { animation: run("banknote-check", "coin", 600, 60) },
      p1: drawIn("banknote-check", 400, 150),
    },
    keyframes: k("banknote-check", "lift", nudge(0, -0.8)) + k("banknote-check", "coin", flip) + DRAW("banknote-check"),
  },
  "banknote-up": {
    note: "The arrow rises off the corner and comes back in from below while the note dips.",
    motion: {
      ...each(["p2", "p3"], () => ({ animation: run("banknote-up", "arrow", 650) })),
      ...each(["p0", "p1", "p4", "p5"], () => ({ animation: run("banknote-up", "dip", 550, 100) })),
    },
    keyframes: k("banknote-up", "arrow", pass(0, -3)) + k("banknote-up", "dip", nudge(0, 0.6)),
  },
  barcode: {
    note: "A scan runs across: each bar dims and shortens in turn, left to right.",
    motion: each(["p0", "p1", "p2", "p3", "p4"], (i) => ({ origin: "50% 50%", animation: run("barcode", "scan", 450, i * 60) })),
    keyframes: k("barcode", "scan", "0%,100%{opacity:1;transform:none}40%{opacity:.3;transform:scaleY(.85)}"),
  },
  bath: {
    note: "A drop falls from the tap and the water line sloshes in the tub.",
    motion: {
      p0: { animation: run("bath", "drop", 700) },
      p2: { animation: run("bath", "slosh", 800, 120) },
    },
    keyframes:
      k("bath", "drop", "0%{transform:none;opacity:1}30%{transform:translate(-.8px,.8px);opacity:0}31%{transform:translate(.6px,-.6px);opacity:0}70%,100%{transform:none;opacity:1}") +
      k("bath", "slosh", "0%{transform:none}30%{transform:rotate(-3deg)}60%{transform:rotate(2deg)}100%{transform:none}"),
  },
  battery: {
    note: "The cell gives a pulse and the terminal cap bumps out and back.",
    motion: {
      p1: { animation: run("battery", "cell", 600) },
      p0: { animation: run("battery", "cap", 600, 60) },
    },
    keyframes: k("battery", "cell", "0%{transform:none}35%{transform:scale(1.05,.92)}70%{transform:scale(.98,1.02)}100%{transform:none}") + k("battery", "cap", nudge(0.8, 0)),
  },
  "battery-charging": {
    note: "The bolt strikes itself in and flashes, and the cell swells with the charge.",
    draw: ["p0"],
    motion: {
      p0: { from: { strokeDasharray: 1 }, animation: `${run("battery-charging", "draw", 400, 0, true)}, ${run("battery-charging", "flash", 400, 400)}` },
      ...each(["p1", "p3"], () => ({ ...vb("10px 12px"), animation: run("battery-charging", "cell", 500, 380) })),
      p2: { animation: run("battery-charging", "cap", 500, 380) },
    },
    keyframes:
      DRAW("battery-charging") +
      k("battery-charging", "flash", "0%,100%{opacity:1}30%{opacity:.3}60%{opacity:1}") +
      k("battery-charging", "cell", pop(1.05)) +
      k("battery-charging", "cap", nudge(0.6, 0)),
  },
  "battery-low": {
    note: "The last bar blinks twice and the cell sags a little.",
    motion: {
      p1: { animation: run("battery-low", "blink", 800) },
      ...each(["p2", "p0"], () => ({ animation: run("battery-low", "sag", 600) })),
    },
    keyframes: k("battery-low", "blink", blink) + k("battery-low", "sag", nudge(0, 0.5)),
  },
  "battery-full": {
    note: "The three bars fill up one after another and the cap bumps.",
    motion: {
      ...each(["p3", "p0", "p1"], (i) => ({ origin: "50% 100%", animation: run("battery-full", "bar", 400, i * 90, true) })),
      p2: { animation: run("battery-full", "cap", 450, 260) },
    },
    keyframes: k("battery-full", "bar", grow("Y")) + k("battery-full", "cap", nudge(0.6, 0)),
  },
  "battery-warning": {
    note: "The battery shakes, the bar drops in and the dot pops under it.",
    motion: {
      ...each(["p2", "p4", "p3"], () => ({ animation: run("battery-warning", "shake", 450) })),
      p1: { animation: run("battery-warning", "drop", 450, 120, true) },
      p0: { animation: run("battery-warning", "dot", 400, 260, true) },
    },
    keyframes: k("battery-warning", "shake", jitter(0.6)) + k("battery-warning", "drop", drop) + k("battery-warning", "dot", popIn),
  },
  beaker: {
    note: "The beaker swirls on its base and the liquid inside sloshes the other way.",
    motion: {
      ...each(["p1", "p0"], () => ({ ...vb("12px 21px"), animation: run("beaker", "swirl", 800) })),
      p2: { ...vb("12px 14px"), animation: run("beaker", "liquid", 800, 40) },
    },
    keyframes:
      k("beaker", "swirl", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}") +
      k("beaker", "liquid", "0%{transform:none}25%{transform:rotate(7deg)}55%{transform:rotate(-6deg)}80%{transform:rotate(2deg)}100%{transform:none}"),
  },
  bed: {
    note: "The pillow and mattress bounce down and back, the frame following.",
    motion: each(["p3", "p1", "p2"], (i) => ({ animation: run("bed", "bounce", 600, i * 60) })),
    keyframes: k("bed", "bounce", "0%{transform:none}30%{transform:translateY(.9px)}60%{transform:translateY(-.5px)}100%{transform:none}"),
  },
  "bed-double": {
    note: "The pillows plump up and the frame settles under them.",
    motion: {
      ...each(["p1", "p2"], () => ({ animation: run("bed-double", "plump", 600) })),
      // the frame settles; the mattress (p0) holds still, so its fill and the pillows' stay under their outlines
      p3: { animation: run("bed-double", "settle", 600, 80) },
    },
    keyframes: k("bed-double", "plump", nudge(0, -1)) + k("bed-double", "settle", nudge(0, 0.6)),
  },
  beer: {
    note: "The mug tips up for a toast from its base and the foam rises over the rim.",
    motion: {
      ...each(["p4", "p0", "p1", "p2"], () => ({ ...vb("11px 22px"), animation: run("beer", "toast", 800) })),
      p3: { ...vb("11px 22px"), animation: run("beer", "foam", 800) },
    },
    keyframes:
      k("beer", "toast", "0%{transform:none}30%{transform:rotate(-10deg)}60%{transform:rotate(3deg)}100%{transform:none}") +
      k("beer", "foam", "0%{transform:none}30%{transform:rotate(-10deg) translateY(-1px)}60%{transform:rotate(3deg) translateY(-.4px)}100%{transform:none}"),
  },
  beef: {
    note: "The steak sizzles with a quick jitter, its bone and edge a beat behind.",
    motion: each(["p0", "p2", "p1"], (i) => ({ ...vb("10px 12px"), animation: run("beef", "sizzle", 600, i * 30) })),
    keyframes: k("beef", "sizzle", shake(4)),
  },
  bacon: {
    note: "The rasher ripples along its length, its streak of fat a beat behind.",
    motion: each(["p0", "p1"], (i) => ({ animation: run("bacon", "ripple", 700, i * 60) })),
    keyframes: k("bacon", "ripple", "0%{transform:none}25%{transform:skewY(5deg)}50%{transform:skewY(-4deg)}75%{transform:skewY(2deg)}100%{transform:none}"),
  },
  avocado: {
    note: "The avocado tips on its base and the stone bobs inside it.",
    motion: {
      p0: { origin: "50% 100%", animation: run("avocado", "tilt", 700) },
      p1: { animation: run("avocado", "stone", 600, 80) },
    },
    keyframes:
      k("avocado", "tilt", "0%{transform:none}30%{transform:rotate(-5deg)}60%{transform:rotate(3deg)}100%{transform:none}") +
      k("avocado", "stone", "0%{transform:none}35%{transform:translateY(-1px) scale(1.08)}65%{transform:translateY(.3px)}100%{transform:none}"),
  },
  "bell-ring": {
    note: "The bell swings from its top, the clapper after it, and the ring lines flicker out.",
    motion: {
      ...bell("bell-ring", "p2"),
      p1: { animation: run("bell-ring", "ring-r", 600, 100) },
      p3: { animation: run("bell-ring", "ring-l", 600, 100) },
    },
    keyframes:
      bellKf("bell-ring", 14) +
      k("bell-ring", "ring-r", "0%{transform:none;opacity:1}30%{transform:translate(.8px,-.3px);opacity:.3}60%,100%{transform:none;opacity:1}") +
      k("bell-ring", "ring-l", "0%{transform:none;opacity:1}30%{transform:translate(-.8px,-.3px);opacity:.3}60%,100%{transform:none;opacity:1}"),
  },
  "bell-off": {
    note: "The slash strikes through and the bell gives a muffled shudder.",
    draw: ["p2"],
    motion: {
      p2: drawIn("bell-off", 450),
      ...each(["p1", "p3", "p0"], () => ({ ...vb("12px 3px"), animation: run("bell-off", "shudder", 500, 150) })),
    },
    keyframes: DRAW("bell-off") + k("bell-off", "shudder", shake(5)),
  },
  "bell-dot": {
    note: "The bell swings from its top and the unread dot pops.",
    motion: {
      ...bell("bell-dot", "p1"),
      p2: { animation: run("bell-dot", "dot", 500, 100) },
    },
    keyframes: bellKf("bell-dot", 12) + k("bell-dot", "dot", pop(1.35)),
  },
  "bell-plus": {
    note: "The bell swings from its top and the plus spins in beside it.",
    motion: {
      ...bell("bell-plus", "p3"),
      ...each(["p1", "p2"], () => ({ ...vb("18px 8px"), animation: run("bell-plus", "plus", 550, 80, true) })),
    },
    keyframes: bellKf("bell-plus", 12) + k("bell-plus", "plus", spinIn),
  },
  strength: {
    note: "The arm curls up from the elbow and the biceps bulges, then relaxes.",
    motion: {
      p0: { ...vb("3px 19px"), animation: run("strength", "curl", 800) },
      ...each(["p1", "p2"], () => ({ ...vb("3px 19px"), animation: run("strength", "bulge", 800) })),
    },
    keyframes:
      k("strength", "curl", "0%{transform:none}35%{transform:rotate(-5deg)}70%{transform:rotate(1deg)}100%{transform:none}") +
      k("strength", "bulge", "0%{transform:none}35%{transform:rotate(-5deg) scale(1.05)}70%{transform:rotate(1deg)}100%{transform:none}"),
  },
  bike: {
    note: "The bike lunges forward, the frame ahead of the wheels and the rider's head bobbing last.",
    motion: {
      p3: { animation: run("bike", "frame", 700) },
      ...each(["p0", "p1"], () => ({ animation: run("bike", "wheel", 700, 30) })),
      p2: { animation: run("bike", "head", 700, 60) },
    },
    keyframes:
      k("bike", "frame", "0%{transform:none}35%{transform:translate(1px,-.3px)}70%{transform:translateX(-.2px)}100%{transform:none}") +
      k("bike", "wheel", nudge(0.7, 0)) +
      k("bike", "head", "0%{transform:none}35%{transform:translate(1.2px,.4px)}70%{transform:translate(-.2px,-.2px)}100%{transform:none}"),
  },
  binary: {
    note: "The digits flip over, the top row and then the bottom.",
    motion: {
      ...each(["p1", "p5", "p3"], () => ({ ...vb("12px 7px"), animation: run("binary", "flip", 500) })),
      ...each(["p0", "p4", "p2"], () => ({ ...vb("12px 17px"), animation: run("binary", "flip", 500, 150) })),
    },
    keyframes: k("binary", "flip", "0%{transform:none}40%{transform:scaleY(0)}100%{transform:none}"),
  },
  "chart-area": {
    note: "The area rises up from the axis and settles.",
    motion: { p1: { origin: "50% 100%", animation: run("chart-area", "rise", 600) } },
    keyframes: k("chart-area", "rise", grow("Y")),
  },
  "chart-bar": {
    note: "The bars grow out from the axis one after another.",
    motion: each(["p3", "p2", "p1"], (i) => ({ origin: "0% 50%", animation: run("chart-bar", "bar", 500, i * 80, true) })),
    keyframes: k("chart-bar", "bar", grow("X")),
  },
  "insert-row": {
    note: "The rows part to make room and the arrow pushes the new one in between.",
    motion: {
      p1: { animation: run("insert-row", "arrow", 600) },
      p0: { animation: run("insert-row", "up", 600, 40) },
      p2: { animation: run("insert-row", "down", 600, 40) },
    },
    keyframes: k("insert-row", "arrow", nudge(1.5, 0)) + k("insert-row", "up", nudge(0, -1)) + k("insert-row", "down", nudge(0, 1)),
  },
  "insert-column": {
    note: "The columns part to make room and the arrow pushes the new one in between.",
    motion: {
      p1: { animation: run("insert-column", "arrow", 600) },
      p0: { animation: run("insert-column", "left", 600, 40) },
      p2: { animation: run("insert-column", "right", 600, 40) },
    },
    keyframes: k("insert-column", "arrow", nudge(0, 1.5)) + k("insert-column", "left", nudge(-1, 0)) + k("insert-column", "right", nudge(1, 0)),
  },
  ad: {
    note: "The frame gives a beat and the A and the D pop in one after the other.",
    motion: {
      p3: { animation: run("ad", "frame", 500) },
      ...each(["p1", "p0"], () => ({ animation: run("ad", "letter", 400, 60, true) })),
      p2: { animation: run("ad", "letter", 400, 150, true) },
    },
    keyframes: k("ad", "frame", pop(1.05)) + k("ad", "letter", popIn),
  },
  axe: {
    note: "The axe swings back from the end of its handle and chops down.",
    motion: each(["p0", "p1"], (i) => ({ ...vb("4px 19px"), animation: run("axe", "chop", 700, i * 30) })),
    keyframes: k("axe", "chop", "0%{transform:none}30%{transform:rotate(-14deg)}55%{transform:rotate(6deg)}75%{transform:rotate(-1deg)}100%{transform:none}"),
  },
};

/** fill areas for outlines the source draws open (24 grid, closed) */
const BATTERY = "M4 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z";
const BOX = "M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z";
const BELL = "M18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8Z";
export const fills: Record<string, string> = {
  // the unit, closed along its bottom where the streams come out
  "air-vent": "M4 3h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  // the clock face the slash breaks
  "alarm-off": "M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z",
  // the whole van, cab and box, which the source leaves open at the wheels
  ambulance:
    "M4 4h8a2 2 0 0 1 2 2v2h2.382a1 1 0 0 1 .894.553l1.539 3.076a1 1 0 0 0 .578.502l1.923.641A1 1 0 0 1 22 13.72V17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2Z",
  // the box under the lid
  archive: BOX,
  "archive-restore": BOX,
  "archive-x": BOX,
  // the note, cut straight across at the corner the source leaves open for the tick or arrow
  "banknote-check": "M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875Z",
  // the note, with a bite around the arrow's head (2.8 clear of it) where the source leaves the corner open
  "banknote-up": "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7L20.98 14.02A2.8 2.8 0 0 0 17.02 14.02Z",
  // the cell, which the source draws in two pieces around the bolt or the mark
  "battery-charging": BATTERY,
  "battery-warning": BATTERY,
  // open-topped glass and mug
  beaker: "M6 3h12v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z",
  beer: "M5 8h12v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z",
  // the lower part of the detector, open where it meets the plate
  "smoke-alarm": "M5 8h14l-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1Z",
  // the bell the slash breaks
  "bell-off": BELL,
  // the bell, with the notch the source leaves for the plus, cut around the plus 2.8 clear of it
  "bell-plus": "M14.75 2.668A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.738-.863L18 13.8A2.8 2.8 0 0 1 15.208 10.792A2.8 2.8 0 1 1 15.208 5.208Z",
  // the bell, cut with an arc round the dot (2.8 clear of it) where the source leaves room for the dot
  "bell-dot": "M12.988 2.082A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.735 14.291 18.684 13.206 18.231 10.795A5.8 5.8 0 0 1 12.988 2.082Z",
  // the head, cut around the curl (the fill's own edge a unit clear of it) where the source leaves the top of the head open for it
  baby: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6a9 9 0 0 1-17.6 0a2 2 0 0 1 0-3.6A9 9 0 0 1 9.53 3.346L9.5 7C9.5 8.9 11.3 10.5 13.5 10.5C16.1 10.5 18 8.2 18 5.6Z",
  // the ribbon tails, stopping a unit short of the medal's edge (an arc around it) so the two stay separate shapes
  award: "M15.992 15.786L16.992 21.416a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469L8.008 15.786A8.75 8.75 0 0 0 15.992 15.786Z",
  // the whole arm: the outline, closed along the forearm's inner edge and the bicep's curve
  strength:
    "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1L9.964 6.825C8.019 7.977 9.5 13 8 15L7.416 16A5 5 0 0 1 12.409 13.017Z",
  // the screen, cut around the triangle (its edge a unit clear of it) where the source leaves its bottom open
  airplay: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1H17.247L14.112 13.24A2.75 2.75 0 0 0 9.888 13.24L6.753 17Z",
  // the tub under its rim; it starts with a zero-width run along the whole rim (2 to 22), which the rim's stroke covers,
  // so the solid counts at its drawn width and the tub is not taken for a small solid bit (a tile)
  bath: "M2 12H22H20v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z",
  // the mattress and frame between the post and the foot
  bed: "M2 8h18a2 2 0 0 1 2 2v7H2Z",
  // the pillows and the mattress, each closed where they meet
  "bed-double": "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4Z M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6Z",
};
