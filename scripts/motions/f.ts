import type { Entry, Override } from "./types";

/** Batch f: its icons (pnpm import-icons f) and their motions. */
export const list: Entry[] = [
  ["Binoculars", "binoculars", "Binoculars", "app", "tilt", ["look", "find", "scout", "view"], "The binoculars lift to the eye."],
  ["Biohazard", "biohazard", "Biohazard", "status", "spin-180", ["danger", "toxic", "hazard", "warning"], "The three arms turn."],
  ["Bird", "bird", "Bird", "nature", "float", ["animal", "tweet", "fly", "nature"], "The bird hops and flaps."],
  ["Bitcoin", "bitcoin", "Bitcoin", "commerce", "pop", ["crypto", "currency", "coin", "money"], "The coin sign flips."],
  ["Blend", "blend", "Blend", "shapes", "pulse", ["mix", "blend", "overlap", "merge"], "The two circles slide together."],
  ["Blocks", "blocks", "Blocks", "app", "pop", ["integrations", "apps", "modules", "add-ons"], "The loose block snaps in."],
  ["Bluetooth", "bluetooth", "Bluetooth", "devices", "pulse", ["wireless", "pair", "connect", "device"], "The rune draws itself."],
  ["BluetoothOff", "bluetooth-off", "Bluetooth off", "devices", "shake", ["wireless", "disconnected", "unpaired"], "The slash cuts across."],
  ["Bold", "bold", "Bold", "text", "pop", ["text", "strong", "format", "weight"], "The letter thickens."],
  ["Bomb", "bomb", "Bomb", "status", "shake", ["explode", "danger", "destroy", "fuse"], "The fuse sparks and the bomb trembles."],
  ["Bone", "bone", "Bone", "nature", "wiggle", ["pet", "dog", "skeleton", "treat"], "The bone wags."],
  ["Bolt", "bolt", "Nut", "development", "spin", ["nut", "hardware", "fix", "settings"], "The nut turns on its bolt."],
  ["Blinds", "blinds", "Blinds", "devices", "nudge-down", ["window", "shade", "smart home", "curtain"], "The slats lower."],
  ["Book", "book", "Book", "files", "tilt", ["read", "manual", "guide", "docs"], "The book tilts out of the shelf."],
  ["BookMarked", "book-marked", "Bookmarked book", "files", "nudge-down", ["read", "saved", "ribbon", "marked"], "The ribbon drops."],
  ["BookAudio", "book-audio", "Audiobook", "media", "pulse", ["audiobook", "listen", "read aloud", "narration"], "The sound bars bounce."],
  ["BookHeart", "book-heart", "Favorite book", "files", "pulse", ["favorite", "love", "read", "liked"], "The heart beats on the cover."],
  ["BookUser", "book-user", "Contacts", "people", "tilt", ["contacts", "address book", "directory", "people"], "The person on the cover nods."],
  ["BookPlus", "book-plus", "Add book", "files", "pop", ["add", "new", "library", "create"], "The plus turns."],
  ["BookLock", "book-lock", "Private book", "files", "shake", ["private", "locked", "diary", "secure"], "The lock shackle clicks."],
  ["BookOpenCheck", "book-open-check", "Read", "files", "draw", ["read", "done", "studied", "finished"], "The tick draws itself on the page."],
  ["Bookmark", "bookmark", "Bookmark", "actions", "nudge-down", ["save", "later", "mark", "favorite"], "The ribbon drops and settles."],
  ["BookmarkCheck", "bookmark-check", "Bookmarked", "actions", "draw", ["saved", "bookmarked", "done"], "The tick draws itself."],
  ["BookmarkPlus", "bookmark-plus", "Add bookmark", "actions", "pop", ["save", "add", "mark"], "The plus turns."],
  ["BookmarkMinus", "bookmark-minus", "Remove bookmark", "actions", "pop", ["unsave", "remove", "unmark"], "The minus slides out."],
  ["BoomBox", "boombox", "Boombox", "media", "bounce", ["radio", "music", "stereo", "speaker"], "The speakers thump."],
  ["BotMessageSquare", "bot-message", "Bot chat", "communication", "pop", ["chatbot", "ai", "assistant", "chat"], "The bot blinks in its bubble."],
  ["Box", "box", "Box", "development", "bounce", ["cube", "3d", "object", "model"], "The cube hops."],
  ["Boxes", "boxes", "Boxes", "development", "bounce", ["stack", "inventory", "packages", "dependencies"], "The top box lands on the others."],
  ["Braces", "braces", "Braces", "development", "pulse", ["code", "json", "object", "curly"], "The braces open and close."],
  ["Brackets", "brackets", "Brackets", "development", "pulse", ["code", "array", "square", "list"], "The brackets open and close."],
  ["Brain", "brain", "Brain", "app", "pulse", ["think", "mind", "memory", "ai"], "The two halves pulse."],
  ["BrainCircuit", "brain-circuit", "AI brain", "app", "pulse", ["ai", "machine learning", "neural", "smart"], "The circuits light up."],
  ["BrickWall", "brick-wall", "Firewall", "development", "pop", ["firewall", "wall", "block", "build"], "The bricks settle row by row."],
  ["BriefcaseMedical", "medical-kit", "Medical kit", "health", "bounce", ["first aid", "medical", "doctor", "kit"], "The kit lifts by its handle."],
  ["BringToFront", "bring-to-front", "Bring to front", "actions", "nudge-up", ["arrange", "layer", "front", "order"], "The front square comes forward."],
  ["Broom", "broom", "Sweep", "actions", "wiggle", ["clean", "clear", "sweep", "tidy"], "The broom sweeps."],
  ["Brush", "brush", "Brush", "app", "wiggle", ["paint", "draw", "style", "art"], "The brush strokes."],
  ["BugPlay", "bug-play", "Debug", "development", "nudge-right", ["debug", "run", "test", "bug"], "The play button pushes forward."],
  ["Bus", "bus", "Bus", "travel", "nudge-right", ["transit", "public transport", "travel", "school"], "The bus pulls away on its wheels."],
  ["Cable", "cable", "Cable", "devices", "wiggle", ["usb", "wire", "plug", "connect"], "The plugs meet."],
  ["Cake", "cake", "Cake", "food", "pop", ["birthday", "party", "celebrate", "dessert"], "The candles flicker."],
  ["Calculator", "calculator", "Calculator", "app", "pop", ["math", "calculate", "numbers", "sum"], "The keys press."],
  ["CalendarCheck", "calendar-check", "Event done", "app", "draw", ["done", "scheduled", "booked", "event"], "The tick draws itself."],
  ["CalendarClock", "calendar-clock", "Schedule", "app", "spin", ["schedule", "later", "time", "reminder"], "The clock hand turns."],
  ["CalendarPlus", "calendar-plus", "Add event", "app", "pop", ["new event", "add", "schedule", "book"], "The plus turns."],
  ["CalendarX", "calendar-x", "Cancel event", "app", "shake", ["cancel", "remove", "unavailable", "event"], "The cross draws itself."],
  ["CalendarRange", "calendar-range", "Date range", "app", "pulse", ["range", "period", "dates", "from to"], "The range stretches."],
  ["CalendarSync", "calendar-sync", "Sync calendar", "app", "spin", ["sync", "recurring", "repeat", "update"], "The arrows turn."],
  ["CalendarSearch", "calendar-search", "Find date", "app", "wiggle", ["search", "find", "date", "lookup"], "The lens scans."],
  ["Calendar1", "calendar-today", "Today", "app", "pop", ["today", "day", "date", "one"], "The one drops in."],
  ["CalendarHeart", "calendar-heart", "Special day", "app", "pulse", ["anniversary", "date", "love", "special"], "The heart beats."],
  ["Camera", "camera", "Camera", "media", "flash", ["photo", "picture", "shoot", "snapshot"], "The shutter clicks."],
  ["CameraOff", "camera-off", "Camera off", "media", "shake", ["no camera", "disabled", "private", "video off"], "The slash cuts across."],
  ["ChartCandlestick", "chart-candlestick", "Candlestick chart", "charts", "bounce", ["stocks", "trading", "market", "finance"], "The candles bob up and down."],
  ["CaseSensitive", "case-sensitive", "Match case", "text", "pop", ["case", "text", "letters", "match"], "The letters hop."],
  ["CaseUpper", "case-upper", "Uppercase", "text", "nudge-up", ["uppercase", "capitals", "text", "caps"], "The letters rise."],
  ["CaseLower", "case-lower", "Lowercase", "text", "nudge-down", ["lowercase", "small letters", "text"], "The letters sink."],
  ["CassetteTape", "cassette", "Cassette", "media", "spin", ["tape", "mixtape", "audio", "retro"], "The reels turn."],
  ["Cast", "cast", "Cast", "devices", "pulse", ["stream", "screen", "tv", "mirror"], "The waves spread."],
  ["Cat", "cat", "Cat", "nature", "wiggle", ["pet", "animal", "kitten", "meow"], "The ears twitch."],
  ["Cctv", "cctv", "Security camera", "devices", "swing", ["camera", "surveillance", "security", "monitor"], "The camera pans."],
  ["Car", "car", "Car", "travel", "nudge-right", ["drive", "vehicle", "auto", "transport"], "The car rocks on its wheels."],
  ["CarTaxiFront", "taxi", "Taxi", "travel", "bounce", ["cab", "ride", "taxi", "transport"], "The sign lights up."],
  ["Caravan", "caravan", "Caravan", "travel", "nudge-right", ["camper", "trailer", "rv", "holiday"], "The caravan rolls."],
  ["CarBattery", "car-battery", "Car battery", "devices", "flash", ["battery", "charge", "power", "car"], "The plus and minus light up."],
  ["Carrot", "carrot", "Carrot", "food", "wiggle", ["vegetable", "food", "vegan", "garden"], "The leaves wave."],
  ["CardSim", "sim-card", "SIM card", "devices", "nudge-up", ["sim", "mobile", "carrier", "chip"], "The card slides in."],
  ["Certificate", "certificate", "Certificate", "files", "swing", ["award", "diploma", "credential", "verified"], "The ribbon swings."],
  ["ChartLine", "chart-line", "Line chart", "charts", "draw", ["graph", "trend", "line", "analytics"], "The line draws itself."],
  ["ChartPie", "chart-pie", "Pie chart", "charts", "pop", ["pie", "share", "split", "analytics"], "The slice pulls out."],
  ["ChartBarIncreasing", "chart-bar-increasing", "Growing bars", "charts", "pulse", ["growth", "increase", "ranking", "bars"], "The bars grow."],
  ["ChartBarDecreasing", "chart-bar-decreasing", "Shrinking bars", "charts", "pulse", ["decrease", "ranking", "bars", "sort"], "The bars shrink."],
  ["ChartColumnStacked", "chart-stacked", "Stacked chart", "charts", "pulse", ["stacked", "columns", "compare", "analytics"], "The columns stack up."],
  ["ChartGantt", "chart-gantt", "Gantt chart", "charts", "nudge-right", ["timeline", "project", "plan", "schedule"], "The task bars slide in."],
  ["ChartScatter", "chart-scatter", "Scatter chart", "charts", "pop", ["scatter", "points", "data", "correlation"], "The points pop in."],
  ["ChartSpline", "chart-spline", "Curve chart", "charts", "draw", ["curve", "trend", "smooth", "analytics"], "The curve draws itself."],
  ["ChartNetwork", "chart-network", "Network chart", "charts", "pulse", ["network", "graph", "nodes", "relations"], "The nodes pulse."],
  ["ChartRadar", "chart-radar", "Radar chart", "charts", "pulse", ["radar", "spider", "skills", "compare"], "The web spreads."],
  ["CheckCheck", "check-double", "Read receipt", "status", "draw", ["read", "seen", "delivered", "double check"], "Both ticks draw themselves."],
  ["ChefHat", "chef-hat", "Chef", "food", "bounce", ["cook", "recipe", "kitchen", "chef"], "The hat puffs up."],
  ["Cherry", "cherry", "Cherry", "food", "swing", ["fruit", "cherry", "sweet", "food"], "The cherries swing on their stems."],
  ["ChessKnight", "chess", "Chess", "app", "bounce", ["chess", "game", "strategy", "knight"], "The knight hops."],
  ["ChevronLeft", "chevron-left", "Chevron left", "navigation", "nudge-left", ["back", "previous", "left"], "It nudges left."],
  ["ChevronFirst", "chevron-first", "First", "navigation", "nudge-left", ["first", "start", "beginning", "rewind"], "It runs to the stop."],
  ["ChevronLast", "chevron-last", "Last", "navigation", "nudge-right", ["last", "end", "skip"], "It runs to the stop."],
  ["ChevronsLeft", "chevrons-left", "Chevrons left", "navigation", "nudge-left", ["back", "rewind", "previous", "collapse"], "The chevrons step left."],
  ["ChevronsRight", "chevrons-right", "Chevrons right", "navigation", "nudge-right", ["forward", "next", "expand", "skip"], "The chevrons step right."],
  ["ChevronsUp", "chevrons-up", "Chevrons up", "navigation", "nudge-up", ["up", "top", "priority", "raise"], "The chevrons step up."],
  ["ChevronsDown", "chevrons-down", "Chevrons down", "navigation", "nudge-down", ["down", "bottom", "lower", "more"], "The chevrons step down."],
  ["ChevronsUpDown", "chevrons-up-down", "Expand", "navigation", "pulse", ["select", "sort", "expand", "dropdown"], "The chevrons spread apart."],
  ["ChevronsDownUp", "chevrons-down-up", "Collapse", "navigation", "pulse", ["collapse", "fold", "close"], "The chevrons press together."],
  ["ChevronsLeftRight", "chevrons-left-right", "Widen", "navigation", "pulse", ["resize", "width", "expand", "horizontal"], "The chevrons spread apart."],
  ["CigaretteOff", "no-smoking", "No smoking", "travel", "shake", ["smoke free", "no smoking", "rules"], "The smoke fades."],
  ["Circle", "circle", "Circle", "shapes", "pop", ["round", "shape", "dot", "ring"], "The circle squashes and springs back."],
  ["CircleDashed", "circle-dashed", "Dashed circle", "shapes", "spin", ["draft", "pending", "placeholder", "empty"], "The dashes turn."],
  ["CircleDot", "circle-dot", "Selected", "shapes", "pop", ["radio", "selected", "option", "target"], "The dot springs in."],
  ["CircleDollarSign", "circle-dollar", "Dollar", "commerce", "spin", ["money", "price", "payment", "coin"], "The coin spins."],
  ["CircleEuro", "circle-euro", "Euro", "commerce", "spin", ["money", "price", "euro", "coin"], "The coin spins."],
  ["CircleEllipsis", "circle-more", "More", "actions", "pulse", ["more", "options", "menu", "ellipsis"], "The dots wave."],
  ["Candy", "candy", "Candy", "food", "wiggle", ["sweet", "treat", "sugar", "halloween"], "The wrapper twists."],
  ["Castle", "castle", "Castle", "travel", "bounce", ["fortress", "kingdom", "landmark", "game"], "The flags rise."],
  ["Church", "church", "Church", "travel", "swing", ["chapel", "religion", "wedding", "landmark"], "The bell tower rings."],
  ["CaptionsOff", "captions-off", "Captions off", "media", "shake", ["subtitles off", "no captions", "cc"], "The slash cuts across."],
  ["BottleWine", "wine-bottle", "Wine", "food", "tilt", ["wine", "bottle", "drink", "bar"], "The bottle tips to pour."],
  ["Bridge", "bridge", "Bridge", "travel", "bounce", ["bridge", "crossing", "connect", "landmark"], "The deck flexes."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** an animation of the icon's own keyframes `ki-<icon>-<name>` */
const run = (icon: string, name: string, ms: number, delay = 0, fill = "") =>
  `ki-${icon}-${name} ${ms}ms ${SMOOTH} ${delay}ms${fill ? " " + fill : ""}`;
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => kf(icon, "draw", "from{stroke-dashoffset:1}to{stroke-dashoffset:0}");
const draw = (icon: string, ms: number, delay = 0) => ({ from: { strokeDasharray: 1 }, animation: run(icon, "draw", ms, delay, "backwards") });
/** transform origin in icon units */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });

/** a small step one way and back, springy (a nudge, a hop, a bump) */
const step = (icon: string, name: string, t: string, back = "") =>
  kf(icon, name, `0%{transform:none}35%{transform:${t}}${back ? `65%{transform:${back}}` : ""}100%{transform:none}`);
/** a plus that turns a quarter (its two strokes share a centre) */
const plusKf = (icon: string) => kf(icon, "plus", "0%{transform:none}60%{transform:rotate(90deg) scale(1.15)}100%{transform:rotate(90deg)}");
/** a heart that beats twice */
const beatKf = (icon: string) =>
  kf(icon, "beat", "0%{transform:none}20%{transform:scale(1.25)}40%{transform:scale(.95)}60%{transform:scale(1.18)}100%{transform:none}");
/** calendar rings that hop, one after the other */
const ringsKf = (icon: string) => step(icon, "ring", "translateY(-.8px)");
const rings = (icon: string, a: string, b: string) => ({
  [a]: { animation: run(icon, "ring", 450) },
  [b]: { animation: run(icon, "ring", 450, 70) },
});
/** something that pops in from nothing (a dot, a point) */
const popInKf = (icon: string) => kf(icon, "in", "0%{transform:scale(0);opacity:0}60%{transform:scale(1.5);opacity:1}100%{transform:none;opacity:1}");

export const motions: Record<string, Override> = {
  binoculars: {
    note: "The eyepieces twist down to focus while the two barrels draw together on the bridge.",
    motion: {
      p1: { animation: run("binoculars", "focus", 650) },
      p5: { animation: run("binoculars", "focus", 650, 50) },
      p4: { animation: run("binoculars", "left", 650) },
      p2: { animation: run("binoculars", "right", 650) },
      p0: { animation: run("binoculars", "bridge", 650) },
    },
    keyframes:
      step("binoculars", "focus", "translateY(1px)", "translateY(-.3px)") +
      step("binoculars", "left", "translateX(.5px)") +
      step("binoculars", "right", "translateX(-.5px)") +
      step("binoculars", "bridge", "scaleX(.5)"),
  },

  biohazard: {
    note: "The three arms turn a third of the way round the centre ring, which pulses.",
    motion: {
      ...Object.fromEntries(["p1", "p2", "p3", "p4", "p5", "p6"].map((p) => [p, { ...at(12, 11.9), animation: run("biohazard", "turn", 800) }])),
      ...Object.fromEntries(["p7", "p8", "p9"].map((p) => [p, { ...at(12, 11.9), animation: run("biohazard", "turn", 800, 60) }])),
      p0: { animation: run("biohazard", "core", 600) },
    },
    keyframes:
      kf("biohazard", "turn", "0%{transform:none}75%{transform:rotate(128deg)}100%{transform:rotate(120deg)}") +
      step("biohazard", "core", "scale(.75)"),
  },

  bird: {
    note: "The bird hops up on its legs and beats its wing, beak opening.",
    motion: {
      p1: { animation: run("bird", "hop", 650) },
      p0: { animation: run("bird", "hop", 650) },
      p2: { animation: run("bird", "beak", 650) },
      p5: { ...at(10.8, 7.4), animation: run("bird", "wing", 650) },
      p3: { origin: "50% 100%", animation: run("bird", "leg", 650) },
      p4: { origin: "50% 100%", animation: run("bird", "leg", 650) },
    },
    keyframes:
      kf("bird", "hop", "0%{transform:none}30%{transform:translateY(-1.2px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("bird", "beak", "0%{transform:none}30%{transform:translateY(-1.2px) scaleY(1.8)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("bird", "wing", "0%{transform:none}30%{transform:translateY(-1.2px) rotate(-16deg)}50%{transform:translateY(-.4px) rotate(8deg)}70%{transform:rotate(-6deg)}100%{transform:none}") +
      kf("bird", "leg", "0%{transform:none}30%{transform:scaleY(1.4)}60%{transform:scaleY(.95)}100%{transform:none}"),
  },

  bitcoin: {
    note: "The coin sign flips over on its upright, like a tossed coin.",
    motion: { p0: { animation: run("bitcoin", "flip", 700) } },
    keyframes: kf("bitcoin", "flip", "0%{transform:none}40%{transform:scaleX(-1)}70%{transform:scaleX(-1.05)}85%{transform:scaleX(.2)}100%{transform:none}"),
  },

  blend: {
    note: "The two circles slide into each other and part again.",
    motion: {
      p0: { animation: run("blend", "a", 650) },
      p1: { animation: run("blend", "b", 650) },
    },
    keyframes: step("blend", "a", "translate(-1.2px,1.2px)", "translate(.2px,-.2px)") + step("blend", "b", "translate(1.2px,-1.2px)", "translate(-.2px,.2px)"),
  },

  blinds: {
    note: "The cord is pulled and the slats come down one after another.",
    motion: {
      p6: { animation: run("blinds", "pull", 600) },
      p5: { origin: "50% 0%", animation: run("blinds", "cord", 600) },
      p1: { animation: run("blinds", "slat", 400, 80, "backwards") },
      p2: { animation: run("blinds", "slat", 400, 150, "backwards") },
      p4: { animation: run("blinds", "slat", 400, 220, "backwards") },
      p3: { animation: run("blinds", "slat", 400, 290, "backwards") },
    },
    keyframes:
      step("blinds", "pull", "translateY(1.5px)") +
      step("blinds", "cord", "scaleY(1.1)") +
      kf("blinds", "slat", "0%{transform:translateY(-2px);opacity:0}70%{transform:translateY(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  blocks: {
    note: "The loose block drops into the corner and the rest take the bump.",
    motion: {
      p1: { animation: run("blocks", "drop", 650) },
      p0: { animation: run("blocks", "bump", 650) },
    },
    keyframes:
      kf("blocks", "drop", "0%{transform:none}25%{transform:translate(1px,-1px) rotate(12deg)}60%{transform:translate(-.4px,.4px) rotate(-3deg)}100%{transform:none}") +
      kf("blocks", "bump", "0%,50%{transform:none}62%{transform:translate(-.3px,.3px)}100%{transform:none}"),
  },

  bluetooth: {
    note: "The rune draws itself in one stroke.",
    draw: ["p0"],
    motion: { p0: draw("bluetooth", 650) },
    keyframes: drawKf("bluetooth"),
  },

  "bluetooth-off": {
    note: "The slash cuts across and the two halves of the rune part.",
    draw: ["p1"],
    motion: {
      p1: draw("bluetooth-off", 400),
      p2: { animation: run("bluetooth-off", "up", 600, 150) },
      p0: { animation: run("bluetooth-off", "down", 600, 150) },
    },
    keyframes: drawKf("bluetooth-off") + step("bluetooth-off", "up", "translate(.4px,-.6px)") + step("bluetooth-off", "down", "translate(-.4px,.6px)"),
  },

  bold: {
    note: "The letter thickens and widens, then settles back.",
    motion: { p0: { animation: run("bold", "thick", 600) } },
    keyframes: kf("bold", "thick", "0%{transform:none}40%{transform:scale(1.1,.96);stroke-width:2.8}100%{transform:none}"),
  },

  bolt: {
    note: "The nut turns a sixth of a turn on its bolt and clicks into place.",
    motion: {
      p0: { ...at(12, 12), animation: run("bolt", "turn", 700) },
      p1: { animation: run("bolt", "hole", 700) },
    },
    keyframes: kf("bolt", "turn", "0%{transform:none}70%{transform:rotate(66deg)}100%{transform:rotate(60deg)}") + step("bolt", "hole", "scale(.85)"),
  },

  bomb: {
    note: "The spark at the end of the fuse crackles and the bomb trembles.",
    motion: {
      p2: { animation: run("bomb", "spark", 700) },
      p0: { animation: run("bomb", "shake", 600, 150) },
      p1: { animation: run("bomb", "shake", 600, 150) },
    },
    keyframes:
      kf("bomb", "spark", "0%{transform:none;opacity:1}20%{transform:scale(1.6);opacity:.4}40%{transform:scale(.8);opacity:1}60%{transform:scale(1.5);opacity:.5}100%{transform:none;opacity:1}") +
      kf("bomb", "shake", "0%{transform:none}20%{transform:translateX(-.5px)}40%{transform:translateX(.5px)}60%{transform:translateX(-.35px)}80%{transform:translateX(.2px)}100%{transform:none}"),
  },

  bone: {
    note: "The bone wags from side to side, like it is being shaken.",
    motion: { p0: { animation: run("bone", "wag", 700) } },
    keyframes: kf("bone", "wag", "0%{transform:none}25%{transform:rotate(-12deg)}55%{transform:rotate(9deg)}80%{transform:rotate(-3deg)}100%{transform:none}"),
  },

  book: {
    note: "The book tips out from its spine, as if taken off a shelf.",
    motion: { p0: { origin: "0% 100%", animation: run("book", "tip", 650) } },
    keyframes: step("book", "tip", "rotate(-8deg)", "rotate(2deg)"),
  },

  "book-marked": {
    note: "The ribbon drops down from the top edge and the book takes the bump.",
    motion: {
      p0: { origin: "50% 0%", animation: run("book-marked", "ribbon", 650) },
      p1: { animation: run("book-marked", "book", 650) },
    },
    keyframes:
      kf("book-marked", "ribbon", "0%{transform:scaleY(.4)}55%{transform:scaleY(1.15)}80%{transform:scaleY(.95)}100%{transform:none}") +
      kf("book-marked", "book", "0%,40%{transform:none}55%{transform:translateY(.4px)}100%{transform:none}"),
  },

  "book-audio": {
    note: "The three sound bars on the cover bounce like a level meter.",
    motion: {
      p3: { animation: run("book-audio", "eq", 700) },
      p0: { animation: run("book-audio", "eq", 700, 90) },
      p1: { animation: run("book-audio", "eq", 700, 180) },
    },
    keyframes: kf("book-audio", "eq", "0%{transform:none}25%{transform:scaleY(.4)}50%{transform:scaleY(1.25)}75%{transform:scaleY(.7)}100%{transform:none}"),
  },

  "book-heart": {
    note: "The heart on the cover beats twice.",
    motion: {
      p1: { animation: run("book-heart", "beat", 800) },
      p0: { origin: "0% 100%", animation: run("book-heart", "tip", 600) },
    },
    keyframes: beatKf("book-heart") + step("book-heart", "tip", "rotate(-3deg)"),
  },

  "book-user": {
    note: "The person on the cover nods, head dipping over the shoulders.",
    motion: {
      p2: { animation: run("book-user", "head", 650) },
      p0: { origin: "50% 100%", animation: run("book-user", "shoulders", 650, 40) },
    },
    keyframes: step("book-user", "head", "translateY(.8px)", "translateY(-.3px)") + step("book-user", "shoulders", "scale(1.08,.85)"),
  },

  "book-plus": {
    note: "The plus on the cover turns a quarter and grows a little.",
    motion: {
      p0: { animation: run("book-plus", "plus", 600) },
      p2: { animation: run("book-plus", "plus", 600) },
    },
    keyframes: plusKf("book-plus"),
  },

  "book-lock": {
    note: "The lock's shackle lifts and clicks back shut, the lock taking the knock.",
    motion: {
      p0: { animation: run("book-lock", "shackle", 650) },
      p3: { animation: run("book-lock", "lock", 650) },
    },
    keyframes:
      kf("book-lock", "shackle", "0%{transform:none}30%{transform:translateY(-1.2px)}55%{transform:translateY(.3px)}100%{transform:none}") +
      kf("book-lock", "lock", "0%,45%{transform:none}55%{transform:translateY(.4px)}100%{transform:none}"),
  },

  "book-open-check": {
    note: "The open book lifts a little and a tick draws itself on its page.",
    draw: ["p1"],
    motion: {
      p2: { animation: run("book-open-check", "lift", 550) },
      p0: { animation: run("book-open-check", "lift", 550) },
      p1: draw("book-open-check", 450, 150),
    },
    keyframes: drawKf("book-open-check") + step("book-open-check", "lift", "translateY(-.6px)"),
  },

  bookmark: {
    note: "The ribbon drops from its top edge and settles with a little stretch.",
    motion: { p0: { origin: "50% 0%", animation: run("bookmark", "drop", 650) } },
    keyframes: kf("bookmark", "drop", "0%{transform:none}30%{transform:scaleY(.82)}60%{transform:scaleY(1.08)}82%{transform:scaleY(.97)}100%{transform:none}"),
  },

  "bookmark-check": {
    note: "The ribbon stretches down from its top and a tick draws itself on it.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 0%", animation: run("bookmark-check", "drop", 600) },
      p1: draw("bookmark-check", 420, 140),
    },
    keyframes: drawKf("bookmark-check") + kf("bookmark-check", "drop", "0%{transform:none}35%{transform:scaleY(1.08)}65%{transform:scaleY(.97)}100%{transform:none}"),
  },

  "bookmark-minus": {
    note: "The minus pulls in to nothing and springs back, the ribbon shrinking up a touch.",
    motion: {
      p0: { animation: run("bookmark-minus", "minus", 600) },
      p1: { origin: "50% 0%", animation: run("bookmark-minus", "ribbon", 600) },
    },
    keyframes:
      kf("bookmark-minus", "minus", "0%{transform:none}40%{transform:scaleX(.15)}70%{transform:scaleX(1.12)}100%{transform:none}") +
      step("bookmark-minus", "ribbon", "scaleY(.93)"),
  },

  "bookmark-plus": {
    note: "The plus turns a quarter while the ribbon stretches down from its top.",
    motion: {
      p0: { animation: run("bookmark-plus", "plus", 600) },
      p1: { animation: run("bookmark-plus", "plus", 600) },
      p2: { origin: "50% 0%", animation: run("bookmark-plus", "drop", 600) },
    },
    keyframes: plusKf("bookmark-plus") + kf("bookmark-plus", "drop", "0%{transform:none}35%{transform:scaleY(1.07)}65%{transform:scaleY(.98)}100%{transform:none}"),
  },

  boombox: {
    note: "The speaker cones thump to the beat and the buttons are pressed one by one.",
    motion: {
      p5: { animation: run("boombox", "thump", 700) },
      p6: { animation: run("boombox", "thump", 700) },
      p4: { origin: "50% 100%", animation: run("boombox", "body", 700) },
      p1: { animation: run("boombox", "key", 400, 0) },
      p2: { animation: run("boombox", "key", 400, 80) },
      p3: { animation: run("boombox", "key", 400, 160) },
    },
    keyframes:
      kf("boombox", "thump", "0%{transform:none}20%{transform:scale(1.25)}40%{transform:scale(.95)}60%{transform:scale(1.15)}80%,100%{transform:none}") +
      kf("boombox", "body", "0%{transform:none}20%{transform:scale(1.02,.98)}40%{transform:none}60%{transform:scale(1.015,.985)}80%,100%{transform:none}") +
      step("boombox", "key", "translateY(.6px)"),
  },

  "bot-message": {
    note: "The bot blinks and its antenna twitches while its bubble bounces from the tail.",
    motion: {
      p4: { origin: "0% 100%", animation: run("bot-message", "bubble", 650) },
      p1: { animation: run("bot-message", "blink", 450, 120) },
      p5: { animation: run("bot-message", "blink", 450, 120) },
      p0: { origin: "100% 100%", animation: run("bot-message", "antenna", 650) },
    },
    keyframes:
      kf("bot-message", "bubble", "0%{transform:none}30%{transform:scale(1.05,.93) rotate(-2deg)}60%{transform:scale(.98,1.03) rotate(1deg)}100%{transform:none}") +
      kf("bot-message", "blink", "0%{transform:none}35%{transform:scaleY(.15)}65%{transform:none}") +
      kf("bot-message", "antenna", "0%{transform:none}30%{transform:rotate(-14deg)}60%{transform:rotate(8deg)}100%{transform:none}"),
  },

  box: {
    note: "The cube squats, hops and lands on its bottom corner, its top edges catching up.",
    motion: {
      p0: { ...at(12, 22), animation: run("box", "hop", 700) },
      p2: { ...at(12, 22), animation: run("box", "hop", 700) },
      p1: { ...at(12, 22), animation: run("box", "hop", 700, 40) },
    },
    keyframes: kf(
      "box",
      "hop",
      "0%{transform:none}18%{transform:scale(1.06,.92)}45%{transform:translateY(-1.6px) scale(.97,1.04)}72%{transform:translateY(.2px) scale(1.02,.97)}100%{transform:none}",
    ),
  },

  boxes: {
    note: "The top box drops onto the two below, which give under it.",
    motion: {
      ...Object.fromEntries(["p8", "p9", "p10", "p11"].map((p) => [p, { ...at(12, 13.5), animation: run("boxes", "drop", 700) }])),
      ...Object.fromEntries(["p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"].map((p) => [p, { ...at(12, 22), animation: run("boxes", "give", 700) }])),
    },
    keyframes:
      kf("boxes", "drop", "0%{transform:none}30%{transform:translateY(-2px)}55%{transform:translateY(.4px)}75%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("boxes", "give", "0%,45%{transform:none}57%{transform:scale(1.02,.95)}75%{transform:none}"),
  },

  braces: {
    note: "The two braces swing open and close round the space between them.",
    motion: {
      p0: { animation: run("braces", "left", 650) },
      p1: { animation: run("braces", "right", 650) },
    },
    keyframes: step("braces", "left", "translateX(-1.2px)", "translateX(.3px)") + step("braces", "right", "translateX(1.2px)", "translateX(-.3px)"),
  },

  brackets: {
    note: "The two brackets open apart and close again.",
    motion: {
      p1: { animation: run("brackets", "left", 650) },
      p0: { animation: run("brackets", "right", 650) },
    },
    keyframes: step("brackets", "left", "translateX(-1.2px)", "translateX(.3px)") + step("brackets", "right", "translateX(1.2px)", "translateX(-.3px)"),
  },

  brain: {
    note: "The two halves swell apart and the fold in the middle pulses, as if thinking.",
    motion: {
      p3: { animation: run("brain", "right", 700) },
      p4: { animation: run("brain", "right", 700) },
      p6: { animation: run("brain", "left", 700) },
      p7: { animation: run("brain", "left", 700) },
      p2: { animation: run("brain", "wide", 700) },
      p5: { animation: run("brain", "wide", 700) },
      p1: { animation: run("brain", "fold", 700, 80) },
    },
    keyframes:
      step("brain", "right", "translateX(.6px)") +
      step("brain", "left", "translateX(-.6px)") +
      step("brain", "wide", "scaleX(1.06)") +
      step("brain", "fold", "scale(1.2)"),
  },

  "brain-circuit": {
    note: "The circuit traces draw themselves out of the brain and their end points light up.",
    draw: ["p2", "p0", "p1", "p4"],
    motion: {
      p4: draw("brain-circuit", 350, 0),
      p2: draw("brain-circuit", 350, 60),
      p0: draw("brain-circuit", 350, 120),
      p1: draw("brain-circuit", 350, 180),
      p9: { animation: run("brain-circuit", "in", 350, 280, "backwards") },
      p11: { animation: run("brain-circuit", "in", 350, 340, "backwards") },
      p8: { animation: run("brain-circuit", "in", 350, 400, "backwards") },
      p10: { animation: run("brain-circuit", "in", 350, 460, "backwards") },
    },
    keyframes: drawKf("brain-circuit") + popInKf("brain-circuit"),
  },

  "brick-wall": {
    note: "The joints of each row slide into place, top row first, as the wall is laid.",
    motion: {
      p7: { animation: run("brick-wall", "r", 550, 0, "backwards") },
      p3: { animation: run("brick-wall", "r", 550, 0, "backwards") },
      p1: { animation: run("brick-wall", "l", 550, 90, "backwards") },
      p6: { animation: run("brick-wall", "r", 550, 180, "backwards") },
      p2: { animation: run("brick-wall", "r", 550, 180, "backwards") },
    },
    keyframes:
      kf("brick-wall", "r", "0%{transform:translateX(1.6px)}60%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("brick-wall", "l", "0%{transform:translateX(-1.6px)}60%{transform:translateX(.3px)}100%{transform:none}"),
  },

  bridge: {
    note: "A load crosses: the cable sags deeper, the hangers shorten and the deck dips, then all spring back.",
    motion: {
      p3: { animation: run("bridge", "cable", 750) },
      p0: { origin: "50% 100%", animation: run("bridge", "hanger", 750) },
      p1: { origin: "50% 100%", animation: run("bridge", "hanger", 750) },
      p4: { animation: run("bridge", "deck", 750) },
    },
    keyframes:
      kf(
        "bridge",
        "cable",
        'from{d:path("M22 11L18 7A7.5 7.5 0 0 1 6 7L2 11")}40%{d:path("M22 11L18 7A6.5 6.5 0 0 1 6 7L2 11")}to{d:path("M22 11L18 7A7.5 7.5 0 0 1 6 7L2 11")}',
      ) +
      kf("bridge", "hanger", "0%{transform:none}40%{transform:translateY(.4px) scaleY(.85)}100%{transform:none}") +
      kf("bridge", "deck", "0%{transform:none}40%{transform:translateY(.4px)}70%{transform:translateY(-.15px)}100%{transform:none}"),
  },

  "bring-to-front": {
    note: "The middle square comes forward while the two behind it step back.",
    motion: {
      p0: { animation: run("bring-to-front", "front", 600) },
      p1: { animation: run("bring-to-front", "back1", 600) },
      p2: { animation: run("bring-to-front", "back2", 600) },
    },
    keyframes:
      step("bring-to-front", "front", "scale(1.18)") +
      step("bring-to-front", "back1", "translate(-.8px,-.8px)") +
      step("bring-to-front", "back2", "translate(.8px,.8px)"),
  },

  broom: {
    note: "The broom sweeps from the top of its handle, the bristles trailing behind.",
    motion: {
      p0: { ...at(22, 2), animation: run("broom", "sweep", 750) },
      p1: { ...at(22, 2), animation: run("broom", "sweep", 750) },
      p2: { ...at(22, 2), animation: run("broom", "bristle", 750) },
      p3: { ...at(22, 2), animation: run("broom", "bristle", 750) },
    },
    keyframes:
      kf("broom", "sweep", "0%{transform:none}25%{transform:rotate(8deg)}55%{transform:rotate(-6deg)}80%{transform:rotate(2deg)}100%{transform:none}") +
      kf("broom", "bristle", "0%{transform:none}25%{transform:rotate(7deg) translateX(.2px)}55%{transform:rotate(-5deg) translateX(-.3px)}80%{transform:rotate(2deg)}100%{transform:none}"),
  },

  brush: {
    note: "The brush makes a stroke, swinging from the end of its handle.",
    motion: {
      p2: { ...at(20, 4), animation: run("brush", "stroke", 700) },
      p0: { ...at(20, 4), animation: run("brush", "stroke", 700) },
      p1: { ...at(20, 4), animation: run("brush", "tip", 700) },
    },
    keyframes:
      kf("brush", "stroke", "0%{transform:none}30%{transform:rotate(-9deg)}60%{transform:rotate(5deg)}100%{transform:none}") +
      kf("brush", "tip", "0%{transform:none}30%{transform:rotate(-9deg) scale(1.05)}60%{transform:rotate(5deg) scale(.97)}100%{transform:none}"),
  },

  "bug-play": {
    note: "The play button pushes forward and the bug's feelers twitch.",
    motion: {
      p1: { animation: run("bug-play", "play", 600) },
      p2: { origin: "0% 100%", animation: run("bug-play", "feel-r", 600, 60) },
      p7: { origin: "100% 100%", animation: run("bug-play", "feel-l", 600, 60) },
    },
    keyframes:
      step("bug-play", "play", "translateX(1.2px) scale(1.1)") +
      step("bug-play", "feel-r", "rotate(18deg)", "rotate(-8deg)") +
      step("bug-play", "feel-l", "rotate(-18deg)", "rotate(8deg)"),
  },

  bus: {
    note: "The bus pulls away: its body rocks back on the rear wheel and settles.",
    motion: Object.fromEntries(["p0", "p1", "p2", "p3", "p5"].map((p) => [p, { ...at(7, 18), animation: run("bus", "rock", 700) }])),
    keyframes: kf("bus", "rock", "0%{transform:none}30%{transform:rotate(-3deg)}60%{transform:rotate(1deg)}100%{transform:none}"),
  },

  cable: {
    note: "The two plugs push out as if being plugged in, and the wire between them draws itself.",
    draw: ["p2"],
    motion: {
      p2: draw("cable", 600),
      p5: { animation: run("cable", "up", 600, 100) },
      p4: { animation: run("cable", "up", 600, 100) },
      p6: { animation: run("cable", "up", 600, 100) },
      p0: { animation: run("cable", "down", 600, 100) },
      p1: { animation: run("cable", "down", 600, 100) },
      p3: { animation: run("cable", "down", 600, 100) },
    },
    keyframes: drawKf("cable") + step("cable", "up", "translateY(-1px)") + step("cable", "down", "translateY(1px)"),
  },

  cake: {
    note: "The three candle flames flicker, one after the other.",
    motion: {
      p6: { animation: run("cake", "flame", 700) },
      p7: { animation: run("cake", "flame", 700, 80) },
      p8: { animation: run("cake", "flame", 700, 160) },
    },
    keyframes: kf(
      "cake",
      "flame",
      "0%{transform:none}20%{transform:translateY(-.6px) scale(1.5)}40%{transform:translateX(.3px) scale(.9)}60%{transform:translateY(-.3px) scale(1.25)}100%{transform:none}",
    ),
  },

  calculator: {
    note: "Keys are pressed one after another and the display fills in.",
    motion: {
      p5: { animation: run("calculator", "key", 350) },
      p6: { animation: run("calculator", "key", 350, 100) },
      p2: { animation: run("calculator", "key", 350, 200) },
      p1: { origin: "100% 50%", animation: run("calculator", "screen", 550, 120) },
    },
    keyframes: step("calculator", "key", "scale(.4)") + kf("calculator", "screen", "0%{transform:none}30%{transform:scaleX(.4)}70%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  "calendar-check": {
    note: "The rings hop and a tick draws itself on the page.",
    draw: ["p4"],
    motion: { ...rings("calendar-check", "p0", "p1"), p4: draw("calendar-check", 450, 120) },
    keyframes: ringsKf("calendar-check") + drawKf("calendar-check"),
  },

  "calendar-clock": {
    note: "The clock hand sweeps round the face while the calendar rings hop.",
    motion: {
      ...rings("calendar-clock", "p4", "p1"),
      p0: { ...at(16, 16), animation: run("calendar-clock", "hand", 850) },
      p5: { animation: run("calendar-clock", "face", 600) },
    },
    keyframes:
      ringsKf("calendar-clock") +
      kf("calendar-clock", "hand", "0%{transform:none}100%{transform:rotate(360deg)}") +
      step("calendar-clock", "face", "scale(1.06)"),
  },

  "calendar-heart": {
    note: "The heart beats twice while the rings hop.",
    motion: { ...rings("calendar-heart", "p4", "p2"), p1: { animation: run("calendar-heart", "beat", 800) } },
    keyframes: ringsKf("calendar-heart") + beatKf("calendar-heart"),
  },

  "calendar-plus": {
    note: "The plus turns a quarter and the rings hop.",
    motion: {
      ...rings("calendar-plus", "p5", "p1"),
      p0: { animation: run("calendar-plus", "plus", 600) },
      p2: { animation: run("calendar-plus", "plus", 600) },
    },
    keyframes: ringsKf("calendar-plus") + plusKf("calendar-plus"),
  },

  "calendar-x": {
    note: "The cross draws itself over the page, one stroke then the other.",
    draw: ["p4", "p5"],
    motion: { ...rings("calendar-x", "p0", "p1"), p4: draw("calendar-x", 300, 80), p5: draw("calendar-x", 300, 220) },
    keyframes: ringsKf("calendar-x") + drawKf("calendar-x"),
  },

  "calendar-range": {
    note: "The range bars stretch out from their start dates, one row after the other.",
    motion: {
      p4: { origin: "0% 50%", animation: run("calendar-range", "stretch", 550, 0, "backwards") },
      p5: { origin: "0% 50%", animation: run("calendar-range", "stretch", 550, 120, "backwards") },
      p6: { animation: run("calendar-range", "dot", 450) },
      p7: { animation: run("calendar-range", "dot", 450, 220) },
    },
    keyframes:
      kf("calendar-range", "stretch", "0%{transform:scaleX(.15)}65%{transform:scaleX(1.08)}100%{transform:none}") +
      step("calendar-range", "dot", "scale(1.8)"),
  },

  "calendar-search": {
    note: "The magnifier circles over the corner of the page, searching.",
    motion: {
      p5: { animation: run("calendar-search", "scan", 800) },
      p2: { animation: run("calendar-search", "scan", 800) },
    },
    keyframes: kf(
      "calendar-search",
      "scan",
      "0%{transform:none}25%{transform:translate(-1px,-.5px)}50%{transform:translate(.4px,-1px)}75%{transform:translate(.5px,.4px)}100%{transform:none}",
    ),
  },

  "calendar-sync": {
    note: "The two sync arrows turn half a circle round each other.",
    motion: Object.fromEntries(["p0", "p1", "p3", "p4"].map((p) => [p, { ...at(16, 16), animation: run("calendar-sync", "turn", 800) }])),
    keyframes: kf("calendar-sync", "turn", "0%{transform:none}75%{transform:rotate(190deg)}100%{transform:rotate(180deg)}"),
  },

  "calendar-today": {
    note: "The one drops onto the page and the rings hop.",
    motion: { ...rings("calendar-today", "p3", "p1"), p0: { animation: run("calendar-today", "one", 550, 60, "backwards") } },
    keyframes:
      ringsKf("calendar-today") +
      kf("calendar-today", "one", "0%{transform:translateY(-2.5px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}"),
  },

  camera: {
    note: "The lens closes like a shutter and opens again as the body clicks.",
    motion: {
      p1: { animation: run("camera", "shutter", 600) },
      p0: { animation: run("camera", "click", 600) },
    },
    keyframes:
      kf("camera", "shutter", "0%{transform:none}30%{transform:scale(.5)}60%{transform:scale(1.08)}100%{transform:none}") +
      kf("camera", "click", "0%{transform:none}25%{transform:scale(.97,.95)}55%{transform:scale(1.01,1.02)}100%{transform:none}"),
  },

  "camera-off": {
    note: "The slash cuts across and the lens closes behind it.",
    draw: ["p1"],
    motion: { p1: draw("camera-off", 400), p0: { animation: run("camera-off", "lens", 600, 120) } },
    keyframes: drawKf("camera-off") + step("camera-off", "lens", "scale(.6)"),
  },

  "chart-candlestick": {
    note: "The two candles bob in opposite directions, like a market moving.",
    motion: {
      ...Object.fromEntries(["p0", "p1", "p2"].map((p) => [p, { animation: run("chart-candlestick", "up", 700) }])),
      ...Object.fromEntries(["p3", "p4", "p5"].map((p) => [p, { animation: run("chart-candlestick", "down", 700, 60) }])),
    },
    keyframes: step("chart-candlestick", "up", "translateY(-1.3px)", "translateY(.3px)") + step("chart-candlestick", "down", "translateY(1.3px)", "translateY(-.3px)"),
  },

  "case-sensitive": {
    note: "The capital A hops, then the small a after it.",
    motion: {
      p0: { animation: run("case-sensitive", "hop", 500) },
      p2: { animation: run("case-sensitive", "hop", 500) },
      p3: { animation: run("case-sensitive", "hop", 500, 100) },
      p1: { animation: run("case-sensitive", "hop", 500, 100) },
    },
    keyframes: step("case-sensitive", "hop", "translateY(-1.2px)", "translateY(.2px)"),
  },

  "case-upper": {
    note: "The two capitals rise one after the other.",
    motion: {
      p1: { animation: run("case-upper", "rise", 550) },
      p2: { animation: run("case-upper", "rise", 550) },
      p0: { animation: run("case-upper", "rise", 550, 100) },
    },
    keyframes: step("case-upper", "rise", "translateY(-1.3px) scaleY(1.05)", "translateY(.2px)"),
  },

  "case-lower": {
    note: "The two small letters sink one after the other.",
    motion: {
      p3: { animation: run("case-lower", "sink", 550) },
      p0: { animation: run("case-lower", "sink", 550) },
      p2: { animation: run("case-lower", "sink", 550, 100) },
      p1: { animation: run("case-lower", "sink", 550, 100) },
    },
    keyframes: step("case-lower", "sink", "translateY(1.2px)", "translateY(-.2px)"),
  },

  cassette: {
    note: "Tape winds from one reel to the other: one shrinks as the other grows.",
    motion: {
      p1: { animation: run("cassette", "give", 800) },
      p3: { animation: run("cassette", "take", 800) },
      p2: { animation: run("cassette", "tape", 800) },
    },
    keyframes:
      kf("cassette", "give", "0%{transform:none}50%{transform:scale(.78)}100%{transform:none}") +
      kf("cassette", "take", "0%{transform:none}50%{transform:scale(1.18)}100%{transform:none}") +
      kf("cassette", "tape", "0%{transform:none}50%{transform:translateX(.4px)}100%{transform:none}"),
  },

  cast: {
    note: "The signal waves spread out from the corner of the screen, one after another.",
    motion: {
      p3: { animation: run("cast", "wave", 500) },
      p2: { origin: "0% 100%", animation: run("cast", "wave", 500, 90) },
      p1: { origin: "0% 100%", animation: run("cast", "wave", 500, 180) },
    },
    keyframes: kf("cast", "wave", "0%{transform:scale(.6);opacity:.2}60%{transform:scale(1.08);opacity:1}100%{transform:none;opacity:1}"),
  },

  cat: {
    note: "The cat blinks, its nose twitches and its head tilts.",
    motion: {
      p0: { origin: "50% 100%", animation: run("cat", "tilt", 700) },
      p1: { animation: run("cat", "blink", 450, 150) },
      p2: { animation: run("cat", "blink", 450, 150) },
      p3: { animation: run("cat", "nose", 450, 60) },
    },
    keyframes:
      kf("cat", "tilt", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(2deg)}100%{transform:none}") +
      kf("cat", "blink", "0%{transform:none}35%{transform:scaleY(.1)}65%{transform:none}") +
      step("cat", "nose", "translateY(.4px) scale(1.2)"),
  },

  cctv: {
    note: "The camera pans on its arm and swings back.",
    motion: {
      p1: { ...at(9.5, 14.5), animation: run("cctv", "pan", 800) },
      p0: { ...at(9.5, 14.5), animation: run("cctv", "pan", 800) },
      p4: { ...at(9.5, 14.5), animation: run("cctv", "pan", 800) },
    },
    keyframes: kf("cctv", "pan", "0%{transform:none}30%{transform:rotate(-9deg)}65%{transform:rotate(5deg)}100%{transform:none}"),
  },

  car: {
    note: "The car pulls away: its body rocks back on the rear wheel and settles.",
    motion: {
      p0: { ...at(7, 17), animation: run("car", "rock", 700) },
      p2: { ...at(7, 17), animation: run("car", "rock", 700) },
    },
    keyframes: kf("car", "rock", "0%{transform:none}30%{transform:rotate(-3deg)}60%{transform:rotate(1deg)}100%{transform:none}"),
  },

  taxi: {
    note: "The roof sign blinks on, the headlights flash and the cab bobs on its wheels.",
    motion: {
      p0: { animation: run("taxi", "sign", 700) },
      p1: { animation: run("taxi", "bob", 650, 60) },
      p4: { animation: run("taxi", "bob", 650, 60) },
      p2: { animation: run("taxi", "light", 500, 200) },
      p3: { animation: run("taxi", "light", 500, 200) },
    },
    keyframes:
      kf("taxi", "sign", "0%{transform:none;opacity:1}20%{transform:translateY(-.6px);opacity:.3}40%{opacity:1}60%{opacity:.4}100%{transform:none;opacity:1}") +
      step("taxi", "bob", "translateY(-.6px)", "translateY(.2px)") +
      step("taxi", "light", "scale(1.8)"),
  },

  caravan: {
    note: "The caravan rocks on its axle as it is towed off, then settles.",
    motion: Object.fromEntries(["p0", "p1", "p2"].map((p) => [p, { ...at(8, 19), animation: run("caravan", "rock", 750) }])),
    keyframes: kf("caravan", "rock", "0%{transform:none}30%{transform:rotate(-2.5deg)}60%{transform:rotate(1deg)}100%{transform:none}"),
  },

  "car-battery": {
    note: "The terminals hop and the plus and minus light up in turn.",
    motion: {
      p4: { animation: run("car-battery", "hop", 450) },
      p2: { animation: run("car-battery", "hop", 450, 70) },
      p0: { animation: run("car-battery", "sign", 450, 120) },
      p1: { animation: run("car-battery", "sign", 450, 120) },
      p3: { animation: run("car-battery", "sign", 450, 240) },
    },
    keyframes: step("car-battery", "hop", "translateY(-.7px)") + step("car-battery", "sign", "scale(1.3)"),
  },

  carrot: {
    note: "The leaves wave from the top of the carrot, which sways the other way.",
    motion: {
      p1: { ...at(15, 9), animation: run("carrot", "leaves", 750) },
      p0: { ...at(15, 9), animation: run("carrot", "root", 750) },
      p2: { ...at(15, 9), animation: run("carrot", "root", 750) },
    },
    keyframes:
      kf("carrot", "leaves", "0%{transform:none}25%{transform:rotate(-12deg)}55%{transform:rotate(9deg)}80%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("carrot", "root", "0%{transform:none}25%{transform:rotate(3deg)}55%{transform:rotate(-2deg)}100%{transform:none}"),
  },

  "sim-card": {
    note: "The card slides up into its slot and the chip clicks into place.",
    motion: {
      p1: { animation: run("sim-card", "slide", 650) },
      p3: { animation: run("sim-card", "chip", 650) },
      p0: { animation: run("sim-card", "chip", 650) },
      p2: { animation: run("sim-card", "chip", 650) },
    },
    keyframes:
      step("sim-card", "slide", "translateY(-1.2px)", "translateY(.3px)") +
      kf("sim-card", "chip", "0%{transform:none}35%{transform:translateY(-1.2px)}55%{transform:translateY(-.4px) scale(.9)}75%{transform:none}100%{transform:none}"),
  },

  certificate: {
    note: "The text lines write themselves and the rosette's ribbon swings below it.",
    draw: ["p0", "p3"],
    motion: {
      p0: draw("certificate", 380),
      p3: draw("certificate", 300, 120),
      p4: { animation: run("certificate", "seal", 550, 150) },
      p1: { ...at(19, 15), animation: run("certificate", "ribbon", 750, 150) },
    },
    keyframes:
      drawKf("certificate") +
      step("certificate", "seal", "scale(1.12)") +
      kf("certificate", "ribbon", "0%{transform:none}30%{transform:rotate(10deg)}60%{transform:rotate(-6deg)}85%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "chart-line": {
    note: "The line draws itself across the chart.",
    draw: ["p1"],
    motion: { p1: draw("chart-line", 650) },
    keyframes: drawKf("chart-line"),
  },

  "chart-pie": {
    note: "The slice pulls out of the pie and slots back in.",
    motion: {
      p0: { animation: run("chart-pie", "slice", 650) },
      p1: { animation: run("chart-pie", "rest", 650) },
    },
    keyframes: step("chart-pie", "slice", "translate(1px,-1px)", "translate(-.2px,.2px)") + step("chart-pie", "rest", "translate(-.3px,.3px)"),
  },

  "chart-bar-increasing": {
    note: "The bars grow out from the axis, shortest first.",
    motion: {
      p3: { origin: "0% 50%", animation: run("chart-bar-increasing", "grow", 500, 0, "backwards") },
      p1: { origin: "0% 50%", animation: run("chart-bar-increasing", "grow", 500, 90, "backwards") },
      p2: { origin: "0% 50%", animation: run("chart-bar-increasing", "grow", 500, 180, "backwards") },
    },
    keyframes: kf("chart-bar-increasing", "grow", "0%{transform:scaleX(0)}65%{transform:scaleX(1.08)}100%{transform:none}"),
  },

  "chart-bar-decreasing": {
    note: "The bars grow out from the axis, longest first.",
    motion: {
      p3: { origin: "0% 50%", animation: run("chart-bar-decreasing", "grow", 500, 0, "backwards") },
      p1: { origin: "0% 50%", animation: run("chart-bar-decreasing", "grow", 500, 90, "backwards") },
      p2: { origin: "0% 50%", animation: run("chart-bar-decreasing", "grow", 500, 180, "backwards") },
    },
    keyframes: kf("chart-bar-decreasing", "grow", "0%{transform:scaleX(0)}65%{transform:scaleX(1.08)}100%{transform:none}"),
  },

  "chart-stacked": {
    note: "The two stacked columns rise from the axis, one after the other.",
    motion: {
      p4: { ...at(9, 17), animation: run("chart-stacked", "rise", 550, 0, "backwards") },
      p0: { ...at(9, 17), animation: run("chart-stacked", "rise", 550, 0, "backwards") },
      p3: { ...at(17, 17), animation: run("chart-stacked", "rise", 550, 100, "backwards") },
      p1: { ...at(17, 17), animation: run("chart-stacked", "rise", 550, 100, "backwards") },
    },
    keyframes: kf("chart-stacked", "rise", "0%{transform:scaleY(0)}65%{transform:scaleY(1.07)}100%{transform:none}"),
  },

  "chart-gantt": {
    note: "The task bars slide in along the timeline, one after another.",
    motion: {
      p0: { animation: run("chart-gantt", "in", 500, 0, "backwards") },
      p3: { animation: run("chart-gantt", "in", 500, 90, "backwards") },
      p1: { animation: run("chart-gantt", "in", 500, 180, "backwards") },
    },
    keyframes: kf("chart-gantt", "in", "0%{transform:translateX(-3px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  "chart-scatter": {
    note: "The points pop onto the chart one by one.",
    motion: {
      p3: { animation: run("chart-scatter", "in", 380, 0, "backwards") },
      p0: { animation: run("chart-scatter", "in", 380, 70, "backwards") },
      p2: { animation: run("chart-scatter", "in", 380, 140, "backwards") },
      p4: { animation: run("chart-scatter", "in", 380, 210, "backwards") },
      p1: { animation: run("chart-scatter", "in", 380, 280, "backwards") },
    },
    keyframes: popInKf("chart-scatter"),
  },

  "chart-spline": {
    note: "The curve draws itself across the chart.",
    draw: ["p1"],
    motion: { p1: draw("chart-spline", 700) },
    keyframes: drawKf("chart-spline"),
  },

  "chart-network": {
    note: "The links draw themselves from node to node and each node pulses as it is reached.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p2: draw("chart-network", 300, 0),
      p4: { animation: run("chart-network", "node", 400, 200) },
      p0: draw("chart-network", 300, 200),
      p5: { animation: run("chart-network", "node", 400, 400) },
      p1: draw("chart-network", 300, 400),
      p6: { animation: run("chart-network", "node", 400, 600) },
    },
    keyframes: drawKf("chart-network") + step("chart-network", "node", "scale(1.3)"),
  },

  "chart-radar": {
    note: "The data web spreads out over its axes from the centre.",
    motion: { p1: { ...at(12, 12), animation: run("chart-radar", "spread", 650) } },
    keyframes: kf("chart-radar", "spread", "0%{transform:scale(.4)}60%{transform:scale(1.07)}100%{transform:none}"),
  },

  "check-double": {
    note: "The first tick draws itself, then the second.",
    draw: ["p0", "p1"],
    motion: { p0: draw("check-double", 400), p1: draw("check-double", 400, 160) },
    keyframes: drawKf("check-double"),
  },

  "chef-hat": {
    note: "The hat puffs up from its band and settles.",
    motion: {
      p2: { ...at(12, 21), animation: run("chef-hat", "puff", 700) },
      p0: { ...at(12, 21), animation: run("chef-hat", "puff", 700) },
      p1: { ...at(12, 21), animation: run("chef-hat", "puff", 700) },
      p3: { ...at(12, 21), animation: run("chef-hat", "band", 700) },
    },
    keyframes:
      kf("chef-hat", "puff", "0%{transform:none}25%{transform:scale(1.06,.94)}55%{transform:scale(.97,1.06)}80%{transform:scale(1.01,.99)}100%{transform:none}") +
      kf("chef-hat", "band", "0%{transform:none}25%{transform:scale(1.04,.96)}55%{transform:scale(.98,1.02)}100%{transform:none}"),
  },

  cherry: {
    note: "The cherries swing on their stems from the twig, and the leaf flutters.",
    motion: {
      p0: { ...at(12, 2), animation: run("cherry", "swing", 800) },
      p1: { ...at(12, 2), animation: run("cherry", "swing", 800) },
      p2: { ...at(12, 2), animation: run("cherry", "swing", 800) },
      p3: { ...at(12, 2), animation: run("cherry", "leaf", 800) },
    },
    keyframes:
      kf("cherry", "swing", "0%{transform:none}30%{transform:rotate(6deg)}60%{transform:rotate(-4deg)}85%{transform:rotate(1.5deg)}100%{transform:none}") +
      kf("cherry", "leaf", "0%{transform:none}30%{transform:rotate(-8deg)}60%{transform:rotate(5deg)}100%{transform:none}"),
  },

  chess: {
    note: "The knight hops off its base with a little rear and lands back on it.",
    motion: {
      ...Object.fromEntries(["p1", "p2", "p3", "p4"].map((p) => [p, { ...at(12, 18), animation: run("chess", "hop", 700) }])),
      p0: { origin: "50% 100%", animation: run("chess", "base", 700) },
    },
    keyframes:
      kf("chess", "hop", "0%{transform:none}35%{transform:translateY(-1.5px) rotate(-7deg)}65%{transform:translateY(.2px) rotate(1deg)}100%{transform:none}") +
      kf("chess", "base", "0%,55%{transform:none}65%{transform:scaleY(.85)}100%{transform:none}"),
  },

  "chevron-left": {
    note: "It nudges left and springs back.",
    motion: { p0: { animation: run("chevron-left", "nudge", 550) } },
    keyframes: step("chevron-left", "nudge", "translateX(-1.6px)", "translateX(.3px)"),
  },

  "chevron-first": {
    note: "The chevron runs up to the stop and the stop takes the knock.",
    motion: {
      p0: { animation: run("chevron-first", "run", 600) },
      p1: { animation: run("chevron-first", "stop", 600) },
    },
    keyframes:
      kf("chevron-first", "run", "0%{transform:none}35%{transform:translateX(-2px)}65%{transform:translateX(.3px)}100%{transform:none}") +
      kf("chevron-first", "stop", "0%,28%{transform:none}40%{transform:translateX(-.6px)}65%{transform:none}"),
  },

  "chevron-last": {
    note: "The chevron runs up to the stop and the stop takes the knock.",
    motion: {
      p0: { animation: run("chevron-last", "run", 600) },
      p1: { animation: run("chevron-last", "stop", 600) },
    },
    keyframes:
      kf("chevron-last", "run", "0%{transform:none}35%{transform:translateX(2px)}65%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("chevron-last", "stop", "0%,28%{transform:none}40%{transform:translateX(.6px)}65%{transform:none}"),
  },

  "chevrons-left": {
    note: "The two chevrons step left, the front one first.",
    motion: { p0: { animation: run("chevrons-left", "step", 550) }, p1: { animation: run("chevrons-left", "step", 550, 70) } },
    keyframes: step("chevrons-left", "step", "translateX(-1.5px)", "translateX(.3px)"),
  },

  "chevrons-right": {
    note: "The two chevrons step right, the front one first.",
    motion: { p1: { animation: run("chevrons-right", "step", 550) }, p0: { animation: run("chevrons-right", "step", 550, 70) } },
    keyframes: step("chevrons-right", "step", "translateX(1.5px)", "translateX(-.3px)"),
  },

  "chevrons-up": {
    note: "The two chevrons step up, the front one first.",
    motion: { p0: { animation: run("chevrons-up", "step", 550) }, p1: { animation: run("chevrons-up", "step", 550, 70) } },
    keyframes: step("chevrons-up", "step", "translateY(-1.5px)", "translateY(.3px)"),
  },

  "chevrons-down": {
    note: "The two chevrons step down, the front one first.",
    motion: { p1: { animation: run("chevrons-down", "step", 550) }, p0: { animation: run("chevrons-down", "step", 550, 70) } },
    keyframes: step("chevrons-down", "step", "translateY(1.5px)", "translateY(-.3px)"),
  },

  "chevrons-up-down": {
    note: "The two chevrons spread apart, up and down, and come back.",
    motion: { p1: { animation: run("chevrons-up-down", "up", 600) }, p0: { animation: run("chevrons-up-down", "down", 600) } },
    keyframes: step("chevrons-up-down", "up", "translateY(-1.3px)", "translateY(.2px)") + step("chevrons-up-down", "down", "translateY(1.3px)", "translateY(-.2px)"),
  },

  "chevrons-down-up": {
    note: "The two chevrons press together towards the middle and spring back.",
    motion: { p1: { animation: run("chevrons-down-up", "down", 600) }, p0: { animation: run("chevrons-down-up", "up", 600) } },
    keyframes: step("chevrons-down-up", "down", "translateY(1.3px)", "translateY(-.2px)") + step("chevrons-down-up", "up", "translateY(-1.3px)", "translateY(.2px)"),
  },

  "chevrons-left-right": {
    note: "The two chevrons spread apart, left and right, and come back.",
    motion: { p0: { animation: run("chevrons-left-right", "left", 600) }, p1: { animation: run("chevrons-left-right", "right", 600) } },
    keyframes: step("chevrons-left-right", "left", "translateX(-1.3px)", "translateX(.2px)") + step("chevrons-left-right", "right", "translateX(1.3px)", "translateX(-.2px)"),
  },

  "no-smoking": {
    note: "The smoke drifts up and away and the slash cuts across.",
    draw: ["p2"],
    motion: {
      p1: { animation: run("no-smoking", "smoke", 700) },
      p4: { animation: run("no-smoking", "smoke", 700, 80) },
      p2: draw("no-smoking", 400, 150),
    },
    keyframes:
      drawKf("no-smoking") +
      kf("no-smoking", "smoke", "0%{transform:none;opacity:1}40%{transform:translateY(-1.2px);opacity:0}41%{transform:translateY(1px);opacity:0}100%{transform:none;opacity:1}"),
  },

  circle: {
    note: "The circle squashes and springs back round.",
    motion: { p0: { animation: run("circle", "squash", 600) } },
    keyframes: kf("circle", "squash", "0%{transform:none}30%{transform:scale(1.08,.92)}60%{transform:scale(.97,1.03)}100%{transform:none}"),
  },

  "circle-dashed": {
    note: "The dashes chase each other an eighth of a turn round the circle.",
    motion: Object.fromEntries(
      ["p0", "p2", "p6", "p3", "p7", "p1", "p4", "p5"].map((p, i) => [p, { ...at(12, 12), animation: run("circle-dashed", "turn", 650, i * 20) }]),
    ),
    keyframes: kf("circle-dashed", "turn", "0%{transform:none}100%{transform:rotate(45deg)}"),
  },

  "circle-dot": {
    note: "The dot springs out and settles back in the middle of the ring.",
    motion: {
      p0: { animation: run("circle-dot", "dot", 550) },
      p1: { animation: run("circle-dot", "ring", 550) },
    },
    keyframes:
      kf("circle-dot", "dot", "0%{transform:none}35%{transform:scale(2.4)}65%{transform:scale(.8)}100%{transform:none}") +
      step("circle-dot", "ring", "scale(.95)"),
  },

  "circle-dollar": {
    note: "The coin spins on its edge and the dollar sign comes round with it.",
    motion: {
      p0: { ...at(12, 12), animation: run("circle-dollar", "spin", 700) },
      p1: { ...at(12, 12), animation: run("circle-dollar", "spin", 700, 30) },
      p2: { ...at(12, 12), animation: run("circle-dollar", "spin", 700, 30) },
    },
    keyframes: kf("circle-dollar", "spin", "0%{transform:none}40%{transform:scaleX(.1)}70%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  "circle-euro": {
    note: "The coin spins on its edge and the euro sign comes round with it.",
    motion: {
      p2: { ...at(12, 12), animation: run("circle-euro", "spin", 700) },
      p0: { ...at(12, 12), animation: run("circle-euro", "spin", 700, 30) },
      p1: { ...at(12, 12), animation: run("circle-euro", "spin", 700, 30) },
    },
    keyframes: kf("circle-euro", "spin", "0%{transform:none}40%{transform:scaleX(.1)}70%{transform:scaleX(1.05)}100%{transform:none}"),
  },

  "circle-more": {
    note: "The three dots hop in a wave.",
    motion: {
      p3: { animation: run("circle-more", "hop", 450) },
      p2: { animation: run("circle-more", "hop", 450, 80) },
      p1: { animation: run("circle-more", "hop", 450, 160) },
    },
    keyframes: step("circle-more", "hop", "translateY(-1.2px)"),
  },

  "medical-kit": {
    note: "The kit is lifted by its handle, the case following a beat behind; the cross pulses.",
    motion: {
      p2: { animation: run("medical-kit", "lift", 700) },
      ...Object.fromEntries(["p5", "p3", "p4"].map((p) => [p, { animation: run("medical-kit", "lift", 700, 50) }])),
      p0: { animation: run("medical-kit", "cross", 700, 50) },
      p1: { animation: run("medical-kit", "cross", 700, 50) },
    },
    keyframes:
      step("medical-kit", "lift", "translateY(-1.2px)", "translateY(.2px)") +
      kf("medical-kit", "cross", "0%{transform:none}35%{transform:translateY(-1.2px) scale(1.2)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "wine-bottle": {
    note: "The bottle tips over to pour from its base and rights itself.",
    motion: {
      p0: { ...at(12, 22), animation: run("wine-bottle", "pour", 800) },
      p1: { ...at(12, 22), animation: run("wine-bottle", "pour", 800) },
    },
    keyframes: kf("wine-bottle", "pour", "0%{transform:none}40%{transform:rotate(-16deg)}55%{transform:rotate(-16deg)}80%{transform:rotate(3deg)}100%{transform:none}"),
  },

  candy: {
    note: "The wrapper ends twist one way while the sweet turns the other.",
    motion: {
      p2: { origin: "0% 100%", animation: run("candy", "end", 700) },
      p4: { origin: "100% 0%", animation: run("candy", "end", 700) },
      p3: { ...at(12, 12), animation: run("candy", "sweet", 700) },
      p0: { ...at(12, 12), animation: run("candy", "sweet", 700) },
      p1: { ...at(12, 12), animation: run("candy", "sweet", 700) },
    },
    keyframes:
      kf("candy", "end", "0%{transform:none}30%{transform:rotate(16deg)}60%{transform:rotate(-8deg)}100%{transform:none}") +
      kf("candy", "sweet", "0%{transform:none}30%{transform:rotate(-6deg)}60%{transform:rotate(3deg)}100%{transform:none}"),
  },

  castle: {
    note: "The battlements pop up one after the other and the towers stretch tall.",
    motion: {
      p7: { origin: "50% 100%", animation: run("castle", "tower", 600) },
      p3: { origin: "50% 100%", animation: run("castle", "tower", 600, 60) },
      p0: { animation: run("castle", "pop", 500, 60) },
      p1: { animation: run("castle", "pop", 500, 130) },
      p2: { origin: "50% 100%", animation: run("castle", "gate", 600) },
    },
    keyframes:
      step("castle", "tower", "scaleY(1.12)") +
      step("castle", "pop", "translateY(-1px)") +
      step("castle", "gate", "scaleY(.8)"),
  },

  church: {
    note: "The cross on the tower rocks, as if the bell is ringing.",
    motion: {
      p0: { ...at(12, 12), animation: run("church", "ring", 800) },
      p1: { ...at(12, 12), animation: run("church", "ring", 800) },
      p4: { origin: "50% 100%", animation: run("church", "tower", 800) },
    },
    keyframes:
      kf("church", "ring", "0%{transform:none}20%{transform:rotate(12deg)}45%{transform:rotate(-10deg)}70%{transform:rotate(5deg)}100%{transform:none}") +
      kf("church", "tower", "0%{transform:none}20%{transform:scaleY(1.02)}45%{transform:scaleY(.99)}100%{transform:none}"),
  },

  "captions-off": {
    note: "The slash cuts across and the caption lines shrink back to their start.",
    draw: ["p3"],
    motion: {
      p3: draw("captions-off", 400),
      p4: { origin: "0% 50%", animation: run("captions-off", "line", 600, 120) },
      p5: { origin: "0% 50%", animation: run("captions-off", "line", 600, 180) },
      p1: { origin: "0% 50%", animation: run("captions-off", "line", 600, 150) },
    },
    keyframes: drawKf("captions-off") + kf("captions-off", "line", "0%{transform:none;opacity:1}40%{transform:scaleX(.3);opacity:.4}100%{transform:none;opacity:1}"),
  },
};

const BOOK = "M6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z";
/** Fill areas for outlines the source draws open (see FILLS in import-icons.ts). */
export const fills: Record<string, string> = {
  book: BOOK,
  "book-marked": BOOK,
  "book-audio": BOOK,
  "book-heart": BOOK,
  "book-user": BOOK,
  "book-plus": BOOK,
  // the whole camera body, the slash cut out of it
  "camera-off":
    "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4Z",
  "captions-off": "M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  // the sheet, cut around the rosette and its ribbon (about a unit clear of them) where the source leaves the corner open
  certificate: "M4 4h16a2 2 0 0 1 2 2v.675L18.061 7.327A5.75 5.75 0 0 0 14.262 16.255L12 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
  // the cover, cut clear of the lock in the corner the source leaves open for it, and the block of pages under it
  "book-lock": "M6.5 2H9.2V13.8H20V17H6.5A2.5 2.5 0 0 0 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z M6.5 17H20v4a1 1 0 0 1-1 1H6.5a2.5 2.5 0 0 1 0-5Z",
  // calendars: the page, cut around the badge (about a unit clear of it) in the corner the source leaves open for it
  "calendar-clock": "M21 7.338V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.338L7.251 16.159A8.75 8.75 0 0 1 16.159 7.251Z",
  "calendar-plus": "M21 11.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.3L13.25 18A2.75 2.75 0 0 1 16 15.25H16.25V15A2.75 2.75 0 0 1 18.185 12.373Z",
  "calendar-search": "M21 10.69V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25V17A5.75 5.75 0 0 1 17.084 11.323Z",
  "calendar-sync": "M21 8.517V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.517L8.25 16V10A2.75 2.75 0 0 1 13.42 8.695A7.75 7.75 0 0 1 16.43 8.262Z",
  "calendar-heart": "M21 10.125V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.127L11.349 17.263A5 5 0 0 1 15.208 11.351Z",
  // vehicles: the body, closed along the bottom with an arch clear of each wheel
  car: "M2.5 17A4.5 4.5 0 0 1 11.5 17H12.5A4.5 4.5 0 0 1 21.5 17L22 16v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4Z",
  bus: "M2 18V8a2 2 0 0 1 2-2h14C19.1 6 20.1 6.8 20.4 7.8L21.8 12.8C21.9 13.2 22 13.6 22 14C22 14.4 21.9 14.8 21.8 15.2C21.5 16.3 21 18 21 18H20.5A4.5 4.5 0 0 0 11.5 18A4.5 4.5 0 0 0 2.5 18Z",
  caravan: "M2 9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10H14V10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4.69A4.75 4.75 0 0 0 3.25 19L2 17Z",
  // the cake on its plate
  cake: "M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8Z",
  // the keep and the wall, each closed where they meet
  castle: "M6 5H18V11H6Z M2 11H22V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z",
  // the tower and the two wings, each closed where they meet
  church: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14Z M6 9L2.48 11.147A1 1 0 0 0 2 12.001V19a2 2 0 0 0 2 2H6Z M18 9l3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H18Z",
  // the knight, closed down the front of its neck to the base
  chess: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456L7 18Z",
};
