/** Where the site lives (canonical URLs, sitemap, social cards). Set NEXT_PUBLIC_SITE_URL when deploying elsewhere. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kineticons.fabwaseem.com").replace(/\/$/, "");
export const SITE_NAME = "Kineticons";
export const TAGLINE = "Icons that move like they mean it";
export const DESCRIPTION =
  "Kineticons: 2,000+ open-source, rounded icons for React, Vue, Svelte and HTML. Outline, duotone and filled, each with a motion of its own. Free under MIT.";
export const REPO_URL = process.env.NEXT_PUBLIC_REPO_URL ?? "https://github.com/fabwaseem/kineticons";
export const NPM_URL = "https://www.npmjs.com/package/kineticons";

/** An absolute URL for a path on this site, in the form pages are served at (with a trailing slash). */
export const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path.replace(/\/?(\?|$)/, "/$1")}`;
