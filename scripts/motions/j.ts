import type { Entry, Override } from "./types";

/** Batch j: its icons (pnpm import-icons j) and their motions. */
export const list: Entry[] = [
  ["ListVideo", "list-video", "Video playlist", "media", "nudge-right", ["playlist", "videos", "queue", "watch"], "The play mark steps forward."],
  ["ListX", "list-x", "Clear list", "actions", "shake", ["remove", "clear", "list", "delete"], "The cross strikes."],
  ["Loader", "spinner", "Spinner", "status", "spin", ["loading", "wait", "busy", "progress"], "The spokes fade round."],
  ["LoaderPinwheel", "pinwheel", "Pinwheel", "status", "spin", ["loading", "spinner", "busy", "wait"], "The pinwheel turns."],
  ["Locate", "locate", "Locate", "navigation", "pulse", ["gps", "position", "target", "find me"], "The crosshair closes in."],
  ["LocateFixed", "locate-fixed", "Location found", "navigation", "pulse", ["gps", "position", "here", "target"], "The dot locks on."],
  ["LocateOff", "locate-off", "Location off", "navigation", "shake", ["gps off", "no location", "hidden"], "The slash strikes."],
  ["MapPinPen", "map-pin-pen", "Edit location", "navigation", "wiggle", ["edit place", "address", "location", "pin"], "The pen writes."],
  ["LockKeyhole", "lock-keyhole", "Secure", "status", "shake", ["lock", "secure", "password", "private"], "The keyhole turns."],
  ["LockKeyholeOpen", "lock-keyhole-open", "Unsecured", "status", "wiggle", ["unlock", "open", "access"], "The shackle swings."],
  ["Logs", "logs", "Logs", "development", "draw", ["log", "console", "output", "history"], "The lines print."],
  ["Lollipop", "lollipop", "Lollipop", "food", "spin", ["candy", "sweet", "treat"], "The swirl turns."],
  ["Luggage", "luggage", "Luggage", "travel", "bounce", ["suitcase", "travel", "bag", "trip"], "The case rolls."],
  ["Magnet", "magnet", "Magnet", "actions", "wiggle", ["attract", "snap", "pull", "magnetic"], "The magnet pulls."],
  ["MailWarning", "mail-alert", "Mail problem", "communication", "shake", ["mail", "warning", "bounced", "error"], "The mark flashes."],
  ["Mailbox", "mailbox", "Mailbox", "communication", "bounce", ["post", "inbox", "letters", "mail"], "The flag rises."],
  ["MailOpen", "mail-open", "Read mail", "communication", "bounce", ["opened", "read", "envelope"], "The letter peeks out."],
  ["MailPlus", "mail-plus", "New mail", "communication", "pop", ["compose", "write", "new message"], "The plus grows."],
  ["MailX", "mail-x", "Mail failed", "communication", "shake", ["mail", "failed", "remove", "delete"], "The cross strikes."],
  ["Mails", "mails", "Mails", "communication", "bounce", ["inbox", "messages", "many", "envelopes"], "The letters shuffle."],
  ["MailSearch", "mail-search", "Search mail", "communication", "wiggle", ["find", "inbox", "search"], "The glass looks around."],
  ["MailDot", "mail-unread", "Unread mail", "communication", "pulse", ["unread", "new", "notification", "inbox"], "The dot pops."],
  ["Map", "map", "Map", "travel", "pop", ["map", "route", "atlas", "directions"], "The map unfolds."],
  ["MapPin", "map-pin", "Location", "navigation", "bounce", ["place", "address", "marker", "pin"], "The pin drops."],
  ["MapPinCheck", "map-pin-check", "Checked in", "navigation", "draw", ["arrived", "visited", "check in"], "The tick draws."],
  ["MapPinHouse", "map-pin-house", "Home address", "navigation", "bounce", ["home", "address", "house"], "The pin drops."],
  ["MapPinOff", "map-pin-off", "No location", "navigation", "shake", ["location off", "hidden", "private"], "The slash strikes."],
  ["MapPinPlus", "map-pin-plus", "Add place", "navigation", "pop", ["add location", "new place", "pin"], "The plus grows."],
  ["MapPinned", "map-pinned", "Pinned map", "travel", "bounce", ["place", "saved", "map", "marker"], "The pin drops on the map."],
  ["MapPinX", "map-pin-x", "Remove place", "navigation", "shake", ["remove location", "delete pin"], "The cross strikes."],
  ["Martini", "martini", "Cocktail", "food", "tilt", ["drink", "bar", "cocktail", "party"], "The glass tips."],
  ["Maximize", "enter-fullscreen", "Full screen", "actions", "pop", ["fullscreen", "expand", "enlarge"], "The corners spread."],
  ["Minimize", "exit-fullscreen", "Exit full screen", "actions", "pop", ["exit fullscreen", "collapse", "shrink"], "The corners close."],
  ["Maximize2", "expand-arrows", "Expand", "actions", "pop", ["enlarge", "open", "bigger"], "The arrows spread."],
  ["Minimize2", "shrink-arrows", "Shrink", "actions", "pop", ["collapse", "smaller", "reduce"], "The arrows close."],
  ["Medal", "medal", "Medal", "status", "swing", ["award", "prize", "winner", "badge"], "The medal swings."],
  ["Megaphone", "megaphone", "Announce", "communication", "wiggle", ["announcement", "marketing", "shout", "broadcast"], "The horn calls out."],
  ["MegaphoneOff", "megaphone-off", "Announcements off", "communication", "shake", ["mute", "quiet", "no announcements"], "The slash strikes."],
  ["MemoryStick", "memory", "Memory", "devices", "pulse", ["ram", "memory", "hardware", "storage"], "The pins light up."],
  ["Merge", "merge", "Merge", "development", "nudge-up", ["git", "join", "combine", "branch"], "The branches join."],
  ["MessageCircleMore", "message-more", "Typing", "communication", "wave", ["typing", "dots", "chat", "reply"], "The dots bob."],
  ["MessageCirclePlus", "message-plus", "New chat", "communication", "pop", ["new message", "start chat", "add"], "The plus grows."],
  ["MessageCircleReply", "message-reply", "Reply", "communication", "nudge-left", ["reply", "answer", "respond"], "The arrow turns back."],
  ["MessageCircleQuestion", "message-question", "Ask", "communication", "wiggle", ["question", "support", "help", "faq"], "The question mark tilts."],
  ["MessageCircleOff", "message-off", "Chat off", "communication", "shake", ["mute chat", "disabled", "no messages"], "The slash strikes."],
  ["MessageCircleCheck", "message-check", "Message read", "communication", "draw", ["read", "seen", "delivered", "resolved"], "The tick draws."],
  ["MessageCircleX", "message-x", "Message failed", "communication", "shake", ["failed", "delete", "remove"], "The cross strikes."],
  ["MessageCircleCode", "message-code", "Code chat", "communication", "wiggle", ["code", "snippet", "developer", "review"], "The brackets open."],
  ["MessageSquareWarning", "message-alert", "Report", "communication", "shake", ["report", "warning", "flag", "problem"], "The mark flashes."],
  ["MessageSquareLock", "message-lock", "Private message", "communication", "shake", ["private", "encrypted", "secure"], "The lock clicks."],
  ["MessageSquareShare", "message-share", "Share message", "communication", "nudge-right", ["share", "forward", "send"], "The arrow leaves."],
  ["MessageSquareDot", "message-unread", "Unread message", "communication", "pulse", ["unread", "new", "notification"], "The dot pops."],
  ["Metronome", "metronome", "Metronome", "media", "swing", ["tempo", "beat", "bpm", "rhythm"], "The arm ticks."],
  ["MicOff", "mic-off", "Mic off", "media", "shake", ["mute", "microphone off", "silent"], "The slash strikes."],
  ["Microscope", "microscope", "Microscope", "health", "tilt", ["science", "lab", "research", "inspect"], "The tube focuses."],
  ["Microwave", "microwave", "Microwave", "devices", "pulse", ["kitchen", "heat", "oven", "appliance"], "It hums."],
  ["Podcast", "podcast", "Podcast", "media", "pulse", ["podcast", "broadcast", "audio", "show"], "The waves ripple."],
  ["Milestone", "milestone", "Milestone", "navigation", "swing", ["goal", "sign", "roadmap", "step"], "The sign sways."],
  ["Milk", "milk", "Milk", "food", "tilt", ["dairy", "bottle", "drink"], "The bottle tips."],
  ["Minus", "minus", "Remove", "actions", "pop", ["minus", "subtract", "less", "remove"], "The line draws."],
  ["MonitorCheck", "monitor-check", "Screen ready", "devices", "draw", ["display", "done", "verified"], "The tick draws."],
  ["MonitorDown", "monitor-down", "Download to computer", "devices", "nudge-down", ["download", "install", "desktop"], "The arrow drops."],
  ["MonitorOff", "monitor-off", "Screen off", "devices", "shake", ["display off", "no signal", "blank"], "The slash strikes."],
  ["MonitorPlay", "monitor-play", "Watch", "devices", "nudge-right", ["video", "stream", "watch", "screen"], "The play mark steps."],
  ["MonitorSmartphone", "devices", "Devices", "devices", "bounce", ["responsive", "desktop", "mobile", "devices"], "The phone slides in."],
  ["MonitorCog", "monitor-cog", "System settings", "devices", "spin", ["settings", "system", "configure"], "The cog turns."],
  ["MoonStar", "moon-star", "Night", "weather", "tilt", ["night", "sleep", "evening", "dark"], "The star twinkles."],
  ["Mountain", "mountain", "Mountain", "nature", "bounce", ["landscape", "hike", "peak", "outdoors"], "The peaks rise."],
  ["MountainSnow", "mountain-snow", "Snowy mountain", "nature", "bounce", ["peak", "snow", "alps", "ski"], "The snow cap settles."],
  ["Mouse", "mouse", "Mouse", "devices", "nudge-down", ["mouse", "click", "pointer", "scroll"], "The wheel scrolls."],
  ["MousePointer", "mouse-pointer", "Pointer", "actions", "nudge-up", ["cursor", "arrow", "select", "click"], "The pointer taps."],
  ["MousePointer2", "cursor", "Cursor", "actions", "nudge-up", ["cursor", "arrow", "select"], "The cursor taps."],
  ["Move", "move", "Move", "actions", "pop", ["drag", "move", "arrange", "position"], "The arrows reach out."],
  ["MoveHorizontal", "move-horizontal", "Move sideways", "actions", "nudge-right", ["resize width", "horizontal", "drag"], "The ends stretch."],
  ["MoveVertical", "move-vertical", "Move up and down", "actions", "nudge-down", ["resize height", "vertical", "drag"], "The ends stretch."],
  ["MoveDiagonal", "move-diagonal", "Resize", "actions", "pop", ["resize", "diagonal", "scale"], "The ends stretch."],
  ["MoveRight", "move-right", "Long arrow right", "navigation", "nudge-right", ["next", "forward", "continue"], "The arrow travels."],
  ["MoveUpRight", "move-up-right", "Long arrow up right", "navigation", "nudge-right", ["external", "go", "trend up"], "The arrow travels."],
  ["Move3D", "move-3d", "3D axes", "development", "pop", ["3d", "axes", "transform", "space"], "The axes draw."],
  ["Music4", "music-notes", "Notes", "media", "bounce", ["notes", "melody", "song", "tune"], "The notes bob."],
  ["Navigation", "navigation", "Navigate", "navigation", "nudge-up", ["gps", "direction", "heading", "arrow"], "The arrow points on."],
  ["NavigationOff", "navigation-off", "Navigation off", "navigation", "shake", ["gps off", "no direction"], "The slash strikes."],
  ["Network", "network", "Network", "development", "pulse", ["network", "nodes", "lan", "topology"], "The links light up."],
  ["Nfc", "nfc", "Contactless", "devices", "wave", ["contactless", "tap", "pay", "nfc"], "The waves ripple."],
  ["Notebook", "notebook", "Notebook", "text", "tilt", ["notes", "journal", "diary"], "The cover lifts."],
  ["NotebookPen", "notebook-pen", "Take notes", "text", "wiggle", ["write", "notes", "journal", "edit"], "The pen writes."],
  ["NotebookTabs", "notebook-tabs", "Address book", "text", "tilt", ["contacts", "sections", "tabs", "notes"], "The tabs flick."],
  ["NotepadText", "notepad", "Notepad", "text", "draw", ["notes", "memo", "pad", "text"], "The lines write."],
  ["Nut", "nut", "Nut", "food", "wiggle", ["acorn", "nut", "snack", "allergy"], "It rocks."],
  ["OctagonX", "octagon-x", "Stop sign", "status", "shake", ["stop", "error", "forbidden", "close"], "The cross strikes."],
  ["OctagonPause", "octagon-pause", "Paused", "status", "pop", ["pause", "halt", "hold"], "The bars press."],
  ["Option", "option", "Option key", "devices", "nudge-down", ["alt", "key", "modifier", "mac"], "The key presses."],
  ["Orbit", "orbit", "Orbit", "nature", "spin", ["space", "planet", "orbit", "satellite"], "The moons circle."],
  ["Opacity", "opacity", "Opacity", "app", "pulse", ["transparency", "alpha", "fade"], "It fades."],
  ["PackageCheck", "package-check", "Delivered", "commerce", "draw", ["delivered", "shipped", "order", "done"], "The tick draws."],
  ["PackagePlus", "package-plus", "Add package", "commerce", "pop", ["add", "new order", "parcel"], "The plus grows."],
  ["PackageSearch", "package-search", "Track package", "commerce", "wiggle", ["track", "find order", "search"], "The glass looks."],
  ["PackageX", "package-x", "Order cancelled", "commerce", "shake", ["cancel", "lost", "failed delivery"], "The cross strikes."],
  ["Paintbrush", "paintbrush", "Paintbrush", "app", "wiggle", ["paint", "brush", "style", "design"], "The brush strokes."],
  ["PaintBucket", "paint-bucket", "Fill", "app", "tilt", ["fill", "bucket", "color", "paint"], "The bucket tips."],
  ["PaintRoller", "paint-roller", "Paint roller", "app", "nudge-right", ["roller", "paint", "decorate", "theme"], "The roller rolls."],
  ["TreePalm", "palm-tree", "Palm tree", "nature", "swing", ["beach", "holiday", "tropical", "vacation"], "The fronds sway."],
  ["PanelLeft", "sidebar", "Sidebar", "app", "nudge-right", ["sidebar", "panel", "layout", "toggle"], "The panel slides."],
  ["PanelRight", "panel-right", "Right panel", "app", "nudge-left", ["panel", "inspector", "layout"], "The panel slides."],
  ["PanelBottom", "panel-bottom", "Bottom panel", "app", "nudge-up", ["panel", "console", "drawer", "layout"], "The panel slides."],
  ["PanelRightOpen", "panel-right-open", "Open right panel", "app", "nudge-left", ["expand", "inspector", "show panel"], "The chevron points in."],
  ["PanelRightClose", "panel-right-close", "Close right panel", "app", "nudge-right", ["collapse", "hide panel"], "The chevron points out."],
  ["PanelBottomOpen", "panel-bottom-open", "Open bottom panel", "app", "nudge-up", ["expand", "drawer", "show console"], "The chevron points up."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a transform origin in icon units, so parts that turn together share one pivot */
const V = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a keyframe animation named after its icon */
const a = (icon: string, name: string, ms: number, delay = 0, ease = SMOOTH, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${ease} ${delay}ms${fill ? ` ${fill}` : ""}`;
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: a(icon, "draw", ms, delay, SMOOTH, "backwards") });
/** the same, drawn from its end back to its start */
const undrawKf = (icon: string) => kf(icon, "undraw", "from{stroke-dashoffset:-1}to{stroke-dashoffset:0}");
const undraw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: a(icon, "undraw", ms, delay, SMOOTH, "backwards") });

/** a step out and back, with a small rebound */
const nudge = (dx: number, dy: number) =>
  `0%{transform:none}35%{transform:translate(${dx}px,${dy}px)}65%{transform:translate(${+(-dx * 0.2).toFixed(2)}px,${+(-dy * 0.2).toFixed(2)}px)}100%{transform:none}`;
/** grows in from nothing (use with fill "backwards") */
const POP_IN = "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}";
/** a quick squeeze and spring back */
const PULSE = "0%{transform:none}30%{transform:scale(.88)}60%{transform:scale(1.06)}100%{transform:none}";
/** a flap or bar pressed flat and let go */
const PRESS = "0%{transform:none}35%{transform:scaleY(.55)}70%{transform:scaleY(1.05)}100%{transform:none}";
/** a small head shake, for things that are switched off */
const SHAKE = "0%{transform:none}20%{transform:translateX(-.8px)}40%{transform:translateX(.7px)}60%{transform:translateX(-.4px)}80%{transform:translateX(.2px)}100%{transform:none}";
/** dims and comes back */
const FADE = "0%{opacity:1}30%{opacity:.2}100%{opacity:1}";
/** rocks round a pivot and settles */
const ROCK = (deg: number) =>
  `0%{transform:none}25%{transform:rotate(${deg}deg)}50%{transform:rotate(${-deg * 0.6}deg)}75%{transform:rotate(${deg * 0.25}deg)}100%{transform:none}`;

/** a speech bubble that squashes and springs back from the corner its tail is in */
const BUBBLE = "0%{transform:none}30%{transform:scale(1.07,.92) rotate(-3deg)}60%{transform:scale(.97,1.04) rotate(1.5deg)}100%{transform:none}";
const bubble = (icon: string, delay = 0) => ({ origin: "0% 100%", animation: a(icon, "bubble", 600, delay) });

/** a map pin dropping in: the pin squashes as it lands, its dot rides along */
const PIN = "0%{transform:none}25%{transform:translateY(-2.5px)}50%{transform:scale(1.06,.9)}70%{transform:scale(.98,1.03)}100%{transform:none}";
const PIN_DOT = "0%{transform:none}25%{transform:translateY(-2.5px)}50%{transform:translateY(.6px)}70%{transform:translateY(-.2px)}100%{transform:none}";
const pin = (icon: string) => ({ origin: "50% 100%", animation: a(icon, "pin", 650) });
const pinDot = (icon: string) => ({ animation: a(icon, "dot", 650) });
const pinKf = (icon: string) => kf(icon, "pin", PIN) + kf(icon, "dot", PIN_DOT);

/** an "off" icon: its pieces shake while the slash strikes through */
const off = (icon: string, pieces: string[], slash: string): Override => ({
  note: "The pieces give a small shake while the slash draws itself across.",
  draw: [slash],
  motion: { ...Object.fromEntries(pieces.map((p) => [p, { animation: a(icon, "shake", 500) }])), [slash]: draw(icon, 420, 80) },
  keyframes: kf(icon, "shake", SHAKE) + drawKf(icon),
});

/** corners or arrowheads stepping out (or in) along the diagonals */
const corner = (icon: string, name: string, dx: number, dy: number) => kf(icon, name, nudge(dx, dy));

export const motions: Record<string, Override> = {
  "list-video": {
    note: "The rows write themselves in and the play mark steps forward.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p0: draw("list-video", 350),
      p1: draw("list-video", 350, 60),
      p2: draw("list-video", 350, 120),
      p3: { animation: a("list-video", "play", 600, 100) },
    },
    keyframes: drawKf("list-video") + kf("list-video", "play", "0%{transform:none}35%{transform:translateX(1.5px) scale(1.12)}65%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  "list-x": {
    note: "The rows write themselves in, then the cross strikes stroke by stroke.",
    draw: ["p0", "p1", "p2", "p3", "p4"],
    motion: {
      p0: draw("list-x", 320),
      p1: draw("list-x", 320, 50),
      p2: draw("list-x", 320, 100),
      p3: draw("list-x", 300, 180),
      p4: draw("list-x", 300, 280),
    },
    keyframes: drawKf("list-x"),
  },

  spinner: {
    note: "The spokes dim one after another all the way round, like the spinner turning once.",
    motion: Object.fromEntries([0, 1, 2, 3, 4, 5, 6, 7].map((i) => [`p${i}`, { animation: a("spinner", "fade", 560, i * 70) }])),
    keyframes: kf("spinner", "fade", FADE),
  },

  pinwheel: {
    note: "The blades turn once round the hub while the rim gives a small squeeze.",
    motion: {
      p0: { ...V(12, 12), animation: a("pinwheel", "turn", 900) },
      p1: { ...V(12, 12), animation: a("pinwheel", "turn", 900) },
      p2: { ...V(12, 12), animation: a("pinwheel", "turn", 900) },
      p3: { animation: a("pinwheel", "rim", 600) },
    },
    keyframes: kf("pinwheel", "turn", "from{transform:none}to{transform:rotate(360deg)}") + kf("pinwheel", "rim", PULSE),
  },

  locate: {
    note: "The four ticks close in on the ring, which tightens and springs back.",
    motion: {
      p0: { animation: a("locate", "l", 600) },
      p1: { animation: a("locate", "r", 600) },
      p2: { animation: a("locate", "t", 600) },
      p3: { animation: a("locate", "b", 600) },
      p4: { animation: a("locate", "ring", 600, 60) },
    },
    keyframes:
      corner("locate", "l", 1.4, 0) + corner("locate", "r", -1.4, 0) + corner("locate", "t", 0, 1.4) + corner("locate", "b", 0, -1.4) + kf("locate", "ring", PULSE),
  },

  "locate-fixed": {
    note: "The ticks close in, the ring tightens and the dot in the middle locks on.",
    motion: {
      p0: { animation: a("locate-fixed", "l", 600) },
      p1: { animation: a("locate-fixed", "r", 600) },
      p2: { animation: a("locate-fixed", "t", 600) },
      p3: { animation: a("locate-fixed", "b", 600) },
      p4: { animation: a("locate-fixed", "ring", 600, 60) },
      p5: { animation: a("locate-fixed", "dot", 550, 160, SMOOTH, "backwards") },
    },
    keyframes:
      corner("locate-fixed", "l", 1.4, 0) +
      corner("locate-fixed", "r", -1.4, 0) +
      corner("locate-fixed", "t", 0, 1.4) +
      corner("locate-fixed", "b", 0, -1.4) +
      kf("locate-fixed", "ring", PULSE) +
      kf("locate-fixed", "dot", POP_IN),
  },

  "locate-off": {
    note: "The ticks reach in and find nothing; the slash draws across the broken ring.",
    draw: ["p5"],
    motion: {
      p0: { animation: a("locate-off", "b", 600) },
      p1: { animation: a("locate-off", "t", 600) },
      p3: { animation: a("locate-off", "r", 600) },
      p4: { animation: a("locate-off", "l", 600) },
      p2: { animation: a("locate-off", "shake", 500, 100) },
      p6: { animation: a("locate-off", "shake", 500, 100) },
      p5: draw("locate-off", 420, 120),
    },
    keyframes:
      corner("locate-off", "l", 1.2, 0) +
      corner("locate-off", "r", -1.2, 0) +
      corner("locate-off", "t", 0, 1.2) +
      corner("locate-off", "b", 0, -1.2) +
      kf("locate-off", "shake", SHAKE) +
      drawKf("locate-off"),
  },

  "map-pin-pen": {
    note: "The pen scribbles from its tip while the pin's dot gives a small pop.",
    motion: {
      p1: { origin: "0% 100%", animation: a("map-pin-pen", "pen", 700) },
      p2: { animation: a("map-pin-pen", "dot", 500, 100) },
    },
    keyframes:
      kf("map-pin-pen", "pen", "0%{transform:none}25%{transform:translate(-.6px,.6px) rotate(-6deg)}50%{transform:translate(.6px,-.2px) rotate(4deg)}75%{transform:translate(-.3px,.3px) rotate(-2deg)}100%{transform:none}") +
      kf("map-pin-pen", "dot", PULSE),
  },

  "lock-keyhole": {
    note: "The shackle lifts and snaps back down; the body takes the knock and the keyhole flashes.",
    motion: {
      p2: { animation: a("lock-keyhole", "shackle", 650) },
      p1: { animation: a("lock-keyhole", "body", 650) },
      p0: { animation: a("lock-keyhole", "hole", 650) },
    },
    keyframes:
      kf("lock-keyhole", "shackle", "0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.4px)}75%,100%{transform:none}") +
      kf("lock-keyhole", "body", "0%,45%{transform:none}55%{transform:translateY(.4px)}75%,100%{transform:none}") +
      kf("lock-keyhole", "hole", "0%,45%{transform:none}60%{transform:scale(1.6)}100%{transform:none}"),
  },

  "lock-keyhole-open": {
    note: "The open shackle drops shut on its hinge leg, then swings open again.",
    motion: {
      p2: { origin: "0% 100%", animation: a("lock-keyhole-open", "shackle", 700) },
      p1: { animation: a("lock-keyhole-open", "body", 700) },
      p0: { animation: a("lock-keyhole-open", "hole", 700) },
    },
    keyframes:
      kf("lock-keyhole-open", "shackle", "0%{transform:none}30%{transform:translateY(1px) rotate(12deg)}45%{transform:translateY(1px) rotate(12deg)}78%{transform:translateY(-.4px) rotate(-6deg)}100%{transform:none}") +
      kf("lock-keyhole-open", "body", "0%,22%{transform:none}32%{transform:translateY(.5px)}50%{transform:none}") +
      kf("lock-keyhole-open", "hole", "0%,25%{transform:none}38%{transform:scale(1.5)}60%{transform:none}"),
  },

  logs: {
    note: "The log prints line by line: each row's markers, then its text.",
    draw: ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
    motion: {
      p0: draw("logs", 200, 0),
      p3: draw("logs", 200, 40),
      p6: draw("logs", 300, 80),
      p1: draw("logs", 200, 140),
      p4: draw("logs", 200, 180),
      p7: draw("logs", 300, 220),
      p2: draw("logs", 200, 280),
      p5: draw("logs", 200, 320),
      p8: draw("logs", 300, 360),
    },
    keyframes: drawKf("logs"),
  },

  lollipop: {
    note: "The swirl spins round once on the candy while the candy gives a small squeeze.",
    motion: {
      p2: { ...V(11, 11), animation: a("lollipop", "swirl", 900) },
      p0: { animation: a("lollipop", "candy", 600) },
    },
    keyframes: kf("lollipop", "swirl", "from{transform:none}to{transform:rotate(360deg)}") + kf("lollipop", "candy", PULSE),
  },

  luggage: {
    note: "The case rocks back and forth on its wheels, which squash as it lands.",
    motion: {
      p0: { ...V(12, 20), animation: a("luggage", "rock", 700) },
      p1: { ...V(12, 20), animation: a("luggage", "rock", 700) },
      p2: { ...V(12, 20), animation: a("luggage", "rock", 700) },
      p3: { origin: "50% 100%", animation: a("luggage", "wheel", 700) },
      p4: { origin: "50% 100%", animation: a("luggage", "wheel", 700, 80) },
    },
    keyframes: kf("luggage", "rock", ROCK(-6)) + kf("luggage", "wheel", "0%,20%{transform:none}35%{transform:scale(1.1,.85)}55%{transform:none}"),
  },

  magnet: {
    note: "The magnet jerks toward what it pulls and its tips flash.",
    motion: {
      p1: { animation: a("magnet", "pull", 650) },
      p0: { animation: a("magnet", "tip", 650) },
      p2: { animation: a("magnet", "tip", 650) },
    },
    keyframes:
      kf("magnet", "pull", nudge(-1.2, 1.2)) +
      kf("magnet", "tip", "0%{transform:none;opacity:1}35%{transform:translate(-1.2px,1.2px);opacity:.25}65%{transform:translate(.24px,-.24px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "mail-alert": {
    note: "The flap presses shut, then the warning mark drops in and its dot pops.",
    motion: {
      p1: { origin: "50% 0%", animation: a("mail-alert", "flap", 500) },
      p2: { origin: "50% 0%", animation: a("mail-alert", "mark", 450, 100, SMOOTH, "backwards") },
      p3: { animation: a("mail-alert", "dot", 400, 300, SMOOTH, "backwards") },
    },
    keyframes:
      kf("mail-alert", "flap", PRESS) +
      kf("mail-alert", "mark", "0%{transform:scaleY(.1);opacity:0}55%{transform:scaleY(1.15);opacity:1}100%{transform:none;opacity:1}") +
      kf("mail-alert", "dot", POP_IN),
  },

  mailbox: {
    note: "The flag swings up on its pole and back while a letter slips in through the slot.",
    motion: {
      p1: { origin: "0% 0%", animation: a("mailbox", "flag", 750) },
      p3: { animation: a("mailbox", "slot", 600, 80) },
      p0: { animation: a("mailbox", "box", 600, 80) },
    },
    keyframes:
      kf("mailbox", "flag", "0%{transform:none}30%{transform:rotate(-40deg)}55%{transform:rotate(-30deg)}100%{transform:none}") +
      kf("mailbox", "slot", nudge(.8, 0)) +
      kf("mailbox", "box", "0%,30%{transform:none}45%{transform:translateY(.4px)}70%{transform:none}"),
  },

  "mail-open": {
    note: "The inner fold drops open and the envelope gives a small bounce.",
    motion: {
      p1: { animation: a("mail-open", "fold", 650) },
      p0: { origin: "50% 100%", animation: a("mail-open", "body", 650) },
    },
    keyframes:
      kf("mail-open", "fold", nudge(0, 1)) + kf("mail-open", "body", "0%{transform:none}35%{transform:scaleY(.95)}65%{transform:scaleY(1.02)}100%{transform:none}"),
  },

  "mail-plus": {
    note: "The flap presses shut and the plus spins in.",
    motion: {
      p1: { origin: "50% 0%", animation: a("mail-plus", "flap", 500) },
      p2: { ...V(19, 19), animation: a("mail-plus", "plus", 550, 120, SMOOTH, "backwards") },
      p3: { ...V(19, 19), animation: a("mail-plus", "plus", 550, 120, SMOOTH, "backwards") },
    },
    keyframes:
      kf("mail-plus", "flap", PRESS) +
      kf("mail-plus", "plus", "0%{transform:scale(.3) rotate(-90deg);opacity:0}60%{transform:scale(1.1) rotate(8deg);opacity:1}100%{transform:none;opacity:1}"),
  },

  "mail-x": {
    note: "The flap presses shut and the cross strikes, stroke by stroke.",
    draw: ["p2", "p3"],
    motion: {
      p1: { origin: "50% 0%", animation: a("mail-x", "flap", 500) },
      p2: draw("mail-x", 300, 120),
      p3: draw("mail-x", 300, 230),
    },
    keyframes: kf("mail-x", "flap", PRESS) + drawKf("mail-x"),
  },

  mails: {
    note: "The two letters shuffle: the front one slides up, the back one down, and they settle.",
    motion: {
      p2: { animation: a("mails", "front", 650) },
      p1: { animation: a("mails", "front", 650) },
      p0: { animation: a("mails", "back", 650) },
    },
    keyframes: kf("mails", "front", nudge(.9, -.9)) + kf("mails", "back", nudge(-.9, .9)),
  },

  "mail-search": {
    note: "The magnifying glass looks around over the envelope.",
    motion: {
      p2: { animation: a("mail-search", "look", 800) },
      p3: { animation: a("mail-search", "look", 800) },
      p4: { animation: a("mail-search", "look", 800) },
      p1: { origin: "50% 0%", animation: a("mail-search", "flap", 500) },
    },
    keyframes:
      kf("mail-search", "look", "0%{transform:none}25%{transform:translate(-1.2px,0)}50%{transform:translate(-1px,-1.2px)}75%{transform:translate(.3px,-.6px)}100%{transform:none}") +
      kf("mail-search", "flap", PRESS),
  },

  "mail-unread": {
    note: "The unread dot pops while the flap gives a small press.",
    motion: {
      p2: { animation: a("mail-unread", "dot", 600) },
      p1: { origin: "50% 0%", animation: a("mail-unread", "flap", 500, 60) },
    },
    keyframes: kf("mail-unread", "dot", "0%{transform:none}30%{transform:scale(.6)}60%{transform:scale(1.25)}100%{transform:none}") + kf("mail-unread", "flap", PRESS),
  },

  map: {
    note: "The map folds in on its creases and opens out again.",
    motion: {
      p0: { animation: a("map", "sheet", 700) },
      p1: { animation: a("map", "right", 700) },
      p2: { animation: a("map", "left", 700) },
    },
    keyframes:
      kf("map", "sheet", "0%{transform:none}30%{transform:scaleX(.86)}65%{transform:scaleX(1.03)}100%{transform:none}") +
      kf("map", "right", "0%{transform:none}30%{transform:translateX(-.42px)}65%{transform:translateX(.09px)}100%{transform:none}") +
      kf("map", "left", "0%{transform:none}30%{transform:translateX(.42px)}65%{transform:translateX(-.09px)}100%{transform:none}"),
  },

  "map-pin": {
    note: "The pin lifts and drops, squashing as it lands.",
    motion: { p0: pin("map-pin"), p1: pinDot("map-pin") },
    keyframes: pinKf("map-pin"),
  },

  "map-pin-check": {
    note: "The pin drops into place and the tick draws itself beside it.",
    draw: ["p2"],
    motion: { p0: pin("map-pin-check"), p1: pinDot("map-pin-check"), p2: draw("map-pin-check", 400, 300) },
    keyframes: pinKf("map-pin-check") + drawKf("map-pin-check"),
  },

  "map-pin-house": {
    note: "The pin drops in and the little house hops up beside it.",
    motion: {
      p1: pin("map-pin-house"),
      p3: pinDot("map-pin-house"),
      p0: { animation: a("map-pin-house", "house", 550, 200) },
      p2: { animation: a("map-pin-house", "house", 550, 200) },
    },
    keyframes: pinKf("map-pin-house") + kf("map-pin-house", "house", nudge(0, -1.2)),
  },

  "map-pin-off": off("map-pin-off", ["p0", "p1", "p3", "p4"], "p2"),

  "map-pin-plus": {
    note: "The pin drops in and the plus spins in beside it.",
    motion: {
      p0: pin("map-pin-plus"),
      p1: pinDot("map-pin-plus"),
      p2: { ...V(19, 18), animation: a("map-pin-plus", "plus", 550, 250, SMOOTH, "backwards") },
      p3: { ...V(19, 18), animation: a("map-pin-plus", "plus", 550, 250, SMOOTH, "backwards") },
    },
    keyframes:
      pinKf("map-pin-plus") +
      kf("map-pin-plus", "plus", "0%{transform:scale(.3) rotate(-90deg);opacity:0}60%{transform:scale(1.1) rotate(8deg);opacity:1}100%{transform:none;opacity:1}"),
  },

  "map-pinned": {
    note: "The pin drops onto the map, which gives under it.",
    motion: {
      p0: pin("map-pinned"),
      p2: pinDot("map-pinned"),
      p1: { origin: "50% 100%", animation: a("map-pinned", "map", 650) },
    },
    keyframes: pinKf("map-pinned") + kf("map-pinned", "map", "0%,35%{transform:none}50%{transform:scaleY(.82)}70%{transform:scaleY(1.04)}100%{transform:none}"),
  },

  "map-pin-x": {
    note: "The pin drops in and the cross strikes beside it.",
    draw: ["p2", "p3"],
    motion: { p0: pin("map-pin-x"), p1: pinDot("map-pin-x"), p2: draw("map-pin-x", 300, 300), p3: draw("map-pin-x", 300, 400) },
    keyframes: pinKf("map-pin-x") + drawKf("map-pin-x"),
  },

  martini: {
    note: "The glass and its stem tip on the foot, as in a toast, and settle.",
    motion: {
      p0: { ...V(12, 22), animation: a("martini", "tip", 750) },
      p1: { ...V(12, 22), animation: a("martini", "tip", 750) },
      p2: { animation: a("martini", "foot", 750) },
    },
    keyframes: kf("martini", "tip", ROCK(-8)) + kf("martini", "foot", "0%,20%{transform:none}30%{transform:scaleX(.92)}50%{transform:none}"),
  },

  "enter-fullscreen": {
    note: "The four corners step out to the edges and settle back.",
    motion: {
      p0: { animation: a("enter-fullscreen", "tl", 600) },
      p1: { animation: a("enter-fullscreen", "tr", 600) },
      p2: { animation: a("enter-fullscreen", "bl", 600) },
      p3: { animation: a("enter-fullscreen", "br", 600) },
    },
    keyframes:
      corner("enter-fullscreen", "tl", -1.2, -1.2) +
      corner("enter-fullscreen", "tr", 1.2, -1.2) +
      corner("enter-fullscreen", "bl", -1.2, 1.2) +
      corner("enter-fullscreen", "br", 1.2, 1.2),
  },

  "exit-fullscreen": {
    note: "The four corners pull in toward the middle and settle back.",
    motion: {
      p0: { animation: a("exit-fullscreen", "tl", 600) },
      p1: { animation: a("exit-fullscreen", "tr", 600) },
      p2: { animation: a("exit-fullscreen", "bl", 600) },
      p3: { animation: a("exit-fullscreen", "br", 600) },
    },
    keyframes:
      corner("exit-fullscreen", "tl", 1.2, 1.2) +
      corner("exit-fullscreen", "tr", -1.2, 1.2) +
      corner("exit-fullscreen", "bl", 1.2, -1.2) +
      corner("exit-fullscreen", "br", -1.2, -1.2),
  },

  "expand-arrows": {
    note: "The two arrows push out to opposite corners and settle back.",
    motion: {
      p0: { animation: a("expand-arrows", "tr", 600) },
      p1: { animation: a("expand-arrows", "tr", 600) },
      p2: { animation: a("expand-arrows", "bl", 600) },
      p3: { animation: a("expand-arrows", "bl", 600) },
    },
    keyframes: corner("expand-arrows", "tr", 1.3, -1.3) + corner("expand-arrows", "bl", -1.3, 1.3),
  },

  "shrink-arrows": {
    note: "The two arrows pull in toward the middle and settle back.",
    motion: {
      p0: { animation: a("shrink-arrows", "tr", 600) },
      p1: { animation: a("shrink-arrows", "tr", 600) },
      p2: { animation: a("shrink-arrows", "bl", 600) },
      p3: { animation: a("shrink-arrows", "bl", 600) },
    },
    keyframes: corner("shrink-arrows", "tr", -1.3, 1.3) + corner("shrink-arrows", "bl", 1.3, -1.3),
  },

  medal: {
    note: "The medal swings on its ribbon and settles.",
    motion: {
      p4: { ...V(12, 12), animation: a("medal", "swing", 800) },
      p5: { ...V(12, 12), animation: a("medal", "swing", 800) },
      p1: { animation: a("medal", "ribbon", 800) },
      p2: { animation: a("medal", "ribbon", 800) },
    },
    keyframes:
      kf("medal", "swing", "0%{transform:none}20%{transform:rotate(14deg)}45%{transform:rotate(-9deg)}70%{transform:rotate(4deg)}100%{transform:none}") +
      kf("medal", "ribbon", "0%{transform:none}20%{transform:translateX(.4px)}45%{transform:translateX(-.3px)}100%{transform:none}"),
  },

  megaphone: {
    note: "The horn swells as it calls out and the handle rocks under it.",
    motion: {
      p0: { ...V(3, 10), animation: a("megaphone", "horn", 700) },
      p2: { ...V(3, 10), animation: a("megaphone", "horn", 700) },
      p1: { origin: "0% 0%", animation: a("megaphone", "handle", 700) },
    },
    keyframes:
      kf("megaphone", "horn", "0%{transform:none}25%{transform:scale(1.08) rotate(-3deg)}50%{transform:scale(.98)}75%{transform:scale(1.02)}100%{transform:none}") +
      kf("megaphone", "handle", "0%{transform:none}25%{transform:rotate(4deg)}50%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "megaphone-off": off("megaphone-off", ["p0", "p1", "p3", "p4"], "p2"),

  memory: {
    note: "The pins and chips light up one after another, left to right.",
    motion: {
      p7: { animation: a("memory", "fade", 500, 0) },
      p9: { animation: a("memory", "fade", 500, 60) },
      p8: { animation: a("memory", "fade", 500, 60) },
      p1: { animation: a("memory", "fade", 500, 120) },
      p0: { animation: a("memory", "fade", 500, 120) },
      p3: { animation: a("memory", "fade", 500, 180) },
      p2: { animation: a("memory", "fade", 500, 180) },
      p5: { animation: a("memory", "fade", 500, 240) },
    },
    keyframes: kf("memory", "fade", FADE),
  },

  merge: {
    note: "The side branch draws itself into the trunk and the arrow pushes on up.",
    draw: ["p2"],
    motion: {
      p2: draw("merge", 400),
      p0: { animation: a("merge", "head", 550, 250) },
    },
    keyframes: drawKf("merge") + kf("merge", "head", nudge(0, -1.4)),
  },

  "message-more": {
    note: "The bubble bounces from its tail while the three dots bob one after another, as if typing.",
    motion: {
      p0: bubble("message-more"),
      p1: { animation: a("message-more", "dot", 500, 60) },
      p2: { animation: a("message-more", "dot", 500, 150) },
      p3: { animation: a("message-more", "dot", 500, 240) },
    },
    keyframes: kf("message-more", "bubble", BUBBLE) + kf("message-more", "dot", nudge(0, -1.3)),
  },

  "message-plus": {
    note: "The bubble bounces from its tail and the plus spins in.",
    motion: {
      p0: bubble("message-plus"),
      p1: { ...V(12, 12), animation: a("message-plus", "plus", 550, 80) },
      p2: { ...V(12, 12), animation: a("message-plus", "plus", 550, 80) },
    },
    keyframes: kf("message-plus", "bubble", BUBBLE) + kf("message-plus", "plus", "0%{transform:none}50%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}"),
  },

  "message-reply": {
    note: "The reply arrow pulls back to the left and stretches, then springs home.",
    motion: {
      p0: bubble("message-reply"),
      p1: { animation: a("message-reply", "head", 600, 60) },
      p2: { origin: "100% 50%", animation: a("message-reply", "tail", 600, 60) },
    },
    keyframes:
      kf("message-reply", "bubble", BUBBLE) +
      kf("message-reply", "head", nudge(-1.3, 0)) +
      kf("message-reply", "tail", "0%{transform:none}35%{transform:scaleX(1.13)}65%{transform:scaleX(.98)}100%{transform:none}"),
  },

  "message-question": {
    note: "The question mark tilts on its point as if wondering, and its dot bounces.",
    motion: {
      p0: bubble("message-question"),
      p1: { origin: "50% 100%", animation: a("message-question", "mark", 700, 60) },
      p2: { animation: a("message-question", "dot", 500, 200) },
    },
    keyframes: kf("message-question", "bubble", BUBBLE) + kf("message-question", "mark", ROCK(-12)) + kf("message-question", "dot", nudge(0, -1)),
  },

  "message-off": off("message-off", ["p1", "p2"], "p0"),

  "message-check": {
    note: "The bubble bounces from its tail and the tick draws itself inside.",
    draw: ["p1"],
    motion: { p0: bubble("message-check"), p1: draw("message-check", 420, 120) },
    keyframes: kf("message-check", "bubble", BUBBLE) + drawKf("message-check"),
  },

  "message-x": {
    note: "The bubble bounces from its tail and the cross strikes inside, stroke by stroke.",
    draw: ["p1", "p2"],
    motion: { p0: bubble("message-x"), p1: draw("message-x", 300, 100), p2: draw("message-x", 300, 210) },
    keyframes: kf("message-x", "bubble", BUBBLE) + drawKf("message-x"),
  },

  "message-code": {
    note: "The two brackets spread apart and snap back while the bubble bounces.",
    motion: {
      p2: bubble("message-code"),
      p0: { animation: a("message-code", "left", 600, 60) },
      p1: { animation: a("message-code", "right", 600, 60) },
    },
    keyframes: kf("message-code", "bubble", BUBBLE) + kf("message-code", "left", nudge(-1, 0)) + kf("message-code", "right", nudge(1, 0)),
  },

  "message-alert": {
    note: "The bubble bounces from its tail, the warning mark drops in and its dot pops.",
    motion: {
      p0: bubble("message-alert"),
      p2: { origin: "50% 0%", animation: a("message-alert", "mark", 450, 100, SMOOTH, "backwards") },
      p1: { animation: a("message-alert", "dot", 400, 300, SMOOTH, "backwards") },
    },
    keyframes:
      kf("message-alert", "bubble", BUBBLE) +
      kf("message-alert", "mark", "0%{transform:scaleY(.1);opacity:0}55%{transform:scaleY(1.15);opacity:1}100%{transform:none;opacity:1}") +
      kf("message-alert", "dot", POP_IN),
  },

  "message-lock": {
    note: "The lock's shackle lifts and snaps shut while the bubble bounces.",
    motion: {
      p0: bubble("message-lock"),
      p1: { animation: a("message-lock", "shackle", 650, 60) },
      p2: { animation: a("message-lock", "body", 650, 60) },
    },
    keyframes:
      kf("message-lock", "bubble", BUBBLE) +
      kf("message-lock", "shackle", "0%{transform:none}30%{transform:translateY(-1.3px)}55%{transform:translateY(.3px)}75%,100%{transform:none}") +
      kf("message-lock", "body", "0%,45%{transform:none}55%{transform:translateY(.4px)}75%,100%{transform:none}"),
  },

  "message-share": {
    note: "The arrow flies out of the corner and comes back in, while the bubble bounces.",
    motion: {
      p0: bubble("message-share"),
      p1: { animation: a("message-share", "out", 700) },
      p2: { animation: a("message-share", "out", 700) },
    },
    keyframes:
      kf("message-share", "bubble", BUBBLE) +
      kf("message-share", "out", "0%{transform:none;opacity:1}35%{transform:translate(2px,-2px);opacity:0}36%{transform:translate(-2px,2px);opacity:0}100%{transform:none;opacity:1}"),
  },

  "message-unread": {
    note: "The unread dot pops and the bubble answers with a small bounce.",
    motion: {
      p1: { animation: a("message-unread", "dot", 600) },
      p0: bubble("message-unread", 80),
    },
    keyframes: kf("message-unread", "dot", "0%{transform:none}30%{transform:scale(.6)}60%{transform:scale(1.25)}100%{transform:none}") + kf("message-unread", "bubble", BUBBLE),
  },

  metronome: {
    note: "The arm and its weight tick across and back twice on the pivot.",
    motion: {
      p1: { ...V(12, 17), animation: a("metronome", "tick", 900, 0, "ease-in-out") },
      p3: { ...V(12, 17), animation: a("metronome", "tick", 900, 0, "ease-in-out") },
    },
    keyframes: kf("metronome", "tick", "0%{transform:none}25%{transform:rotate(-90deg)}50%{transform:none}75%{transform:rotate(-90deg)}100%{transform:none}"),
  },

  "mic-off": off("mic-off", ["p0", "p1", "p2", "p3", "p5"], "p4"),

  microscope: {
    note: "The tube lowers toward the slide to focus, then comes back up.",
    motion: {
      p4: { animation: a("microscope", "focus", 700) },
      p5: { animation: a("microscope", "focus", 700) },
      p3: { animation: a("microscope", "clip", 700) },
    },
    keyframes: kf("microscope", "focus", nudge(0, 1)) + kf("microscope", "clip", "0%,30%{opacity:1}45%{opacity:.3}70%{opacity:1}"),
  },

  microwave: {
    note: "The button is pressed, the window glows twice and the oven hums.",
    motion: {
      p2: { animation: a("microwave", "button", 450) },
      p1: { animation: a("microwave", "glow", 800, 100) },
      p0: { animation: a("microwave", "hum", 800, 100) },
    },
    keyframes:
      kf("microwave", "button", "0%{transform:none}35%{transform:scaleY(.6)}100%{transform:none}") +
      kf("microwave", "glow", "0%{opacity:1}25%{opacity:.3}50%{opacity:1}75%{opacity:.3}100%{opacity:1}") +
      kf("microwave", "hum", "0%{transform:none}20%{transform:translateX(-.3px)}40%{transform:translateX(.3px)}60%{transform:translateX(-.2px)}80%{transform:translateX(.2px)}100%{transform:none}"),
  },

  podcast: {
    note: "The mic bobs and the waves ripple out, inner pair first.",
    motion: {
      p6: { animation: a("podcast", "mic", 550) },
      p1: { animation: a("podcast", "wave", 550, 60) },
      p4: { animation: a("podcast", "wave", 550, 60) },
      p2: { animation: a("podcast", "wave", 550, 180) },
      p3: { animation: a("podcast", "wave", 550, 180) },
    },
    keyframes: kf("podcast", "mic", nudge(0, -.8)) + kf("podcast", "wave", FADE),
  },

  milestone: {
    note: "The sign sways on its post and settles.",
    motion: { p2: { ...V(12, 6), animation: a("milestone", "sway", 750) } },
    keyframes: kf("milestone", "sway", ROCK(5)),
  },

  milk: {
    note: "The bottle tips on its base while the milk inside stays level.",
    motion: {
      p0: { ...V(12, 22), animation: a("milk", "tip", 750) },
      p1: { ...V(12, 22), animation: a("milk", "tip", 750) },
      p2: { animation: a("milk", "level", 750) },
    },
    keyframes:
      kf("milk", "tip", "0%{transform:none}30%{transform:rotate(-10deg)}60%{transform:rotate(4deg)}85%{transform:rotate(-1deg)}100%{transform:none}") +
      kf("milk", "level", "0%{transform:none}30%{transform:translateX(-1.2px)}60%{transform:translateX(.5px)}85%{transform:translateX(-.1px)}100%{transform:none}"),
  },

  minus: {
    note: "The line shrinks to a point and springs back out to full width.",
    motion: { p0: { animation: a("minus", "line", 550) } },
    keyframes: kf("minus", "line", "0%{transform:none}35%{transform:scaleX(.3)}70%{transform:scaleX(1.1)}100%{transform:none}"),
  },

  "monitor-check": {
    note: "The screen gives a small squeeze and the tick draws itself on it.",
    draw: ["p0"],
    motion: { p0: draw("monitor-check", 420, 120), p1: { animation: a("monitor-check", "screen", 550) } },
    keyframes: drawKf("monitor-check") + kf("monitor-check", "screen", "0%{transform:none}30%{transform:scale(.96)}60%{transform:scale(1.02)}100%{transform:none}"),
  },

  "monitor-down": {
    note: "The arrow drops out through the bottom of the screen and comes in again from the top.",
    motion: {
      p0: { animation: a("monitor-down", "arrow", 700) },
      p1: { animation: a("monitor-down", "arrow", 700) },
    },
    keyframes: kf("monitor-down", "arrow", "0%{transform:none;opacity:1}35%{transform:translateY(2.5px);opacity:0}36%{transform:translateY(-2.5px);opacity:0}100%{transform:none;opacity:1}"),
  },

  "monitor-off": off("monitor-off", ["p1", "p4"], "p2"),

  "monitor-play": {
    note: "The play mark steps forward on the screen and the screen gives a small squeeze.",
    motion: { p0: { animation: a("monitor-play", "play", 600) }, p3: { animation: a("monitor-play", "screen", 600, 60) } },
    keyframes:
      kf("monitor-play", "play", "0%{transform:none}35%{transform:translateX(1.3px) scale(1.15)}65%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("monitor-play", "screen", "0%{transform:none}30%{transform:scale(.97)}60%{transform:scale(1.01)}100%{transform:none}"),
  },

  devices: {
    note: "The phone slides in beside the screen, which makes room for it.",
    motion: {
      p3: { animation: a("devices", "phone", 600, 0, SMOOTH, "backwards") },
      p0: { animation: a("devices", "screen", 600) },
      p1: { animation: a("devices", "screen", 600) },
      p2: { animation: a("devices", "screen", 600) },
    },
    keyframes:
      kf("devices", "phone", "0%{transform:translateX(2.5px);opacity:0}60%{transform:translateX(-.3px);opacity:1}100%{transform:none;opacity:1}") +
      kf("devices", "screen", nudge(-.5, 0)),
  },

  "monitor-cog": {
    note: "The cog turns an eighth of the way round in the screen's corner.",
    motion: Object.fromEntries(["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p11"].map((p) => [p, { ...V(18, 6), animation: a("monitor-cog", "turn", 750) }])),
    keyframes: kf("monitor-cog", "turn", "from{transform:none}to{transform:rotate(90deg)}"),
  },

  "moon-star": {
    note: "The star twinkles and the moon rocks gently.",
    motion: {
      p0: { ...V(20, 5), animation: a("moon-star", "star", 600) },
      p1: { ...V(20, 5), animation: a("moon-star", "star", 600) },
      p2: { animation: a("moon-star", "moon", 750, 60) },
    },
    keyframes:
      kf("moon-star", "star", "0%{transform:none}30%{transform:scale(.4) rotate(45deg)}60%{transform:scale(1.2)}100%{transform:none}") +
      kf("moon-star", "moon", "0%{transform:none}30%{transform:rotate(-8deg)}65%{transform:rotate(3deg)}100%{transform:none}"),
  },

  mountain: {
    note: "The peaks sink and rise up a little taller before they settle.",
    motion: { p0: { animation: a("mountain", "peaks", 750) } },
    keyframes: kf(
      "mountain",
      "peaks",
      '0%{d:path("m8 3 4 8 5-5 5 15H2L8 3z")}30%{d:path("m8 5 4 6 5-4 5 14H2L8 5z")}60%{d:path("m8 2.5 4 8.5 5-5.8 5 15.8H2L8 2.5z")}100%{d:path("m8 3 4 8 5-5 5 15H2L8 3z")}',
    ),
  },

  "mountain-snow": {
    note: "The peaks sink and rise, and the snow line rides along with them.",
    motion: {
      p0: { animation: a("mountain-snow", "peaks", 750) },
      p1: { animation: a("mountain-snow", "snow", 750) },
    },
    keyframes:
      kf(
        "mountain-snow",
        "peaks",
        '0%{d:path("m8 3 4 8 5-5 5 15H2L8 3z")}30%{d:path("m8 5 4 6 5-4 5 14H2L8 5z")}60%{d:path("m8 2.5 4 8.5 5-5.8 5 15.8H2L8 2.5z")}100%{d:path("m8 3 4 8 5-5 5 15H2L8 3z")}',
      ) + kf("mountain-snow", "snow", "0%{transform:none}30%{transform:translateY(.6px)}60%{transform:translateY(-.3px)}100%{transform:none}"),
  },

  mouse: {
    note: "The wheel scrolls down and out of sight, and rolls back in from the top.",
    motion: {
      p1: { animation: a("mouse", "wheel", 700) },
      p0: { origin: "50% 100%", animation: a("mouse", "body", 700) },
    },
    keyframes:
      kf("mouse", "wheel", "0%{transform:none;opacity:1}35%{transform:translateY(1.5px);opacity:0}36%{transform:translateY(-1.5px);opacity:0}70%,100%{transform:none;opacity:1}") +
      kf("mouse", "body", "0%{transform:none}25%{transform:scaleY(.97)}50%{transform:none}"),
  },

  "mouse-pointer": {
    note: "The pointer taps down from its tip and its tail follows.",
    motion: {
      p1: { origin: "0% 0%", animation: a("mouse-pointer", "tip", 600) },
      p0: { animation: a("mouse-pointer", "tail", 600, 40) },
    },
    keyframes:
      kf("mouse-pointer", "tip", "0%{transform:none}30%{transform:translate(.8px,.8px) scale(.9)}60%{transform:translate(-.2px,-.2px)}100%{transform:none}") +
      kf("mouse-pointer", "tail", nudge(.8, .8)),
  },

  cursor: {
    note: "The cursor clicks: it squeezes toward its tip and springs back.",
    motion: { p0: { origin: "0% 0%", animation: a("cursor", "click", 550) } },
    keyframes: kf("cursor", "click", "0%{transform:none}30%{transform:scale(.85) rotate(-6deg)}60%{transform:scale(1.05)}100%{transform:none}"),
  },

  move: {
    note: "The four arrowheads reach out along their lines and come back.",
    motion: {
      p5: { animation: a("move", "up", 600) },
      p1: { animation: a("move", "down", 600) },
      p4: { animation: a("move", "left", 600) },
      p2: { animation: a("move", "right", 600) },
      p0: { animation: a("move", "v", 600) },
      p3: { animation: a("move", "h", 600) },
    },
    keyframes:
      corner("move", "up", 0, -1.2) +
      corner("move", "down", 0, 1.2) +
      corner("move", "left", -1.2, 0) +
      corner("move", "right", 1.2, 0) +
      kf("move", "v", "0%{transform:none}35%{transform:scaleY(1.1)}100%{transform:none}") +
      kf("move", "h", "0%{transform:none}35%{transform:scaleX(1.1)}100%{transform:none}"),
  },

  "move-horizontal": {
    note: "The two arrowheads stretch apart and the line stretches with them.",
    motion: {
      p0: { animation: a("move-horizontal", "right", 600) },
      p2: { animation: a("move-horizontal", "left", 600) },
      p1: { animation: a("move-horizontal", "line", 600) },
    },
    keyframes:
      corner("move-horizontal", "right", 1.3, 0) +
      corner("move-horizontal", "left", -1.3, 0) +
      kf("move-horizontal", "line", "0%{transform:none}35%{transform:scaleX(1.13)}65%{transform:scaleX(.97)}100%{transform:none}"),
  },

  "move-vertical": {
    note: "The two arrowheads stretch apart and the line stretches with them.",
    motion: {
      p2: { animation: a("move-vertical", "up", 600) },
      p1: { animation: a("move-vertical", "down", 600) },
      p0: { animation: a("move-vertical", "line", 600) },
    },
    keyframes:
      corner("move-vertical", "up", 0, -1.3) +
      corner("move-vertical", "down", 0, 1.3) +
      kf("move-vertical", "line", "0%{transform:none}35%{transform:scaleY(1.13)}65%{transform:scaleY(.97)}100%{transform:none}"),
  },

  "move-diagonal": {
    note: "The two arrowheads stretch apart along the diagonal and the line stretches with them.",
    motion: {
      p0: { animation: a("move-diagonal", "bl", 600) },
      p1: { animation: a("move-diagonal", "tr", 600) },
      p2: { animation: a("move-diagonal", "line", 600) },
    },
    keyframes:
      corner("move-diagonal", "bl", -1, 1) +
      corner("move-diagonal", "tr", 1, -1) +
      kf("move-diagonal", "line", "0%{transform:none}35%{transform:scale(1.13)}65%{transform:scale(.97)}100%{transform:none}"),
  },

  "move-right": {
    note: "The arrow draws back like a spring and shoots forward again.",
    motion: {
      p0: { animation: a("move-right", "head", 650) },
      p1: { origin: "0% 50%", animation: a("move-right", "shaft", 650) },
    },
    keyframes:
      kf("move-right", "head", "0%{transform:none}30%{transform:translateX(-1.5px)}60%{transform:translateX(.6px)}100%{transform:none}") +
      kf("move-right", "shaft", "0%{transform:none}30%{transform:scaleX(.925)}60%{transform:scaleX(1.03)}100%{transform:none}"),
  },

  "move-up-right": {
    note: "The arrow draws back along its line and shoots forward again.",
    motion: {
      p0: { animation: a("move-up-right", "head", 650) },
      p1: { origin: "0% 100%", animation: a("move-up-right", "shaft", 650) },
    },
    keyframes:
      kf("move-up-right", "head", "0%{transform:none}30%{transform:translate(-1.2px,1.2px)}60%{transform:translate(.4px,-.4px)}100%{transform:none}") +
      kf("move-up-right", "shaft", "0%{transform:none}30%{transform:scale(.9)}60%{transform:scale(1.03)}100%{transform:none}"),
  },

  "move-3d": {
    note: "The axes draw themselves out from the corner and their arrowheads pop on the ends.",
    draw: ["p0", "p1"],
    motion: {
      p0: undraw("move-3d", 450),
      p1: draw("move-3d", 400, 60),
      p2: { animation: a("move-3d", "head", 400, 300, SMOOTH, "backwards") },
      p3: { animation: a("move-3d", "head", 400, 360, SMOOTH, "backwards") },
    },
    keyframes: undrawKf("move-3d") + drawKf("move-3d") + kf("move-3d", "head", POP_IN),
  },

  "music-notes": {
    note: "The two note heads bounce on the beat, one after the other, and the stems sway.",
    motion: {
      p3: { animation: a("music-notes", "head", 500) },
      p2: { animation: a("music-notes", "head", 500, 150) },
      p0: { ...V(15, 12), animation: a("music-notes", "stems", 700) },
      p1: { ...V(15, 12), animation: a("music-notes", "stems", 700) },
    },
    keyframes:
      kf("music-notes", "head", "0%{transform:none}35%{transform:scale(1.15,.88)}65%{transform:scale(.96,1.04)}100%{transform:none}") +
      kf("music-notes", "stems", ROCK(3)),
  },

  navigation: {
    note: "The arrow gathers itself, then pushes on in the direction it points.",
    motion: { p0: { animation: a("navigation", "go", 650) } },
    keyframes: kf("navigation", "go", "0%{transform:none}30%{transform:translate(-.6px,.6px) scale(.9)}60%{transform:translate(1px,-1px)}100%{transform:none}"),
  },

  "navigation-off": off("navigation-off", ["p0", "p1"], "p2"),

  network: {
    note: "The top node pulses and the link runs down and out to the two nodes below, which light up.",
    draw: ["p4", "p3"],
    motion: {
      p2: { animation: a("network", "node", 500) },
      p4: undraw("network", 250, 100),
      p3: draw("network", 400, 250),
      p1: { animation: a("network", "node", 500, 450) },
      p0: { animation: a("network", "node", 500, 450) },
    },
    keyframes: kf("network", "node", PULSE) + drawKf("network") + undrawKf("network"),
  },

  nfc: {
    note: "The waves ripple out, one after another.",
    motion: {
      p0: { animation: a("nfc", "wave", 500) },
      p1: { animation: a("nfc", "wave", 500, 80) },
      p2: { animation: a("nfc", "wave", 500, 160) },
      p3: { animation: a("nfc", "wave", 500, 240) },
    },
    keyframes: kf("nfc", "wave", FADE),
  },

  notebook: {
    note: "The cover lifts on the rings and falls shut again.",
    motion: {
      p4: { origin: "0% 50%", animation: a("notebook", "cover", 700) },
      p5: { ...V(4, 12), animation: a("notebook", "cover", 700) },
    },
    keyframes: kf("notebook", "cover", "0%{transform:none}35%{transform:scaleX(.88) skewY(-5deg)}70%{transform:scaleX(1.02)}100%{transform:none}"),
  },

  "notebook-pen": {
    note: "The pen scribbles from its tip on the page.",
    motion: {
      p5: { origin: "0% 100%", animation: a("notebook-pen", "pen", 700) },
      p0: { animation: a("notebook-pen", "page", 700) },
    },
    keyframes:
      kf("notebook-pen", "pen", "0%{transform:none}25%{transform:translate(-.6px,.6px) rotate(-6deg)}50%{transform:translate(.6px,-.2px) rotate(4deg)}75%{transform:translate(-.3px,.3px) rotate(-2deg)}100%{transform:none}") +
      kf("notebook-pen", "page", "0%{transform:none}50%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "notebook-tabs": {
    note: "The tabs flick out one after another, as if leafing through.",
    motion: {
      p6: { animation: a("notebook-tabs", "tab", 500) },
      p7: { animation: a("notebook-tabs", "tab", 500, 70) },
      p8: { animation: a("notebook-tabs", "tab", 500, 140) },
    },
    keyframes: kf("notebook-tabs", "tab", nudge(1, 0)),
  },

  notepad: {
    note: "The rings hop and the lines write themselves on the pad, top to bottom.",
    draw: ["p4", "p5", "p6"],
    motion: {
      p0: { animation: a("notepad", "ring", 450) },
      p1: { animation: a("notepad", "ring", 450, 50) },
      p2: { animation: a("notepad", "ring", 450, 100) },
      p4: draw("notepad", 350, 120),
      p5: draw("notepad", 350, 220),
      p6: draw("notepad", 350, 320),
    },
    keyframes: kf("notepad", "ring", nudge(0, -.8)) + drawKf("notepad"),
  },

  nut: {
    note: "The cap and its stalk lift off a little while the nut rocks under it.",
    motion: {
      p1: { ...V(10, 10), animation: a("nut", "cap", 700) },
      p2: { ...V(10, 10), animation: a("nut", "cap", 700) },
      p0: { ...V(14, 14), animation: a("nut", "body", 700) },
    },
    keyframes:
      kf("nut", "cap", "0%{transform:none}30%{transform:translate(-.8px,-.8px) rotate(-6deg)}60%{transform:translate(.1px,.1px) rotate(2deg)}100%{transform:none}") +
      kf("nut", "body", ROCK(4)),
  },

  "octagon-x": {
    note: "The sign gives a squeeze and the cross strikes inside, stroke by stroke.",
    draw: ["p0", "p2"],
    motion: { p1: { animation: a("octagon-x", "sign", 550) }, p2: draw("octagon-x", 300, 100), p0: draw("octagon-x", 300, 210) },
    keyframes: kf("octagon-x", "sign", PULSE) + drawKf("octagon-x"),
  },

  "octagon-pause": {
    note: "The two bars press down one after the other inside the sign.",
    motion: {
      p0: { origin: "50% 100%", animation: a("octagon-pause", "bar", 500) },
      p1: { origin: "50% 100%", animation: a("octagon-pause", "bar", 500, 90) },
      p2: { animation: a("octagon-pause", "sign", 550) },
    },
    keyframes: kf("octagon-pause", "bar", PRESS) + kf("octagon-pause", "sign", "0%{transform:none}30%{transform:scale(.95)}60%{transform:scale(1.02)}100%{transform:none}"),
  },

  option: {
    note: "The option sign writes itself: the long stroke, then the short bar.",
    draw: ["p1", "p0"],
    motion: { p1: draw("option", 500), p0: draw("option", 300, 300) },
    keyframes: drawKf("option"),
  },

  orbit: {
    note: "The two moons travel half way round their orbits while the planet pulses.",
    motion: {
      p0: { ...V(12, 12), animation: a("orbit", "turn", 900) },
      p1: { ...V(12, 12), animation: a("orbit", "turn", 900) },
      p3: { ...V(12, 12), animation: a("orbit", "turn", 900) },
      p4: { ...V(12, 12), animation: a("orbit", "turn", 900) },
      p2: { animation: a("orbit", "planet", 600, 100) },
    },
    keyframes: kf("orbit", "turn", "from{transform:none}to{transform:rotate(180deg)}") + kf("orbit", "planet", PULSE),
  },

  opacity: {
    note: "A wave of fading runs across the checker dots, corner to corner.",
    motion: Object.fromEntries(
      (
        [
          ["p0", 12, 3],
          ["p1", 12, 9],
          ["p2", 15, 6],
          ["p3", 18, 3],
          ["p5", 3, 12],
          ["p6", 3, 18],
          ["p7", 3, 6],
          ["p8", 6, 15],
          ["p9", 6, 3],
          ["p10", 6, 9],
          ["p11", 9, 12],
          ["p12", 9, 6],
        ] as [string, number, number][]
      ).map(([p, x, y]) => [p, { animation: a("opacity", "fade", 500, (x + y - 9) * 20) }]),
    ),
    keyframes: kf("opacity", "fade", "0%{opacity:1;transform:none}30%{opacity:.15;transform:scale(.4)}100%{opacity:1;transform:none}"),
  },

  "package-check": {
    note: "The box hops and the tick draws itself beside it.",
    draw: ["p1"],
    motion: {
      p0: { animation: a("package-check", "box", 550) },
      p2: { animation: a("package-check", "box", 550) },
      p3: { animation: a("package-check", "box", 550) },
      p4: { animation: a("package-check", "box", 550) },
      p1: draw("package-check", 400, 200),
    },
    keyframes: kf("package-check", "box", nudge(0, -1)) + drawKf("package-check"),
  },

  "package-plus": {
    note: "The box hops and the plus spins in beside it.",
    motion: {
      p0: { animation: a("package-plus", "box", 550) },
      p3: { animation: a("package-plus", "box", 550) },
      p4: { animation: a("package-plus", "box", 550) },
      p5: { animation: a("package-plus", "box", 550) },
      p1: { ...V(19, 17), animation: a("package-plus", "plus", 550, 150, SMOOTH, "backwards") },
      p2: { ...V(19, 17), animation: a("package-plus", "plus", 550, 150, SMOOTH, "backwards") },
    },
    keyframes:
      kf("package-plus", "box", nudge(0, -1)) +
      kf("package-plus", "plus", "0%{transform:scale(.3) rotate(-90deg);opacity:0}60%{transform:scale(1.1) rotate(8deg);opacity:1}100%{transform:none;opacity:1}"),
  },

  "package-search": {
    note: "The magnifying glass looks around beside the box.",
    motion: {
      p5: { animation: a("package-search", "look", 800) },
      p1: { animation: a("package-search", "look", 800) },
    },
    keyframes: kf("package-search", "look", "0%{transform:none}25%{transform:translate(-1px,0)}50%{transform:translate(-.8px,-1px)}75%{transform:translate(.3px,-.5px)}100%{transform:none}"),
  },

  "package-x": {
    note: "The box gives a shake and the cross strikes beside it, stroke by stroke.",
    draw: ["p1", "p2"],
    motion: {
      p0: { animation: a("package-x", "shake", 500) },
      p3: { animation: a("package-x", "shake", 500) },
      p4: { animation: a("package-x", "shake", 500) },
      p5: { animation: a("package-x", "shake", 500) },
      p1: draw("package-x", 300, 150),
      p2: draw("package-x", 300, 260),
    },
    keyframes: kf("package-x", "shake", SHAKE) + drawKf("package-x"),
  },

  paintbrush: {
    note: "The brush makes a stroke from the end of its handle, the bristles trailing a moment behind.",
    motion: {
      p1: { ...V(20, 4), animation: a("paintbrush", "stroke", 700) },
      p0: { ...V(20, 4), animation: a("paintbrush", "stroke", 700, 60) },
      p2: { ...V(20, 4), animation: a("paintbrush", "stroke", 700, 60) },
    },
    keyframes: kf("paintbrush", "stroke", "0%{transform:none}30%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}100%{transform:none}"),
  },

  "paint-bucket": {
    note: "The bucket tips and a drop of paint falls from it.",
    motion: {
      p3: { ...V(11, 11), animation: a("paint-bucket", "tip", 700) },
      p0: { ...V(11, 11), animation: a("paint-bucket", "tip", 700) },
      p1: { ...V(11, 11), animation: a("paint-bucket", "tip", 700) },
      p2: { origin: "50% 0%", animation: a("paint-bucket", "drop", 550, 200, SMOOTH, "backwards") },
    },
    keyframes:
      kf("paint-bucket", "tip", "0%{transform:none}30%{transform:rotate(-8deg)}65%{transform:rotate(2deg)}100%{transform:none}") +
      kf("paint-bucket", "drop", "0%{transform:translateY(-2px) scale(.5);opacity:0}60%{transform:translateY(.4px) scale(1.05);opacity:1}100%{transform:none;opacity:1}"),
  },

  "paint-roller": {
    note: "The roller rolls across and back, the grip following a moment behind.",
    motion: {
      p0: { animation: a("paint-roller", "roll", 700) },
      p1: { animation: a("paint-roller", "roll", 700) },
      p2: { animation: a("paint-roller", "roll", 700, 70) },
    },
    keyframes: kf("paint-roller", "roll", "0%{transform:none}30%{transform:translateX(1.2px)}60%{transform:translateX(-.5px)}100%{transform:none}"),
  },

  "palm-tree": {
    note: "The fronds sway on top of the trunk, one after another.",
    motion: {
      p0: { ...V(12, 8), animation: a("palm-tree", "sway", 800) },
      p2: { ...V(12, 8), animation: a("palm-tree", "sway", 800, 40) },
      p1: { ...V(12, 8), animation: a("palm-tree", "sway", 800, 80) },
    },
    keyframes: kf("palm-tree", "sway", ROCK(6)),
  },

  sidebar: {
    note: "The divider slides over as the sidebar opens wider, then settles.",
    motion: { p1: { animation: a("sidebar", "edge", 600) } },
    keyframes: kf("sidebar", "edge", nudge(2, 0)),
  },

  "panel-right": {
    note: "The divider slides over as the right panel opens wider, then settles.",
    motion: { p1: { animation: a("panel-right", "edge", 600) } },
    keyframes: kf("panel-right", "edge", nudge(-2, 0)),
  },

  "panel-bottom": {
    note: "The divider slides up as the bottom panel opens taller, then settles.",
    motion: { p1: { animation: a("panel-bottom", "edge", 600) } },
    keyframes: kf("panel-bottom", "edge", nudge(0, -2)),
  },

  "panel-right-open": {
    note: "The divider slides left as the panel opens and the chevron points the way.",
    motion: { p1: { animation: a("panel-right-open", "edge", 600) }, p2: { animation: a("panel-right-open", "chevron", 600, 50) } },
    keyframes: kf("panel-right-open", "edge", nudge(-1.5, 0)) + kf("panel-right-open", "chevron", nudge(-1.3, 0)),
  },

  "panel-right-close": {
    note: "The divider slides right as the panel closes and the chevron points the way.",
    motion: { p1: { animation: a("panel-right-close", "edge", 600) }, p2: { animation: a("panel-right-close", "chevron", 600, 50) } },
    keyframes: kf("panel-right-close", "edge", nudge(1.5, 0)) + kf("panel-right-close", "chevron", nudge(1.3, 0)),
  },

  "panel-bottom-open": {
    note: "The divider slides up as the panel opens and the chevron points the way.",
    motion: { p1: { animation: a("panel-bottom-open", "edge", 600) }, p2: { animation: a("panel-bottom-open", "chevron", 600, 50) } },
    keyframes: kf("panel-bottom-open", "edge", nudge(0, -1.5)) + kf("panel-bottom-open", "chevron", nudge(0, -1.3)),
  },
};

/** Fill areas for outlines the source draws open (a gap for a badge, a slash or a dot), on the 24 grid. */
const PACKAGE = "V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001";
const BUBBLE_SQ = "H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2";
/** the package's outline down to the point of its front edge (12, 22) */
const PACKAGE_L = "V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4A2 2 0 0 0 12 21.997";
/** a pin's dot is a solid of its own: the fill leaves a hole around it (drawn the other way round). Fills are drawn
 * with the stroke too, so a cut 2.6-2.75 from a badge's centre line leaves a visible gap of about a unit. */
const DOT_HOLE = (x: number) => `M${x + 5.75} 10A5.75 5.75 0 1 1 ${x - 5.75} 10A5.75 5.75 0 1 1 ${x + 5.75} 10Z`;
export const fills: Record<string, string> = {
  // pins with a badge where the source leaves the outline open: the pin, cut a unit clear of the badge, around its dot
  "map-pin-check": `M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32.197 32.197 0 0 0 .813-.728L14.055 19.945A2.75 2.75 0 0 1 17.768 15.893L18.75 14.45L19.106 13.72Z ${DOT_HOLE(12)}`,
  "map-pin-plus": `M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .824-.738L14.229 20.104A2.75 2.75 0 0 1 16 15.25H16.25V15A2.75 2.75 0 0 1 19.62 12.32Z ${DOT_HOLE(12)}`,
  "map-pin-x": `M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a19 19 0 0 0 .09-.077L13.75 20.76V15.477A5.75 5.75 0 1 1 17.05 12.75H19.48Z`,
  "map-pin-house": `M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2L11.25 21.2V17A3.75 3.75 0 0 1 11.548 15.538A5.75 5.75 0 1 1 15.262 12.319L15.92 11.88A3.75 3.75 0 0 1 18 11.25Z`,
  "map-pin-pen": `M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468L11.217 17.719A4.75 4.75 0 0 1 12.418 15.69L16.429 11.677A4.874 4.874 0 0 1 18.451 10.463Z ${DOT_HOLE(10)}`,
  // the notebook, cut a unit clear of the pen where the source leaves its corner open
  "notebook-pen": "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4L16.281 13.781L13.411 14.618A3.25 3.25 0 0 1 9.381 10.588L10.217 7.719A4.75 4.75 0 0 1 11.419 5.689L13.4 3.708Z",
  // the bucket, closed along its side where the handle goes in
  "paint-bucket": "M8.5 4.5l2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33Z",
  // the nut under its cap, stopping a unit short of the cap so the two stay separate shapes
  nut: "M19.3 8.3L20 9a7.23 7.23 0 0 1 1.551 7.516C21.241 17.352 21 17.932 21 19v1a1 1 0 0 1-1 1h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 0 1 9.002 20L8.3 19.3L9.45 15.05C10.5 15.7 11.45 15.45 12.45 15.2C13.35 14.95 14.95 13.35 15.2 12.45C15.45 11.45 15.7 10.5 15.05 9.45Z",
  // envelopes with a corner left open for a badge: the fill stops short of it
  "mail-alert": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5V11.25H22Z",
  "mail-plus": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8L13.25 19A2.75 2.75 0 0 1 16 16.25L16.25 16A2.75 2.75 0 0 1 19 13.25Z",
  "mail-x": "M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792H13.75V16.5A2.75 2.75 0 0 1 16.5 13.75H22Z",
  "mail-search": "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5L12.503 19.69A5.75 5.75 0 0 1 21.381 13.349Z",
  "mail-unread": "M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675A7 7 0 0 1 12.674 4Z",
  // speech bubbles with a corner left open
  "message-lock": "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10V11.25a3 3 0 0 1 3-3H22Z",
  "message-share": `M12 3${BUBBLE_SQ}v-4H15a3 3 0 0 1-3-3Z`,
  "message-unread": `M12.7 3${BUBBLE_SQ}v-4.7A7 7 0 0 1 12.7 3Z`,
  // switched off: the whole shape, the slash is cut through it
  "message-off": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719Z",
  "megaphone-off": "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  "mic-off": "M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z",
  "navigation-off": "M3 11 22 2 13 21 11 13Z",
  "monitor-off": "M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  "map-pin-off": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z",
  "locate-off": "M12 5a7 7 0 1 1 0 14a7 7 0 0 1 0-14Z",
  // screens and boxes with a corner left open for a badge
  devices: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8v-5a2 2 0 0 1 2-2Z",
  "monitor-cog": "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7v6a4 4 0 0 0 4 4Z",
  "package-check": `M21 11.127${PACKAGE}l1.32-.753H13.13V12.25H21Z`,
  // these two leave too little room beside the front edge for a strip down it: the front face keeps only a band under
  // the lid, cut a unit clear of the badge, and the fill runs down the front edge
  "package-plus": `M21 10.535${PACKAGE_L}V15L21 9.55Z`,
  "package-search": `M21 10.498${PACKAGE_L}V14.2L21 9Z`,
  "package-x": `M21 10.5${PACKAGE}l.13-.074V11.75H21Z`,
  // a suitcase, a bottle and a metronome whose outlines the source leaves open
  luggage: "M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  milk: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2Z",
  metronome: "M9.169 5.009 4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L17.407 12.98A4.75 4.75 0 0 1 15.568 7.289L14.832 5.009a3 3 0 0 0-5.663 0Z",
};
