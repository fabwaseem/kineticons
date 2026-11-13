"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Keeps something on screen while it animates out. `open` is what the caller wants; `mounted` says whether to render
 * it and `state` ("open" | "closed") drives the enter and exit animations (see the .anim-* classes in globals.css).
 * After closing, it stays mounted for `exitMs`, then unmounts. `last` is the last value seen while open, so a panel
 * can keep showing its content while it leaves.
 */
export function usePresence<T>(value: T | null | false | undefined, exitMs = 320) {
  const open = !!value;
  const [mounted, setMounted] = useState(open);
  const last = useRef<T | null>(null);
  if (open) last.current = value as T;
  useEffect(() => {
    if (open) return setMounted(true);
    const t = window.setTimeout(() => setMounted(false), window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : exitMs);
    return () => window.clearTimeout(t);
  }, [open, exitMs]);
  return { mounted: mounted || open, state: open ? ("open" as const) : ("closed" as const), last: last.current };
}
