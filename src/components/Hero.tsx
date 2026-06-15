"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Ban,
  ChevronRight,
  CircleDot,
  Eye,
  Fuel,
  FileKey2,
  KeyRound,
  Lock,
  MousePointerClick,
  Repeat,
  ScanSearch,
  ShieldAlert,
  SlidersHorizontal,
  Waypoints,
} from "lucide-react";
import { ChainBadge, RiskBadge } from "./ui";
import { HeroWaves } from "./HeroWaves";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const TRUST_PILLS = [
  { icon: Eye, label: "Read-only scan" },
  { icon: Lock, label: "Non-custodial" },
  { icon: KeyRound, label: "Never asks for seed phrase" },
  { icon: MousePointerClick, label: "User approves every action" },
];

const DETECTED = [
  "Unlimited token approval",
  "New contract interaction",
  "No verified protocol history",
  "Similar pattern to known drainer approvals",
];

const FLOATERS = [
  {
    icon: Fuel,
    title: "Gas leakage",
    body: "$248 this month",
    pos: "left-[1.5%] top-[12%] xl:left-[3%]",
    drift: 9,
    delay: 0.9,
  },
  {
    icon: FileKey2,
    title: "Approval exposure",
    body: "4 high-risk contracts",
    pos: "right-[1.5%] top-[16%] xl:right-[3%]",
    drift: 7,
    delay: 1.05,
  },
  {
    icon: Waypoints,
    title: "Bridge warning",
    body: "Destination chain mismatch",
    pos: "left-[1.5%] bottom-[6%] xl:left-[3%]",
    drift: 8,
    delay: 1.2,
  },
  {
    icon: Repeat,
    title: "Wallet pattern",
    body: "Overtrading detected",
    pos: "right-[1.5%] bottom-[8%] xl:right-[3%]",
    drift: 6,
    delay: 1.35,
  },
];

function FloaterContent({ f }: { f: (typeof FLOATERS)[number] }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-canvas-soft text-ink-soft">
        <f.icon className="size-4" />
      </span>
      <div>
        <p className="card-title text-ink">{f.title}</p>
        <p className="ui-label mt-0.5 text-ink-faint">{f.body}</p>
      </div>
    </div>
  );
}

function PreSignMockup() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-card-lg">
      <div className="flex items-center justify-between border-b border-border px-6 py-3.5 sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-ink text-white">
            <ShieldAlert className="size-4" />
          </span>
          <p className="card-title text-ink">Pre-sign check</p>
        </div>
        <RiskBadge level="high" />
      </div>

      <div className="px-6 py-5 sm:px-8">
        <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow text-ink-faint">Transaction</span>
              <span className="card-title text-right text-ink">Approve unlimited USDC</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow text-ink-faint">Contract</span>
              <span className="tabular font-mono text-[12px] text-ink">0x8f3…91A2</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow text-ink-faint">Chain</span>
              <ChainBadge chain="Ethereum" />
            </div>
          </div>

          {/* Risk score */}
          <div className="rounded-xl border border-border bg-canvas-soft/60 p-4">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">Risk score</span>
              <span className="tabular text-[13px] font-medium text-signal-red">
                87<span className="text-[11px] font-normal text-ink-faint"> / 100</span>
              </span>
            </div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-dusty-pink to-signal-red"
              />
            </div>
            <p className="card-copy mt-2 text-ink-faint">
              High-risk approval pattern for this wallet.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-signal-red-soft/70 p-4">
          <p className="eyebrow text-signal-red">Detected</p>
          <ul className="mt-2.5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {DETECTED.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                className="card-copy flex items-start gap-2 text-ink"
              >
                <CircleDot className="mt-0.5 size-3.5 shrink-0 text-signal-red" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-3 rounded-xl border border-border bg-canvas-soft/60 px-4 py-3">
          <p className="eyebrow text-ink-faint">Suggested action</p>
          <p className="card-title mt-0.5 text-ink">Reject transaction or limit approval</p>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-white transition-transform hover:bg-[#1B1B1B] hover:scale-[1.02] active:scale-[0.98]">
            <Ban className="size-3.5" />
            Reject
          </button>
          <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-canvas-soft px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-ink transition-colors hover:bg-white">
            <SlidersHorizontal className="size-3.5" />
            Limit approval
          </button>
          <button className="inline-flex flex-1 items-center justify-center gap-1 rounded-full px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-ink-faint transition-colors hover:text-ink">
            Continue anyway
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="product" className="relative overflow-hidden bg-white pt-28 sm:pt-36">
      <HeroWaves />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-[760px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-medium tracking-[0.04em] uppercase text-ink-soft"
          >
            <span className="size-1.5 rounded-full bg-dusty-pink" />
            AI wallet sentinel — early access open
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="heading-hero mt-6 text-ink"
          >
            Stop risky crypto decisions{" "}
            <span className="text-ink-soft">before you sign.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            className="body-muted mx-auto mt-6 max-w-[520px] text-ink-soft"
          >
            Zelaa is an AI wallet sentinel that scans approvals, swaps, bridges,
            gas leakage, contracts, and on-chain behavior before they damage
            your portfolio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
          >
            <a
              href="#risk-engine"
              className="w-full rounded-full bg-ink px-7 py-3 text-[12px] font-medium tracking-[-0.01em] text-white transition-all hover:bg-[#1B1B1B] hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
            >
              Scan wallet
            </a>
            <a
              href="#waitlist"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white px-7 py-3 text-[12px] font-medium tracking-[-0.01em] text-ink transition-colors hover:bg-canvas-soft sm:w-auto"
            >
              Join early access
              <ArrowUpRight className="size-3.5" />
            </a>
          </motion.div>

          {/* Scanner */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full border border-border bg-white p-1.5 pl-5 shadow-card"
          >
            <ScanSearch className="size-4 shrink-0 text-ink-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Paste wallet, contract, token, or transaction hash"
              className="min-w-0 flex-1 bg-transparent text-[13px] tracking-[-0.01em] text-ink outline-none placeholder:text-ink-faint"
              aria-label="Wallet, contract, token, or transaction hash"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-white transition-all hover:bg-[#1B1B1B] hover:scale-[1.04] active:scale-[0.97] sm:px-6"
            >
              Analyze
            </button>
          </motion.form>

          {/* Trust pills */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {TRUST_PILLS.map((pill) => (
              <li
                key={pill.label}
                className="flex items-center gap-1.5 text-[11px] font-medium tracking-[-0.01em] text-ink-faint"
              >
                <pill.icon className="size-3.5 text-ink-ghost" />
                {pill.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero visual panel */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-canvas-cream p-5 shadow-card-lg sm:mt-16 sm:p-8 lg:p-12"
        >
          <div aria-hidden className="absolute inset-0">
            <div
              className="absolute -bottom-24 -left-24 h-72 w-96 rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(247,199,217,0.30) 0%, transparent 65%)" }}
            />
            <div
              className="absolute -bottom-28 -right-24 h-80 w-[26rem] rounded-full blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(248,223,201,0.25) 0%, transparent 65%)" }}
            />
          </div>

          <div className="relative z-10 flex justify-center py-2 sm:py-4">
            <PreSignMockup />
          </div>

          <div className="absolute inset-0 hidden lg:block">
            {FLOATERS.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: f.delay, ease: EASE }}
                className={`absolute ${f.pos}`}
              >
                <motion.div
                  animate={{ y: [0, -f.drift, 0] }}
                  transition={{ duration: 7, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
                  className="glass rounded-xl p-4 shadow-float"
                >
                  <FloaterContent f={f} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-2 lg:hidden">
            {FLOATERS.map((f) => (
              <div key={f.title} className="glass rounded-xl p-4 shadow-card">
                <FloaterContent f={f} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
