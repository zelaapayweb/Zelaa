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
    iconClass: "bg-signal-green-soft text-signal-green",
    badgeClass: "bg-signal-green-soft text-signal-green",
    accent: "from-signal-green-soft/60",
    border: "border-border",
  },
  {
    icon: Eye,
    badge: "Review recommended",
    title: "Yellow — slow down",
    body: "New counterparty, higher-than-usual slippage, unusual timing, or repeated fee leakage.",
    iconClass: "bg-signal-amber-soft text-signal-amber",
    badgeClass: "bg-signal-amber-soft text-signal-amber",
    accent: "from-signal-amber-soft/60",
    border: "border-border",
  },
  {
    icon: ShieldAlert,
    badge: "High risk",
    title: "Red — do not sign",
    body: "Unlimited approval, unknown contract, fake-token risk, drainer similarity, or suspicious calldata.",
    iconClass: "bg-signal-red-soft text-signal-red",
    badgeClass: "bg-signal-red-soft text-signal-red",
    accent: "from-signal-red-soft/60",
    border: "border-border",
  },
];

export function Signals() {
  return (
    <section className="bg-canvas-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Signals"
          title="Three signals. Zero jargon."
          subtitle="Every analysis ends in one clear signal, explained in plain language — not a wall of hex."
        />
        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {SIGNALS.map((signal, i) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-shadow hover:shadow-card-lg ${signal.border}`}
            >
              <div className={`flex items-center justify-between bg-gradient-to-b to-transparent px-6 pb-2 pt-6 ${signal.accent}`}>
                <span className={`grid size-11 place-items-center rounded-xl shadow-card ${signal.iconClass}`}>
                  <signal.icon className="size-5" />
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.06em] ${signal.badgeClass}`}>
                  <span className="size-1.5 rounded-full bg-current" />
                  {signal.badge}
                </span>
              </div>
              <div className="px-6 pb-6 pt-3">
                <h3 className="card-title text-ink">{signal.title}</h3>
                <p className="card-copy mt-2 text-ink-soft">{signal.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
