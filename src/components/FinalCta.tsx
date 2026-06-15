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
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center shadow-card-lg sm:px-12 sm:py-24">
            {/* Backdrop: grid + moss glow */}
            <div aria-hidden className="absolute inset-0">
              <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
              <div className="absolute -bottom-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#6c7f5c_0%,transparent_65%)] opacity-50 blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-canvas sm:text-5xl">
                Your wallet needs a second brain.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-canvas/70">
                Join early access for ZeFi and start protecting your crypto
                flow before the next bad signature.
              </p>

              {joined ? (
                <p className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-signal-green-soft px-6 py-4 text-sm font-medium text-signal-green">
                  <CheckCircle2 className="size-4.5" />
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setJoined(true);
                  }}
                  className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@wallet.eth"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-[15px] text-canvas outline-none transition-colors placeholder:text-canvas/40 focus:border-moss-300"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-canvas px-7 py-4 text-[15px] font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Join early access
                  </button>
                </form>
              )}

              <div className="mt-6">
                <a
                  href="#product"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-canvas/85 transition-colors hover:bg-white/10 hover:text-canvas"
                >
                  <ScanSearch className="size-4" />
                  Scan demo wallet
                </a>
                <p className="mt-3 text-[13px] text-canvas/50">
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
