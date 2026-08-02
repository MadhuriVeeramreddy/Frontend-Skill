import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaSection, TrustedStrip } from "@/components/sections";
import { Shot } from "@/components/ui";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "A.M.A is a small studio that answers fast, ships small, and fixes it in daylight.",
};

const principles = [
  {
    title: "Clear",
    body: "Short sentences. Real nouns. No “leverage”, no “solutions”.",
  },
  {
    title: "Warm",
    body: "We talk to one person. Everything reads like a human wrote it, because one did.",
  },
  {
    title: "Confident",
    body: "We state the answer and skip the hedge. If we don't know, we say so — then find out.",
  },
  {
    title: "Playful",
    body: "One good line beats a paragraph. A little wink — never a joke about the reader.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A conversation
            <br />
            before a company<span className="stop">.</span>
          </>
        }
      >
        A.M.A stands for Ask Me Anything. It captures what we do: make life
        easier by making the answer a conversation away.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Shot
            src="https://placehold.co/900x680"
            alt="The A.M.A team at work"
            className="rise-far aspect-[4/3]"
          />
          <div className="rise">
            <h2 className="u-display u-h2">
              Small on purpose<span className="stop">.</span>
            </h2>
            <p className="u-body mt-6 max-w-measure">
              Most agencies answer with a deck. We answer with a plan, then a
              working thing you can click. You talk to the people building it —
              no account layer, no handoff, no “per our last email”.
            </p>
            <p className="u-body mt-4 max-w-measure">
              That only works at our size, which is why we intend to stay this
              size. It means we take fewer projects and finish the ones we take.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="u-label mt-3 text-graphite/60">{s.label}</dt>
                  <dd className="u-display text-[3.25rem] font-extrabold leading-none">
                    {s.value}
                    <span className="stop">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:pb-28">
        <div className="mx-auto max-w-shell">
          <h2 className="u-display u-h2 rise max-w-xl">
            How we sound<span className="stop">.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="card rise p-7">
                <h3 className="u-display text-[1.375rem]">{p.title}</h3>
                <p className="u-body mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedStrip />
      <div className="pt-20 lg:pt-28" />
      <CtaSection />
    </>
  );
}
