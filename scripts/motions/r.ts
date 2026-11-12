import type { PartMotion } from "../../packages/core/src/types";
import type { Entry, Override } from "./types";

/** Batch r: its icons (pnpm import-icons r) and their motions. */
export const list: Entry[] = [
  ["FolderGit2", "folder-git-2", "Git folder (branch)", "files", "bounce", ["git", "repo", "branch", "folder"], "The branch grows."],
  ["FolderHeart", "folder-heart", "Favorite folder", "files", "bounce", ["favorite", "love", "saved", "folder"], "The heart beats."],
  ["FolderInput", "folder-input", "Move into folder", "files", "nudge-right", ["import", "move", "into", "folder"], "The arrow goes in."],
  ["FolderKanban", "folder-kanban", "Project folder", "files", "bounce", ["project", "board", "kanban", "folder"], "The columns grow."],
  ["FolderKey", "folder-key", "Key folder", "files", "shake", ["key", "secure", "private", "folder"], "The key turns."],
  ["FolderOpenDot", "folder-open-dot", "Open folder with dot", "files", "bounce", ["open", "active", "current", "folder"], "The folder opens."],
  ["FolderOutput", "folder-output", "Move out of folder", "files", "nudge-left", ["export", "move", "out", "folder"], "The arrow comes out."],
  ["FolderRoot", "folder-root", "Root folder", "files", "bounce", ["root", "base", "top", "folder"], "The root grows."],
  ["FolderSearch2", "folder-search-2", "Search in folder", "files", "bounce", ["search", "find", "browse", "folder"], "The lens searches."],
  ["FolderSymlink", "folder-symlink", "Folder shortcut", "files", "bounce", ["link", "shortcut", "alias", "folder"], "The arrow points out."],
  ["FolderUser", "folder-user", "User folder", "files", "bounce", ["user", "home", "personal", "folder"], "The person nods."],
  ["FolderUsers", "folder-users", "Shared folder", "files", "bounce", ["shared", "team", "users", "folder"], "The people nod."],
  ["FoldHorizontal", "fold-horizontal", "Collapse sideways", "actions", "pop", ["fold", "collapse", "compress", "narrow"], "The arrows fold in."],
  ["UtensilsCrossed", "utensils-crossed", "Fork and knife", "food", "wiggle", ["food", "dining", "restaurant", "eat"], "The fork and knife cross."],
  ["Form", "form", "Form", "text", "draw", ["form", "fields", "survey", "input"], "The fields fill."],
  ["RectangleEllipsis", "form-input", "Input field", "text", "wave", ["input", "field", "password", "text box"], "The dots appear."],
  ["SquareFunction", "square-function", "Function in a square", "development", "draw", ["function", "math", "formula", "code"], "The f draws itself."],
  ["Galaxy", "galaxy", "Galaxy", "nature", "spin", ["space", "stars", "milky way", "universe"], "It swirls."],
  ["GalleryHorizontal", "gallery-horizontal", "Carousel", "media", "nudge-left", ["carousel", "slides", "gallery", "swipe"], "The slides step."],
  ["GalleryHorizontalEnd", "gallery-horizontal-end", "Carousel stack", "media", "nudge-left", ["carousel", "slides", "stack", "gallery"], "The slides step."],
  ["GalleryVertical", "gallery-vertical", "Vertical carousel", "media", "nudge-up", ["carousel", "slides", "scroll", "gallery"], "The slides step."],
  ["GalleryVerticalEnd", "gallery-vertical-end", "Vertical carousel stack", "media", "nudge-up", ["carousel", "slides", "stack", "feed"], "The slides step."],
  ["Gamepad", "gamepad-simple", "Gamepad", "devices", "wiggle", ["game", "controller", "play", "console"], "The buttons press."],
  ["GamepadDirectional", "gamepad-directional", "Direction pad", "devices", "pop", ["d-pad", "arrows", "controller", "game"], "The pad presses."],
  ["SquareChartGantt", "square-chart-gantt", "Gantt chart", "charts", "draw", ["gantt", "timeline", "schedule", "project"], "The bars grow."],
  ["GapHorizontal", "gap-horizontal", "Horizontal gap", "shapes", "pop", ["gap", "spacing", "layout", "margin"], "The gap opens."],
  ["GapVertical", "gap-vertical", "Vertical gap", "shapes", "pop", ["gap", "spacing", "layout", "margin"], "The gap opens."],
  ["GeorgianLari", "georgian-lari", "Georgian lari", "commerce", "pop", ["money", "currency", "lari", "gel"], "It draws itself."],
  ["Germ", "germ", "Germ", "health", "wiggle", ["germ", "bacteria", "microbe", "virus"], "It wriggles."],
  ["GermOff", "germ-off", "Germ-free", "health", "shake", ["antibacterial", "clean", "sanitized", "germ"], "The slash crosses it out."],
  ["GitBranchMinus", "git-branch-minus", "Delete branch", "development", "draw", ["git", "branch", "delete", "remove"], "The minus draws in."],
  ["GitBranchPlus", "git-branch-plus", "New branch", "development", "draw", ["git", "branch", "new", "add"], "The plus draws in."],
  ["GitCommitVertical", "git-commit-vertical", "Commit (vertical)", "development", "pop", ["git", "commit", "save", "version"], "The commit lands."],
  ["GitCompareArrows", "git-compare-arrows", "Compare with arrows", "development", "pop", ["git", "compare", "diff", "swap"], "The changes swap."],
  ["GitGraph", "git-graph", "Git graph", "development", "draw", ["git", "graph", "history", "branches"], "The branch grows."],
  ["GitMergeConflict", "git-merge-conflict", "Merge conflict", "development", "shake", ["git", "conflict", "merge", "error"], "The branches clash."],
  ["GitPullRequestArrow", "git-pull-request-arrow", "Pull request (arrow)", "development", "draw", ["git", "pull request", "review", "pr"], "The change travels."],
  ["GitPullRequestClosed", "git-pull-request-closed", "Closed pull request", "development", "shake", ["git", "pull request", "closed", "rejected"], "The cross draws in."],
  ["GitPullRequestCreate", "git-pull-request-create", "New pull request", "development", "draw", ["git", "pull request", "new", "create"], "The plus draws in."],
  ["GitPullRequestCreateArrow", "git-pull-request-create-arrow", "New pull request (arrow)", "development", "draw", ["git", "pull request", "new", "create"], "The plus draws in."],
  ["GitPullRequestDraft", "git-pull-request-draft", "Draft pull request", "development", "pulse", ["git", "pull request", "draft", "wip"], "The dots fill in."],
  ["GlobeOff", "globe-off", "Offline", "status", "shake", ["offline", "no internet", "web", "disconnected"], "The slash crosses it out."],
  ["GlobeX", "globe-x", "Site error", "status", "shake", ["error", "blocked", "web", "unreachable"], "The cross draws in."],
  ["GlobeCheck", "globe-check", "Site online", "status", "draw", ["online", "verified", "web", "connected"], "The tick draws in."],
  ["GlobePlus", "globe-plus", "Add site", "status", "pop", ["add", "new", "web", "domain"], "The plus draws in."],
  ["GlobeBan", "globe-ban", "Site blocked", "status", "shake", ["blocked", "banned", "web", "forbidden"], "The ban sign draws in."],
  ["GlobeCode", "globe-code", "Web code", "development", "pop", ["code", "web", "html", "site"], "The brackets open."],
  ["GraphHub", "graph-hub", "Hub graph", "charts", "pop", ["graph", "network", "hub", "nodes"], "The nodes light up."],
  ["GraphStar", "graph-star", "Star graph", "charts", "pop", ["graph", "network", "star", "nodes"], "The nodes light up."],
  ["Grid2x2Check", "grid-2x2-check", "Grid done", "app", "draw", ["grid", "done", "check", "layout"], "The tick draws in."],
  ["Grid2x2Plus", "grid-2x2-plus", "Add to grid", "app", "pop", ["grid", "add", "new", "layout"], "The plus draws in."],
  ["Grid2x2X", "grid-2x2-x", "Remove from grid", "app", "shake", ["grid", "remove", "delete", "layout"], "The cross draws in."],
  ["Grid3x2", "grid-3x2", "Six squares", "app", "pop", ["grid", "layout", "table", "cells"], "The cells pop."],
  ["Grid3x3Off", "grid-3x3-off", "Grid off", "app", "shake", ["grid", "off", "hide", "layout"], "The slash crosses it out."],
  ["Grip", "grip", "Grip", "actions", "wave", ["drag", "handle", "move", "dots"], "The dots ripple."],
  ["GuitarElectric", "guitar-electric", "Electric guitar", "media", "wiggle", ["guitar", "music", "rock", "instrument"], "It is strummed."],
  ["Music3", "half-note", "Half note", "media", "wiggle", ["music", "note", "song", "audio"], "The note bobs."],
  ["Ham", "ham", "Ham", "food", "wiggle", ["ham", "meat", "food", "dinner"], "It wiggles."],
  ["HandleBottomRight", "handle-bottom-right", "Resize handle", "actions", "nudge-down", ["resize", "handle", "corner", "drag"], "The handle drags out."],
  ["HandMetal", "hand-metal", "Rock on", "people", "wiggle", ["rock", "metal", "hand", "music"], "It rocks."],
  ["HardDriveUpload", "hard-drive-upload", "Upload from drive", "devices", "nudge-up", ["upload", "drive", "storage", "disk"], "The arrow rises."],
  ["HatGlasses", "hat-glasses", "Incognito", "people", "tilt", ["incognito", "private", "spy", "disguise"], "The hat tips."],
  ["HdmiPort", "hdmi-port", "HDMI", "devices", "pop", ["hdmi", "port", "video", "cable"], "The plug clicks in."],
  ["Heading4", "heading-4", "Heading 4", "text", "pop", ["heading", "title", "h4", "text"], "The number draws itself."],
  ["Heading5", "heading-5", "Heading 5", "text", "pop", ["heading", "title", "h5", "text"], "The number draws itself."],
  ["Heading6", "heading-6", "Heading 6", "text", "pop", ["heading", "title", "h6", "text"], "The number draws itself."],
  ["HeadphoneOff", "headphone-off", "Headphones off", "media", "shake", ["headphones", "mute", "audio", "off"], "The slash crosses it out."],
  ["Heart", "heart-shape", "Heart", "status", "pulse", ["love", "like", "favorite", "heart"], "It beats."],
  ["HeartMinus", "heart-minus", "Remove from favorites", "actions", "pop", ["unlike", "remove", "favorite", "minus"], "The minus draws in."],
  ["HeartX", "heart-x", "Not a favorite", "status", "shake", ["unlike", "remove", "favorite", "x"], "The cross draws in."],
  ["HikingStick", "hiking-stick", "Hiking stick", "travel", "swing", ["hiking", "walk", "trail", "outdoors"], "It plants."],
  ["History", "rotate-ccw-clock", "History clock", "app", "spin", ["history", "recent", "time", "undo"], "The hands turn back."],
  ["HockeyStick", "hockey-stick", "Hockey stick", "health", "swing", ["hockey", "sport", "ice", "puck"], "It swings."],
  ["House", "house", "House", "navigation", "bounce", ["home", "house", "start", "building"], "The door opens."],
  ["Hop", "hop", "Hop", "food", "wiggle", ["hop", "beer", "brewing", "plant"], "It sways."],
  ["HopOff", "hop-off", "Hop-free", "food", "shake", ["hop", "beer", "allergy", "free"], "The slash crosses it out."],
  ["HourglassCog", "hourglass-cog", "Processing", "status", "spin", ["processing", "wait", "loading", "settings"], "The cog turns."],
  ["HouseCog", "house-cog", "Home settings", "navigation", "spin", ["home", "settings", "smart home", "config"], "The cog turns."],
  ["HousePlug", "house-plug", "Home power", "devices", "pop", ["home", "power", "electricity", "plug"], "The plug clicks in."],
  ["Houses", "houses", "Houses", "navigation", "bounce", ["houses", "neighborhood", "homes", "real estate"], "The houses hop."],
  ["IceCreamBowl", "ice-cream-bowl", "Ice cream bowl", "food", "wiggle", ["ice cream", "dessert", "sundae", "bowl"], "The scoop wobbles."],
  ["IdCardLanyard", "id-card-lanyard", "Badge", "people", "swing", ["badge", "id", "lanyard", "pass"], "It swings."],
  ["ImagePlay", "image-play", "Animated image", "media", "pop", ["gif", "video", "animated", "image"], "The play mark steps forward."],
  ["ImageUp", "image-up", "Upload image", "media", "nudge-up", ["upload", "image", "photo", "picture"], "The arrow rises."],
  ["InspectionPanel", "inspection-panel", "Inspection panel", "devices", "pop", ["panel", "screws", "hatch", "access"], "The screws turn."],
  ["IterationCcw", "iteration-ccw", "Iterate back", "actions", "spin", ["iterate", "loop", "repeat", "cycle"], "It loops back."],
  ["SquareKanban", "square-kanban", "Kanban in a square", "app", "pop", ["kanban", "board", "tasks", "project"], "The columns grow."],
  ["SquareDashedKanban", "square-dashed-kanban", "Draft kanban", "app", "pop", ["kanban", "board", "draft", "project"], "The columns grow."],
  ["Kayak", "kayak", "Kayak", "travel", "wiggle", ["kayak", "boat", "paddle", "water"], "It paddles."],
  ["KazakhTenge", "kazakh-tenge", "Kazakh tenge", "commerce", "pop", ["money", "currency", "tenge", "kzt"], "It draws itself."],
  ["KeySquare", "key-square", "Key in a square", "status", "shake", ["key", "access", "password", "secure"], "The key turns."],
  ["LampCeiling", "lamp-ceiling", "Ceiling lamp", "app", "swing", ["lamp", "light", "ceiling", "home"], "It sways."],
  ["LampFloor", "lamp-floor", "Floor lamp", "app", "flash", ["lamp", "light", "floor", "home"], "It switches on."],
  ["LampWallDown", "lamp-wall-down", "Wall lamp (down)", "app", "swing", ["lamp", "light", "wall", "sconce"], "It swings."],
  ["LampWallUp", "lamp-wall-up", "Wall lamp (up)", "app", "swing", ["lamp", "light", "wall", "sconce"], "It swings."],
  ["LandPlot", "land-plot", "Land plot", "travel", "wave", ["land", "plot", "golf", "flag"], "The flag waves."],
  ["LaptopMinimal", "laptop-minimal", "Laptop (simple)", "app", "tilt", ["laptop", "computer", "notebook", "device"], "The lid opens."],
  ["Laser", "laser", "Laser", "devices", "flash", ["laser", "beam", "pointer", "light"], "It fires."],
];

/** the smooth curve (no overshoot) for drawings and keyframe motions that carry their own bounce */
const E = "cubic-bezier(.22,1,.36,1)";
/** an animation of one of the icon's own keyframes: `ki-<icon>-<name>` */
const A = (icon: string, name: string, ms: number, delay = 0, fill = "") => `ki-${icon}-${name} ${ms}ms ${E} ${delay}ms${fill ? " " + fill : ""}`;
const K = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** a stroke drawing itself in from its start, or from its end (the part must be listed in `draw`) */
const drawKf = (icon: string) => K(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => K(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0, reverse = false): PartMotion => ({
  from: { strokeDasharray: 1 },
  animation: A(icon, reverse ? "undraw" : "draw", ms, delay, "backwards"),
});
/** a short there-and-back move */
const there = (t: string, at = 35) => `0%{transform:none}${at}%{transform:${t}}100%{transform:none}`;
/** there, a little overshoot back, and rest */
const spring = (t: string, back: string) => `0%{transform:none}35%{transform:${t}}65%{transform:${back}}100%{transform:none}`;
/** grows in from nothing with a little overshoot (played with `backwards`) */
const POP_IN = "0%{transform:scale(0);opacity:0}60%{transform:scale(1.2);opacity:1}100%{transform:none;opacity:1}";
/** two beats, like a heart */
const BEAT = "0%{transform:none}20%{transform:scale(1.18)}40%{transform:scale(.96)}60%{transform:scale(1.1)}100%{transform:none}";
/** a folder, page or house that takes a knock */
const KNOCK = "0%{transform:none}30%{transform:translateY(.6px) scale(1.02,.97)}60%{transform:translateY(-.2px)}100%{transform:none}";
/** flinches as something strikes it out */
const FLINCH = "0%{transform:none}25%{transform:scale(.9)}55%{transform:scale(1.03)}100%{transform:none}";
/** a small sideways shake */
const SHAKE = "0%{transform:none}25%{transform:translateX(-.7px)}50%{transform:translateX(.6px)}75%{transform:translateX(-.3px)}100%{transform:none}";
/** turns back and forth around a pivot and settles */
const sway = (deg: number) =>
  `0%{transform:none}25%{transform:rotate(${deg}deg)}55%{transform:rotate(${-deg * 0.6}deg)}80%{transform:rotate(${deg * 0.25}deg)}100%{transform:none}`;
/** an arrow that leaves one way and comes back in from the other side */
const through = (axis: "X" | "Y", d: number) =>
  `0%{transform:none;opacity:1}35%{transform:translate${axis}(${d}px);opacity:0}36%{transform:translate${axis}(${-d}px);opacity:0}100%{transform:none;opacity:1}`;
/** slides in from a side (played with `backwards`) */
const slideIn = (x: number, y = 0) =>
  `0%{transform:translate(${x}px,${y}px);opacity:0}60%{transform:translate(${-x * 0.1}px,${-y * 0.1}px);opacity:1}100%{transform:none;opacity:1}`;
/** a magnifier that circles over what it searches */
const SEARCH = "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}";
/** the same motion for several parts */
const all = (parts: string[], m: PartMotion | ((i: number) => PartMotion)) =>
  Object.fromEntries(parts.map((p, i) => [p, typeof m === "function" ? m(i) : m]));
/** a pivot in icon units */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a cog turning a quarter on its hub (its teeth are 45° apart, so it rests where it started) */
const cog = (icon: string, parts: string[], x: number, y: number, delay = 0) => all(parts, { ...at(x, y), animation: A(icon, "cog", 800, delay) });
const cogKf = (icon: string) => K(icon, "cog", "from{transform:none}to{transform:rotate(90deg)}");
/** a heading: the H's stems bounce and its bar dips while the number writes itself */
const heading = (icon: string, stems: string[], bar: string, num: string[]): Override => ({
  note: "The H gives a bounce and the number writes itself beside it.",
  draw: num,
  motion: {
    ...all(stems, (i) => ({ origin: "50% 100%", animation: A(icon, "stem", 500, i * 40) })),
    [bar]: { animation: A(icon, "bar", 500, 40) },
    ...all(num, (i) => draw(icon, 380, 120 + i * 180)),
  },
  keyframes: drawKf(icon) + K(icon, "stem", there("scaleY(.88)")) + K(icon, "bar", there("translateY(.6px)")),
});
/** a slash striking through the rest, which flinches */
const struck = (icon: string, slash: string, rest: string[], x = 12, y = 12): Override => ({
  note: "The slash draws itself across and the rest flinches.",
  draw: [slash],
  motion: { [slash]: draw(icon, 420), ...all(rest, { ...at(x, y), animation: A(icon, "flinch", 600, 120) }) },
  keyframes: drawKf(icon) + K(icon, "flinch", FLINCH),
});

const FOLDER_KNOCK = (icon: string, p: string, delay = 0) => ({ [p]: { origin: "50% 100%", animation: A(icon, "knock", 600, delay) } });

export const motions: Record<string, Override> = {
  "fold-horizontal": {
    note: "The two arrows push in toward the fold and the dashed seam squeezes.",
    motion: {
      ...all(["p0", "p7"], { animation: A("fold-horizontal", "left", 550) }),
      ...all(["p1", "p6"], { animation: A("fold-horizontal", "right", 550) }),
      ...all(["p2", "p3", "p4", "p5"], (i) => ({ animation: A("fold-horizontal", "seam", 500, 80 + i * 40) })),
    },
    keyframes:
      K("fold-horizontal", "left", spring("translateX(1.6px)", "translateX(-.3px)")) +
      K("fold-horizontal", "right", spring("translateX(-1.6px)", "translateX(.3px)")) +
      K("fold-horizontal", "seam", there("scaleY(.5)")),
  },

  "folder-git-2": {
    note: "The branch draws itself out of the folder and its two commits pop in; the folder takes the knock.",
    draw: ["p0"],
    motion: {
      p0: draw("folder-git-2", 500),
      p3: { animation: A("folder-git-2", "pop", 400, 0, "backwards") },
      p2: { animation: A("folder-git-2", "pop", 400, 400, "backwards") },
      ...FOLDER_KNOCK("folder-git-2", "p1", 200),
    },
    keyframes: drawKf("folder-git-2") + K("folder-git-2", "pop", POP_IN) + K("folder-git-2", "knock", KNOCK),
  },

  "folder-heart": {
    note: "The heart beats twice in the folder's corner and the folder bobs with it.",
    motion: { p1: { animation: A("folder-heart", "beat", 700) }, ...FOLDER_KNOCK("folder-heart", "p0", 120) },
    keyframes: K("folder-heart", "beat", BEAT) + K("folder-heart", "knock", KNOCK),
  },

  "folder-input": {
    note: "The arrow slides in from the left into the folder, which takes the knock.",
    motion: {
      ...all(["p1", "p2"], { animation: A("folder-input", "in", 550, 0, "backwards") }),
      ...FOLDER_KNOCK("folder-input", "p0", 250),
    },
    keyframes: K("folder-input", "in", slideIn(-3)) + K("folder-input", "knock", KNOCK),
  },

  "folder-kanban": {
    note: "The three columns shrink and grow in turn, as the cards move between them.",
    motion: all(["p1", "p2", "p3"], (i) => ({ origin: "50% 0%", animation: A("folder-kanban", "col", 600, i * 70) })),
    keyframes: K("folder-kanban", "col", "0%{transform:none}35%{transform:scaleY(.6)}70%{transform:scaleY(1.08)}100%{transform:none}"),
  },

  "folder-key": {
    note: "The key turns on its shaft, its tooth and bow narrowing and widening again.",
    motion: {
      ...all(["p1", "p2"], { ...at(19, 18), animation: A("folder-key", "turn", 700) }),
      p3: { ...at(19, 20), animation: A("folder-key", "turn", 700) },
    },
    keyframes: K("folder-key", "turn", "0%{transform:none}40%{transform:scaleX(-.4)}70%{transform:scaleX(1.1)}100%{transform:none}"),
  },

  "folder-open-dot": {
    note: "The open folder bobs and the dot inside it pops.",
    motion: { ...FOLDER_KNOCK("folder-open-dot", "p0"), p1: { animation: A("folder-open-dot", "dot", 500, 120) } },
    keyframes: K("folder-open-dot", "knock", KNOCK) + K("folder-open-dot", "dot", spring("scale(1.8)", "scale(.9)")),
  },

  "folder-output": {
    note: "The arrow leaves the folder to the left and comes back in from the right.",
    motion: {
      ...all(["p1", "p2"], { animation: A("folder-output", "through", 650) }),
      ...FOLDER_KNOCK("folder-output", "p0", 300),
    },
    keyframes: K("folder-output", "through", through("X", -2.5)) + K("folder-output", "knock", KNOCK),
  },

  "folder-root": {
    note: "The root pops in and its stem draws itself down to the folder's floor.",
    draw: ["p2"],
    motion: {
      p1: { animation: A("folder-root", "pop", 400, 0, "backwards") },
      p2: draw("folder-root", 380, 200),
      ...FOLDER_KNOCK("folder-root", "p0", 380),
    },
    keyframes: drawKf("folder-root") + K("folder-root", "pop", POP_IN) + K("folder-root", "knock", KNOCK),
  },

  "folder-search-2": {
    note: "The magnifier circles inside the folder, searching.",
    motion: all(["p0", "p2"], { animation: A("folder-search-2", "search", 800) }),
    keyframes: K("folder-search-2", "search", SEARCH),
  },

  "folder-symlink": {
    note: "The arrowhead points ahead twice along the link while the folder bobs.",
    motion: { p1: { animation: A("folder-symlink", "point", 700) }, ...FOLDER_KNOCK("folder-symlink", "p0", 80) },
    keyframes:
      K("folder-symlink", "point", "0%{transform:none}25%{transform:translateX(1.3px)}45%{transform:none}65%{transform:translateX(.9px)}100%{transform:none}") +
      K("folder-symlink", "knock", KNOCK),
  },

  "folder-user": {
    note: "The person in the corner nods; their shoulders give with it.",
    motion: {
      p2: { animation: A("folder-user", "head", 600) },
      p1: { origin: "50% 100%", animation: A("folder-user", "body", 600) },
    },
    keyframes: K("folder-user", "head", spring("translateY(.8px)", "translateY(-.2px)")) + K("folder-user", "body", there("scaleY(.9)")),
  },

  "folder-users": {
    note: "The front person nods, then the one behind.",
    motion: {
      p1: { animation: A("folder-users", "head", 600) },
      p2: { origin: "50% 100%", animation: A("folder-users", "body", 600) },
      p3: { origin: "0% 100%", animation: A("folder-users", "back", 600, 120) },
    },
    keyframes:
      K("folder-users", "head", spring("translateY(.8px)", "translateY(-.2px)")) +
      K("folder-users", "body", there("scaleY(.9)")) +
      K("folder-users", "back", spring("translateY(.6px)", "translateY(-.15px)")),
  },

  "utensils-crossed": {
    note: "The fork and the knife scissor about where they cross and clink back.",
    motion: {
      ...all(["p0", "p2", "p3"], { ...at(12, 12), animation: A("utensils-crossed", "fork", 600) }),
      p1: { ...at(12, 12), animation: A("utensils-crossed", "knife", 600) },
    },
    keyframes: K("utensils-crossed", "fork", sway(9)) + K("utensils-crossed", "knife", sway(-9)),
  },

  form: {
    note: "The labels write themselves and each field below gives a press.",
    draw: ["p1", "p0"],
    motion: {
      p1: draw("form", 350),
      p3: { animation: A("form", "field", 450, 150) },
      p0: draw("form", 350, 250),
      p2: { animation: A("form", "field", 450, 400) },
    },
    keyframes: drawKf("form") + K("form", "field", spring("scale(1.04,.85)", "scale(.99,1.03)")),
  },

  "form-input": {
    note: "The hidden characters pop into the field one after another.",
    motion: {
      p0: { animation: A("form-input", "box", 500) },
      ...all(["p3", "p1", "p2"], (i) => ({ animation: A("form-input", "dot", 400, 80 + i * 100, "backwards") })),
    },
    keyframes: K("form-input", "box", there("scale(.97)")) + K("form-input", "dot", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.6);opacity:1}100%{transform:none;opacity:1}"),
  },

  "square-function": {
    note: "The f writes itself in the square and its crossbar strikes across.",
    draw: ["p1", "p2"],
    motion: { p0: { animation: A("square-function", "frame", 500) }, p1: draw("square-function", 450), p2: draw("square-function", 300, 330) },
    keyframes: drawKf("square-function") + K("square-function", "frame", there("scale(.96)")),
  },

  galaxy: {
    note: "The arms swirl around the core, which glows, and the stars twinkle.",
    motion: {
      ...all(["p0", "p3"], { ...at(12, 12), animation: A("galaxy", "swirl", 900) }),
      p4: { animation: A("galaxy", "core", 600) },
      p1: { animation: A("galaxy", "star", 500, 150) },
      p2: { animation: A("galaxy", "star", 500, 300) },
    },
    keyframes:
      K("galaxy", "swirl", "0%{transform:none}45%{transform:rotate(-28deg)}75%{transform:rotate(4deg)}100%{transform:none}") +
      K("galaxy", "core", spring("scale(1.5)", "scale(.9)")) +
      K("galaxy", "star", spring("scale(1.8)", "scale(.8)")),
  },

  "gallery-horizontal": {
    note: "The slide moves out to the left and the next comes in from the right, between the edges.",
    motion: {
      p1: { animation: A("gallery-horizontal", "slide", 650) },
      p0: { animation: A("gallery-horizontal", "edge", 500, 60) },
      p2: { animation: A("gallery-horizontal", "edge", 500, 120) },
    },
    keyframes: K("gallery-horizontal", "slide", through("X", -2)) + K("gallery-horizontal", "edge", there("translateX(-.6px)")),
  },

  "gallery-horizontal-end": {
    note: "The front slide moves out to the left and the ones behind step up after it.",
    motion: {
      p2: { animation: A("gallery-horizontal-end", "slide", 650) },
      p1: { animation: A("gallery-horizontal-end", "step", 500, 80) },
      p0: { animation: A("gallery-horizontal-end", "step", 500, 160) },
    },
    keyframes: K("gallery-horizontal-end", "slide", through("X", -2)) + K("gallery-horizontal-end", "step", there("translateX(1px)")),
  },

  "gallery-vertical": {
    note: "The slide moves up and out and the next comes in from below, between the edges.",
    motion: {
      p1: { animation: A("gallery-vertical", "slide", 650) },
      p0: { animation: A("gallery-vertical", "edge", 500, 60) },
      p2: { animation: A("gallery-vertical", "edge", 500, 120) },
    },
    keyframes: K("gallery-vertical", "slide", through("Y", -2)) + K("gallery-vertical", "edge", there("translateY(-.6px)")),
  },

  "gallery-vertical-end": {
    note: "The front slide moves out downward and the ones behind step forward after it.",
    motion: {
      p2: { animation: A("gallery-vertical-end", "slide", 650) },
      p1: { animation: A("gallery-vertical-end", "step", 500, 80) },
      p0: { animation: A("gallery-vertical-end", "step", 500, 160) },
    },
    keyframes: K("gallery-vertical-end", "slide", through("Y", 2)) + K("gallery-vertical-end", "step", there("translateY(1px)")),
  },

  "gamepad-simple": {
    note: "The buttons press one after another, the pad rocks left and the controller rumbles.",
    motion: {
      p3: { animation: A("gamepad-simple", "press", 400) },
      p2: { animation: A("gamepad-simple", "press", 400, 110) },
      ...all(["p0", "p1"], { animation: A("gamepad-simple", "pad", 500, 60) }),
      p4: { animation: A("gamepad-simple", "rumble", 600) },
    },
    keyframes:
      K("gamepad-simple", "press", "0%{transform:none}35%{transform:scale(.3)}70%{transform:scale(1.2)}100%{transform:none}") +
      K("gamepad-simple", "pad", spring("translateX(-.7px)", "translateX(.2px)")) +
      K("gamepad-simple", "rumble", "0%{transform:none}20%{transform:rotate(-3deg)}40%{transform:rotate(3deg)}60%{transform:rotate(-1.5deg)}80%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "gamepad-directional": {
    note: "Up, right, down and left press in toward the middle, one after another.",
    motion: {
      p3: { animation: A("gamepad-directional", "up", 400) },
      p1: { animation: A("gamepad-directional", "right", 400, 90) },
      p0: { animation: A("gamepad-directional", "down", 400, 180) },
      p2: { animation: A("gamepad-directional", "left", 400, 270) },
    },
    keyframes:
      K("gamepad-directional", "up", there("translateY(.9px)")) +
      K("gamepad-directional", "right", there("translateX(-.9px)")) +
      K("gamepad-directional", "down", there("translateY(-.9px)")) +
      K("gamepad-directional", "left", there("translateX(.9px)")),
  },

  "square-chart-gantt": {
    note: "The task bars draw themselves across the timeline one after another.",
    draw: ["p1", "p2", "p3"],
    motion: all(["p1", "p2", "p3"], (i) => draw("square-chart-gantt", 400, i * 120)),
    keyframes: drawKf("square-chart-gantt"),
  },

  "gap-horizontal": {
    note: "The two sides pull apart and the dashes in the gap pop one after another.",
    motion: {
      p5: { animation: A("gap-horizontal", "left", 600) },
      p4: { animation: A("gap-horizontal", "right", 600) },
      ...all(["p0", "p1", "p2", "p3"], (i) => ({ animation: A("gap-horizontal", "dash", 400, 60 + i * 60) })),
    },
    keyframes:
      K("gap-horizontal", "left", spring("translateX(-1.2px)", "translateX(.2px)")) +
      K("gap-horizontal", "right", spring("translateX(1.2px)", "translateX(-.2px)")) +
      K("gap-horizontal", "dash", there("scale(1.4)")),
  },

  "gap-vertical": {
    note: "The top and bottom pull apart and the dashes in the gap pop one after another.",
    motion: {
      p5: { animation: A("gap-vertical", "top", 600) },
      p4: { animation: A("gap-vertical", "bottom", 600) },
      ...all(["p0", "p1", "p2", "p3"], (i) => ({ animation: A("gap-vertical", "dash", 400, 60 + i * 60) })),
    },
    keyframes:
      K("gap-vertical", "top", spring("translateY(-1.2px)", "translateY(.2px)")) +
      K("gap-vertical", "bottom", spring("translateY(1.2px)", "translateY(-.2px)")) +
      K("gap-vertical", "dash", there("scale(1.4)")),
  },

  "georgian-lari": {
    note: "The curve draws itself, the base slides under it and the two stems drop in.",
    draw: ["p2"],
    motion: {
      p2: draw("georgian-lari", 500),
      p3: { animation: A("georgian-lari", "base", 450, 200, "backwards") },
      p0: { animation: A("georgian-lari", "stem", 450, 280, "backwards") },
      p1: { animation: A("georgian-lari", "stem", 450, 340, "backwards") },
    },
    keyframes: drawKf("georgian-lari") + K("georgian-lari", "base", slideIn(-2)) + K("georgian-lari", "stem", slideIn(0, -2)),
  },

  germ: {
    note: "The germ wobbles on itself while its feelers twitch one after another.",
    motion: {
      ...all(["p10", "p11", "p1", "p8"], { ...at(13, 13), animation: A("germ", "wobble", 750) }),
      ...all(["p0", "p3", "p6", "p5", "p2", "p9", "p4", "p7"], (i) => ({ animation: A("germ", i % 2 ? "twitchb" : "twitch", 450, i * 50) })),
    },
    keyframes:
      K("germ", "wobble", "0%{transform:none}25%{transform:rotate(-6deg) scale(1.03,.97)}55%{transform:rotate(4deg) scale(.98,1.02)}80%{transform:rotate(-1.5deg)}100%{transform:none}") +
      K("germ", "twitch", spring("rotate(18deg)", "rotate(-6deg)")) +
      K("germ", "twitchb", spring("rotate(-18deg)", "rotate(6deg)")),
  },

  "germ-off": struck("germ-off", "p7", ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p8", "p9", "p10", "p11", "p12"], 12, 13),

  "git-branch-minus": {
    note: "The minus draws itself and the branch's commit shrinks back, about to go.",
    draw: ["p1"],
    motion: {
      p1: draw("git-branch-minus", 380),
      p2: { animation: A("git-branch-minus", "shrink", 600, 200) },
      p0: { animation: A("git-branch-minus", "line", 600, 200) },
    },
    keyframes:
      drawKf("git-branch-minus") +
      K("git-branch-minus", "shrink", spring("scale(.7)", "scale(1.05)")) +
      K("git-branch-minus", "line", there("translate(-.3px,.3px)")),
  },

  "git-branch-plus": {
    note: "The branch grows off the trunk, its commit pops in, and the plus draws itself.",
    draw: ["p3", "p5", "p4"],
    motion: {
      p3: draw("git-branch-plus", 500, 0, true),
      p1: { animation: A("git-branch-plus", "pop", 400, 380, "backwards") },
      p5: draw("git-branch-plus", 300, 150),
      p4: draw("git-branch-plus", 300, 280),
    },
    keyframes: drawKf("git-branch-plus") + undrawKf("git-branch-plus") + K("git-branch-plus", "pop", POP_IN),
  },

  "git-commit-vertical": {
    note: "The commit lands on the line, which stretches out above and below.",
    motion: {
      p1: { animation: A("git-commit-vertical", "drop", 550, 0, "backwards") },
      p0: { origin: "50% 0%", animation: A("git-commit-vertical", "line", 550, 80) },
      p2: { origin: "50% 100%", animation: A("git-commit-vertical", "line", 550, 80) },
    },
    keyframes:
      K("git-commit-vertical", "drop", "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.15,.9);opacity:1}100%{transform:none;opacity:1}") +
      K("git-commit-vertical", "line", "0%{transform:none}35%{transform:scaleY(.6)}70%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  "git-compare-arrows": {
    note: "The two arrows slide past each other, each its own way, and the commits answer.",
    motion: {
      ...all(["p1", "p2"], { animation: A("git-compare-arrows", "left", 550) }),
      ...all(["p4", "p5"], { animation: A("git-compare-arrows", "right", 550, 60) }),
      p0: { animation: A("git-compare-arrows", "ping", 450, 250) },
      p3: { animation: A("git-compare-arrows", "ping", 450, 350) },
    },
    keyframes:
      K("git-compare-arrows", "left", spring("translateX(-1.2px)", "translateX(.2px)")) +
      K("git-compare-arrows", "right", spring("translateX(1.2px)", "translateX(-.2px)")) +
      K("git-compare-arrows", "ping", spring("scale(1.2)", "scale(.95)")),
  },

  "git-graph": {
    note: "The lines draw themselves and the commits pop in along them, the side branch last.",
    draw: ["p3", "p1", "p5"],
    motion: {
      p3: draw("git-graph", 500),
      p0: { animation: A("git-graph", "pop", 400, 0, "backwards") },
      p1: draw("git-graph", 300, 120),
      p2: { animation: A("git-graph", "pop", 400, 300, "backwards") },
      p5: draw("git-graph", 400, 250),
      p4: { animation: A("git-graph", "pop", 400, 520, "backwards") },
    },
    keyframes: drawKf("git-graph") + K("git-graph", "pop", POP_IN),
  },

  "git-merge-conflict": {
    note: "The cross draws itself and the two branches jar against each other.",
    draw: ["p2", "p3"],
    motion: {
      p2: draw("git-merge-conflict", 300),
      p3: draw("git-merge-conflict", 300, 120),
      ...all(["p0", "p4"], { animation: A("git-merge-conflict", "shake", 600, 300) }),
      p1: { animation: A("git-merge-conflict", "shakeb", 600, 300) },
    },
    keyframes:
      drawKf("git-merge-conflict") +
      K("git-merge-conflict", "shake", SHAKE) +
      K("git-merge-conflict", "shakeb", "0%{transform:none}25%{transform:translateX(.7px)}50%{transform:translateX(-.6px)}75%{transform:translateX(.3px)}100%{transform:none}"),
  },

  "git-pull-request-arrow": {
    note: "The change travels up the path from the branch, the arrowhead pushes ahead and the other commit pops.",
    draw: ["p4"],
    motion: {
      p2: { animation: A("git-pull-request-arrow", "ping", 450) },
      p4: draw("git-pull-request-arrow", 450, 60, true),
      p3: { animation: A("git-pull-request-arrow", "head", 450, 380) },
      p0: { animation: A("git-pull-request-arrow", "ping", 450, 480) },
    },
    keyframes:
      undrawKf("git-pull-request-arrow") +
      K("git-pull-request-arrow", "ping", spring("scale(1.2)", "scale(.95)")) +
      K("git-pull-request-arrow", "head", there("translateX(-1px)")),
  },

  "git-pull-request-closed": {
    note: "The cross draws itself and the open end of the request flinches.",
    draw: ["p0", "p1"],
    motion: {
      p0: draw("git-pull-request-closed", 300),
      p1: draw("git-pull-request-closed", 300, 120),
      ...all(["p2", "p4"], { ...at(18, 18), animation: A("git-pull-request-closed", "flinch", 600, 250) }),
    },
    keyframes: drawKf("git-pull-request-closed") + K("git-pull-request-closed", "flinch", FLINCH),
  },

  "git-pull-request-create": {
    note: "The commit pings, the path draws itself out, and the plus draws in at its end.",
    draw: ["p2", "p4", "p3"],
    motion: {
      p0: { animation: A("git-pull-request-create", "ping", 450) },
      p2: draw("git-pull-request-create", 400, 60),
      p4: draw("git-pull-request-create", 300, 350),
      p3: draw("git-pull-request-create", 300, 470),
    },
    keyframes: drawKf("git-pull-request-create") + K("git-pull-request-create", "ping", spring("scale(1.2)", "scale(.95)")),
  },

  "git-pull-request-create-arrow": {
    note: "The plus draws itself, the change travels up the path to the arrowhead, and the commit pops.",
    draw: ["p5", "p4", "p3"],
    motion: {
      p5: draw("git-pull-request-create-arrow", 300),
      p4: draw("git-pull-request-create-arrow", 300, 120),
      p3: draw("git-pull-request-create-arrow", 400, 200, true),
      p2: { animation: A("git-pull-request-create-arrow", "head", 450, 500) },
      p0: { animation: A("git-pull-request-create-arrow", "ping", 450, 580) },
    },
    keyframes:
      drawKf("git-pull-request-create-arrow") +
      undrawKf("git-pull-request-create-arrow") +
      K("git-pull-request-create-arrow", "head", there("translateX(-1px)")) +
      K("git-pull-request-create-arrow", "ping", spring("scale(1.2)", "scale(.95)")),
  },

  "git-pull-request-draft": {
    note: "The draft dashes fill in up from the commit, one after another.",
    motion: {
      p0: { animation: A("git-pull-request-draft", "ping", 450) },
      p3: { animation: A("git-pull-request-draft", "dash", 400, 120, "backwards") },
      p2: { animation: A("git-pull-request-draft", "dash", 400, 240, "backwards") },
      p1: { animation: A("git-pull-request-draft", "ping", 450, 360) },
    },
    keyframes:
      K("git-pull-request-draft", "ping", spring("scale(1.2)", "scale(.95)")) +
      K("git-pull-request-draft", "dash", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.5);opacity:1}100%{transform:none;opacity:1}"),
  },

  "globe-ban": {
    note: "The ban sign swells and its bar strikes across while the globe turns away.",
    draw: ["p1"],
    motion: {
      p4: { animation: A("globe-ban", "sign", 550) },
      p1: draw("globe-ban", 350, 120),
      ...all(["p0", "p2", "p3"], { ...at(12, 12), animation: A("globe-ban", "turn", 700) }),
    },
    keyframes: drawKf("globe-ban") + K("globe-ban", "sign", spring("scale(1.15)", "scale(.97)")) + K("globe-ban", "turn", spring("rotate(-7deg)", "rotate(2deg)")),
  },

  "globe-check": {
    note: "The globe turns a little and the tick draws itself in its corner.",
    draw: ["p0"],
    motion: { p0: draw("globe-check", 400, 100), p1: { ...at(12, 12), animation: A("globe-check", "turn", 700) } },
    keyframes: drawKf("globe-check") + K("globe-check", "turn", spring("rotate(-8deg)", "rotate(2deg)")),
  },

  "globe-code": {
    note: "The brackets open apart as the globe turns.",
    motion: {
      p0: { animation: A("globe-code", "left", 550) },
      p2: { animation: A("globe-code", "right", 550) },
      ...all(["p1", "p3"], { ...at(12, 12), animation: A("globe-code", "turn", 700, 60) }),
    },
    keyframes:
      K("globe-code", "left", spring("translateX(-1px)", "translateX(.2px)")) +
      K("globe-code", "right", spring("translateX(1px)", "translateX(-.2px)")) +
      K("globe-code", "turn", spring("rotate(-7deg)", "rotate(2deg)")),
  },

  "globe-off": struck("globe-off", "p6", ["p0", "p1", "p2", "p3", "p4", "p5"]),

  "globe-plus": {
    note: "The plus spins in at the corner and the globe turns to take it.",
    motion: {
      ...all(["p1", "p4"], { ...at(19, 5), animation: A("globe-plus", "plus", 550, 0, "backwards") }),
      ...all(["p0", "p2", "p3"], { ...at(12, 12), animation: A("globe-plus", "turn", 700, 150) }),
    },
    keyframes:
      K("globe-plus", "plus", "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}") +
      K("globe-plus", "turn", spring("rotate(-7deg)", "rotate(2deg)")),
  },

  "globe-x": {
    note: "The cross draws itself in the corner and the globe shakes.",
    draw: ["p0", "p2"],
    motion: { p0: draw("globe-x", 300), p2: draw("globe-x", 300, 120), p1: { animation: A("globe-x", "shake", 600, 250) } },
    keyframes: drawKf("globe-x") + K("globe-x", "shake", SHAKE),
  },

  "graph-hub": {
    note: "The hub swells, the links draw themselves down and the nodes pop in at their ends.",
    draw: ["p4", "p5", "p6"],
    motion: {
      p0: { animation: A("graph-hub", "hub", 500) },
      ...all(["p4", "p5", "p6"], (i) => draw("graph-hub", 350, 120 + i * 60)),
      ...all(["p1", "p2", "p3"], (i) => ({ animation: A("graph-hub", "pop", 400, 380 + i * 60, "backwards") })),
    },
    keyframes: drawKf("graph-hub") + K("graph-hub", "hub", spring("scale(1.15)", "scale(.96)")) + K("graph-hub", "pop", POP_IN),
  },

  "graph-star": {
    note: "The centre swells, the links draw themselves outward and the nodes pop in around it.",
    draw: ["p0", "p1", "p2", "p3", "p4"],
    motion: {
      p5: { animation: A("graph-star", "hub", 500) },
      p0: draw("graph-star", 300, 100),
      p2: draw("graph-star", 300, 150),
      p1: draw("graph-star", 300, 200),
      p3: draw("graph-star", 300, 250, true),
      p4: draw("graph-star", 300, 300),
      p6: { animation: A("graph-star", "pop", 400, 330, "backwards") },
      p8: { animation: A("graph-star", "pop", 400, 380, "backwards") },
      p7: { animation: A("graph-star", "pop", 400, 430, "backwards") },
      p9: { animation: A("graph-star", "pop", 400, 480, "backwards") },
      p10: { animation: A("graph-star", "pop", 400, 530, "backwards") },
    },
    keyframes: drawKf("graph-star") + undrawKf("graph-star") + K("graph-star", "hub", spring("scale(1.15)", "scale(.96)")) + K("graph-star", "pop", POP_IN),
  },

  "grid-2x2-check": {
    note: "The grid gives a squeeze and the tick draws itself in the empty cell.",
    draw: ["p1"],
    motion: { p0: { animation: A("grid-2x2-check", "frame", 500) }, p1: draw("grid-2x2-check", 400, 120) },
    keyframes: drawKf("grid-2x2-check") + K("grid-2x2-check", "frame", there("scale(.95)", 30)),
  },

  "grid-2x2-plus": {
    note: "The plus spins into the empty cell and the grid squeezes to take it.",
    motion: {
      ...all(["p1", "p2"], { ...at(19, 19), animation: A("grid-2x2-plus", "plus", 550, 0, "backwards") }),
      p0: { animation: A("grid-2x2-plus", "frame", 500, 180) },
    },
    keyframes:
      K("grid-2x2-plus", "plus", "0%{transform:rotate(-90deg) scale(0);opacity:0}60%{transform:rotate(10deg) scale(1.15);opacity:1}100%{transform:none;opacity:1}") +
      K("grid-2x2-plus", "frame", there("scale(.95)", 30)),
  },

  "grid-2x2-x": {
    note: "The cross draws itself in the empty cell and the grid shakes.",
    draw: ["p1", "p2"],
    motion: { p1: draw("grid-2x2-x", 300), p2: draw("grid-2x2-x", 300, 120), p0: { animation: A("grid-2x2-x", "shake", 600, 250) } },
    keyframes: drawKf("grid-2x2-x") + K("grid-2x2-x", "shake", SHAKE),
  },

  "grid-3x2": {
    note: "The frame gives a squeeze and the rules draw themselves in, splitting it into six.",
    draw: ["p1", "p2", "p0"],
    motion: {
      p3: { animation: A("grid-3x2", "frame", 500) },
      p1: draw("grid-3x2", 400, 60),
      p2: draw("grid-3x2", 400, 160),
      p0: draw("grid-3x2", 400, 240),
    },
    keyframes: drawKf("grid-3x2") + K("grid-3x2", "frame", there("scale(.95)", 30)),
  },

  "grid-3x3-off": struck("grid-3x3-off", "p1", ["p0", "p2", "p3", "p4", "p5", "p6", "p7", "p8"]),

  grip: {
    note: "A ripple runs across the dots from one corner to the other.",
    motion: {
      p2: { animation: A("grip", "dot", 450, 0) },
      ...all(["p0", "p5"], { animation: A("grip", "dot", 450, 70) }),
      ...all(["p1", "p3", "p8"], { animation: A("grip", "dot", 450, 140) }),
      ...all(["p4", "p6"], { animation: A("grip", "dot", 450, 210) }),
      p7: { animation: A("grip", "dot", 450, 280) },
    },
    keyframes: K("grip", "dot", spring("scale(1.6)", "scale(.9)")),
  },

  "guitar-electric": {
    note: "The guitar sways on its body as it is strummed, and the strings buzz.",
    motion: {
      ...all(["p0", "p1", "p3"], { ...at(8, 16), animation: A("guitar-electric", "sway", 750) }),
      p2: { animation: A("guitar-electric", "buzz", 500, 60) },
    },
    keyframes:
      K("guitar-electric", "sway", sway(-6)) +
      K("guitar-electric", "buzz", "0%{transform:none}20%{transform:translate(.4px,-.4px)}40%{transform:translate(-.4px,.4px)}60%{transform:translate(.25px,-.25px)}80%{transform:translate(-.1px,.1px)}100%{transform:none}"),
  },

  "half-note": {
    note: "The note bobs on its head like a beat, and the head squashes as it lands.",
    motion: {
      p1: { ...at(12, 18), animation: A("half-note", "bob", 600) },
      p0: { ...at(12, 18), animation: A("half-note", "head", 600) },
    },
    keyframes:
      K("half-note", "bob", "0%{transform:none}30%{transform:rotate(12deg)}60%{transform:rotate(-5deg)}100%{transform:none}") +
      K("half-note", "head", "0%{transform:none}30%{transform:rotate(12deg) scale(1.08,.92)}60%{transform:rotate(-5deg)}100%{transform:none}"),
  },

  ham: {
    note: "The ham is held up by its bone and waggled; the meat jiggles a beat behind.",
    motion: {
      p2: { ...at(19, 5), animation: A("ham", "waggle", 700) },
      ...all(["p0", "p1", "p3"], { ...at(19, 5), animation: A("ham", "meat", 700) }),
    },
    keyframes:
      K("ham", "waggle", sway(-7)) +
      K("ham", "meat", "0%{transform:none}30%{transform:rotate(-8deg) scale(1.03)}60%{transform:rotate(5deg) scale(.98)}85%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "handle-bottom-right": {
    note: "The handle is dragged out to the corner and springs back, the short ridge leading.",
    motion: {
      p1: { animation: A("handle-bottom-right", "drag", 550) },
      p0: { animation: A("handle-bottom-right", "drag2", 550, 60) },
    },
    keyframes:
      K("handle-bottom-right", "drag", spring("translate(1px,1px)", "translate(-.2px,-.2px)")) +
      K("handle-bottom-right", "drag2", spring("translate(.6px,.6px)", "translate(-.15px,-.15px)")),
  },

  "hand-metal": {
    note: "The hand pumps the horns from the wrist, the raised fingers flicking up.",
    motion: {
      ...all(["p0", "p1", "p3"], { ...at(12, 22), animation: A("hand-metal", "pump", 750) }),
      p2: { ...at(12, 22), animation: A("hand-metal", "horn", 750) },
    },
    keyframes:
      K("hand-metal", "pump", "0%{transform:none}20%{transform:rotate(-7deg)}40%{transform:rotate(3deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(1deg)}100%{transform:none}") +
      K("hand-metal", "horn", "0%{transform:none}20%{transform:rotate(-7deg) translateY(-.6px)}40%{transform:rotate(3deg)}60%{transform:rotate(-5deg) translateY(-.5px)}80%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "hard-drive-upload": {
    note: "The arrow rises out of the drive and comes back up from below; the lights blink.",
    motion: {
      ...all(["p0", "p1"], { animation: A("hard-drive-upload", "through", 650) }),
      p2: { origin: "50% 100%", animation: A("hard-drive-upload", "knock", 600, 100) },
      p3: { animation: A("hard-drive-upload", "blink", 500, 150) },
      p4: { animation: A("hard-drive-upload", "blink", 500, 250) },
    },
    keyframes:
      K("hard-drive-upload", "through", through("Y", -2.5)) +
      K("hard-drive-upload", "knock", KNOCK) +
      K("hard-drive-upload", "blink", "0%{opacity:1}30%{opacity:.15}60%{opacity:1}80%{opacity:.4}100%{opacity:1}"),
  },

  "hat-glasses": {
    note: "The hat tips up off the brow and the glasses peek up under it.",
    motion: {
      ...all(["p1", "p2"], { ...at(12, 11), animation: A("hat-glasses", "tip", 700) }),
      ...all(["p0", "p3", "p4"], { animation: A("hat-glasses", "peek", 550, 120) }),
    },
    keyframes:
      K("hat-glasses", "tip", "0%{transform:none}35%{transform:translateY(-1.4px) rotate(-7deg)}65%{transform:translateY(.2px) rotate(1deg)}100%{transform:none}") +
      K("hat-glasses", "peek", there("translateY(-.5px)")),
  },

  "hdmi-port": {
    note: "The contact pushes into the port and the port takes the push.",
    motion: {
      p1: { animation: A("hdmi-port", "pin", 450) },
      p0: { animation: A("hdmi-port", "knock", 600, 100) },
    },
    keyframes: K("hdmi-port", "pin", spring("translateY(1px)", "translateY(-.2px)")) + K("hdmi-port", "knock", KNOCK),
  },

  "heading-4": heading("heading-4", ["p4", "p0"], "p3", ["p1", "p2"]),
  "heading-5": heading("heading-5", ["p1", "p2"], "p0", ["p3", "p4"]),
  "heading-6": {
    ...heading("heading-6", ["p1", "p2"], "p0", ["p4"]),
    note: "The H gives a bounce, the 6 writes its stroke and its loop pops in.",
    motion: {
      ...heading("heading-6", ["p1", "p2"], "p0", ["p4"]).motion,
      p3: { animation: A("heading-6", "pop", 400, 420, "backwards") },
    },
    keyframes: heading("heading-6", ["p1", "p2"], "p0", ["p4"]).keyframes + K("heading-6", "pop", POP_IN),
  },

  "headphone-off": struck("headphone-off", "p2", ["p0", "p1", "p3", "p4"], 12, 13),

  "heart-shape": {
    note: "The heart beats twice.",
    motion: { p0: { animation: A("heart-shape", "beat", 700) } },
    keyframes: K("heart-shape", "beat", BEAT),
  },

  "heart-minus": {
    note: "The minus draws itself in the corner and the heart shrinks a little at the loss.",
    draw: ["p1"],
    motion: { p1: draw("heart-minus", 350), p0: { animation: A("heart-minus", "flinch", 600, 180) } },
    keyframes: drawKf("heart-minus") + K("heart-minus", "flinch", FLINCH),
  },

  "heart-x": {
    note: "The cross draws itself in the corner and the heart flinches.",
    draw: ["p0", "p1"],
    motion: { p0: draw("heart-x", 300), p1: draw("heart-x", 300, 120), p2: { animation: A("heart-x", "flinch", 600, 220) } },
    keyframes: drawKf("heart-x") + K("heart-x", "flinch", FLINCH),
  },

  "hiking-stick": {
    note: "The stick lifts and plants, its basket landing first and the grip following.",
    motion: {
      ...all(["p0", "p2"], { animation: A("hiking-stick", "plant", 650) }),
      p1: { animation: A("hiking-stick", "plant", 650, 50) },
    },
    keyframes: K("hiking-stick", "plant", "0%{transform:none}30%{transform:translate(.7px,-.9px)}55%{transform:translate(-.3px,.4px)}75%{transform:translate(.1px,-.1px)}100%{transform:none}"),
  },

  "rotate-ccw-clock": {
    note: "The hands sweep back round the clock and the arrow nudges back with them.",
    motion: {
      p2: { ...at(12, 12), animation: A("rotate-ccw-clock", "hands", 800) },
      ...all(["p0", "p1"], { ...at(12, 12), animation: A("rotate-ccw-clock", "rim", 700) }),
    },
    keyframes:
      K("rotate-ccw-clock", "hands", "from{transform:none}to{transform:rotate(-360deg)}") +
      K("rotate-ccw-clock", "rim", spring("rotate(-14deg)", "rotate(3deg)")),
  },

  "hockey-stick": {
    note: "The stick winds up and strikes from its grip, and the puck slides off.",
    motion: {
      ...all(["p1", "p2", "p3", "p4"], { ...at(20, 4), animation: A("hockey-stick", "swing", 700) }),
      ...all(["p0", "p5"], { animation: A("hockey-stick", "puck", 700) }),
    },
    keyframes:
      K("hockey-stick", "swing", "0%{transform:none}30%{transform:rotate(10deg)}55%{transform:rotate(-5deg)}80%{transform:rotate(1.5deg)}100%{transform:none}") +
      K("hockey-stick", "puck", "0%,50%{transform:none}70%{transform:translateX(-1.2px)}100%{transform:none}"),
  },

  house: {
    note: "The door swings open on its hinge and the house bobs.",
    motion: {
      p0: { origin: "0% 100%", animation: A("house", "door", 650) },
      p1: { origin: "50% 100%", animation: A("house", "knock", 600, 80) },
    },
    keyframes: K("house", "door", "0%{transform:none}35%{transform:scaleX(.4)}65%{transform:scaleX(1.05)}100%{transform:none}") + K("house", "knock", KNOCK),
  },

  hop: {
    note: "The hop sways from its stem, the leaves following one after another.",
    motion: {
      ...all(["p6", "p1"], { ...at(3.5, 3.5), animation: A("hop", "sway", 800) }),
      ...all(["p5", "p7"], { ...at(3.5, 3.5), animation: A("hop", "sway", 800, 50) }),
      ...all(["p0", "p2", "p3", "p4"], { ...at(3.5, 3.5), animation: A("hop", "sway", 800, 100) }),
    },
    keyframes: K("hop", "sway", sway(5)),
  },

  "hop-off": struck("hop-off", "p8", ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"]),

  "hourglass-cog": {
    note: "The cog turns a quarter while the hourglass tips a little, working.",
    motion: {
      ...cog("hourglass-cog", ["p0", "p1", "p2", "p3", "p5", "p6", "p7", "p8", "p12"], 18, 18),
      ...all(["p4", "p9", "p10", "p11"], { ...at(12, 12), animation: A("hourglass-cog", "tip", 700) }),
    },
    keyframes: cogKf("hourglass-cog") + K("hourglass-cog", "tip", spring("rotate(-6deg)", "rotate(1.5deg)")),
  },

  "house-cog": {
    note: "The cog turns a quarter on its hub and the house bobs.",
    motion: {
      ...cog("house-cog", ["p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"], 18, 18),
      ...all(["p0", "p1"], { origin: "50% 100%", animation: A("house-cog", "knock", 600, 100) }),
    },
    keyframes: cogKf("house-cog") + K("house-cog", "knock", KNOCK),
  },

  "house-plug": {
    note: "The plug pushes up into its socket and the house takes the knock.",
    motion: {
      ...all(["p0", "p1", "p2"], { animation: A("house-plug", "plug", 550) }),
      p3: { origin: "50% 100%", animation: A("house-plug", "knock", 600, 150) },
    },
    keyframes: K("house-plug", "plug", spring("translateY(-.9px)", "translateY(.2px)")) + K("house-plug", "knock", KNOCK),
  },

  houses: {
    note: "The front house hops, then the one behind it.",
    motion: {
      ...all(["p1", "p2"], { origin: "50% 100%", animation: A("houses", "hop", 600) }),
      p0: { origin: "50% 100%", animation: A("houses", "hop", 600, 120) },
    },
    keyframes: K("houses", "hop", "0%{transform:none}30%{transform:translateY(-1.2px) scale(.98,1.03)}55%{transform:translateY(.2px) scale(1.03,.96)}80%{transform:none}100%{transform:none}"),
  },

  "ice-cream-bowl": {
    note: "The bowl gives a little squash and the scoops wobble on top, one after another.",
    motion: {
      p0: { origin: "50% 100%", animation: A("ice-cream-bowl", "bowl", 600) },
      p2: { origin: "50% 100%", animation: A("ice-cream-bowl", "scoop", 650, 60) },
      p1: { origin: "50% 100%", animation: A("ice-cream-bowl", "scoop", 650, 140) },
    },
    keyframes:
      K("ice-cream-bowl", "bowl", there("scale(1.03,.95)", 30)) +
      K("ice-cream-bowl", "scoop", "0%{transform:none}30%{transform:rotate(-7deg)}60%{transform:rotate(5deg)}85%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  "id-card-lanyard": {
    note: "The badge swings on its lanyard, the straps following less.",
    motion: {
      ...all(["p0", "p1", "p2", "p4"], { ...at(12, 2), animation: A("id-card-lanyard", "swing", 800) }),
      p3: { ...at(9, 2), animation: A("id-card-lanyard", "strap", 800) },
    },
    keyframes: K("id-card-lanyard", "swing", sway(6)) + K("id-card-lanyard", "strap", sway(3)),
  },

  "image-play": {
    note: "The play mark steps forward and the sun rises in the picture.",
    motion: {
      p0: { animation: A("image-play", "play", 550) },
      p3: { animation: A("image-play", "sun", 600, 100) },
    },
    keyframes:
      K("image-play", "play", "0%{transform:none}35%{transform:translateX(1.2px) scale(1.08)}65%{transform:translateX(-.2px)}100%{transform:none}") +
      K("image-play", "sun", there("translateY(-.8px)", 40)),
  },

  "image-up": {
    note: "The arrow rises out of the picture's corner and comes back up from below; the sun rises with it.",
    motion: {
      ...all(["p1", "p2"], { animation: A("image-up", "through", 650) }),
      p3: { animation: A("image-up", "sun", 600) },
    },
    keyframes: K("image-up", "through", through("Y", -2.5)) + K("image-up", "sun", there("translateY(-1px)", 40)),
  },

  "inspection-panel": {
    note: "The screws pop out one after another round the panel, which lifts a little.",
    motion: {
      ...all(["p1", "p2", "p4", "p3"], (i) => ({ animation: A("inspection-panel", "screw", 400, i * 70) })),
      p0: { animation: A("inspection-panel", "panel", 550, 220) },
    },
    keyframes: K("inspection-panel", "screw", spring("scale(1.8)", "scale(.9)")) + K("inspection-panel", "panel", there("scale(1.03)")),
  },

  "iteration-ccw": {
    note: "The loop draws itself round and the arrowhead pushes on when it gets there.",
    draw: ["p1"],
    motion: { p1: draw("iteration-ccw", 550), p0: { animation: A("iteration-ccw", "head", 450, 420) } },
    keyframes: drawKf("iteration-ccw") + K("iteration-ccw", "head", spring("translateX(1px)", "translateX(-.2px)")),
  },

  "square-kanban": {
    note: "The three columns shrink and grow in turn, as the cards move between them.",
    motion: all(["p1", "p2", "p3"], (i) => ({ origin: "50% 0%", animation: A("square-kanban", "col", 600, i * 70) })),
    keyframes: K("square-kanban", "col", "0%{transform:none}35%{transform:scaleY(.65)}70%{transform:scaleY(1.06)}100%{transform:none}"),
  },

  "square-dashed-kanban": {
    note: "The columns shrink and grow in turn while a pulse runs round the dashed edge.",
    motion: {
      ...all(["p0", "p1", "p2"], (i) => ({ origin: "50% 0%", animation: A("square-dashed-kanban", "col", 600, i * 70) })),
      ...all(["p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14"], (i) => ({
        animation: A("square-dashed-kanban", "dash", 350, i * 35),
      })),
    },
    keyframes:
      K("square-dashed-kanban", "col", "0%{transform:none}35%{transform:scaleY(.65)}70%{transform:scaleY(1.06)}100%{transform:none}") +
      K("square-dashed-kanban", "dash", there("scale(.6)", 40)),
  },

  kayak: {
    note: "The paddle dips one side then the other about the middle, and the kayak rocks under it.",
    motion: {
      ...all(["p0", "p2", "p3"], { ...at(12, 12), animation: A("kayak", "paddle", 850) }),
      p1: { ...at(12, 12), animation: A("kayak", "rock", 850) },
    },
    keyframes:
      K("kayak", "paddle", "0%{transform:none}25%{transform:rotate(-14deg)}55%{transform:rotate(10deg)}80%{transform:rotate(-3deg)}100%{transform:none}") +
      K("kayak", "rock", "0%{transform:none}30%{transform:rotate(3deg)}60%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "kazakh-tenge": {
    note: "The two bars draw across and the stem draws down from them.",
    draw: ["p1", "p2", "p0"],
    motion: { p1: draw("kazakh-tenge", 350), p2: draw("kazakh-tenge", 350, 100), p0: draw("kazakh-tenge", 400, 220) },
    keyframes: drawKf("kazakh-tenge"),
  },

  "key-square": {
    note: "The key's head turns while its shaft pushes into the lock.",
    motion: {
      ...all(["p0", "p1"], { ...at(15, 9.25), animation: A("key-square", "turn", 700) }),
      p2: { animation: A("key-square", "push", 700) },
    },
    keyframes:
      K("key-square", "turn", "0%{transform:none}35%{transform:rotate(-25deg)}65%{transform:rotate(6deg)}100%{transform:none}") +
      K("key-square", "push", spring("translate(-.6px,.6px)", "translate(.15px,-.15px)")),
  },

  "lamp-ceiling": {
    note: "The lamp sways on its cord and the bulb swings a beat behind.",
    motion: {
      ...all(["p0", "p2"], { ...at(12, 2), animation: A("lamp-ceiling", "sway", 800) }),
      p1: { ...at(12, 2), animation: A("lamp-ceiling", "bulb", 800) },
    },
    keyframes: K("lamp-ceiling", "sway", sway(6)) + K("lamp-ceiling", "bulb", "0%{transform:none}30%{transform:rotate(8deg)}60%{transform:rotate(-5deg)}85%{transform:rotate(1.5deg)}100%{transform:none}"),
  },

  "lamp-floor": {
    note: "The shade flickers on and settles on its pole, which gives as it does.",
    motion: {
      p1: { origin: "50% 100%", animation: A("lamp-floor", "shade", 750) },
      p0: { origin: "50% 100%", animation: A("lamp-floor", "pole", 500) },
      p2: { animation: A("lamp-floor", "base", 500, 60) },
    },
    keyframes:
      K("lamp-floor", "shade", "0%{transform:none;opacity:1}15%{opacity:.35}25%{opacity:1}35%{opacity:.5;transform:translateY(-.6px)}50%{opacity:1}70%{transform:translateY(.2px)}100%{transform:none;opacity:1}") +
      K("lamp-floor", "pole", there("scaleY(1.06)")) +
      K("lamp-floor", "base", there("scaleX(1.1)")),
  },

  "lamp-wall-down": {
    note: "The shade swings from the end of the arm and settles.",
    motion: {
      p0: { ...at(14, 13), animation: A("lamp-wall-down", "swing", 800) },
      p2: { ...at(8, 6), animation: A("lamp-wall-down", "arm", 800) },
    },
    keyframes: K("lamp-wall-down", "swing", sway(9)) + K("lamp-wall-down", "arm", sway(1.5)),
  },

  "lamp-wall-up": {
    note: "The shade wobbles on the end of the arm and settles.",
    motion: {
      p0: { ...at(14, 11), animation: A("lamp-wall-up", "wobble", 800) },
      p2: { ...at(8, 18), animation: A("lamp-wall-up", "arm", 800) },
    },
    keyframes: K("lamp-wall-up", "wobble", sway(-8)) + K("lamp-wall-up", "arm", sway(-1.5)),
  },

  "land-plot": {
    note: "The flag flutters on its pole and the plot's lines draw themselves across.",
    draw: ["p2", "p3"],
    motion: {
      p0: { ...at(12, 5), animation: A("land-plot", "flag", 800) },
      p2: draw("land-plot", 400, 100),
      p3: draw("land-plot", 400, 220),
    },
    keyframes: drawKf("land-plot") + K("land-plot", "flag", "0%{transform:none}25%{transform:scaleX(.7)}50%{transform:scaleX(1.08)}75%{transform:scaleX(.92)}100%{transform:none}"),
  },

  "laptop-minimal": {
    note: "The lid lifts open a little and the base draws itself across as it wakes.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 100%", animation: A("laptop-minimal", "lid", 600) },
      p1: draw("laptop-minimal", 450, 100),
    },
    keyframes: drawKf("laptop-minimal") + K("laptop-minimal", "lid", spring("scaleY(1.06)", "scaleY(.98)")),
  },

  laser: {
    note: "The emitter flashes, its rays burst out, and the beam shoots to the right.",
    draw: ["p2"],
    motion: {
      p6: { animation: A("laser", "core", 500) },
      ...all(["p0", "p1", "p3", "p4", "p5", "p7", "p8"], { ...at(9, 12), animation: A("laser", "burst", 550, 60) }),
      p2: draw("laser", 350, 120, true),
    },
    keyframes:
      drawKf("laser") +
      undrawKf("laser") +
      K("laser", "core", spring("scale(2)", "scale(.9)")) +
      K("laser", "burst", spring("scale(1.25)", "scale(.95)")),
  },
};

/** the folder outline, up to where each badge's gap begins */
const FOLDER_TOP = "H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2";
/** a hole round a picture's sun (wound against the frame: this one for a frame drawn clockwise), so the sun stays a solid disc on the filled frame */
const SUN_HOLE = " M9 4.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 1 0 0-9.5Z";

/** fill areas for outlines the source draws open (see FILLS in import-icons.ts) */
export const fills: Record<string, string> = {
  // folders with a corner left open for a badge: the fill stops short of it
  "folder-git-2": `M9 20${FOLDER_TOP}v5H17.75A4.75 4.75 0 0 0 13 7.25A4.75 4.75 0 0 0 8.25 12V20Z`,
  "folder-heart": `M10.638 20${FOLDER_TOP}v3.417L15 10.6L11 13.5Z`,
  "folder-key": `M13 20${FOLDER_TOP}v1.36L19 9.25A2.75 2.75 0 0 0 16.25 12V16Z`,
  "folder-user": `M10.254 20${FOLDER_TOP}V9.255H18A5.75 5.75 0 0 0 12.25 15Z`,
  "folder-users": `M5.254 20${FOLDER_TOP}V9.255H13A5.75 5.75 0 0 0 7.25 15Z`,
  // folders whose left side opens for the arrow
  "folder-input": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Z",
  "folder-output": "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5Z",
  "folder-symlink": "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7Z",
  // the open folder, as folder-open
  "folder-open-dot": "M2 5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2Z",
  // the house, cut across short of the cog
  "house-cog": "M10.584 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.527l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10.001v.583L16.77 11.363A6.75 6.75 0 0 0 11.363 16.77Z",
  // the heart, cut across short of the minus / the cross
  "heart-minus":
    "M14.876 18.99l-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572L15 12.25A2.75 2.75 0 0 0 12.25 15V17Z",
  "heart-x":
    "M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352L12.75 17.5V12.5A2.75 2.75 0 0 1 15.5 9.75Z",
  // the picture frame, cut short of the play mark / the arrow
  "image-play": "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6L12.25 15A3.75 3.75 0 0 1 17.875 11.75Z M9 4.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 1 1 0-9.5Z",
  "image-up": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10L18.945 14.555A2.75 2.75 0 0 0 15.055 14.555L12.055 17.555A2.75 2.75 0 0 0 11.25 19.5Z" + SUN_HOLE,
  // the germ's body and the hop's cone the slash breaks
  "germ-off": "M9.33 7.035c-.51 1.478-1.786 2.93-3.09 3.794A5 5 0 0 0 9 20a12.1 12.1 0 0 0 11.902-9.916A6 6 0 0 0 9.33 7.035Z",
  "hop-off":
    "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88Z",
  // the bowl under the scoops
  "ice-cream-bowl": "M4 11h16c0 3.31-3 6-8 6s-8-2.69-8-6Z",
  // the plot, cut short of the flagpole's foot
  "land-plot": "M8 11.99l-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12H14.75A2.75 2.75 0 0 1 9.25 12Z",
};
