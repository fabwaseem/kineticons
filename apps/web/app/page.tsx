import type { Metadata } from "next";
import { Categories } from "@/components/home/Categories";
import { Closing } from "@/components/home/Closing";
import { Everywhere } from "@/components/home/Everywhere";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Motion } from "@/components/home/Motion";
import { Playground } from "@/components/home/Playground";
import { Styles } from "@/components/home/Styles";
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

/** The home page: the field, then why these icons, then a way into all of them. */
export default function Home() {
  return (
    <>
      <Hero />
      <Styles />
      <Motion />
      <Everywhere />
      <Playground />
      <div className="h-28" />
      <Categories />
      <Faq />
      <Closing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </>
  );
}
