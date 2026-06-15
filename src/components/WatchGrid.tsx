"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  FileKey2,
  FileCode2,
  ArrowLeftRight,
  Fuel,
  CandlestickChart,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: Wallet,
    title: "Wallet activity",
    body: "Tracks inflows, outflows, failed transactions, new counterparties, and unusual wallet behavior.",
  },
  {
    icon: FileKey2,
    title: "Token approvals",
    body: "Finds unlimited approvals, stale permissions, suspicious spenders, and revoke opportunities.",
  },
  {
    icon: FileCode2,
    title: "Smart contract interactions",
    body: "Flags unknown contracts, risky permissions, unusual calldata, and verified-contract gaps.",
  },
  {
    icon: ArrowLeftRight,
    title: "Swaps and bridges",
    body: "Detects bad routes, high slippage, bridge mismatch, fake tokens, and repeated failed swaps.",
  },
  {
    icon: Fuel,
    title: "Gas and fee leakage",
    body: "Shows how much value is being lost through gas, failed trades, bridge fees, and overtrading.",
  },
  {
    icon: CandlestickChart,
    title: "Trading behavior",
    body: "Detects impulsive entries, repeated small losses, risky meme-coin patterns, and portfolio drift.",
  },
];

export function WatchGrid() {
  return (
    <section id="intelligence" className="bg-canvas-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Coverage"
          title="What Zelaa watches"
          subtitle="One sentinel across everything that can quietly damage a portfolio on-chain."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-canvas-muted text-ink-soft shadow-card transition-colors group-hover:bg-ink group-hover:text-white">
                <item.icon className="size-4.5" />
              </span>
              <h3 className="card-title mt-4 text-ink">{item.title}</h3>
              <p className="card-copy mt-2 text-ink-soft">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
