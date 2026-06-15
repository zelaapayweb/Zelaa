"use client";

import { useState } from "react";
import { CheckCircle2, ScanSearch } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <section id="waitlist" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-card-lg sm:px-12 sm:py-24"
            style={{
              background: "linear-gradient(160deg, #FBF0F4 0%, #F5D8E4 35%, #EEC9D6 65%, #F5D9C8 100%)",
            }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-1/2 top-1/2 h-[32rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(247,199,217,0.45) 0%, transparent 60%)" }}
              />
              <div
                className="absolute -right-12 top-0 h-64 w-80 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(248,223,201,0.35) 0%, transparent 65%)" }}
              />
              <div
                className="absolute -left-12 bottom-0 h-56 w-72 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(246,214,226,0.40) 0%, transparent 62%)" }}
              />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="heading-section text-ink">
                Your wallet needs a second brain.
              </h2>
              <p className="body-muted mx-auto mt-5 max-w-[480px] text-ink-soft">
                Join early access for Zelaa and start protecting your crypto
                flow before the next bad signature.
              </p>

              {joined ? (
                <p className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-[12px] font-medium tracking-[-0.01em] text-signal-green shadow-card">
                  <CheckCircle2 className="size-4" />
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setJoined(true);
                  }}
                  className="mx-auto mt-9 flex w-full max-w-md flex-col gap-2.5 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@wallet.eth"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full border border-white/60 bg-white/50 px-5 py-3 text-[13px] tracking-[-0.01em] text-ink outline-none transition-colors placeholder:text-ink-ghost focus:border-dusty-pink focus:bg-white/70 backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-ink px-6 py-3 text-[12px] font-medium tracking-[-0.01em] text-white shadow-float transition-transform hover:bg-[#1B1B1B] hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Join early access
                  </button>
                </form>
              )}

              <div className="mt-5">
                <a
                  href="#product"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/35 px-5 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-ink backdrop-blur-sm transition-colors hover:bg-white/55"
                >
                  <ScanSearch className="size-3.5" />
                  Scan demo wallet
                </a>
                <p className="ui-label mt-2.5 text-ink-soft">
                  No wallet connection required for the demo.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
