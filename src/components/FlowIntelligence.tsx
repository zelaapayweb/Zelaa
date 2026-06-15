"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import {
  ArrowLeftRight,
  ArrowUpRight,
  FileKey2,
  FileQuestion,
  Flame,
  Rocket,
  Waypoints,
} from "lucide-react";
import { SectionHeading } from "./Reveal";
import { ChainBadge } from "./ui";

const PORTFOLIO = [
  { day: "Mon", value: 41200 },
  { day: "Tue", value: 42850 },
  { day: "Wed", value: 41900 },
  { day: "Thu", value: 44100 },
  { day: "Fri", value: 43600 },
  { day: "Sat", value: 45900 },
  { day: "Sun", value: 47280 },
];

const WALLETS = ["0x8F3…91A2", "0x22B…7C9D", "0xA14…09EF"];

const STATS = [
  { label: "Gas spent this week", value: "$118.41", note: "−12% vs last week", good: true },
  { label: "Failed swaps", value: "9", note: "$64 in wasted gas", good: false },
  { label: "Approval exposure", value: "4", note: "High-risk spenders", good: false },
  { label: "High-risk contracts", value: "2", note: "Revoke suggested", good: false },
  { label: "Bridge fees", value: "$81.20", note: "This month", good: true },
  { label: "Micro-trade losses", value: "$312.40", note: "14 trades under $50", good: false },
];

const TOKEN_FLOWS = [
  { symbol: "ETH",  name: "Ethereum",    chain: "Ethereum", amount: "−1.20 ETH",   usd: "−$4,212", out: true  },
  { symbol: "USDC", name: "USD Coin",    chain: "Base",     amount: "−2,500 USDC", usd: "−$2,500", out: true  },
  { symbol: "SOL",  name: "Solana",      chain: "Solana",   amount: "+14.2 SOL",   usd: "+$2,485", out: false },
  { symbol: "WETH", name: "Wrapped ETH", chain: "Ethereum", amount: "+0.45 WETH",  usd: "+$1,580", out: false },
  { symbol: "PEPE", name: "Pepe",        chain: "Ethereum", amount: "−41.2M PEPE", usd: "−$87",    out: true  },
  { symbol: "BONK", name: "Bonk",        chain: "Solana",   amount: "+1.9B BONK",  usd: "+$42",    out: false },
  { symbol: "BNB",  name: "BNB",         chain: "BNB Chain",amount: "−0.8 BNB",    usd: "−$512",   out: true  },
];

const ACTIVITY: {
  icon: typeof ArrowLeftRight;
  label: string;
  detail: string;
  chain: string;
  value: string;
  status: "ok" | "warn" | "risk";
  statusLabel: string;
}[] = [
  { icon: ArrowLeftRight, label: "Recent swap",                    detail: "ETH → USDC · Uniswap v4",          chain: "Ethereum", value: "−1.20 ETH",  status: "ok",   statusLabel: "Clean"     },
  { icon: FileKey2,       label: "New approval",                   detail: "USDC spender 0x8f3…91A2",          chain: "Ethereum", value: "Unlimited",  status: "risk", statusLabel: "High risk" },
  { icon: Waypoints,      label: "Failed bridge",                  detail: "USDC → Base · route reverted",     chain: "Base",     value: "−$12.40 fee",status: "warn", statusLabel: "Review"    },
  { icon: FileQuestion,   label: "Unknown contract interaction",   detail: "0x22B…7C9D · unverified bytecode", chain: "BNB Chain",value: "—",          status: "risk", statusLabel: "High risk" },
  { icon: Flame,          label: "Gas spike",                      detail: "3 transactions above 90th pctile", chain: "Ethereum", value: "−$38.20",    status: "warn", statusLabel: "Review"    },
  { icon: Rocket,         label: "Meme coin entry",                detail: "BONK · 4th entry this week",       chain: "Solana",   value: "−$210",      status: "warn", statusLabel: "Pattern"   },
];

const STATUS_STYLES = {
  ok:   "bg-signal-green-soft text-signal-green",
  warn: "bg-signal-amber-soft text-signal-amber",
  risk: "bg-signal-red-soft text-signal-red",
};

export function FlowIntelligence() {
  return (
    <section id="wallet-scan" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Intelligence"
          title="Wallet flow intelligence"
          subtitle="A calm view of where your portfolio actually leaks value — gas, failed swaps, stale approvals, bridge fees, and micro-losses."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-card-lg"
        >
          {/* Wallet switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-3.5 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {WALLETS.map((w, i) => (
                <span
                  key={w}
                  className={`tabular inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] ${
                    i === 0 ? "bg-ink text-white" : "border border-border bg-white text-ink-soft"
                  }`}
                >
                  <span className={`size-1.5 rounded-full ${i === 0 ? "bg-dusty-pink" : "bg-signal-green"}`} />
                  {w}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              <ChainBadge chain="Ethereum" />
              <ChainBadge chain="Base" />
              <ChainBadge chain="Solana" />
              <ChainBadge chain="BNB Chain" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            {/* Left: portfolio + stats */}
            <div className="border-b border-border lg:border-b-0 lg:border-r">
              <div className="px-6 pb-2 pt-5 sm:px-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="eyebrow text-ink-faint">Portfolio value</p>
                    <p className="tabular mt-1 text-[2.25rem] font-medium tracking-[-0.05em] text-ink">$47,280</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-signal-green-soft px-3 py-1.5 text-[11px] font-medium text-signal-green">
                    <ArrowUpRight className="size-3.5" />
                    +4.2% this week
                  </span>
                </div>
                <div className="mt-4 h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PORTFOLIO} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="portfolio" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E9B8C8" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#E9B8C8" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9A9494", fontSize: 11 }}
                        dy={6}
                      />
                      <Tooltip
                        cursor={{ stroke: "#EDE7E7" }}
                        contentStyle={{
                          borderRadius: 10,
                          border: "1px solid #EDE7E7",
                          boxShadow: "0 8px 24px rgba(5,5,5,0.08)",
                          fontSize: 12,
                        }}
                        formatter={(v) => [`$${Number(v).toLocaleString()}`, "Value"]}
                      />
                      <Area type="monotone" dataKey="value" stroke="#E9B8C8" strokeWidth={1.5} fill="url(#portfolio)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white px-4 py-3.5 sm:px-5">
                    <p className="ui-label text-ink-faint">{stat.label}</p>
                    <p className="tabular mt-1 text-[1.4rem] font-medium tracking-[-0.045em] text-ink">{stat.value}</p>
                    <p className={`ui-label mt-0.5 ${stat.good ? "text-signal-green" : "text-signal-red"}`}>
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: token flows */}
            <div className="px-6 py-5 sm:px-8">
              <p className="eyebrow text-ink-faint">Top token flows</p>
              <ul className="mt-3 divide-y divide-border">
                {TOKEN_FLOWS.map((t) => (
                  <li key={t.symbol} className="flex items-center gap-3 py-2.5">
                    <span className="tabular grid size-8 shrink-0 place-items-center rounded-full bg-canvas-muted font-mono text-[10px] font-medium text-ink-soft">
                      {t.symbol.slice(0, 4)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="card-title truncate text-ink">{t.name}</p>
                      <ChainBadge chain={t.chain} />
                    </div>
                    <div className="text-right">
                      <p className={`tabular text-[13px] font-medium ${t.out ? "text-ink" : "text-signal-green"}`}>
                        {t.amount}
                      </p>
                      <p className="ui-label text-ink-faint">{t.usd}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Activity table */}
          <div className="border-t border-border px-6 py-5 sm:px-8">
            <p className="eyebrow text-ink-faint">Recent activity</p>
            <ul className="mt-2 divide-y divide-border">
              {ACTIVITY.map((a) => (
                <li key={a.label} className="flex flex-wrap items-center gap-x-3 gap-y-2 py-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-canvas-muted text-ink-soft">
                    <a.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="card-title truncate text-ink">{a.label}</p>
                    <p className="ui-label truncate text-ink-faint">{a.detail}</p>
                  </div>
                  <div className="hidden sm:block"><ChainBadge chain={a.chain} /></div>
                  <span className="tabular w-24 text-right text-[13px] font-medium text-ink sm:w-28">{a.value}</span>
                  <span className={`w-20 rounded-full px-2.5 py-1 text-center text-[10px] font-medium uppercase tracking-[0.04em] ${STATUS_STYLES[a.status]}`}>
                    {a.statusLabel}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
