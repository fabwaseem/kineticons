"use client";

import type { IconDef } from "@kineticons/core";
import { useLook } from "@/lib/store";
import { IconDetail } from "./IconDetail";

/** The interactive part of an icon's page: the visitor's own look (style, stroke, colour) applied. */
export function DetailClient({ icon }: { icon: IconDef }) {
  const { look } = useLook();
  return <IconDetail icon={icon} look={look} big />;
}
