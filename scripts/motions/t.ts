import type { Entry, Override } from "./types";

/** Batch t: its icons (pnpm import-icons t) and their motions. */
export const list: Entry[] = [
  ["MilkOff", "milk-off", "No milk", "food", "shake", ["dairy free", "lactose", "milk", "allergy"], "The slash strikes."],
  ["SquareMinus", "square-minus", "Minus in a square", "actions", "pop", ["minus", "remove", "collapse", "subtract"], "The minus draws."],
  ["MirrorRectangular", "mirror-rectangular", "Mirror", "app", "tilt", ["mirror", "reflection", "bathroom", "glass"], "The glint sweeps."],
  ["MirrorRound", "mirror-round", "Round mirror", "app", "tilt", ["mirror", "reflection", "vanity", "glass"], "The glint sweeps."],
  ["MonitorActivity", "monitor-activity", "Screen activity", "devices", "draw", ["activity", "pulse", "monitoring", "display"], "The pulse draws."],
  ["MonitorCloud", "monitor-cloud", "Cloud desktop", "devices", "float", ["cloud", "remote", "virtual", "display"], "The cloud floats."],
  ["MonitorDot", "monitor-dot", "Screen notification", "devices", "pop", ["notification", "badge", "display", "alert"], "The dot pops."],
  ["MonitorPause", "monitor-pause", "Screen paused", "devices", "pop", ["pause", "display", "stream", "hold"], "The bars press."],
  ["MonitorPc", "monitor-pc", "Desktop computer", "devices", "pop", ["pc", "desktop", "tower", "computer"], "The tower lights up."],
  ["MonitorSpeaker", "monitor-speaker", "Screen and speaker", "devices", "pulse", ["speaker", "audio", "display", "sound"], "The speaker thumps."],
  ["MonitorStop", "monitor-stop", "Stop screen", "devices", "pop", ["stop", "display", "stream", "end"], "The stop square presses."],
  ["MonitorUp", "monitor-up", "Share screen", "devices", "nudge-up", ["share", "upload", "cast", "display"], "The arrow rises."],
  ["MonitorX", "monitor-x", "Screen error", "devices", "shake", ["error", "display", "disconnected", "close"], "The cross draws."],
  ["Mop", "mop", "Mop", "app", "wiggle", ["clean", "floor", "housework", "wash"], "It mops."],
  ["Moped", "moped", "Moped", "travel", "nudge-right", ["scooter", "moped", "ride", "delivery"], "It rolls forward."],
  ["MopSparkles", "mop-sparkles", "Clean floor", "app", "wiggle", ["clean", "sparkle", "housework", "fresh"], "It mops and sparkles."],
  ["Mosque", "mosque", "Mosque", "travel", "pop", ["mosque", "religion", "islam", "landmark"], "The crescent rises."],
  ["Motorbike", "motorbike", "Motorbike", "travel", "nudge-right", ["motorcycle", "bike", "ride", "engine"], "It revs forward."],
  ["MoundShovel", "mound-shovel", "Digging", "nature", "tilt", ["dig", "soil", "garden", "shovel"], "The shovel digs."],
  ["MouseLeft", "mouse-left", "Left click", "devices", "nudge-down", ["left click", "mouse", "button", "primary"], "The left button clicks."],
  ["MouseOff", "mouse-off", "Mouse off", "devices", "shake", ["mouse", "disconnected", "off", "disabled"], "The slash strikes."],
  ["MousePointer2Off", "mouse-pointer-2-off", "Pointer off", "actions", "shake", ["cursor", "off", "disabled", "pointer"], "The slash strikes."],
  ["MousePointerBan", "mouse-pointer-ban", "Pointer blocked", "actions", "shake", ["cursor", "blocked", "not allowed", "disabled"], "The ban turns."],
  ["SquareDashedMousePointer", "square-dashed-mouse-pointer", "Select with pointer", "development", "nudge-up", ["select", "pointer", "area", "inspect"], "The pointer taps."],
  ["MouseRight", "mouse-right", "Right click", "devices", "nudge-down", ["right click", "mouse", "button", "context menu"], "The right button clicks."],
  ["Mouth", "mouth", "Mouth", "people", "pop", ["lips", "speak", "kiss", "mouth"], "It speaks."],
  ["MouthOff", "mouth-off", "Mute mouth", "people", "shake", ["silent", "mute", "quiet", "mouth"], "The slash strikes."],
  ["MoveDiagonal2", "move-diagonal-2", "Resize (other diagonal)", "actions", "pop", ["resize", "diagonal", "scale"], "The ends stretch."],
  ["MoveDown", "move-down", "Long arrow down", "navigation", "nudge-down", ["down", "arrow", "below"], "The arrow travels."],
  ["MoveDownLeft", "move-down-left", "Long arrow down left", "navigation", "nudge-left", ["down", "left", "arrow", "diagonal"], "The arrow travels."],
  ["MoveDownRight", "move-down-right", "Long arrow down right", "navigation", "nudge-right", ["down", "right", "arrow", "diagonal"], "The arrow travels."],
  ["MoveLeft", "move-left", "Long arrow left", "navigation", "nudge-left", ["back", "previous", "arrow", "left"], "The arrow travels."],
  ["MoveUp", "move-up", "Long arrow up", "navigation", "nudge-up", ["up", "arrow", "above", "top"], "The arrow travels."],
  ["MoveUpLeft", "move-up-left", "Long arrow up left", "navigation", "nudge-left", ["up", "left", "arrow", "diagonal"], "The arrow travels."],
  ["SquareLetterM", "square-letter-m", "Letter M in a square", "text", "pop", ["letter", "m", "metro", "square"], "The M writes."],
  ["Navigation2", "navigation-2", "Navigate up", "navigation", "nudge-up", ["gps", "direction", "heading", "arrow"], "The arrow points on."],
  ["Navigation2Off", "navigation-2-off", "Navigation up off", "navigation", "shake", ["gps off", "no direction", "arrow"], "The slash strikes."],
  ["NepaliRupee", "nepali-rupee", "Nepali rupee", "commerce", "pop", ["money", "currency", "npr", "price"], "The sign draws."],
  ["NonBinary", "non-binary", "Non-binary", "people", "spin-90", ["gender", "non-binary", "identity", "enby"], "The star turns."],
  ["NotebookDot", "notebook-dot", "Notebook with a dot", "text", "tilt", ["notes", "journal", "unread", "badge"], "The dot pops."],
  ["NotebookText", "notebook-text", "Notebook with text", "text", "draw", ["notes", "journal", "diary", "text"], "The lines write."],
  ["NotepadTextDashed", "notepad-text-dashed", "Draft notepad", "text", "draw", ["draft", "notes", "memo", "pad"], "The lines write."],
  ["Numbers", "numbers", "Numbers", "text", "pop", ["numbers", "digits", "123", "count"], "The digits hop."],
  ["NutOff", "nut-off", "Nut free", "food", "shake", ["nut free", "allergy", "acorn", "food"], "The slash strikes."],
  ["Octagon", "octagon", "Octagon", "shapes", "spin-90", ["octagon", "shape", "stop", "eight"], "It turns."],
  ["OctagonMinus", "octagon-minus", "No entry", "status", "pop", ["no entry", "block", "minus", "stop"], "The bar draws."],
  ["Omega", "omega", "Omega", "text", "draw", ["omega", "greek", "ohm", "math"], "It writes itself."],
  ["Origami", "origami", "Origami", "app", "float", ["paper", "fold", "crane", "craft"], "The bird flaps."],
  ["Package2", "package-2", "Box", "commerce", "bounce", ["box", "parcel", "shipping", "package"], "The lid pops."],
  ["PackageMinus", "package-minus", "Remove package", "commerce", "pop", ["remove", "parcel", "minus", "package"], "The minus draws."],
  ["PackagePen", "package-pen", "Edit package", "commerce", "wiggle", ["edit", "parcel", "label", "package"], "The pen writes."],
  ["PackageQuestionMark", "package-question-mark", "Unknown package", "commerce", "wiggle", ["unknown", "help", "parcel", "package"], "The question mark nods."],
  ["PaintbrushVertical", "paintbrush-vertical", "Paintbrush (upright)", "app", "wiggle", ["paint", "brush", "style", "design"], "The brush strokes."],
  ["Panda", "panda", "Panda", "nature", "bounce", ["panda", "bear", "animal", "cute"], "The ears wiggle."],
  ["PanelBottomClose", "panel-bottom-close", "Close bottom panel", "app", "nudge-down", ["collapse", "drawer", "hide console"], "The chevron points down."],
  ["PanelBottomDashed", "panel-bottom-dashed", "Bottom panel hidden", "app", "nudge-up", ["panel", "inactive", "drawer", "layout"], "The dashes march."],
  ["PanelLeftDashed", "panel-left-dashed", "Sidebar hidden", "app", "nudge-right", ["sidebar", "inactive", "panel", "layout"], "The dashes march."],
  ["PanelLeftRightDashed", "panel-left-right-dashed", "Side panels hidden", "app", "pop", ["panels", "inactive", "sidebars", "layout"], "The dashes march."],
  ["PanelRightDashed", "panel-right-dashed", "Right panel hidden", "app", "nudge-left", ["panel", "inactive", "inspector", "layout"], "The dashes march."],
  ["PanelsLeftBottom", "panels-left-bottom", "Sidebar and bottom panel", "app", "pop", ["layout", "panels", "sidebar", "console"], "The panels slide in."],
  ["PanelsRightBottom", "panels-right-bottom", "Right and bottom panels", "app", "pop", ["layout", "panels", "inspector", "console"], "The panels slide in."],
  ["Rows3", "rows-3", "Three rows", "app", "pop", ["rows", "layout", "table", "panels"], "The rows slide in."],
  ["PanelTopBottomDashed", "panel-top-bottom-dashed", "Top and bottom panels hidden", "app", "pop", ["panels", "inactive", "header", "footer"], "The dashes march."],
  ["PanelTopClose", "panel-top-close", "Close top panel", "navigation", "nudge-up", ["collapse", "header", "hide"], "The chevron points up."],
  ["PanelTopDashed", "panel-top-dashed", "Top panel hidden", "navigation", "nudge-down", ["panel", "inactive", "header", "layout"], "The dashes march."],
  ["PanelTopOpen", "panel-top-open", "Open top panel", "navigation", "nudge-down", ["expand", "header", "show"], "The chevron points down."],
  ["PaperBag", "paper-bag", "Paper bag", "commerce", "bounce", ["bag", "shopping", "groceries", "takeaway"], "The bag is set down."],
  ["Parasol", "parasol", "Parasol", "travel", "swing", ["beach", "umbrella", "summer", "shade"], "It sways."],
  ["Parentheses", "parentheses", "Parentheses", "development", "pop", ["brackets", "code", "math", "group"], "They open."],
  ["Park", "park", "Park", "nature", "swing", ["park", "tree", "bench", "outdoors"], "The tree sways."],
  ["ParkingMeter", "parking-meter", "Parking meter", "travel", "pop", ["parking", "meter", "pay", "time"], "The needle ticks."],
  ["SquareLetterPOff", "square-letter-p-off", "No parking", "travel", "shake", ["no parking", "parking", "off", "sign"], "The slash strikes."],
  ["PencilSparkles", "pencil-sparkles", "Magic edit", "actions", "wiggle", ["ai", "magic", "edit", "write"], "It writes and sparkles."],
  ["PenOff", "pen-off", "No writing", "actions", "shake", ["read only", "locked", "no edit", "pen"], "The slash strikes."],
  ["Pentagon", "pentagon", "Pentagon", "shapes", "spin-90", ["pentagon", "shape", "five", "polygon"], "It turns."],
  ["PerfumeBottle", "perfume-bottle", "Perfume", "commerce", "pulse", ["perfume", "scent", "fragrance", "beauty"], "It sprays."],
  ["Phi", "phi", "Phi", "text", "draw", ["phi", "greek", "golden ratio", "math"], "It writes itself."],
  ["PhilippinePeso", "philippine-peso", "Philippine peso", "commerce", "pop", ["money", "currency", "php", "price"], "The sign draws."],
  ["PhoneLog", "phone-log", "Call log", "communication", "draw", ["calls", "history", "log", "phone"], "The lines list."],
  ["Pi", "pi", "Pi", "text", "draw", ["pi", "math", "greek", "constant"], "It writes itself."],
  ["PictureInPicture", "picture-in-picture-arrow", "Picture in picture (send to corner)", "media", "pop", ["pip", "mini player", "video", "overlay"], "The arrow tucks it away."],
  ["PilcrowLeft", "pilcrow-left", "Paragraph right to left", "text", "nudge-left", ["paragraph", "direction", "rtl", "text"], "The arrow points."],
  ["PilcrowRight", "pilcrow-right", "Paragraph left to right", "text", "nudge-right", ["paragraph", "direction", "ltr", "text"], "The arrow points."],
  ["SquarePilcrow", "square-pilcrow", "Paragraph in a square", "text", "pop", ["paragraph", "pilcrow", "text", "format"], "The stems draw."],
  ["PillBottle", "pill-bottle", "Pill bottle", "health", "shake", ["medicine", "pharmacy", "prescription", "bottle"], "It rattles."],
  ["SquarePi", "square-pi", "Pi in a square", "text", "pop", ["pi", "math", "constant", "square"], "It writes itself."],
  ["PlantPot", "plant-pot", "Potted plant", "nature", "swing", ["plant", "pot", "garden", "house plant"], "The leaves sway."],
  ["PlayingCard", "playing-card", "Playing card", "app", "tilt", ["card", "game", "poker", "deck"], "The card flips up."],
  ["PlayingCards", "playing-cards", "Playing cards", "app", "tilt", ["cards", "game", "poker", "deck"], "The cards shuffle."],
  ["PlayingCardsFan", "playing-cards-fan", "Hand of cards", "app", "tilt", ["cards", "hand", "poker", "game"], "The cards fan out."],
  ["PlayOff", "play-off", "Can't play", "media", "shake", ["play", "disabled", "off", "unavailable"], "The slash strikes."],
  ["SquarePlay", "square-play", "Play in a square", "media", "nudge-right", ["play", "video", "start", "media"], "It steps forward."],
  ["Plug", "plug-power", "Power plug", "devices", "nudge-up", ["plug", "power", "electric", "cable"], "It plugs in."],
  ["Plus", "plus-sign", "Plus", "actions", "pop", ["plus", "add", "new", "more"], "The plus draws."],
  ["SquarePlus", "square-plus", "Plus in a square", "actions", "pop", ["add", "new", "create", "plus"], "The plus draws."],
  ["PocketKnife", "pocket-knife", "Pocket knife", "app", "swing", ["knife", "tool", "multitool", "camping"], "The blade flicks out."],
  ["PointerOff", "pointer-off", "Pointer off", "actions", "shake", ["pointer", "hand", "off", "disabled"], "The slash strikes."],
  ["PoundSterling", "pound-sterling", "Pound", "commerce", "pop", ["money", "currency", "gbp", "price"], "The sign draws."],
];

/** the smooth curve (no overshoot) for keyframe motions that carry their own bounce */
const E = "cubic-bezier(.22,1,.36,1)";
/** a keyframe block named after the icon */
const kf = (icon: string, name: string, frames: string) => `@keyframes ki-${icon}-${name}{${frames}}`;
/** an animation of one of the icon's keyframes */
const an = (icon: string, name: string, ms: number, delay = 0, fill = "") => `ki-${icon}-${name} ${ms}ms ${E} ${delay}ms${fill ? " " + fill : ""}`;
/** a fixed pivot on the 24 grid */
const V = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a line drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: an(icon, "draw", ms, delay, "backwards") });
const r2 = (n: number) => +n.toFixed(2);
/** moves out and springs back past its rest */
const nudge = (dx: number, dy: number) =>
  `0%{transform:none}35%{transform:translate(${dx}px,${dy}px)}65%{transform:translate(${r2(-dx * 0.2)}px,${r2(-dy * 0.2)}px)}100%{transform:none}`;
/** a quick squeeze and spring back (a screen, a box, a sign) */
const SQUEEZE = "0%{transform:none}30%{transform:scale(.95)}60%{transform:scale(1.02)}100%{transform:none}";
/** a small sideways shake */
const SHAKE = "0%{transform:none}20%{transform:translateX(-.8px)}40%{transform:translateX(.7px)}60%{transform:translateX(-.4px)}80%{transform:translateX(.2px)}100%{transform:none}";
/** a sparkle that winks out and back, bigger */
const TWINKLE = "0%{transform:none}30%{transform:scale(.2)}60%{transform:scale(1.3)}100%{transform:none}";
/** a press of a button or a bar */
const PRESS = "0%{transform:none}30%{transform:scale(.7)}60%{transform:scale(1.1)}100%{transform:none}";
/** the same keyframe motion for several parts */
const each = (parts: string[], m: object) => Object.fromEntries(parts.map((p) => [p, m]));
/** the "-off" family: the pieces shake while the slash draws itself across */
const off = (icon: string, pieces: string[], slash: string, note = "The pieces give a small shake while the slash draws itself across."): Override => ({
  note,
  draw: [slash],
  motion: { ...each(pieces, { animation: an(icon, "shake", 500) }), [slash]: draw(icon, 420, 80) },
  keyframes: kf(icon, "shake", SHAKE) + drawKf(icon),
});
/** a box (square, octagon) that gives a little while the marks inside draw themselves one after another */
const boxDraws = (icon: string, box: string, marks: string[], note: string, ms = 380, step = 110): Override => ({
  note,
  draw: marks,
  motion: { [box]: { animation: an(icon, "box", 550) }, ...Object.fromEntries(marks.map((p, i) => [p, draw(icon, ms, 80 + i * step)])) },
  keyframes: kf(icon, "box", SQUEEZE) + drawKf(icon),
});
/** a long arrow: the head draws back like a spring and shoots on, the shaft shortening from its tail */
const arrow = (icon: string, dx: number, dy: number, origin: string): Override => ({
  note: "The arrow draws back along its line like a spring and shoots forward again.",
  motion: {
    p0: { animation: an(icon, "head", 650) },
    p1: { origin, animation: an(icon, "shaft", 650) },
  },
  keyframes:
    kf(icon, "head", `0%{transform:none}30%{transform:translate(${-dx}px,${-dy}px)}60%{transform:translate(${r2(dx * 0.4)}px,${r2(dy * 0.4)}px)}100%{transform:none}`) +
    kf(icon, "shaft", `0%{transform:none}30%{transform:scale(${dx ? 0.92 : 1},${dy ? 0.92 : 1})}60%{transform:scale(${dx ? 1.03 : 1},${dy ? 1.03 : 1})}100%{transform:none}`),
});
/** a panel divider that slides one way with its chevron following */
const panel = (icon: string, dx: number, dy: number, note: string): Override => ({
  note,
  motion: { p1: { animation: an(icon, "edge", 600) }, p2: { animation: an(icon, "chevron", 600, 50) } },
  keyframes: kf(icon, "edge", nudge(dx, dy)) + kf(icon, "chevron", nudge(r2(dx * 0.87), r2(dy * 0.87))),
});
/** dashes that step out one after another (a hidden panel trying to open) */
const dashes = (icon: string, groups: [string[], number, number][], note: string): Override => ({
  note,
  motion: Object.fromEntries(groups.flatMap(([ps], g) => ps.map((p, i) => [p, { animation: an(icon, `step${g}`, 500, i * 60) }]))),
  keyframes: groups.map(([, dx, dy], g) => kf(icon, `step${g}`, nudge(dx, dy))).join(""),
});
/** a pen or pencil scribbling around its nib */
const SCRIBBLE = "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}";
/** a currency sign: bars slide in from the left while the stroke writes itself */
const currency = (icon: string, stroke: string, bars: string[], note: string): Override => ({
  note,
  draw: [stroke],
  motion: {
    ...Object.fromEntries(bars.map((p, i) => [p, { origin: "0% 50%", animation: an(icon, "bar", 450, i * 70, "backwards") }])),
    [stroke]: draw(icon, 500, 120),
  },
  keyframes: drawKf(icon) + kf(icon, "bar", "0%{transform:scaleX(0)}60%{transform:scaleX(1.08)}100%{transform:none}"),
});

export const motions: Record<string, Override> = {
  "milk-off": off("milk-off", ["p0", "p1", "p2"], "p3"),

  "square-minus": boxDraws("square-minus", "p0", ["p1"], "The box gives a little and the minus draws itself across it."),

  "mirror-rectangular": {
    note: "The mirror catches the light: its two glints draw across the glass one after the other.",
    draw: ["p0", "p1"],
    motion: { p2: { animation: an("mirror-rectangular", "glass", 600) }, p1: draw("mirror-rectangular", 380, 60), p0: draw("mirror-rectangular", 300, 200) },
    keyframes: drawKf("mirror-rectangular") + kf("mirror-rectangular", "glass", "0%{transform:none}35%{transform:scale(1.03)}100%{transform:none}"),
  },

  "mirror-round": {
    note: "The round mirror swivels on its stand and its glints flash across the glass.",
    draw: ["p0", "p2"],
    motion: {
      p4: { ...V(12, 18), animation: an("mirror-round", "swivel", 750) },
      p2: { ...V(12, 18), from: { strokeDasharray: 1 }, animation: `${an("mirror-round", "swivel", 750)}, ${an("mirror-round", "draw", 380, 120, "backwards")}` },
      p0: { ...V(12, 18), from: { strokeDasharray: 1 }, animation: `${an("mirror-round", "swivel", 750)}, ${an("mirror-round", "draw", 300, 240, "backwards")}` },
    },
    keyframes: drawKf("mirror-round") + kf("mirror-round", "swivel", "0%{transform:none}30%{transform:rotate(-7deg)}60%{transform:rotate(3deg)}85%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "monitor-activity": {
    note: "The screen gives a small squeeze and the pulse line traces itself across it.",
    draw: ["p1"],
    motion: { p3: { animation: an("monitor-activity", "screen", 550) }, p1: draw("monitor-activity", 600, 80) },
    keyframes: drawKf("monitor-activity") + kf("monitor-activity", "screen", SQUEEZE),
  },

  "monitor-cloud": {
    note: "The cloud on the screen drifts up and across and settles back.",
    motion: { p0: { animation: an("monitor-cloud", "drift", 800) }, p3: { animation: an("monitor-cloud", "screen", 550) } },
    keyframes:
      kf("monitor-cloud", "drift", "0%{transform:none}35%{transform:translate(.7px,-1.1px)}65%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      kf("monitor-cloud", "screen", SQUEEZE),
  },

  "monitor-dot": {
    note: "The notification dot pulses big on the corner of the screen, which answers with a squeeze.",
    motion: {
      p3: { animation: an("monitor-dot", "dot", 650) },
      p1: { animation: an("monitor-dot", "screen", 550, 80) },
    },
    keyframes:
      kf("monitor-dot", "dot", "0%{transform:none}30%{transform:scale(1.3)}55%{transform:scale(.9)}80%{transform:scale(1.05)}100%{transform:none}") +
      kf("monitor-dot", "screen", SQUEEZE),
  },

  "monitor-pause": {
    note: "The two bars press down one after the other on the screen.",
    motion: {
      p0: { origin: "50% 100%", animation: an("monitor-pause", "bar", 500) },
      p1: { origin: "50% 100%", animation: an("monitor-pause", "bar", 500, 90) },
      p2: { animation: an("monitor-pause", "screen", 550) },
    },
    keyframes:
      kf("monitor-pause", "bar", "0%{transform:none}35%{transform:scaleY(.55)}70%{transform:scaleY(1.05)}100%{transform:none}") +
      kf("monitor-pause", "screen", SQUEEZE),
  },

  "monitor-pc": {
    note: "The tower's power light blinks on, its drive slots draw in, and the screen wakes with a squeeze.",
    draw: ["p2", "p3"],
    motion: {
      p4: { animation: an("monitor-pc", "led", 500) },
      p3: draw("monitor-pc", 320, 100),
      p2: draw("monitor-pc", 320, 180),
      p0: { animation: an("monitor-pc", "screen", 550, 220) },
    },
    keyframes: drawKf("monitor-pc") + kf("monitor-pc", "led", "0%{transform:none}30%{transform:scale(2.2)}60%{transform:scale(.8)}100%{transform:none}") + kf("monitor-pc", "screen", SQUEEZE),
  },

  "monitor-speaker": {
    note: "The speaker thumps twice: the cone pumps and the cabinet gives with each beat.",
    motion: {
      p4: { animation: an("monitor-speaker", "cone", 700) },
      p1: { animation: an("monitor-speaker", "cone", 700, 60) },
      p2: { animation: an("monitor-speaker", "box", 700) },
    },
    keyframes:
      kf("monitor-speaker", "cone", "0%{transform:none}18%{transform:scale(1.35)}36%{transform:scale(.95)}54%{transform:scale(1.25)}75%{transform:scale(.98)}100%{transform:none}") +
      kf("monitor-speaker", "box", "0%{transform:none}18%{transform:scale(1.03)}36%{transform:none}54%{transform:scale(1.02)}100%{transform:none}"),
  },

  "monitor-stop": {
    note: "The stop square presses in on the screen and springs back.",
    motion: { p3: { animation: an("monitor-stop", "press", 550) }, p2: { animation: an("monitor-stop", "screen", 550, 60) } },
    keyframes: kf("monitor-stop", "press", PRESS) + kf("monitor-stop", "screen", SQUEEZE),
  },

  "monitor-up": {
    note: "The arrow rises up the screen, its head ahead of its shaft, and settles.",
    motion: {
      p0: { animation: an("monitor-up", "rise", 600) },
      p1: { origin: "50% 100%", animation: an("monitor-up", "shaft", 600, 40) },
    },
    keyframes:
      kf("monitor-up", "rise", nudge(0, -1.5)) +
      kf("monitor-up", "shaft", "0%{transform:none}35%{transform:translateY(-1px) scaleY(1.1)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "monitor-x": {
    note: "The screen gives a squeeze and the cross strikes on it, stroke by stroke.",
    draw: ["p0", "p1"],
    motion: { p2: { animation: an("monitor-x", "screen", 550) }, p0: draw("monitor-x", 300, 100), p1: draw("monitor-x", 300, 210) },
    keyframes: drawKf("monitor-x") + kf("monitor-x", "screen", SQUEEZE),
  },

  mop: {
    note: "The mop swings from the top of its handle and its head sweeps back and forth across the floor, trailing a beat behind.",
    motion: {
      p1: { ...V(22, 2), animation: an("mop", "swing", 800) },
      p2: { ...V(22, 2), animation: an("mop", "swing", 800, 30) },
      p0: { ...V(22, 2), animation: an("mop", "head", 800, 50) },
    },
    keyframes:
      kf("mop", "swing", "0%{transform:none}25%{transform:rotate(5deg)}55%{transform:rotate(-4deg)}80%{transform:rotate(1.5deg)}100%{transform:none}") +
      kf("mop", "head", "0%{transform:none}25%{transform:rotate(6deg) skewX(-4deg)}55%{transform:rotate(-5deg) skewX(4deg)}80%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "mop-sparkles": {
    note: "The mop sweeps from its handle and the floor sparkles behind it, one twinkle after another.",
    motion: {
      p3: { ...V(22, 2), animation: an("mop-sparkles", "swing", 800) },
      p8: { ...V(22, 2), animation: an("mop-sparkles", "swing", 800, 30) },
      p1: { ...V(22, 2), animation: an("mop-sparkles", "head", 800, 50) },
      p0: { ...V(22, 2), animation: an("mop-sparkles", "head", 800, 50) },
      ...each(["p6", "p7"], { animation: an("mop-sparkles", "twinkle", 500, 200) }),
      ...each(["p2", "p9"], { animation: an("mop-sparkles", "twinkle", 500, 300) }),
      ...each(["p4", "p5"], { animation: an("mop-sparkles", "twinkle", 500, 400) }),
    },
    keyframes:
      kf("mop-sparkles", "swing", "0%{transform:none}25%{transform:rotate(5deg)}55%{transform:rotate(-4deg)}80%{transform:rotate(1.5deg)}100%{transform:none}") +
      kf("mop-sparkles", "head", "0%{transform:none}25%{transform:rotate(6deg) skewX(-4deg)}55%{transform:rotate(-5deg) skewX(4deg)}80%{transform:rotate(2deg)}100%{transform:none}") +
      kf("mop-sparkles", "twinkle", TWINKLE),
  },

  moped: {
    note: "The moped pulls away: the frame lifts forward on its suspension and the wheels squash on the road.",
    motion: {
      ...each(["p0", "p1", "p2"], { animation: an("moped", "frame", 650) }),
      ...each(["p3", "p4"], { origin: "50% 100%", animation: an("moped", "wheel", 650) }),
    },
    keyframes:
      kf("moped", "frame", "0%{transform:none}30%{transform:translate(.6px,-.8px) rotate(-2deg)}60%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      kf("moped", "wheel", "0%{transform:none}30%{transform:scale(1.06,.92)}60%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  mosque: {
    note: "The crescent rises on its spire and rocks, while the dome swells under it.",
    motion: {
      p0: { animation: an("mosque", "moon", 700) },
      p1: { origin: "50% 100%", animation: an("mosque", "spire", 700) },
      p3: { origin: "50% 100%", animation: an("mosque", "dome", 700) },
    },
    keyframes:
      kf("mosque", "moon", "0%{transform:none}35%{transform:translateY(-1.2px) rotate(-14deg)}65%{transform:translateY(.2px) rotate(5deg)}100%{transform:none}") +
      kf("mosque", "spire", "0%{transform:none}35%{transform:scaleY(1.4)}65%{transform:scaleY(.95)}100%{transform:none}") +
      kf("mosque", "dome", "0%{transform:none}35%{transform:scale(1.04)}65%{transform:scale(.99)}100%{transform:none}"),
  },

  motorbike: {
    note: "The motorbike revs: the frame trembles over the wheels, then lurches forward as they squash on the road.",
    motion: {
      ...each(["p0", "p1", "p2"], { animation: an("motorbike", "frame", 800) }),
      ...each(["p3", "p4"], { origin: "50% 100%", animation: an("motorbike", "wheel", 800) }),
    },
    keyframes:
      kf("motorbike", "frame", "0%{transform:none}12%{transform:translate(-.3px,.2px)}24%{transform:translate(.3px,-.2px)}36%{transform:translate(-.3px,.1px)}60%{transform:translate(1px,-.5px) rotate(-2deg)}82%{transform:translate(-.2px,.1px)}100%{transform:none}") +
      kf("motorbike", "wheel", "0%,40%{transform:none}60%{transform:scale(1.06,.92)}82%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  "mound-shovel": {
    note: "The shovel pushes into the mound along its handle and levers back, and the soil gives under it.",
    motion: {
      ...each(["p0", "p1", "p3"], { ...V(15, 15), animation: an("mound-shovel", "dig", 800) }),
      p2: { origin: "50% 100%", animation: an("mound-shovel", "mound", 800) },
    },
    keyframes:
      kf("mound-shovel", "dig", "0%{transform:none}30%{transform:translate(-.5px,1.1px)}60%{transform:rotate(-8deg)}85%{transform:rotate(2deg)}100%{transform:none}") +
      kf("mound-shovel", "mound", "0%,20%{transform:none}32%{transform:scale(1.02,.95)}55%{transform:none}100%{transform:none}"),
  },

  "mouse-left": {
    note: "The left button clicks in and the mouse gives a little under the finger.",
    motion: {
      p2: { animation: an("mouse-left", "click", 500) },
      p1: { origin: "50% 100%", animation: an("mouse-left", "body", 500) },
      p0: { animation: an("mouse-left", "wheel", 500) },
    },
    keyframes:
      kf("mouse-left", "click", PRESS) +
      kf("mouse-left", "body", "0%{transform:none}30%{transform:scaleY(.97)}60%{transform:none}100%{transform:none}") +
      kf("mouse-left", "wheel", nudge(0, .6)),
  },

  "mouse-off": off("mouse-off", ["p0", "p1", "p2"], "p3"),
  "mouse-pointer-2-off": off("mouse-pointer-2-off", ["p0", "p2"], "p1"),

  "mouse-pointer-ban": {
    note: "The pointer taps toward the sign, and the ban twists back at it.",
    motion: {
      p0: { origin: "0% 0%", animation: an("mouse-pointer-ban", "tap", 600) },
      p1: { ...V(16, 16), animation: an("mouse-pointer-ban", "twist", 650, 120) },
      p2: { ...V(16, 16), animation: an("mouse-pointer-ban", "twist", 650, 120) },
    },
    keyframes:
      kf("mouse-pointer-ban", "tap", "0%{transform:none}30%{transform:translate(.8px,.8px) scale(.9)}60%{transform:translate(-.2px,-.2px)}100%{transform:none}") +
      kf("mouse-pointer-ban", "twist", "0%{transform:none}30%{transform:rotate(-25deg)}60%{transform:rotate(8deg)}100%{transform:none}"),
  },

  "square-dashed-mouse-pointer": {
    note: "The pointer clicks into the dashed box, which answers with a squeeze.",
    motion: {
      p0: { origin: "0% 0%", animation: an("square-dashed-mouse-pointer", "tap", 600) },
      ...each(["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"], { ...V(11, 11), animation: an("square-dashed-mouse-pointer", "box", 600, 100) }),
    },
    keyframes:
      kf("square-dashed-mouse-pointer", "tap", "0%{transform:none}30%{transform:translate(-.9px,-.9px) scale(.9)}60%{transform:translate(.2px,.2px)}100%{transform:none}") +
      kf("square-dashed-mouse-pointer", "box", SQUEEZE),
  },

  "mouse-right": {
    note: "The right button clicks in and the mouse gives a little under the finger.",
    motion: {
      p2: { animation: an("mouse-right", "click", 500) },
      p1: { origin: "50% 100%", animation: an("mouse-right", "body", 500) },
      p0: { animation: an("mouse-right", "wheel", 500) },
    },
    keyframes:
      kf("mouse-right", "click", PRESS) +
      kf("mouse-right", "body", "0%{transform:none}30%{transform:scaleY(.97)}60%{transform:none}100%{transform:none}") +
      kf("mouse-right", "wheel", nudge(0, .6)),
  },

  mouth: {
    note: "The lips open and close as if saying a word, the line between them following.",
    motion: {
      p1: { ...V(12, 12), animation: an("mouth", "talk", 750) },
      p0: { ...V(12, 12), animation: an("mouth", "line", 750) },
    },
    keyframes:
      kf("mouth", "talk", "0%{transform:none}25%{transform:scaleY(1.18)}45%{transform:scaleY(.88)}65%{transform:scaleY(1.1)}85%{transform:scaleY(.97)}100%{transform:none}") +
      kf("mouth", "line", "0%{transform:none}25%{transform:translateY(.6px)}45%{transform:translateY(-.3px)}65%{transform:translateY(.4px)}85%{transform:none}100%{transform:none}"),
  },

  "mouth-off": off("mouth-off", ["p0", "p1", "p3", "p4"], "p2"),

  "move-diagonal-2": {
    note: "The two arrowheads stretch apart along the diagonal and the line stretches with them.",
    motion: {
      p0: { animation: an("move-diagonal-2", "br", 600) },
      p1: { animation: an("move-diagonal-2", "tl", 600) },
      p2: { animation: an("move-diagonal-2", "line", 600) },
    },
    keyframes:
      kf("move-diagonal-2", "br", nudge(1, 1)) +
      kf("move-diagonal-2", "tl", nudge(-1, -1)) +
      kf("move-diagonal-2", "line", "0%{transform:none}35%{transform:scale(1.13)}65%{transform:scale(.97)}100%{transform:none}"),
  },

  "move-down": arrow("move-down", 0, 1.5, "50% 0%"),
  "move-down-left": arrow("move-down-left", -1.2, 1.2, "100% 0%"),
  "move-down-right": arrow("move-down-right", 1.2, 1.2, "0% 0%"),
  "move-left": arrow("move-left", -1.5, 0, "100% 50%"),
  "move-up": arrow("move-up", 0, -1.5, "50% 100%"),
  "move-up-left": arrow("move-up-left", -1.2, -1.2, "100% 100%"),

  "square-letter-m": boxDraws("square-letter-m", "p1", ["p0"], "The box gives a little and the M writes itself inside it.", 600),

  "navigation-2": {
    note: "The arrow gathers itself, then pushes on in the direction it points.",
    motion: { p0: { animation: an("navigation-2", "go", 650) } },
    keyframes: kf("navigation-2", "go", "0%{transform:none}30%{transform:translateY(.6px) scale(.9)}60%{transform:translateY(-1.2px)}100%{transform:none}"),
  },

  "navigation-2-off": off("navigation-2-off", ["p0", "p1"], "p2"),

  "nepali-rupee": currency("nepali-rupee", "p0", ["p2"], "The top bar slides in, the stroke writes itself under it and the second curve follows."),

  "non-binary": {
    note: "The asterisk's crossed arms twist about its centre while the circle below gives a bounce.",
    motion: {
      p1: { ...V(12, 6), animation: an("non-binary", "twist", 700) },
      p2: { ...V(12, 6), animation: an("non-binary", "twist", 700) },
      p3: { origin: "50% 100%", animation: an("non-binary", "ring", 600, 80) },
    },
    keyframes:
      kf("non-binary", "twist", "0%{transform:none}35%{transform:rotate(30deg)}65%{transform:rotate(-8deg)}100%{transform:none}") +
      kf("non-binary", "ring", "0%{transform:none}35%{transform:scale(1.05,.94)}65%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  "notebook-dot": {
    note: "The cover lifts on its rings and falls shut, and the dot pops on its corner.",
    motion: {
      ...each(["p5", "p0"], { ...V(4, 12), animation: an("notebook-dot", "cover", 700) }),
      p6: { animation: an("notebook-dot", "dot", 600, 200) },
    },
    keyframes:
      kf("notebook-dot", "cover", "0%{transform:none}35%{transform:scaleX(.9) skewY(-4deg)}70%{transform:scaleX(1.02)}100%{transform:none}") +
      kf("notebook-dot", "dot", "0%{transform:none}30%{transform:scale(1.35)}60%{transform:scale(.9)}100%{transform:none}"),
  },

  "notebook-text": {
    note: "The rings hop and the lines of text write themselves, top to bottom.",
    draw: ["p5", "p6", "p7"],
    motion: {
      p0: { animation: an("notebook-text", "ring", 450) },
      p1: { animation: an("notebook-text", "ring", 450, 50) },
      p2: { animation: an("notebook-text", "ring", 450, 100) },
      p3: { animation: an("notebook-text", "ring", 450, 150) },
      p5: draw("notebook-text", 350, 120),
      p6: draw("notebook-text", 350, 220),
      p7: draw("notebook-text", 350, 320),
    },
    keyframes: drawKf("notebook-text") + kf("notebook-text", "ring", nudge(-.7, 0)),
  },

  "notepad-text-dashed": {
    note: "The rings of the draft hop and its lines write themselves on the pad, top to bottom.",
    draw: ["p10", "p11", "p12"],
    motion: {
      p0: { animation: an("notepad-text-dashed", "ring", 450) },
      p1: { animation: an("notepad-text-dashed", "ring", 450, 50) },
      p2: { animation: an("notepad-text-dashed", "ring", 450, 100) },
      p10: draw("notepad-text-dashed", 350, 120),
      p11: draw("notepad-text-dashed", 350, 220),
      p12: draw("notepad-text-dashed", 350, 320),
    },
    keyframes: drawKf("notepad-text-dashed") + kf("notepad-text-dashed", "ring", nudge(0, -.8)),
  },

  numbers: {
    note: "The one, the two and the three hop up in turn, like counting.",
    motion: {
      p0: { animation: an("numbers", "hop", 500) },
      p2: { animation: an("numbers", "hop", 500, 100) },
      p1: { animation: an("numbers", "hop", 500, 200) },
    },
    keyframes: kf("numbers", "hop", "0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "nut-off": off("nut-off", ["p0", "p1", "p3", "p4"], "p2"),

  octagon: {
    note: "The octagon turns an eighth of a turn with a spring and lands on itself.",
    motion: { p0: { ...V(12, 12), animation: an("octagon", "turn", 700) } },
    keyframes: kf("octagon", "turn", "0%{transform:none}65%{transform:rotate(49deg)}100%{transform:rotate(45deg)}"),
  },

  "octagon-minus": boxDraws("octagon-minus", "p0", ["p1"], "The sign gives a squeeze and the bar draws itself across it."),

  omega: {
    note: "The omega writes itself in one stroke, from foot to foot.",
    draw: ["p0"],
    motion: { p0: draw("omega", 750) },
    keyframes: drawKf("omega"),
  },

  origami: {
    note: "The paper bird flaps its wing from its fold and nods its head.",
    motion: {
      p1: { ...V(12, 20), animation: an("origami", "flap", 750) },
      p0: { ...V(12, 12), animation: an("origami", "nod", 750, 60) },
    },
    keyframes:
      kf("origami", "flap", "0%{transform:none}20%{transform:rotate(-8deg)}40%{transform:rotate(3deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(1deg)}100%{transform:none}") +
      kf("origami", "nod", "0%{transform:none}30%{transform:rotate(6deg)}60%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  "package-2": {
    note: "The box hops and its lid lifts a little higher before it lands.",
    motion: {
      p1: { animation: an("package-2", "box", 600) },
      p0: { animation: an("package-2", "lid", 600, 40) },
      p2: { animation: an("package-2", "lid", 600, 40) },
    },
    keyframes: kf("package-2", "box", nudge(0, -1)) + kf("package-2", "lid", nudge(0, -1.6)),
  },

  "package-minus": {
    note: "The box hops and the minus draws itself beside it.",
    draw: ["p1"],
    motion: {
      ...each(["p0", "p2", "p3", "p4"], { animation: an("package-minus", "box", 550) }),
      p1: draw("package-minus", 350, 150),
    },
    keyframes: kf("package-minus", "box", nudge(0, -1)) + drawKf("package-minus"),
  },

  "package-pen": {
    note: "The pen scribbles from its nib on the box's corner, which gives a little under it.",
    motion: {
      p1: { ...V(13.5, 21), animation: an("package-pen", "write", 700) },
      ...each(["p0", "p2", "p3", "p4"], { animation: an("package-pen", "box", 700) }),
    },
    keyframes: kf("package-pen", "write", SCRIBBLE) + kf("package-pen", "box", "0%{transform:none}22%{transform:translateY(.4px)}45%{transform:none}68%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "package-question-mark": {
    note: "The box hops and the question mark nods beside it, its dot bouncing.",
    motion: {
      ...each(["p0", "p1", "p2", "p3"], { animation: an("package-question-mark", "box", 550) }),
      p4: { ...V(19, 19), animation: an("package-question-mark", "nod", 700, 100) },
      p5: { animation: an("package-question-mark", "dot", 500, 200) },
    },
    keyframes:
      kf("package-question-mark", "box", nudge(0, -1)) +
      kf("package-question-mark", "nod", "0%{transform:none}30%{transform:rotate(-14deg)}60%{transform:rotate(8deg)}85%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("package-question-mark", "dot", nudge(0, -.8)),
  },

  "paintbrush-vertical": {
    note: "The brush sweeps side to side from the hand, its bristles flexing a beat behind.",
    motion: {
      p3: { ...V(12, 19), animation: an("paintbrush-vertical", "sweep", 800) },
      ...each(["p0", "p1", "p2"], { ...V(12, 19), animation: an("paintbrush-vertical", "bristles", 800) }),
    },
    keyframes:
      kf("paintbrush-vertical", "sweep", "0%{transform:none}25%{transform:rotate(-7deg)}55%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("paintbrush-vertical", "bristles", "0%{transform:none}25%{transform:rotate(-9deg) skewX(3deg)}55%{transform:rotate(8deg) skewX(-3deg)}80%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  panda: {
    note: "The panda's head bobs, its ears flick and its eyes blink.",
    motion: {
      p3: { origin: "50% 100%", animation: an("panda", "head", 700) },
      p4: { animation: an("panda", "ear-left", 600, 80) },
      p2: { animation: an("panda", "ear-right", 600, 80) },
      p5: { animation: an("panda", "blink", 400, 250) },
      p1: { animation: an("panda", "blink", 400, 250) },
      p0: { animation: an("panda", "nose", 600, 100) },
    },
    keyframes:
      kf("panda", "head", "0%{transform:none}30%{transform:scale(1.03,.96)}60%{transform:scale(.99,1.02)}100%{transform:none}") +
      kf("panda", "ear-left", "0%{transform:none}35%{transform:rotate(-25deg)}65%{transform:rotate(8deg)}100%{transform:none}") +
      kf("panda", "ear-right", "0%{transform:none}35%{transform:rotate(25deg)}65%{transform:rotate(-8deg)}100%{transform:none}") +
      kf("panda", "blink", "0%{transform:none}45%{transform:scale(.3)}100%{transform:none}") +
      kf("panda", "nose", nudge(0, .5)),
  },

  "panel-bottom-close": panel("panel-bottom-close", 0, 1.5, "The divider slides down as the panel closes and the chevron points the way."),

  "panel-bottom-dashed": dashes("panel-bottom-dashed", [[["p3", "p4", "p1", "p2"], 0, -1.2]], "The dashed divider steps up piece by piece, left to right, as if the hidden panel wants to open."),
  "panel-left-dashed": dashes("panel-left-dashed", [[["p3", "p4", "p1", "p2"], 1.2, 0]], "The dashed divider steps out piece by piece, top to bottom, as if the hidden sidebar wants to open."),
  "panel-left-right-dashed": dashes(
    "panel-left-right-dashed",
    [
      [["p7", "p4", "p5", "p6"], -1, 0],
      [["p3", "p0", "p1", "p2"], 1, 0],
    ],
    "Both dashed dividers step outward piece by piece, top to bottom, as if the side panels want to open.",
  ),
  "panel-right-dashed": dashes("panel-right-dashed", [[["p3", "p4", "p1", "p2"], -1.2, 0]], "The dashed divider steps in piece by piece, top to bottom, as if the hidden panel wants to open."),

  "panels-left-bottom": {
    note: "The sidebar's edge and then the bottom panel's edge slide out and settle into place.",
    motion: { p1: { animation: an("panels-left-bottom", "side", 600) }, p2: { animation: an("panels-left-bottom", "bottom", 600, 90) } },
    keyframes: kf("panels-left-bottom", "side", nudge(1.4, 0)) + kf("panels-left-bottom", "bottom", nudge(0, -1.4)),
  },

  "panels-right-bottom": {
    note: "The right panel's edge and then the bottom panel's edge slide out and settle into place.",
    motion: { p2: { animation: an("panels-right-bottom", "side", 600) }, p1: { animation: an("panels-right-bottom", "bottom", 600, 90) } },
    keyframes: kf("panels-right-bottom", "side", nudge(-1.4, 0)) + kf("panels-right-bottom", "bottom", nudge(0, -1.4)),
  },

  "rows-3": {
    note: "The two dividers part, opening the middle row, and settle back.",
    motion: { p1: { animation: an("rows-3", "up", 600) }, p2: { animation: an("rows-3", "down", 600, 70) } },
    keyframes: kf("rows-3", "up", nudge(0, -1.2)) + kf("rows-3", "down", nudge(0, 1.2)),
  },

  "panel-top-bottom-dashed": dashes(
    "panel-top-bottom-dashed",
    [
      [["p5", "p7", "p1", "p3"], 0, -1],
      [["p4", "p6", "p0", "p2"], 0, 1],
    ],
    "Both dashed dividers step outward piece by piece, left to right, as if the header and footer want to open.",
  ),

  "panel-top-close": panel("panel-top-close", 0, -1.5, "The divider slides up as the panel closes and the chevron points the way."),
  "panel-top-dashed": dashes("panel-top-dashed", [[["p3", "p4", "p1", "p2"], 0, 1.2]], "The dashed divider steps down piece by piece, left to right, as if the hidden header wants to open."),
  "panel-top-open": panel("panel-top-open", 0, 1.5, "The divider slides down as the panel opens and the chevron points the way."),

  "paper-bag": {
    note: "The bag is set down: it drops, squashes on its base and its folded top settles a beat later.",
    motion: {
      p0: { ...V(12, 21), animation: an("paper-bag", "drop", 700) },
      p1: { ...V(12, 21), animation: an("paper-bag", "drop", 700, 50) },
    },
    keyframes: kf("paper-bag", "drop", "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.1px) scale(1.03,.95)}80%{transform:scale(.99,1.01)}100%{transform:none}"),
  },

  parasol: {
    note: "The parasol sways in the breeze from where its pole meets the sand, the canopy trailing behind.",
    motion: {
      p0: { ...V(18.2, 21), animation: an("parasol", "sway", 900) },
      p1: { ...V(18.2, 21), animation: an("parasol", "sway", 900, 50) },
    },
    keyframes: kf("parasol", "sway", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  parentheses: {
    note: "The two brackets open apart and close back around their contents.",
    motion: { p0: { animation: an("parentheses", "left", 600) }, p1: { animation: an("parentheses", "right", 600) } },
    keyframes: kf("parentheses", "left", nudge(-1.2, 0)) + kf("parentheses", "right", nudge(1.2, 0)),
  },

  park: {
    note: "The tree sways from its trunk beside the bench, and the sun glows.",
    motion: {
      ...each(["p1", "p5", "p6"], { ...V(8, 20), animation: an("park", "sway", 850) }),
      p7: { animation: an("park", "sun", 700, 100) },
    },
    keyframes:
      kf("park", "sway", "0%{transform:none}25%{transform:rotate(-5deg)}55%{transform:rotate(3deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("park", "sun", "0%{transform:none}35%{transform:scale(1.3)}65%{transform:scale(.95)}100%{transform:none}"),
  },

  "parking-meter": {
    note: "A coin goes in: the slot presses down and the dial swings round and back.",
    motion: {
      ...each(["p0", "p1"], { animation: an("parking-meter", "slot", 550) }),
      p4: { ...V(12, 9), animation: an("parking-meter", "dial", 750, 120) },
      p3: { animation: an("parking-meter", "head", 550) },
    },
    keyframes:
      kf("parking-meter", "slot", nudge(0, .7)) +
      kf("parking-meter", "dial", "0%{transform:none}30%{transform:rotate(-30deg)}60%{transform:rotate(12deg)}85%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("parking-meter", "head", "0%{transform:none}30%{transform:scale(.97)}60%{transform:scale(1.01)}100%{transform:none}"),
  },

  "square-letter-p-off": off("square-letter-p-off", ["p0", "p1", "p3", "p4"], "p2"),

  "pencil-sparkles": {
    note: "The pencil scribbles from its tip while sparkles twinkle around it, one after another.",
    motion: {
      ...each(["p3", "p1"], { ...V(2.5, 21.5), animation: an("pencil-sparkles", "write", 700) }),
      ...each(["p5", "p6"], { animation: an("pencil-sparkles", "twinkle", 500, 150) }),
      ...each(["p0", "p7"], { animation: an("pencil-sparkles", "twinkle", 500, 250) }),
      ...each(["p2", "p4"], { animation: an("pencil-sparkles", "twinkle", 500, 350) }),
    },
    keyframes: kf("pencil-sparkles", "write", SCRIBBLE) + kf("pencil-sparkles", "twinkle", TWINKLE),
  },

  "pen-off": off("pen-off", ["p0", "p1"], "p2"),

  pentagon: {
    note: "The pentagon twists on its centre with a spring and settles.",
    motion: { p0: { ...V(12, 12.5), animation: an("pentagon", "twist", 700) } },
    keyframes: kf("pentagon", "twist", "0%{transform:none}30%{transform:rotate(-18deg)}60%{transform:rotate(6deg)}85%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "perfume-bottle": {
    note: "The bulb is squeezed and the mist puffs out of the nozzle, drop by drop.",
    motion: {
      p7: { animation: an("perfume-bottle", "bulb", 600) },
      p1: { origin: "0% 50%", animation: an("perfume-bottle", "tube", 600) },
      p5: { animation: an("perfume-bottle", "mist", 500, 150, "backwards") },
      p4: { animation: an("perfume-bottle", "mist", 500, 230, "backwards") },
      p3: { animation: an("perfume-bottle", "mist", 500, 310, "backwards") },
    },
    keyframes:
      kf("perfume-bottle", "bulb", "0%{transform:none}30%{transform:scale(.82)}60%{transform:scale(1.04)}100%{transform:none}") +
      kf("perfume-bottle", "tube", "0%{transform:none}30%{transform:scale(.96)}60%{transform:none}100%{transform:none}") +
      kf("perfume-bottle", "mist", "0%{transform:translate(2.5px,.5px) scale(.3);opacity:0}60%{transform:scale(1.4);opacity:1}100%{transform:none;opacity:1}"),
  },

  phi: {
    note: "The ring of the phi writes itself round, then the stem strikes down through it.",
    draw: ["p1", "p0"],
    motion: { p1: draw("phi", 500), p0: draw("phi", 350, 250) },
    keyframes: drawKf("phi"),
  },

  "philippine-peso": currency("philippine-peso", "p2", ["p1", "p0"], "The P writes itself and the two bars slide in across it."),

  "phone-log": {
    note: "The phone rings with a shake and the call log lines write themselves beside it.",
    draw: ["p1", "p2"],
    motion: {
      p0: { animation: an("phone-log", "ring", 700) },
      p1: draw("phone-log", 320, 150),
      p2: draw("phone-log", 280, 250),
    },
    keyframes: drawKf("phone-log") + kf("phone-log", "ring", "0%{transform:none}15%{transform:rotate(-10deg)}30%{transform:rotate(9deg)}45%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}80%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  pi: {
    note: "The top bar of the pi writes itself, then its two legs draw down.",
    draw: ["p1", "p0", "p2"],
    motion: { p1: draw("pi", 400), p0: draw("pi", 320, 180), p2: draw("pi", 350, 260) },
    keyframes: drawKf("pi"),
  },

  "picture-in-picture-arrow": {
    note: "The arrow pushes into the corner and the small player tucks away and settles.",
    motion: {
      ...each(["p0", "p1"], { animation: an("picture-in-picture-arrow", "arrow", 600) }),
      p4: { animation: an("picture-in-picture-arrow", "mini", 600, 100) },
    },
    keyframes:
      kf("picture-in-picture-arrow", "arrow", nudge(1, 1)) +
      kf("picture-in-picture-arrow", "mini", "0%{transform:none}35%{transform:translate(.6px,.6px) scale(.9)}65%{transform:translate(-.1px,-.1px) scale(1.02)}100%{transform:none}"),
  },

  "pilcrow-left": {
    note: "The bowl of the pilcrow writes itself and the arrow below points off to the left.",
    draw: ["p1"],
    motion: { p1: draw("pilcrow-left", 400), ...each(["p3", "p4"], { animation: an("pilcrow-left", "arrow", 600, 120) }) },
    keyframes: drawKf("pilcrow-left") + kf("pilcrow-left", "arrow", nudge(-1.2, 0)),
  },

  "pilcrow-right": {
    note: "The bowl of the pilcrow writes itself and the arrow below points off to the right.",
    draw: ["p1"],
    motion: { p1: draw("pilcrow-right", 400), ...each(["p3", "p4"], { animation: an("pilcrow-right", "arrow", 600, 120) }) },
    keyframes: drawKf("pilcrow-right") + kf("pilcrow-right", "arrow", nudge(1.2, 0)),
  },

  "square-pilcrow": boxDraws("square-pilcrow", "p0", ["p1", "p2", "p3"], "The box gives a little; the bowl of the pilcrow writes itself, then its two stems draw down."),

  "pill-bottle": {
    note: "The bottle is shaken and rattles from its base, the cap jiggling on top.",
    motion: {
      ...each(["p0", "p1"], { ...V(12, 22), animation: an("pill-bottle", "rattle", 650) }),
      p2: { ...V(12, 22), animation: an("pill-bottle", "cap", 650) },
    },
    keyframes:
      kf("pill-bottle", "rattle", "0%{transform:none}20%{transform:rotate(-6deg)}40%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}80%{transform:rotate(1deg)}100%{transform:none}") +
      kf("pill-bottle", "cap", "0%{transform:none}20%{transform:rotate(-6deg) translateY(-.6px)}40%{transform:rotate(5deg)}60%{transform:rotate(-3deg) translateY(-.4px)}80%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "square-pi": boxDraws("square-pi", "p0", ["p1", "p2", "p3"], "The box gives a little; the bar of the pi writes itself, then its two legs draw down."),

  "plant-pot": {
    note: "The leaves sway on their stem above the pot, which stays planted.",
    motion: {
      p0: { ...V(13, 17), animation: an("plant-pot", "sway", 850) },
      ...each(["p1", "p2"], { origin: "50% 100%", animation: an("plant-pot", "pot", 850) }),
    },
    keyframes:
      kf("plant-pot", "sway", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}") +
      kf("plant-pot", "pot", "0%{transform:none}25%{transform:scale(1.02,.97)}55%{transform:none}100%{transform:none}"),
  },

  "playing-card": {
    note: "The card flips over on its middle and the suit pops back on its face.",
    motion: {
      p1: { animation: an("playing-card", "flip", 700) },
      p0: { ...V(12, 12), animation: an("playing-card", "suit", 700) },
    },
    keyframes:
      kf("playing-card", "flip", "0%{transform:none}40%{transform:scaleX(.1)}75%{transform:scaleX(1.04)}100%{transform:none}") +
      kf("playing-card", "suit", "0%{transform:none}40%{transform:scaleX(.1)}55%{transform:scale(.6)}80%{transform:scale(1.15)}100%{transform:none}"),
  },

  "playing-cards": {
    note: "The cards are shuffled: the front one slides out and tips, the back one leans away, and they meet again.",
    motion: {
      ...each(["p2", "p0"], { ...V(14, 22), animation: an("playing-cards", "front", 700) }),
      p1: { ...V(7, 20), animation: an("playing-cards", "back", 700) },
    },
    keyframes:
      kf("playing-cards", "front", "0%{transform:none}35%{transform:translate(1px,-.3px) rotate(5deg)}70%{transform:translate(-.2px,0)}100%{transform:none}") +
      kf("playing-cards", "back", "0%{transform:none}35%{transform:translate(-.6px,0) rotate(-5deg)}70%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "playing-cards-fan": {
    note: "The hand of cards fans out wider from its base and closes back.",
    motion: {
      p2: { ...V(12, 21), animation: an("playing-cards-fan", "left", 700) },
      p1: { ...V(12, 21), animation: an("playing-cards-fan", "mid", 700, 40) },
      p0: { ...V(12, 21), animation: an("playing-cards-fan", "right", 700, 80) },
    },
    keyframes:
      kf("playing-cards-fan", "left", "0%{transform:none}35%{transform:rotate(-4deg)}65%{transform:rotate(1deg)}100%{transform:none}") +
      kf("playing-cards-fan", "mid", "0%{transform:none}35%{transform:rotate(-1.5deg)}65%{transform:rotate(.5deg)}100%{transform:none}") +
      kf("playing-cards-fan", "right", "0%{transform:none}35%{transform:rotate(4deg)}65%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "play-off": off("play-off", ["p0", "p1"], "p2"),

  "square-play": {
    note: "The box gives a little and the play mark steps forward inside it.",
    motion: { p0: { animation: an("square-play", "box", 550) }, p1: { animation: an("square-play", "step", 600, 60) } },
    keyframes: kf("square-play", "box", SQUEEZE) + kf("square-play", "step", nudge(1.2, 0)),
  },

  "plug-power": {
    note: "The plug draws back and pushes in, prongs first, the cord stretching under it.",
    motion: {
      ...each(["p1", "p3"], { animation: an("plug-power", "push", 600) }),
      p2: { animation: an("plug-power", "push", 600, 30) },
      p0: { origin: "50% 100%", animation: an("plug-power", "cord", 600, 30) },
    },
    keyframes:
      kf("plug-power", "push", "0%{transform:none}30%{transform:translateY(1px)}60%{transform:translateY(-.7px)}100%{transform:none}") +
      kf("plug-power", "cord", "0%{transform:none}30%{transform:scaleY(.8)}60%{transform:scaleY(1.14)}100%{transform:none}"),
  },

  "plus-sign": {
    note: "The plus draws itself, the bar across and then the bar down.",
    draw: ["p0", "p1"],
    motion: { p0: draw("plus-sign", 350), p1: draw("plus-sign", 350, 110) },
    keyframes: drawKf("plus-sign"),
  },

  "square-plus": boxDraws("square-plus", "p0", ["p1", "p2"], "The box gives a little and the plus draws itself inside it, bar by bar.", 340),

  "pocket-knife": {
    note: "The blade flicks out from its hinge and settles, and the corkscrew wiggles in its slot.",
    motion: {
      p4: { ...V(20, 7), animation: an("pocket-knife", "blade", 700) },
      p0: { ...V(4, 12), animation: an("pocket-knife", "screw", 600, 120) },
    },
    keyframes:
      kf("pocket-knife", "blade", "0%{transform:none}30%{transform:rotate(10deg)}60%{transform:rotate(-3deg)}85%{transform:rotate(1deg)}100%{transform:none}") +
      kf("pocket-knife", "screw", "0%{transform:none}30%{transform:rotate(8deg)}60%{transform:rotate(-4deg)}100%{transform:none}"),
  },

  "pointer-off": off("pointer-off", ["p0", "p1", "p2", "p3", "p4"], "p5"),

  "pound-sterling": {
    note: "The pound sign writes itself in one stroke and the bar slides in across it.",
    draw: ["p0"],
    motion: { p0: draw("pound-sterling", 550), p1: { origin: "0% 50%", animation: an("pound-sterling", "bar", 450, 220, "backwards") } },
    keyframes: drawKf("pound-sterling") + kf("pound-sterling", "bar", "0%{transform:scaleX(0)}60%{transform:scaleX(1.08)}100%{transform:none}"),
  },
};

const PACKAGE = "V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001";
const MOUSE = "M12 2a7 7 0 0 1 7 7v6a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7Z";
export const fills: Record<string, string> = {
  // the bottle the slash breaks
  "milk-off": "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2Z",
  // the screen, cut around the dot with a unit of clearance
  "monitor-dot": "M12.693 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12.307A6.98 6.98 0 0 1 12.693 3Z",
  // screens the source leaves open where the tower or speaker stands
  "monitor-pc": "M4 5h6v10H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  "monitor-speaker": "M4 6h4v10H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  // the mop head
  mop: "M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.5 4.5 0 1 0 0 9Z",
  // the minaret and the hall under the dome
  mosque: "M7 13h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a5 5 0 0 1 2-4 5 5 0 0 1 2 4Z",
  // the mouse, cut around the button dot
  "mouse-left": "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7L11.75 4A4.75 4.75 0 0 1 7 8.75Z",
  "mouse-right": "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7L12.25 4A4.75 4.75 0 0 0 17 8.75Z",
  "mouse-off": MOUSE,
  "mouse-pointer-2-off": "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063Z",
  "mouth-off":
    "M2.457 11.159a1 1 0 0 0-.307 1.369 11.59 11.59 0 0 0 19.7 0 1 1 0 0 0-.308-1.368c-2.426-1.568-3.65-2.284-5.479-3.644a2.6 2.6 0 0 0-3.373.208 1 1 0 0 1-1.38 0 2.62 2.62 0 0 0-3.373-.208c-1.83 1.36-3.053 2.076-5.48 3.643Z",
  "navigation-2-off": "M12 2 19 21 12 17 5 21Z",
  // the notebook, cut around the dot
  "notebook-dot": "M11.65 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10.39A5.75 5.75 0 0 1 13.095 2Z",
  // the nut's cap
  "nut-off":
    "M18.21 5.43c-1.71.69-5.07 1.07-6.71 1.07.46 1.38.91 2.74.61 4.88a.88.88 0 0 1-.73.74c-1.78.28-3.54-.17-4.88-.62 0 1.64-.38 5-1.07 6.71-.21.52-.82.55-1.17.12A10 10 0 0 1 18.33 4.26c.43.35.4.97-.12 1.17Z",
  // boxes with a corner left open for a badge: the fill stops short of it
  "package-minus": `M21 13${PACKAGE}l1.675-.955H13.13V14.25H21Z`,
  "package-question-mark": "M21 10.342V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2.33-1.332H13.13V11.25H21Z",
  "package-pen": "M21 9.114V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l5.087 2.907L11.217 17.719A4.75 4.75 0 0 1 12.418 15.69L16.429 11.677A4.874 4.874 0 0 1 19.876 10.25Z",
  // the brush's ferrule and handle under the bristles
  "paintbrush-vertical": "M6 12h12a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-2a1 1 0 0 0-1 1v2.9a2 2 0 1 1-4 0V17a1 1 0 0 0-1-1H7a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1Z",
  // the whole bag, its rolled top edge included
  "paper-bag":
    "M7 3h11.379a2 2 0 0 1 1.789 1.106l.723 1.447A1 1 0 0 1 19.997 7h-1.619c.806 2.334 2.622 4.668 2.622 7.002V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.348C3 9.652 4 6 5.364 3.848A2 2 0 0 1 7 3Z",
  "square-letter-p-off": "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  "play-off": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19Z",
  // bottles and pots open at the top where the cap or rim sits
  "pill-bottle": "M6 7h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z",
  "plant-pot": "M18 17l-1.085 3.58A2 2 0 0 1 15 22H9.002a2 2 0 0 1-1.913-1.418L6 17Z",
};
