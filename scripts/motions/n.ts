import type { Entry, Override } from "./types";
import type { PartMotion } from "../../packages/core/src/types";

/** Batch n: its icons (pnpm import-icons n) and their motions. */
export const list: Entry[] = [
  ["SquareActivity", "square-activity", "Activity in a square", "status", "draw", ["pulse", "heartbeat", "stats", "monitor"], "The line traces itself."],
  ["AlarmClockMinus", "alarm-clock-minus", "Remove alarm", "actions", "shake", ["alarm", "remove", "delete", "reminder"], "The minus draws in as the bells ring."],
  ["AlignCenterHorizontal", "align-center-horizontal", "Align middles", "development", "pop", ["align", "middle", "layout", "objects"], "The blocks slide onto the middle line."],
  ["AlignEndHorizontal", "align-end-horizontal", "Align bottoms", "development", "nudge-down", ["align", "bottom", "layout", "objects"], "The blocks drop to the bottom line."],
  ["AlignEndVertical", "align-end-vertical", "Align right edges", "development", "nudge-right", ["align", "right", "layout", "objects"], "The blocks slide to the right line."],
  ["AlignHorizontalDistributeEnd", "align-horizontal-distribute-end", "Distribute right edges", "development", "pop", ["distribute", "spacing", "layout", "right"], "The blocks spread out to their lines."],
  ["AlignHorizontalDistributeStart", "align-horizontal-distribute-start", "Distribute left edges", "development", "pop", ["distribute", "spacing", "layout", "left"], "The blocks spread out to their lines."],
  ["AlignHorizontalJustifyCenter", "align-horizontal-justify-center", "Centre side by side", "development", "pop", ["justify", "center", "layout", "horizontal"], "The blocks close in on the centre line."],
  ["AlignHorizontalJustifyEnd", "align-horizontal-justify-end", "Pack to the right", "development", "nudge-right", ["justify", "right", "layout", "horizontal"], "The blocks pack against the right line."],
  ["AlignHorizontalJustifyStart", "align-horizontal-justify-start", "Pack to the left", "development", "nudge-left", ["justify", "left", "layout", "horizontal"], "The blocks pack against the left line."],
  ["AlignHorizontalSpaceAround", "align-horizontal-space-around", "Space around", "development", "pop", ["spacing", "space around", "layout", "horizontal"], "The block settles between the lines."],
  ["AlignHorizontalSpaceBetween", "align-horizontal-space-between", "Space between", "development", "pop", ["spacing", "space between", "layout", "horizontal"], "The blocks push out to the edges."],
  ["AlignStartHorizontal", "align-start-horizontal", "Align tops", "development", "nudge-up", ["align", "top", "layout", "objects"], "The blocks rise to the top line."],
  ["AlignStartVertical", "align-start-vertical", "Align left edges", "development", "nudge-left", ["align", "left", "layout", "objects"], "The blocks slide to the left line."],
  ["AlignVerticalDistributeEnd", "align-vertical-distribute-end", "Distribute bottoms", "development", "pop", ["distribute", "spacing", "layout", "bottom"], "The blocks spread out to their lines."],
  ["AlignVerticalDistributeStart", "align-vertical-distribute-start", "Distribute tops", "development", "pop", ["distribute", "spacing", "layout", "top"], "The blocks spread out to their lines."],
  ["AlignVerticalJustifyCenter", "align-vertical-justify-center", "Centre one above the other", "development", "pop", ["justify", "center", "layout", "vertical"], "The blocks close in on the centre line."],
  ["AlignVerticalJustifyEnd", "align-vertical-justify-end", "Pack to the bottom", "development", "nudge-down", ["justify", "bottom", "layout", "vertical"], "The blocks pack against the bottom line."],
  ["AlignVerticalJustifyStart", "align-vertical-justify-start", "Pack to the top", "development", "nudge-up", ["justify", "top", "layout", "vertical"], "The blocks pack against the top line."],
  ["AlignVerticalSpaceAround", "align-vertical-space-around", "Space around (vertical)", "development", "pop", ["spacing", "space around", "layout", "vertical"], "The block settles between the lines."],
  ["AlignVerticalSpaceBetween", "align-vertical-space-between", "Space between (vertical)", "development", "pop", ["spacing", "space between", "layout", "vertical"], "The blocks push out to the edges."],
  ["Ampersands", "ampersands", "Ampersands", "text", "draw", ["and", "symbols", "logical and", "operator"], "The ampersands write themselves."],
  ["Amphora", "amphora", "Amphora", "food", "wiggle", ["vase", "jar", "wine", "oil", "ancient"], "The jar rocks."],
  ["Anvil", "anvil", "Anvil", "app", "bounce", ["forge", "blacksmith", "metal", "heavy"], "The anvil rings under a blow."],
  ["AppWindowMac", "app-window-mac", "App window (Mac)", "app", "pop", ["window", "app", "mac", "browser"], "The window springs open."],
  ["ArchiveArrowDown", "archive-arrow-down", "Store in archive", "files", "nudge-down", ["archive", "store", "box", "save"], "The arrow drops into the box."],
  ["ArmenianDram", "armenian-dram", "Armenian dram", "commerce", "draw", ["money", "currency", "price", "amd"], "It draws itself."],
  ["ArrowBigDownDash", "arrow-big-down-dash", "Big arrow down to dash", "actions", "nudge-down", ["download", "down", "arrow", "save"], "The arrow drops."],
  ["ArrowBigLeft", "arrow-big-left", "Back", "navigation", "nudge-left", ["back", "previous", "left", "arrow"], "The arrow pushes back."],
  ["ArrowBigLeftDash", "arrow-big-left-dash", "Big arrow left from dash", "navigation", "nudge-left", ["back", "left", "arrow", "undo"], "The arrow pushes back."],
  ["ArrowBigRightDash", "arrow-big-right-dash", "Big arrow right from dash", "navigation", "nudge-right", ["forward", "right", "arrow", "next"], "The arrow pushes forward."],
  ["ArrowBigUpDash", "arrow-big-up-dash", "Big arrow up from dash", "actions", "nudge-up", ["upload", "up", "arrow", "caps lock"], "The arrow jumps up."],
  ["ArrowDown10", "arrow-down-1-0", "Sort 1 to 0 down", "actions", "nudge-down", ["sort", "numeric", "descending", "numbers"], "The arrow draws down beside the numbers."],
  ["ArrowDownFromLine", "arrow-down-from-line", "Arrow down from line", "navigation", "nudge-down", ["down", "drop", "lower", "arrow"], "The arrow leaves the line."],
  ["ArrowDownLeft", "arrow-down-left", "Arrow down left", "navigation", "nudge-left", ["diagonal", "down", "left", "arrow"], "The arrow shoots off down and to the left."],
  ["CircleArrowOutDownLeft", "circle-arrow-out-down-left", "Out of circle down left", "navigation", "nudge-left", ["exit", "out", "leave", "arrow"], "The arrow leaves the circle."],
  ["SquareArrowOutDownLeft", "square-arrow-out-down-left", "Out of square down left", "navigation", "nudge-left", ["exit", "out", "leave", "arrow"], "The arrow leaves the box."],
  ["SquareArrowDownLeft", "square-arrow-down-left", "Arrow down left in a square", "navigation", "nudge-left", ["diagonal", "down", "left", "arrow"], "The arrow slides out and back in the square."],
  ["ArrowDownNarrowWide", "arrow-down-narrow-wide", "Sort narrow to wide", "actions", "nudge-down", ["sort", "ascending", "order", "bars"], "The bars grow in turn as the arrow falls."],
  ["CircleArrowOutDownRight", "circle-arrow-out-down-right", "Out of circle down right", "navigation", "nudge-right", ["exit", "out", "leave", "arrow"], "The arrow leaves the circle."],
  ["SquareArrowOutDownRight", "square-arrow-out-down-right", "Out of square down right", "navigation", "nudge-right", ["exit", "out", "leave", "arrow"], "The arrow leaves the box."],
  ["SquareArrowDownRight", "square-arrow-down-right", "Arrow down right in a square", "navigation", "nudge-right", ["diagonal", "down", "right", "arrow"], "The arrow slides out and back in the square."],
  ["SquareArrowDown", "square-arrow-down", "Arrow down in a square", "navigation", "nudge-down", ["down", "lower", "arrow", "box"], "The arrow slides out and back in the square."],
  ["ArrowDownToDot", "arrow-down-to-dot", "Arrow down to dot", "navigation", "nudge-down", ["down", "point", "target", "arrow"], "The arrow drops onto the dot."],
  ["ArrowDownUp", "arrow-down-up", "Sort (down up)", "actions", "pop", ["sort", "reorder", "swap", "up down"], "The two arrows pass each other."],
  ["ArrowDownZA", "arrow-down-z-a", "Sort Z to A down", "actions", "nudge-down", ["sort", "alphabetical", "reverse", "za"], "The letters swap and the arrow points down."],
  ["ArrowLeftFromLine", "arrow-left-from-line", "Arrow left from line", "navigation", "nudge-left", ["left", "back", "leave", "arrow"], "The arrow leaves the line."],
  ["ArrowLeftRight", "arrow-left-right", "Left and right", "actions", "pop", ["swap", "horizontal", "both ways", "exchange"], "The two arrows pass each other."],
  ["SquareArrowLeft", "square-arrow-left", "Arrow left in a square", "navigation", "nudge-left", ["back", "left", "arrow", "box"], "The arrow slides out and back in the square."],
  ["ArrowRight", "arrow-right-plain", "Arrow right (plain)", "navigation", "nudge-right", ["next", "forward", "right", "arrow"], "The arrow steps forward."],
  ["ArrowRightFromLine", "arrow-right-from-line", "Arrow right from line", "navigation", "nudge-right", ["right", "forward", "leave", "arrow"], "The arrow leaves the line."],
  ["SquareArrowRight", "square-arrow-right", "Arrow right in a square", "navigation", "nudge-right", ["next", "right", "arrow", "box"], "The arrow slides out and back in the square."],
  ["ArrowsUpFromLine", "arrows-up-from-line", "Arrows up from line", "actions", "nudge-up", ["up", "upload", "rise", "arrows"], "The arrows rise one after the other."],
  ["ArrowUp01", "arrow-up-0-1", "Sort 0 to 1 up", "actions", "nudge-up", ["sort", "numeric", "ascending", "numbers"], "The arrow draws up beside the numbers."],
  ["ArrowUp10", "arrow-up-1-0", "Sort 1 to 0 up", "actions", "nudge-up", ["sort", "numeric", "descending", "numbers"], "The arrow draws up beside the numbers."],
  ["ArrowUpAZ", "arrow-up-a-z", "Sort A to Z up", "actions", "nudge-up", ["sort", "alphabetical", "order", "az"], "The letters swap and the arrow points up."],
  ["ArrowUpFromDot", "arrow-up-from-dot", "Arrow up from dot", "navigation", "nudge-up", ["up", "launch", "rise", "arrow"], "The arrow lifts off the dot."],
  ["ArrowUpFromLine", "arrow-up-from-line", "Arrow up from line", "navigation", "nudge-up", ["up", "upload", "raise", "arrow"], "The arrow leaves the line."],
  ["ArrowUpLeft", "arrow-up-left", "Arrow up left", "navigation", "nudge-up", ["diagonal", "up", "left", "arrow"], "The arrow shoots off up and to the left."],
  ["CircleArrowOutUpLeft", "circle-arrow-out-up-left", "Out of circle up left", "navigation", "nudge-up", ["exit", "out", "leave", "arrow"], "The arrow leaves the circle."],
  ["SquareArrowOutUpLeft", "square-arrow-out-up-left", "Out of square up left", "navigation", "nudge-up", ["exit", "out", "leave", "arrow"], "The arrow leaves the box."],
  ["SquareArrowUpLeft", "square-arrow-up-left", "Arrow up left in a square", "navigation", "nudge-up", ["diagonal", "up", "left", "arrow"], "The arrow slides out and back in the square."],
  ["CircleArrowOutUpRight", "circle-arrow-out-up-right", "Out of circle up right", "navigation", "nudge-up", ["exit", "external", "open", "arrow"], "The arrow leaves the circle."],
  ["SquareArrowOutUpRight", "square-arrow-out-up-right", "Open outside (square)", "navigation", "nudge-up", ["external", "open", "link", "new window"], "The arrow leaves the box."],
  ["SquareArrowUpRight", "square-arrow-up-right", "Arrow up right in a square", "navigation", "nudge-up", ["diagonal", "up", "right", "arrow"], "The arrow slides out and back in the square."],
  ["SquareArrowUp", "square-arrow-up", "Arrow up in a square", "navigation", "nudge-up", ["up", "top", "arrow", "box"], "The arrow slides out and back in the square."],
  ["ArrowUpWideNarrow", "arrow-up-wide-narrow", "Sort wide to narrow", "actions", "nudge-up", ["sort", "descending", "order", "bars"], "The bars shrink in turn as the arrow rises."],
  ["ArrowUpZA", "arrow-up-z-a", "Sort Z to A up", "actions", "nudge-up", ["sort", "alphabetical", "reverse", "za"], "The letters swap and the arrow points up."],
  ["SquareAsterisk", "square-asterisk", "Asterisk in a square", "text", "spin-90", ["required", "star", "footnote", "wildcard"], "The asterisk spins a notch."],
  ["Asterism", "asterism", "Asterism", "text", "spin-90", ["section break", "stars", "typography", "divider"], "The stars twinkle in turn."],
  ["Astroid", "astroid", "Astroid", "shapes", "pop", ["star", "curve", "geometry", "sparkle"], "The points stretch and settle."],
  ["AudioLinesOff", "audio-lines-off", "Audio off", "media", "shake", ["audio", "mute", "off", "sound"], "The slash strikes the bars."],
  ["AudioLinesX", "audio-lines-x", "Audio error", "media", "shake", ["audio", "error", "remove", "sound"], "The bars drop and the cross draws in."],
  ["AzerbaijaniManat", "azerbaijani-manat", "Azerbaijani manat", "commerce", "draw", ["money", "currency", "price", "azn"], "It draws itself."],
  ["BadgeCent", "badge-cent", "Price in cents", "commerce", "pop", ["price", "money", "cent", "cost"], "The badge turns and the sign flips."],
  ["BadgeEuro", "badge-euro", "Price in euros", "commerce", "pop", ["price", "money", "euro", "cost"], "The badge turns and the sign flips."],
  ["BadgeQuestionMark", "badge-question-mark", "Badge help", "status", "pop", ["help", "question", "unknown", "badge"], "The badge turns and the question mark nods."],
  ["BadgeIndianRupee", "badge-indian-rupee", "Price in rupees", "commerce", "pop", ["price", "money", "rupee", "inr"], "The badge turns and the sign flips."],
  ["BadgeInfo", "badge-info", "Badge info", "status", "pop", ["info", "information", "details", "badge"], "The badge turns and the i drops in."],
  ["BadgeJapaneseYen", "badge-japanese-yen", "Price in yen", "commerce", "pop", ["price", "money", "yen", "jpy"], "The badge turns and the sign flips."],
  ["BadgeMinus", "badge-minus", "Badge minus", "status", "pop", ["remove", "minus", "badge", "less"], "The badge turns and the minus draws in."],
  ["BadgePlus", "badge-plus", "Badge plus", "status", "pop", ["add", "plus", "badge", "new"], "The badge turns and the plus spins in."],
  ["BadgePoundSterling", "badge-pound-sterling", "Price in pounds", "commerce", "pop", ["price", "money", "pound", "gbp"], "The badge turns and the sign flips."],
  ["BadgeRussianRuble", "badge-russian-ruble", "Price in rubles", "commerce", "pop", ["price", "money", "ruble", "rub"], "The badge turns and the sign flips."],
  ["BadgeSwissFranc", "badge-swiss-franc", "Price in francs", "commerce", "pop", ["price", "money", "franc", "chf"], "The badge turns and the sign flips."],
  ["BadgeTurkishLira", "badge-turkish-lira", "Price in lira", "commerce", "pop", ["price", "money", "lira", "try"], "The badge turns and the sign flips."],
  ["BadgeX", "badge-x", "Badge cancel", "status", "shake", ["cancel", "remove", "badge", "x"], "The badge shakes and the cross draws in."],
  ["BallWave", "ball-wave", "Ball on a wave", "travel", "float", ["beach", "ball", "sea", "pool", "summer"], "The ball bobs on the waves."],
  ["BangladeshiTaka", "bangladeshi-taka", "Bangladeshi taka", "commerce", "draw", ["money", "currency", "price", "bdt"], "It draws itself."],
  ["BanknoteArrowDown", "banknote-arrow-down", "Receive money", "commerce", "nudge-down", ["receive", "deposit", "money", "income"], "The arrow drops onto the note."],
  ["BanknoteX", "banknote-x", "Payment failed", "commerce", "shake", ["failed", "declined", "money", "cancel"], "The note shakes and the cross draws in."],
  ["ChartNoAxesColumnIncreasing", "chart-no-axes-column-increasing", "Rising bars", "charts", "bounce", ["chart", "bars", "growth", "signal"], "The bars grow one after another."],
  ["ChartNoAxesColumn", "chart-no-axes-column", "Bars", "charts", "bounce", ["chart", "bars", "stats", "columns"], "The bars grow one after another."],
  ["ChartColumnIncreasing", "chart-column-increasing", "Rising column chart", "charts", "bounce", ["chart", "growth", "increase", "columns"], "The columns grow from the axis."],
  ["ChartColumnBig", "chart-column-big", "Big column chart", "charts", "bounce", ["chart", "columns", "stats", "analytics"], "The columns grow from the axis."],
  ["ChartBarBig", "chart-bar-big", "Big bar chart", "charts", "bounce", ["chart", "bars", "horizontal", "analytics"], "The bars grow out from the axis."],
  ["Barrel", "barrel", "Barrel", "food", "wiggle", ["barrel", "cask", "wine", "storage"], "The barrel rocks on its base."],
  ["BatteryMedium", "battery-medium", "Battery half", "devices", "pop", ["battery", "half", "power", "charge"], "The bars fill one after another."],
];


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
const vb = (origin: string) => ({ box: "view-box" as const, origin });
const each = (parts: string[], m: (i: number) => PartMotion): Record<string, PartMotion> => Object.fromEntries(parts.map((p, i) => [p, m(i)]));

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
const spinIn = "0%{transform:rotate(-90deg) scale(.4);opacity:0}60%{transform:rotate(10deg) scale(1.1);opacity:1}100%{transform:none;opacity:1}";
const grow = (axis: "X" | "Y") => `0%{transform:scale${axis}(0)}60%{transform:scale${axis}(1.1)}100%{transform:none}`;
const squeeze = (axis: "X" | "Y", s: number) => `0%{transform:none}35%{transform:scale${axis}(${s})}70%{transform:scale${axis}(1.05)}100%{transform:none}`;
const hop = "0%{transform:none}30%{transform:translateY(-1.1px)}60%{transform:translateY(.25px)}100%{transform:none}";
/** a coin or sign seen turning edge-on and back */
const flip = "0%{transform:none}35%{transform:scaleX(.15)}70%{transform:scaleX(1.06)}100%{transform:none}";
/** slides in from an offset, overshoots a little and lands */
const slideIn = (x: number, y: number) => `0%{transform:${T(x, y)}}55%{transform:${T(-x * 0.2, -y * 0.2)}}100%{transform:none}`;
/** draws back, then runs ahead into a stop */
const runTo = (x: number, y: number) => `0%{transform:none}30%{transform:${T(-x, -y)}}55%{transform:${T(x * 0.6, y * 0.6)}}100%{transform:none}`;
/** a stop that takes the knock of something running into it */
const knock = (x: number, y: number) => `0%,45%{transform:none}57%{transform:${T(x, y)}}80%{transform:none}`;
/** leaves its line and comes back */
const leave = (x: number, y: number) => `0%{transform:none}35%{transform:${T(x, y)}}65%{transform:${T(-x * 0.15, -y * 0.15)}}100%{transform:none}`;
/** the line a thing pushes off from gives the other way */
const recoil = (x: number, y: number) => `0%,10%{transform:none}30%{transform:${T(x, y)}}60%{transform:none}`;
/** a block dropping onto (or pressed against) its guide: away, then back in with a squash along the push */
const settle = (x: number, y: number) =>
  `0%{transform:none}30%{transform:${T(x, y)}}55%{transform:scale(${x ? 0.94 : 1},${y ? 0.94 : 1})}75%{transform:scale(${x ? 1.02 : 1},${y ? 1.02 : 1})}100%{transform:none}`;

/** the badge outline turning a notch (its eight lobes land on themselves) */
const badgeTurn = (icon: string): PartMotion => ({ ...vb("12px 12px"), animation: run(icon, "turn", 700) });
const badgeTurnKf = (icon: string) => k(icon, "turn", "0%{transform:none}60%{transform:rotate(52deg) scale(1.05)}100%{transform:rotate(45deg)}");
/** a currency badge: it turns a notch and its sign flips like a coin */
const badgeSign = (icon: string, badge: string, sign: string[]): Override => ({
  note: "The badge turns a notch and the sign flips like a coin.",
  motion: { [badge]: badgeTurn(icon), ...each(sign, () => ({ ...vb("12px 12px"), animation: run(icon, "flip", 600, 100) })) },
  keyframes: badgeTurnKf(icon) + k(icon, "flip", flip),
});

/** an arrow that slides out through one side of its frame and back in from the other; the frame takes a small beat */
const arrowIn = (icon: string, frame: string, head: string, shaft: string, x: number, y: number, shape = "square"): Override => ({
  note: `The arrow slides out of the ${shape} and back in from the other side; the ${shape} gives a small beat.`,
  motion: {
    [frame]: { animation: run(icon, "frame", 500, 150) },
    [head]: { animation: run(icon, "pass", 650) },
    [shaft]: { animation: run(icon, "pass", 650, 30) },
  },
  keyframes: k(icon, "pass", pass(x, y)) + k(icon, "frame", pop(1.04)),
});

/** an arrow that breaks out of its open frame and comes back round; the frame gives as it goes */
const arrowOut = (icon: string, frame: string, head: string, shaft: string, x: number, y: number, shape: string): Override => ({
  note: `The arrow shoots out of the ${shape}, comes back in from the far side and the ${shape} gives a small beat.`,
  motion: {
    [head]: { animation: run(icon, "out", 700) },
    [shaft]: { animation: run(icon, "out", 700, 30) },
    [frame]: { animation: run(icon, "frame", 500, 120) },
  },
  keyframes:
    k(icon, "out", `0%{transform:none;opacity:1}35%{transform:${T(x, y)};opacity:0}36%{transform:${T(-x, -y)};opacity:0}100%{transform:none;opacity:1}`) +
    k(icon, "frame", pop(1.04)),
});

/** a sort icon: the arrow pushes its way while the marks beside it hop in order */
const sortHop = (icon: string, dir: 1 | -1, first: string[], second: string[], arrowWord: string): Override => ({
  note: `The arrow pushes ${arrowWord} while the marks beside it hop in order.`,
  motion: {
    ...each(["p0", "p1"], () => ({ animation: run(icon, "arrow", 600) })),
    ...each(first, () => ({ animation: run(icon, "hop", 500, 80) })),
    ...each(second, () => ({ animation: run(icon, "hop", 500, 170) })),
  },
  keyframes: k(icon, "arrow", nudge(0, 1.5 * dir)) + k(icon, "hop", hop),
});

/** a sort icon with bars: the arrow pushes and the bars shrink and spring back in turn */
const sortBars = (icon: string, dir: 1 | -1, bars: string[], arrowWord: string, order: string): Override => ({
  note: `The arrow pushes ${arrowWord} and the bars shrink and spring back from ${order}.`,
  motion: {
    ...each(["p0", "p1"], () => ({ animation: run(icon, "arrow", 600) })),
    ...each(bars, (i) => ({ origin: "0% 50%", animation: run(icon, "bar", 550, i * 70) })),
  },
  keyframes: k(icon, "arrow", nudge(0, 1.5 * dir)) + k(icon, "bar", squeeze("X", 0.5)),
});

/** an arrow that pushes off its line: the arrow travels and comes back, the line gives the other way */
const offLine = (icon: string, arrow: string[], line: string, x: number, y: number): Override => ({
  note: "The arrow pushes off the line and comes back; the line gives the other way.",
  motion: {
    ...each(arrow, (i) => ({ animation: run(icon, "leave", 650, i * 30) })),
    [line]: { animation: run(icon, "recoil", 600) },
  },
  keyframes: k(icon, "leave", leave(x, y)) + k(icon, "recoil", recoil(-x * 0.28, -y * 0.28)),
});

/** a diagonal arrow that shoots off its corner and comes back in from the other side */
const diagonal = (icon: string, head: string, shaft: string, x: number, y: number, where: string): Override => ({
  note: `The arrow shoots off ${where} and comes back in from the other corner.`,
  motion: { [head]: { animation: run(icon, "pass", 650) }, [shaft]: { animation: run(icon, "pass", 650, 30) } },
  keyframes: k(icon, "pass", pass(x, y)),
});

/** blocks dropping or sliding onto the guide they align to, which takes the knock */
const alignTo = (icon: string, blocks: string[], line: string, x: number, y: number, origin: string, where: string): Override => ({
  note: `The blocks pull away and come back against the ${where} line one after another, squashing as they land.`,
  motion: {
    ...each(blocks, (i) => ({ origin, animation: run(icon, "block", 650, i * 70) })),
    [line]: { animation: run(icon, "knock", 700) },
  },
  keyframes: k(icon, "block", settle(-x, -y)) + k(icon, "knock", knock(x * 0.3, y * 0.3)),
});

/** two blocks, each with its guide, drawing together and spreading back out evenly */
const distribute = (icon: string, a: string[], b: string[], x: number, y: number): Override => ({
  note: "The two blocks and their guides draw together, then spread back out evenly.",
  motion: {
    ...each(a, () => ({ animation: run(icon, "a", 650) })),
    ...each(b, () => ({ animation: run(icon, "b", 650) })),
  },
  keyframes: k(icon, "a", nudge(x, y)) + k(icon, "b", nudge(-x, -y)),
});

/** a guide that draws itself and two blocks that close in on it from either side */
const centreOn = (icon: string, line: string, a: string[], b: string[], x: number, y: number): Override => ({
  note: "The centre line draws itself and the two blocks close in on it from either side.",
  draw: [line],
  motion: {
    [line]: drawIn(icon, 450),
    ...each(a, () => ({ animation: run(icon, "a", 600, 60, true) })),
    ...each(b, () => ({ animation: run(icon, "b", 600, 120, true) })),
  },
  keyframes: DRAW(icon) + k(icon, "a", slideIn(-x, -y)) + k(icon, "b", slideIn(x, y)),
});

/** blocks packed against a guide: the nearest runs into it first, the other after it */
const packTo = (icon: string, near: string, far: string, line: string, x: number, y: number, where: string): Override => ({
  note: `The blocks draw back and pack against the ${where} line, the nearest first; the line takes the knock.`,
  motion: {
    [near]: { animation: run(icon, "run", 650) },
    [far]: { animation: run(icon, "run", 650, 70) },
    [line]: { animation: run(icon, "knock", 700) },
  },
  keyframes: k(icon, "run", runTo(x, y)) + k(icon, "knock", knock(x * 0.3, y * 0.3)),
});

/** one block between two guides: it sways and finds the middle, the guides keep the spacing even */
const spaceAround = (icon: string, block: string, a: string, b: string, x: number, y: number): Override => ({
  note: "The block sways from side to side and settles in the middle; the guides lean in to keep the spacing even.",
  motion: {
    [block]: { animation: run(icon, "sway", 750) },
    [a]: { animation: run(icon, "a", 600, 80) },
    [b]: { animation: run(icon, "b", 600, 80) },
  },
  keyframes:
    k(icon, "sway", `0%{transform:none}25%{transform:${T(-x * 1.5, -y * 1.5)}}50%{transform:${T(x, y)}}75%{transform:${T(-x * 0.4, -y * 0.4)}}100%{transform:none}`) +
    k(icon, "a", nudge(x * 0.6, y * 0.6)) +
    k(icon, "b", nudge(-x * 0.6, -y * 0.6)),
});

/** two blocks that gather to the middle and push back out to the guides at either edge */
const spaceBetween = (icon: string, a: string, b: string, la: string, lb: string, x: number, y: number): Override => ({
  note: "The two blocks gather toward the middle and push back out to the edges, which take the knock.",
  motion: {
    [a]: { animation: run(icon, "a", 650) },
    [b]: { animation: run(icon, "b", 650) },
    [la]: { animation: run(icon, "la", 700) },
    [lb]: { animation: run(icon, "lb", 700) },
  },
  keyframes:
    k(icon, "a", `0%{transform:none}35%{transform:${T(x, y)}}60%{transform:${T(-x * 0.2, -y * 0.2)}}100%{transform:none}`) +
    k(icon, "b", `0%{transform:none}35%{transform:${T(-x, -y)}}60%{transform:${T(x * 0.2, y * 0.2)}}100%{transform:none}`) +
    k(icon, "la", knock(-x * 0.3, -y * 0.3)) +
    k(icon, "lb", knock(x * 0.3, y * 0.3)),
});

/** a big arrow that gathers itself back, then stretches ahead (origin: its back end), with its dash following */
const bigArrow = (icon: string, x: number, y: number, origin: string, dash?: string): Override => {
  const back = x ? `translateX(${f(-x * 0.6)}px) scaleX(.9)` : `translateY(${f(-y * 0.6)}px) scaleY(.88)`;
  const fwd = x ? `translateX(${f(x * 1.6)}px) scaleX(1.05)` : `translateY(${f(y * 1.6)}px) scaleY(1.05)`;
  return {
    note: dash ? "The arrow gathers itself back and pushes ahead, and its dash follows a beat behind." : "The arrow gathers itself back, then stretches ahead and settles.",
    motion: {
      p0: { origin, animation: run(icon, "push", 650) },
      ...(dash ? { [dash]: { animation: run(icon, "dash", 600, 90) } } : {}),
    },
    keyframes:
      k(icon, "push", `0%{transform:none}30%{transform:${back}}60%{transform:${fwd}}100%{transform:none}`) +
      (dash ? k(icon, "dash", nudge(x * 0.8, y * 0.8)) : ""),
  };
};

/** a square's outline that gives a little */
const bumpKf = (icon: string) => k(icon, "frame", pop(1.04));

export const motions: Record<string, Override> = {
  "square-activity": {
    note: "The pulse line traces itself left to right across the screen, which gives a small beat.",
    draw: ["p1"],
    motion: { p0: { animation: run("square-activity", "frame", 500) }, p1: drawIn("square-activity", 800, 60, true) },
    keyframes: bumpKf("square-activity") + UNDRAW("square-activity"),
  },
  "alarm-clock-minus": {
    note: "The bells ring and the minus stretches out across the face.",
    motion: {
      ...each(["p0", "p3", "p4"], () => ({ ...vb("12px 13px"), animation: run("alarm-clock-minus", "rattle", 500) })),
      p1: { origin: "100% 0%", animation: run("alarm-clock-minus", "bell", 600) },
      p2: { origin: "0% 0%", animation: run("alarm-clock-minus", "bell", 600) },
      p5: { origin: "50% 50%", animation: run("alarm-clock-minus", "minus", 500, 120, true) },
    },
    keyframes: k("alarm-clock-minus", "rattle", shake(4)) + k("alarm-clock-minus", "bell", shake(14)) + k("alarm-clock-minus", "minus", grow("X")),
  },

  "align-center-horizontal": {
    note: "The middle line draws across and the two blocks slide onto it from above and below.",
    draw: ["p0"],
    motion: {
      p0: drawIn("align-center-horizontal", 450),
      ...each(["p1", "p2"], () => ({ animation: run("align-center-horizontal", "a", 600, 60, true) })),
      ...each(["p3", "p4"], () => ({ animation: run("align-center-horizontal", "b", 600, 120, true) })),
    },
    keyframes: DRAW("align-center-horizontal") + k("align-center-horizontal", "a", slideIn(0, -1)) + k("align-center-horizontal", "b", slideIn(0, 1.2)),
  },
  "align-end-horizontal": alignTo("align-end-horizontal", ["p0", "p1"], "p2", 0, 1.6, "50% 100%", "bottom"),
  "align-end-vertical": alignTo("align-end-vertical", ["p0", "p1"], "p2", 1.6, 0, "100% 50%", "right"),
  "align-start-horizontal": alignTo("align-start-horizontal", ["p0", "p1"], "p2", 0, -1.6, "50% 0%", "top"),
  "align-start-vertical": alignTo("align-start-vertical", ["p1", "p0"], "p2", -1.6, 0, "0% 50%", "left"),
  "align-horizontal-distribute-end": distribute("align-horizontal-distribute-end", ["p0", "p2"], ["p1", "p3"], 1.5, 0),
  "align-horizontal-distribute-start": distribute("align-horizontal-distribute-start", ["p0", "p2"], ["p1", "p3"], 1.5, 0),
  "align-vertical-distribute-end": distribute("align-vertical-distribute-end", ["p1", "p3"], ["p0", "p2"], 0, 1.5),
  "align-vertical-distribute-start": distribute("align-vertical-distribute-start", ["p1", "p3"], ["p0", "p2"], 0, 1.5),
  "align-horizontal-justify-center": centreOn("align-horizontal-justify-center", "p2", ["p0"], ["p1"], 1.2, 0),
  "align-vertical-justify-center": centreOn("align-vertical-justify-center", "p2", ["p1"], ["p0"], 0, 1),
  "align-horizontal-justify-end": packTo("align-horizontal-justify-end", "p1", "p0", "p2", 1.4, 0, "right"),
  "align-horizontal-justify-start": packTo("align-horizontal-justify-start", "p0", "p1", "p2", -1.4, 0, "left"),
  "align-vertical-justify-end": packTo("align-vertical-justify-end", "p0", "p1", "p2", 0, 1.4, "bottom"),
  "align-vertical-justify-start": packTo("align-vertical-justify-start", "p1", "p0", "p2", 0, -1.4, "top"),
  "align-horizontal-space-around": spaceAround("align-horizontal-space-around", "p0", "p1", "p2", 1, 0),
  "align-vertical-space-around": spaceAround("align-vertical-space-around", "p0", "p2", "p1", 0, 1),
  "align-horizontal-space-between": spaceBetween("align-horizontal-space-between", "p0", "p1", "p2", "p3", 1.5, 0),
  "align-vertical-space-between": spaceBetween("align-vertical-space-between", "p1", "p0", "p3", "p2", 0, 1.5),

  ampersands: {
    note: "The two ampersands write themselves, one after the other.",
    draw: ["p0", "p1"],
    motion: { p0: drawIn("ampersands", 600), p1: drawIn("ampersands", 600, 160) },
    keyframes: DRAW("ampersands"),
  },
  amphora: {
    note: "The jar rocks on its foot and its handles swing a beat behind.",
    motion: {
      ...each(["p0", "p2", "p4", "p5"], () => ({ ...vb("12px 22px"), animation: run("amphora", "rock", 750) })),
      ...each(["p1", "p3"], () => ({ ...vb("12px 22px"), animation: run("amphora", "handle", 750, 40) })),
    },
    keyframes: k("amphora", "rock", swing(-5)) + k("amphora", "handle", swing(-6)),
  },
  anvil: {
    note: "A blow lands on the face: the top gives, the waist squeezes and the base rings.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("anvil", "hit", 600) })),
      ...each(["p2", "p3"], () => ({ ...vb("12px 17px"), animation: run("anvil", "waist", 600) })),
      p4: { animation: run("anvil", "ring", 500, 120) },
    },
    keyframes:
      k("anvil", "hit", "0%{transform:none}25%{transform:translateY(.8px)}50%{transform:translateY(-.3px)}75%{transform:translateY(.1px)}100%{transform:none}") +
      k("anvil", "waist", "0%{transform:none}25%{transform:scaleY(.84)}50%{transform:scaleY(1.06)}75%{transform:scaleY(.98)}100%{transform:none}") +
      k("anvil", "ring", jitter(0.4)),
  },
  "app-window-mac": {
    note: "The window springs open and its three buttons pop in from left to right.",
    motion: {
      p0: { animation: run("app-window-mac", "frame", 500) },
      ...each(["p1", "p2", "p3"], (i) => ({ animation: run("app-window-mac", "dot", 350, 120 + i * 70, true) })),
    },
    keyframes: k("app-window-mac", "frame", pop(1.04)) + k("app-window-mac", "dot", popIn),
  },
  "archive-arrow-down": {
    note: "The lid lifts and the arrow drops down into the box.",
    motion: {
      p0: { origin: "0% 100%", animation: run("archive-arrow-down", "lid", 650) },
      ...each(["p3", "p4"], () => ({ animation: run("archive-arrow-down", "arrow", 550, 100, true) })),
    },
    keyframes:
      k("archive-arrow-down", "lid", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-6deg)}65%{transform:translateY(.3px)}100%{transform:none}") +
      k("archive-arrow-down", "arrow", "0%{transform:translateY(-3px);opacity:0}60%{transform:translateY(.6px);opacity:1}100%{transform:none;opacity:1}"),
  },
  "armenian-dram": {
    note: "The curve draws itself and the two bars slide in across it.",
    draw: ["p2"],
    motion: {
      p2: drawIn("armenian-dram", 500),
      p0: { animation: run("armenian-dram", "bar", 450, 200, true) },
      p1: { animation: run("armenian-dram", "bar", 450, 280, true) },
    },
    keyframes: DRAW("armenian-dram") + k("armenian-dram", "bar", "0%{transform:translateX(2px);opacity:0}60%{transform:translateX(-.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "arrow-big-down-dash": bigArrow("arrow-big-down-dash", 0, 1, "50% 0%", "p1"),
  "arrow-big-up-dash": bigArrow("arrow-big-up-dash", 0, -1, "50% 100%", "p1"),
  "arrow-big-left": bigArrow("arrow-big-left", -1, 0, "100% 50%"),
  "arrow-big-left-dash": bigArrow("arrow-big-left-dash", -1, 0, "100% 50%", "p1"),
  "arrow-big-right-dash": bigArrow("arrow-big-right-dash", 1, 0, "0% 50%", "p1"),

  "arrow-down-1-0": sortHop("arrow-down-1-0", 1, ["p2", "p3"], ["p4"], "down"),
  "arrow-up-0-1": sortHop("arrow-up-0-1", -1, ["p2"], ["p3", "p4"], "up"),
  "arrow-up-1-0": sortHop("arrow-up-1-0", -1, ["p2", "p3"], ["p4"], "up"),
  "arrow-down-z-a": sortHop("arrow-down-z-a", 1, ["p2"], ["p3", "p4"], "down"),
  "arrow-up-a-z": sortHop("arrow-up-a-z", -1, ["p2", "p3"], ["p4"], "up"),
  "arrow-up-z-a": sortHop("arrow-up-z-a", -1, ["p2"], ["p3", "p4"], "up"),
  "arrow-down-narrow-wide": sortBars("arrow-down-narrow-wide", 1, ["p2", "p3", "p4"], "down", "shortest to longest"),
  "arrow-up-wide-narrow": sortBars("arrow-up-wide-narrow", -1, ["p2", "p3", "p4"], "up", "longest to shortest"),

  "arrow-down-from-line": offLine("arrow-down-from-line", ["p2", "p1"], "p0", 0, 1.8),
  "arrow-up-from-line": offLine("arrow-up-from-line", ["p0", "p1"], "p2", 0, -1.8),
  "arrow-left-from-line": offLine("arrow-left-from-line", ["p0", "p1"], "p2", -1.8, 0),
  "arrow-right-from-line": offLine("arrow-right-from-line", ["p2", "p1"], "p0", 1.8, 0),
  "arrows-up-from-line": {
    note: "The two arrows push up off the line one after the other; the line gives under them.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrows-up-from-line", "leave", 650) })),
      ...each(["p2", "p3"], () => ({ animation: run("arrows-up-from-line", "leave", 650, 100) })),
      p4: { animation: run("arrows-up-from-line", "recoil", 700) },
    },
    keyframes: k("arrows-up-from-line", "leave", leave(0, -1.8)) + k("arrows-up-from-line", "recoil", "0%,10%{transform:none}30%{transform:translateY(.5px)}45%{transform:none}55%{transform:translateY(.4px)}75%,100%{transform:none}"),
  },

  "arrow-down-to-dot": {
    note: "The arrow draws back, then runs down to the dot, which squashes under it.",
    motion: {
      ...each(["p1", "p0"], () => ({ animation: run("arrow-down-to-dot", "run", 650) })),
      p2: { animation: run("arrow-down-to-dot", "dot", 650) },
    },
    keyframes: k("arrow-down-to-dot", "run", runTo(0, 1.2)) + k("arrow-down-to-dot", "dot", "0%,45%{transform:none}57%{transform:translateY(.3px) scale(1.35,.7)}80%{transform:none}"),
  },
  "arrow-up-from-dot": {
    note: "The arrow crouches on the dot, then springs up off it; the dot squashes under the push.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrow-up-from-dot", "lift", 650) })),
      p2: { animation: run("arrow-up-from-dot", "dot", 650) },
    },
    keyframes:
      k("arrow-up-from-dot", "lift", "0%{transform:none}25%{transform:translateY(.6px)}55%{transform:translateY(-1.2px)}80%{transform:translateY(.2px)}100%{transform:none}") +
      k("arrow-up-from-dot", "dot", "0%,15%{transform:none}30%{transform:scale(1.35,.7)}55%{transform:none}"),
  },

  "arrow-down-left": diagonal("arrow-down-left", "p1", "p0", -3, 3, "down and to the left"),
  "arrow-up-left": diagonal("arrow-up-left", "p0", "p1", -3, -3, "up and to the left"),
  "arrow-right-plain": {
    note: "The arrow steps forward, its tip leading and the shaft stretching after it.",
    motion: {
      p0: { origin: "0% 50%", animation: run("arrow-right-plain", "shaft", 600) },
      p1: { animation: run("arrow-right-plain", "tip", 600) },
    },
    keyframes:
      k("arrow-right-plain", "shaft", "0%{transform:none}35%{transform:translateX(1px) scaleX(1.06)}65%{transform:translateX(-.3px)}100%{transform:none}") +
      k("arrow-right-plain", "tip", nudge(2, 0)),
  },
  "arrow-down-up": {
    note: "The two arrows push past each other, one down and one up, and come back.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrow-down-up", "down", 600) })),
      ...each(["p2", "p3"], () => ({ animation: run("arrow-down-up", "up", 600, 50) })),
    },
    keyframes: k("arrow-down-up", "down", nudge(0, 2)) + k("arrow-down-up", "up", nudge(0, -2)),
  },
  "arrow-left-right": {
    note: "The two arrows push past each other, one left and one right, and come back.",
    motion: {
      ...each(["p0", "p1"], () => ({ animation: run("arrow-left-right", "left", 600) })),
      ...each(["p2", "p3"], () => ({ animation: run("arrow-left-right", "right", 600, 50) })),
    },
    keyframes: k("arrow-left-right", "left", nudge(-2, 0)) + k("arrow-left-right", "right", nudge(2, 0)),
  },

  "square-arrow-down": arrowIn("square-arrow-down", "p0", "p2", "p1", 0, 4),
  "square-arrow-up": arrowIn("square-arrow-up", "p0", "p1", "p2", 0, -4),
  "square-arrow-left": arrowIn("square-arrow-left", "p0", "p1", "p2", -4, 0),
  "square-arrow-right": arrowIn("square-arrow-right", "p0", "p2", "p1", 4, 0),
  "square-arrow-down-left": arrowIn("square-arrow-down-left", "p2", "p0", "p1", -3, 3),
  "square-arrow-down-right": arrowIn("square-arrow-down-right", "p2", "p1", "p0", 3, 3),
  "square-arrow-up-left": arrowIn("square-arrow-up-left", "p2", "p1", "p0", -3, -3),
  "square-arrow-up-right": arrowIn("square-arrow-up-right", "p2", "p0", "p1", 3, -3),

  "circle-arrow-out-down-left": arrowOut("circle-arrow-out-down-left", "p0", "p2", "p1", -3, 3, "circle"),
  "circle-arrow-out-down-right": arrowOut("circle-arrow-out-down-right", "p0", "p2", "p1", 3, 3, "circle"),
  "circle-arrow-out-up-left": arrowOut("circle-arrow-out-up-left", "p2", "p0", "p1", -3, -3, "circle"),
  "circle-arrow-out-up-right": arrowOut("circle-arrow-out-up-right", "p0", "p2", "p1", 3, -3, "circle"),
  "square-arrow-out-down-left": arrowOut("square-arrow-out-down-left", "p0", "p2", "p1", -3, 3, "box"),
  "square-arrow-out-down-right": arrowOut("square-arrow-out-down-right", "p0", "p2", "p1", 3, 3, "box"),
  "square-arrow-out-up-left": arrowOut("square-arrow-out-up-left", "p0", "p2", "p1", -3, -3, "box"),
  "square-arrow-out-up-right": arrowOut("square-arrow-out-up-right", "p0", "p2", "p1", 3, -3, "box"),

  "square-asterisk": {
    note: "The box gives a little and the asterisk's three strokes turn a sixth of a turn, one after another.",
    motion: {
      p0: { animation: run("square-asterisk", "frame", 500) },
      ...each(["p1", "p2", "p3"], (i) => ({ ...vb("12px 12px"), animation: run("square-asterisk", "turn", 650, i * 50) })),
    },
    keyframes: bumpKf("square-asterisk") + k("square-asterisk", "turn", "0%{transform:none}100%{transform:rotate(60deg)}"),
  },
  asterism: {
    note: "The three stars twinkle in turn, each turning a sixth of a turn on its centre with a small swell.",
    motion: {
      ...each(["p0", "p7", "p8"], () => ({ ...vb("12px 6px"), animation: run("asterism", "twinkle", 650) })),
      ...each(["p4", "p5", "p6"], () => ({ ...vb("6px 17px"), animation: run("asterism", "twinkle", 650, 100) })),
      ...each(["p1", "p2", "p3"], () => ({ ...vb("18px 17px"), animation: run("asterism", "twinkle", 650, 200) })),
    },
    keyframes: k("asterism", "twinkle", "0%{transform:none}55%{transform:rotate(66deg) scale(1.12)}100%{transform:rotate(60deg)}"),
  },
  astroid: {
    note: "The four-pointed curve turns a quarter turn and its points stretch out and settle.",
    motion: { p0: { ...vb("12px 12px"), animation: run("astroid", "turn", 700) } },
    keyframes: k("astroid", "turn", "0%{transform:none}55%{transform:rotate(100deg) scale(1.08)}80%{transform:rotate(88deg) scale(.98)}100%{transform:rotate(90deg)}"),
  },

  "audio-lines-off": {
    note: "The bars bounce once like a level meter and the slash strikes through, silencing them.",
    draw: ["p6"],
    motion: {
      p5: { ...vb("2px 12px"), animation: run("audio-lines-off", "bar", 600, 0) },
      p8: { ...vb("6px 12px"), animation: run("audio-lines-off", "bar", 600, 50) },
      ...each(["p0", "p1"], () => ({ ...vb("10px 12px"), animation: run("audio-lines-off", "bar", 600, 100) })),
      ...each(["p2", "p3"], () => ({ ...vb("14px 12px"), animation: run("audio-lines-off", "bar", 600, 150) })),
      p4: { ...vb("18px 12px"), animation: run("audio-lines-off", "bar", 600, 200) },
      p7: { ...vb("22px 12px"), animation: run("audio-lines-off", "bar", 600, 250) },
      p6: drawIn("audio-lines-off", 400, 200),
    },
    keyframes: k("audio-lines-off", "bar", "0%{transform:none}30%{transform:scaleY(1.2)}60%{transform:scaleY(.7)}100%{transform:none}") + DRAW("audio-lines-off"),
  },
  "audio-lines-x": {
    note: "The bars bounce once like a level meter and the cross draws itself in the corner.",
    draw: ["p2", "p6"],
    motion: {
      p4: { ...vb("2px 12px"), animation: run("audio-lines-x", "bar", 600, 0) },
      p7: { ...vb("6px 12px"), animation: run("audio-lines-x", "bar", 600, 50) },
      p0: { ...vb("10px 12px"), animation: run("audio-lines-x", "bar", 600, 100) },
      p1: { ...vb("14px 12px"), animation: run("audio-lines-x", "bar", 600, 150) },
      p3: { ...vb("18px 12px"), animation: run("audio-lines-x", "bar", 600, 200) },
      p5: { ...vb("22px 12px"), animation: run("audio-lines-x", "bar", 600, 250) },
      p2: drawIn("audio-lines-x", 300, 220),
      p6: drawIn("audio-lines-x", 300, 350),
    },
    keyframes: k("audio-lines-x", "bar", "0%{transform:none}30%{transform:scaleY(1.2)}60%{transform:scaleY(.7)}100%{transform:none}") + DRAW("audio-lines-x"),
  },
  "azerbaijani-manat": {
    note: "The arch draws itself over and the stem drops down through it.",
    draw: ["p1", "p0"],
    motion: { p1: drawIn("azerbaijani-manat", 550), p0: drawIn("azerbaijani-manat", 350, 250) },
    keyframes: DRAW("azerbaijani-manat"),
  },

  "badge-cent": badgeSign("badge-cent", "p0", ["p1", "p2"]),
  "badge-euro": badgeSign("badge-euro", "p0", ["p1", "p2"]),
  "badge-indian-rupee": badgeSign("badge-indian-rupee", "p0", ["p1", "p2", "p3"]),
  "badge-japanese-yen": badgeSign("badge-japanese-yen", "p0", ["p1", "p2", "p3", "p4"]),
  "badge-pound-sterling": badgeSign("badge-pound-sterling", "p0", ["p1", "p2", "p3"]),
  "badge-russian-ruble": badgeSign("badge-russian-ruble", "p0", ["p1", "p2"]),
  "badge-swiss-franc": badgeSign("badge-swiss-franc", "p0", ["p1", "p2", "p3"]),
  "badge-turkish-lira": badgeSign("badge-turkish-lira", "p2", ["p0", "p1"]),
  "badge-question-mark": {
    note: "The badge turns a notch, the question mark nods and its dot pops in.",
    motion: {
      p0: badgeTurn("badge-question-mark"),
      p1: { origin: "50% 100%", animation: run("badge-question-mark", "nod", 650, 120) },
      p2: { animation: run("badge-question-mark", "dot", 350, 300, true) },
    },
    keyframes: badgeTurnKf("badge-question-mark") + k("badge-question-mark", "nod", swing(-12)) + k("badge-question-mark", "dot", popIn),
  },
  "badge-info": {
    note: "The badge turns a notch, the dot pops in and the stem drops in under it.",
    motion: {
      p0: badgeTurn("badge-info"),
      p2: { animation: run("badge-info", "dot", 350, 120, true) },
      p1: { animation: run("badge-info", "drop", 450, 200, true) },
    },
    keyframes: badgeTurnKf("badge-info") + k("badge-info", "dot", popIn) + k("badge-info", "drop", drop),
  },
  "badge-minus": {
    note: "The badge turns a notch and the minus stretches out across it.",
    motion: { p0: badgeTurn("badge-minus"), p1: { origin: "50% 50%", animation: run("badge-minus", "minus", 500, 150, true) } },
    keyframes: badgeTurnKf("badge-minus") + k("badge-minus", "minus", grow("X")),
  },
  "badge-plus": {
    note: "The badge turns a notch and the plus spins in.",
    motion: { p0: badgeTurn("badge-plus"), ...each(["p1", "p2"], () => ({ ...vb("12px 12px"), animation: run("badge-plus", "plus", 550, 120, true) })) },
    keyframes: badgeTurnKf("badge-plus") + k("badge-plus", "plus", spinIn),
  },
  "badge-x": {
    note: "The badge shakes and the cross draws itself, one stroke then the other.",
    draw: ["p1", "p2"],
    motion: {
      p0: { ...vb("12px 12px"), animation: run("badge-x", "shake", 550) },
      p1: drawIn("badge-x", 300, 100),
      p2: drawIn("badge-x", 300, 230),
    },
    keyframes: k("badge-x", "shake", shake(6)) + DRAW("badge-x"),
  },

  "ball-wave": {
    note: "The ball bobs and rolls on the water while the wave rolls under it.",
    motion: {
      ...each(["p2", "p1"], () => ({ ...vb("12px 9px"), animation: run("ball-wave", "bob", 800) })),
      p0: { animation: run("ball-wave", "wave", 800) },
    },
    keyframes:
      k("ball-wave", "bob", "0%{transform:none}30%{transform:translateY(-1.4px) rotate(-10deg)}60%{transform:translateY(.4px) rotate(5deg)}80%{transform:translateY(-.2px) rotate(-2deg)}100%{transform:none}") +
      k("ball-wave", "wave", "0%{transform:none}35%{transform:translateX(-.9px)}70%{transform:translateX(.4px)}100%{transform:none}"),
  },
  "bangladeshi-taka": {
    note: "The hooked stroke writes itself and the bar slides in across it.",
    draw: ["p0"],
    motion: { p0: drawIn("bangladeshi-taka", 600), p1: { animation: run("bangladeshi-taka", "bar", 450, 250, true) } },
    keyframes: DRAW("bangladeshi-taka") + k("bangladeshi-taka", "bar", "0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },
  "banknote-arrow-down": {
    note: "The arrow drops in onto the corner from above and the note dips as it lands.",
    motion: {
      ...each(["p1", "p3"], () => ({ animation: run("banknote-arrow-down", "arrow", 650) })),
      ...each(["p0", "p2", "p4", "p5"], () => ({ animation: run("banknote-arrow-down", "dip", 550, 150) })),
    },
    keyframes: k("banknote-arrow-down", "arrow", pass(0, 3)) + k("banknote-arrow-down", "dip", nudge(0, 0.6)),
  },
  "banknote-x": {
    note: "The note shakes and the cross draws itself at the corner, one stroke then the other.",
    draw: ["p1", "p3"],
    motion: {
      ...each(["p0", "p2", "p4", "p5"], () => ({ animation: run("banknote-x", "shake", 450) })),
      p1: drawIn("banknote-x", 300, 100),
      p3: drawIn("banknote-x", 300, 230),
    },
    keyframes: k("banknote-x", "shake", jitter(0.6)) + DRAW("banknote-x"),
  },

  "chart-no-axes-column-increasing": {
    note: "The bars grow up from the baseline one after another, shortest first.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: "50% 100%", animation: run("chart-no-axes-column-increasing", "grow", 500, i * 80, true) })),
    keyframes: k("chart-no-axes-column-increasing", "grow", grow("Y")),
  },
  "chart-no-axes-column": {
    note: "The bars grow up from the baseline one after another.",
    motion: each(["p0", "p1", "p2"], (i) => ({ origin: "50% 100%", animation: run("chart-no-axes-column", "grow", 500, i * 80, true) })),
    keyframes: k("chart-no-axes-column", "grow", grow("Y")),
  },
  "chart-column-increasing": {
    note: "The columns grow up from the axis one after another, shortest first.",
    motion: each(["p3", "p0", "p1"], (i) => ({ origin: "50% 100%", animation: run("chart-column-increasing", "grow", 500, i * 80, true) })),
    keyframes: k("chart-column-increasing", "grow", grow("Y")),
  },
  "chart-column-big": {
    note: "The two columns grow up from the axis one after the other.",
    motion: each(["p2", "p1"], (i) => ({ origin: "50% 100%", animation: run("chart-column-big", "grow", 500, i * 90, true) })),
    keyframes: k("chart-column-big", "grow", grow("Y")),
  },
  "chart-bar-big": {
    note: "The two bars grow out from the axis one after the other.",
    motion: each(["p2", "p1"], (i) => ({ origin: "0% 50%", animation: run("chart-bar-big", "grow", 500, i * 90, true) })),
    keyframes: k("chart-bar-big", "grow", grow("X")),
  },

  barrel: {
    note: "The barrel rocks on its rim and settles, its staves and hoops going with it.",
    motion: each(["p4", "p0", "p1", "p2", "p3"], () => ({ ...vb("12px 22px"), animation: run("barrel", "rock", 750) })),
    keyframes: k("barrel", "rock", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(4deg)}75%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },
  "battery-medium": {
    note: "The two bars fill up one after the other and the cap bumps.",
    motion: {
      ...each(["p2", "p0"], (i) => ({ origin: "50% 100%", animation: run("battery-medium", "bar", 400, i * 90, true) })),
      p1: { animation: run("battery-medium", "cap", 450, 200) },
    },
    keyframes: k("battery-medium", "bar", grow("Y")) + k("battery-medium", "cap", nudge(0.6, 0)),
  },
};

const BOX = "M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z";

export const fills: Record<string, string> = {
  // the jar, closed across its mouth (the handles stay strokes)
  amphora:
    "M10 2h4v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8h-2C9 21 6.006 18 6 14A6 6 0 0 1 9.347 8.614C9.728 8.427 10 8.056 10 7.632Z",
  // the horn and the waist, which the source draws as open strokes against the face and the base
  anvil: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4Z M9 12h6v5H9Z",
  // the box under the lid
  "archive-arrow-down": BOX,
  // the note, cut straight across at the corner the source leaves open for the arrow or the cross
  "banknote-arrow-down": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5L19 13.25A2.75 2.75 0 0 0 16.26 16.26A2.75 2.75 0 0 0 13.44 18Z",
  "banknote-x": "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5L17 14.25A2.75 2.75 0 0 0 14.44 18Z",
  // the ring or box, cut straight across where the arrow breaks out of it
  "circle-arrow-out-down-left": "M2 12a10 10 0 1 1 10 10Z",
  "circle-arrow-out-down-right": "M12 22a10 10 0 1 1 10-10Z",
  "circle-arrow-out-up-left": "M12 2A10 10 0 1 1 2 12Z",
  "circle-arrow-out-up-right": "M22 12A10 10 0 1 1 12 2Z",
  "square-arrow-out-down-left": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6Z",
  "square-arrow-out-down-right": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6Z",
  "square-arrow-out-up-left": "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z",
  "square-arrow-out-up-right": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6Z",
};
