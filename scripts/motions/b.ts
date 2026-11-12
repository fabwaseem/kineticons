import type { Override } from "./types";

// Shared easing for keyframe animations: the kit's smooth curve (no overshoot) and its spring (a little overshoot).
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
const SPRING = "cubic-bezier(.34,1.56,.64,1)";

// Drawing a line in. The dash array lives in the keyframes (not in `from`), so at rest the line is plain: a part with
// pathLength 1 shares its name with the duotone halo of line-only icons, which has no pathLength and would otherwise
// show dotted at rest.
const draw = (icon: string, name = "draw") => `@keyframes ki-${icon}-${name}{from{stroke-dasharray:1;stroke-dashoffset:1}to{stroke-dasharray:1;stroke-dashoffset:0}}`;

export const batchB: Record<string, Override> = {
  drive: {
    note: "The two lights blink in turn while the seam scans across.",
    draw: ["p2"],
    motion: {
      p2: { animation: `ki-drive-draw .5s ${SMOOTH} backwards` },
      p3: { animation: `ki-drive-blink .5s ${SMOOTH} 60ms` },
      p0: { animation: `ki-drive-blink .5s ${SMOOTH} 200ms` },
      p1: { to: { transform: "translateY(-0.5px)" } },
    },
    keyframes:
      draw("drive") + "@keyframes ki-drive-blink{0%,100%{opacity:1;transform:none}30%{opacity:.15;transform:scale(.5)}60%{opacity:1;transform:scale(1.5)}}",
  },

  "drive-download": {
    note: "The arrow drops into the drive, which dips as it lands, and the lights blink.",
    motion: {
      p0: { animation: `ki-drive-download-drop .62s ${SMOOTH}` },
      p1: { animation: `ki-drive-download-drop .62s ${SMOOTH} 30ms` },
      p2: { animation: `ki-drive-download-dip .5s ${SMOOTH} 200ms` },
      p3: { animation: `ki-drive-download-blink .45s ${SMOOTH} 240ms` },
      p4: { animation: `ki-drive-download-blink .45s ${SMOOTH} 320ms` },
    },
    keyframes:
      "@keyframes ki-drive-download-drop{0%{transform:none;opacity:1}42%{transform:translateY(4px);opacity:0}43%{transform:translateY(-4px);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-drive-download-dip{0%,100%{transform:none}35%{transform:translateY(.8px)}}" +
      "@keyframes ki-drive-download-blink{0%,100%{opacity:1}40%{opacity:.15}}",
  },

  ear: {
    note: "The ear perks up and the inner curl spirals in, drawn afresh.",
    draw: ["p1"],
    motion: {
      p0: { origin: "40% 85%", to: { transform: "rotate(-6deg) scale(1.03)" } },
      p1: { to: { transform: "translate(-0.3px,-0.4px)" }, delay: 50, animation: `ki-ear-draw .55s ${SMOOTH} 60ms backwards` },
    },
    keyframes: draw("ear"),
  },

  eraser: {
    note: "The eraser rubs side to side while its band wipes away and comes back.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-eraser-rub .62s ${SMOOTH}` },
      p1: { animation: `ki-eraser-rub .62s ${SMOOTH}, ki-eraser-wipe .62s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-eraser-rub{0%,100%{transform:none}25%{transform:translate(-1.4px,.3px) rotate(-3deg)}55%{transform:translate(1.2px,-.2px) rotate(2deg)}80%{transform:translate(-.5px,.1px)}}" +
      "@keyframes ki-eraser-wipe{0%{stroke-dasharray:1;stroke-dashoffset:0}45%{stroke-dasharray:1;stroke-dashoffset:-1}46%{stroke-dasharray:1;stroke-dashoffset:1}100%{stroke-dasharray:1;stroke-dashoffset:0}}",
  },

  eye: {
    note: "The eye blinks, then the pupil glances left and right.",
    motion: {
      p0: { animation: `ki-eye-blink .4s ${SMOOTH}` },
      p1: { animation: `ki-eye-look .95s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-eye-blink{0%,100%{transform:none}40%{transform:scaleY(.08)}}" +
      "@keyframes ki-eye-look{0%,100%{transform:none}17%{transform:scaleY(.1)}38%{transform:none}60%{transform:translateX(-1.6px)}82%{transform:translateX(1.3px)}}",
  },

  "file-audio": {
    note: "The headphones bob to a beat while the folded corner flicks.",
    motion: {
      p2: { origin: "50% 100%", animation: `ki-file-audio-beat .8s ${SMOOTH}` },
      p1: { to: { transform: "translate(.6px,-.6px)" }, delay: 60 },
    },
    keyframes:
      "@keyframes ki-file-audio-beat{0%,50%,100%{transform:none}22%{transform:translateY(-1.2px) scale(1.06)}72%{transform:translateY(-.9px) scale(1.04)}}",
  },

  "file-check": {
    note: "The tick is drawn in, then pops, as the folded corner flicks.",
    draw: ["p2"],
    motion: {
      p2: { to: { transform: "scale(1.12)" }, delay: 300, animation: `ki-file-check-draw .45s ${SMOOTH} 80ms backwards` },
      p1: { to: { transform: "translate(.6px,-.6px)" } },
    },
    keyframes: draw("file-check"),
  },

  "file-down": {
    note: "The arrow's stem is drawn downward and its head drops in under it.",
    draw: ["p2"],
    motion: {
      // the stem runs bottom to top, so a negative offset draws it from the top down
      p2: { animation: `ki-file-down-stem .4s ${SMOOTH} backwards` },
      p3: { animation: `ki-file-down-head .5s ${SPRING} 160ms backwards` },
    },
    keyframes:
      "@keyframes ki-file-down-stem{from{stroke-dasharray:1;stroke-dashoffset:-1}to{stroke-dasharray:1;stroke-dashoffset:0}}" +
      "@keyframes ki-file-down-head{from{transform:translateY(-3px);opacity:0}to{transform:none;opacity:1}}",
  },

  "file-json": {
    note: "The braces draw themselves and open apart.",
    draw: ["p2", "p3"],
    motion: {
      p2: { to: { transform: "translateX(-1.2px)" }, animation: `ki-file-json-draw .5s ${SMOOTH} backwards` },
      p3: { to: { transform: "translateX(1.2px)" }, delay: 60, animation: `ki-file-json-draw .5s ${SMOOTH} 80ms backwards` },
    },
    keyframes: draw("file-json"),
  },

  "file-text": {
    note: "The lines of text write themselves one after the other.",
    draw: ["p2", "p3", "p4"],
    motion: {
      p2: { animation: `ki-file-text-draw .35s ${SMOOTH} backwards` },
      p3: { animation: `ki-file-text-draw .45s ${SMOOTH} 110ms backwards` },
      p4: { animation: `ki-file-text-draw .45s ${SMOOTH} 230ms backwards` },
      p1: { to: { transform: "translate(.5px,-.5px)" } },
    },
    keyframes: draw("file-text"),
  },

  film: {
    note: "The frames roll down the strip: the sprocket marks and the frame line slide and come round again.",
    motion: {
      p2: { animation: `ki-film-roll .62s ${SMOOTH}` },
      p4: { animation: `ki-film-roll .62s ${SMOOTH}` },
      p6: { animation: `ki-film-roll .62s ${SMOOTH}` },
      p7: { animation: `ki-film-roll .62s ${SMOOTH}` },
      p3: { animation: `ki-film-roll .62s ${SMOOTH} 40ms` },
    },
    keyframes:
      "@keyframes ki-film-roll{0%,100%{transform:none;opacity:1}45%{transform:translateY(4.5px);opacity:0}46%{transform:translateY(-4.5px);opacity:0}}",
  },

  "filter-x": {
    note: "The funnel tips as the cross is struck through it, one stroke after the other.",
    draw: ["p1", "p2"],
    motion: {
      p0: { origin: "40% 0%", animation: `ki-filter-x-tip .6s ${SMOOTH}` },
      p1: { animation: `ki-filter-x-draw .35s ${SMOOTH} 60ms backwards` },
      p2: { animation: `ki-filter-x-draw .35s ${SMOOTH} 200ms backwards` },
    },
    keyframes:
      draw("filter-x") + "@keyframes ki-filter-x-tip{0%,100%{transform:none}35%{transform:rotate(-6deg)}70%{transform:rotate(2.5deg)}}",
  },

  flame: {
    note: "The flame flickers: its tip leaps from side to side and the inner tongue rises.",
    motion: {
      // the shape morph (not in Safari) and a sway around the base that carries it where morphs don't play
      p0: { origin: "50% 100%", animation: `ki-flame-flicker .9s ease-in-out, ki-flame-sway .9s ease-in-out` },
    },
    keyframes:
      "@keyframes ki-flame-flicker{" +
      '0%,100%{d:path("M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4")}' +
      '33%{d:path("M13.2 2.6q.4 4.2 2.8 6.9t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3.5-1.5-6q0-2 3.7-3.4")}' +
      '66%{d:path("M11 3.3q1.8 3.6 5 6.2t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.3-3.2-1.3-5.4q0-2 1.3-3.3")}}' +
      "@keyframes ki-flame-sway{0%,100%{transform:none}33%{transform:skewX(-4deg) scaleY(1.05)}66%{transform:skewX(3deg) scaleY(.98)}}",
  },

  "folder-open": {
    note: "The folder leans open: it skews back on its bottom edge and springs forward.",
    motion: {
      p0: { origin: "50% 100%", animation: `ki-folder-open-swing .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-folder-open-swing{0%,100%{transform:none}35%{transform:skewX(-9deg) scaleY(.93)}70%{transform:skewX(3deg) scaleY(1.02)}}",
  },

  frown: {
    note: "The mouth droops further as the eyes squint.",
    motion: {
      p2: { to: { d: 'path("M8.5 17a4 4 0 0 1 7 0")', transform: "translateY(.3px)" } },
      p0: { to: { transform: "translateY(.4px) scaleY(.35)" }, delay: 40 },
      p1: { to: { transform: "translateY(.4px) scaleY(.35)" }, delay: 40 },
    },
  },

  gauge: {
    note: "The needle sweeps back round the dial, races past and settles.",
    motion: {
      p0: { box: "view-box", origin: "12px 14px", animation: `ki-gauge-sweep .9s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-gauge-sweep{0%,100%{transform:none}30%{transform:rotate(-90deg)}70%{transform:rotate(30deg)}}",
  },

  globe: {
    note: "The globe spins: the meridian swings wide, narrows to a line and comes round.",
    motion: {
      p1: { animation: `ki-globe-spin .9s ${SMOOTH}` },
      root: { to: { transform: "rotate(-6deg)" } },
    },
    keyframes:
      "@keyframes ki-globe-spin{0%,100%{transform:none}30%{transform:scaleX(2.3)}65%{transform:scaleX(.06)}}",
  },

  "graduation-cap": {
    note: "The cap is tossed and tips, and the tassel swings.",
    motion: {
      p0: { animation: `ki-graduation-cap-toss .7s ${SMOOTH}` },
      p1: { origin: "50% 0%", animation: `ki-graduation-cap-tassel .85s ${SMOOTH}` },
      p2: { animation: `ki-graduation-cap-head .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-graduation-cap-toss{0%,100%{transform:none}30%{transform:translateY(-1.5px) rotate(-6deg)}65%{transform:translateY(.2px) rotate(1deg)}}" +
      // the tassel hangs from the cap's corner, so it rides up with it while swinging
      "@keyframes ki-graduation-cap-tassel{0%,100%{transform:none}30%{transform:translateY(-2.4px) rotate(16deg)}55%{transform:translateY(-.4px) rotate(-14deg)}78%{transform:rotate(6deg)}}" +
      "@keyframes ki-graduation-cap-head{0%,100%{transform:none}30%{transform:translateY(.4px)}}",
  },

  hammer: {
    note: "The hammer winds back on the grip, strikes down and bounces.",
    motion: {
      // the head's fill shares p0 with the handle, so the three parts swing together around the grip
      p0: { box: "view-box", origin: "4px 20px", animation: `ki-hammer-strike .7s ${SMOOTH}` },
      p1: { box: "view-box", origin: "4px 20px", animation: `ki-hammer-strike .7s ${SMOOTH}` },
      p2: { box: "view-box", origin: "4px 20px", animation: `ki-hammer-strike .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-hammer-strike{0%,100%{transform:none}30%{transform:rotate(-16deg)}52%{transform:rotate(9deg)}66%{transform:rotate(2deg)}80%{transform:rotate(5deg)}}",
  },

  hand: {
    note: "The fingers wave one after the other.",
    motion: {
      p2: { origin: "50% 100%", animation: `ki-hand-wave .6s ${SMOOTH}` },
      p1: { origin: "50% 100%", animation: `ki-hand-wave .6s ${SMOOTH} 70ms` },
      p0: { origin: "50% 100%", animation: `ki-hand-wave .6s ${SMOOTH} 140ms` },
      p3: { origin: "40% 100%", animation: `ki-hand-palm .6s ${SMOOTH} 180ms` },
    },
    keyframes:
      "@keyframes ki-hand-wave{0%,100%{transform:none}35%{transform:rotate(-9deg)}70%{transform:rotate(5deg)}}" +
      "@keyframes ki-hand-palm{0%,100%{transform:none}40%{transform:rotate(-2deg)}}",
  },

  hash: {
    note: "The strokes slide past each other.",
    motion: {
      p0: { to: { transform: "translateX(1.5px)" } },
      p1: { to: { transform: "translateX(-1.5px)" }, delay: 40 },
      p2: { to: { transform: "translate(.15px,-1.4px)" }, delay: 80 },
      p3: { to: { transform: "translate(-.15px,1.4px)" }, delay: 120 },
    },
  },

  help: {
    note: "The question mark is written afresh and its dot drops in.",
    draw: ["p1"],
    motion: {
      p1: { animation: `ki-help-draw .5s ${SMOOTH} backwards` },
      p2: { animation: `ki-help-dot .5s ${SPRING} 280ms backwards` },
    },
    keyframes: draw("help") + "@keyframes ki-help-dot{from{transform:translateY(-3px);opacity:0}to{transform:none;opacity:1}}",
  },

  "image-off": {
    note: "The picture breaks along the slash: its two halves part and the sun sinks.",
    motion: {
      p4: { to: { transform: "translate(-.7px,.7px)" } },
      p2: { to: { transform: "translate(-.7px,.7px)" } },
      p5: { to: { transform: "translate(.7px,-.7px)" }, delay: 40 },
      p3: { to: { transform: "translate(.7px,-.7px)" }, delay: 40 },
      p1: { to: { transform: "translateY(1.2px) rotate(-20deg)", opacity: 0.5 }, delay: 80 },
    },
  },

  "image-plus": {
    note: "The plus turns a quarter and the sun rises over the hill.",
    motion: {
      p0: { box: "view-box", origin: "19px 5px", to: { transform: "rotate(90deg)" } },
      p1: { box: "view-box", origin: "19px 5px", to: { transform: "rotate(90deg)" } },
      p4: { to: { transform: "translateY(-1.2px)" }, delay: 60 },
      p3: { origin: "100% 0%", to: { transform: "scaleY(1.06)" }, delay: 100 },
    },
  },

  keyboard: {
    note: "The keys press one after the other, ending on the space bar.",
    motion: {
      p5: { animation: `ki-keyboard-key .3s ${SMOOTH}` },
      p0: { animation: `ki-keyboard-key .3s ${SMOOTH} 60ms` },
      p2: { animation: `ki-keyboard-key .3s ${SMOOTH} 120ms` },
      p4: { animation: `ki-keyboard-key .3s ${SMOOTH} 180ms` },
      p7: { animation: `ki-keyboard-key .3s ${SMOOTH} 240ms` },
      p1: { animation: `ki-keyboard-key .3s ${SMOOTH} 300ms` },
      p3: { animation: `ki-keyboard-key .3s ${SMOOTH} 360ms` },
      p6: { animation: `ki-keyboard-space .36s ${SMOOTH} 430ms` },
    },
    keyframes:
      "@keyframes ki-keyboard-key{0%,100%{transform:none;opacity:1}40%{transform:translateY(.7px) scale(.6);opacity:.35}}" +
      "@keyframes ki-keyboard-space{0%,100%{transform:none;opacity:1}40%{transform:translateY(.7px) scaleX(.85);opacity:.5}}",
  },

  languages: {
    note: "The two characters trade places in a hop, and the A's bar is drawn again.",
    draw: ["p5"],
    motion: {
      p0: { animation: `ki-languages-a .7s ${SMOOTH}` },
      p1: { animation: `ki-languages-a .7s ${SMOOTH}` },
      p2: { animation: `ki-languages-a .7s ${SMOOTH}` },
      p3: { animation: `ki-languages-a .7s ${SMOOTH}` },
      p4: { animation: `ki-languages-b .7s ${SMOOTH} 40ms` },
      p5: { animation: `ki-languages-b .7s ${SMOOTH} 40ms, ki-languages-draw .4s ${SMOOTH} 420ms backwards` },
    },
    keyframes:
      draw("languages") +
      "@keyframes ki-languages-a{0%,100%{transform:none;opacity:1}45%{transform:translate(2.2px,1.8px);opacity:.45}}" +
      "@keyframes ki-languages-b{0%,100%{transform:none;opacity:1}45%{transform:translate(-2.2px,-1.8px);opacity:.45}}",
  },

  laptop: {
    note: "The lid lifts open a little and the hinge line sweeps across as it wakes.",
    draw: ["p1"],
    motion: {
      p0: { origin: "50% 100%", to: { transform: "scaleY(1.05)" } },
      p1: { to: { transform: "translateY(-.2px)" }, animation: `ki-laptop-draw .5s ${SMOOTH} 100ms backwards` },
    },
    keyframes: draw("laptop"),
  },

  layers: {
    note: "The layers fan apart and settle.",
    motion: {
      p0: { to: { transform: "translateY(-1.6px)" } },
      p1: { to: { transform: "translateY(-.2px)" }, delay: 40 },
      p2: { to: { transform: "translateY(1.3px)" }, delay: 80 },
    },
  },

  library: {
    note: "The books tilt on the shelf one after the other.",
    motion: {
      p3: { origin: "50% 100%", animation: `ki-library-tilt .55s ${SMOOTH}` },
      p2: { origin: "50% 100%", animation: `ki-library-tilt .55s ${SMOOTH} 60ms` },
      p1: { origin: "50% 100%", animation: `ki-library-tilt .55s ${SMOOTH} 120ms` },
      p0: { origin: "0% 100%", animation: `ki-library-tilt .55s ${SMOOTH} 180ms` },
    },
    keyframes: "@keyframes ki-library-tilt{0%,100%{transform:none}40%{transform:rotate(-9deg)}72%{transform:rotate(3deg)}}",
  },

  lightbulb: {
    note: "The bulb swells as it lights, and the threads of its base are drawn in.",
    draw: ["p1", "p2"],
    motion: {
      p0: { origin: "50% 100%", to: { transform: "translateY(-.4px) scale(1.06)" }, animation: `ki-lightbulb-glow .6s ${SMOOTH}` },
      p1: { animation: `ki-lightbulb-draw .35s ${SMOOTH} 80ms backwards` },
      p2: { animation: `ki-lightbulb-draw .3s ${SMOOTH} 180ms backwards` },
    },
    keyframes:
      draw("lightbulb") +
      "@keyframes ki-lightbulb-glow{0%{transform:none;opacity:1}30%{transform:translateY(-.4px) scale(1.1);opacity:.6}60%{transform:translateY(-.4px) scale(1.03);opacity:1}100%{transform:translateY(-.4px) scale(1.06)}}",
  },

  "list-checks": {
    note: "The ticks are drawn in one after the other, and each item slides on as it is checked.",
    draw: ["p3", "p4"],
    motion: {
      p4: { animation: `ki-list-checks-draw .4s ${SMOOTH} backwards` },
      p3: { animation: `ki-list-checks-draw .4s ${SMOOTH} 200ms backwards` },
      p0: { to: { transform: "translateX(.9px)" }, delay: 160 },
      p2: { to: { transform: "translateX(.9px)" }, delay: 360 },
    },
    keyframes: draw("list-checks"),
  },

  "list-ordered": {
    note: "The numbers write themselves and each line stretches out beside its number.",
    draw: ["p3", "p4", "p5"],
    motion: {
      p3: { animation: `ki-list-ordered-draw .35s ${SMOOTH} backwards` },
      p4: { animation: `ki-list-ordered-draw .2s ${SMOOTH} 250ms backwards` },
      p5: { animation: `ki-list-ordered-draw .45s ${SMOOTH} 160ms backwards` },
      p0: { origin: "0% 50%", animation: `ki-list-ordered-line .45s ${SMOOTH} 60ms backwards` },
      p1: { origin: "0% 50%", animation: `ki-list-ordered-line .45s ${SMOOTH} 140ms backwards` },
      p2: { origin: "0% 50%", animation: `ki-list-ordered-line .45s ${SMOOTH} 220ms backwards` },
    },
    keyframes: draw("list-ordered") + "@keyframes ki-list-ordered-line{from{transform:scaleX(.25);opacity:.3}to{transform:none;opacity:1}}",
  },

  "list-plus": {
    note: "The plus turns a quarter and the short line stretches toward it.",
    motion: {
      p3: { box: "view-box", origin: "18px 12px", to: { transform: "rotate(90deg)" } },
      p4: { box: "view-box", origin: "18px 12px", to: { transform: "rotate(90deg)" } },
      p1: { origin: "0% 50%", to: { transform: "scaleX(1.2)" }, delay: 80 },
    },
  },

  loader: {
    note: "The arc spins round and round.",
    motion: {
      p0: { box: "view-box", origin: "12px 12px", animation: "ki-loader-spin .8s linear infinite" },
    },
    keyframes: "@keyframes ki-loader-spin{to{transform:rotate(360deg)}}",
  },

  lock: {
    note: "The shackle lifts and swings open on its left leg.",
    motion: {
      p1: { origin: "0% 100%", to: { transform: "translateY(-1.6px) rotate(-16deg)" } },
      p0: { to: { transform: "translateY(.4px)" }, delay: 60 },
    },
  },
};
