"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const WALLETS = [
  { name: "MetaMask" },
  { name: "Phantom" },
  { name: "Rabby" },
  { name: "Coinbase Wallet" },
  { name: "OKX Wallet" },
  { name: "WalletConnect" },
];

const CHAINS = [
  { name: "Ethereum" },
  { name: "Base" },
  { name: "Solana" },
  { name: "BNB Chain" },
];

function Pill({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-ink-soft shadow-card"
    >
      <span className="size-1.5 rounded-full bg-ink-ghost" />
      {name}
    </motion.span>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-canvas-soft py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-center text-ink-faint">
            Works with the wallets you already use
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {WALLETS.map((w, i) => (
            <Pill key={w.name} name={w.name} delay={i * 0.06} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {CHAINS.map((c, i) => (
            <Pill key={c.name} name={c.name} delay={0.36 + i * 0.06} />
          ))}
        </div>
        <Reveal delay={0.5}>
          <p className="mt-5 text-center text-[11px] tracking-[-0.01em] text-ink-ghost">
            Compatibility reflects current development targets. More chains and wallets in progress.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
