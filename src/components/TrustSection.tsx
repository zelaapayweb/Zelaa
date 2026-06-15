"use client";

import { motion } from "framer-motion";
import {
  Eye,
  KeyRound,
  Vault,
  MousePointerClick,
  FileKey2,
  MessageSquareText,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: Eye,
    title: "Read-only wallet analysis",
    body: "Start with wallet addresses and public on-chain data.",
  },
  {
    icon: KeyRound,
    title: "No seed phrase, ever",
    body: "Zelaa never asks you to enter seed phrases or private keys.",
  },
  {
    icon: Vault,
    title: "Non-custodial by design",
    body: "Zelaa does not hold, move, or custody user funds.",
  },
  {
    icon: MousePointerClick,
    title: "You approve every action",
    body: "Zelaa explains risk. You remain in control of every signature.",
  },
  {
    icon: FileKey2,
    title: "Permission-aware",
    body: "Spot unlimited approvals, stale spenders, and risky contract permissions.",
  },
  {
    icon: MessageSquareText,
    title: "Explainable AI signals",
    body: "Every warning includes the reason, not just a scary score.",
  },
];

export function TrustSection() {
  return (
    <section id="security" className="relative overflow-hidden bg-canvas-blush py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,199,217,0.18) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Security model"
          title="Built to watch, never touch."
          subtitle="Zelaa analyzes risk without asking for control of your wallet."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="flex items-start gap-3.5 rounded-2xl border border-border bg-white p-5 shadow-card"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-canvas-muted text-ink-soft">
                <item.icon className="size-4.5" />
              </span>
              <div>
                <h3 className="card-title text-ink">{item.title}</h3>
                <p className="card-copy mt-1.5 text-ink-soft">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
