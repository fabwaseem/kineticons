import { KineticIcon } from "kineticons";
import { chevronDown } from "@kineticons/core/icons";
import { FAQS } from "@/lib/faqs";
import { Reveal } from "@/components/ui/bits";

export function Faq() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pb-36" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <h2 id="faq-title" className="display text-[clamp(44px,6vw,88px)]">
            Good <em>questions.</em>
          </h2>
          <p className="mt-5 max-w-[360px] text-[17px] leading-relaxed text-muted">What people ask before they put the icons in their product.</p>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group ki-trigger">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-[16px] py-6 text-[18px] font-medium transition-colors hover:text-accent-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <KineticIcon icon={chevronDown} size={20} className="text-muted" />
                </span>
              </summary>
              <p className="max-w-[640px] pb-7 text-[16px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

