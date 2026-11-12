import type { Entry, Override } from "./types";

/** Batch m: its icons (pnpm import-icons m) and their motions. */
export const list: Entry[] = [
  ["Target", "target", "Target", "app", "pulse", ["goal", "aim", "focus", "bullseye"], "The rings ripple out from the bullseye."],
  ["Telescope", "telescope", "Telescope", "nature", "tilt", ["astronomy", "discover", "stars", "observe"], "The tube tilts up on its mount."],
  ["Tent", "tent", "Tent", "travel", "bounce", ["camping", "outdoors", "trip", "shelter"], "The door flaps open."],
  ["Terminal", "terminal", "Terminal", "development", "nudge-right", ["console", "shell", "command line", "prompt"], "The prompt nudges and the cursor blinks."],
  ["TestTube", "test-tube", "Test tube", "health", "tilt", ["lab", "science", "experiment", "sample"], "The tube tips and the liquid sloshes."],
  ["TextCursor", "text-cursor", "Text cursor", "text", "blink", ["caret", "i-beam", "typing", "edit"], "The caret blinks."],
  ["TextCursorInput", "text-input", "Text field", "text", "blink", ["input", "field", "form", "type"], "The caret blinks in the field."],
  ["TextQuote", "text-quote", "Block quote", "text", "draw", ["quote", "citation", "blockquote", "excerpt"], "The quoted lines write themselves."],
  ["TextSearch", "text-search", "Search text", "text", "wiggle", ["find", "lookup", "search", "lines"], "The lens circles over the lines."],
  ["TextWrap", "text-wrap", "Wrap text", "text", "nudge-down", ["wrap", "line break", "format", "paragraph"], "The text wraps round to the next line."],
  ["Theater", "theater", "Theater", "media", "wave", ["stage", "show", "curtain", "performance"], "The curtains sway open."],
  ["Thermometer", "thermometer", "Temperature", "weather", "nudge-up", ["temperature", "heat", "degrees", "weather"], "The mercury rises."],
  ["ThermometerSnowflake", "thermometer-cold", "Cold", "weather", "spin", ["cold", "freezing", "frost", "temperature"], "The snowflake turns as the thermometer chills."],
  ["ThermometerSun", "thermometer-hot", "Hot", "weather", "spin", ["hot", "heat", "summer", "temperature"], "The sun's rays shine out."],
  ["ThumbsDown", "thumbs-down", "Dislike", "actions", "nudge-down", ["dislike", "bad", "vote down", "reject"], "The thumb jabs down."],
  ["ThumbsUp", "thumbs-up", "Like", "actions", "nudge-up", ["like", "good", "approve", "vote up"], "The thumb jabs up."],
  ["Ticket", "ticket", "Ticket", "commerce", "wiggle", ["event", "admission", "pass", "booking"], "The ticket flips at its notch."],
  ["TicketCheck", "ticket-check", "Ticket confirmed", "commerce", "draw", ["booked", "valid", "confirmed", "admission"], "The tick draws on the ticket."],
  ["TicketPercent", "coupon", "Coupon", "commerce", "wiggle", ["discount", "voucher", "sale", "promo"], "The coupon wiggles and the percent sign spins."],
  ["TicketsPlane", "boarding-pass", "Boarding pass", "travel", "launch", ["flight", "ticket", "travel", "airline"], "The plane takes off from the pass."],
  ["Timeline", "timeline", "Timeline", "charts", "draw", ["history", "events", "roadmap", "steps"], "The events pop in along the line."],
  ["TimerOff", "timer-off", "Timer off", "status", "shake", ["stop timer", "no timer", "disabled", "stopwatch"], "The stopwatch shakes and the slash strikes."],
  ["TimerReset", "timer-reset", "Reset timer", "actions", "spin-back", ["restart", "reset", "stopwatch", "again"], "The hand sweeps back to zero."],
  ["ToggleLeft", "toggle-off", "Switch off", "actions", "nudge-left", ["switch", "off", "disable", "setting"], "The knob slides across."],
  ["ToggleRight", "toggle-on", "Switch on", "actions", "nudge-right", ["switch", "on", "enable", "setting"], "The knob slides across."],
  ["Toilet", "toilet", "Toilet", "travel", "bounce", ["restroom", "bathroom", "wc", "lavatory"], "The lid lifts."],
  ["Toolbox", "toolbox", "Toolbox", "development", "bounce", ["tools", "kit", "repair", "utilities"], "The box lifts by its handle."],
  ["ToyBrick", "toy-brick", "Building block", "app", "bounce", ["plugin", "extension", "lego", "block"], "The brick drops into place."],
  ["Tornado", "tornado", "Tornado", "weather", "wave", ["storm", "twister", "wind", "cyclone"], "The funnel swirls."],
  ["Touchpad", "touchpad", "Touchpad", "devices", "pulse", ["trackpad", "mouse", "laptop", "gesture"], "The buttons click."],
  ["TowerControl", "control-tower", "Control tower", "travel", "pulse", ["airport", "air traffic", "radar", "tower"], "The cab lights flash."],
  ["Tractor", "tractor", "Tractor", "nature", "nudge-right", ["farm", "agriculture", "vehicle", "field"], "The tractor rolls on its wheels."],
  ["TrafficCone", "traffic-cone", "Traffic cone", "status", "wiggle", ["construction", "work in progress", "caution", "roadwork"], "The cone wobbles on its base."],
  ["Train", "train", "Train", "travel", "nudge-right", ["rail", "transit", "tram", "commute"], "The train rocks on its wheels."],
  ["TreeDeciduous", "tree", "Tree", "nature", "swing", ["nature", "park", "forest", "plant"], "The crown sways on its trunk."],
  ["TreePine", "pine-tree", "Pine tree", "nature", "swing", ["evergreen", "forest", "christmas", "conifer"], "The tree sways on its trunk."],
  ["TrendingDown", "trending-down", "Trending down", "charts", "draw", ["decrease", "loss", "drop", "decline"], "The line draws itself down."],
  ["TrendingUp", "trending-up", "Trending up", "charts", "draw", ["increase", "growth", "gain", "rise"], "The line draws itself up."],
  ["Triangle", "triangle", "Triangle", "shapes", "spin", ["shape", "delta", "polygon", "geometry"], "The triangle turns a third."],
  ["Truck", "truck", "Truck", "commerce", "nudge-right", ["delivery", "shipping", "transport", "lorry"], "The truck drives on with wheels bumping."],
  ["Turntable", "turntable", "Turntable", "media", "spin", ["record player", "vinyl", "dj", "music"], "The arm drops onto the spinning record."],
  ["Turtle", "turtle", "Slow", "nature", "nudge-right", ["slow", "tortoise", "animal", "pace"], "The turtle peeks its head out."],
  ["Tv", "tv", "TV", "devices", "flash", ["television", "screen", "watch", "display"], "The screen flickers on."],
  ["TvMinimalPlay", "tv-play", "Watch", "media", "pop", ["stream", "video", "play", "tv"], "The play button pops on the screen."],
  ["Umbrella", "umbrella", "Umbrella", "weather", "swing", ["rain", "protection", "insurance", "weather"], "The umbrella swings on its handle."],
  ["Underline", "underline", "Underline", "text", "draw", ["format", "text style", "underline", "emphasis"], "The underline draws itself."],
  ["UnfoldVertical", "unfold", "Expand", "actions", "pulse", ["expand", "unfold", "open", "show more"], "The arrows spread apart."],
  ["Ungroup", "ungroup", "Ungroup", "actions", "pulse", ["separate", "split", "detach", "objects"], "The two boxes pull apart."],
  ["Unlink", "unlink", "Unlink", "actions", "shake", ["remove link", "break", "disconnect", "chain"], "The two links pull apart."],
  ["Unplug", "unplug", "Disconnected", "status", "shake", ["disconnect", "offline", "unplug", "power"], "The plug and socket pull apart."],
  ["Usb", "usb", "USB", "devices", "pulse", ["usb", "connection", "port", "cable"], "The branches draw out from the stem."],
  ["User", "user", "User", "people", "bounce", ["person", "profile", "account", "avatar"], "The head bobs."],
  ["UserCheck", "user-check", "Verified user", "people", "draw", ["approved", "verified", "member", "confirm"], "The tick draws itself beside the person."],
  ["UserCog", "user-settings", "Account settings", "people", "spin", ["profile settings", "preferences", "manage", "cog"], "The cog turns beside the person."],
  ["UserMinus", "user-minus", "Remove person", "people", "shake", ["remove", "unfollow", "delete user", "kick"], "The minus slides away."],
  ["UserPen", "user-edit", "Edit profile", "people", "wiggle", ["edit", "profile", "rename", "update"], "The pen scribbles."],
  ["UserSearch", "user-search", "Find people", "people", "wiggle", ["search", "find", "lookup", "member"], "The lens circles."],
  ["UserX", "user-x", "Block user", "people", "shake", ["block", "remove", "ban", "reject"], "The cross strikes."],
  ["UserLock", "user-lock", "Private account", "people", "shake", ["private", "secure", "locked", "account"], "The lock shackle snaps shut."],
  ["UserShield", "user-shield", "Admin", "people", "pulse", ["admin", "moderator", "protected", "security"], "The shield rises."],
  ["UserStar", "user-star", "Favourite person", "people", "spin", ["vip", "favourite", "featured", "member"], "The star spins."],
  ["Van", "van", "Van", "travel", "nudge-right", ["delivery", "vehicle", "transport", "minivan"], "The van rocks on its wheels."],
  ["Variable", "variable", "Variable", "development", "pulse", ["code", "math", "function", "formula"], "The brackets spread and the x turns."],
  ["Vault", "vault", "Vault", "commerce", "spin", ["safe", "secure", "bank", "storage"], "The dial turns."],
  ["VectorSquare", "vector", "Vector", "shapes", "pulse", ["design", "shape", "path", "anchor points"], "The corner handles pop out."],
  ["Vegan", "vegan", "Vegan", "food", "wiggle", ["plant based", "vegetarian", "leaf", "diet"], "The leaf sways."],
  ["VenetianMask", "mask", "Incognito", "people", "tilt", ["incognito", "anonymous", "private", "disguise"], "The mask tilts."],
  ["Vibrate", "vibrate", "Vibrate", "devices", "shake", ["buzz", "phone", "silent", "haptic"], "The phone buzzes between its waves."],
  ["VideoOff", "video-off", "Camera off", "media", "shake", ["camera off", "no video", "disabled", "mute camera"], "The slash strikes the camera."],
  ["View", "view", "View", "actions", "blink", ["preview", "look", "see", "watch"], "The eye blinks inside the frame."],
  ["Virus", "virus", "Virus", "health", "spin", ["germ", "infection", "malware", "bacteria"], "The virus turns and its spikes pulse."],
  ["Voicemail", "voicemail", "Voicemail", "communication", "pulse", ["voice message", "phone", "tape", "message"], "The reels turn."],
  ["Vote", "vote", "Vote", "actions", "nudge-down", ["ballot", "election", "poll", "choose"], "The ballot drops into the box."],
  ["Wallet", "wallet", "Wallet", "commerce", "bounce", ["money", "payment", "balance", "purse"], "The clasp opens."],
  ["Wallpaper", "wallpaper", "Wallpaper", "app", "pop", ["background", "desktop", "theme", "image"], "The picture rolls up and down."],
  ["Warehouse", "warehouse", "Warehouse", "commerce", "bounce", ["storage", "inventory", "depot", "stock"], "The shelves fill up."],
  ["WashingMachine", "washing-machine", "Washing machine", "devices", "spin", ["laundry", "washer", "clean", "appliance"], "The drum spins."],
  ["Watch", "watch", "Watch", "devices", "spin", ["wristwatch", "time", "smartwatch", "clock"], "The hands tick on the face."],
  ["Waypoints", "waypoints", "Waypoints", "navigation", "draw", ["route", "path", "nodes", "journey"], "The route draws from point to point."],
  ["Webcam", "webcam", "Webcam", "devices", "blink", ["camera", "video call", "meeting", "stream"], "The lens focuses."],
  ["Webhook", "webhook", "Webhook", "development", "spin", ["integration", "api", "callback", "event"], "The three hooks turn round together."],
  ["Weight", "weight", "Weight", "health", "bounce", ["scale", "heavy", "mass", "gym"], "The weight drops and settles."],
  ["Wheat", "wheat", "Grain", "food", "swing", ["grain", "gluten", "farm", "harvest"], "The ear sways on its stalk."],
  ["Whistle", "whistle", "Whistle", "app", "shake", ["referee", "sport", "alert", "coach"], "The whistle trills."],
  ["WholeWord", "whole-word", "Whole word", "text", "pulse", ["match whole word", "search option", "text", "find"], "The letters bounce on the baseline."],
  ["Wifi", "wifi", "Wi-Fi", "devices", "wave", ["wireless", "internet", "signal", "network"], "The signal arcs light up one by one."],
  ["WifiLow", "wifi-low", "Weak signal", "status", "blink", ["weak", "poor connection", "signal", "network"], "The single arc flickers."],
  ["Wine", "wine", "Wine", "food", "tilt", ["drink", "glass", "bar", "celebrate"], "The glass tilts as if swirled."],
  ["Workflow", "workflow", "Workflow", "development", "draw", ["automation", "process", "flow", "pipeline"], "The connector draws from box to box."],
  ["ZoomIn", "zoom-in", "Zoom in", "actions", "pop", ["magnify", "enlarge", "bigger", "zoom"], "The lens grows and the plus turns."],
  ["ZoomOut", "zoom-out", "Zoom out", "actions", "pop", ["shrink", "smaller", "reduce", "zoom"], "The lens shrinks back."],
  ["ZapOff", "zap-off", "Power cut", "status", "shake", ["no power", "outage", "electricity off", "energy"], "The bolt flickers out."],
  ["Tally5", "tally", "Tally", "charts", "draw", ["count", "score", "marks", "five"], "The marks draw in and the fifth strikes them through."],
  ["TestTubes", "test-tubes", "Lab", "health", "wiggle", ["lab", "chemistry", "samples", "research"], "The tubes jostle in their rack."],
  ["TrainTrack", "train-track", "Railway", "travel", "draw", ["rail", "railway", "track", "route"], "The rails draw on into the distance."],
  ["Trees", "forest", "Forest", "nature", "swing", ["woods", "trees", "park", "nature"], "The trees sway one after the other."],
  ["UnfoldHorizontal", "unfold-horizontal", "Expand sideways", "actions", "pulse", ["expand", "widen", "spread", "horizontal"], "The arrows spread apart."],
  ["UsersRound", "group", "Group", "people", "bounce", ["team", "group", "members", "community"], "The two people bob in turn."],
  ["WalletCards", "wallet-cards", "Cards", "commerce", "bounce", ["cards", "payment methods", "credit card", "wallet"], "The cards rise out of the wallet."],
  ["TentTree", "campsite", "Campsite", "travel", "swing", ["camp", "campground", "outdoors", "nature"], "The tree sways beside the tent."],
  ["TowelRack", "towel-rack", "Towels", "travel", "swing", ["bathroom", "hotel", "amenities", "towel"], "The towel sways on the rail."],
  ["UserKey", "user-key", "Access key", "people", "wiggle", ["access", "login", "credentials", "key"], "The key turns."],
  ["WifiSync", "wifi-sync", "Reconnecting", "status", "spin", ["sync", "reconnect", "network", "wifi"], "The arrows turn round the signal."],
];

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});
/** an animation of the icon's own keyframes `ki-<icon>-<kf>` */
const anim = (icon: string, kf: string, s: number, delay = 0, extra = "") =>
  `ki-${icon}-${kf} ${s}s ${SMOOTH}${delay ? ` ${delay}ms` : ""}${extra ? ` ${extra}` : ""}`;
const kf = (icon: string, name: string, body: string) => `@keyframes ki-${icon}-${name}{${body}}`;
/** around a point of the 24 grid */
const at = (x: number, y: number) => ({ box: "view-box" as const, origin: `${x}px ${y}px` });

/** shoulders the source leaves open at the bottom, closed for the fill */
const SHOULDERS = "M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2Z";
export const fills: Record<string, string> = {
  user: "M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2Z",
  "user-check": SHOULDERS,
  "user-minus": SHOULDERS,
  "user-x": SHOULDERS,
  group: "M2 21a8 8 0 0 1 16 0Z",
  // the tube, open at the top under its rim
  "test-tube": "M9.5 2h5v17.5a2.5 2.5 0 0 1-5 0Z",
  // the camera body and its lens, which the source breaks for the slash
  // the shoulders, cut straight down where the source breaks them off for the badge (well clear of it)
  "user-edit": "M3 21v-2a4 4 0 0 1 4-4h4.5L10.2 21Z",
  "user-lock": "M3 21v-2a4 4 0 0 1 4-4h2.5V21Z",
  "user-search": "M3 21v-2a4 4 0 0 1 4-4h3.3V21Z",
  "user-settings": "M2 21v-2a4 4 0 0 1 4-4h4V21Z",
  "user-shield": "M2 21v-2a4 4 0 0 1 4-4h4V21Z",
  "user-star": "M3 21v-2a4 4 0 0 1 4-4h1V21Z",
  "user-key": "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578L15.3 21Z",
  // box and cab as one, closed along the bottom where the source breaks it for the wheels (as the ambulance)
  truck:
    "M14 8H17.52A1 1 0 0 1 18.3 8.376L21.78 12.726A1 1 0 0 1 22 13.35V17A1 1 0 0 1 21 18H3A1 1 0 0 1 2 17V6A2 2 0 0 1 4 4H12A2 2 0 0 1 14 6Z",
  // the van, closed along the bottom; the windscreen (between the pillar, the sill and the roof's curve) stays open
  van: "M13 6H4A2 2 0 0 0 2 8V17A1 1 0 0 0 3 18H21A1 1 0 0 0 22 17V13.91A1 1 0 0 0 21.712 13.208L20.814 12.298A1 1 0 0 0 20.102 12H14A1 1 0 0 1 13 11Z",
  // the hood, from a unit clear of the big wheel (an arc around it) to the front; the cab is a glass frame, left open
  tractor: "M13.816 11.312L21 11.9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H14.146A7.75 7.75 0 0 0 13.816 11.312Z",
  // the card strip and the body, each closed along the line between them; the clasp is a notch (its tab stays open)
  wallet:
    "M5 3H18A1 1 0 0 1 19 4V7H5A2 2 0 0 1 5 3Z M5 7H20A1 1 0 0 1 21 8V12H18A2 2 0 0 0 18 16H21V20A1 1 0 0 1 20 21H5A2 2 0 0 1 3 19V5A2 2 0 0 0 5 7Z",
  // the tent under the crossing poles, with the door left open
  tent: "M12 6.429L20.5 21H15.5L12 15L8.5 21H3.5Z",
  // tank, bowl and foot as one
  toilet:
    "M5 2h8a2 2 0 0 1 2 2v8H20a1 1 0 0 1 1 1a5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18H8A5 5 0 0 1 3 13V4A2 2 0 0 1 5 2Z",
  // both tubes, open at the top under their rims
  "test-tubes": "M4 2H9V19.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5Z M15 2H20V19.5A2.5 2.5 0 0 1 17.5 22A2.5 2.5 0 0 1 15 19.5Z",
  // the two studs, closed along the top of the brick
  "toy-brick": "M6 4h3c.6 0 1 .4 1 1v3H5V5a1 1 0 0 1 1-1Z M15 4h3c.6 0 1 .4 1 1v3h-5V5a1 1 0 0 1 1-1Z",
  // the stub behind the pass, closed along the pass's top edge
  "boarding-pass": "M3.173 8.18L14.173 3.18A2 2 0 0 1 16.82 4.173L18.56 8H4A2 2 0 0 0 3.173 8.18Z",
  "video-off":
    "M4 6h10a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.26a.5.5 0 0 1-.752.432L16 13.5V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z",
};

// shared keyframe bodies
const SWAY = "0%{transform:none}30%{transform:rotate(-6deg)}60%{transform:rotate(3.5deg)}82%{transform:rotate(-1.2deg)}100%{transform:none}";
const BOB = "0%{transform:none}35%{transform:translateY(-1.2px)}65%{transform:translateY(.3px)}100%{transform:none}";
const POP = "0%{transform:scale(.4);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:none;opacity:1}";
const BLINK2 = "0%,100%{opacity:1}18%{opacity:0}36%{opacity:1}54%{opacity:0}72%{opacity:1}";
const SHAKE =
  "0%{transform:none}15%{transform:translateX(-.8px)}30%{transform:translateX(.8px)}45%{transform:translateX(-.6px)}60%{transform:translateX(.5px)}75%{transform:translateX(-.2px)}100%{transform:none}";
const BUMP = "0%{transform:none}25%{transform:translateY(-.8px)}50%{transform:translateY(.2px)}75%{transform:translateY(-.4px)}100%{transform:none}";
const DRIVE = "0%{transform:none}25%{transform:translate(.6px,-.8px)}50%{transform:translateY(.2px)}75%{transform:translateY(-.4px)}100%{transform:none}";
const SLIDE_IN = "0%{transform:translateX(-3px);opacity:0}60%{transform:translateX(.3px);opacity:1}100%{transform:none;opacity:1}";
const FLICKER_ON = "0%{opacity:1}12%{opacity:.35}26%{opacity:1}40%{opacity:.6}55%,100%{opacity:1}";
const DIM = "0%{opacity:1}35%{opacity:.2}100%{opacity:1}";
const ARC = "0%{opacity:1}15%{opacity:.2}60%,100%{opacity:1}";
const TRUNK = "0%{transform:none}30%{transform:skewX(4deg)}60%{transform:skewX(-2deg)}100%{transform:none}";
const SQUASH = "0%{transform:none}35%{transform:scaleY(.95)}65%{transform:scaleY(1.01)}100%{transform:none}";
/** the same motion for several parts */
const each = (parts: string[], m: object) => Object.fromEntries(parts.map((p) => [p, m]));

export const motions: Record<string, Override> = {
  "boarding-pass": {
    note: "The plane takes off up and away from the pass and lands back on it; the pass gives a small bounce.",
    motion: {
      ...each(["p0", "p1"], { animation: anim("boarding-pass", "plane", 0.75) }),
      ...each(["p6", "p3", "p4", "p5"], { animation: anim("boarding-pass", "pass", 0.6) }),
      p2: { animation: anim("boarding-pass", "pass", 0.6, 60) },
    },
    keyframes:
      kf("boarding-pass", "plane", "0%{transform:none;opacity:1}38%{transform:translate(3px,-3px);opacity:0}39%{transform:translate(-2px,2px);opacity:0}100%{transform:none;opacity:1}") +
      kf("boarding-pass", "pass", "0%,20%{transform:none}40%{transform:translateY(.6px)}70%{transform:none}"),
  },

  campsite: {
    note: "The tree sways from its trunk, the tent door flaps open and the moon glows.",
    motion: {
      ...each(["p1", "p2", "p3"], { ...at(17, 14), animation: anim("campsite", "sway", 0.8) }),
      p6: { ...at(9, 14), animation: anim("campsite", "door", 0.7, 60) },
      p0: { origin: "50% 50%", animation: anim("campsite", "glow", 0.6, 120) },
    },
    keyframes:
      kf("campsite", "sway", SWAY) +
      kf("campsite", "door", "0%{transform:none}35%{transform:rotate(-14deg)}65%{transform:rotate(3deg)}100%{transform:none}") +
      kf("campsite", "glow", "0%{transform:none}40%{transform:scale(1.25)}100%{transform:none}"),
  },

  "control-tower": {
    note: "The cab rises on its stretching legs and the beacon on top blinks.",
    motion: {
      ...each(["p0", "p3", "p4"], { to: { transform: "translateY(-1px)" } }),
      p5: { to: { transform: "translateY(-1px)" }, delay: 40 },
      p6: { to: { transform: "translateY(-1px)" }, delay: 40, animation: `ki-control-tower-beacon .9s linear 120ms` },
      ...each(["p1", "p2"], { origin: "50% 100%", to: { transform: "scaleY(1.11)" } }),
    },
    keyframes: kf("control-tower", "beacon", BLINK2),
  },

  coupon: {
    note: "The coupon wiggles, the percent slash spins round and the two dots pop.",
    motion: {
      p0: { ...at(12, 12), animation: anim("coupon", "wiggle", 0.7) },
      p2: { origin: "50% 50%", animation: anim("coupon", "spin", 0.6, 60) },
      p1: { origin: "50% 50%", animation: anim("coupon", "dot", 0.5, 160) },
      p3: { origin: "50% 50%", animation: anim("coupon", "dot", 0.5, 220) },
    },
    keyframes:
      kf("coupon", "wiggle", "0%{transform:none}25%{transform:rotate(-6deg)}50%{transform:rotate(4deg)}75%{transform:rotate(-1.5deg)}100%{transform:none}") +
      kf("coupon", "spin", "from{transform:none}to{transform:rotate(180deg)}") +
      kf("coupon", "dot", "0%{transform:none}40%{transform:scale(1.8)}100%{transform:none}"),
  },

  forest: {
    note: "The two trees sway from their trunks, one after the other.",
    motion: {
      p0: { ...at(7, 16), animation: anim("forest", "sway", 0.8) },
      p3: { ...at(13, 19), animation: anim("forest", "sway", 0.8, 100) },
    },
    keyframes: kf("forest", "sway", SWAY),
  },

  group: {
    note: "The front person bobs and the one behind follows a beat later.",
    motion: {
      p1: { animation: anim("group", "bob", 0.6) },
      p0: { origin: "50% 100%", animation: anim("group", "body", 0.6) },
      p2: { animation: anim("group", "bob", 0.6, 110) },
    },
    keyframes: kf("group", "bob", BOB) + kf("group", "body", SQUASH),
  },

  mask: {
    note: "The mask tilts as if raised to the face, its eyes glancing to the side.",
    motion: {
      p1: { ...at(12, 12), animation: anim("mask", "tilt", 0.8) },
      ...each(["p0", "p2"], { ...at(12, 12), animation: anim("mask", "eyes", 0.8) }),
    },
    keyframes:
      kf("mask", "tilt", "0%{transform:none}30%{transform:translateY(-1px) rotate(-8deg)}62%{transform:rotate(4deg)}100%{transform:none}") +
      kf("mask", "eyes", "0%{transform:none}30%{transform:translate(-.7px,-1px) rotate(-8deg)}62%{transform:translateX(.6px) rotate(4deg)}100%{transform:none}"),
  },

  "pine-tree": {
    note: "The tree sways from the top of its trunk.",
    motion: {
      p0: { ...at(12, 19), animation: anim("pine-tree", "sway", 0.8) },
      p1: { origin: "50% 100%", animation: anim("pine-tree", "trunk", 0.8) },
    },
    keyframes: kf("pine-tree", "sway", SWAY) + kf("pine-tree", "trunk", TRUNK),
  },

  tally: {
    note: "Four marks draw themselves one by one and the fifth strikes through them.",
    draw: ["p0", "p1", "p2", "p3", "p4"],
    motion: {
      p0: draw("tally", 250, 0),
      p1: draw("tally", 250, 70),
      p2: draw("tally", 250, 140),
      p3: draw("tally", 250, 210),
      p4: draw("tally", 350, 330),
    },
    keyframes: drawKf("tally"),
  },

  target: {
    note: "The rings ripple out from the bullseye, inside first.",
    motion: {
      p2: { origin: "50% 50%", animation: anim("target", "ripple", 0.55) },
      p1: { origin: "50% 50%", animation: anim("target", "ripple", 0.55, 80) },
      p0: { origin: "50% 50%", animation: anim("target", "ripple", 0.55, 160) },
    },
    keyframes: kf("target", "ripple", "0%{transform:none}35%{transform:scale(1.12)}70%{transform:scale(.97)}100%{transform:none}"),
  },

  telescope: {
    note: "The tube tilts up on its mount while the legs stay planted.",
    motion: {
      ...each(["p0", "p1", "p4"], { ...at(12, 13), to: { transform: "rotate(-8deg)" } }),
      p3: { ...at(12, 13), to: { transform: "rotate(-8deg)" }, delay: 30 },
      p6: { origin: "50% 50%", to: { transform: "scale(1.1)" } },
    },
  },

  tent: {
    note: "The door flap swings open and the tent breathes in the wind.",
    motion: {
      p2: { origin: "50% 0%", animation: anim("tent", "door", 0.7) },
      ...each(["p0", "p1"], { origin: "50% 100%", animation: anim("tent", "puff", 0.7, 60) }),
    },
    keyframes:
      kf("tent", "door", "0%{transform:none}35%{transform:scaleX(1.35)}65%{transform:scaleX(.95)}100%{transform:none}") +
      kf("tent", "puff", "0%{transform:none}35%{transform:scaleY(1.05)}70%{transform:scaleY(.99)}100%{transform:none}"),
  },

  terminal: {
    note: "The prompt nudges forward and the cursor blinks twice.",
    motion: {
      p1: { animation: anim("terminal", "prompt", 0.55) },
      p0: { animation: `ki-terminal-cursor .9s linear 80ms` },
    },
    keyframes:
      kf("terminal", "prompt", "0%{transform:none}35%{transform:translateX(1.2px)}70%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("terminal", "cursor", BLINK2),
  },

  "test-tube": {
    note: "The tube tips from its rim and swings back, the liquid line lagging behind like a slosh.",
    motion: {
      ...each(["p0", "p1"], { ...at(12, 2), animation: anim("test-tube", "tip", 0.8) }),
      p2: { ...at(12, 2), animation: anim("test-tube", "tip", 0.8, 70) },
    },
    keyframes: kf("test-tube", "tip", "0%{transform:none}30%{transform:rotate(12deg)}60%{transform:rotate(-6deg)}85%{transform:rotate(2deg)}100%{transform:none}"),
  },

  "test-tubes": {
    note: "The two tubes jostle up together in their rack.",
    motion: {
      // the tubes hop together: they share one fill
      ...each(["p0", "p1", "p2", "p3", "p4", "p5"], { animation: anim("test-tubes", "hop", 0.6) }),
    },
    keyframes: kf("test-tubes", "hop", "0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.4px)}75%{transform:translateY(-.3px)}100%{transform:none}"),
  },

  "text-cursor": {
    note: "The caret blinks twice and its serifs stretch apart in between.",
    motion: {
      p0: { animation: `ki-text-cursor-blink .9s linear` },
      p2: { animation: `ki-text-cursor-up .9s linear` },
      p1: { animation: `ki-text-cursor-down .9s linear` },
    },
    keyframes:
      kf("text-cursor", "blink", BLINK2) +
      kf("text-cursor", "up", "0%,100%{transform:none;opacity:1}18%{opacity:0}36%{transform:translateY(-.8px);opacity:1}54%{opacity:0}72%{transform:none;opacity:1}") +
      kf("text-cursor", "down", "0%,100%{transform:none;opacity:1}18%{opacity:0}36%{transform:translateY(.8px);opacity:1}54%{opacity:0}72%{transform:none;opacity:1}"),
  },

  "text-input": {
    note: "The field widens on both sides and the caret blinks inside it.",
    motion: {
      p1: { to: { transform: "translateX(1px)" } },
      p2: { to: { transform: "translateX(-1px)" } },
      ...each(["p0", "p3", "p4"], { animation: `ki-text-input-blink .9s linear 100ms` }),
    },
    keyframes: kf("text-input", "blink", BLINK2),
  },

  "text-quote": {
    note: "The quote bar grows down and the lines write themselves beside it.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p0: draw("text-quote", 380, 0),
      p3: { origin: "50% 0%", animation: anim("text-quote", "bar", 0.4, 80, "backwards") },
      p1: draw("text-quote", 380, 120),
      p2: draw("text-quote", 380, 200),
    },
    keyframes: drawKf("text-quote") + kf("text-quote", "bar", "from{transform:scaleY(0)}to{transform:none}"),
  },

  "text-search": {
    note: "The lens circles over the lines as if reading them, and the lines it passes shrink back.",
    motion: {
      ...each(["p3", "p4"], { animation: anim("text-search", "lens", 0.8) }),
      p1: { origin: "0% 50%", animation: anim("text-search", "line", 0.5, 120) },
      p2: { origin: "0% 50%", animation: anim("text-search", "line", 0.5, 220) },
    },
    keyframes:
      kf("text-search", "lens", "0%{transform:none}25%{transform:translate(-1.5px,-1px)}50%{transform:translate(-.5px,-2px)}75%{transform:translate(.5px,-.6px)}100%{transform:none}") +
      kf("text-search", "line", "0%{transform:none}40%{transform:scaleX(.7)}100%{transform:none}"),
  },

  "text-wrap": {
    note: "The line runs on round the bend, the arrow carries it back and the next line writes itself.",
    draw: ["p1", "p2"],
    motion: {
      p1: draw("text-wrap", 450, 0),
      p0: { animation: anim("text-wrap", "arrow", 0.4, 300, "backwards") },
      p2: draw("text-wrap", 300, 380),
    },
    keyframes:
      drawKf("text-wrap") + kf("text-wrap", "arrow", "0%{transform:translateX(1.5px);opacity:0}60%{transform:translateX(-.3px);opacity:1}100%{transform:none;opacity:1}"),
  },

  theater: {
    note: "The curtains sway from their top corners and the two masks bob below.",
    motion: {
      ...each(["p0", "p2", "p4"], { ...at(2, 2), animation: anim("theater", "left", 0.8) }),
      ...each(["p1", "p3", "p5"], { ...at(22, 2), animation: anim("theater", "right", 0.8) }),
      p7: { animation: anim("theater", "bob", 0.6, 120) },
      p8: { animation: anim("theater", "bob", 0.6, 200) },
    },
    keyframes:
      kf("theater", "left", "0%{transform:none}35%{transform:rotate(-5deg)}70%{transform:rotate(1.5deg)}100%{transform:none}") +
      kf("theater", "right", "0%{transform:none}35%{transform:rotate(5deg)}70%{transform:rotate(-1.5deg)}100%{transform:none}") +
      kf("theater", "bob", "0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}"),
  },

  thermometer: {
    note: "The thermometer stretches up from its bulb as the temperature rises.",
    motion: {
      p0: { to: { d: 'path("M14 2.5v12.04a4 4 0 1 1-4 0V2.5a2 2 0 0 1 4 0Z")' } },
    },
  },

  "thermometer-cold": {
    note: "The frost spreads out and the thermometer shrinks down towards its bulb.",
    motion: {
      p4: { to: { d: 'path("M20 14.54a4 4 0 1 1-4 0V5.5a2 2 0 0 1 4 0z")' } },
      ...each(["p0", "p1", "p2", "p3", "p5", "p6", "p7"], { ...at(10, 12), animation: anim("thermometer-cold", "frost", 0.6) }),
    },
    keyframes: kf("thermometer-cold", "frost", "0%{transform:none}35%{transform:scale(1.12) rotate(-8deg)}70%{transform:scale(.97) rotate(2deg)}100%{transform:none}"),
  },

  "thermometer-hot": {
    note: "The sun's rays shine out one after another and the thermometer stretches up.",
    motion: {
      p3: { to: { d: 'path("M20 14.54a4 4 0 1 1-4 0V2.5a2 2 0 0 1 4 0z")' } },
      p0: { ...at(12, 12), animation: anim("thermometer-hot", "ray", 0.5) },
      p4: { ...at(12, 12), animation: anim("thermometer-hot", "ray", 0.5, 60) },
      p2: { ...at(12, 12), animation: anim("thermometer-hot", "ray", 0.5, 120) },
      p5: { ...at(12, 12), animation: anim("thermometer-hot", "ray", 0.5, 180) },
      p1: { ...at(12, 12), animation: anim("thermometer-hot", "sun", 0.6) },
    },
    keyframes:
      kf("thermometer-hot", "ray", "0%{transform:none}40%{transform:scale(1.18)}100%{transform:none}") +
      kf("thermometer-hot", "sun", "0%{transform:none}40%{transform:rotate(-20deg)}100%{transform:none}"),
  },

  "thumbs-down": {
    note: "The hand jabs down from the cuff and springs back.",
    motion: {
      p0: { ...at(17, 8), animation: anim("thumbs-down", "hand", 0.6) },
      p1: { animation: anim("thumbs-down", "cuff", 0.6) },
    },
    keyframes:
      kf("thumbs-down", "hand", "0%{transform:none}30%{transform:translateY(1.5px) rotate(-8deg)}60%{transform:translateY(-.3px) rotate(2deg)}100%{transform:none}") +
      kf("thumbs-down", "cuff", "0%{transform:none}30%{transform:translateY(.8px)}60%{transform:none}"),
  },

  "thumbs-up": {
    note: "The hand jabs up from the cuff and springs back.",
    motion: {
      p0: { ...at(7, 16), animation: anim("thumbs-up", "hand", 0.6) },
      p1: { animation: anim("thumbs-up", "cuff", 0.6) },
    },
    keyframes:
      kf("thumbs-up", "hand", "0%{transform:none}30%{transform:translateY(-1.5px) rotate(-8deg)}60%{transform:translateY(.3px) rotate(2deg)}100%{transform:none}") +
      kf("thumbs-up", "cuff", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:none}"),
  },

  ticket: {
    note: "The ticket squashes as if punched, and its perforations pop one after another.",
    motion: {
      p0: { origin: "50% 50%", animation: anim("ticket", "punch", 0.6) },
      p1: { origin: "50% 50%", animation: anim("ticket", "hole", 0.45, 60) },
      p3: { origin: "50% 50%", animation: anim("ticket", "hole", 0.45, 130) },
      p2: { origin: "50% 50%", animation: anim("ticket", "hole", 0.45, 200) },
    },
    keyframes:
      kf("ticket", "punch", "0%{transform:none}30%{transform:scale(1.05,.92) rotate(-3deg)}60%{transform:scale(.98,1.03) rotate(1.5deg)}100%{transform:none}") +
      kf("ticket", "hole", "0%{transform:none}40%{transform:scaleY(1.6)}100%{transform:none}"),
  },

  "ticket-check": {
    note: "The ticket squashes as if stamped and the tick draws itself on it.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 50%", animation: anim("ticket-check", "stamp", 0.5) },
      p1: draw("ticket-check", 420, 140),
    },
    keyframes: drawKf("ticket-check") + kf("ticket-check", "stamp", "0%{transform:none}35%{transform:scale(1.05,.92)}100%{transform:none}"),
  },

  timeline: {
    note: "The three events slide in along the line, top to bottom, as their dots light up.",
    motion: {
      p7: { animation: anim("timeline", "in", 0.5, 0, "backwards") },
      p5: { animation: anim("timeline", "in", 0.5, 90, "backwards") },
      p6: { animation: anim("timeline", "in", 0.5, 180, "backwards") },
      p3: { animation: anim("timeline", "dot", 0.4, 0) },
      p0: { animation: anim("timeline", "dot", 0.4, 90) },
      p2: { animation: anim("timeline", "dot", 0.4, 180) },
    },
    keyframes: kf("timeline", "in", SLIDE_IN) + kf("timeline", "dot", "0%{opacity:1}30%{opacity:.2}100%{opacity:1}"),
  },

  "timer-off": {
    note: "The stopwatch shakes and the slash strikes through it.",
    draw: ["p3"],
    motion: {
      ...each(["p0", "p1", "p2", "p4"], { animation: anim("timer-off", "shake", 0.55) }),
      p3: draw("timer-off", 380, 120),
    },
    keyframes: drawKf("timer-off") + kf("timer-off", "shake", SHAKE),
  },

  "timer-reset": {
    note: "The hand sweeps back round to zero while the arrow pushes the dial back.",
    motion: {
      p1: { ...at(12, 14), animation: anim("timer-reset", "hand", 0.8) },
      ...each(["p2", "p3"], { ...at(12, 14), animation: anim("timer-reset", "dial", 0.7) }),
      p0: { animation: anim("timer-reset", "button", 0.4) },
    },
    keyframes:
      kf("timer-reset", "hand", "from{transform:none}to{transform:rotate(-360deg)}") +
      kf("timer-reset", "dial", "0%{transform:none}35%{transform:rotate(-18deg)}70%{transform:rotate(3deg)}100%{transform:none}") +
      kf("timer-reset", "button", "0%{transform:none}35%{transform:translateY(.7px)}100%{transform:none}"),
  },

  "toggle-off": {
    note: "The knob slides back across to off and the track gives under it.",
    motion: {
      p0: { animation: anim("toggle-off", "knob", 0.55) },
      p1: { origin: "0% 50%", animation: anim("toggle-off", "track", 0.55, 60) },
    },
    keyframes:
      kf("toggle-off", "knob", "0%{transform:translateX(6px)}60%{transform:translateX(-.5px)}100%{transform:none}") +
      kf("toggle-off", "track", "0%{transform:none}40%{transform:scaleX(.97)}100%{transform:none}"),
  },

  "toggle-on": {
    note: "The knob slides across to on and the track gives under it.",
    motion: {
      p0: { animation: anim("toggle-on", "knob", 0.55) },
      p1: { origin: "100% 50%", animation: anim("toggle-on", "track", 0.55, 60) },
    },
    keyframes:
      kf("toggle-on", "knob", "0%{transform:translateX(-6px)}60%{transform:translateX(.5px)}100%{transform:none}") +
      kf("toggle-on", "track", "0%{transform:none}40%{transform:scaleX(.97)}100%{transform:none}"),
  },

  toilet: {
    note: "The tank rocks back as if flushed and the bowl settles under it.",
    motion: {
      p1: { origin: "0% 100%", animation: anim("toilet", "tank", 0.65) },
      p0: { origin: "50% 100%", animation: anim("toilet", "bowl", 0.6, 80) },
    },
    keyframes:
      kf("toilet", "tank", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(2deg)}100%{transform:none}") +
      kf("toilet", "bowl", "0%{transform:none}35%{transform:scaleY(.94)}70%{transform:scaleY(1.01)}100%{transform:none}"),
  },

  toolbox: {
    note: "The handle lifts first and the box follows it up, then settles.",
    motion: {
      p1: { animation: anim("toolbox", "lift", 0.6) },
      ...each(["p2", "p3", "p0", "p4"], { animation: anim("toolbox", "body", 0.6, 60) }),
    },
    keyframes:
      kf("toolbox", "lift", "0%{transform:none}30%{transform:translateY(-1.5px)}60%{transform:translateY(.3px)}100%{transform:none}") +
      kf("toolbox", "body", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.3px)}100%{transform:none}"),
  },

  "toy-brick": {
    note: "The brick drops into place and its two studs settle after it.",
    motion: {
      p0: { animation: anim("toy-brick", "drop", 0.55) },
      p1: { animation: anim("toy-brick", "drop", 0.55, 60) },
      // the studs settle together: they share one fill
      p2: { animation: anim("toy-brick", "drop", 0.55, 60) },
    },
    keyframes: kf("toy-brick", "drop", "0%{transform:none}25%{transform:translateY(-2px)}55%{transform:translateY(.4px)}100%{transform:none}"),
  },

  tornado: {
    note: "The funnel's bands swing side to side one after another, top to bottom.",
    motion: {
      p0: { animation: anim("tornado", "swirl", 0.7) },
      p1: { animation: anim("tornado", "swirl", 0.7, 60) },
      p2: { animation: anim("tornado", "swirl", 0.7, 120) },
      p3: { animation: anim("tornado", "swirl", 0.7, 180) },
      p4: { animation: anim("tornado", "swirl", 0.7, 240) },
    },
    keyframes: kf("tornado", "swirl", "0%{transform:none}25%{transform:translateX(1.5px)}50%{transform:translateX(-1.5px)}75%{transform:translateX(.5px)}100%{transform:none}"),
  },

  touchpad: {
    note: "The pad presses in and its buttons click down.",
    motion: {
      p0: { origin: "50% 50%", animation: anim("touchpad", "press", 0.5) },
      ...each(["p1", "p2"], { animation: anim("touchpad", "click", 0.4, 60) }),
    },
    keyframes:
      kf("touchpad", "press", "0%{transform:none}30%{transform:scale(.96)}60%{transform:scale(1.01)}100%{transform:none}") +
      kf("touchpad", "click", "0%{transform:none}35%{transform:translateY(.7px)}100%{transform:none}"),
  },

  "towel-rack": {
    note: "The towel sways on its rail.",
    motion: {
      p1: { origin: "50% 0%", animation: anim("towel-rack", "sway", 0.8) },
      ...each(["p0", "p2"], { animation: anim("towel-rack", "rail", 0.8) }),
    },
    keyframes:
      kf("towel-rack", "sway", "0%{transform:none}30%{transform:skewX(-6deg)}60%{transform:skewX(3deg)}85%{transform:skewX(-1deg)}100%{transform:none}") +
      kf("towel-rack", "rail", "0%{transform:none}30%{transform:translateX(-.3px)}60%{transform:none}"),
  },

  tractor: {
    note: "The tractor's body bumps along on its wheels, the exhaust a beat behind.",
    motion: {
      ...each(["p0", "p1", "p3", "p4", "p6"], { animation: anim("tractor", "bump", 0.7) }),
      p2: { animation: anim("tractor", "bump", 0.7, 40) },
    },
    keyframes: kf("tractor", "bump", BUMP),
  },

  "traffic-cone": {
    note: "The cone wobbles on its base and settles.",
    motion: {
      ...each(["p2", "p0", "p3"], { ...at(12, 16), animation: anim("traffic-cone", "wobble", 0.8) }),
      p1: { origin: "50% 50%", animation: anim("traffic-cone", "base", 0.8) },
    },
    keyframes:
      kf("traffic-cone", "wobble", "0%{transform:none}25%{transform:rotate(-8deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}100%{transform:none}") +
      kf("traffic-cone", "base", "0%{transform:none}25%{transform:scaleX(.97)}50%{transform:scaleX(1.02)}100%{transform:none}"),
  },

  train: {
    note: "The carriage rocks on its wheels.",
    motion: each(["p0", "p1", "p2", "p5", "p6"], { ...at(12, 19), animation: anim("train", "rock", 0.8) }),
    keyframes: kf("train", "rock", "0%{transform:none}20%{transform:rotate(-3deg)}45%{transform:rotate(3deg)}70%{transform:rotate(-1deg)}100%{transform:none}"),
  },

  "train-track": {
    note: "The rails draw themselves on and the sleepers drop in along them.",
    draw: ["p0", "p6"],
    motion: {
      p0: draw("train-track", 500, 0),
      p6: draw("train-track", 500, 40),
      p1: { origin: "50% 50%", animation: anim("train-track", "tie", 0.35, 60, "backwards") },
      p2: { origin: "50% 50%", animation: anim("train-track", "tie", 0.35, 130, "backwards") },
      p3: { origin: "50% 50%", animation: anim("train-track", "tie", 0.35, 200, "backwards") },
      p4: { origin: "50% 50%", animation: anim("train-track", "tie", 0.35, 270, "backwards") },
      p5: { origin: "50% 50%", animation: anim("train-track", "tie", 0.35, 340, "backwards") },
    },
    keyframes: drawKf("train-track") + kf("train-track", "tie", "from{opacity:0;transform:scale(.5)}to{opacity:1;transform:none}"),
  },

  tree: {
    note: "The crown sways from the top of its trunk.",
    motion: {
      p0: { ...at(12, 19), animation: anim("tree", "sway", 0.8) },
      p1: { origin: "50% 100%", animation: anim("tree", "trunk", 0.8) },
    },
    keyframes: kf("tree", "sway", SWAY) + kf("tree", "trunk", TRUNK),
  },

  "trending-down": {
    note: "The line draws itself down and the arrowhead lands at its end.",
    draw: ["p1", "p0"],
    motion: {
      p1: draw("trending-down", 480, 0),
      p0: draw("trending-down", 260, 340),
    },
    keyframes: drawKf("trending-down"),
  },

  "trending-up": {
    note: "The line draws itself up and the arrowhead lands at its end.",
    draw: ["p1", "p0"],
    motion: {
      p1: draw("trending-up", 480, 0),
      p0: draw("trending-up", 260, 340),
    },
    keyframes: drawKf("trending-up"),
  },

  triangle: {
    note: "The triangle turns a third of the way round its centre.",
    motion: {
      p0: { ...at(12, 14), animation: anim("triangle", "turn", 0.7) },
    },
    keyframes: kf("triangle", "turn", "0%{transform:none}100%{transform:rotate(120deg)}"),
  },

  truck: {
    note: "The truck's body bumps forward on its wheels.",
    motion: {
      // box and cab move as one: they share the fill
      ...each(["p0", "p1", "p2"], { animation: anim("truck", "bump", 0.7) }),
    },
    keyframes: kf("truck", "bump", DRIVE),
  },

  turntable: {
    note: "The arm swings in onto the record, which pulses as it starts to play.",
    motion: {
      p1: { ...at(18, 8), to: { transform: "rotate(18deg)" } },
      ...each(["p2", "p0"], { ...at(10, 12), animation: anim("turntable", "spin", 0.6, 200) }),
    },
    keyframes: kf("turntable", "spin", "0%{transform:none}40%{transform:scale(1.08)}100%{transform:none}"),
  },

  turtle: {
    note: "The shell bobs as the turtle steps and its head pokes forward.",
    motion: {
      ...each(["p0", "p1", "p2"], { animation: anim("turtle", "step", 0.7) }),
      p3: { animation: anim("turtle", "head", 0.7, 80) },
    },
    keyframes:
      kf("turtle", "step", "0%{transform:none}30%{transform:translateY(-.7px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("turtle", "head", "0%{transform:none}35%{transform:translateX(1px)}70%{transform:translateX(-.2px)}100%{transform:none}"),
  },

  tv: {
    note: "The antenna wobbles and the screen flickers on.",
    motion: {
      p0: { ...at(12, 7), animation: anim("tv", "antenna", 0.8) },
      p1: { animation: `ki-tv-on .5s linear` },
    },
    keyframes:
      kf("tv", "antenna", "0%{transform:none}30%{transform:rotate(-12deg)}60%{transform:rotate(8deg)}85%{transform:rotate(-3deg)}100%{transform:none}") + kf("tv", "on", FLICKER_ON),
  },

  "tv-play": {
    note: "The screen flickers on and the play button pops.",
    motion: {
      p2: { animation: `ki-tv-play-on .5s linear` },
      p0: { origin: "50% 50%", animation: anim("tv-play", "pop", 0.5, 120) },
    },
    keyframes: kf("tv-play", "on", FLICKER_ON) + kf("tv-play", "pop", "0%{transform:none}40%{transform:scale(1.3)}70%{transform:scale(.95)}100%{transform:none}"),
  },

  umbrella: {
    note: "The canopy springs open over the handle, which swings a little from it.",
    motion: {
      p2: { origin: "50% 100%", animation: anim("umbrella", "open", 0.65) },
      p1: { animation: anim("umbrella", "tip", 0.65) },
      p0: { ...at(12, 13), animation: anim("umbrella", "handle", 0.8, 60) },
    },
    keyframes:
      kf("umbrella", "open", "0%{transform:none}30%{transform:scale(.88,1.08)}60%{transform:scale(1.05,.97)}100%{transform:none}") +
      kf("umbrella", "tip", "0%{transform:none}30%{transform:translateY(-.8px)}60%{transform:translateY(.2px)}100%{transform:none}") +
      kf("umbrella", "handle", "0%{transform:none}30%{transform:rotate(8deg)}60%{transform:rotate(-4deg)}100%{transform:none}"),
  },

  underline: {
    note: "The letter dips and the underline draws itself beneath it.",
    draw: ["p1"],
    motion: {
      p0: { animation: anim("underline", "dip", 0.5) },
      p1: draw("underline", 420, 80),
    },
    keyframes: drawKf("underline") + kf("underline", "dip", "0%{transform:none}35%{transform:translateY(.8px)}100%{transform:none}"),
  },

  unfold: {
    note: "The two arrows spread apart, up and down, from the fold line.",
    motion: {
      ...each(["p1", "p7"], { to: { transform: "translateY(-1.2px)" } }),
      ...each(["p0", "p6"], { to: { transform: "translateY(1.2px)" } }),
      ...each(["p3", "p4"], { origin: "50% 50%", to: { transform: "scaleX(.6)" }, delay: 40 }),
    },
  },

  "unfold-horizontal": {
    note: "The two arrows spread apart, left and right, from the fold line.",
    motion: {
      ...each(["p0", "p6"], { to: { transform: "translateX(1.2px)" } }),
      ...each(["p1", "p7"], { to: { transform: "translateX(-1.2px)" } }),
      ...each(["p3", "p4"], { origin: "50% 50%", to: { transform: "scaleY(.6)" }, delay: 40 }),
    },
  },

  ungroup: {
    note: "The two boxes pull apart diagonally.",
    motion: {
      p1: { to: { transform: "translate(-1px,-1px)" } },
      p0: { to: { transform: "translate(1px,1px)" } },
    },
  },

  unlink: {
    note: "The two links pull apart and sparks flash in the gap.",
    motion: {
      p0: { to: { transform: "translate(1px,-1px)" } },
      p1: { to: { transform: "translate(-1px,1px)" } },
      ...each(["p2", "p3"], { origin: "50% 50%", animation: anim("unlink", "spark", 0.45, 100) }),
      ...each(["p4", "p5"], { origin: "50% 50%", animation: anim("unlink", "spark", 0.45, 160) }),
    },
    keyframes: kf("unlink", "spark", "0%{opacity:1;transform:none}30%{opacity:0;transform:scale(.4)}100%{opacity:1;transform:none}"),
  },

  unplug: {
    note: "The plug and the socket pull apart along the cord.",
    motion: {
      ...each(["p5", "p0"], { to: { transform: "translate(1px,-1px)" } }),
      ...each(["p2", "p1", "p3", "p4"], { to: { transform: "translate(-1px,1px)" } }),
    },
  },

  usb: {
    note: "The stem draws up, its two branches grow out of it, and their ends pop on.",
    draw: ["p2", "p4", "p5"],
    motion: {
      p2: draw("usb", 380, 0),
      p4: draw("usb", 300, 150),
      p5: draw("usb", 300, 200),
      p3: { origin: "50% 50%", animation: anim("usb", "pop", 0.35, 300, "backwards") },
      p0: { origin: "50% 50%", animation: anim("usb", "pop", 0.35, 400, "backwards") },
      p6: { origin: "50% 50%", animation: anim("usb", "pop", 0.35, 450, "backwards") },
    },
    keyframes: drawKf("usb") + kf("usb", "pop", POP),
  },

  user: {
    note: "The head bobs and the shoulders give under it.",
    motion: {
      p1: { animation: anim("user", "head", 0.6) },
      p0: { origin: "50% 100%", animation: anim("user", "body", 0.6) },
    },
    keyframes: kf("user", "head", BOB) + kf("user", "body", SQUASH),
  },

  "user-check": {
    note: "The person nods and the tick draws itself beside them.",
    draw: ["p0"],
    motion: {
      p2: { animation: anim("user-check", "nod", 0.5) },
      p0: draw("user-check", 420, 100),
    },
    keyframes: drawKf("user-check") + kf("user-check", "nod", "0%{transform:none}35%{transform:translateY(.8px)}100%{transform:none}"),
  },

  "user-edit": {
    note: "The pen scribbles from its nib beside the person, who tilts their head.",
    motion: {
      p1: { ...at(14, 21), animation: anim("user-edit", "pen", 0.7) },
      p2: { origin: "50% 100%", animation: anim("user-edit", "head", 0.6) },
    },
    keyframes:
      kf("user-edit", "pen", "0%{transform:none}20%{transform:translate(-.6px,.3px) rotate(-6deg)}40%{transform:translate(.6px,-.3px) rotate(4deg)}60%{transform:translate(-.4px,.2px) rotate(-3deg)}80%{transform:rotate(1deg)}100%{transform:none}") +
      kf("user-edit", "head", "0%{transform:none}35%{transform:rotate(-8deg)}100%{transform:none}"),
  },

  "user-key": {
    note: "The key turns round on its shaft and back.",
    motion: {
      ...each(["p0", "p1", "p4"], { ...at(20, 0), animation: anim("user-key", "turn", 0.75) }),
      p3: { animation: anim("user-key", "head", 0.6, 100) },
    },
    keyframes:
      kf("user-key", "turn", "0%{transform:none}45%{transform:scaleX(-1)}100%{transform:none}") +
      kf("user-key", "head", "0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}"),
  },

  "user-lock": {
    note: "The shackle lifts and snaps shut on the lock, which jolts.",
    motion: {
      p0: { animation: anim("user-lock", "shackle", 0.6) },
      p3: { animation: anim("user-lock", "body", 0.6) },
    },
    keyframes:
      kf("user-lock", "shackle", "0%{transform:none}30%{transform:translateY(-1.5px)}55%{transform:translateY(.3px)}100%{transform:none}") +
      kf("user-lock", "body", "0%,45%{transform:none}55%{transform:translateY(.5px)}100%{transform:none}"),
  },

  "user-minus": {
    note: "The minus slides away and back while the person shakes their head.",
    motion: {
      p2: { animation: anim("user-minus", "minus", 0.6) },
      p1: { animation: anim("user-minus", "shake", 0.6, 60) },
    },
    keyframes:
      kf("user-minus", "minus", "0%{transform:none;opacity:1}35%{transform:translateX(2px);opacity:0}36%{transform:translateX(-1px);opacity:0}100%{transform:none;opacity:1}") +
      kf("user-minus", "shake", SHAKE),
  },

  "user-search": {
    note: "The lens circles beside the person, looking for someone.",
    motion: {
      ...each(["p2", "p3"], { animation: anim("user-search", "lens", 0.8) }),
      p0: { animation: anim("user-search", "head", 0.8) },
    },
    keyframes:
      kf("user-search", "lens", "0%{transform:none}25%{transform:translate(-1px,-1px)}50%{transform:translate(0,-1.8px)}75%{transform:translate(1px,-.6px)}100%{transform:none}") +
      kf("user-search", "head", "0%{transform:none}30%{transform:translateX(-.5px)}70%{transform:translateX(.4px)}100%{transform:none}"),
  },

  "user-settings": {
    note: "The cog turns beside the person.",
    motion: each(["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"], { ...at(18, 15), to: { transform: "rotate(90deg)" }, ease: "smooth" }),
  },

  "user-shield": {
    note: "The shield rises in front of the person, who leans back behind it.",
    motion: {
      p1: { origin: "50% 100%", to: { transform: "translateY(-1px) scale(1.06)" } },
      p2: { to: { transform: "translateX(-.5px)" }, delay: 40 },
    },
  },

  "user-star": {
    note: "The star spins round and lands with a pop as the person looks up.",
    motion: {
      p0: { origin: "50% 55%", animation: anim("user-star", "spin", 0.75) },
      p2: { animation: anim("user-star", "head", 0.6, 100) },
    },
    keyframes:
      kf("user-star", "spin", "0%{transform:none}60%{transform:rotate(144deg) scale(1.15)}100%{transform:rotate(144deg)}") +
      kf("user-star", "head", "0%{transform:none}40%{transform:translateY(-.8px)}100%{transform:none}"),
  },

  "user-x": {
    note: "The cross strikes in, one stroke then the other, as the person shakes their head.",
    draw: ["p2", "p3"],
    motion: {
      p2: draw("user-x", 280, 0),
      p3: draw("user-x", 280, 160),
      p1: { animation: anim("user-x", "shake", 0.6, 60) },
    },
    keyframes: drawKf("user-x") + kf("user-x", "shake", SHAKE),
  },

  van: {
    note: "The van's body bumps forward on its wheels.",
    motion: {
      // body and front move as one: they share the fill
      ...each(["p0", "p1", "p2"], { animation: anim("van", "bump", 0.7) }),
    },
    keyframes: kf("van", "bump", DRIVE),
  },

  variable: {
    note: "The brackets spread apart and the x turns between them.",
    motion: {
      p0: { to: { transform: "translateX(-1px)" } },
      p1: { to: { transform: "translateX(1px)" } },
      ...each(["p2", "p3"], { ...at(12, 12), to: { transform: "rotate(90deg)" }, ease: "smooth" }),
    },
  },

  vault: {
    note: "The handle wheel turns a quarter round and the door jolts as it unlocks.",
    motion: {
      ...each(["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"], { ...at(12, 12), animation: anim("vault", "wheel", 0.8) }),
      p0: { animation: anim("vault", "door", 0.8) },
    },
    keyframes:
      kf("vault", "wheel", "0%{transform:none}70%{transform:rotate(95deg)}85%,100%{transform:rotate(90deg)}") +
      kf("vault", "door", "0%,65%{transform:none}75%{transform:translateX(.5px)}100%{transform:none}"),
  },

  vector: {
    note: "The anchor points pull outward and the edges follow them.",
    motion: {
      p7: { to: { transform: "translate(-.8px,-.8px)" } },
      p5: { to: { transform: "translate(.8px,-.8px)" } },
      p6: { to: { transform: "translate(-.8px,.8px)" } },
      p4: { to: { transform: "translate(.8px,.8px)" } },
      p0: { to: { transform: "translateY(-.8px)" }, delay: 40 },
      p3: { to: { transform: "translateY(.8px)" }, delay: 40 },
      p2: { to: { transform: "translateX(-.8px)" }, delay: 40 },
      p1: { to: { transform: "translateX(.8px)" }, delay: 40 },
    },
  },

  vegan: {
    note: "The leaf sways on its stem and the V dips under it.",
    motion: {
      p0: { ...at(16, 8), animation: anim("vegan", "leaf", 0.8) },
      p2: { animation: anim("vegan", "v", 0.5) },
    },
    keyframes:
      kf("vegan", "leaf", "0%{transform:none}30%{transform:rotate(-14deg)}60%{transform:rotate(8deg)}85%{transform:rotate(-3deg)}100%{transform:none}") +
      kf("vegan", "v", "0%{transform:none}35%{transform:translateY(.6px)}100%{transform:none}"),
  },

  vibrate: {
    note: "The phone buzzes side to side and the waves on each side pulse out.",
    motion: {
      p2: { origin: "50% 50%", animation: anim("vibrate", "buzz", 0.6) },
      p0: { animation: anim("vibrate", "left", 0.6) },
      p1: { animation: anim("vibrate", "right", 0.6) },
    },
    keyframes:
      kf("vibrate", "buzz", "0%{transform:none}12%{transform:translateX(-.8px) rotate(-4deg)}25%{transform:translateX(.8px) rotate(4deg)}37%{transform:translateX(-.7px) rotate(-3deg)}50%{transform:translateX(.6px) rotate(3deg)}62%{transform:translateX(-.3px)}100%{transform:none}") +
      kf("vibrate", "left", "0%{transform:none}30%{transform:translateX(-.8px)}60%{transform:none}") +
      kf("vibrate", "right", "0%{transform:none}30%{transform:translateX(.8px)}60%{transform:none}"),
  },

  "video-off": {
    note: "The camera shakes and the slash strikes through it.",
    draw: ["p2"],
    motion: {
      ...each(["p0", "p1"], { animation: anim("video-off", "shake", 0.55) }),
      p2: draw("video-off", 380, 120),
    },
    keyframes: drawKf("video-off") + kf("video-off", "shake", SHAKE),
  },

  view: {
    note: "The frame opens up and the eye blinks inside it.",
    motion: {
      p1: { to: { transform: "translateY(-.8px)" } },
      p0: { to: { transform: "translateY(.8px)" } },
      ...each(["p3", "p2"], { ...at(12, 12), animation: anim("view", "blink", 0.45, 80) }),
    },
    keyframes: kf("view", "blink", "0%{transform:none}40%{transform:scaleY(.1)}100%{transform:none}"),
  },

  virus: {
    note: "The spikes turn round the body and push out as they go, while its spots flicker.",
    motion: {
      ...each(["p1", "p2", "p3", "p4", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17"], {
        ...at(12, 12),
        animation: anim("virus", "spikes", 0.8),
      }),
      p0: { animation: anim("virus", "spot", 0.6, 100) },
      p5: { animation: anim("virus", "spot", 0.6, 160) },
      p18: { animation: anim("virus", "spot", 0.6, 220) },
    },
    keyframes: kf("virus", "spikes", "0%{transform:none}50%{transform:rotate(22.5deg) scale(1.08)}100%{transform:rotate(45deg)}") + kf("virus", "spot", DIM),
  },

  voicemail: {
    note: "The two reels pulse in turn and the tape between them tightens.",
    motion: {
      p0: { origin: "50% 50%", animation: anim("voicemail", "reel", 0.5) },
      p1: { origin: "50% 50%", animation: anim("voicemail", "reel", 0.5, 120) },
      p2: { origin: "50% 50%", animation: anim("voicemail", "tape", 0.6) },
    },
    keyframes:
      kf("voicemail", "reel", "0%{transform:none}40%{transform:scale(1.1)}100%{transform:none}") +
      kf("voicemail", "tape", "0%{transform:none}40%{transform:scaleX(.9)}100%{transform:none}"),
  },

  vote: {
    note: "The box bounces and the tick draws itself on the ballot.",
    draw: ["p0"],
    motion: {
      p1: { origin: "50% 100%", animation: anim("vote", "box", 0.5) },
      p0: draw("vote", 420, 120),
    },
    keyframes: drawKf("vote") + kf("vote", "box", "0%{transform:none}35%{transform:scaleY(.94)}70%{transform:scaleY(1.02)}100%{transform:none}"),
  },

  wallet: {
    note: "The wallet tips up from its corner and settles back.",
    motion: {
      // the whole wallet tips from its corner: flap and body share the fill
      ...each(["p0", "p1"], { ...at(3, 21), animation: anim("wallet", "flap", 0.7) }),
    },
    keyframes:
      kf("wallet", "flap", "0%{transform:none}35%{transform:translateY(-1px) rotate(-3deg)}65%{transform:translateY(.2px)}100%{transform:none}"),
  },

  "wallet-cards": {
    note: "The cards rise out of the pocket and drop back in.",
    motion: {
      p1: { animation: anim("wallet-cards", "card", 0.65) },
      p0: { animation: anim("wallet-cards", "pocket", 0.65, 60) },
    },
    keyframes:
      kf("wallet-cards", "card", "0%{transform:none}35%{transform:translateY(-1.5px)}65%{transform:translateY(.3px)}100%{transform:none}") +
      kf("wallet-cards", "pocket", "0%{transform:none}35%{transform:translateY(.4px)}100%{transform:none}"),
  },

  wallpaper: {
    note: "The sun rises over the hill in the picture.",
    motion: {
      p3: { to: { transform: "translateY(-1.5px)" } },
      p2: { to: { transform: "translateX(-.6px)" }, delay: 60 },
    },
  },

  warehouse: {
    note: "The roof settles and the shelves slide in, one after the other.",
    motion: {
      p1: { origin: "50% 100%", animation: anim("warehouse", "roof", 0.5) },
      p2: { animation: anim("warehouse", "in", 0.45, 80, "backwards") },
      p3: { animation: anim("warehouse", "in", 0.45, 170, "backwards") },
    },
    keyframes: kf("warehouse", "roof", "0%{transform:none}35%{transform:scaleY(.96)}100%{transform:none}") + kf("warehouse", "in", SLIDE_IN),
  },

  "washing-machine": {
    note: "The water in the drum spins round and the lights blink.",
    motion: {
      p4: { ...at(12, 13), animation: anim("washing-machine", "spin", 0.9) },
      p0: { animation: anim("washing-machine", "light", 0.5) },
      p1: { animation: anim("washing-machine", "light", 0.5, 100) },
    },
    keyframes: kf("washing-machine", "spin", "from{transform:none}to{transform:rotate(360deg)}") + kf("washing-machine", "light", DIM),
  },

  watch: {
    note: "The hands sweep round the face once and the straps flex.",
    motion: {
      p0: { ...at(12, 12), animation: anim("watch", "hands", 0.8) },
      p1: { animation: anim("watch", "top", 0.6) },
      p2: { animation: anim("watch", "bottom", 0.6) },
    },
    keyframes:
      kf("watch", "hands", "from{transform:none}to{transform:rotate(360deg)}") +
      kf("watch", "top", "0%{transform:none}35%{transform:translateY(-.5px)}100%{transform:none}") +
      kf("watch", "bottom", "0%{transform:none}35%{transform:translateY(.5px)}100%{transform:none}"),
  },

  waypoints: {
    note: "The route draws itself from point to point, and each point pops as it is reached.",
    draw: ["p0", "p2", "p1"],
    motion: {
      p4: { origin: "50% 50%", animation: anim("waypoints", "pop", 0.4, 0) },
      p0: draw("waypoints", 200, 80),
      p6: { origin: "50% 50%", animation: anim("waypoints", "pop", 0.4, 220) },
      p2: draw("waypoints", 260, 260),
      p5: { origin: "50% 50%", animation: anim("waypoints", "pop", 0.4, 460) },
      p1: draw("waypoints", 200, 480),
      p3: { origin: "50% 50%", animation: anim("waypoints", "pop", 0.4, 620) },
    },
    keyframes: drawKf("waypoints") + kf("waypoints", "pop", "0%{transform:none}40%{transform:scale(1.3)}100%{transform:none}"),
  },

  webcam: {
    note: "The lens focuses in and out inside the camera.",
    motion: {
      p1: { origin: "50% 50%", animation: anim("webcam", "focus", 0.7) },
      p0: { origin: "50% 50%", animation: anim("webcam", "body", 0.7) },
    },
    keyframes:
      kf("webcam", "focus", "0%{transform:none}30%{transform:scale(.7)}60%{transform:scale(1.1)}100%{transform:none}") +
      kf("webcam", "body", "0%{transform:none}30%{transform:scale(1.03)}100%{transform:none}"),
  },

  webhook: {
    note: "The three hooks draw themselves one after another, round the loop.",
    draw: ["p0", "p1", "p2"],
    motion: {
      p1: draw("webhook", 380, 0),
      p2: draw("webhook", 380, 160),
      p0: draw("webhook", 380, 320),
    },
    keyframes: drawKf("webhook"),
  },

  weight: {
    note: "The weight lifts and drops, squashing as it lands, its ring following.",
    motion: {
      p1: { origin: "50% 100%", animation: anim("weight", "drop", 0.65) },
      p0: { animation: anim("weight", "ring", 0.65, 50) },
    },
    keyframes:
      kf("weight", "drop", "0%{transform:none}25%{transform:translateY(-1.5px)}50%{transform:scale(1.04,.94)}75%{transform:translateY(-.2px)}100%{transform:none}") +
      kf("weight", "ring", "0%{transform:none}25%{transform:translateY(-1.5px)}50%{transform:translateY(.6px)}75%{transform:translateY(-.2px)}100%{transform:none}"),
  },

  wheat: {
    note: "The ear sways from the foot of its stalk, its grains following one pair after another.",
    motion: {
      p0: { ...at(2, 22), animation: anim("wheat", "sway", 0.8) },
      ...each(["p1", "p5"], { ...at(2, 22), animation: anim("wheat", "sway", 0.8, 30) }),
      ...each(["p2", "p6"], { ...at(2, 22), animation: anim("wheat", "sway", 0.8, 70) }),
      ...each(["p3", "p7"], { ...at(2, 22), animation: anim("wheat", "sway", 0.8, 110) }),
      p4: { ...at(2, 22), animation: anim("wheat", "sway", 0.8, 150) },
    },
    keyframes: kf("wheat", "sway", "0%{transform:none}30%{transform:rotate(-4deg)}60%{transform:rotate(2.5deg)}82%{transform:rotate(-.8deg)}100%{transform:none}"),
  },

  whistle: {
    note: "The whistle trills, its mouthpiece slot fluttering as it shakes.",
    motion: {
      p1: { ...at(12, 12), animation: anim("whistle", "trill", 0.6) },
      p0: { ...at(12, 12), animation: anim("whistle", "slot", 0.6) },
    },
    keyframes:
      kf("whistle", "trill", "0%{transform:none}15%{transform:translateX(-.5px) rotate(-3deg)}30%{transform:translateX(.5px) rotate(3deg)}45%{transform:translateX(-.4px) rotate(-2deg)}60%{transform:translateX(.3px) rotate(1deg)}100%{transform:none}") +
      kf("whistle", "slot", "0%{transform:none}15%{transform:translate(-.5px,.4px) rotate(-3deg)}30%{transform:translate(.5px,-.4px) rotate(3deg)}45%{transform:translate(-.4px,.3px) rotate(-2deg)}60%{transform:translateX(.3px) rotate(1deg)}100%{transform:none}"),
  },

  "whole-word": {
    note: "The two letters hop in turn on the bracket below them.",
    motion: {
      ...each(["p0", "p1"], { animation: anim("whole-word", "hop", 0.5) }),
      ...each(["p2", "p3"], { animation: anim("whole-word", "hop", 0.5, 110) }),
      p4: { origin: "50% 100%", animation: anim("whole-word", "base", 0.6) },
    },
    keyframes:
      kf("whole-word", "hop", "0%{transform:none}35%{transform:translateY(-1.2px)}70%{transform:translateY(.2px)}100%{transform:none}") +
      kf("whole-word", "base", "0%{transform:none}35%{transform:scaleY(.8)}100%{transform:none}"),
  },

  wifi: {
    note: "The signal lights up arc by arc, from the dot outwards.",
    motion: {
      p0: { animation: anim("wifi", "arc", 0.6, 0) },
      p3: { animation: anim("wifi", "arc", 0.6, 80) },
      p2: { animation: anim("wifi", "arc", 0.6, 160) },
      p1: { animation: anim("wifi", "arc", 0.6, 240) },
    },
    keyframes: kf("wifi", "arc", ARC),
  },

  "wifi-low": {
    note: "The one arc flickers weakly above its dot.",
    motion: {
      p1: { animation: `ki-wifi-low-flicker .8s linear` },
      p0: { origin: "50% 50%", animation: anim("wifi-low", "dot", 0.5) },
    },
    keyframes: kf("wifi-low", "flicker", BLINK2) + kf("wifi-low", "dot", "0%{transform:none}40%{transform:scale(1.5)}100%{transform:none}"),
  },

  "wifi-sync": {
    note: "The sync arrows turn half round and the signal arcs pulse.",
    motion: {
      ...each(["p0", "p1", "p2", "p4"], { ...at(16.965, 16.105), animation: anim("wifi-sync", "turn", 0.8) }),
      p6: { animation: anim("wifi-sync", "arc", 0.6, 0) },
      p5: { animation: anim("wifi-sync", "arc", 0.6, 80) },
      p3: { animation: anim("wifi-sync", "arc", 0.6, 160) },
    },
    keyframes: kf("wifi-sync", "turn", "from{transform:none}to{transform:rotate(180deg)}") + kf("wifi-sync", "arc", ARC),
  },

  wine: {
    note: "The glass tilts on its foot as if swirled, the wine line lagging behind.",
    motion: {
      ...each(["p3", "p2"], { ...at(12, 22), animation: anim("wine", "tilt", 0.8) }),
      p1: { ...at(12, 22), animation: anim("wine", "tilt", 0.8, 80) },
    },
    keyframes: kf("wine", "tilt", "0%{transform:none}30%{transform:rotate(-8deg)}60%{transform:rotate(5deg)}85%{transform:rotate(-1.5deg)}100%{transform:none}"),
  },

  workflow: {
    note: "The first box presses, the connector draws itself to the second, and that box pops.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 50%", animation: anim("workflow", "press", 0.4) },
      p1: draw("workflow", 380, 100),
      p2: { origin: "50% 50%", animation: anim("workflow", "pop", 0.45, 420) },
    },
    keyframes:
      drawKf("workflow") +
      kf("workflow", "press", "0%{transform:none}40%{transform:scale(.88)}100%{transform:none}") +
      kf("workflow", "pop", "0%{transform:none}40%{transform:scale(1.15)}100%{transform:none}"),
  },

  "zap-off": {
    note: "The bolt flickers out and the slash strikes through it.",
    draw: ["p2"],
    motion: {
      ...each(["p0", "p1", "p3"], { animation: `ki-zap-off-flicker .7s linear` }),
      p2: draw("zap-off", 380, 160),
    },
    keyframes: drawKf("zap-off") + kf("zap-off", "flicker", "0%,100%{opacity:1}15%{opacity:.3}30%{opacity:1}45%{opacity:.2}65%{opacity:.8}"),
  },

  "zoom-in": {
    note: "The lens grows and the plus turns a quarter inside it.",
    motion: {
      p0: { ...at(11, 11), to: { transform: "scale(1.08)" } },
      ...each(["p2", "p3"], { ...at(11, 11), to: { transform: "rotate(90deg) scale(1.15)" }, delay: 40 }),
      p1: { to: { transform: "translate(.6px,.6px)" } },
    },
  },

  "zoom-out": {
    note: "The lens shrinks back and the minus narrows inside it.",
    motion: {
      p0: { ...at(11, 11), to: { transform: "scale(.92)" } },
      p2: { origin: "50% 50%", to: { transform: "scaleX(.7)" }, delay: 40 },
      p1: { to: { transform: "translate(-.6px,-.6px)" } },
    },
  },
};
