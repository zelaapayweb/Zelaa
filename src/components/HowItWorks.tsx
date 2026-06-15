"use client";

import { motion } from "framer-motion";
import { PlugZap, Radar, Signal } from "lucide-react";
import { SectionHeading } from "./Reveal";

const STEPS = [
  {
    icon: PlugZap,
    step: "01",
    title: "Paste or connect a wallet",
    body: "Start with a read-only wallet scan. No seed phrase. No private-key access.",
  },
  {
    icon: Radar,
    step: "02",
    title: "ZeFi maps your on-chain flow",
    body: "It analyzes approvals, swaps, contracts, bridges, gas, trading behavior, and token exposure.",
  },
  {
    icon: Signal,
    step: "03",
    title: "Get AI risk signals before you act",
    body: "Understand what is risky, why it matters, and what action you can take.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps to a protected wallet"
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
              className="relative rounded-3xl bg-white p-8 shadow-card"
            >
              <span className="absolute right-7 top-7 font-mono text-sm text-ink-faint">
                {step.step}
              </span>
              <span className="grid size-12 place-items-center rounded-2xl bg-moss-700 text-canvas">
                <step.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-[17px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
