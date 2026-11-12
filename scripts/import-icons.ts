/**
 * Brings icons in from the source set (ISC licence) into the kit's own format: every shape becomes a path, each part gets its
 * role (a closed shape is a body, a line inside a body a detail, the rest lines) so it comes in all three styles, and
 * each icon gets a motion from the presets. Writes packages/core/src/icons/batch-a.ts; the hand-drawn icons stay as they are.
 *
 *   pnpm import-icons        everything: LIST below into icons/batch-a.ts, and each batch into icons/batch-<batch>.ts
 *   pnpm import-icons e      only batch e (scripts/motions/e.ts: its list, motions and fills) into icons/batch-e.ts
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// the source shapes, one snapshot
const icons = JSON.parse(readFileSync(join(import.meta.dirname, "source", "shapes.json"), "utf8")) as Record<string, unknown>;
import { svgPathBbox } from "svg-path-bbox";
import svgpath from "svgpath";
import { circle, rr } from "../packages/core/src/geometry";
import { MOTIONS } from "./motions";
import type { Batch, Entry, Override } from "./motions/types";

/** The icons to bring over: the source shape's name, ours, a title, where it belongs, how it moves, words to find it by. */
const LIST: Entry[] = [
  ["Check", "check", "Check", "status", "draw", ["tick", "done", "ok", "yes"], "The tick draws itself."],
  ["FileText", "file-text", "Document", "actions", "tilt", ["file", "text", "page", "script"], "The page leans in."],
  ["Wand2", "wand", "Magic wand", "actions", "wiggle", ["magic", "auto", "transform", "polish"], "The wand waves."],
  ["Languages", "languages", "Languages", "app", "pop", ["translate", "language", "dub"], "It grows a touch."],
  ["TriangleAlert", "alert", "Warning", "status", "shake", ["warning", "error", "caution", "alert"], "It shakes to catch the eye."],
  ["Palette", "palette", "Palette", "app", "tilt", ["style", "color", "theme", "design"], "The palette tilts."],
  ["LoaderCircle", "loader", "Loading", "status", "none", ["spinner", "wait", "busy", "progress"], "Spin it while something loads."],
  ["ChevronDown", "chevron-down", "Chevron down", "navigation", "nudge-down", ["expand", "open", "more", "dropdown"], "It nudges down."],
  ["ChevronUp", "chevron-up", "Chevron up", "navigation", "nudge-up", ["collapse", "close", "less"], "It nudges up."],
  ["ArrowLeft", "arrow-left", "Arrow left", "navigation", "nudge-left", ["back", "previous", "return"], "It steps back."],
  ["ArrowDownToLine", "arrow-down-line", "Arrow down to line", "actions", "nudge-down", ["download", "save", "bottom"], "It drops to the line."],
  ["Square", "stop", "Stop", "media", "pop", ["stop", "square", "end"], "It grows a touch."],
  ["Play", "play-outline", "Play", "media", "nudge-right", ["play", "start", "listen"], "It steps forward."],
  ["Pause", "pause", "Pause", "media", "pop", ["pause", "hold", "wait"], "It grows a touch."],
  ["Music", "music", "Music", "media", "wiggle", ["song", "track", "note", "audio"], "The note bobs."],
  ["Layers", "layers", "Layers", "actions", "bounce", ["stack", "separate", "stems", "split"], "The stack bounces."],
  ["RotateCw", "rotate-cw", "Rotate forward", "actions", "spin", ["redo", "again", "rotate", "reload"], "One full turn."],
  ["RotateCcw", "rotate-ccw", "Rotate back", "actions", "spin-back", ["reset", "undo", "again"], "One full turn back."],
  ["FileAudio", "file-audio", "Audio file", "media", "tilt", ["file", "sound", "recording"], "The file leans in."],
  ["Cpu", "cpu", "Processor", "app", "pulse", ["engine", "chip", "hardware", "gpu"], "It pulses with work."],
  ["Zap", "zap", "Lightning", "status", "flash", ["fast", "power", "speed", "quick"], "It flashes."],
  ["MessagesSquare", "messages", "Conversation", "app", "bounce", ["dialogue", "chat", "talk"], "The bubbles bounce."],
  ["Lock", "lock", "Locked", "status", "shake", ["private", "secure", "closed"], "It rattles."],
  ["LockOpen", "lock-open", "Unlocked", "status", "wiggle", ["open", "unlock"], "It wiggles open."],
  ["Gauge", "gauge", "Speed", "status", "tilt", ["pace", "meter", "dial", "speed"], "The dial tilts."],
  ["Waves", "waves", "Waves", "media", "wave", ["sound", "water", "ambience"], "The waves roll, one after another."],
  ["Volume1", "volume-low", "Volume low", "media", "pop", ["sound", "quiet", "speaker"], "It grows a touch."],
  ["VolumeX", "volume-off", "Muted", "media", "shake", ["mute", "silent", "off"], "It shakes its head."],
  ["Timer", "timer", "Timer", "status", "wiggle", ["time", "duration", "stopwatch"], "It ticks."],
  ["ShieldCheck", "shield-check", "Protected", "status", "draw", ["safe", "secure", "verified", "consent"], "The shield draws itself."],
  ["ShieldQuestion", "shield-question", "Unverified", "status", "shake", ["unsure", "check"], "It shakes."],
  ["ShieldAlert", "shield-alert", "At risk", "status", "shake", ["danger", "warning"], "It shakes."],
  ["Save", "save", "Save", "actions", "bounce", ["disk", "keep", "store"], "It bounces as it saves."],
  ["Repeat2", "repeat", "Repeat", "media", "spin-180", ["loop", "again", "convert", "change"], "It turns half way."],
  ["Repeat", "repeat-loop", "Loop", "media", "spin-180", ["loop", "again", "repeat"], "It turns half way."],
  ["MessageSquareQuote", "message-quote", "Snippet", "app", "bounce", ["quote", "snippet", "message"], "It bounces."],
  ["MessageSquareText", "message-text", "Message", "app", "bounce", ["text", "chat", "message"], "It bounces."],
  ["MessageCircle", "message-circle", "Chat", "app", "bounce", ["chat", "bubble", "talk"], "It bounces."],
  ["CircleUserRound", "circle-user", "Account", "app", "pop", ["account", "profile", "user", "person", "sign in"], "It grows a touch."],
  ["LogOut", "log-out", "Sign out", "actions", "nudge-right", ["sign out", "leave", "exit", "logout"], "It steps out."],
  ["LogIn", "log-in", "Sign in", "actions", "nudge-right", ["sign in", "enter", "login"], "It steps in."],
  ["Bug", "bug", "Bug", "status", "wiggle", ["bug", "error", "report", "problem"], "It wriggles."],
  ["MessageSquareHeart", "message-heart", "Feedback", "app", "bounce", ["feedback", "love", "review", "message"], "It bounces."],
  ["Menu", "menu", "Menu", "navigation", "wiggle", ["menu", "hamburger", "nav", "open"], "The lines shuffle."],
  ["ArrowDown", "arrow-down", "Arrow down", "navigation", "nudge-down", ["down", "scroll", "next"], "It steps down."],
  ["Bot", "bot", "Assistant", "app", "bounce", ["bot", "assistant", "ai", "robot"], "It bobs."],
  ["WifiOff", "wifi-off", "Offline", "status", "shake", ["offline", "no internet", "local"], "It shakes."],
  ["Cloud", "cloud", "Cloud", "status", "float", ["cloud", "online", "upload"], "It drifts."],
  ["CloudOff", "cloud-off", "No cloud", "status", "shake", ["no cloud", "local", "private", "offline"], "It shakes."],
  ["Laptop", "laptop", "Laptop", "app", "pop", ["computer", "device", "desktop", "pc"], "It grows a touch."],
  ["ChartColumn", "chart", "Chart", "status", "bounce", ["stats", "chart", "bars", "progress"], "The bars bounce."],
  ["Command", "command", "Shortcut", "actions", "spin-180", ["shortcut", "hotkey", "keyboard", "command"], "It turns half way."],
  ["Video", "video", "Video", "media", "nudge-right", ["video", "film", "dub", "movie"], "It rolls forward."],
  ["Quote", "quote", "Quote", "app", "tilt", ["quote", "testimonial", "words"], "It leans in."],
  ["MailCheck", "mail-check", "Mail sent", "status", "draw", ["mail", "sent", "inbox", "verify"], "The tick draws itself."],
  ["Shield", "shield", "Shield", "status", "pop", ["secure", "privacy", "protect"], "It grows a touch."],
  ["MessageSquare", "message-square", "Message", "app", "bounce", ["message", "chat", "comment"], "It bounces."],
  ["Hash", "hash", "Channel", "app", "wiggle", ["channel", "hash", "tag", "slack"], "It wiggles."],
  ["UserPlus", "user-plus", "Add person", "app", "pop", ["clone", "add voice", "new person", "user plus"], "It grows a touch."],
  ["Keyboard", "keyboard", "Keyboard", "app", "pop", ["type", "keys", "hotkey", "dictation"], "It grows a touch."],
  ["Captions", "captions", "Captions", "media", "pop", ["subtitles", "srt", "cc"], "It grows a touch."],
  ["BookOpen", "book-open", "Open book", "app", "tilt", ["read", "project", "audiobook", "chapters"], "The book leans in."],
  ["Undo2", "undo", "Undo", "actions", "nudge-left", ["back", "revert", "correct"], "It steps back."],
  ["Type", "type", "Text", "actions", "pop", ["text", "font", "letters", "words"], "It grows a touch."],
  ["Shuffle", "shuffle", "Shuffle", "actions", "wiggle", ["random", "mix"], "It wiggles."],
  ["Scissors", "scissors", "Cut", "actions", "wiggle", ["cut", "trim", "clip"], "It snips."],
  ["MousePointerClick", "click", "Click", "actions", "bounce", ["pointer", "cursor", "tap"], "It taps."],
  ["ListOrdered", "list-ordered", "Numbered list", "actions", "draw", ["list", "order", "steps", "numbers"], "The list writes itself."],
  ["ListChecks", "list-checks", "Checklist", "status", "draw", ["jobs", "tasks", "todo", "queue"], "The list ticks itself off."],
  ["ListPlus", "list-plus", "Add to list", "actions", "pop", ["add", "queue", "append"], "It grows a touch."],
  ["HardDriveDownload", "drive-download", "Install", "actions", "nudge-down", ["install", "download", "disk", "drive"], "The arrow drops in."],
  ["GraduationCap", "graduation-cap", "Learn", "app", "tilt", ["learn", "teach", "school", "tour"], "The cap tilts."],
  ["Eraser", "eraser", "Erase", "actions", "wiggle", ["clear", "erase", "remove", "clean"], "It rubs out."],
  ["Ear", "ear", "Listen", "media", "wiggle", ["hear", "listen", "speech check"], "It perks up."],
  ["Dices", "dice", "Random", "actions", "spin-90", ["random", "seed", "chance", "roll"], "They roll."],
  ["Clock", "clock", "Time", "status", "tilt", ["time", "hour", "when", "duration"], "It leans in."],
  ["AudioWaveform", "waveform", "Waveform", "media", "pulse", ["audio", "wave", "signal"], "It pulses."],
  ["Wind", "wind", "Breath", "media", "wave", ["air", "breath", "breeze"], "It blows, line after line."],
  ["Users", "users", "People", "app", "pop", ["speakers", "people", "team", "voices"], "They step forward."],
  ["CloudUpload", "cloud-upload", "Cloud upload", "actions", "float", ["upload", "cloud", "send"], "It floats up."],
  ["Tags", "tags", "Tags", "actions", "wiggle", ["labels", "tags", "categories"], "They swing."],
  ["Tag", "tag", "Tag", "actions", "wiggle", ["label", "tag", "price"], "It swings."],
  ["Sun", "sun", "Light", "status", "spin-90", ["light mode", "day", "bright"], "It turns."],
  ["Moon", "moon", "Dark", "status", "wiggle", ["dark mode", "night"], "It rocks."],
  ["Monitor", "monitor", "Screen", "app", "pop", ["system", "display", "screen", "computer"], "It grows a touch."],
  ["SquareDashed", "square-dashed", "Selection", "actions", "spin-90", ["select", "area", "none", "plain"], "It turns."],
  ["SlidersHorizontal", "sliders", "Adjust", "actions", "wiggle", ["settings", "adjust", "controls", "filters"], "The sliders shift."],
  ["Settings2", "settings-2", "Options", "actions", "wiggle", ["options", "settings", "setup"], "It shifts."],
  ["ScanSearch", "scan-search", "Inspect", "actions", "pop", ["scan", "inspect", "analyse", "look"], "It focuses in."],
  ["Rocket", "rocket", "Launch", "status", "launch", ["launch", "start", "fast", "release"], "It launches and lands again."],
  ["Radio", "radio", "Live", "media", "pulse", ["broadcast", "live", "stream", "signal"], "It broadcasts."],
  ["Power", "power", "Power", "actions", "pop", ["on", "off", "start", "engine"], "It grows a touch."],
  ["PowerOff", "power-off", "Turn off", "actions", "pop", ["off", "stop", "unload"], "It grows a touch."],
  ["PlugZap", "plug", "Connect", "status", "wiggle", ["plug", "connect", "power", "api"], "It sparks."],
  ["PencilLine", "pencil-line", "Write", "actions", "wiggle", ["edit", "write", "rename"], "It scribbles."],
  ["Pencil", "pencil", "Edit", "actions", "wiggle", ["edit", "change", "rename"], "It scribbles."],
  ["PenLine", "pen-line", "Sign", "actions", "wiggle", ["write", "sign", "edit"], "It scribbles."],
  ["Package", "package", "Package", "app", "bounce", ["box", "install", "bundle"], "It bounces."],
  ["PackageOpen", "package-open", "Unpack", "app", "bounce", ["open", "unpack", "installed"], "It bounces."],
  ["Mail", "mail", "Mail", "app", "bounce", ["email", "message", "letter"], "It bounces."],
  ["Lightbulb", "lightbulb", "Idea", "status", "flash", ["idea", "tip", "hint"], "It lights up."],
  ["ImagePlus", "image-plus", "Add image", "actions", "pop", ["picture", "avatar", "photo"], "It grows a touch."],
  ["ImageOff", "image-off", "No image", "status", "pop", ["no picture", "missing"], "It grows a touch."],
  ["Hand", "hand", "Hands-free", "actions", "wiggle", ["wave", "hello", "stop", "hold"], "It waves."],
  ["Hammer", "hammer", "Build", "actions", "swing", ["build", "tools", "make"], "It swings."],
  ["Globe", "globe", "Web", "app", "tilt", ["world", "web", "language", "internet"], "It tilts."],
  ["FolderOpen", "folder-open", "Open folder", "actions", "bounce", ["folder", "open", "files", "browse"], "It bounces."],
  ["FunnelX", "filter-x", "Clear filters", "actions", "shake", ["filter", "clear", "reset"], "It shakes."],
  ["FileJson", "file-json", "JSON file", "actions", "tilt", ["json", "data", "file", "export"], "The file leans in."],
  ["FileDown", "file-down", "Download file", "actions", "nudge-down", ["download", "file", "export"], "It drops."],
  ["FileCheck2", "file-check", "File done", "status", "draw", ["file", "done", "saved"], "The file draws itself."],
  ["Eye", "eye", "Show", "actions", "blink", ["view", "see", "preview", "show"], "It blinks."],
  ["Compass", "compass", "Explore", "app", "spin-90", ["tour", "explore", "direction"], "It turns."],
  ["Code", "code", "Code", "app", "pop", ["developer", "api", "brackets"], "It grows a touch."],
  ["ClipboardPaste", "clipboard-paste", "Paste", "actions", "bounce", ["paste", "clipboard"], "It bounces."],
  ["ClipboardCheck", "clipboard-check", "Copied", "status", "draw", ["copied", "done", "clipboard"], "The tick draws in."],
  ["CircleSlash", "circle-slash", "Not allowed", "status", "spin-90", ["none", "disabled", "off"], "It turns."],
  ["Ban", "ban", "Blocked", "status", "spin-90", ["block", "forbidden", "cancel"], "It turns."],
  ["SquareCheck", "check-square", "Checked", "status", "draw", ["checkbox", "done", "select"], "The tick draws in."],
  ["Building2", "building", "Business", "app", "pop", ["company", "office", "work"], "It grows a touch."],
  ["Briefcase", "briefcase", "Work", "app", "bounce", ["work", "job", "business"], "It bounces."],
  ["Mic2", "mic-vocal", "Vocals", "media", "tilt", ["singer", "vocal", "voice", "microphone"], "It tilts toward you."],
  ["Library", "library", "Library", "app", "tilt", ["books", "collection", "voices"], "It leans in."],
  ["Activity", "activity", "Activity", "status", "draw", ["pulse", "heartbeat", "stats", "chart"], "The line traces itself."],
  ["CalendarDays", "calendar", "Calendar", "status", "bounce", ["date", "day", "schedule"], "It bounces."],
  ["ChevronRight", "chevron-right", "Chevron right", "navigation", "nudge-right", ["next", "open", "more", "expand"], "It nudges right."],
  ["Clapperboard", "clapperboard", "Scene", "media", "bounce", ["film", "scene", "video", "take"], "It claps."],
  ["Coffee", "coffee", "Break", "status", "float", ["break", "rest", "idle", "cup"], "It lifts."],
  ["Film", "film", "Video", "media", "tilt", ["movie", "video", "reel"], "It leans in."],
  ["Flame", "flame", "Flame", "status", "wiggle", ["fire", "hot", "streak"], "It flickers."],
  ["Frown", "frown", "Sad", "status", "wiggle", ["sad", "unhappy", "mood"], "It sighs."],
  ["Meh", "meh", "Neutral", "status", "wiggle", ["neutral", "flat", "mood"], "It shrugs."],
  ["HardDrive", "drive", "Drive", "app", "pop", ["disk", "storage", "space"], "It grows a touch."],
  ["CircleHelp", "help", "Help", "status", "wiggle", ["question", "help", "unknown"], "It tilts its head."],
  ["Newspaper", "newspaper", "News", "app", "tilt", ["news", "article", "read"], "It leans in."],
  ["PanelLeftClose", "panel-close", "Collapse sidebar", "navigation", "nudge-left", ["sidebar", "collapse", "hide"], "It slides shut."],
  ["PanelLeftOpen", "panel-open", "Expand sidebar", "navigation", "nudge-right", ["sidebar", "expand", "show"], "It slides open."],
  ["Skull", "skull", "Danger", "status", "shake", ["danger", "dead", "fatal"], "It rattles."],
  ["Trophy", "trophy", "Record", "status", "bounce", ["win", "record", "best", "award"], "It bounces."],
  ["Wrench", "wrench", "Tools", "app", "wiggle", ["tools", "fix", "settings", "repair"], "It turns a bolt."],
];

const SMALL = 36; // a closed shape smaller than this (in square units) is a detail, not a body
const TILE_BELOW = 120; // solid shapes covering less than this (square units, of 576) make the filled style a tile
const TILE = 9; // ...unless it stands on its own and is at least this big (a dashboard tile, not a dot)

/** Fill areas for icons whose outline the source draws open (by our name). Each is the whole shape the outline encloses,
 * on the 24 grid; strokes inside it become details (cut out in the filled style). */
const FILE = "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2Z";
const BOARD = "M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z";
/** Icons whose outline is drawn in several pieces that together make the fill (the hammer's head and handle): their
 * strokes stay lines, none is cut out of the fill. */
const OUTLINE_IN_PIECES = new Set<string>(["hammer"]);
/** Icons whose closed shapes are strokes, not solids (letters: an O is a ring of ink, not a disc). Filled gives them the
 * cut-out tile. Batches add to it with `strokes`. */
const STROKES = new Set<string>();
const FILLS: Record<string, string> = {
  "file-audio": FILE,
  // the source leaves the corner open for the tick: the fill stops there too, cut around the tick 2.8 clear of it
  "file-check": "M12.04 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6.04L16 18.04A2.8 2.8 0 1 0 12.04 22Z",
  "folder-open": "M2 5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2Z",
  // the envelope, cut around the tick 2.8 clear of it
  "mail-check": "M22 13.04V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.38A2.8 2.8 0 0 1 18 17.04Z",
  // the frame, cut around the plus (clear of it) where the source leaves the corner open; a hole around the sun, a solid
  // shape of its own
  "image-plus":
    "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5L13.25 5A2.75 2.75 0 0 0 16 7.75H16.25V8A2.75 2.75 0 0 0 21 9.887Z M4.2 9a4.8 4.8 0 0 0 9.6 0a4.8 4.8 0 0 0-9.6 0Z",
  // the frame, cut straight across (square to the slash) where the source breaks it beside the slash
  "image-off": "M9 3h10a2 2 0 0 1 2 2v10L18 18L20.41 20.41C20.052 20.78 19.55 21 19 21H5a2 2 0 0 1-2-2V5c0-.55.22-1.052.59-1.41L6 6Z",
  "clipboard-paste": BOARD,
  "clipboard-check": BOARD,
  "cloud-off": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  "cloud-upload": "M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  eraser: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21Z",
  lightbulb: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5Z",
  hammer:
    "M21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5Z M15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9Z",
  "filter-x": "M3 3h18a1 1 0 0 1 .742 1.67l-7.225 7.989A2 2 0 0 0 14 14v7a1 1 0 0 1-1.447.895l-2-1A1 1 0 0 1 10 20v-6a2 2 0 0 0-.517-1.341L2.258 4.67A1 1 0 0 1 3 3Z",
  coffee: "M4 8h12a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1Z",
  newspaper: "M8 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2Z",
  power: "M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18Z",
  "power-off": "M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18Z",
  gauge: "M3.34 19a10 10 0 1 1 17.32 0Z",
  "log-in": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4Z",
  "log-out": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Z",
  // the shoulders, which the source leaves open at the bottom
  users: "M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2Z",
  "user-plus": "M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2Z",
  // the tower and its wing as one block
  building: "M8 3h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Z",
  // the whole hand (fingers, palm and thumb), which the source draws as separate open strokes
  hand: "M6 14V6a2 2 0 0 1 4 0V4a2 2 0 0 1 4 0v2a2 2 0 0 1 4 0v2a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82Z",
  // the ear, closed down its open side
  ear: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0Z",
};

/** the source draws many outlines as one open path that comes back to where it began (no Z): those are closed shapes too,
 * so they fill in duotone and filled. Only a single-subpath path counts (several pieces are separate strokes). */
function endsWhereItStarts(d: string): boolean {
  let start: [number, number] | null = null;
  let cur: [number, number] = [0, 0];
  let moves = 0;
  svgpath(d)
    .abs()
    .unshort()
    .iterate((seg) => {
      const cmd = seg[0] as string;
      const nums = seg.slice(1) as number[];
      if (cmd === "M") {
        moves++;
        cur = [nums[0], nums[1]];
        if (!start) start = [...cur] as [number, number];
      } else if (cmd === "H") cur = [nums[0], cur[1]];
      else if (cmd === "V") cur = [cur[0], nums[0]];
      else if (cmd === "Z") cur = start ?? cur;
      else if (nums.length >= 2) cur = [nums[nums.length - 2], nums[nums.length - 1]];
    });
  if (!start || moves !== 1) return false;
  const [sx, sy] = start as [number, number];
  return Math.hypot(cur[0] - sx, cur[1] - sy) < 0.75;
}

function toPath(tag: string, a: Record<string, string | number>): { d: string; closed: boolean } {
  const n = (k: string) => Number(a[k] ?? 0);
  switch (tag) {
    case "path": {
      const d = String(a.d);
      return { d, closed: /z\s*$/i.test(d.trim()) || endsWhereItStarts(d) };
    }
    case "line":
      return { d: `M${n("x1")} ${n("y1")} L${n("x2")} ${n("y2")}`, closed: false };
    case "polyline":
    case "polygon": {
      const pts = String(a.points).trim().split(/[\s,]+/).map(Number);
      let d = `M${pts[0]} ${pts[1]}`;
      for (let i = 2; i < pts.length; i += 2) d += ` L${pts[i]} ${pts[i + 1]}`;
      return { d: tag === "polygon" ? d + " Z" : d, closed: tag === "polygon" };
    }
    case "rect":
      return { d: rr(n("x"), n("y"), n("width"), n("height"), Math.max(n("rx"), n("ry"))), closed: true };
    case "circle":
      return { d: circle(n("cx"), n("cy"), n("r")), closed: true };
    case "ellipse": {
      const [cx, cy, rx, ry] = [n("cx"), n("cy"), n("rx"), n("ry")];
      return { d: `M${cx - rx} ${cy} A${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A${rx} ${ry} 0 1 0 ${cx - rx} ${cy} Z`, closed: true };
    }
    default:
      throw new Error(`unknown element ${tag}`);
  }
}

/** A path as polylines (one per subpath), curves sampled, for the point tests below. */
function flatten(d: string): number[][][] {
  const polys: number[][][] = [];
  let cur: number[][] = [];
  let p = [0, 0];
  let start = [0, 0];
  const bez = (pts: number[][]) => {
    for (let k = 1; k <= 10; k++) {
      const t = k / 10;
      let q = pts.map((x) => [...x]);
      while (q.length > 1) q = q.slice(1).map((b, i) => [q[i][0] + (b[0] - q[i][0]) * t, q[i][1] + (b[1] - q[i][1]) * t]);
      cur.push(q[0]);
    }
  };
  svgpath(d)
    .abs()
    .unarc()
    .unshort()
    .iterate((seg) => {
      const c = seg[0] as string;
      const n = seg.slice(1) as number[];
      if (c === "M") {
        if (cur.length > 1) polys.push(cur);
        p = [n[0], n[1]];
        start = [...p];
        cur = [[...p]];
        return;
      }
      if (c === "L") p = [n[0], n[1]];
      else if (c === "H") p = [n[0], p[1]];
      else if (c === "V") p = [p[0], n[0]];
      else if (c === "Z") p = [...start];
      else if (c === "C") {
        bez([p, [n[0], n[1]], [n[2], n[3]], [n[4], n[5]]]);
        p = [n[4], n[5]];
        return;
      } else if (c === "Q") {
        bez([p, [n[0], n[1]], [n[2], n[3]]]);
        p = [n[2], n[3]];
        return;
      }
      cur.push([...p]);
    });
  if (cur.length > 1) polys.push(cur);
  return polys;
}

/** Points every half unit along a path. */
function samples(d: string): number[][] {
  const out: number[][] = [];
  for (const poly of flatten(d))
    for (let i = 1; i < poly.length; i++) {
      const [a, b] = [poly[i - 1], poly[i]];
      const steps = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.5));
      for (let k = 0; k <= steps; k++) out.push([a[0] + ((b[0] - a[0]) * k) / steps, a[1] + ((b[1] - a[1]) * k) / steps]);
    }
  return out;
}

function within(pt: number[], polys: number[][][]): boolean {
  let hit = false;
  for (const poly of polys)
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [a, b] = [poly[i], poly[j]];
      if (a[1] > pt[1] !== b[1] > pt[1] && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) hit = !hit;
    }
  return hit;
}

function edgeDistance(pt: number[], polys: number[][][]): number {
  let best = Infinity;
  for (const poly of polys)
    for (let i = 1; i < poly.length; i++) {
      const [a, b] = [poly[i - 1], poly[i]];
      const [dx, dy] = [b[0] - a[0], b[1] - a[1]];
      const t = Math.max(0, Math.min(1, ((pt[0] - a[0]) * dx + (pt[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
      best = Math.min(best, Math.hypot(pt[0] - a[0] - t * dx, pt[1] - a[1] - t * dy));
    }
  return best;
}

/** A line that runs well inside a body (not just along its edge): in the filled style it needs a gap cut around it,
 * or it would vanish into the solid shape (a slash, a power line, an arrow out of a cloud, a tick over a corner). */
function crossing(line: string, bodyAreas: string[]): { deepIn: boolean; out: boolean; edge: boolean } {
  const polys = bodyAreas.map(flatten);
  const pts = samples(line);
  // mostly along a body's edge: a piece of an outline the source draws in several strokes (a cloud with a gap for a slash)
  const edge = pts.filter((pt) => polys.some((pl) => edgeDistance(pt, pl) <= 0.8)).length > pts.length * 0.6;
  const deepIn = pts.filter((pt) => polys.some((pl) => within(pt, pl) && edgeDistance(pt, pl) > 0.8)).length >= 2;
  // well clear of every body (not just sitting on an edge)
  const out = pts.filter((pt) => polys.every((pl) => !within(pt, pl) && edgeDistance(pt, pl) > 0.8)).length >= 2;
  return { deepIn, out, edge };
}

/** Every point of the path lies inside one of the bodies (or within half a unit of its edge). */
function contained(d: string, bodyAreas: string[]): boolean {
  const polys = bodyAreas.map(flatten);
  return samples(d).every((pt) => polys.some((pl) => within(pt, pl) || edgeDistance(pt, pl) <= 0.5));
}

const inside = (a: number[], b: number[]) => a[0] >= b[0] - 0.5 && a[1] >= b[1] - 0.5 && a[2] <= b[2] + 0.5 && a[3] <= b[3] + 0.5;

const lib = icons as unknown as Record<string, [string, Record<string, string | number>][]>;
const ICON_DIR = join(import.meta.dirname, "..", "packages", "core", "src", "icons");

/** Converts a list into one generated file. */
function build(list: Entry[], motions: Record<string, Override>, file: string, origin: string) {
const out: string[] = [
  `// Generated by scripts/import-icons.ts: edit ${origin}, not this file.`,
  ...(list.length ? ['import type { IconDef } from "../types";'] : ["export {};"]),
  // icons without a motion of their own fall back to a preset
  ...(list.some(([, n]) => !motions[n]) ? ['import { preset } from "../presets";'] : []),
  "",
];
for (const [source, name, title, category, motion, tags, note] of list) {
  const own = motions[name];
  const node = lib[source];
  if (!node) throw new Error(`no source shape called ${source}`);
  const shapes = node.map(([tag, attrs]) => {
    const { d, closed } = toPath(tag, attrs);
    const box = svgPathBbox(d) as unknown as number[];
    return { d, closed, box, area: (box[2] - box[0]) * (box[3] - box[1]) };
  });
  // bodies: closed shapes big enough to fill, unless they sit well inside a bigger one (a compass needle, a chip's
  // core, a globe's meridians): those are cut out of it in the filled style instead of disappearing into it
  // (a small closed shape that sits inside nothing, such as a dashboard tile or a select box, fills too; dots don't)
  const free = (s: (typeof shapes)[number]) => !shapes.some((o) => o !== s && o.closed && o.area > s.area && inside(s.box, o.box));
  const big = STROKES.has(name) ? [] : shapes.filter((s) => s.closed && (s.area >= SMALL || (s.area >= TILE && free(s))));
  const nested = (s: (typeof shapes)[number]) => big.some((b) => b !== s && b.area > s.area / 0.7 && inside(s.box, b.box));
  const bodies = big.filter((s) => !nested(s));
  // an outline the source leaves open on purpose (a gap for a tick, an arrow or a slash) gets its fill from FILLS
  const fill = FILLS[name];
  const fillBox = fill ? (svgPathBbox(fill) as unknown as number[]) : null;
  const fillArea = fillBox ? (fillBox[2] - fillBox[0]) * (fillBox[3] - fillBox[1]) : 0;
  const bodyAreas = [...bodies.map((b) => b.d), ...(fill ? fill.split(/(?=M)/) : [])];
  const parts: Record<string, unknown>[] = shapes.map((s, i) => {
    let role: string;
    if (bodies.includes(s)) role = "body";
    else if (bodies.some((b) => b !== s && inside(s.box, b.box))) role = "detail";
    // inside the fill and clearly smaller than it (not the outline itself): cut out of it
    else if (fillBox && !OUTLINE_IN_PIECES.has(name) && s.area < fillArea * 0.6 && inside(s.box, fillBox)) role = "detail";
    else role = "line";
    // a "detail" that runs out past the body's edge (an X over a funnel's corner) would be cut off where it leaves the
    // body: it stays a line instead, with a gap cut around it
    if (role === "detail" && !contained(s.d, bodyAreas)) role = "line";
    // a line that runs into a body and out again (a slash, a power line, an arrow out of a cloud): cut out of the body
    // where it is inside and drawn where it is outside; the outline a fill was made for is never one
    let knock = false;
    if ((role === "line" || role === "detail") && !OUTLINE_IN_PIECES.has(name)) {
      const { deepIn, out, edge } = crossing(s.d, bodyAreas);
      if (edge) role = "line"; // a piece of the outline: stays a stroke on the edge
      else if (deepIn && out) [role, knock] = ["line", true];
      // well inside and never clear of it (a power line, an arrow across a clipboard): cut out, like a detail
      else if (deepIn) role = "detail";
    }
    return { p: `p${i}`, role, d: s.d, box: s.box, ...(knock ? { knock: true } : {}), ...(motion === "draw" || own?.draw?.includes(`p${i}`) ? { draw: true } : {}) };
  });
  // a detail that crosses a knocked line (the other stroke of an X) is drawn the same way, so the pair stays one mark
  const overlap = (a: number[], b: number[]) => a[0] <= b[2] && b[0] <= a[2] && a[1] <= b[3] && b[1] <= a[3];
  for (const pt of parts)
    if (pt.role === "detail" && parts.some((k) => k.knock && overlap(pt.box as number[], k.box as number[])))
      Object.assign(pt, { role: "line", knock: true });
  for (const pt of parts) delete pt.box;
  if (fill) {
    // drawn first (behind), moving with the outline it fills: the stroke that runs along the fill's edge the most
    // (not merely the biggest: a slash across a power button spans more than its ring)
    const edgePolys = fill.split(/(?=M)/).map(flatten);
    const along = (d: string) => samples(d).filter((pt) => edgePolys.some((pl) => edgeDistance(pt, pl) <= 0.8)).length;
    const outline = shapes.reduce((a, b, i) => (along(b.d) > along(shapes[a].d) ? i : a), 0);
    parts.unshift({ p: `p${outline}`, role: "body", area: fill });
  }
  // solid shapes covering only a corner of a mostly-line icon (a car's wheels, an anchor's ring) don't make it read as
  // filled: the filled style cuts the whole drawing out of a tile instead
  const solidArea = parts
    .filter((pt) => pt.role === "body")
    .reduce((sum, pt) => {
      const b = svgPathBbox((pt.area ?? pt.d) as string) as unknown as number[];
      return sum + (b[2] - b[0]) * (b[3] - b[1]);
    }, 0);
  const tile = solidArea > 0 && solidArea < TILE_BELOW;
  // a name JavaScript keeps for itself gets "Icon" after it
  const id = exportId(name);
  out.push(
    `export const ${id}: IconDef = {`,
    `  name: ${JSON.stringify(name)},`,
    `  title: ${JSON.stringify(title)},`,
    `  category: ${JSON.stringify(category)},`,
    `  tags: ${JSON.stringify(tags)},`,
    `  motionNote: ${JSON.stringify(own?.note ?? note)},`,
    `  parts: ${JSON.stringify(parts)},`,
    ...(tile ? ["  tile: true,"] : []),
    ...(own
      ? [`  motion: ${JSON.stringify(own.motion ?? {})},`, ...(own.keyframes ? [`  keyframes: ${JSON.stringify(own.keyframes)},`] : [])]
      : [`  ...preset(${JSON.stringify(motion)}, ${shapes.length}),`]),
    "};",
    "",
  );
}
writeFileSync(join(ICON_DIR, file), out.join("\n"));
console.log(`${list.length} icons written to packages/core/src/icons/${file}`);
}

/** The batches: scripts/motions/<letter>.ts files that export a `list` (e, f, g, …; a–d only hold motions for LIST). */
const BATCHES = readdirSync(join(import.meta.dirname, "motions"))
  .map((f) => f.match(/^([e-z])\.ts$/)?.[1])
  .filter((b): b is string => !!b)
  .sort();

/** Every name and export already taken outside the file being written, so two batches never clash. */
function taken(except: string): { names: Set<string>; ids: Set<string> } {
  const names = new Set<string>();
  const ids = new Set<string>();
  for (const f of readdirSync(ICON_DIR)) {
    if (f === except || !f.endsWith(".ts")) continue;
    const src = readFileSync(join(ICON_DIR, f), "utf8");
    for (const m of src.matchAll(/^export const (\w+)/gm)) ids.add(m[1]);
    for (const m of src.matchAll(/^\s+name: "([^"]+)"/gm)) names.add(m[1]);
  }
  return { names, ids };
}

const RESERVED = ["package", "private", "public", "import", "export", "default", "delete", "new", "class", "function", "return", "switch", "case", "break", "continue", "var", "let", "const", "if", "else", "for", "while", "do", "in", "of", "this", "super", "throw", "try", "catch", "finally", "typeof", "void", "with", "yield", "enum", "interface", "static", "protected", "implements", "await", "null", "true", "false"];
const exportId = (name: string) => {
  const camel = name.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
  return RESERVED.includes(camel) ? camel + "Icon" : camel;
};

async function buildBatch(b: string) {
  const mod = (await import(`./motions/${b}.ts`)) as Batch;
  Object.assign(FILLS, mod.fills ?? {});
  for (const n of mod.pieces ?? []) OUTLINE_IN_PIECES.add(n);
  for (const n of mod.strokes ?? []) STROKES.add(n);
  const file = `batch-${b}.ts`;
  const { names, ids } = taken(file);
  const seen = new Set<string>();
  for (const [source, name] of mod.list) {
    if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`batch ${b}: "${name}" should be lower-case words joined by -`);
    if (names.has(name) || seen.has(name)) throw new Error(`batch ${b}: the name "${name}" is already taken`);
    if (ids.has(exportId(name))) throw new Error(`batch ${b}: the export ${exportId(name)} (from "${name}") is already taken`);
    if (!lib[source]) throw new Error(`batch ${b}: no source shape called ${source}`);
    seen.add(name);
  }
  for (const name of Object.keys(mod.motions)) if (!seen.has(name)) throw new Error(`batch ${b}: a motion for "${name}", which is not in its list`);
  build(mod.list, mod.motions, file, `scripts/motions/${b}.ts`);
}

const only = process.argv[2];
if (only) {
  if (!existsSync(join(import.meta.dirname, "motions", `${only}.ts`))) throw new Error(`no batch scripts/motions/${only}.ts`);
  await buildBatch(only);
} else {
  build(LIST, MOTIONS, "batch-a.ts", "the LIST in scripts/import-icons.ts");
  for (const b of BATCHES) await buildBatch(b);
}
