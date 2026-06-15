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
    tone: "bg-signal-amber-soft text-signal-amber",
    pos: "left-[1.5%] top-[12%] xl:left-[3%]",
    drift: 9,
    delay: 0.9,
  },
  {
    icon: FileKey2,
    title: "Approval exposure",
    body: "4 high-risk contracts",
    tone: "bg-signal-red-soft text-signal-red",
    pos: "right-[1.5%] top-[16%] xl:right-[3%]",
    drift: 7,
    delay: 1.05,
  },
  {
    icon: Waypoints,
    title: "Bridge warning",
    body: "Destination chain mismatch",
    tone: "bg-signal-red-soft text-signal-red",
    pos: "left-[1.5%] bottom-[6%] xl:left-[3%]",
    drift: 8,
    delay: 1.2,
  },
  {
    icon: Repeat,
    title: "Wallet pattern",
    body: "Overtrading detected",
    tone: "bg-signal-amber-soft text-signal-amber",
    pos: "right-[1.5%] bottom-[8%] xl:right-[3%]",
    drift: 6,
    delay: 1.35,
  },
];

function FloaterContent({ f }: { f: (typeof FLOATERS)[number] }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${f.tone}`}>
        <f.icon className="size-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{f.title}</p>
        <p className="mt-0.5 text-sm text-ink-soft">{f.body}</p>
      </div>
    </div>
  );
}

function PreSignMockup() {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-card-lg">
      <div className="flex items-center justify-between border-b border-ink/5 px-6 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-canvas">
            <ShieldAlert className="size-4.5" />
          </span>
          <p className="text-[15px] font-semibold text-ink">Pre-sign check</p>
        </div>
        <RiskBadge level="high" />
      </div>

      <div className="px-6 py-6 sm:px-8">
        <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Transaction
              </span>
              <span className="text-right text-[15px] font-medium text-ink">
                Approve unlimited USDC
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Contract
              </span>
              <span className="font-mono text-sm text-ink">0x8f3…91A2</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Chain
              </span>
              <ChainBadge chain="Ethereum" />
            </div>
          </div>

          {/* Risk score */}
          <div className="rounded-2xl border border-ink/5 bg-canvas-soft/70 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                Risk score
              </span>
              <span className="text-[15px] font-semibold text-signal-red">
                87<span className="text-sm font-normal text-ink-faint"> / 100</span>
              </span>
            </div>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-ink/8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-signal-amber to-signal-red"
              />
            </div>
            <p className="mt-2 text-[13px] leading-snug text-ink-soft">
              High-risk approval pattern for this wallet.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-signal-red-soft/60 p-5">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-signal-red">
            Detected
          </p>
          <ul className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {DETECTED.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                className="flex items-start gap-2.5 text-sm leading-snug text-ink"
              >
                <CircleDot className="mt-0.5 size-4 shrink-0 text-signal-red" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-ink/5 bg-canvas-soft/70 px-5 py-3.5">
          <p className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
            Suggested action
          </p>
          <p className="mt-0.5 text-[15px] font-medium text-ink">
            Reject transaction or limit approval
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <Ban className="size-4" />
            Reject
          </button>
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/10 bg-canvas-soft px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white">
            <SlidersHorizontal className="size-4" />
            Limit approval
          </button>
          <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium text-ink-faint transition-colors hover:text-ink">
            Continue anyway
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="product" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Subtle sage wash + grid behind the headline */}
      <div aria-hidden className="absolute inset-0">
        <div className="grid-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#c9d4b8_0%,transparent_65%)] opacity-50 blur-2xl" />
      </div>
      <HeroWaves />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-[13px] font-medium text-ink-soft"
          >
            <span className="size-1.5 rounded-full bg-signal-green" />
            AI wallet sentinel — early access open
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-6 text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Stop risky crypto decisions{" "}
            <span className="text-moss-500">before you sign.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Zelaa is an AI wallet sentinel that scans approvals, swaps, bridges,
            gas leakage, contracts, and on-chain behavior before they damage
            your portfolio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#risk-engine"
              className="w-full rounded-full bg-ink px-8 py-4 text-[15px] font-medium text-canvas shadow-card transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
            >
              Scan wallet
            </a>
            <a
              href="#waitlist"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-ink/10 bg-white px-8 py-4 text-[15px] font-medium text-ink transition-colors hover:bg-canvas-soft sm:w-auto"
            >
              Join early access
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          {/* Scanner */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46, ease: EASE }}
            onSubmit={(e) => e.preventDefault()}
            className="glass mx-auto mt-10 flex w-full max-w-2xl items-center gap-2 rounded-full p-2 pl-5 shadow-card-lg sm:pl-7"
          >
            <ScanSearch className="size-5 shrink-0 text-ink-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Paste wallet, contract, token, or transaction hash"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint sm:text-[15px]"
              aria-label="Wallet, contract, token, or transaction hash"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-moss-700 px-5 py-3 text-sm font-medium text-canvas transition-transform hover:scale-[1.04] active:scale-[0.97] sm:px-7"
            >
              Analyze
            </button>
          </motion.form>

          {/* Trust pills */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {TRUST_PILLS.map((pill) => (
              <li
                key={pill.label}
                className="flex items-center gap-2 text-sm font-medium text-ink-soft"
              >
                <pill.icon className="size-4 text-moss-500" />
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
          className="relative mt-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sage/45 via-canvas-soft to-canvas-soft p-5 shadow-card-lg sm:mt-20 sm:p-10 lg:p-14"
        >
          <div aria-hidden className="absolute inset-0">
            <div className="grid-lines absolute inset-0 opacity-70" />
            <div className="net-dots absolute inset-0 opacity-50" />
            {/* Moss accents in the lower corners — restrained */}
            <div className="absolute -bottom-28 -left-28 h-72 w-96 rounded-[55%_45%_60%_40%/70%_60%_40%_30%] bg-[linear-gradient(to_bottom,#97a886,#46553b_70%)] opacity-35 blur-2xl" />
            <div className="absolute -bottom-32 -right-28 h-80 w-[26rem] rounded-[45%_55%_42%_58%/65%_75%_35%_25%] bg-[linear-gradient(to_bottom,#97a886,#2a3424_75%)] opacity-35 blur-2xl" />
          </div>

          <div className="relative z-10 flex justify-center py-2 sm:py-6">
            <PreSignMockup />
          </div>

          {/* Floating cards — absolute on desktop */}
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
                  transition={{
                    duration: 7,
                    delay: f.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glass rounded-2xl p-5 shadow-float"
                >
                  <FloaterContent f={f} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating cards — static grid on mobile/tablet */}
          <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:hidden">
            {FLOATERS.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-5 shadow-card">
                <FloaterContent f={f} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
