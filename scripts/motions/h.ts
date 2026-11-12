import type { Entry, Override } from "./types";

/** Batch h: its icons (pnpm import-icons h) and their motions. */
export const list: Entry[] = [
  ["Droplets", "droplets", "Droplets", "weather", "bounce", ["water", "humidity", "rain", "liquid"], "The drops fall and land."],
  ["Drum", "drum", "Drum", "media", "bounce", ["music", "beat", "percussion", "rhythm"], "The sticks strike the drum."],
  ["Drumstick", "drumstick", "Drumstick", "food", "wiggle", ["chicken", "meat", "food", "dinner"], "It wiggles."],
  ["Dumbbell", "dumbbell", "Dumbbell", "health", "bounce", ["gym", "fitness", "workout", "weights"], "It is lifted."],
  ["Earbuds", "earbuds", "Earbuds", "devices", "bounce", ["headphones", "audio", "listen", "wireless"], "They bob."],
  ["EarOff", "ear-off", "Not listening", "media", "shake", ["deaf", "mute", "hearing", "off"], "It shakes."],
  ["Earth", "earth", "Earth", "travel", "spin", ["world", "planet", "global", "map"], "It turns."],
  ["Eclipse", "eclipse", "Eclipse", "weather", "pop", ["moon", "sun", "shadow", "contrast"], "The shadow passes."],
  ["SquarePen", "square-pen", "Edit", "actions", "wiggle", ["edit", "write", "compose", "new"], "The pen writes."],
  ["Pen", "pen", "Pen", "actions", "wiggle", ["write", "edit", "draw", "signature"], "The pen writes."],
  ["Egg", "egg", "Egg", "food", "wiggle", ["breakfast", "food", "easter"], "It wobbles."],
  ["EggFried", "egg-fried", "Fried egg", "food", "wiggle", ["breakfast", "food", "cooking"], "It sizzles."],
  ["Music2", "music-note", "Note", "media", "wiggle", ["music", "note", "song", "audio"], "The note bobs."],
  ["Eject", "eject", "Eject", "media", "nudge-up", ["eject", "remove", "disc", "unmount"], "It pushes up."],
  ["Ellipsis", "more-horizontal", "More", "navigation", "wave", ["more", "options", "menu", "dots"], "The dots hop."],
  ["EllipsisVertical", "more-vertical", "More (vertical)", "navigation", "wave", ["more", "options", "menu", "kebab"], "The dots hop."],
  ["Equal", "equal", "Equals", "text", "pop", ["equal", "math", "calculator", "same"], "The lines meet."],
  ["Euro", "euro", "Euro", "commerce", "pop", ["money", "currency", "price", "eur"], "It draws itself."],
  ["EvCharger", "ev-charger", "EV charger", "travel", "flash", ["electric", "car", "charging", "station"], "It charges."],
  ["EthernetPort", "ethernet", "Ethernet", "devices", "pop", ["network", "port", "cable", "lan"], "The plug clicks in."],
  ["Expand", "expand", "Expand", "actions", "pop", ["fullscreen", "grow", "enlarge", "maximize"], "The arrows push out."],
  ["EyeClosed", "eye-closed", "Eye closed", "actions", "blink", ["hide", "sleep", "closed", "private"], "The lashes flutter."],
  ["EyeOff", "eye-off", "Hide", "actions", "blink", ["hide", "hidden", "invisible", "private"], "The slash crosses it out."],
  ["Laugh", "laugh", "Laugh", "people", "bounce", ["happy", "funny", "emoji", "joy"], "It laughs."],
  ["Smile", "smile", "Smile", "people", "pop", ["happy", "emoji", "face", "good"], "It smiles."],
  ["SmilePlus", "smile-plus", "Add reaction", "people", "pop", ["reaction", "emoji", "react", "add"], "It smiles."],
  ["Factory", "factory", "Factory", "app", "pulse", ["industry", "manufacturing", "plant", "production"], "Its chimneys puff."],
  ["Fan", "fan", "Fan", "devices", "spin", ["cooling", "air", "ventilation", "breeze"], "It spins."],
  ["FastForward", "fast-forward", "Fast forward", "media", "nudge-right", ["skip", "forward", "speed", "next"], "It speeds ahead."],
  ["Feather", "feather", "Feather", "nature", "float", ["light", "bird", "write", "soft"], "It floats."],
  ["File", "file", "File", "files", "tilt", ["file", "page", "document", "blank"], "The page lifts."],
  ["FileArchive", "file-archive", "Archive file", "files", "tilt", ["zip", "archive", "compress", "file"], "It zips."],
  ["FileChartColumn", "file-chart", "Report", "files", "tilt", ["report", "chart", "stats", "file"], "The bars grow."],
  ["FileClock", "file-clock", "Recent file", "files", "tilt", ["recent", "history", "pending", "file"], "The clock ticks."],
  ["FileCode", "file-code", "Code file", "files", "tilt", ["code", "source", "script", "file"], "The brackets open."],
  ["FileCog", "file-cog", "File settings", "files", "tilt", ["settings", "config", "preferences", "file"], "The cog turns."],
  ["FileDiff", "file-diff", "File diff", "development", "tilt", ["diff", "compare", "changes", "patch"], "The plus and minus swap."],
  ["FilePen", "file-pen", "Edit file", "files", "tilt", ["edit", "write", "rename", "file"], "The pen writes."],
  ["FileWarning", "file-warning", "File warning", "files", "shake", ["error", "warning", "problem", "file"], "It shakes."],
  ["FileImage", "file-image", "Image file", "files", "tilt", ["image", "picture", "photo", "file"], "The sun rises."],
  ["FileLock", "file-lock", "Locked file", "files", "shake", ["locked", "private", "secure", "file"], "The lock rattles."],
  ["FileMinus", "file-minus", "Remove file", "files", "tilt", ["remove", "delete", "minus", "file"], "The minus draws in."],
  ["FilePlus", "file-plus", "New file", "files", "tilt", ["new", "add", "create", "file"], "The plus draws in."],
  ["FileX", "file-x", "File error", "files", "shake", ["error", "delete", "remove", "file"], "The cross draws in."],
  ["FilePlay", "file-video", "Video file", "files", "tilt", ["video", "movie", "media", "file"], "The play mark steps forward."],
  ["FileQuestion", "file-question", "Unknown file", "files", "tilt", ["unknown", "help", "question", "file"], "The question mark nods."],
  ["Files", "files", "Files", "files", "tilt", ["files", "documents", "copies", "pages"], "The pages fan out."],
  ["FileSearch", "file-search", "Find file", "files", "tilt", ["search", "find", "look", "file"], "The lens searches."],
  ["FileSpreadsheet", "file-spreadsheet", "Spreadsheet", "files", "tilt", ["sheet", "excel", "table", "csv"], "The cells fill."],
  ["FileTerminal", "file-terminal", "Script file", "files", "tilt", ["terminal", "shell", "script", "file"], "The prompt types."],
  ["FileUp", "file-up", "Upload file", "files", "nudge-up", ["upload", "file", "send", "export"], "The arrow rises."],
  ["FileUser", "file-user", "Profile file", "files", "tilt", ["profile", "resume", "cv", "contact"], "The person nods."],
  ["Funnel", "filter", "Filter", "actions", "nudge-down", ["filter", "funnel", "sort", "narrow"], "It drips."],
  ["FunnelPlus", "filter-plus", "Add filter", "actions", "pop", ["filter", "add", "funnel", "new"], "The plus draws in."],
  ["Fingerprint", "fingerprint", "Fingerprint", "status", "draw", ["touch id", "biometric", "identity", "secure"], "The ridges draw themselves."],
  ["Fish", "fish", "Fish", "food", "wiggle", ["fish", "seafood", "sea", "pet"], "It swims."],
  ["Flag", "flag", "Flag", "status", "wave", ["report", "mark", "goal", "country"], "The flag waves."],
  ["Flashlight", "flashlight", "Flashlight", "devices", "flash", ["torch", "light", "lamp"], "It switches on."],
  ["FlaskConical", "flask", "Lab", "development", "wiggle", ["experiment", "lab", "science", "beta"], "The liquid sloshes."],
  ["FlipHorizontal", "flip-horizontal", "Flip horizontal", "actions", "pop", ["mirror", "flip", "reflect"], "It flips across."],
  ["FlipVertical", "flip-vertical", "Flip vertical", "actions", "pop", ["mirror", "flip", "reflect"], "It flips over."],
  ["Flower", "flower", "Flower", "nature", "spin-90", ["flower", "spring", "garden", "bloom"], "It blooms."],
  ["Focus", "focus", "Focus", "actions", "pop", ["focus", "target", "aim", "center"], "The corners close in."],
  ["Folder", "folder", "Folder", "files", "bounce", ["folder", "directory", "files"], "The folder opens."],
  ["FolderArchive", "folder-archive", "Archive folder", "files", "bounce", ["archive", "zip", "folder"], "It zips."],
  ["FolderCheck", "folder-check", "Folder done", "files", "draw", ["done", "folder", "synced"], "The tick draws in."],
  ["FolderCode", "folder-code", "Code folder", "files", "bounce", ["code", "project", "repo", "folder"], "The brackets open."],
  ["FolderDown", "folder-down", "Download to folder", "files", "nudge-down", ["download", "save", "folder"], "The arrow drops in."],
  ["FolderLock", "folder-lock", "Locked folder", "files", "shake", ["locked", "private", "folder"], "The lock rattles."],
  ["FolderMinus", "folder-minus", "Remove folder", "files", "bounce", ["remove", "delete", "folder"], "The minus draws in."],
  ["FolderPlus", "folder-plus", "New folder", "files", "bounce", ["new", "add", "create", "folder"], "The plus draws in."],
  ["Folders", "folders", "Folders", "files", "bounce", ["folders", "directories", "collection"], "The back folder shifts."],
  ["FolderSearch", "folder-search", "Search folder", "files", "bounce", ["search", "find", "browse", "folder"], "The lens searches."],
  ["FolderSync", "folder-sync", "Sync folder", "files", "spin", ["sync", "backup", "refresh", "folder"], "The arrows turn."],
  ["FolderTree", "folder-tree", "Folder tree", "files", "draw", ["tree", "structure", "hierarchy", "explorer"], "The branches grow."],
  ["FolderUp", "folder-up", "Upload folder", "files", "nudge-up", ["upload", "folder", "parent"], "The arrow rises."],
  ["FolderX", "folder-x", "Folder error", "files", "shake", ["error", "delete", "folder"], "The cross draws in."],
  ["Footprints", "footprints", "Footprints", "health", "wave", ["steps", "walk", "track", "trail"], "They step."],
  ["Utensils", "utensils", "Restaurant", "food", "wiggle", ["food", "dining", "restaurant", "eat"], "The fork and knife clink."],
  ["Forward", "forward", "Forward", "communication", "nudge-right", ["forward", "share", "send", "mail"], "It steps forward."],
  ["Frame", "frame", "Frame", "shapes", "pop", ["frame", "crop", "artboard", "layout"], "The guides slide."],
  ["Fuel", "fuel", "Fuel", "travel", "pulse", ["gas", "petrol", "station", "fuel"], "The hose sways."],
  ["Fullscreen", "fullscreen", "Fullscreen", "actions", "pop", ["fullscreen", "expand", "view"], "The corners stretch."],
  ["GalleryThumbnails", "gallery", "Gallery", "media", "nudge-left", ["gallery", "slides", "carousel", "thumbnails"], "The slides step."],
  ["Gamepad2", "gamepad", "Games", "devices", "wiggle", ["game", "controller", "play", "console"], "The buttons press."],
  ["Gavel", "gavel", "Law", "app", "swing", ["law", "judge", "auction", "legal"], "It strikes."],
  ["Gem", "gem", "Premium", "commerce", "pop", ["diamond", "premium", "jewel", "value"], "It sparkles."],
  ["Ghost", "ghost", "Ghost", "app", "float", ["ghost", "halloween", "hidden", "spooky"], "It floats."],
  ["Gift", "gift", "Gift", "commerce", "bounce", ["present", "gift", "reward", "birthday"], "The lid pops."],
  ["GitBranch", "git-branch", "Branch", "development", "draw", ["git", "branch", "version", "fork"], "The branch grows."],
  ["GitCommitHorizontal", "git-commit", "Commit", "development", "pop", ["git", "commit", "save", "version"], "The commit lands."],
  ["GitCompare", "git-compare", "Compare", "development", "pop", ["git", "compare", "diff"], "The changes swap."],
  ["GitFork", "git-fork", "Fork", "development", "draw", ["git", "fork", "copy", "branch"], "The fork splits."],
  ["GitMerge", "git-merge", "Merge", "development", "draw", ["git", "merge", "join", "combine"], "The branch joins."],
  ["GitPullRequest", "git-pull-request", "Pull request", "development", "draw", ["git", "pull request", "review", "pr"], "The change travels."],
  ["Glasses", "glasses", "Glasses", "people", "tilt", ["read", "vision", "accessibility", "nerd"], "They lift."],
  ["GlassWater", "glass-water", "Water", "food", "wiggle", ["drink", "water", "glass", "hydrate"], "The water sloshes."],
  ["GlobeLock", "globe-lock", "Private network", "status", "shake", ["vpn", "secure", "private", "web"], "The lock rattles."],
  ["FireExtinguisher", "fire-extinguisher", "Fire extinguisher", "health", "shake", ["fire", "safety", "emergency"], "It sprays."],
  ["FoldVertical", "fold-vertical", "Collapse", "actions", "pop", ["fold", "collapse", "compress", "shrink"], "The arrows fold in."],
  ["Forklift", "forklift", "Forklift", "travel", "nudge-right", ["warehouse", "logistics", "shipping", "stock"], "The forks lift."],
  ["FerrisWheel", "ferris-wheel", "Ferris wheel", "travel", "spin", ["fair", "fun", "park", "ride"], "It turns."],
  ["FileKey", "file-key", "Key file", "files", "tilt", ["key", "license", "password", "certificate"], "The key turns."],
];


/** the smooth curve (no overshoot) for drawings and keyframe motions that carry their own bounce */
const E = "cubic-bezier(.22,1,.36,1)";
/** a keyframe block named after the icon */
const kf = (icon: string, name: string, frames: string) => `@keyframes ki-${icon}-${name}{${frames}}`;
/** an animation of one of the icon's keyframes */
const an = (icon: string, name: string, ms: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${E} ${delay}ms${fill ? " " + fill : ""}`;
/** a line drawn in from its start (needs the part in `draw`), or from its end */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const drawIn = (icon: string, ms: number, delay = 0, reverse = false) => ({
  from: { strokeDasharray: 1 },
  animation: an(icon, reverse ? "undraw" : "draw", ms, delay, "backwards"),
});
/** a small bounce of a folder or page that takes a knock */
const knockKf = (icon: string) => kf(icon, "knock", "0%{transform:none}30%{transform:translateY(.6px) scale(1.02,.97)}60%{transform:translateY(-.2px)}100%{transform:none}");
/** pops in from small (a node, a dot) */
const popInKf = (icon: string) => kf(icon, "pop", "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}");
/** a lock: the shackle lifts and drops, the body rattles from its top */
const lockKf = (icon: string) =>
  kf(icon, "shackle", "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}75%{transform:none}100%{transform:none}") +
  kf(icon, "rattle", "0%,30%{transform:none}45%{transform:rotate(-7deg)}62%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}");
const lock = (icon: string, body: string, shackle: string) => ({
  [shackle]: { animation: an(icon, "shackle", 700) },
  [body]: { origin: "50% 0%", animation: an(icon, "rattle", 700) },
});
/** a magnifier that circles over what it searches */
const searchKf = (icon: string) =>
  kf(icon, "search", "0%{transform:none}25%{transform:translate(-.9px,.2px)}50%{transform:translate(0,-.9px)}75%{transform:translate(.9px,.2px)}100%{transform:none}");
/** an arrow that leaves one way and comes back in from the other side */
const throughKf = (icon: string, dy: number) =>
  kf(icon, "through", `0%{transform:none;opacity:1}35%{transform:translateY(${dy}px);opacity:0}36%{transform:translateY(${-dy}px);opacity:0}100%{transform:none;opacity:1}`);
/** a pen that scribbles around its nib */
const scribbleKf = (icon: string) =>
  kf(icon, "write", "0%{transform:none}22%{transform:translate(-.7px,.5px) rotate(-5deg)}45%{transform:translate(.6px,-.3px) rotate(3deg)}68%{transform:translate(-.4px,.4px) rotate(-2deg)}100%{transform:none}");

export const motions: Record<string, Override> = {
  droplets: {
    note: "The big drop falls and lands with a squash, then the small one follows.",
    motion: {
      p1: { origin: "50% 100%", animation: an("droplets", "fall", 600, 0, "backwards") },
      p0: { origin: "50% 100%", animation: an("droplets", "fall", 600, 120, "backwards") },
    },
    keyframes: kf("droplets", "fall", "0%{transform:translateY(-2.5px);opacity:0}45%{transform:translateY(.3px) scale(1.06,.9);opacity:1}70%{transform:scale(.97,1.03)}100%{transform:none;opacity:1}"),
  },

  drum: {
    note: "The left stick and then the right lift and strike; the drum skin gives at each hit.",
    motion: {
      p0: { box: "view-box", origin: "2px 2px", animation: an("drum", "left", 600) },
      p1: { box: "view-box", origin: "22px 2px", animation: an("drum", "right", 600, 160) },
      p2: { animation: an("drum", "skin", 780) },
      p3: { animation: an("drum", "skin", 780) },
      p4: { animation: an("drum", "skin", 780) },
      p5: { animation: an("drum", "skin", 780) },
      p6: { animation: an("drum", "skin", 780) },
    },
    keyframes:
      kf("drum", "left", "0%{transform:none}30%{transform:rotate(-12deg)}48%{transform:rotate(5deg)}70%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("drum", "right", "0%{transform:none}30%{transform:rotate(12deg)}48%{transform:rotate(-5deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("drum", "skin", "0%,30%{transform:none}38%{transform:translateY(.5px)}50%{transform:none}58%{transform:translateY(.5px)}72%,100%{transform:none}"),
  },

  drumstick: {
    note: "The drumstick is picked up by its bone and waggled; the meat jiggles a beat behind.",
    motion: {
      p1: { box: "view-box", origin: "5px 19px", animation: an("drumstick", "waggle", 700) },
      p0: { box: "view-box", origin: "5px 19px", animation: an("drumstick", "meat", 700) },
    },
    keyframes:
      kf("drumstick", "waggle", "0%{transform:none}25%{transform:rotate(-8deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("drumstick", "meat", "0%{transform:none}30%{transform:rotate(-9deg) scale(1.03)}60%{transform:rotate(6deg) scale(.98)}85%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  dumbbell: {
    note: "The dumbbell is lifted, its far weight rising a little higher, and set down again.",
    motion: {
      p0: { animation: an("dumbbell", "hi", 700) },
      p2: { animation: an("dumbbell", "hi", 700) },
      p4: { animation: an("dumbbell", "mid", 700) },
      p3: { animation: an("dumbbell", "lo", 700) },
      p1: { animation: an("dumbbell", "lo", 700) },
    },
    keyframes:
      kf("dumbbell", "hi", "0%{transform:none}35%{transform:translateY(-2.2px)}55%{transform:translateY(-1.8px)}100%{transform:none}") +
      kf("dumbbell", "mid", "0%{transform:none}35%{transform:translateY(-1.7px)}55%{transform:translateY(-1.4px)}100%{transform:none}") +
      kf("dumbbell", "lo", "0%{transform:none}35%{transform:translateY(-1.2px)}55%{transform:translateY(-1px)}100%{transform:none}"),
  },

  earbuds: {
    note: "The two buds bob to a beat, one after the other, tipping on their stems.",
    motion: {
      p1: { origin: "50% 15%", animation: an("earbuds", "left", 600) },
      p0: { origin: "50% 15%", animation: an("earbuds", "right", 600, 140) },
    },
    keyframes:
      kf("earbuds", "left", "0%{transform:none}30%{transform:translateY(-.8px) rotate(-8deg)}60%{transform:rotate(3deg)}100%{transform:none}") +
      kf("earbuds", "right", "0%{transform:none}30%{transform:translateY(-.8px) rotate(8deg)}60%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  "ear-off": {
    note: "The slash draws itself across the ear, which gives a small shake.",
    draw: ["p4"],
    motion: {
      p4: drawIn("ear-off", 420),
      p0: { animation: an("ear-off", "shake", 600, 200) },
      p1: { animation: an("ear-off", "shake", 600, 200) },
      p2: { animation: an("ear-off", "shake", 600, 200) },
      p3: { animation: an("ear-off", "shake", 600, 200) },
    },
    keyframes: drawKf("ear-off") + kf("ear-off", "shake", "0%{transform:none}25%{transform:translateX(-.7px)}50%{transform:translateX(.6px)}75%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  earth: {
    note: "The continents slide across the globe as it turns, one after another.",
    motion: {
      p1: { animation: an("earth", "turn", 750) },
      p2: { animation: an("earth", "turn", 750, 60) },
      p0: { animation: an("earth", "turn", 750, 120) },
    },
    keyframes: kf("earth", "turn", "0%{transform:none}40%{transform:translateX(1.6px)}70%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  eclipse: {
    note: "The shadow slides in across the disc and back out.",
    motion: {
      p1: { animation: an("eclipse", "pass", 800) },
      p0: { animation: an("eclipse", "glow", 800) },
    },
    keyframes:
      kf("eclipse", "pass", "0%{transform:none}45%{transform:translate(-1.8px,1.8px)}70%{transform:translate(-1.6px,1.6px)}100%{transform:none}") +
      kf("eclipse", "glow", "0%{transform:none}45%{transform:scale(.96)}100%{transform:none}"),
  },

  "square-pen": {
    note: "The pen scribbles from its nib while the page stays put.",
    motion: { p1: { box: "view-box", origin: "8.6px 15.4px", animation: an("square-pen", "write", 700) } },
    keyframes: scribbleKf("square-pen"),
  },

  pen: {
    note: "The pen scribbles back and forth around its nib.",
    motion: { p0: { box: "view-box", origin: "2.5px 21.5px", animation: an("pen", "write", 700) } },
    keyframes: scribbleKf("pen"),
  },

  egg: {
    note: "The egg wobbles on its base and settles.",
    motion: { p0: { box: "view-box", origin: "12px 22px", animation: an("egg", "wobble", 800) } },
    keyframes: kf("egg", "wobble", "0%{transform:none}20%{transform:rotate(-9deg)}45%{transform:rotate(7deg)}68%{transform:rotate(-3deg)}85%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "egg-fried": {
    note: "The white sizzles out and back while the yolk jiggles a beat later.",
    motion: {
      p1: { animation: an("egg-fried", "white", 700) },
      p0: { animation: an("egg-fried", "yolk", 700, 80) },
    },
    keyframes:
      kf("egg-fried", "white", "0%{transform:none}25%{transform:scale(1.05,.96)}50%{transform:scale(.97,1.03)}75%{transform:scale(1.02,.99)}100%{transform:none}") +
      kf("egg-fried", "yolk", "0%{transform:none}30%{transform:translateY(-.8px) scale(1.08)}60%{transform:translateY(.2px) scale(.96)}100%{transform:none}"),
  },

  "music-note": {
    note: "The note bobs on its head like a beat, and the head squashes as it lands.",
    motion: {
      p0: { box: "view-box", origin: "9px 18px", animation: an("music-note", "bob", 600) },
      p1: { box: "view-box", origin: "9px 18px", animation: an("music-note", "head", 600) },
    },
    keyframes:
      kf("music-note", "bob", "0%{transform:none}30%{transform:rotate(14deg)}60%{transform:rotate(-6deg)}100%{transform:none}") +
      kf("music-note", "head", "0%{transform:none}30%{transform:rotate(14deg) scale(1.08,.92)}60%{transform:rotate(-6deg)}100%{transform:none}"),
  },

  eject: {
    note: "The triangle pushes up and springs back as the bar below presses down.",
    motion: {
      p0: { animation: an("eject", "push", 600) },
      p1: { animation: an("eject", "press", 600) },
    },
    keyframes:
      kf("eject", "push", "0%{transform:none}35%{transform:translateY(-1.8px)}60%{transform:translateY(.3px)}100%{transform:none}") +
      kf("eject", "press", "0%{transform:none}35%{transform:translateY(.5px)}60%{transform:none}100%{transform:none}"),
  },

  "more-horizontal": {
    note: "The three dots hop up one after another, left to right.",
    motion: {
      p2: { animation: an("more-horizontal", "hop", 500) },
      p0: { animation: an("more-horizontal", "hop", 500, 80) },
      p1: { animation: an("more-horizontal", "hop", 500, 160) },
    },
    keyframes: kf("more-horizontal", "hop", "0%{transform:none}35%{transform:translateY(-2px)}65%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "more-vertical": {
    note: "The three dots swell one after another, top to bottom.",
    motion: {
      p1: { animation: an("more-vertical", "pop", 450) },
      p0: { animation: an("more-vertical", "pop", 450, 80) },
      p2: { animation: an("more-vertical", "pop", 450, 160) },
    },
    keyframes: kf("more-vertical", "pop", "0%{transform:none}35%{transform:scale(1.6)}65%{transform:scale(.9)}100%{transform:none}"),
  },

  equal: {
    note: "The two bars draw themselves from opposite ends.",
    draw: ["p0", "p1"],
    motion: {
      p0: drawIn("equal", 400),
      p1: drawIn("equal", 400, 90, true),
    },
    keyframes: drawKf("equal") + undrawKf("equal"),
  },

  euro: {
    note: "The curve draws itself and the two bars slide in across it.",
    draw: ["p2"],
    motion: {
      p2: drawIn("euro", 500),
      p0: { animation: an("euro", "bar", 450, 200, "backwards") },
      p1: { animation: an("euro", "bar", 450, 280, "backwards") },
    },
    keyframes: drawKf("euro") + kf("euro", "bar", "0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "ev-charger": {
    note: "The bolt draws itself on the charger as the cable sways from its socket.",
    draw: ["p4"],
    motion: {
      p4: drawIn("ev-charger", 420, 60),
      p0: { box: "view-box", origin: "14px 13px", animation: an("ev-charger", "cable", 750) },
    },
    keyframes: drawKf("ev-charger") + kf("ev-charger", "cable", "0%{transform:none}30%{transform:rotate(6deg)}60%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  ethernet: {
    note: "The pins click into the port one after another and the port takes the push.",
    motion: {
      p4: { animation: an("ethernet", "pin", 450) },
      p0: { animation: an("ethernet", "pin", 450, 60) },
      p1: { animation: an("ethernet", "pin", 450, 120) },
      p2: { animation: an("ethernet", "pin", 450, 180) },
      p3: { animation: an("ethernet", "knock", 600, 120) },
    },
    keyframes: kf("ethernet", "pin", "0%{transform:none}35%{transform:translateY(1px)}65%{transform:translateY(-.2px)}100%{transform:none}") + knockKf("ethernet"),
  },

  expand: {
    note: "The four arrows push out to the corners.",
    motion: {
      p0: { to: { transform: "translate(1px,1px)" } },
      p2: { to: { transform: "translate(1px,1px)" } },
      p1: { to: { transform: "translate(1px,-1px)" }, delay: 40 },
      p3: { to: { transform: "translate(1px,-1px)" }, delay: 40 },
      p4: { to: { transform: "translate(-1px,1px)" }, delay: 80 },
      p5: { to: { transform: "translate(-1px,1px)" }, delay: 80 },
      p6: { to: { transform: "translate(-1px,-1px)" }, delay: 120 },
      p7: { to: { transform: "translate(-1px,-1px)" }, delay: 120 },
    },
  },

  "eye-closed": {
    note: "The lashes flutter, one after another, under the closed lid.",
    motion: {
      p1: { origin: "50% 0%", animation: an("eye-closed", "lid", 600) },
      p3: { origin: "100% 0%", animation: an("eye-closed", "lash", 500) },
      p4: { origin: "100% 0%", animation: an("eye-closed", "lash", 500, 50) },
      p0: { origin: "0% 0%", animation: an("eye-closed", "lash", 500, 100) },
      p2: { origin: "0% 0%", animation: an("eye-closed", "lash", 500, 150) },
    },
    keyframes:
      kf("eye-closed", "lid", "0%{transform:none}35%{transform:scaleY(.85)}100%{transform:none}") +
      kf("eye-closed", "lash", "0%{transform:none}30%{transform:scale(.35)}65%{transform:scale(1.1)}100%{transform:none}"),
  },

  "eye-off": {
    note: "The eye blinks and the slash draws itself across it.",
    draw: ["p3"],
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: an("eye-off", "blink", 500) },
      p1: { box: "view-box", origin: "12px 12px", animation: an("eye-off", "blink", 500) },
      p2: { box: "view-box", origin: "12px 12px", animation: an("eye-off", "blink", 500) },
      p3: drawIn("eye-off", 420, 140),
    },
    keyframes: drawKf("eye-off") + kf("eye-off", "blink", "0%{transform:none}30%{transform:scaleY(.2)}55%{transform:none}100%{transform:none}"),
  },

  laugh: {
    note: "The face rocks with laughter, the eyes squeeze shut and the mouth opens wide.",
    motion: {
      p3: { animation: an("laugh", "rock", 700) },
      p1: { origin: "50% 0%", animation: an("laugh", "mouth", 700) },
      p0: { animation: an("laugh", "squint", 700) },
      p2: { animation: an("laugh", "squint", 700) },
    },
    keyframes:
      kf("laugh", "rock", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("laugh", "mouth", "0%{transform:none}25%{transform:scale(1.08,1.25)}50%{transform:scale(1,1.05)}75%{transform:scale(1.05,1.2)}100%{transform:none}") +
      kf("laugh", "squint", "0%{transform:none}25%{transform:scaleY(.3)}75%{transform:scaleY(.4)}100%{transform:none}"),
  },

  smile: {
    note: "The smile widens and the eyes lift with it.",
    motion: {
      p1: { origin: "50% 0%", to: { transform: "scale(1.15,1.25)" } },
      p0: { to: { transform: "translateY(-.7px)" }, delay: 50 },
      p2: { to: { transform: "translateY(-.7px)" }, delay: 50 },
    },
  },

  "smile-plus": {
    note: "The smile widens while the plus turns a quarter and pops.",
    motion: {
      p3: { origin: "50% 0%", to: { transform: "scale(1.15,1.25)" } },
      p1: { to: { transform: "translateY(-.7px)" }, delay: 50 },
      p5: { to: { transform: "translateY(-.7px)" }, delay: 50 },
      p2: { box: "view-box", origin: "19px 5px", to: { transform: "rotate(90deg)" }, ease: "smooth" },
      p4: { box: "view-box", origin: "19px 5px", to: { transform: "rotate(90deg)" }, ease: "smooth" },
    },
  },

  factory: {
    note: "The windows light up one after another as the building hums.",
    motion: {
      p3: { animation: an("factory", "light", 500) },
      p0: { animation: an("factory", "light", 500, 100) },
      p1: { animation: an("factory", "light", 500, 200) },
      p2: { origin: "50% 100%", animation: an("factory", "hum", 700) },
    },
    keyframes:
      kf("factory", "light", "0%{transform:none}35%{transform:scale(2.2)}70%{transform:scale(.9)}100%{transform:none}") +
      kf("factory", "hum", "0%{transform:none}25%{transform:scaleY(.97)}50%{transform:scaleY(1.02)}75%{transform:scaleY(.99)}100%{transform:none}"),
  },

  fan: {
    note: "The blades spin one full turn and slow to a stop around the hub.",
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: an("fan", "spin", 900) },
      p1: { animation: an("fan", "hub", 900) },
    },
    keyframes: kf("fan", "spin", "from{transform:none}to{transform:rotate(360deg)}") + kf("fan", "hub", "0%{transform:none}25%{transform:scale(1.6)}100%{transform:none}"),
  },

  "fast-forward": {
    note: "The front arrow darts ahead and the back one follows it.",
    motion: {
      p0: { animation: an("fast-forward", "go", 550) },
      p1: { animation: an("fast-forward", "go", 550, 80) },
    },
    keyframes: kf("fast-forward", "go", "0%{transform:none}30%{transform:translateX(1.8px)}60%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  feather: {
    note: "The feather sways on its quill as if floating, its barb trailing behind.",
    motion: {
      p0: { box: "view-box", origin: "2px 22px", animation: an("feather", "sway", 850) },
      p1: { box: "view-box", origin: "2px 22px", animation: an("feather", "sway", 850) },
      p2: { box: "view-box", origin: "2px 22px", animation: an("feather", "sway", 850, 50) },
    },
    keyframes: kf("feather", "sway", "0%{transform:none}25%{transform:translateY(-.8px) rotate(-5deg)}55%{transform:translateY(-.4px) rotate(3deg)}80%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  file: {
    note: "The corner of the page folds up and back while the page lifts.",
    motion: {
      p1: { origin: "100% 0%", animation: an("file", "fold", 650) },
      p0: { origin: "50% 100%", animation: an("file", "lift", 650) },
    },
    keyframes:
      kf("file", "fold", "0%{transform:none}35%{transform:scale(.4)}70%{transform:scale(1.08)}100%{transform:none}") +
      kf("file", "lift", "0%{transform:none}35%{transform:translateY(-.8px) rotate(-3deg)}70%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "file-archive": {
    note: "The zip pull slides up the page and the teeth close one after another.",
    motion: {
      p5: { animation: an("file-archive", "pull", 700) },
      p3: { animation: an("file-archive", "tooth", 450, 80) },
      p2: { animation: an("file-archive", "tooth", 450, 160) },
      p4: { animation: an("file-archive", "tooth", 450, 240) },
    },
    keyframes:
      kf("file-archive", "pull", "0%{transform:none}40%{transform:translateY(-2.5px)}65%{transform:translateY(-2.2px)}100%{transform:none}") +
      kf("file-archive", "tooth", "0%{transform:none}35%{transform:scale(1.5,.5)}70%{transform:scale(.9,1.1)}100%{transform:none}"),
  },

  "file-chart": {
    note: "The three bars grow up from the bottom of the page, one after another.",
    motion: {
      p2: { origin: "50% 100%", animation: an("file-chart", "grow", 500, 0, "backwards") },
      p3: { origin: "50% 100%", animation: an("file-chart", "grow", 500, 80, "backwards") },
      p4: { origin: "50% 100%", animation: an("file-chart", "grow", 500, 160, "backwards") },
    },
    keyframes: kf("file-chart", "grow", "0%{transform:scaleY(.15)}60%{transform:scaleY(1.12)}100%{transform:none}"),
  },

  "file-clock": {
    note: "The clock's hands sweep one full turn and the clock gives a tick.",
    motion: {
      p2: { box: "view-box", origin: "8px 16px", animation: an("file-clock", "hands", 800) },
      p3: { animation: an("file-clock", "tick", 800) },
    },
    keyframes:
      kf("file-clock", "hands", "from{transform:none}to{transform:rotate(360deg)}") +
      kf("file-clock", "tick", "0%{transform:none}20%{transform:scale(1.06)}45%{transform:none}100%{transform:none}"),
  },

  "file-code": {
    note: "The two brackets spread apart and spring back.",
    motion: {
      p2: { to: { transform: "translateX(-1px)" } },
      p3: { to: { transform: "translateX(1px)" } },
    },
  },

  "file-cog": {
    note: "The cog turns a quarter on its hub.",
    motion: Object.fromEntries(
      ["p11", "p2", "p4", "p5", "p6", "p7", "p8", "p9", "p10"].map((p) => [p, { box: "view-box", origin: "7px 18px", animation: an("file-cog", "turn", 800) }]),
    ),
    keyframes: kf("file-cog", "turn", "from{transform:none}to{transform:rotate(90deg)}"),
  },

  "file-diff": {
    note: "The plus folds down to a minus and back, while the minus below nods.",
    motion: {
      p2: { animation: an("file-diff", "fold", 700) },
      p1: { animation: an("file-diff", "bar", 700) },
      p3: { animation: an("file-diff", "nod", 700, 100) },
    },
    keyframes:
      kf("file-diff", "fold", "0%{transform:none}40%,55%{transform:scaleY(0)}100%{transform:none}") +
      kf("file-diff", "bar", "0%{transform:none}40%,55%{transform:scaleX(1.15)}100%{transform:none}") +
      kf("file-diff", "nod", "0%{transform:none}35%{transform:translateY(.8px)}65%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "file-pen": {
    note: "The pen scribbles over the corner of the page from its nib.",
    motion: { p2: { box: "view-box", origin: "4.3px 21.5px", animation: an("file-pen", "write", 700) } },
    keyframes: scribbleKf("file-pen"),
  },

  "file-warning": {
    note: "The exclamation mark shakes on its dot and the page shivers with it.",
    motion: {
      p1: { box: "view-box", origin: "12px 17px", animation: an("file-warning", "mark", 600) },
      p2: { animation: an("file-warning", "dot", 600) },
      p0: { animation: an("file-warning", "page", 600) },
    },
    keyframes:
      kf("file-warning", "mark", "0%{transform:none}20%{transform:rotate(-12deg)}45%{transform:rotate(10deg)}70%{transform:rotate(-4deg)}100%{transform:none}") +
      kf("file-warning", "dot", "0%{transform:none}30%{transform:scale(1.6)}60%{transform:none}100%{transform:none}") +
      kf("file-warning", "page", "0%{transform:none}25%{transform:translateX(-.5px)}50%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "file-image": {
    note: "The sun rises into the picture as the hill settles.",
    motion: {
      p2: { animation: an("file-image", "sun", 600, 0, "backwards") },
      p3: { origin: "0% 100%", animation: an("file-image", "hill", 600) },
    },
    keyframes:
      kf("file-image", "sun", "0%{transform:translateY(2px);opacity:0}60%{transform:translateY(-.4px);opacity:1}100%{transform:none;opacity:1}") +
      kf("file-image", "hill", "0%{transform:none}35%{transform:scaleY(.85)}70%{transform:scaleY(1.04)}100%{transform:none}"),
  },

  "file-lock": {
    note: "The lock's shackle lifts and drops, and the lock rattles from it.",
    motion: lock("file-lock", "p3", "p2"),
    keyframes: lockKf("file-lock"),
  },

  "file-minus": {
    note: "The minus draws itself across the page.",
    draw: ["p2"],
    motion: { p2: drawIn("file-minus", 400), p0: { animation: an("file-minus", "knock", 600, 200) } },
    keyframes: drawKf("file-minus") + knockKf("file-minus"),
  },

  "file-plus": {
    note: "The plus draws itself, across and then down, on the page.",
    draw: ["p2", "p3"],
    motion: { p2: drawIn("file-plus", 350), p3: drawIn("file-plus", 350, 120) },
    keyframes: drawKf("file-plus"),
  },

  "file-x": {
    note: "The cross draws itself, one stroke and then the other, and the page shivers.",
    draw: ["p2", "p3"],
    motion: {
      p2: drawIn("file-x", 320),
      p3: drawIn("file-x", 320, 120),
      p0: { animation: an("file-x", "page", 500, 350) },
    },
    keyframes: drawKf("file-x") + kf("file-x", "page", "0%{transform:none}25%{transform:translateX(-.6px)}50%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "file-video": {
    note: "The play mark steps forward and swells, as if it started playing.",
    motion: { p2: { animation: an("file-video", "play", 600) } },
    keyframes: kf("file-video", "play", "0%{transform:none}35%{transform:translateX(1.2px) scale(1.15)}65%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "file-question": {
    note: "The question mark nods on its stem and its dot bounces after it.",
    motion: {
      p1: { box: "view-box", origin: "12px 13px", animation: an("file-question", "nod", 700) },
      p2: { animation: an("file-question", "dot", 600, 120) },
    },
    keyframes:
      kf("file-question", "nod", "0%{transform:none}25%{transform:rotate(-12deg)}55%{transform:rotate(8deg)}80%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("file-question", "dot", "0%{transform:none}35%{transform:translateY(-1px)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  files: {
    note: "The front page lifts off the one behind it.",
    motion: {
      p0: { to: { transform: "translate(.6px,-.6px)" }, delay: 40 },
      p1: { to: { transform: "translate(.6px,-.6px)" }, delay: 40 },
    },
  },

  "file-search": {
    note: "The magnifier circles over the page, searching.",
    motion: {
      p2: { animation: an("file-search", "search", 800) },
      p3: { animation: an("file-search", "search", 800) },
    },
    keyframes: searchKf("file-search"),
  },

  "file-spreadsheet": {
    note: "The cells fill in, row by row.",
    draw: ["p2", "p3", "p4", "p5"],
    motion: {
      p2: drawIn("file-spreadsheet", 250),
      p3: drawIn("file-spreadsheet", 250, 80),
      p4: drawIn("file-spreadsheet", 250, 160),
      p5: drawIn("file-spreadsheet", 250, 240),
    },
    keyframes: drawKf("file-spreadsheet"),
  },

  "file-terminal": {
    note: "The prompt nudges forward and the cursor line types itself out.",
    draw: ["p3"],
    motion: {
      p2: { animation: an("file-terminal", "prompt", 550) },
      p3: drawIn("file-terminal", 350, 150),
    },
    keyframes: drawKf("file-terminal") + kf("file-terminal", "prompt", "0%{transform:none}35%{transform:translateX(1px)}65%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  "file-up": {
    note: "The arrow rises out of the page and comes back up from below.",
    motion: {
      p2: { animation: an("file-up", "through", 650) },
      p3: { animation: an("file-up", "through", 650) },
    },
    keyframes: throughKf("file-up", -2.5),
  },

  "file-user": {
    note: "The person's head nods and the shoulders shrug after it.",
    motion: {
      p3: { animation: an("file-user", "head", 600) },
      p2: { origin: "50% 100%", animation: an("file-user", "shrug", 600, 80) },
    },
    keyframes:
      kf("file-user", "head", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("file-user", "shrug", "0%{transform:none}35%{transform:scaleY(1.2)}70%{transform:scaleY(.95)}100%{transform:none}"),
  },

  filter: {
    note: "The funnel squeezes down from its rim and springs back, as if something poured through.",
    motion: { p0: { origin: "50% 0%", animation: an("filter", "squeeze", 650) } },
    keyframes: kf("filter", "squeeze", "0%{transform:none}30%{transform:scale(1.04,.9)}60%{transform:scale(.98,1.04)}100%{transform:none}"),
  },

  "filter-plus": {
    note: "The plus turns a quarter and the funnel gives a squeeze.",
    motion: {
      p1: { box: "view-box", origin: "19px 6px", to: { transform: "rotate(90deg)" }, ease: "smooth" },
      p2: { box: "view-box", origin: "19px 6px", to: { transform: "rotate(90deg)" }, ease: "smooth" },
      p0: { origin: "50% 0%", animation: an("filter-plus", "squeeze", 650) },
    },
    keyframes: kf("filter-plus", "squeeze", "0%{transform:none}30%{transform:scale(1.04,.9)}60%{transform:scale(.98,1.04)}100%{transform:none}"),
  },

  fingerprint: {
    note: "The ridges draw themselves, from the outside in.",
    draw: ["p3", "p5", "p8", "p6", "p0", "p1", "p2", "p7", "p4"],
    motion: {
      p3: drawIn("fingerprint", 450),
      p5: drawIn("fingerprint", 450, 40),
      p8: drawIn("fingerprint", 450, 80),
      p6: drawIn("fingerprint", 450, 120),
      p0: drawIn("fingerprint", 450, 160),
      p1: drawIn("fingerprint", 450, 200),
      p2: drawIn("fingerprint", 400, 240),
      p7: drawIn("fingerprint", 400, 240),
      p4: drawIn("fingerprint", 300, 280),
    },
    keyframes: drawKf("fingerprint"),
  },

  fish: {
    note: "The tail swishes on its root and the fins flap as the fish swims forward.",
    motion: {
      p3: { box: "view-box", origin: "7px 12px", animation: an("fish", "tail", 700) },
      p0: { animation: an("fish", "swim", 700) },
      p1: { animation: an("fish", "swim", 700) },
      p2: { animation: an("fish", "swim", 700) },
      p4: { origin: "50% 100%", animation: an("fish", "fin", 700, 60) },
      p5: { origin: "50% 0%", animation: an("fish", "fin", 700, 60) },
    },
    keyframes:
      kf("fish", "tail", "0%{transform:none}25%{transform:rotate(12deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(4deg)}100%{transform:none}") +
      kf("fish", "swim", "0%{transform:none}35%{transform:translateX(.8px)}100%{transform:none}") +
      kf("fish", "fin", "0%{transform:none}30%{transform:translateX(.6px) scaleY(.8)}60%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  flag: {
    note: "The flag ripples out from its pole and settles.",
    motion: { p0: { box: "view-box", origin: "4px 12px", animation: an("flag", "wave", 850) } },
    keyframes: kf("flag", "wave", "0%{transform:none}20%{transform:skewY(-6deg)}45%{transform:skewY(4deg)}70%{transform:skewY(-2deg)}100%{transform:none}"),
  },

  flashlight: {
    note: "The switch clicks in and the lamp head flickers on.",
    motion: {
      p0: { animation: an("flashlight", "click", 450) },
      p2: { animation: an("flashlight", "flicker", 600, 120) },
      p1: { animation: an("flashlight", "recoil", 450) },
    },
    keyframes:
      kf("flashlight", "click", "0%{transform:none}35%{transform:translateY(.7px) scaleY(.5)}100%{transform:none}") +
      kf("flashlight", "flicker", "0%{opacity:1}15%{opacity:.25}30%{opacity:1}45%{opacity:.5}60%,100%{opacity:1}") +
      kf("flashlight", "recoil", "0%{transform:none}35%{transform:translateY(.3px)}100%{transform:none}"),
  },

  flask: {
    note: "The flask tips on its base and the liquid inside sloshes the other way.",
    motion: {
      p0: { box: "view-box", origin: "12px 22px", animation: an("flask", "tip", 800) },
      p2: { box: "view-box", origin: "12px 22px", animation: an("flask", "tip", 800) },
      p1: { box: "view-box", origin: "12px 15px", animation: an("flask", "slosh", 800, 60) },
    },
    keyframes:
      kf("flask", "tip", "0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("flask", "slosh", "0%{transform:none}30%{transform:rotate(10deg)}60%{transform:rotate(-7deg)}85%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "flip-horizontal": {
    note: "The two halves flip across the dashed line, swapping sides, and flip back.",
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: an("flip-horizontal", "flip", 850) },
      p1: { box: "view-box", origin: "12px 12px", animation: an("flip-horizontal", "flip", 850) },
    },
    keyframes: kf("flip-horizontal", "flip", "0%{transform:none}40%,55%{transform:scaleX(-1)}100%{transform:none}"),
  },

  "flip-vertical": {
    note: "The two halves flip across the dashed line, swapping places, and flip back.",
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: an("flip-vertical", "flip", 850) },
      p1: { box: "view-box", origin: "12px 12px", animation: an("flip-vertical", "flip", 850) },
    },
    keyframes: kf("flip-vertical", "flip", "0%{transform:none}40%,55%{transform:scaleY(-1)}100%{transform:none}"),
  },

  flower: {
    note: "The petals close a little and open again as they turn a quarter, and the centre pops.",
    motion: {
      ...Object.fromEntries(
        ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"].map((p) => [p, { box: "view-box", origin: "12px 12px", animation: an("flower", "bloom", 850) }]),
      ),
      p0: { animation: an("flower", "core", 850) },
    },
    keyframes:
      kf("flower", "bloom", "0%{transform:none}40%{transform:rotate(50deg) scale(.86)}100%{transform:rotate(90deg)}") +
      kf("flower", "core", "0%{transform:none}40%{transform:scale(1.15)}100%{transform:none}"),
  },

  focus: {
    note: "The corners close in on the subject, which tightens into focus.",
    motion: {
      p1: { to: { transform: "translate(1px,1px)" } },
      p2: { to: { transform: "translate(-1px,1px)" } },
      p3: { to: { transform: "translate(-1px,-1px)" } },
      p4: { to: { transform: "translate(1px,-1px)" } },
      p0: { animation: an("focus", "sharpen", 600) },
    },
    keyframes: kf("focus", "sharpen", "0%{transform:none}35%{transform:scale(1.25)}65%{transform:scale(.92)}100%{transform:none}"),
  },

  folder: {
    note: "The folder's tab lifts open as the folder bobs.",
    motion: {
      p0: {
        to: { d: 'path("M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 2.6A2 2 0 0 0 7.93 1.7H4a2 2 0 0 0-2 2v14.3a2 2 0 0 0 2 2Z")' },
        animation: an("folder", "bob", 650),
      },
    },
    keyframes: kf("folder", "bob", "0%{transform:none}35%{transform:translateY(.5px) scale(1.02,.97)}65%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "folder-archive": {
    note: "The zip pull slides up and the teeth close one after another.",
    motion: {
      p0: { animation: an("folder-archive", "pull", 700) },
      p3: { animation: an("folder-archive", "tooth", 450, 80) },
      p2: { animation: an("folder-archive", "tooth", 450, 160) },
    },
    keyframes:
      kf("folder-archive", "pull", "0%{transform:none}40%{transform:translateY(-2.5px)}65%{transform:translateY(-2.2px)}100%{transform:none}") +
      kf("folder-archive", "tooth", "0%{transform:none}35%{transform:scale(1.5,.5)}70%{transform:scale(.9,1.1)}100%{transform:none}"),
  },

  "folder-check": {
    note: "The tick draws itself and the folder takes the knock.",
    draw: ["p1"],
    motion: { p1: drawIn("folder-check", 450), p0: { animation: an("folder-check", "knock", 600, 300) } },
    keyframes: drawKf("folder-check") + knockKf("folder-check"),
  },

  "folder-code": {
    note: "The two brackets spread apart and spring back.",
    motion: {
      p0: { to: { transform: "translateX(-1px)" } },
      p1: { to: { transform: "translateX(1px)" } },
    },
  },

  "folder-down": {
    note: "The arrow drops into the folder from above and the folder takes the knock.",
    motion: {
      p1: { animation: an("folder-down", "drop", 550, 0, "backwards") },
      p2: { animation: an("folder-down", "drop", 550, 0, "backwards") },
      p0: { animation: an("folder-down", "knock", 600, 220) },
    },
    keyframes: kf("folder-down", "drop", "0%{transform:translateY(-3px);opacity:0}55%{transform:translateY(.5px);opacity:1}100%{transform:none;opacity:1}") + knockKf("folder-down"),
  },

  "folder-lock": {
    note: "The lock's shackle lifts and drops, and the lock rattles from it.",
    motion: lock("folder-lock", "p0", "p2"),
    keyframes: lockKf("folder-lock"),
  },

  "folder-minus": {
    note: "The minus draws itself across the folder.",
    draw: ["p0"],
    motion: { p0: drawIn("folder-minus", 400), p1: { animation: an("folder-minus", "knock", 600, 200) } },
    keyframes: drawKf("folder-minus") + knockKf("folder-minus"),
  },

  "folder-plus": {
    note: "The plus draws itself, across and then down, on the folder.",
    draw: ["p1", "p0"],
    motion: { p1: drawIn("folder-plus", 350), p0: drawIn("folder-plus", 350, 120) },
    keyframes: drawKf("folder-plus"),
  },

  folders: {
    note: "The back folder slides out from behind the front one.",
    motion: {
      p1: { to: { transform: "translate(-1px,1px)" } },
      p0: { to: { transform: "translate(.5px,-.5px)" }, delay: 40 },
    },
  },

  "folder-search": {
    note: "The magnifier circles over the folder, searching.",
    motion: {
      p2: { animation: an("folder-search", "search", 800) },
      p1: { animation: an("folder-search", "search", 800) },
    },
    keyframes: searchKf("folder-search"),
  },

  "folder-sync": {
    note: "The two sync arrows turn half way round each other.",
    motion: Object.fromEntries(
      ["p1", "p2", "p3", "p4"].map((p) => [p, { box: "view-box", origin: "17px 16px", animation: an("folder-sync", "turn", 800) }]),
    ),
    keyframes: kf("folder-sync", "turn", "from{transform:none}to{transform:rotate(180deg)}"),
  },

  "folder-tree": {
    note: "The trunk and branch draw themselves, and each folder pops in at its end.",
    draw: ["p3", "p2"],
    motion: {
      p3: drawIn("folder-tree", 500),
      p2: drawIn("folder-tree", 300, 80),
      p0: { animation: an("folder-tree", "pop", 450, 220, "backwards") },
      p1: { animation: an("folder-tree", "pop", 450, 380, "backwards") },
    },
    keyframes: drawKf("folder-tree") + popInKf("folder-tree"),
  },

  "folder-up": {
    note: "The arrow rises out of the folder and comes back up from below.",
    motion: {
      p1: { animation: an("folder-up", "through", 650) },
      p2: { animation: an("folder-up", "through", 650) },
    },
    keyframes: throughKf("folder-up", -2.5),
  },

  "folder-x": {
    note: "The cross draws itself, one stroke and then the other, and the folder shivers.",
    draw: ["p1", "p2"],
    motion: {
      p1: drawIn("folder-x", 320),
      p2: drawIn("folder-x", 320, 120),
      p0: { animation: an("folder-x", "shiver", 500, 350) },
    },
    keyframes: drawKf("folder-x") + kf("folder-x", "shiver", "0%{transform:none}25%{transform:translateX(-.6px)}50%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  footprints: {
    note: "The left foot lifts and plants, then the right one.",
    motion: {
      p0: { box: "view-box", origin: "6px 16px", animation: an("footprints", "step", 550) },
      p3: { box: "view-box", origin: "6px 16px", animation: an("footprints", "step", 550) },
      p1: { box: "view-box", origin: "18px 20px", animation: an("footprints", "step", 550, 200) },
      p2: { box: "view-box", origin: "18px 20px", animation: an("footprints", "step", 550, 200) },
    },
    keyframes: kf("footprints", "step", "0%{transform:none}35%{transform:translateY(-1.6px) rotate(-5deg)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  utensils: {
    note: "The fork and knife tip toward each other, clink at the top and part again.",
    motion: {
      p0: { box: "view-box", origin: "7px 22px", animation: an("utensils", "fork", 650) },
      p1: { box: "view-box", origin: "7px 22px", animation: an("utensils", "fork", 650) },
      p2: { box: "view-box", origin: "19px 22px", animation: an("utensils", "knife", 650) },
    },
    keyframes:
      kf("utensils", "fork", "0%{transform:none}35%{transform:rotate(7deg)}55%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("utensils", "knife", "0%{transform:none}35%{transform:rotate(-7deg)}55%{transform:rotate(2deg)}100%{transform:none}"),
  },

  forward: {
    note: "The arrowhead steps forward and the tail stretches after it.",
    motion: {
      p0: { to: { transform: "translateX(1.4px)" } },
      p1: { origin: "0% 50%", to: { transform: "scaleX(1.09)" } },
    },
  },

  frame: {
    note: "The four guides slide outward, opening the frame.",
    motion: {
      p0: { to: { transform: "translateY(-1px)" } },
      p1: { to: { transform: "translateY(1px)" } },
      p2: { to: { transform: "translateX(-1px)" }, delay: 50 },
      p3: { to: { transform: "translateX(1px)" }, delay: 50 },
    },
  },

  fuel: {
    note: "The level in the pump's window rises and the hose sways from its socket.",
    motion: {
      p3: { animation: an("fuel", "level", 650, 0, "backwards") },
      p0: { box: "view-box", origin: "14px 13px", animation: an("fuel", "hose", 750, 60) },
    },
    keyframes:
      kf("fuel", "level", "0%{transform:translateY(3px);opacity:0}60%{transform:translateY(-.4px);opacity:1}100%{transform:none;opacity:1}") +
      kf("fuel", "hose", "0%{transform:none}30%{transform:rotate(6deg)}60%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  fullscreen: {
    note: "The corners push out and the screen inside grows to meet them.",
    motion: {
      p0: { to: { transform: "translate(-1px,-1px)" } },
      p1: { to: { transform: "translate(1px,-1px)" } },
      p2: { to: { transform: "translate(1px,1px)" } },
      p3: { to: { transform: "translate(-1px,1px)" } },
      p4: { to: { transform: "scale(1.2)" }, delay: 60 },
    },
  },

  gallery: {
    note: "The slide moves out to the left and the next comes in from the right; the thumbnails step along.",
    motion: {
      p0: { animation: an("gallery", "slide", 650) },
      p1: { animation: an("gallery", "thumb", 450, 60) },
      p2: { animation: an("gallery", "thumb", 450, 120) },
      p3: { animation: an("gallery", "thumb", 450, 180) },
      p4: { animation: an("gallery", "thumb", 450, 240) },
    },
    keyframes:
      kf("gallery", "slide", "0%{transform:none;opacity:1}35%{transform:translateX(-2px);opacity:0}36%{transform:translateX(2px);opacity:0}100%{transform:none;opacity:1}") +
      kf("gallery", "thumb", "0%{transform:none}35%{transform:translateY(-.8px)}65%{transform:none}100%{transform:none}"),
  },

  gamepad: {
    note: "The buttons press one after another, the pad rocks left and the controller rumbles.",
    motion: {
      p3: { animation: an("gamepad", "press", 400) },
      p2: { animation: an("gamepad", "press", 400, 110) },
      p0: { animation: an("gamepad", "pad", 500, 60) },
      p1: { animation: an("gamepad", "pad", 500, 60) },
      p4: { animation: an("gamepad", "rumble", 600) },
    },
    keyframes:
      kf("gamepad", "press", "0%{transform:none}35%{transform:scale(.3)}70%{transform:scale(1.2)}100%{transform:none}") +
      kf("gamepad", "pad", "0%{transform:none}35%{transform:translateX(-.7px)}65%{transform:translateX(.2px)}100%{transform:none}") +
      kf("gamepad", "rumble", "0%{transform:none}20%{transform:rotate(-3deg)}40%{transform:rotate(3deg)}60%{transform:rotate(-1.5deg)}80%{transform:rotate(1deg)}100%{transform:none}"),
  },

  gavel: {
    note: "The gavel lifts on its handle and strikes, the head whipping in just behind.",
    motion: {
      p0: { box: "view-box", origin: "3px 21px", animation: an("gavel", "strike", 650) },
      ...Object.fromEntries(["p1", "p2", "p3", "p4"].map((p) => [p, { box: "view-box", origin: "3px 21px", animation: an("gavel", "head", 650) }])),
    },
    keyframes:
      kf("gavel", "strike", "0%{transform:none}35%{transform:rotate(-12deg)}55%{transform:rotate(4deg)}75%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("gavel", "head", "0%{transform:none}35%{transform:rotate(-14deg)}55%{transform:rotate(6deg)}75%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  gem: {
    note: "The gem swells and its facets draw themselves in, catching the light.",
    draw: ["p0", "p2"],
    motion: {
      p1: { to: { transform: "scale(1.06)" } },
      p0: drawIn("gem", 550, 60),
      p2: drawIn("gem", 400),
    },
    keyframes: drawKf("gem"),
  },

  ghost: {
    note: "The ghost floats up and its eyes look side to side.",
    motion: {
      p1: { animation: an("ghost", "float", 850) },
      p0: { animation: an("ghost", "look", 850) },
      p2: { animation: an("ghost", "look", 850) },
    },
    keyframes:
      kf("ghost", "float", "0%{transform:none}35%{transform:translateY(-1.4px)}70%{transform:translateY(.2px)}100%{transform:none}") +
      kf("ghost", "look", "0%{transform:none}25%{transform:translate(-.8px,-1.4px)}55%{transform:translate(.8px,-.8px)}80%{transform:translateY(.2px)}100%{transform:none}"),
  },

  gift: {
    note: "The lid and bow pop up off the box, tilt, and drop back on.",
    motion: {
      p3: { animation: an("gift", "lid", 700) },
      p2: { animation: an("gift", "bow", 700, 40) },
      p1: { animation: an("gift", "box", 700) },
    },
    keyframes:
      kf("gift", "lid", "0%{transform:none}30%{transform:translateY(-1.6px) rotate(-5deg)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("gift", "bow", "0%{transform:none}30%{transform:translateY(-2px) rotate(-7deg)}60%{transform:translateY(.3px)}100%{transform:none}") +
      kf("gift", "box", "0%,50%{transform:none}62%{transform:translateY(.4px)}100%{transform:none}"),
  },

  "git-branch": {
    note: "The branch draws itself off the trunk, and the commits at its ends pop in.",
    draw: ["p0"],
    motion: {
      p0: drawIn("git-branch", 550, 0, true),
      p2: { animation: an("git-branch", "pop", 400, 0, "backwards") },
      p1: { animation: an("git-branch", "pop", 400, 420, "backwards") },
    },
    keyframes: undrawKf("git-branch") + popInKf("git-branch"),
  },

  "git-commit": {
    note: "The commit drops onto the line, which stretches out on both sides.",
    motion: {
      p0: { animation: an("git-commit", "drop", 550, 0, "backwards") },
      p1: { origin: "100% 50%", animation: an("git-commit", "line", 550, 80) },
      p2: { origin: "0% 50%", animation: an("git-commit", "line", 550, 80) },
    },
    keyframes:
      kf("git-commit", "drop", "0%{transform:translateY(-2.5px);opacity:0}55%{transform:translateY(.4px) scale(1.1,.9);opacity:1}100%{transform:none;opacity:1}") +
      kf("git-commit", "line", "0%{transform:none}35%{transform:scaleX(.6)}70%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  "git-compare": {
    note: "The two paths draw themselves across, and each end commit answers in turn.",
    draw: ["p2", "p3"],
    motion: {
      p2: drawIn("git-compare", 450),
      p3: drawIn("git-compare", 450, 120),
      p0: { animation: an("git-compare", "ping", 450, 300) },
      p1: { animation: an("git-compare", "ping", 450, 420) },
    },
    keyframes: drawKf("git-compare") + kf("git-compare", "ping", "0%{transform:none}35%{transform:scale(1.2)}70%{transform:scale(.95)}100%{transform:none}"),
  },

  "git-fork": {
    note: "The stem grows up from the base commit and splits, and the two forks pop in.",
    motion: {
      p0: { animation: an("git-fork", "ping", 450) },
      p4: { origin: "50% 100%", animation: an("git-fork", "grow", 300, 60, "backwards") },
      p3: { origin: "50% 100%", animation: an("git-fork", "split", 400, 220, "backwards") },
      p1: { animation: an("git-fork", "pop", 400, 420, "backwards") },
      p2: { animation: an("git-fork", "pop", 400, 420, "backwards") },
    },
    keyframes:
      kf("git-fork", "ping", "0%{transform:none}35%{transform:scale(1.2)}70%{transform:scale(.95)}100%{transform:none}") +
      kf("git-fork", "grow", "from{transform:scaleY(0)}to{transform:none}") +
      kf("git-fork", "split", "0%{transform:scaleX(0)}70%{transform:scaleX(1.05)}100%{transform:none}") +
      popInKf("git-fork"),
  },

  "git-merge": {
    note: "The branch draws itself up the trunk and curves over into the merge commit, which pops.",
    draw: ["p2"],
    motion: {
      p1: { animation: an("git-merge", "ping", 450) },
      p2: drawIn("git-merge", 550, 60),
      p0: { animation: an("git-merge", "pop", 450, 480) },
    },
    keyframes:
      drawKf("git-merge") +
      kf("git-merge", "ping", "0%{transform:none}35%{transform:scale(1.2)}70%{transform:scale(.95)}100%{transform:none}") +
      kf("git-merge", "pop", "0%{transform:none}40%{transform:scale(1.3)}70%{transform:scale(.92)}100%{transform:none}"),
  },

  "git-pull-request": {
    note: "The change travels along the path from the branch to the other commit, which pops when it arrives.",
    draw: ["p2"],
    motion: {
      p1: { animation: an("git-pull-request", "ping", 450) },
      p2: drawIn("git-pull-request", 450, 60),
      p0: { animation: an("git-pull-request", "pop", 450, 420) },
    },
    keyframes:
      drawKf("git-pull-request") +
      kf("git-pull-request", "ping", "0%{transform:none}35%{transform:scale(1.2)}70%{transform:scale(.95)}100%{transform:none}") +
      kf("git-pull-request", "pop", "0%{transform:none}40%{transform:scale(1.3)}70%{transform:scale(.92)}100%{transform:none}"),
  },

  glasses: {
    note: "The glasses lift on the nose, pivoting on the ends of their arms.",
    motion: {
      p0: { to: { transform: "translateY(-.9px)" } },
      p1: { to: { transform: "translateY(-.9px)" } },
      p2: { to: { transform: "translateY(-.9px)" } },
      p3: { box: "view-box", origin: "8px 5px", to: { transform: "rotate(8deg)" } },
      p4: { box: "view-box", origin: "16px 5px", to: { transform: "rotate(-8deg)" } },
    },
  },

  "glass-water": {
    note: "The glass tips on its base and the water inside sloshes against it.",
    motion: {
      p0: { box: "view-box", origin: "12px 22px", animation: an("glass-water", "tip", 800) },
      p1: { box: "view-box", origin: "12px 12px", animation: an("glass-water", "slosh", 800, 60) },
    },
    keyframes:
      kf("glass-water", "tip", "0%{transform:none}25%{transform:rotate(-5deg)}55%{transform:rotate(3deg)}80%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("glass-water", "slosh", "0%{transform:none}30%{transform:rotate(9deg) translateX(-.4px)}60%{transform:rotate(-7deg) translateX(.3px)}85%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "globe-lock": {
    note: "The globe turns a little while the lock's shackle lifts and drops and the lock rattles.",
    motion: {
      ...lock("globe-lock", "p3", "p2"),
      p0: { box: "view-box", origin: "12px 12px", animation: an("globe-lock", "turn", 700) },
      p1: { animation: an("globe-lock", "line", 700) },
    },
    keyframes:
      lockKf("globe-lock") +
      kf("globe-lock", "turn", "0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(2deg)}100%{transform:none}") +
      kf("globe-lock", "line", "0%{transform:none}35%{transform:translateY(-.6px)}70%{transform:none}100%{transform:none}"),
  },

  "fire-extinguisher": {
    note: "The lever presses down on its pivot and the extinguisher shudders as it sprays.",
    motion: {
      p2: { box: "view-box", origin: "15px 3px", animation: an("fire-extinguisher", "lever", 650) },
      p5: { animation: an("fire-extinguisher", "shudder", 650, 120) },
      p1: { animation: an("fire-extinguisher", "shudder", 650, 120) },
      p0: { animation: an("fire-extinguisher", "shudder", 650, 120) },
      p3: { box: "view-box", origin: "11px 3px", animation: an("fire-extinguisher", "hose", 650, 120) },
      p4: { animation: an("fire-extinguisher", "shudder", 650, 120) },
    },
    keyframes:
      kf("fire-extinguisher", "lever", "0%{transform:none}30%{transform:rotate(14deg)}70%{transform:rotate(12deg)}100%{transform:none}") +
      kf("fire-extinguisher", "shudder", "0%{transform:none}20%{transform:translateX(-.4px)}40%{transform:translateX(.4px)}60%{transform:translateX(-.3px)}80%{transform:translateX(.2px)}100%{transform:none}") +
      kf("fire-extinguisher", "hose", "0%{transform:none}25%{transform:rotate(2deg)}50%{transform:rotate(-2deg)}75%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "fold-vertical": {
    note: "The two arrows fold in toward the dashed line.",
    motion: {
      p6: { to: { transform: "translateY(-1.3px)" } },
      p0: { to: { transform: "translateY(-1.3px)" } },
      p7: { to: { transform: "translateY(1.3px)" } },
      p1: { to: { transform: "translateY(1.3px)" } },
    },
  },

  forklift: {
    note: "The forks lift up the mast and come down again; the truck rocks on its wheels.",
    motion: {
      p1: { animation: an("forklift", "lift", 800) },
      p0: { box: "view-box", origin: "9px 19px", animation: an("forklift", "rock", 800, 100) },
      p3: { box: "view-box", origin: "9px 19px", animation: an("forklift", "rock", 800, 100) },
    },
    keyframes:
      kf("forklift", "lift", "0%{transform:none}40%,55%{transform:translateY(-3px)}100%{transform:none}") +
      kf("forklift", "rock", "0%{transform:none}35%{transform:rotate(-3deg)}65%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "ferris-wheel": {
    note: "The wheel turns on its hub and rocks back to rest, while the stand stays put.",
    motion: Object.fromEntries(
      ["p0", "p1", "p2", "p3", "p4", "p5"].map((p) => [p, { box: "view-box", origin: "12px 12px", animation: an("ferris-wheel", "turn", 900) }]),
    ),
    keyframes: kf("ferris-wheel", "turn", "0%{transform:none}40%{transform:rotate(35deg)}70%{transform:rotate(-6deg)}100%{transform:none}"),
  },

  "file-key": {
    note: "The key turns on its shaft, its tooth and bow narrowing and widening again.",
    motion: {
      p1: { box: "view-box", origin: "4px 16px", animation: an("file-key", "turn", 700) },
      p2: { box: "view-box", origin: "4px 16px", animation: an("file-key", "turn", 700) },
      p4: { box: "view-box", origin: "4px 20px", animation: an("file-key", "turn", 700) },
    },
    keyframes: kf("file-key", "turn", "0%{transform:none}40%{transform:scaleX(-.4)}70%{transform:scaleX(1.1)}100%{transform:none}"),
  },
};

/** fill areas for outlines the source draws open */
const PAGE = "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2Z";
const PUMP = "M3 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16Z";
export const fills: Record<string, string> = {
  // the page around the zip
  "file-archive": PAGE,
  // the front page of the pair, and the strip of the back page that shows, stopping short of the front page (2.75 from its line)
  files:
    "M11 2h4a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1L15 19.75H11A4.75 4.75 0 0 1 6.25 15V7Z",
  // the page, cut around the badge (about a unit of white between them, allowing for the fill's own stroke) where the source leaves the page open for it
  "file-clock": "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85L4.495 7.982A8.75 8.75 0 0 1 15 21.25Z",
  "file-cog":
    "M4 10.592V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-4.182L12.822 21.416A6.75 6.75 0 0 0 4.466 11.743Z",
  "file-lock":
    "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3L13.75 18A3.75 3.75 0 0 0 11.739 14.678A4.75 4.75 0 0 0 4.626 10.885Z",
  "file-pen":
    "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34L4.886 14.226L8.432 10.678A4.873 4.873 0 0 1 15.324 17.569L11.774 21.115Z",
  "file-key":
    "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4L4 9.25A2.75 2.75 0 0 1 6.668 11.332A2.75 2.75 0 0 1 7.189 16.48A4.75 4.75 0 0 1 8.477 21.585Z",
  // the folder, cut around the badge the same way
  "folder-lock":
    "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5L20.235 10.809A4.75 4.75 0 0 0 13.261 14.678A3.75 3.75 0 0 0 11.25 18Z",
  "folder-search":
    "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1L20.375 12.343A5.75 5.75 0 0 0 11.81 19.471Z",
  "folder-sync":
    "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5L20.93 9.319A7.75 7.75 0 0 0 14.419 8.692A2.75 2.75 0 0 0 9.25 10V16A7.75 7.75 0 0 0 10.068 19.466Z",
  // the folder, cut around the zip's pull and its lower tooth like the badges above (the upper tooth is cut out of it)
  "folder-archive":
    "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1L10.314 19.794A4.75 4.75 0 0 1 12.25 15.127V15A2.75 2.75 0 0 1 17.75 15V15.127A4.75 4.75 0 0 1 19.71 19.638Z",
  // the square, cut along the pen (about a unit of white between them, allowing for the fill's own stroke) where the source leaves its corner open
  "square-pen":
    "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7L19.944 10.944L13.445 17.444L9.408 18.624A3.25 3.25 0 0 1 5.376 14.592L6.556 10.555L13.056 4.056Z",
  // the whole ear (as for ear): the slash is cut out of it
  "ear-off": "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0Z",
  // the shell under the skin, its top a flatter curve that stays 2.8 clear of the skin all along (sides included)
  drum: "M2 14.02A10 2.8 0 0 0 22 14.02V17A10 5 0 0 1 2 17Z",
  // the funnel, cut with an arc round the plus (2.8 clear of it) where it leaves room for the plus
  "filter-plus":
    "M14.036 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L16.031 10.984A5.8 5.8 0 0 1 14.036 3Z",
  // the face, cut around the plus (2.8 clear of it) where it leaves room for the plus
  "smile-plus": "M14.894 2.428A10 10 0 1 0 21.572 9.106A2.8 2.8 0 0 1 16.208 7.792A2.8 2.8 0 0 1 14.894 2.428Z",
  // the flask, closed across its mouth
  flask: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2Z",
  // the box under the lid
  gift: "M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",
  // the pump
  fuel: PUMP,
  "ev-charger": PUMP,
  // the cloth of the flag, off its pole
  flag: "M4 4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528Z",
};
