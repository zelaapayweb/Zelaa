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
    <section id="intelligence" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Coverage"
          title="What Zelaa watches"
          subtitle="One sentinel across everything that can quietly damage a portfolio on-chain."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group rounded-3xl border border-ink/5 bg-canvas-soft/60 p-7 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-card-lg"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-white text-moss-700 shadow-card transition-colors group-hover:bg-moss-700 group-hover:text-canvas">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
