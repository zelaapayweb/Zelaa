"use client";

import { motion } from "framer-motion";
import {
  Ban,
  Brain,
  SlidersHorizontal,
  ChevronRight,
  ScanSearch,
  Info,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ChainBadge, RiskBadge } from "./ui";

const FIELDS = [
  { label: "User action", value: "Sign token approval" },
  { label: "Token", value: "USDC" },
  { label: "Contract", value: "0x8f3…91A2", mono: true },
];

export function PreSignCheck() {
  return (
    <section id="risk-engine" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Risk engine"
          title="Pre-sign AI risk check"
          subtitle="Before a signature leaves your wallet, Zelaa simulates the transaction and explains exactly what you are about to authorize — in plain language."
        />

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-card-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/5 px-6 py-4 sm:px-8">
              <p className="text-[15px] font-semibold text-ink">
                Transaction simulation
              </p>
              <span className="font-mono text-xs text-ink-faint">
                tx pending · not yet signed
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              {/* Left: transaction facts */}
              <div className="space-y-4 border-b border-ink/5 px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
                {FIELDS.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-xs uppercase tracking-wide text-ink-faint">
                      {f.label}
                    </span>
                    <span
                      className={`text-right text-[15px] font-medium text-ink ${
                        f.mono ? "font-mono text-sm" : ""
                      }`}
                    >
                      {f.value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wide text-ink-faint">
                    Chain
                  </span>
                  <ChainBadge chain="Ethereum" />
                </div>

                {/* Risk score */}
                <div className="rounded-2xl border border-ink/5 bg-canvas-soft/70 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-ink-faint">
                      Risk score
                    </span>
                    <RiskBadge level="high" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight text-signal-red">
                      87
                    </span>
                    <span className="text-sm text-ink-faint">/ 100</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-signal-amber to-signal-red"
                    />
                  </div>
                </div>
              </div>

              {/* Right: AI explanation + actions */}
              <div className="flex flex-col px-6 py-6 sm:px-8">
                <div className="flex items-start gap-3 rounded-2xl bg-canvas-soft/70 p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-ink text-canvas">
                    <Brain className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                      AI explanation
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink">
                      This approval gives an{" "}
                      <span className="font-semibold">unverified contract</span>{" "}
                      permission to move{" "}
                      <span className="font-semibold">all of your USDC</span>,
                      not just one trade. The contract is 3 days old, has no
                      verified protocol history, and its approval flow matches
                      patterns seen in known drainer contracts.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-ink/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    Recommended action
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium text-ink">
                    Reject this approval, or limit it to the exact amount you
                    intend to spend.
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
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-faint transition-colors hover:text-ink">
                    Continue anyway
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-ink-faint">
                  Zelaa never blocks or signs transactions for you. Signals are
                  informational, not financial advice — you stay in control of
                  every signature.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* How pre-sign works */}
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-[2rem] border border-ink/5 bg-white/60 p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-moss-100/60 text-moss-700">
                <ScanSearch className="size-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  How Zelaa works before signing
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                  Zelaa starts with read-only wallet scanning and transaction
                  simulation. It analyzes public wallet activity, contract
                  permissions, token approvals, routing, gas behavior, and
                  known risk patterns. The goal is to explain risk before you
                  confirm a swap, approval, bridge, or contract interaction.
                </p>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink-faint">
                  <Info className="mt-0.5 size-4 shrink-0" />
                  Zelaa does not replace user judgment and does not provide
                  investment advice. It gives risk intelligence so you can make
                  better signing decisions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
