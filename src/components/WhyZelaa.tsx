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
        className="net-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-ink-faint">Why this matters</p>
            <h2 className="heading-section mt-3 text-ink">
              Crypto users don&apos;t lose money only from market crashes.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="body-muted mx-auto mt-5 max-w-2xl text-ink-soft">
              They also lose money through rushed approvals, fake contracts, bridge mistakes,
              gas leakage, failed swaps, hidden fees, impulsive meme-coin entries, and
              wallet-draining links. Zelaa gives you a calm intelligence layer{" "}
              <span className="font-medium text-ink">before the damage happens.</span>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {LOSS_VECTORS.map((vector, i) => (
                <motion.span
                  key={vector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.01em] text-ink-soft shadow-card"
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
