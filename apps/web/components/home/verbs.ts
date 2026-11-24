import type { IconDef } from "@kineticons/core";

/** A few words on what an icon's motion does, for the home page's labels. Falls back to the first clause of the
 * icon's own motion note. */
const VERBS: Record<string, string> = {
  bell: "rings",
  "bell-ring": "rings",
  lock: "drops its shackle",
  heart: "beats",
  send: "takes off",
  battery: "fills up",
  trash: "lifts its lid",
  settings: "turns",
  sparkles: "twinkles",
  download: "drops in",
  upload: "lifts out",
  star: "twinkles",
  zap: "strikes",
  wifi: "connects",
  mail: "opens",
  clock: "ticks",
  "circle-check": "ticks",
  "message-circle": "pops",
  share: "branches out",
  "volume-2": "sounds",
  calendar: "flips",
  x: "closes",
};

export function verb(icon: IconDef): string {
  if (VERBS[icon.name]) return VERBS[icon.name];
  const first = icon.motionNote.split(/[,.;]/)[0].trim();
  return first.charAt(0).toLowerCase() + first.slice(1);
}
