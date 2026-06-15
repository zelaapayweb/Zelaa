"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Rocket,
  WalletCards,
  Waypoints,
  Images,
  Users,
} from "lucide-react";
import { SectionHeading } from "./Reveal";

const ITEMS = [
  {
    icon: Layers,
    title: "DeFi users",
    body: "Managing approvals, liquidity positions, farms, and protocol interactions.",
  },
  {
    icon: Rocket,
    title: "Meme coin traders",
    body: "Catching fake tokens, bad routes, rushed entries, and repeated small losses.",
  },
  {
    icon: WalletCards,
    title: "Multi-wallet users",
    body: "Tracking risk across active wallets, vaults, burner wallets, and trading wallets.",
  },
  {
    icon: Waypoints,
    title: "Bridge users",
    body: "Spotting bridge fees, destination mismatch, failed routes, and cross-chain exposure.",
  },
  {
    icon: Images,
    title: "NFT and token collectors",
    body: "Avoiding fake mints, suspicious approvals, and unknown marketplace contracts.",
  },
  {
    icon: Users,
    title: "Crypto teams",
    body: "Monitoring treasury wallets, risky permissions, and unusual outflows.",
  },
];

export function Audience() {
  return (
    <section className="bg-canvas-blush py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who it's for"
          title="Made for high-velocity crypto users."
          subtitle="If your wallet moves fast, Zelaa helps you slow down before the wrong signature."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-canvas-muted text-ink-soft transition-colors group-hover:bg-ink group-hover:text-white">
                <item.icon className="size-4.5" />
              </span>
              <h3 className="card-title mt-4 text-ink">{item.title}</h3>
              <p className="card-copy mt-1.5 text-ink-soft">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
