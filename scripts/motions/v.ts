import type { Entry, Override } from "./types";

/** the letters the source draws in a square in this batch */
const LETTERS = "ABCDEFGHIJKLNOQRSTUVWXYZ".split("");

/** Batch v: its icons (pnpm import-icons v) and their motions. */
export const list: Entry[] = [
  ["SquareArrowLeftExit", "square-arrow-left-exit", "Exit left from a square", "navigation", "nudge-left", ["exit", "leave", "left", "out", "logout"], "The arrow leaves through the open side."],
  ["SquareArrowRightEnter", "square-arrow-right-enter", "Enter right into a square", "navigation", "nudge-right", ["enter", "login", "right", "in", "import"], "The arrow comes in through the open side."],
  ["SquareArrowRightExit", "square-arrow-right-exit", "Exit right from a square", "navigation", "nudge-right", ["exit", "leave", "right", "out", "logout"], "The arrow leaves through the open side."],
  ["SquareArrowUpEnter", "square-arrow-up-enter", "Enter up into a square", "navigation", "nudge-up", ["enter", "in", "up", "import", "upload"], "The arrow comes in through the open side."],
  ["SquareArrowUpExit", "square-arrow-up-exit", "Exit up from a square", "navigation", "nudge-up", ["exit", "out", "up", "export", "upload"], "The arrow leaves through the open side."],
  ["SquareArrowUpLeftEnter", "square-arrow-up-left-enter", "Enter up-left into a square", "navigation", "nudge-up", ["enter", "in", "diagonal", "import"], "The arrow comes in through the open corner."],
  ["SquareArrowUpRightEnter", "square-arrow-up-right-enter", "Enter up-right into a square", "navigation", "nudge-up", ["enter", "in", "diagonal", "import"], "The arrow comes in through the open corner."],
  ["SquareChevronsDown", "square-chevrons-down", "Chevrons down in a square", "navigation", "nudge-down", ["down", "bottom", "lower", "more"], "The chevrons step down."],
  ["SquareChevronsLeft", "square-chevrons-left", "Chevrons left in a square", "navigation", "nudge-left", ["left", "back", "rewind", "first"], "The chevrons step left."],
  ["SquareChevronsRight", "square-chevrons-right", "Chevrons right in a square", "navigation", "nudge-right", ["right", "forward", "skip", "last"], "The chevrons step right."],
  ["SquareChevronsUp", "square-chevrons-up", "Chevrons up in a square", "navigation", "nudge-up", ["up", "top", "raise", "more"], "The chevrons step up."],
  ["SquareDashedBottom", "square-dashed-bottom", "Square with a dashed bottom", "development", "pop", ["placeholder", "code", "block", "dashed"], "The dashes march along the bottom."],
  ["SquareDashedBottomCode", "square-dashed-bottom-code", "Code block placeholder", "development", "pop", ["code", "snippet", "block", "placeholder"], "The brackets open."],
  ["SquareDashedPlus", "square-dashed-plus", "Add to selection", "actions", "pop", ["add", "new", "placeholder", "selection"], "The plus draws in."],
  ["SquareDashedSearch", "square-dashed-search", "Search selection", "actions", "pop", ["search", "find", "selection", "area"], "The lens searches."],
  ["SquareDashedTopSolid", "square-dashed-top-solid", "Square with a solid top", "shapes", "pop", ["dashed", "top", "border", "frame"], "The top edge draws across."],
  ["SquareDashedX", "square-dashed-x", "Clear selection", "actions", "pop", ["clear", "remove", "selection", "x"], "The cross draws in."],
  ["SquareDashedXCorner", "square-dashed-x-corner", "Remove from selection", "actions", "pop", ["remove", "clear", "selection", "x"], "The cross draws in at the corner."],
  ["SquareExclamationPoint", "square-exclamation-point", "Alert in a square", "status", "shake", ["alert", "warning", "error", "attention"], "The mark drops in."],
  ["SquareKanbanPlus", "square-kanban-plus", "Add to board", "app", "pop", ["kanban", "board", "add", "task"], "A column grows and the plus draws in."],
  ...LETTERS.map((l): Entry => [
    `SquareLetter${l}`,
    `square-letter-${l.toLowerCase()}`,
    `Letter ${l} in a square`,
    "text",
    "pop",
    ["letter", l.toLowerCase(), "alphabet", "initial", "key"],
    "The letter writes itself.",
  ]),
  ["SquareOff", "square-off", "No square", "shapes", "shake", ["off", "none", "disabled", "shape"], "The slash crosses it out."],
  ["SquarePaddingBottom", "square-padding-bottom", "Bottom padding", "development", "pop", ["padding", "bottom", "spacing", "inset"], "The inset breathes at the bottom."],
  ["SquarePaddingHorizontal", "square-padding-horizontal", "Horizontal padding", "development", "pop", ["padding", "horizontal", "spacing", "inset"], "The insets breathe at the sides."],
  ["SquarePaddingLeft", "square-padding-left", "Left padding", "development", "pop", ["padding", "left", "spacing", "inset"], "The inset breathes on the left."],
  ["SquarePaddingRight", "square-padding-right", "Right padding", "development", "pop", ["padding", "right", "spacing", "inset"], "The inset breathes on the right."],
  ["SquarePaddingTop", "square-padding-top", "Top padding", "development", "pop", ["padding", "top", "spacing", "inset"], "The inset breathes at the top."],
  ["SquarePaddingVertical", "square-padding-vertical", "Vertical padding", "development", "pop", ["padding", "vertical", "spacing", "inset"], "The insets breathe at top and bottom."],
  ["SquarePause", "square-pause", "Pause in a square", "media", "pop", ["pause", "hold", "wait"], "The bars squeeze."],
  ["SquareSparkles", "square-sparkles", "Sparkles in a square", "status", "pop", ["ai", "magic", "new", "generate"], "The sparkles twinkle."],
  ["SquareSquare", "square-square", "Square in a square", "shapes", "pop", ["square", "inset", "stop", "select"], "The inner square presses in."],
  ["SquareStar", "square-star", "Star in a square", "status", "pop", ["favorite", "star", "rate", "featured"], "The star turns and shines."],
  ["SquareStop", "square-stop", "Stop in a square", "media", "pop", ["stop", "end", "halt"], "The square presses in."],
  ["SquareText", "square-text", "Text in a square", "text", "pop", ["text", "paragraph", "lines", "note"], "The lines write themselves."],
  ["SquareUser", "square-user", "Profile", "people", "bounce", ["user", "profile", "avatar", "account"], "The head bobs."],
  ["SquareUserRound", "square-user-round", "Profile (round)", "people", "bounce", ["user", "profile", "avatar", "account"], "The head bobs."],
  ["SquircleDashed", "squircle-dashed", "Dashed squircle", "shapes", "spin-90", ["squircle", "dashed", "shape", "placeholder"], "The dashes run around."],
  ["Star", "star-rounded", "Rounded star", "status", "pop", ["favorite", "rate", "bookmark", "important"], "It turns a fifth and shines."],
  ["StarCheck", "star-check", "Starred done", "status", "draw", ["favorite", "done", "verified", "star"], "The tick draws in."],
  ["StarMinus", "star-minus", "Remove star", "status", "pop", ["unfavorite", "remove", "star", "minus"], "The minus draws in."],
  ["StarPlus", "star-plus", "Add star", "status", "pop", ["favorite", "add", "star", "plus"], "The plus draws in."],
  ["StarX", "star-x", "Star removed", "status", "shake", ["unfavorite", "remove", "star", "x"], "The cross draws in."],
  ["StickyNoteCheck", "sticky-note-check", "Note done", "files", "draw", ["note", "done", "memo", "check"], "The tick draws in."],
  ["StickyNoteMinus", "sticky-note-minus", "Remove note", "files", "tilt", ["note", "remove", "memo", "minus"], "The minus draws in."],
  ["StickyNoteOff", "sticky-note-off", "No note", "files", "shake", ["note", "off", "hide", "memo"], "The slash crosses it out."],
  ["StickyNotePlus", "sticky-note-plus", "Add note", "files", "tilt", ["note", "add", "memo", "new"], "The plus draws in."],
  ["StickyNotes", "sticky-notes", "Notes", "files", "tilt", ["notes", "memos", "sticky", "post-it"], "The notes flutter."],
  ["StickyNoteX", "sticky-note-x", "Delete note", "files", "shake", ["note", "delete", "remove", "x"], "The cross draws in."],
  ["Stone", "stone", "Stone", "nature", "bounce", ["rock", "stone", "pebble", "mineral"], "It settles."],
  ["StretchVertical", "stretch-vertical", "Stretch vertically", "app", "pop", ["stretch", "fill", "full height", "layout"], "The columns stretch."],
  ["StrokeLineCapButt", "stroke-line-cap-butt", "Butt line cap", "development", "pop", ["stroke", "line cap", "butt", "vector"], "The line draws to its end."],
  ["StrokeLineCapRound", "stroke-line-cap-round", "Round line cap", "development", "pop", ["stroke", "line cap", "round", "vector"], "The line draws to its end."],
  ["StrokeLineCapSquare", "stroke-line-cap-square", "Square line cap", "development", "pop", ["stroke", "line cap", "square", "vector"], "The line draws to its end."],
  ["StrokeLineJoinBevel", "stroke-line-join-bevel", "Bevel line join", "development", "pop", ["stroke", "line join", "bevel", "vector"], "The corner draws."],
  ["StrokeLineJoinMiter", "stroke-line-join-miter", "Miter line join", "development", "pop", ["stroke", "line join", "miter", "vector"], "The corner draws."],
  ["StrokeLineJoinRound", "stroke-line-join-round", "Round line join", "development", "pop", ["stroke", "line join", "round", "vector"], "The corner draws."],
  ["SunMedium", "sun-medium", "Medium brightness", "weather", "spin-90", ["brightness", "sun", "light", "medium"], "The rays glow."],
  ["SunSnow", "sun-snow", "Sun and snow", "weather", "float", ["weather", "cold", "sunny", "winter"], "The sun glows and the flake turns."],
  ["Table2", "table-2", "Data table", "files", "pop", ["table", "grid", "spreadsheet", "data"], "The grid draws in."],
  ["TableColumnsSplit", "table-columns-split", "Split columns", "files", "pop", ["table", "columns", "split", "divide"], "The columns part."],
  ["TableProperties", "table-properties", "Table properties", "files", "pop", ["table", "properties", "settings", "list"], "The rows write in."],
  ["TableRowsSplit", "table-rows-split", "Split rows", "files", "pop", ["table", "rows", "split", "divide"], "The rows part."],
  ["Tally1", "tally-1", "Tally of one", "charts", "draw", ["count", "score", "marks", "one"], "The mark draws in."],
  ["Tally2", "tally-2", "Tally of two", "charts", "draw", ["count", "score", "marks", "two"], "The marks draw in."],
  ["Tally3", "tally-3", "Tally of three", "charts", "draw", ["count", "score", "marks", "three"], "The marks draw in."],
  ["Tally4", "tally-4", "Tally of four", "charts", "draw", ["count", "score", "marks", "four"], "The marks draw in."],
  ["Tangent", "tangent", "Tangent", "development", "draw", ["tangent", "geometry", "circle", "line", "math"], "The line draws across the circle."],
  ["TestTube2", "test-tube-2", "Tilted test tube", "health", "tilt", ["lab", "science", "experiment", "sample"], "The tube tips and the liquid sloshes."],
  ["TextAlignJustifyCenter", "text-align-justify-center", "Justify centered", "text", "pop", ["justify", "align", "center", "paragraph"], "The lines stretch from the centre."],
  ["TextAlignJustifyEnd", "text-align-justify-end", "Justify to end", "text", "nudge-right", ["justify", "align", "end", "paragraph"], "The lines stretch to the end."],
  ["TextAlignJustifyStart", "text-align-justify-start", "Justify to start", "text", "nudge-left", ["justify", "align", "start", "paragraph"], "The lines stretch from the start."],
  ["TextPen", "text-pen", "Edit text", "text", "wiggle", ["edit", "write", "text", "compose"], "The pen writes."],
  ["TicketMinus", "ticket-minus", "Remove ticket", "commerce", "pop", ["ticket", "remove", "cancel", "minus"], "The minus draws on the ticket."],
  ["TicketPlus", "ticket-plus", "Add ticket", "commerce", "pop", ["ticket", "add", "book", "plus"], "The plus draws on the ticket."],
  ["Tickets", "tickets", "Tickets", "commerce", "wiggle", ["tickets", "event", "admission", "pass"], "The back ticket slides out."],
];

/** the smooth curve (no overshoot) for drawings and keyframe motions that carry their own bounce */
const E = "cubic-bezier(.22,1,.36,1)";
/** a keyframe block named after the icon */
const kf = (icon: string, name: string, frames: string) => `@keyframes ki-${icon}-${name}{${frames}}`;
/** an animation of one of the icon's keyframes */
const an = (icon: string, name: string, ms: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${E} ${delay}ms${fill ? " " + fill : ""}`;
type Extra = { box?: "view-box"; origin?: string };
const play = (icon: string, name: string, ms: number, delay = 0, extra: Extra = {}) => ({ ...extra, animation: an(icon, name, ms, delay) });
/** a pivot on the 24 grid */
const vb = (x: number, y: number): Extra => ({ box: "view-box", origin: `${x}px ${y}px` });
/** a line drawn in from its start (needs the part in `draw`), or from its end */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const drawIn = (icon: string, ms: number, delay = 0, reverse = false) => ({
  from: { strokeDasharray: 1 },
  animation: an(icon, reverse ? "undraw" : "draw", ms, delay, "backwards"),
});
/** the same motion for several parts */
const each = <T,>(parts: string[], f: (i: number) => T): Record<string, T> => Object.fromEntries(parts.map((p, i) => [p, f(i)]));

/** a box that gives a little, as if pressed */
const BUMP = "0%{transform:none}30%{transform:scale(.96)}65%{transform:scale(1.01)}100%{transform:none}";
/** pops in from small (a dot, a small mark) */
const POP_IN = "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}";
/** drops in from above */
const DROP_IN = "0%{transform:translateY(-2.5px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}";
/** shakes its head around its pivot */
const SHAKE = "0%{transform:none}20%{transform:rotate(-6deg)}40%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}80%{transform:rotate(1.5deg)}100%{transform:none}";
/** a small shudder on a centre */
const RATTLE = "0%{transform:none}25%{transform:rotate(-4deg)}50%{transform:rotate(3deg)}75%{transform:rotate(-1.5deg)}100%{transform:none}";
/** a sideways shiver */
const SHIVER = "0%{transform:none}25%{transform:translateX(-.6px)}50%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}";
/** a sticky note's corner fold that flutters up and settles */
const FLUTTER = "0%{transform:none}30%{transform:translate(-.4px,-.3px) scale(1.25)}55%{transform:scale(.9)}80%{transform:scale(1.05)}100%{transform:none}";
/** a ticket squashed as if stamped */
const STAMP = "0%{transform:none}35%{transform:scale(1.05,.92)}100%{transform:none}";
/** a mark that twinkles: grows, turns a little and settles */
const TWINKLE = "0%{transform:none}35%{transform:scale(1.18) rotate(12deg)}70%{transform:scale(.96) rotate(-2deg)}100%{transform:none}";
/** a magnifier that circles over what it searches */
const SEARCH = "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}";
/** steps a way and springs back past where it rests */
const step = (t: string, back: string) => `0%{transform:none}35%{transform:${t}}70%{transform:${back}}100%{transform:none}`;
/** an arrow that leaves one way and comes back in from the other side */
const through = (dx: number, dy: number) =>
  `0%{transform:none;opacity:1}35%{transform:translate(${dx}px,${dy}px);opacity:0}36%{transform:translate(${-dx}px,${-dy}px);opacity:0}100%{transform:none;opacity:1}`;
/** a frame that takes the knock of something passing through it */
const knock = (dx: number, dy: number) => `0%,18%{transform:none}30%{transform:translate(${dx}px,${dy}px)}55%,100%{transform:none}`;
/** a line that squeezes along its length and springs back */
const squeeze = (axis: "X" | "Y", s: number) => `0%{transform:none}35%{transform:scale${axis}(${s})}70%{transform:scale${axis}(1.04)}100%{transform:none}`;
/** a dash that runs on along its side, fades, and comes back in from behind */
const march = (dx: number, dy: number) =>
  `0%{transform:none;opacity:1}45%{opacity:0;transform:translate(${dx}px,${dy}px)}46%{opacity:0;transform:translate(${-dx}px,${-dy}px)}100%{opacity:1;transform:none}`;

/** an arrow passing through the open side of its square, which takes the knock */
function passing(icon: string, arrow: string[], box: string, dx: number, dy: number, note: string): Override {
  return {
    note,
    motion: {
      ...each(arrow, () => play(icon, "arrow", 650)),
      [box]: play(icon, "box", 650),
    },
    keyframes: kf(icon, "arrow", through(dx, dy)) + kf(icon, "box", knock(Math.sign(dx) * 0.6, Math.sign(dy) * 0.6)),
  };
}

/** two chevrons in a square that step the way they point, the leading one first, while the box gives a little */
function chevrons(icon: string, lead: string, follow: string, dx: number, dy: number, way: string): Override {
  const t = (k: number) => `translate(${dx * k}px,${dy * k}px)`;
  return {
    note: `The chevrons step ${way} one after the other inside the square, which gives a little that way.`,
    motion: {
      [lead]: play(icon, "step", 550),
      [follow]: play(icon, "step", 550, 70),
      p2: play(icon, "box", 550, 60),
    },
    keyframes: kf(icon, "step", step(t(1.5), t(-0.3))) + kf(icon, "box", step(t(0.4), "none")),
  };
}

/** a letter in a square that writes itself stroke by stroke, while the square gives a little */
function letter(l: string, box: string, strokes: string[]): Override {
  const icon = `square-letter-${l}`;
  const ms = strokes.length === 1 ? 600 : 380;
  return {
    note:
      strokes.length === 1
        ? `The square gives a little and the ${l.toUpperCase()} writes itself in one stroke.`
        : `The square gives a little and the ${l.toUpperCase()} writes itself, stroke after stroke.`,
    draw: strokes,
    motion: {
      [box]: play(icon, "box", 550),
      ...each(strokes, (i) => drawIn(icon, ms, 80 + i * 260)),
    },
    keyframes: kf(icon, "box", BUMP) + drawKf(icon),
  };
}

/** inset lines that move in, making the padding wider, and spring back */
function padding(icon: string, lines: [string, number, number][], side: string): Override {
  const many = lines.length > 1;
  return {
    note: `The inset line${many ? "s move" : " moves"} in from the ${side}, widening the padding, and spring${many ? "" : "s"} back.`,
    motion: Object.fromEntries(lines.map(([p], i) => [p, play(icon, `in${i}`, 650, i * 60)])),
    keyframes: lines.map(([, dx, dy], i) => kf(icon, `in${i}`, step(`translate(${dx}px,${dy}px)`, `translate(${-dx * 0.2}px,${-dy * 0.2}px)`))).join(""),
  };
}

/** the corners of a dashed selection, which tighten in while hovered */
function corners(tl: string, tr: string | null, br: string | null, bl: string | null) {
  const out: Record<string, { to: { transform: string } }> = { [tl]: { to: { transform: "translate(.8px,.8px)" } } };
  if (tr) out[tr] = { to: { transform: "translate(-.8px,.8px)" } };
  if (br) out[br] = { to: { transform: "translate(-.8px,-.8px)" } };
  if (bl) out[bl] = { to: { transform: "translate(.8px,-.8px)" } };
  return out;
}

/** a stroke-cap or stroke-join sample: the outline draws itself and the centre line's dashes pop in along it */
function stroke(icon: string, outline: string, dashes: string[], what: string): Override {
  return {
    note: `The ${what} outline draws itself and the centre line's dashes pop in along it, one after another.`,
    draw: [outline],
    motion: {
      [outline]: drawIn(icon, 600),
      ...each(dashes, (i) => ({ origin: "50% 50%", animation: an(icon, "dash", 380, 120 + i * 90, "backwards") })),
    },
    keyframes: drawKf(icon) + kf(icon, "dash", POP_IN),
  };
}

/** tally marks drawn one by one */
function tally(icon: string, n: number): Override {
  const parts = Array.from({ length: n }, (_, i) => `p${i}`);
  if (n === 1)
    return {
      note: "The mark draws itself from top to bottom and lands with a small squash.",
      draw: parts,
      motion: { p0: { from: { strokeDasharray: 1 }, origin: "50% 100%", animation: `${an(icon, "draw", 420, 0, "backwards")}, ${an(icon, "land", 400, 380)}` } },
      keyframes: drawKf(icon) + kf(icon, "land", "0%{transform:none}35%{transform:scaleY(.94)}100%{transform:none}"),
    };
  return {
    note: "The marks draw themselves one by one, left to right.",
    draw: parts,
    motion: each(parts, (i) => drawIn(icon, 280, i * 80)),
    keyframes: drawKf(icon),
  };
}

/** text lines that squeeze toward an edge or the centre and spring back */
function justify(icon: string, origin: string, toward: string): Override {
  return {
    note: `The three lines squeeze in toward the ${toward} and spring back out, one after another.`,
    motion: each(["p0", "p1", "p2"], (i) => play(icon, "line", 550, i * 70, { origin })),
    keyframes: kf(icon, "line", squeeze("X", 0.6)),
  };
}

/** a sticky note whose corner fold flutters while its badge draws itself in */
function noteBadge(icon: string, fold: string, strokes: string[], note: string): Override {
  return {
    note,
    draw: strokes,
    motion: {
      [fold]: play(icon, "fold", 650, 0, { origin: "0% 100%" }),
      ...each(strokes, (i) => drawIn(icon, 340, 120 + i * 130)),
    },
    keyframes: kf(icon, "fold", FLUTTER) + drawKf(icon),
  };
}

/** a star whose badge draws itself in the corner it leaves open, while the star moves */
function starBadge(icon: string, star: string, strokes: string[], note: string, starFrames = TWINKLE): Override {
  return {
    note,
    draw: strokes,
    motion: {
      [star]: play(icon, "star", 600, 0, { origin: "45% 50%" }),
      ...each(strokes, (i) => drawIn(icon, 340, 140 + i * 130)),
    },
    keyframes: kf(icon, "star", starFrames) + drawKf(icon),
  };
}

export const motions: Record<string, Override> = {
  "square-arrow-left-exit": passing("square-arrow-left-exit", ["p0", "p2"], "p1", -3, 0, "The arrow slides out through the open left side and comes back in from the right; the square takes the knock."),
  "square-arrow-right-enter": passing("square-arrow-right-enter", ["p0", "p2"], "p1", 3, 0, "The arrow slides on into the square and comes back in through the open left side; the square takes the knock."),
  "square-arrow-right-exit": passing("square-arrow-right-exit", ["p0", "p1"], "p2", 3, 0, "The arrow slides out through the open right side and comes back in from the left; the square takes the knock."),
  "square-arrow-up-enter": passing("square-arrow-up-enter", ["p0", "p1"], "p2", 0, -3, "The arrow rises on into the square and comes back up through the open bottom; the square takes the knock."),
  "square-arrow-up-exit": passing("square-arrow-up-exit", ["p0", "p1"], "p2", 0, -3, "The arrow rises out through the open top and comes back up from below; the square takes the knock."),
  "square-arrow-up-left-enter": passing("square-arrow-up-left-enter", ["p1", "p2"], "p0", -2.2, -2.2, "The arrow slides on up-left into the square and comes back in through the open corner; the square takes the knock."),
  "square-arrow-up-right-enter": passing("square-arrow-up-right-enter", ["p0", "p2"], "p1", 2.2, -2.2, "The arrow slides on up-right into the square and comes back in through the open corner; the square takes the knock."),

  "square-chevrons-down": chevrons("square-chevrons-down", "p0", "p1", 0, 1, "down"),
  "square-chevrons-left": chevrons("square-chevrons-left", "p0", "p1", -1, 0, "left"),
  "square-chevrons-right": chevrons("square-chevrons-right", "p0", "p1", 1, 0, "right"),
  "square-chevrons-up": chevrons("square-chevrons-up", "p0", "p1", 0, -1, "up"),

  "square-dashed-bottom": {
    note: "The two dashes run along the open bottom and come back in, while the square lifts a touch.",
    motion: {
      p2: play("square-dashed-bottom", "dash", 600),
      p1: play("square-dashed-bottom", "dash", 600, 70),
      p0: play("square-dashed-bottom", "lift", 600),
    },
    keyframes: kf("square-dashed-bottom", "dash", march(-2.5, 0)) + kf("square-dashed-bottom", "lift", step("translateY(-.5px)", "translateY(.1px)")),
  },

  "square-dashed-bottom-code": {
    note: "The two brackets open apart and close again while the dashes run along the bottom.",
    motion: {
      p0: play("square-dashed-bottom-code", "left", 600),
      p2: play("square-dashed-bottom-code", "right", 600),
      p1: play("square-dashed-bottom-code", "dash", 600, 60),
      p4: play("square-dashed-bottom-code", "dash", 600, 130),
    },
    keyframes:
      kf("square-dashed-bottom-code", "left", step("translateX(-1.2px)", "translateX(.2px)")) +
      kf("square-dashed-bottom-code", "right", step("translateX(1.2px)", "translateX(-.2px)")) +
      kf("square-dashed-bottom-code", "dash", march(-2.5, 0)),
  },

  "square-dashed-plus": {
    note: "The corners of the selection tighten in and the plus draws itself, across and then down.",
    draw: ["p12", "p13"],
    motion: {
      ...corners("p0", "p1", "p2", "p3"),
      p12: drawIn("square-dashed-plus", 340, 60),
      p13: drawIn("square-dashed-plus", 340, 180),
    },
    keyframes: drawKf("square-dashed-plus"),
  },

  "square-dashed-search": {
    note: "The lens circles over the corner of the selection, whose other corners tighten in.",
    motion: {
      ...corners("p7", "p1", null, "p6"),
      p10: play("square-dashed-search", "search", 800),
      p2: play("square-dashed-search", "search", 800),
    },
    keyframes: kf("square-dashed-search", "search", SEARCH),
  },

  "square-dashed-top-solid": {
    note: "The solid top draws itself across while the dashes on the other sides run round after it.",
    draw: ["p5"],
    motion: {
      p5: drawIn("square-dashed-top-solid", 450),
      p3: play("square-dashed-top-solid", "right", 600, 120),
      p1: play("square-dashed-top-solid", "right", 600, 170),
      p0: play("square-dashed-top-solid", "bottom", 600, 220),
      p8: play("square-dashed-top-solid", "bottom", 600, 270),
      p4: play("square-dashed-top-solid", "left", 600, 320),
      p6: play("square-dashed-top-solid", "left", 600, 370),
    },
    keyframes:
      drawKf("square-dashed-top-solid") +
      kf("square-dashed-top-solid", "right", march(0, 2.5)) +
      kf("square-dashed-top-solid", "bottom", march(-2.5, 0)) +
      kf("square-dashed-top-solid", "left", march(0, -2.5)),
  },

  "square-dashed-x": {
    note: "The corners of the selection tighten in and the cross draws itself, one stroke after the other.",
    draw: ["p13", "p10"],
    motion: {
      ...corners("p9", "p2", "p4", "p8"),
      p13: drawIn("square-dashed-x", 320, 60),
      p10: drawIn("square-dashed-x", 320, 180),
    },
    keyframes: drawKf("square-dashed-x"),
  },

  "square-dashed-x-corner": {
    note: "The cross draws itself in the open corner while the other corners of the selection tighten in.",
    draw: ["p1", "p3"],
    motion: {
      ...corners("p8", "p2", null, "p7"),
      p1: drawIn("square-dashed-x-corner", 320, 60),
      p3: drawIn("square-dashed-x-corner", 320, 180),
    },
    keyframes: drawKf("square-dashed-x-corner"),
  },

  "square-exclamation-point": {
    note: "The square shakes its head, the stroke of the mark drops in and its dot pops below it.",
    motion: {
      p0: play("square-exclamation-point", "shake", 550, 0, vb(12, 12)),
      p1: { animation: an("square-exclamation-point", "drop", 450, 80, "backwards") },
      p2: { origin: "50% 50%", animation: an("square-exclamation-point", "dot", 400, 220, "backwards") },
    },
    keyframes:
      kf("square-exclamation-point", "shake", SHAKE) + kf("square-exclamation-point", "drop", DROP_IN) + kf("square-exclamation-point", "dot", POP_IN),
  },

  "square-kanban-plus": {
    note: "The three columns shuffle down from the top in turn and the plus draws itself in the open corner.",
    draw: ["p2", "p4"],
    motion: {
      p5: play("square-kanban-plus", "col", 600, 0, { origin: "50% 0%" }),
      p0: play("square-kanban-plus", "col", 600, 70, { origin: "50% 0%" }),
      p3: play("square-kanban-plus", "col", 600, 140, { origin: "50% 0%" }),
      p2: drawIn("square-kanban-plus", 320, 200),
      p4: drawIn("square-kanban-plus", 320, 320),
    },
    keyframes: kf("square-kanban-plus", "col", "0%{transform:none}35%{transform:scaleY(.65)}70%{transform:scaleY(1.06)}100%{transform:none}") + drawKf("square-kanban-plus"),
  },

  "square-letter-a": letter("a", "p2", ["p0", "p1"]),
  "square-letter-b": letter("b", "p1", ["p0"]),
  "square-letter-c": letter("c", "p1", ["p0"]),
  "square-letter-d": letter("d", "p1", ["p0"]),
  "square-letter-e": letter("e", "p2", ["p0", "p1"]),
  "square-letter-f": letter("f", "p2", ["p0", "p1"]),
  "square-letter-g": letter("g", "p1", ["p0"]),
  "square-letter-h": letter("h", "p3", ["p0", "p1", "p2"]),
  "square-letter-i": letter("i", "p1", ["p0"]),
  "square-letter-j": letter("j", "p1", ["p0"]),
  "square-letter-k": letter("k", "p3", ["p0", "p2", "p1"]),
  "square-letter-l": letter("l", "p1", ["p0"]),
  "square-letter-n": letter("n", "p1", ["p0"]),
  "square-letter-o": letter("o", "p1", ["p0"]),
  "square-letter-q": letter("q", "p2", ["p0", "p1"]),
  "square-letter-r": letter("r", "p2", ["p1", "p0"]),
  "square-letter-s": letter("s", "p1", ["p0"]),
  "square-letter-t": letter("t", "p2", ["p1", "p0"]),
  "square-letter-u": letter("u", "p1", ["p0"]),
  "square-letter-v": letter("v", "p1", ["p0"]),
  "square-letter-w": letter("w", "p1", ["p0"]),
  "square-letter-x": letter("x", "p2", ["p1", "p0"]),
  "square-letter-y": letter("y", "p2", ["p0", "p1"]),
  "square-letter-z": letter("z", "p1", ["p0"]),

  "square-off": {
    note: "The slash strikes through and the square gives a last shudder on its centre.",
    draw: ["p2"],
    motion: {
      p2: drawIn("square-off", 420),
      ...each(["p0", "p1"], () => play("square-off", "rattle", 500, 150, vb(12, 12))),
    },
    keyframes: drawKf("square-off") + kf("square-off", "rattle", RATTLE),
  },

  "square-padding-bottom": padding("square-padding-bottom", [["p1", 0, -1.3]], "bottom"),
  "square-padding-horizontal": padding("square-padding-horizontal", [["p2", 1.3, 0], ["p1", -1.3, 0]], "sides"),
  "square-padding-left": padding("square-padding-left", [["p1", 1.3, 0]], "left"),
  "square-padding-right": padding("square-padding-right", [["p1", -1.3, 0]], "right"),
  "square-padding-top": padding("square-padding-top", [["p1", 0, 1.3]], "top"),
  "square-padding-vertical": padding("square-padding-vertical", [["p2", 0, 1.3], ["p1", 0, -1.3]], "top and bottom"),

  "square-pause": {
    note: "The two bars squeeze down one after the other, like a press of the button, and the square gives a little.",
    motion: {
      p1: play("square-pause", "bar", 500),
      p2: play("square-pause", "bar", 500, 80),
      p0: play("square-pause", "box", 550, 40),
    },
    keyframes: kf("square-pause", "bar", squeeze("Y", 0.55)) + kf("square-pause", "box", BUMP),
  },

  "square-sparkles": {
    note: "The big sparkle twinkles in the open corner and the small one twinkles after it.",
    motion: {
      p1: play("square-sparkles", "big", 650, 0, { origin: "50% 50%" }),
      p0: play("square-sparkles", "small", 550, 160, vb(9, 15)),
      p3: play("square-sparkles", "small", 550, 160, vb(9, 15)),
    },
    keyframes: kf("square-sparkles", "big", TWINKLE) + kf("square-sparkles", "small", "0%{transform:none}40%{transform:scale(.4)}75%{transform:scale(1.15)}100%{transform:none}"),
  },

  "square-square": {
    note: "The inner square is pressed in and springs back out, and the outer one gives a little.",
    motion: {
      p1: play("square-square", "press", 550),
      p0: play("square-square", "box", 550, 60),
    },
    keyframes: kf("square-square", "press", "0%{transform:none}35%{transform:scale(.7)}70%{transform:scale(1.1)}100%{transform:none}") + kf("square-square", "box", BUMP),
  },

  "square-star": {
    note: "The star turns in a fifth of a turn from small and springs to size, and the square gives a little.",
    motion: {
      p0: play("square-star", "turn", 650, 0, { origin: "50% 55%" }),
      p1: play("square-star", "box", 550, 40),
    },
    keyframes: kf("square-star", "turn", "0%{transform:rotate(-72deg) scale(.6)}60%{transform:rotate(4deg) scale(1.12)}100%{transform:none}") + kf("square-star", "box", BUMP),
  },

  "square-stop": {
    note: "The inner square is pressed in and springs back out, its frame giving a little.",
    motion: {
      p1: play("square-stop", "press", 550),
      p0: play("square-stop", "box", 550, 60),
    },
    keyframes: kf("square-stop", "press", "0%{transform:none}35%{transform:scale(.65)}70%{transform:scale(1.12)}100%{transform:none}") + kf("square-stop", "box", BUMP),
  },

  "square-text": {
    note: "The three lines write themselves across the square, top to bottom.",
    draw: ["p1", "p2", "p3"],
    motion: each(["p1", "p2", "p3"], (i) => drawIn("square-text", 380, i * 90)),
    keyframes: drawKf("square-text"),
  },

  "square-user": {
    note: "The head bobs up and the shoulders squash and spring under it.",
    motion: {
      p1: play("square-user", "head", 600),
      p2: play("square-user", "body", 600, 0, { origin: "50% 100%" }),
    },
    keyframes:
      kf("square-user", "head", step("translateY(-1.2px)", "translateY(.3px)")) +
      kf("square-user", "body", "0%{transform:none}30%{transform:scaleY(.88)}60%{transform:scaleY(1.03)}100%{transform:none}"),
  },

  "square-user-round": {
    note: "The head bobs up and the shoulders squash and spring under it.",
    motion: {
      p1: play("square-user-round", "head", 600),
      p0: play("square-user-round", "body", 600, 0, { origin: "50% 100%" }),
    },
    keyframes:
      kf("square-user-round", "head", step("translateY(-1.2px)", "translateY(.3px)")) +
      kf("square-user-round", "body", "0%{transform:none}30%{transform:scaleY(.88)}60%{transform:scaleY(1.03)}100%{transform:none}"),
  },

  "squircle-dashed": {
    note: "Each dash runs on clockwise round the squircle, fades, and comes back in behind, one after another.",
    motion: each(["p0", "p3", "p4", "p2", "p1", "p6", "p5", "p7"], (i) => play("squircle-dashed", "run", 600, i * 40, vb(12, 12))),
    keyframes: kf("squircle-dashed", "run", "0%{transform:none;opacity:1}45%{opacity:0;transform:rotate(25deg)}46%{opacity:0;transform:rotate(-25deg)}100%{opacity:1;transform:none}"),
  },

  "star-rounded": {
    note: "The star twists on its centre, swelling as it shines, and settles back.",
    motion: { p0: play("star-rounded", "shine", 650, 0, { origin: "50% 55%" }) },
    keyframes: kf("star-rounded", "shine", "0%{transform:none}35%{transform:rotate(-14deg) scale(1.12)}70%{transform:rotate(4deg) scale(.98)}100%{transform:none}"),
  },

  "star-check": starBadge("star-check", "p0", ["p1"], "The star twinkles and the tick draws itself in its open corner."),
  "star-minus": starBadge(
    "star-minus",
    "p1",
    ["p0"],
    "The star shrinks back a little as the minus draws itself in its open corner.",
    "0%{transform:none}35%{transform:scale(.9)}70%{transform:scale(1.02)}100%{transform:none}",
  ),
  "star-plus": starBadge("star-plus", "p0", ["p1", "p2"], "The star twinkles and the plus draws itself in its open corner, across and then down."),
  "star-x": starBadge("star-x", "p1", ["p0", "p2"], "The star shivers and the cross draws itself in its open corner, one stroke after the other.", SHIVER),

  "sticky-note-check": noteBadge("sticky-note-check", "p1", ["p0"], "The folded corner flutters and the tick draws itself in the note's open corner."),
  "sticky-note-minus": noteBadge("sticky-note-minus", "p0", ["p2"], "The folded corner flutters and the minus draws itself in the note's open corner."),
  "sticky-note-plus": noteBadge("sticky-note-plus", "p0", ["p3", "p1"], "The folded corner flutters and the plus draws itself in the note's open corner, across and then down."),
  "sticky-note-x": noteBadge("sticky-note-x", "p0", ["p1", "p3"], "The folded corner flutters and the cross draws itself in the note's open corner, one stroke after the other."),

  "sticky-note-off": {
    note: "The slash strikes through and the note gives a last shudder on its centre.",
    draw: ["p1"],
    motion: {
      p1: drawIn("sticky-note-off", 420),
      ...each(["p0", "p2", "p3"], () => play("sticky-note-off", "rattle", 500, 150, vb(12, 12))),
    },
    keyframes: drawKf("sticky-note-off") + kf("sticky-note-off", "rattle", RATTLE),
  },

  "sticky-notes": {
    note: "The back note slides out from behind the front one, whose folded corner flutters.",
    motion: {
      p2: { animation: an("sticky-notes", "back", 600, 0, "backwards") },
      p3: { animation: an("sticky-notes", "back", 600, 0, "backwards") },
      p1: play("sticky-notes", "fold", 650, 120, { origin: "0% 100%" }),
    },
    keyframes:
      kf("sticky-notes", "back", "0%{transform:translate(-2px,2px);opacity:0}60%{transform:translate(.3px,-.3px);opacity:1}100%{transform:none;opacity:1}") +
      kf("sticky-notes", "fold", FLUTTER),
  },

  stone: {
    note: "The stone hops and lands with a squash, its facets settling a beat after it.",
    motion: {
      p0: play("stone", "land", 700, 0, vb(12, 22)),
      p1: play("stone", "land", 700, 50, vb(12, 22)),
      p2: play("stone", "land", 700, 50, vb(12, 22)),
    },
    keyframes: kf("stone", "land", "0%{transform:none}25%{transform:translateY(-1.2px)}50%{transform:translateY(.2px) scale(1.04,.95)}75%{transform:scale(.99,1.02)}100%{transform:none}"),
  },

  "stretch-vertical": {
    note: "The two columns squeeze and stretch out to full height again, one after the other.",
    motion: { p0: play("stretch-vertical", "bar", 600), p1: play("stretch-vertical", "bar", 600, 70) },
    keyframes: kf("stretch-vertical", "bar", "0%{transform:none}30%{transform:scaleY(.82)}65%{transform:scaleY(1.04)}100%{transform:none}"),
  },

  "stroke-line-cap-butt": stroke("stroke-line-cap-butt", "p2", ["p1", "p4", "p0", "p3"], "flat cap's"),
  "stroke-line-cap-round": stroke("stroke-line-cap-round", "p2", ["p1", "p3", "p0"], "round cap's"),
  "stroke-line-cap-square": stroke("stroke-line-cap-square", "p2", ["p1", "p3", "p0"], "square cap's"),
  "stroke-line-join-bevel": stroke("stroke-line-join-bevel", "p1", ["p2", "p3", "p0"], "bevelled corner's"),
  "stroke-line-join-miter": stroke("stroke-line-join-miter", "p1", ["p2", "p3", "p0"], "sharp corner's"),
  "stroke-line-join-round": stroke("stroke-line-join-round", "p1", ["p2", "p3", "p0"], "round corner's"),

  "sun-medium": {
    note: "The rays shoot out one by one around the sun, which swells a little.",
    draw: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
    motion: {
      p0: play("sun-medium", "core", 650),
      // each ray grows from its inner end, clockwise from the top
      p1: drawIn("sun-medium", 300, 0, true),
      p5: drawIn("sun-medium", 300, 45, true),
      p4: drawIn("sun-medium", 300, 90),
      p8: drawIn("sun-medium", 300, 135),
      p2: drawIn("sun-medium", 300, 180),
      p6: drawIn("sun-medium", 300, 225),
      p3: drawIn("sun-medium", 300, 270, true),
      p7: drawIn("sun-medium", 300, 315, true),
    },
    keyframes: kf("sun-medium", "core", step("scale(1.12)", "scale(.98)")) + drawKf("sun-medium") + undrawKf("sun-medium"),
  },

  "sun-snow": {
    note: "The half sun's rays shoot out from it while the snowflake beside it rocks on its centre.",
    draw: ["p1", "p0", "p7", "p9", "p10"],
    motion: {
      p2: play("sun-snow", "sun", 600, 0, vb(10, 12)),
      p1: drawIn("sun-snow", 300, 0),
      p10: drawIn("sun-snow", 300, 50),
      p7: drawIn("sun-snow", 300, 100, true),
      p9: drawIn("sun-snow", 300, 150, true),
      p0: drawIn("sun-snow", 300, 200, true),
      ...each(["p3", "p4", "p5", "p6", "p8"], () => play("sun-snow", "flake", 750, 80, vb(15.5, 12))),
    },
    keyframes:
      kf("sun-snow", "sun", step("scale(1.12)", "scale(.98)")) +
      kf("sun-snow", "flake", "0%{transform:none}30%{transform:rotate(12deg)}60%{transform:rotate(-6deg)}85%{transform:rotate(2deg)}100%{transform:none}") +
      drawKf("sun-snow") +
      undrawKf("sun-snow"),
  },

  "table-2": {
    note: "The header row and the first column draw themselves across the table, which gives a little.",
    draw: ["p0", "p1"],
    motion: {
      p2: play("table-2", "box", 550),
      p0: drawIn("table-2", 400, 60),
      p1: drawIn("table-2", 400, 200),
    },
    keyframes: kf("table-2", "box", BUMP) + drawKf("table-2"),
  },

  "table-columns-split": {
    note: "The two halves of the table part sideways while the dashed split runs down between them.",
    motion: {
      ...each(["p5", "p4", "p6", "p10"], () => play("table-columns-split", "left", 650)),
      ...each(["p8", "p7", "p9"], () => play("table-columns-split", "right", 650)),
      ...each(["p2", "p3", "p0", "p1"], (i) => play("table-columns-split", "dash", 600, 60 + i * 50)),
    },
    keyframes:
      kf("table-columns-split", "left", step("translateX(-1.2px)", "translateX(.2px)")) +
      kf("table-columns-split", "right", step("translateX(1.2px)", "translateX(-.2px)")) +
      kf("table-columns-split", "dash", march(0, 2)),
  },

  "table-properties": {
    note: "The dividing column draws down the table, then the rows write themselves in.",
    draw: ["p0", "p2", "p3"],
    motion: {
      p0: drawIn("table-properties", 400),
      p2: drawIn("table-properties", 380, 160, true),
      p3: drawIn("table-properties", 380, 260, true),
    },
    keyframes: drawKf("table-properties") + undrawKf("table-properties"),
  },

  "table-rows-split": {
    note: "The two halves of the table part up and down while the dashed split runs along between them.",
    motion: {
      ...each(["p7", "p10", "p2"], () => play("table-rows-split", "up", 650)),
      ...each(["p6", "p5", "p9", "p1"], () => play("table-rows-split", "down", 650)),
      ...each(["p3", "p8", "p0", "p4"], (i) => play("table-rows-split", "dash", 600, 60 + i * 50)),
    },
    keyframes:
      kf("table-rows-split", "up", step("translateY(-1.2px)", "translateY(.2px)")) +
      kf("table-rows-split", "down", step("translateY(1.2px)", "translateY(-.2px)")) +
      kf("table-rows-split", "dash", march(2, 0)),
  },

  "tally-1": tally("tally-1", 1),
  "tally-2": tally("tally-2", 2),
  "tally-3": tally("tally-3", 3),
  "tally-4": tally("tally-4", 4),

  tangent: {
    note: "The curve draws itself, then the tangent line draws along it and its two end points pop in.",
    draw: ["p3", "p1"],
    motion: {
      p3: drawIn("tangent", 500),
      p1: drawIn("tangent", 400, 200, true),
      p2: { origin: "50% 50%", animation: an("tangent", "dot", 400, 250, "backwards") },
      p0: { origin: "50% 50%", animation: an("tangent", "dot", 400, 500, "backwards") },
    },
    keyframes: drawKf("tangent") + undrawKf("tangent") + kf("tangent", "dot", POP_IN),
  },

  "test-tube-2": {
    note: "The tube tips from its rim and swings back, the liquid line lagging behind like a slosh.",
    motion: {
      ...each(["p0", "p1"], () => play("test-tube-2", "tip", 800, 0, vb(19, 5))),
      p2: play("test-tube-2", "tip", 800, 70, vb(19, 5)),
    },
    keyframes: kf("test-tube-2", "tip", "0%{transform:none}30%{transform:rotate(10deg)}60%{transform:rotate(-5deg)}85%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "text-align-justify-center": justify("text-align-justify-center", "50% 50%", "centre"),
  "text-align-justify-end": justify("text-align-justify-end", "100% 50%", "end"),
  "text-align-justify-start": justify("text-align-justify-start", "0% 50%", "start"),

  "text-pen": {
    note: "The pen scribbles at its nib and the last line of text writes itself in after it.",
    draw: ["p3"],
    motion: {
      p2: play("text-pen", "write", 700, 0, vb(12.5, 20.5)),
      p3: drawIn("text-pen", 400, 150, true),
    },
    keyframes:
      kf("text-pen", "write", "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}") +
      undrawKf("text-pen"),
  },

  "ticket-minus": {
    note: "The ticket squashes as if stamped and the minus draws itself on it.",
    draw: ["p1"],
    motion: {
      p0: play("ticket-minus", "stamp", 500, 0, { origin: "50% 50%" }),
      p1: drawIn("ticket-minus", 380, 140),
    },
    keyframes: kf("ticket-minus", "stamp", STAMP) + drawKf("ticket-minus"),
  },

  "ticket-plus": {
    note: "The ticket squashes as if stamped and the plus draws itself on it, across and then down.",
    draw: ["p1", "p2"],
    motion: {
      p0: play("ticket-plus", "stamp", 500, 0, { origin: "50% 50%" }),
      p1: drawIn("ticket-plus", 320, 140),
      p2: drawIn("ticket-plus", 320, 260),
    },
    keyframes: kf("ticket-plus", "stamp", STAMP) + drawKf("ticket-plus"),
  },

  tickets: {
    note: "The back ticket lifts out from behind the front one, whose perforation stretches down the stub.",
    motion: {
      p0: play("tickets", "back", 650, 0, vb(18.5, 8)),
      p4: play("tickets", "front", 550, 40, { origin: "50% 50%" }),
      p1: play("tickets", "hole", 450, 80, { origin: "50% 50%" }),
      p2: play("tickets", "hole", 450, 150, { origin: "50% 50%" }),
      p3: play("tickets", "hole", 450, 220, { origin: "50% 50%" }),
    },
    keyframes:
      kf("tickets", "back", "0%{transform:none}35%{transform:translateY(-1px) rotate(-4deg)}70%{transform:rotate(1deg)}100%{transform:none}") +
      kf("tickets", "front", STAMP) +
      kf("tickets", "hole", "0%{transform:none}40%{transform:scaleY(1.5)}100%{transform:none}"),
  },
};

/** the whole square, for squares the source leaves open where an arrow passes or a slash cuts */
const SQUARE = "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z";
/** the star outline as the source draws it, open at the lower right corner */
const STAR_OPEN =
  "a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428";
/** a sticky note's outline from its folded corner round to the bottom left */
const NOTE = "a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2";

export const fills: Record<string, string> = {
  "square-arrow-left-exit": SQUARE,
  "square-arrow-right-enter": SQUARE,
  "square-arrow-right-exit": SQUARE,
  "square-arrow-up-enter": SQUARE,
  "square-arrow-up-exit": SQUARE,
  "square-arrow-up-left-enter": SQUARE,
  "square-arrow-up-right-enter": SQUARE,
  "square-off": SQUARE,
  // the square, closed by an arc round the plus in its open corner (just inside the end of the kanban's last bar)
  "square-kanban-plus": "M12.354 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.354A6.9 6.9 0 0 0 12.354 21Z",
  // the square, cut round the sparkle in its open corner
  "square-sparkles": "M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6L16.25 18.5 5.5 7.75Z",
  // the star, closed by a shallow arc round the badge in the corner the source leaves open
  "star-check": `M19.06 12.501l2.78-2.707${STAR_OPEN}.027-.014A13 13 0 0 1 19.06 12.501Z`,
  "star-minus": `M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638${STAR_OPEN}.027-.014A8 8 0 0 1 17.688 14Z`,
  "star-plus": `M20 11.5l1.84-1.706${STAR_OPEN}A11.5 11.5 0 0 1 20 11.5Z`,
  "star-x": `M20.063 11.525l1.777-1.731${STAR_OPEN}a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004A6 6 0 0 1 20.063 11.525Z`,
  // the note, closed by an arc round the badge in the corner the source leaves open
  "sticky-note-check": `M21 13V9${NOTE}h6.5A8.75 8.75 0 0 1 21 13Z`,
  "sticky-note-minus": `M21 14V9${NOTE}h7.35A5.75 5.75 0 0 1 21 14Z`,
  "sticky-note-plus": `M21 12.356V9${NOTE}h7.355A6.9 6.9 0 0 1 21 12.356Z`,
  "sticky-note-x": `M21 12V9${NOTE}h7A7.4 7.4 0 0 1 21 12Z`,
  "sticky-note-off": `M21 19V9${NOTE}h14a2 2 0 0 0 2-2Z`,
  // the tube, closed across the top under its rim
  "test-tube-2": "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3Z",
};
