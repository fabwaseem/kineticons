import type { MetadataRoute } from "next";
import { ICONS } from "@kineticons/core/icons";
import { DOCS } from "@/components/docs/registry";
import { abs } from "@/lib/site";

export const dynamic = "force-static";

/** Every page: home, the browser, each docs page and each of the 2,000+ icon pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: abs("/icons"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...DOCS.map((d) => ({ url: abs(`/docs${d.slug ? `/${d.slug}` : ""}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...ICONS.map((i) => ({ url: abs(`/icons/${i.name}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
