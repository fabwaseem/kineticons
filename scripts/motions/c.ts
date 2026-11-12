import type { Override } from "./types";

/** no overshoot: turns, sweeps, draws and every keyframe that carries its own bounce */
const SMOOTH = "cubic-bezier(.22,1,.36,1)";
/** with a little overshoot */
const SPRING = "cubic-bezier(.34,1.56,.64,1)";
/** a stroke drawing itself in from its start (the part must be listed in `draw`) */
const drawKf = (icon: string) => `@keyframes ki-${icon}-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`;
const draw = (icon: string, ms: number, delay = 0) => ({
  from: { strokeDasharray: 1 },
  animation: `ki-${icon}-draw ${ms}ms ${SMOOTH} ${delay}ms backwards`,
});

/** a speech bubble that squashes and springs back from the corner its tail is in */
const bubbleKf = (icon: string) =>
  `@keyframes ki-${icon}-pop{0%{transform:none}30%{transform:scale(1.07,.92) rotate(-3deg)}60%{transform:scale(.97,1.04) rotate(1.5deg)}100%{transform:none}}`;
const bubble = (icon: string, delay = 0) => ({ origin: "0% 100%", animation: `ki-${icon}-pop .6s ${SMOOTH} ${delay}ms` });

export const batchC: Record<string, Override> = {
  "lock-open": {
    note: "The shackle drops shut on its hinge leg, then swings open again a little wider.",
    motion: {
      p1: { origin: "0% 100%", to: { transform: "rotate(-8deg)" }, animation: `ki-lock-open-shackle .7s ${SMOOTH}` },
      p0: { animation: `ki-lock-open-body .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-lock-open-shackle{0%{transform:none}30%{transform:translateY(1.2px) rotate(14deg)}45%{transform:translateY(1.2px) rotate(14deg)}78%{transform:translateY(-.5px) rotate(-12deg)}100%{transform:rotate(-8deg)}}" +
      "@keyframes ki-lock-open-body{0%,22%{transform:none}32%{transform:translateY(.5px)}50%{transform:none}}",
  },

  "log-in": {
    note: "The arrow slides on through the door and comes back in from the left; the door takes the knock.",
    motion: {
      p0: { animation: `ki-log-in-arrow .65s ${SMOOTH}` },
      p1: { animation: `ki-log-in-arrow .65s ${SMOOTH}` },
      p2: { animation: `ki-log-in-door .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-log-in-arrow{0%{transform:none;opacity:1}32%{transform:translateX(3.5px);opacity:0}33%{transform:translateX(-4px);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-log-in-door{0%,18%{transform:none}30%{transform:translateX(.7px)}55%{transform:none}}",
  },

  "log-out": {
    note: "The arrow leaves through the doorway and slides back in, while the door frame stays put.",
    motion: {
      p0: { animation: `ki-log-out-arrow .65s ${SMOOTH}` },
      p1: { animation: `ki-log-out-arrow .65s ${SMOOTH}` },
      p2: { animation: `ki-log-out-door .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-log-out-arrow{0%{transform:none;opacity:1}32%{transform:translateX(3.5px);opacity:0}33%{transform:translateX(-3px);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-log-out-door{0%{transform:none}20%{transform:translateX(-.6px)}45%{transform:none}}",
  },

  mail: {
    note: "The flap folds open over the top edge, then closes again.",
    motion: {
      p0: { origin: "50% 0%", animation: `ki-mail-flap .85s ${SMOOTH}` },
      p1: { animation: `ki-mail-body .85s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-mail-flap{0%{transform:none}35%,65%{transform:scaleY(-.5)}100%{transform:none}}" +
      "@keyframes ki-mail-body{0%{transform:none}35%,65%{transform:translateY(.4px)}100%{transform:none}}",
  },

  "mail-check": {
    note: "The flap presses shut and the tick draws itself in.",
    draw: ["p2"],
    motion: {
      p1: { origin: "50% 0%", animation: `ki-mail-check-flap .5s ${SMOOTH}` },
      p2: draw("mail-check", 450, 140),
    },
    keyframes:
      "@keyframes ki-mail-check-flap{0%{transform:none}40%{transform:scaleY(.55)}100%{transform:none}}" + drawKf("mail-check"),
  },

  meh: {
    note: "The flat mouth wobbles side to side and the eyes blink.",
    motion: {
      p1: { animation: `ki-meh-mouth .7s ${SMOOTH}` },
      p2: { animation: `ki-meh-blink .5s ${SMOOTH} 120ms` },
      p0: { animation: `ki-meh-blink .5s ${SMOOTH} 120ms` },
    },
    keyframes:
      "@keyframes ki-meh-mouth{0%{transform:none}25%{transform:translateX(-.6px) rotate(-7deg)}55%{transform:translateX(.5px) rotate(6deg)}80%{transform:rotate(-2deg)}100%{transform:none}}" +
      "@keyframes ki-meh-blink{0%{transform:none}30%{transform:scaleY(.15)}55%{transform:none}}",
  },

  menu: {
    note: "The three lines tuck in and spring back out, one after another.",
    motion: {
      p0: { origin: "0% 50%", animation: `ki-menu-line .55s ${SMOOTH}` },
      p1: { origin: "0% 50%", animation: `ki-menu-line .55s ${SMOOTH} 70ms` },
      p2: { origin: "0% 50%", animation: `ki-menu-line .55s ${SMOOTH} 140ms` },
    },
    keyframes: "@keyframes ki-menu-line{0%{transform:none}35%{transform:scaleX(.6)}70%{transform:translateX(.6px) scaleX(1.04)}100%{transform:none}}",
  },

  "message-circle": {
    note: "The bubble squashes and springs back from its tail, as if speaking.",
    motion: { p0: bubble("message-circle") },
    keyframes: bubbleKf("message-circle"),
  },

  "message-heart": {
    note: "The heart beats twice inside the bubble, which gives a small bounce from its tail.",
    motion: {
      p0: bubble("message-heart"),
      p1: { animation: `ki-message-heart-beat .8s ${SMOOTH} 60ms` },
    },
    keyframes:
      bubbleKf("message-heart") +
      "@keyframes ki-message-heart-beat{0%{transform:none}20%{transform:scale(1.25)}40%{transform:scale(.95)}60%{transform:scale(1.18)}100%{transform:none}}",
  },

  "message-quote": {
    note: "The bubble bounces from its tail and the two quote marks drop in, one after the other.",
    motion: {
      p1: bubble("message-quote"),
      p2: { animation: `ki-message-quote-mark .5s ${SMOOTH} 60ms backwards` },
      p0: { animation: `ki-message-quote-mark .5s ${SMOOTH} 150ms backwards` },
    },
    keyframes:
      bubbleKf("message-quote") +
      "@keyframes ki-message-quote-mark{0%{transform:translateY(-2.5px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "message-square": {
    note: "The bubble squashes and springs back from its tail corner, as if speaking.",
    motion: { p0: bubble("message-square") },
    keyframes: bubbleKf("message-square"),
  },

  "message-text": {
    note: "The bubble bounces from its tail while the three lines inside write themselves, top to bottom.",
    draw: ["p3", "p1", "p2"],
    motion: {
      p0: bubble("message-text"),
      p3: draw("message-text", 380, 60),
      p1: draw("message-text", 380, 140),
      p2: draw("message-text", 380, 220),
    },
    keyframes: bubbleKf("message-text") + drawKf("message-text"),
  },

  messages: {
    note: "The back bubble slides out from behind the front one, which bounces from its tail.",
    motion: {
      p0: bubble("messages"),
      p1: { animation: `ki-messages-back .6s ${SMOOTH} 60ms backwards` },
    },
    keyframes:
      bubbleKf("messages") +
      "@keyframes ki-messages-back{0%{transform:translate(-3px,-3px);opacity:0}60%{transform:translate(.4px,.4px);opacity:1}100%{transform:none;opacity:1}}",
  },

  "mic-vocal": {
    note: "The mic tips back on its grip as if sung into, and the cable swings below it.",
    motion: {
      p2: { box: "view-box", origin: "7px 17px", to: { transform: "rotate(-10deg)" } },
      p0: { box: "view-box", origin: "7px 17px", to: { transform: "rotate(-10deg)" } },
      p1: { box: "view-box", origin: "5.5px 17.5px", animation: `ki-mic-vocal-cable .8s ${SMOOTH} 60ms` },
    },
    keyframes: "@keyframes ki-mic-vocal-cable{0%{transform:none}30%{transform:rotate(9deg)}60%{transform:rotate(-5deg)}82%{transform:rotate(2deg)}100%{transform:none}}",
  },

  monitor: {
    note: "The screen flickers on and rises on its stand; the neck stretches and the foot widens.",
    motion: {
      p0: { to: { transform: "translateY(-1px)" }, animation: `ki-monitor-on .5s linear` },
      p2: { origin: "50% 100%", to: { transform: "scaleY(1.25)" } },
      p1: { to: { transform: "scaleX(1.18)" }, delay: 50 },
    },
    keyframes: "@keyframes ki-monitor-on{0%{opacity:1}12%{opacity:.35}26%{opacity:1}40%{opacity:.6}55%,100%{opacity:1}}",
  },

  moon: {
    note: "The moon rocks on its centre and waxes a little fuller.",
    motion: {
      p0: {
        box: "view-box",
        origin: "12px 12px",
        to: { d: 'path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a8.5 8.5 0 0 0 8.268 8.268c.344-.215.825-.004.803.401")' },
        animation: `ki-moon-rock .8s ${SMOOTH}`,
      },
    },
    keyframes: "@keyframes ki-moon-rock{0%{transform:none}25%{transform:rotate(-14deg)}55%{transform:rotate(8deg)}80%{transform:rotate(-3deg)}100%{transform:none}}",
  },

  music: {
    note: "The two note heads bob on their stems in turn, like a beat.",
    motion: {
      p2: { box: "view-box", origin: "9px 19px", animation: `ki-music-bob .6s ${SMOOTH}` },
      p1: { box: "view-box", origin: "21px 16px", animation: `ki-music-bob .6s ${SMOOTH} 120ms` },
      p0: { animation: `ki-music-beam .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-music-bob{0%{transform:none}30%{transform:rotate(16deg)}60%{transform:rotate(-6deg)}100%{transform:none}}" +
      "@keyframes ki-music-beam{0%{opacity:1}30%{opacity:.75}60%,100%{opacity:1}}",
  },

  newspaper: {
    note: "The picture pops in and the text lines write themselves across the page, one after another.",
    motion: {
      p3: { animation: `ki-newspaper-pic .5s ${SPRING} backwards` },
      p1: { origin: "0% 50%", animation: `ki-newspaper-line .4s ${SMOOTH} 120ms backwards` },
      p0: { origin: "0% 50%", animation: `ki-newspaper-line .4s ${SMOOTH} 220ms backwards` },
      p2: { origin: "100% 100%", animation: `ki-newspaper-page .6s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-newspaper-pic{0%{transform:scale(.4);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-newspaper-line{0%{transform:scaleX(0)}100%{transform:none}}" +
      "@keyframes ki-newspaper-page{0%{transform:none}35%{transform:scale(1.02,.98)}100%{transform:none}}",
  },

  package: {
    note: "The lid pops up: its ridge and strap lift while the front seam stretches to follow.",
    motion: {
      p2: { animation: `ki-package-lid .65s ${SMOOTH}` },
      p3: { animation: `ki-package-lid .65s ${SMOOTH} 40ms` },
      p1: { origin: "50% 100%", animation: `ki-package-seam .65s ${SMOOTH}` },
      p0: { animation: `ki-package-box .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-package-lid{0%{transform:none}35%{transform:translateY(-1.8px)}65%{transform:translateY(.3px)}100%{transform:none}}" +
      "@keyframes ki-package-seam{0%{transform:none}35%{transform:scaleY(1.18)}65%{transform:scaleY(.97)}100%{transform:none}}" +
      "@keyframes ki-package-box{0%{transform:none}35%{transform:scale(1.02,.98)}65%{transform:none}}",
  },

  "package-open": {
    note: "The two open flaps flap up and out in turn above the box.",
    motion: {
      p1: { origin: "0% 100%", animation: `ki-package-open-left .7s ${SMOOTH}` },
      p3: { origin: "100% 100%", animation: `ki-package-open-right .7s ${SMOOTH} 70ms` },
      p2: { origin: "50% 100%", animation: `ki-package-open-box .7s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-package-open-left{0%{transform:none}30%{transform:translateY(-1px) rotate(-8deg)}60%{transform:rotate(3deg)}100%{transform:none}}" +
      "@keyframes ki-package-open-right{0%{transform:none}30%{transform:translateY(-1px) rotate(8deg)}60%{transform:rotate(-3deg)}100%{transform:none}}" +
      "@keyframes ki-package-open-box{0%{transform:none}30%{transform:scaleY(.95)}60%{transform:none}}",
  },

  palette: {
    note: "The paint dots pop one after another around the palette.",
    motion: {
      p3: { animation: `ki-palette-dot .45s ${SMOOTH}` },
      p4: { animation: `ki-palette-dot .45s ${SMOOTH} 70ms` },
      p1: { animation: `ki-palette-dot .45s ${SMOOTH} 140ms` },
      p2: { animation: `ki-palette-dot .45s ${SMOOTH} 210ms` },
    },
    keyframes: "@keyframes ki-palette-dot{0%{transform:none}40%{transform:scale(2)}100%{transform:none}}",
  },

  "panel-close": {
    note: "The divider slides left as the sidebar folds away, and the chevron pushes it along.",
    motion: {
      p1: { to: { transform: "translateX(-2.5px)" } },
      p2: { to: { transform: "translateX(-1.5px)" }, delay: 60 },
    },
  },

  "panel-open": {
    note: "The divider slides right as the sidebar opens out, and the chevron leads the way.",
    motion: {
      p1: { to: { transform: "translateX(2.5px)" } },
      p2: { to: { transform: "translateX(1.5px)" }, delay: 60 },
    },
  },

  pause: {
    note: "The two bars squeeze down and spring back, one after the other.",
    motion: {
      p1: { animation: `ki-pause-bar .55s ${SMOOTH}` },
      p0: { animation: `ki-pause-bar .55s ${SMOOTH} 80ms` },
    },
    keyframes: "@keyframes ki-pause-bar{0%{transform:none}35%{transform:scale(1.12,.72)}70%{transform:scale(.97,1.04)}100%{transform:none}}",
  },

  "pen-line": {
    note: "The pen scribbles to the right while the line under it draws itself.",
    draw: ["p0"],
    motion: {
      p1: { animation: `ki-pen-line-write .6s ${SMOOTH}` },
      p0: draw("pen-line", 550, 60),
    },
    keyframes:
      "@keyframes ki-pen-line-write{0%{transform:none}25%{transform:translate(.5px,-.6px) rotate(-3deg)}50%{transform:translate(1px,.2px)}75%{transform:translate(1.6px,-.4px) rotate(-2deg)}100%{transform:none}}" +
      drawKf("pen-line"),
  },

  pencil: {
    note: "The pencil rocks on its tip as if writing a quick stroke.",
    motion: {
      p0: { box: "view-box", origin: "2.5px 21.5px", animation: `ki-pencil-write .65s ${SMOOTH}` },
      p1: { box: "view-box", origin: "2.5px 21.5px", animation: `ki-pencil-write .65s ${SMOOTH}` },
    },
    keyframes:
      "@keyframes ki-pencil-write{0%{transform:none}25%{transform:rotate(-7deg)}50%{transform:translateX(.6px) rotate(4deg)}75%{transform:translateX(1px) rotate(-3deg)}100%{transform:none}}",
  },

  "pencil-line": {
    note: "The pencil scribbles to the right while the line under it draws itself.",
    draw: ["p0"],
    motion: {
      p2: { animation: `ki-pencil-line-write .6s ${SMOOTH}` },
      p1: { animation: `ki-pencil-line-write .6s ${SMOOTH}` },
      p0: draw("pencil-line", 550, 60),
    },
    keyframes:
      "@keyframes ki-pencil-line-write{0%{transform:none}25%{transform:translate(.5px,-.6px) rotate(-3deg)}50%{transform:translate(1px,.2px)}75%{transform:translate(1.6px,-.4px) rotate(-2deg)}100%{transform:none}}" +
      drawKf("pencil-line"),
  },

  "play-outline": {
    note: "The triangle redraws its outline and gives a forward beat.",
    draw: ["p0"],
    motion: {
      p0: {
        from: { strokeDasharray: 1 },
        animation: `ki-play-outline-draw .6s ${SMOOTH} backwards, ki-play-outline-beat .55s ${SMOOTH} 120ms`,
      },
    },
    keyframes:
      drawKf("play-outline") +
      "@keyframes ki-play-outline-beat{0%{transform:none}35%{transform:translateX(1.6px) scale(1.06)}70%{transform:translateX(-.3px)}100%{transform:none}}",
  },

  plug: {
    note: "The plug pushes up into the socket, its cord stretching behind, and the bolt flashes.",
    motion: {
      p0: { to: { transform: "translate(1.2px,-1.2px)" } },
      p2: { to: { transform: "translate(1.2px,-1.2px)" } },
      p3: { to: { transform: "translate(1.2px,-1.2px)" } },
      p1: { origin: "0% 100%", to: { transform: "scale(1.4)" } },
      p4: { animation: `ki-plug-spark .5s ${SMOOTH} 160ms` },
    },
    keyframes: "@keyframes ki-plug-spark{0%{transform:none;opacity:1}25%{transform:scale(.6);opacity:.2}55%{transform:scale(1.25);opacity:1}100%{transform:none;opacity:1}}",
  },

  power: {
    note: "The power line drops in and the ring draws itself around it.",
    draw: ["p1"],
    motion: {
      p0: { animation: `ki-power-line .5s ${SMOOTH} backwards` },
      p1: draw("power", 600, 80),
    },
    keyframes: "@keyframes ki-power-line{0%{transform:translateY(-3px);opacity:0}60%{transform:translateY(.4px);opacity:1}100%{transform:none;opacity:1}}" + drawKf("power"),
  },

  "power-off": {
    note: "The ring winds down, the power line dims, and the slash draws across.",
    draw: ["p3"],
    motion: {
      p0: { box: "view-box", origin: "12px 12px", to: { transform: "scale(.94)" } },
      p1: { box: "view-box", origin: "12px 12px", to: { transform: "scale(.94)" } },
      p2: { to: { transform: "translateY(.8px)", opacity: 0.45 } },
      p3: draw("power-off", 450, 120),
    },
    keyframes: drawKf("power-off"),
  },

  quote: {
    note: "The two quote marks drop in, one after the other.",
    motion: {
      p1: { animation: `ki-quote-drop .55s ${SMOOTH} backwards` },
      p0: { animation: `ki-quote-drop .55s ${SMOOTH} 90ms backwards` },
    },
    keyframes:
      "@keyframes ki-quote-drop{0%{transform:translateY(-3px) rotate(-8deg);opacity:0}60%{transform:translateY(.5px);opacity:1}100%{transform:none;opacity:1}}",
  },

  radio: {
    note: "The centre pulses and the waves ripple out on both sides, inner then outer.",
    motion: {
      p4: { animation: `ki-radio-dot .5s ${SMOOTH}` },
      p0: { origin: "0% 50%", animation: `ki-radio-wave .55s ${SMOOTH} 60ms backwards` },
      p3: { origin: "100% 50%", animation: `ki-radio-wave .55s ${SMOOTH} 60ms backwards` },
      p1: { origin: "0% 50%", animation: `ki-radio-wave .55s ${SMOOTH} 150ms backwards` },
      p2: { origin: "100% 50%", animation: `ki-radio-wave .55s ${SMOOTH} 150ms backwards` },
    },
    keyframes:
      "@keyframes ki-radio-dot{0%{transform:none}30%{transform:scale(1.3)}100%{transform:none}}" +
      "@keyframes ki-radio-wave{0%{transform:scale(.55);opacity:0}60%{transform:scale(1.08);opacity:1}100%{transform:none;opacity:1}}",
  },

  repeat: {
    note: "Both arrows redraw around the loop together and their heads snap on at the ends.",
    draw: ["p1", "p3"],
    motion: {
      p1: draw("repeat", 500),
      p3: draw("repeat", 500),
      p0: { animation: `ki-repeat-up .4s ${SMOOTH} 280ms backwards` },
      p2: { animation: `ki-repeat-down .4s ${SMOOTH} 280ms backwards` },
    },
    keyframes:
      drawKf("repeat") +
      "@keyframes ki-repeat-up{0%{transform:translateY(2px);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-repeat-down{0%{transform:translateY(-2px);opacity:0}100%{transform:none;opacity:1}}",
  },

  "repeat-loop": {
    note: "Both arrows redraw around the loop together and their heads snap on at the ends.",
    draw: ["p1", "p3"],
    motion: {
      p1: draw("repeat-loop", 500),
      p3: draw("repeat-loop", 500),
      p0: { animation: `ki-repeat-loop-right .4s ${SMOOTH} 280ms backwards` },
      p2: { animation: `ki-repeat-loop-left .4s ${SMOOTH} 280ms backwards` },
    },
    keyframes:
      drawKf("repeat-loop") +
      "@keyframes ki-repeat-loop-right{0%{transform:translateX(-2px);opacity:0}100%{transform:none;opacity:1}}" +
      "@keyframes ki-repeat-loop-left{0%{transform:translateX(2px);opacity:0}100%{transform:none;opacity:1}}",
  },
};
