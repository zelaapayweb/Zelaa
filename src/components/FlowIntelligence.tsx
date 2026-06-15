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
  { symbol: "ETH", name: "Ethereum", chain: "Ethereum", amount: "−1.20 ETH", usd: "−$4,212", out: true },
  { symbol: "USDC", name: "USD Coin", chain: "Base", amount: "−2,500 USDC", usd: "−$2,500", out: true },
  { symbol: "SOL", name: "Solana", chain: "Solana", amount: "+14.2 SOL", usd: "+$2,485", out: false },
  { symbol: "WETH", name: "Wrapped ETH", chain: "Ethereum", amount: "+0.45 WETH", usd: "+$1,580", out: false },
  { symbol: "PEPE", name: "Pepe", chain: "Ethereum", amount: "−41.2M PEPE", usd: "−$87", out: true },
  { symbol: "BONK", name: "Bonk", chain: "Solana", amount: "+1.9B BONK", usd: "+$42", out: false },
  { symbol: "BNB", name: "BNB", chain: "BNB Chain", amount: "−0.8 BNB", usd: "−$512", out: true },
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
  {
    icon: ArrowLeftRight,
    label: "Recent swap",
    detail: "ETH → USDC · Uniswap v4",
    chain: "Ethereum",
    value: "−1.20 ETH",
    status: "ok",
    statusLabel: "Clean",
  },
  {
    icon: FileKey2,
    label: "New approval",
    detail: "USDC spender 0x8f3…91A2",
    chain: "Ethereum",
    value: "Unlimited",
    status: "risk",
    statusLabel: "High risk",
  },
  {
    icon: Waypoints,
    label: "Failed bridge",
    detail: "USDC → Base · route reverted",
    chain: "Base",
    value: "−$12.40 fee",
    status: "warn",
    statusLabel: "Review",
  },
  {
    icon: FileQuestion,
    label: "Unknown contract interaction",
    detail: "0x22B…7C9D · unverified bytecode",
    chain: "BNB Chain",
    value: "—",
    status: "risk",
    statusLabel: "High risk",
  },
  {
    icon: Flame,
    label: "Gas spike",
    detail: "3 transactions above 90th percentile",
    chain: "Ethereum",
    value: "−$38.20",
    status: "warn",
    statusLabel: "Review",
  },
  {
    icon: Rocket,
    label: "Meme coin entry",
    detail: "BONK · 4th entry this week",
    chain: "Solana",
    value: "−$210",
    status: "warn",
    statusLabel: "Pattern",
  },
];

const STATUS_STYLES = {
  ok: "bg-signal-green-soft text-signal-green",
  warn: "bg-signal-amber-soft text-signal-amber",
  risk: "bg-signal-red-soft text-signal-red",
};

export function FlowIntelligence() {
  return (
    <section id="wallet-scan" className="bg-canvas-soft py-24 sm:py-32">
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
          className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-card-lg"
        >
          {/* Header: wallet switcher + chains */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/5 px-6 py-4 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              {WALLETS.map((w, i) => (
                <span
                  key={w}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[13px] ${
                    i === 0
                      ? "bg-ink text-canvas"
                      : "border border-ink/10 bg-white text-ink-soft"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      i === 0 ? "bg-moss-300" : "bg-signal-green"
                    }`}
                  />
                  {w}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <ChainBadge chain="Ethereum" />
              <ChainBadge chain="Base" />
              <ChainBadge chain="Solana" />
              <ChainBadge chain="BNB Chain" />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            {/* Left: portfolio + stats */}
            <div className="border-b border-ink/5 lg:border-b-0 lg:border-r">
              <div className="px-6 pb-2 pt-6 sm:px-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-wide text-ink-faint">
                      Portfolio value
                    </p>
                    <p className="mt-1 text-4xl font-semibold tracking-tight text-ink">
                      $47,280
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-signal-green-soft px-3 py-1.5 text-[13px] font-semibold text-signal-green">
                    <ArrowUpRight className="size-4" />
                    +4.2% this week
                  </span>
                </div>
                <div className="mt-5 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={PORTFOLIO}
                      margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="portfolio" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6c7f5c" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#6c7f5c" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#67715d", fontSize: 13 }}
                        dy={6}
                      />
                      <Tooltip
                        cursor={{ stroke: "#d6decb" }}
                        contentStyle={{
                          borderRadius: 14,
                          border: "1px solid rgba(29,36,25,0.06)",
                          boxShadow: "0 8px 24px rgba(29,36,25,0.1)",
                          fontSize: 13,
                        }}
                        formatter={(v) => [`$${Number(v).toLocaleString()}`, "Value"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#46553b"
                        strokeWidth={2}
                        fill="url(#portfolio)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px border-t border-ink/5 bg-ink/5 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white px-5 py-4 sm:px-6">
                    <p className="text-[13px] text-ink-faint">{stat.label}</p>
                    <p className="mt-1 text-xl font-semibold text-ink">
                      {stat.value}
                    </p>
                    <p
                      className={`mt-0.5 text-[13px] ${
                        stat.good ? "text-signal-green" : "text-signal-red"
                      }`}
                    >
                      {stat.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: top token flows */}
            <div className="px-6 py-6 sm:px-8">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-faint">
                Top token flows
              </p>
              <ul className="mt-3 divide-y divide-ink/5">
                {TOKEN_FLOWS.map((t) => (
                  <li key={t.symbol} className="flex items-center gap-3 py-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-canvas-soft font-mono text-xs font-semibold text-ink-soft">
                      {t.symbol.slice(0, 4)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15px] font-medium text-ink">
                        {t.name}
                      </p>
                      <ChainBadge chain={t.chain} />
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-[15px] font-medium ${
                          t.out ? "text-ink" : "text-signal-green"
                        }`}
                      >
                        {t.amount}
                      </p>
                      <p className="text-[13px] text-ink-faint">{t.usd}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Activity table */}
          <div className="border-t border-ink/5 px-6 py-6 sm:px-8">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-faint">
              Recent activity
            </p>
            <ul className="mt-2 divide-y divide-ink/5">
              {ACTIVITY.map((a) => (
                <li
                  key={a.label}
                  className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3.5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-canvas-soft text-ink-soft">
                    <a.icon className="size-4.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-ink">
                      {a.label}
                    </p>
                    <p className="truncate text-sm text-ink-faint">{a.detail}</p>
                  </div>
                  <div className="hidden sm:block">
                    <ChainBadge chain={a.chain} />
                  </div>
                  <span className="w-24 text-right text-[15px] font-medium text-ink sm:w-28">
                    {a.value}
                  </span>
                  <span
                    className={`w-24 rounded-full px-3 py-1 text-center text-xs font-semibold ${STATUS_STYLES[a.status]}`}
                  >
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
