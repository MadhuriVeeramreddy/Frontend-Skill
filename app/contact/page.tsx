import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send the problem, however messy. We'll send back a plan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            So — what can we
            <br />
            build for you<span className="stop">?</span>
          </>
        }
      >
        Send the problem, however messy. We&apos;ll send back a plan — usually
        within a week, often sooner.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          {/*
            Netlify Forms: the data-netlify attribute plus the hidden form-name
            field is all the wiring this needs — no backend, no API route.
          */}
          <form
            name="enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rise"
          >
            <input type="hidden" name="form-name" value="enquiry" />
            <p className="hidden">
              <label>
                Leave this empty: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="u-label text-graphite/60">Your name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-[color:var(--rule)] px-4 py-3 text-base outline-none"
                />
              </label>
              <label className="block">
                <span className="u-label text-graphite/60">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[color:var(--rule)] px-4 py-3 text-base outline-none"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="u-label text-graphite/60">
                What are you trying to do?
              </span>
              <textarea
                required
                name="problem"
                rows={6}
                placeholder="However messy is fine."
                className="mt-2 w-full rounded-xl border border-[color:var(--rule)] px-4 py-3 text-base outline-none"
              />
            </label>

            <button type="submit" className="btn btn-accent mt-7">
              Send the problem <Arrow />
            </button>
          </form>

          <aside className="rise">
            <h2 className="u-display u-h3">
              Or just email us<span className="stop">.</span>
            </h2>
            <p className="u-body mt-4">
              No form required. We read everything that comes in, and you get a
              human reply.
            </p>
            <p className="mt-6">
              <a href={`mailto:${site.email}`} className="footlink u-display text-[1.375rem]">
                {site.email}
              </a>
            </p>
            <p className="u-label mt-3 text-graphite/60">{site.phone}</p>

            <div className="card mt-10 p-6">
              <h3 className="u-label text-graphite/60">What happens next</h3>
              <ol className="mt-4 space-y-3">
                {[
                  "We read it and ask anything that's unclear.",
                  "You get a plan with a fixed number, usually within a week.",
                  "If it fits, we start. If it doesn't, we'll say so.",
                ].map((step, i) => (
                  <li key={step} className="u-body flex gap-3">
                    <span className="u-label flex-none pt-1 text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
