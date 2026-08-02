import { stats } from "@/lib/content";
import { Arrow, Button, Eyebrow, SectionHead, Shot } from "@/components/ui";
import {
  CtaSection,
  FaqSection,
  ServicesSection,
  TestimonialsSection,
  TrustedStrip,
  WorkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-shell items-center gap-x-16 gap-y-12 px-6 pb-20 pt-16 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:pb-28">
          <div className="rise">
            <Eyebrow>Web · Apps · AI · MVPs</Eyebrow>

            <h1 className="u-display u-h1 mt-7">
              Ask us anything
              <br />
              <span className="text-accent">we&apos;ll build it.</span>
            </h1>

            <p className="u-body mt-7 max-w-[46ch]">
              A small studio for web design, AI automation, MVPs and apps. Send
              the problem; we send a plan.
            </p>

            <div className="mt-9">
              <Button href="/contact">
                Start a project <Arrow />
              </Button>
            </div>

            <div
              className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-[color:var(--rule)] bg-white/55 p-3 pr-5"
              style={{ boxShadow: "var(--lift-1)" }}
            >
              <div className="flex -space-x-2.5">
                {[0, 1, 2, 3].map((i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src="https://placehold.co/72x72/C7BFAE/C7BFAE"
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium leading-tight">
                  40+ projects shipped
                </p>
                <p className="u-label mt-1 text-graphite/70">
                  <span className="text-accent">★★★★★</span> 4.9/5 · 28 reviews
                </p>
              </div>
            </div>
          </div>

          <Shot
            src="https://placehold.co/1000x800"
            alt="The A.M.A studio team working through a client problem at a table"
            className="rise-far aspect-[4/3] w-full lg:aspect-[5/4]"
            caption="A conversation before a company"
          />
        </div>
      </section>

      <TrustedStrip />

      {/* ---- About ---- */}
      <section id="about" className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-shell">
          <SectionHead
            eyebrow="About the studio"
            title={
              <>
                We answer fast, ship small,
                <br className="hidden md:block" /> and fix it in daylight
                <span className="stop">.</span>
              </>
            }
          />

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Shot
              src="https://placehold.co/900x680"
              alt="Two A.M.A designers reviewing a build on a laptop"
              className="rise-far aspect-[4/3]"
            />

            <div className="rise">
              <p className="u-body max-w-measure">
                Most agencies answer with a deck. We answer with a plan, then a
                working thing you can click. You talk to the people building it
                — no account layer, no handoff, no &ldquo;per our last
                email&rdquo;.
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

              <Button href="/contact" variant="ink" className="mt-10">
                Start a project <Arrow />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WorkSection limit={4} />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
