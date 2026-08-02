import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects we'd show you first. Each one started as a question and ended as something shipped.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title={
          <>
            Work we&apos;d show
            <br />
            you first<span className="stop">.</span>
          </>
        }
      >
        Everything here shipped. Each one started as a question someone sent us,
        usually a messy one.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
