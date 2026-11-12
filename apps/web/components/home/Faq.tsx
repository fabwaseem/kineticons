import { KineticIcon } from "kineticons";
import { chevronDown } from "@kineticons/core/icons";
import { FAQS } from "@/lib/faqs";
import { Reveal, SectionHead } from "@/components/ui/bits";

export function Faq() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-28 sm:px-6" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHead title={<span id="faq-title">Questions</span>} text="What people ask before they use the icons in their product." />
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f) => (
            <details key={f.q} className="group ki-trigger">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <KineticIcon icon={chevronDown} size={20} className="text-muted" />
                </span>
              </summary>
              <p className="max-w-[640px] pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

