"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { KineticIcon } from "kineticons";
import {
  check, copy as copyIcon,
} from "@kineticons/core/icons";
import { copyText, highlight } from "@/lib/code";

/** The mark: a rounded tile and a K whose lower leg kicks out when the mark is pointed at. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden className="ki-mark shrink-0">
      <defs>
        <linearGradient id="ki-mark-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a4c" />
          <stop offset="1" stopColor="#ff4a22" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#ki-mark-fill)" />
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 8.5v15" />
        <path d="M21 8.5 14.5 16" />
        <path className="ki-mark-leg" d="M14.5 16 21 23.5" />
      </g>
      <style>{`.ki-mark-leg{transform-origin:14.5px 16px;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}a:hover .ki-mark-leg,.ki-mark:hover .ki-mark-leg{transform:rotate(-18deg)}`}</style>
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <Mark size={28} />
      <span className="heading text-[22px] leading-none">Kineticons</span>
    </span>
  );
}

type BtnProps = { children: ReactNode; to?: string; href?: string; onClick?: () => void; variant?: "primary" | "secondary" | "ghost"; size?: "md" | "lg"; className?: string; type?: "button" | "submit" };

/** A button or a link that looks like one. Every one is an icon trigger, so an icon inside moves with it. */
export function Button({ children, to, href, onClick, variant = "primary", size = "md", className = "", type = "button" }: BtnProps) {
  const base = `ki-trigger inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[.98] ${
    size === "lg" ? "h-12 rounded-[14px] px-5 text-[15px]" : "h-10 rounded-[12px] px-4 text-[14px]"
  }`;
  const look =
    variant === "primary"
      ? "bg-ink text-bg shadow-[0_1px_0_rgba(255,255,255,.12)_inset,0_10px_24px_-12px_rgba(21,19,28,.6)] hover:bg-[color-mix(in_srgb,var(--ink)_88%,var(--accent))]"
      : variant === "secondary"
        ? "card text-ink hover:border-line-strong"
        : "text-ink-2 hover:bg-surface-3 hover:text-ink";
  const cls = `${base} ${look} ${className}`;
  if (to) return <Link href={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer">{children}</a>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

/** Copies `text`; says so for a moment. */
export function CopyButton({ text, label = "Copy", className = "", compact = false }: { text: string; label?: string; className?: string; compact?: boolean }) {
  const [done, setDone] = useState(false);
  const t = useRef<number>(0);
  useEffect(() => () => window.clearTimeout(t.current), []);
  return (
    <button
      type="button"
      aria-label={compact ? (done ? "Copied" : label) : undefined}
      onClick={async () => {
        if (await copyText(text)) {
          setDone(true);
          window.clearTimeout(t.current);
          t.current = window.setTimeout(() => setDone(false), 1500);
        }
      }}
      className={`ki-trigger inline-flex h-8 items-center gap-1.5 rounded-[9px] px-2.5 text-[12.5px] font-medium transition-colors ${
        done ? "bg-accent-soft text-accent-ink" : "bg-surface-3 text-ink-2 hover:text-ink"
      } ${className}`}
    >
      <KineticIcon icon={done ? check : copyIcon} size={14} trigger={done ? "manual" : "hover"} active={done} />
      {!compact && <span aria-live="polite">{done ? "Copied" : label}</span>}
    </button>
  );
}

/** Code with a copy button and light highlighting. */
export function CodeBlock({ code, lang, className = "", maxH, bare = false }: { code: string; lang?: string; className?: string; maxH?: number; bare?: boolean }) {
  return (
    <div className={`code group relative overflow-hidden ${bare ? "" : "rounded-[16px] border border-line bg-surface-2"} ${className}`}>
      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-2">
        {lang && <span className="text-[11px] text-faint">{lang}</span>}
        <CopyButton text={code} compact />
      </div>
      <pre className="overflow-auto p-4 pr-16 text-[12.5px] leading-[1.7] text-ink-2" style={maxH ? { maxHeight: maxH } : undefined}>
        <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
      </pre>
    </div>
  );
}

/** A row of choices, one picked. */
export function Segmented<T extends string>({ value, onChange, options, label, size = "md" }: { value: T; onChange: (v: T) => void; options: { value: T; label: ReactNode; title?: string }[]; label: string; size?: "sm" | "md" }) {
  return (
    <div role="radiogroup" aria-label={label} className={`inline-flex shrink-0 gap-0.5 rounded-[12px] bg-surface-3 p-1 ${size === "sm" ? "h-9" : "h-10"}`}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          title={o.title}
          onClick={() => onChange(o.value)}
          className={`ki-trigger inline-flex items-center gap-1.5 rounded-[9px] px-3 text-[13px] font-medium transition-[background-color,color,box-shadow] ${
            value === o.value ? "bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,.12)]" : "text-muted hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="inline-grid h-5 min-w-5 place-items-center rounded-[6px] border border-line-strong bg-surface px-1 text-[11px] text-muted">{children}</kbd>;
}

/** Shows its children with a quiet fade the first time they scroll into view (once; nothing for reduced motion). */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translate3d(0,14px,0)", transition: `opacity .8s var(--ease-smooth) ${delay}ms, transform .8s var(--ease-smooth) ${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** True while the element is on screen (to run a demo only when it can be seen). */
export function useInView<T extends HTMLElement>(margin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: margin });
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A section's heading: the title and a line under it. */
export function SectionHead({ title, text, className = "", align = "left" }: { title: ReactNode; text?: ReactNode; className?: string; align?: "left" | "center" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-[640px] ${className}`}>
      <h2 className="heading text-[clamp(30px,4.2vw,48px)]">{title}</h2>
      {text && <p className={`mt-4 text-[16.5px] leading-relaxed text-muted ${align === "center" ? "mx-auto" : ""} max-w-[560px]`}>{text}</p>}
    </div>
  );
}
