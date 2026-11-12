import type { Override } from "./types";

/** the smooth curve (no overshoot) for drawings and keyframe motions */
const E = "cubic-bezier(.22,1,.36,1)";
/** a line drawn in from its start (needs the part in `draw` and `from: { strokeDasharray: 1 }`) */
const drawKf = (icon: string) => `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
/** a line drawn in from its end */
const drawRevKf = (icon: string) => `@keyframes ki-${icon}-undraw{from{stroke-dashoffset:-1}to{stroke-dashoffset:0}}`;
const drawIn = (icon: string, dur: number, delay = 0, reverse = false) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-${reverse ? "undraw" : "draw"} ${dur}ms ${E} ${delay}ms backwards`,
});

const SHIELD_LIFT = { transform: "translateY(-0.8px)" };

export const batchD: Record<string, Override> = {
  rocket: {
    note: "The rocket lifts off up and to the right while its exhaust flame flickers behind it.",
    motion: {
      p2: { to: { transform: "translate(1.4px,-1.4px)" } },
      p3: { to: { transform: "translate(1.1px,-1.1px)" }, delay: 50 },
      p0: { to: { transform: "translate(1.1px,-1.1px)" }, delay: 50 },
      p1: { origin: "100% 0%", to: { transform: "translate(.9px,-.9px)" }, animation: `ki-rocket-flame .75s ${E} 60ms` },
    },
    keyframes:
      "@keyframes ki-rocket-flame{0%{opacity:.3;transform:scale(.3)}30%{opacity:1;transform:translate(.9px,-.9px) scale(1.25)}55%{transform:translate(.9px,-.9px) scale(.8)}78%{transform:translate(.9px,-.9px) scale(1.12)}100%{transform:translate(.9px,-.9px)}}",
  },

  "rotate-ccw": {
    note: "The arc sweeps back around the centre, redrawing itself, and the arrowhead draws in at its end.",
    draw: ["p0", "p1"],
    motion: {
      p0: { box: "view-box", origin: "12px 12px", to: { transform: "rotate(-40deg)" }, ease: "smooth", duration: 650, ...drawIn("rotate-ccw", 560) },
      p1: { box: "view-box", origin: "12px 12px", to: { transform: "rotate(-40deg)" }, ease: "smooth", duration: 650, ...drawIn("rotate-ccw", 260, 420) },
    },
    keyframes: drawKf("rotate-ccw"),
  },

  "rotate-cw": {
    note: "The arc sweeps forward around the centre, redrawing itself, and the arrowhead draws in at its end.",
    draw: ["p0", "p1"],
    motion: {
      p0: { box: "view-box", origin: "12px 12px", to: { transform: "rotate(40deg)" }, ease: "smooth", duration: 650, ...drawIn("rotate-cw", 560) },
      p1: { box: "view-box", origin: "12px 12px", to: { transform: "rotate(40deg)" }, ease: "smooth", duration: 650, ...drawIn("rotate-cw", 260, 420) },
    },
    keyframes: drawKf("rotate-cw"),
  },

  save: {
    note: "The shutter slides open and the label presses down as it saves.",
    motion: {
      p2: { to: { transform: "translateX(1.8px)" } },
      p1: { origin: "50% 100%", animation: `ki-save-press .55s ${E} 120ms` },
    },
    keyframes: "@keyframes ki-save-press{35%{transform:translateY(.9px) scaleY(.86)}70%{transform:translateY(-.2px)}100%{transform:none}}",
  },

  "scan-search": {
    note: "The corners close in on the subject while the lens sweeps across it.",
    motion: {
      p0: { to: { transform: "translate(1px,1px)" } },
      p1: { to: { transform: "translate(-1px,1px)" }, delay: 40 },
      p2: { to: { transform: "translate(-1px,-1px)" }, delay: 80 },
      p3: { to: { transform: "translate(1px,-1px)" }, delay: 120 },
      p4: { animation: `ki-scan-search-sweep .8s ${E} 60ms` },
      p5: { animation: `ki-scan-search-sweep .8s ${E} 60ms` },
    },
    keyframes:
      "@keyframes ki-scan-search-sweep{25%{transform:translate(-1.6px,-1.2px)}55%{transform:translate(1.4px,-.6px)}80%{transform:translate(-.4px,.3px)}100%{transform:none}}",
  },

  scissors: {
    note: "The blades open around the pivot and snip shut, twice.",
    motion: {
      // blade one: the top ring, its arm to the pivot and the blade beyond it
      p0: { box: "view-box", origin: "12px 12px", animation: `ki-scissors-a .75s ${E}` },
      p1: { box: "view-box", origin: "12px 12px", animation: `ki-scissors-a .75s ${E}` },
      p4: { box: "view-box", origin: "12px 12px", animation: `ki-scissors-a .75s ${E}` },
      // blade two: the bottom ring and its long blade
      p3: { box: "view-box", origin: "12px 12px", animation: `ki-scissors-b .75s ${E}` },
      p2: { box: "view-box", origin: "12px 12px", animation: `ki-scissors-b .75s ${E}` },
    },
    keyframes:
      "@keyframes ki-scissors-a{22%{transform:rotate(11deg)}45%{transform:rotate(-1deg)}68%{transform:rotate(7deg)}100%{transform:none}}" +
      "@keyframes ki-scissors-b{22%{transform:rotate(-11deg)}45%{transform:rotate(1deg)}68%{transform:rotate(-7deg)}100%{transform:none}}",
  },

  "settings-2": {
    note: "The two knobs slide along their tracks towards each other, one after the other.",
    motion: {
      p2: { to: { transform: "translateX(-3px)" } },
      p0: { origin: "0% 50%", to: { transform: "scaleX(.667)" } },
      p3: { to: { transform: "translateX(3px)" }, delay: 70 },
      p1: { origin: "100% 50%", to: { transform: "scaleX(.667)" }, delay: 70 },
    },
  },

  shield: {
    note: "The shield rises a touch and its outline traces itself from the top.",
    draw: ["p0"],
    motion: {
      p0: { to: SHIELD_LIFT, ...drawIn("shield", 650) },
    },
    keyframes: drawKf("shield"),
  },

  "shield-alert": {
    note: "The shield rises, the exclamation stroke draws down and the dot drops in.",
    draw: ["p1"],
    motion: {
      p0: { to: SHIELD_LIFT },
      p1: { to: SHIELD_LIFT, ...drawIn("shield-alert", 320, 80) },
      p2: { to: SHIELD_LIFT, animation: `ki-shield-alert-dot .45s cubic-bezier(.34,1.56,.64,1) 340ms backwards` },
    },
    keyframes:
      drawKf("shield-alert") + "@keyframes ki-shield-alert-dot{from{opacity:0;transform:translateY(-2.4px)}to{opacity:1;transform:translateY(-.8px)}}",
  },

  "shield-check": {
    note: "The shield rises and the tick draws itself in.",
    draw: ["p1"],
    motion: {
      p0: { to: SHIELD_LIFT },
      p1: { to: SHIELD_LIFT, ...drawIn("shield-check", 450, 80) },
    },
    keyframes: drawKf("shield-check"),
  },

  "shield-question": {
    note: "The shield rises, the question mark curls in and its dot pops at the end.",
    draw: ["p1"],
    motion: {
      p0: { to: SHIELD_LIFT },
      p1: { to: SHIELD_LIFT, ...drawIn("shield-question", 480, 80) },
      p2: { to: SHIELD_LIFT, animation: `ki-shield-question-dot .4s cubic-bezier(.34,1.56,.64,1) 480ms backwards` },
    },
    keyframes:
      drawKf("shield-question") +
      "@keyframes ki-shield-question-dot{from{opacity:0;transform:translateY(-.8px) scale(0)}to{opacity:1;transform:translateY(-.8px)}}",
  },

  shuffle: {
    note: "The two crossing paths redraw from the left, then both arrowheads shoot in at their ends.",
    draw: ["p2", "p3", "p4"],
    motion: {
      p2: drawIn("shuffle", 420),
      p3: drawIn("shuffle", 180, 60),
      // drawn from its end, so it continues the line from the crossing to the arrow
      p4: drawIn("shuffle", 240, 220, true),
      p1: { animation: `ki-shuffle-head .4s ${E} 300ms backwards` },
      p0: { animation: `ki-shuffle-head .4s ${E} 380ms backwards` },
    },
    keyframes:
      drawKf("shuffle") + drawRevKf("shuffle") + "@keyframes ki-shuffle-head{from{opacity:0;transform:translateX(-2.5px)}to{opacity:1;transform:none}}",
  },

  skull: {
    note: "The jaw chatters open and shut while the skull rattles and its eyes flare.",
    motion: {
      p1: { animation: `ki-skull-jaw .7s ${E}` },
      p2: { animation: `ki-skull-eye .7s ${E}` },
      p3: { animation: `ki-skull-eye .7s ${E}` },
      root: { origin: "50% 100%", animation: `ki-skull-rattle .7s ${E}` },
    },
    keyframes:
      `@keyframes ki-skull-jaw{0%,50%,100%{d:path("M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z")}25%,75%{d:path("M15 23a1 1 0 0 0 1-1v-2a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v2a1 1 0 0 0 1 1z")}}` +
      "@keyframes ki-skull-eye{25%,75%{transform:scale(1.35)}50%{transform:scale(.9)}100%{transform:none}}" +
      "@keyframes ki-skull-rattle{20%{transform:rotate(-4deg)}40%{transform:rotate(3deg)}60%{transform:rotate(-2deg)}80%{transform:rotate(1deg)}100%{transform:none}}",
  },

  sliders: {
    note: "Each knob slides to a new setting in turn, its track growing and shrinking either side.",
    motion: {
      // top row: knob left
      p2: { to: { transform: "translateX(-3px)" } },
      p0: { to: { d: 'path("M7 5H3")' } },
      p6: { to: { d: 'path("M21 5h-10")' } },
      // middle row: knob right
      p7: { to: { transform: "translateX(4px)" }, delay: 60 },
      p8: { to: { d: 'path("M12 12H3")' }, delay: 60 },
      p4: { to: { d: 'path("M21 12h-5")' }, delay: 60 },
      // bottom row: knob left
      p3: { to: { transform: "translateX(-3px)" }, delay: 120 },
      p1: { to: { d: 'path("M9 19H3")' }, delay: 120 },
      p5: { to: { d: 'path("M21 19h-8")' }, delay: 120 },
    },
  },

  "square-dashed": {
    note: "The dashes march clockwise around the selection while its corners tighten.",
    motion: {
      p0: { to: { transform: "translate(.8px,.8px)" } },
      p1: { to: { transform: "translate(-.8px,.8px)" } },
      p2: { to: { transform: "translate(-.8px,-.8px)" } },
      p3: { to: { transform: "translate(.8px,-.8px)" } },
      p4: { animation: `ki-square-dashed-top .6s ${E}` },
      p6: { animation: `ki-square-dashed-top .6s ${E} 40ms` },
      p9: { animation: `ki-square-dashed-right .6s ${E} 80ms` },
      p11: { animation: `ki-square-dashed-right .6s ${E} 120ms` },
      p7: { animation: `ki-square-dashed-bottom .6s ${E} 160ms` },
      p5: { animation: `ki-square-dashed-bottom .6s ${E} 200ms` },
      p10: { animation: `ki-square-dashed-left .6s ${E} 240ms` },
      p8: { animation: `ki-square-dashed-left .6s ${E} 280ms` },
    },
    keyframes: (
      [
        ["top", "translateX(2.5px)", "translateX(-2.5px)"],
        ["right", "translateY(2.5px)", "translateY(-2.5px)"],
        ["bottom", "translateX(-2.5px)", "translateX(2.5px)"],
        ["left", "translateY(-2.5px)", "translateY(2.5px)"],
      ] as const
    )
      .map(
        ([side, out, back]) =>
          `@keyframes ki-square-dashed-${side}{45%{opacity:0;transform:${out}}46%{opacity:0;transform:${back}}100%{opacity:1;transform:none}}`,
      )
      .join(""),
  },

  stop: {
    note: "The square squeezes in and springs back, its corners rounding as it presses.",
    motion: {
      p0: {
        to: { d: 'path("M7 3 H17 A4 4 0 0 1 21 7 V17 A4 4 0 0 1 17 21 H7 A4 4 0 0 1 3 17 V7 A4 4 0 0 1 7 3 Z")' },
        animation: `ki-stop-squeeze .55s ${E}`,
      },
    },
    keyframes: "@keyframes ki-stop-squeeze{30%{transform:scale(.82)}60%{transform:scale(1.04)}100%{transform:none}}",
  },

  sun: {
    note: "The rays shoot out one by one around the sun, which swells and turns a little.",
    draw: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
    motion: {
      root: { to: { transform: "rotate(30deg)" }, duration: 700, ease: "smooth" },
      p0: { to: { transform: "scale(1.1)" } },
      // each ray grows from its inner end (reverse where the source draws it from the outside in), clockwise from the top
      p1: drawIn("sun", 300, 0, true),
      p8: drawIn("sun", 300, 45, true),
      p6: drawIn("sun", 300, 90),
      p4: drawIn("sun", 300, 135),
      p2: drawIn("sun", 300, 180),
      p7: drawIn("sun", 300, 225),
      p5: drawIn("sun", 300, 270, true),
      p3: drawIn("sun", 300, 315, true),
    },
    keyframes: drawKf("sun") + drawRevKf("sun"),
  },

  tag: {
    note: "The tag swings on its hole and settles.",
    motion: {
      p0: { box: "view-box", origin: "7.5px 7.5px", animation: `ki-tag-swing .8s ${E}` },
      p1: { box: "view-box", origin: "7.5px 7.5px", animation: `ki-tag-swing .8s ${E}` },
    },
    keyframes: "@keyframes ki-tag-swing{20%{transform:rotate(12deg)}45%{transform:rotate(-8deg)}70%{transform:rotate(4deg)}100%{transform:none}}",
  },

  tags: {
    note: "The front tag swings on its hole and the tag behind follows a beat later.",
    motion: {
      p0: { box: "view-box", origin: "10.5px 6.5px", animation: `ki-tags-swing .8s ${E}` },
      p2: { box: "view-box", origin: "10.5px 6.5px", animation: `ki-tags-swing .8s ${E}` },
      p1: { box: "view-box", origin: "10.5px 6.5px", animation: `ki-tags-back .8s ${E} 90ms` },
    },
    keyframes:
      "@keyframes ki-tags-swing{20%{transform:rotate(11deg)}45%{transform:rotate(-7deg)}70%{transform:rotate(3deg)}100%{transform:none}}" +
      "@keyframes ki-tags-back{25%{transform:rotate(7deg)}50%{transform:rotate(-4deg)}75%{transform:rotate(2deg)}100%{transform:none}}",
  },

  timer: {
    note: "The button presses and the hand sweeps a full turn around the dial.",
    motion: {
      p0: { animation: `ki-timer-press .4s ${E}` },
      p1: { box: "view-box", origin: "12px 14px", to: { transform: "rotate(360deg)" }, duration: 800, ease: "smooth", delay: 80 },
    },
    keyframes: "@keyframes ki-timer-press{40%{transform:translateY(1.1px) scaleX(.85)}100%{transform:none}}",
  },

  trophy: {
    note: "The cup lifts on its stem and the handles shine as they redraw.",
    draw: ["p2", "p5"],
    motion: {
      p4: { to: { transform: "translateY(-1.2px)" } },
      p2: { to: { transform: "translateY(-1.2px)" }, delay: 40, ...drawIn("trophy", 380, 140) },
      p5: { to: { transform: "translateY(-1.2px)" }, delay: 40, ...drawIn("trophy", 380, 140) },
      // the stem stretches to keep the cup on its base
      p0: { origin: "50% 100%", to: { transform: "scaleY(1.16)" } },
      p1: { origin: "50% 100%", to: { transform: "scaleY(1.16)" } },
    },
    keyframes: drawKf("trophy"),
  },

  type: {
    note: "The T's bar draws across, the stem drops down from it and the foot snaps on.",
    draw: ["p0", "p1"],
    motion: {
      p1: drawIn("type", 400),
      p0: drawIn("type", 340, 160),
      p2: { animation: `ki-type-foot .4s cubic-bezier(.34,1.56,.64,1) 400ms backwards` },
    },
    keyframes: drawKf("type") + "@keyframes ki-type-foot{from{opacity:0;transform:scaleX(0)}to{opacity:1;transform:none}}",
  },

  undo: {
    note: "The line winds back around its curve and the arrowhead swings in, pointing back.",
    draw: ["p1"],
    motion: {
      p1: drawIn("undo", 500, 0, true),
      p0: { origin: "0% 50%", animation: `ki-undo-head .5s ${E} 300ms backwards` },
    },
    keyframes:
      drawRevKf("undo") +
      "@keyframes ki-undo-head{0%{opacity:0;transform:translateX(2.5px) rotate(-30deg)}60%{opacity:1;transform:translateX(-1.2px)}100%{transform:none}}",
  },

  "user-plus": {
    note: "The person nods and the plus draws itself in beside them.",
    draw: ["p2", "p3"],
    motion: {
      p1: { origin: "50% 100%", animation: `ki-user-plus-nod .6s ${E}` },
      p0: { to: { transform: "translateY(-.3px)" } },
      p2: drawIn("user-plus", 260, 80),
      p3: drawIn("user-plus", 260, 220),
    },
    keyframes:
      drawKf("user-plus") + "@keyframes ki-user-plus-nod{30%{transform:translateY(1px) rotate(4deg)}65%{transform:translateY(-.5px)}100%{transform:none}}",
  },

  users: {
    note: "The person at the back steps out to the side while the front one makes room.",
    motion: {
      p3: { to: { transform: "translateX(-.7px)" } },
      p0: { to: { transform: "translateX(-.7px)" } },
      p1: { to: { transform: "translate(1.5px,-.4px)" }, delay: 70 },
      p2: { to: { transform: "translate(1.5px,0)" }, delay: 110 },
    },
  },

  video: {
    note: "The lens flap pulses out twice from the camera body, which leans back.",
    motion: {
      p1: { to: { transform: "translateX(-.6px)" } },
      p0: { origin: "0% 50%", animation: `ki-video-lens .7s ${E} 40ms` },
    },
    keyframes:
      "@keyframes ki-video-lens{25%{transform:translateX(.6px) scale(1.2)}50%{transform:scale(.92)}75%{transform:translateX(.4px) scale(1.1)}100%{transform:none}}",
  },

  "volume-low": {
    note: "The speaker cone pushes and the sound wave ripples out from it.",
    motion: {
      p0: { origin: "0% 50%", animation: `ki-volume-low-cone .45s ${E}` },
      p1: { origin: "0% 50%", animation: `ki-volume-low-wave .62s ${E} 60ms both` },
    },
    keyframes:
      "@keyframes ki-volume-low-cone{35%{transform:scale(.9)}100%{transform:none}}" +
      "@keyframes ki-volume-low-wave{0%{opacity:.15;transform:translateX(-2.4px) scale(.75)}55%{opacity:1;transform:translateX(1px) scale(1.06)}100%{opacity:1;transform:translateX(.5px)}}",
  },

  "volume-off": {
    note: "The speaker shivers and the cross draws itself, one stroke then the other.",
    draw: ["p1", "p2"],
    motion: {
      p0: { origin: "100% 50%", animation: `ki-volume-off-shiver .5s ${E}` },
      p2: drawIn("volume-off", 260, 60),
      p1: drawIn("volume-off", 260, 200),
    },
    keyframes:
      drawKf("volume-off") +
      "@keyframes ki-volume-off-shiver{20%{transform:translateX(-.7px)}40%{transform:translateX(.5px)}60%{transform:translateX(-.3px)}100%{transform:none}}",
  },

  wand: {
    note: "The wand flicks and its three stars sparkle in turn.",
    motion: {
      p0: { box: "view-box", origin: "3px 21px", animation: `ki-wand-flick .6s ${E}` },
      p1: { box: "view-box", origin: "3px 21px", animation: `ki-wand-flick .6s ${E}` },
      // each star is two crossing strokes with the same centre, so they turn and grow together
      p2: { animation: `ki-wand-twinkle .5s ${E} 80ms backwards` },
      p5: { animation: `ki-wand-twinkle .5s ${E} 80ms backwards` },
      p4: { animation: `ki-wand-twinkle .5s ${E} 180ms backwards` },
      p7: { animation: `ki-wand-twinkle .5s ${E} 180ms backwards` },
      p3: { animation: `ki-wand-twinkle .5s ${E} 280ms backwards` },
      p6: { animation: `ki-wand-twinkle .5s ${E} 280ms backwards` },
    },
    keyframes:
      "@keyframes ki-wand-flick{30%{transform:rotate(-6deg)}65%{transform:rotate(2deg)}100%{transform:none}}" +
      "@keyframes ki-wand-twinkle{0%{opacity:0;transform:scale(0) rotate(-90deg)}60%{opacity:1;transform:scale(1.3) rotate(10deg)}100%{opacity:1;transform:none}}",
  },

  waveform: {
    note: "The waveform's peaks rise and fall like a live signal.",
    motion: {
      p0: { animation: "ki-waveform-live .9s cubic-bezier(.45,0,.55,1)" },
    },
    keyframes:
      `@keyframes ki-waveform-live{` +
      `30%{transform:scaleY(.95);d:path("M2 13a2 2 0 0 0 2-2V9a2 2 0 0 1 4 0v9a2 2 0 0 0 4 0V7a2 2 0 0 1 4 0v7a2 2 0 0 0 4 0v-2a2 2 0 0 1 2-2")}` +
      `65%{transform:scaleY(1.04);d:path("M2 13a2 2 0 0 0 2-2V4a2 2 0 0 1 4 0v15a2 2 0 0 0 4 0V6a2 2 0 0 1 4 0v14a2 2 0 0 0 4 0v-6a2 2 0 0 1 2-2")}` +
      `100%{transform:none;d:path("M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2")}}`,
  },

  waves: {
    note: "Each wave flips its crests and drifts along, top to bottom in turn.",
    motion: {
      p2: { animation: `ki-waves-top .75s ${E}` },
      p0: { animation: `ki-waves-mid .75s ${E} 70ms` },
      p1: { animation: `ki-waves-low .75s ${E} 140ms` },
    },
    keyframes: (
      [
        ["top", 5],
        ["mid", 12],
        ["low", 19],
      ] as const
    )
      .map(
        ([n, y]) =>
          `@keyframes ki-waves-${n}{` +
          `45%{transform:translateX(1.2px);d:path("M2 ${y}q2.5 -2 5 0t5 0 5 0 5 0")}` +
          `100%{transform:none;d:path("M2 ${y}q2.5 2 5 0t5 0 5 0 5 0")}}`,
      )
      .join(""),
  },

  "wifi-off": {
    note: "The dot pops, the arcs fade in from it one ring at a time, then the slash cuts across.",
    draw: ["p6"],
    motion: {
      p0: { animation: `ki-wifi-off-dot .4s cubic-bezier(.34,1.56,.64,1) backwards` },
      p1: { animation: `ki-wifi-off-arc .4s ${E} 80ms backwards` },
      p2: { animation: `ki-wifi-off-arc .4s ${E} 160ms backwards` },
      p3: { animation: `ki-wifi-off-arc .4s ${E} 160ms backwards` },
      p4: { animation: `ki-wifi-off-arc .4s ${E} 240ms backwards` },
      p5: { animation: `ki-wifi-off-arc .4s ${E} 240ms backwards` },
      p6: drawIn("wifi-off", 380, 360),
    },
    keyframes:
      drawKf("wifi-off") +
      "@keyframes ki-wifi-off-dot{from{opacity:0;transform:scale(0)}to{opacity:1;transform:none}}" +
      "@keyframes ki-wifi-off-arc{from{opacity:0;transform:translateY(2px) scale(.7)}to{opacity:1;transform:none}}",
  },

  wind: {
    note: "The gusts blow in from the left one after another and curl at their ends.",
    draw: ["p0", "p1", "p2"],
    motion: {
      // the source draws each gust from its curl back to the left, so they are drawn from their ends
      p2: { to: { transform: "translateX(.8px)" }, ...drawIn("wind", 480, 0, true) },
      p1: { to: { transform: "translateX(.8px)" }, delay: 60, ...drawIn("wind", 480, 90, true) },
      p0: { to: { transform: "translateX(.8px)" }, delay: 120, ...drawIn("wind", 480, 180, true) },
    },
    keyframes: drawRevKf("wind"),
  },

  wrench: {
    note: "The wrench turns around the bolt in its jaw, ratcheting twice.",
    motion: {
      p0: { box: "view-box", origin: "17px 7px", animation: `ki-wrench-turn .8s ${E}` },
    },
    keyframes: "@keyframes ki-wrench-turn{28%{transform:rotate(12deg)}50%{transform:rotate(2deg)}75%{transform:rotate(10deg)}100%{transform:none}}",
  },

  zap: {
    note: "The bolt strikes down, tracing itself from the top, and flashes.",
    draw: ["p0"],
    motion: {
      p0: { from: { strokeDasharray: 1 }, animation: `ki-zap-strike .7s ${E}` },
    },
    keyframes:
      "@keyframes ki-zap-strike{0%{stroke-dashoffset:1;transform:translateY(-1.5px)}40%{stroke-dashoffset:0;transform:translateY(.4px)}55%{opacity:.35}70%{opacity:1}82%{opacity:.5}100%{opacity:1;stroke-dashoffset:0;transform:none}}",
  },
};
