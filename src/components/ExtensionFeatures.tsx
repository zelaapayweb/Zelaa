"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  ScanLine,
  BookOpen,
  Activity,
  Gauge,
  Play,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const FEATURES = [
  {
    icon: ShieldAlert,
    title: "Pre-sign warnings",
    body: "Zelaa intercepts approval and swap transactions and shows AI risk signals before you confirm — not after.",
  },
  {
    icon: ScanLine,
    title: "Approval scanner",
    body: "Review all active approvals across your wallets and chains. Identify risky spenders and revoke with one click.",
  },
  {
    icon: BookOpen,
    title: "Transaction explainers",
    body: "Every transaction decoded in plain language — method call, spender, amount, expected outcome, and risk.",
  },
  {
    icon: Activity,
    title: "Wallet behavior context",
    body: "Zelaa remembers your signing history and surfaces patterns: repeated risks, high-loss sequences, unusual behavior.",
  },
  {
    icon: Gauge,
    title: "Gas leakage insights",
    body: "Track cumulative gas waste, overpayment on failed transactions, and recurring fee-heavy patterns over time.",
  },
  {
    icon: Play,
    title: "Demo mode",
    body: "Try Zelaa on sample high-risk transactions before installing. See exactly how the signals work — no wallet needed.",
  },
];

export function ExtensionFeatures() {
  return (
    <section className="bg-canvas-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Extension features"
          title="Everything you need at the signing moment."
          subtitle="Built specifically for the browser — where wallets live and transactions happen."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-canvas-muted text-ink-soft transition-colors group-hover:bg-ink group-hover:text-white">
                <feature.icon className="size-4.5" />
              </span>
              <h3 className="card-title mt-4 text-ink">{feature.title}</h3>
              <p className="card-copy mt-1.5 text-ink-soft">{feature.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
