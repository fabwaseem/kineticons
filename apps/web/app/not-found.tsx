import Link from "next/link";
import { KineticIcon } from "kineticons";
import { btn } from "@/components/ui/controls";
import { compass } from "@kineticons/core/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[640px] flex-col items-center px-6 py-28 text-center">
      <span className="grid size-24 place-items-center rounded-[26px] bg-[linear-gradient(150deg,var(--accent),var(--accent-2))] text-white shadow-[0_30px_60px_-24px_var(--glow)]">
        <KineticIcon icon={compass} size={52} variant="duotone" trigger="loop" loopEvery={2400} />
      </span>
      <h1 className="display mt-8 text-[clamp(48px,7vw,80px)]">Nothing here</h1>
      <p className="mt-4 text-[16px] text-muted">This page does not exist. It may have moved, or the address has a typo.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/icons" className={btn("primary")}>
          Browse the icons
        </Link>
        <Link href="/docs" className={btn("secondary")}>
          Read the docs
        </Link>
      </div>
    </div>
  );
}
