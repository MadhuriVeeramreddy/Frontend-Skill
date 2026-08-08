"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Arrow, Button } from "@/components/ui";
import { site } from "@/lib/content";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            So, what can we
            <br />
            build for you<span className="stop">?</span>
          </>
        }
      >
        Send us an email or drop a message on Instagram. We read everything that comes in and reply fast with a plan.
      </PageHero>

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-10 md:grid-cols-2 lg:gap-16">
          {/* Main Direct Email Card */}
          <div className="card rise p-8 md:p-10 flex flex-col justify-between bg-paper border-[color:var(--rule)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent">
                ✉️ Direct Mail
              </div>
              <h2 className="u-display text-3xl font-extrabold mt-6">
                Send the problem directly<span className="stop">.</span>
              </h2>
              <p className="u-body mt-4">
                No forms or middle layers. Click below to launch your email app pre-addressed to our team. Describe your idea or problem, however messy.
              </p>

              <div className="mt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="u-display text-2xl md:text-3xl font-bold text-ink hover:text-accent transition-colors block break-all"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 pt-6 border-t border-[color:var(--rule)]">
              <Button href={`mailto:${site.email}`}>
                Open Email App <Arrow />
              </Button>
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn-ghost text-sm"
              >
                {copied ? "Copied! ✓" : "Copy email address"}
              </button>
            </div>
          </div>

          {/* Secondary Info & Instagram Card */}
          <div className="space-y-6 rise-far">
            {/* Instagram Card */}
            <div className="card p-8 bg-white border-[color:var(--rule)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">
                📸 Instagram DMs
              </div>
              <h3 className="u-display text-xl font-bold mt-4">Prefer Instagram?</h3>
              <p className="u-body text-sm mt-2">
                Send us a direct message on Instagram. We check DMs daily.
              </p>
              <a
                href="https://www.instagram.com/ama.responds"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
              >
                @ama.responds <Arrow />
              </a>
            </div>

            {/* What Happens Next Card */}
            <div className="card p-8 bg-white border-[color:var(--rule)]">
              <h3 className="u-label text-graphite/60">What happens next</h3>
              <ol className="mt-4 space-y-4">
                {[
                  "We read your email and ask anything that's unclear.",
                  "You get a transparent plan and quote, usually within a few days.",
                  "If it fits, we start. If it doesn't, we'll say so.",
                ].map((step, i) => (
                  <li key={step} className="u-body text-sm flex gap-3">
                    <span className="u-label flex-none pt-0.5 text-accent font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
