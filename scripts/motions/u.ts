import type { Entry, Override } from "./types";

/** Batch u: its icons (pnpm import-icons u) and their motions. */
export const list: Entry[] = [
  ["SquarePower", "square-power", "Power in a square", "actions", "pop", ["power", "on", "off", "switch", "button"], "The power line drops in and the arc draws."],
  ["Printer3d", "printer-3d", "3D printer", "devices", "pulse", ["3d", "printer", "print", "maker", "fabricate"], "The nozzle moves across and lays a layer."],
  ["PrinterCheck", "printer-check", "Printed", "devices", "draw", ["print", "printed", "done", "printer"], "The tick draws in as the printer settles."],
  ["PrinterX", "printer-x", "Print failed", "devices", "shake", ["print", "error", "failed", "printer"], "The printer jams and the cross draws in."],
  ["Pyramid", "pyramid", "Pyramid", "shapes", "pop", ["pyramid", "shape", "3d", "egypt", "triangle"], "The pyramid rises and its edge draws."],
  ["QuestionMark", "question-mark", "Question mark", "status", "wiggle", ["question", "help", "unknown", "ask"], "The hook nods and the dot drops."],
  ["Radical", "radical-sign", "Root sign", "text", "draw", ["root", "math", "radical", "formula"], "The root sign writes itself."],
  ["RadioOff", "radio-off", "Off air", "media", "shake", ["broadcast", "offline", "live", "off"], "The waves fade and the slash crosses it out."],
  ["Radius", "radius", "Radius", "shapes", "spin", ["radius", "circle", "measure", "geometry"], "The radius sweeps around the circle."],
  ["Rat", "rat", "Rat", "nature", "wiggle", ["rat", "mouse", "rodent", "animal", "pest"], "The tail flicks and the rat scurries."],
  ["Ratio", "ratio", "Ratio", "shapes", "pop", ["ratio", "aspect", "proportion", "screen"], "The two frames trade sizes."],
  ["ReceiptCent", "receipt-cent", "Receipt in cents", "commerce", "nudge-up", ["receipt", "cent", "dollar", "bill"], "It prints and the cent sign writes."],
  ["ReceiptEuro", "receipt-euro", "Receipt in euros", "commerce", "nudge-up", ["receipt", "euro", "bill", "invoice"], "It prints and the euro sign writes."],
  ["ReceiptIndianRupee", "receipt-indian-rupee", "Receipt in rupees", "commerce", "nudge-up", ["receipt", "rupee", "inr", "bill"], "It prints and the rupee sign writes."],
  ["ReceiptJapaneseYen", "receipt-japanese-yen", "Receipt in yen", "commerce", "nudge-up", ["receipt", "yen", "jpy", "bill"], "It prints and the yen sign writes."],
  ["ReceiptPoundSterling", "receipt-pound-sterling", "Receipt in pounds", "commerce", "nudge-up", ["receipt", "pound", "gbp", "bill"], "It prints and the pound sign writes."],
  ["ReceiptRussianRuble", "receipt-russian-ruble", "Receipt in rubles", "commerce", "nudge-up", ["receipt", "ruble", "rub", "bill"], "It prints and the ruble sign writes."],
  ["ReceiptSwissFranc", "receipt-swiss-franc", "Receipt in francs", "commerce", "nudge-up", ["receipt", "franc", "chf", "bill"], "It prints and the franc sign writes."],
  ["ReceiptTurkishLira", "receipt-turkish-lira", "Receipt in lira", "commerce", "nudge-up", ["receipt", "lira", "try", "bill"], "It prints and the lira sign writes."],
  ["RectangleCircle", "rectangle-circle", "Rectangle with circle", "shapes", "pop", ["shape", "rectangle", "circle", "pill"], "The circle rolls along the rectangle."],
  ["RectangleGoggles", "rectangle-goggles", "VR headset", "devices", "float", ["vr", "goggles", "headset", "virtual reality"], "The goggles tilt as they look around."],
  ["RectangleHorizontal", "rectangle-horizontal", "Wide rectangle", "shapes", "pop", ["rectangle", "landscape", "shape", "wide"], "It stretches wide and settles."],
  ["RectangleVertical", "rectangle-vertical", "Tall rectangle", "shapes", "pop", ["rectangle", "portrait", "shape", "tall"], "It stretches tall and settles."],
  ["Redo2", "redo-2", "Redo (hooked)", "actions", "nudge-right", ["redo", "again", "forward", "repeat"], "The arrow swings forward."],
  ["RedoDot", "redo-dot", "Redo to point", "actions", "nudge-right", ["redo", "forward", "step", "again"], "The arrow swings forward over the dot."],
  ["RefreshCcw", "refresh-ccw", "Refresh back", "actions", "spin-back", ["refresh", "reload", "sync", "update"], "The arrows turn back around."],
  ["RefreshCcwDot", "refresh-ccw-dot", "Refresh around point", "actions", "spin-back", ["refresh", "reload", "sync", "origin"], "The arrows turn around the dot."],
  ["RefreshCw", "refresh-cw", "Refresh", "actions", "spin", ["refresh", "reload", "sync", "update"], "The arrows turn around."],
  ["RepeatOff", "repeat-off", "Repeat off", "media", "shake", ["repeat", "loop", "off", "once"], "The slash crosses the loop out."],
  ["Road", "road", "Road", "travel", "nudge-down", ["road", "street", "highway", "drive"], "The lane marks run down the road."],
  ["RobotArm", "robot-arm", "Robot arm", "development", "swing", ["robot", "arm", "industry", "automation"], "The arm swings and the gripper nods."],
  ["RobotVacuum", "robot-vacuum", "Robot vacuum", "devices", "spin", ["vacuum", "robot", "cleaning", "home"], "It turns and its sensor blinks."],
  ["RockingChair", "rocking-chair", "Rocking chair", "app", "swing", ["chair", "rocking", "relax", "furniture"], "It rocks on its runners."],
  ["RollerCoaster", "roller-coaster", "Roller coaster", "travel", "bounce", ["ride", "theme park", "fun", "coaster"], "The track draws itself over the hill."],
  ["RotateCcwKey", "rotate-ccw-key", "Reset key", "status", "spin-back", ["key", "reset", "rotate", "password"], "The arrow turns back and the key turns."],
  ["RotateCcwSquare", "rotate-ccw-square", "Rotate left", "actions", "spin-back", ["rotate", "left", "turn", "orientation"], "The square turns back."],
  ["RotateCwClock", "rotate-cw-clock", "Later", "app", "spin", ["later", "time", "clock", "rotate"], "The arrow turns and the hands sweep."],
  ["RotateCwFadingClock", "rotate-cw-fading-clock", "Time passing", "app", "spin", ["time", "clock", "history", "rotate"], "The trail fades in as the hands sweep."],
  ["RotateCwSquare", "rotate-cw-square", "Rotate right", "actions", "spin", ["rotate", "right", "turn", "orientation"], "The square turns forward."],
  ["RouteArrowRight", "route-arrow-right", "Route ahead", "travel", "draw", ["route", "path", "directions", "next"], "The path draws to the arrow."],
  ["RouteOff", "route-off", "No route", "travel", "shake", ["route", "path", "off", "unavailable"], "The path draws and the slash crosses it out."],
  ["Rows4", "rows-4", "Four rows", "app", "pop", ["rows", "layout", "table", "list"], "The rows slide in one by one."],
  ["RugbyBall", "rugby-ball", "Rugby ball", "app", "spin", ["rugby", "football", "sport", "ball"], "The ball spins in the air."],
  ["RulerDimensionLine", "ruler-dimension-line", "Dimension", "development", "draw", ["measure", "ruler", "dimension", "size"], "The dimension line stretches out."],
  ["RussianRuble", "russian-ruble", "Ruble", "commerce", "draw", ["money", "currency", "ruble", "rub"], "The sign writes itself."],
  ["SaudiRiyal", "saudi-riyal", "Riyal", "commerce", "draw", ["money", "currency", "riyal", "sar"], "The sign writes itself."],
  ["SaveCheck", "save-check", "Saved", "actions", "draw", ["save", "saved", "done", "disk"], "The disk settles and the tick draws in."],
  ["SaveOff", "save-off", "Not saved", "actions", "shake", ["save", "unsaved", "off", "disk"], "The slash crosses the disk out."],
  ["SavePen", "save-pen", "Save as", "actions", "wiggle", ["save as", "rename", "edit", "disk"], "The pen writes on the disk."],
  ["SavePlus", "save-plus", "Save new", "actions", "pop", ["save", "new", "add", "disk"], "The plus draws in."],
  ["Scale3d", "scale-3d", "Scale in 3D", "shapes", "pop", ["scale", "3d", "resize", "transform"], "The axes stretch out from the corner."],
  ["ScanBox", "scan-box", "Scan object", "actions", "pop", ["scan", "3d", "object", "ar"], "The corners close in on the box."],
  ["ScanEye", "scan-eye", "Look", "actions", "blink", ["scan", "view", "eye", "preview"], "The corners close in and the eye blinks."],
  ["ScanHeart", "scan-heart", "Health scan", "health", "pulse", ["scan", "heart", "health", "monitor"], "The corners close in and the heart beats."],
  ["ScanSquare", "scan-square", "Scan area", "actions", "pop", ["scan", "area", "select", "focus"], "The corners close in on the square."],
  ["University", "university", "University", "travel", "pop", ["university", "college", "education", "campus"], "The roof hops and the columns rise."],
  ["SquareScissors", "square-scissors", "Cut in a square", "actions", "wiggle", ["cut", "scissors", "clip", "trim"], "The blades snip."],
  ["SquareBottomDashedScissors", "square-bottom-dashed-scissors", "Cut along a line", "actions", "wiggle", ["cut", "coupon", "scissors", "dashed"], "The blades snip along the dashes."],
  ["Scooter", "scooter", "Scooter", "travel", "nudge-right", ["scooter", "kick", "ride", "commute"], "The scooter rolls ahead."],
  ["ScratchBlocks", "scratch-blocks", "Code blocks", "development", "pop", ["blocks", "code", "scratch", "visual"], "The blocks snap together."],
  ["Screw", "screw", "Screw", "development", "spin", ["screw", "fix", "hardware", "build"], "It turns in."],
  ["Scroll", "scroll-blank", "Blank scroll", "text", "nudge-down", ["scroll", "parchment", "paper", "document"], "It unrolls."],
  ["Search", "search-lens", "Magnifier", "actions", "pop", ["search", "find", "magnifier", "look"], "The lens circles as it looks."],
  ["SearchAlert", "search-alert", "Search warning", "status", "shake", ["search", "warning", "alert", "problem"], "The lens shakes and the mark drops in."],
  ["SearchSlash", "search-slash", "Search off", "status", "shake", ["search", "off", "disabled", "none"], "The slash crosses the lens."],
  ["Section", "section", "Section", "text", "draw", ["section", "paragraph", "law", "sign"], "The sign writes itself."],
  ["Send", "send-plane", "Paper plane", "communication", "launch", ["send", "message", "plane", "email"], "The plane takes off and comes back."],
  ["SeparatorVertical", "separator-vertical", "Vertical separator", "text", "pop", ["separator", "divider", "split", "column"], "The arrows push apart."],
  ["ServerNas", "server-nas", "NAS", "development", "pop", ["nas", "storage", "server", "network"], "The drive lights blink in turn."],
  ["ServerPlus", "server-plus", "Add server", "development", "pop", ["server", "add", "new", "host"], "The plus draws in."],
  ["Settings", "settings-cog", "Cog", "actions", "spin-90", ["settings", "cog", "gear", "preferences"], "The cog turns."],
  ["Shell", "shell", "Shell", "nature", "wiggle", ["shell", "beach", "sea", "snail"], "The shell rocks on the sand."],
  ["ShelvingUnit", "shelving-unit", "Shelves", "app", "bounce", ["shelves", "storage", "boxes", "warehouse"], "The boxes drop onto the shelves."],
  ["ShieldCogCorner", "shield-cog-corner", "Security options", "status", "spin-90", ["security", "settings", "shield", "config"], "The cog turns by the shield."],
  ["ShieldEllipsis", "shield-ellipsis", "Checking security", "status", "wave", ["security", "pending", "checking", "shield"], "The dots hop in turn."],
  ["ShieldHouse", "shield-house", "Home security", "status", "pop", ["home", "security", "insurance", "shield"], "The shield lifts and the house settles."],
  ["ShieldKeyhole", "shield-keyhole", "Secured", "status", "pop", ["lock", "security", "keyhole", "shield"], "The keyhole turns."],
  ["ShipCargo", "ship-cargo", "Cargo ship", "travel", "float", ["ship", "cargo", "freight", "shipping"], "The ship rocks on the waves."],
  ["ShrimpOff", "shrimp-off", "No shellfish", "food", "shake", ["shrimp", "allergy", "shellfish", "off"], "The slash crosses it out."],
  ["SquareSigma", "square-sigma", "Sum in a square", "text", "draw", ["sum", "sigma", "math", "total"], "The sigma writes itself."],
  ["SignalHigh", "signal-high", "Strong signal", "status", "pulse", ["signal", "bars", "reception", "strong"], "The bars rise one after another."],
  ["SignalLow", "signal-low", "Weak signal", "status", "pulse", ["signal", "bars", "reception", "weak"], "The bars rise one after another."],
  ["SignalMedium", "signal-medium", "Fair signal", "status", "pulse", ["signal", "bars", "reception", "medium"], "The bars rise one after another."],
  ["SignalZero", "signal-zero", "No signal", "status", "blink", ["signal", "none", "reception", "offline"], "The dot blinks, looking for signal."],
  ["SignpostBig", "signpost-big", "Big signpost", "navigation", "swing", ["sign", "direction", "road", "way"], "The signs swing on the post."],
  ["SirenOff", "siren-off", "Siren off", "status", "shake", ["siren", "alarm", "off", "silent"], "The slash crosses the siren out."],
  ["Slash", "slash", "Slash", "text", "draw", ["slash", "divide", "or", "separator"], "The slash draws itself."],
  ["SquareSlash", "square-slash", "Slash in a square", "text", "draw", ["slash", "divide", "disabled", "none"], "The slash draws itself."],
  ["SlidersVertical", "sliders-vertical", "Adjust (vertical)", "actions", "wiggle", ["settings", "adjust", "controls", "equalizer"], "The sliders shift."],
  ["SmartphoneUserRound", "smartphone-user", "Phone contact", "devices", "wiggle", ["phone", "contact", "profile", "account"], "The person nods on the screen."],
  ["Sparkles", "sparkles-stars", "Stars", "media", "pulse", ["sparkles", "magic", "ai", "new", "stars"], "The stars twinkle in turn."],
  ["SpellCheck2", "spell-check-2", "Spelling", "text", "draw", ["spelling", "check", "grammar", "typo"], "The squiggle writes under the letters."],
  ["SquareSplitVertical", "square-split-vertical", "Split view (stacked)", "app", "pop", ["split", "view", "panes", "stacked"], "The two panes push apart."],
  ["SquareArrowDownEnter", "square-arrow-down-enter", "Enter down", "navigation", "nudge-down", ["enter", "down", "arrow", "in"], "The arrow drops into the box."],
  ["SquareArrowDownExit", "square-arrow-down-exit", "Exit down", "navigation", "nudge-down", ["exit", "down", "arrow", "out"], "The arrow drops out of the box."],
  ["SquareArrowDownLeftEnter", "square-arrow-down-left-enter", "Enter down left", "navigation", "nudge-left", ["enter", "arrow", "down left", "in"], "The arrow drops into the box."],
  ["SquareArrowDownRightEnter", "square-arrow-down-right-enter", "Enter down right", "navigation", "nudge-right", ["enter", "arrow", "down right", "in"], "The arrow drops into the box."],
  ["SquareArrowLeftEnter", "square-arrow-left-enter", "Enter left", "navigation", "nudge-left", ["enter", "left", "arrow", "in"], "The arrow slides into the box."],
];

/** no overshoot: every keyframe here carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** an animation of the icon's own keyframes `ki-<icon>-<name>` (backwards: a delayed part waits at its first frame) */
const an = (icon: string, name: string, ms: number, delay = 0) => `ki-${icon}-${name} ${ms}ms ${SMOOTH} ${delay}ms backwards`;
const play = (icon: string, name: string, ms: number, delay = 0, extra: object = {}) => ({ ...extra, animation: an(icon, name, ms, delay) });
/** a stroke drawing itself in from its start (the part must be listed in `draw`), or from its end */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: an(icon, "draw", ms, delay) });
const undraw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: an(icon, "undraw", ms, delay) });
/** around a point of the 24 grid */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** the same motion for several parts */
const each = (parts: string[], m: object) => Object.fromEntries(parts.map((p) => [p, m]));

// shared keyframe bodies
const POP = "0%{transform:scale(.3);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:none;opacity:1}";
const SHAKE = "0%{transform:none}20%{transform:translateX(-.9px)}40%{transform:translateX(.8px)}60%{transform:translateX(-.5px)}80%{transform:translateX(.3px)}100%{transform:none}";
const ROLL = "0%{transform:none}30%{transform:translateY(-1.3px)}60%{transform:translateY(.3px)}100%{transform:none}";
const KNOCK = "0%{transform:none}30%{transform:translateY(.6px) scale(1.02,.97)}60%{transform:translateY(-.2px)}100%{transform:none}";
const BUMP = "0%{transform:none}30%{transform:scale(.96)}60%{transform:scale(1.01)}100%{transform:none}";
const DIM = "0%{opacity:1}40%,60%{opacity:.3}100%{opacity:1}";
const BLINK2 = "0%,100%{opacity:1}18%{opacity:0}36%{opacity:1}54%{opacity:0}72%{opacity:1}";
const HOP = "0%{transform:none}30%{transform:translateY(-1.2px)}60%{transform:translateY(.2px)}100%{transform:none}";
const BAR = "0%{transform:scaleY(0)}60%{transform:scaleY(1.12)}100%{transform:none}";
const LIFT = "0%{transform:none}35%{transform:translateY(-.8px)}70%{transform:translateY(.15px)}100%{transform:none}";
const LINE_DROP = "0%{transform:translateY(-3px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}";
const SCRIBBLE =
  "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}";
const SAVE_PRESS = "0%{transform:none}35%{transform:translateY(.9px) scaleY(.86)}70%{transform:translateY(-.2px)}100%{transform:none}";
const SEARCH = "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}";
/** leaves along (x, y) and comes back in from the other side */
const through = (x: number, y: number) =>
  `0%{transform:none;opacity:1}35%{transform:translate(${x}px,${y}px);opacity:0}36%{transform:translate(${-x}px,${-y}px);opacity:0}100%{transform:none;opacity:1}`;
/** turns to `deg` past its rest and settles there (for shapes that look the same after the turn) */
const turn = (deg: number) => `0%{transform:none}72%{transform:rotate(${deg * 1.08}deg)}100%{transform:rotate(${deg}deg)}`;
/** a swing to one side and back, settling */
const sway = (deg: number) =>
  `0%{transform:none}25%{transform:rotate(${deg}deg)}55%{transform:rotate(${-deg * 0.6}deg)}80%{transform:rotate(${deg * 0.25}deg)}100%{transform:none}`;

/** the four corners of a scan frame close in (top left, top right, bottom right, bottom left) */
const cornerKf = (icon: string) =>
  [[1, 1], [-1, 1], [-1, -1], [1, -1]]
    .map(([x, y], i) => kf(icon, `c${i}`, `0%{transform:none}35%{transform:translate(${x}px,${y}px)}65%{transform:translate(${x * -0.2}px,${y * -0.2}px)}100%{transform:none}`))
    .join("");
const corners = (icon: string, parts: string[]) => Object.fromEntries(parts.map((p, i) => [p, play(icon, `c${i}`, 600)]));

/** a receipt: the slip rolls up and its sign writes itself, stroke by stroke */
const receipt = (icon: string, body: string, strokes: string[]): Override => ({
  note: "The slip rolls up out of the till and the currency sign writes itself on it.",
  draw: strokes,
  motion: { [body]: play(icon, "roll", 600), ...Object.fromEntries(strokes.map((p, i) => [p, draw(icon, 320, 100 + i * 110)])) },
  keyframes: kf(icon, "roll", ROLL) + drawKf(icon),
});

/** an "off" icon: its pieces give a small shake while the slash strikes through */
const off = (icon: string, pieces: string[], slash: string, note: string): Override => ({
  note,
  draw: [slash],
  motion: { ...each(pieces, play(icon, "shake", 550, 120)), [slash]: draw(icon, 420) },
  keyframes: kf(icon, "shake", SHAKE) + drawKf(icon),
});

/** refresh arrows: the arcs whip round half a turn (the icon looks the same after it) and the heads follow */
const refresh = (icon: string, deg: number, extra: Override["motion"] = {}, extraKf = ""): Override => ({
  note: "The two arrows whip round half a turn, the heads a beat behind their arcs, and settle.",
  motion: { ...each(["p0", "p2"], play(icon, "turn", 800, 0, at(12, 12))), ...each(["p1", "p3"], play(icon, "turn", 800, 40, at(12, 12))), ...extra },
  keyframes: kf(icon, "turn", turn(deg)) + extraKf,
});

/** signal bars: the dot blinks and the bars grow up from the base, shortest first */
const signal = (icon: string, bars: string[]): Override => ({
  note: "The dot blinks and the bars grow up from the base, shortest first.",
  motion: {
    p0: play(icon, "dot", 400),
    ...Object.fromEntries(bars.map((p, i) => [p, play(icon, "bar", 450, 60 + i * 60, { origin: "50% 100%" })])),
  },
  keyframes: kf(icon, "dot", "0%{transform:none}40%{transform:scale(1.6)}100%{transform:none}") + kf(icon, "bar", BAR),
});

/** an arrow passing into (or out of) a box through the gap in its side; the box gives as it passes */
const enter = (icon: string, arrow: string[], frame: string, x: number, y: number, note: string): Override => ({
  note,
  motion: { ...each(arrow, play(icon, "through", 650)), [frame]: play(icon, "knock", 500, 220) },
  keyframes: kf(icon, "through", through(x, y)) + kf(icon, "knock", BUMP),
});

/** a save disk: the shutter slides open and the label presses down */
const disk = (icon: string, shutter: string, label: string) => ({
  [shutter]: { to: { transform: "translateX(1.8px)" } },
  [label]: play(icon, "press", 550, 120, { origin: "50% 100%" }),
});

/** a scissors blade pair snipping around the pivot (12, 12), twice */
const snip = (icon: string, a: string[], b: string[]) => ({
  motion: { ...each(a, play(icon, "a", 750, 0, at(12, 12))), ...each(b, play(icon, "b", 750, 0, at(12, 12))) },
  keyframes:
    kf(icon, "a", "0%{transform:none}22%{transform:rotate(9deg)}45%{transform:rotate(-1deg)}68%{transform:rotate(6deg)}100%{transform:none}") +
    kf(icon, "b", "0%{transform:none}22%{transform:rotate(-9deg)}45%{transform:rotate(1deg)}68%{transform:rotate(-6deg)}100%{transform:none}"),
});

export const motions: Record<string, Override> = {
  "square-power": {
    note: "The power line drops in and the ring draws itself around it; the button gives a little.",
    draw: ["p1"],
    motion: { p2: play("square-power", "press", 500), p0: play("square-power", "line", 500), p1: draw("square-power", 600, 80) },
    keyframes: kf("square-power", "press", BUMP) + kf("square-power", "line", LINE_DROP) + drawKf("square-power"),
  },

  "printer-3d": {
    note: "The print head runs along its rail and back while the part on the bed grows a layer.",
    motion: {
      p6: play("printer-3d", "head", 850),
      p0: play("printer-3d", "head", 850),
      p5: play("printer-3d", "rail-l", 850),
      p1: play("printer-3d", "rail-r", 850),
      p2: play("printer-3d", "grow", 700, 150, { origin: "50% 100%" }),
    },
    keyframes:
      kf("printer-3d", "head", "0%{transform:none}30%{transform:translateX(3px)}60%{transform:translateX(-.6px)}80%{transform:translateX(.2px)}100%{transform:none}") +
      kf("printer-3d", "rail-l", `0%,100%{d:path("M4 8h4")}30%{d:path("M4 8h7")}60%{d:path("M4 8h3.4")}80%{d:path("M4 8h4.2")}`) +
      kf("printer-3d", "rail-r", `0%,100%{d:path("M12 8h8")}30%{d:path("M15 8h5")}60%{d:path("M11.4 8h8.6")}80%{d:path("M12.2 8h7.8")}`) +
      kf("printer-3d", "grow", "0%{transform:none}35%{transform:scaleY(.8)}70%{transform:scaleY(1.06)}100%{transform:none}"),
  },

  "printer-check": {
    note: "The sheet feeds in, the printed page slides out, and the tick draws itself beside it.",
    draw: ["p1"],
    motion: {
      p3: play("printer-check", "feed", 650),
      p0: play("printer-check", "page", 650, 100),
      p2: play("printer-check", "body", 650),
      p1: draw("printer-check", 380, 380),
    },
    keyframes:
      kf("printer-check", "feed", "0%{transform:none}35%{transform:translateY(1.2px)}100%{transform:none}") +
      kf("printer-check", "page", "0%{transform:none}20%{transform:translateY(-2px)}65%{transform:translateY(.5px)}100%{transform:none}") +
      kf("printer-check", "body", "0%,30%{transform:none}45%{transform:translateY(.3px)}60%,100%{transform:none}") +
      drawKf("printer-check"),
  },

  "printer-x": {
    note: "The page starts out and jams, the printer shudders, and the cross draws itself in.",
    draw: ["p1", "p2"],
    motion: {
      p4: play("printer-x", "feed", 700),
      p0: play("printer-x", "jam", 700),
      p3: play("printer-x", "shake", 550, 150),
      p1: draw("printer-x", 260, 280),
      p2: draw("printer-x", 260, 420),
    },
    keyframes:
      kf("printer-x", "feed", "0%{transform:none}30%{transform:translateY(1px)}100%{transform:none}") +
      kf("printer-x", "jam", "0%{transform:none}25%{transform:translateY(-1px)}40%{transform:translate(-.6px,-.8px)}55%{transform:translate(.5px,-.6px)}70%{transform:translateY(-.3px)}100%{transform:none}") +
      kf("printer-x", "shake", SHAKE) +
      drawKf("printer-x"),
  },

  pyramid: {
    note: "The pyramid rises out of the sand, settling with a squash, and its front edge draws down from the tip.",
    draw: ["p1"],
    motion: {
      p0: play("pyramid", "rise", 650, 0, at(12, 22)),
      p1: { ...at(12, 22), from: { strokeDasharray: 1 }, animation: `${an("pyramid", "rise", 650)}, ${an("pyramid", "draw", 500, 150)}` },
    },
    keyframes:
      kf("pyramid", "rise", "0%{transform:none}30%{transform:translateY(-1.2px) scale(.96,1.04)}60%{transform:scale(1.03,.96)}100%{transform:none}") +
      drawKf("pyramid"),
  },

  "question-mark": {
    note: "The hook nods on its foot, wondering, and the dot drops in under it.",
    motion: {
      p0: play("question-mark", "nod", 700, 0, at(12, 15)),
      p1: play("question-mark", "dot", 500, 200),
    },
    keyframes:
      kf("question-mark", "nod", "0%{transform:none}25%{transform:rotate(-12deg)}50%{transform:rotate(8deg)}75%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("question-mark", "dot", "0%{transform:translateY(-2px);opacity:0}55%{transform:translateY(.4px);opacity:1}80%{transform:translateY(-.15px)}100%{transform:none;opacity:1}"),
  },

  "radical-sign": {
    note: "The root sign writes itself from the tick to the bar.",
    draw: ["p0"],
    motion: { p0: draw("radical-sign", 650) },
    keyframes: drawKf("radical-sign"),
  },

  "radio-off": {
    note: "The waves fade out from the middle while the slash draws itself across.",
    draw: ["p3"],
    motion: {
      p0: play("radio-off", "core", 600, 0, at(12, 12)),
      p1: play("radio-off", "dim", 650, 60),
      p5: play("radio-off", "dim", 650, 60),
      p2: play("radio-off", "dim", 650, 140),
      p4: play("radio-off", "dim", 650, 140),
      p3: draw("radio-off", 420, 100),
    },
    keyframes: kf("radio-off", "core", "0%{transform:none}35%{transform:scale(.8)}100%{transform:none}") + kf("radio-off", "dim", DIM) + drawKf("radio-off"),
  },

  radius: {
    note: "The radius sweeps a full turn round the circle, carrying its handle, while the centre pulses.",
    motion: {
      ...each(["p0", "p1", "p2"], play("radius", "sweep", 800, 0, at(12, 12))),
      p3: play("radius", "centre", 500),
    },
    keyframes: kf("radius", "sweep", turn(360)) + kf("radius", "centre", "0%{transform:none}30%{transform:scale(1.3)}100%{transform:none}"),
  },

  rat: {
    note: "The rat scurries back and forth on the spot while its tail flicks behind it.",
    motion: {
      ...each(["p1", "p2", "p3", "p4"], play("rat", "scurry", 700)),
      p0: play("rat", "tail", 700, 60, { origin: "100% 0%" }),
    },
    keyframes:
      kf("rat", "scurry", "0%{transform:none}20%{transform:translate(-.6px,-.4px)}40%{transform:translate(.4px,0)}60%{transform:translate(-.4px,-.3px)}80%{transform:translate(.2px,0)}100%{transform:none}") +
      kf("rat", "tail", "0%{transform:none}25%{transform:rotate(6deg)}50%{transform:rotate(-4deg)}75%{transform:rotate(2deg)}100%{transform:none}"),
  },

  ratio: {
    note: "The tall frame and the wide one trade proportions and spring back.",
    motion: { p0: play("ratio", "tall", 650), p1: play("ratio", "wide", 650) },
    keyframes:
      kf("ratio", "tall", "0%{transform:none}35%{transform:scale(1.12,.88)}70%{transform:scale(.98,1.02)}100%{transform:none}") +
      kf("ratio", "wide", "0%{transform:none}35%{transform:scale(.88,1.12)}70%{transform:scale(1.02,.98)}100%{transform:none}"),
  },

  "receipt-cent": receipt("receipt-cent", "p2", ["p1", "p0"]),
  "receipt-euro": receipt("receipt-euro", "p1", ["p0", "p2"]),
  "receipt-indian-rupee": receipt("receipt-indian-rupee", "p0", ["p2", "p1", "p3"]),
  "receipt-japanese-yen": receipt("receipt-japanese-yen", "p1", ["p4", "p0", "p2", "p3"]),
  "receipt-pound-sterling": receipt("receipt-pound-sterling", "p1", ["p0", "p2", "p3"]),
  "receipt-russian-ruble": receipt("receipt-russian-ruble", "p0", ["p1", "p2"]),
  "receipt-swiss-franc": receipt("receipt-swiss-franc", "p2", ["p1", "p0", "p3"]),
  "receipt-turkish-lira": receipt("receipt-turkish-lira", "p2", ["p0", "p1"]),

  "rectangle-circle": {
    note: "The circle rolls in against the square end, which gives under the push.",
    motion: {
      p1: play("rectangle-circle", "roll", 650),
      p0: play("rectangle-circle", "give", 650, 0, { origin: "0% 50%" }),
    },
    keyframes:
      kf("rectangle-circle", "roll", "0%{transform:none}35%{transform:translateX(-1.5px)}70%{transform:translateX(.3px)}100%{transform:none}") +
      kf("rectangle-circle", "give", "0%{transform:none}35%{transform:scaleX(.9)}70%{transform:scaleX(1.02)}100%{transform:none}"),
  },

  "rectangle-goggles": {
    note: "The headset looks one way and then the other, as if turning to see around a virtual room.",
    motion: { p0: play("rectangle-goggles", "look", 800) },
    keyframes: kf("rectangle-goggles", "look", "0%{transform:none}25%{transform:translateX(-.6px) rotate(-6deg)}55%{transform:translateX(.5px) rotate(5deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  "rectangle-horizontal": {
    note: "The rectangle stretches wider and springs back.",
    motion: { p0: play("rectangle-horizontal", "stretch", 600) },
    keyframes: kf("rectangle-horizontal", "stretch", "0%{transform:none}35%{transform:scale(1.08,.9)}65%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  "rectangle-vertical": {
    note: "The rectangle stretches taller and springs back.",
    motion: { p0: play("rectangle-vertical", "stretch", 600) },
    keyframes: kf("rectangle-vertical", "stretch", "0%{transform:none}35%{transform:scale(.9,1.08)}65%{transform:scale(1.02,.98)}100%{transform:none}"),
  },

  "redo-2": {
    note: "The hooked line draws round from its tail and the arrowhead lands at its end.",
    draw: ["p1"],
    motion: { p1: undraw("redo-2", 450), p0: play("redo-2", "head", 450, 250) },
    keyframes: undrawKf("redo-2") + kf("redo-2", "head", "0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "redo-dot": {
    note: "The dot pops in, the curve sweeps over it to the right and the arrowhead lands at its end.",
    draw: ["p2"],
    motion: { p0: play("redo-dot", "pop", 400), p2: draw("redo-dot", 450, 80), p1: play("redo-dot", "head", 450, 330) },
    keyframes:
      kf("redo-dot", "pop", POP) +
      drawKf("redo-dot") +
      kf("redo-dot", "head", "0%{transform:translate(-2px,1px);opacity:0}60%{transform:translate(.3px,-.2px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "refresh-ccw": refresh("refresh-ccw", -180),
  "refresh-ccw-dot": refresh("refresh-ccw-dot", -180, { p4: play("refresh-ccw-dot", "dot", 500, 100) }, kf("refresh-ccw-dot", "dot", "0%{transform:none}40%{transform:scale(1.6)}100%{transform:none}")),
  "refresh-cw": refresh("refresh-cw", 180),

  "repeat-off": {
    note: "The two arrows try to go round, catch, and fall back while the slash draws across them.",
    draw: ["p2"],
    motion: {
      ...each(["p0", "p4"], play("repeat-off", "right", 700)),
      ...each(["p1", "p6"], play("repeat-off", "left", 700)),
      p2: draw("repeat-off", 400, 80),
    },
    keyframes:
      kf("repeat-off", "right", "0%{transform:none}30%{transform:translateX(1.2px)}42%{transform:translateX(.6px)}52%{transform:translateX(.9px)}100%{transform:none}") +
      kf("repeat-off", "left", "0%{transform:none}30%{transform:translateX(-1.2px)}42%{transform:translateX(-.6px)}52%{transform:translateX(-.9px)}100%{transform:none}") +
      drawKf("repeat-off"),
  },

  road: {
    note: "The lane marks run down the road towards you, one after another, as if driving along it.",
    motion: {
      p1: play("road", "run", 650),
      p2: play("road", "run", 650, 70),
      p0: play("road", "run", 650, 140),
    },
    keyframes: kf("road", "run", through(0, 1.2)),
  },

  "robot-arm": {
    note: "The upper arm lifts on its joint, the gripper opens at the top of the swing and closes as it comes down.",
    motion: {
      p2: play("robot-arm", "arm", 800, 0, at(6, 7)),
      p1: play("robot-arm", "jaw", 800, 0, at(6, 7)),
      p5: play("robot-arm", "joint", 500),
    },
    keyframes:
      kf("robot-arm", "arm", "0%{transform:none}35%{transform:rotate(-10deg)}65%{transform:rotate(2deg)}100%{transform:none}") +
      kf("robot-arm", "jaw", "0%{transform:none}30%{transform:rotate(-15deg)}45%{transform:rotate(-10deg)}65%{transform:rotate(2deg)}100%{transform:none}") +
      kf("robot-arm", "joint", "0%{transform:none}35%{transform:scale(1.12)}100%{transform:none}"),
  },

  "robot-vacuum": {
    note: "The bumper swings round as the vacuum turns, its light blinks, and the brushes flick.",
    motion: {
      p2: play("robot-vacuum", "turn", 850, 0, at(12, 12)),
      p0: play("robot-vacuum", "turn", 850, 0, at(12, 12)),
      p1: play("robot-vacuum", "blink", 800),
      p3: play("robot-vacuum", "brush", 550, 0),
      p5: play("robot-vacuum", "brush", 550, 60),
      p6: play("robot-vacuum", "brush", 550, 120),
      p4: play("robot-vacuum", "brush", 550, 180),
    },
    keyframes:
      kf("robot-vacuum", "turn", "0%{transform:none}35%{transform:rotate(-25deg)}65%{transform:rotate(18deg)}85%{transform:rotate(-4deg)}100%{transform:none}") +
      kf("robot-vacuum", "blink", BLINK2) +
      kf("robot-vacuum", "brush", "0%{transform:none;opacity:1}30%{transform:scale(.4);opacity:0}70%{transform:scale(1.1);opacity:1}100%{transform:none;opacity:1}"),
  },

  "rocking-chair": {
    note: "The chair rocks back and forth on its runner, the frame a beat behind it.",
    motion: {
      p1: play("rocking-chair", "rock", 900, 0, at(12, 21.5)),
      ...each(["p0", "p2", "p3"], play("rocking-chair", "rock", 900, 40, at(12, 21.5))),
    },
    keyframes: kf("rocking-chair", "rock", "0%{transform:none}25%{transform:rotate(-5deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  "roller-coaster": {
    note: "The supports rise one after another and the track runs over them, loop and all.",
    draw: ["p6"],
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2", "p4", "p5"].map((p, i) => [p, play("roller-coaster", "post", 450, i * 60, { origin: "50% 100%" })])),
      p3: play("roller-coaster", "fade", 400, 240),
      p6: draw("roller-coaster", 700, 120),
    },
    keyframes: kf("roller-coaster", "post", BAR) + kf("roller-coaster", "fade", "0%{opacity:0}100%{opacity:1}") + drawKf("roller-coaster"),
  },

  "rotate-ccw-key": {
    note: "The arrow swings back round the circle while the key turns once in its lock.",
    motion: {
      ...each(["p2", "p3"], play("rotate-ccw-key", "arrow", 750, 0, at(12, 12))),
      p1: play("rotate-ccw-key", "tooth", 700, 150, at(12, 9)),
      p4: play("rotate-ccw-key", "bow", 700, 150, at(12, 15)),
    },
    keyframes:
      kf("rotate-ccw-key", "arrow", "0%{transform:none}40%{transform:rotate(-30deg)}70%{transform:rotate(4deg)}100%{transform:none}") +
      kf("rotate-ccw-key", "tooth", "0%{transform:none}25%{transform:scaleX(0)}50%{transform:scaleX(-1)}75%{transform:scaleX(0)}100%{transform:none}") +
      kf("rotate-ccw-key", "bow", "0%{transform:none}25%{transform:scaleX(.6)}50%{transform:none}75%{transform:scaleX(.6)}100%{transform:none}"),
  },

  "rotate-ccw-square": {
    note: "The square tips back about its centre, led by the arrow, and rights itself.",
    motion: {
      ...each(["p0", "p2"], play("rotate-ccw-square", "square", 700, 0, at(12, 12.5))),
      p1: play("rotate-ccw-square", "arrow", 700, 0, at(12, 12.5)),
    },
    keyframes:
      kf("rotate-ccw-square", "square", "0%{transform:none}40%{transform:rotate(-10deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("rotate-ccw-square", "arrow", "0%{transform:none}40%{transform:rotate(-16deg)}70%{transform:rotate(3deg)}100%{transform:none}"),
  },

  "rotate-cw-square": {
    note: "The square tips forward about its centre, led by the arrow, and rights itself.",
    motion: {
      ...each(["p0", "p2"], play("rotate-cw-square", "square", 700, 0, at(12, 12.5))),
      p1: play("rotate-cw-square", "arrow", 700, 0, at(12, 12.5)),
    },
    keyframes:
      kf("rotate-cw-square", "square", "0%{transform:none}40%{transform:rotate(10deg)}70%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("rotate-cw-square", "arrow", "0%{transform:none}40%{transform:rotate(16deg)}70%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  "rotate-cw-clock": {
    note: "The hands sweep a full turn round the clock while the arrow pushes it forward a touch.",
    motion: {
      p0: play("rotate-cw-clock", "hands", 800, 0, at(12, 12)),
      ...each(["p1", "p2"], play("rotate-cw-clock", "arrow", 700, 0, at(12, 12))),
    },
    keyframes:
      kf("rotate-cw-clock", "hands", turn(360)) +
      kf("rotate-cw-clock", "arrow", "0%{transform:none}35%{transform:rotate(18deg)}70%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  "rotate-cw-fading-clock": {
    note: "The hands sweep a full turn while the fading trail behind the arrow lights up piece by piece.",
    motion: {
      p5: play("rotate-cw-fading-clock", "hands", 800, 0, at(12, 12)),
      ...each(["p0", "p1", "p2", "p9"], play("rotate-cw-fading-clock", "arrow", 700, 0, at(12, 12))),
      p8: play("rotate-cw-fading-clock", "trail", 500, 100),
      p7: play("rotate-cw-fading-clock", "trail", 500, 180),
      p6: play("rotate-cw-fading-clock", "trail", 500, 260),
    },
    keyframes:
      kf("rotate-cw-fading-clock", "hands", turn(360)) +
      kf("rotate-cw-fading-clock", "arrow", "0%{transform:none}35%{transform:rotate(14deg)}70%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("rotate-cw-fading-clock", "trail", "0%{opacity:1}30%{opacity:.1}100%{opacity:1}"),
  },

  "route-arrow-right": {
    note: "The start pops up, the path winds itself out, and the arrow arrives at its end.",
    draw: ["p1"],
    motion: {
      p2: play("route-arrow-right", "pop", 400),
      p1: draw("route-arrow-right", 600, 120),
      p0: play("route-arrow-right", "head", 450, 550),
    },
    keyframes:
      kf("route-arrow-right", "pop", POP) +
      drawKf("route-arrow-right") +
      kf("route-arrow-right", "head", "0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "route-off": {
    note: "The path's pieces dim and its ends shake while the slash draws across it.",
    draw: ["p3"],
    motion: {
      ...each(["p0", "p6"], play("route-off", "shake", 550, 120)),
      ...each(["p1", "p2", "p4", "p5"], play("route-off", "dim", 700)),
      p3: draw("route-off", 420),
    },
    keyframes: kf("route-off", "shake", SHAKE) + kf("route-off", "dim", DIM) + drawKf("route-off"),
  },

  "rows-4": {
    note: "The three dividers slide in from the left, one row after another.",
    motion: Object.fromEntries(["p1", "p2", "p3"].map((p, i) => [p, play("rows-4", "row", 500, i * 80, { origin: "0% 50%" })])),
    keyframes: kf("rows-4", "row", "0%{transform:scaleX(0)}60%{transform:scaleX(1.04)}100%{transform:none}"),
  },

  "rugby-ball": {
    note: "The ball hops and twists in the air, seam and laces with it, and lands.",
    motion: each(["p0", "p1", "p2", "p3", "p4"], play("rugby-ball", "twist", 750, 0, at(12, 12))),
    keyframes: kf("rugby-ball", "twist", "0%{transform:none}35%{transform:translateY(-1.2px) rotate(-10deg)}70%{transform:rotate(4deg)}100%{transform:none}"),
  },

  "ruler-dimension-line": {
    note: "The dimension line stretches out to its end marks and the ruler's ticks step down below it.",
    motion: {
      p4: play("ruler-dimension-line", "line", 550, 0, at(12, 6)),
      p3: play("ruler-dimension-line", "left", 550),
      p5: play("ruler-dimension-line", "right", 550),
      ...Object.fromEntries(["p6", "p0", "p1", "p2"].map((p, i) => [p, play("ruler-dimension-line", "tick", 450, 120 + i * 60, { origin: "50% 0%" })])),
    },
    keyframes:
      kf("ruler-dimension-line", "line", "0%{transform:scaleX(.6)}60%{transform:scaleX(1.04)}100%{transform:none}") +
      kf("ruler-dimension-line", "left", "0%{transform:translateX(4px)}60%{transform:translateX(-.4px)}100%{transform:none}") +
      kf("ruler-dimension-line", "right", "0%{transform:translateX(-4px)}60%{transform:translateX(.4px)}100%{transform:none}") +
      kf("ruler-dimension-line", "tick", "0%{transform:none}30%{transform:scaleY(.4)}70%{transform:scaleY(1.1)}100%{transform:none}"),
  },

  "russian-ruble": {
    note: "The ruble sign writes itself, the stem and bowl first, then the crossbar.",
    draw: ["p1", "p0"],
    motion: { p1: draw("russian-ruble", 550), p0: draw("russian-ruble", 300, 420) },
    keyframes: drawKf("russian-ruble"),
  },

  "saudi-riyal": {
    note: "The riyal sign writes itself, both strokes down and then the two bars across.",
    draw: ["p0", "p1", "p3", "p2"],
    motion: {
      p0: draw("saudi-riyal", 450),
      p1: draw("saudi-riyal", 450, 100),
      p3: draw("saudi-riyal", 320, 380),
      p2: draw("saudi-riyal", 260, 520),
    },
    keyframes: drawKf("saudi-riyal"),
  },

  "save-check": {
    note: "The shutter slides open, the label presses down as it saves, and the tick draws itself in.",
    draw: ["p1"],
    motion: { ...disk("save-check", "p3", "p2"), p1: draw("save-check", 380, 300) },
    keyframes: kf("save-check", "press", SAVE_PRESS) + drawKf("save-check"),
  },

  "save-off": off("save-off", ["p0", "p1", "p2", "p4", "p5"], "p3", "The disk gives a small shake while the slash draws itself across it."),

  "save-pen": {
    note: "The shutter slides open while the pen scribbles a new name beside the disk.",
    motion: {
      p2: { to: { transform: "translateX(1.8px)" } },
      p0: play("save-pen", "press", 550, 120, { origin: "50% 100%" }),
      p1: play("save-pen", "write", 700, 0, at(13.5, 21.5)),
    },
    keyframes: kf("save-pen", "press", SAVE_PRESS) + kf("save-pen", "write", SCRIBBLE),
  },

  "save-plus": {
    note: "The shutter slides open, the label presses down, and the plus spins in at the corner.",
    motion: {
      ...disk("save-plus", "p4", "p1"),
      ...each(["p2", "p3"], play("save-plus", "plus", 500, 150, at(19, 19))),
    },
    keyframes: kf("save-plus", "press", SAVE_PRESS) + kf("save-plus", "plus", "0%{transform:scale(.3) rotate(-90deg);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:none;opacity:1}"),
  },

  "scale-3d": {
    note: "The two axes stretch out from the corner, their handles riding the ends, and the diagonal reaches after them.",
    motion: {
      p3: play("scale-3d", "up", 700),
      p2: play("scale-3d", "right", 700),
      p0: play("scale-3d", "axes", 700),
      p1: play("scale-3d", "diag", 700),
    },
    keyframes:
      kf("scale-3d", "up", "0%{transform:none}40%{transform:translateY(-1.2px)}70%{transform:translateY(.2px)}100%{transform:none}") +
      kf("scale-3d", "right", "0%{transform:none}40%{transform:translateX(1.2px)}70%{transform:translateX(-.2px)}100%{transform:none}") +
      kf("scale-3d", "axes", `0%,100%{d:path("M5 7v11a1 1 0 0 0 1 1h11")}40%{d:path("M5 5.8v12.2a1 1 0 0 0 1 1h12.2")}70%{d:path("M5 7.2v10.8a1 1 0 0 0 1 1h10.8")}`) +
      kf("scale-3d", "diag", `0%,100%{d:path("M5.293 18.707 11 13")}40%{d:path("M5.293 18.707 11.8 12.2")}70%{d:path("M5.293 18.707 10.85 13.15")}`),
  },

  "scan-box": {
    note: "The corners close in on the box, which turns a little in the frame.",
    motion: {
      ...corners("scan-box", ["p3", "p1", "p2", "p4"]),
      ...each(["p6", "p5", "p0"], play("scan-box", "box", 650, 0, at(12, 12))),
    },
    keyframes: cornerKf("scan-box") + kf("scan-box", "box", "0%{transform:none}40%{transform:scale(.88) rotate(-8deg)}75%{transform:scale(1.03) rotate(1deg)}100%{transform:none}"),
  },

  "scan-eye": {
    note: "The corners close in and the eye in the frame blinks.",
    motion: {
      ...corners("scan-eye", ["p0", "p1", "p2", "p3"]),
      ...each(["p5", "p4"], play("scan-eye", "blink", 500, 150, at(12, 12))),
    },
    keyframes: cornerKf("scan-eye") + kf("scan-eye", "blink", "0%{transform:none}40%{transform:scaleY(.1)}60%,100%{transform:none}"),
  },

  "scan-heart": {
    note: "The corners close in and the heart in the frame beats twice.",
    motion: {
      ...corners("scan-heart", ["p2", "p0", "p1", "p3"]),
      p4: play("scan-heart", "beat", 750, 0, at(12, 12.5)),
    },
    keyframes: cornerKf("scan-heart") + kf("scan-heart", "beat", "0%{transform:none}20%{transform:scale(1.15)}35%{transform:scale(.97)}50%{transform:scale(1.1)}70%,100%{transform:none}"),
  },

  "scan-square": {
    note: "The corners close in and the square in the frame shrinks into focus.",
    motion: {
      ...corners("scan-square", ["p0", "p1", "p2", "p3"]),
      p4: play("scan-square", "focus", 600, 0, at(12, 12)),
    },
    keyframes: cornerKf("scan-square") + kf("scan-square", "focus", "0%{transform:none}35%{transform:scale(.8)}65%{transform:scale(1.05)}100%{transform:none}"),
  },

  university: {
    note: "The building settles, the round window swells, the door swings open and the windows light up in turn.",
    motion: {
      p3: play("university", "settle", 600, 0, { origin: "50% 100%" }),
      p6: play("university", "window", 600, 60),
      p0: play("university", "door", 700, 100, { origin: "0% 100%" }),
      ...Object.fromEntries(["p5", "p1", "p2", "p4"].map((p, i) => [p, play("university", "light", 400, 150 + i * 70)])),
    },
    keyframes:
      kf("university", "settle", "0%{transform:none}30%{transform:scaleY(.96)}60%{transform:scaleY(1.02)}100%{transform:none}") +
      kf("university", "window", "0%{transform:none}40%{transform:scale(1.2)}100%{transform:none}") +
      kf("university", "door", "0%{transform:none}35%,60%{transform:scaleX(.45)}100%{transform:none}") +
      kf("university", "light", "0%{opacity:1}40%{opacity:.15}100%{opacity:1}"),
  },

  "square-scissors": {
    note: "The blades open around their pivot and snip shut, twice.",
    ...snip("square-scissors", ["p4", "p2", "p0"], ["p3", "p1"]),
  },

  "square-bottom-dashed-scissors": {
    note: "The blades snip around their pivot while the dashed cut line creeps along beneath them.",
    motion: {
      ...snip("square-bottom-dashed-scissors", ["p7", "p5", "p1"], ["p6", "p4"]).motion,
      ...each(["p0", "p3"], play("square-bottom-dashed-scissors", "dash", 750)),
    },
    keyframes: snip("square-bottom-dashed-scissors", [], []).keyframes + kf("square-bottom-dashed-scissors", "dash", "0%{transform:none}50%{transform:translateX(-1px)}100%{transform:none}"),
  },

  scooter: {
    note: "The scooter rolls forward, its handlebar leaning back with the push, and rolls back to rest.",
    motion: {
      ...each(["p1", "p2", "p3"], play("scooter", "ride", 700)),
      p0: play("scooter", "stem", 700, 0, at(19.5, 15)),
    },
    keyframes:
      kf("scooter", "ride", "0%{transform:none}30%{transform:translateX(.8px)}60%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("scooter", "stem", "0%{transform:none}30%{transform:translateX(.8px) rotate(-6deg)}60%{transform:translateX(-.3px) rotate(2deg)}100%{transform:none}"),
  },

  "scratch-blocks": {
    note: "The join between the two blocks lifts and clicks back into place, and the stack gives under it.",
    motion: {
      p1: play("scratch-blocks", "click", 650),
      p0: play("scratch-blocks", "give", 500, 200, { origin: "50% 100%" }),
    },
    keyframes:
      kf("scratch-blocks", "click", "0%{transform:none}30%{transform:translateY(-1.5px)}60%{transform:translateY(.3px)}80%{transform:translateY(-.1px)}100%{transform:none}") +
      kf("scratch-blocks", "give", KNOCK),
  },

  screw: {
    note: "The screw drives in and back while its threads turn along the shank.",
    motion: {
      ...each(["p2", "p3"], play("screw", "drive", 700)),
      p4: play("screw", "thread", 450, 0, { origin: "50% 50%" }),
      p0: play("screw", "thread", 450, 80, { origin: "50% 50%" }),
      p1: play("screw", "thread", 450, 160, { origin: "50% 50%" }),
    },
    keyframes:
      kf("screw", "drive", "0%{transform:none}40%{transform:translate(-.8px,.8px)}70%{transform:translate(.2px,-.2px)}100%{transform:none}") +
      kf("screw", "thread", "0%{transform:none}35%{transform:scaleY(.5)}70%,100%{transform:none}"),
  },

  "scroll-blank": {
    note: "The bottom roll drops as the scroll unrolls its sheet.",
    motion: {
      p1: play("scroll-blank", "roll", 600),
      p0: play("scroll-blank", "sheet", 600, 0, { origin: "50% 0%" }),
    },
    keyframes:
      kf("scroll-blank", "roll", "0%{transform:translateY(-2px)}60%{transform:translateY(.4px)}100%{transform:none}") +
      kf("scroll-blank", "sheet", "0%{transform:scaleY(.86)}60%{transform:scaleY(1.02)}100%{transform:none}"),
  },

  "search-lens": {
    note: "The magnifier circles over what it searches, the handle trailing the lens.",
    motion: { p1: play("search-lens", "search", 750), p0: play("search-lens", "search", 750, 40) },
    keyframes: kf("search-lens", "search", SEARCH),
  },

  "search-alert": {
    note: "The lens shakes and the warning mark drops into it, dot last.",
    motion: {
      ...each(["p0", "p1"], play("search-alert", "shake", 550)),
      p2: play("search-alert", "mark", 450, 120),
      p3: play("search-alert", "dot", 350, 320),
    },
    keyframes:
      kf("search-alert", "shake", SHAKE) +
      kf("search-alert", "mark", "0%{transform:translateY(-2px);opacity:0}60%{transform:translateY(.3px);opacity:1}100%{transform:none;opacity:1}") +
      kf("search-alert", "dot", POP),
  },

  "search-slash": {
    note: "The slash draws itself across the lens while the glass shakes no.",
    draw: ["p0"],
    motion: { ...each(["p1", "p2"], play("search-slash", "shake", 550)), p0: draw("search-slash", 320, 100) },
    keyframes: kf("search-slash", "shake", SHAKE) + drawKf("search-slash"),
  },

  section: {
    note: "The section sign writes itself, top loop then bottom loop.",
    draw: ["p0", "p1"],
    motion: { p0: draw("section", 500), p1: draw("section", 500, 250) },
    keyframes: drawKf("section"),
  },

  "send-plane": {
    note: "The paper plane flies off up and to the right and glides back in from the other side, its fold trailing.",
    motion: { p0: play("send-plane", "fly", 650), p1: play("send-plane", "fly", 650, 30) },
    keyframes: kf("send-plane", "fly", through(3, -3)),
  },

  "separator-vertical": {
    note: "The two arrows push away from the line, which stretches between them.",
    motion: {
      p2: play("separator-vertical", "left", 600),
      p1: play("separator-vertical", "right", 600),
      p0: play("separator-vertical", "line", 600),
    },
    keyframes:
      kf("separator-vertical", "left", "0%{transform:none}35%{transform:translateX(-1.5px)}70%{transform:translateX(.3px)}100%{transform:none}") +
      kf("separator-vertical", "right", "0%{transform:none}35%{transform:translateX(1.5px)}70%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("separator-vertical", "line", "0%{transform:none}35%{transform:scaleY(1.08)}100%{transform:none}"),
  },

  "server-nas": {
    note: "The drive bays lift in turn and the lights blink.",
    motion: {
      p0: play("server-nas", "bay", 550),
      p1: play("server-nas", "bay", 550, 70),
      p2: play("server-nas", "bay", 550, 140),
      p3: play("server-nas", "blink", 700),
      p4: play("server-nas", "blink", 700, 120),
    },
    keyframes: kf("server-nas", "bay", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.2px)}100%{transform:none}") + kf("server-nas", "blink", BLINK2),
  },

  "server-plus": {
    note: "The plus spins in beside the rack, the units give a little knock and their lights blink.",
    motion: {
      ...each(["p1", "p2"], play("server-plus", "plus", 500, 0, at(19, 12))),
      p0: play("server-plus", "knock", 550, 120),
      p3: play("server-plus", "knock", 550, 180),
      p5: play("server-plus", "blink", 700, 120),
      p4: play("server-plus", "blink", 700, 200),
    },
    keyframes:
      kf("server-plus", "plus", "0%{transform:scale(.3) rotate(-90deg);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:none;opacity:1}") +
      kf("server-plus", "knock", KNOCK) +
      kf("server-plus", "blink", BLINK2),
  },

  "settings-cog": {
    note: "The cog turns one tooth round and settles, its hub pressing in as it goes.",
    motion: {
      p0: play("settings-cog", "turn", 750, 0, at(12, 12)),
      p1: play("settings-cog", "hub", 550, 0, at(12, 12)),
    },
    keyframes: kf("settings-cog", "turn", turn(60)) + kf("settings-cog", "hub", "0%{transform:none}40%{transform:scale(.85)}100%{transform:none}"),
  },

  shell: {
    note: "The shell rocks on the sand and settles.",
    motion: { p0: play("shell", "rock", 800, 0, at(12, 21)) },
    keyframes: kf("shell", "rock", sway(-4)),
  },

  "shelving-unit": {
    note: "The two boxes drop onto their shelves, one after the other, and each shelf gives as it lands.",
    motion: {
      p0: play("shelving-unit", "drop", 600, 0, { origin: "50% 100%" }),
      p1: play("shelving-unit", "drop", 600, 130, { origin: "50% 100%" }),
      p3: play("shelving-unit", "sag", 600),
      p4: play("shelving-unit", "sag", 600, 130),
    },
    keyframes:
      kf("shelving-unit", "drop", "0%{transform:translateY(-2.5px);opacity:0}55%{transform:translateY(.3px) scale(1.05,.9);opacity:1}80%{transform:none}100%{transform:none;opacity:1}") +
      kf("shelving-unit", "sag", "0%,45%{transform:none}57%{transform:translateY(.4px)}75%,100%{transform:none}"),
  },

  "shield-cog-corner": {
    note: "The cog turns a quarter round beside the shield, which lifts a touch.",
    motion: {
      ...each(["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"], play("shield-cog-corner", "turn", 750, 0, at(17.695, 17.695))),
      p0: play("shield-cog-corner", "lift", 650),
    },
    keyframes: kf("shield-cog-corner", "turn", turn(90)) + kf("shield-cog-corner", "lift", LIFT),
  },

  "shield-ellipsis": {
    note: "The three dots hop one after another, as if the check is still running.",
    motion: Object.fromEntries(["p1", "p2", "p3"].map((p, i) => [p, play("shield-ellipsis", "hop", 550, i * 90)])),
    keyframes: kf("shield-ellipsis", "hop", "0%{transform:none}30%{transform:translateY(-1.5px)}60%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "shield-house": {
    note: "The shield lifts a touch and the house drops in under it, settling with a squash.",
    motion: {
      p2: play("shield-house", "lift", 650),
      ...each(["p0", "p1"], play("shield-house", "settle", 650, 80, { origin: "50% 100%" })),
    },
    keyframes:
      kf("shield-house", "lift", LIFT) +
      kf("shield-house", "settle", "0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.2px) scale(1.04,.95)}80%,100%{transform:none}"),
  },

  "shield-keyhole": {
    note: "The keyhole turns a quarter as if a key were in it, and the shield gives.",
    motion: {
      ...each(["p0", "p2"], play("shield-keyhole", "turn", 750, 0, at(12, 12.5))),
      p1: play("shield-keyhole", "give", 750),
    },
    keyframes:
      kf("shield-keyhole", "turn", "0%{transform:none}35%,60%{transform:rotate(-90deg)}100%{transform:none}") +
      kf("shield-keyhole", "give", "0%,30%{transform:none}42%{transform:scale(.97)}55%,100%{transform:none}"),
  },

  "ship-cargo": {
    note: "The ship rocks on the swell while the waves run back under it.",
    motion: {
      ...each(["p0", "p1", "p2", "p3"], play("ship-cargo", "rock", 900, 0, at(12, 19))),
      p4: play("ship-cargo", "wave", 900),
    },
    keyframes: kf("ship-cargo", "rock", sway(-4)) + kf("ship-cargo", "wave", "0%{transform:none}40%{transform:translateX(-1px)}75%{transform:translateX(.2px)}100%{transform:none}"),
  },

  "shrimp-off": off("shrimp-off", ["p0", "p1", "p2", "p3", "p5", "p6"], "p4", "The shrimp gives a small shake while the slash draws itself across it."),

  "square-sigma": {
    note: "The sigma writes itself in the box, which gives a little.",
    draw: ["p1"],
    motion: { p0: play("square-sigma", "bump", 600), p1: draw("square-sigma", 600, 60) },
    keyframes: kf("square-sigma", "bump", BUMP) + drawKf("square-sigma"),
  },

  "signal-high": signal("signal-high", ["p1", "p2", "p3"]),
  "signal-low": signal("signal-low", ["p1"]),
  "signal-medium": signal("signal-medium", ["p1", "p2"]),
  "signal-zero": {
    note: "The lone dot swells and blinks, looking for a signal.",
    motion: { p0: play("signal-zero", "search", 800) },
    keyframes: kf("signal-zero", "search", "0%{transform:none;opacity:1}18%{transform:scale(1.6);opacity:0}36%{transform:scale(1.3);opacity:1}54%{transform:scale(1.3);opacity:0}72%{transform:none;opacity:1}100%{transform:none;opacity:1}"),
  },

  "signpost-big": {
    note: "The two signs swing on their nails at the post, one after the other, and settle.",
    motion: {
      p0: play("signpost-big", "left", 850, 0, at(10, 7)),
      p1: play("signpost-big", "right", 850, 90, at(14, 7)),
    },
    keyframes: kf("signpost-big", "left", sway(-8)) + kf("signpost-big", "right", sway(8)),
  },

  "siren-off": {
    note: "The rays dim and the siren gives a small shake while the slash draws itself across it.",
    draw: ["p6"],
    motion: {
      ...each(["p0", "p2", "p3", "p8"], play("siren-off", "shake", 550, 120)),
      ...each(["p1", "p4", "p5", "p7"], play("siren-off", "dim", 700)),
      p6: draw("siren-off", 420),
    },
    keyframes: kf("siren-off", "shake", SHAKE) + kf("siren-off", "dim", DIM) + drawKf("siren-off"),
  },

  slash: {
    note: "The slash draws itself from top to bottom.",
    draw: ["p0"],
    motion: { p0: draw("slash", 450) },
    keyframes: drawKf("slash"),
  },

  "square-slash": {
    note: "The slash draws itself across the box, which gives a little.",
    draw: ["p1"],
    motion: { p0: play("square-slash", "bump", 600), p1: draw("square-slash", 420, 60) },
    keyframes: kf("square-slash", "bump", BUMP) + drawKf("square-slash"),
  },

  "sliders-vertical": {
    note: "Each knob slides to a new setting in turn, its track growing and shrinking either side.",
    motion: {
      // left: knob up
      p6: { to: { transform: "translateY(-3px)" } },
      p7: { to: { d: 'path("M5 7V3")' } },
      p8: { to: { d: 'path("M5 21v-10")' } },
      // middle: knob down
      p0: { to: { transform: "translateY(4px)" }, delay: 60 },
      p2: { to: { d: 'path("M12 12V3")' }, delay: 60 },
      p1: { to: { d: 'path("M12 21v-5")' }, delay: 60 },
      // right: knob up
      p3: { to: { transform: "translateY(-3px)" }, delay: 120 },
      p4: { to: { d: 'path("M19 9V3")' }, delay: 120 },
      p5: { to: { d: 'path("M19 21v-8")' }, delay: 120 },
    },
  },

  "smartphone-user": {
    note: "The person beside the phone nods hello, head first, and the phone tips towards them.",
    motion: {
      p3: play("smartphone-user", "nod", 600),
      p2: play("smartphone-user", "nod", 600, 60),
      ...each(["p0", "p1"], play("smartphone-user", "tip", 700, 0, at(11, 22))),
    },
    keyframes:
      kf("smartphone-user", "nod", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("smartphone-user", "tip", "0%{transform:none}30%{transform:rotate(3deg)}60%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "sparkles-stars": {
    note: "The big star twinkles with a twist, then the small cross and the dot pop one after the other.",
    motion: {
      p0: play("sparkles-stars", "twinkle", 650, 0, at(12, 12)),
      ...each(["p1", "p2"], play("sparkles-stars", "pop", 500, 120, at(20, 4))),
      p3: play("sparkles-stars", "pop", 500, 220, at(4, 20)),
    },
    keyframes:
      kf("sparkles-stars", "twinkle", "0%{transform:none}30%{transform:scale(.8) rotate(-10deg)}60%{transform:scale(1.1)}100%{transform:none}") +
      kf("sparkles-stars", "pop", "0%{transform:none}30%{transform:scale(.3)}65%{transform:scale(1.2)}100%{transform:none}"),
  },

  "spell-check-2": {
    note: "The letter hops and the wavy underline writes itself beneath it.",
    draw: ["p2"],
    motion: { ...each(["p0", "p1"], play("spell-check-2", "hop", 500)), p2: draw("spell-check-2", 500, 180) },
    keyframes: kf("spell-check-2", "hop", HOP) + drawKf("spell-check-2"),
  },

  "square-split-vertical": {
    note: "The two halves part above and below the divider, which stretches, and close up again.",
    motion: {
      p2: play("square-split-vertical", "up", 600),
      p1: play("square-split-vertical", "down", 600),
      p0: play("square-split-vertical", "mid", 600),
    },
    keyframes:
      kf("square-split-vertical", "up", "0%{transform:none}35%{transform:translateY(-1px)}70%{transform:translateY(.2px)}100%{transform:none}") +
      kf("square-split-vertical", "down", "0%{transform:none}35%{transform:translateY(1px)}70%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("square-split-vertical", "mid", "0%{transform:none}35%{transform:scaleX(1.06)}100%{transform:none}"),
  },

  "square-arrow-down-enter": enter("square-arrow-down-enter", ["p0", "p2"], "p1", 0, 2.5, "The arrow drops down into the box and comes round again from the top; the box gives as it lands."),
  "square-arrow-down-exit": enter("square-arrow-down-exit", ["p0", "p2"], "p1", 0, 2.5, "The arrow drops out through the bottom of the box and slides back in from above."),
  "square-arrow-down-left-enter": enter("square-arrow-down-left-enter", ["p0", "p1"], "p2", -2, 2, "The arrow dives in through the open corner and comes round again; the box gives as it lands."),
  "square-arrow-down-right-enter": enter("square-arrow-down-right-enter", ["p0", "p1"], "p2", 2, 2, "The arrow dives in through the open corner and comes round again; the box gives as it lands."),
  "square-arrow-left-enter": enter("square-arrow-left-enter", ["p0", "p1"], "p2", -2.5, 0, "The arrow slides in through the open side and comes round again; the box gives as it lands."),
};

/** a save disk the source leaves open at a corner for a badge: closed by an arc round the badge, from one end of the
 * outline to the other */
const saveCut = (right: string) =>
  `M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V${right}A7 7 0 0 0 12.5 21Z`;
const FRAME = "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z";
export const fills: Record<string, string> = {
  "save-check": saveCut("12.35"),
  "save-plus": saveCut("12"),
  // closed by a shallow arc clear of the pen
  "save-pen": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v.3A18 18 0 0 0 9 21Z",
  // switched off: the whole disk, the slash is cut through it
  "save-off": "M5 3h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  // both units, each closed by an arc round the plus where the source leaves room for it
  "server-plus":
    "M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2A6.75 6.75 0 0 0 12.5 10Z M12.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2A6.75 6.75 0 0 1 12.5 14Z",
  // the shield, closed by an arc round the cog in its corner
  "shield-cog-corner":
    "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4A8 8 0 0 0 11 22Z",
  // the shield as the source draws it, closed by an arc round the house in its corner
  "shield-house":
    "M20 10.418V6a1 1 0 0 0-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 0 0-1.52 0C9.5 3.8 7 5 5 5a1 1 0 0 0-1 1v7c0 4.602 2.67 7.1 6.037 8.603A10 10 0 0 1 20 10.418Z",
  // the phone, cut round the person's head and clear of the shoulders, keeping its button inside
  "smartphone-user": "M10 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4A7 7 0 0 0 12.4 10.8V18.2Z",
  // boxes whose outline is open where the arrow passes: the whole box (the arrow is cut out of it), or cut across
  // the open corner
  "square-arrow-down-enter": FRAME,
  "square-arrow-down-exit": FRAME,
  "square-arrow-left-enter": FRAME,
  "square-arrow-down-left-enter": "M15.33 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.67Z",
  "square-arrow-down-right-enter": "M8.67 3H19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.67Z",
};
