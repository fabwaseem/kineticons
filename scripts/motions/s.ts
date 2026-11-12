import type { Entry, Override } from "./types";

/** Batch s: its icons (pnpm import-icons s) and their motions. */
export const list: Entry[] = [
  ["LassoSelect", "lasso-select", "Lasso select", "actions", "swing", ["select", "lasso", "freeform", "selection"], "The loop draws round and the pointer clicks."],
  ["LayerArrowDown", "layer-arrow-down", "Move layer down", "actions", "nudge-down", ["layer", "send backward", "down", "order"], "The arrow pushes the layer down."],
  ["LayerArrowUp", "layer-arrow-up", "Move layer up", "actions", "nudge-up", ["layer", "bring forward", "up", "order"], "The arrow lifts the layer up."],
  ["Layers2", "layers-2", "Two layers", "actions", "bounce", ["layers", "stack", "two", "levels"], "The layers part and settle."],
  ["LayersArrowDown", "layers-arrow-down", "Layers down", "actions", "nudge-down", ["layers", "send back", "down", "order"], "The arrow drops and the layers part."],
  ["LayersArrowUp", "layers-arrow-up", "Layers up", "actions", "nudge-up", ["layers", "bring front", "up", "order"], "The arrow rises and the layers part."],
  ["LayersMinus", "layers-minus", "Remove layer", "actions", "pop", ["layer", "remove", "minus", "delete"], "The minus draws in and the layers part."],
  ["LayoutArrowDown", "layout-arrow-down", "Layout down", "app", "nudge-down", ["layout", "move down", "panel", "arrange"], "The arrow drops into the layout."],
  ["LayoutArrowRight", "layout-arrow-right", "Layout right", "app", "nudge-right", ["layout", "move right", "panel", "arrange"], "The arrow slides into the layout."],
  ["LayoutFreeform", "layout-freeform", "Freeform layout", "app", "pop", ["layout", "freeform", "canvas", "blocks"], "The blocks shift about."],
  ["LayoutGridCircles", "layout-grid-circles", "Grid of circles", "app", "pop", ["grid", "circles", "dots", "apps"], "The circles pop in turn."],
  ["LeafyGreen", "leafy-green", "Leafy greens", "food", "swing", ["salad", "lettuce", "vegetable", "greens"], "The leaves sway."],
  ["Lens", "lens", "Lens", "devices", "pop", ["lens", "optics", "glass", "focus"], "The light passes through."],
  ["LensConcave", "lens-concave", "Concave lens", "devices", "pop", ["lens", "concave", "optics", "physics"], "The lens flexes."],
  ["LensConvex", "lens-convex", "Convex lens", "devices", "pop", ["lens", "convex", "optics", "physics"], "The lens flexes."],
  ["LetterA", "letter-a", "Letter A", "text", "draw", ["letter", "a", "alphabet", "font"], "The letter writes itself."],
  ["LetterC", "letter-c", "Letter C", "text", "draw", ["letter", "c", "alphabet", "font"], "The letter writes itself."],
  ["LetterD", "letter-d", "Letter D", "text", "draw", ["letter", "d", "alphabet", "font"], "The letter writes itself."],
  ["LetterE", "letter-e", "Letter E", "text", "draw", ["letter", "e", "alphabet", "font"], "The letter writes itself."],
  ["LetterF", "letter-f", "Letter F", "text", "draw", ["letter", "f", "alphabet", "font"], "The letter writes itself."],
  ["LetterG", "letter-g", "Letter G", "text", "draw", ["letter", "g", "alphabet", "font"], "The letter writes itself."],
  ["LetterI", "letter-i", "Letter I", "text", "draw", ["letter", "i", "alphabet", "font"], "The letter writes itself."],
  ["LetterJ", "letter-j", "Letter J", "text", "draw", ["letter", "j", "alphabet", "font"], "The letter writes itself."],
  ["LetterK", "letter-k", "Letter K", "text", "draw", ["letter", "k", "alphabet", "font"], "The letter writes itself."],
  ["LetterL", "letter-l", "Letter L", "text", "draw", ["letter", "l", "alphabet", "font"], "The letter writes itself."],
  ["LetterM", "letter-m", "Letter M", "text", "draw", ["letter", "m", "alphabet", "font"], "The letter writes itself."],
  ["LetterN", "letter-n", "Letter N", "text", "draw", ["letter", "n", "alphabet", "font"], "The letter writes itself."],
  ["LetterO", "letter-o", "Letter O", "text", "draw", ["letter", "o", "alphabet", "font"], "The letter writes itself."],
  ["LetterP", "letter-p", "Letter P", "text", "draw", ["letter", "p", "alphabet", "font"], "The letter writes itself."],
  ["LetterQ", "letter-q", "Letter Q", "text", "draw", ["letter", "q", "alphabet", "font"], "The letter writes itself."],
  ["LetterR", "letter-r", "Letter R", "text", "draw", ["letter", "r", "alphabet", "font"], "The letter writes itself."],
  ["Letters", "letters", "Letters", "text", "draw", ["letters", "alphabet", "font", "type"], "The letters write themselves."],
  ["LetterS", "letter-s", "Letter S", "text", "draw", ["letter", "s", "alphabet", "font"], "The letter writes itself."],
  ["LetterT", "letter-t", "Letter T", "text", "draw", ["letter", "t", "alphabet", "font"], "The letter writes itself."],
  ["LetterText", "letter-text", "Text with initial", "text", "draw", ["text", "initial", "drop cap", "paragraph"], "The lines write in after the letter."],
  ["LetterU", "letter-u", "Letter U", "text", "draw", ["letter", "u", "alphabet", "font"], "The letter writes itself."],
  ["LetterV", "letter-v", "Letter V", "text", "draw", ["letter", "v", "alphabet", "font"], "The letter writes itself."],
  ["LetterW", "letter-w", "Letter W", "text", "draw", ["letter", "w", "alphabet", "font"], "The letter writes itself."],
  ["LetterX", "letter-x", "Letter X", "text", "draw", ["letter", "x", "alphabet", "font"], "The letter writes itself."],
  ["LetterY", "letter-y", "Letter Y", "text", "draw", ["letter", "y", "alphabet", "font"], "The letter writes itself."],
  ["LetterZ", "letter-z", "Letter Z", "text", "draw", ["letter", "z", "alphabet", "font"], "The letter writes itself."],
  ["LibraryBig", "library-big", "Bookshelf", "app", "tilt", ["books", "library", "shelf", "collection"], "A book leans out."],
  ["LibrarySquare", "library-square", "Library in a square", "app", "tilt", ["books", "library", "collection", "shelf"], "A book leans out."],
  ["Ligature", "ligature", "Ligature", "text", "draw", ["ligature", "typography", "font", "letters"], "The joined letters write themselves."],
  ["LineDotBottomVertical", "line-dot-bottom-vertical", "Line with dot at bottom", "development", "nudge-down", ["line", "dot", "end", "vertical"], "The dot slides to the end of the line."],
  ["LineDotLeftHorizontal", "line-dot-left-horizontal", "Line with dot at left", "development", "nudge-left", ["line", "dot", "start", "horizontal"], "The dot slides to the end of the line."],
  ["LineDotRightHorizontal", "line-dot-right-horizontal", "Line with dot at right", "development", "nudge-right", ["line", "dot", "end", "horizontal"], "The dot slides to the end of the line."],
  ["LineDotTopVertical", "line-dot-top-vertical", "Line with dot at top", "development", "nudge-up", ["line", "dot", "start", "vertical"], "The dot slides to the end of the line."],
  ["LineStyle", "line-style", "Line style", "development", "draw", ["stroke", "dashed", "dotted", "border"], "The lines draw themselves."],
  ["ListCheck", "list-check", "List with tick", "status", "draw", ["checklist", "done", "tasks", "list"], "The tick draws in."],
  ["ListChevronsDownUp", "list-chevrons-down-up", "Collapse list items", "navigation", "nudge-up", ["collapse", "fold", "list", "less"], "The chevrons fold in."],
  ["ListChevronsUpDown", "list-chevrons-up-down", "Expand list items", "navigation", "nudge-down", ["expand", "unfold", "list", "more"], "The chevrons fold out."],
  ["ListEnd", "list-end", "Add to end of list", "actions", "nudge-down", ["append", "queue", "last", "list"], "The arrow drops the item at the end."],
  ["ListFilterPlus", "list-filter-plus", "Add filter", "actions", "pop", ["filter", "add", "sort", "narrow"], "The plus draws in."],
  ["ListStart", "list-start", "Add to start of list", "actions", "nudge-up", ["prepend", "queue", "first", "list"], "The arrow lifts the item to the top."],
  ["MailBadge", "mail-badge", "Mail with badge", "communication", "pulse", ["mail", "notification", "badge", "new"], "The badge pops."],
  ["MailClock", "mail-clock", "Scheduled mail", "communication", "spin", ["scheduled", "later", "pending", "mail"], "The clock hands turn."],
  ["MailMinus", "mail-minus", "Remove mail", "communication", "shake", ["remove", "delete", "minus", "mail"], "The minus draws in."],
  ["MailPen", "mail-pen", "Write mail", "communication", "wiggle", ["compose", "write", "edit", "mail"], "The pen writes."],
  ["MailQuestion", "mail-question", "Mail question", "communication", "wiggle", ["question", "help", "unknown", "mail"], "The question mark nods."],
  ["Mango", "mango", "Mango", "food", "wiggle", ["fruit", "mango", "tropical", "food"], "It sways on its stalk."],
  ["MapMinus", "map-minus", "Remove map", "travel", "shake", ["map", "remove", "minus", "delete"], "The minus draws in."],
  ["MapPinCheckInside", "map-pin-check-inside", "Checked place", "navigation", "draw", ["arrived", "visited", "check in", "pin"], "The tick draws inside the pin."],
  ["MapPinMinus", "map-pin-minus", "Remove place", "navigation", "shake", ["remove location", "delete pin", "minus"], "The minus draws in."],
  ["MapPinMinusInside", "map-pin-minus-inside", "Remove place (inside)", "navigation", "shake", ["remove location", "delete pin", "minus"], "The minus draws inside the pin."],
  ["MapPinPlusInside", "map-pin-plus-inside", "Add place (inside)", "navigation", "pop", ["add location", "new place", "pin"], "The plus draws inside the pin."],
  ["MapPinSearch", "map-pin-search", "Search places", "navigation", "wiggle", ["search", "find", "location", "nearby"], "The lens searches."],
  ["MapPinXInside", "map-pin-x-inside", "Remove place (cross)", "navigation", "shake", ["remove location", "delete pin", "cross"], "The cross draws inside the pin."],
  ["MapPlus", "map-plus", "Add map", "travel", "pop", ["map", "add", "new", "route"], "The plus draws in."],
  ["Margin", "margin", "Margin", "development", "pop", ["margin", "spacing", "box", "outset"], "The edges breathe."],
  ["MarginBottom", "margin-bottom", "Bottom margin", "development", "nudge-down", ["margin", "bottom", "spacing", "box"], "The bottom edge pushes out."],
  ["MarginHorizontal", "margin-horizontal", "Side margins", "development", "pop", ["margin", "horizontal", "spacing", "box"], "The side edges push out."],
  ["MarginLeft", "margin-left", "Left margin", "development", "nudge-left", ["margin", "left", "spacing", "box"], "The left edge pushes out."],
  ["MarginRight", "margin-right", "Right margin", "development", "nudge-right", ["margin", "right", "spacing", "box"], "The right edge pushes out."],
  ["MarginTop", "margin-top", "Top margin", "development", "nudge-up", ["margin", "top", "spacing", "box"], "The top edge pushes out."],
  ["MarginVertical", "margin-vertical", "Top and bottom margins", "development", "pop", ["margin", "vertical", "spacing", "box"], "The top and bottom edges push out."],
  ["Mars", "mars", "Male", "people", "tilt", ["male", "gender", "man", "mars"], "The arrow points up and out."],
  ["MarsStroke", "mars-stroke", "Male (stroke)", "people", "tilt", ["male", "gender", "transgender", "mars"], "The arrow points up and out."],
  ["MenuSquare", "menu-square", "Menu in a square", "navigation", "wiggle", ["menu", "hamburger", "nav", "open"], "The lines shuffle."],
  ["MessageCircleAlert", "message-circle-alert", "Chat warning", "communication", "shake", ["warning", "alert", "problem", "chat"], "The mark flashes."],
  ["MessageCircleDashed", "message-circle-dashed", "Draft chat", "communication", "spin-90", ["draft", "chat", "pending", "empty"], "The dashes turn round."],
  ["MessageCircleDashedCheck", "message-circle-dashed-check", "Draft chat done", "communication", "draw", ["draft", "done", "chat", "resolved"], "The tick draws in."],
  ["MessageCircleHeart", "message-circle-heart", "Chat love", "communication", "pulse", ["love", "like", "feedback", "chat"], "The heart beats."],
  ["MessageCircleText", "message-circle-text", "Chat message", "communication", "bounce", ["message", "text", "chat", "comment"], "The lines write in."],
  ["MessagesCircle", "messages-circle", "Chat conversation", "communication", "bounce", ["conversation", "chat", "dialogue", "talk"], "The bubbles bounce in turn."],
  ["MessageSquareCheck", "message-square-check", "Message done", "communication", "draw", ["read", "done", "resolved", "message"], "The tick draws."],
  ["MessageSquareCode", "message-square-code", "Code message", "communication", "wiggle", ["code", "snippet", "review", "message"], "The brackets open."],
  ["MessageSquareDashed", "message-square-dashed", "Draft message", "communication", "pop", ["draft", "message", "pending", "empty"], "The dashes march round."],
  ["MessageSquareDiff", "message-square-diff", "Message diff", "communication", "pop", ["diff", "changes", "review", "message"], "The plus and minus swap."],
  ["MessageSquareMore", "message-square-more", "Typing message", "communication", "wave", ["typing", "dots", "message", "reply"], "The dots bob."],
  ["MessageSquareOff", "message-square-off", "Messages off", "communication", "shake", ["mute", "disabled", "no messages", "off"], "The slash strikes."],
  ["MessageSquarePlus", "message-square-plus", "New message", "communication", "pop", ["new message", "compose", "add", "comment"], "The plus grows."],
  ["MessageSquareReply", "message-square-reply", "Reply to message", "communication", "nudge-left", ["reply", "answer", "respond", "message"], "The arrow turns back."],
  ["MessageSquareX", "message-square-x", "Message failed", "communication", "shake", ["failed", "delete", "remove", "message"], "The cross strikes."],
  ["Mic", "microphone", "Microphone on a stand", "media", "tilt", ["microphone", "record", "voice", "audio"], "It picks up sound."],
  ["MicAudioLines", "mic-audio-lines", "Mic with sound", "media", "pulse", ["microphone", "recording", "voice", "audio"], "The sound lines pulse."],
  ["Microchip", "microchip", "Microchip", "development", "pulse", ["chip", "processor", "hardware", "memory"], "The pins light up in turn."],
  ["MidiPort", "midi-port", "MIDI port", "devices", "pop", ["midi", "port", "music", "connector"], "The pins light up."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a transform origin in icon units, so parts that turn together share one pivot */
const V = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a keyframe animation named after its icon */
const a = (icon: string, name: string, ms: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${SMOOTH} ${delay}ms${fill ? ` ${fill}` : ""}`;
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** a stroke drawing itself in from its start (the part must be listed in `draw`), or from its end */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: a(icon, "draw", ms, delay, "backwards") });
const undraw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: a(icon, "undraw", ms, delay, "backwards") });

/** a step out and back, with a small rebound */
const nudge = (dx: number, dy: number) =>
  `0%{transform:none}35%{transform:translate(${dx}px,${dy}px)}65%{transform:translate(${+(-dx * 0.2).toFixed(2)}px,${+(-dy * 0.2).toFixed(2)}px)}100%{transform:none}`;
/** grows in from nothing (use with fill "backwards") */
const POP_IN = "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}";
/** a flap pressed flat and let go */
const PRESS = "0%{transform:none}35%{transform:scaleY(.55)}70%{transform:scaleY(1.05)}100%{transform:none}";
/** a small head shake, for things that are switched off */
const SHAKE = "0%{transform:none}20%{transform:translateX(-.8px)}40%{transform:translateX(.7px)}60%{transform:translateX(-.4px)}80%{transform:translateX(.2px)}100%{transform:none}";
/** rocks round a pivot and settles */
const ROCK = (deg: number) =>
  `0%{transform:none}25%{transform:rotate(${deg}deg)}50%{transform:rotate(${-deg * 0.6}deg)}75%{transform:rotate(${deg * 0.25}deg)}100%{transform:none}`;
/** a plus that spins in from nothing */
const SPIN_IN = "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}";
/** a tile popping in turn */
const TILE = "0%{transform:none}35%{transform:scale(.7)}70%{transform:scale(1.08)}100%{transform:none}";

/** a speech bubble that squashes and springs back from the corner its tail is in */
const BUBBLE = "0%{transform:none}30%{transform:scale(1.07,.92) rotate(-3deg)}60%{transform:scale(.97,1.04) rotate(1.5deg)}100%{transform:none}";
const bubble = (icon: string, delay = 0) => ({ origin: "0% 100%", animation: a(icon, "bubble", 600, delay) });
const bubbleKf = (icon: string) => kf(icon, "bubble", BUBBLE);

/** a map pin dropping in: the pin squashes as it lands */
const PIN = "0%{transform:none}25%{transform:translateY(-2.5px)}50%{transform:scale(1.06,.9)}70%{transform:scale(.98,1.03)}100%{transform:none}";
const PIN_DOT = "0%{transform:none}25%{transform:translateY(-2.5px)}50%{transform:translateY(.6px)}70%{transform:translateY(-.2px)}100%{transform:none}";
const pin = (icon: string) => ({ origin: "50% 100%", animation: a(icon, "pin", 650) });
const pinDot = (icon: string) => ({ animation: a(icon, "dot", 650) });
const pinKf = (icon: string) => kf(icon, "pin", PIN) + kf(icon, "dot", PIN_DOT);

/** a magnifier that circles over what it searches */
const SEARCH = "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}";
/** a pen that scribbles around its nib */
const SCRIBBLE = "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}";

/** a letter (or several) writing itself stroke by stroke: [part, ms, delay, from its end] */
const write = (icon: string, note: string, steps: [string, number, number, boolean?][]): Override => ({
  note,
  draw: steps.map(([p]) => p),
  motion: Object.fromEntries(steps.map(([p, ms, d, rev]) => [p, rev ? undraw(icon, ms, d) : draw(icon, ms, d)])),
  keyframes: drawKf(icon) + (steps.some(([, , , r]) => r) ? undrawKf(icon) : ""),
});

/** a line whose dot sits at one end: the line runs into the dot, which takes the hit and pushes on */
const lineDot = (icon: string, fromEnd: boolean, dx: number, dy: number): Override => ({
  note: "The line runs along to the dot, which takes the knock and pushes on a little before settling.",
  draw: ["p0"],
  motion: { p0: fromEnd ? undraw(icon, 420) : draw(icon, 420), p1: { animation: a(icon, "hit", 650) } },
  keyframes:
    (fromEnd ? undrawKf(icon) : drawKf(icon)) +
    kf(icon, "hit", `0%,40%{transform:none}58%{transform:translate(${dx}px,${dy}px) scale(1.18)}80%{transform:scale(.96)}100%{transform:none}`),
});

/** a margin: its edges push out from the box, which gives the other way */
const margin = (icon: string, note: string, edges: [string, number, number][], box: string): Override => ({
  note,
  motion: {
    p0: { animation: a(icon, "box", 600) },
    ...Object.fromEntries(edges.map(([p], i) => [p, { animation: a(icon, `e${i}`, 600) }])),
  },
  keyframes: kf(icon, "box", box) + edges.map(([, dx, dy], i) => kf(icon, `e${i}`, nudge(dx, dy))).join(""),
});

/** an envelope flap pressed shut, origin at its fold */
const flap = (icon: string, delay = 0) => ({ origin: "50% 0%", animation: a(icon, "flap", 500, delay) });

export const motions: Record<string, Override> = {
  "lasso-select": {
    note: "The loop draws itself round, the knot swings on its tail and the pointer clicks inside the selection.",
    draw: ["p2", "p1"],
    motion: {
      p2: draw("lasso-select", 550),
      p1: draw("lasso-select", 250, 450),
      p3: { ...V(5, 22), animation: a("lasso-select", "knot", 700) },
      p0: { ...V(5, 22), animation: a("lasso-select", "knot", 700) },
      p4: { ...V(14.3, 11.5), animation: a("lasso-select", "click", 500, 350) },
    },
    keyframes:
      drawKf("lasso-select") +
      kf("lasso-select", "knot", ROCK(6)) +
      kf("lasso-select", "click", "0%{transform:none}40%{transform:scale(.86)}70%{transform:scale(1.04)}100%{transform:none}"),
  },

  "layer-arrow-down": {
    note: "The arrow pushes down and the layer sinks under it, then both spring back.",
    motion: {
      p0: { animation: a("layer-arrow-down", "arrow", 600) },
      p3: { animation: a("layer-arrow-down", "arrow", 600) },
      p1: { animation: a("layer-arrow-down", "layer", 600, 90) },
      p2: { animation: a("layer-arrow-down", "layer", 600, 90) },
    },
    keyframes: kf("layer-arrow-down", "arrow", nudge(0, 1.5)) + kf("layer-arrow-down", "layer", nudge(0, 0.8)),
  },

  "layer-arrow-up": {
    note: "The arrow shoots up and lifts the layer a little with it.",
    motion: {
      p0: { animation: a("layer-arrow-up", "arrow", 600) },
      p2: { animation: a("layer-arrow-up", "arrow", 600) },
      p1: { animation: a("layer-arrow-up", "layer", 600, 90) },
    },
    keyframes: kf("layer-arrow-up", "arrow", nudge(0, -1.5)) + kf("layer-arrow-up", "layer", nudge(0, -0.8)),
  },

  "layers-2": {
    note: "The top layer lifts off the one below, which gives a little, and they settle together.",
    motion: {
      p0: { animation: a("layers-2", "top", 650) },
      p1: { animation: a("layers-2", "bottom", 650, 60) },
    },
    keyframes: kf("layers-2", "top", nudge(0, -1.6)) + kf("layers-2", "bottom", nudge(0, 0.4)),
  },

  "layers-arrow-down": {
    note: "The arrow drops through the stack while the top layer lifts and the bottom one sinks, then they close up.",
    motion: {
      p0: { animation: a("layers-arrow-down", "arrow", 600) },
      p4: { animation: a("layers-arrow-down", "arrow", 600) },
      p3: { animation: a("layers-arrow-down", "top", 600, 60) },
      p1: { animation: a("layers-arrow-down", "bottom", 600, 60) },
      p2: { animation: a("layers-arrow-down", "bottom", 600, 60) },
    },
    keyframes:
      kf("layers-arrow-down", "arrow", nudge(0, 1.2)) + kf("layers-arrow-down", "top", nudge(0, -0.8)) + kf("layers-arrow-down", "bottom", nudge(0, 0.5)),
  },

  "layers-arrow-up": {
    note: "The arrow rises and pulls the middle layer up off the bottom one, then they close up.",
    motion: {
      p0: { animation: a("layers-arrow-up", "arrow", 600) },
      p3: { animation: a("layers-arrow-up", "arrow", 600) },
      p2: { animation: a("layers-arrow-up", "mid", 600, 70) },
      p1: { animation: a("layers-arrow-up", "bottom", 600, 70) },
    },
    keyframes:
      kf("layers-arrow-up", "arrow", nudge(0, -1.5)) + kf("layers-arrow-up", "mid", nudge(0, -0.9)) + kf("layers-arrow-up", "bottom", nudge(0, 0.3)),
  },

  "layers-minus": {
    note: "The top layer lifts off the stack and the minus draws itself in beside it.",
    draw: ["p1"],
    motion: {
      p0: { animation: a("layers-minus", "top", 650) },
      p2: { animation: a("layers-minus", "low", 650) },
      p3: { animation: a("layers-minus", "low", 650) },
      p4: { animation: a("layers-minus", "low", 650) },
      p1: draw("layers-minus", 350, 150),
    },
    keyframes: drawKf("layers-minus") + kf("layers-minus", "top", nudge(0, -1.5)) + kf("layers-minus", "low", nudge(0, 0.4)),
  },

  "layout-arrow-down": {
    note: "The track draws down beside the tiles, its arrowhead drops in and the tiles step down after it.",
    draw: ["p2"],
    motion: {
      p2: draw("layout-arrow-down", 450),
      p3: { animation: a("layout-arrow-down", "head", 600, 150) },
      p0: { animation: a("layout-arrow-down", "tile", 600, 120) },
      p1: { animation: a("layout-arrow-down", "tile", 600, 200) },
    },
    keyframes: drawKf("layout-arrow-down") + kf("layout-arrow-down", "head", nudge(0, 1.2)) + kf("layout-arrow-down", "tile", nudge(0, 0.8)),
  },

  "layout-arrow-right": {
    note: "The track draws across under the tiles, its arrowhead pushes on and the tiles step right after it.",
    draw: ["p2"],
    motion: {
      p2: draw("layout-arrow-right", 450),
      p3: { animation: a("layout-arrow-right", "head", 600, 150) },
      p0: { animation: a("layout-arrow-right", "tile", 600, 120) },
      p1: { animation: a("layout-arrow-right", "tile", 600, 200) },
    },
    keyframes: drawKf("layout-arrow-right") + kf("layout-arrow-right", "head", nudge(1.2, 0)) + kf("layout-arrow-right", "tile", nudge(0.8, 0)),
  },

  "layout-freeform": {
    note: "The three loose blocks shift about on the canvas, each its own way, and settle back.",
    motion: {
      p0: { animation: a("layout-freeform", "a", 650) },
      p1: { animation: a("layout-freeform", "b", 650, 70) },
      p2: { animation: a("layout-freeform", "c", 650, 140) },
    },
    keyframes: kf("layout-freeform", "a", nudge(0.9, 0.7)) + kf("layout-freeform", "b", nudge(-0.8, 0.9)) + kf("layout-freeform", "c", nudge(0.9, -0.8)),
  },

  "layout-grid-circles": {
    note: "The four circles pop in turn, going round the grid.",
    motion: {
      p3: { animation: a("layout-grid-circles", "tile", 450) },
      p1: { animation: a("layout-grid-circles", "tile", 450, 60) },
      p0: { animation: a("layout-grid-circles", "tile", 450, 120) },
      p2: { animation: a("layout-grid-circles", "tile", 450, 180) },
    },
    keyframes: kf("layout-grid-circles", "tile", TILE),
  },

  "leafy-green": {
    note: "The greens sway from the root on their stem, the leaves a beat behind.",
    motion: {
      p1: { ...V(2, 22), animation: a("leafy-green", "stem", 750) },
      p0: { ...V(2, 22), animation: a("leafy-green", "leaves", 750, 50) },
    },
    keyframes: kf("leafy-green", "stem", ROCK(3)) + kf("leafy-green", "leaves", ROCK(4)),
  },

  lens: {
    note: "The glint sweeps round the glass and the spot of light flashes.",
    motion: {
      p1: { ...V(12, 12), animation: a("lens", "glint", 700) },
      p0: { animation: a("lens", "spot", 500, 200) },
      p2: { animation: a("lens", "glass", 600) },
    },
    keyframes:
      kf("lens", "glint", "0%{transform:none}40%{transform:rotate(55deg)}70%{transform:rotate(-6deg)}100%{transform:none}") +
      kf("lens", "spot", "0%{transform:none}35%{transform:scale(2)}65%{transform:scale(.9)}100%{transform:none}") +
      kf("lens", "glass", "0%{transform:none}35%{transform:scale(.96)}70%{transform:scale(1.02)}100%{transform:none}"),
  },

  "lens-concave": {
    note: "The lens flexes: its hollow sides curve in deeper and spring back.",
    motion: { p0: { animation: a("lens-concave", "flex", 700) } },
    keyframes: kf(
      "lens-concave",
      "flex",
      '0%{d:path("M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z")}' +
        '40%{d:path("M7 2a1 1 0 0 0-.8 1.6 10 10 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 10 10 0 0 1 0-16.8A1 1 0 0 0 17 2z")}' +
        '70%{d:path("M7 2a1 1 0 0 0-.8 1.6 15 15 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 15 15 0 0 1 0-16.8A1 1 0 0 0 17 2z")}' +
        '100%{d:path("M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z")}',
    ),
  },

  "lens-convex": {
    note: "The lens flexes: its sides bulge out further and spring back.",
    motion: { p0: { animation: a("lens-convex", "flex", 700) } },
    keyframes: kf(
      "lens-convex",
      "flex",
      '0%{d:path("M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z")}' +
        '40%{d:path("M13.433 2a1 1 0 0 1 .824.448 13 13 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 13 13 0 0 1 0-19.104A1 1 0 0 1 10.567 2z")}' +
        '70%{d:path("M13.433 2a1 1 0 0 1 .824.448 19.5 19.5 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 19.5 19.5 0 0 1 0-19.104A1 1 0 0 1 10.567 2z")}' +
        '100%{d:path("M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z")}',
    ),
  },

  "letter-a": write("letter-a", "The A writes itself up and down, then its bar crosses it.", [["p1", 500, 0], ["p0", 250, 400]]),
  "letter-c": write("letter-c", "The C writes itself round from its top.", [["p0", 600, 0]]),
  "letter-d": write("letter-d", "The D writes its bowl and closes on its stem.", [["p0", 650, 0]]),
  "letter-e": write("letter-e", "The E writes its top, stem and foot in one stroke, then its middle bar.", [["p0", 550, 0], ["p1", 250, 400]]),
  "letter-f": write("letter-f", "The F writes its stem up and over, then its bar.", [["p1", 500, 0], ["p0", 250, 400]]),
  "letter-g": write("letter-g", "The G writes itself round and turns in with its bar.", [["p0", 700, 0]]),
  "letter-i": write("letter-i", "The I writes itself from the top down.", [["p0", 400, 0, true]]),
  "letter-j": write("letter-j", "The J writes itself down and hooks round.", [["p0", 600, 0]]),
  "letter-k": write("letter-k", "The K writes its stem from the top, then its arm and its leg.", [["p1", 350, 0, true], ["p0", 300, 250], ["p2", 250, 450]]),
  "letter-l": write("letter-l", "The L writes itself down and along its foot.", [["p0", 500, 0]]),
  "letter-m": write("letter-m", "The M writes itself up, down to its middle, up and down again.", [["p0", 700, 0]]),
  "letter-n": write("letter-n", "The N writes itself up, across and up again.", [["p0", 650, 0]]),
  "letter-o": write("letter-o", "The O writes itself round.", [["p0", 600, 0]]),
  "letter-p": write("letter-p", "The P writes its bowl and runs down its stem.", [["p0", 650, 0]]),
  "letter-q": write("letter-q", "The Q writes itself round, then its tail.", [["p0", 550, 0], ["p1", 250, 450]]),
  "letter-r": write("letter-r", "The R writes its bowl and stem, then kicks out its leg.", [["p1", 600, 0], ["p0", 250, 500]]),
  "letter-s": write("letter-s", "The S writes itself in one curving stroke.", [["p0", 650, 0]]),
  "letter-t": write("letter-t", "The T writes its bar, then its stem from the top down.", [["p1", 300, 0], ["p0", 350, 200, true]]),
  "letter-u": write("letter-u", "The U writes itself down, round and up.", [["p0", 600, 0]]),
  "letter-v": write("letter-v", "The V writes itself down and up.", [["p0", 500, 0]]),
  "letter-w": write("letter-w", "The W writes itself down, up, down and up.", [["p0", 700, 0]]),
  "letter-x": write("letter-x", "The X writes its two strokes, one across the other.", [["p1", 300, 0], ["p0", 300, 250]]),
  "letter-y": write("letter-y", "The Y writes its arms, then its stem.", [["p1", 400, 0], ["p0", 250, 350]]),
  "letter-z": write("letter-z", "The Z writes itself in one zigzag stroke.", [["p0", 600, 0]]),
  letters: write("letters", "The A, B and C write themselves one after another.", [["p3", 450, 0], ["p0", 200, 350], ["p2", 500, 300], ["p1", 400, 550]]),
  "letter-text": write("letter-text", "The initial writes itself, then the lines of text run in beside and under it.", [
    ["p3", 450, 0],
    ["p4", 200, 350],
    ["p0", 300, 300],
    ["p1", 300, 400],
    ["p2", 400, 500],
  ]),
  ligature: write("ligature", "The joined f and i write themselves: the long stroke, its bar, the i, and the two feet.", [
    ["p4", 500, 0],
    ["p2", 200, 350],
    ["p0", 350, 300],
    ["p3", 200, 500],
    ["p1", 200, 550],
  ]),

  "library-big": {
    note: "The leaning book tips further out from the shelf and falls back against the other, which takes the knock.",
    motion: {
      p2: { ...V(18.5, 20.5), animation: a("library-big", "lean", 750) },
      p0: { animation: a("library-big", "knock", 750) },
      p1: { animation: a("library-big", "knock", 750) },
    },
    keyframes:
      kf("library-big", "lean", "0%{transform:none}35%{transform:rotate(9deg)}60%{transform:rotate(-1.5deg)}80%{transform:rotate(.5deg)}100%{transform:none}") +
      kf("library-big", "knock", "0%,52%{transform:none}62%{transform:translateX(-.4px)}80%{transform:translateX(.1px)}100%{transform:none}"),
  },

  "library-square": {
    note: "The leaning book straightens up and falls back against the others, which take the knock.",
    motion: {
      p3: { ...V(17, 17), animation: a("library-square", "lean", 750) },
      p2: { animation: a("library-square", "knock", 750) },
      p1: { animation: a("library-square", "knock", 750, 40) },
    },
    keyframes:
      kf("library-square", "lean", "0%{transform:none}35%{transform:rotate(11deg)}60%{transform:rotate(-2deg)}80%{transform:rotate(.5deg)}100%{transform:none}") +
      kf("library-square", "knock", "0%,52%{transform:none}62%{transform:translateX(-.5px)}80%{transform:translateX(.1px)}100%{transform:none}"),
  },

  "line-dot-bottom-vertical": lineDot("line-dot-bottom-vertical", false, 0, 0.6),
  "line-dot-left-horizontal": lineDot("line-dot-left-horizontal", true, -0.6, 0),
  "line-dot-right-horizontal": lineDot("line-dot-right-horizontal", false, 0.6, 0),
  "line-dot-top-vertical": lineDot("line-dot-top-vertical", true, 0, -0.6),

  "line-style": write("line-style", "The dotted, dashed and solid lines draw themselves, row by row from left to right.", [
    ["p5", 200, 0],
    ["p0", 200, 60],
    ["p2", 200, 120],
    ["p3", 250, 150],
    ["p1", 250, 250],
    ["p4", 450, 300],
  ]),

  "list-check": {
    note: "The rows write themselves in, then the tick draws itself beside the last one.",
    draw: ["p0", "p1", "p2", "p3"],
    motion: {
      p0: draw("list-check", 320),
      p1: draw("list-check", 320, 60),
      p2: draw("list-check", 300, 120),
      p3: draw("list-check", 400, 250),
    },
    keyframes: drawKf("list-check"),
  },

  "list-chevrons-down-up": {
    note: "The two chevrons close in on the middle and the rows draw together after them.",
    motion: {
      p3: { animation: a("list-chevrons-down-up", "top", 550) },
      p4: { animation: a("list-chevrons-down-up", "bottom", 550) },
      p0: { animation: a("list-chevrons-down-up", "row-top", 550, 60) },
      p2: { animation: a("list-chevrons-down-up", "row-bottom", 550, 60) },
    },
    keyframes:
      kf("list-chevrons-down-up", "top", nudge(0, 1.3)) +
      kf("list-chevrons-down-up", "bottom", nudge(0, -1.3)) +
      kf("list-chevrons-down-up", "row-top", nudge(0, 0.6)) +
      kf("list-chevrons-down-up", "row-bottom", nudge(0, -0.6)),
  },

  "list-chevrons-up-down": {
    note: "The two chevrons push out from the middle and the rows spread after them.",
    motion: {
      p3: { animation: a("list-chevrons-up-down", "top", 550) },
      p4: { animation: a("list-chevrons-up-down", "bottom", 550) },
      p0: { animation: a("list-chevrons-up-down", "row-top", 550, 60) },
      p2: { animation: a("list-chevrons-up-down", "row-bottom", 550, 60) },
    },
    keyframes:
      kf("list-chevrons-up-down", "top", nudge(0, -1.3)) +
      kf("list-chevrons-up-down", "bottom", nudge(0, 1.3)) +
      kf("list-chevrons-up-down", "row-top", nudge(0, -0.6)) +
      kf("list-chevrons-up-down", "row-bottom", nudge(0, 0.6)),
  },

  "list-end": {
    note: "The track runs down and round to the bottom of the list, the arrowhead pushes in and the last row makes room.",
    draw: ["p4"],
    motion: {
      p4: draw("list-end", 450),
      p3: { animation: a("list-end", "head", 550, 300) },
      p2: { animation: a("list-end", "row", 550, 380) },
    },
    keyframes: drawKf("list-end") + kf("list-end", "head", nudge(-1, 0)) + kf("list-end", "row", nudge(-0.8, 0)),
  },

  "list-filter-plus": {
    note: "The three bars narrow down like a funnel and the plus spins in beside them.",
    motion: {
      p0: { animation: a("list-filter-plus", "a", 600) },
      p1: { animation: a("list-filter-plus", "b", 600, 50) },
      p2: { animation: a("list-filter-plus", "c", 600, 100) },
      p3: { ...V(19, 5), animation: a("list-filter-plus", "plus", 500, 120, "backwards") },
      p4: { ...V(19, 5), animation: a("list-filter-plus", "plus", 500, 120, "backwards") },
    },
    keyframes:
      kf("list-filter-plus", "a", "0%{transform:none}35%{transform:scaleX(.8)}70%{transform:scaleX(1.04)}100%{transform:none}") +
      kf("list-filter-plus", "b", "0%{transform:none}35%{transform:scaleX(.65)}70%{transform:scaleX(1.05)}100%{transform:none}") +
      kf("list-filter-plus", "c", "0%{transform:none}35%{transform:scaleX(.45)}70%{transform:scaleX(1.08)}100%{transform:none}") +
      kf("list-filter-plus", "plus", SPIN_IN),
  },

  "list-start": {
    note: "The track runs up and round to the top of the list, the arrowhead pushes in and the first row makes room.",
    draw: ["p4"],
    motion: {
      p4: draw("list-start", 450),
      p3: { animation: a("list-start", "head", 550, 300) },
      p0: { animation: a("list-start", "row", 550, 380) },
    },
    keyframes: drawKf("list-start") + kf("list-start", "head", nudge(-1, 0)) + kf("list-start", "row", nudge(-0.8, 0)),
  },

  "mail-badge": {
    note: "The flap presses shut, the badge swells and its ribbon swings under it.",
    motion: {
      p1: flap("mail-badge"),
      p3: { animation: a("mail-badge", "badge", 600, 100) },
      p2: { ...V(19, 16.5), animation: a("mail-badge", "ribbon", 700, 100) },
    },
    keyframes:
      kf("mail-badge", "flap", PRESS) +
      kf("mail-badge", "badge", "0%{transform:none}35%{transform:scale(1.18)}65%{transform:scale(.95)}100%{transform:none}") +
      kf("mail-badge", "ribbon", ROCK(10)),
  },

  "mail-clock": {
    note: "The flap presses shut and the clock hands sweep once round the dial.",
    motion: {
      p3: flap("mail-clock"),
      p1: flap("mail-clock"),
      p0: { ...V(16, 16), animation: a("mail-clock", "hands", 800, 80) },
      p4: { animation: a("mail-clock", "dial", 600, 80) },
    },
    keyframes:
      kf("mail-clock", "flap", PRESS) +
      kf("mail-clock", "hands", "0%{transform:none}100%{transform:rotate(360deg)}") +
      kf("mail-clock", "dial", "0%{transform:none}35%{transform:scale(1.05)}70%{transform:scale(.98)}100%{transform:none}"),
  },

  "mail-minus": {
    note: "The flap presses shut and the minus draws itself in.",
    draw: ["p2"],
    motion: { p1: flap("mail-minus"), p2: draw("mail-minus", 350, 120) },
    keyframes: kf("mail-minus", "flap", PRESS) + drawKf("mail-minus"),
  },

  "mail-pen": {
    note: "The flap presses shut and the pen scribbles from its nib.",
    motion: {
      p2: flap("mail-pen"),
      p0: { ...V(14.3, 21.7), animation: a("mail-pen", "write", 700, 80) },
    },
    keyframes: kf("mail-pen", "flap", PRESS) + kf("mail-pen", "write", SCRIBBLE),
  },

  "mail-question": {
    note: "The flap presses shut, the question mark tilts on its point as if wondering and its dot bounces.",
    motion: {
      p1: flap("mail-question"),
      p2: { origin: "50% 100%", animation: a("mail-question", "tilt", 700, 80) },
      p3: { animation: a("mail-question", "dot", 500, 250) },
    },
    keyframes:
      kf("mail-question", "flap", PRESS) + kf("mail-question", "tilt", ROCK(12)) + kf("mail-question", "dot", nudge(0, -1)),
  },

  mango: {
    note: "The mango sways from its stalk and settles.",
    motion: {
      p1: { ...V(20, 3), animation: a("mango", "fruit", 800) },
      p0: { ...V(20, 3), animation: a("mango", "stalk", 800) },
    },
    keyframes: kf("mango", "fruit", ROCK(5)) + kf("mango", "stalk", ROCK(2)),
  },

  "map-minus": {
    note: "The map folds in on its creases and opens out again, and the minus draws itself in.",
    draw: ["p2"],
    motion: {
      p0: { animation: a("map-minus", "sheet", 700) },
      p1: { animation: a("map-minus", "right", 700) },
      p3: { animation: a("map-minus", "left", 700) },
      p2: draw("map-minus", 350, 200),
    },
    keyframes:
      kf("map-minus", "sheet", "0%{transform:none}30%{transform:scaleX(.86)}65%{transform:scaleX(1.03)}100%{transform:none}") +
      kf("map-minus", "right", "0%{transform:none}30%{transform:translateX(-.42px)}65%{transform:translateX(.09px)}100%{transform:none}") +
      kf("map-minus", "left", "0%{transform:none}30%{transform:translateX(.42px)}65%{transform:translateX(-.09px)}100%{transform:none}") +
      drawKf("map-minus"),
  },

  "map-plus": {
    note: "The map folds in on its creases and opens out again, and the plus spins in.",
    motion: {
      p0: { animation: a("map-plus", "sheet", 700) },
      p1: { animation: a("map-plus", "right", 700) },
      p4: { animation: a("map-plus", "left", 700) },
      p2: { ...V(18, 18), animation: a("map-plus", "plus", 550, 150, "backwards") },
      p3: { ...V(18, 18), animation: a("map-plus", "plus", 550, 150, "backwards") },
    },
    keyframes:
      kf("map-plus", "sheet", "0%{transform:none}30%{transform:scaleX(.86)}65%{transform:scaleX(1.03)}100%{transform:none}") +
      kf("map-plus", "right", "0%{transform:none}30%{transform:translateX(-.42px)}65%{transform:translateX(.09px)}100%{transform:none}") +
      kf("map-plus", "left", "0%{transform:none}30%{transform:translateX(.42px)}65%{transform:translateX(-.09px)}100%{transform:none}") +
      kf("map-plus", "plus", SPIN_IN),
  },

  "map-pin-check-inside": {
    note: "The pin drops in, squashing as it lands, and the tick draws itself inside.",
    draw: ["p1"],
    motion: { p0: pin("map-pin-check-inside"), p1: draw("map-pin-check-inside", 400, 350) },
    keyframes: pinKf("map-pin-check-inside") + drawKf("map-pin-check-inside"),
  },

  "map-pin-minus": {
    note: "The pin drops in and the minus draws itself beside it.",
    draw: ["p2"],
    motion: { p0: pin("map-pin-minus"), p1: pinDot("map-pin-minus"), p2: draw("map-pin-minus", 350, 300) },
    keyframes: pinKf("map-pin-minus") + drawKf("map-pin-minus"),
  },

  "map-pin-minus-inside": {
    note: "The pin drops in, squashing as it lands, and the minus draws itself inside.",
    draw: ["p1"],
    motion: { p0: pin("map-pin-minus-inside"), p1: draw("map-pin-minus-inside", 350, 350) },
    keyframes: pinKf("map-pin-minus-inside") + drawKf("map-pin-minus-inside"),
  },

  "map-pin-plus-inside": {
    note: "The pin drops in and the plus spins in inside it.",
    motion: {
      p0: pin("map-pin-plus-inside"),
      p1: { ...V(12, 10), animation: a("map-pin-plus-inside", "plus", 550, 300, "backwards") },
      p2: { ...V(12, 10), animation: a("map-pin-plus-inside", "plus", 550, 300, "backwards") },
    },
    keyframes: pinKf("map-pin-plus-inside") + kf("map-pin-plus-inside", "plus", SPIN_IN),
  },

  "map-pin-search": {
    note: "The pin drops in and the magnifier circles beside it, searching.",
    motion: {
      p0: pin("map-pin-search"),
      p2: pinDot("map-pin-search"),
      p3: { animation: a("map-pin-search", "search", 800, 100) },
      p1: { animation: a("map-pin-search", "search", 800, 100) },
    },
    keyframes: pinKf("map-pin-search") + kf("map-pin-search", "search", SEARCH),
  },

  "map-pin-x-inside": {
    note: "The pin drops in and the cross strikes inside it, stroke by stroke.",
    draw: ["p1", "p2"],
    motion: { p0: pin("map-pin-x-inside"), p1: draw("map-pin-x-inside", 300, 300), p2: draw("map-pin-x-inside", 300, 400) },
    keyframes: pinKf("map-pin-x-inside") + drawKf("map-pin-x-inside"),
  },

  margin: margin(
    "margin",
    "The four edges push out from the box, which draws in a little, and they come back.",
    [["p1", 1, 0], ["p2", -1, 0], ["p3", 0, 1], ["p4", 0, -1]],
    "0%{transform:none}35%{transform:scale(.88)}70%{transform:scale(1.03)}100%{transform:none}",
  ),
  "margin-bottom": margin("margin-bottom", "The bottom edge pushes down, away from the box, which steps back up.", [["p1", 0, 1.2]], nudge(0, -0.6)),
  "margin-horizontal": margin(
    "margin-horizontal",
    "The side edges push out from the box, which narrows a little, and they come back.",
    [["p1", 1.2, 0], ["p2", -1.2, 0]],
    "0%{transform:none}35%{transform:scaleX(.85)}70%{transform:scaleX(1.03)}100%{transform:none}",
  ),
  "margin-left": margin("margin-left", "The left edge pushes out, away from the box, which steps the other way.", [["p1", -1.2, 0]], nudge(0.6, 0)),
  "margin-right": margin("margin-right", "The right edge pushes out, away from the box, which steps the other way.", [["p1", 1.2, 0]], nudge(-0.6, 0)),
  "margin-top": margin("margin-top", "The top edge pushes up, away from the box, which steps down.", [["p1", 0, -1.2]], nudge(0, 0.6)),
  "margin-vertical": margin(
    "margin-vertical",
    "The top and bottom edges push out from the box, which flattens a little, and they come back.",
    [["p2", 0, -1.2], ["p1", 0, 1.2]],
    "0%{transform:none}35%{transform:scaleY(.85)}70%{transform:scaleY(1.03)}100%{transform:none}",
  ),

  mars: {
    note: "The arrow thrusts up and out of the circle and springs back.",
    motion: {
      p1: { origin: "0% 100%", animation: a("mars", "shaft", 600) },
      p0: { animation: a("mars", "head", 600) },
      p2: { animation: a("mars", "ring", 600) },
    },
    keyframes:
      kf("mars", "shaft", "0%{transform:none}35%{transform:scale(1.15)}65%{transform:scale(.97)}100%{transform:none}") +
      kf("mars", "head", nudge(1, -1)) +
      kf("mars", "ring", "0%{transform:none}35%{transform:scale(.95)}65%{transform:scale(1.02)}100%{transform:none}"),
  },

  "mars-stroke": {
    note: "The arrow thrusts up and out of the circle, carrying its cross stroke, and springs back.",
    motion: {
      p2: { origin: "0% 100%", animation: a("mars-stroke", "shaft", 600) },
      p1: { animation: a("mars-stroke", "head", 600) },
      p0: { animation: a("mars-stroke", "bar", 600) },
      p3: { animation: a("mars-stroke", "ring", 600) },
    },
    keyframes:
      kf("mars-stroke", "shaft", "0%{transform:none}35%{transform:scale(1.13)}65%{transform:scale(.97)}100%{transform:none}") +
      kf("mars-stroke", "head", nudge(1, -1)) +
      kf("mars-stroke", "bar", nudge(0.36, -0.36)) +
      kf("mars-stroke", "ring", "0%{transform:none}35%{transform:scale(.95)}65%{transform:scale(1.02)}100%{transform:none}"),
  },

  "menu-square": {
    note: "The three lines shuffle side to side in turn inside the box.",
    motion: {
      p1: { animation: a("menu-square", "right", 550) },
      p2: { animation: a("menu-square", "left", 550, 60) },
      p3: { animation: a("menu-square", "right", 550, 120) },
    },
    keyframes: kf("menu-square", "right", nudge(1, 0)) + kf("menu-square", "left", nudge(-1, 0)),
  },

  "message-circle-alert": {
    note: "The bubble bounces from its tail, the warning mark drops in and its dot pops.",
    motion: {
      p0: bubble("message-circle-alert"),
      p1: { origin: "50% 0%", animation: a("message-circle-alert", "mark", 450, 100, "backwards") },
      p2: { animation: a("message-circle-alert", "dot", 400, 300, "backwards") },
    },
    keyframes:
      bubbleKf("message-circle-alert") +
      kf("message-circle-alert", "mark", "0%{transform:scaleY(.1);opacity:0}55%{transform:scaleY(1.15);opacity:1}100%{transform:none;opacity:1}") +
      kf("message-circle-alert", "dot", POP_IN),
  },

  "message-circle-dashed": {
    note: "The dashes turn round the bubble like a marching outline, and the tail gives a small kick.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2", "p3", "p4", "p5", "p6"].map((p) => [p, { ...V(12, 12), animation: a("message-circle-dashed", "turn", 750) }])),
      p7: { animation: a("message-circle-dashed", "tail", 500, 200) },
    },
    keyframes:
      kf("message-circle-dashed", "turn", "0%{transform:none}45%{transform:rotate(28deg)}75%{transform:rotate(-4deg)}100%{transform:none}") +
      kf("message-circle-dashed", "tail", nudge(-0.6, 0.6)),
  },

  "message-circle-dashed-check": {
    note: "The dashes turn round the bubble and the tick draws itself inside.",
    draw: ["p8"],
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2", "p3", "p4", "p5", "p6"].map((p) => [p, { ...V(12, 12), animation: a("message-circle-dashed-check", "turn", 700) }])),
      p8: draw("message-circle-dashed-check", 420, 150),
    },
    keyframes:
      kf("message-circle-dashed-check", "turn", "0%{transform:none}45%{transform:rotate(22deg)}75%{transform:rotate(-3deg)}100%{transform:none}") +
      drawKf("message-circle-dashed-check"),
  },

  "message-circle-heart": {
    note: "The bubble bounces from its tail and the heart inside beats twice.",
    motion: {
      p0: bubble("message-circle-heart"),
      p1: { animation: a("message-circle-heart", "beat", 700, 80) },
    },
    keyframes:
      bubbleKf("message-circle-heart") +
      kf("message-circle-heart", "beat", "0%{transform:none}25%{transform:scale(1.2)}45%{transform:scale(.95)}65%{transform:scale(1.1)}100%{transform:none}"),
  },

  "message-circle-text": {
    note: "The bubble bounces from its tail and the lines of text write themselves in.",
    draw: ["p3", "p1", "p2"],
    motion: {
      p0: bubble("message-circle-text"),
      p3: draw("message-circle-text", 300, 100),
      p1: draw("message-circle-text", 300, 180),
      p2: draw("message-circle-text", 250, 260),
    },
    keyframes: bubbleKf("message-circle-text") + drawKf("message-circle-text"),
  },

  "messages-circle": {
    note: "The front bubble bounces from its tail, then the one behind answers from the other side.",
    motion: {
      p1: bubble("messages-circle"),
      p0: { origin: "100% 100%", animation: a("messages-circle", "back", 600, 140) },
    },
    keyframes:
      bubbleKf("messages-circle") +
      kf("messages-circle", "back", "0%{transform:none}30%{transform:scale(1.07,.92) rotate(3deg)}60%{transform:scale(.97,1.04) rotate(-1.5deg)}100%{transform:none}"),
  },

  "message-square-check": {
    note: "The bubble bounces from its tail and the tick draws itself inside.",
    draw: ["p1"],
    motion: { p0: bubble("message-square-check"), p1: draw("message-square-check", 420, 120) },
    keyframes: bubbleKf("message-square-check") + drawKf("message-square-check"),
  },

  "message-square-code": {
    note: "The two brackets spread apart and snap back while the bubble bounces.",
    motion: {
      p0: bubble("message-square-code"),
      p1: { animation: a("message-square-code", "left", 600, 60) },
      p2: { animation: a("message-square-code", "right", 600, 60) },
    },
    keyframes: bubbleKf("message-square-code") + kf("message-square-code", "left", nudge(-1, 0)) + kf("message-square-code", "right", nudge(1, 0)),
  },

  "message-square-dashed": {
    note: "The dashes march one step round the bubble, clockwise, and settle back.",
    motion: {
      p9: { animation: a("message-square-dashed", "r", 550) },
      p0: { animation: a("message-square-dashed", "r", 550, 30) },
      p6: { animation: a("message-square-dashed", "dr", 550, 60) },
      p5: { animation: a("message-square-dashed", "d", 550, 90) },
      p4: { animation: a("message-square-dashed", "dl", 550, 120) },
      p1: { animation: a("message-square-dashed", "l", 550, 150) },
      p8: { animation: a("message-square-dashed", "l", 550, 180) },
      p3: { animation: a("message-square-dashed", "u", 550, 210) },
      p2: { animation: a("message-square-dashed", "u", 550, 240) },
      p7: { animation: a("message-square-dashed", "ur", 550, 270) },
    },
    keyframes:
      kf("message-square-dashed", "r", nudge(0.8, 0)) +
      kf("message-square-dashed", "dr", nudge(0.5, 0.5)) +
      kf("message-square-dashed", "d", nudge(0, 0.8)) +
      kf("message-square-dashed", "dl", nudge(-0.5, 0.5)) +
      kf("message-square-dashed", "l", nudge(-0.8, 0)) +
      kf("message-square-dashed", "u", nudge(0, -0.8)) +
      kf("message-square-dashed", "ur", nudge(0.5, -0.5)),
  },

  "message-square-diff": {
    note: "The bubble bounces from its tail, the plus spins and the minus draws itself in under it.",
    draw: ["p1"],
    motion: {
      p0: bubble("message-square-diff"),
      p2: { ...V(12, 9), animation: a("message-square-diff", "plus", 550, 80) },
      p3: { ...V(12, 9), animation: a("message-square-diff", "plus", 550, 80) },
      p1: draw("message-square-diff", 300, 220),
    },
    keyframes:
      bubbleKf("message-square-diff") +
      kf("message-square-diff", "plus", "0%{transform:none}50%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}") +
      drawKf("message-square-diff"),
  },

  "message-square-more": {
    note: "The bubble bounces from its tail while the three dots bob one after another, as if typing.",
    motion: {
      p0: bubble("message-square-more"),
      p3: { animation: a("message-square-more", "dot", 500, 60) },
      p1: { animation: a("message-square-more", "dot", 500, 150) },
      p2: { animation: a("message-square-more", "dot", 500, 240) },
    },
    keyframes: bubbleKf("message-square-more") + kf("message-square-more", "dot", nudge(0, -1.3)),
  },

  "message-square-off": {
    note: "The bubble's pieces give a small shake while the slash draws itself across.",
    draw: ["p1"],
    motion: {
      p0: { animation: a("message-square-off", "shake", 500) },
      p2: { animation: a("message-square-off", "shake", 500) },
      p1: draw("message-square-off", 420, 80),
    },
    keyframes: kf("message-square-off", "shake", SHAKE) + drawKf("message-square-off"),
  },

  "message-square-plus": {
    note: "The bubble bounces from its tail and the plus spins a quarter turn.",
    motion: {
      p0: bubble("message-square-plus"),
      p1: { ...V(12, 11), animation: a("message-square-plus", "plus", 550, 80) },
      p2: { ...V(12, 11), animation: a("message-square-plus", "plus", 550, 80) },
    },
    keyframes: bubbleKf("message-square-plus") + kf("message-square-plus", "plus", "0%{transform:none}50%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}"),
  },

  "message-square-reply": {
    note: "The reply arrow pulls back to the left and stretches, then springs home.",
    motion: {
      p0: bubble("message-square-reply"),
      p1: { animation: a("message-square-reply", "head", 600, 60) },
      p2: { origin: "100% 50%", animation: a("message-square-reply", "tail", 600, 60) },
    },
    keyframes:
      bubbleKf("message-square-reply") +
      kf("message-square-reply", "head", nudge(-1.3, 0)) +
      kf("message-square-reply", "tail", "0%{transform:none}35%{transform:scaleX(1.13)}65%{transform:scaleX(.98)}100%{transform:none}"),
  },

  "message-square-x": {
    note: "The bubble bounces from its tail and the cross strikes inside, stroke by stroke.",
    draw: ["p1", "p2"],
    motion: { p0: bubble("message-square-x"), p1: draw("message-square-x", 300, 100), p2: draw("message-square-x", 300, 210) },
    keyframes: bubbleKf("message-square-x") + drawKf("message-square-x"),
  },

  microphone: {
    note: "The capsule rocks in its cradle as it picks up sound, and the cradle gives under it.",
    motion: {
      p2: { ...V(12, 15), animation: a("microphone", "capsule", 700) },
      p1: { origin: "50% 100%", animation: a("microphone", "cradle", 700, 60) },
    },
    keyframes:
      kf("microphone", "capsule", ROCK(7)) +
      kf("microphone", "cradle", "0%{transform:none}35%{transform:scale(1.05,.92)}65%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  "mic-audio-lines": {
    note: "The sound bars on either side of the mic rise and fall in turn like a level meter.",
    motion: {
      p4: { animation: a("mic-audio-lines", "bar", 600) },
      p6: { animation: a("mic-audio-lines", "bar", 600, 60) },
      p0: { origin: "50% 0%", animation: a("mic-audio-lines", "bar", 600, 120) },
      p2: { origin: "50% 0%", animation: a("mic-audio-lines", "bar", 600, 180) },
      p3: { animation: a("mic-audio-lines", "bar", 600, 240) },
      p5: { animation: a("mic-audio-lines", "bar", 600, 300) },
      p8: { animation: a("mic-audio-lines", "capsule", 600) },
    },
    keyframes:
      kf("mic-audio-lines", "bar", "0%{transform:none}30%{transform:scaleY(.55)}60%{transform:scaleY(1.15)}100%{transform:none}") +
      kf("mic-audio-lines", "capsule", "0%{transform:none}35%{transform:scale(1.06)}70%{transform:scale(.98)}100%{transform:none}"),
  },

  microchip: {
    note: "The pins flicker pair by pair down the chip as the signal runs through its traces.",
    motion: {
      p8: { origin: "100% 50%", animation: a("microchip", "pin", 500) },
      p5: { origin: "0% 50%", animation: a("microchip", "pin", 500) },
      p6: { origin: "100% 50%", animation: a("microchip", "pin", 500, 90) },
      p3: { origin: "0% 50%", animation: a("microchip", "pin", 500, 90) },
      p7: { origin: "100% 50%", animation: a("microchip", "pin", 500, 180) },
      p4: { origin: "0% 50%", animation: a("microchip", "pin", 500, 180) },
      p2: { animation: a("microchip", "trace", 500, 40) },
      p0: { animation: a("microchip", "trace", 500, 130) },
      p1: { animation: a("microchip", "trace", 500, 220) },
    },
    keyframes:
      kf("microchip", "pin", "0%{transform:none;opacity:1}30%{transform:scaleX(.5);opacity:.25}100%{transform:none;opacity:1}") +
      kf("microchip", "trace", "0%{transform:none}35%{transform:scaleX(1.3)}70%{transform:scaleX(.95)}100%{transform:none}"),
  },

  "midi-port": {
    note: "The pins light up one after another round the socket, and the key notch presses in.",
    motion: {
      p4: { animation: a("midi-port", "pin", 450) },
      p5: { animation: a("midi-port", "pin", 450, 60) },
      p0: { animation: a("midi-port", "pin", 450, 120) },
      p2: { animation: a("midi-port", "pin", 450, 180) },
      p3: { animation: a("midi-port", "pin", 450, 240) },
      p1: { animation: a("midi-port", "notch", 550, 100) },
    },
    keyframes: kf("midi-port", "pin", "0%{transform:none}35%{transform:scale(1.9)}65%{transform:scale(.9)}100%{transform:none}") + kf("midi-port", "notch", nudge(0, 0.6)),
  },
};

/** fill areas for outlines the source draws open (a gap for an arrow or a badge), on the 24 grid */
export const fills: Record<string, string> = {
  // a layer with a gap for the arrow: cut straight across the gap
  "layer-arrow-down": "M7.673 13.227 2.58 10.911a1 1 0 0 1 .02-1.831l8.57-3.9a2 2 0 0 1 1.66-.001l8.59 3.91A1 1 0 0 1 22 10a1 1 0 0 1-.59.92l-5.077 2.308Z",
  "layer-arrow-up": "M7.674 10.774 2.58 13.09a1 1 0 0 0 0 1.822l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 .59-.92 1 1 0 0 0-.59-.922l-5.078-2.308Z",
  "layers-arrow-down": "M8 10.37 2.6 7.91a1 1 0 0 1 0-1.831l8.57-3.9a2 2 0 0 1 1.66.001l8.59 3.91a1 1 0 0 1 0 1.831l-5.392 2.45Z",
  "layers-arrow-up": "M7.674 8.774 2.58 11.09a1 1 0 0 0 0 1.822l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 .59-.92 1 1 0 0 0-.59-.922l-5.078-2.308Z",
  // envelopes with a corner left open for a badge: the fill stops ~1 unit short of it
  "mail-badge": "M22 7.7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.25L13.25 14A5.75 5.75 0 0 1 21.471 8.81Z",
  "mail-clock": "M6.835 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2L21.25 9A8.75 8.75 0 0 0 7.854 19.19Z",
  "mail-minus": "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8L13.25 19A2.75 2.75 0 0 1 16 16.25Z",
  "mail-pen": "M22 10.38V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.25L12.216 17.719A4.75 4.75 0 0 1 13.417 15.69L16.43 12.68A4.874 4.874 0 0 1 19.875 11.25Z",
  "mail-question": "M22 10.35V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12.3L14.75 16.5A5.25 5.25 0 0 1 22 11.646Z",
  // maps with a corner left open for a badge
  "map-minus":
    "M11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14H14Z",
  "map-plus":
    "M11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12H13Z",
  // switched off: the whole bubble, the slash is cut through it
  "message-square-off": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z",
};

/** The letters are ink, not solids: an O stays a ring (filled cuts it out of a tile). */
export const strokes: string[] = ["letters", ..."acdefgijklmnopqrstuvwxyz".split("").map((c) => `letter-${c}`)];
