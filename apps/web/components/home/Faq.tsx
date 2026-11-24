import { KineticIcon } from "kineticons";
import { chevronDown } from "@kineticons/core/icons";
import { FAQS } from "@/lib/faqs";
import { Reveal } from "@/components/ui/bits";

export function Faq() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6" aria-labelledby="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <h2 id="faq-title" className="heading text-[clamp(34px,4.6vw,52px)]">
            Questions
          </h2>
          <p className="mt-5 max-w-[340px] text-[16px] leading-relaxed text-muted">What people ask before they put the icons in their product.</p>
        </Reveal>
        <div className="flex flex-col gap-2">
          {FAQS.map((f) => (
            <details key={f.q} className="group ki-trigger tile rounded-card px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <KineticIcon icon={chevronDown} size={20} className="text-muted" />
                </span>
              </summary>
              <p className="max-w-[640px] pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

