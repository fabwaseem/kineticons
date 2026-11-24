import type { Metadata } from "next";
import { Closing } from "@/components/home/Closing";
import { CodeSection } from "@/components/home/CodeSection";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Showcase } from "@/components/home/Showcase";
import { Window } from "@/components/home/Window";
import { FAQS } from "@/lib/faqs";
import { DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  description: DESCRIPTION,
  alternates: { canonical: "/" },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/** The home page (v3 "Spotlight", see DESIGN.md): a few calm sections, each showing the icons doing their job. */
export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Window />
      <CodeSection />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </>
  );
}
