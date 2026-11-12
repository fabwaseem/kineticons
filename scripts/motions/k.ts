import type { Entry, Override } from "./types";

/** Batch k: its icons (pnpm import-icons k) and their motions. */
export const list: Entry[] = [
  ["PanelTop", "panel-top", "Top panel", "navigation", "nudge-down", ["panel", "header", "layout", "top bar"], "The top panel slides down."],
  ["Paperclip", "paperclip", "Attach", "actions", "wiggle", ["attach", "attachment", "clip", "file"], "The clip wiggles."],
  ["PartyPopper", "party", "Celebrate", "status", "launch", ["party", "celebrate", "confetti", "success"], "Confetti pops out."],
  ["PawPrint", "paw", "Pets", "nature", "bounce", ["pet", "animal", "dog", "cat", "paw"], "The toes tap down."],
  ["PcCase", "pc-case", "Computer tower", "devices", "pop", ["computer", "desktop", "tower", "case"], "The lights blink."],
  ["PencilOff", "pencil-off", "No editing", "actions", "shake", ["read only", "locked", "no edit", "pencil"], "The pencil shakes."],
  ["PencilRuler", "pencil-ruler", "Design tools", "development", "wiggle", ["design", "draft", "measure", "tools"], "Pencil and ruler cross."],
  ["PenTool", "pen-tool", "Vector pen", "development", "tilt", ["vector", "bezier", "pen", "design"], "The nib dips."],
  ["Percent", "percent", "Percent", "charts", "spin-180", ["percent", "discount", "ratio", "rate"], "The dots swap."],
  ["PersonStanding", "person", "Person", "people", "wave", ["person", "accessibility", "human", "body"], "It raises its arms."],
  ["Phone", "phone", "Phone", "communication", "wiggle", ["phone", "call", "telephone", "contact"], "It rings."],
  ["PhoneCall", "phone-call", "Calling", "communication", "wiggle", ["call", "ringing", "phone", "dial"], "It rings with waves."],
  ["PhoneForwarded", "phone-forwarded", "Call forwarded", "communication", "nudge-right", ["forward", "call", "redirect", "phone"], "The arrow moves on."],
  ["PhoneIncoming", "phone-incoming", "Incoming call", "communication", "nudge-down", ["incoming", "call", "receive", "phone"], "The arrow comes in."],
  ["PhoneMissed", "phone-missed", "Missed call", "communication", "shake", ["missed", "call", "phone", "unanswered"], "The cross draws."],
  ["PhoneOff", "phone-off", "Hang up", "communication", "shake", ["hang up", "end call", "phone", "off"], "The handset drops."],
  ["PhoneOutgoing", "phone-outgoing", "Outgoing call", "communication", "nudge-up", ["outgoing", "call", "dial", "phone"], "The arrow goes out."],
  ["Piano", "piano", "Piano", "media", "bounce", ["piano", "keys", "music", "instrument"], "The keys play."],
  ["Pickaxe", "pickaxe", "Pickaxe", "app", "swing", ["mine", "dig", "tool", "pickaxe"], "It swings."],
  ["PictureInPicture2", "picture-in-picture", "Picture in picture", "media", "pop", ["pip", "mini player", "video", "overlay"], "The small window pops."],
  ["PiggyBank", "piggy-bank", "Savings", "commerce", "bounce", ["savings", "money", "bank", "save"], "A coin drops in."],
  ["Pilcrow", "pilcrow", "Paragraph", "text", "pop", ["paragraph", "pilcrow", "text", "format"], "The stems draw."],
  ["Pill", "pill", "Pill", "health", "wiggle", ["medicine", "pill", "drug", "health"], "It rocks."],
  ["Pin", "pin", "Pin", "actions", "bounce", ["pin", "keep", "stick", "favorite"], "It presses in."],
  ["PinOff", "pin-off", "Unpin", "actions", "shake", ["unpin", "remove", "pin", "release"], "It pulls out."],
  ["Pipette", "pipette", "Color picker", "development", "tilt", ["color picker", "eyedropper", "pipette", "sample"], "It picks a drop."],
  ["Pizza", "pizza", "Pizza", "food", "pop", ["pizza", "food", "slice", "delivery"], "The slice lifts."],
  ["Plane", "plane", "Flight", "travel", "launch", ["plane", "flight", "travel", "airport"], "It flies across."],
  ["PlaneLanding", "plane-landing", "Landing", "travel", "nudge-down", ["landing", "arrival", "flight", "plane"], "It touches down."],
  ["PlaneTakeoff", "plane-takeoff", "Takeoff", "travel", "nudge-up", ["takeoff", "departure", "flight", "plane"], "It lifts off."],
  ["Pointer", "pointer", "Pointer", "actions", "nudge-up", ["pointer", "hand", "tap", "select"], "The finger taps."],
  ["Popcorn", "popcorn", "Popcorn", "food", "bounce", ["popcorn", "movie", "snack", "cinema"], "The kernels pop."],
  ["Presentation", "presentation", "Presentation", "app", "pop", ["presentation", "slides", "board", "meeting"], "The board pops."],
  ["Printer", "printer", "Print", "devices", "nudge-down", ["print", "printer", "paper", "document"], "A sheet comes out."],
  ["Projector", "projector", "Projector", "devices", "flash", ["projector", "beam", "movie", "present"], "It beams."],
  ["Puzzle", "puzzle", "Plugin", "app", "wiggle", ["plugin", "extension", "puzzle", "addon"], "The piece fits."],
  ["QrCode", "qr-code", "QR code", "commerce", "pop", ["qr", "code", "scan", "share"], "The squares pop in."],
  ["Rabbit", "rabbit", "Fast", "nature", "bounce", ["fast", "quick", "rabbit", "speed"], "It hops."],
  ["Radar", "radar", "Radar", "status", "spin", ["radar", "scan", "detect", "nearby"], "It sweeps."],
  ["Radiation", "radiation", "Radiation", "status", "spin", ["radiation", "hazard", "danger", "nuclear"], "The blades turn."],
  ["RadioTower", "radio-tower", "Broadcast", "communication", "pulse", ["broadcast", "tower", "signal", "antenna"], "The waves ripple."],
  ["Rainbow", "rainbow", "Rainbow", "weather", "draw", ["rainbow", "colors", "weather", "pride"], "The arcs draw."],
  ["Receipt", "receipt", "Receipt", "commerce", "nudge-up", ["receipt", "bill", "invoice", "payment"], "It prints."],
  ["ReceiptText", "receipt-text", "Invoice", "commerce", "nudge-up", ["invoice", "bill", "receipt", "order"], "The lines write."],
  ["Recycle", "recycle", "Recycle", "nature", "spin", ["recycle", "reuse", "green", "environment"], "The arrows turn."],
  ["Redo", "redo", "Redo", "actions", "nudge-right", ["redo", "again", "forward", "repeat"], "The arrow swings forward."],
  ["RefreshCwOff", "refresh-off", "Sync off", "status", "shake", ["sync off", "no refresh", "paused", "offline"], "It tries to turn."],
  ["Refrigerator", "fridge", "Fridge", "food", "pop", ["fridge", "refrigerator", "kitchen", "cold"], "The door opens."],
  ["Regex", "regex", "Regex", "development", "spin", ["regex", "pattern", "match", "search"], "The star spins."],
  ["RemoveFormatting", "clear-formatting", "Clear formatting", "text", "shake", ["clear", "formatting", "plain text", "remove"], "The slash draws."],
  ["Repeat1", "repeat-one", "Repeat one", "media", "spin", ["repeat one", "loop", "song", "replay"], "The arrows chase."],
  ["Replace", "replace", "Replace", "text", "nudge-right", ["replace", "swap", "find", "change"], "The boxes swap."],
  ["ReplaceAll", "replace-all", "Replace all", "text", "nudge-right", ["replace all", "swap", "find", "change"], "All boxes swap."],
  ["Reply", "reply", "Reply", "communication", "nudge-left", ["reply", "answer", "respond", "message"], "The arrow turns back."],
  ["ReplyAll", "reply-all", "Reply all", "communication", "nudge-left", ["reply all", "answer", "respond", "message"], "Both arrows turn back."],
  ["Rewind", "rewind", "Rewind", "media", "nudge-left", ["rewind", "back", "previous", "media"], "It rewinds."],
  ["Ribbon", "ribbon", "Ribbon", "status", "swing", ["ribbon", "awareness", "badge", "cause"], "The tails sway."],
  ["Rose", "rose", "Rose", "nature", "swing", ["rose", "flower", "love", "gift"], "It sways."],
  ["Rotate3D", "rotate-3d", "Rotate in 3D", "shapes", "spin", ["3d", "rotate", "orbit", "view"], "It orbits."],
  ["Route", "route", "Route", "travel", "draw", ["route", "path", "directions", "trip"], "The path draws."],
  ["Router", "router", "Router", "devices", "pulse", ["router", "network", "wifi", "internet"], "It sends signals."],
  ["Rows2", "rows", "Rows", "app", "pop", ["rows", "layout", "table", "split"], "The rows shift."],
  ["Rss", "rss", "Feed", "communication", "pulse", ["rss", "feed", "subscribe", "news"], "The waves ripple."],
  ["Ruler", "ruler", "Ruler", "development", "wiggle", ["ruler", "measure", "size", "length"], "The marks tick."],
  ["Sailboat", "sailboat", "Sailboat", "travel", "swing", ["sail", "boat", "sea", "travel"], "It rocks on the water."],
  ["Salad", "salad", "Salad", "food", "bounce", ["salad", "healthy", "food", "vegan"], "The leaves toss."],
  ["Sandwich", "sandwich", "Sandwich", "food", "bounce", ["sandwich", "lunch", "food", "snack"], "It stacks."],
  ["Satellite", "satellite", "Satellite", "devices", "float", ["satellite", "orbit", "space", "signal"], "It drifts."],
  ["SatelliteDish", "satellite-dish", "Satellite dish", "devices", "pulse", ["dish", "signal", "antenna", "receive"], "It picks up a signal."],
  ["SaveAll", "save-all", "Save all", "actions", "nudge-down", ["save all", "save", "disk", "store"], "The disks press."],
  ["Scale", "balance", "Balance", "commerce", "swing", ["balance", "law", "justice", "compare", "weigh"], "The pans tip."],
  ["Scaling", "scaling", "Resize", "actions", "pop", ["resize", "scale", "expand", "size"], "It stretches."],
  ["Scan", "scan", "Scan", "actions", "pop", ["scan", "frame", "focus", "capture"], "The corners close in."],
  ["ScanBarcode", "scan-barcode", "Scan barcode", "commerce", "pop", ["barcode", "scan", "product", "checkout"], "The bars read."],
  ["ScanFace", "face-id", "Face ID", "status", "pop", ["face id", "face", "unlock", "biometric"], "The face is read."],
  ["ScanLine", "scan-line", "Scanning", "actions", "pop", ["scan", "scanner", "read", "line"], "The line sweeps."],
  ["ScanQrCode", "scan-qr", "Scan QR code", "commerce", "pop", ["qr", "scan", "code", "camera"], "The code is read."],
  ["ScanText", "scan-text", "Read text", "text", "pop", ["ocr", "scan", "text", "recognize"], "The lines are read."],
  ["School", "school", "School", "travel", "pop", ["school", "education", "building", "campus"], "The roof hops and the door opens."],
  ["ScissorsLineDashed", "cut-here", "Cut here", "actions", "nudge-right", ["cut", "coupon", "dashed", "scissors"], "The scissors cut along."],
  ["ScreenShare", "screen-share", "Share screen", "communication", "nudge-up", ["share screen", "present", "cast", "screen"], "The arrow goes up."],
  ["ScreenShareOff", "screen-share-off", "Stop sharing", "communication", "shake", ["stop sharing", "screen", "end", "off"], "The cross draws."],
  ["ScrollText", "scroll", "Scroll", "text", "nudge-down", ["scroll", "terms", "script", "parchment"], "It unrolls."],
  ["SearchCheck", "search-check", "Found", "status", "pop", ["found", "search", "verified", "match"], "The tick draws."],
  ["SearchCode", "search-code", "Search code", "development", "pop", ["search code", "find", "code", "grep"], "The brackets open."],
  ["SearchX", "search-x", "No results", "status", "shake", ["no results", "not found", "search", "clear"], "The cross draws."],
  ["SendHorizontal", "send-horizontal", "Send message", "communication", "launch", ["send", "submit", "message", "go"], "It flies off."],
  ["SendToBack", "send-to-back", "Send to back", "development", "nudge-down", ["send to back", "layer", "order", "arrange"], "The boxes swap."],
  ["SeparatorHorizontal", "separator", "Separator", "text", "pop", ["separator", "divider", "split", "line"], "The arrows push apart."],
  ["Server", "server", "Server", "development", "pop", ["server", "host", "backend", "data"], "The lights blink."],
  ["ServerCog", "server-cog", "Server settings", "development", "spin", ["server", "settings", "config", "admin"], "The cog turns."],
  ["ServerCrash", "server-crash", "Server down", "status", "shake", ["crash", "down", "error", "server"], "It sparks."],
  ["ServerOff", "server-off", "Server off", "status", "shake", ["offline", "server", "off", "down"], "It goes dark."],
  ["Shapes", "shapes", "Shapes", "shapes", "pop", ["shapes", "elements", "objects", "design"], "Each shape moves."],
  ["Share", "share", "Share", "actions", "nudge-up", ["share", "export", "send", "upload"], "The arrow goes up."],
  ["Share2", "share-nodes", "Share link", "actions", "pop", ["share", "network", "connect", "social"], "The nodes link."],
  ["Sheet", "sheet", "Spreadsheet", "files", "pop", ["spreadsheet", "table", "grid", "sheet"], "The grid draws."],
  ["ParkingSquare", "parking", "Parking", "travel", "pop", ["parking", "car", "park", "sign"], "The P pops."],
  ["Podium", "podium", "Podium", "people", "bounce", ["podium", "speech", "lectern", "talk"], "It rises."],
  ["Popsicle", "ice-pop", "Ice pop", "food", "wiggle", ["ice cream", "popsicle", "summer", "dessert"], "It wobbles."],
  ["RadioReceiver", "radio-receiver", "Radio receiver", "devices", "wiggle", ["radio", "receiver", "fm", "tuner"], "The tuning dot slides across."],
  ["Plug2", "plug-socket", "Plug in", "devices", "nudge-up", ["plug", "power", "electric", "connect"], "It plugs in."],
  ["PercentSquare", "discount", "Discount", "commerce", "pop", ["discount", "sale", "percent", "offer"], "The tag pops."],
  ["Proportions", "proportions", "Proportions", "shapes", "pop", ["aspect ratio", "proportions", "resize", "crop"], "The boxes reshape."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** a pivot in icon units, shared by parts that turn together */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** a part that pops in from small (backwards: hidden until its delay) */
const popKf = (icon: string) =>
  `@keyframes ki-${icon}-pop{0%{transform:scale(.3);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:none;opacity:1}}`;
const pop = (icon: string, ms: number, delay = 0) => ({ animation: `ki-${icon}-pop ${ms}ms ${SMOOTH} ${delay}ms backwards` });
/** a no-no shake, side to side */
const shakeKf = (icon: string) =>
  `@keyframes ki-${icon}-shake{0%{transform:none}20%{transform:translateX(-.9px)}40%{transform:translateX(.8px)}60%{transform:translateX(-.5px)}80%{transform:translateX(.3px)}100%{transform:none}}`;
const shake = (icon: string, delay = 0) => ({ animation: `ki-${icon}-shake .55s ${SMOOTH} ${delay}ms` });
/** a handset ringing: it rattles about its middle */
const ringKf = (icon: string, deg = 12) =>
  `@keyframes ki-${icon}-ring{0%{transform:none}15%{transform:rotate(-${deg}deg)}30%{transform:rotate(${deg * 0.8}deg)}45%{transform:rotate(-${deg * 0.6}deg)}60%{transform:rotate(${deg * 0.4}deg)}80%{transform:rotate(-${deg * 0.15}deg)}100%{transform:none}}`;
const ring = (icon: string, ms = 700) => ({ animation: `ki-${icon}-ring ${ms}ms ${SMOOTH}` });
/** the four corner brackets of a scan frame close in on what they frame (parts in order: top-left, top-right,
 * bottom-right, bottom-left) */
const cornerKf = (icon: string) =>
  [[1, 1], [-1, 1], [-1, -1], [1, -1]]
    .map(([x, y], i) => `@keyframes ki-${icon}-c${i}{0%{transform:none}35%{transform:translate(${x}px,${y}px)}65%{transform:translate(${x * -0.2}px,${y * -0.2}px)}100%{transform:none}}`)
    .join("");
const corners = (icon: string, parts: string[]) =>
  Object.fromEntries(parts.map((p, i) => [p, { animation: `ki-${icon}-c${i} .6s ${SMOOTH}` }]));
/** an arrow leaving one way and coming back in from behind */
const outKf = (icon: string, x: number, y: number) =>
  `@keyframes ki-${icon}-out{0%{transform:none;opacity:1}32%{transform:translate(${x}px,${y}px);opacity:0}33%{transform:translate(${-x * 0.8}px,${-y * 0.8}px);opacity:0}100%{transform:none;opacity:1}}`;

export const motions: Record<string, Override> = {
  "panel-top": {
    note: "The header bar drops down to open the top panel, then settles back.",
    motion: { p1: { animation: `ki-panel-top-bar .6s ${SMOOTH}` } },
    keyframes: "@keyframes ki-panel-top-bar{0%{transform:none}40%{transform:translateY(2.5px)}70%{transform:translateY(-.4px)}100%{transform:none}}",
  },

  paperclip: {
    note: "The wire bends itself round again, from one end to the other, as the clip tips.",
    draw: ["p0"],
    motion: {
      p0: draw("paperclip", 750),
      root: { animation: `ki-paperclip-tip .75s ${SMOOTH}` },
    },
    keyframes: drawKf("paperclip") + "@keyframes ki-paperclip-tip{0%{transform:none}35%{transform:rotate(-8deg)}70%{transform:rotate(2deg)}100%{transform:none}}",
  },

  party: {
    note: "The popper kicks back on its point as the confetti flies out and the streamers draw themselves.",
    draw: ["p5", "p6", "p7"],
    motion: {
      p0: { ...at(3, 21), animation: `ki-party-cone .6s ${SMOOTH}` },
      p8: { ...at(3, 21), animation: `ki-party-cone .6s ${SMOOTH}` },
      p1: { animation: `ki-party-bit .5s ${SMOOTH} 120ms backwards` },
      p3: { animation: `ki-party-bit .5s ${SMOOTH} 170ms backwards` },
      p2: { animation: `ki-party-bit .5s ${SMOOTH} 220ms backwards` },
      p4: { animation: `ki-party-bit .5s ${SMOOTH} 270ms backwards` },
      p7: draw("party", 400, 100),
      p5: draw("party", 450, 150),
      p6: draw("party", 400, 200),
    },
    keyframes:
      drawKf("party") +
      "@keyframes ki-party-cone{0%{transform:none}25%{transform:rotate(-8deg)}60%{transform:rotate(3deg)}100%{transform:none}}" +
      "@keyframes ki-party-bit{0%{transform:translate(-3px,3px) scale(.3);opacity:0}60%{transform:translate(.3px,-.3px);opacity:1}100%{transform:none;opacity:1}}",
  },

  paw: {
    note: "The toes tap down one after another and the pad presses into the ground.",
    motion: {
      p0: { animation: `ki-paw-toe .5s ${SMOOTH}` },
      p1: { animation: `ki-paw-toe .5s ${SMOOTH} 70ms` },
      p2: { animation: `ki-paw-toe .5s ${SMOOTH} 140ms` },
      p3: { origin: "50% 100%", animation: `ki-paw-pad .6s ${SMOOTH} 60ms` },
    },
    keyframes:
      "@keyframes ki-paw-toe{0%{transform:none}30%{transform:translateY(-1.3px)}60%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-paw-pad{0%{transform:none}35%{transform:scale(1.05,.93)}70%{transform:scale(.99,1.02)}100%{transform:none}}",
  },

  "pc-case": {
    note: "The drive bays slide in and the power light blinks on.",
    draw: ["p2", "p3"],
    motion: {
      p2: draw("pc-case", 400),
      p3: draw("pc-case", 400, 90),
      p1: { animation: `ki-pc-case-led .7s ${SMOOTH} 200ms` },
    },
    keyframes:
      drawKf("pc-case") + "@keyframes ki-pc-case-led{0%{opacity:1}20%{opacity:.1}40%{opacity:1}60%{opacity:.1}100%{opacity:1}}",
  },

  "pencil-off": {
    note: "The pencil shakes no while the slash draws itself across it.",
    draw: ["p3"],
    motion: {
      p0: shake("pencil-off"),
      p1: shake("pencil-off"),
      p2: shake("pencil-off"),
      p3: draw("pencil-off", 450, 60),
    },
    keyframes: shakeKf("pencil-off") + drawKf("pencil-off"),
  },

  "pencil-ruler": {
    note: "The pencil and the ruler open apart like a pair of compasses about where they cross, then close.",
    motion: {
      p4: { ...at(12, 12), animation: `ki-pencil-ruler-a .65s ${SMOOTH}` },
      p5: { ...at(12, 12), animation: `ki-pencil-ruler-a .65s ${SMOOTH}` },
      p0: { ...at(12, 12), animation: `ki-pencil-ruler-b .65s ${SMOOTH}` },
      p1: { ...at(12, 12), animation: `ki-pencil-ruler-b .65s ${SMOOTH}` },
      p2: { ...at(12, 12), animation: `ki-pencil-ruler-b .65s ${SMOOTH}` },
      p3: { ...at(12, 12), animation: `ki-pencil-ruler-b .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pencil-ruler-a{0%{transform:none}35%{transform:rotate(-9deg)}70%{transform:rotate(2deg)}100%{transform:none}}" +
      "@keyframes ki-pencil-ruler-b{0%{transform:none}35%{transform:rotate(9deg)}70%{transform:rotate(-2deg)}100%{transform:none}}",
  },

  "pen-tool": {
    note: "The nib dips forward to set a point while the grip presses into the hand.",
    motion: {
      p0: { ...at(17, 17), animation: `ki-pen-tool-dip .6s ${SMOOTH}` },
      p2: { ...at(17, 17), animation: `ki-pen-tool-dip .6s ${SMOOTH}` },
      p3: { ...at(17, 17), animation: `ki-pen-tool-dip .6s ${SMOOTH}` },
      p1: { animation: `ki-pen-tool-grip .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pen-tool-dip{0%{transform:none}35%{transform:rotate(7deg)}70%{transform:rotate(-1.5deg)}100%{transform:none}}" +
      "@keyframes ki-pen-tool-grip{0%{transform:none}35%{transform:translate(.6px,.6px)}100%{transform:none}}",
  },

  percent: {
    note: "The slash draws itself, then the two rings pop in at its ends.",
    draw: ["p0"],
    motion: {
      p0: draw("percent", 400),
      p1: pop("percent", 450, 150),
      p2: pop("percent", 450, 250),
    },
    keyframes: drawKf("percent") + popKf("percent"),
  },

  person: {
    note: "The arms lift up in a cheer and the head bobs with them.",
    motion: {
      p2: { animation: `ki-person-arms .65s ${SMOOTH}` },
      p0: { animation: `ki-person-head .65s ${SMOOTH}` },
    },
    keyframes:
      '@keyframes ki-person-arms{0%{d:path("M6 8L12 10L18 8")}40%{d:path("M6 4.5L12 10L18 4.5")}70%{d:path("M6 8.6L12 10L18 8.6")}100%{d:path("M6 8L12 10L18 8")}}' +
      "@keyframes ki-person-head{0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}}",
  },

  phone: {
    note: "The handset rattles in its place as it rings.",
    motion: { p0: ring("phone") },
    keyframes: ringKf("phone"),
  },

  "phone-call": {
    note: "The handset rings and the two sound waves come out of it, the near one first.",
    motion: {
      p2: ring("phone-call"),
      p1: { animation: `ki-phone-call-wave .5s ${SMOOTH} 100ms backwards` },
      p0: { animation: `ki-phone-call-wave .5s ${SMOOTH} 200ms backwards` },
    },
    keyframes:
      ringKf("phone-call", 9) +
      "@keyframes ki-phone-call-wave{0%{transform:translate(-1.5px,1.5px);opacity:0}60%{transform:translate(.2px,-.2px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "phone-forwarded": {
    note: "The arrow carries on to the right and comes back in, while the handset gives a short ring.",
    motion: {
      p0: { animation: `ki-phone-forwarded-out .65s ${SMOOTH}` },
      p1: { animation: `ki-phone-forwarded-out .65s ${SMOOTH}` },
      p2: { animation: `ki-phone-forwarded-ring .5s ${SMOOTH}` },
    },
    keyframes:
      outKf("phone-forwarded", 3, 0) +
      "@keyframes ki-phone-forwarded-ring{0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}100%{transform:none}}",
  },

  "phone-incoming": {
    note: "The arrow slides in from the corner into the handset, which rings as it arrives.",
    motion: {
      p0: { animation: `ki-phone-incoming-in .55s ${SMOOTH} backwards` },
      p1: { animation: `ki-phone-incoming-in .55s ${SMOOTH} backwards` },
      p2: { animation: `ki-phone-incoming-ring .5s ${SMOOTH} 220ms` },
    },
    keyframes:
      "@keyframes ki-phone-incoming-in{0%{transform:translate(3px,-3px);opacity:0}60%{transform:translate(-.4px,.4px);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-phone-incoming-ring{0%{transform:none}25%{transform:rotate(-7deg)}55%{transform:rotate(4deg)}100%{transform:none}}",
  },

  "phone-missed": {
    note: "The cross draws itself, one stroke then the other, as the handset shakes.",
    draw: ["p0", "p1"],
    motion: {
      p0: draw("phone-missed", 300),
      p1: draw("phone-missed", 300, 150),
      p2: shake("phone-missed"),
    },
    keyframes: drawKf("phone-missed") + shakeKf("phone-missed"),
  },

  "phone-off": {
    note: "The handset tips down onto its cradle while the slash draws itself across.",
    draw: ["p1"],
    motion: {
      p0: { ...at(12, 12), animation: `ki-phone-off-drop .65s ${SMOOTH}` },
      p2: { ...at(12, 12), animation: `ki-phone-off-drop .65s ${SMOOTH}` },
      p1: draw("phone-off", 450, 80),
    },
    keyframes:
      drawKf("phone-off") +
      "@keyframes ki-phone-off-drop{0%{transform:none}35%{transform:translateY(1px) rotate(-10deg)}70%{transform:rotate(2deg)}100%{transform:none}}",
  },

  "phone-outgoing": {
    note: "The arrow leaves through the corner and comes back, while the handset gives a short ring.",
    motion: {
      p0: { animation: `ki-phone-outgoing-out .65s ${SMOOTH}` },
      p1: { animation: `ki-phone-outgoing-out .65s ${SMOOTH}` },
      p2: { animation: `ki-phone-outgoing-ring .5s ${SMOOTH}` },
    },
    keyframes:
      outKf("phone-outgoing", 3, -3) +
      "@keyframes ki-phone-outgoing-ring{0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}100%{transform:none}}",
  },

  piano: {
    note: "The keys go down one after another, left to right, like a run.",
    motion: {
      p5: { animation: `ki-piano-key .4s ${SMOOTH}` },
      p0: { animation: `ki-piano-key .4s ${SMOOTH} 80ms` },
      p1: { animation: `ki-piano-key .4s ${SMOOTH} 160ms` },
      p2: { animation: `ki-piano-key .4s ${SMOOTH} 240ms` },
    },
    keyframes: "@keyframes ki-piano-key{0%{transform:none}35%{transform:translateY(1.2px)}100%{transform:none}}",
  },

  pickaxe: {
    note: "The pick swings back from the end of its handle and strikes, the head trembling at the hit.",
    motion: {
      // the handle trembles with the head, so the one fill (blades and handle) stays under its outlines
      p0: { ...at(3, 21), animation: `ki-pickaxe-head .75s ${SMOOTH}` },
      p3: { ...at(3, 21), animation: `ki-pickaxe-head .75s ${SMOOTH}` },
      p1: { ...at(3, 21), animation: `ki-pickaxe-head .75s ${SMOOTH}` },
      p2: { ...at(3, 21), animation: `ki-pickaxe-head .75s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pickaxe-swing{0%{transform:none}30%{transform:rotate(-14deg)}50%{transform:rotate(4deg)}70%{transform:rotate(-1deg)}100%{transform:none}}" +
      "@keyframes ki-pickaxe-head{0%{transform:none}30%{transform:rotate(-14deg)}50%{transform:rotate(4deg)}58%{transform:rotate(1.5deg)}64%{transform:rotate(3.5deg)}70%{transform:rotate(-1deg)}100%{transform:none}}",
  },

  "picture-in-picture": {
    note: "The small player slides in from the corner and settles over the big one.",
    motion: {
      p1: { animation: `ki-picture-in-picture-mini .55s ${SMOOTH} backwards` },
      p0: { animation: `ki-picture-in-picture-frame .55s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-picture-in-picture-mini{0%{transform:translate(2px,2px) scale(.6);opacity:0}60%{transform:translate(-.3px,-.3px) scale(1.05);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-picture-in-picture-frame{0%,30%{transform:none}50%{transform:translate(-.4px,-.4px)}100%{transform:none}}",
  },

  "piggy-bank": {
    note: "The pig bounces on its feet and wags its curly tail.",
    motion: {
      p0: { ...at(12, 20), animation: `ki-piggy-bank-body .65s ${SMOOTH}` },
      p1: { ...at(12, 20), animation: `ki-piggy-bank-body .65s ${SMOOTH}` },
      p2: { origin: "100% 100%", animation: `ki-piggy-bank-tail .6s ${SMOOTH} 80ms` },
    },
    keyframes:
      "@keyframes ki-piggy-bank-body{0%{transform:none}30%{transform:scale(1.04,.93)}60%{transform:scale(.98,1.03)}100%{transform:none}}" +
      "@keyframes ki-piggy-bank-tail{0%{transform:none}25%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}75%{transform:rotate(-6deg)}100%{transform:none}}",
  },

  pilcrow: {
    note: "The bowl writes itself, then the two stems draw down after it.",
    draw: ["p2", "p0", "p1"],
    motion: {
      p2: draw("pilcrow", 400),
      p0: draw("pilcrow", 350, 180),
      p1: draw("pilcrow", 350, 280),
    },
    keyframes: drawKf("pilcrow"),
  },

  pill: {
    note: "The capsule rocks about its middle while its seam draws itself across.",
    draw: ["p1"],
    motion: {
      p0: { ...at(12, 12), animation: `ki-pill-rock .7s ${SMOOTH}` },
      p1: { ...at(12, 12), from: { strokeDasharray: 1 }, animation: `ki-pill-seam .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pill-rock{0%{transform:none}25%{transform:rotate(-14deg)}55%{transform:rotate(8deg)}80%{transform:rotate(-3deg)}100%{transform:none}}" +
      "@keyframes ki-pill-seam{0%{transform:none;stroke-dashoffset:1}25%{transform:rotate(-14deg)}55%{transform:rotate(8deg);stroke-dashoffset:0}80%{transform:rotate(-3deg)}100%{transform:none;stroke-dashoffset:0}}",
  },

  pin: {
    note: "The head pushes down and the needle sinks in under it, then springs back.",
    motion: {
      p1: { animation: `ki-pin-head .6s ${SMOOTH}` },
      p0: { origin: "50% 100%", animation: `ki-pin-needle .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pin-head{0%{transform:none}35%{transform:translateY(1.6px)}70%{transform:translateY(-.3px)}100%{transform:none}}" +
      "@keyframes ki-pin-needle{0%{transform:none}35%{transform:scaleY(.68)}70%{transform:scaleY(1.06)}100%{transform:none}}",
  },

  "pin-off": {
    note: "The pin lifts up and out while the slash draws itself across.",
    draw: ["p2"],
    motion: {
      p0: { animation: `ki-pin-off-lift .65s ${SMOOTH}` },
      p1: { animation: `ki-pin-off-lift .65s ${SMOOTH}` },
      p3: { animation: `ki-pin-off-lift .65s ${SMOOTH}` },
      p2: draw("pin-off", 450, 80),
    },
    keyframes:
      drawKf("pin-off") + "@keyframes ki-pin-off-lift{0%{transform:none}35%{transform:translateY(-1.5px)}70%{transform:translateY(.3px)}100%{transform:none}}",
  },

  pipette: {
    note: "The bulb squeezes and a drop falls from the tip.",
    motion: {
      p1: { animation: `ki-pipette-bulb .6s ${SMOOTH}` },
      p2: { animation: `ki-pipette-drop .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pipette-bulb{0%{transform:none}30%{transform:scale(.86)}60%{transform:scale(1.04)}100%{transform:none}}" +
      "@keyframes ki-pipette-drop{0%,25%{transform:none;opacity:1}60%{transform:translate(-1.4px,1.4px);opacity:0}61%{transform:none;opacity:0}100%{transform:none;opacity:1}}",
  },

  pizza: {
    note: "The slice lifts from its point and the toppings bounce on it.",
    motion: {
      p4: { ...at(3, 17), animation: `ki-pizza-lift .65s ${SMOOTH}` },
      p2: { ...at(3, 17), animation: `ki-pizza-lift .65s ${SMOOTH}` },
      p3: { ...at(3, 17), animation: `ki-pizza-lift .65s ${SMOOTH}` },
      p0: { ...at(3, 17), animation: `ki-pizza-top .65s ${SMOOTH}` },
      p1: { ...at(3, 17), animation: `ki-pizza-top .65s ${SMOOTH} 40ms` },
    },
    keyframes:
      "@keyframes ki-pizza-lift{0%{transform:none}35%{transform:rotate(-7deg)}70%{transform:rotate(1.5deg)}100%{transform:none}}" +
      "@keyframes ki-pizza-top{0%{transform:none}35%{transform:rotate(-7deg) translateY(-.8px)}70%{transform:rotate(1.5deg)}100%{transform:none}}",
  },

  plane: {
    note: "The plane flies off past the corner and comes back in from the other side.",
    motion: { p0: { animation: `ki-plane-out .75s ${SMOOTH}` } },
    keyframes: outKf("plane", 4, -4),
  },

  "plane-landing": {
    note: "The plane comes down onto the runway, nose rising as it touches, and the runway runs out under it.",
    draw: ["p0"],
    motion: {
      p1: { animation: `ki-plane-landing-land .7s ${SMOOTH}` },
      p0: draw("plane-landing", 500, 150),
    },
    keyframes:
      drawKf("plane-landing") +
      "@keyframes ki-plane-landing-land{0%{transform:none}40%{transform:translate(1.5px,1.6px) rotate(-5deg)}70%{transform:translate(.3px,.2px)}100%{transform:none}}",
  },

  "plane-takeoff": {
    note: "The runway runs out as the plane lifts off, nose up, and climbs.",
    draw: ["p0"],
    motion: {
      p1: { animation: `ki-plane-takeoff-lift .7s ${SMOOTH}` },
      p0: draw("plane-takeoff", 500),
    },
    keyframes:
      drawKf("plane-takeoff") +
      "@keyframes ki-plane-takeoff-lift{0%{transform:none}40%{transform:translate(1.5px,-1.6px) rotate(-5deg)}70%{transform:translate(-.2px,.2px)}100%{transform:none}}",
  },

  pointer: {
    note: "The hand rises and taps down with its finger, the knuckles following a beat behind.",
    motion: {
      p4: { ...at(12, 22), animation: `ki-pointer-tap .6s ${SMOOTH}` },
      p3: { ...at(12, 22), animation: `ki-pointer-tap .6s ${SMOOTH}` },
      p0: { ...at(12, 22), animation: `ki-pointer-tap .6s ${SMOOTH}` },
      p2: { ...at(12, 22), animation: `ki-pointer-tap .6s ${SMOOTH} 30ms` },
      p1: { ...at(12, 22), animation: `ki-pointer-tap .6s ${SMOOTH} 50ms` },
    },
    keyframes:
      "@keyframes ki-pointer-tap{0%{transform:none}30%{transform:translateY(-1.4px)}55%{transform:translateY(.6px) scaleY(.97)}80%{transform:none}100%{transform:none}}",
  },

  popcorn: {
    note: "The kernels pop up out of the box, which squashes under them.",
    motion: {
      p0: { animation: `ki-popcorn-pop .6s ${SMOOTH} 60ms` },
      p3: { ...at(12, 22), animation: `ki-popcorn-box .6s ${SMOOTH}` },
      p1: { ...at(12, 22), animation: `ki-popcorn-box .6s ${SMOOTH}` },
      p2: { ...at(12, 22), animation: `ki-popcorn-box .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-popcorn-pop{0%{transform:none}35%{transform:translateY(-1.8px) scale(1.05)}65%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-popcorn-box{0%{transform:none}25%{transform:scaleY(.94)}55%{transform:scaleY(1.02)}100%{transform:none}}",
  },

  presentation: {
    note: "The screen unrolls down from its bar and the stand draws itself under it.",
    draw: ["p2"],
    motion: {
      p1: { origin: "50% 0%", animation: `ki-presentation-board .6s ${SMOOTH}` },
      p0: { animation: `ki-presentation-bar .6s ${SMOOTH}` },
      p2: draw("presentation", 400, 200),
    },
    keyframes:
      drawKf("presentation") +
      "@keyframes ki-presentation-board{0%{transform:scaleY(.3)}60%{transform:scaleY(1.05)}100%{transform:none}}" +
      "@keyframes ki-presentation-bar{0%{transform:none}20%{transform:translateY(-.6px)}50%{transform:none}}",
  },

  printer: {
    note: "The sheet feeds in at the top and the printed page slides out at the bottom.",
    motion: {
      p1: { animation: `ki-printer-feed .65s ${SMOOTH}` },
      p2: { animation: `ki-printer-page .65s ${SMOOTH} 100ms` },
      p0: { animation: `ki-printer-body .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-printer-feed{0%{transform:none}35%{transform:translateY(1.2px)}100%{transform:none}}" +
      "@keyframes ki-printer-page{0%{transform:none}20%{transform:translateY(-2.5px)}65%{transform:translateY(.6px)}100%{transform:none}}" +
      "@keyframes ki-printer-body{0%,30%{transform:none}45%{transform:translateY(.3px)}60%{transform:none}}",
  },

  projector: {
    note: "The lens glows up and the light beams draw out of it.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p3: { animation: `ki-projector-lens .6s ${SMOOTH}` },
      p0: draw("projector", 300, 100),
      p1: draw("projector", 300, 160),
      p2: draw("projector", 300, 220),
    },
    keyframes: drawKf("projector") + "@keyframes ki-projector-lens{0%{transform:none}35%{transform:scale(1.15)}70%{transform:scale(.97)}100%{transform:none}}",
  },

  puzzle: {
    note: "The piece lifts out of place, turns, and clicks back in.",
    motion: { p0: { animation: `ki-puzzle-fit .65s ${SMOOTH}` } },
    keyframes:
      "@keyframes ki-puzzle-fit{0%{transform:none}30%{transform:translate(-1px,-1px) rotate(-8deg)}60%{transform:translate(.3px,.3px) rotate(2deg)}100%{transform:none}}",
  },

  "qr-code": {
    note: "The three finder squares pop in, then the dots of the code fill in around them.",
    motion: {
      p0: pop("qr-code", 400),
      p1: pop("qr-code", 400, 70),
      p2: pop("qr-code", 400, 140),
      p5: { animation: `ki-qr-code-dot .3s ${SMOOTH} 200ms backwards` },
      p7: { animation: `ki-qr-code-dot .3s ${SMOOTH} 230ms backwards` },
      p6: { animation: `ki-qr-code-dot .3s ${SMOOTH} 260ms backwards` },
      p9: { animation: `ki-qr-code-dot .3s ${SMOOTH} 290ms backwards` },
      p10: { animation: `ki-qr-code-dot .3s ${SMOOTH} 320ms backwards` },
      p8: { animation: `ki-qr-code-dot .3s ${SMOOTH} 350ms backwards` },
      p3: { animation: `ki-qr-code-dot .3s ${SMOOTH} 380ms backwards` },
      p11: { animation: `ki-qr-code-dot .3s ${SMOOTH} 410ms backwards` },
      p4: { animation: `ki-qr-code-dot .3s ${SMOOTH} 440ms backwards` },
    },
    keyframes: popKf("qr-code") + "@keyframes ki-qr-code-dot{0%{opacity:0}100%{opacity:1}}",
  },

  rabbit: {
    note: "The rabbit hops from its back foot.",
    motion: {
      p0: { ...at(14, 21), animation: `ki-rabbit-hop .65s ${SMOOTH}` },
      p1: { ...at(14, 21), animation: `ki-rabbit-hop .65s ${SMOOTH}` },
      p2: { ...at(14, 21), animation: `ki-rabbit-hop .65s ${SMOOTH}` },
      p4: { ...at(14, 21), animation: `ki-rabbit-hop .65s ${SMOOTH}` },
      // the back ear hops with the body: the filled style fills it with the body, as one shape
      p3: { ...at(14, 21), animation: `ki-rabbit-hop .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-rabbit-hop{0%{transform:none}35%{transform:translate(.5px,-2px) rotate(-4deg)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  radar: {
    note: "The beam sweeps once around the screen and the blips flash as it passes.",
    motion: {
      p7: { ...at(12, 12), animation: `ki-radar-sweep .9s ${SMOOTH}` },
      p1: { animation: `ki-radar-blip .5s ${SMOOTH} 450ms` },
      p4: { animation: `ki-radar-blip .5s ${SMOOTH} 250ms` },
    },
    keyframes:
      "@keyframes ki-radar-sweep{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}" +
      "@keyframes ki-radar-blip{0%{opacity:1;transform:none}30%{opacity:.1;transform:scale(2)}60%{opacity:1;transform:scale(1.4)}100%{opacity:1;transform:none}}",
  },

  radiation: {
    note: "The three blades turn a third of the way around the core.",
    motion: {
      p1: { ...at(12, 12), animation: `ki-radiation-turn .8s ${SMOOTH}` },
      p2: { ...at(12, 12), animation: `ki-radiation-turn .8s ${SMOOTH}` },
      p3: { ...at(12, 12), animation: `ki-radiation-turn .8s ${SMOOTH}` },
      p0: { animation: `ki-radiation-core .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-radiation-turn{from{transform:rotate(0deg)}to{transform:rotate(120deg)}}" +
      "@keyframes ki-radiation-core{0%{transform:none}40%{transform:scale(1.8)}100%{transform:none}}",
  },

  "radio-tower": {
    note: "The waves ripple out from the top of the mast, the near pair first.",
    motion: {
      p1: { ...at(12, 9), animation: `ki-radio-tower-wave .55s ${SMOOTH}` },
      p3: { ...at(12, 9), animation: `ki-radio-tower-wave .55s ${SMOOTH}` },
      p0: { ...at(12, 9), animation: `ki-radio-tower-wave .55s ${SMOOTH} 120ms` },
      p4: { ...at(12, 9), animation: `ki-radio-tower-wave .55s ${SMOOTH} 120ms` },
      p2: { animation: `ki-radio-tower-beacon .5s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-radio-tower-wave{0%{transform:none;opacity:1}20%{transform:scale(.75);opacity:0}70%{transform:scale(1.05);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-radio-tower-beacon{0%{transform:none}30%{transform:scale(1.2)}100%{transform:none}}",
  },

  rainbow: {
    note: "The arcs draw themselves across the sky, the small one first.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p2: draw("rainbow", 400),
      p1: draw("rainbow", 450, 90),
      p0: draw("rainbow", 500, 180),
    },
    keyframes: drawKf("rainbow"),
  },

  receipt: {
    note: "The slip rolls up out of the till and the dollar sign writes itself on it.",
    draw: ["p1", "p0"],
    motion: {
      p2: { animation: `ki-receipt-roll .6s ${SMOOTH}` },
      p1: draw("receipt", 450, 100),
      p0: draw("receipt", 300, 300),
    },
    keyframes: drawKf("receipt") + "@keyframes ki-receipt-roll{0%{transform:none}30%{transform:translateY(-1.3px)}60%{transform:translateY(.3px)}100%{transform:none}}",
  },

  "receipt-text": {
    note: "The slip rolls up and its three lines print, top to bottom.",
    draw: ["p1", "p2", "p0"],
    motion: {
      p3: { animation: `ki-receipt-text-roll .6s ${SMOOTH}` },
      p1: draw("receipt-text", 300, 80),
      p2: draw("receipt-text", 300, 160),
      p0: draw("receipt-text", 300, 240),
    },
    keyframes: drawKf("receipt-text") + "@keyframes ki-receipt-text-roll{0%{transform:none}30%{transform:translateY(-1.3px)}60%{transform:translateY(.3px)}100%{transform:none}}",
  },

  recycle: {
    note: "Each of the three arrows runs along its side and its head snaps on, one after another round the loop.",
    draw: ["p0", "p1", "p4"],
    motion: {
      p0: draw("recycle", 300),
      p3: pop("recycle", 300, 220),
      p4: draw("recycle", 300, 150),
      p5: pop("recycle", 300, 370),
      p1: draw("recycle", 300, 300),
      p2: pop("recycle", 300, 520),
    },
    keyframes: drawKf("recycle") + popKf("recycle"),
  },

  redo: {
    note: "The curve sweeps over to the right and the arrowhead lands at its end.",
    draw: ["p1"],
    motion: {
      p1: draw("redo", 450),
      p0: { animation: `ki-redo-head .45s ${SMOOTH} 250ms backwards` },
    },
    keyframes:
      drawKf("redo") +
      "@keyframes ki-redo-head{0%{transform:translate(-2px,1px);opacity:0}60%{transform:translate(.3px,-.2px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "refresh-off": {
    note: "The arrows try to turn, catch on the slash, and fall back.",
    draw: ["p6"],
    motion: {
      p0: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p1: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p2: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p3: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p4: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p5: { ...at(12, 12), animation: `ki-refresh-off-try .7s ${SMOOTH}` },
      p6: draw("refresh-off", 400),
    },
    keyframes:
      drawKf("refresh-off") +
      "@keyframes ki-refresh-off-try{0%{transform:none}30%{transform:rotate(24deg)}42%{transform:rotate(16deg)}52%{transform:rotate(21deg)}100%{transform:none}}",
  },

  fridge: {
    note: "The handle is pulled and the doors give a cold little shiver.",
    motion: {
      p2: { animation: `ki-fridge-handle .6s ${SMOOTH}` },
      p0: { animation: `ki-fridge-shiver .5s ${SMOOTH} 150ms` },
      p1: { animation: `ki-fridge-shiver .5s ${SMOOTH} 150ms` },
    },
    keyframes:
      "@keyframes ki-fridge-handle{0%{transform:none}30%{transform:translateX(1px)}60%{transform:translateX(-.2px)}100%{transform:none}}" +
      "@keyframes ki-fridge-shiver{0%{transform:none}20%{transform:translateX(-.4px)}40%{transform:translateX(.4px)}60%{transform:translateX(-.25px)}80%{transform:translateX(.1px)}100%{transform:none}}",
  },

  regex: {
    note: "The star spins a sixth of a turn on its centre and the dot hops.",
    motion: {
      p0: { ...at(17, 8), animation: `ki-regex-spin .7s ${SMOOTH}` },
      p1: { ...at(17, 8), animation: `ki-regex-spin .7s ${SMOOTH}` },
      p2: { ...at(17, 8), animation: `ki-regex-spin .7s ${SMOOTH}` },
      p3: { animation: `ki-regex-dot .55s ${SMOOTH} 100ms` },
    },
    keyframes:
      "@keyframes ki-regex-spin{from{transform:rotate(0deg)}to{transform:rotate(60deg)}}" +
      "@keyframes ki-regex-dot{0%{transform:none}35%{transform:translateY(-1.3px)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  "clear-formatting": {
    note: "The letter shakes and the cross draws itself under it, wiping the style.",
    draw: ["p3", "p4"],
    motion: {
      p0: shake("clear-formatting"),
      p1: shake("clear-formatting"),
      p2: shake("clear-formatting"),
      p3: draw("clear-formatting", 300, 80),
      p4: draw("clear-formatting", 300, 220),
    },
    keyframes: shakeKf("clear-formatting") + drawKf("clear-formatting"),
  },

  "repeat-one": {
    note: "The two arrows chase each other round the loop and the 1 pops in the middle.",
    motion: {
      p0: { animation: `ki-repeat-one-top .6s ${SMOOTH}` },
      p1: { animation: `ki-repeat-one-top .6s ${SMOOTH}` },
      p2: { animation: `ki-repeat-one-bottom .6s ${SMOOTH}` },
      p3: { animation: `ki-repeat-one-bottom .6s ${SMOOTH}` },
      p4: { animation: `ki-repeat-one-one .5s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-repeat-one-top{0%{transform:none}35%{transform:translateX(1.5px)}70%{transform:translateX(-.3px)}100%{transform:none}}" +
      "@keyframes ki-repeat-one-bottom{0%{transform:none}35%{transform:translateX(-1.5px)}70%{transform:translateX(.3px)}100%{transform:none}}" +
      "@keyframes ki-repeat-one-one{0%{transform:none}35%{transform:scale(1.35)}70%{transform:scale(.95)}100%{transform:none}}",
  },

  replace: {
    note: "The arrow curls down out of the dashed box and the solid box hops into place.",
    draw: ["p5"],
    motion: {
      p5: draw("replace", 350),
      p4: { animation: `ki-replace-head .45s ${SMOOTH} 200ms backwards` },
      p6: { animation: `ki-replace-box .55s ${SMOOTH} 300ms` },
    },
    keyframes:
      drawKf("replace") +
      "@keyframes ki-replace-head{0%{transform:translateY(-1.5px);opacity:0}60%{transform:translateY(.3px);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-replace-box{0%{transform:none}35%{transform:translateY(-1.2px)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  "replace-all": {
    note: "The arrow curls down and the row of boxes hops into place one after another.",
    draw: ["p7"],
    motion: {
      p7: draw("replace-all", 350),
      p6: { animation: `ki-replace-all-head .45s ${SMOOTH} 200ms backwards` },
      p8: { animation: `ki-replace-all-box .55s ${SMOOTH} 300ms` },
      p0: { animation: `ki-replace-all-box .55s ${SMOOTH} 370ms` },
      p3: { animation: `ki-replace-all-box .55s ${SMOOTH} 440ms` },
    },
    keyframes:
      drawKf("replace-all") +
      "@keyframes ki-replace-all-head{0%{transform:translateY(-1.5px);opacity:0}60%{transform:translateY(.3px);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-replace-all-box{0%{transform:none}35%{transform:translateY(-1.2px)}65%{transform:translateY(.3px)}100%{transform:none}}",
  },

  reply: {
    note: "The arrowhead pulls back to the left and the tail stretches after it.",
    motion: {
      p1: { animation: `ki-reply-head .6s ${SMOOTH}` },
      p0: { origin: "100% 100%", animation: `ki-reply-tail .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-reply-head{0%{transform:none}35%{transform:translateX(-1.6px)}70%{transform:translateX(.3px)}100%{transform:none}}" +
      "@keyframes ki-reply-tail{0%{transform:none}35%{transform:scaleX(1.1)}70%{transform:scaleX(.98)}100%{transform:none}}",
  },

  "reply-all": {
    note: "Both arrowheads pull back to the left, one just behind the other, and the tail stretches after them.",
    motion: {
      p2: { animation: `ki-reply-all-head .6s ${SMOOTH}` },
      p0: { animation: `ki-reply-all-head .6s ${SMOOTH} 70ms` },
      p1: { origin: "100% 100%", animation: `ki-reply-all-tail .6s ${SMOOTH} 70ms` },
    },
    keyframes:
      "@keyframes ki-reply-all-head{0%{transform:none}35%{transform:translateX(-1.6px)}70%{transform:translateX(.3px)}100%{transform:none}}" +
      "@keyframes ki-reply-all-tail{0%{transform:none}35%{transform:scaleX(1.1)}70%{transform:scaleX(.98)}100%{transform:none}}",
  },

  rewind: {
    note: "The two triangles run back to the left, the front one leading.",
    motion: {
      p0: { animation: `ki-rewind-run .55s ${SMOOTH}` },
      p1: { animation: `ki-rewind-run .55s ${SMOOTH} 70ms` },
    },
    keyframes: "@keyframes ki-rewind-run{0%{transform:none}35%{transform:translateX(-1.8px)}70%{transform:translateX(.3px)}100%{transform:none}}",
  },

  ribbon: {
    note: "The ribbon sways from its loop, the tails swinging a little further than the loop.",
    motion: {
      p4: { ...at(12, 2), animation: `ki-ribbon-sway .75s ${SMOOTH}` },
      p1: { ...at(12, 2), animation: `ki-ribbon-sway .75s ${SMOOTH}` },
      p3: { ...at(12, 2), animation: `ki-ribbon-sway .75s ${SMOOTH}` },
      p0: { ...at(12, 2), animation: `ki-ribbon-loop .75s ${SMOOTH}` },
      p2: { ...at(12, 2), animation: `ki-ribbon-loop .75s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-ribbon-sway{0%{transform:none}25%{transform:rotate(-6deg)}55%{transform:rotate(4deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}}" +
      "@keyframes ki-ribbon-loop{0%{transform:none}25%{transform:rotate(-4deg)}55%{transform:rotate(3deg)}80%{transform:rotate(-1deg)}100%{transform:none}}",
  },

  rose: {
    note: "The rose sways on its stem, the bloom swinging further and a beat behind.",
    motion: {
      p3: { ...at(2, 22), animation: `ki-rose-stem .8s ${SMOOTH}` },
      p2: { ...at(2, 22), animation: `ki-rose-stem .8s ${SMOOTH}` },
      p0: { ...at(2, 22), animation: `ki-rose-bloom .8s ${SMOOTH} 40ms` },
      p1: { ...at(2, 22), animation: `ki-rose-bloom .8s ${SMOOTH} 40ms` },
      p4: { ...at(2, 22), animation: `ki-rose-bloom .8s ${SMOOTH} 40ms` },
    },
    keyframes:
      "@keyframes ki-rose-stem{0%{transform:none}30%{transform:rotate(3deg)}60%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-rose-bloom{0%{transform:none}30%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}100%{transform:none}}",
  },

  "rotate-3d": {
    note: "The two rings turn edge-on and back, as if the globe were spinning, and the arrow nudges round.",
    motion: {
      p1: { animation: `ki-rotate-3d-v .75s ${SMOOTH}` },
      p2: { animation: `ki-rotate-3d-h .75s ${SMOOTH} 60ms` },
      p0: { animation: `ki-rotate-3d-head .6s ${SMOOTH} 100ms` },
    },
    keyframes:
      "@keyframes ki-rotate-3d-v{0%{transform:none}45%{transform:scaleX(.25)}100%{transform:none}}" +
      "@keyframes ki-rotate-3d-h{0%{transform:none}45%{transform:scaleY(.4)}100%{transform:none}}" +
      "@keyframes ki-rotate-3d-head{0%{transform:none}35%{transform:translate(1px,-1px)}70%{transform:translate(-.2px,.2px)}100%{transform:none}}",
  },

  route: {
    note: "The start pops up, the path winds itself out to the end, and the end pops up.",
    draw: ["p0"],
    motion: {
      p2: pop("route", 400),
      p0: draw("route", 600, 120),
      p1: pop("route", 400, 600),
    },
    keyframes: popKf("route") + drawKf("route"),
  },

  router: {
    note: "The lights blink and the signal rings out from the antenna, near ring first.",
    motion: {
      p4: { ...at(15, 10), animation: `ki-router-wave .55s ${SMOOTH}` },
      p5: { ...at(15, 10), animation: `ki-router-wave .55s ${SMOOTH} 120ms` },
      p1: { animation: `ki-router-led .6s ${SMOOTH}` },
      p2: { animation: `ki-router-led .6s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-router-wave{0%{transform:none;opacity:1}20%{transform:scale(.6);opacity:0}70%{transform:scale(1.05);opacity:1}100%{transform:none;opacity:1}}" +
      "@keyframes ki-router-led{0%{opacity:1}25%{opacity:.1}50%{opacity:1}100%{opacity:1}}",
  },

  rows: {
    note: "The divider slides up and back down, as if resizing the two rows.",
    motion: { p1: { animation: `ki-rows-split .65s ${SMOOTH}` } },
    keyframes: "@keyframes ki-rows-split{0%{transform:none}35%{transform:translateY(-2.5px)}65%{transform:translateY(.6px)}100%{transform:none}}",
  },

  rss: {
    note: "The dot pops and the two waves spread out from it, one after the other.",
    motion: {
      p2: { animation: `ki-rss-dot .5s ${SMOOTH}` },
      p0: { ...at(4, 20), animation: `ki-rss-wave .5s ${SMOOTH} 80ms backwards` },
      p1: { ...at(4, 20), animation: `ki-rss-wave .5s ${SMOOTH} 170ms backwards` },
    },
    keyframes:
      "@keyframes ki-rss-dot{0%{transform:none}35%{transform:scale(1.4)}100%{transform:none}}" +
      "@keyframes ki-rss-wave{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.04);opacity:1}100%{transform:none;opacity:1}}",
  },

  ruler: {
    note: "The marks along the edge stretch one after another, as if measuring.",
    motion: {
      p3: { animation: `ki-ruler-tick .4s ${SMOOTH}` },
      p2: { animation: `ki-ruler-tick .4s ${SMOOTH} 80ms` },
      p1: { animation: `ki-ruler-tick .4s ${SMOOTH} 160ms` },
      p4: { animation: `ki-ruler-tick .4s ${SMOOTH} 240ms` },
      p0: { animation: `ki-ruler-slide .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-ruler-tick{0%{transform:none}40%{transform:scale(1.6)}100%{transform:none}}" +
      "@keyframes ki-ruler-slide{0%{transform:none}30%{transform:translate(.4px,.4px)}100%{transform:none}}",
  },

  sailboat: {
    note: "The hull rocks on the water and the sail and mast lean over it, further and a beat later.",
    motion: {
      p1: { animation: `ki-sailboat-hull .8s ${SMOOTH}` },
      p2: { ...at(12, 17), animation: `ki-sailboat-sail .8s ${SMOOTH} 50ms` },
      p0: { ...at(12, 17), animation: `ki-sailboat-sail .8s ${SMOOTH} 50ms` },
    },
    keyframes:
      "@keyframes ki-sailboat-hull{0%{transform:none}30%{transform:translateY(.4px) rotate(-3deg)}60%{transform:rotate(2deg)}100%{transform:none}}" +
      "@keyframes ki-sailboat-sail{0%{transform:none}30%{transform:rotate(-6deg)}60%{transform:rotate(4deg)}85%{transform:rotate(-1deg)}100%{transform:none}}",
  },

  salad: {
    note: "The leaves toss up out of the bowl and land as the bowl dips under them.",
    motion: {
      p0: { animation: `ki-salad-toss .65s ${SMOOTH}` },
      p3: { animation: `ki-salad-toss2 .65s ${SMOOTH} 60ms` },
      p1: { origin: "50% 100%", animation: `ki-salad-bowl .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-salad-toss{0%{transform:none}35%{transform:translateY(-1.8px) rotate(8deg)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-salad-toss2{0%{transform:none}35%{transform:translateY(-1.5px) rotate(-8deg)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-salad-bowl{0%{transform:none}25%{transform:scale(1.03,.94)}55%{transform:scale(.99,1.02)}100%{transform:none}}",
  },

  sandwich: {
    note: "The top slice drops onto the filling, which squashes under it.",
    motion: {
      p0: { animation: `ki-sandwich-top .6s ${SMOOTH}` },
      p4: { origin: "50% 100%", animation: `ki-sandwich-fill .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-sandwich-top{0%{transform:none}25%{transform:translateY(-2px)}50%{transform:translateY(.6px)}75%{transform:translateY(-.2px)}100%{transform:none}}" +
      "@keyframes ki-sandwich-fill{0%,35%{transform:none}50%{transform:scaleY(.75)}75%{transform:scaleY(1.05)}100%{transform:none}}",
  },

  satellite: {
    note: "The satellite turns on its body and the signal beam draws itself out.",
    draw: ["p3"],
    motion: {
      p4: { ...at(13, 11), animation: `ki-satellite-turn .8s ${SMOOTH}` },
      p0: { ...at(13, 11), animation: `ki-satellite-turn .8s ${SMOOTH}` },
      p1: { ...at(13, 11), animation: `ki-satellite-turn .8s ${SMOOTH}` },
      p2: { ...at(13, 11), animation: `ki-satellite-turn .8s ${SMOOTH}` },
      p3: draw("satellite", 400, 150),
    },
    keyframes:
      drawKf("satellite") + "@keyframes ki-satellite-turn{0%{transform:none}35%{transform:rotate(-9deg)}70%{transform:rotate(2deg)}100%{transform:none}}",
  },

  "satellite-dish": {
    note: "The dish tilts up to aim and the signal waves come into it, the far one first.",
    motion: {
      p1: { ...at(5, 19), animation: `ki-satellite-dish-aim .7s ${SMOOTH}` },
      p3: { ...at(5, 19), animation: `ki-satellite-dish-aim .7s ${SMOOTH}` },
      p2: { ...at(12, 12), animation: `ki-satellite-dish-wave .5s ${SMOOTH} 70ms backwards` },
      p0: { ...at(12, 12), animation: `ki-satellite-dish-wave .5s ${SMOOTH} 150ms backwards` },
    },
    keyframes:
      "@keyframes ki-satellite-dish-aim{0%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(1.5deg)}100%{transform:none}}" +
      "@keyframes ki-satellite-dish-wave{0%{transform:scale(1.3);opacity:0}60%{transform:scale(.97);opacity:1}100%{transform:none;opacity:1}}",
  },

  "save-all": {
    note: "The front disk slides back onto the one behind it, which gives under the push.",
    motion: {
      p3: { animation: `ki-save-all-front .6s ${SMOOTH}` },
      p0: { animation: `ki-save-all-front .6s ${SMOOTH}` },
      p1: { animation: `ki-save-all-front .6s ${SMOOTH}` },
      p2: { animation: `ki-save-all-back .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-save-all-front{0%{transform:none}35%{transform:translate(-1.2px,1.2px)}70%{transform:translate(.2px,-.2px)}100%{transform:none}}" +
      "@keyframes ki-save-all-back{0%,25%{transform:none}40%{transform:translate(-.5px,.5px)}70%{transform:none}100%{transform:none}}",
  },

  balance: {
    note: "The beam tips on the post, one pan dropping as the other rises, and levels out again.",
    motion: {
      p2: { ...at(12, 5), animation: `ki-balance-beam .8s ${SMOOTH}` },
      p3: { animation: `ki-balance-left .8s ${SMOOTH}` },
      p1: { animation: `ki-balance-right .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-balance-beam{0%{transform:none}30%{transform:rotate(-7deg)}60%{transform:rotate(3deg)}85%{transform:rotate(-1deg)}100%{transform:none}}" +
      "@keyframes ki-balance-left{0%{transform:none}30%{transform:translateY(1.1px)}60%{transform:translateY(-.5px)}85%{transform:translateY(.15px)}100%{transform:none}}" +
      "@keyframes ki-balance-right{0%{transform:none}30%{transform:translateY(-1.1px)}60%{transform:translateY(.5px)}85%{transform:translateY(-.15px)}100%{transform:none}}",
  },

  scaling: {
    note: "The inner corner is dragged out towards the top right and springs back, the line shortening with it.",
    motion: {
      p1: { animation: `ki-scaling-corner .65s ${SMOOTH}` },
      p3: { origin: "100% 0%", animation: `ki-scaling-line .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-scaling-corner{0%{transform:none}35%{transform:translate(1.6px,-1.6px)}70%{transform:translate(-.3px,.3px)}100%{transform:none}}" +
      "@keyframes ki-scaling-line{0%{transform:none}35%{transform:scale(.86)}70%{transform:scale(1.02)}100%{transform:none}}",
  },

  scan: {
    note: "The four corners close in on what they frame, then open out again.",
    motion: corners("scan", ["p0", "p1", "p2", "p3"]),
    keyframes: cornerKf("scan"),
  },

  "scan-barcode": {
    note: "The corners close in and the bars are read, one after another.",
    motion: {
      ...corners("scan-barcode", ["p0", "p1", "p2", "p3"]),
      p4: { animation: `ki-scan-barcode-bar .4s ${SMOOTH} 100ms` },
      p5: { animation: `ki-scan-barcode-bar .4s ${SMOOTH} 180ms` },
      p6: { animation: `ki-scan-barcode-bar .4s ${SMOOTH} 260ms` },
    },
    keyframes: cornerKf("scan-barcode") + "@keyframes ki-scan-barcode-bar{0%{transform:none;opacity:1}40%{transform:scaleY(.6);opacity:.3}100%{transform:none;opacity:1}}",
  },

  "face-id": {
    note: "The corners close in on the face, which blinks and smiles wider.",
    motion: {
      ...corners("face-id", ["p0", "p1", "p2", "p3"]),
      p5: { animation: `ki-face-id-blink .45s ${SMOOTH} 150ms` },
      p6: { animation: `ki-face-id-blink .45s ${SMOOTH} 150ms` },
      p4: { animation: `ki-face-id-smile .6s ${SMOOTH} 100ms` },
    },
    keyframes:
      cornerKf("face-id") +
      "@keyframes ki-face-id-blink{0%{transform:none}35%{transform:scaleY(.15)}60%{transform:none}}" +
      '@keyframes ki-face-id-smile{0%{d:path("M8 14S9.5 16 12 16S16 14 16 14")}45%{d:path("M7.5 13.5S9.5 17 12 17S16.5 13.5 16.5 13.5")}100%{d:path("M8 14S9.5 16 12 16S16 14 16 14")}}',
  },

  "scan-line": {
    note: "The corners close in and the scan line sweeps up and down through the frame.",
    motion: {
      ...corners("scan-line", ["p0", "p1", "p2", "p3"]),
      p4: { animation: `ki-scan-line-sweep .8s ${SMOOTH}` },
    },
    keyframes:
      cornerKf("scan-line") +
      "@keyframes ki-scan-line-sweep{0%{transform:none}30%{transform:translateY(-4px)}70%{transform:translateY(4px)}100%{transform:none}}",
  },

  "scan-qr": {
    note: "The corners close in and the code inside pops, its dots blinking as it is read.",
    motion: {
      ...corners("scan-qr", ["p4", "p1", "p3", "p6"]),
      p7: pop("scan-qr", 400, 100),
      p0: pop("scan-qr", 400, 160),
      p2: { animation: `ki-scan-qr-dot .4s ${SMOOTH} 220ms` },
      p5: { animation: `ki-scan-qr-dot .4s ${SMOOTH} 280ms` },
    },
    keyframes: cornerKf("scan-qr") + popKf("scan-qr") + "@keyframes ki-scan-qr-dot{0%{opacity:1}40%{opacity:.1}100%{opacity:1}}",
  },

  "scan-text": {
    note: "The corners close in and the lines of text are read, top to bottom.",
    draw: ["p4", "p5", "p6"],
    motion: {
      ...corners("scan-text", ["p0", "p1", "p2", "p3"]),
      p4: draw("scan-text", 300, 80),
      p5: draw("scan-text", 300, 160),
      p6: draw("scan-text", 300, 240),
    },
    keyframes: cornerKf("scan-text") + drawKf("scan-text"),
  },

  school: {
    note: "The roof hops up, the round window swells, and the door swings open and shut.",
    motion: {
      p2: { animation: `ki-school-roof .6s ${SMOOTH}` },
      p5: { animation: `ki-school-window .6s ${SMOOTH} 60ms` },
      p0: { origin: "0% 100%", animation: `ki-school-door .7s ${SMOOTH} 100ms` },
    },
    keyframes:
      "@keyframes ki-school-roof{0%{transform:none}35%{transform:translateY(-1.2px)}65%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-school-window{0%{transform:none}40%{transform:scale(1.2)}100%{transform:none}}" +
      "@keyframes ki-school-door{0%{transform:none}35%,60%{transform:scaleX(.45)}100%{transform:none}}",
  },

  "cut-here": {
    note: "The scissors snip twice about their pivot as they move along the dashed line.",
    motion: {
      p3: { ...at(8, 12), animation: `ki-cut-here-a .8s ${SMOOTH}` },
      p2: { ...at(8, 12), animation: `ki-cut-here-a .8s ${SMOOTH}` },
      p1: { ...at(8, 12), animation: `ki-cut-here-b .8s ${SMOOTH}` },
      p0: { ...at(8, 12), animation: `ki-cut-here-b .8s ${SMOOTH}` },
      p4: { ...at(8, 12), animation: `ki-cut-here-b .8s ${SMOOTH}` },
      p5: { animation: `ki-cut-here-dash .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-cut-here-a{0%{transform:none}25%{transform:translateX(.6px) rotate(-9deg)}50%{transform:translateX(1.2px)}75%{transform:translateX(1.6px) rotate(-9deg)}100%{transform:none}}" +
      "@keyframes ki-cut-here-b{0%{transform:none}25%{transform:translateX(.6px) rotate(9deg)}50%{transform:translateX(1.2px)}75%{transform:translateX(1.6px) rotate(9deg)}100%{transform:none}}" +
      "@keyframes ki-cut-here-dash{0%,40%{opacity:1}60%{opacity:0}100%{opacity:1}}",
  },

  "screen-share": {
    note: "The arrow leaves the screen through its corner and comes back in.",
    motion: {
      p3: { animation: `ki-screen-share-out .65s ${SMOOTH}` },
      p4: { animation: `ki-screen-share-out .65s ${SMOOTH}` },
      p0: { animation: `ki-screen-share-screen .65s ${SMOOTH}` },
    },
    keyframes:
      outKf("screen-share", 2.5, -2.5) + "@keyframes ki-screen-share-screen{0%{transform:none}25%{transform:translate(-.4px,.4px)}55%{transform:none}}",
  },

  "screen-share-off": {
    note: "The cross draws itself in the corner, one stroke then the other, as the screen gives a shake.",
    draw: ["p3", "p4"],
    motion: {
      p3: draw("screen-share-off", 300),
      p4: draw("screen-share-off", 300, 150),
      p0: shake("screen-share-off", 100),
      p1: shake("screen-share-off", 100),
      p2: shake("screen-share-off", 100),
    },
    keyframes: drawKf("screen-share-off") + shakeKf("screen-share-off"),
  },

  scroll: {
    note: "The bottom roll drops as the scroll unrolls, and the two lines write themselves.",
    draw: ["p1", "p0"],
    motion: {
      // the roll unrolls with the sheet (same top edge), so the fill under both stays put
      p3: { origin: "50% 0%", animation: `ki-scroll-sheet .6s ${SMOOTH}` },
      p2: { origin: "50% 0%", animation: `ki-scroll-sheet .6s ${SMOOTH}` },
      p1: draw("scroll", 300, 150),
      p0: draw("scroll", 300, 250),
    },
    keyframes:
      drawKf("scroll") +
      "@keyframes ki-scroll-roll{0%{transform:translateY(-2px)}60%{transform:translateY(.4px)}100%{transform:none}}" +
      "@keyframes ki-scroll-sheet{0%{transform:scaleY(.86)}60%{transform:scaleY(1.02)}100%{transform:none}}",
  },

  "search-check": {
    note: "The lens swells as it finds the match and the tick draws itself inside.",
    draw: ["p0"],
    motion: {
      p1: { animation: `ki-search-check-lens .55s ${SMOOTH}` },
      p2: { animation: `ki-search-check-handle .55s ${SMOOTH}` },
      p0: draw("search-check", 400, 120),
    },
    keyframes:
      drawKf("search-check") +
      "@keyframes ki-search-check-lens{0%{transform:none}35%{transform:scale(1.08)}70%{transform:scale(.99)}100%{transform:none}}" +
      "@keyframes ki-search-check-handle{0%{transform:none}35%{transform:translate(.6px,.6px)}100%{transform:none}}",
  },

  "search-code": {
    note: "The two brackets push apart inside the lens and close back in.",
    motion: {
      p2: { animation: `ki-search-code-left .55s ${SMOOTH}` },
      p0: { animation: `ki-search-code-right .55s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-search-code-left{0%{transform:none}35%{transform:translateX(-1.2px)}70%{transform:translateX(.2px)}100%{transform:none}}" +
      "@keyframes ki-search-code-right{0%{transform:none}35%{transform:translateX(1.2px)}70%{transform:translateX(-.2px)}100%{transform:none}}",
  },

  "search-x": {
    note: "The cross draws itself in the lens while the glass shakes no.",
    draw: ["p1", "p0"],
    motion: {
      p2: shake("search-x"),
      p3: shake("search-x"),
      p1: draw("search-x", 280, 60),
      p0: draw("search-x", 280, 200),
    },
    keyframes: shakeKf("search-x") + drawKf("search-x"),
  },

  "send-horizontal": {
    note: "The dart flies off to the right and slides back in from the left, its fold line trailing.",
    motion: {
      p0: { animation: `ki-send-horizontal-out .65s ${SMOOTH}` },
      p1: { animation: `ki-send-horizontal-out .65s ${SMOOTH} 30ms` },
    },
    keyframes: outKf("send-horizontal", 4, 0),
  },

  "send-to-back": {
    note: "The front box shrinks back behind the other, which steps forward, and they settle.",
    motion: {
      p1: { animation: `ki-send-to-back-front .65s ${SMOOTH}` },
      p0: { animation: `ki-send-to-back-back .65s ${SMOOTH}` },
      p2: { animation: `ki-send-to-back-link .65s ${SMOOTH}` },
      p3: { animation: `ki-send-to-back-link .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-send-to-back-front{0%{transform:none}35%{transform:translate(1.5px,1.5px) scale(.8);opacity:.5}70%{transform:none;opacity:1}100%{transform:none}}" +
      "@keyframes ki-send-to-back-back{0%{transform:none}35%{transform:translate(-1.5px,-1.5px) scale(1.08)}70%{transform:none}100%{transform:none}}" +
      "@keyframes ki-send-to-back-link{0%{opacity:1}35%{opacity:.2}70%{opacity:1}100%{opacity:1}}",
  },

  separator: {
    note: "The two arrows push away from the line, which stretches between them.",
    motion: {
      p2: { animation: `ki-separator-up .6s ${SMOOTH}` },
      p0: { animation: `ki-separator-down .6s ${SMOOTH}` },
      p1: { animation: `ki-separator-line .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-separator-up{0%{transform:none}35%{transform:translateY(-1.5px)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-separator-down{0%{transform:none}35%{transform:translateY(1.5px)}70%{transform:translateY(-.3px)}100%{transform:none}}" +
      "@keyframes ki-separator-line{0%{transform:none}35%{transform:scaleX(1.08)}100%{transform:none}}",
  },

  server: {
    note: "Each unit slides out a little like a drawer, its light blinking, the top one first.",
    motion: {
      p0: { animation: `ki-server-slide .6s ${SMOOTH}` },
      p2: { animation: `ki-server-led .6s ${SMOOTH}` },
      p1: { animation: `ki-server-slide .6s ${SMOOTH} 90ms` },
      p3: { animation: `ki-server-led .6s ${SMOOTH} 90ms` },
    },
    keyframes:
      "@keyframes ki-server-slide{0%{transform:none}35%{transform:translateX(1.2px)}70%{transform:translateX(-.2px)}100%{transform:none}}" +
      "@keyframes ki-server-led{0%{transform:none;opacity:1}35%{transform:translateX(1.2px);opacity:.1}70%{transform:translateX(-.2px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "server-cog": {
    note: "The cog turns a quarter between the two units while their lights blink.",
    motion: {
      ...Object.fromEntries(
        ["p0", "p1", "p2", "p3", "p4", "p5", "p10", "p11"].map((p) => [p, { ...at(12, 12), animation: `ki-server-cog-turn .8s ${SMOOTH}` }]),
      ),
      p8: { animation: `ki-server-cog-led .6s ${SMOOTH} 100ms` },
      p9: { animation: `ki-server-cog-led .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-server-cog-turn{from{transform:rotate(0deg)}to{transform:rotate(90deg)}}" +
      "@keyframes ki-server-cog-led{0%{opacity:1}30%{opacity:.1}60%{opacity:1}100%{opacity:1}}",
  },

  "server-crash": {
    note: "The bolt strikes down between the units, which jolt and flicker.",
    draw: ["p4"],
    motion: {
      p4: draw("server-crash", 350),
      p0: { animation: `ki-server-crash-jolt .55s ${SMOOTH} 150ms` },
      p1: { animation: `ki-server-crash-jolt .55s ${SMOOTH} 150ms` },
      p2: { animation: `ki-server-crash-led .55s ${SMOOTH} 150ms` },
      p3: { animation: `ki-server-crash-led .55s ${SMOOTH} 150ms` },
    },
    keyframes:
      drawKf("server-crash") +
      "@keyframes ki-server-crash-jolt{0%{transform:none}20%{transform:translateX(-.8px)}40%{transform:translateX(.7px)}60%{transform:translateX(-.4px)}100%{transform:none}}" +
      "@keyframes ki-server-crash-led{0%{transform:none;opacity:1}20%{transform:translateX(-.8px);opacity:.1}40%{transform:translateX(.7px);opacity:1}60%{transform:translateX(-.4px);opacity:.1}100%{transform:none;opacity:1}}",
  },

  "server-off": {
    note: "The units dim while the slash draws itself across them, then light back up.",
    draw: ["p5"],
    motion: {
      p5: draw("server-off", 450),
      p0: { animation: `ki-server-off-dim .75s ${SMOOTH}` },
      p1: { animation: `ki-server-off-dim .75s ${SMOOTH}` },
      p2: { animation: `ki-server-off-dim .75s ${SMOOTH} 60ms` },
      p3: { animation: `ki-server-off-dim .75s ${SMOOTH} 60ms` },
      p4: { animation: `ki-server-off-dim .75s ${SMOOTH} 60ms` },
    },
    keyframes: drawKf("server-off") + "@keyframes ki-server-off-dim{0%{opacity:1}40%,60%{opacity:.35}100%{opacity:1}}",
  },

  shapes: {
    note: "Each shape moves its own way: the triangle hops, the square turns and the circle squashes.",
    motion: {
      p0: { animation: `ki-shapes-hop .55s ${SMOOTH}` },
      p1: { animation: `ki-shapes-turn .65s ${SMOOTH} 60ms` },
      p2: { origin: "50% 100%", animation: `ki-shapes-squash .55s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-shapes-hop{0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-shapes-turn{from{transform:rotate(0deg)}to{transform:rotate(90deg)}}" +
      "@keyframes ki-shapes-squash{0%{transform:none}35%{transform:scale(1.12,.86)}65%{transform:scale(.97,1.04)}100%{transform:none}}",
  },

  share: {
    note: "The arrow lifts up out of the tray, which dips a little as it leaves.",
    motion: {
      p0: { animation: `ki-share-up .6s ${SMOOTH}` },
      p1: { animation: `ki-share-up .6s ${SMOOTH}` },
      p2: { animation: `ki-share-tray .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-share-up{0%{transform:none}35%{transform:translateY(-2px)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-share-tray{0%{transform:none}35%{transform:translateY(.5px)}70%{transform:none}100%{transform:none}}",
  },

  "share-nodes": {
    note: "The first node pops, the links draw out from it, and the other two nodes pop at their ends.",
    draw: ["p3", "p4"],
    motion: {
      p1: pop("share-nodes", 400),
      p3: draw("share-nodes", 300, 120),
      p4: draw("share-nodes", 300, 120),
      p0: pop("share-nodes", 400, 330),
      p2: pop("share-nodes", 400, 330),
    },
    keyframes: popKf("share-nodes") + drawKf("share-nodes"),
  },

  sheet: {
    note: "The grid lines draw themselves: the rows across, then the columns down.",
    draw: ["p1", "p2", "p3", "p4"],
    motion: {
      p1: draw("sheet", 300),
      p2: draw("sheet", 300, 80),
      p3: draw("sheet", 300, 160),
      p4: draw("sheet", 300, 240),
    },
    keyframes: drawKf("sheet"),
  },

  parking: {
    note: "The sign gives a little bounce and the P writes itself on it.",
    draw: ["p0"],
    motion: {
      p1: { animation: `ki-parking-sign .55s ${SMOOTH}` },
      p0: draw("parking", 550, 80),
    },
    keyframes: drawKf("parking") + "@keyframes ki-parking-sign{0%{transform:none}35%{transform:scale(1.05)}70%{transform:scale(.99)}100%{transform:none}}",
  },

  podium: {
    note: "The top step rises and the flag on it waves.",
    motion: {
      p2: { animation: `ki-podium-rise .65s ${SMOOTH}` },
      p0: { ...at(12, 6), animation: `ki-podium-flag .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-podium-rise{0%{transform:none}35%{transform:translateY(-1.2px)}70%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-podium-flag{0%{transform:none}35%{transform:translateY(-1.2px) rotate(-12deg)}60%{transform:translateY(.1px) rotate(8deg)}85%{transform:rotate(-2deg)}100%{transform:none}}",
  },

  "ice-pop": {
    note: "The ice pop wobbles on its stick, which barely moves.",
    motion: {
      p0: { ...at(16, 16), animation: `ki-ice-pop-wobble .7s ${SMOOTH}` },
      p1: { ...at(22, 22), animation: `ki-ice-pop-stick .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-ice-pop-wobble{0%{transform:none}25%{transform:rotate(-8deg)}50%{transform:rotate(6deg)}75%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-ice-pop-stick{0%{transform:none}25%{transform:rotate(-2deg)}50%{transform:rotate(1.5deg)}100%{transform:none}}",
  },

  "radio-receiver": {
    note: "The radio hops on its feet and the tuning dot slides across the dial and back.",
    motion: {
      p2: { animation: `ki-radio-receiver-hop .6s ${SMOOTH}` },
      p3: { animation: `ki-radio-receiver-tune .8s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-radio-receiver-hop{0%{transform:none}35%{transform:translateY(-1px)}65%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-radio-receiver-tune{0%{transform:none}50%{transform:translateX(-11px)}100%{transform:none}}",
  },

  "plug-socket": {
    note: "The plug pushes up into the socket, its prongs sinking in, and the cable stretches after it.",
    motion: {
      p3: { animation: `ki-plug-socket-push .6s ${SMOOTH}` },
      p4: { animation: `ki-plug-socket-push .6s ${SMOOTH}` },
      p0: { origin: "50% 0%", animation: `ki-plug-socket-prong .6s ${SMOOTH}` },
      p1: { origin: "50% 0%", animation: `ki-plug-socket-prong .6s ${SMOOTH}` },
      p2: { origin: "50% 100%", animation: `ki-plug-socket-cable .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-plug-socket-push{0%{transform:none}35%{transform:translateY(-1.5px)}70%{transform:translateY(.2px)}100%{transform:none}}" +
      "@keyframes ki-plug-socket-prong{0%{transform:none}35%{transform:scaleY(.75)}70%{transform:scaleY(1.03)}100%{transform:none}}" +
      "@keyframes ki-plug-socket-cable{0%{transform:none}35%{transform:scaleY(1.3)}70%{transform:scaleY(.96)}100%{transform:none}}",
  },

  discount: {
    note: "The tag tilts, the slash draws itself and the two dots pop at its ends.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-discount-tilt .6s ${SMOOTH}` },
      p1: draw("discount", 350),
      p2: pop("discount", 350, 120),
      p3: pop("discount", 350, 220),
    },
    keyframes:
      drawKf("discount") + popKf("discount") + "@keyframes ki-discount-tilt{0%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(1.5deg)}100%{transform:none}}",
  },

  proportions: {
    note: "The inner frame changes shape, from wide to small and back, as if trying a new aspect ratio.",
    motion: {
      p2: { animation: `ki-proportions-frame .8s ${SMOOTH}` },
      p1: { animation: `ki-proportions-split .8s ${SMOOTH}` },
    },
    keyframes:
      '@keyframes ki-proportions-frame{0%{d:path("M2 9h13a2 2 0 0 1 2 2v9")}45%{d:path("M2 12h10a2 2 0 0 1 2 2v6")}100%{d:path("M2 9h13a2 2 0 0 1 2 2v9")}}' +
      '@keyframes ki-proportions-split{0%{d:path("M12 9v11")}45%{d:path("M9 12v8")}100%{d:path("M12 9v11")}}',
  },
};

const SCREEN = "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3h-3L13 6Z";
/** fill areas for outlines the source draws open */
export const fills: Record<string, string> = {
  // the board, closed along its top bar
  presentation: "M3 3h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
  // the whole hand, as for hand
  pointer:
    "M6 14V4a2 2 0 0 1 4 0v5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15Z",
  // the screen, cut off diagonally short of the arrow in its corner
  "screen-share": SCREEN,
  "screen-share-off": SCREEN,
  // the frame, cut off short of the arrow's head
  scaling: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7Z",
  // both units, which the source leaves open where the bolt passes
  "server-crash":
    "M4 2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z M4 14h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z",
  // the body, cut around the printed page (about a unit of gap from it) where the source leaves its bottom open; and the sheet on top
  printer:
    "M3.25 17.854A2 2 0 0 1 2 16v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5A2 2 0 0 1 20.75 17.854V15A3.75 3.75 0 0 0 17 11.25H7A3.75 3.75 0 0 0 3.25 15Z M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6Z",
  // the body, cut around the lens (about a unit of gap from it) where the source leaves its top open
  projector: "M14.662 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4A2 2 0 0 1 3.318 12.12A5.75 5.75 0 1 0 14.662 12Z",
  // the cone, stopping a unit short of its mouth so the two stay separate shapes; it runs out along the cone's sides to
  // their ends (zero-width, under their strokes) so the solid counts at its drawn size and is not taken for a small bit
  party: "M2 22L5.8 11.3L4.258 15.645A7.75 4.87 45 0 0 8.355 19.742L12.7 18.21Z",
  // the big screen, cut around the small one (about a unit of gap from it) where the source leaves its corner open
  "picture-in-picture": "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4H9.25V15A4.75 4.75 0 0 1 14 10.25H21Z",
  // both units, each cut around the cog (about a unit of gap from its teeth) where the source leaves them open
  "server-cog":
    "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.553A6.75 6.75 0 0 0 5.553 10Z M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1.553A6.75 6.75 0 0 1 5.553 14Z",
  // the two blades and the handle, each closed along the head they meet
  pickaxe:
    "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024Z M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069Z M14 13l-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999Z",
  // the body and front ear, closed across the gap at the back foot; the back ear and the tail, closed along the body
  rabbit:
    "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3Z M20 8.54V4a2 2 0 1 0-4 0v3Z M7.612 12.524a3 3 0 1 0-1.6 4.3Z",
  // the tower and the two wings, each closed along the walls they share, with a ring cut a unit clear of the round window
  school:
    "M6 21V4.933L11.106 2.21a2 2 0 0 1 1.788 0L18 4.933V21Z M16.75 9A4.75 4.75 0 0 0 7.25 9A4.75 4.75 0 0 0 16.75 9Z M6 11L2.48 13.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2H6Z M18 11l3.52 2.147a1 1 0 0 1 .48.853V19a2 2 0 0 1-2 2H18Z",
  // the sheet with both rolls
  scroll: "M4 3H17A2 2 0 0 1 19 5V17H21a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H8A2 2 0 0 1 6 19V8H3a1 1 0 0 1-1-1V5A2 2 0 0 1 4 3Z",
  // the two panels, each closed along the body they meet
  satellite:
    "M13.5 6.5L10.352 3.352a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5Z M17.5 10.5l3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5Z",
  // the top slice, closed a unit clear of the filling (so it moves with the slice and stays its own shape; its sides run
  // on down to the filling as strokes; the bottom slice stays drawn: the top one drops on its own)
  sandwich: "M6.04 8.25L10.742 4.446a2 2 0 0 1 2.516 0L17.96 8.25Z",
  // the three steps as one block
  podium: "M4 14h4a1 1 0 0 1 1 1V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z",
};

/** the podium's steps are drawn in pieces: they stay strokes over the fill */
export const pieces: string[] = ["podium"];
