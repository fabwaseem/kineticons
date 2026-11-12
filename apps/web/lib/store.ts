"use client";

import { useCallback, useEffect, useState } from "react";
import type { Trigger, Variant } from "@kineticons/core";

/** A value kept in this browser (a remembered choice). Falls back quietly when storage is unavailable. */
export function usePersisted<T>(key: string, fallback: T): [T, (v: T | ((p: T) => T)) => void] {
  // the stored value is read after hydration, so the first render matches the server's HTML; it is not written back
  // until it has been read, so a first render never overwrites what was kept
  const [value, setValue] = useState<T>(fallback);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setValue(read(key, fallback));
    setLoaded(true);
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* not remembered: private window or storage blocked */
    }
  }, [key, value, loaded]);
  return [value, setValue];
}

export function read<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? ({ ...(fallback as object), ...JSON.parse(v) } as T) : fallback;
  } catch {
    return fallback;
  }
}

/** How icons are shown in the browser and on icon pages: the visitor's own choice, remembered. */
export interface Look {
  variant: Variant;
  size: number;
  /** null: the icon's own stroke */
  stroke: number | null;
  /** "": the page's ink */
  color: string;
  trigger: Trigger;
  /** names under the icons in the grid */
  labels: boolean;
}

export const DEFAULT_LOOK: Look = { variant: "outline", size: 28, stroke: null, color: "", trigger: "hover", labels: true };

export function useLook() {
  const [look, setLook] = usePersisted<Look>("ki.look", DEFAULT_LOOK);
  const patch = useCallback((p: Partial<Look>) => setLook((l) => ({ ...l, ...p })), [setLook]);
  return { look, setLook, patch, reset: () => setLook(DEFAULT_LOOK) };
}
