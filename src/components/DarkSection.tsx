"use client";

import { motion } from "framer-motion";

function SimulationOrb() {
  return (
    <svg width="140" height="96" viewBox="0 0 140 96" fill="none" aria-hidden>
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(169,141,255,0.50)"/>
          <stop offset="60%" stopColor="rgba(123,97,255,0.25)"/>
          <stop offset="100%" stopColor="rgba(123,97,255,0)"/>
        </radialGradient>
      </defs>
      {/* Outer glow */}
      <circle cx="70" cy="48" r="42" fill="url(#orbGrad)" opacity="0.5"/>
      {/* Orbit ring 1 */}
      <ellipse cx="70" cy="48" rx="54" ry="22" stroke="rgba(123,97,255,0.22)" strokeWidth="1" fill="none"/>
      {/* Orbit ring 2 — tilted */}
      <ellipse cx="70" cy="48" rx="38" ry="54" stroke="rgba(169,141,255,0.16)" strokeWidth="1" fill="none" transform="rotate(30 70 48)"/>
      {/* Core orb */}
      <circle cx="70" cy="48" r="19" fill="rgba(123,97,255,0.28)" stroke="rgba(169,141,255,0.45)" strokeWidth="1.5"/>
      <circle cx="70" cy="48" r="11" fill="rgba(169,141,255,0.35)"/>
      <text x="70" y="52.5" textAnchor="middle" fill="rgba(255,255,255,0.82)" fontSize="11" fontWeight="700">Z</text>
      {/* Orbiting nodes */}
      <circle cx="16" cy="48" r="4.5" fill="rgba(169,141,255,0.65)"/>
      <circle cx="124" cy="48" r="4.5" fill="rgba(169,141,255,0.65)"/>
      <circle cx="70" cy="4" r="3.5" fill="rgba(243,91,200,0.55)"/>
      <circle cx="70" cy="92" r="3.5" fill="rgba(243,91,200,0.55)"/>
      <circle cx="110" cy="14" r="2.5" fill="rgba(255,139,216,0.45)"/>
      <circle cx="30" cy="82" r="2.5" fill="rgba(255,139,216,0.45)"/>
    </svg>
  );
}

function PermissionMap() {
  return (
    <svg width="140" height="96" viewBox="0 0 140 96" fill="none" aria-hidden>
      {/* Center contract node */}
      <rect x="52" y="33" width="36" height="30" rx="6" fill="rgba(123,97,255,0.22)" stroke="rgba(169,141,255,0.42)" strokeWidth="1.2"/>
      <text x="70" y="46" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="5.5" fontWeight="600" letterSpacing="0.05em">CONTRACT</text>
      <rect x="60" y="49" width="20" height="2" rx="1" fill="rgba(255,255,255,0.20)"/>
      <rect x="62" y="53" width="16" height="2" rx="1" fill="rgba(255,255,255,0.14)"/>
      {/* Safe token nodes */}
      <circle cx="18" cy="18" r="12" fill="rgba(123,97,255,0.16)" stroke="rgba(169,141,255,0.32)" strokeWidth="1"/>
      <text x="18" y="22" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="600">TKN</text>
      <circle cx="122" cy="18" r="12" fill="rgba(123,97,255,0.16)" stroke="rgba(169,141,255,0.32)" strokeWidth="1"/>
      <text x="122" y="22" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="600">NFT</text>
      <circle cx="16" cy="78" r="12" fill="rgba(123,97,255,0.16)" stroke="rgba(169,141,255,0.32)" strokeWidth="1"/>
      <text x="16" y="82" textAnchor="middle" fill="rgba(255,255,255,0.50)" fontSize="7" fontWeight="600">LP</text>
      {/* Risky node */}
      <circle cx="124" cy="78" r="12" fill="rgba(243,91,200,0.14)" stroke="rgba(243,91,200,0.52)" strokeWidth="1.2"/>
      <text x="124" y="82" textAnchor="middle" fill="rgba(243,91,200,0.82)" fontSize="7" fontWeight="600">???</text>
      {/* Safe connection lines */}
      <line x1="30" y1="26" x2="52" y2="40" stroke="rgba(169,141,255,0.22)" strokeWidth="1"/>
      <line x1="110" y1="26" x2="88" y2="40" stroke="rgba(169,141,255,0.22)" strokeWidth="1"/>
      <line x1="28" y1="70" x2="52" y2="57" stroke="rgba(169,141,255,0.22)" strokeWidth="1"/>
      {/* Risky line — pink */}
      <line x1="112" y1="70" x2="88" y2="57" stroke="rgba(243,91,200,0.58)" strokeWidth="1.5"/>
      {/* Warning dot on risky line */}
      <circle cx="100" cy="63.5" r="4.5" fill="rgba(243,91,200,0.75)"/>
      <text x="100" y="67" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="800">!</text>
    </svg>
  );
}

function DrainerPattern() {
  return (
    <svg width="140" height="96" viewBox="0 0 140 96" fill="none" aria-hidden>
      {/* Faint background paths */}
      <path d="M8 18 L38 32 L68 22 L98 38 L132 28" stroke="rgba(169,141,255,0.11)" strokeWidth="1" fill="none"/>
      <path d="M8 48 L32 58 L58 44 L84 56 L112 44 L132 54" stroke="rgba(169,141,255,0.09)" strokeWidth="1" fill="none"/>
      <path d="M8 78 L44 68 L80 78 L112 66 L132 74" stroke="rgba(169,141,255,0.09)" strokeWidth="1" fill="none"/>
      {/* Dangerous path — pink glow */}
      <path d="M8 33 L34 46 L58 36 L88 50 L122 40" stroke="rgba(243,91,200,0.55)" strokeWidth="2" fill="none"/>
      {/* Danger nodes on bad path */}
      <circle cx="34" cy="46" r="3.5" fill="rgba(243,91,200,0.45)"/>
      <circle cx="88" cy="50" r="3.5" fill="rgba(243,91,200,0.45)"/>
      {/* Detection ring */}
      <circle cx="70" cy="48" r="30" stroke="rgba(169,141,255,0.38)" strokeWidth="1.2" strokeDasharray="4 3" fill="rgba(169,141,255,0.04)"/>
      {/* Zelaa detection badge */}
      <circle cx="70" cy="48" r="12" fill="rgba(123,97,255,0.28)" stroke="rgba(169,141,255,0.55)" strokeWidth="1.2"/>
      <text x="70" y="52.5" textAnchor="middle" fill="rgba(255,255,255,0.82)" fontSize="11" fontWeight="700">Z</text>
    </svg>
  );
}

const CARDS = [
  {
    Graphic: SimulationOrb,
    title: "Zero custody",
    body: "Zelaa never holds, controls, or touches your assets. It only reads public transaction data from your wallet's signing request.",
    glow: "rgba(123,97,255,0.35)",
  },
  {
    Graphic: PermissionMap,
    title: "Read-only, always",
    body: "The extension is architecturally incapable of initiating transactions. It observes and analyzes. You decide and sign.",
    glow: "rgba(255,139,216,0.30)",
  },
  {
    Graphic: DrainerPattern,
    title: "Explainable AI",
    body: "Every risk signal comes with a plain-language reason. No black box scores — you always know why Zelaa flagged something.",
    glow: "rgba(169,141,255,0.30)",
  },
];

export function DarkSection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#070316" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0"
        style={{
          height: "70%",
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,97,255,0.18) 0%, transparent 65%)",
        }}
      />
      <div aria-hidden className="net-dots pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1120px] px-4 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow" style={{ color: "#7B61FF" }}>Security</p>
          <h2
            className="mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight: 0.97,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: "#F8F7FF",
            }}
          >
            Built for trust.
            <br />
            <em style={{ color: "#A98DFF" }}>Coded for privacy.</em>
          </h2>
          <p className="mt-5" style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.42)" }}>
            Zelaa analyzes transactions without ever touching your keys, your seed phrase,
            or your funds.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl p-7"
              style={{ background: "#121026", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8"
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)`,
                  filter: "blur(28px)",
                }}
              />
              <div className="relative">
                <card.Graphic />
              </div>
              <h3
                className="mt-3"
                style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.92)", lineHeight: 1.2 }}
              >
                {card.title}
              </h3>
              <p className="mt-3" style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.42)" }}>
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32 }}
        >
          {[
            { stat: "0", label: "bytes of your key ever read" },
            { stat: "100%", label: "user-controlled confirmations" },
            { stat: "0", label: "telemetry on wallet behavior" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <p style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 400, letterSpacing: "-0.04em", color: "#A98DFF", lineHeight: 1 }}>
                {stat}
              </p>
              <p className="mt-1" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
