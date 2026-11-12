import type { Entry, Override } from "./types";

/** Batch i: its icons (pnpm import-icons i) and their motions. */
export const list: Entry[] = [
  ["Goal", "goal", "Goal", "status", "swing", ["target", "aim", "milestone", "flag"], "The flag waves on its pole."],
  ["Gpu", "gpu", "Graphics card", "devices", "pulse", ["graphics", "card", "hardware", "render"], "The fan spins up."],
  ["Grab", "grab", "Grab", "actions", "pop", ["hand", "drag", "move", "hold"], "The fingers close to grab."],
  ["Grape", "grape", "Grapes", "food", "swing", ["fruit", "wine", "bunch", "vine"], "The bunch sways from its stem."],
  ["Grid3x3", "grid", "Grid", "app", "pop", ["table", "cells", "layout", "spreadsheet"], "The grid lines draw across."],
  ["Grid2x2", "grid-2x2", "Four squares", "app", "pop", ["tiles", "apps", "layout", "quarters"], "The cross lines draw."],
  ["GripVertical", "grip-vertical", "Drag handle", "actions", "nudge-up", ["drag", "reorder", "handle", "move"], "The dots lift one by one."],
  ["GripHorizontal", "grip-horizontal", "Drag handle sideways", "actions", "nudge-right", ["drag", "reorder", "handle", "move"], "The dots ripple across."],
  ["Group", "group-select", "Group selection", "actions", "pop", ["select", "objects", "combine", "bundle"], "The shapes gather together."],
  ["Guitar", "guitar", "Guitar", "media", "tilt", ["music", "instrument", "strum", "song"], "The guitar rocks as it is strummed."],
  ["Groceries", "groceries", "Groceries", "commerce", "bounce", ["shopping", "bag", "food", "market"], "The bag bounces."],
  ["Hamburger", "hamburger", "Burger", "food", "bounce", ["burger", "fast food", "meal", "lunch"], "The bun lifts and drops."],
  ["Handbag", "handbag", "Handbag", "commerce", "swing", ["bag", "purse", "shopping", "fashion"], "The bag swings on its strap."],
  ["HandCoins", "hand-coins", "Payment", "commerce", "bounce", ["money", "pay", "coins", "savings"], "The coins drop into the hand."],
  ["HandHeart", "hand-heart", "Care", "people", "pulse", ["charity", "donate", "kindness", "love"], "The heart beats over the hand."],
  ["HandHelping", "helping-hand", "Helping hand", "people", "nudge-up", ["help", "support", "assist", "volunteer"], "The hand lifts the other."],
  ["Handshake", "handshake", "Handshake", "people", "shake", ["deal", "agreement", "partner", "welcome"], "The hands shake."],
  ["HardHat", "hard-hat", "Hard hat", "people", "bounce", ["construction", "safety", "work", "builder"], "The hat drops on."],
  ["Haze", "haze", "Haze", "weather", "float", ["fog", "mist", "smog", "sun"], "The haze lines drift."],
  ["Heading", "heading", "Heading", "text", "pop", ["title", "header", "h", "format"], "The crossbar draws."],
  ["Heading1", "heading-1", "Heading 1", "text", "pop", ["title", "h1", "header", "format"], "The number pops in."],
  ["Heading2", "heading-2", "Heading 2", "text", "pop", ["subtitle", "h2", "header", "format"], "The number pops in."],
  ["Heading3", "heading-3", "Heading 3", "text", "pop", ["section", "h3", "header", "format"], "The number pops in."],
  ["Headphones", "headphones", "Headphones", "media", "pulse", ["audio", "listen", "music", "sound"], "The cups pulse to the beat."],
  ["Headset", "headset", "Headset", "communication", "tilt", ["support", "call", "help desk", "microphone"], "The mic swings in."],
  ["HeartCrack", "heart-crack", "Broken heart", "status", "shake", ["breakup", "sad", "broken", "dislike"], "The heart splits along its crack."],
  ["HeartPulse", "heart-pulse", "Heart rate", "health", "pulse", ["pulse", "health", "vital", "cardio"], "The pulse line runs through the beating heart."],
  ["HeartOff", "heart-off", "Unfavorite", "status", "shake", ["unlike", "remove", "favorite", "off"], "The slash strikes the heart."],
  ["HeartPlus", "heart-plus", "Add to favorites", "actions", "pop", ["favorite", "like", "save", "add"], "The plus pops in."],
  ["Helicopter", "helicopter", "Helicopter", "travel", "float", ["fly", "aircraft", "rescue", "chopper"], "The rotor spins and it lifts."],
  ["Hexagon", "hexagon", "Hexagon", "shapes", "spin", ["shape", "polygon", "six", "cell"], "The hexagon turns a sixth."],
  ["Highlighter", "highlighter", "Highlighter", "text", "wiggle", ["highlight", "mark", "pen", "emphasis"], "The highlighter strokes."],
  ["Hospital", "hospital", "Hospital", "health", "pulse", ["clinic", "medical", "emergency", "doctor"], "The cross pulses."],
  ["HotAirBalloon", "hot-air-balloon", "Hot air balloon", "travel", "float", ["balloon", "fly", "trip", "adventure"], "The balloon rises and sways."],
  ["Hotel", "hotel", "Hotel", "travel", "pop", ["stay", "booking", "lodging", "building"], "The windows light up."],
  ["Hourglass", "hourglass", "Hourglass", "status", "spin", ["wait", "time", "pending", "sand"], "The hourglass flips."],
  ["HousePlus", "house-plus", "Add place", "navigation", "pop", ["home", "add", "property", "new"], "The plus pops in."],
  ["HouseWifi", "house-wifi", "Smart home", "devices", "pulse", ["smart home", "wifi", "connected", "network"], "The waves broadcast."],
  ["IceCreamCone", "ice-cream", "Ice cream", "food", "wiggle", ["dessert", "cone", "sweet", "summer"], "The scoop wobbles."],
  ["IdCard", "id-card", "ID card", "people", "tilt", ["identity", "badge", "license", "profile"], "The card details write in."],
  ["Image", "image", "Image", "media", "pop", ["picture", "photo", "gallery", "media"], "The sun rises over the hills."],
  ["ImageDown", "image-down", "Save image", "media", "nudge-down", ["download", "picture", "save", "photo"], "The arrow drops."],
  ["Images", "images", "Gallery", "media", "tilt", ["photos", "album", "pictures", "collection"], "The back photo fans out."],
  ["ImageUpscale", "image-upscale", "Upscale image", "media", "pop", ["resize", "enlarge", "enhance", "scale"], "The image grows to its corner."],
  ["ImageMinus", "image-minus", "Remove image", "media", "shake", ["delete", "picture", "remove", "photo"], "The minus slides in."],
  ["Import", "import", "Import", "actions", "nudge-down", ["bring in", "load", "inbox", "add"], "The arrow drops into the tray."],
  ["Inbox", "inbox", "Inbox", "communication", "bounce", ["mail", "messages", "tray", "received"], "The tray takes a drop."],
  ["Indent", "indent", "Indent", "text", "nudge-right", ["indent", "tab", "nest", "format"], "The lines push right."],
  ["Outdent", "outdent", "Outdent", "text", "nudge-left", ["unindent", "outdent", "dedent", "format"], "The lines pull left."],
  ["IndianRupee", "rupee", "Rupee", "commerce", "pop", ["money", "currency", "inr", "price"], "The sign draws."],
  ["Infinity", "infinity", "Infinity", "shapes", "draw", ["loop", "forever", "unlimited", "endless"], "The loop traces itself."],
  ["Info", "info", "Info", "status", "pop", ["information", "about", "details", "help"], "The dot drops onto the i."],
  ["SquareMousePointer", "inspect", "Inspect element", "development", "nudge-up", ["select", "devtools", "pointer", "element"], "The pointer clicks into the box."],
  ["Italic", "italic", "Italic", "text", "tilt", ["slant", "emphasis", "format", "font"], "The stem leans."],
  ["JapaneseYen", "yen", "Yen", "commerce", "pop", ["money", "currency", "jpy", "price"], "The bars slide in."],
  ["Joystick", "joystick", "Joystick", "devices", "wiggle", ["game", "controller", "play", "arcade"], "The stick rocks."],
  ["Kanban", "kanban", "Kanban", "app", "nudge-down", ["board", "tasks", "columns", "project"], "The columns shuffle."],
  ["Key", "key", "Key", "status", "tilt", ["password", "access", "unlock", "security"], "The key turns."],
  ["KeyRound", "key-round", "Passkey", "status", "tilt", ["passkey", "login", "credential", "access"], "The key turns."],
  ["KeyboardMusic", "keyboard-music", "Piano", "media", "pulse", ["piano", "synth", "keys", "instrument"], "The keys are played."],
  ["KeyboardOff", "keyboard-off", "Keyboard off", "devices", "shake", ["disable", "keyboard", "hide", "off"], "The slash strikes the keyboard."],
  ["Lambda", "lambda", "Lambda", "development", "draw", ["function", "math", "serverless", "code"], "The lambda writes itself."],
  ["Lamp", "lamp", "Lamp", "app", "flash", ["light", "lamp", "room", "decor"], "The pull cord tugs."],
  ["LampDesk", "lamp-desk", "Desk lamp", "app", "tilt", ["study", "work", "light", "desk"], "The head nods on its arm."],
  ["Landmark", "landmark", "Bank", "commerce", "pop", ["bank", "museum", "government", "institution"], "The pillars rise."],
  ["LaptopMinimalCheck", "laptop-check", "Laptop ready", "devices", "draw", ["computer", "ready", "done", "verified"], "The tick draws on the screen."],
  ["Lasso", "lasso", "Lasso", "actions", "swing", ["select", "freeform", "rope", "selection"], "The loop swings round."],
  ["LayersPlus", "layers-plus", "Add layer", "actions", "pop", ["layer", "stack", "add", "new"], "The plus pops in and the layers part."],
  ["PanelsTopLeft", "layout", "Layout", "app", "pop", ["layout", "panels", "page", "structure"], "The panels slide into place."],
  ["LayoutDashboard", "dashboard", "Dashboard", "app", "pop", ["overview", "panels", "home", "widgets"], "The tiles grow and shrink."],
  ["LayoutGrid", "layout-grid", "Grid view", "app", "pop", ["grid", "tiles", "apps", "view"], "The tiles pop in turn."],
  ["LayoutList", "layout-list", "List view", "app", "nudge-right", ["list", "rows", "view", "details"], "The rows slide in."],
  ["LayoutPanelLeft", "layout-panel-left", "Side panel", "app", "nudge-right", ["sidebar", "panel", "layout", "split"], "The side panel slides."],
  ["LayoutPanelTop", "layout-panel-top", "Top panel", "app", "nudge-down", ["header", "panel", "layout", "split"], "The top panel slides down."],
  ["LayoutTemplate", "template", "Template", "app", "pop", ["template", "layout", "blocks", "design"], "The blocks slot into place."],
  ["Leaf", "leaf", "Leaf", "nature", "swing", ["eco", "green", "nature", "plant"], "The leaf sways on its stem."],
  ["LifeBuoy", "life-buoy", "Support", "app", "spin", ["help", "support", "rescue", "lifesaver"], "The ring turns."],
  ["LightbulbOff", "lightbulb-off", "Idea off", "status", "shake", ["off", "dark", "no idea", "light"], "The slash strikes the bulb."],
  ["Lighthouse", "lighthouse", "Lighthouse", "travel", "flash", ["guide", "coast", "beacon", "sea"], "The beams sweep out."],
  ["LineHeight", "line-height", "Line height", "text", "nudge-up", ["leading", "spacing", "lines", "typography"], "The arrows stretch apart."],
  ["LetterSpacing", "letter-spacing", "Letter spacing", "text", "nudge-right", ["tracking", "kerning", "spacing", "typography"], "The arrow stretches."],
  ["LineSquiggle", "squiggle", "Squiggle", "shapes", "draw", ["wave", "line", "doodle", "freehand"], "The squiggle draws itself."],
  ["Link", "link", "Link", "actions", "pop", ["url", "chain", "hyperlink", "connect"], "The links pull together."],
  ["Link2", "link-2", "Link", "actions", "pop", ["url", "chain", "hyperlink", "attach"], "The two halves meet."],
  ["Link2Off", "link-off", "Remove link", "actions", "shake", ["remove link", "break", "disconnect", "chain"], "The halves pull apart."],
  ["List", "list", "List", "text", "nudge-right", ["bullets", "items", "rows", "menu"], "The lines write in."],
  ["ListFilter", "list-filter", "Filter", "actions", "nudge-down", ["filter", "sort", "narrow", "funnel"], "The lines narrow."],
  ["ListMinus", "list-minus", "Remove from list", "actions", "shake", ["remove", "list", "delete", "minus"], "The minus slides in."],
  ["ListMusic", "playlist", "Playlist", "media", "pulse", ["music", "songs", "queue", "list"], "The note bobs."],
  ["ListTodo", "todo", "To-do list", "app", "draw", ["tasks", "checklist", "todo", "plan"], "The tick draws in."],
  ["ListTree", "list-tree", "Tree", "development", "nudge-right", ["hierarchy", "outline", "nested", "files"], "The branches grow out."],
  ["ListCollapse", "list-collapse", "Collapse list", "navigation", "nudge-up", ["collapse", "fold", "list", "less"], "The arrows fold in."],
  ["ListSortAscending", "sort-ascending", "Sort ascending", "actions", "nudge-up", ["sort", "ascending", "order", "a-z"], "The bars grow in order."],
  ["ListSortDescending", "sort-descending", "Sort descending", "actions", "nudge-down", ["sort", "descending", "order", "z-a"], "The bars shrink in order."],
  ["Hd", "hd", "HD", "media", "pop", ["quality", "high definition", "video", "resolution"], "The letters pop."],
  ["HeartHandshake", "heart-handshake", "Partnership", "people", "pulse", ["care", "charity", "trust", "support"], "The heart beats around the shake."],
  ["ListClock", "list-clock", "Recent", "app", "spin", ["recent", "history", "log", "timeline"], "The clock hand turns."],
  ["IterationCw", "iteration", "Iteration", "development", "spin", ["cycle", "sprint", "loop", "iterate"], "The arrow loops round."],
  ["HandPlatter", "room-service", "Room service", "travel", "bounce", ["serve", "hotel", "food", "service"], "The cloche lifts."],
  ["Heater", "heater", "Heater", "devices", "pulse", ["heat", "warm", "radiator", "temperature"], "The heat waves rise."],
  ["IvBag", "iv-bag", "IV bag", "health", "pulse", ["drip", "medical", "hospital", "fluid"], "A drop falls."],
  ["Lectern", "lectern", "Lectern", "people", "pop", ["speech", "talk", "presentation", "podium"], "The speaker leans in."],
  ["ListRestart", "list-restart", "Reset list", "actions", "spin-back", ["restart", "reset", "list", "redo"], "The arrow turns back."],
  ["HandFist", "hand-fist", "Fist", "people", "shake", ["power", "strength", "fight", "solidarity"], "The fist punches up."],
  ["HouseHeart", "house-heart", "Favorite place", "navigation", "pulse", ["home", "love", "favorite", "place"], "The heart beats inside."],
];


/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** an animation of one of the icon's own keyframes: `ki-<icon>-<name>` */
const A = (icon: string, name: string, s: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${s}s ${SMOOTH} ${delay}ms${fill ? " " + fill : ""}`;
const K = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => K(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** grows in from nothing with a little overshoot (played with `backwards`) */
const POP_IN = "0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:none;opacity:1}";
/** two beats, like a heart */
const BEAT = "0%{transform:none}20%{transform:scale(1.18)}40%{transform:scale(.96)}60%{transform:scale(1.1)}100%{transform:none}";
/** falls in from above and lands */
const dropIn = (px: number) =>
  `0%{transform:translateY(-${px}px);opacity:0}55%{transform:translateY(.5px);opacity:1}75%{transform:translateY(-.2px)}100%{transform:none;opacity:1}`;
/** slides in from a side (x and y in units) */
const slideIn = (x: number, y = 0) =>
  `0%{transform:translate(${x}px,${y}px);opacity:0}60%{transform:translate(${-x * 0.15}px,${-y * 0.15}px);opacity:1}100%{transform:none;opacity:1}`;
/** swings round a pivot and settles */
const swing = (deg: number) =>
  `0%{transform:none}25%{transform:rotate(${deg}deg)}55%{transform:rotate(${-deg * 0.6}deg)}80%{transform:rotate(${deg * 0.25}deg)}100%{transform:none}`;
/** a short there-and-back move */
const there = (t: string, at = 35) => `0%{transform:none}${at}%{transform:${t}}100%{transform:none}`;

const HEART =
  "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5Z";
const HOUSE = "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z";

/** fill areas for outlines the source draws open (see FILLS in import-icons.ts) */
export const fills: Record<string, string> = {
  // the card, open on its bracket side
  gpu: "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2Z",
  "heart-off": HEART,
  // the heart, cut around the plus (about a unit clear of it) where the source leaves its lower right open
  "heart-plus":
    "M14.479 19.374l-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49H20.75V12A2.75 2.75 0 0 0 15.25 12V12.25H15A2.75 2.75 0 0 0 13.625 17.382Z",
  "house-plus": HOUSE,
  // the main block and its wing, as one building
  hospital: "M8 3h8a2 2 0 0 1 2 2v6h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Z",
  heater: "M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  // the picture above its hill line (the corner under it is open, where the arrow drops), with a hole a unit clear
  // around the sun, which is a solid shape of its own
  "image-down": "M6 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014Z M4.25 9a4.75 4.75 0 0 0 9.5 0a4.75 4.75 0 0 0-9.5 0Z",
  // the frame, cut around the minus (a unit clear of it) where the source leaves the corner open; a hole around the sun
  "image-minus": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7L13.25 5A2.75 2.75 0 0 0 16 7.75H21Z M4.25 9a4.75 4.75 0 0 0 9.5 0a4.75 4.75 0 0 0-9.5 0Z",
  import: "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  // the keyboard, cut straight across (square to the slash) where the source breaks the frame beside it
  "keyboard-off": "M9.69 4H20a2 2 0 0 1 2 2v10.41L19.205 19.205L20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2L6.845 6.845Z",
  // the two cups (the band stays a stroke)
  headphones: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2Z",
  // the two buns, each closed along the patty (the patty and the cheese stay strokes between them: filled with the buns
  // they would merge into one shape, their lines lost)
  hamburger: "M5 12A2 2 0 0 1 3 10A9 7 0 0 1 21 10A2 2 0 0 1 19 12Z M19 16A2 2 0 0 1 21 18A3 3 0 0 1 18 21H6A3 3 0 0 1 3 18A2 2 0 0 1 5 16Z",
  // the scoop (the cone stays a stroke)
  "ice-cream": "M7 7a5 5 0 0 1 10 0a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4Z",
  // the envelope (the basket stays a stroke)
  "hot-air-balloon": "M9 18c-3-3-5-5-5-9a8 7 0 0 1 16 0c0 4-2 6-5 9Z",
  // the cloche
  "room-service": "M5 10a7 7 0 0 1 14 0Z",
  // the slanted desk top
  lectern: "M3 6h18a1 1 0 0 1 .958 1.287l-1.057 4.333A2 2 0 0 1 19 13H5a2 2 0 0 1-1.9-1.38L2.042 7.287A1 1 0 0 1 3 6Z",
};

export const motions: Record<string, Override> = {
  goal: {
    note: "The flag ripples on its pole while the target rings tighten in turn.",
    motion: {
      p0: { origin: "0% 100%", animation: A("goal", "flag", 0.8) },
      p2: { animation: A("goal", "ring", 0.5, 60) },
      p1: { animation: A("goal", "ring", 0.5, 140) },
    },
    keyframes:
      K("goal", "flag", "0%{transform:none}30%{transform:skewY(-12deg) scaleX(.9)}60%{transform:skewY(7deg)}85%{transform:skewY(-2deg)}100%{transform:none}") +
      K("goal", "ring", there("scale(.94)", 40)),
  },

  gpu: {
    note: "The two fans spin up, one after the other, and the card hums.",
    motion: {
      p4: { animation: A("gpu", "fan", 0.6) },
      p3: { animation: A("gpu", "fan", 0.6, 90) },
      p0: { animation: A("gpu", "hum", 0.6, 60) },
    },
    keyframes:
      K("gpu", "fan", "0%{transform:none}30%{transform:scale(.7) rotate(-90deg)}65%{transform:scale(1.12) rotate(20deg)}100%{transform:none}") +
      K("gpu", "hum", "0%,100%{transform:none}25%{transform:translateX(-.3px)}45%{transform:translateX(.3px)}65%{transform:translateX(-.2px)}"),
  },

  grab: {
    note: "The fingers curl down one after another and the palm lifts, closing into a grip.",
    motion: {
      p0: { origin: "50% 100%", animation: A("grab", "curl", 0.6) },
      p1: { origin: "50% 100%", animation: A("grab", "curl", 0.6, 50) },
      p2: { origin: "50% 100%", animation: A("grab", "curl", 0.6, 100) },
      p3: { origin: "100% 50%", animation: A("grab", "thumb", 0.6, 80) },
      p4: { animation: A("grab", "palm", 0.6, 60) },
    },
    keyframes:
      K("grab", "curl", there("translateY(1.2px) scaleY(.8)", 40)) +
      K("grab", "thumb", there("rotate(18deg)", 40)) +
      K("grab", "palm", there("translateY(-.6px)", 45)),
  },

  grape: {
    note: "The bunch sways from the top of its stem, the lower grapes lagging behind.",
    motion: {
      p0: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85) },
      p4: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85) },
      p5: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85) },
      p2: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 30) },
      p3: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 30) },
      p1: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 30) },
      p6: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 60) },
      p7: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 60) },
      p8: { box: "view-box", origin: "22px 2px", animation: A("grape", "sway", 0.85, 90) },
    },
    keyframes: K("grape", "sway", swing(5)),
  },

  grid: {
    note: "The grid lines rule themselves across the frame, rows then columns.",
    draw: ["p1", "p2", "p3", "p4"],
    motion: {
      p1: draw("grid", 380),
      p2: draw("grid", 380, 70),
      p3: draw("grid", 380, 140),
      p4: draw("grid", 380, 210),
      p0: { animation: A("grid", "frame", 0.5) },
    },
    keyframes: drawKf("grid") + K("grid", "frame", there("scale(.96)", 30)),
  },

  "grid-2x2": {
    note: "The frame gives a squeeze and the cross rules itself in, splitting it into four.",
    draw: ["p0", "p1"],
    motion: {
      p2: { animation: A("grid-2x2", "frame", 0.5) },
      p1: draw("grid-2x2", 400, 60),
      p0: draw("grid-2x2", 400, 160),
    },
    keyframes: drawKf("grid-2x2") + K("grid-2x2", "frame", there("scale(.95)", 30)),
  },

  "grip-vertical": {
    note: "The dots lift row by row, from the bottom up, as if the handle is picked up.",
    motion: {
      p2: { animation: A("grip-vertical", "lift", 0.5) },
      p5: { animation: A("grip-vertical", "lift", 0.5) },
      p0: { animation: A("grip-vertical", "lift", 0.5, 70) },
      p3: { animation: A("grip-vertical", "lift", 0.5, 70) },
      p1: { animation: A("grip-vertical", "lift", 0.5, 140) },
      p4: { animation: A("grip-vertical", "lift", 0.5, 140) },
    },
    keyframes: K("grip-vertical", "lift", there("translateY(-1.5px)", 40)),
  },

  "grip-horizontal": {
    note: "The dots ripple across, column by column, as the handle is dragged.",
    motion: {
      p2: { animation: A("grip-horizontal", "hop", 0.5) },
      p5: { animation: A("grip-horizontal", "hop", 0.5, 30) },
      p0: { animation: A("grip-horizontal", "hop", 0.5, 80) },
      p3: { animation: A("grip-horizontal", "hop", 0.5, 110) },
      p1: { animation: A("grip-horizontal", "hop", 0.5, 160) },
      p4: { animation: A("grip-horizontal", "hop", 0.5, 190) },
    },
    keyframes: K("grip-horizontal", "hop", there("translateX(1.3px)", 40)),
  },

  "group-select": {
    note: "The two shapes draw apart and come back together, and the selection corners close in around them.",
    motion: {
      p4: { animation: A("group-select", "a", 0.65) },
      p5: { animation: A("group-select", "b", 0.65) },
      p0: { animation: A("group-select", "tl", 0.6, 120) },
      p1: { animation: A("group-select", "tr", 0.6, 120) },
      p2: { animation: A("group-select", "br", 0.6, 120) },
      p3: { animation: A("group-select", "bl", 0.6, 120) },
    },
    keyframes:
      K("group-select", "a", "0%{transform:none}30%{transform:translate(-1px,-1px)}65%{transform:translate(.3px,.3px)}100%{transform:none}") +
      K("group-select", "b", "0%{transform:none}30%{transform:translate(1px,1px)}65%{transform:translate(-.3px,-.3px)}100%{transform:none}") +
      K("group-select", "tl", there("translate(1px,1px)", 45)) +
      K("group-select", "tr", there("translate(-1px,1px)", 45)) +
      K("group-select", "br", there("translate(-1px,-1px)", 45)) +
      K("group-select", "bl", there("translate(1px,-1px)", 45)),
  },

  guitar: {
    note: "The guitar rocks on its body as it is strummed, and the string quivers.",
    motion: {
      p1: { box: "view-box", origin: "9px 15px", animation: A("guitar", "rock", 0.8) },
      p2: { box: "view-box", origin: "9px 15px", animation: A("guitar", "rock", 0.8) },
      p3: { box: "view-box", origin: "9px 15px", animation: A("guitar", "rock", 0.8) },
      p0: { box: "view-box", origin: "9px 15px", animation: A("guitar", "string", 0.8) },
    },
    keyframes:
      K("guitar", "rock", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
      K("guitar", "string", "0%{transform:none}15%{transform:rotate(-4deg) translate(.4px,.4px)}25%{transform:rotate(-6deg) translate(-.4px,-.4px)}35%{transform:rotate(-3deg) translate(.3px,.3px)}55%{transform:rotate(4deg)}80%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  groceries: {
    note: "The bag lands with a squash, the greens pop up out of it and the handle swings.",
    motion: {
      p2: { origin: "50% 100%", animation: A("groceries", "bag", 0.65) },
      p0: { box: "view-box", origin: "12px 21px", animation: A("groceries", "bag", 0.65) },
      p1: { animation: A("groceries", "greens", 0.6, 80) },
      p3: { origin: "100% 100%", animation: A("groceries", "handle", 0.7, 40) },
    },
    keyframes:
      K("groceries", "bag", "0%{transform:none}30%{transform:scale(1.05,.92)}60%{transform:scale(.98,1.03)}100%{transform:none}") +
      K("groceries", "greens", there("translateY(-1.5px) rotate(6deg)", 40)) +
      K("groceries", "handle", swing(-10)),
  },

  hamburger: {
    // one fill holds the buns and the patty together, so the whole burger moves as one (a lifting top bun would leave
    // its fill behind)
    note: "The burger hops up and lands with a squash, then springs back.",
    motion: Object.fromEntries(["p1", "p0", "p3", "p2"].map((p) => [p, { box: "view-box", origin: "12px 21px", animation: A("hamburger", "hop", 0.7) }])),
    keyframes: K(
      "hamburger",
      "hop",
      "0%{transform:none}30%{transform:translateY(-1.5px) scale(.97,1.04)}55%{transform:scale(1.06,.86)}75%{transform:scale(.99,1.04)}100%{transform:none}",
    ),
  },


  handbag: {
    note: "The bag swings on its strap, the body a beat behind the handle.",
    motion: {
      p1: { box: "view-box", origin: "12px 2px", animation: A("handbag", "swing", 0.85) },
      p0: { box: "view-box", origin: "12px 2px", animation: A("handbag", "swing", 0.85, 50) },
    },
    keyframes: K("handbag", "swing", swing(6)),
  },

  "hand-coins": {
    note: "The two coins drop into the open hand, which dips as it catches them.",
    motion: {
      p4: { animation: A("hand-coins", "coin", 0.6, 0, "backwards") },
      p3: { animation: A("hand-coins", "coin", 0.6, 110, "backwards") },
      p0: { animation: A("hand-coins", "hand", 0.75) },
      p1: { animation: A("hand-coins", "hand", 0.75) },
      p2: { animation: A("hand-coins", "hand", 0.75) },
    },
    keyframes: K("hand-coins", "coin", dropIn(3)) + K("hand-coins", "hand", "0%,40%{transform:none}55%{transform:translateY(.7px)}75%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "hand-heart": {
    note: "The heart beats twice over the hand, which lifts it a little.",
    motion: {
      p1: { animation: A("hand-heart", "beat", 0.8) },
      p0: { animation: A("hand-heart", "lift", 0.7) },
      p3: { animation: A("hand-heart", "lift", 0.7) },
      p2: { animation: A("hand-heart", "lift", 0.7) },
    },
    keyframes: K("hand-heart", "beat", BEAT) + K("hand-heart", "lift", there("translateY(-.7px)", 35)),
  },

  "helping-hand": {
    note: "The open hand rises from the wrist, lifting the other hand that rests on it.",
    motion: {
      p1: { box: "view-box", origin: "2px 19px", animation: A("helping-hand", "lift", 0.7) },
      p2: { box: "view-box", origin: "2px 19px", animation: A("helping-hand", "lift", 0.7) },
      p0: { animation: A("helping-hand", "rest", 0.7, 60) },
    },
    keyframes:
      K("helping-hand", "lift", "0%{transform:none}35%{transform:rotate(-5deg)}70%{transform:rotate(1deg)}100%{transform:none}") +
      K("helping-hand", "rest", there("translate(-.3px,-1.4px)", 35)),
  },

  handshake: {
    note: "The clasped hands pump up and down twice while the sleeves hold still.",
    motion: {
      p0: { animation: A("handshake", "shake", 0.75) },
      p1: { animation: A("handshake", "shake", 0.75) },
      p3: { animation: A("handshake", "shake", 0.75, 20) },
      p4: { animation: A("handshake", "shake", 0.75, 20) },
    },
    keyframes: K("handshake", "shake", "0%{transform:none}18%{transform:translateY(-1px)}38%{transform:translateY(.8px)}58%{transform:translateY(-.6px)}78%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "hard-hat": {
    note: "The dome drops onto the brim, which squashes as it lands.",
    motion: {
      p0: { animation: A("hard-hat", "drop", 0.65) },
      p1: { animation: A("hard-hat", "drop", 0.65) },
      p2: { animation: A("hard-hat", "drop", 0.65) },
      p3: { origin: "50% 100%", animation: A("hard-hat", "brim", 0.65) },
    },
    keyframes:
      K("hard-hat", "drop", "0%{transform:none}25%{transform:translateY(-2px)}50%{transform:translateY(.5px)}70%{transform:translateY(-.2px)}100%{transform:none}") +
      K("hard-hat", "brim", "0%,40%{transform:none}52%{transform:scale(1.06,.8)}72%{transform:scale(.98,1.05)}100%{transform:none}"),
  },

  haze: {
    note: "The sun rises behind the haze, its rays come out and the haze lines drift past.",
    motion: {
      p6: { animation: A("haze", "rise", 0.6) },
      p7: { origin: "50% 100%", animation: A("haze", "ray", 0.5, 120, "backwards") },
      p0: { origin: "100% 100%", animation: A("haze", "ray", 0.5, 160, "backwards") },
      p3: { origin: "0% 100%", animation: A("haze", "ray", 0.5, 160, "backwards") },
      p4: { animation: A("haze", "left", 0.8) },
      p5: { animation: A("haze", "right", 0.8, 60) },
      p1: { animation: A("haze", "left", 0.8, 30) },
      p2: { animation: A("haze", "right", 0.8, 30) },
    },
    keyframes:
      K("haze", "rise", "0%{transform:translateY(2px)}60%{transform:translateY(-.3px)}100%{transform:none}") +
      K("haze", "ray", POP_IN) +
      K("haze", "left", there("translateX(-1.2px)", 45)) +
      K("haze", "right", there("translateX(1.2px)", 45)),
  },

  heading: {
    note: "The two stems spring up and the crossbar draws between them.",
    draw: ["p1"],
    motion: {
      p2: { origin: "50% 100%", animation: A("heading", "stem", 0.5) },
      p0: { origin: "50% 100%", animation: A("heading", "stem", 0.5, 60) },
      p1: draw("heading", 380, 140),
    },
    keyframes: drawKf("heading") + K("heading", "stem", "0%{transform:none}30%{transform:scaleY(.85)}65%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  "heading-1": {
    note: "The H gives a bounce and the 1 writes itself beside it.",
    draw: ["p3"],
    motion: {
      p1: { origin: "50% 100%", animation: A("heading-1", "stem", 0.5) },
      p2: { origin: "50% 100%", animation: A("heading-1", "stem", 0.5, 40) },
      p0: { animation: A("heading-1", "bar", 0.5, 40) },
      p3: draw("heading-1", 420, 120),
    },
    keyframes:
      drawKf("heading-1") +
      K("heading-1", "stem", there("scaleY(.88)", 35)) +
      K("heading-1", "bar", there("translateY(.6px)", 35)),
  },

  "heading-2": {
    note: "The H gives a bounce and the 2 writes itself beside it.",
    draw: ["p3"],
    motion: {
      p1: { origin: "50% 100%", animation: A("heading-2", "stem", 0.5) },
      p2: { origin: "50% 100%", animation: A("heading-2", "stem", 0.5, 40) },
      p0: { animation: A("heading-2", "bar", 0.5, 40) },
      p3: draw("heading-2", 480, 120),
    },
    keyframes:
      drawKf("heading-2") +
      K("heading-2", "stem", there("scaleY(.88)", 35)) +
      K("heading-2", "bar", there("translateY(.6px)", 35)),
  },

  "heading-3": {
    note: "The H gives a bounce and the 3 writes itself beside it, top curve then bottom.",
    draw: ["p3", "p4"],
    motion: {
      p1: { origin: "50% 100%", animation: A("heading-3", "stem", 0.5) },
      p2: { origin: "50% 100%", animation: A("heading-3", "stem", 0.5, 40) },
      p0: { animation: A("heading-3", "bar", 0.5, 40) },
      p3: draw("heading-3", 320, 120),
      p4: draw("heading-3", 320, 380),
    },
    keyframes:
      drawKf("heading-3") +
      K("heading-3", "stem", there("scaleY(.88)", 35)) +
      K("heading-3", "bar", there("translateY(.6px)", 35)),
  },

  headphones: {
    note: "The band squeezes in as they go on, then the cups thump to the beat.",
    motion: { p0: { origin: "50% 100%", animation: A("headphones", "thump", 0.85) } },
    keyframes: K(
      "headphones",
      "thump",
      "0%{transform:none}25%{transform:scaleX(.92)}45%{transform:scale(1.04)}60%{transform:none}75%{transform:scale(1.04)}100%{transform:none}",
    ),
  },

  headset: {
    note: "The mic swings down from its ear cup to the mouth, and the band nods.",
    motion: {
      p1: { origin: "100% 0%", animation: A("headset", "mic", 0.7) },
      p0: { origin: "50% 100%", animation: A("headset", "nod", 0.6) },
    },
    keyframes:
      K("headset", "mic", "0%{transform:none}30%{transform:rotate(-22deg)}65%{transform:rotate(5deg)}100%{transform:none}") +
      K("headset", "nod", there("scale(.97,1.02)", 30)),
  },

  "heart-crack": {
    note: "The heart shudders and the crack runs down through it.",
    draw: ["p0"],
    motion: {
      p1: { animation: A("heart-crack", "shudder", 0.6) },
      p0: draw("heart-crack", 420, 80),
    },
    keyframes:
      drawKf("heart-crack") +
      K("heart-crack", "shudder", "0%,100%{transform:none}15%{transform:rotate(-4deg)}30%{transform:rotate(3.5deg)}45%{transform:rotate(-2.5deg)}60%{transform:rotate(1.5deg)}75%{transform:rotate(-.5deg)}"),
  },

  "heart-pulse": {
    note: "The heart beats twice while the pulse line traces across it.",
    draw: ["p1"],
    motion: {
      p0: { animation: A("heart-pulse", "beat", 0.8) },
      p1: draw("heart-pulse", 600, 40),
    },
    keyframes: drawKf("heart-pulse") + K("heart-pulse", "beat", BEAT),
  },

  "heart-off": {
    note: "The slash strikes through the heart, which flinches.",
    draw: ["p2"],
    motion: {
      p2: draw("heart-off", 420),
      p0: { animation: A("heart-off", "flinch", 0.6, 120) },
      p1: { animation: A("heart-off", "flinch", 0.6, 120) },
    },
    keyframes: drawKf("heart-off") + K("heart-off", "flinch", "0%{transform:none}25%{transform:scale(.9)}55%{transform:scale(1.03)}100%{transform:none}"),
  },

  "heart-plus": {
    note: "The plus spins in at the corner and the heart beats once to take it.",
    motion: {
      p1: { animation: A("heart-plus", "plus", 0.55, 0, "backwards") },
      p2: { animation: A("heart-plus", "plus", 0.55, 0, "backwards") },
      p0: { animation: A("heart-plus", "beat", 0.55, 180) },
    },
    keyframes:
      K("heart-plus", "plus", "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}") +
      K("heart-plus", "beat", there("scale(1.1)", 35)),
  },

  helicopter: {
    note: "The rotor spins up and the helicopter lifts off, then settles.",
    motion: {
      p5: { animation: A("helicopter", "rotor", 0.85) },
      p1: { animation: A("helicopter", "lift", 0.85) },
      p3: { animation: A("helicopter", "lift", 0.85) },
      p4: { animation: A("helicopter", "lift", 0.85) },
      p7: { animation: A("helicopter", "lift", 0.85) },
      p0: { animation: A("helicopter", "lift", 0.85, 30) },
      p2: { animation: A("helicopter", "lift", 0.85, 30) },
      p6: { animation: A("helicopter", "lift", 0.85, 30) },
    },
    keyframes:
      K("helicopter", "rotor", "0%{transform:none}15%{transform:scaleX(.3)}30%{transform:translateY(-1.5px)}45%{transform:translateY(-1.5px) scaleX(.3)}60%{transform:translateY(-1.5px)}75%{transform:translateY(-.5px) scaleX(.5)}100%{transform:none}") +
      K("helicopter", "lift", "0%,15%{transform:none}40%{transform:translateY(-1.5px) rotate(-2deg)}65%{transform:translateY(-1.3px) rotate(1deg)}100%{transform:none}"),
  },

  hexagon: {
    note: "The hexagon turns a sixth of the way round and clicks into place.",
    motion: { p0: { animation: A("hexagon", "turn", 0.65) } },
    keyframes: K("hexagon", "turn", "0%{transform:none}70%{transform:rotate(66deg)}100%{transform:rotate(60deg)}"),
  },

  highlighter: {
    note: "The highlighter rocks on its tip in a short stroke, pressing down as it goes.",
    motion: {
      p1: { box: "view-box", origin: "6px 18px", animation: A("highlighter", "stroke", 0.7) },
      p0: { box: "view-box", origin: "6px 18px", animation: A("highlighter", "tip", 0.7) },
    },
    keyframes:
      K("highlighter", "stroke", "0%{transform:none}30%{transform:rotate(-7deg) translateX(-.5px)}60%{transform:rotate(4deg) translateX(.8px)}100%{transform:none}") +
      K("highlighter", "tip", "0%{transform:none}30%{transform:rotate(-4deg) translateX(-.5px)}60%{transform:rotate(2deg) translateX(.8px)}100%{transform:none}"),
  },

  hospital: {
    note: "The red cross on the front beats like a pulse, and the door gives a nod.",
    motion: {
      p0: { box: "view-box", origin: "12px 9px", animation: A("hospital", "cross", 0.8) },
      p2: { box: "view-box", origin: "12px 9px", animation: A("hospital", "cross", 0.8) },
      p1: { origin: "50% 100%", animation: A("hospital", "door", 0.5, 120) },
    },
    keyframes: K("hospital", "cross", BEAT.replace(/1\.18/, "1.3").replace(/1\.1\)/, "1.2)")) + K("hospital", "door", there("scaleY(.85)", 35)),
  },

  "hot-air-balloon": {
    note: "The balloon rises and sways, the basket swinging a beat behind.",
    motion: {
      p1: { box: "view-box", origin: "12px 18px", animation: A("hot-air-balloon", "rise", 0.9) },
      p0: { box: "view-box", origin: "12px 18px", animation: A("hot-air-balloon", "rise", 0.9) },
      p2: { box: "view-box", origin: "12px 18px", animation: A("hot-air-balloon", "basket", 0.9) },
    },
    keyframes:
      K("hot-air-balloon", "rise", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-4deg)}65%{transform:translateY(-1px) rotate(3deg)}100%{transform:none}") +
      K("hot-air-balloon", "basket", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(3deg)}65%{transform:translateY(-1px) rotate(-3deg)}100%{transform:none}"),
  },

  hotel: {
    note: "The windows light up floor by floor, and the doorway arch springs.",
    motion: {
      p7: { animation: A("hotel", "light", 0.45, 0, "backwards") },
      p1: { animation: A("hotel", "light", 0.45, 50, "backwards") },
      p5: { animation: A("hotel", "light", 0.45, 100, "backwards") },
      p8: { animation: A("hotel", "light", 0.45, 150, "backwards") },
      p2: { animation: A("hotel", "light", 0.45, 200, "backwards") },
      p6: { animation: A("hotel", "light", 0.45, 250, "backwards") },
      p4: { animation: A("hotel", "arch", 0.5) },
    },
    keyframes: K("hotel", "light", POP_IN) + K("hotel", "arch", there("translateY(-.6px)", 35)),
  },

  hourglass: {
    note: "The hourglass flips over between its caps, the glass pinching at the turn.",
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: A("hourglass", "caps", 0.8) },
      p1: { box: "view-box", origin: "12px 12px", animation: A("hourglass", "caps", 0.8) },
      p2: { box: "view-box", origin: "12px 12px", animation: A("hourglass", "glass", 0.8) },
      p3: { box: "view-box", origin: "12px 12px", animation: A("hourglass", "glass", 0.8) },
    },
    keyframes:
      K("hourglass", "caps", "0%{transform:none}50%{transform:rotate(90deg)}80%{transform:rotate(190deg)}100%{transform:rotate(180deg)}") +
      K("hourglass", "glass", "0%{transform:none}50%{transform:rotate(90deg) scale(.85,1)}80%{transform:rotate(190deg)}100%{transform:rotate(180deg)}"),
  },

  "house-plus": {
    note: "The plus spins in at the corner and the house bobs to take it.",
    motion: {
      p2: { animation: A("house-plus", "plus", 0.55, 0, "backwards") },
      p3: { animation: A("house-plus", "plus", 0.55, 0, "backwards") },
      p0: { origin: "50% 100%", animation: A("house-plus", "bob", 0.55, 160) },
      p1: { origin: "50% 100%", animation: A("house-plus", "bob", 0.55, 160) },
    },
    keyframes:
      K("house-plus", "plus", "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}") +
      K("house-plus", "bob", there("scale(1.03,.95)", 35)),
  },

  "house-wifi": {
    note: "The signal broadcasts from the dot, wave after wave.",
    motion: {
      p1: { animation: A("house-wifi", "dot", 0.4, 0, "backwards") },
      p0: { origin: "50% 100%", animation: A("house-wifi", "wave", 0.45, 100, "backwards") },
      p3: { origin: "50% 100%", animation: A("house-wifi", "wave", 0.45, 200, "backwards") },
    },
    keyframes:
      K("house-wifi", "dot", POP_IN) +
      K("house-wifi", "wave", "0%{transform:scale(.4);opacity:0}60%{transform:scale(1.1);opacity:1}100%{transform:none;opacity:1}"),
  },

  "ice-cream": {
    note: "The scoop wobbles on top of the cone.",
    motion: {
      p1: { box: "view-box", origin: "12px 11px", animation: A("ice-cream", "wobble", 0.75) },
      p2: { box: "view-box", origin: "12px 11px", animation: A("ice-cream", "wobble", 0.75) },
      p0: { origin: "50% 0%", animation: A("ice-cream", "cone", 0.5) },
    },
    keyframes:
      K("ice-cream", "wobble", "0%{transform:none}20%{transform:rotate(-8deg)}45%{transform:rotate(6deg)}70%{transform:rotate(-2deg)}100%{transform:none}") +
      K("ice-cream", "cone", there("scaleY(.95)", 25)),
  },

  "id-card": {
    note: "The photo pops onto the card and the two lines of details write themselves.",
    draw: ["p1", "p2"],
    motion: {
      p3: { animation: A("id-card", "pop", 0.5, 0, "backwards") },
      p0: { origin: "50% 100%", animation: A("id-card", "pop", 0.5, 60, "backwards") },
      p1: draw("id-card", 260, 160),
      p2: draw("id-card", 260, 260),
      p4: { animation: A("id-card", "card", 0.5) },
    },
    keyframes: drawKf("id-card") + K("id-card", "pop", POP_IN) + K("id-card", "card", there("rotate(-3deg)", 30)),
  },

  image: {
    note: "The sun rises over the hills inside the frame.",
    motion: {
      p1: { animation: A("image", "sun", 0.6, 60, "backwards") },
      p2: { animation: A("image", "hills", 0.5) },
    },
    keyframes:
      K("image", "sun", "0%{transform:translateY(3px);opacity:0}60%{transform:translateY(-.4px);opacity:1}100%{transform:none;opacity:1}") +
      K("image", "hills", there("translateY(.8px)", 30)),
  },

  "image-down": {
    note: "The arrow drops out of the picture's corner and the sun dips with it.",
    motion: {
      p1: { animation: A("image-down", "arrow", 0.6, 0, "backwards") },
      p2: { animation: A("image-down", "arrow", 0.6, 0, "backwards") },
      p3: { animation: A("image-down", "sun", 0.6) },
    },
    keyframes: K("image-down", "arrow", dropIn(3)) + K("image-down", "sun", there("translateY(1px)", 40)),
  },

  images: {
    note: "The photo at the back fans out from under the front one and slides back.",
    motion: {
      p1: { origin: "0% 100%", animation: A("images", "back", 0.7) },
      p3: { box: "view-box", origin: "8px 16px", animation: A("images", "front", 0.7) },
      p0: { box: "view-box", origin: "8px 16px", animation: A("images", "front", 0.7) },
      p2: { box: "view-box", origin: "8px 16px", animation: A("images", "front", 0.7) },
    },
    keyframes:
      K("images", "back", "0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(1deg)}100%{transform:none}") +
      K("images", "front", "0%{transform:none}35%{transform:rotate(3deg)}70%{transform:rotate(-.5deg)}100%{transform:none}"),
  },

  "image-upscale": {
    note: "The small picture grows toward the far corner and the arrow pushes out.",
    motion: {
      p7: { box: "view-box", origin: "3px 21px", animation: A("image-upscale", "grow", 0.7) },
      p5: { box: "view-box", origin: "3px 21px", animation: A("image-upscale", "grow", 0.7) },
      p0: { animation: A("image-upscale", "arrow", 0.6) },
      p3: { animation: A("image-upscale", "arrow", 0.6) },
    },
    keyframes:
      K("image-upscale", "grow", "0%{transform:none}35%{transform:scale(1.3)}60%{transform:scale(1.25)}100%{transform:none}") +
      K("image-upscale", "arrow", there("translate(1px,-1px)", 35)),
  },

  "image-minus": {
    note: "The minus slides in at the corner and the picture flinches.",
    motion: {
      p1: { animation: A("image-minus", "minus", 0.5, 0, "backwards") },
      p0: { animation: A("image-minus", "flinch", 0.5, 120) },
      p2: { animation: A("image-minus", "flinch", 0.5, 120) },
      p3: { animation: A("image-minus", "flinch", 0.5, 120) },
    },
    keyframes: K("image-minus", "minus", slideIn(3)) + K("image-minus", "flinch", there("translateX(-.6px)", 35)),
  },

  import: {
    note: "The arrow drops down into the tray, which dips as it lands.",
    motion: {
      p0: { animation: A("import", "arrow", 0.6, 0, "backwards") },
      p1: { animation: A("import", "arrow", 0.6, 0, "backwards") },
      p2: { animation: A("import", "tray", 0.6) },
    },
    keyframes:
      K("import", "arrow", dropIn(3)) +
      K("import", "tray", "0%,40%{transform:none}55%{transform:translateY(.6px)}75%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  inbox: {
    note: "Something lands in the tray: its slot sinks and the tray dips.",
    motion: {
      p0: { animation: A("inbox", "slot", 0.6) },
      p1: { animation: A("inbox", "tray", 0.6) },
    },
    keyframes:
      K("inbox", "slot", '0%{transform:none}35%{d:path("M22 12 L16 12 L14 16.5 L10 16.5 L8 12 L2 12");transform:translateY(.5px)}70%{transform:none}') +
      K("inbox", "tray", there("translateY(.5px)", 35)),
  },

  indent: {
    note: "The arrow pushes in and the lines step right one after another.",
    motion: {
      p3: { animation: A("indent", "arrow", 0.55) },
      p0: { animation: A("indent", "line", 0.55, 80) },
      p1: { animation: A("indent", "line", 0.55, 120) },
      p2: { animation: A("indent", "line", 0.55, 160) },
    },
    keyframes: K("indent", "arrow", there("translateX(1.8px)", 35)) + K("indent", "line", there("translateX(1.2px)", 35)),
  },

  outdent: {
    note: "The arrow pulls out and the lines step left one after another.",
    motion: {
      p3: { animation: A("outdent", "arrow", 0.55) },
      p0: { animation: A("outdent", "line", 0.55, 80) },
      p1: { animation: A("outdent", "line", 0.55, 120) },
      p2: { animation: A("outdent", "line", 0.55, 160) },
    },
    keyframes: K("outdent", "arrow", there("translateX(-1.8px)", 35)) + K("outdent", "line", there("translateX(-1.2px)", 35)),
  },

  rupee: {
    note: "The two bars slide in and the stroke of the rupee writes itself under them.",
    draw: ["p0"],
    motion: {
      p1: { origin: "0% 50%", animation: A("rupee", "bar", 0.45, 0, "backwards") },
      p2: { origin: "0% 50%", animation: A("rupee", "bar", 0.45, 70, "backwards") },
      p0: draw("rupee", 480, 140),
    },
    keyframes: drawKf("rupee") + K("rupee", "bar", "0%{transform:scaleX(0)}60%{transform:scaleX(1.08)}100%{transform:none}"),
  },

  infinity: {
    note: "The loop traces itself all the way round.",
    draw: ["p0"],
    motion: { p0: draw("infinity", 850) },
    keyframes: drawKf("infinity"),
  },

  info: {
    note: "The stem of the i springs up and its dot drops onto it.",
    motion: {
      p1: { origin: "50% 100%", animation: A("info", "stem", 0.5, 0, "backwards") },
      p2: { animation: A("info", "dot", 0.55, 120, "backwards") },
    },
    keyframes:
      K("info", "stem", "0%{transform:scaleY(0)}60%{transform:scaleY(1.15)}100%{transform:none}") + K("info", "dot", dropIn(3)),
  },

  inspect: {
    note: "The pointer clicks into the box, which answers with a squeeze.",
    motion: {
      p0: { animation: A("inspect", "click", 0.6) },
      p1: { animation: A("inspect", "box", 0.6) },
    },
    keyframes:
      K("inspect", "click", "0%{transform:none}30%{transform:translate(-1.3px,-1.3px) scale(.85)}55%{transform:translate(-.6px,-.6px)}100%{transform:none}") +
      K("inspect", "box", "0%,25%{transform:none}38%{transform:scale(.96)}60%{transform:none}"),
  },

  italic: {
    note: "The stem leans further over while the top and bottom bars slide apart to follow it.",
    motion: {
      p2: { animation: A("italic", "lean", 0.6) },
      p0: { animation: A("italic", "top", 0.6) },
      p1: { animation: A("italic", "bottom", 0.6) },
    },
    keyframes:
      K("italic", "lean", "0%{transform:none}35%{transform:skewX(-12deg)}70%{transform:skewX(3deg)}100%{transform:none}") +
      K("italic", "top", "0%{transform:none}35%{transform:translateX(1.5px)}70%{transform:translateX(-.4px)}100%{transform:none}") +
      K("italic", "bottom", "0%{transform:none}35%{transform:translateX(-1.5px)}70%{transform:translateX(.4px)}100%{transform:none}"),
  },

  yen: {
    note: "The arms spring open, the stem drops from them and the two bars slide across.",
    motion: {
      p1: { origin: "50% 100%", animation: A("yen", "arms", 0.5) },
      p0: { origin: "50% 0%", animation: A("yen", "stem", 0.5, 60, "backwards") },
      p2: { origin: "0% 50%", animation: A("yen", "bar", 0.45, 120, "backwards") },
      p3: { origin: "0% 50%", animation: A("yen", "bar", 0.45, 190, "backwards") },
    },
    keyframes:
      K("yen", "arms", "0%{transform:none}35%{transform:scaleX(.7)}70%{transform:scaleX(1.06)}100%{transform:none}") +
      K("yen", "stem", "0%{transform:scaleY(0)}60%{transform:scaleY(1.1)}100%{transform:none}") +
      K("yen", "bar", "0%{transform:scaleX(0)}60%{transform:scaleX(1.08)}100%{transform:none}"),
  },

  joystick: {
    note: "The stick rocks on its base and the button clicks down.",
    motion: {
      p2: { box: "view-box", origin: "12px 15px", animation: A("joystick", "rock", 0.75) },
      p3: { box: "view-box", origin: "12px 15px", animation: A("joystick", "rock", 0.75) },
      p1: { animation: A("joystick", "press", 0.4, 200) },
    },
    keyframes:
      K("joystick", "rock", "0%{transform:none}25%{transform:rotate(-14deg)}55%{transform:rotate(10deg)}80%{transform:rotate(-3deg)}100%{transform:none}") +
      K("joystick", "press", there("translateY(1px) scaleY(.6)", 40)),
  },

  kanban: {
    note: "The three columns shrink and grow in turn, as the cards move between them.",
    motion: {
      p0: { origin: "50% 0%", animation: A("kanban", "col", 0.6) },
      p1: { origin: "50% 0%", animation: A("kanban", "col", 0.6, 70) },
      p2: { origin: "50% 0%", animation: A("kanban", "col", 0.6, 140) },
    },
    keyframes: K("kanban", "col", "0%{transform:none}35%{transform:scaleY(.65)}70%{transform:scaleY(1.06)}100%{transform:none}"),
  },

  key: {
    note: "The key pushes into the lock and turns, the teeth foreshortening as it goes round.",
    motion: {
      p0: { box: "view-box", origin: "2px 21px", animation: A("key", "turn", 0.75) },
      p2: { box: "view-box", origin: "2px 21px", animation: A("key", "turn", 0.75) },
      p1: { box: "view-box", origin: "2px 21px", animation: A("key", "teeth", 0.75) },
    },
    keyframes:
      K("key", "turn", "0%{transform:none}30%{transform:translate(-1px,1px)}65%{transform:translate(-1px,1px) rotate(-12deg)}100%{transform:none}") +
      K("key", "teeth", "0%{transform:none}30%{transform:translate(-1px,1px)}65%{transform:translate(-1px,1px) rotate(-12deg) scale(.85)}100%{transform:none}"),
  },

  "key-round": {
    note: "The key turns on its bow and the hole winks.",
    motion: {
      p0: { box: "view-box", origin: "15.5px 8.5px", animation: A("key-round", "turn", 0.75) },
      p1: { animation: A("key-round", "hole", 0.5, 120) },
    },
    keyframes:
      K("key-round", "turn", "0%{transform:none}40%{transform:rotate(-25deg)}75%{transform:rotate(4deg)}100%{transform:none}") +
      K("key-round", "hole", there("scale(1.8)", 40)),
  },

  "keyboard-music": {
    note: "The white keys are played down the keyboard and the black keys blink.",
    motion: {
      p5: { origin: "50% 0%", animation: A("keyboard-music", "key", 0.35) },
      p6: { origin: "50% 0%", animation: A("keyboard-music", "key", 0.35, 80) },
      p7: { origin: "50% 0%", animation: A("keyboard-music", "key", 0.35, 160) },
      p8: { origin: "50% 0%", animation: A("keyboard-music", "key", 0.35, 240) },
      p1: { animation: A("keyboard-music", "blink", 0.4, 40) },
      p2: { animation: A("keyboard-music", "blink", 0.4, 200) },
      p3: { animation: A("keyboard-music", "blink", 0.4, 280) },
    },
    keyframes:
      K("keyboard-music", "key", there("scaleY(.6)", 40)) + K("keyboard-music", "blink", "0%,100%{opacity:1}40%{opacity:.2}"),
  },

  "keyboard-off": {
    note: "The slash strikes through and the keys go dark one by one.",
    draw: ["p6"],
    motion: {
      p6: draw("keyboard-off", 420),
      p8: { animation: A("keyboard-off", "off", 0.6, 100) },
      p4: { animation: A("keyboard-off", "off", 0.6, 150) },
      p5: { animation: A("keyboard-off", "off", 0.6, 200) },
      p9: { animation: A("keyboard-off", "off", 0.6, 250) },
      p2: { animation: A("keyboard-off", "space", 0.6, 150) },
    },
    keyframes:
      drawKf("keyboard-off") +
      K("keyboard-off", "off", "0%,100%{opacity:1}40%,60%{opacity:.15}") +
      K("keyboard-off", "space", there("scaleX(.6)", 45)),
  },

  lambda: {
    note: "The lambda writes itself: the long curved stroke, then the short leg.",
    draw: ["p1", "p0"],
    motion: { p1: draw("lambda", 500), p0: draw("lambda", 300, 380) },
    keyframes: drawKf("lambda"),
  },

  lamp: {
    note: "The shade flickers on and settles on its stem.",
    motion: {
      p1: { origin: "50% 100%", animation: A("lamp", "shade", 0.75) },
      p0: { origin: "50% 100%", animation: A("lamp", "stem", 0.5) },
    },
    keyframes:
      K("lamp", "shade", "0%{transform:none;opacity:1}15%{opacity:.35}25%{opacity:1}35%{opacity:.5;transform:translateY(-.6px)}50%{opacity:1}70%{transform:translateY(.2px)}100%{transform:none;opacity:1}") +
      K("lamp", "stem", there("scaleY(1.1)", 35)),
  },

  "lamp-desk": {
    note: "The lamp head nods down on its joint while the arm gives a little.",
    motion: {
      p0: { box: "view-box", origin: "10px 5px", animation: A("lamp-desk", "head", 0.75) },
      p1: { box: "view-box", origin: "10px 5px", animation: A("lamp-desk", "head", 0.75) },
      p3: { box: "view-box", origin: "7px 18px", animation: A("lamp-desk", "arm", 0.75) },
    },
    keyframes:
      K("lamp-desk", "head", "0%{transform:none}30%{transform:rotate(12deg)}60%{transform:rotate(-4deg)}85%{transform:rotate(1deg)}100%{transform:none}") +
      K("lamp-desk", "arm", there("rotate(2deg)", 30)),
  },

  landmark: {
    note: "The pillars rise one by one and the roof settles onto them.",
    motion: {
      p5: { origin: "50% 100%", animation: A("landmark", "pillar", 0.45, 0, "backwards") },
      p0: { origin: "50% 100%", animation: A("landmark", "pillar", 0.45, 60, "backwards") },
      p2: { origin: "50% 100%", animation: A("landmark", "pillar", 0.45, 120, "backwards") },
      p3: { origin: "50% 100%", animation: A("landmark", "pillar", 0.45, 180, "backwards") },
      p1: { animation: A("landmark", "roof", 0.6, 120) },
    },
    keyframes:
      K("landmark", "pillar", "0%{transform:scaleY(0)}60%{transform:scaleY(1.1)}100%{transform:none}") +
      K("landmark", "roof", "0%{transform:none}30%{transform:translateY(-1.5px)}60%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "laptop-check": {
    note: "The screen gives a blink and the tick draws itself on it.",
    draw: ["p1"],
    motion: {
      p2: { origin: "50% 100%", animation: A("laptop-check", "screen", 0.5) },
      p1: draw("laptop-check", 420, 120),
    },
    keyframes: drawKf("laptop-check") + K("laptop-check", "screen", there("scaleY(.94)", 30)),
  },

  lasso: {
    note: "The loop swings round on the knot and the rope follows.",
    motion: {
      p0: { box: "view-box", origin: "5px 16px", animation: A("lasso", "loop", 0.85) },
      p1: { origin: "0% 0%", animation: A("lasso", "rope", 0.85, 60) },
    },
    keyframes: K("lasso", "loop", swing(-10)) + K("lasso", "rope", swing(8)),
  },

  "layers-plus": {
    note: "The top layer lifts off the stack and the plus spins in beside it.",
    motion: {
      p0: { animation: A("layers-plus", "top", 0.65) },
      p3: { animation: A("layers-plus", "mid", 0.65) },
      p1: { animation: A("layers-plus", "plus", 0.5, 120, "backwards") },
      p2: { animation: A("layers-plus", "plus", 0.5, 120, "backwards") },
    },
    keyframes:
      K("layers-plus", "top", "0%{transform:none}35%{transform:translateY(-1.6px)}65%{transform:translateY(.2px)}100%{transform:none}") +
      K("layers-plus", "mid", there("translateY(-.6px)", 35)) +
      K("layers-plus", "plus", "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}"),
  },

  layout: {
    note: "The header rule and the sidebar rule draw themselves into the page.",
    draw: ["p1", "p2"],
    motion: {
      p1: draw("layout", 380),
      p2: draw("layout", 380, 140),
      p0: { animation: A("layout", "page", 0.5) },
    },
    keyframes: drawKf("layout") + K("layout", "page", there("scale(.96)", 30)),
  },

  dashboard: {
    note: "The tiles trade heights: the left column's tall tile shrinks as the right one's grows.",
    motion: {
      p0: { animation: A("dashboard", "a", 0.8) },
      p3: { animation: A("dashboard", "b", 0.8) },
      p1: { animation: A("dashboard", "c", 0.8, 40) },
      p2: { animation: A("dashboard", "d", 0.8, 40) },
    },
    keyframes:
      K("dashboard", "a", '35%,60%{d:path("M4 3 H9 A1 1 0 0 1 10 4 V8 A1 1 0 0 1 9 9 H4 A1 1 0 0 1 3 8 V4 A1 1 0 0 1 4 3 Z")}') +
      K("dashboard", "b", '35%,60%{d:path("M4 13 H9 A1 1 0 0 1 10 14 V20 A1 1 0 0 1 9 21 H4 A1 1 0 0 1 3 20 V14 A1 1 0 0 1 4 13 Z")}') +
      K("dashboard", "c", '35%,60%{d:path("M15 3 H20 A1 1 0 0 1 21 4 V10 A1 1 0 0 1 20 11 H15 A1 1 0 0 1 14 10 V4 A1 1 0 0 1 15 3 Z")}') +
      K("dashboard", "d", '35%,60%{d:path("M15 15 H20 A1 1 0 0 1 21 16 V20 A1 1 0 0 1 20 21 H15 A1 1 0 0 1 14 20 V16 A1 1 0 0 1 15 15 Z")}'),
  },

  "layout-grid": {
    note: "The four tiles pop in turn, going round the grid.",
    motion: {
      p0: { animation: A("layout-grid", "tile", 0.45) },
      p1: { animation: A("layout-grid", "tile", 0.45, 60) },
      p2: { animation: A("layout-grid", "tile", 0.45, 120) },
      p3: { animation: A("layout-grid", "tile", 0.45, 180) },
    },
    keyframes: K("layout-grid", "tile", "0%{transform:none}35%{transform:scale(.7)}70%{transform:scale(1.08)}100%{transform:none}"),
  },

  "layout-list": {
    note: "The two thumbnails pop and their lines write themselves beside them.",
    draw: ["p2", "p3", "p4", "p5"],
    motion: {
      p0: { animation: A("layout-list", "box", 0.45) },
      p1: { animation: A("layout-list", "box", 0.45, 120) },
      p2: draw("layout-list", 300, 40),
      p3: draw("layout-list", 300, 90),
      p4: draw("layout-list", 300, 160),
      p5: draw("layout-list", 300, 210),
    },
    keyframes: drawKf("layout-list") + K("layout-list", "box", "0%{transform:none}35%{transform:scale(.75)}70%{transform:scale(1.06)}100%{transform:none}"),
  },

  "layout-panel-left": {
    note: "The side panel folds narrower and the tiles slide over after it.",
    motion: {
      p0: { origin: "0% 50%", animation: A("layout-panel-left", "panel", 0.65) },
      p1: { animation: A("layout-panel-left", "tile", 0.65, 30) },
      p2: { animation: A("layout-panel-left", "tile", 0.65, 60) },
    },
    keyframes:
      K("layout-panel-left", "panel", "0%{transform:none}35%{transform:scaleX(.6)}70%{transform:scaleX(1.05)}100%{transform:none}") +
      K("layout-panel-left", "tile", "0%{transform:none}35%{transform:translateX(-2px)}70%{transform:translateX(.3px)}100%{transform:none}"),
  },

  "layout-panel-top": {
    note: "The top panel folds shorter and the tiles rise after it.",
    motion: {
      p0: { origin: "50% 0%", animation: A("layout-panel-top", "panel", 0.65) },
      p1: { animation: A("layout-panel-top", "tile", 0.65, 30) },
      p2: { animation: A("layout-panel-top", "tile", 0.65, 60) },
    },
    keyframes:
      K("layout-panel-top", "panel", "0%{transform:none}35%{transform:scaleY(.6)}70%{transform:scaleY(1.05)}100%{transform:none}") +
      K("layout-panel-top", "tile", "0%{transform:none}35%{transform:translateY(-2px)}70%{transform:translateY(.3px)}100%{transform:none}"),
  },

  template: {
    note: "The blocks slot into place: the header from above, then the two blocks from the sides.",
    motion: {
      p0: { animation: A("template", "top", 0.5, 0, "backwards") },
      p1: { animation: A("template", "left", 0.5, 80, "backwards") },
      p2: { animation: A("template", "right", 0.5, 140, "backwards") },
    },
    keyframes: K("template", "top", slideIn(0, -2.5)) + K("template", "left", slideIn(-2.5)) + K("template", "right", slideIn(2.5)),
  },

  leaf: {
    note: "The leaf sways on its stem, which bends a little after it.",
    motion: {
      p0: { box: "view-box", origin: "8px 18px", animation: A("leaf", "sway", 0.85) },
      p1: { box: "view-box", origin: "2px 21px", animation: A("leaf", "stem", 0.85) },
    },
    keyframes: K("leaf", "sway", swing(-8)) + K("leaf", "stem", swing(-3)),
  },

  "life-buoy": {
    note: "The ring's bands turn a quarter round between the inner and outer rims.",
    motion: {
      p1: { box: "view-box", origin: "12px 12px", animation: A("life-buoy", "turn", 0.75) },
      p2: { box: "view-box", origin: "12px 12px", animation: A("life-buoy", "turn", 0.75) },
      p3: { box: "view-box", origin: "12px 12px", animation: A("life-buoy", "turn", 0.75) },
      p4: { box: "view-box", origin: "12px 12px", animation: A("life-buoy", "turn", 0.75) },
      p5: { animation: A("life-buoy", "rim", 0.5) },
    },
    keyframes:
      K("life-buoy", "turn", "0%{transform:none}75%{transform:rotate(98deg)}100%{transform:rotate(90deg)}") +
      K("life-buoy", "rim", there("scale(.9)", 35)),
  },

  "lightbulb-off": {
    note: "The slash strikes through and the bulb flickers out.",
    draw: ["p1"],
    motion: {
      p1: draw("lightbulb-off", 420),
      p0: { animation: A("lightbulb-off", "flicker", 0.6, 100) },
      p2: { animation: A("lightbulb-off", "flicker", 0.6, 100) },
    },
    keyframes: drawKf("lightbulb-off") + K("lightbulb-off", "flicker", "0%,100%{opacity:1}20%{opacity:.3}35%{opacity:.8}55%{opacity:.25}"),
  },

  lighthouse: {
    note: "The lamp flashes and the beams sweep out, right side then left.",
    motion: {
      p11: { animation: A("lighthouse", "lamp", 0.5) },
      p0: { animation: A("lighthouse", "lamp", 0.5) },
      p4: { origin: "0% 50%", animation: A("lighthouse", "beam", 0.45, 60, "backwards") },
      p2: { origin: "0% 100%", animation: A("lighthouse", "beam", 0.45, 90, "backwards") },
      p3: { origin: "0% 0%", animation: A("lighthouse", "beam", 0.45, 90, "backwards") },
      p5: { origin: "100% 50%", animation: A("lighthouse", "beam", 0.45, 240, "backwards") },
      p7: { origin: "100% 100%", animation: A("lighthouse", "beam", 0.45, 270, "backwards") },
      p6: { origin: "100% 0%", animation: A("lighthouse", "beam", 0.45, 270, "backwards") },
    },
    keyframes:
      K("lighthouse", "lamp", "0%,100%{transform:none;opacity:1}30%{transform:translateY(-.5px);opacity:.4}") +
      K("lighthouse", "beam", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.4);opacity:1}100%{transform:none;opacity:1}"),
  },

  "line-height": {
    note: "The top and bottom rules spread away from the letter and come back.",
    motion: {
      p2: { animation: A("line-height", "up", 0.6) },
      p1: { animation: A("line-height", "down", 0.6) },
      p3: { origin: "50% 100%", animation: A("line-height", "letter", 0.6) },
      p0: { animation: A("line-height", "bar", 0.6) },
    },
    keyframes:
      K("line-height", "up", "0%{transform:none}35%{transform:translateY(-1.3px)}70%{transform:translateY(.3px)}100%{transform:none}") +
      K("line-height", "down", "0%{transform:none}35%{transform:translateY(1.3px)}70%{transform:translateY(-.3px)}100%{transform:none}") +
      K("line-height", "letter", there("scaleY(1.1)", 35)) +
      K("line-height", "bar", there("translateY(.4px)", 35)),
  },

  "letter-spacing": {
    note: "The side rules spread away from the letter and come back.",
    motion: {
      p2: { animation: A("letter-spacing", "left", 0.6) },
      p1: { animation: A("letter-spacing", "right", 0.6) },
      p3: { origin: "50% 100%", animation: A("letter-spacing", "letter", 0.6) },
      p0: { animation: A("letter-spacing", "letter", 0.6) },
    },
    keyframes:
      K("letter-spacing", "left", "0%{transform:none}35%{transform:translateX(-1.3px)}70%{transform:translateX(.3px)}100%{transform:none}") +
      K("letter-spacing", "right", "0%{transform:none}35%{transform:translateX(1.3px)}70%{transform:translateX(-.3px)}100%{transform:none}") +
      K("letter-spacing", "letter", there("scaleX(1.12)", 35)),
  },

  squiggle: {
    note: "The squiggle draws itself from end to end.",
    draw: ["p0"],
    motion: { p0: draw("squiggle", 850) },
    keyframes: drawKf("squiggle"),
  },

  link: {
    note: "The two links pull apart and snap back together.",
    motion: {
      p0: { animation: A("link", "a", 0.6) },
      p1: { animation: A("link", "b", 0.6) },
    },
    keyframes:
      K("link", "a", "0%{transform:none}35%{transform:translate(1.2px,-1.2px)}65%{transform:translate(-.3px,.3px)}100%{transform:none}") +
      K("link", "b", "0%{transform:none}35%{transform:translate(-1.2px,1.2px)}65%{transform:translate(.3px,-.3px)}100%{transform:none}"),
  },

  "link-2": {
    note: "The two halves draw apart and meet again on the bar, which stretches to hold them.",
    motion: {
      p0: { animation: A("link-2", "left", 0.6) },
      p1: { animation: A("link-2", "right", 0.6) },
      p2: { animation: A("link-2", "bar", 0.6) },
    },
    keyframes:
      K("link-2", "left", "0%{transform:none}35%{transform:translateX(-1.5px)}65%{transform:translateX(.3px)}100%{transform:none}") +
      K("link-2", "right", "0%{transform:none}35%{transform:translateX(1.5px)}65%{transform:translateX(-.3px)}100%{transform:none}") +
      K("link-2", "bar", there("scaleX(1.3)", 35)),
  },

  "link-off": {
    note: "The two halves pull apart and the slash strikes between them.",
    draw: ["p3"],
    motion: {
      p0: { animation: A("link-off", "left", 0.65) },
      p2: { animation: A("link-off", "left", 0.65) },
      p1: { animation: A("link-off", "right", 0.65) },
      p3: draw("link-off", 400, 120),
    },
    keyframes:
      drawKf("link-off") +
      K("link-off", "left", "0%{transform:none}40%{transform:translateX(-1.5px)}100%{transform:none}") +
      K("link-off", "right", "0%{transform:none}40%{transform:translateX(1.5px)}100%{transform:none}"),
  },

  list: {
    note: "Each bullet pops and its line writes itself, row after row.",
    draw: ["p3", "p4", "p5"],
    motion: {
      p0: { animation: A("list", "dot", 0.4) },
      p1: { animation: A("list", "dot", 0.4, 90) },
      p2: { animation: A("list", "dot", 0.4, 180) },
      p3: draw("list", 320, 40),
      p4: draw("list", 320, 130),
      p5: draw("list", 320, 220),
    },
    keyframes: drawKf("list") + K("list", "dot", there("scale(1.8)", 40)),
  },

  "list-filter": {
    note: "The three bars narrow down like a funnel, one after the other.",
    motion: {
      p0: { animation: A("list-filter", "a", 0.6) },
      p1: { animation: A("list-filter", "b", 0.6, 50) },
      p2: { animation: A("list-filter", "c", 0.6, 100) },
    },
    keyframes:
      K("list-filter", "a", "0%{transform:none}35%{transform:scaleX(.8)}70%{transform:scaleX(1.04)}100%{transform:none}") +
      K("list-filter", "b", "0%{transform:none}35%{transform:scaleX(.65)}70%{transform:scaleX(1.05)}100%{transform:none}") +
      K("list-filter", "c", "0%{transform:none}35%{transform:scaleX(.45)}70%{transform:scaleX(1.08)}100%{transform:none}"),
  },

  "list-minus": {
    note: "The minus slides in beside the middle line and the list steps back from it.",
    motion: {
      p3: { animation: A("list-minus", "minus", 0.5, 0, "backwards") },
      p1: { origin: "0% 50%", animation: A("list-minus", "line", 0.5, 80) },
      p0: { animation: A("list-minus", "nudge", 0.5, 120) },
      p2: { animation: A("list-minus", "nudge", 0.5, 120) },
    },
    keyframes:
      K("list-minus", "minus", slideIn(3)) +
      K("list-minus", "line", there("scaleX(.8)", 35)) +
      K("list-minus", "nudge", there("translateX(-.8px)", 35)),
  },

  playlist: {
    note: "The note bobs to the beat and the track lines shift after it.",
    motion: {
      p3: { box: "view-box", origin: "18px 19px", animation: A("playlist", "note", 0.75) },
      p4: { box: "view-box", origin: "18px 19px", animation: A("playlist", "note", 0.75) },
      p0: { animation: A("playlist", "line", 0.5, 80) },
      p1: { animation: A("playlist", "line", 0.5, 140) },
      p2: { animation: A("playlist", "line", 0.5, 200) },
    },
    keyframes:
      K("playlist", "note", "0%{transform:none}25%{transform:translateY(-1.5px) rotate(-8deg)}50%{transform:translateY(.3px)}70%{transform:translateY(-.8px) rotate(5deg)}100%{transform:none}") +
      K("playlist", "line", there("translateX(1px)", 35)),
  },

  todo: {
    note: "The empty box squeezes, then the tick below draws itself in and the lines step aside.",
    draw: ["p3"],
    motion: {
      p4: { animation: A("todo", "box", 0.45) },
      p3: draw("todo", 420, 120),
      p2: { animation: A("todo", "line", 0.5, 200) },
      p0: { animation: A("todo", "line", 0.5, 40) },
    },
    keyframes: drawKf("todo") + K("todo", "box", there("scale(.8)", 35)) + K("todo", "line", there("translateX(1px)", 35)),
  },

  "list-tree": {
    note: "The branches grow down from the root and the child rows slide out at their ends.",
    draw: ["p3", "p4"],
    motion: {
      p3: draw("list-tree", 380),
      p4: draw("list-tree", 480, 60),
      p1: { animation: A("list-tree", "child", 0.45, 260, "backwards") },
      p2: { animation: A("list-tree", "child", 0.45, 360, "backwards") },
      p0: { animation: A("list-tree", "root", 0.45) },
    },
    keyframes: drawKf("list-tree") + K("list-tree", "child", slideIn(-2.5)) + K("list-tree", "root", there("translateX(.8px)", 35)),
  },

  "list-collapse": {
    note: "The two chevrons fold flat and the lines tuck in behind them.",
    motion: {
      p3: { origin: "0% 50%", animation: A("list-collapse", "fold", 0.55) },
      p4: { origin: "0% 50%", animation: A("list-collapse", "fold", 0.55, 60) },
      p0: { origin: "100% 50%", animation: A("list-collapse", "line", 0.55, 60) },
      p1: { origin: "100% 50%", animation: A("list-collapse", "line", 0.55, 100) },
      p2: { origin: "100% 50%", animation: A("list-collapse", "line", 0.55, 140) },
    },
    keyframes: K("list-collapse", "fold", there("scaleX(.3)", 40)) + K("list-collapse", "line", there("scaleX(.85)", 40)),
  },

  "sort-ascending": {
    note: "The bars grow in from the left in order, shortest first.",
    motion: {
      p2: { origin: "0% 50%", animation: A("sort-ascending", "grow", 0.45, 0, "backwards") },
      p1: { origin: "0% 50%", animation: A("sort-ascending", "grow", 0.45, 80, "backwards") },
      p0: { origin: "0% 50%", animation: A("sort-ascending", "grow", 0.45, 160, "backwards") },
    },
    keyframes: K("sort-ascending", "grow", "0%{transform:scaleX(0)}60%{transform:scaleX(1.06)}100%{transform:none}"),
  },

  "sort-descending": {
    note: "The bars grow in from the left in order, longest first.",
    motion: {
      p1: { origin: "0% 50%", animation: A("sort-descending", "grow", 0.45, 0, "backwards") },
      p0: { origin: "0% 50%", animation: A("sort-descending", "grow", 0.45, 80, "backwards") },
      p2: { origin: "0% 50%", animation: A("sort-descending", "grow", 0.45, 160, "backwards") },
    },
    keyframes: K("sort-descending", "grow", "0%{transform:scaleX(0)}60%{transform:scaleX(1.06)}100%{transform:none}"),
  },

  hd: {
    note: "The H bounces and the D pops after it inside the frame.",
    motion: {
      p3: { origin: "50% 100%", animation: A("hd", "h", 0.5) },
      p1: { origin: "50% 100%", animation: A("hd", "h", 0.5, 30) },
      p0: { animation: A("hd", "bar", 0.5, 30) },
      p2: { animation: A("hd", "d", 0.5, 120) },
    },
    keyframes:
      K("hd", "h", there("scaleY(.75)", 35)) + K("hd", "bar", there("translateY(.8px)", 35)) + K("hd", "d", there("scale(1.2)", 40)),
  },

  "heart-handshake": {
    note: "The heart around the clasped hands beats twice.",
    motion: { p0: { animation: A("heart-handshake", "beat", 0.8) } },
    keyframes: K("heart-handshake", "beat", BEAT.replace("1.18", "1.12").replace("1.1)", "1.07)")),
  },

  "list-clock": {
    note: "The clock hand sweeps a full turn and the list lines step aside.",
    motion: {
      p0: { box: "view-box", origin: "16px 15px", animation: A("list-clock", "hand", 0.85) },
      p3: { animation: A("list-clock", "line", 0.5) },
      p1: { animation: A("list-clock", "line", 0.5, 60) },
      p2: { animation: A("list-clock", "line", 0.5, 120) },
    },
    keyframes: K("list-clock", "hand", "0%{transform:none}100%{transform:rotate(360deg)}") + K("list-clock", "line", there("translateX(-.8px)", 35)),
  },

  iteration: {
    note: "The loop draws itself round and the arrowhead nudges on at its end.",
    draw: ["p0"],
    motion: {
      p0: draw("iteration", 600),
      p1: { animation: A("iteration", "head", 0.45, 450) },
    },
    keyframes: drawKf("iteration") + K("iteration", "head", there("translateX(-1px)", 40)),
  },

  "room-service": {
    note: "The cloche lifts on its hinge side to show what is on the platter, and the hand holds steady under it.",
    motion: {
      p4: { box: "view-box", origin: "19px 10px", animation: A("room-service", "lid", 0.8) },
      p3: { box: "view-box", origin: "19px 10px", animation: A("room-service", "lid", 0.8) },
      p0: { box: "view-box", origin: "19px 10px", animation: A("room-service", "lid", 0.8) },
      p2: { animation: A("room-service", "hand", 0.8) },
      p1: { animation: A("room-service", "hand", 0.8) },
    },
    keyframes:
      K("room-service", "lid", "0%{transform:none}35%{transform:translateY(-1.2px) rotate(12deg)}60%{transform:translateY(-1.2px) rotate(10deg)}85%{transform:rotate(-1deg)}100%{transform:none}") +
      K("room-service", "hand", "0%,75%{transform:none}85%{transform:translateY(.5px)}100%{transform:none}"),
  },

  heater: {
    note: "Heat waves rise off the heater, one after the other, as its vents glow.",
    motion: {
      p0: { animation: A("heater", "heat", 0.7) },
      p1: { animation: A("heater", "heat", 0.7, 120) },
      p4: { origin: "50% 100%", animation: A("heater", "vent", 0.5) },
      p5: { origin: "50% 100%", animation: A("heater", "vent", 0.5, 60) },
      p6: { origin: "50% 100%", animation: A("heater", "vent", 0.5, 120) },
    },
    keyframes:
      K("heater", "heat", "0%{transform:none;opacity:1}40%{transform:translateY(-1.5px);opacity:0}41%{transform:translateY(1.5px);opacity:0}100%{transform:none;opacity:1}") +
      K("heater", "vent", there("scaleY(1.25)", 35)),
  },

  "iv-bag": {
    note: "The fluid sloshes in the bag and a drop runs down the line.",
    draw: ["p0"],
    motion: {
      p1: { animation: A("iv-bag", "slosh", 0.75) },
      p2: { origin: "50% 0%", animation: A("iv-bag", "bag", 0.75) },
      p0: draw("iv-bag", 500, 150),
    },
    keyframes:
      drawKf("iv-bag") +
      K("iv-bag", "slosh", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(4deg)}75%{transform:rotate(-1.5deg)}100%{transform:none}") +
      K("iv-bag", "bag", there("rotate(2deg)", 25)),
  },

  lectern: {
    note: "The desk top tips toward the speaker and the page on it lifts.",
    motion: {
      p0: { box: "view-box", origin: "12px 13px", animation: A("lectern", "top", 0.7) },
      p3: { origin: "0% 100%", animation: A("lectern", "page", 0.6, 80) },
    },
    keyframes:
      K("lectern", "top", "0%{transform:none}30%{transform:rotate(-4deg)}65%{transform:rotate(1.5deg)}100%{transform:none}") +
      K("lectern", "page", there("translateY(-1px) rotate(-8deg)", 40)),
  },

  "list-restart": {
    note: "The arrow turns back a full circle and the list lines shift in its wake.",
    motion: {
      p3: { box: "view-box", origin: "16.5px 14.5px", animation: A("list-restart", "turn", 0.8) },
      p4: { box: "view-box", origin: "16.5px 14.5px", animation: A("list-restart", "turn", 0.8) },
      p1: { animation: A("list-restart", "line", 0.5, 80) },
      p2: { animation: A("list-restart", "line", 0.5, 140) },
    },
    keyframes: K("list-restart", "turn", "0%{transform:none}100%{transform:rotate(-360deg)}") + K("list-restart", "line", there("translateX(-.8px)", 35)),
  },

  "hand-fist": {
    note: "The fist punches up and the fingers clench on the way.",
    motion: {
      p0: { animation: A("hand-fist", "punch", 0.6) },
      p1: { origin: "50% 100%", animation: A("hand-fist", "clench", 0.6) },
      p2: { origin: "50% 100%", animation: A("hand-fist", "clench", 0.6) },
      p3: { origin: "50% 100%", animation: A("hand-fist", "clench", 0.6) },
    },
    keyframes:
      K("hand-fist", "punch", "0%{transform:none}30%{transform:translateY(-2px)}55%{transform:translateY(.3px)}100%{transform:none}") +
      K("hand-fist", "clench", "0%{transform:none}30%{transform:translateY(-2px) scaleY(.88)}55%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "house-heart": {
    note: "The heart beats twice inside the house, which settles around it.",
    motion: {
      p0: { animation: A("house-heart", "beat", 0.8) },
      p1: { origin: "50% 100%", animation: A("house-heart", "house", 0.5) },
    },
    keyframes: K("house-heart", "beat", BEAT) + K("house-heart", "house", there("scale(1.02,.97)", 30)),
  },
};
