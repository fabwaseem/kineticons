import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docBySlug, DOCS } from "@/components/docs/registry";
import { eyebrow, navItem } from "@/components/ui/controls";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { accessibility, arrowLeft, arrowRight, atom, braces, component, fileCode, flame, gitPullRequest, palette, penTool, rocket, ruler, scroll, sparkles, triangle } from "@kineticons/core/icons";

/** Each doc's icon: in the sidebar, on its page and on the previous / next links. */
const DOC_ICON: Record<string, IconDef> = {
  "": rocket,
  react: atom,
  nextjs: triangle,
  vue: component,
  svelte: flame,
  static: fileCode,
  styles: palette,
  motion: sparkles,
  sizing: ruler,
  accessibility,
  api: braces,
  "design-system": penTool,
  contributing: gitPullRequest,
  licence: scroll,
};
const iconOf = (slug: string) => DOC_ICON[slug] ?? rocket;
import { abs, REPO_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => DOCS.map((d) => ({ slug: d.slug ? [d.slug] : [] }));

type Props = { params: Promise<{ slug?: string[] }> };
const slugOf = async (params: Props["params"]) => ((await params).slug ?? []).join("/");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = docBySlug(await slugOf(params));
  if (!doc) return {};
  const path = doc.slug ? `/docs/${doc.slug}` : "/docs";
  return {
    title: doc.slug ? `${doc.title}: docs` : "Docs: getting started",
    description: doc.description,
    alternates: { canonical: path },
    openGraph: { title: `${doc.title} | ${SITE_NAME} docs`, description: doc.description, url: path, type: "article" },
  };
}

const GROUPS = ["Start", "Using icons", "Project"] as const;

export default async function DocPage({ params }: Props) {
  const slug = await slugOf(params);
  const doc = docBySlug(slug);
  if (!doc) notFound();
  const i = DOCS.indexOf(doc);
  const prev = DOCS[i - 1];
  const next = DOCS[i + 1];
  const href = (s: string) => (s ? `/docs/${s}` : "/docs");
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: doc.title,
        description: doc.description,
        url: abs(href(doc.slug)),
        about: { "@id": `${SITE_URL}/#software` },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Docs", item: abs("/docs") },
          ...(doc.slug ? [{ "@type": "ListItem", position: 2, name: doc.title, item: abs(href(doc.slug)) }] : []),
        ],
      },
    ],
  };

  return (
    <div className="mx-auto grid max-w-[1280px] gap-10 px-4 pt-8 pb-20 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[230px_minmax(0,1fr)_190px]">
      {/* the docs' sidebar (a scrolling row on small screens) */}
      <nav aria-label="Docs" className="lg:sticky lg:top-[calc(var(--nav-h)+24px)] lg:h-[calc(100vh-var(--nav-h)-48px)] lg:overflow-y-auto lg:[scrollbar-width:thin]">
        <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:block lg:space-y-6 lg:overflow-visible lg:px-0 lg:pt-2">
          {GROUPS.map((g) => (
            <div key={g} className="contents lg:block">
              <h2 className={`${eyebrow} mb-2 hidden px-3.5 lg:block`}>{g}</h2>
              <ul className="contents lg:block lg:space-y-0.5">
                {DOCS.filter((d) => d.group === g).map((d) => (
                  <li key={d.slug} className="shrink-0">
                    <Link
                      href={href(d.slug)}
                      aria-current={d === doc ? "page" : undefined}
                      className={`ki-trigger ${navItem(d === doc, "justify-start whitespace-nowrap rounded-xl")} ${d === doc ? "" : "max-lg:bg-surface"}`}
                    >
                      <KineticIcon icon={iconOf(d.slug)} size={17} variant={d === doc ? "duotone" : "outline"} className={`shrink-0 ${d === doc ? "text-accent" : "text-faint"}`} />
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <article className="doc min-w-0 max-w-[780px] lg:pt-8">
        <div className="flex items-center gap-3">
          <span className="ki-trigger grid size-11 place-items-center rounded-tile bg-[linear-gradient(150deg,var(--accent),var(--accent-2))] text-white shadow-[0_12px_28px_-12px_var(--glow)]">
            <KineticIcon icon={iconOf(doc.slug)} size={22} variant="duotone" trigger="loop" loopEvery={3200} />
          </span>
          <p className="text-[13px] font-medium text-accent-ink">{doc.group}</p>
        </div>
        <h1 className="display mt-5 text-[clamp(40px,5vw,60px)]">{doc.title}</h1>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-muted">{doc.description}</p>
        <div className="mt-10">{doc.body()}</div>

        <nav aria-label="More docs" className="mt-16 grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={href(prev.slug)} rel="prev" className="ki-trigger card group flex items-center gap-4 rounded-card p-5 transition-colors hover:bg-surface-2">
              <KineticIcon icon={arrowLeft} size={18} className="shrink-0 text-faint transition-transform duration-300 group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-[13px] text-faint">Previous</span>
                <span className="heading mt-1 flex items-center gap-2 text-[19px]">
                  <KineticIcon icon={iconOf(prev.slug)} size={18} className="shrink-0 text-accent" />
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={href(next.slug)} rel="next" className="ki-trigger card group flex items-center justify-end gap-4 rounded-card p-5 text-right transition-colors hover:bg-surface-2 sm:col-start-2">
              <span className="min-w-0">
                <span className="block text-[13px] text-faint">Next</span>
                <span className="heading mt-1 flex items-center justify-end gap-2 text-[19px]">
                  <KineticIcon icon={iconOf(next.slug)} size={18} className="shrink-0 text-accent" />
                  {next.title}
                </span>
              </span>
              <KineticIcon icon={arrowRight} size={18} className="shrink-0 text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          )}
        </nav>
        <p className="mt-8 text-[13px] text-faint">
          Something unclear or missing?{" "}
          <a href={`${REPO_URL}/issues/new`} target="_blank" rel="noreferrer">
            Open an issue
          </a>
          .
        </p>
      </article>

      {/* on this page */}
      <aside aria-label="On this page" className="hidden xl:block">
        <div className="sticky top-[calc(var(--nav-h)+32px)] pt-2">
          <h2 className={eyebrow}>On this page</h2>
          <ul className="mt-3 space-y-2 border-l border-line">
            {doc.toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-3 text-[14px] text-muted transition-colors hover:border-ink hover:text-ink">
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
