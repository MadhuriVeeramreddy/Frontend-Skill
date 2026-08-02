import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection, FaqSection } from "@/components/sections";
import { Arrow, Button } from "@/components/ui";
import { pricing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "A fixed number before we start, not a rate card and a surprise.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            A number before
            <br />
            we start<span className="stop">.</span>
          </>
        }
      >
        You get a fixed price once we understand the problem — not a day rate
        and a surprise at the end. These are the ranges most projects land in.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-6 lg:grid-cols-3">
          {pricing.map((tier) => (
            <article
              key={tier.name}
              className={`card rise flex flex-col p-8 ${
                "featured" in tier && tier.featured
                  ? "ring-2 ring-accent"
                  : ""
              }`}
            >
              {"featured" in tier && tier.featured ? (
                <p className="u-label mb-4 text-accent">Most asked for</p>
              ) : null}
              <h2 className="u-display u-h3">{tier.name}</h2>
              <p className="u-display mt-3 text-[2rem] font-extrabold leading-none">
                {tier.price}
              </p>
              <p className="u-body mt-3">{tier.line}</p>

              <ul className="mt-7 space-y-3 border-t border-[color:var(--rule)] pt-7">
                {tier.includes.map((item) => (
                  <li key={item} className="u-body flex gap-3">
                    <span className="stop mt-px flex-none" aria-hidden="true">
                      ●
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={
                  "featured" in tier && tier.featured ? "accent" : "ghost"
                }
                className="mt-8 w-full justify-center"
              >
                Start a project <Arrow />
              </Button>
            </article>
          ))}
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
