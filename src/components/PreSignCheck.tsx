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
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-card-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-3.5 sm:px-8">
              <p className="card-title text-ink">Transaction simulation</p>
              <span className="tabular font-mono text-[11px] text-ink-faint">
                tx pending · not yet signed
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.15fr]">
              {/* Left: transaction facts */}
              <div className="space-y-3 border-b border-border px-6 py-5 sm:px-8 lg:border-b-0 lg:border-r">
                {FIELDS.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-4">
                    <span className="eyebrow text-ink-faint">{f.label}</span>
                    <span className={`text-right text-[13px] font-medium text-ink ${f.mono ? "tabular font-mono text-[12px]" : ""}`}>
                      {f.value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-ink-faint">Chain</span>
                  <ChainBadge chain="Ethereum" />
                </div>

                {/* Risk score */}
                <div className="rounded-xl border border-border bg-canvas-soft/60 p-4">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-ink-faint">Risk score</span>
                    <RiskBadge level="high" />
                  </div>
                  <div className="mt-2.5 flex items-baseline gap-1">
                    <span className="tabular text-[2.5rem] font-medium tracking-[-0.05em] text-signal-red">87</span>
                    <span className="ui-label text-ink-faint">/ 100</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-dusty-pink to-signal-red"
                    />
                  </div>
                </div>
              </div>

              {/* Right: AI explanation + actions */}
              <div className="flex flex-col px-6 py-5 sm:px-8">
                <div className="flex items-start gap-3 rounded-xl bg-canvas-soft/70 p-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-ink text-canvas">
                    <Brain className="size-3.5" />
                  </span>
                  <div>
                    <p className="eyebrow text-ink-faint">AI explanation</p>
                    <p className="card-copy mt-1.5 text-ink">
                      This approval gives an{" "}
                      <span className="font-medium">unverified contract</span>{" "}
                      permission to move{" "}
                      <span className="font-medium">all of your USDC</span>,
                      not just one trade. The contract is 3 days old, has no
                      verified protocol history, and its approval flow matches
                      patterns seen in known drainer contracts.
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-border p-4">
                  <p className="eyebrow text-ink-faint">Recommended action</p>
                  <p className="card-title mt-1 text-ink">
                    Reject this approval, or limit it to the exact amount you
                    intend to spend.
                  </p>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-white transition-all hover:bg-[#1B1B1B] hover:scale-[1.02] active:scale-[0.98]">
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

                <p className="card-copy mt-4 text-ink-faint">
                  Zelaa never blocks or signs transactions for you. Signals are
                  informational, not financial advice — you stay in control of
                  every signature.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* How pre-sign works */}
        <Reveal delay={0.1} className="mx-auto mt-6 max-w-4xl">
          <div className="rounded-[1.75rem] border border-border bg-white/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-canvas-muted text-ink-soft">
                <ScanSearch className="size-4.5" />
              </span>
              <div>
                <h3 className="heading-section text-[1.25rem] tracking-[-0.04em] text-ink">
                  How Zelaa works before signing
                </h3>
                <p className="card-copy mt-2 text-ink-soft">
                  Zelaa starts with read-only wallet scanning and transaction
                  simulation. It analyzes public wallet activity, contract
                  permissions, token approvals, routing, gas behavior, and
                  known risk patterns. The goal is to explain risk before you
                  confirm a swap, approval, bridge, or contract interaction.
                </p>
                <p className="card-copy mt-3 flex items-start gap-2 text-ink-faint">
                  <Info className="mt-0.5 size-3.5 shrink-0" />
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
