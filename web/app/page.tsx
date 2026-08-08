import Link from "next/link";
import { stats } from "@/lib/content";
import { Arrow, Button, Eyebrow, SectionHead } from "@/components/ui";
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
            <div className="inline-flex items-center gap-3 flex-wrap">
              <Eyebrow>Web · Apps · AI Bots · AR · NFC</Eyebrow>
              <span className="font-handwritten text-lg text-accent font-bold -rotate-2">
                ✨ Hand-crafted studio · 🇮🇳 Made in India
              </span>
            </div>

            <h1 className="u-display u-h1 mt-7">
              Ask us anything
              <br />
              <span className="text-accent doodle-underline">we&apos;ll build it.</span>
            </h1>

            <p className="u-body mt-7 max-w-[46ch]">
              A small studio for web design, AI automation, MVPs and apps. Send the problem; we send a plan.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/contact">
                Start a project <Arrow />
              </Button>
              <Button href="/work" variant="ghost">
                Explore our work
              </Button>
            </div>

            {/* Anonymous Team Badge */}
            <div
              className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-[color:var(--rule)] bg-white/80 p-3.5 pr-6"
              style={{ boxShadow: "var(--lift-1)" }}
            >
              <div className="flex -space-x-3">
                <div className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-tr from-pink-500 to-rose-400 text-white font-bold text-xs shadow-sm">
                  <span>🎨</span>
                </div>
                <div className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-tr from-amber-500 to-orange-400 text-white font-bold text-xs shadow-sm">
                  <span>⚡</span>
                </div>
                <div className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-bold text-xs shadow-sm">
                  <span>🤖</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight flex items-center gap-2">
                  Direct Engineers. Zero Middlemen.
                </p>
                <p className="font-handwritten text-accent text-sm leading-tight mt-0.5">
                  &ldquo;You talk directly to the people building your code!&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Hero Board Illustration */}
          <div className="rise-far relative">
            <div
              className="shot aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[color:var(--rule)] bg-paper p-8 lg:aspect-[5/4]"
              style={{ boxShadow: "var(--lift-3)" }}
            >
              <div className="h-full w-full rounded-2xl border-2 border-dashed border-ink/20 p-6 flex flex-col justify-between bg-white/75 relative">
                <div className="absolute -top-3 -right-3 rounded-full bg-accent text-white px-3 py-1 text-xs font-mono tracking-wide shadow-md rotate-6">
                  100% HANDMADE
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="u-label text-ink/60">A.M.A Studio Board</span>
                    <span className="font-handwritten text-xl text-accent font-bold">
                      ~ 5-day prototype magic ~
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-raised border border-linen">
                      <span className="text-xs font-mono text-ink/70">WEB &amp; APPS</span>
                      <p className="text-sm font-semibold mt-1">High-performance portals</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-raised border border-linen">
                      <span className="text-xs font-mono text-ink/70">AI AUTOMATION</span>
                      <p className="text-sm font-semibold mt-1">Smart bots &amp; workflows</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-raised border border-linen">
                      <span className="text-xs font-mono text-ink/70">HARDWARE &amp; NFC</span>
                      <p className="text-sm font-semibold mt-1">Tap-to-connect cards</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-raised border border-linen">
                      <span className="text-xs font-mono text-ink/70">SPATIAL &amp; AR</span>
                      <p className="text-sm font-semibold mt-1">Browser-based 3D views</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/10 flex items-center justify-between">
                  <span className="font-handwritten text-lg text-ink/80">
                    &ldquo;Send the problem, we ship the solution.&rdquo;
                  </span>
                  <span className="u-label text-accent font-bold">A.M.A CREW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedStrip />

      {/* ---- About & Studio Crew ---- */}
      <section id="about" className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-shell">
          <SectionHead
            eyebrow="Meet the Studio"
            title={
              <>
                Dedicated builders.
                <br className="hidden md:block" /> No bloated decks.
                <br className="hidden md:block" /> Direct line to engineers
                <span className="stop">.</span>
              </>
            }
          >
            We are a digital product studio built to solve complex problems through clean code, modern design, and fast prototypes. If you can imagine it, we can build it.
          </SectionHead>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Person 1: UI/UX & AR */}
            <div className="card rise p-7 relative overflow-hidden group hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center text-xl font-bold shadow-md">
                  🎨
                </div>
                <span className="u-label text-accent font-bold">UI / UX</span>
              </div>
              <h3 className="u-display text-xl mt-5 font-bold">UI/UX &amp; AR Specialist</h3>
              <p className="u-body text-sm mt-2 text-graphite/80">
                Crafts pixel-perfect interfaces, brand identity systems, and immersive WebAR spatial 3D experiences.
              </p>
              <div className="mt-5 pt-4 border-t border-[color:var(--rule)] flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">WebAR</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">UI Motion</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">Brand Design</span>
              </div>
            </div>

            {/* Person 2: Systems & Dental Apps */}
            <div className="card rise p-7 relative overflow-hidden group hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center text-xl font-bold shadow-md">
                  ⚡
                </div>
                <span className="u-label text-accent font-bold">FULL STACK</span>
              </div>
              <h3 className="u-display text-xl mt-5 font-bold">Systems &amp; App Architect</h3>
              <p className="u-body text-sm mt-2 text-graphite/80">
                Engineers dental clinic management portals, custom NFC tap-card profiles, high-traffic APIs &amp; databases.
              </p>
              <div className="mt-5 pt-4 border-t border-[color:var(--rule)] flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">Next.js</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">Dental Apps</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">NFC Tech</span>
              </div>
            </div>

            {/* Person 3: AI & WhatsApp Bots */}
            <div className="card rise p-7 relative overflow-hidden group hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center text-xl font-bold shadow-md">
                  🤖
                </div>
                <span className="u-label text-accent font-bold">AI BOTS</span>
              </div>
              <h3 className="u-display text-xl mt-5 font-bold">AI &amp; Bot Automation Engineer</h3>
              <p className="u-body text-sm mt-2 text-graphite/80">
                Builds smart WhatsApp fitness trainer bots, automated intake funnels, and custom AI agent workflows.
              </p>
              <div className="mt-5 pt-4 border-t border-[color:var(--rule)] flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">WhatsApp API</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">Python</span>
                <span className="px-2.5 py-1 rounded-md bg-paper text-xs font-mono text-ink">AI Automation</span>
              </div>
            </div>
          </div>

          <div className="mt-14 card bg-paper/50 p-8">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="u-label mt-2 text-graphite/60">{s.label}</dt>
                  <dd className="u-display text-4xl font-extrabold leading-none">
                    {s.value}
                    <span className="stop">{s.suffix}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 pt-6 border-t border-[color:var(--rule)] flex justify-center">
              <div className="flex flex-col-reverse text-center">
                <dt className="u-label mt-2 text-graphite/60 font-semibold">{stats[4].label}</dt>
                <dd className="u-display text-4xl font-extrabold leading-none text-accent">
                  {stats[4].value}
                  <span className="stop">{stats[4].suffix}</span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Manifesto & Tech Stack ---- */}
      <section id="manifesto" className="px-6 py-20 bg-ink text-paper relative overflow-hidden">
        <div className="mx-auto max-w-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="rise">
              <span className="u-label text-accent tracking-widest font-bold">STUDIO MANIFESTO</span>
              <h2 className="u-display text-3xl md:text-4xl lg:text-5xl mt-5 font-bold leading-tight">
                Ship small, talk straight, and build software that lives in the real world<span className="text-accent">.</span>
              </h2>
              <p className="mt-6 text-linen/90 leading-relaxed text-lg">
                We don’t do 50-page decks or 6-month discovery phases. We take your problem, write the code, and give you something real to click within days.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="flex-none h-8 w-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm">1</span>
                  <div>
                    <h4 className="font-bold text-white">Ask us anything</h4>
                    <p className="text-sm text-linen/80">Send your idea via raw text, voice note, or napkin sketch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="flex-none h-8 w-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm">2</span>
                  <div>
                    <h4 className="font-bold text-white">5-Day Prototype</h4>
                    <p className="text-sm text-linen/80">We send back a scope, fixed price, and a working demo link.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="flex-none h-8 w-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm">3</span>
                  <div>
                    <h4 className="font-bold text-white">Ship &amp; Scale</h4>
                    <p className="text-sm text-linen/80">We launch to production with zero bloated retainer traps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rise-far bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="u-label text-linen/70 uppercase tracking-wider">Technologies We Build With</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">FRONTEND</span>
                  <span className="font-semibold text-white text-sm">Next.js &amp; React</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">STYLING</span>
                  <span className="font-semibold text-white text-sm">Tailwind CSS</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">AR &amp; SPATIAL</span>
                  <span className="font-semibold text-white text-sm">Three.js / WebAR</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">AI &amp; BOTS</span>
                  <span className="font-semibold text-white text-sm">WhatsApp API</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">HARDWARE</span>
                  <span className="font-semibold text-white text-sm">Web NFC Tech</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10">
                  <span className="text-xs font-mono text-accent block">BACKEND</span>
                  <span className="font-semibold text-white text-sm">Node &amp; Python</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <span className="font-handwritten text-xl text-accent">
                  &ldquo;Built clean. No legacy tech debt.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WorkSection limit={6} />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
