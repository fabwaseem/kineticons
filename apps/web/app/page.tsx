import type { Metadata } from "next";
import { Categories } from "@/components/home/Categories";
import { Closing } from "@/components/home/Closing";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Everywhere } from "@/components/home/Everywhere";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Lab } from "@/components/home/Lab";
import { Playground } from "@/components/home/Playground";
import { Reel } from "@/components/home/Reel";
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

/** The home page: the field and a search, one icon up close, the motion reel, code, where the icons live, then a way
 * into all of them. */
export default function Home() {
  return (
    <>
      <Hero />
      <Lab />
      <Reel />
      <Everywhere />
      <Ecosystem />
      <Playground />
      <div className="h-28" />
      <Categories />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </>
  );
}
