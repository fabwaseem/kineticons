/** The questions on the home page (also published as FAQ structured data). */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is Kineticons free to use?",
    a: "Yes. Kineticons is open source under the MIT licence: use it in personal and commercial work, change it and ship it, with no attribution needed in your product.",
  },
  {
    q: "Which frameworks does it support?",
    a: "React (the kineticons package, including Next.js Server Components), Vue 3 and Nuxt (@kineticons/vue), Svelte 5 and SvelteKit (@kineticons/svelte), and any HTML page through @kineticons/static: SVG files, one stylesheet and a CDN.",
  },
  {
    q: "How big is it in my bundle?",
    a: "You import icons by name, so only the ones you use are bundled. An icon is a small object of paths plus its motion, and its CSS is added to the page once, the first time it is drawn.",
  },
  {
    q: "Does it work with server rendering?",
    a: "Yes. In React 19 icons render in Server Components with no client JavaScript: their CSS is hoisted into the page head. Only a looping icon needs the client. Vue and Svelte render on the server too and add the motion CSS as the page loads.",
  },
  {
    q: "What about people who prefer less motion?",
    a: "When a visitor's system asks for reduced motion, every icon stays still. Icons are hidden from screen readers by default; give one a title or aria-label when it carries meaning on its own.",
  },
  {
    q: "Can I control when an icon moves?",
    a: "Yes. By default an icon moves when it, or the button or link around it, is pointed at or focused. You can also play it while something is on (a recording), loop it, or keep it still.",
  },
  {
    q: "How are three styles made from one drawing?",
    a: "Each part of an icon is a shape, a detail inside a shape, or an open line. Outline strokes them all; duotone tints the shapes; filled makes the shapes solid and cuts the details out. Icons made of lines become a solid tile with the lines cut out.",
  },
];
