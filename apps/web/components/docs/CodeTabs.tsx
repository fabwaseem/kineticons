"use client";

import { useEffect, useState } from "react";
import { CodeBlock, Segmented } from "@/components/ui/bits";

/** Code in several flavours (package managers, frameworks), one shown at a time. The choice is remembered across
 * pages for the same set of tabs. */
export function CodeTabs({ tabs, label }: { tabs: { label: string; code: string; lang?: string }[]; label: string }) {
  const key = `ki.tabs.${tabs.map((t) => t.label).join("|")}`;
  const [i, setI] = useState(0);
  // the remembered choice is read after hydration, so the first render matches the server's HTML
  useEffect(() => {
    try {
      const v = Number(localStorage.getItem(key));
      if (v > 0 && v < tabs.length) setI(v);
    } catch {
      /* nothing remembered */
    }
  }, [key, tabs.length]);
  const pick = (v: string) => {
    const n = tabs.findIndex((t) => t.label === v);
    setI(n);
    try {
      localStorage.setItem(key, String(n));
    } catch {
      /* not remembered */
    }
  };
  const t = tabs[i] ?? tabs[0];
  return (
    <div className="not-prose flex flex-col gap-2">
      <Segmented size="sm" label={label} value={t.label} onChange={pick} options={tabs.map((x) => ({ value: x.label, label: x.label }))} />
      <CodeBlock code={t.code} lang={t.lang} />
    </div>
  );
}
