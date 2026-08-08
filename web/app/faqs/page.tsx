import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection, FaqSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Cost, timelines, who you'll talk to, and what happens after launch.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Most asked
            <br />
            questions<span className="stop">.</span>
          </>
        }
      >
        It&apos;s the name, so we may as well answer them here. Anything missing,
        just ask.
      </PageHero>

      <FaqSection heading={false} />
      <CtaSection />
    </>
  );
}
