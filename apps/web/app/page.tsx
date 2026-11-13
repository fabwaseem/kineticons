import type { Metadata } from "next";
import { Closing } from "@/components/home/Closing";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Everywhere } from "@/components/home/Everywhere";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Lab } from "@/components/home/Lab";
import { Motions } from "@/components/home/Motions";
import { Stack } from "@/components/home/Stack";
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

/** The home page (v2, see DESIGN.md): stacked panels, each one a demo. */
export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Lab />
      <Motions />
      <Everywhere />
      <Ecosystem />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </>
  );
}
