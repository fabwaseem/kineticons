import type { Metadata } from "next";
import { Suspense } from "react";
import Browser from "@/components/browse/Browser";
import { CATEGORIES, CATEGORY_COUNTS, fmt, ICON_COUNT } from "@/lib/categories";

export const metadata: Metadata = {
  title: "All icons",
  description: `Browse and search ${fmt(ICON_COUNT)} animated icons in outline, duotone and filled. Copy React, Vue, Svelte, SVG or HTML for any icon.`,
  alternates: { canonical: "/icons" },
};

/** The icon browser. Its grid is drawn in the browser (from /catalog.json); the page itself carries the categories
 * as plain links, so it reads as content for search engines and without JavaScript. */
export default function IconsPage() {
  return (
    <>
      <Suspense fallback={<div className="mx-auto max-w-[1920px] px-6 py-10" aria-busy="true" />}>
        <Browser />
      </Suspense>
      <noscript>
        <div className="mx-auto max-w-[900px] px-6 py-10">
          <h1 className="heading text-[28px]">{fmt(ICON_COUNT)} icons</h1>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {CATEGORIES.map((c) => (
              <li key={c.value}>
                <a href={`/icons?category=${c.value}`}>
                  {c.label} ({CATEGORY_COUNTS[c.value] ?? 0})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </noscript>
    </>
  );
}
