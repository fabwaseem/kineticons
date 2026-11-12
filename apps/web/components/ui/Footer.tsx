import Link from "next/link";
import { fmt, ICON_COUNT } from "@/lib/categories";
import { NPM_URL, REPO_URL } from "@/lib/site";
import { Wordmark } from "./bits";

const COLS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Icons",
    links: [
      { label: "Browse all icons", href: "/icons" },
      { label: "Outline", href: "/icons?style=outline" },
      { label: "Duotone", href: "/icons?style=duotone" },
      { label: "Filled", href: "/icons?style=filled" },
    ],
  },
  {
    title: "Packages",
    links: [
      { label: "React", href: "/docs/react" },
      { label: "Vue", href: "/docs/vue" },
      { label: "Svelte", href: "/docs/svelte" },
      { label: "SVG, HTML and CDN", href: "/docs/static" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "/docs" },
      { label: "Motion and triggers", href: "/docs/motion" },
      { label: "Accessibility", href: "/docs/accessibility" },
      { label: "Design system", href: "/docs/design-system" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: REPO_URL, external: true },
      { label: "npm", href: NPM_URL, external: true },
      { label: "Contributing", href: "/docs/contributing" },
      { label: "Licence", href: "/docs/licence" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="max-w-[320px]">
          <Link href="/" aria-label="Kineticons, home" className="inline-block rounded-[10px]">
            <Wordmark />
          </Link>
          <p className="mt-4 text-[14px] leading-relaxed text-muted">
            {fmt(ICON_COUNT)} open-source icons in outline, duotone and filled. Each one has a motion of its own that plays when you point at it.
          </p>
        </div>
        {COLS.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-[13px] font-semibold text-ink">{c.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-[14px] text-muted transition-colors hover:text-ink">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[14px] text-muted transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-6 text-[13px] text-faint sm:px-6">
        <span>© {new Date().getFullYear()} Kineticons. Released under the MIT licence.</span>
        <span>Made for interfaces that feel alive.</span>
      </div>
    </footer>
  );
}
