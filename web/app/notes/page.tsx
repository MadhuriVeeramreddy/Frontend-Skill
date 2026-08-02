import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection } from "@/components/sections";
import { notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short pieces on how we work, written between projects.",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function NotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes"
        title={
          <>
            Written between
            <br />
            projects<span className="stop">.</span>
          </>
        }
      >
        Short pieces on how we work — mostly arguments we&apos;ve had with
        ourselves and settled.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <ul className="mx-auto max-w-3xl divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
          {notes.map((note) => (
            <li key={note.slug} className="rise py-8">
              <p className="u-label text-graphite/60">
                <time dateTime={note.date}>{formatDate(note.date)}</time>
              </p>
              <h2 className="u-display u-h3 mt-3">{note.title}</h2>
              <p className="u-body mt-3 max-w-measure">{note.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  );
}
