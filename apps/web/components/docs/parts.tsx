import type { ReactNode } from "react";
import { CodeBlock } from "@/components/ui/bits";
import { CodeTabs } from "./CodeTabs";

/** A section heading with an anchor (the page's table of contents links to it). */
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="group scroll-mt-[calc(var(--nav-h)+24px)]">
      <a href={`#${id}`} className="no-underline hover:no-underline">
        {children}
        <span aria-hidden className="ml-2 text-faint opacity-0 transition-opacity group-hover:opacity-100">
          #
        </span>
      </a>
    </h2>
  );
}

export function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-[calc(var(--nav-h)+24px)]">
      {children}
    </h3>
  );
}

export const Code = ({ code, lang }: { code: string; lang?: string }) => <CodeBlock code={code} lang={lang} />;

/** The same command for each package manager. */
export function Install({ pkg }: { pkg: string }) {
  return (
    <CodeTabs
      label="Package manager"
      tabs={[
        { label: "npm", code: `npm install ${pkg}`, lang: "shell" },
        { label: "pnpm", code: `pnpm add ${pkg}`, lang: "shell" },
        { label: "yarn", code: `yarn add ${pkg}`, lang: "shell" },
        { label: "bun", code: `bun add ${pkg}`, lang: "shell" },
      ]}
    />
  );
}

/** A note set apart from the text: a tip or a caution. */
export function Callout({ kind = "tip", children }: { kind?: "tip" | "caution"; children: ReactNode }) {
  return (
    <div className={`not-prose rounded-[16px] border px-4 py-3 text-[14.5px] leading-relaxed ${kind === "tip" ? "border-[color-mix(in_srgb,var(--haze-ink)_30%,transparent)] bg-haze text-ink-2" : "border-[color-mix(in_srgb,var(--accent)_35%,transparent)] bg-accent-soft text-ink-2"}`}>
      {children}
    </div>
  );
}

/** A table of props or options. */
export function Props({ rows, head = ["Prop", "Type", "Default", "What it does"] }: { rows: (string | ReactNode)[][]; head?: string[] }) {
  return (
    <div className="overflow-x-auto rounded-[16px] border border-line">
      <table className="w-full text-left text-[14px]">
        <thead className="bg-surface-2 text-[12.5px] text-muted">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-medium whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "px-4 py-3 font-mono text-[13px] whitespace-nowrap text-ink" : j < head.length - 1 ? "px-4 py-3 font-mono text-[12.5px] text-muted" : "px-4 py-3 text-ink-2"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
