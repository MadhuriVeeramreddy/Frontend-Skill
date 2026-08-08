import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection, FaqSection } from "@/components/sections";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, AI automation, MVPs and apps, brand and identity. Four things, done properly.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Ask us for any
            <br />
            of these<span className="stop">.</span>
          </>
        }
      >
        Four things, done properly. If your problem sits between two of them,
        that&apos;s usually the interesting one, ask anyway.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-shell space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card rise grid gap-8 p-8 md:grid-cols-[auto_1fr] lg:p-10"
            >
              <p className="u-label text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="u-display u-h3">{s.title}</h2>
                <p className="u-body mt-3 max-w-measure text-[1.0625rem]">
                  {s.blurb}
                </p>
                <p className="u-body mt-4 max-w-measure">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection />
      <CtaSection />
    </>
  );
}
