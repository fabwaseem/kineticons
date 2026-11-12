import type { Entry, Override } from "./types";

/** Batch w: its icons (pnpm import-icons w) and their motions. */
export const list: Entry[] = [
  ["TicketSlash", "ticket-slash", "Ticket void", "commerce", "shake", ["ticket", "void", "invalid", "cancel"], "The slash cuts across."],
  ["TicketX", "ticket-x", "Ticket cancelled", "commerce", "shake", ["ticket", "cancel", "refund", "remove"], "The cross draws in."],
  ["TicTacToe", "tic-tac-toe", "Tic-tac-toe", "app", "pop", ["game", "noughts", "crosses", "grid"], "The marks are played."],
  ["Tombstone", "tombstone", "Tombstone", "nature", "tilt", ["grave", "rip", "halloween", "death"], "It settles."],
  ["ToolCase", "tool-case", "Tool case", "development", "bounce", ["tools", "case", "kit", "repair"], "It is lifted."],
  ["Toothbrush", "toothbrush", "Toothbrush", "health", "wiggle", ["teeth", "brush", "dental", "hygiene"], "It brushes."],
  ["ToothbrushSparkles", "toothbrush-sparkles", "Clean teeth", "health", "wiggle", ["teeth", "clean", "dental", "fresh"], "It brushes and sparkles."],
  ["Torus", "torus", "Torus", "shapes", "spin", ["donut", "ring", "3d", "shape"], "It turns."],
  ["TouchpadOff", "touchpad-off", "Touchpad off", "devices", "shake", ["trackpad", "disabled", "off", "mouse"], "The slash crosses it out."],
  ["Trailer", "trailer", "Trailer", "travel", "nudge-right", ["trailer", "tow", "cargo", "haul"], "It rolls."],
  ["TrainFront", "train-front", "Train", "travel", "bounce", ["train", "rail", "metro", "transit"], "It rocks on the rails."],
  ["TrainFrontTunnel", "train-front-tunnel", "Train in a tunnel", "travel", "bounce", ["subway", "tunnel", "metro", "underground"], "It rolls out of the tunnel."],
  ["Transgender", "transgender", "Transgender", "people", "pop", ["gender", "trans", "identity", "symbol"], "The arms reach out."],
  ["Trash", "trash-2", "Delete", "actions", "wiggle", ["delete", "trash", "bin", "remove"], "The lid lifts."],
  ["TrashOff", "trash-off", "Cannot delete", "actions", "shake", ["delete", "trash", "disabled", "keep"], "The slash crosses it out."],
  ["TrendingUpDown", "trending-up-down", "Volatile", "charts", "wiggle", ["trend", "volatile", "up", "down"], "The arrows swap."],
  ["TriangleDashed", "triangle-dashed", "Triangle dashed", "shapes", "spin", ["triangle", "dashed", "shape", "draft"], "The dashes march."],
  ["TriangleRight", "triangle-right", "Right triangle", "shapes", "pop", ["triangle", "right angle", "shape", "geometry"], "It grows from its corner."],
  ["TruckElectric", "truck-electric", "Electric truck", "commerce", "nudge-right", ["truck", "electric", "delivery", "ev"], "It drives off charged."],
  ["TubeLotion", "tube-lotion", "Lotion", "health", "bounce", ["lotion", "cream", "tube", "skincare"], "It is squeezed."],
  ["TurkishLira", "turkish-lira", "Turkish lira", "commerce", "pop", ["money", "currency", "lira", "try"], "It draws itself."],
  ["TvMinimal", "tv-minimal", "TV", "devices", "pop", ["tv", "screen", "television", "display"], "The screen flickers."],
  ["TypeOutline", "type-outline", "Text outline", "text", "pop", ["text", "font", "outline", "letter"], "The letter traces itself."],
  ["UmbrellaOff", "umbrella-off", "No umbrella", "weather", "shake", ["umbrella", "dry", "off", "weather"], "The slash crosses it out."],
  ["Undo", "undo-arrow", "Undo (arrow)", "actions", "nudge-left", ["undo", "back", "revert"], "It steps back."],
  ["UndoDot", "undo-dot", "Undo to point", "actions", "nudge-left", ["undo", "back", "revert", "step"], "It steps back to the dot."],
  ["Unlink2", "unlink-2", "Unlink (bars)", "actions", "shake", ["unlink", "break", "detach", "url"], "The ends pull apart."],
  ["Upload", "upload-tray", "Upload (tray)", "actions", "nudge-up", ["upload", "send", "export", "share"], "The arrow rises."],
  ["UsbCPort", "usb-c-port", "USB-C port", "devices", "pop", ["usb", "port", "charging", "cable"], "The plug clicks in."],
  ["UserRound", "user-round", "Person", "people", "pop", ["user", "person", "account", "profile"], "The person nods."],
  ["UserRoundCheck", "user-round-check", "Person verified", "people", "draw", ["verified", "user", "approved", "person"], "The tick draws in."],
  ["UserRoundCog", "user-round-cog", "Person settings", "people", "spin", ["settings", "user", "account", "person"], "The cog turns."],
  ["UserExclamationPoint", "user-exclamation-point", "User alert", "people", "shake", ["user", "warning", "alert", "issue"], "The mark jumps."],
  ["UserGroup", "user-group", "Group", "people", "pop", ["group", "team", "people", "users"], "They step forward."],
  ["UserRoundMinus", "user-round-minus", "Remove person", "people", "pop", ["remove", "user", "person", "minus"], "The minus draws in."],
  ["UserRoundPlus", "user-round-plus", "Add person", "people", "pop", ["add", "user", "person", "invite"], "The plus draws in."],
  ["UserRoundArrowLeft", "user-round-arrow-left", "Person leaves", "people", "nudge-left", ["leave", "user", "exit", "back"], "The arrow points out."],
  ["UserRoundExclamationPoint", "user-round-exclamation-point", "Person alert", "people", "shake", ["person", "warning", "alert", "issue"], "The mark jumps."],
  ["UserRoundGroup", "user-round-group", "Group of people", "people", "pop", ["group", "team", "people", "community"], "They step forward."],
  ["UserRoundKey", "user-round-key", "Person key", "people", "wiggle", ["access", "key", "user", "password"], "The key turns."],
  ["UserRoundPen", "user-round-pen", "Edit person", "people", "wiggle", ["edit", "profile", "user", "person"], "The pen writes."],
  ["UserRoundSearch", "user-round-search", "Find person", "people", "pop", ["search", "find", "user", "person"], "The lens searches."],
  ["UserRoundShield", "user-round-shield", "Protected person", "people", "pop", ["admin", "secure", "shield", "person"], "The shield lifts."],
  ["UserRoundStar", "user-round-star", "Favourite person", "people", "pop", ["favourite", "star", "vip", "person"], "The star twinkles."],
  ["UserRoundX", "user-round-x", "Remove person (x)", "people", "shake", ["remove", "block", "user", "person"], "The cross draws in."],
  ["UsersCollaboration", "users-collaboration", "Collaboration", "people", "pop", ["team", "collaborate", "together", "people"], "They work together."],
  ["UsersRoundCollaboration", "users-round-collaboration", "Team work", "people", "pop", ["team", "collaborate", "together", "people"], "They work together."],
  ["UtilityPole", "utility-pole", "Utility pole", "travel", "wiggle", ["power", "electric", "pole", "cables"], "The wires sway."],
  ["VectorPolygon", "vector-polygon", "Polygon", "shapes", "pop", ["polygon", "vector", "points", "shape"], "The points pop."],
  ["Venus", "venus", "Female", "people", "pop", ["female", "gender", "woman", "symbol"], "It sways."],
  ["VenusAndMars", "venus-and-mars", "Female and male", "people", "pop", ["gender", "couple", "symbol"], "They sway."],
  ["VibrateOff", "vibrate-off", "Vibrate off", "devices", "shake", ["vibrate", "silent", "off", "phone"], "The slash crosses it out."],
  ["Videotape", "videotape", "Videotape", "media", "spin", ["video", "tape", "vhs", "recording"], "The reels turn."],
  ["VirusOff", "virus-off", "Virus free", "health", "shake", ["virus", "clean", "safe", "germ"], "The slash crosses it out."],
  ["Volleyball", "volleyball", "Volleyball", "health", "spin", ["sport", "ball", "beach", "game"], "It spins."],
  ["Volume", "volume-speaker", "Speaker", "media", "pop", ["volume", "speaker", "sound", "audio"], "It pulses."],
  ["Volume2", "volume-2", "Volume high", "media", "wave", ["volume", "loud", "sound", "audio"], "The waves pulse."],
  ["VolumeOff", "volume-off-slash", "Sound off", "media", "shake", ["mute", "silent", "off", "sound"], "The slash crosses it out."],
  ["WalletMinimal", "wallet-minimal", "Wallet (simple)", "commerce", "bounce", ["wallet", "money", "pay", "purse"], "It opens."],
  ["Wand", "wand-rays", "Wand", "actions", "wiggle", ["magic", "wand", "auto", "effect"], "The wand waves."],
  ["WavesArrowDown", "waves-arrow-down", "Tide down", "weather", "nudge-down", ["tide", "low", "sea", "water"], "The arrow sinks."],
  ["WavesArrowUp", "waves-arrow-up", "Tide up", "weather", "nudge-up", ["tide", "high", "sea", "water"], "The arrow rises."],
  ["WavesLadder", "waves-ladder", "Swimming pool", "travel", "wave", ["pool", "swim", "ladder", "water"], "The water ripples."],
  ["WavesVertical", "waves-vertical", "Vertical waves", "media", "wave", ["waves", "water", "flow", "signal"], "The waves ripple."],
  ["WebcamOff", "webcam-off", "Webcam off", "devices", "shake", ["camera", "off", "privacy", "video"], "The slash crosses it out."],
  ["WebhookOff", "webhook-off", "Webhook off", "development", "shake", ["webhook", "off", "disabled", "api"], "The slash crosses it out."],
  ["WeightTilde", "weight-tilde", "Approximate weight", "health", "bounce", ["weight", "approximate", "mass", "scale"], "It drops."],
  ["WheatOff", "wheat-off", "Gluten free", "food", "shake", ["gluten", "free", "allergy", "grain"], "The slash crosses it out."],
  ["WifiCog", "wifi-cog", "Wi-Fi settings", "devices", "spin", ["wifi", "settings", "network", "config"], "The cog turns."],
  ["WifiHigh", "wifi-high", "Good signal", "status", "wave", ["wifi", "signal", "strong", "network"], "The bars light up."],
  ["WifiLock", "wifi-lock", "Secure Wi-Fi", "devices", "shake", ["wifi", "secure", "password", "network"], "The lock rattles."],
  ["WifiPen", "wifi-pen", "Edit Wi-Fi", "devices", "wiggle", ["wifi", "edit", "network", "rename"], "The pen writes."],
  ["WifiZero", "wifi-zero", "No signal", "status", "pulse", ["wifi", "signal", "none", "weak"], "The dot pulses."],
  ["WindArrowDown", "wind-arrow-down", "Wind dropping", "weather", "nudge-down", ["wind", "calm", "down", "breeze"], "The arrow sinks."],
  ["WindArrowUp", "wind-arrow-up", "Wind rising", "weather", "nudge-up", ["wind", "rising", "up", "gust"], "The arrow rises."],
  ["WineOff", "wine-off", "No alcohol", "food", "shake", ["wine", "alcohol", "sober", "off"], "The slash crosses it out."],
  ["Worm", "worm", "Worm", "nature", "wiggle", ["worm", "bug", "garden", "soil"], "It wriggles."],
  ["WrenchOff", "wrench-off", "No tools", "development", "shake", ["wrench", "off", "disabled", "repair"], "The slash crosses it out."],
  ["X", "x", "X", "actions", "pop", ["close", "cancel", "remove", "x"], "The cross draws in."],
  ["XLineTop", "x-line-top", "X with a bar", "text", "pop", ["x bar", "mean", "statistics", "math"], "The bar slides over."],
  ["ZodiacAquarius", "zodiac-aquarius", "Aquarius", "nature", "wave", ["zodiac", "aquarius", "horoscope", "astrology"], "The waves ripple."],
  ["ZodiacAries", "zodiac-aries", "Aries", "nature", "pop", ["zodiac", "aries", "horoscope", "astrology"], "The horns curl."],
  ["ZodiacCancer", "zodiac-cancer", "Cancer", "nature", "spin", ["zodiac", "cancer", "horoscope", "astrology"], "The halves circle."],
  ["ZodiacCapricorn", "zodiac-capricorn", "Capricorn", "nature", "draw", ["zodiac", "capricorn", "horoscope", "astrology"], "It draws itself."],
  ["ZodiacGemini", "zodiac-gemini", "Gemini", "nature", "pop", ["zodiac", "gemini", "horoscope", "astrology"], "The twins stand up."],
  ["ZodiacLeo", "zodiac-leo", "Leo", "nature", "draw", ["zodiac", "leo", "horoscope", "astrology"], "It draws itself."],
  ["ZodiacLibra", "zodiac-libra", "Libra", "nature", "tilt", ["zodiac", "libra", "horoscope", "astrology"], "It balances."],
  ["ZodiacOphiuchus", "zodiac-ophiuchus", "Ophiuchus", "nature", "wave", ["zodiac", "ophiuchus", "horoscope", "astrology"], "The serpent wriggles."],
  ["ZodiacPisces", "zodiac-pisces", "Pisces", "nature", "wave", ["zodiac", "pisces", "horoscope", "astrology"], "The fish swim apart."],
  ["ZodiacSagittarius", "zodiac-sagittarius", "Sagittarius", "nature", "nudge-right", ["zodiac", "sagittarius", "horoscope", "astrology"], "The arrow flies."],
  ["ZodiacScorpio", "zodiac-scorpio", "Scorpio", "nature", "draw", ["zodiac", "scorpio", "horoscope", "astrology"], "The tail stings."],
  ["ZodiacTaurus", "zodiac-taurus", "Taurus", "nature", "pop", ["zodiac", "taurus", "horoscope", "astrology"], "The horns toss."],
  ["ZodiacVirgo", "zodiac-virgo", "Virgo", "nature", "draw", ["zodiac", "virgo", "horoscope", "astrology"], "It draws itself."],
];


/** no overshoot: draws and every keyframe that carries its own bounce */
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
/** around a point of the 24 grid */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });
/** the same motion for several parts */
const each = (parts: string[], m: object) => Object.fromEntries(parts.map((p) => [p, m]));

// shared keyframe bodies
const SHAKE =
  "0%{transform:none}15%{transform:translateX(-.8px)}30%{transform:translateX(.8px)}45%{transform:translateX(-.6px)}60%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}";
const BOB = "0%{transform:none}35%{transform:translateY(-1.2px)}65%{transform:translateY(.3px)}100%{transform:none}";
const NOD = "0%{transform:none}35%{transform:translateY(.8px)}100%{transform:none}";
const LOOK_UP = "0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}";
const SQUASH = "0%{transform:none}35%{transform:scaleY(.95)}65%{transform:scaleY(1.01)}100%{transform:none}";
const POP_IN = "0%{transform:scale(.3);opacity:0}55%{transform:scale(1.18);opacity:1}100%{transform:none;opacity:1}";
const STAMP = "0%{transform:none}35%{transform:scale(1.05,.92)}100%{transform:none}";
const ARC = "0%{opacity:1}15%{opacity:.2}60%,100%{opacity:1}";
const JUMP = "0%{transform:none}30%{transform:translateY(-1.2px)}60%{transform:translateY(.25px)}100%{transform:none}";
const RIPPLE = "0%{transform:none}30%{transform:translateX(1px)}60%{transform:translateX(-.4px)}100%{transform:none}";
const SCRIBBLE =
  "0%{transform:none}20%{transform:translate(-.6px,.3px) rotate(-6deg)}40%{transform:translate(.6px,-.3px) rotate(4deg)}60%{transform:translate(-.4px,.2px) rotate(-3deg)}80%{transform:rotate(1deg)}100%{transform:none}";
const SHACKLE = "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}75%{transform:none}100%{transform:none}";
const RATTLE = "0%,30%{transform:none}45%{transform:rotate(-7deg)}62%{transform:rotate(5deg)}80%{transform:rotate(-2deg)}100%{transform:none}";
const SLIDE_IN = "0%{transform:translateX(-2px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}";

/**
 * A "…-off" icon: the slash draws itself across, then the rest gives a small shake (the slash itself stays put).
 */
const slashOff = (icon: string, slash: string, rest: string[], note: string): Override => ({
  note,
  draw: [slash],
  motion: {
    [slash]: drawIn(icon, 420),
    ...each(rest, { animation: an(icon, "shake", 600, 200) }),
  },
  keyframes: drawKf(icon) + kf(icon, "shake", SHAKE),
});

/** the round person's shoulders, which the source breaks off before the badge: cut across the gap, straight or (given a
 * radius) by an arc round the badge */
const ROUND_SHOULDERS = (end: string, cut: string, r?: number) =>
  `M2 21a8 8 0 0 1 ${end}${r ? `A${r} ${r} 0 0 0 ` : "L"}${cut} 21Z`;
/** a phone, a can, a speaker… the shapes the source breaks for a slash */
const SPEAKER =
  "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z";
const CAN = "M5 6h14v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z";

export const fills: Record<string, string> = {
  // the stone's arch, open at the ground
  tombstone: "M5 21V10a7 7 0 0 1 14 0v11Z",
  // the pad, broken for the slash
  "touchpad-off": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  // the box, open at the bottom where the wheel sits
  trailer: "M4 6h12a2 2 0 0 1 2 2v9H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
  "trash-2": CAN,
  "trash-off": CAN,
  // the cap under the tube
  "tube-lotion": "M9 18h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z",
  // the canopy, broken for the slash
  "umbrella-off": "M3 13h17.992a1 1 0 0 0 .97-1.274A10.284 10.284 0 0 0 2.039 11.726A1 1 0 0 0 3 13Z",
  "user-round": "M4 21a8 8 0 0 1 16 0Z",
  "user-round-check": ROUND_SHOULDERS("13.292-6", "13", 7),
  "user-round-plus": ROUND_SHOULDERS("13.292-6", "13", 7),
  "user-round-minus": ROUND_SHOULDERS("13.292-6", "13", 7),
  "user-round-x": ROUND_SHOULDERS("11.531-7.18", "13.5"),
  "user-round-cog": ROUND_SHOULDERS("10.434-7.62", "11.5", 11),
  "user-round-search": ROUND_SHOULDERS("10.434-7.62", "12.5"),
  "user-round-key": ROUND_SHOULDERS("12.868-6.349", "15"),
  "user-round-pen": ROUND_SHOULDERS("10.821-7.487", "11.5"),
  "user-round-arrow-left": ROUND_SHOULDERS("12.664-6.5", "13.5", 6),
  "user-round-exclamation-point": "M4 21a8 8 0 0 1 11.99-6.934L17 21Z",
  "user-exclamation-point": "M5 21v-2a4 4 0 0 1 4-4h6L16 21Z",
  // one stroke draws head and shoulders, open where the shield sits
  "user-round-shield": "M2 21a8 8 0 0 1 8-8L11.5 21Z M10 13a5 5 0 1 1 4.845-3.759Z",
  // head and shoulders, both open where the star sits
  "user-round-star": "M2 21a8 8 0 0 1 6.778-7.905L9.5 21Z M8.927 12.885a5 5 0 1 1 6.061-4.535Z",
  "user-group": "M7 21v-1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1Z",
  "user-round-group": "M7 21a5 5 0 0 1 10 0Z",
  // the phone, broken for the slash
  "vibrate-off": "M9 5h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  // the virus body, broken for the slash
  "virus-off": "M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z",
  "volume-off-slash": SPEAKER,
  // the wallet with its back flap
  "wallet-minimal": "M5 3h14v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z",
  // the camera ball, broken for the slash
  "webcam-off": "M4 10a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z",
  // the bowl, broken for the slash
  "wine-off": "M9 2h6c1.5 4 2 6 2 8a5 5 0 0 1-10 0c0-2 .5-4 2-8Z",
  // the original's whole wrench, broken for the slash
  "wrench-off":
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
};

export const motions: Record<string, Override> = {
  "ticket-slash": {
    note: "The ticket squashes as if punched and the slash cuts across it.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 50%", animation: an("ticket-slash", "stamp", 500) },
      p1: drawIn("ticket-slash", 420, 140),
    },
    keyframes: drawKf("ticket-slash") + kf("ticket-slash", "stamp", STAMP),
  },

  "ticket-x": {
    note: "The ticket squashes as if stamped and the cross strikes in, one stroke then the other.",
    draw: ["p1", "p2"],
    motion: {
      p0: { origin: "50% 50%", animation: an("ticket-x", "stamp", 500) },
      p1: drawIn("ticket-x", 280, 100),
      p2: drawIn("ticket-x", 280, 260),
    },
    keyframes: drawKf("ticket-x") + kf("ticket-x", "stamp", STAMP),
  },

  "tic-tac-toe": {
    note: "The game is played: a cross, a nought, a cross, a nought, each drawn in turn.",
    draw: ["p4", "p5", "p1", "p2"],
    motion: {
      p4: drawIn("tic-tac-toe", 170, 0),
      p5: drawIn("tic-tac-toe", 170, 110),
      p6: { origin: "50% 50%", animation: an("tic-tac-toe", "pop", 380, 220, "backwards") },
      p1: drawIn("tic-tac-toe", 170, 380),
      p2: drawIn("tic-tac-toe", 170, 490),
      p7: { origin: "50% 50%", animation: an("tic-tac-toe", "pop", 380, 600, "backwards") },
    },
    keyframes: drawKf("tic-tac-toe") + kf("tic-tac-toe", "pop", POP_IN),
  },

  tombstone: {
    note: "The stone rocks on the ground and settles back, its lines going with it.",
    motion: each(["p1", "p0", "p3"], { ...at(12, 21), animation: an("tombstone", "rock", 750) }),
    keyframes: kf("tombstone", "rock", "0%{transform:none}25%{transform:rotate(-4deg)}50%{transform:rotate(2.5deg)}75%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "tool-case": {
    note: "The case is lifted and set down, and the tools inside jump and settle.",
    motion: {
      ...each(["p3", "p0"], { animation: an("tool-case", "case", 650) }),
      p1: { animation: an("tool-case", "tool", 650, 60) },
      p2: { animation: an("tool-case", "tool", 650, 100) },
    },
    keyframes:
      kf("tool-case", "case", "0%{transform:none}30%{transform:translateY(-1px)}55%{transform:translateY(.3px)}100%{transform:none}") +
      kf("tool-case", "tool", "0%{transform:none}35%{transform:translateY(-1.6px) rotate(-4deg)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  toothbrush: {
    note: "The brush scrubs up and down along its handle, its head rocking on the neck.",
    motion: {
      p0: { animation: an("toothbrush", "scrub", 700) },
      p1: { ...at(14.6, 11.4), animation: an("toothbrush", "head", 700) },
    },
    keyframes:
      kf("toothbrush", "scrub", "0%{transform:none}20%{transform:translate(.8px,-.8px)}40%{transform:translate(-.6px,.6px)}60%{transform:translate(.5px,-.5px)}80%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      kf("toothbrush", "head", "0%{transform:none}20%{transform:translate(.8px,-.8px) rotate(-5deg)}40%{transform:translate(-.6px,.6px) rotate(4deg)}60%{transform:translate(.5px,-.5px) rotate(-3deg)}80%{transform:translate(-.2px,.2px)}100%{transform:none}"),
  },

  "toothbrush-sparkles": {
    note: "The brush scrubs along its handle and the sparkles twinkle one after another.",
    motion: {
      ...each(["p1", "p2", "p3"], { animation: an("toothbrush-sparkles", "scrub", 700) }),
      ...each(["p6", "p7"], { ...at(4, 7), animation: an("toothbrush-sparkles", "twinkle", 500, 120, "backwards") }),
      ...each(["p0", "p8"], { ...at(9, 3), animation: an("toothbrush-sparkles", "twinkle", 500, 220, "backwards") }),
      ...each(["p4", "p5"], { ...at(20, 17), animation: an("toothbrush-sparkles", "twinkle", 500, 320, "backwards") }),
    },
    keyframes:
      kf("toothbrush-sparkles", "scrub", "0%{transform:none}20%{transform:translate(.8px,-.8px)}40%{transform:translate(-.6px,.6px)}60%{transform:translate(.5px,-.5px)}80%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      kf("toothbrush-sparkles", "twinkle", "0%{transform:scale(.2) rotate(-45deg);opacity:0}55%{transform:scale(1.3);opacity:1}100%{transform:none;opacity:1}"),
  },

  torus: {
    note: "The ring tips towards you and back, its hole sliding and flattening as it turns.",
    motion: {
      p1: { origin: "50% 50%", animation: an("torus", "ring", 750) },
      p0: { origin: "50% 50%", animation: an("torus", "hole", 750) },
    },
    keyframes:
      kf("torus", "ring", "0%{transform:none}40%{transform:scaleY(.8)}75%{transform:scaleY(1.03)}100%{transform:none}") +
      kf("torus", "hole", "0%{transform:none}40%{transform:translateY(-.8px) scale(1.15,.45)}75%{transform:scaleY(1.06)}100%{transform:none}"),
  },

  "touchpad-off": slashOff("touchpad-off", "p3", ["p4", "p5", "p0", "p1", "p2"], "The slash draws itself across the pad, which gives a small shake."),

  trailer: {
    note: "The trailer rocks on its wheel as if towed over a bump, the wheel bouncing under it.",
    motion: {
      ...each(["p2", "p0", "p4", "p1", "p3"], { ...at(8, 17), animation: an("trailer", "rock", 750) }),
      p5: { animation: an("trailer", "wheel", 750) },
    },
    keyframes:
      kf("trailer", "rock", "0%{transform:none}25%{transform:translateY(-.6px) rotate(-3deg)}50%{transform:rotate(2deg)}75%{transform:rotate(-.8deg)}100%{transform:none}") +
      kf("trailer", "wheel", "0%{transform:none}25%{transform:translateY(-.4px)}50%{transform:translateY(.15px)}100%{transform:none}"),
  },

  "train-front": {
    note: "The carriage rocks on its wheels above the rails.",
    motion: each(["p3", "p0", "p1", "p2"], { ...at(12, 19), animation: an("train-front", "rock", 800) }),
    keyframes: kf("train-front", "rock", "0%{transform:none}20%{transform:rotate(-3deg)}45%{transform:rotate(3deg)}70%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "train-front-tunnel": {
    note: "The train draws back into the tunnel and rolls out towards you on its rails.",
    motion: each(["p4", "p1", "p2", "p3"], { ...at(12, 19), animation: an("train-front-tunnel", "come", 750) }),
    keyframes: kf("train-front-tunnel", "come", "0%{transform:none}25%{transform:scale(.9)}60%{transform:scale(1.06)}100%{transform:none}"),
  },

  transgender: {
    note: "The three arms reach out from the ring one after another while the ring gives.",
    motion: {
      p7: { origin: "50% 50%", animation: an("transgender", "ring", 650) },
      ...each(["p2", "p5"], { animation: an("transgender", "ne", 600) }),
      ...each(["p3", "p4", "p6"], { animation: an("transgender", "nw", 600, 80) }),
      ...each(["p0", "p1"], { animation: an("transgender", "s", 600, 160) }),
    },
    keyframes:
      kf("transgender", "ring", "0%{transform:none}35%{transform:scale(.92)}70%{transform:scale(1.03)}100%{transform:none}") +
      kf("transgender", "ne", "0%{transform:none}35%{transform:translate(.9px,-.9px)}70%{transform:translate(-.15px,.15px)}100%{transform:none}") +
      kf("transgender", "nw", "0%{transform:none}35%{transform:translate(-.9px,-.9px)}70%{transform:translate(.15px,.15px)}100%{transform:none}") +
      kf("transgender", "s", "0%{transform:none}35%{transform:translateY(1px)}70%{transform:translateY(-.15px)}100%{transform:none}"),
  },

  "trash-2": {
    note: "The lid and its handle lift and tip from the right while the can settles.",
    motion: {
      ...each(["p3", "p4"], { ...at(21, 6), to: { transform: "translateY(-1.6px) rotate(12deg)" } }),
      ...each(["p2", "p0", "p1"], { ...at(12, 22), to: { transform: "scaleY(.97)" }, delay: 40 }),
    },
  },

  "trash-off": slashOff("trash-off", "p4", ["p0", "p1", "p2", "p3", "p5", "p6", "p7"], "The slash draws itself across the can, which gives a small shake."),

  "trending-up-down": {
    note: "The zigzag draws itself up to its arrowhead while the other line draws down to its own.",
    draw: ["p2", "p3", "p0", "p1"],
    motion: {
      p2: drawIn("trending-up-down", 460, 0),
      p3: drawIn("trending-up-down", 240, 340),
      p0: drawIn("trending-up-down", 300, 160),
      p1: drawIn("trending-up-down", 240, 400),
    },
    keyframes: drawKf("trending-up-down"),
  },

  "triangle-dashed": {
    note: "The dashes fade and come back one after another, running round the triangle.",
    motion: {
      p0: { animation: an("triangle-dashed", "dash", 450, 0) },
      p2: { animation: an("triangle-dashed", "dash", 450, 50) },
      p3: { animation: an("triangle-dashed", "dash", 450, 100) },
      p4: { animation: an("triangle-dashed", "dash", 450, 150) },
      p1: { animation: an("triangle-dashed", "dash", 450, 200) },
      p7: { animation: an("triangle-dashed", "dash", 450, 250) },
      p5: { animation: an("triangle-dashed", "dash", 450, 300) },
      p6: { animation: an("triangle-dashed", "dash", 450, 350) },
      p8: { animation: an("triangle-dashed", "dash", 450, 400) },
    },
    keyframes: kf("triangle-dashed", "dash", ARC),
  },

  "triangle-right": {
    note: "The triangle shrinks into its right-angled corner and springs back out.",
    motion: { p0: { ...at(22, 20), animation: an("triangle-right", "grow", 650) } },
    keyframes: kf("triangle-right", "grow", "0%{transform:none}35%{transform:scale(.86)}70%{transform:scale(1.04)}100%{transform:none}"),
  },

  "truck-electric": {
    note: "The truck bumps forward on its wheels and the bolt on its side flickers with charge.",
    motion: {
      ...each(["p0", "p1", "p3"], { animation: an("truck-electric", "bump", 700) }),
      p2: { animation: an("truck-electric", "bump", 700, 40) },
      p4: { animation: `${an("truck-electric", "bump", 700)}, ki-truck-electric-charge .6s linear 100ms` },
    },
    keyframes:
      kf("truck-electric", "bump", "0%{transform:none}25%{transform:translate(.6px,-.8px)}50%{transform:translateY(.2px)}75%{transform:translateY(-.4px)}100%{transform:none}") +
      kf("truck-electric", "charge", "0%,100%{opacity:1}20%{opacity:.2}40%{opacity:1}60%{opacity:.3}80%{opacity:1}"),
  },

  "tube-lotion": {
    note: "The tube is squeezed in the middle and its cap pushes down as the lotion comes out.",
    motion: {
      ...each(["p1", "p2"], { ...at(12, 10), animation: an("tube-lotion", "squeeze", 650) }),
      p0: { animation: an("tube-lotion", "cap", 650) },
    },
    keyframes:
      kf("tube-lotion", "squeeze", "0%{transform:none}30%{transform:scale(.88,1.03)}60%{transform:scale(1.03,.99)}100%{transform:none}") +
      kf("tube-lotion", "cap", "0%{transform:none}30%{transform:translateY(.7px)}60%{transform:translateY(-.1px)}100%{transform:none}"),
  },

  "turkish-lira": {
    note: "The stem and its curve draw themselves and the two bars slide in across the stem.",
    draw: ["p2"],
    motion: {
      p2: drawIn("turkish-lira", 500),
      p1: { animation: an("turkish-lira", "bar", 450, 200, "backwards") },
      p0: { animation: an("turkish-lira", "bar", 450, 280, "backwards") },
    },
    keyframes: drawKf("turkish-lira") + kf("turkish-lira", "bar", SLIDE_IN),
  },

  "tv-minimal": {
    note: "The screen flickers on with a small jolt while the stand stays put.",
    motion: {
      p1: { origin: "50% 50%", animation: `ki-tv-minimal-on .5s linear, ${an("tv-minimal", "jolt", 500)}` },
      p0: { origin: "50% 50%", animation: an("tv-minimal", "stand", 500, 60) },
    },
    keyframes:
      kf("tv-minimal", "on", "0%{opacity:1}12%{opacity:.35}26%{opacity:1}40%{opacity:.6}55%,100%{opacity:1}") +
      kf("tv-minimal", "jolt", "0%{transform:none}20%{transform:scale(1.04,.97)}45%{transform:none}100%{transform:none}") +
      kf("tv-minimal", "stand", "0%{transform:none}30%{transform:scaleX(.8)}60%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  "type-outline": {
    note: "The outlined letter traces itself all the way round.",
    draw: ["p0"],
    motion: { p0: drawIn("type-outline", 800) },
    keyframes: drawKf("type-outline"),
  },

  "umbrella-off": slashOff("umbrella-off", "p3", ["p0", "p1", "p2", "p4"], "The slash draws itself across the umbrella, which gives a small shake."),

  "undo-arrow": {
    note: "The curve draws itself back to the left and the arrowhead lands at its end.",
    draw: ["p1"],
    motion: {
      p1: drawIn("undo-arrow", 450),
      p0: { ...at(3, 13), animation: an("undo-arrow", "head", 420, 300, "backwards") },
    },
    keyframes: drawKf("undo-arrow") + kf("undo-arrow", "head", POP_IN),
  },

  "undo-dot": {
    note: "The dot pops, the curve draws itself back from it and the arrowhead lands at its end.",
    draw: ["p0"],
    motion: {
      p2: { origin: "50% 50%", animation: an("undo-dot", "pop", 380, 0, "backwards") },
      p0: drawIn("undo-dot", 450, 100),
      p1: { ...at(3, 13), animation: an("undo-dot", "pop", 420, 400, "backwards") },
    },
    keyframes: drawKf("undo-dot") + kf("undo-dot", "pop", POP_IN),
  },

  "unlink-2": {
    note: "The two halves of the link pull apart and come back together.",
    motion: { p0: { animation: an("unlink-2", "apart", 650) } },
    keyframes: kf(
      "unlink-2",
      "apart",
      `0%,100%{d:path("M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2")}35%{d:path("M16.2 7h2a5 5 0 0 1 0 10h-2m-8.4 0H5.8A5 5 0 0 1 5.8 7h2")}65%{d:path("M14.8 7h2a5 5 0 0 1 0 10h-2m-5.6 0H7.2A5 5 0 0 1 7.2 7h2")}`,
    ),
  },

  "upload-tray": {
    note: "The arrow rises out of the top and comes back up from the tray, which gives as it leaves.",
    motion: {
      ...each(["p0", "p1"], { animation: an("upload-tray", "rise", 700) }),
      p2: { origin: "50% 100%", animation: an("upload-tray", "tray", 600) },
    },
    keyframes:
      kf("upload-tray", "rise", "0%{transform:none;opacity:1}35%{transform:translateY(-2.5px);opacity:0}36%{transform:translateY(4px);opacity:0}100%{transform:none;opacity:1}") +
      kf("upload-tray", "tray", "0%{transform:none}25%{transform:scaleY(.8)}55%{transform:scaleY(1.05)}100%{transform:none}"),
  },

  "usb-c-port": {
    note: "The tongue inside the port is pushed in and the port takes the knock.",
    motion: {
      p0: { origin: "50% 50%", animation: an("usb-c-port", "tongue", 550) },
      p1: { origin: "50% 50%", animation: an("usb-c-port", "port", 550, 60) },
    },
    keyframes:
      kf("usb-c-port", "tongue", "0%{transform:none}35%{transform:scaleX(.7)}65%{transform:scaleX(1.05)}100%{transform:none}") +
      kf("usb-c-port", "port", "0%{transform:none}35%{transform:scale(1.04,.92)}70%{transform:scale(.99,1.02)}100%{transform:none}"),
  },

  "user-round": {
    note: "The head bobs and the shoulders give under it.",
    motion: {
      p0: { animation: an("user-round", "head", 600) },
      p1: { origin: "50% 100%", animation: an("user-round", "body", 600) },
    },
    keyframes: kf("user-round", "head", BOB) + kf("user-round", "body", SQUASH),
  },

  "user-round-check": {
    note: "The person nods and the tick draws itself beside them.",
    draw: ["p2"],
    motion: {
      p1: { animation: an("user-round-check", "nod", 500) },
      p2: drawIn("user-round-check", 420, 100),
    },
    keyframes: drawKf("user-round-check") + kf("user-round-check", "nod", NOD),
  },

  "user-round-cog": {
    note: "The cog turns beside the person.",
    motion: each(["p0", "p1", "p2", "p3", "p4", "p5", "p7", "p8", "p10"], { ...at(18, 18), to: { transform: "rotate(90deg)" }, ease: "smooth" }),
  },

  "user-exclamation-point": {
    note: "The exclamation mark jumps up, its dot following, and the person flinches.",
    motion: {
      p1: { animation: an("user-exclamation-point", "jump", 600) },
      p2: { animation: an("user-exclamation-point", "jump", 600, 60) },
      p3: { animation: an("user-exclamation-point", "shake", 600, 80) },
    },
    keyframes: kf("user-exclamation-point", "jump", JUMP) + kf("user-exclamation-point", "shake", SHAKE),
  },

  "user-group": {
    note: "The three people bob up one after another, the one in front first.",
    motion: {
      ...each(["p3", "p0"], { animation: an("user-group", "bob", 600) }),
      ...each(["p5", "p2"], { animation: an("user-group", "bob", 600, 90) }),
      ...each(["p4", "p1"], { animation: an("user-group", "bob", 600, 180) }),
    },
    keyframes: kf("user-group", "bob", BOB),
  },

  "user-round-minus": {
    note: "The minus slides away and back while the person shakes their head.",
    motion: {
      p2: { animation: an("user-round-minus", "minus", 600) },
      p1: { animation: an("user-round-minus", "shake", 600, 60) },
    },
    keyframes:
      kf("user-round-minus", "minus", "0%{transform:none;opacity:1}35%{transform:translateX(2px);opacity:0}36%{transform:translateX(-1px);opacity:0}100%{transform:none;opacity:1}") +
      kf("user-round-minus", "shake", SHAKE),
  },

  "user-round-plus": {
    note: "The plus draws itself in, one stroke then the other, as the person looks up.",
    draw: ["p2", "p3"],
    motion: {
      p2: drawIn("user-round-plus", 280, 0),
      p3: drawIn("user-round-plus", 280, 150),
      p1: { animation: an("user-round-plus", "head", 600, 60) },
    },
    keyframes: drawKf("user-round-plus") + kf("user-round-plus", "head", LOOK_UP),
  },

  "user-round-arrow-left": {
    note: "The arrow slides out to the left and back while the person looks the same way.",
    motion: {
      ...each(["p2", "p0"], { animation: an("user-round-arrow-left", "arrow", 650) }),
      p3: { animation: an("user-round-arrow-left", "look", 650) },
    },
    keyframes:
      kf("user-round-arrow-left", "arrow", "0%{transform:none}35%{transform:translateX(-1.5px)}65%{transform:translateX(.3px)}100%{transform:none}") +
      kf("user-round-arrow-left", "look", "0%{transform:none}35%{transform:translateX(-.6px)}100%{transform:none}"),
  },

  "user-round-exclamation-point": {
    note: "The exclamation mark jumps up, its dot following, and the person flinches.",
    motion: {
      p0: { animation: an("user-round-exclamation-point", "jump", 600) },
      p1: { animation: an("user-round-exclamation-point", "jump", 600, 60) },
      p3: { animation: an("user-round-exclamation-point", "shake", 600, 80) },
    },
    keyframes: kf("user-round-exclamation-point", "jump", JUMP) + kf("user-round-exclamation-point", "shake", SHAKE),
  },

  "user-round-group": {
    note: "The three people bob up one after another, the one in front first.",
    motion: {
      ...each(["p3", "p0"], { animation: an("user-round-group", "bob", 600) }),
      ...each(["p5", "p2"], { animation: an("user-round-group", "bob", 600, 90) }),
      ...each(["p4", "p1"], { animation: an("user-round-group", "bob", 600, 180) }),
    },
    keyframes: kf("user-round-group", "bob", BOB),
  },

  "user-round-key": {
    note: "The key turns round on its shaft and back while the person looks up.",
    motion: {
      ...each(["p0", "p1", "p4"], { ...at(19, 0), animation: an("user-round-key", "turn", 750) }),
      p3: { animation: an("user-round-key", "head", 600, 100) },
    },
    keyframes:
      kf("user-round-key", "turn", "0%{transform:none}45%{transform:scaleX(-1)}100%{transform:none}") + kf("user-round-key", "head", LOOK_UP),
  },

  "user-round-pen": {
    note: "The pen scribbles from its nib beside the person, who tilts their head.",
    motion: {
      p1: { ...at(13.5, 20.5), animation: an("user-round-pen", "pen", 700) },
      p2: { origin: "50% 100%", animation: an("user-round-pen", "head", 600) },
    },
    keyframes: kf("user-round-pen", "pen", SCRIBBLE) + kf("user-round-pen", "head", "0%{transform:none}35%{transform:rotate(-8deg)}100%{transform:none}"),
  },

  "user-round-search": {
    note: "The lens circles beside the person, looking for someone.",
    motion: {
      ...each(["p2", "p3"], { animation: an("user-round-search", "lens", 800) }),
      p0: { animation: an("user-round-search", "head", 800) },
    },
    keyframes:
      kf("user-round-search", "lens", "0%{transform:none}25%{transform:translate(-1px,-1px)}50%{transform:translate(0,-1.8px)}75%{transform:translate(1px,-.6px)}100%{transform:none}") +
      kf("user-round-search", "head", "0%{transform:none}30%{transform:translateX(-.5px)}70%{transform:translateX(.4px)}100%{transform:none}"),
  },

  "user-round-shield": {
    note: "The shield rises in front of the person, who leans back behind it.",
    motion: {
      p1: { origin: "50% 100%", to: { transform: "translateY(-1px) scale(1.06)" } },
      p0: { to: { transform: "translateX(-.5px)" }, delay: 40 },
    },
  },

  "user-round-star": {
    note: "The star spins round and lands with a pop as the person looks up.",
    motion: {
      p0: { origin: "50% 55%", animation: an("user-round-star", "spin", 750) },
      ...each(["p1", "p2"], { animation: an("user-round-star", "person", 600, 100) }),
    },
    keyframes:
      kf("user-round-star", "spin", "0%{transform:none}60%{transform:rotate(144deg) scale(1.15)}100%{transform:rotate(144deg)}") +
      kf("user-round-star", "person", "0%{transform:none}40%{transform:translateY(-.6px)}100%{transform:none}"),
  },

  "user-round-x": {
    note: "The cross strikes in, one stroke then the other, as the person shakes their head.",
    draw: ["p0", "p2"],
    motion: {
      p0: drawIn("user-round-x", 280, 0),
      p2: drawIn("user-round-x", 280, 160),
      p3: { animation: an("user-round-x", "shake", 600, 60) },
    },
    keyframes: drawKf("user-round-x") + kf("user-round-x", "shake", SHAKE),
  },

  "users-collaboration": {
    note: "The arrows draw themselves round between the two people, who nod in turn.",
    draw: ["p0", "p3"],
    motion: {
      p0: drawIn("users-collaboration", 420, 0),
      p3: drawIn("users-collaboration", 420, 220),
      ...each(["p5", "p2"], { animation: an("users-collaboration", "nod", 500, 80) }),
      ...each(["p4", "p1"], { animation: an("users-collaboration", "nod", 500, 300) }),
    },
    keyframes: drawKf("users-collaboration") + kf("users-collaboration", "nod", "0%{transform:none}35%{transform:translateY(-.9px)}70%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "users-round-collaboration": {
    note: "The arrows draw themselves round between the two people, who nod in turn.",
    draw: ["p0", "p3"],
    motion: {
      p0: drawIn("users-round-collaboration", 420, 0),
      p3: drawIn("users-round-collaboration", 420, 220),
      ...each(["p5", "p2"], { animation: an("users-round-collaboration", "nod", 500, 80) }),
      ...each(["p4", "p1"], { animation: an("users-round-collaboration", "nod", 500, 300) }),
    },
    keyframes:
      drawKf("users-round-collaboration") +
      kf("users-round-collaboration", "nod", "0%{transform:none}35%{transform:translateY(-.9px)}70%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "utility-pole": {
    note: "The pole sways from its foot and the insulators on the crossarm hop as it swings.",
    motion: {
      ...each(["p0", "p1", "p6"], { ...at(12, 22), animation: an("utility-pole", "sway", 800) }),
      ...each(["p2", "p3", "p4", "p5"], { ...at(12, 22), animation: an("utility-pole", "hop", 800) }),
    },
    keyframes:
      kf("utility-pole", "sway", "0%{transform:none}30%{transform:rotate(-2.5deg)}60%{transform:rotate(1.5deg)}85%{transform:rotate(-.5deg)}100%{transform:none}") +
      kf("utility-pole", "hop", "0%{transform:none}30%{transform:rotate(-2.5deg) translateY(-.7px)}60%{transform:rotate(1.5deg) translateY(.1px)}85%{transform:rotate(-.5deg)}100%{transform:none}"),
  },

  "vector-polygon": {
    note: "The points pop in turn round the shape and the edges draw themselves between them.",
    draw: ["p0", "p1", "p2", "p3"],
    motion: {
      p4: { origin: "50% 50%", animation: an("vector-polygon", "pop", 400, 0, "backwards") },
      p0: drawIn("vector-polygon", 220, 120),
      p6: { origin: "50% 50%", animation: an("vector-polygon", "pop", 400, 200, "backwards") },
      p1: drawIn("vector-polygon", 220, 320),
      p5: { origin: "50% 50%", animation: an("vector-polygon", "pop", 400, 400, "backwards") },
      p2: drawIn("vector-polygon", 220, 520),
      p7: { origin: "50% 50%", animation: an("vector-polygon", "pop", 400, 600, "backwards") },
      p3: drawIn("vector-polygon", 220, 720),
    },
    keyframes: drawKf("vector-polygon") + kf("vector-polygon", "pop", POP_IN),
  },

  venus: {
    note: "The cross swings like a pendant from the ring, which bobs as it swings.",
    motion: {
      ...each(["p0", "p1"], { ...at(12, 15), animation: an("venus", "swing", 800) }),
      p2: { animation: an("venus", "ring", 800) },
    },
    keyframes:
      kf("venus", "swing", "0%{transform:none}25%{transform:rotate(12deg)}50%{transform:rotate(-8deg)}75%{transform:rotate(3deg)}100%{transform:none}") +
      kf("venus", "ring", "0%{transform:none}25%{transform:translateY(-.5px)}55%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "venus-and-mars": {
    note: "The arrow pushes out from the ring while the cross below swings like a pendant.",
    motion: {
      ...each(["p2", "p3"], { animation: an("venus-and-mars", "arrow", 600) }),
      ...each(["p0", "p1"], { ...at(12, 16), animation: an("venus-and-mars", "swing", 800, 60) }),
      p4: { origin: "50% 50%", animation: an("venus-and-mars", "ring", 600) },
    },
    keyframes:
      kf("venus-and-mars", "arrow", "0%{transform:none}35%{transform:translate(1px,-1px)}70%{transform:translate(-.15px,.15px)}100%{transform:none}") +
      kf("venus-and-mars", "swing", "0%{transform:none}25%{transform:rotate(10deg)}50%{transform:rotate(-7deg)}75%{transform:rotate(2.5deg)}100%{transform:none}") +
      kf("venus-and-mars", "ring", "0%{transform:none}35%{transform:scale(.94)}70%{transform:scale(1.02)}100%{transform:none}"),
  },

  "vibrate-off": {
    note: "The slash draws itself across, the phone buzzes once more and its waves pulse out.",
    draw: ["p4"],
    motion: {
      p4: drawIn("vibrate-off", 420),
      ...each(["p2", "p3"], { ...at(12, 12), animation: an("vibrate-off", "buzz", 600, 200) }),
      p0: { animation: an("vibrate-off", "left", 600, 200) },
      p1: { animation: an("vibrate-off", "right", 600, 200) },
    },
    keyframes:
      drawKf("vibrate-off") +
      kf("vibrate-off", "buzz", "0%{transform:none}12%{transform:translateX(-.8px) rotate(-4deg)}25%{transform:translateX(.8px) rotate(4deg)}37%{transform:translateX(-.7px) rotate(-3deg)}50%{transform:translateX(.6px) rotate(3deg)}62%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("vibrate-off", "left", "0%{transform:none}30%{transform:translateX(-.8px)}60%,100%{transform:none}") +
      kf("vibrate-off", "right", "0%{transform:none}30%{transform:translateX(.8px)}60%,100%{transform:none}"),
  },

  videotape: {
    note: "The tape pulls tight between the two reels, which squeeze in turn as it winds.",
    motion: {
      p3: { origin: "50% 50%", animation: an("videotape", "tape", 700) },
      p2: { origin: "50% 50%", animation: an("videotape", "reel", 600, 0) },
      p4: { origin: "50% 50%", animation: an("videotape", "reel", 600, 120) },
    },
    keyframes:
      kf("videotape", "tape", "0%{transform:none}30%{transform:scaleX(.8)}60%{transform:scaleX(1.06)}100%{transform:none}") +
      kf("videotape", "reel", "0%{transform:none}35%{transform:scale(.8)}70%{transform:scale(1.08)}100%{transform:none}"),
  },

  "virus-off": slashOff(
    "virus-off",
    "p12",
    ["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p13", "p14", "p15", "p16", "p17", "p18", "p19"],
    "The slash draws itself across the virus, which gives a small shake.",
  ),

  volleyball: {
    note: "The seams turn inside the ball as it spins, and the ball gives a little.",
    motion: {
      ...each(["p0", "p1", "p2", "p3", "p4"], { ...at(12, 12), to: { transform: "rotate(-90deg)" }, ease: "smooth", duration: 650 }),
      p5: { origin: "50% 50%", animation: an("volleyball", "ball", 600) },
    },
    keyframes: kf("volleyball", "ball", "0%{transform:none}35%{transform:scale(1.05,.95)}70%{transform:scale(.99,1.01)}100%{transform:none}"),
  },

  "volume-speaker": {
    note: "The speaker thumps out from its back and settles.",
    motion: { p0: { ...at(2, 12), animation: an("volume-speaker", "thump", 550) } },
    keyframes: kf("volume-speaker", "thump", "0%{transform:none}30%{transform:scale(1.1)}60%{transform:scale(.97)}100%{transform:none}"),
  },

  "volume-2": {
    note: "The speaker thumps and the two waves pulse out after it, one then the other.",
    motion: {
      p0: { ...at(2, 12), animation: an("volume-2", "thump", 550) },
      p1: { animation: an("volume-2", "wave", 600, 60) },
      p2: { animation: an("volume-2", "wave", 600, 150) },
    },
    keyframes:
      kf("volume-2", "thump", "0%{transform:none}30%{transform:scale(1.08)}60%{transform:scale(.98)}100%{transform:none}") +
      kf("volume-2", "wave", "0%{transform:none;opacity:1}35%{transform:translateX(1px);opacity:.3}100%{transform:none;opacity:1}"),
  },

  "volume-off-slash": slashOff("volume-off-slash", "p2", ["p0", "p1", "p3", "p4"], "The slash draws itself across the speaker, which gives a small shake."),

  "wallet-minimal": {
    note: "The wallet gives as the coin on its clasp pops up and drops back.",
    motion: {
      p1: { origin: "50% 100%", animation: an("wallet-minimal", "body", 650) },
      p0: { animation: an("wallet-minimal", "coin", 650, 60) },
    },
    keyframes:
      kf("wallet-minimal", "body", "0%{transform:none}30%{transform:scale(1.02,.96)}60%{transform:scale(.99,1.01)}100%{transform:none}") +
      kf("wallet-minimal", "coin", "0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "wand-rays": {
    note: "The wand flicks from its handle and the rays burst out round its tip.",
    motion: {
      p7: { ...at(3, 21), animation: an("wand-rays", "flick", 700) },
      ...each(["p0", "p1", "p2", "p3", "p4", "p6", "p8"], { ...at(15, 9), animation: an("wand-rays", "burst", 600, 120) }),
      p5: { origin: "50% 50%", animation: an("wand-rays", "spark", 500, 100) },
    },
    keyframes:
      kf("wand-rays", "flick", "0%{transform:none}25%{transform:rotate(-8deg)}55%{transform:rotate(5deg)}80%{transform:rotate(-1.5deg)}100%{transform:none}") +
      kf("wand-rays", "burst", "0%{transform:none;opacity:1}35%{transform:scale(1.25);opacity:.5}100%{transform:none;opacity:1}") +
      kf("wand-rays", "spark", "0%{transform:none}35%{transform:scale(2.2)}100%{transform:none}"),
  },

  "waves-arrow-down": {
    note: "The arrow sinks towards the water and the waves roll under it, one after the other.",
    motion: {
      ...each(["p0", "p1"], { animation: an("waves-arrow-down", "sink", 650) }),
      p2: { animation: an("waves-arrow-down", "ripple", 700, 100) },
      p3: { animation: an("waves-arrow-down", "ripple", 700, 180) },
    },
    keyframes:
      kf("waves-arrow-down", "sink", "0%{transform:none}35%{transform:translateY(1.5px)}65%{transform:translateY(-.3px)}100%{transform:none}") +
      kf("waves-arrow-down", "ripple", RIPPLE),
  },

  "waves-arrow-up": {
    note: "The arrow rises from the water and the waves roll under it, one after the other.",
    motion: {
      ...each(["p0", "p3"], { animation: an("waves-arrow-up", "rise", 650) }),
      p1: { animation: an("waves-arrow-up", "ripple", 700, 100) },
      p2: { animation: an("waves-arrow-up", "ripple", 700, 180) },
    },
    keyframes:
      kf("waves-arrow-up", "rise", "0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}") +
      kf("waves-arrow-up", "ripple", RIPPLE),
  },

  "waves-ladder": {
    note: "The water ripples past the pool ladder, which bobs a little.",
    motion: {
      p1: { animation: an("waves-ladder", "ripple", 700) },
      ...each(["p0", "p2", "p3", "p4"], { animation: an("waves-ladder", "bob", 650, 80) }),
    },
    keyframes:
      kf("waves-ladder", "ripple", RIPPLE) +
      kf("waves-ladder", "bob", "0%{transform:none}35%{transform:translateY(-.7px)}70%{transform:translateY(.15px)}100%{transform:none}"),
  },

  "waves-vertical": {
    note: "The three waves sway sideways one after another, left to right.",
    motion: {
      p2: { animation: an("waves-vertical", "sway", 650, 0) },
      p0: { animation: an("waves-vertical", "sway", 650, 80) },
      p1: { animation: an("waves-vertical", "sway", 650, 160) },
    },
    keyframes: kf("waves-vertical", "sway", "0%{transform:none}30%{transform:translateX(.9px)}60%{transform:translateX(-.4px)}100%{transform:none}"),
  },

  "webcam-off": slashOff("webcam-off", "p4", ["p0", "p1", "p2", "p3", "p5", "p6"], "The slash draws itself across the camera, which gives a small shake."),

  "webhook-off": slashOff("webhook-off", "p6", ["p0", "p1", "p2", "p3", "p4", "p5"], "The slash draws itself across the hooks, which give a small shake."),

  "weight-tilde": {
    note: "The weight lifts and drops, squashing as it lands, its ring following.",
    motion: {
      ...each(["p0", "p1"], { ...at(12, 21), animation: an("weight-tilde", "drop", 650) }),
      p2: { animation: an("weight-tilde", "ring", 650, 50) },
    },
    keyframes:
      kf("weight-tilde", "drop", "0%{transform:none}25%{transform:translateY(-1.5px)}50%{transform:scale(1.04,.94)}75%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("weight-tilde", "ring", "0%{transform:none}25%{transform:translateY(-1.5px)}50%{transform:translateY(.6px)}75%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  "wheat-off": {
    note: "The slash draws itself across and the ear sways from its foot, grain after grain.",
    draw: ["p9"],
    motion: {
      p9: drawIn("wheat-off", 420),
      p0: { ...at(2, 22), animation: an("wheat-off", "sway", 800, 200) },
      ...each(["p2", "p6"], { ...at(2, 22), animation: an("wheat-off", "sway", 800, 230) }),
      ...each(["p3", "p7"], { ...at(2, 22), animation: an("wheat-off", "sway", 800, 270) }),
      ...each(["p4", "p8"], { ...at(2, 22), animation: an("wheat-off", "sway", 800, 310) }),
      ...each(["p1", "p5"], { ...at(2, 22), animation: an("wheat-off", "sway", 800, 350) }),
    },
    keyframes: drawKf("wheat-off") + kf("wheat-off", "sway", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(2.5deg)}82%{transform:rotate(-.8deg)}100%{transform:none}"),
  },

  "wifi-cog": {
    note: "The signal lights up arc by arc while the cog turns beside it.",
    motion: {
      p10: { animation: an("wifi-cog", "arc", 600, 0) },
      p9: { animation: an("wifi-cog", "arc", 600, 80) },
      p6: { animation: an("wifi-cog", "arc", 600, 160) },
      ...each(["p0", "p1", "p2", "p3", "p4", "p5", "p7", "p8", "p11"], { ...at(18, 18), to: { transform: "rotate(90deg)" }, ease: "smooth" }),
    },
    keyframes: kf("wifi-cog", "arc", ARC),
  },

  "wifi-high": {
    note: "The signal lights up arc by arc, from the dot outwards.",
    motion: {
      p0: { animation: an("wifi-high", "arc", 600, 0) },
      p2: { animation: an("wifi-high", "arc", 600, 80) },
      p1: { animation: an("wifi-high", "arc", 600, 160) },
    },
    keyframes: kf("wifi-high", "arc", ARC),
  },

  "wifi-lock": {
    note: "The lock's shackle lifts and the lock rattles while the arcs light up.",
    motion: {
      p1: { animation: an("wifi-lock", "shackle", 700) },
      p4: { origin: "50% 0%", animation: an("wifi-lock", "rattle", 700) },
      p3: { animation: an("wifi-lock", "arc", 600, 0) },
      p2: { animation: an("wifi-lock", "arc", 600, 80) },
      p0: { animation: an("wifi-lock", "arc", 600, 160) },
    },
    keyframes: kf("wifi-lock", "shackle", SHACKLE) + kf("wifi-lock", "rattle", RATTLE) + kf("wifi-lock", "arc", ARC),
  },

  "wifi-pen": {
    note: "The pen scribbles from its nib while the arcs light up.",
    motion: {
      p1: { ...at(13.5, 20.5), animation: an("wifi-pen", "pen", 700) },
      p3: { animation: an("wifi-pen", "arc", 600, 0) },
      p2: { animation: an("wifi-pen", "arc", 600, 80) },
      p0: { animation: an("wifi-pen", "arc", 600, 160) },
    },
    keyframes: kf("wifi-pen", "pen", SCRIBBLE) + kf("wifi-pen", "arc", ARC),
  },

  "wifi-zero": {
    note: "The lone dot pulses, looking for a signal.",
    motion: { p0: { origin: "50% 50%", animation: an("wifi-zero", "pulse", 650) } },
    keyframes: kf("wifi-zero", "pulse", "0%{transform:none;opacity:1}35%{transform:scale(1.8);opacity:.5}70%{transform:scale(.9);opacity:1}100%{transform:none;opacity:1}"),
  },

  "wind-arrow-down": {
    note: "The gusts blow in from the left, one after the other, and the arrow sinks.",
    draw: ["p2", "p1"],
    motion: {
      p2: drawIn("wind-arrow-down", 450, 0, true),
      p1: drawIn("wind-arrow-down", 450, 120, true),
      ...each(["p0", "p3"], { animation: an("wind-arrow-down", "sink", 650, 100) }),
    },
    keyframes:
      undrawKf("wind-arrow-down") +
      kf("wind-arrow-down", "sink", "0%{transform:none}35%{transform:translateY(1.5px)}65%{transform:translateY(-.3px)}100%{transform:none}"),
  },

  "wind-arrow-up": {
    note: "The gusts blow in from the left, one after the other, and the arrow rises.",
    draw: ["p2", "p1"],
    motion: {
      p2: drawIn("wind-arrow-up", 450, 0, true),
      p1: drawIn("wind-arrow-up", 450, 120, true),
      ...each(["p0", "p3"], { animation: an("wind-arrow-up", "rise", 650, 100) }),
    },
    keyframes:
      undrawKf("wind-arrow-up") +
      kf("wind-arrow-up", "rise", "0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "wine-off": {
    note: "The slash draws itself across and the glass tilts on its foot, the wine line lagging behind.",
    draw: ["p4"],
    motion: {
      p4: drawIn("wine-off", 420),
      ...each(["p3", "p2", "p0"], { ...at(12, 22), animation: an("wine-off", "tilt", 800, 200) }),
      p1: { ...at(12, 22), animation: an("wine-off", "tilt", 800, 280) },
    },
    keyframes: drawKf("wine-off") + kf("wine-off", "tilt", "0%{transform:none}30%{transform:rotate(-7deg)}60%{transform:rotate(4deg)}85%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  worm: {
    note: "The worm stretches and bunches up as it wriggles, and the marks beside it twitch.",
    motion: {
      p2: { origin: "50% 50%", animation: an("worm", "wriggle", 800) },
      p0: { animation: an("worm", "twitch", 500, 120) },
      p1: { animation: an("worm", "twitch", 500, 220) },
    },
    keyframes:
      kf("worm", "wriggle", "0%{transform:none}25%{transform:scale(1.07,.93) rotate(-3deg)}50%{transform:scale(.95,1.05) rotate(2deg)}75%{transform:scale(1.02,.98)}100%{transform:none}") +
      kf("worm", "twitch", "0%{transform:none}35%{transform:translate(.6px,-.6px)}70%{transform:translate(-.15px,.15px)}100%{transform:none}"),
  },

  "wrench-off": {
    note: "The slash draws itself across and the wrench turns a little, as if on a bolt, and back.",
    draw: ["p2"],
    motion: {
      p2: drawIn("wrench-off", 420),
      ...each(["p0", "p1"], { ...at(12, 12), animation: an("wrench-off", "turn", 700, 200) }),
    },
    keyframes: drawKf("wrench-off") + kf("wrench-off", "turn", "0%{transform:none}35%{transform:rotate(-10deg)}65%{transform:rotate(4deg)}100%{transform:none}"),
  },

  x: {
    note: "The cross draws itself in, one stroke then the other.",
    draw: ["p1", "p0"],
    motion: {
      p1: drawIn("x", 280, 0),
      p0: drawIn("x", 280, 140),
    },
    keyframes: drawKf("x"),
  },

  "x-line-top": {
    note: "The cross draws itself in and the bar slides over the top.",
    draw: ["p2", "p1"],
    motion: {
      p2: drawIn("x-line-top", 260, 0),
      p1: drawIn("x-line-top", 260, 120),
      p0: { animation: an("x-line-top", "bar", 420, 240, "backwards") },
    },
    keyframes: drawKf("x-line-top") + kf("x-line-top", "bar", SLIDE_IN),
  },

  "zodiac-aquarius": {
    note: "The two waves ripple sideways, the lower one a beat behind.",
    motion: {
      p0: { animation: an("zodiac-aquarius", "ripple", 700, 0) },
      p1: { animation: an("zodiac-aquarius", "ripple", 700, 100) },
    },
    keyframes: kf("zodiac-aquarius", "ripple", RIPPLE),
  },

  "zodiac-aries": {
    note: "The stem grows up and curls into the left horn, then the right horn curls out.",
    draw: ["p1", "p0"],
    motion: {
      p1: drawIn("zodiac-aries", 520, 0, true),
      p0: drawIn("zodiac-aries", 360, 300),
    },
    keyframes: undrawKf("zodiac-aries") + drawKf("zodiac-aries"),
  },

  "zodiac-cancer": {
    note: "The two halves circle half way round each other, their dots trailing a beat behind.",
    motion: {
      ...each(["p0", "p1"], { ...at(12, 12), animation: an("zodiac-cancer", "turn", 850) }),
      ...each(["p2", "p3"], { ...at(12, 12), animation: an("zodiac-cancer", "turn", 850, 60) }),
    },
    keyframes: kf("zodiac-cancer", "turn", "0%{transform:none}100%{transform:rotate(180deg)}"),
  },

  "zodiac-capricorn": {
    note: "The sign writes itself: the first stroke down from its curl, then the hump, then the loop.",
    draw: ["p1", "p0", "p2"],
    motion: {
      p1: drawIn("zodiac-capricorn", 320, 0, true),
      p0: drawIn("zodiac-capricorn", 400, 260, true),
      p2: drawIn("zodiac-capricorn", 300, 580),
    },
    keyframes: drawKf("zodiac-capricorn") + undrawKf("zodiac-capricorn"),
  },

  "zodiac-gemini": {
    note: "The twin pillars stretch up while the bars above and below bow outwards with them.",
    motion: {
      p3: { origin: "50% 50%", animation: an("zodiac-gemini", "pillar", 650) },
      p0: { origin: "50% 50%", animation: an("zodiac-gemini", "pillar", 650, 60) },
      p1: { animation: an("zodiac-gemini", "top", 650) },
      p2: { animation: an("zodiac-gemini", "bottom", 650) },
    },
    keyframes:
      kf("zodiac-gemini", "pillar", "0%{transform:none}35%{transform:scaleY(1.1)}70%{transform:scaleY(.98)}100%{transform:none}") +
      kf("zodiac-gemini", "top", "0%{transform:none}35%{transform:translateY(-.8px)}70%{transform:translateY(.15px)}100%{transform:none}") +
      kf("zodiac-gemini", "bottom", "0%{transform:none}35%{transform:translateY(.8px)}70%{transform:translateY(-.15px)}100%{transform:none}"),
  },

  "zodiac-leo": {
    note: "The sign writes itself: the small loop, then the mane and the curling tail.",
    draw: ["p1", "p0"],
    motion: {
      p1: drawIn("zodiac-leo", 300, 0),
      p0: drawIn("zodiac-leo", 600, 200),
    },
    keyframes: drawKf("zodiac-leo"),
  },

  "zodiac-libra": {
    note: "The upper bar with its arc tips like a pair of scales and settles level.",
    motion: { p0: { ...at(12, 16), animation: an("zodiac-libra", "tip", 850) }, p1: { animation: an("zodiac-libra", "base", 850) } },
    keyframes:
      kf("zodiac-libra", "tip", "0%{transform:none}25%{transform:rotate(-7deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("zodiac-libra", "base", "0%{transform:none}25%{transform:translateY(.4px)}50%{transform:none}100%{transform:none}"),
  },

  "zodiac-ophiuchus": {
    note: "The serpent's wave deepens and flattens as it wriggles across the bearer.",
    motion: {
      p0: { animation: an("zodiac-ophiuchus", "wave", 800) },
      p1: { animation: an("zodiac-ophiuchus", "bob", 800, 80) },
    },
    keyframes:
      kf(
        "zodiac-ophiuchus",
        "wave",
        `0%,100%{d:path("M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10")}35%{d:path("M3 10A4.6 4.6 0 0 1 12 10 A4.6 4.6 0 0 0 21 10")}70%{d:path("M3 10A8 8 0 0 1 12 10 A8 8 0 0 0 21 10")}`,
      ) + kf("zodiac-ophiuchus", "bob", "0%{transform:none}35%{transform:translateY(.6px)}70%{transform:translateY(-.15px)}100%{transform:none}"),
  },

  "zodiac-pisces": {
    note: "The two fish swim apart and come back, the bar between them stretching.",
    motion: {
      p0: { animation: an("zodiac-pisces", "right", 700) },
      p2: { animation: an("zodiac-pisces", "left", 700) },
      p1: { origin: "50% 50%", animation: an("zodiac-pisces", "bar", 700) },
    },
    keyframes:
      kf("zodiac-pisces", "right", "0%{transform:none}35%{transform:translateX(1px)}70%{transform:translateX(-.2px)}100%{transform:none}") +
      kf("zodiac-pisces", "left", "0%{transform:none}35%{transform:translateX(-1px)}70%{transform:translateX(.2px)}100%{transform:none}") +
      kf("zodiac-pisces", "bar", "0%{transform:none}35%{transform:scaleX(1.1)}70%{transform:scaleX(.98)}100%{transform:none}"),
  },

  "zodiac-sagittarius": {
    note: "The arrow is loosed up through the crossbar and springs back.",
    motion: {
      ...each(["p0", "p1"], { animation: an("zodiac-sagittarius", "fly", 650) }),
      p2: { origin: "50% 50%", animation: an("zodiac-sagittarius", "bow", 650) },
    },
    keyframes:
      kf("zodiac-sagittarius", "fly", "0%{transform:none}35%{transform:translate(1.2px,-1.2px)}65%{transform:translate(-.2px,.2px)}100%{transform:none}") +
      kf("zodiac-sagittarius", "bow", "0%{transform:none}30%{transform:scale(.85)}60%{transform:scale(1.03)}100%{transform:none}"),
  },

  "zodiac-scorpio": {
    note: "The sign writes itself, hump after hump, and ends in the tail's sting.",
    draw: ["p3", "p2", "p0", "p1"],
    motion: {
      p3: drawIn("zodiac-scorpio", 200, 0, true),
      p2: drawIn("zodiac-scorpio", 350, 120),
      p0: drawIn("zodiac-scorpio", 450, 380),
      p1: drawIn("zodiac-scorpio", 160, 780),
    },
    keyframes: drawKf("zodiac-scorpio") + undrawKf("zodiac-scorpio"),
  },

  "zodiac-taurus": {
    note: "The horns toss on the bull's head, which dips under them.",
    motion: {
      p1: { ...at(12, 9), animation: an("zodiac-taurus", "toss", 700) },
      p0: { animation: an("zodiac-taurus", "head", 700) },
    },
    keyframes:
      kf("zodiac-taurus", "toss", "0%{transform:none}30%{transform:translateY(-.6px) rotate(-10deg)}60%{transform:rotate(6deg)}85%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("zodiac-taurus", "head", "0%{transform:none}30%{transform:translateY(.6px)}60%{transform:translateY(-.15px)}100%{transform:none}"),
  },

  "zodiac-virgo": {
    note: "The sign writes itself: the first stroke down from its curl, the humps, then the loop.",
    draw: ["p2", "p3", "p0", "p1"],
    motion: {
      p2: drawIn("zodiac-virgo", 280, 0, true),
      p3: drawIn("zodiac-virgo", 300, 220),
      p0: drawIn("zodiac-virgo", 360, 460),
      p1: drawIn("zodiac-virgo", 300, 740),
    },
    keyframes: drawKf("zodiac-virgo") + undrawKf("zodiac-virgo"),
  },
};
