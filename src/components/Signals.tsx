"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, ShieldAlert } from "lucide-react";
import { SectionHeading } from "./Reveal";

const SIGNALS = [
  {
    icon: ShieldCheck,
    badge: "Safe pattern",
    title: "Green — proceed",
    body: "Known protocol, normal amount, verified contract, and no unusual permission request.",
    iconClass: "bg-signal-green text-white",
    badgeClass: "bg-signal-green-soft text-signal-green",
    accent: "from-signal-green-soft/80",
    border: "border-signal-green/15",
  },
  {
    icon: Eye,
    badge: "Review recommended",
    title: "Yellow — slow down",
    body: "New counterparty, higher-than-usual slippage, unusual timing, or repeated fee leakage.",
    iconClass: "bg-signal-amber text-white",
    badgeClass: "bg-signal-amber-soft text-signal-amber",
    accent: "from-signal-amber-soft/80",
    border: "border-signal-amber/15",
  },
  {
    icon: ShieldAlert,
    badge: "High risk",
    title: "Red — do not sign",
    body: "Unlimited approval, unknown contract, fake-token risk, drainer similarity, or suspicious calldata.",
    iconClass: "bg-signal-red text-white",
    badgeClass: "bg-signal-red-soft text-signal-red",
    accent: "from-signal-red-soft/80",
    border: "border-signal-red/15",
  },
];

export function Signals() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Signals"
          title="Three signals. Zero jargon."
          subtitle="Every analysis ends in one clear signal, explained in plain language — not a wall of hex."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {SIGNALS.map((signal, i) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
              className={`flex flex-col overflow-hidden rounded-3xl border bg-white shadow-card transition-shadow hover:shadow-card-lg ${signal.border}`}
            >
              <div
                className={`flex items-center justify-between bg-gradient-to-b to-transparent px-8 pb-2 pt-8 ${signal.accent}`}
              >
                <span
                  className={`grid size-13 place-items-center rounded-2xl shadow-card ${signal.iconClass}`}
                >
                  <signal.icon className="size-6" />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${signal.badgeClass}`}
                >
                  <span className="size-1.5 rounded-full bg-current" />
                  {signal.badge}
                </span>
              </div>
              <div className="px-8 pb-8 pt-4">
                <h3 className="text-lg font-semibold text-ink">
                  {signal.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {signal.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
