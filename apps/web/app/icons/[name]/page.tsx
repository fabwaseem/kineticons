import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KineticIcon } from "kineticons";
import { toSvg, type IconDef } from "@kineticons/core";
import { chevronLeft, chevronRight, ICONS } from "@kineticons/core/icons";
import { DetailClient } from "@/components/browse/DetailClient";
import { CATEGORIES, categoryLabel } from "@/lib/categories";
import { componentName } from "@/lib/code";
import { abs, SITE_NAME } from "@/lib/site";

// every icon page is built ahead of time; an unknown name is a 404
export const dynamicParams = false;
export const generateStaticParams = () => ICONS.map((i) => ({ name: i.name }));

const RANK = CATEGORIES.map((c) => c.value as string);
const ORDER = [...ICONS].sort((a, b) => RANK.indexOf(a.category) - RANK.indexOf(b.category) || a.title.localeCompare(b.title));
const BY_NAME = new Map(ICONS.map((i) => [i.name, i]));

function related(icon: IconDef, n = 12): IconDef[] {
  const stem = icon.name.split("-")[0];
  const tags = new Set(icon.tags.map((t) => t.toLowerCase()));
  return ICONS.filter((i) => i !== icon)
    .map((i) => ({ i, s: (i.name.split("-")[0] === stem ? 6 : 0) + i.tags.filter((t) => tags.has(t.toLowerCase())).length * 2 + (i.category === icon.category ? 1 : 0) }))
    .filter((x) => x.s > 1)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.i);
}

type Props = { params: Promise<{ name: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const icon = BY_NAME.get((await params).name);
  if (!icon) return {};
  const title = `${icon.title} icon (${icon.name})`;
  const description = `${icon.title}: an animated ${categoryLabel(icon.category).toLowerCase()} icon in outline, duotone and filled. ${icon.motionNote} Free for React, Vue, Svelte, SVG and HTML.`;
  return {
    title,
    description,
    keywords: [icon.name, icon.title, ...icon.tags, `${icon.name} icon`, `${icon.name} svg`, "animated icon", "react icon"],
    alternates: { canonical: `/icons/${icon.name}` },
    openGraph: { title: `${title} | ${SITE_NAME}`, description, url: `/icons/${icon.name}`, type: "article" },
  };
}

export default async function IconPage({ params }: Props) {
  const icon = BY_NAME.get((await params).name);
  if (!icon) notFound();
  const i = ORDER.indexOf(icon);
  const prev = ORDER[i - 1];
  const next = ORDER[i + 1];
  const like = related(icon);
  const url = abs(`/icons/${icon.name}`);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        name: `${icon.title} icon`,
        description: icon.motionNote,
        contentUrl: `data:image/svg+xml;utf8,${encodeURIComponent(toSvg(icon, {}, false))}`,
        encodingFormat: "image/svg+xml",
        keywords: icon.tags.join(", "),
        license: "https://opensource.org/licenses/MIT",
        acquireLicensePage: abs("/docs/licence"),
        creditText: SITE_NAME,
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Icons", item: abs("/icons") },
          { "@type": "ListItem", position: 2, name: categoryLabel(icon.category), item: abs(`/icons?category=${icon.category}`) },
          { "@type": "ListItem", position: 3, name: icon.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13.5px] text-muted">
        <Link href="/icons" className="hover:text-ink">
          Icons
        </Link>
        <span aria-hidden className="text-faint">/</span>
        <Link href={`/icons?category=${icon.category}`} className="hover:text-ink">
          {categoryLabel(icon.category)}
        </Link>
        <span aria-hidden className="text-faint">/</span>
        <span className="text-ink-2" aria-current="page">
          {icon.name}
        </span>
      </nav>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="display text-[clamp(40px,5.5vw,68px)]">{icon.title}</h1>
          <p className="mt-3 font-mono text-[14px] text-faint">
            {icon.name}, &lt;{componentName(icon.name)} /&gt;
          </p>
          <div className="mt-8">
            <DetailClient icon={icon} />
          </div>
        </div>
        <aside className="flex flex-col gap-8 lg:pt-[118px]">
          <section>
            <h2 className="text-[13px] font-semibold text-muted">How it moves</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{icon.motionNote}</p>
          </section>
          <section>
            <h2 className="text-[13px] font-semibold text-muted">Category</h2>
            <Link href={`/icons?category=${icon.category}`} className="mt-2 inline-flex rounded-full bg-surface-3 px-3 py-1.5 text-[13.5px] font-medium text-ink-2 hover:text-ink">
              {categoryLabel(icon.category)}
            </Link>
          </section>
          <section>
            <h2 className="text-[13px] font-semibold text-muted">Search words</h2>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {icon.tags.map((t) => (
                <Link key={t} href={`/icons?q=${encodeURIComponent(t)}`} className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink-2 hover:border-line-strong hover:text-ink">
                  {t}
                </Link>
              ))}
            </div>
          </section>
          <section aria-label="Neighbouring icons" className="grid grid-cols-2 gap-2">
            {prev ? (
              <Link href={`/icons/${prev.name}`} rel="prev" className="ki-trigger card flex items-center gap-3 rounded-[16px] p-3 hover:border-line-strong">
                <KineticIcon icon={chevronLeft} size={16} className="text-faint" />
                <KineticIcon icon={prev} size={22} />
                <span className="min-w-0 truncate text-[13.5px]">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/icons/${next.name}`} rel="next" className="ki-trigger card flex items-center justify-end gap-3 rounded-[16px] p-3 text-right hover:border-line-strong">
                <span className="min-w-0 truncate text-[13.5px]">{next.title}</span>
                <KineticIcon icon={next} size={22} />
                <KineticIcon icon={chevronRight} size={16} className="text-faint" />
              </Link>
            )}
          </section>
        </aside>
      </div>

      {like.length > 0 && (
        <section className="mt-20" aria-labelledby="like-title">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="like-title" className="heading text-[28px]">
              Icons like {icon.title.toLowerCase()}
            </h2>
            <Link href={`/icons?category=${icon.category}`} className="text-[14px] font-medium text-muted hover:text-ink">
              More in {categoryLabel(icon.category)}
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
            {like.map((r) => (
              <li key={r.name}>
                <Link href={`/icons/${r.name}`} className="ki-trigger flex flex-col items-center gap-2.5 rounded-[16px] border border-transparent px-2 py-5 text-ink-2 hover:border-line hover:bg-surface">
                  <KineticIcon icon={r} size={28} />
                  <span className="w-full truncate text-center text-[12px] text-muted">{r.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
