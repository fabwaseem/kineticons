"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { KineticIcon } from "kineticons";
import { arrowRight, download } from "@kineticons/core/icons";
import { codeFor, highlight, type CodeTab } from "@/lib/code";
import { CopyButton } from "@/components/ui/bits";
import { btn } from "@/components/ui/controls";

const TABS: { value: CodeTab; label: string; file: string }[] = [
  { value: "react", label: "React", file: "Save.tsx" },
  { value: "vue", label: "Vue", file: "Save.vue" },
  { value: "svelte", label: "Svelte", file: "Save.svelte" },
  { value: "html", label: "HTML", file: "index.html" },
];

/** The code: one icon in a button, in each framework, with the button it makes underneath. */
export function CodeSection() {
  const [tab, setTab] = useState<CodeTab>("react");
  const t = TABS.find((x) => x.value === tab)!;
  const code = useMemo(() => codeFor(download, tab, { size: 18 }), [tab]);
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-20 sm:px-6 sm:pb-28" aria-labelledby="code-title">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <h2 id="code-title" className="heading text-[clamp(34px,4.6vw,52px)]">
            Drop it in. <em>It moves.</em>
          </h2>
          <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-muted">
            Put an icon in a button and it plays when the button is pointed at or focused. Visitors who ask for reduced motion get still icons. No animation library.
          </p>
          <div role="tablist" aria-label="Framework" className="mt-7 flex flex-wrap gap-1">
            {TABS.map((x) => (
              <button
                key={x.value}
                type="button"
                role="tab"
                aria-selected={tab === x.value}
                onClick={() => setTab(x.value)}
                className={`h-9 rounded-full px-4 text-[13.5px] font-medium transition-colors ${tab === x.value ? "bg-surface text-ink shadow-[var(--edge)]" : "text-muted hover:text-ink"}`}
              >
                {x.label}
              </button>
            ))}
          </div>
          <Link href="/docs" className={btn("ghost", "sm", "mt-6 -ml-3")}>
            Read the docs
            <KineticIcon icon={arrowRight} size={15} />
          </Link>
        </div>

        <div className="code min-w-0 overflow-hidden rounded-[24px] bg-surface shadow-[var(--edge),var(--shadow-md)]">
          <div className="flex items-center justify-between border-b border-line py-2.5 pr-2.5 pl-5">
            <span className="font-mono text-[12px] text-muted">{t.file}</span>
            <CopyButton text={code} compact label="Copy the code" />
          </div>
          <pre className="scroll-x h-[248px] overflow-auto px-5 py-4 text-[13px] leading-[1.75] text-ink-2">
            <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
          </pre>
          <div className="flex items-center gap-4 border-t border-line px-5 py-4">
            <span className="font-mono text-[12px] text-faint">Result</span>
            <button type="button" className={btn("primary", "md")}>
              <KineticIcon icon={download} size={18} />
              Download
            </button>
            <span className="text-[13px] text-faint">Point at it</span>
          </div>
        </div>
      </div>
    </section>
  );
}
