import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KineticIcon } from "kineticons";
import { toSvg, type IconDef } from "@kineticons/core";
import { chevronLeft, chevronRight, ICONS } from "@kineticons/core/icons";
import { DetailClient } from "@/components/browse/DetailClient";
import { CATEGORIES, categoryLabel } from "@/lib/categories";
import { componentName } from "@/lib/code";
import { btn, chip, eyebrow, tag } from "@/components/ui/controls";
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
    <div className="mx-auto max-w-[1280px] px-4 pt-6 pb-20 sm:px-6">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[14px] text-muted">
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

      {/* phones: title, the icon, then the details; wide screens: the icon on the left, title and details beside it */}
      <div className="mt-6 grid items-start gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr]">
        <div className="lg:col-start-2 lg:row-start-1">
          <p className={eyebrow}>{categoryLabel(icon.category)} icon</p>
          <h1 className="display mt-3 text-[clamp(48px,6vw,88px)]">{icon.title}</h1>
          <p className="mt-3 font-mono text-[14px] text-faint">
            {icon.name}, &lt;{componentName(icon.name)} /&gt;
          </p>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-2">{icon.motionNote}</p>
        </div>
        <div className="min-w-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <DetailClient icon={icon} />
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <div className="flex flex-col gap-6 border-t border-line pt-6">
            <section>
              <h2 className={eyebrow}>Category</h2>
              <Link href={`/icons?category=${icon.category}`} className={chip(false, "mt-2.5")}>
                {categoryLabel(icon.category)}
              </Link>
            </section>
            <section>
              <h2 className={eyebrow}>Search words</h2>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {icon.tags.map((t) => (
                  <Link key={t} href={`/icons?q=${encodeURIComponent(t)}`} className={tag("transition-colors hover:text-ink")}>
                    {t}
                  </Link>
                ))}
              </div>
            </section>
            <nav aria-label="Neighbouring icons" className="grid grid-cols-2 gap-2">
              {prev ? (
                <Link href={`/icons/${prev.name}`} rel="prev" className="ki-trigger card flex min-w-0 items-center gap-3 rounded-card p-3 transition-colors hover:border-line-strong">
                  <KineticIcon icon={chevronLeft} size={16} className="shrink-0 text-faint" />
                  <KineticIcon icon={prev} size={22} className="shrink-0" />
                  <span className="min-w-0 truncate text-[14px]">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/icons/${next.name}`} rel="next" className="ki-trigger card flex min-w-0 items-center justify-end gap-3 rounded-card p-3 text-right transition-colors hover:border-line-strong">
                  <span className="min-w-0 truncate text-[14px]">{next.title}</span>
                  <KineticIcon icon={next} size={22} className="shrink-0" />
                  <KineticIcon icon={chevronRight} size={16} className="shrink-0 text-faint" />
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>

      {like.length > 0 && (
        <section className="mt-24 border-t border-line pt-12" aria-labelledby="like-title">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="like-title" className="heading text-[clamp(30px,3.6vw,44px)]">
              Icons like {icon.title.toLowerCase()}
            </h2>
            <Link href={`/icons?category=${icon.category}`} className={btn("ghost", "sm")}>
              More in {categoryLabel(icon.category)}
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
            {like.map((r) => (
              <li key={r.name}>
                <Link href={`/icons/${r.name}`} className="ki-trigger flex flex-col items-center gap-2.5 rounded-tile border border-line bg-surface px-2 py-5 text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
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
