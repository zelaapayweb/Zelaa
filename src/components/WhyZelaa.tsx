"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const LOSS_VECTORS = [
  "Bad approvals",
  "Fake contracts",
  "Bridge mistakes",
  "Gas leakage",
  "Failed swaps",
  "Drainer links",
  "Overtrading",
  "Hidden fees",
];

export function WhyZelaa() {
  return (
    <section className="relative overflow-hidden bg-canvas-soft py-24 sm:py-32">
      <div
        aria-hidden
        className="net-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss-500">
              Why this matters
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Crypto users don&apos;t lose money only from market crashes.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              They also lose money through rushed approvals, fake contracts,
              bridge mistakes, gas leakage, failed swaps, hidden fees, impulsive
              meme-coin entries, and wallet-draining links. Zelaa gives you a
              calm intelligence layer{" "}
              <span className="font-medium text-ink">
                before the damage happens.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap justify-center gap-2.5">
              {LOSS_VECTORS.map((vector, i) => (
                <motion.span
                  key={vector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="rounded-full border border-ink/8 bg-white px-4 py-2 text-sm text-ink-soft shadow-card"
                >
                  {vector}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
