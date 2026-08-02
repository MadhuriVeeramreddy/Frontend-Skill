import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/sections";
import { Arrow, Eyebrow, Shot } from "@/components/ui";
import { projects } from "@/lib/content";

// Every case study is known at build time, so all of them prerender as static HTML.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  // v16: params is a Promise and must be awaited.
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: "The challenge", body: project.challenge },
    { label: "What we did", body: project.approach },
    { label: "Where it landed", body: project.outcome },
  ];

  return (
    <>
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="rise max-w-3xl">
            <Eyebrow>
              {project.discipline} · {project.year}
            </Eyebrow>
            <h1 className="u-display u-h1 mt-6">
              {project.name}
              <span className="stop">.</span>
            </h1>
            <p className="u-body mt-6 max-w-measure text-[1.0625rem]">
              {project.summary}
            </p>
          </div>

          <Shot
            src={project.image}
            alt={`${project.name} — ${project.discipline}`}
            className="rise-far mt-12 aspect-[16/9]"
          />

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {sections.map((s) => (
              <div key={s.label} className="rise">
                <h2 className="u-label text-graphite/60">{s.label}</h2>
                <p className="u-body mt-3">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="rise mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-[color:var(--rule)] pt-8">
            <Link href="/work" className="footlink u-label">
              ← All projects
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="btn btn-ghost group/next"
            >
              Next: {next.name} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
