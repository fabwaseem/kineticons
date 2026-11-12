import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docBySlug, DOCS } from "@/components/docs/registry";
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
    <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_200px]">
      {/* the docs' sidebar (a scrolling row on small screens) */}
      <nav aria-label="Docs" className="lg:sticky lg:top-[calc(var(--nav-h)+32px)] lg:h-[calc(100vh-var(--nav-h)-48px)] lg:overflow-y-auto lg:[scrollbar-width:thin]">
        <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 lg:mx-0 lg:block lg:space-y-7 lg:overflow-visible lg:px-0">
          {GROUPS.map((g) => (
            <div key={g} className="contents lg:block">
              <h2 className="mb-2 hidden text-[12.5px] font-semibold text-faint lg:block">{g}</h2>
              <ul className="contents lg:block lg:space-y-0.5">
                {DOCS.filter((d) => d.group === g).map((d) => (
                  <li key={d.slug} className="shrink-0">
                    <Link
                      href={href(d.slug)}
                      aria-current={d === doc ? "page" : undefined}
                      className={`block rounded-[10px] px-3 py-1.5 text-[14px] whitespace-nowrap transition-colors ${d === doc ? "bg-surface font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <article className="doc min-w-0 max-w-[780px]">
        <p className="text-[13.5px] text-faint">{doc.group}</p>
        <h1 className="display mt-2 text-[clamp(40px,5vw,60px)]">{doc.title}</h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{doc.description}</p>
        <div className="mt-10">{doc.body()}</div>

        <nav aria-label="More docs" className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link href={href(prev.slug)} rel="prev" className="card rounded-[18px] p-5 hover:border-line-strong">
              <span className="block text-[13px] text-faint">Previous</span>
              <span className="heading mt-1 block text-[19px]">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={href(next.slug)} rel="next" className="card rounded-[18px] p-5 text-right hover:border-line-strong">
              <span className="block text-[13px] text-faint">Next</span>
              <span className="heading mt-1 block text-[19px]">{next.title}</span>
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
        <div className="sticky top-[calc(var(--nav-h)+32px)]">
          <h2 className="text-[12.5px] font-semibold text-faint">On this page</h2>
          <ul className="mt-3 space-y-2 border-l border-line">
            {doc.toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-3 text-[13.5px] text-muted hover:border-ink hover:text-ink">
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
