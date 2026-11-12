"use client";

import { forwardRef, useEffect, useState } from "react";
import type { IconDef } from "@kineticons/core";
import { KineticIcon, type KineticIconProps } from "./KineticIcon";

/** An icon that plays its motion on a steady beat (trigger="loop"): the one part of the package that needs the client.
 * It pauses while the page is hidden, and stays still for reduced motion (the CSS sees to that). */
export const LoopIcon = forwardRef<SVGSVGElement, Omit<KineticIconProps, "icon" | "trigger" | "active" | "loopEvery"> & { icon: IconDef; every: number }>(
  function LoopIcon({ icon, every, ...props }, ref) {
    const [on, setOn] = useState(false);
    useEffect(() => {
      const id = window.setInterval(() => {
        if (!document.hidden) setOn((v) => !v);
      }, every / 2);
      return () => window.clearInterval(id);
    }, [every]);
    return <KineticIcon ref={ref} icon={icon} trigger="manual" active={on} {...props} />;
  },
);
