import Link from "next/link";
import { KineticIcon } from "kineticons";
import type { IconDef } from "@kineticons/core";
import { battery, lock, send, trash } from "@kineticons/core/icons";
import { componentName } from "@/lib/code";
import { verb } from "./verbs";

const TILES: { icon: IconDef; hot?: boolean }[] = [{ icon: lock }, { icon: send, hot: true }, { icon: battery }, { icon: trash }];

/** Four icons, big, each playing its own motion when pointed at. The gradient tile plays by itself. */
export function Showcase() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="show-title">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 id="show-title" className="heading max-w-[15ch] text-[clamp(34px,4.6vw,52px)]">
          Every icon has a motion of its own.
        </h2>
        <p className="max-w-[38ch] text-[16px] leading-relaxed text-muted">Not one fade for all of them. Point at each tile: the motion follows what the thing does.</p>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {TILES.map(({ icon, hot }) => (
          <li key={icon.name}>
            <Link
              href={`/icons/${icon.name}`}
              className={`ki-trigger group flex aspect-[1/1.08] flex-col justify-between rounded-box p-5 transition-[background-color,transform] duration-300 hover:-translate-y-1 ${
                hot ? "tone-orange shadow-[0_40px_80px_-40px_var(--glow)]" : "tile text-ink hover:bg-surface-2"
              }`}
            >
              <span className="grid flex-1 place-items-center">
                <KineticIcon icon={icon} size={84} strokeWidth={1.5} trigger={hot ? "loop" : "hover"} loopEvery={2600} className="max-sm:size-16" />
              </span>
              <span className="flex items-baseline justify-between gap-2 text-[15px] font-medium">
                {componentName(icon.name)}
                <span className={`truncate font-mono text-[11.5px] font-normal ${hot ? "text-white/75" : "text-muted"}`}>{verb(icon)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
