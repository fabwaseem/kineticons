import type { Override } from "./types";

// Shared timing curves: a draw or one-shot that arrives smoothly, and one with a little overshoot.
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
const SPRING = "cubic-bezier(.34,1.56,.64,1)";
// Drawing keyframes: from the path's start (offset 1 -> 0) or from its end (offset -1 -> 0).
const fromStart = (n: string) => `@keyframes ${n}{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
const fromEnd = (n: string) => `@keyframes ${n}{from{stroke-dashoffset:-1}to{stroke-dashoffset:0}}`;
const dash = { strokeDasharray: 1 };

export const batchA: Record<string, Override> = {
  activity: {
    note: "The pulse line traces itself left to right and the beat jumps.",
    draw: ["p0"],
    motion: {
      // the path starts on the right, so draw from its end to run left to right like a monitor
      p0: { from: dash, to: { transform: "scaleY(1.08)" }, animation: `ki-activity-trace .8s ${SMOOTH} backwards` },
    },
    keyframes: fromEnd("ki-activity-trace"),
  },

  alert: {
    note: "The triangle rocks on its base while the mark drops in and the dot pops.",
    motion: {
      p0: { origin: "50% 100%", animation: `ki-alert-rock .6s ${SMOOTH}` },
      p1: { origin: "50% 0%", animation: `ki-alert-bar .45s ${SMOOTH} 60ms backwards` },
      p2: { animation: `ki-alert-dot .4s ${SMOOTH} 220ms backwards` },
    },
    keyframes:
      "@keyframes ki-alert-rock{20%{transform:rotate(-5deg)}45%{transform:rotate(4deg)}70%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-alert-bar{0%{transform:scaleY(0)}60%{transform:scaleY(1.2)}100%{transform:none}}" +
      "@keyframes ki-alert-dot{0%{transform:scale(0)}60%{transform:scale(1.8)}100%{transform:none}}",
  },

  "arrow-down": {
    note: "The shaft draws down and the head pushes ahead of it.",
    draw: ["p0"],
    motion: {
      p0: { from: dash, origin: "50% 0%", to: { transform: "scaleY(1.12)" }, animation: `ki-arrow-down-shaft .4s ${SMOOTH} backwards` },
      p1: { to: { transform: "translateY(1.7px)" }, delay: 40 },
    },
    keyframes: fromStart("ki-arrow-down-shaft"),
  },

  "arrow-down-line": {
    note: "The arrow draws down onto the line, which stretches as it lands.",
    draw: ["p0"],
    motion: {
      // the shaft is drawn bottom-up, so draw from its end to come down from the top
      p0: { from: dash, animation: `ki-arrow-down-line-shaft .4s ${SMOOTH} backwards` },
      p1: { to: { transform: "translateY(1.5px)" } },
      p2: { to: { transform: "scaleX(1.15)" }, delay: 120 },
    },
    keyframes: fromEnd("ki-arrow-down-line-shaft"),
  },

  "arrow-left": {
    note: "The head pulls left and the shaft stretches after it.",
    motion: {
      p0: { to: { transform: "translateX(-2px)" } },
      p1: { origin: "100% 50%", to: { transform: "scaleX(1.14)" }, delay: 40 },
    },
  },

  ban: {
    note: "The ring stamps down and the slash strikes through again.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-ban-stamp .5s ${SMOOTH}` },
      p1: { from: dash, animation: `ki-ban-strike .4s ${SMOOTH} 120ms backwards` },
    },
    keyframes:
      "@keyframes ki-ban-stamp{30%{transform:scale(.88)}65%{transform:scale(1.04)}100%{transform:none}}" + fromStart("ki-ban-strike"),
  },

  "book-open": {
    note: "The pages lift at their outer edges as the book opens wider.",
    motion: {
      p1: {
        to: {
          d: 'path("M20.001 18 A2 2 0 0 0 22 16 V4 a2 2 0 0 0 -1.999 -2 L16 2.4 A5 5 0 0 0 12 5 a5 5 0 0 0 -4 -2.6 H4 a2 2 0 0 0 -2 2 v12 a2 2 0 0 0 1.999 2 H8 a5 5 0 0 1 4 3 a5 5 0 0 1 4 -3 z")',
          transform: "scaleX(1.04)",
        },
      },
      p0: { origin: "50% 100%", to: { transform: "scaleY(1.04)" }, delay: 40 },
    },
  },

  bot: {
    note: "It blinks, its antenna wobbles and its ears perk out.",
    motion: {
      p0: { origin: "100% 100%", animation: `ki-bot-antenna .7s ${SMOOTH}` },
      p2: { to: { transform: "translateX(-.8px)" }, delay: 60 },
      p3: { to: { transform: "translateX(.8px)" }, delay: 60 },
      p4: { animation: `ki-bot-blink .45s ${SMOOTH} 120ms` },
      p5: { animation: `ki-bot-blink .45s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-bot-antenna{25%{transform:rotate(-14deg)}50%{transform:rotate(9deg)}75%{transform:rotate(-4deg)}100%{transform:none}}" +
      "@keyframes ki-bot-blink{35%{transform:scaleY(.1)}70%{transform:scaleY(1.15)}100%{transform:none}}",
  },

  briefcase: {
    note: "It is picked up: the case swings from its handle.",
    motion: {
      p0: { box: "view-box", origin: "12px 2px", animation: `ki-briefcase-lift .75s ${SMOOTH}` },
      p1: { box: "view-box", origin: "12px 2px", animation: `ki-briefcase-swing .8s ${SMOOTH} 50ms` },
    },
    keyframes:
      "@keyframes ki-briefcase-lift{20%{transform:translateY(-1.2px) rotate(2deg)}45%{transform:translateY(-1px) rotate(-1.5deg)}70%{transform:translateY(-.4px) rotate(.6deg)}100%{transform:none}}" +
      "@keyframes ki-briefcase-swing{20%{transform:translateY(-1.2px) rotate(5deg)}45%{transform:translateY(-1px) rotate(-4deg)}70%{transform:translateY(-.4px) rotate(2deg)}100%{transform:none}}",
  },

  bug: {
    note: "Its legs scuttle in alternating threes and the feelers twitch.",
    motion: {
      // legs pivot where they meet the body; one tripod, then the other
      p7: { origin: "100% 100%", animation: `ki-bug-leg .55s ${SMOOTH}` },
      p6: { origin: "100% 0%", animation: `ki-bug-leg .55s ${SMOOTH}` },
      p5: { origin: "0% 50%", animation: `ki-bug-leg .55s ${SMOOTH}` },
      p4: { origin: "0% 100%", animation: `ki-bug-leg .55s ${SMOOTH} 110ms` },
      p3: { origin: "0% 0%", animation: `ki-bug-leg .55s ${SMOOTH} 110ms` },
      p8: { origin: "100% 50%", animation: `ki-bug-leg .55s ${SMOOTH} 110ms` },
      p9: { origin: "100% 100%", animation: `ki-bug-feel .6s ${SMOOTH} 40ms` },
      p2: { origin: "0% 100%", animation: `ki-bug-feel .6s ${SMOOTH} 90ms reverse` },
      p1: { animation: `ki-bug-bob .55s ${SMOOTH}` },
      p10: { animation: `ki-bug-bob .55s ${SMOOTH} 30ms` },
    },
    keyframes:
      "@keyframes ki-bug-leg{25%{transform:rotate(16deg)}50%{transform:rotate(-12deg)}75%{transform:rotate(7deg)}100%{transform:none}}" +
      "@keyframes ki-bug-feel{30%{transform:rotate(-18deg)}60%{transform:rotate(10deg)}100%{transform:none}}" +
      "@keyframes ki-bug-bob{30%{transform:translateY(-.6px)}65%{transform:translateY(.2px)}100%{transform:none}}",
  },

  building: {
    note: "The windows switch on floor by floor and the door opens up.",
    motion: {
      p0: { animation: `ki-building-light .45s ${SMOOTH} backwards` },
      p1: { animation: `ki-building-light .45s ${SMOOTH} 140ms backwards` },
      p2: { origin: "50% 100%", to: { transform: "scaleY(1.25)" }, delay: 260 },
    },
    keyframes: "@keyframes ki-building-light{0%{opacity:.1;transform:scaleX(.3)}60%{opacity:1;transform:scaleX(1.12)}100%{opacity:1;transform:none}}",
  },

  calendar: {
    note: "The rings hop in turn and the days fill in one by one.",
    motion: {
      p0: { animation: `ki-calendar-pin .45s ${SMOOTH}` },
      p1: { animation: `ki-calendar-pin .45s ${SMOOTH} 70ms` },
      p4: { animation: `ki-calendar-day .35s ${SPRING} 100ms backwards` },
      p5: { animation: `ki-calendar-day .35s ${SPRING} 150ms backwards` },
      p6: { animation: `ki-calendar-day .35s ${SPRING} 200ms backwards` },
      p7: { animation: `ki-calendar-day .35s ${SPRING} 250ms backwards` },
      p8: { animation: `ki-calendar-day .35s ${SPRING} 300ms backwards` },
      p9: { animation: `ki-calendar-day .35s ${SPRING} 350ms backwards` },
    },
    keyframes:
      "@keyframes ki-calendar-pin{40%{transform:translateY(-1.6px)}70%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-calendar-day{0%{transform:scale(0)}100%{transform:none}}",
  },

  captions: {
    note: "The caption lines type themselves in from the left.",
    motion: {
      p1: { origin: "0% 50%", animation: `ki-captions-type .55s ${SMOOTH} 40ms backwards` },
      p0: { animation: `ki-captions-blink .5s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-captions-type{0%{transform:scaleX(0);opacity:.2}100%{transform:none;opacity:1}}" +
      "@keyframes ki-captions-blink{30%{transform:scale(.95)}100%{transform:none}}",
  },

  chart: {
    note: "The bars grow from the baseline one after another.",
    motion: {
      p3: { origin: "50% 100%", animation: `ki-chart-grow .5s ${SPRING} backwards` },
      p2: { origin: "50% 100%", animation: `ki-chart-grow .5s ${SPRING} 80ms backwards` },
      p1: { origin: "50% 100%", animation: `ki-chart-grow .5s ${SPRING} 160ms backwards` },
    },
    keyframes: "@keyframes ki-chart-grow{0%{transform:scaleY(0)}100%{transform:none}}",
  },

  check: {
    note: "The tick draws itself from its short stroke and settles a touch larger.",
    draw: ["p0"],
    motion: {
      // the path begins at the long stroke's tip, so draw from its end
      p0: { from: dash, to: { transform: "scale(1.06)" }, animation: `ki-check-draw .45s ${SMOOTH} backwards` },
    },
    keyframes: fromEnd("ki-check-draw"),
  },

  "check-square": {
    note: "The box presses in and the tick draws inside it.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-check-square-press .45s ${SMOOTH}` },
      p1: { from: dash, animation: `ki-check-square-draw .4s ${SMOOTH} 90ms backwards` },
    },
    keyframes:
      "@keyframes ki-check-square-press{30%{transform:scale(.9)}65%{transform:scale(1.03)}100%{transform:none}}" + fromEnd("ki-check-square-draw"),
  },

  "chevron-down": {
    note: "The chevron folds flat and snaps back to a point as it dips.",
    motion: {
      p0: { to: { transform: "translateY(1.5px)" }, animation: `ki-chevron-down-fold .5s ${SMOOTH}` },
    },
    keyframes: '@keyframes ki-chevron-down-fold{35%{d:path("m6 12 6 0 6 0")}70%{d:path("m6 8.5 6 7 6-7")}100%{d:path("m6 9 6 6 6-6")}}',
  },

  "chevron-right": {
    note: "The chevron folds flat and snaps back to a point as it steps right.",
    motion: {
      p0: { to: { transform: "translateX(1.5px)" }, animation: `ki-chevron-right-fold .5s ${SMOOTH}` },
    },
    keyframes: '@keyframes ki-chevron-right-fold{35%{d:path("m12 18 0-6 0-6")}70%{d:path("m8.5 18 7-6-7-6")}100%{d:path("m9 18 6-6-6-6")}}',
  },

  "chevron-up": {
    note: "The chevron folds flat and snaps back to a point as it rises.",
    motion: {
      p0: { to: { transform: "translateY(-1.5px)" }, animation: `ki-chevron-up-fold .5s ${SMOOTH}` },
    },
    keyframes: '@keyframes ki-chevron-up-fold{35%{d:path("m18 12-6 0-6 0")}70%{d:path("m18 15.5-6-7-6 7")}100%{d:path("m18 15-6-6-6 6")}}',
  },

  "circle-slash": {
    note: "The slash swings into place across the ring, which tightens.",
    motion: {
      p0: { animation: `ki-circle-slash-ring .5s ${SMOOTH}` },
      p1: { animation: `ki-circle-slash-swing .55s ${SPRING}` },
    },
    keyframes:
      "@keyframes ki-circle-slash-ring{35%{transform:scale(.92)}100%{transform:none}}" +
      "@keyframes ki-circle-slash-swing{0%{transform:rotate(-90deg) scale(.5)}100%{transform:none}}",
  },

  "circle-user": {
    note: "The head lifts and the shoulders square up.",
    motion: {
      p1: { to: { transform: "translateY(-1.2px)" } },
      p0: { origin: "50% 100%", to: { transform: "scale(1.08)" }, delay: 60 },
    },
  },

  clapperboard: {
    note: "The clapper arm opens and snaps shut on its hinge, jolting the board.",
    motion: {
      // the arm and its stripes turn together around the hinge at its left end
      p1: { box: "view-box", origin: "3px 11px", animation: `ki-clapperboard-clap .6s ${SMOOTH}` },
      p0: { box: "view-box", origin: "3px 11px", animation: `ki-clapperboard-clap .6s ${SMOOTH}` },
      p3: { box: "view-box", origin: "3px 11px", animation: `ki-clapperboard-clap .6s ${SMOOTH}` },
      p2: { animation: `ki-clapperboard-jolt .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-clapperboard-clap{30%{transform:rotate(-12deg)}55%{transform:rotate(15deg)}70%{transform:rotate(12deg)}100%{transform:none}}" +
      "@keyframes ki-clapperboard-jolt{50%{transform:none}60%{transform:translateY(.7px)}80%{transform:translateY(-.2px)}100%{transform:none}}",
  },

  click: {
    note: "The cursor taps in and the rays burst out around it.",
    draw: ["p0", "p1", "p2", "p3"],
    motion: {
      p4: { origin: "0% 0%", animation: `ki-click-tap .45s ${SMOOTH}` },
      // each ray draws outward from the cursor's tip
      p0: { from: dash, animation: `ki-click-in .35s ${SMOOTH} 140ms backwards` },
      p3: { from: dash, animation: `ki-click-in .35s ${SMOOTH} 180ms backwards` },
      p1: { from: dash, animation: `ki-click-out .35s ${SMOOTH} 220ms backwards` },
      p2: { from: dash, animation: `ki-click-out .35s ${SMOOTH} 260ms backwards` },
    },
    keyframes:
      "@keyframes ki-click-tap{35%{transform:translate(-1px,-1px) scale(.86)}100%{transform:none}}" +
      fromStart("ki-click-out") +
      fromEnd("ki-click-in"),
  },

  "clipboard-check": {
    note: "The clip lifts and clamps down, and the tick draws in.",
    draw: ["p2"],
    motion: {
      p0: { animation: `ki-clipboard-check-clip .5s ${SMOOTH}` },
      p2: { from: dash, animation: `ki-clipboard-check-draw .4s ${SMOOTH} 160ms backwards` },
    },
    keyframes:
      "@keyframes ki-clipboard-check-clip{30%{transform:translateY(-1.5px)}60%{transform:translateY(.4px)}100%{transform:none}}" +
      fromStart("ki-clipboard-check-draw"),
  },

  "clipboard-paste": {
    note: "The arrow slides out of the board as its shaft draws, and the clip presses down.",
    draw: ["p0"],
    motion: {
      p0: { from: dash, animation: `ki-clipboard-paste-shaft .4s ${SMOOTH} backwards` },
      p2: { animation: `ki-clipboard-paste-head .45s ${SPRING} backwards` },
      p4: { animation: `ki-clipboard-paste-clip .45s ${SMOOTH} 120ms` },
    },
    keyframes:
      fromStart("ki-clipboard-paste-shaft") +
      "@keyframes ki-clipboard-paste-head{0%{transform:translateX(-6px);opacity:0}40%{opacity:1}100%{transform:none}}" +
      "@keyframes ki-clipboard-paste-clip{40%{transform:translateY(.7px)}100%{transform:none}}",
  },

  clock: {
    note: "The hands sweep a full turn around the dial, which ticks as they stop.",
    motion: {
      p1: { box: "view-box", origin: "12px 12px", to: { transform: "rotate(360deg)" }, duration: 800, ease: "smooth" },
      p0: { animation: `ki-clock-tick .35s ${SMOOTH} 620ms` },
    },
    keyframes: "@keyframes ki-clock-tick{40%{transform:scale(1.05)}100%{transform:none}}",
  },

  cloud: {
    note: "The cloud billows: both puffs swell as it drifts up.",
    motion: {
      p0: {
        to: { d: 'path("M17.5 19H9a7.4 7.4 0 1 1 6.9-9.6h1.6a4.8 4.8 0 1 1 0 9.6Z")', transform: "translateY(-1px)" },
      },
    },
  },

  "cloud-off": {
    note: "The cloud breaks apart along the slash.",
    motion: {
      // the slash also names the cloud's fill, so it stays put; the two halves of the outline split away from it
      p0: { to: { transform: "translate(.9px,-.9px) rotate(3deg)" } },
      p1: { to: { transform: "translate(-.9px,.9px) rotate(-3deg)" }, delay: 40 },
    },
  },

  "cloud-upload": {
    note: "The arrow rises out of the cloud, its shaft drawing up behind it.",
    draw: ["p0"],
    motion: {
      // the shaft runs top to bottom, so draw from its end to grow upward
      p0: { from: dash, to: { transform: "translateY(-2px)" }, animation: `ki-cloud-upload-shaft .45s ${SMOOTH} backwards` },
      p2: { to: { transform: "translateY(-2.5px)" } },
      p1: { to: { transform: "translateY(.5px)" }, delay: 60 },
    },
    keyframes: fromEnd("ki-cloud-upload-shaft"),
  },

  code: {
    note: "The brackets push apart and sharpen.",
    motion: {
      p0: { to: { transform: "translateX(1.5px)", d: 'path("m16.5 19 5.5-7-5.5-7")' } },
      p1: { to: { transform: "translateX(-1.5px)", d: 'path("m7.5 5-5.5 7 5.5 7")' } },
    },
  },

  coffee: {
    note: "Steam rises from the cup, each wisp drawing up in turn.",
    draw: ["p0", "p1", "p3"],
    motion: {
      p3: { from: dash, animation: `ki-coffee-steam .55s ${SMOOTH} backwards` },
      p0: { from: dash, animation: `ki-coffee-steam .55s ${SMOOTH} 100ms backwards` },
      p1: { from: dash, animation: `ki-coffee-steam .55s ${SMOOTH} 200ms backwards` },
      p2: { animation: `ki-coffee-cup .5s ${SMOOTH}` },
    },
    keyframes:
      // the wisps run top to bottom, so a negative offset draws them from below as they rise
      "@keyframes ki-coffee-steam{0%{opacity:0;transform:translateY(2px);stroke-dashoffset:-1}50%{opacity:1}100%{opacity:1;transform:none;stroke-dashoffset:0}}" +
      "@keyframes ki-coffee-cup{30%{transform:translateY(.4px)}100%{transform:none}}",
  },

  command: {
    note: "The four loops swell as the centre tightens, turning a quarter.",
    motion: {
      p0: {
        to: {
          d: 'path("M14 6.4v11.2a3.6 3.6 0 1 0 3.6-3.6H6.4a3.6 3.6 0 1 0 3.6 3.6V6.4a3.6 3.6 0 1 0-3.6 3.6h11.2a3.6 3.6 0 1 0-3.6-3.6")',
          transform: "rotate(90deg)",
        },
        duration: 600,
        ease: "smooth",
      },
    },
  },

  compass: {
    note: "The needle spins, overshoots and settles back on its heading.",
    motion: {
      p1: { box: "view-box", origin: "12px 12px", animation: `ki-compass-spin 1s ${SMOOTH}` },
      p0: { animation: `ki-compass-rim 1s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-compass-spin{0%{transform:rotate(0)}50%{transform:rotate(390deg)}72%{transform:rotate(345deg)}88%{transform:rotate(366deg)}100%{transform:rotate(360deg)}}" +
      "@keyframes ki-compass-rim{20%{transform:scale(.96)}100%{transform:none}}",
  },

  cpu: {
    note: "The pins pulse outward one after another around the chip, and the core flickers.",
    motion: {
      p11: { animation: `ki-cpu-up .4s ${SMOOTH}` },
      p1: { animation: `ki-cpu-up .4s ${SMOOTH} 40ms` },
      p3: { animation: `ki-cpu-up .4s ${SMOOTH} 80ms` },
      p9: { animation: `ki-cpu-right .4s ${SMOOTH} 120ms` },
      p7: { animation: `ki-cpu-right .4s ${SMOOTH} 160ms` },
      p8: { animation: `ki-cpu-right .4s ${SMOOTH} 200ms` },
      p2: { animation: `ki-cpu-down .4s ${SMOOTH} 240ms` },
      p0: { animation: `ki-cpu-down .4s ${SMOOTH} 280ms` },
      p10: { animation: `ki-cpu-down .4s ${SMOOTH} 320ms` },
      p5: { animation: `ki-cpu-left .4s ${SMOOTH} 360ms` },
      p4: { animation: `ki-cpu-left .4s ${SMOOTH} 400ms` },
      p6: { animation: `ki-cpu-left .4s ${SMOOTH} 440ms` },
      p13: { animation: `ki-cpu-core .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-cpu-up{45%{transform:translateY(-1.2px)}100%{transform:none}}" +
      "@keyframes ki-cpu-down{45%{transform:translateY(1.2px)}100%{transform:none}}" +
      "@keyframes ki-cpu-left{45%{transform:translateX(-1.2px)}100%{transform:none}}" +
      "@keyframes ki-cpu-right{45%{transform:translateX(1.2px)}100%{transform:none}}" +
      "@keyframes ki-cpu-core{30%{transform:scale(.8)}60%{transform:scale(1.06)}100%{transform:none}}",
  },

  dice: {
    note: "The front die rolls a quarter turn so its pips swap corners, and the back die jostles.",
    motion: {
      // the front die and its pips turn together around the die's centre
      p0: { box: "view-box", origin: "8px 16px", to: { transform: "rotate(90deg)" } },
      p2: { box: "view-box", origin: "8px 16px", to: { transform: "rotate(90deg)" } },
      p3: { box: "view-box", origin: "8px 16px", to: { transform: "rotate(90deg)" } },
      p1: { box: "view-box", origin: "16px 9px", animation: `ki-dice-jostle .6s ${SMOOTH} 60ms` },
      p4: { box: "view-box", origin: "16px 9px", animation: `ki-dice-jostle .6s ${SMOOTH} 60ms` },
      p5: { box: "view-box", origin: "16px 9px", animation: `ki-dice-jostle .6s ${SMOOTH} 60ms` },
    },
    keyframes: "@keyframes ki-dice-jostle{30%{transform:rotate(-9deg) translateY(-.6px)}60%{transform:rotate(5deg)}100%{transform:none}}",
  },
};
