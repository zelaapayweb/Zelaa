"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Does Zelaa access my seed phrase or private key?",
    a: "Never. Zelaa is a read-only Chrome extension. It reads public transaction data from the blockchain and your wallet's signing request — it never asks for, stores, or touches your seed phrase or private key.",
  },
  {
    q: "Can Zelaa move my funds?",
    a: "No. Zelaa has no ability to initiate transactions, move tokens, or interact with your wallet in any way. It only reads incoming transaction data and shows you an analysis. You approve or reject every action.",
  },
  {
    q: "How is this different from what my wallet already does?",
    a: "Your wallet shows you what you're signing. Zelaa tells you whether you should. It adds an AI risk layer that checks the contract, the spender, the amount, and the on-chain context — and explains it in plain language before you confirm.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Zelaa provides risk signals based on on-chain data analysis — not investment or financial advice. Risk signals indicate technical and contract-level risk. Always do your own research before signing any transaction.",
  },
  {
    q: "Which blockchains does Zelaa support?",
    a: "Zelaa currently targets Ethereum, Base, Solana, and BNB Chain. More chains are in active development. You can see current compatibility on the extension page after install.",
  },
  {
    q: "Can I try Zelaa before installing it?",
    a: "Yes. Demo mode lets you run Zelaa against sample transactions — including real high-risk examples — before you install or connect any wallet. No wallet or Chrome install required to see how it works.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(123,97,255,0.10)" }} className="last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em", color: "#130B2A", lineHeight: 1.4 }}>
          {q}
        </span>
        <span
          className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full"
          style={{ background: open ? "rgba(123,97,255,0.12)" : "#F0ECFA", color: "#7B61FF", flexShrink: 0 }}
        >
          {open ? <Minus className="size-3" /> : <Plus className="size-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5" style={{ fontSize: 14, lineHeight: 1.65, color: "#686176" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32" style={{ background: "#F0ECFA" }}>
      {/* Background orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(169,141,255,0.13) 0%, rgba(243,91,200,0.05) 50%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />
      {/* Thin outer ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 460,
          height: 460,
          borderRadius: "50%",
          border: "1px solid rgba(123,97,255,0.07)",
        }}
      />
      {/* Inner ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(123,97,255,0.05)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-8">
        <div className="text-center">
          <p className="eyebrow" style={{ color: "#A98DFF" }}>FAQ</p>
          <h2 className="mt-4 heading-section text-ink">Questions before you install.</h2>
        </div>
        <div
          className="mt-12 rounded-3xl px-6 sm:px-8"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(123,97,255,0.12)",
            boxShadow: "0 1px 2px rgba(19,11,42,0.03), 0 8px 28px rgba(123,97,255,0.06)",
          }}
        >
          {FAQS.map((item) => (
            <Item key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
