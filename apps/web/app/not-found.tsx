import Link from "next/link";
import { KineticIcon } from "kineticons";
import { compass } from "@kineticons/core/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center px-6 py-28 text-center">
      <span className="grid size-24 place-items-center rounded-[28px] bg-haze text-ink">
        <KineticIcon icon={compass} size={52} variant="duotone" trigger="loop" loopEvery={2400} />
      </span>
      <h1 className="heading mt-8 text-[44px]">Nothing here</h1>
      <p className="mt-4 text-[16px] text-muted">This page does not exist. It may have moved, or the address has a typo.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/icons" className="ki-trigger inline-flex h-10 items-center rounded-[12px] bg-ink px-4 text-[14px] font-medium text-bg">
          Browse the icons
        </Link>
        <Link href="/docs" className="card inline-flex h-10 items-center rounded-[12px] px-4 text-[14px] font-medium">
          Read the docs
        </Link>
      </div>
    </div>
  );
}
