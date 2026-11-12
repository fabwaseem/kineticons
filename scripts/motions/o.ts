import type { PartMotion } from "../../packages/core/src/types";
import type { Entry, Override } from "./types";

/** Batch o: its icons (pnpm import-icons o) and their motions. */
export const list: Entry[] = [
  ["BatteryPlus", "battery-plus", "Add battery", "devices", "flash", ["battery", "power", "charge", "add"], "The plus draws in."],
  ["Bean", "bean", "Bean", "food", "wiggle", ["bean", "coffee", "legume", "vegan"], "It wobbles."],
  ["BeanOff", "bean-off", "No beans", "food", "shake", ["bean", "allergy", "legume", "off"], "The slash crosses it out."],
  ["BedSingle", "bed-single", "Single bed", "travel", "bounce", ["bed", "sleep", "hotel", "room"], "The mattress gives."],
  ["BeefOff", "beef-off", "No meat", "food", "shake", ["meat", "vegetarian", "vegan", "off"], "The slash crosses it out."],
  ["BeerOff", "beer-off", "No alcohol", "food", "shake", ["beer", "alcohol", "sober", "off"], "The slash crosses it out."],
  ["BelarusianRuble", "belarusian-ruble", "Belarusian ruble", "commerce", "pop", ["money", "currency", "ruble", "byn"], "It draws itself."],
  ["Bell", "bell-plain", "Bell", "status", "swing", ["notification", "alert", "bell", "alarm"], "The bell swings."],
  ["BellCheck", "bell-check", "Notification done", "status", "swing", ["notification", "done", "check", "seen"], "The tick draws in."],
  ["BellElectric", "bell-electric", "Electric bell", "status", "shake", ["alarm", "school", "ring", "fire"], "The hammer rings it."],
  ["BellMinus", "bell-minus", "Unsubscribe", "actions", "swing", ["notification", "remove", "unsubscribe", "minus"], "The minus draws in."],
  ["BetweenHorizontalEnd", "between-horizontal-end", "Insert row at end", "text", "nudge-right", ["insert", "row", "add", "between", "table"], "The marker slides in."],
  ["BetweenVerticalEnd", "between-vertical-end", "Insert column at end", "text", "nudge-down", ["insert", "column", "add", "between", "table"], "The marker slides in."],
  ["Birdhouse", "birdhouse", "Birdhouse", "nature", "bounce", ["bird", "house", "nest", "garden"], "The bird peeks out."],
  ["Blender", "blender", "Blender", "food", "shake", ["kitchen", "smoothie", "mix", "appliance"], "It whirs."],
  ["BluetoothConnected", "bluetooth-connected", "Bluetooth connected", "devices", "pulse", ["bluetooth", "connected", "wireless", "paired"], "The dots blink."],
  ["BluetoothSearching", "bluetooth-searching", "Bluetooth searching", "devices", "pulse", ["bluetooth", "searching", "pairing", "wireless"], "The waves pulse."],
  ["BoneFracture", "bone-fracture", "Fracture", "health", "shake", ["bone", "broken", "injury", "x-ray"], "The break cracks."],
  ["BookA", "book-a", "Dictionary", "files", "tilt", ["dictionary", "language", "book", "letters"], "The letter draws itself."],
  ["BookAlert", "book-alert", "Book warning", "files", "shake", ["book", "warning", "alert", "important"], "The mark bangs down."],
  ["BookCheck", "book-check", "Book done", "files", "draw", ["book", "read", "done", "finished"], "The tick draws in."],
  ["BookCopy", "book-copy", "Book copies", "files", "tilt", ["books", "copy", "library", "duplicate"], "The back book shifts."],
  ["BookDashed", "book-dashed", "Book draft", "files", "tilt", ["book", "template", "draft", "outline"], "The dashes march."],
  ["BookDown", "book-down", "Download book", "files", "nudge-down", ["book", "download", "save", "offline"], "The arrow drops."],
  ["BookHeadphones", "book-headphones", "Audiobook headphones", "media", "tilt", ["audiobook", "listen", "book", "headphones"], "The headphones bob."],
  ["BookImage", "book-image", "Picture book", "files", "tilt", ["book", "picture", "album", "photos"], "The sun rises."],
  ["BookKey", "book-key", "Book key", "files", "tilt", ["book", "key", "access", "license"], "The key turns."],
  ["BookmarkOff", "bookmark-off", "Remove bookmark (off)", "actions", "shake", ["bookmark", "off", "unsave", "remove"], "The slash crosses it out."],
  ["BookmarkX", "bookmark-x", "Delete bookmark", "actions", "shake", ["bookmark", "delete", "remove", "x"], "The cross draws in."],
  ["BookMinus", "book-minus", "Remove book", "files", "tilt", ["book", "remove", "minus", "delete"], "The minus draws in."],
  ["BookOpenText", "book-open-text", "Open book with text", "app", "tilt", ["read", "book", "text", "docs"], "The lines draw in."],
  ["BookSearch", "book-search", "Search books", "files", "tilt", ["book", "search", "find", "look up"], "The lens searches."],
  ["BookText", "book-text", "Book with text", "files", "tilt", ["book", "text", "read", "notes"], "The lines draw in."],
  ["BookType", "book-type", "Typography book", "files", "tilt", ["book", "font", "type", "typography"], "The letter stamps."],
  ["BookUp", "book-up", "Upload book", "files", "nudge-up", ["book", "upload", "publish", "export"], "The arrow rises."],
  ["BookUp2", "book-up-2", "Upload book (open)", "files", "nudge-up", ["book", "upload", "publish", "export"], "The arrow rises."],
  ["BookX", "book-x", "Book error", "files", "shake", ["book", "delete", "remove", "x"], "The cross draws in."],
  ["BotOff", "bot-off", "Assistant off", "app", "shake", ["bot", "off", "disabled", "robot"], "The slash crosses it out."],
  ["BowArrow", "bow-arrow", "Bow and arrow", "app", "launch", ["archery", "bow", "arrow", "target"], "The arrow is drawn and loosed."],
  ["BoxesLinked", "boxes-linked", "Linked boxes", "development", "pulse", ["boxes", "linked", "modules", "connected"], "The link draws."],
  ["BrainCog", "brain-cog", "Brain settings", "app", "spin", ["brain", "cog", "thinking", "process"], "The cog turns."],
  ["BrainOff", "brain-off", "Brain off", "app", "shake", ["brain", "off", "offline", "tired"], "The slash crosses it out."],
  ["BrickWallFire", "brick-wall-fire", "Firewall", "development", "flash", ["firewall", "security", "network", "wall"], "The flame flickers."],
  ["BrickWallShield", "brick-wall-shield", "Protected wall", "development", "pop", ["firewall", "security", "shield", "protect"], "The shield pops."],
  ["BriefcaseBusiness", "briefcase-business", "Business briefcase", "app", "bounce", ["work", "business", "job", "office"], "It is lifted."],
  ["BriefcaseConveyorBelt", "briefcase-conveyor-belt", "Baggage claim", "travel", "nudge-right", ["baggage", "luggage", "airport", "belt"], "The belt rolls."],
  ["BriefcasePlus", "briefcase-plus", "New job", "app", "bounce", ["work", "add", "job", "new"], "The plus draws in."],
  ["Broccoli", "broccoli", "Broccoli", "food", "wiggle", ["vegetable", "healthy", "food", "green"], "It wiggles."],
  ["BroomSparkles", "broom-sparkles", "Sweep clean", "actions", "swing", ["clean", "broom", "sweep", "tidy"], "It sweeps and sparkles."],
  ["BrushCleaning", "brush-cleaning", "Cleaning brush", "actions", "wiggle", ["clean", "brush", "scrub", "sweep"], "It scrubs."],
  ["Bubbles", "bubbles", "Bubbles", "nature", "float", ["bubbles", "soap", "water", "fizz"], "The bubbles rise."],
  ["BugOff", "bug-off", "Bug off", "status", "shake", ["bug", "fixed", "off", "debug"], "The slash crosses it out."],
  ["Building", "building-office", "Office building", "app", "pop", ["office", "company", "building", "work"], "The windows light up."],
  ["BuildingComplexPlus", "building-complex-plus", "Add building", "app", "pop", ["building", "add", "property", "new"], "The plus draws in."],
  ["BusFront", "bus-front", "Bus (front)", "travel", "bounce", ["bus", "transport", "transit", "travel"], "It rocks on its wheels."],
  ["CableCar", "cable-car", "Cable car", "travel", "nudge-right", ["gondola", "ski", "mountain", "lift"], "It glides along."],
  ["CakeSlice", "cake-slice", "Cake slice", "food", "bounce", ["cake", "dessert", "birthday", "sweet"], "It wobbles."],
  ["Calendar", "calendar-blank", "Blank calendar", "status", "bounce", ["date", "calendar", "event", "schedule"], "The page flips."],
  ["CalendarArrowDown", "calendar-arrow-down", "Sort dates down", "app", "nudge-down", ["calendar", "sort", "descending", "date"], "The arrow drops."],
  ["CalendarArrowLeft", "calendar-arrow-left", "Earlier date", "app", "nudge-left", ["calendar", "previous", "back", "date"], "The arrow steps left."],
  ["CalendarArrowRight", "calendar-arrow-right", "Later date", "app", "nudge-right", ["calendar", "next", "forward", "date"], "The arrow steps right."],
  ["CalendarArrowUp", "calendar-arrow-up", "Sort dates up", "app", "nudge-up", ["calendar", "sort", "ascending", "date"], "The arrow rises."],
  ["CalendarCheck2", "calendar-check-2", "Event done (corner)", "app", "draw", ["calendar", "done", "check", "booked"], "The tick draws in."],
  ["CalendarChevronsLeft", "calendar-chevrons-left", "Jump back", "app", "nudge-left", ["calendar", "previous", "rewind", "date"], "The chevrons step left."],
  ["CalendarChevronsRight", "calendar-chevrons-right", "Jump ahead", "app", "nudge-right", ["calendar", "next", "skip", "date"], "The chevrons step right."],
  ["CalendarCog", "calendar-cog", "Calendar settings", "app", "spin", ["calendar", "settings", "cog", "preferences"], "The cog turns."],
  ["CalendarFold", "calendar-fold", "Calendar page", "app", "tilt", ["calendar", "page", "fold", "date"], "The corner folds."],
  ["CalendarMinus", "calendar-minus", "Remove event", "app", "pop", ["calendar", "remove", "minus", "event"], "The minus draws in."],
  ["CalendarMinus2", "calendar-minus-2", "Remove event (corner)", "app", "pop", ["calendar", "remove", "minus", "event"], "The minus draws in."],
  ["CalendarOff", "calendar-off", "No events", "app", "shake", ["calendar", "off", "unavailable", "busy"], "The slash crosses it out."],
  ["CalendarPlus2", "calendar-plus-2", "Add event (inside)", "app", "pop", ["calendar", "add", "plus", "event"], "The plus draws in."],
  ["Calendars", "calendars", "Calendars", "app", "tilt", ["calendars", "schedules", "shared", "multiple"], "The back calendar shifts."],
  ["CalendarX2", "calendar-x-2", "Cancel event (corner)", "app", "shake", ["calendar", "cancel", "delete", "x"], "The cross draws in."],
  ["Can", "can", "Can", "food", "wiggle", ["tin", "can", "food", "drink"], "It wobbles."],
  ["CandyCane", "candy-cane", "Candy cane", "food", "swing", ["christmas", "candy", "sweet", "holiday"], "It swings."],
  ["CandyOff", "candy-off", "No sweets", "food", "shake", ["candy", "sugar free", "diet", "off"], "The slash crosses it out."],
  ["Cannabis", "cannabis", "Cannabis", "nature", "wave", ["leaf", "cannabis", "plant", "hemp"], "The leaf sways."],
  ["CannabisOff", "cannabis-off", "No cannabis", "nature", "shake", ["leaf", "cannabis", "off", "banned"], "The slash crosses it out."],
  ["CanSoda", "can-soda", "Soda can", "food", "shake", ["soda", "drink", "can", "pop"], "It fizzes."],
  ["CarFront", "car-front", "Car (front)", "travel", "bounce", ["car", "vehicle", "drive", "auto"], "It rocks on its wheels."],
  ["Carton", "carton", "Carton", "food", "wiggle", ["milk", "juice", "carton", "drink"], "It wobbles."],
  ["CartonOff", "carton-off", "No dairy", "food", "shake", ["milk", "dairy", "carton", "off"], "The slash crosses it out."],
  ["CctvOff", "cctv-off", "Camera off", "devices", "shake", ["cctv", "camera", "privacy", "off"], "The slash crosses it out."],
  ["ChartBarStacked", "chart-bar-stacked", "Stacked bar chart", "charts", "pop", ["chart", "bar", "stacked", "stats"], "The bars grow."],
  ["ChartBellCurve", "chart-bell-curve", "Bell curve", "charts", "draw", ["chart", "distribution", "normal", "statistics"], "The curve draws itself."],
  ["ChartColumnDecreasing", "chart-column-decreasing", "Falling columns", "charts", "nudge-down", ["chart", "decrease", "down", "loss"], "The columns shrink."],
  ["ChartNoAxesColumnDecreasing", "chart-no-axes-column-decreasing", "Falling bars", "charts", "nudge-down", ["chart", "decrease", "down", "bars"], "The bars shrink."],
  ["ChartNoAxesCombined", "chart-no-axes-combined", "Combined chart", "charts", "pop", ["chart", "trend", "bars", "growth"], "The bars grow and the line draws."],
  ["ChartNoAxesGantt", "chart-no-axes-gantt", "Timeline", "charts", "nudge-right", ["gantt", "timeline", "project", "plan"], "The bars stretch."],
  ["ChartQuadrant", "chart-quadrant", "Quadrant chart", "charts", "pop", ["chart", "quadrant", "matrix", "grid"], "The dots settle."],
  ["CircleCheckBig", "circle-check-big", "Done (open circle)", "status", "draw", ["done", "success", "complete", "ok"], "The tick draws in."],
  ["CircleCheck", "circle-check", "Done (circle)", "status", "draw", ["done", "success", "complete", "ok"], "The tick draws in."],
  ["CheckLine", "check-line", "Check with line", "status", "draw", ["check", "done", "underline", "confirm"], "The tick and line draw in."],
  ["SquareCheckBig", "square-check-big", "Checked (open box)", "status", "draw", ["checkbox", "done", "task", "complete"], "The tick draws in."],
  ["Cheese", "cheese", "Cheese", "food", "wiggle", ["cheese", "dairy", "food", "snack"], "It wobbles."],
  ["ChessBishop", "chess-bishop", "Bishop", "app", "bounce", ["chess", "bishop", "game", "piece"], "It hops diagonally."],
  ["ChessKing", "chess-king", "King", "app", "bounce", ["chess", "king", "game", "piece"], "It hops a square."],
  ["ChessPawn", "chess-pawn", "Pawn", "app", "bounce", ["chess", "pawn", "game", "piece"], "It steps forward."],
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
const drawIn = (icon: string, ms: number, delay = 0, rev = false): PartMotion => ({
  from: { strokeDasharray: 1 },
  animation: run(icon, rev ? "undraw" : "draw", ms, delay, true),
});
const DRAW = (icon: string) => k(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const UNDRAW = (icon: string) => k(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
/** turn or scale around a point of the 24 grid */
const vb = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
const each = (parts: string[], m: (i: number) => PartMotion): Record<string, PartMotion> => Object.fromEntries(parts.map((p, i) => [p, m(i)]));

// keyframe bodies
const nudge = (x: number, y: number) => `0%{transform:none}35%{transform:${T(x, y)}}65%{transform:${T(-x * 0.25, -y * 0.25)}}100%{transform:none}`;
/** out one side, fading, and back in from the other */
const pass = (x: number, y: number) =>
  `0%{transform:none;opacity:1}32%{transform:${T(x, y)};opacity:0}33%{transform:${T(-x, -y)};opacity:0}100%{transform:none;opacity:1}`;
const pop = (s: number) => `0%{transform:none}35%{transform:scale(${s})}65%{transform:scale(${f(1 - (s - 1) * 0.4)})}100%{transform:none}`;
const popIn = "0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:none;opacity:1}";
const drop = "0%{transform:translateY(-2.5px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}";
const slideIn = (x: number, y: number) => `0%{transform:${T(x, y)};opacity:0}60%{transform:${T(-x * 0.12, -y * 0.12)};opacity:1}100%{transform:none;opacity:1}`;
const shake = (d: number) =>
  `0%{transform:none}15%{transform:rotate(${-d}deg)}30%{transform:rotate(${d}deg)}45%{transform:rotate(${f(-d * 0.7)}deg)}60%{transform:rotate(${f(d * 0.5)}deg)}75%{transform:rotate(${f(-d * 0.25)}deg)}100%{transform:none}`;
const jitter = (x: number) =>
  `0%{transform:none}20%{transform:translateX(${-x}px)}40%{transform:translateX(${x}px)}60%{transform:translateX(${f(-x * 0.6)}px)}80%{transform:translateX(${f(x * 0.3)}px)}100%{transform:none}`;
const swing = (d: number) => `0%{transform:none}25%{transform:rotate(${d}deg)}50%{transform:rotate(${f(-d * 0.6)}deg)}75%{transform:rotate(${f(d * 0.3)}deg)}100%{transform:none}`;
const spinIn = "0%{transform:rotate(-90deg) scale(.4);opacity:0}60%{transform:rotate(10deg) scale(1.1);opacity:1}100%{transform:none;opacity:1}";
const grow = (axis: "X" | "Y") => `0%{transform:scale${axis}(0)}60%{transform:scale${axis}(1.1)}100%{transform:none}`;
/** a plus that turns a quarter (its two strokes share a centre, so it lands on itself) */
const plusTurn = "0%{transform:none}60%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}";
/** a cog with eight teeth turning one tooth on (it lands on itself) */
const cogTurn = "0%{transform:none}60%{transform:rotate(55deg)}100%{transform:rotate(45deg)}";
/** a book or page that takes a small knock from its foot */
const knock = "0%{transform:none}30%{transform:translateY(.6px) scale(1.02,.97)}60%{transform:translateY(-.2px)}100%{transform:none}";
/** a squash on its foot and a small stretch back (cake, cheese, a landing) */
const jiggle = "0%{transform:none}30%{transform:scale(1.03,.95)}60%{transform:scale(.99,1.02)}100%{transform:none}";
/** a rock on a point below it, as on wheels or a flat bottom */
const rock = (d: number) => `0%{transform:none}30%{transform:rotate(${-d}deg)}60%{transform:rotate(${f(d * 0.6)}deg)}80%{transform:rotate(${f(-d * 0.2)}deg)}100%{transform:none}`;
/** a magnifier circling over what it searches */
const search = "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}";
/** a box pressed in as its tick is drawn */
const press = "0%{transform:none}30%{transform:scale(.92)}65%{transform:scale(1.03)}100%{transform:none}";
/** a hop off the board and a landing */
const hop = "0%{transform:none}35%{transform:translateY(-1.3px)}65%{transform:translateY(.2px)}100%{transform:none}";
const squash = "0%,55%{transform:none}65%{transform:scaleY(.85)}100%{transform:none}";

/** an "off" icon: the slash strikes through and the rest gives a shudder */
const off = (icon: string, slash: string, rest: string[], note: string): Override => ({
  note,
  draw: [slash],
  motion: { [slash]: drawIn(icon, 420), ...each(rest, () => ({ animation: run(icon, "shudder", 500, 220) })) },
  keyframes: DRAW(icon) + k(icon, "shudder", jitter(0.6)),
});
/** a bell swinging from its top, with its clapper swinging after it */
const bell = (icon: string, body: string[], clapper: string) => ({
  ...each(body, () => ({ ...vb(12, 3), animation: run(icon, "swing", 800) })),
  [clapper]: { ...vb(12, 3), animation: run(icon, "clapper", 800, 40) },
});
const bellKf = (icon: string) => k(icon, "swing", swing(12)) + k(icon, "clapper", swing(18));
/** calendar rings that hop, one after the other */
const rings = (icon: string, a: string, b: string) => ({
  [a]: { animation: run(icon, "ring", 450) },
  [b]: { animation: run(icon, "ring", 450, 70) },
});
const ringsKf = (icon: string) => k(icon, "ring", "0%{transform:none}35%{transform:translateY(-.8px)}65%{transform:translateY(.2px)}100%{transform:none}");
/** the book takes a knock from its foot */
const bookKnock = (icon: string, parts: string[], delay = 0) => each(parts, () => ({ ...vb(12, 22), animation: run(icon, "knock", 550, delay) }));

export const motions: Record<string, Override> = {
  "battery-plus": {
    note: "The plus turns a quarter, then the cell swells with the new charge and its cap pushes out.",
    motion: {
      ...each(["p0", "p3"], () => ({ ...vb(10, 12), animation: run("battery-plus", "plus", 600) })),
      ...each(["p1", "p4"], () => ({ ...vb(10, 12), animation: run("battery-plus", "cell", 500, 220) })),
      p2: { animation: run("battery-plus", "cap", 500, 220) },
    },
    keyframes: k("battery-plus", "plus", plusTurn) + k("battery-plus", "cell", pop(1.05)) + k("battery-plus", "cap", nudge(0.6, 0)),
  },

  bean: {
    note: "The bean rocks on its belly and its crease follows a beat behind.",
    motion: {
      p0: { ...vb(12, 14), animation: run("bean", "rock", 700) },
      p1: { ...vb(12, 14), animation: run("bean", "rock", 700, 50) },
    },
    keyframes: k("bean", "rock", "0%{transform:none}25%{transform:rotate(-7deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "bean-off": off("bean-off", "p3", ["p0", "p1", "p2"], "The slash strikes through and the bean gives a shudder."),

  "bed-single": {
    note: "The mattress gives as someone sits down, the frame and then the headboard following.",
    motion: each(["p2", "p0", "p1"], (i) => ({ animation: run("bed-single", "sit", 600, i * 60) })),
    keyframes: k("bed-single", "sit", "0%{transform:none}30%{transform:translateY(.9px)}60%{transform:translateY(-.4px)}100%{transform:none}"),
  },

  "beef-off": off("beef-off", "p4", ["p0", "p1", "p2", "p3", "p5"], "The slash strikes through and the steak gives a shudder."),

  "beer-off": off("beer-off", "p3", ["p0", "p1", "p2", "p4", "p5", "p6", "p7"], "The slash strikes through and the glass gives a shudder."),

  "belarusian-ruble": {
    note: "The letter draws itself in one stroke, then its crossbar slides out under it.",
    draw: ["p1"],
    motion: {
      p1: drawIn("belarusian-ruble", 550),
      p0: { ...vb(3, 16), animation: run("belarusian-ruble", "bar", 400, 380, true) },
    },
    keyframes: DRAW("belarusian-ruble") + k("belarusian-ruble", "bar", grow("X")),
  },

  "bell-plain": {
    note: "The bell swings from its top and the clapper swings after it.",
    motion: bell("bell-plain", ["p1"], "p0"),
    keyframes: bellKf("bell-plain"),
  },

  "bell-check": {
    note: "The bell swings from its top, its clapper after it, and the tick draws itself beside it.",
    draw: ["p1"],
    motion: { ...bell("bell-check", ["p2", "p3"], "p0"), p1: drawIn("bell-check", 400, 250) },
    keyframes: bellKf("bell-check") + DRAW("bell-check"),
  },

  "bell-electric": {
    note: "The striker hammers the round bell, which rattles while the sound line flashes out.",
    motion: {
      ...each(["p4", "p2"], () => ({ ...vb(9, 9), animation: run("bell-electric", "rattle", 800) })),
      p3: { animation: run("bell-electric", "strike", 800) },
      p1: { animation: run("bell-electric", "sound", 800, 60) },
    },
    keyframes:
      k("bell-electric", "rattle", "0%{transform:none}10%{transform:rotate(-4deg)}20%{transform:rotate(4deg)}30%{transform:rotate(-4deg)}40%{transform:rotate(4deg)}50%{transform:rotate(-3deg)}60%{transform:rotate(2deg)}75%{transform:rotate(-1deg)}100%{transform:none}") +
      k("bell-electric", "strike", "0%{transform:none}8%{transform:translate(-.5px,-.4px)}18%{transform:none}28%{transform:translate(-.5px,-.4px)}38%{transform:none}48%{transform:translate(-.4px,-.3px)}58%,100%{transform:none}") +
      k("bell-electric", "sound", "0%{transform:none;opacity:1}30%{transform:translate(.6px,-.3px);opacity:.2}55%{transform:none;opacity:1}75%{opacity:.4}100%{transform:none;opacity:1}"),
  },

  "bell-minus": {
    note: "The bell swings from its top, its clapper after it, and the minus draws itself beside it.",
    draw: ["p1"],
    motion: { ...bell("bell-minus", ["p2"], "p0"), p1: drawIn("bell-minus", 350, 200) },
    keyframes: bellKf("bell-minus") + DRAW("bell-minus"),
  },

  "between-horizontal-end": {
    note: "The two rows part to make room and the marker slides in between them from the right.",
    motion: {
      p0: { animation: run("between-horizontal-end", "up", 600) },
      p2: { animation: run("between-horizontal-end", "down", 600) },
      p1: { animation: run("between-horizontal-end", "in", 500, 80, true) },
    },
    keyframes:
      k("between-horizontal-end", "up", nudge(0, -0.8)) + k("between-horizontal-end", "down", nudge(0, 0.8)) + k("between-horizontal-end", "in", slideIn(2, 0)),
  },

  "between-vertical-end": {
    note: "The two columns part to make room and the marker rises in between them from below.",
    motion: {
      p0: { animation: run("between-vertical-end", "left", 600) },
      p2: { animation: run("between-vertical-end", "right", 600) },
      p1: { animation: run("between-vertical-end", "in", 500, 80, true) },
    },
    keyframes:
      k("between-vertical-end", "left", nudge(-0.8, 0)) + k("between-vertical-end", "right", nudge(0.8, 0)) + k("between-vertical-end", "in", slideIn(0, 1.2)),
  },

  birdhouse: {
    note: "A bird lands on the house, which gives on its post, and the round door pops as it peeks out.",
    motion: {
      ...each(["p1", "p2", "p3", "p4"], () => ({ ...vb(12, 18), animation: run("birdhouse", "perch", 600) })),
      p5: { animation: run("birdhouse", "peek", 550, 140) },
    },
    keyframes: k("birdhouse", "perch", jiggle) + k("birdhouse", "peek", "0%{transform:none}40%{transform:scale(1.25)}70%{transform:scale(.95)}100%{transform:none}"),
  },

  blender: {
    note: "The button presses, the blender shakes as it whirs and the drink swirls inside the jar.",
    motion: {
      p5: { animation: run("blender", "press", 400) },
      ...each(["p0", "p1", "p2", "p4"], () => ({ animation: run("blender", "whir", 600, 120) })),
      p3: { animation: run("blender", "swirl", 700, 120) },
    },
    keyframes:
      k("blender", "press", "0%{transform:none}30%{transform:scale(.4)}65%{transform:scale(1.2)}100%{transform:none}") +
      k("blender", "whir", jitter(0.35)) +
      k("blender", "swirl", "0%{transform:none}20%{transform:translateX(-.8px) scaleY(1.3)}40%{transform:translateX(.8px) scaleY(.8)}60%{transform:translateX(-.5px) scaleY(1.2)}80%{transform:translateX(.3px)}100%{transform:none}"),
  },

  "bluetooth-connected": {
    note: "The two dashes slide in to the rune from both sides and it gives a beat as they connect.",
    motion: {
      p2: { animation: run("bluetooth-connected", "left", 450, 0, true) },
      p1: { animation: run("bluetooth-connected", "right", 450, 60, true) },
      p0: { ...vb(12, 12), animation: run("bluetooth-connected", "beat", 450, 300) },
    },
    keyframes: k("bluetooth-connected", "left", slideIn(-1.5, 0)) + k("bluetooth-connected", "right", slideIn(1.5, 0)) + k("bluetooth-connected", "beat", pop(1.06)),
  },

  "bluetooth-searching": {
    note: "The dot pops up and the wave goes out from it, flickering as it searches.",
    motion: {
      p2: { animation: run("bluetooth-searching", "dot", 400, 0, true) },
      p1: { animation: run("bluetooth-searching", "wave", 750, 120, true) },
      p0: { ...vb(12, 12), animation: run("bluetooth-searching", "beat", 450) },
    },
    keyframes:
      k("bluetooth-searching", "dot", popIn) +
      k("bluetooth-searching", "wave", "0%{transform:translateX(-1px);opacity:0}35%{transform:none;opacity:1}55%{opacity:.3}75%{opacity:1}100%{transform:none;opacity:1}") +
      k("bluetooth-searching", "beat", pop(1.04)),
  },

  "bone-fracture": {
    note: "The two halves jolt apart at the break and the pain marks flash out at the ends.",
    draw: ["p1", "p2", "p3", "p4"],
    motion: {
      p0: { animation: run("bone-fracture", "up", 600) },
      p5: { animation: run("bone-fracture", "down", 600) },
      p4: drawIn("bone-fracture", 280, 150),
      p3: drawIn("bone-fracture", 280, 200),
      p2: drawIn("bone-fracture", 280, 150),
      p1: drawIn("bone-fracture", 280, 200),
    },
    keyframes:
      k("bone-fracture", "up", "0%{transform:none}30%{transform:translate(.8px,-.8px)}55%{transform:translate(-.15px,.15px)}100%{transform:none}") +
      k("bone-fracture", "down", "0%{transform:none}30%{transform:translate(-.8px,.8px)}55%{transform:translate(.15px,-.15px)}100%{transform:none}") +
      DRAW("bone-fracture"),
  },

  "book-a": {
    note: "The letter A draws itself on the cover, its legs and then its bar.",
    draw: ["p1", "p2"],
    motion: { p1: drawIn("book-a", 450), p2: drawIn("book-a", 250, 380) },
    keyframes: DRAW("book-a"),
  },

  "book-alert": {
    note: "The bar of the mark drops onto the cover, its dot pops under it and the book takes the knock.",
    motion: {
      p1: { animation: run("book-alert", "drop", 450, 0, true) },
      p0: { animation: run("book-alert", "dot", 400, 250, true) },
      ...bookKnock("book-alert", ["p2"], 200),
    },
    keyframes: k("book-alert", "drop", drop) + k("book-alert", "dot", popIn) + k("book-alert", "knock", knock),
  },

  "book-check": {
    note: "The tick draws itself on the cover and the book takes a small knock as it lands.",
    draw: ["p1"],
    motion: { p1: drawIn("book-check", 450, 60), ...bookKnock("book-check", ["p0"], 300) },
    keyframes: DRAW("book-check") + k("book-check", "knock", knock),
  },

  "book-copy": {
    note: "The back book slides out from behind the front one, which lifts a little, and both settle.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("book-copy", "back", 600) })),
      p2: { animation: run("book-copy", "front", 600) },
    },
    keyframes: k("book-copy", "back", nudge(-0.9, 0.9)) + k("book-copy", "front", nudge(0.4, -0.4)),
  },

  "book-dashed": {
    note: "The dashes of the outline dim one after another around the book, marching like a draft.",
    motion: each(["p9", "p2", "p4", "p6", "p5", "p3", "p1", "p10", "p0", "p8", "p7"], (i) => ({ animation: run("book-dashed", "march", 400, i * 45) })),
    keyframes: k("book-dashed", "march", "0%{opacity:1}35%{opacity:.15}100%{opacity:1}"),
  },

  "book-down": {
    note: "The arrow drops out through the page and comes back in from the top.",
    motion: each(["p0", "p2"], () => ({ animation: run("book-down", "through", 650) })),
    keyframes: k("book-down", "through", pass(0, 2.5)),
  },

  "book-headphones": {
    note: "The headphones nod to the beat on the cover, one way and then the other.",
    motion: each(["p1", "p2", "p3"], () => ({ ...vb(12, 11), animation: run("book-headphones", "nod", 800) })),
    keyframes: k("book-headphones", "nod", "0%{transform:none}25%{transform:translateY(-.4px) rotate(-6deg)}50%{transform:none}75%{transform:translateY(-.3px) rotate(5deg)}100%{transform:none}"),
  },

  "book-image": {
    note: "The hill grows up from the foot of the picture and the sun rises over it.",
    motion: {
      p0: { ...vb(15, 17), animation: run("book-image", "hill", 500, 0, true) },
      p2: { animation: run("book-image", "sun", 550, 120, true) },
    },
    keyframes:
      k("book-image", "hill", "0%{transform:scaleY(.3)}60%{transform:scaleY(1.1)}100%{transform:none}") +
      k("book-image", "sun", "0%{transform:translateY(1.5px);opacity:.2}55%{transform:translateY(-.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "book-key": {
    note: "The key turns a full turn on its stem, as in a lock.",
    motion: each(["p1", "p2", "p4"], () => ({ ...vb(17, 7), animation: run("book-key", "turn", 800) })),
    keyframes: k("book-key", "turn", "0%{transform:none}25%{transform:scaleX(.15)}50%{transform:scaleX(-1)}75%{transform:scaleX(.15)}100%{transform:none}"),
  },

  "bookmark-off": off("bookmark-off", "p1", ["p0", "p2"], "The slash strikes through and the ribbon gives a shudder."),

  "bookmark-x": {
    note: "The ribbon stretches down from its top while the cross draws itself on it, one stroke then the other.",
    draw: ["p0", "p2"],
    motion: {
      p1: { origin: "50% 0%", animation: run("bookmark-x", "drop", 600) },
      p2: drawIn("bookmark-x", 300, 80),
      p0: drawIn("bookmark-x", 300, 220),
    },
    keyframes: k("bookmark-x", "drop", "0%{transform:none}35%{transform:scaleY(1.07)}65%{transform:scaleY(.98)}100%{transform:none}") + DRAW("bookmark-x"),
  },

  "book-minus": {
    note: "The minus draws itself across the cover and the book takes a small knock.",
    draw: ["p1"],
    motion: { p1: drawIn("book-minus", 350, 100), ...bookKnock("book-minus", ["p0"]) },
    keyframes: DRAW("book-minus") + k("book-minus", "knock", knock),
  },

  "book-open-text": {
    note: "The open book spreads a little and the lines of text write themselves, left page then right.",
    draw: ["p1", "p2", "p4", "p5"],
    motion: {
      ...each(["p3", "p0"], () => ({ ...vb(12, 21), animation: run("book-open-text", "spread", 600) })),
      p5: drawIn("book-open-text", 300, 60),
      p4: drawIn("book-open-text", 300, 140),
      p2: drawIn("book-open-text", 300, 220),
      p1: drawIn("book-open-text", 300, 300),
    },
    keyframes: k("book-open-text", "spread", "0%{transform:none}35%{transform:scaleX(1.04)}65%{transform:scaleX(.99)}100%{transform:none}") + DRAW("book-open-text"),
  },

  "book-search": {
    note: "The magnifier circles over the book, searching.",
    motion: each(["p3", "p1"], () => ({ animation: run("book-search", "search", 800) })),
    keyframes: k("book-search", "search", search),
  },

  "book-text": {
    note: "The two lines of text write themselves on the cover, the short one first.",
    draw: ["p1", "p2"],
    motion: { p2: drawIn("book-text", 300), p1: drawIn("book-text", 350, 140) },
    keyframes: DRAW("book-text"),
  },

  "book-type": {
    note: "The letter T comes down like a stamp and the book takes the knock.",
    motion: {
      ...each(["p2", "p1", "p0"], () => ({ ...vb(12, 13), animation: run("book-type", "stamp", 500, 0, true) })),
      ...bookKnock("book-type", ["p3"], 220),
    },
    keyframes:
      k("book-type", "stamp", "0%{transform:translateY(-1.6px) scale(1.1);opacity:0}50%{transform:translateY(.3px) scale(.96);opacity:1}100%{transform:none;opacity:1}") +
      k("book-type", "knock", knock),
  },

  "book-up": {
    note: "The arrow rises out through the top of the page and comes back in from below.",
    motion: each(["p0", "p2"], () => ({ animation: run("book-up", "through", 650) })),
    keyframes: k("book-up", "through", pass(0, -2.5)),
  },

  "book-up-2": {
    note: "The arrow pushes up and its head out of the book follows a beat later.",
    motion: {
      ...each(["p0", "p3"], () => ({ animation: run("book-up-2", "rise", 600) })),
      p4: { animation: run("book-up-2", "tip", 600, 80) },
    },
    keyframes: k("book-up-2", "rise", nudge(0, -1.2)) + k("book-up-2", "tip", nudge(0, -0.8)),
  },

  "book-x": {
    note: "The cross draws itself on the cover, one stroke then the other, and the book gives a shake.",
    draw: ["p0", "p2"],
    motion: {
      p2: drawIn("book-x", 300),
      p0: drawIn("book-x", 300, 150),
      p1: { animation: run("book-x", "shake", 500, 380) },
    },
    keyframes: DRAW("book-x") + k("book-x", "shake", jitter(0.5)),
  },

  "bot-off": off("bot-off", "p3", ["p0", "p1", "p2", "p4", "p5", "p6"], "The slash strikes through and the robot head gives a shudder."),

  "bow-arrow": {
    note: "The arrow is drawn back as the bow bends, then it is loosed forward and the bow springs straight.",
    motion: {
      ...each(["p4", "p0", "p3"], () => ({ animation: run("bow-arrow", "loose", 750) })),
      ...each(["p1", "p2"], () => ({ ...vb(11.5, 12.5), animation: run("bow-arrow", "flex", 750) })),
    },
    keyframes:
      k("bow-arrow", "loose", "0%{transform:none}35%{transform:translate(-1.2px,1.2px)}50%{transform:translate(1.4px,-1.4px)}68%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      k("bow-arrow", "flex", "0%{transform:none}35%{transform:scale(.95)}50%{transform:scale(1.03)}70%,100%{transform:none}"),
  },

  "boxes-linked": {
    note: "The links draw themselves from box to box and each box gives a beat as it is reached.",
    draw: ["p4", "p0"],
    motion: {
      ...each(["p5", "p6"], () => ({ ...vb(6, 6.4), animation: run("boxes-linked", "beat", 450) })),
      p4: drawIn("boxes-linked", 450, 80),
      p0: drawIn("boxes-linked", 450, 160),
      ...each(["p2", "p1", "p3"], () => ({ ...vb(18, 17.4), animation: run("boxes-linked", "beat", 450, 420) })),
    },
    keyframes: k("boxes-linked", "beat", pop(1.08)) + DRAW("boxes-linked"),
  },

  "brain-cog": {
    note: "The cog turns a tooth inside the brain, which swells a little as it thinks.",
    motion: {
      ...each(["p14", "p0", "p1", "p2", "p3", "p4", "p5", "p12", "p13"], () => ({ ...vb(12, 12), animation: run("brain-cog", "turn", 800) })),
      ...each(["p6", "p7", "p8", "p9", "p10", "p11"], () => ({ ...vb(12, 12), animation: run("brain-cog", "think", 600, 100) })),
    },
    keyframes: k("brain-cog", "turn", cogTurn) + k("brain-cog", "think", pop(1.03)),
  },

  "brain-off": off("brain-off", "p5", ["p0", "p1", "p2", "p3", "p4", "p6", "p7", "p8", "p9"], "The slash strikes through and the brain gives a shudder."),

  "brick-wall-fire": {
    note: "The flame in front of the wall flickers, stretching up and settling.",
    motion: { p1: { ...vb(17, 22), animation: run("brick-wall-fire", "flame", 800) } },
    keyframes: k(
      "brick-wall-fire",
      "flame",
      "0%{transform:none}20%{transform:scale(.94,1.08)}40%{transform:scale(1.05,.95)}60%{transform:scale(.97,1.05)}80%{transform:scale(1.02,.98)}100%{transform:none}",
    ),
  },

  "brick-wall-shield": {
    note: "The shield pops up in front of the wall, and the courses of bricks behind it give a little.",
    motion: {
      p3: { ...vb(18, 17), animation: run("brick-wall-shield", "guard", 550) },
      ...each(["p4", "p5"], () => ({ animation: run("brick-wall-shield", "bricks", 500, 120) })),
    },
    keyframes:
      k("brick-wall-shield", "guard", "0%{transform:none}35%{transform:scale(1.15)}65%{transform:scale(.96)}100%{transform:none}") +
      k("brick-wall-shield", "bricks", nudge(-0.4, 0)),
  },

  "briefcase-business": {
    note: "The case is lifted by its handle, the handle first and the case a beat behind.",
    motion: {
      p1: { animation: run("briefcase-business", "handle", 600) },
      ...each(["p3", "p2", "p0"], () => ({ animation: run("briefcase-business", "case", 600, 40) })),
    },
    keyframes:
      k("briefcase-business", "handle", "0%{transform:none}30%{transform:translateY(-1.1px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      k("briefcase-business", "case", "0%{transform:none}40%{transform:translateY(-.8px)}70%{transform:translateY(.15px)}100%{transform:none}"),
  },

  "briefcase-conveyor-belt": {
    note: "The case rides in on the belt from the left while the rollers turn under it.",
    motion: {
      ...each(["p6", "p5"], () => ({ animation: run("briefcase-conveyor-belt", "ride", 600, 0, true) })),
      ...each(["p4", "p0", "p1", "p2"], (i) => ({ animation: run("briefcase-conveyor-belt", "roll", 450, i * 50) })),
    },
    keyframes: k("briefcase-conveyor-belt", "ride", slideIn(-2.5, 0)) + k("briefcase-conveyor-belt", "roll", nudge(0.8, 0)),
  },

  "briefcase-plus": {
    note: "The plus spins in beside the case, which takes a small knock.",
    motion: {
      ...each(["p2", "p3"], () => ({ ...vb(19, 17), animation: run("briefcase-plus", "plus", 550, 100, true) })),
      ...each(["p0", "p1"], () => ({ ...vb(12, 20), animation: run("briefcase-plus", "knock", 550) })),
    },
    keyframes: k("briefcase-plus", "plus", spinIn) + k("briefcase-plus", "knock", knock),
  },

  broccoli: {
    note: "The head sways on its stalk and the florets follow.",
    motion: {
      p3: { ...vb(9, 15), animation: run("broccoli", "sway", 700) },
      ...each(["p0", "p2"], () => ({ ...vb(9, 15), animation: run("broccoli", "sway", 700, 50) })),
    },
    keyframes: k("broccoli", "sway", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  "broom-sparkles": {
    note: "The broom sweeps from the top of its handle and the sparkles pop up behind it, one after another.",
    motion: {
      ...each(["p3", "p2", "p7", "p9"], () => ({ ...vb(22, 2), animation: run("broom-sparkles", "sweep", 700) })),
      ...each(["p0", "p1"], () => ({ ...vb(11, 3), animation: run("broom-sparkles", "spark", 450, 150, true) })),
      ...each(["p4", "p5"], () => ({ ...vb(20, 17), animation: run("broom-sparkles", "spark", 450, 250, true) })),
      ...each(["p6", "p8"], () => ({ ...vb(4, 6), animation: run("broom-sparkles", "spark", 450, 350, true) })),
    },
    keyframes: k("broom-sparkles", "sweep", swing(6)) + k("broom-sparkles", "spark", popIn),
  },

  "brush-cleaning": {
    note: "The brush scrubs from side to side, its bristles dragging a beat behind the handle.",
    motion: {
      p1: { animation: run("brush-cleaning", "scrub", 700) },
      ...each(["p2", "p0", "p3"], () => ({ ...vb(12, 14), animation: run("brush-cleaning", "bristles", 700) })),
    },
    keyframes:
      k("brush-cleaning", "scrub", "0%{transform:none}25%{transform:translateX(-1px)}50%{transform:translateX(1px)}75%{transform:translateX(-.5px)}100%{transform:none}") +
      k("brush-cleaning", "bristles", "0%{transform:none}25%{transform:translateX(-1px) skewX(8deg)}50%{transform:translateX(1px) skewX(-8deg)}75%{transform:translateX(-.5px) skewX(4deg)}100%{transform:none}"),
  },

  bubbles: {
    note: "The bubbles rise and bob, the big one first and the small ones after.",
    motion: {
      ...each(["p2", "p0"], () => ({ animation: run("bubbles", "rise", 650) })),
      p1: { animation: run("bubbles", "rise", 650, 100) },
      p3: { animation: run("bubbles", "rise", 650, 200) },
    },
    keyframes: k("bubbles", "rise", "0%{transform:none}35%{transform:translateY(-1px)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "bug-off": off("bug-off", "p4", ["p0", "p1", "p2", "p3", "p5", "p6", "p7", "p8", "p9", "p10", "p11"], "The slash strikes through and the bug gives a shudder."),

  "building-office": {
    note: "The windows light up floor by floor from the bottom and the door opens up.",
    motion: {
      ...each(["p7", "p1", "p4"], () => ({ animation: run("building-office", "light", 400, 0, true) })),
      ...each(["p6", "p0", "p3"], () => ({ animation: run("building-office", "light", 400, 100, true) })),
      ...each(["p8", "p2", "p5"], () => ({ animation: run("building-office", "light", 400, 200, true) })),
      p9: { ...vb(12, 22), animation: run("building-office", "door", 500, 250) },
    },
    keyframes: k("building-office", "light", popIn) + k("building-office", "door", "0%{transform:none}35%{transform:scaleY(1.15)}65%{transform:scaleY(.97)}100%{transform:none}"),
  },

  "building-complex-plus": {
    note: "The plus spins in by the buildings and their windows light up.",
    motion: {
      ...each(["p3", "p5"], () => ({ ...vb(19, 19), animation: run("building-complex-plus", "plus", 550, 0, true) })),
      p2: { animation: run("building-complex-plus", "light", 450, 120, true) },
      p0: { animation: run("building-complex-plus", "light", 450, 220, true) },
    },
    keyframes: k("building-complex-plus", "plus", spinIn) + k("building-complex-plus", "light", "0%{opacity:.1;transform:scaleX(.3)}60%{opacity:1;transform:scaleX(1.12)}100%{opacity:1;transform:none}"),
  },

  "bus-front": {
    note: "The bus sways on its wheels as it pulls up, then settles.",
    motion: each(["p3", "p4", "p1", "p5", "p6", "p0", "p2"], () => ({ ...vb(12, 19), animation: run("bus-front", "sway", 700) })),
    keyframes: k("bus-front", "sway", rock(2.5)),
  },

  "cable-car": {
    note: "The cabin glides up the cable and swings from its hanger, then settles.",
    motion: each(["p4", "p5", "p6", "p7", "p3"], () => ({ ...vb(12, 6.5), animation: run("cable-car", "glide", 800) })),
    keyframes: k(
      "cable-car",
      "glide",
      "0%{transform:none}30%{transform:translate(1px,-.25px) rotate(-5deg)}60%{transform:translate(.6px,-.15px) rotate(3deg)}85%{transform:rotate(-1deg)}100%{transform:none}",
    ),
  },

  "cake-slice": {
    note: "The slice wobbles on the plate and the cherry bounces on top.",
    motion: {
      ...each(["p2", "p0", "p1"], () => ({ ...vb(12, 21), animation: run("cake-slice", "wobble", 600) })),
      p3: { animation: run("cake-slice", "cherry", 650) },
    },
    keyframes:
      k("cake-slice", "wobble", jiggle) +
      k("cake-slice", "cherry", "0%{transform:none}30%{transform:translateY(.3px)}55%{transform:translateY(-1.2px)}80%{transform:translateY(.1px)}100%{transform:none}"),
  },

  "calendar-blank": {
    note: "The rings hop and the page flutters under them.",
    motion: {
      ...rings("calendar-blank", "p0", "p1"),
      ...each(["p2", "p3"], () => ({ ...vb(12, 3), animation: run("calendar-blank", "flutter", 600, 60) })),
    },
    keyframes: ringsKf("calendar-blank") + k("calendar-blank", "flutter", "0%{transform:none}35%{transform:scaleY(.95)}65%{transform:scaleY(1.02)}100%{transform:none}"),
  },

  "calendar-arrow-down": {
    note: "The arrow drops out through the bottom and comes back in from above; the rings hop.",
    motion: { ...rings("calendar-arrow-down", "p5", "p1"), ...each(["p0", "p2"], () => ({ animation: run("calendar-arrow-down", "through", 650) })) },
    keyframes: ringsKf("calendar-arrow-down") + k("calendar-arrow-down", "through", pass(0, 2)),
  },

  "calendar-arrow-left": {
    note: "The arrow leaves to the left and comes back in from the right; the rings hop.",
    motion: { ...rings("calendar-arrow-left", "p5", "p0"), ...each(["p4", "p3"], () => ({ animation: run("calendar-arrow-left", "through", 650) })) },
    keyframes: ringsKf("calendar-arrow-left") + k("calendar-arrow-left", "through", pass(-2, 0)),
  },

  "calendar-arrow-right": {
    note: "The arrow leaves to the right and comes back in from the left; the rings hop.",
    motion: { ...rings("calendar-arrow-right", "p5", "p0"), ...each(["p1", "p3"], () => ({ animation: run("calendar-arrow-right", "through", 650) })) },
    keyframes: ringsKf("calendar-arrow-right") + k("calendar-arrow-right", "through", pass(2, 0)),
  },

  "calendar-arrow-up": {
    note: "The arrow rises out through the top and comes back in from below; the rings hop.",
    motion: { ...rings("calendar-arrow-up", "p5", "p1"), ...each(["p0", "p2"], () => ({ animation: run("calendar-arrow-up", "through", 650) })) },
    keyframes: ringsKf("calendar-arrow-up") + k("calendar-arrow-up", "through", pass(0, -2)),
  },

  "calendar-check-2": {
    note: "The tick draws itself at the corner of the page and the rings hop.",
    draw: ["p6"],
    motion: { ...rings("calendar-check-2", "p10", "p7"), p6: drawIn("calendar-check-2", 420, 80) },
    keyframes: ringsKf("calendar-check-2") + DRAW("calendar-check-2"),
  },

  "calendar-chevrons-left": {
    note: "The chevrons step back to the left one after the other; the rings hop.",
    motion: {
      ...rings("calendar-chevrons-left", "p5", "p1"),
      p4: { animation: run("calendar-chevrons-left", "step", 550) },
      p0: { animation: run("calendar-chevrons-left", "step", 550, 80) },
    },
    keyframes: ringsKf("calendar-chevrons-left") + k("calendar-chevrons-left", "step", nudge(-1, 0)),
  },

  "calendar-chevrons-right": {
    note: "The chevrons step ahead to the right one after the other; the rings hop.",
    motion: {
      ...rings("calendar-chevrons-right", "p5", "p1"),
      p2: { animation: run("calendar-chevrons-right", "step", 550) },
      p0: { animation: run("calendar-chevrons-right", "step", 550, 80) },
    },
    keyframes: ringsKf("calendar-chevrons-right") + k("calendar-chevrons-right", "step", nudge(1, 0)),
  },

  "calendar-cog": {
    note: "The cog turns a tooth at the corner of the page and the rings hop.",
    motion: {
      ...rings("calendar-cog", "p11", "p2"),
      ...each(["p12", "p0", "p1", "p3", "p4", "p5", "p6", "p7", "p8"], () => ({ ...vb(18, 18), animation: run("calendar-cog", "turn", 800) })),
    },
    keyframes: ringsKf("calendar-cog") + k("calendar-cog", "turn", cogTurn),
  },

  "calendar-fold": {
    note: "The rings hop and the page lifts at its folded corner and settles.",
    motion: {
      ...rings("calendar-fold", "p3", "p0"),
      ...each(["p1", "p2"], () => ({ ...vb(3, 21), animation: run("calendar-fold", "lift", 600, 60) })),
    },
    keyframes: ringsKf("calendar-fold") + k("calendar-fold", "lift", "0%{transform:none}35%{transform:rotate(-2.5deg)}65%{transform:rotate(.8deg)}100%{transform:none}"),
  },

  "calendar-minus": {
    note: "The minus draws itself at the corner of the page and the rings hop.",
    draw: ["p0"],
    motion: { ...rings("calendar-minus", "p4", "p1"), p0: drawIn("calendar-minus", 350, 80) },
    keyframes: ringsKf("calendar-minus") + DRAW("calendar-minus"),
  },

  "calendar-minus-2": {
    note: "The minus draws itself on the page and the rings hop.",
    draw: ["p4"],
    motion: { ...rings("calendar-minus-2", "p0", "p1"), p4: drawIn("calendar-minus-2", 350, 80) },
    keyframes: ringsKf("calendar-minus-2") + DRAW("calendar-minus-2"),
  },

  "calendar-off": off("calendar-off", "p1", ["p0", "p2", "p3", "p4", "p5"], "The slash strikes through and the calendar gives a shudder."),

  "calendar-plus-2": {
    note: "The plus on the page turns a quarter and the rings hop.",
    motion: {
      ...rings("calendar-plus-2", "p0", "p1"),
      ...each(["p4", "p5"], () => ({ ...vb(12, 15), animation: run("calendar-plus-2", "plus", 600) })),
    },
    keyframes: ringsKf("calendar-plus-2") + k("calendar-plus-2", "plus", plusTurn),
  },

  calendars: {
    note: "The back calendar slides out from behind and the rings of the front one hop.",
    motion: {
      ...rings("calendars", "p0", "p2"),
      ...each(["p1", "p3"], () => ({ animation: run("calendars", "back", 600) })),
    },
    keyframes: ringsKf("calendars") + k("calendars", "back", nudge(-0.8, 0.8)),
  },

  "calendar-x-2": {
    note: "The cross draws itself at the corner, one stroke then the other; the rings hop.",
    draw: ["p1", "p2"],
    motion: { ...rings("calendar-x-2", "p5", "p0"), p1: drawIn("calendar-x-2", 300, 80), p2: drawIn("calendar-x-2", 300, 220) },
    keyframes: ringsKf("calendar-x-2") + DRAW("calendar-x-2"),
  },

  can: {
    note: "The can rocks on its bottom rim and its lid follows a beat behind.",
    motion: {
      ...each(["p0", "p3"], () => ({ ...vb(12, 21), animation: run("can", "rock", 700) })),
      ...each(["p1", "p2"], () => ({ ...vb(12, 21), animation: run("can", "rock", 700, 40) })),
    },
    keyframes: k("can", "rock", rock(5)),
  },

  "candy-cane": {
    note: "The cane swings from its hook like one hung on a tree.",
    motion: each(["p3", "p0", "p1", "p2", "p4"], () => ({ ...vb(15.5, 3.5), animation: run("candy-cane", "swing", 800) })),
    keyframes: k("candy-cane", "swing", swing(8)),
  },

  "candy-off": off("candy-off", "p5", ["p0", "p1", "p2", "p3", "p4", "p6"], "The slash strikes through and the sweet gives a shudder."),

  cannabis: {
    note: "The leaf sways on its stem.",
    motion: { p1: { ...vb(12, 18), animation: run("cannabis", "sway", 800) } },
    keyframes: k("cannabis", "sway", swing(6)),
  },

  "cannabis-off": off("cannabis-off", "p3", ["p0", "p1", "p2", "p4", "p5"], "The slash strikes through and the leaf gives a shudder."),

  "can-soda": {
    note: "The can is shaken and its bands shiver upward as it fizzes.",
    motion: {
      ...each(["p0", "p5", "p1", "p2"], () => ({ ...vb(12, 22), animation: run("can-soda", "shake", 650) })),
      ...each(["p3", "p4"], () => ({ ...vb(12, 22), animation: run("can-soda", "fizz", 650) })),
    },
    keyframes:
      k("can-soda", "shake", shake(3)) +
      k("can-soda", "fizz", "0%{transform:none}15%{transform:rotate(-3deg) translateY(-.4px)}30%{transform:rotate(3deg)}45%{transform:rotate(-2.1deg) translateY(-.3px)}60%{transform:rotate(1.5deg)}75%{transform:rotate(-.75deg)}100%{transform:none}"),
  },

  "car-front": {
    note: "The car sways on its wheels as it pulls up, then settles.",
    motion: each(["p3", "p1", "p2", "p0"], () => ({ ...vb(12, 18), animation: run("car-front", "sway", 700) })),
    keyframes: k("car-front", "sway", rock(2.5)),
  },

  carton: {
    note: "The carton rocks on its bottom and its fold line draws itself across.",
    draw: ["p1"],
    motion: {
      p0: { ...vb(12, 22), animation: run("carton", "rock", 650) },
      p1: { ...vb(12, 22), from: { strokeDasharray: 1 }, animation: `${run("carton", "rock", 650)}, ${run("carton", "draw", 350, 300, true)}` },
    },
    keyframes: k("carton", "rock", rock(4)) + DRAW("carton"),
  },

  "carton-off": off("carton-off", "p4", ["p0", "p1", "p2", "p3", "p5"], "The slash strikes through and the carton gives a shudder."),

  "cctv-off": off("cctv-off", "p3", ["p0", "p1", "p2", "p4", "p5"], "The slash strikes through and the camera gives a shudder."),

  "chart-bar-stacked": {
    note: "The stacked bars grow out from the axis, the long one first.",
    motion: {
      ...each(["p4", "p1"], () => ({ ...vb(7, 7), animation: run("chart-bar-stacked", "grow", 500, 0, true) })),
      ...each(["p3", "p0"], () => ({ ...vb(7, 15), animation: run("chart-bar-stacked", "grow", 500, 100, true) })),
    },
    keyframes: k("chart-bar-stacked", "grow", grow("X")),
  },

  "chart-bell-curve": {
    note: "The bell curve draws itself across the chart, up over its peak and down.",
    draw: ["p1"],
    motion: { p1: drawIn("chart-bell-curve", 650) },
    keyframes: DRAW("chart-bell-curve"),
  },

  "chart-column-decreasing": {
    note: "The columns grow up from the axis, tallest first.",
    motion: {
      p3: { ...vb(8, 17), animation: run("chart-column-decreasing", "grow", 500, 0, true) },
      p0: { ...vb(13, 17), animation: run("chart-column-decreasing", "grow", 500, 90, true) },
      p1: { ...vb(18, 17), animation: run("chart-column-decreasing", "grow", 500, 180, true) },
    },
    keyframes: k("chart-column-decreasing", "grow", grow("Y")),
  },

  "chart-no-axes-column-decreasing": {
    note: "The bars grow up from the ground, tallest first.",
    motion: {
      p0: { ...vb(5, 21), animation: run("chart-no-axes-column-decreasing", "grow", 500, 0, true) },
      p1: { ...vb(12, 21), animation: run("chart-no-axes-column-decreasing", "grow", 500, 90, true) },
      p2: { ...vb(19, 21), animation: run("chart-no-axes-column-decreasing", "grow", 500, 180, true) },
    },
    keyframes: k("chart-no-axes-column-decreasing", "grow", grow("Y")),
  },

  "chart-no-axes-combined": {
    note: "The bars grow up one after another and the trend line draws itself over them.",
    draw: ["p3"],
    motion: {
      ...each(["p4", "p5", "p0", "p1", "p2"], (i) => ({ ...vb([4, 8, 12, 16, 20][i], 21), animation: run("chart-no-axes-combined", "grow", 450, i * 60, true) })),
      p3: drawIn("chart-no-axes-combined", 500, 200, true),
    },
    keyframes: k("chart-no-axes-combined", "grow", grow("Y")) + UNDRAW("chart-no-axes-combined"),
  },

  "chart-no-axes-gantt": {
    note: "The task bars slide in along the timeline, one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ animation: run("chart-no-axes-gantt", "in", 500, i * 90, true) })),
    keyframes: k("chart-no-axes-gantt", "in", slideIn(-3, 0)),
  },

  "chart-quadrant": {
    note: "The dividing lines draw themselves and a dot pops into each quarter in turn.",
    draw: ["p0", "p1"],
    motion: {
      p0: drawIn("chart-quadrant", 400),
      p1: drawIn("chart-quadrant", 400, 60),
      ...each(["p6", "p3", "p4", "p5"], (i) => ({ animation: run("chart-quadrant", "dot", 400, 250 + i * 70, true) })),
    },
    keyframes: DRAW("chart-quadrant") + k("chart-quadrant", "dot", popIn),
  },

  "circle-check-big": {
    note: "The circle presses in and the tick draws itself out through its gap.",
    draw: ["p1"],
    motion: { p0: { ...vb(12, 12), animation: run("circle-check-big", "press", 450) }, p1: drawIn("circle-check-big", 400, 90) },
    keyframes: k("circle-check-big", "press", press) + DRAW("circle-check-big"),
  },

  "circle-check": {
    note: "The circle presses in and the tick draws itself inside it.",
    draw: ["p1"],
    motion: { p0: { ...vb(12, 12), animation: run("circle-check", "press", 450) }, p1: drawIn("circle-check", 400, 90) },
    keyframes: k("circle-check", "press", press) + DRAW("circle-check"),
  },

  "check-line": {
    note: "The tick draws itself, short stroke then long, and the line underlines it.",
    draw: ["p0", "p1", "p2"],
    motion: { p2: drawIn("check-line", 200, 0, true), p0: drawIn("check-line", 300, 180, true), p1: drawIn("check-line", 350, 380, true) },
    keyframes: UNDRAW("check-line"),
  },

  "square-check-big": {
    note: "The box presses in and the tick draws itself out through its open corner.",
    draw: ["p1"],
    motion: { p0: { ...vb(12, 12), animation: run("square-check-big", "press", 450) }, p1: drawIn("square-check-big", 400, 90) },
    keyframes: k("square-check-big", "press", press) + DRAW("square-check-big"),
  },

  cheese: {
    note: "The wedge wobbles on its foot and its hole stretches with it.",
    motion: {
      ...each(["p1", "p2", "p3"], () => ({ ...vb(12, 21), animation: run("cheese", "wobble", 600) })),
      p0: { animation: run("cheese", "hole", 600, 80) },
    },
    keyframes: k("cheese", "wobble", jiggle) + k("cheese", "hole", pop(1.15)),
  },

  "chess-bishop": {
    note: "The bishop hops diagonally off its base, tilting, and lands back on it.",
    motion: {
      ...each(["p1", "p2", "p3"], () => ({ ...vb(12, 18), animation: run("chess-bishop", "hop", 700) })),
      p0: { origin: "50% 100%", animation: run("chess-bishop", "base", 700) },
    },
    keyframes:
      k("chess-bishop", "hop", "0%{transform:none}35%{transform:translate(.8px,-1.4px) rotate(5deg)}65%{transform:translate(0,.2px) rotate(-1deg)}100%{transform:none}") +
      k("chess-bishop", "base", squash),
  },

  "chess-king": {
    note: "The king hops off its base and lands back on it, its cross wobbling on top.",
    motion: {
      p1: { animation: run("chess-king", "hop", 700) },
      ...each(["p2", "p3"], () => ({ ...vb(12, 8), animation: run("chess-king", "cross", 700) })),
      p0: { origin: "50% 100%", animation: run("chess-king", "base", 700) },
    },
    keyframes:
      k("chess-king", "hop", hop) +
      k("chess-king", "cross", "0%{transform:none}35%{transform:translateY(-1.3px) rotate(-8deg)}65%{transform:translateY(.2px) rotate(4deg)}100%{transform:none}") +
      k("chess-king", "base", squash),
  },

  "chess-pawn": {
    note: "The pawn hops a step off its base and lands back on it.",
    motion: {
      ...each(["p1", "p2", "p3", "p4"], () => ({ animation: run("chess-pawn", "hop", 650) })),
      p0: { origin: "50% 100%", animation: run("chess-pawn", "base", 650) },
    },
    keyframes: k("chess-pawn", "hop", hop) + k("chess-pawn", "base", squash),
  },
};

const BATTERY = "M4 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z";
const BOOK = "M6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z";
const FRAME = "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z";
const CARTON = "M9 2h6a1 1 0 0 1 1 1v3l2.461 2.633A2 2 0 0 1 19 10v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 .539-1.367L8 6V3a1 1 0 0 1 1-1Z";

export const fills: Record<string, string> = {
  // the cell, which the source draws in two pieces around the plus
  "battery-plus": BATTERY,
  // the whole thing the slash breaks (the same shape as the icon without the slash)
  "bean-off": "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
  "beef-off": "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3Z",
  "beer-off": "M5 8h12v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z",
  "bookmark-off": "M7 3h10a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2Z",
  "bot-off": "M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z",
  "bug-off": "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4Z",
  "calendar-off": FRAME,
  "candy-off": "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07Z",
  "cannabis-off":
    "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6Z",
  "carton-off": CARTON,
  "cctv-off": "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",
  // the bell, cut across where the source leaves room for the tick or the minus
  "bell-check": "M16.861 4.482A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.531-.548-1.075-1.109-1.537-1.873L17 12.9A2.9 2.9 0 0 1 14.95 12.05L12.95 10.05A2.9 2.9 0 0 1 14.5 5.14Z",
  "bell-minus": "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12L15 10.9A2.9 2.9 0 0 1 14.01 5.275Z",
  // the house under its roof, with the round door cut out
  birdhouse: "M7 18 5.044 6.532 10.82 2.385a2 2 0 0 1 2.36 0l5.776 4.147L17 18Z",
  // the jar on the base
  blender: "M7 2h10l-1 12H8.006Z",
  // the book around the mark on its cover
  "book-a": BOOK,
  "book-alert": BOOK,
  "book-check": BOOK,
  "book-down": BOOK,
  "book-headphones": BOOK,
  "book-image": BOOK,
  "book-minus": BOOK,
  "book-text": BOOK,
  "book-type": BOOK,
  "book-up": BOOK,
  "book-x": BOOK,
  // the front book of the pair
  "book-copy": "M11 2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
  // the book, cut around the key, the lens or the arrow that the source leaves room for
  "book-key": "M6.5 2H13V7.26A4.85 4.85 0 0 0 16.48 14.82L20 15.2V21a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z",
  "book-search": "M5.5 2H18a1 1 0 0 1 1 1v8L14.95 12.52A5.85 5.85 0 0 0 11.15 17.79L11 22H5.5A2.5 2.5 0 0 1 3 19.5v-15A2.5 2.5 0 0 1 5.5 2Z",
  "book-up-2": "M6.5 2 6.2 5A2.8 2.8 0 0 0 10.98 6.98L12 5.96 13.02 6.98A2.8 2.8 0 0 0 17.8 5V2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z",
  // the wall, cut around the flame or the shield in front of it
  "brick-wall-fire": "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938L9 16 10.2 13.5 11.6 10.6 12.66 8.48 14.52 6.75 17 5.94 19.39 7.09Z",
  "brick-wall-shield": "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75L10.98 17 10.99 15.12 11.12 13.03 12.29 11.29 14.25 10.5 16.01 9.58 18 9 19.99 9.58Z",
  // the case, cut around the plus
  "briefcase-plus": "M13.354 20H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.354L19 11.15A2.85 2.85 0 0 0 16.15 14L16 14.15A2.85 2.85 0 0 0 13.15 17Z",
  // the tower and its wings, cut around the plus
  "building-complex-plus": "M4 10h2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v4.355L19 13.15A2.85 2.85 0 0 0 16.15 16L16 16.15A2.85 2.85 0 0 0 13.15 19L12.535 21H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z",
  // the slice, closed under the cherry
  "cake-slice":
    "M7.2 7.9 3.812 10.4A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6 12 9 9 10.8 6 9.5Z",
  // the page, cut around the arrow, tick, chevrons, cog, minus or cross at its corner
  "calendar-arrow-down": "M12.343 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.354L18 10.15A2.85 2.85 0 0 0 15.15 13V14.39A2.85 2.85 0 0 0 11.985 19.015Z",
  "calendar-arrow-up": "M14 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.343L18 10.15A2.85 2.85 0 0 0 15.985 10.985L11.985 14.985A2.85 2.85 0 0 0 11.985 19.015Z",
  "calendar-arrow-left": "M3 12.34V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7.35L11.84 18.19A2.85 2.85 0 0 0 9 15.15H8.846A2.85 2.85 0 0 0 3.985 12.985Z",
  "calendar-arrow-right": "M21 12.34V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35L12.16 18.19A2.85 2.85 0 0 1 15 15.15H15.154A2.85 2.85 0 0 1 20.015 12.985Z",
  "calendar-check-2": "M5 3h14a2 2 0 0 1 2 2v8l-4.5 1.5-3 3-1 3.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  "calendar-chevrons-left": "M3 11.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4L13.015 18.985 12.03 18 13.015 17.015A2.85 2.85 0 0 0 11 12.15Z",
  "calendar-chevrons-right": "M21 11.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4L10.985 18.985 11.97 18 10.985 17.015A2.85 2.85 0 0 1 13 12.15Z",
  "calendar-cog": "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5L20.544 11.64A6.85 6.85 0 0 0 11.64 20.544Z",
  "calendar-minus": "M13.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9L16 15.15A2.85 2.85 0 0 0 13.15 18Z",
  "calendar-x-2": "M13 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7L17 13.15A2.85 2.85 0 0 0 14.15 16V18.5Z",
  // the page with its folded corner
  "calendar-fold": "M5 3h14a2 2 0 0 1 2 2v10a2.4 2.4 0 0 1-.706 1.706l-3.588 3.588A2.4 2.4 0 0 1 15 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  // the can between its rims
  "can-soda": "M7 2h10l1.664 2.496a2 2 0 0 1 .336 1.11v12.788a2 2 0 0 1-.336 1.11L17 22H7l-1.664-2.496A2 2 0 0 1 5 18.394V5.606a2 2 0 0 1 .336-1.11Z",
  carton: CARTON,
  // the pieces, closed across their foot where they meet the base
  "chess-bishop": "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18Z",
  "chess-king":
    "M6.7 18l-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1Z",
  "chess-pawn": "M9.5 10h5l1.5 8H8Z",
  // the circle and the box, which the source leaves open where the tick runs out
  "circle-check-big": "M12 2a10 10 0 1 1 0 20a10 10 0 0 1 0-20Z",
  "square-check-big": FRAME,
};
