"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HERO_GLOW = [
  "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(169,141,255,0.30) 0%, rgba(255,139,216,0.16) 45%, transparent 70%)",
  "radial-gradient(ellipse 50% 45% at 8% 55%, rgba(123,97,255,0.10) 0%, transparent 60%)",
  "radial-gradient(ellipse 50% 45% at 92% 55%, rgba(243,91,200,0.08) 0%, transparent 60%)",
].join(", ");

/* ── Floating crypto logo scene ─────────────────────────────── */

function HeroOrbitLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[40px] hidden -translate-x-1/2 sm:block"
      width="1260"
      height="1180"
      viewBox="0 0 1260 1180"
      fill="none"
      style={{ maxWidth: "96vw" }}
    >
      <ellipse cx="630" cy="560" rx="600" ry="500" stroke="rgba(169,141,255,0.15)" strokeWidth="1" strokeDasharray="2 9" />
      <ellipse cx="620" cy="600" rx="500" ry="430" stroke="rgba(243,91,200,0.11)" strokeWidth="1" strokeDasharray="1 8" transform="rotate(-5 620 600)" />
    </svg>
  );
}

const PARTICLES = [
  { top: 70, left: "13%", size: 5, color: "#A98DFF", delay: 0 },
  { top: 150, left: "89%", size: 4, color: "#FF8BD8", delay: 0.6 },
  { top: 330, left: "5%", size: 3, color: "#7B61FF", delay: 1.1 },
  { top: 270, left: "95%", size: 4, color: "#F35BC8", delay: 0.3 },
  { top: 720, left: "92%", size: 3, color: "#A98DFF", delay: 0.9 },
  { top: 820, left: "5%", size: 4, color: "#FF8BD8", delay: 1.4 },
  { top: 1000, left: "90%", size: 3, color: "#7B61FF", delay: 0.5 },
  { top: 980, left: "6%", size: 3, color: "#F35BC8", delay: 1.0 },
];

const SPARKLES = [
  { top: 540, left: "9%", size: 14, color: "#A98DFF", opacity: 0.45 },
  { top: 660, left: "94%", size: 11, color: "#FF8BD8", opacity: 0.4 },
  { top: 1080, left: "11%", size: 10, color: "#F35BC8", opacity: 0.35 },
];

function AmbientParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: p.color }}
          animate={{ opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
      {SPARKLES.map((s, i) => (
        <motion.span
          key={`sparkle-${i}`}
          className="absolute"
          style={{ top: s.top, left: s.left, fontSize: s.size, color: s.color, opacity: s.opacity }}
          animate={{ opacity: [s.opacity * 0.4, s.opacity, s.opacity * 0.4], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

function EthereumMark() {
  return (
    <svg viewBox="0 0 24 28" width="42%" height="48%" fill="none" aria-hidden>
      <polygon points="12,1 19,13 12,17 5,13" fill="#FFFFFF" opacity="0.95" />
      <polygon points="12,1 19,13 12,9.2" fill="#FFFFFF" opacity="0.55" />
      <polygon points="12,19 19,14.3 12,27 5,14.3" fill="#FFFFFF" opacity="0.88" />
      <polygon points="12,19 19,14.3 12,22.6" fill="#FFFFFF" opacity="0.55" />
    </svg>
  );
}

function UniswapMark() {
  return (
    <img
      src="/uniswap-mark.png"
      alt=""
      aria-hidden
      style={{ width: "52%", height: "auto", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
    />
  );
}

function USDCMark() {
  return (
    <svg viewBox="0 0 24 24" width="56%" height="56%" fill="none" aria-hidden>
      <path d="M8.6 5.2 A7.6 7.6 0 0 0 8.6 18.8" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d="M15.4 5.2 A7.6 7.6 0 0 1 15.4 18.8" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#FFFFFF">$</text>
    </svg>
  );
}

function SolanaMark() {
  return <img src="/solana-mark.png" alt="" aria-hidden style={{ width: "58%", height: "auto" }} />;
}

function FloatingTokenBadge({
  size,
  bg,
  glow,
  duration = 6,
  delay = 0,
  animate,
  className = "",
  style,
  children,
}: {
  size: number;
  bg: string;
  glow: string;
  duration?: number;
  delay?: number;
  animate: Record<string, number[]>;
  className?: string;
  style: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{ ...style, width: size, height: size }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={animate}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
      >
        {/* Glow halo */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 72%)`, filter: "blur(10px)" }}
        />
        {/* Glass body */}
        <div
          className="relative grid h-full w-full place-items-center rounded-full"
          style={{
            background: bg,
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: `0 10px 30px ${glow}, inset 0 1px 3px rgba(255,255,255,0.65), inset 0 -8px 14px rgba(20,10,40,0.08)`,
          }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroFloatingScene() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <HeroOrbitLines />
      <AmbientParticles />

      {/* Ethereum — upper-left of visual */}
      <FloatingTokenBadge
        size={104}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.92) 0%, rgba(169,141,255,0.55) 38%, rgba(123,97,255,0.62) 100%)"
        glow="rgba(123,97,255,0.34)"
        duration={6.5}
        delay={0.2}
        animate={{ y: [0, -14, 0] }}
        className="hidden sm:block"
        style={{ top: 92, left: "3%" }}
      >
        <EthereumMark />
      </FloatingTokenBadge>
      <FloatingTokenBadge
        size={50}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.92) 0%, rgba(169,141,255,0.55) 38%, rgba(123,97,255,0.62) 100%)"
        glow="rgba(123,97,255,0.30)"
        duration={6}
        delay={0.1}
        animate={{ y: [0, -8, 0] }}
        className="sm:hidden"
        style={{ top: 8, left: "4%" }}
      >
        <EthereumMark />
      </FloatingTokenBadge>

      {/* Solana — upper-right of visual (tablet/desktop only) */}
      <FloatingTokenBadge
        size={88}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.90) 0%, rgba(216,141,255,0.55) 38%, rgba(243,91,200,0.50) 100%)"
        glow="rgba(216,141,255,0.34)"
        duration={9}
        delay={0.5}
        animate={{ x: [0, 6, 0, -6, 0], y: [0, -5, 0, 5, 0] }}
        className="hidden lg:block"
        style={{ top: 540, right: "8%" }}
      >
        <SolanaMark />
      </FloatingTokenBadge>

      {/* Uniswap — mid-right, beside the Zelaa card */}
      <FloatingTokenBadge
        size={130}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.90) 0%, rgba(255,182,224,0.55) 38%, rgba(243,91,200,0.55) 100%)"
        glow="rgba(243,91,200,0.32)"
        duration={7.5}
        delay={0.35}
        animate={{ x: [0, -8, 0], y: [0, 6, 0] }}
        className="hidden sm:block"
        style={{ top: 860, right: "2%" }}
      >
        <UniswapMark />
      </FloatingTokenBadge>
      <FloatingTokenBadge
        size={54}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.90) 0%, rgba(255,182,224,0.55) 38%, rgba(243,91,200,0.55) 100%)"
        glow="rgba(243,91,200,0.28)"
        duration={7}
        delay={0.25}
        animate={{ y: [0, -7, 0] }}
        className="sm:hidden"
        style={{ top: 12, right: "4%" }}
      >
        <UniswapMark />
      </FloatingTokenBadge>

      {/* USDC — lower-left of visual (tablet/desktop only) */}
      <FloatingTokenBadge
        size={92}
        bg="radial-gradient(circle at 32% 26%, rgba(255,255,255,0.92) 0%, rgba(169,141,255,0.45) 35%, rgba(123,150,255,0.55) 100%)"
        glow="rgba(123,150,255,0.30)"
        duration={5.5}
        delay={0.65}
        animate={{ y: [0, -9, 0], scale: [1, 1.03, 1] }}
        className="hidden lg:block"
        style={{ top: 1040, left: "5%" }}
      >
        <USDCMark />
      </FloatingTokenBadge>
    </div>
  );
}

/* ── Zelaa risk card ─────────────────────────────────────────── */

function GearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="#9A92AA"
        strokeWidth="1.6"
      />
      <path
        d="M19.4 13.5c.04-.33.06-.66.06-1s-.02-.67-.06-1l2.04-1.58a.5.5 0 0 0 .12-.65l-1.93-3.34a.5.5 0 0 0-.6-.22l-2.4.97a7.6 7.6 0 0 0-1.73-1l-.36-2.55a.5.5 0 0 0-.5-.43h-3.86a.5.5 0 0 0-.5.43l-.36 2.55c-.63.24-1.21.58-1.73 1l-2.4-.97a.5.5 0 0 0-.6.22L2.7 9.27a.5.5 0 0 0 .12.65L4.86 11.5c-.04.33-.06.66-.06 1s.02.67.06 1L2.82 15.08a.5.5 0 0 0-.12.65l1.93 3.34a.5.5 0 0 0 .6.22l2.4-.97c.52.42 1.1.76 1.73 1l.36 2.55a.5.5 0 0 0 .5.43h3.86a.5.5 0 0 0 .5-.43l.36-2.55a7.6 7.6 0 0 0 1.73-1l2.4.97a.5.5 0 0 0 .6-.22l1.93-3.34a.5.5 0 0 0-.12-.65L19.4 13.5Z"
        stroke="#9A92AA"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function ZelaaRiskCard() {
  const detected = [
    "Unlimited token allowance",
    "Unknown spender contract",
    "Fresh contract",
    "Drainer-like approval pattern",
  ];
  return (
    <div
      className="w-[272px] shrink-0 overflow-hidden rounded-[20px] bg-white sm:w-[308px]"
      style={{
        border: "1.5px solid rgba(123,97,255,0.24)",
        boxShadow: "0 2px 4px rgba(19,11,42,0.06), 0 28px 60px -10px rgba(123,97,255,0.32)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: "#F5F0FF", borderBottom: "1px solid rgba(123,97,255,0.10)" }}
      >
        <div className="flex items-center gap-2">
          <img src="/zelaa-icon.png" alt="" width={22} height={22} className="shrink-0 rounded-[6px]" style={{ width: 22, height: 22 }} />
          <span className="text-[13px] font-semibold" style={{ color: "#130B2A" }}>Zelaa</span>
        </div>
        <GearIcon />
      </div>

      <div className="px-4 py-3.5">
        <p className="mb-2.5 text-[15px] font-semibold" style={{ color: "#130B2A" }}>Zelaa Risk Check</p>

        {/* Risk score block */}
        <div className="mb-3 rounded-xl p-3" style={{ background: "#FBE7EA", border: "1px solid rgba(139,37,53,0.14)" }}>
          <div className="mb-2 flex items-center justify-between">
            <span
              className="rounded-full px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wide text-white"
              style={{ background: "#8B2535" }}
            >
              High Risk
            </span>
            <span className="tabular text-[22px] font-bold" style={{ color: "#8B2535" }}>
              87<span className="text-[12px] font-medium" style={{ color: "#B97A85" }}>/100</span>
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full" style={{ background: "rgba(139,37,53,0.14)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FF6B6B, #8B2535)" }}
              initial={{ width: 0 }}
              animate={{ width: "87%" }}
              transition={{ duration: 1.1, delay: 1.0, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Transaction */}
        <div className="mb-3 space-y-1.5 rounded-lg p-2.5" style={{ background: "#F6F2FF" }}>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[10px]" style={{ color: "#9A92AA" }}>Transaction</span>
            <span className="text-right text-[11.5px] font-bold" style={{ color: "#130B2A" }}>Approve unlimited USDC</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[10px]" style={{ color: "#9A92AA" }}>Spender</span>
            <span className="font-mono text-[10px]" style={{ color: "#130B2A" }}>0x1f38...9a2B</span>
          </div>
        </div>

        {/* Detected */}
        <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em]" style={{ color: "#9A92AA" }}>
          Detected
        </p>
        <div className="mb-3 space-y-1.5">
          {detected.map((d) => (
            <div key={d} className="flex items-start gap-1.5">
              <span className="mt-[4px] size-1.5 shrink-0 rounded-full" style={{ background: "#8B2535" }} />
              <span className="text-[11.5px] font-medium leading-tight" style={{ color: "#4A4456" }}>{d}</span>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="mb-3 rounded-lg p-2.5 text-[10.5px] leading-snug" style={{ background: "#FBE7EA", color: "#7A2C38" }}>
          &ldquo;This approval gives full control of your USDC to an unverified contract.&rdquo;
        </div>

        {/* Suggested action */}
        <p className="mb-1.5 text-[9px] font-medium uppercase tracking-[0.1em]" style={{ color: "#9A92AA" }}>
          Suggested action
        </p>
        <p className="mb-3 text-[10.5px] font-medium" style={{ color: "#130B2A" }}>
          Limit the allowance to reduce risk.
        </p>

        <div className="space-y-1.5">
          <button className="w-full rounded-xl py-2.5 text-[11.5px] font-semibold text-white" style={{ background: "#130B2A" }}>
            Reject
          </button>
          <button className="w-full rounded-xl py-2.5 text-[11.5px] font-semibold" style={{ background: "#F0ECFA", color: "#4A4456" }}>
            Limit approval
          </button>
          <button
            className="w-full rounded-xl py-2 text-[10.5px] font-medium"
            style={{ background: "transparent", color: "#9A92AA", border: "1px solid rgba(123,97,255,0.10)" }}
          >
            Continue anyway
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Wallet confirmation popup ──────────────────────────────── */

function WalletPopupCard() {
  return (
    <div
      className="w-[220px] shrink-0 overflow-hidden rounded-[20px] bg-white sm:w-[240px]"
      style={{
        border: "1px solid rgba(123,97,255,0.14)",
        boxShadow: "0 2px 4px rgba(19,11,42,0.05), 0 24px 50px -10px rgba(123,97,255,0.22)",
      }}
    >
      <div
        className="flex items-center gap-2.5 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(123,97,255,0.10)" }}
      >
        <span className="size-6 shrink-0 rounded-full" style={{ background: "linear-gradient(135deg, #E2761B 0%, #cd6116 100%)" }} />
        <span className="text-[12.5px] font-semibold" style={{ color: "#130B2A" }}>MetaMask</span>
        <span
          className="ml-auto rounded-full px-2 py-0.5 text-[8.5px] font-medium"
          style={{ background: "#F0ECFA", color: "#7B61FF" }}
        >
          Ethereum Mainnet
        </span>
      </div>

      <div className="px-4 py-3.5">
        <p className="mb-0.5 text-[9px] uppercase tracking-[0.1em]" style={{ color: "#9A92AA" }}>
          Confirm Transaction
        </p>
        <p className="mb-3 text-[13px] font-semibold" style={{ color: "#130B2A" }}>
          Approve token spending
        </p>

        <div className="mb-3 space-y-2 rounded-xl p-3" style={{ background: "#F6F2FF" }}>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[9.5px]" style={{ color: "#9A92AA" }}>Request from</span>
            <span className="text-[9.5px] font-medium" style={{ color: "#130B2A" }}>app.uniswap.org</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[9.5px]" style={{ color: "#9A92AA" }}>Spender</span>
            <span className="font-mono text-[9.5px]" style={{ color: "#130B2A" }}>0x1f38...9a2B</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[9.5px]" style={{ color: "#9A92AA" }}>Permission</span>
            <span className="text-[9.5px] font-semibold" style={{ color: "#8B2535" }}>Unlimited</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="shrink-0 text-[9.5px]" style={{ color: "#9A92AA" }}>Est. gas</span>
            <span className="text-right text-[9.5px] font-medium" style={{ color: "#130B2A" }}>$12.40 · 0.0042 ETH</span>
          </div>
        </div>

        <button className="mb-3 text-[9.5px] font-medium" style={{ color: "#7B61FF" }}>
          View permission details
        </button>

        <div className="flex gap-2">
          <button className="flex-1 rounded-lg py-2 text-[10.5px] font-medium" style={{ background: "#F0ECFA", color: "#686176" }}>
            Reject
          </button>
          <button
            className="flex-1 rounded-lg py-2 text-[10.5px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #E2761B 0%, #cd6116 100%)" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── dApp swap interface (browser content background) ──────── */

function DappBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{ background: "linear-gradient(160deg, #0B0E1A 0%, #11142A 55%, #0B0E1A 100%)" }}
    >
      {/* dApp top nav */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">
        <div className="flex items-center gap-2.5">
          <img src="/uniswap-mark.png" alt="" width={20} height={20} style={{ width: 20, height: 20 }} />
          <span className="text-[13px] font-semibold text-white/85">Uniswap</span>
          <nav className="ml-4 hidden gap-4 text-[12px] text-white/35 sm:flex">
            <span>Swap</span>
            <span>Tokens</span>
            <span>NFTs</span>
            <span>Pools</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full px-2.5 py-1 text-[10px] text-white/45" style={{ background: "rgba(255,255,255,0.06)" }}>
            Ethereum
          </span>
          <span className="rounded-full px-2.5 py-1 font-mono text-[10px] text-white/65" style={{ background: "rgba(255,255,255,0.08)" }}>
            0x12f...8a3C
          </span>
        </div>
      </div>

      {/* Swap card (hidden on mobile — the stacked wallet/Zelaa cards tell the story there) */}
      <div
        className="absolute left-1/2 top-1/2 hidden w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 sm:block"
        style={{ background: "#161B33", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 30px 70px rgba(0,0,0,0.45)" }}
      >
        <p className="mb-3 text-[13px] font-semibold text-white/85">Swap</p>

        <div className="mb-2 rounded-xl p-3" style={{ background: "#0F1326" }}>
          <p className="mb-1 text-[10px] text-white/35">You pay</p>
          <div className="flex items-center justify-between">
            <span className="text-[17px] font-medium text-white/90">1,000</span>
            <span className="rounded-full px-2.5 py-1 text-[10.5px] text-white/75" style={{ background: "rgba(255,255,255,0.08)" }}>
              USDC
            </span>
          </div>
        </div>

        <div className="mb-3 flex justify-center">
          <span className="grid size-6 place-items-center rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16m0 0 5-5m-5 5-5-5" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="mb-4 rounded-xl p-3" style={{ background: "#0F1326" }}>
          <p className="mb-1 text-[10px] text-white/35">You receive</p>
          <div className="flex items-center justify-between">
            <span className="text-[17px] font-medium text-white/90">0.531</span>
            <span className="rounded-full px-2.5 py-1 text-[10.5px] text-white/75" style={{ background: "rgba(255,255,255,0.08)" }}>
              ETH
            </span>
          </div>
        </div>

        <button
          className="w-full rounded-xl py-2.5 text-[12px] font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #7B61FF, #F35BC8)" }}
        >
          Approve USDC
        </button>
      </div>
    </div>
  );
}

/* ── Main hero browser mockup ───────────────────────────────── */

function HeroBrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full"
    >
      {/* Glow behind browser */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          inset: "-60px -30px -30px",
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(169,141,255,0.24) 0%, rgba(255,139,216,0.13) 50%, transparent 75%)",
          filter: "blur(38px)",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 22,
          border: "1px solid rgba(123,97,255,0.16)",
          boxShadow: "0 2px 4px rgba(19,11,42,0.05), 0 40px 100px rgba(123,97,255,0.18)",
          background: "#ffffff",
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: "#F0ECFA", borderBottom: "1px solid rgba(123,97,255,0.12)" }}
        >
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="size-3 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="size-3 rounded-full" style={{ background: "#FEBC2E" }} />
            <span className="size-3 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div
              className="flex items-center gap-2 rounded-full px-4 py-1.5 text-[10.5px]"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(123,97,255,0.15)",
                maxWidth: 300,
                width: "100%",
                color: "#9A92AA",
              }}
            >
              <span>🔒</span>
              <span className="truncate">app.uniswap.org/#/swap</span>
            </div>
          </div>
          <img src="/zelaa-icon.png" alt="" width={22} height={22} className="shrink-0 rounded-[5px]" style={{ width: 22, height: 22 }} />
        </div>

        {/* Browser content */}
        <div className="relative overflow-hidden">
          <DappBackground />

          {/* Spacer to size the dApp area */}
          <div className="invisible" aria-hidden>
            <div style={{ height: 90 }} className="sm:hidden" />
            <div style={{ height: 600 }} className="hidden sm:block" />
          </div>

          {/* Mobile: stacked overlay cards */}
          <div className="relative z-10 flex flex-col items-center gap-4 px-4 py-8 sm:hidden">
            <WalletPopupCard />
            <ZelaaRiskCard />
          </div>

          {/* Desktop/tablet: overlapping side cards */}
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute" style={{ left: "4%", top: "50%", transform: "translateY(-50%) rotate(-1.5deg)" }}>
              <motion.div
                initial={{ opacity: 0, x: -26 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <WalletPopupCard />
              </motion.div>
            </div>

            <div className="absolute" style={{ right: "4%", top: "50%", transform: "translateY(-50%) rotate(1.5deg)" }}>
              <motion.div
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <ZelaaRiskCard />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust pills */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {[
          { label: "No seed phrase", dot: "#2D6B4A" },
          { label: "Non-custodial", dot: "#7B61FF" },
          { label: "Read-only access", dot: "#2D6B4A" },
        ].map(({ label, dot }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium"
            style={{
              background: "rgba(251,250,255,0.90)",
              border: "1px solid rgba(123,97,255,0.15)",
              color: "#686176",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="size-1.5 rounded-full" style={{ background: dot }} />
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Hero email capture (private beta — no live install yet) ── */

function HeroEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="hero-waitlist" className="mx-auto mt-8 max-w-[440px]">
      {submitted ? (
        <p className="text-center text-[14px] font-medium" style={{ color: "#2D6B4A" }}>
          You&apos;re on the list — we&apos;ll email you when the beta opens.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSubmitted(true);
          }}
          className="flex flex-col gap-2.5 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-full px-5 py-3 text-[14px] outline-none transition-colors placeholder:text-ink-ghost"
            style={{ border: "1px solid rgba(123,97,255,0.20)", background: "rgba(255,255,255,0.92)", color: "#130B2A" }}
            onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.45)")}
            onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.20)")}
          />
          <button
            type="submit"
            className="btn-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3 text-[14px] font-medium"
          >
            Request access
          </button>
        </form>
      )}
      <p className="mt-3 text-center text-[12px]" style={{ color: "#9A92AA" }}>
        No seed phrase. No custody. You stay in control.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="product" className="relative overflow-x-hidden pb-0 pt-10 sm:pt-14">
      {/* Atmospheric glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{ height: 640, background: HERO_GLOW }}
      />

      <HeroFloatingScene />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center gap-2.5"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-medium"
            style={{
              background: "rgba(123,97,255,0.08)",
              border: "1px solid rgba(123,97,255,0.18)",
              color: "#7B61FF",
              letterSpacing: "0.02em",
            }}
          >
            <img src="/zelaa-icon.png" alt="" width={16} height={16} className="rounded-[4px]" style={{ width: 16, height: 16 }} />
            Chrome Extension · AI Risk Analysis
          </span>

          {/* Honest status badge — product is not live yet */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-medium"
            style={{
              background: "rgba(45,107,74,0.06)",
              border: "1px solid rgba(45,107,74,0.18)",
              color: "#2D6B4A",
              letterSpacing: "0.01em",
            }}
          >
            <motion.span
              className="size-1.5 rounded-full"
              style={{ background: "#2D6B4A" }}
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Private beta opening soon
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-7 max-w-3xl text-center"
        >
          {/* Sparkles */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-6 top-3 hidden text-2xl sm:block"
            style={{ color: "#A98DFF", opacity: 0.55 }}
          >
            ✦
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-6 top-10 hidden text-lg sm:block"
            style={{ color: "#FF8BD8", opacity: 0.5 }}
          >
            ✦
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -top-5 left-1/2 -translate-x-28 text-sm"
            style={{ color: "#F35BC8", opacity: 0.38 }}
          >
            ✦
          </span>

          <h1 className="heading-hero text-ink">
            Know what you&apos;re signing
            <br className="hidden sm:block" />
            <span style={{ color: "#7B61FF" }}> before it&apos;s too late.</span>
          </h1>

          <p className="body-muted mx-auto mt-6 max-w-[500px] text-ink-soft">
            Zelaa sits in your browser and shows an AI risk signal the moment your wallet
            asks for permission — before you click confirm.
          </p>

          <HeroEmailCapture />

          <div className="mt-4 flex justify-center">
            <a
              href="#demo-warnings"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[14px] font-medium transition-colors"
              style={{ color: "#9A92AA" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#130B2A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#9A92AA")
              }
            >
              See Demo Warning <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Browser mockup — wider stage than the text column */}
      <div className="relative mx-auto mt-14 max-w-[1180px] px-4 pb-16 sm:px-8 sm:pb-20">
        <HeroBrowserMockup />
      </div>
    </section>
  );
}
