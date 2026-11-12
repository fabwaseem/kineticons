import type { Entry, Override } from "./types";

/** Batch p: its icons (pnpm import-icons p) and their motions. */
export const list: Entry[] = [
  ["ChessQueen", "chess-queen", "Chess queen", "app", "bounce", ["chess", "queen", "game", "strategy"], "The queen glides forward and settles on her base."],
  ["ChessRook", "chess-rook", "Chess rook", "app", "bounce", ["chess", "rook", "castle", "game"], "The rook slides along and settles on its base."],
  ["CircleChevronDown", "circle-chevron-down", "Chevron down in a circle", "navigation", "nudge-down", ["expand", "down", "more", "dropdown"], "The chevron folds and dips in its ring."],
  ["SquareChevronDown", "square-chevron-down", "Chevron down in a square", "navigation", "nudge-down", ["expand", "down", "dropdown", "select"], "The chevron folds and dips in its square."],
  ["CircleChevronLeft", "circle-chevron-left", "Chevron left in a circle", "navigation", "nudge-left", ["back", "previous", "left", "arrow"], "The chevron folds and steps left in its ring."],
  ["SquareChevronLeft", "square-chevron-left", "Chevron left in a square", "navigation", "nudge-left", ["back", "previous", "left", "arrow"], "The chevron folds and steps left in its square."],
  ["CircleChevronRight", "circle-chevron-right", "Chevron right in a circle", "navigation", "nudge-right", ["next", "forward", "right", "arrow"], "The chevron folds and steps right in its ring."],
  ["SquareChevronRight", "square-chevron-right", "Chevron right in a square", "navigation", "nudge-right", ["next", "forward", "right", "arrow"], "The chevron folds and steps right in its square."],
  ["ChevronsLeftRightEllipsis", "chevrons-left-right-ellipsis", "Code with dots", "development", "pulse", ["truncate", "more", "code", "ellipsis"], "The chevrons spread and the dots pop in a row."],
  ["ChevronsRightLeft", "chevrons-right-left", "Narrow", "navigation", "pulse", ["collapse", "narrow", "shrink", "width"], "The two chevrons press in towards the middle."],
  ["CircleChevronUp", "circle-chevron-up", "Chevron up in a circle", "navigation", "nudge-up", ["collapse", "up", "less", "top"], "The chevron folds and rises in its ring."],
  ["SquareChevronUp", "square-chevron-up", "Chevron up in a square", "navigation", "nudge-up", ["collapse", "up", "less", "top"], "The chevron folds and rises in its square."],
  ["Cigarette", "cigarette", "Smoking", "travel", "float", ["smoking", "cigarette", "smoke", "area"], "The smoke curls up from the tip."],
  ["CircleChevronsDown", "circle-chevrons-down", "Chevrons down in a circle", "navigation", "nudge-down", ["down", "scroll", "bottom", "expand"], "The two chevrons step down inside the ring."],
  ["CircleChevronsLeft", "circle-chevrons-left", "Chevrons left in a circle", "navigation", "nudge-left", ["rewind", "back", "first", "left"], "The two chevrons step left inside the ring."],
  ["CircleChevronsRight", "circle-chevrons-right", "Chevrons right in a circle", "navigation", "nudge-right", ["fast forward", "next", "last", "right"], "The two chevrons step right inside the ring."],
  ["CircleChevronsUp", "circle-chevrons-up", "Chevrons up in a circle", "navigation", "nudge-up", ["up", "scroll", "top", "collapse"], "The two chevrons step up inside the ring."],
  ["CircleDashedCheck", "circle-dashed-check", "Dashed circle check", "status", "draw", ["done", "draft", "pending", "check"], "The dashes turn and the tick draws itself."],
  ["CircleDivide", "circle-divide", "Divide in a circle", "text", "pop", ["divide", "math", "division", "calculate"], "The dots part from the bar inside the ring."],
  ["CircleDotDashed", "circle-dot-dashed", "Dashed circle with dot", "shapes", "spin", ["loading", "pending", "target", "progress"], "The dashes chase round the dot."],
  ["CircleEqual", "circle-equal", "Equals in a circle", "text", "pop", ["equal", "math", "same", "result"], "The two lines meet and part inside the ring."],
  ["CircleFadingArrowUp", "circle-fading-arrow-up", "Update available", "status", "nudge-up", ["update", "upgrade", "upload", "new version"], "The arrow rises out and comes back from below."],
  ["CircleFadingCheck", "circle-fading-check", "Fading circle check", "status", "draw", ["done", "complete", "verified", "check"], "The tick draws itself as the ring fills in."],
  ["CircleFadingPlay", "circle-fading-play", "Fading circle play", "media", "nudge-right", ["play", "start", "stream", "video"], "The triangle nudges forward in the ring."],
  ["CircleFadingPlus", "circle-fading-plus", "Fading circle plus", "actions", "pop", ["add", "new", "story", "create"], "The plus turns a quarter in the ring."],
  ["CircleGauge", "circle-gauge", "Gauge in a circle", "status", "tilt", ["speed", "meter", "performance", "dial"], "The needle sweeps round the dial and settles."],
  ["CircleLetterA", "circle-letter-a", "Letter A in a circle", "text", "draw", ["letter", "a", "alphabet", "initial"], "The A writes itself in the ring."],
  ["CircleLetterB", "circle-letter-b", "Letter B in a circle", "text", "draw", ["letter", "b", "alphabet", "initial"], "The B writes itself in the ring."],
  ["CircleLetterD", "circle-letter-d", "Letter D in a circle", "text", "draw", ["letter", "d", "alphabet", "initial"], "The D writes itself in the ring."],
  ["CircleLetterE", "circle-letter-e", "Letter E in a circle", "text", "draw", ["letter", "e", "alphabet", "initial"], "The E writes itself in the ring."],
  ["CircleLetterF", "circle-letter-f", "Letter F in a circle", "text", "draw", ["letter", "f", "alphabet", "initial"], "The F writes itself in the ring."],
  ["CircleLetterG", "circle-letter-g", "Letter G in a circle", "text", "draw", ["letter", "g", "alphabet", "initial"], "The G writes itself in the ring."],
  ["CircleLetterH", "circle-letter-h", "Letter H in a circle", "text", "draw", ["letter", "h", "alphabet", "initial"], "The H writes itself in the ring."],
  ["CircleLetterI", "circle-letter-i", "Letter I in a circle", "text", "draw", ["letter", "i", "alphabet", "initial"], "The I writes itself in the ring."],
  ["CircleLetterJ", "circle-letter-j", "Letter J in a circle", "text", "draw", ["letter", "j", "alphabet", "initial"], "The J writes itself in the ring."],
  ["CircleLetterK", "circle-letter-k", "Letter K in a circle", "text", "draw", ["letter", "k", "alphabet", "initial"], "The K writes itself in the ring."],
  ["CircleLetterL", "circle-letter-l", "Letter L in a circle", "text", "draw", ["letter", "l", "alphabet", "initial"], "The L writes itself in the ring."],
  ["CircleLetterM", "circle-letter-m", "Letter M in a circle", "text", "draw", ["letter", "m", "alphabet", "initial"], "The M writes itself in the ring."],
  ["CircleLetterN", "circle-letter-n", "Letter N in a circle", "text", "draw", ["letter", "n", "alphabet", "initial"], "The N writes itself in the ring."],
  ["CircleLetterO", "circle-letter-o", "Letter O in a circle", "text", "draw", ["letter", "o", "alphabet", "initial"], "The O writes itself in the ring."],
  ["CircleLetterPOff", "circle-letter-p-off", "No parking", "travel", "shake", ["no parking", "parking", "forbidden", "car"], "The P writes itself and the slash strikes through."],
  ["CircleLetterQ", "circle-letter-q", "Letter Q in a circle", "text", "draw", ["letter", "q", "alphabet", "initial"], "The Q writes itself in the ring."],
  ["CircleLetterR", "circle-letter-r", "Letter R in a circle", "text", "draw", ["letter", "r", "alphabet", "initial"], "The R writes itself in the ring."],
  ["CircleLetterS", "circle-letter-s", "Letter S in a circle", "text", "draw", ["letter", "s", "alphabet", "initial"], "The S writes itself in the ring."],
  ["CircleLetterT", "circle-letter-t", "Letter T in a circle", "text", "draw", ["letter", "t", "alphabet", "initial"], "The T writes itself in the ring."],
  ["CircleLetterU", "circle-letter-u", "Letter U in a circle", "text", "draw", ["letter", "u", "alphabet", "initial"], "The U writes itself in the ring."],
  ["CircleLetterV", "circle-letter-v", "Letter V in a circle", "text", "draw", ["letter", "v", "alphabet", "initial"], "The V writes itself in the ring."],
  ["CircleLetterW", "circle-letter-w", "Letter W in a circle", "text", "draw", ["letter", "w", "alphabet", "initial"], "The W writes itself in the ring."],
  ["CircleLetterX", "circle-letter-x", "Letter X in a circle", "text", "draw", ["letter", "x", "alphabet", "initial"], "The X writes itself in the ring."],
  ["CircleLetterY", "circle-letter-y", "Letter Y in a circle", "text", "draw", ["letter", "y", "alphabet", "initial"], "The Y writes itself in the ring."],
  ["CircleLetterZ", "circle-letter-z", "Letter Z in a circle", "text", "draw", ["letter", "z", "alphabet", "initial"], "The Z writes itself in the ring."],
  ["CircleOff", "circle-off", "No circle", "shapes", "shake", ["off", "none", "disabled", "empty"], "The slash strikes across the broken ring."],
  ["CirclePile", "circle-pile", "Pile of circles", "shapes", "bounce", ["stack", "balls", "pile", "group"], "The top ball hops on the pile."],
  ["CirclePoundSterling", "circle-pound-sterling", "Pound", "commerce", "spin", ["money", "price", "pound", "coin"], "The coin spins on its edge with the pound sign."],
  ["CirclePower", "circle-power", "Power button", "actions", "pop", ["power", "on", "off", "start"], "The power line drops in and the ring draws round it."],
  ["CircleSlash2", "circle-slash-2", "Slashed circle", "status", "spin-90", ["none", "empty", "null", "diameter"], "The slash swings into place across the ring."],
  ["CircleSmall", "circle-small", "Small circle", "shapes", "pulse", ["dot", "small", "point", "bullet"], "The small circle squashes and springs back."],
  ["CircleUser", "circle-user-plain", "Account (square shoulders)", "app", "pop", ["account", "profile", "user", "avatar"], "The head lifts and the shoulders square up."],
  ["ClefAlto", "clef-alto", "Alto clef", "media", "wiggle", ["music", "clef", "viola", "score"], "The two curls rock against the bars."],
  ["ClefBass", "clef-bass", "Bass clef", "media", "wiggle", ["music", "clef", "bass", "score"], "The clef writes itself and its dots drop in."],
  ["ClipboardClock", "clipboard-clock", "Clipboard with clock", "files", "spin", ["schedule", "pending", "history", "clipboard"], "The clip snaps and the clock hands turn."],
  ["ClipboardMinus", "clipboard-minus", "Remove from clipboard", "files", "shake", ["remove", "minus", "clipboard", "delete"], "The clip snaps and the minus slides away and back."],
  ["ClipboardPenLine", "clipboard-pen-line", "Sign clipboard", "files", "wiggle", ["sign", "signature", "edit", "form"], "The pen signs along the line."],
  ["ClipboardType", "clipboard-type", "Clipboard text", "files", "draw", ["text", "paste", "type", "clipboard"], "The clip snaps and the T writes itself."],
  ["Clock1", "clock-1", "One o'clock", "status", "spin", ["time", "hour", "one", "clock"], "The hands sweep round and stop at one."],
  ["Clock10", "clock-10", "Ten o'clock", "status", "spin", ["time", "hour", "ten", "clock"], "The hands sweep round and stop at ten."],
  ["Clock11", "clock-11", "Eleven o'clock", "status", "spin", ["time", "hour", "eleven", "clock"], "The hands sweep round and stop at eleven."],
  ["Clock12", "clock-12", "Twelve o'clock", "status", "spin", ["time", "hour", "noon", "midnight"], "The hands sweep round and stop at twelve."],
  ["Clock2", "clock-2", "Two o'clock", "status", "spin", ["time", "hour", "two", "clock"], "The hands sweep round and stop at two."],
  ["Clock3", "clock-3", "Three o'clock", "status", "spin", ["time", "hour", "three", "clock"], "The hands sweep round and stop at three."],
  ["Clock4", "clock-4", "Four o'clock", "status", "spin", ["time", "hour", "four", "clock"], "The hands sweep round and stop at four."],
  ["Clock5", "clock-5", "Five o'clock", "status", "spin", ["time", "hour", "five", "clock"], "The hands sweep round and stop at five."],
  ["Clock6", "clock-6", "Six o'clock", "status", "spin", ["time", "hour", "six", "clock"], "The hands sweep round and stop at six."],
  ["Clock7", "clock-7", "Seven o'clock", "status", "spin", ["time", "hour", "seven", "clock"], "The hands sweep round and stop at seven."],
  ["Clock8", "clock-8", "Eight o'clock", "status", "spin", ["time", "hour", "eight", "clock"], "The hands sweep round and stop at eight."],
  ["Clock9", "clock-9", "Nine o'clock", "status", "spin", ["time", "hour", "nine", "clock"], "The hands sweep round and stop at nine."],
  ["ClockArrowDown", "clock-arrow-down", "Sort by oldest", "actions", "nudge-down", ["sort", "time", "oldest", "descending"], "The arrow drops out and comes back in from above."],
  ["ClockArrowLeft", "clock-arrow-left", "Earlier", "actions", "nudge-left", ["earlier", "back", "rewind", "time"], "The hands turn back and the arrow goes left."],
  ["ClockArrowRight", "clock-arrow-right", "Later", "actions", "nudge-right", ["later", "forward", "postpone", "time"], "The hands turn on and the arrow goes right."],
  ["ClockFading", "clock-fading", "Fading clock", "status", "spin", ["time", "pending", "waiting", "history"], "The hands sweep round as the faded ring fills in."],
  ["ClosedCaption", "closed-caption", "Closed captions", "media", "pop", ["cc", "subtitles", "captions", "accessibility"], "The two Cs write themselves on the screen."],
  ["CloudBackup", "cloud-backup", "Cloud backup", "actions", "spin-back", ["backup", "cloud", "restore", "history"], "The round arrow turns back under the cloud."],
  ["CloudMoonRain", "cloud-moon-rain", "Rainy night", "weather", "float", ["rain", "night", "moon", "weather"], "The cloud drifts past the moon and the rain falls."],
  ["CloudRainWind", "cloud-rain-wind", "Windy rain", "weather", "float", ["rain", "wind", "storm", "weather"], "The rain falls slanted in the wind."],
  ["SquareCode", "square-code", "Code in a square", "development", "pulse", ["code", "html", "embed", "brackets"], "The brackets spread apart and come back."],
  ["Columns3Cog", "columns-3-cog", "Column settings", "text", "spin", ["columns", "settings", "table", "configure"], "The cog turns beside the columns."],
  ["Columns4", "columns-4", "Four columns", "text", "pop", ["columns", "layout", "board", "grid"], "The dividers slide apart and back, one after another."],
  ["ContactRound", "contact-round", "Contact card", "people", "tilt", ["contact", "card", "person", "address book"], "The person on the card nods and the rings bob."],
  ["Copy", "copy-squares", "Copy (two squares)", "actions", "pop", ["copy", "duplicate", "clone", "paste"], "The copy behind slides out and back."],
  ["Copyleft", "copyleft", "Copyleft", "text", "spin-90", ["copyleft", "license", "open source", "rights"], "The ring turns and the reversed C writes itself."],
  ["CopyMinus", "copy-minus", "Remove copy", "actions", "shake", ["remove", "copy", "minus", "delete"], "The minus slides out and back on the front copy."],
  ["CopySlash", "copy-slash", "No copying", "actions", "shake", ["no copy", "disabled", "copy", "forbidden"], "The slash strikes across the front copy."],
  ["CopyX", "copy-x", "Remove duplicate", "actions", "shake", ["remove", "copy", "close", "delete"], "The cross twists on the front copy."],
  ["CornerLeftDown", "corner-left-down", "Turn left and down", "navigation", "nudge-down", ["turn", "corner", "down", "arrow"], "The line runs left and round the corner, and the head arrives pointing down."],
  ["CornerLeftUp", "corner-left-up", "Turn left and up", "navigation", "nudge-up", ["turn", "corner", "up", "arrow"], "The line runs left and round the corner, and the head arrives pointing up."],
  ["CornerRightDown", "corner-right-down", "Turn right and down", "navigation", "nudge-down", ["turn", "corner", "down", "arrow"], "The line runs right and round the corner, and the head arrives pointing down."],
  ["CornerRightUp", "corner-right-up", "Turn right and up", "navigation", "nudge-up", ["turn", "corner", "up", "arrow"], "The line runs right and round the corner, and the head arrives pointing up."],
  ["CreativeCommons", "creative-commons", "Creative Commons", "text", "spin-90", ["license", "cc", "open", "rights"], "The two Cs write themselves in the turning ring."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** with a little overshoot */
const SPRING = "cubic-bezier(.34,1.56,.64,1)";
/** a pivot in icon units (24 grid) rather than in the part's own box */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a named keyframe of an icon, and a part running it */
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
const run = (icon: string, name: string, ms: number, delay = 0, ease = SMOOTH, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${ease} ${delay}ms${fill ? " " + fill : ""}`;
const play = (icon: string, name: string, ms: number, delay = 0) => ({ animation: run(icon, name, ms, delay) });
/** a stroke drawing itself in from its start (or, with `end`, from its end); the part must be listed in `draw` */
const drawKf = (icon: string) =>
  `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}` +
  `@keyframes ki-${icon}-draw-end{from{stroke-dashoffset:-1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0, end = false) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw${end ? "-end" : ""} ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** there and back: rest, a, b, rest */
const step = (icon: string, name: string, a: string, b: string) =>
  kf(icon, name, `0%{transform:none}35%{transform:${a}}70%{transform:${b}}100%{transform:none}`);
/** a small mark that pops in from nothing */
const popKf = (icon: string) =>
  kf(icon, "pop", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.3);opacity:1}100%{transform:none;opacity:1}");
const pop = (icon: string, delay = 0, ms = 420) => ({ animation: run(icon, "pop", ms, delay, SMOOTH, "backwards") });
/** a plus that turns a quarter round (x, y) and springs back to size (a plus looks the same a quarter round) */
const plusKf = (icon: string) =>
  kf(icon, "plus", "0%{transform:none}45%{transform:rotate(90deg) scale(.7)}75%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}");
const plus = (icon: string, x: number, y: number, delay = 0) => ({ ...at(x, y), animation: run(icon, "plus", 600, delay) });
/** a cross that shrinks and twists, then springs back */
const crossKf = (icon: string) =>
  kf(icon, "cross", "0%{transform:none}35%{transform:rotate(-45deg) scale(.6)}70%{transform:rotate(8deg) scale(1.1)}100%{transform:none}");
const cross = (icon: string, x: number, y: number, delay = 0) => ({ ...at(x, y), animation: run(icon, "cross", 600, delay) });
/** a minus that shrinks to nothing along its length and springs back */
const minusKf = (icon: string) => kf(icon, "minus", "0%{transform:none}35%{transform:scaleX(.2)}70%{transform:scaleX(1.15)}100%{transform:none}");
const minus = (icon: string, delay = 0) => ({ animation: run(icon, "minus", 600, delay) });
/** a whole ring breathing in once */
const ringKf = (icon: string) => kf(icon, "ring", "0%{transform:none}35%{transform:scale(.94)}70%{transform:scale(1.03)}100%{transform:none}");
const ring = (icon: string, delay = 0) => ({ animation: run(icon, "ring", 600, delay) });
/** a clipboard's clip lifting and snapping back down on the board */
const clipKf = (icon: string) => kf(icon, "clip", "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}100%{transform:none}");
const clip = (icon: string) => ({ animation: run(icon, "clip", 600) });
/** clock hands making one full turn (or back) round a centre */
const handsKf = (icon: string, deg = 360) => kf(icon, "hands", `from{transform:none}to{transform:rotate(${deg}deg)}`);
const hands = (icon: string, x = 12, y = 12, ms = 700) => ({ ...at(x, y), animation: run(icon, "hands", ms) });
/** a mark that leaves one way and comes back in from the other side (dx, dy: where it goes) */
const throughKf = (icon: string, dx: number, dy: number) =>
  kf(
    icon,
    "through",
    `0%{transform:none;opacity:1}32%{transform:translate(${dx}px,${dy}px);opacity:0}33%{transform:translate(${-dx}px,${-dy}px);opacity:0}100%{transform:none;opacity:1}`,
  );
const through = (icon: string, delay = 0) => ({ animation: run(icon, "through", 650, delay) });
/** the copy behind sliding out from under the front one and back */
const backKf = (icon: string) => kf(icon, "back", "0%{transform:none}40%{transform:translate(-1px,-1px)}100%{transform:none}");
const back = (icon: string) => ({ animation: run(icon, "back", 600) });
/** a coin spinning on its edge round the centre */
const coinKf = (icon: string) => kf(icon, "spin", "0%{transform:none}40%{transform:scaleX(.1)}70%{transform:scaleX(1.05)}100%{transform:none}");
/** several parts turning together round one pivot */
const turning = (parts: string[], icon: string, x: number, y: number, ms = 750, delay = 0) =>
  Object.fromEntries(parts.map((p) => [p, { ...at(x, y), animation: run(icon, "turn", ms, delay) }]));
const turnKf = (icon: string, deg: number) => kf(icon, "turn", `from{transform:none}to{transform:rotate(${deg}deg)}`);

/** a chevron in a ring or square: it folds flat, overshoots to a sharper point and settles, while it steps its way */
const chevron = (icon: string, flat: string, sharp: string, own: string, shift: string): Override => ({
  note: "The chevron folds flat and snaps back to a point as it steps its way inside the frame.",
  motion: { p1: { to: { transform: shift }, animation: run(icon, "fold", 500) } },
  keyframes: kf(icon, "fold", `35%{d:path("${flat}")}70%{d:path("${sharp}")}100%{d:path("${own}")}`),
});
/** two chevrons in a ring stepping their way, the leading one first */
const chevrons = (icon: string, lead: string, follow: string, a: string, b: string, way: string): Override => ({
  note: `The two chevrons step ${way} inside the ring, the leading one first.`,
  motion: { [lead]: { animation: run(icon, "step", 550) }, [follow]: { animation: run(icon, "step", 550, 70) } },
  keyframes: step(icon, "step", a, b),
});
/** a letter in a ring writing itself stroke by stroke, while the ring breathes in */
const letter = (icon: string, ringPart: string, strokes: [part: string, ms: number, delay: number, end?: boolean][], what: string): Override => ({
  note: `The ${what} writes itself stroke by stroke while the ring breathes in.`,
  draw: strokes.map(([p]) => p),
  motion: { [ringPart]: ring(icon), ...Object.fromEntries(strokes.map(([p, ms, d, end]) => [p, draw(icon, ms, d, end)])) },
  keyframes: ringKf(icon) + drawKf(icon),
});
/** a clock face: the hands sweep a full turn and the dial ticks as they stop */
const clock = (icon: string, hour: string): Override => ({
  note: `The hands sweep a full turn round the dial and stop at ${hour}; the dial ticks as they land.`,
  motion: { p1: hands(icon), p0: { animation: run(icon, "tick", 350, 620) } },
  keyframes: handsKf(icon) + kf(icon, "tick", "0%{transform:none}40%{transform:scale(1.05)}100%{transform:none}"),
});
/** a corner arrow: the line runs round the corner and the head arrives from behind, pointing its way */
const corner = (icon: string, from: string, over: string, way: string): Override => ({
  note: `The line runs round the corner and the head arrives pointing ${way}.`,
  draw: ["p1"],
  motion: { p1: draw(icon, 420), p0: { animation: run(icon, "head", 450, 260, SMOOTH, "backwards") } },
  keyframes:
    drawKf(icon) + kf(icon, "head", `0%{transform:${from};opacity:0}60%{transform:${over};opacity:1}100%{transform:none;opacity:1}`),
});
/** a chess piece hopping off its base with a little lean, and the base taking the landing */
const chessPiece = (icon: string, top: string[], base: string, who: string): Override => ({
  note: `The ${who} hops off its base with a little lean and lands back on it.`,
  motion: {
    ...Object.fromEntries(top.map((p) => [p, { ...at(12, 18), animation: run(icon, "hop", 700) }])),
    [base]: { origin: "50% 100%", animation: run(icon, "base", 700) },
  },
  keyframes:
    kf(icon, "hop", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-6deg)}65%{transform:translateY(.2px) rotate(1deg)}100%{transform:none}") +
    kf(icon, "base", "0%,55%{transform:none}65%{transform:scaleY(.85)}100%{transform:none}"),
});
/** the faded ring of the "fading" circles: its solid arc draws itself round */
const fadedArc = (icon: string, delay = 0) => draw(icon, 650, delay);

/** fill areas for outlines the source draws open */
const CLOUD = "M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z";
const BOARD = "M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z";

export const fills: Record<string, string> = {
  // the crown, from its points down to the base (the balls sit on its tips)
  "chess-queen": "M6.5 18 3.571 8.952 5.885 7.663 8.553 10.776 9.684 10.481 10.68 5.499 13.32 5.5 14.315 10.48 15.446 10.776 18.114 7.663 20.428 8.952 17.5 18Z",
  // the tower: battlements and stem down to the base
  "chess-rook": "M6 2h12v5a2 2 0 0 1-2 2l1 9H7l1-9a2 2 0 0 1-2-2Z",
  // the paper body (the ash end and smoke stay strokes)
  cigarette: "M3 12h14v4H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z",
  // the dial, cut straight across the gap the needle leaves through
  "circle-gauge": "M15.6 2.7A10 10 0 1 0 21.3 8.4Z",
  // the sign in two halves, either side of the slash (with clearance from it)
  "circle-letter-p-off": "M7.146 3.257A10 10 0 0 1 20.743 16.854Z M15.652 21.31A10 10 0 0 1 2.691 8.348Z",
  "circle-off": "M8.35 2.69A10 10 0 0 1 21.3 15.65Z M16.854 20.743A10 10 0 0 1 3.257 7.146Z",
  // the board, cut round the clock in its corner
  "clipboard-clock": "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.832L19.5 7.98A8.75 8.75 0 0 0 9 21.25Z",
  "clipboard-minus": BOARD,
  "clipboard-type": BOARD,
  // the board, cut round the pen that lies across its open side
  "clipboard-pen-line": "M6 4h12a2 2 0 0 1 1.73 1L19.876 6.25A4.874 4.874 0 0 0 16.429 7.677L12.418 11.69A4.75 4.75 0 0 0 11.217 13.719L10.38 16.59A3.25 3.25 0 0 0 14.41 20.62L17.28 19.78L18.6 19.5L20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  // the cloud, cut round the round arrow under it
  "cloud-backup": "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607L4.25 11A2.75 2.75 0 0 1 9.246 9.41A7.35 7.35 0 0 1 19.81 15.25Z",
  // the small cloud in front of the moon, closed along its open bottom
  "cloud-moon-rain": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24Z",
  "cloud-rain-wind": CLOUD,
  // the table frame, cut round the cog in its corner
  "columns-3-cog": "M10.6 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.6L20.534 11.748A6.75 6.75 0 0 0 11.748 20.534Z",
};

export const motions: Record<string, Override> = {
  "chess-queen": chessPiece("chess-queen", ["p0", "p1", "p2", "p4", "p5", "p6", "p7"], "p3", "queen"),
  "chess-rook": chessPiece("chess-rook", ["p1", "p2", "p3", "p4", "p5", "p6"], "p0", "rook"),

  "circle-chevron-down": chevron("circle-chevron-down", "m16 12-4 0-4 0", "m16 9.5-4 5-4-5", "m16 10-4 4-4-4", "translateY(1px)"),
  "square-chevron-down": chevron("square-chevron-down", "m16 12-4 0-4 0", "m16 9.5-4 5-4-5", "m16 10-4 4-4-4", "translateY(1px)"),
  "circle-chevron-left": chevron("circle-chevron-left", "m12 16 0-4 0-4", "m14.5 16-5-4 5-4", "m14 16-4-4 4-4", "translateX(-1px)"),
  "square-chevron-left": chevron("square-chevron-left", "m12 16 0-4 0-4", "m14.5 16-5-4 5-4", "m14 16-4-4 4-4", "translateX(-1px)"),
  "circle-chevron-right": chevron("circle-chevron-right", "m12 8 0 4 0 4", "m9.5 8 5 4-5 4", "m10 8 4 4-4 4", "translateX(1px)"),
  "square-chevron-right": chevron("square-chevron-right", "m12 8 0 4 0 4", "m9.5 8 5 4-5 4", "m10 8 4 4-4 4", "translateX(1px)"),
  "circle-chevron-up": chevron("circle-chevron-up", "m8 12 4 0 4 0", "m8 14.5 4-5 4 5", "m8 14 4-4 4 4", "translateY(-1px)"),
  "square-chevron-up": chevron("square-chevron-up", "m8 12 4 0 4 0", "m8 14.5 4-5 4 5", "m8 14 4-4 4 4", "translateY(-1px)"),

  "chevrons-left-right-ellipsis": {
    note: "The two chevrons spread apart and the three dots pop in one after another between them.",
    motion: {
      p3: play("chevrons-left-right-ellipsis", "left", 600),
      p2: play("chevrons-left-right-ellipsis", "right", 600),
      p4: pop("chevrons-left-right-ellipsis", 120),
      p0: pop("chevrons-left-right-ellipsis", 200),
      p1: pop("chevrons-left-right-ellipsis", 280),
    },
    keyframes:
      step("chevrons-left-right-ellipsis", "left", "translateX(-1.2px)", "translateX(.3px)") +
      step("chevrons-left-right-ellipsis", "right", "translateX(1.2px)", "translateX(-.3px)") +
      popKf("chevrons-left-right-ellipsis"),
  },

  "chevrons-right-left": {
    note: "The two chevrons press in towards the middle and spring back out.",
    motion: { p0: play("chevrons-right-left", "in-left", 600), p1: play("chevrons-right-left", "in-right", 600) },
    keyframes:
      step("chevrons-right-left", "in-left", "translateX(-1.4px)", "translateX(.3px)") +
      step("chevrons-right-left", "in-right", "translateX(1.4px)", "translateX(-.3px)"),
  },

  cigarette: {
    note: "The smoke curls up from the tip in two wisps, and the lit end glows.",
    draw: ["p1", "p3"],
    motion: {
      p1: draw("cigarette", 650),
      p3: draw("cigarette", 650, 140),
      p2: { origin: "0% 50%", animation: run("cigarette", "glow", 600) },
    },
    keyframes: drawKf("cigarette") + kf("cigarette", "glow", "0%{transform:none}35%{transform:scaleX(1.5)}70%{transform:scaleX(.9)}100%{transform:none}"),
  },

  "circle-chevrons-down": chevrons("circle-chevrons-down", "p0", "p1", "translateY(1.2px)", "translateY(-.3px)", "down"),
  "circle-chevrons-left": chevrons("circle-chevrons-left", "p0", "p1", "translateX(-1.2px)", "translateX(.3px)", "left"),
  "circle-chevrons-right": chevrons("circle-chevrons-right", "p0", "p1", "translateX(1.2px)", "translateX(-.3px)", "right"),
  "circle-chevrons-up": chevrons("circle-chevrons-up", "p0", "p1", "translateY(-1.2px)", "translateY(.3px)", "up"),

  "circle-dashed-check": {
    note: "The dashes chase each other an eighth of a turn round the circle while the tick draws itself.",
    draw: ["p2"],
    motion: {
      ...Object.fromEntries(
        ["p0", "p3", "p6", "p5", "p1", "p8", "p4", "p7"].map((p, i) => [p, { ...at(12, 12), animation: run("circle-dashed-check", "turn", 650, i * 20) }]),
      ),
      p2: draw("circle-dashed-check", 420, 200),
    },
    keyframes: turnKf("circle-dashed-check", 45) + drawKf("circle-dashed-check"),
  },

  "circle-divide": {
    note: "The two dots part from the bar, which narrows, then they come back together.",
    motion: {
      p3: play("circle-divide", "up", 550),
      p2: play("circle-divide", "down", 550),
      p1: play("circle-divide", "bar", 550),
    },
    keyframes:
      step("circle-divide", "up", "translateY(-1.3px)", "translateY(.3px)") +
      step("circle-divide", "down", "translateY(1.3px)", "translateY(-.3px)") +
      step("circle-divide", "bar", "scaleX(.7)", "scaleX(1.05)"),
  },

  "circle-dot-dashed": {
    note: "The dashes chase each other an eighth of a turn round the dot, which pulses.",
    motion: {
      ...Object.fromEntries(
        ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"].map((p, i) => [p, { ...at(12, 12), animation: run("circle-dot-dashed", "turn", 650, i * 20) }]),
      ),
      p8: play("circle-dot-dashed", "dot", 600),
    },
    keyframes: turnKf("circle-dot-dashed", 45) + step("circle-dot-dashed", "dot", "scale(1.6)", "scale(.85)"),
  },

  "circle-equal": {
    note: "The two lines close together into one and part again.",
    motion: { p1: play("circle-equal", "top", 550), p2: play("circle-equal", "bottom", 550) },
    keyframes: step("circle-equal", "top", "translateY(1.4px)", "translateY(-.3px)") + step("circle-equal", "bottom", "translateY(-1.4px)", "translateY(.3px)"),
  },

  "circle-fading-arrow-up": {
    note: "The arrow rises out of the circle and comes back in from below while the solid arc draws itself round.",
    draw: ["p0"],
    motion: { p1: through("circle-fading-arrow-up"), p2: through("circle-fading-arrow-up"), p0: fadedArc("circle-fading-arrow-up") },
    keyframes: throughKf("circle-fading-arrow-up", 0, -2.5) + drawKf("circle-fading-arrow-up"),
  },

  "circle-fading-check": {
    note: "The solid arc draws itself round and the tick follows it in.",
    draw: ["p0", "p1"],
    motion: { p0: fadedArc("circle-fading-check"), p1: draw("circle-fading-check", 420, 250) },
    keyframes: drawKf("circle-fading-check"),
  },

  "circle-fading-play": {
    note: "The play triangle nudges forward and back while the solid arc draws itself round.",
    draw: ["p0"],
    motion: { p1: play("circle-fading-play", "nudge", 600), p0: fadedArc("circle-fading-play") },
    keyframes: step("circle-fading-play", "nudge", "translateX(1.2px) scale(.94)", "translateX(-.3px)") + drawKf("circle-fading-play"),
  },

  "circle-fading-plus": {
    note: "The plus turns a quarter round its centre while the solid arc draws itself round.",
    draw: ["p0"],
    motion: { p1: plus("circle-fading-plus", 12, 12), p2: plus("circle-fading-plus", 12, 12), p0: fadedArc("circle-fading-plus") },
    keyframes: plusKf("circle-fading-plus") + drawKf("circle-fading-plus"),
  },

  "circle-gauge": {
    note: "The needle sweeps back round the dial from its hub, races past and settles; the hub gives a pulse.",
    motion: {
      p2: { ...at(12, 12), animation: run("circle-gauge", "sweep", 900) },
      p1: play("circle-gauge", "hub", 500),
    },
    keyframes:
      kf("circle-gauge", "sweep", "0%,100%{transform:none}30%{transform:rotate(-90deg)}70%{transform:rotate(25deg)}") +
      step("circle-gauge", "hub", "scale(1.2)", "scale(.95)"),
  },

  "circle-letter-a": letter("circle-letter-a", "p1", [["p2", 450, 0], ["p0", 250, 330]], "A"),
  "circle-letter-b": letter("circle-letter-b", "p1", [["p0", 650, 0]], "B"),
  "circle-letter-d": letter("circle-letter-d", "p1", [["p0", 550, 0]], "D"),
  "circle-letter-e": letter("circle-letter-e", "p2", [["p0", 450, 0], ["p1", 250, 300]], "E"),
  "circle-letter-f": letter("circle-letter-f", "p2", [["p0", 450, 0], ["p1", 250, 300]], "F"),
  "circle-letter-g": letter("circle-letter-g", "p1", [["p0", 600, 0, true]], "G"),
  "circle-letter-h": letter("circle-letter-h", "p3", [["p0", 300, 0], ["p1", 300, 120], ["p2", 250, 280]], "H"),
  "circle-letter-i": letter("circle-letter-i", "p1", [["p0", 350, 0, true]], "I"),
  "circle-letter-j": letter("circle-letter-j", "p1", [["p0", 450, 0]], "J"),
  "circle-letter-k": letter("circle-letter-k", "p3", [["p0", 300, 0, true], ["p2", 300, 150], ["p1", 250, 320]], "K"),
  "circle-letter-l": letter("circle-letter-l", "p1", [["p0", 450, 0]], "L"),
  "circle-letter-m": letter("circle-letter-m", "p1", [["p0", 600, 0]], "M"),
  "circle-letter-n": letter("circle-letter-n", "p1", [["p0", 550, 0]], "N"),
  "circle-letter-o": letter("circle-letter-o", "p1", [["p0", 550, 0]], "O"),
  "circle-letter-q": letter("circle-letter-q", "p2", [["p0", 500, 0], ["p1", 220, 380, true]], "Q"),
  "circle-letter-r": letter("circle-letter-r", "p2", [["p1", 550, 0, true], ["p0", 250, 380]], "R"),
  "circle-letter-s": letter("circle-letter-s", "p1", [["p0", 550, 0]], "S"),
  "circle-letter-t": letter("circle-letter-t", "p2", [["p1", 280, 0], ["p0", 300, 180, true]], "T"),
  "circle-letter-u": letter("circle-letter-u", "p1", [["p0", 500, 0, true]], "U"),
  "circle-letter-v": letter("circle-letter-v", "p1", [["p0", 450, 0]], "V"),
  "circle-letter-w": letter("circle-letter-w", "p1", [["p0", 600, 0, true]], "W"),
  "circle-letter-x": letter("circle-letter-x", "p2", [["p1", 300, 0], ["p0", 300, 200, true]], "X"),
  "circle-letter-y": letter("circle-letter-y", "p2", [["p0", 380, 0], ["p1", 220, 300]], "Y"),
  "circle-letter-z": letter("circle-letter-z", "p1", [["p0", 550, 0]], "Z"),

  "circle-letter-p-off": {
    note: "The P writes itself on the sign, then the slash strikes through it and the sign shudders.",
    draw: ["p0", "p4", "p2"],
    motion: {
      p0: draw("circle-letter-p-off", 380, 0, true),
      p4: draw("circle-letter-p-off", 200, 300),
      p2: draw("circle-letter-p-off", 300, 420),
      p1: play("circle-letter-p-off", "shake", 400),
      p3: play("circle-letter-p-off", "shake", 400),
    },
    keyframes:
      drawKf("circle-letter-p-off") +
      kf("circle-letter-p-off", "shake", "0%,70%{transform:none}78%{transform:translateX(-.6px)}86%{transform:translateX(.5px)}94%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "circle-off": {
    note: "The slash strikes across and the broken ring shudders as it hits.",
    draw: ["p0"],
    motion: { p0: draw("circle-off", 380), p1: play("circle-off", "shake", 650), p2: play("circle-off", "shake", 650) },
    keyframes:
      drawKf("circle-off") +
      kf("circle-off", "shake", "0%,45%{transform:none}55%{transform:translateX(-.6px)}68%{transform:translateX(.5px)}82%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "circle-pile": {
    note: "The top ball hops up off the pile and lands back, and the two below it give under the landing.",
    motion: {
      p1: play("circle-pile", "hop", 650),
      p5: play("circle-pile", "give", 650),
      p2: play("circle-pile", "give", 650),
    },
    keyframes:
      kf("circle-pile", "hop", "0%{transform:none}35%{transform:translateY(-1.8px)}60%{transform:translateY(.2px) scale(1.08,.9)}80%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("circle-pile", "give", "0%,50%{transform:none}62%{transform:translateY(.4px) scale(1.06,.92)}100%{transform:none}"),
  },

  "circle-pound-sterling": {
    note: "The coin spins on its edge and the pound sign comes round with it.",
    motion: {
      p0: { ...at(12, 12), animation: run("circle-pound-sterling", "spin", 700) },
      p1: { ...at(12, 12), animation: run("circle-pound-sterling", "spin", 700, 30) },
      p2: { ...at(12, 12), animation: run("circle-pound-sterling", "spin", 700, 30) },
      p3: { ...at(12, 12), animation: run("circle-pound-sterling", "spin", 700, 30) },
    },
    keyframes: coinKf("circle-pound-sterling"),
  },

  "circle-power": {
    note: "The power line drops in, the arc draws itself round it and the button presses in.",
    draw: ["p2"],
    motion: {
      p1: { animation: run("circle-power", "line", 500, 0, SMOOTH, "backwards") },
      p2: draw("circle-power", 600, 80),
      p0: ring("circle-power"),
    },
    keyframes:
      kf("circle-power", "line", "0%{transform:translateY(-3px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}") +
      drawKf("circle-power") +
      ringKf("circle-power"),
  },

  "circle-slash-2": {
    note: "The slash swings into place across the ring, which tightens.",
    motion: {
      p0: play("circle-slash-2", "ring", 500),
      p1: { animation: run("circle-slash-2", "swing", 550, 0, SPRING) },
    },
    keyframes:
      kf("circle-slash-2", "ring", "0%{transform:none}35%{transform:scale(.92)}100%{transform:none}") +
      kf("circle-slash-2", "swing", "0%{transform:rotate(-90deg) scale(.5)}100%{transform:none}"),
  },

  "circle-small": {
    note: "The small circle squashes flat and springs back round.",
    motion: { p0: play("circle-small", "squash", 600) },
    keyframes: kf("circle-small", "squash", "0%{transform:none}30%{transform:scale(1.18,.82)}60%{transform:scale(.92,1.08)}80%{transform:scale(1.03,.97)}100%{transform:none}"),
  },

  "circle-user-plain": {
    note: "The head lifts and the shoulders square up.",
    motion: {
      p1: { to: { transform: "translateY(-1.2px)" } },
      p2: { origin: "50% 100%", to: { transform: "scale(1.08)" }, delay: 60 },
    },
  },

  "clef-alto": {
    note: "The two bars draw themselves down and the curls rock against them.",
    draw: ["p2", "p0"],
    motion: {
      p2: draw("clef-alto", 320),
      p0: draw("clef-alto", 320, 80),
      p1: { ...at(10, 12), animation: run("clef-alto", "rock", 650, 120) },
    },
    keyframes:
      drawKf("clef-alto") +
      kf("clef-alto", "rock", "0%{transform:none}30%{transform:rotate(-8deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "clef-bass": {
    note: "The clef writes itself from its head down, and its two dots pop in after it.",
    draw: ["p2"],
    motion: {
      p3: pop("clef-bass", 0, 380),
      p2: draw("clef-bass", 600, 80),
      p1: pop("clef-bass", 500),
      p0: pop("clef-bass", 580),
    },
    keyframes: popKf("clef-bass") + drawKf("clef-bass"),
  },

  "clipboard-clock": {
    note: "The clip snaps and the clock's hands sweep a full turn in the corner.",
    motion: { p4: clip("clipboard-clock"), p0: hands("clipboard-clock", 16, 16), p3: ring("clipboard-clock", 500) },
    keyframes: clipKf("clipboard-clock") + handsKf("clipboard-clock") + ringKf("clipboard-clock"),
  },

  "clipboard-minus": {
    note: "The clip snaps and the minus shrinks away and springs back.",
    motion: { p0: clip("clipboard-minus"), p2: minus("clipboard-minus", 80) },
    keyframes: clipKf("clipboard-minus") + minusKf("clipboard-minus"),
  },

  "clipboard-pen-line": {
    note: "The pen scribbles along the line, which signs itself beneath it.",
    draw: ["p3"],
    motion: {
      p4: { origin: "0% 100%", animation: run("clipboard-pen-line", "sign", 700) },
      p3: draw("clipboard-pen-line", 350, 150),
    },
    keyframes:
      kf(
        "clipboard-pen-line",
        "sign",
        "0%{transform:none}20%{transform:translate(-.6px,.3px) rotate(-4deg)}40%{transform:translate(.4px,-.2px) rotate(3deg)}60%{transform:translate(-.4px,.2px) rotate(-3deg)}80%{transform:translate(.2px,0) rotate(1deg)}100%{transform:none}",
      ) + drawKf("clipboard-pen-line"),
  },

  "clipboard-type": {
    note: "The clip snaps and the T writes itself on the board: the top, then the stem, then its foot.",
    draw: ["p2", "p4", "p3"],
    motion: {
      p0: clip("clipboard-type"),
      p2: draw("clipboard-type", 300, 60),
      p4: draw("clipboard-type", 250, 260),
      p3: draw("clipboard-type", 180, 420),
    },
    keyframes: clipKf("clipboard-type") + drawKf("clipboard-type"),
  },

  "clock-1": clock("clock-1", "one"),
  "clock-2": clock("clock-2", "two"),
  "clock-3": clock("clock-3", "three"),
  "clock-4": clock("clock-4", "four"),
  "clock-5": clock("clock-5", "five"),
  "clock-6": clock("clock-6", "six"),
  "clock-7": clock("clock-7", "seven"),
  "clock-8": clock("clock-8", "eight"),
  "clock-9": clock("clock-9", "nine"),
  "clock-10": clock("clock-10", "ten"),
  "clock-11": clock("clock-11", "eleven"),
  "clock-12": clock("clock-12", "twelve"),

  "clock-arrow-down": {
    note: "The hands sweep once round while the arrow beside the face drops out and comes back in from above.",
    motion: { p0: hands("clock-arrow-down"), p2: through("clock-arrow-down", 60), p3: through("clock-arrow-down", 60) },
    keyframes: handsKf("clock-arrow-down") + throughKf("clock-arrow-down", 0, 2),
  },
  "clock-arrow-left": {
    note: "The hands turn back once round while the arrow beside the face leaves to the left and comes back in.",
    motion: { p0: hands("clock-arrow-left"), p2: through("clock-arrow-left", 60), p3: through("clock-arrow-left", 60) },
    keyframes: handsKf("clock-arrow-left", -360) + throughKf("clock-arrow-left", -2, 0),
  },
  "clock-arrow-right": {
    note: "The hands turn on once round while the arrow beside the face leaves to the right and comes back in.",
    motion: { p0: hands("clock-arrow-right"), p2: through("clock-arrow-right", 60), p3: through("clock-arrow-right", 60) },
    keyframes: handsKf("clock-arrow-right") + throughKf("clock-arrow-right", 1.8, 0),
  },

  "clock-fading": {
    note: "The hands sweep a full turn while the solid arc of the faded dial draws itself round.",
    draw: ["p0"],
    motion: { p1: hands("clock-fading"), p0: fadedArc("clock-fading") },
    keyframes: handsKf("clock-fading") + drawKf("clock-fading"),
  },

  "closed-caption": {
    note: "The screen blinks and the two Cs write themselves on it, one after the other.",
    draw: ["p0", "p1"],
    motion: { p2: play("closed-caption", "blink", 500), p0: draw("closed-caption", 380, 60), p1: draw("closed-caption", 380, 180) },
    keyframes: kf("closed-caption", "blink", "0%{transform:none}30%{transform:scale(.95)}100%{transform:none}") + drawKf("closed-caption"),
  },

  "cloud-backup": {
    note: "The round arrow under the cloud turns back a little and springs on, and the cloud lifts.",
    motion: {
      p1: { ...at(12.5, 16), animation: run("cloud-backup", "back", 700) },
      p2: { ...at(12.5, 16), animation: run("cloud-backup", "back", 700) },
      p0: play("cloud-backup", "cloud", 800),
    },
    keyframes:
      kf("cloud-backup", "back", "0%{transform:none}40%{transform:rotate(-45deg)}75%{transform:rotate(6deg)}100%{transform:none}") +
      step("cloud-backup", "cloud", "translateY(-.8px)", "translateY(.3px)"),
  },

  "cloud-moon-rain": {
    note: "The cloud drifts across the moon, which rocks, and two drops fall and come back.",
    motion: {
      p2: play("cloud-moon-rain", "drift", 800),
      p1: { origin: "60% 40%", animation: run("cloud-moon-rain", "rock", 800) },
      p3: play("cloud-moon-rain", "fall", 700),
      p0: play("cloud-moon-rain", "fall", 700, 120),
    },
    keyframes:
      step("cloud-moon-rain", "drift", "translateX(-.8px)", "translateX(.3px)") +
      kf("cloud-moon-rain", "rock", "0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(3deg)}100%{transform:none}") +
      kf("cloud-moon-rain", "fall", "0%{transform:none;opacity:1}45%{transform:translateY(1.6px);opacity:0}46%{transform:translateY(-1.5px);opacity:0}100%{transform:none;opacity:1}"),
  },

  "cloud-rain-wind": {
    note: "The rain blows down at a slant out of the cloud and comes back in, streak by streak.",
    motion: {
      p0: play("cloud-rain-wind", "cloud", 800),
      p2: play("cloud-rain-wind", "fall", 700),
      p1: play("cloud-rain-wind", "fall", 700, 90),
      p3: play("cloud-rain-wind", "fall", 700, 180),
    },
    keyframes:
      step("cloud-rain-wind", "cloud", "translateY(-.8px)", "translateY(.3px)") +
      kf("cloud-rain-wind", "fall", "0%{transform:none;opacity:1}45%{transform:translate(-.9px,2px);opacity:0}46%{transform:translate(.9px,-2px);opacity:0}100%{transform:none;opacity:1}"),
  },

  "square-code": {
    note: "The two brackets spread apart and spring back in.",
    motion: { p0: play("square-code", "left", 600), p1: play("square-code", "right", 600) },
    keyframes: step("square-code", "left", "translateX(-1.2px)", "translateX(.3px)") + step("square-code", "right", "translateX(1.2px)", "translateX(-.3px)"),
  },

  "columns-3-cog": {
    note: "The cog in the corner of the table turns a quarter round.",
    motion: turning(["p1", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p11"], "columns-3-cog", 18, 18, 750),
    keyframes: turnKf("columns-3-cog", 90),
  },

  "columns-4": {
    note: "The outer dividers slide out to the sides and spring back, and the middle one gives a little stretch.",
    motion: {
      p1: play("columns-4", "left", 600),
      p2: play("columns-4", "mid", 600, 40),
      p3: play("columns-4", "right", 600, 70),
    },
    keyframes:
      step("columns-4", "left", "translateX(-1.2px)", "translateX(.3px)") +
      step("columns-4", "mid", "scaleY(.88)", "scaleY(1.02)") +
      step("columns-4", "right", "translateX(1.2px)", "translateX(-.3px)"),
  },

  "contact-round": {
    note: "The person on the card nods, head then shoulders, and the binder rings bob.",
    motion: {
      p3: play("contact-round", "nod", 550),
      p1: play("contact-round", "nod", 550, 70),
      p0: play("contact-round", "ring", 500, 40),
      p2: play("contact-round", "ring", 500),
    },
    keyframes:
      kf("contact-round", "nod", "0%{transform:none}35%{transform:translateY(-.9px)}70%{transform:translateY(.2px)}100%{transform:none}") +
      kf("contact-round", "ring", "0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}"),
  },

  "copy-squares": {
    note: "The copy behind slides out from under the front one and back, and the front one presses in.",
    motion: { p1: back("copy-squares"), p0: play("copy-squares", "press", 550, 60) },
    keyframes: backKf("copy-squares") + step("copy-squares", "press", "scale(.95)", "scale(1.02)"),
  },

  copyleft: {
    note: "The reversed C writes itself while the ring breathes in.",
    draw: ["p1"],
    motion: { p1: draw("copyleft", 520), p0: ring("copyleft") },
    keyframes: drawKf("copyleft") + ringKf("copyleft"),
  },

  "copy-minus": {
    note: "The copy behind slides out a little and back while the minus on the front shrinks away and springs back.",
    motion: { p2: back("copy-minus"), p0: minus("copy-minus", 80) },
    keyframes: backKf("copy-minus") + minusKf("copy-minus"),
  },

  "copy-slash": {
    note: "The copy behind slides out a little and back while the slash strikes across the front.",
    draw: ["p0"],
    motion: { p2: back("copy-slash"), p0: draw("copy-slash", 350, 100) },
    keyframes: backKf("copy-slash") + drawKf("copy-slash"),
  },

  "copy-x": {
    note: "The copy behind slides out a little and back while the cross twists on the front.",
    motion: { p0: back("copy-x"), p2: cross("copy-x", 15, 15, 80), p3: cross("copy-x", 15, 15, 80) },
    keyframes: backKf("copy-x") + crossKf("copy-x"),
  },

  "corner-left-down": corner("corner-left-down", "translateY(-2px)", "translateY(.6px)", "down"),
  "corner-left-up": corner("corner-left-up", "translateY(2px)", "translateY(-.6px)", "up"),
  "corner-right-down": corner("corner-right-down", "translateY(-2px)", "translateY(.6px)", "down"),
  "corner-right-up": corner("corner-right-up", "translateY(2px)", "translateY(-.6px)", "up"),

  "creative-commons": {
    note: "The two Cs write themselves one after the other while the ring breathes in.",
    draw: ["p1", "p2"],
    motion: { p0: ring("creative-commons"), p1: draw("creative-commons", 420, 40), p2: draw("creative-commons", 420, 160) },
    keyframes: ringKf("creative-commons") + drawKf("creative-commons"),
  },
};
