"use client";
import { ChromeIcon } from "@/components/ChromeIcon";

import { useState } from "react";
import { motion } from "framer-motion";

function CoreOrb() {
  const nodes = [
    { angle: 55,  r: 74, color: "#A98DFF", size: 6 },
    { angle: 195, r: 70, color: "#F35BC8", size: 5 },
    { angle: 310, r: 68, color: "#7B61FF", size: 7 },
  ];

  return (
    <div
      className="relative mx-auto"
      style={{ width: 180, height: 180 }}
      aria-hidden
    >
      {/* Outer diffuse glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,97,255,0.18) 0%, rgba(243,91,200,0.09) 50%, transparent 72%)",
          filter: "blur(22px)",
        }}
      />

      {/* Orbit ring 1 — clockwise */}
      <motion.div
        className="absolute"
        style={{ inset: 20, borderRadius: "50%", border: "1px solid rgba(123,97,255,0.28)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            top: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#A98DFF",
            boxShadow: "0 0 8px rgba(169,141,255,0.80)",
          }}
        />
      </motion.div>

      {/* Orbit ring 2 — counter-clockwise */}
      <motion.div
        className="absolute"
        style={{ inset: 38, borderRadius: "50%", border: "1px solid rgba(243,91,200,0.22)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#F35BC8",
            boxShadow: "0 0 7px rgba(243,91,200,0.75)",
          }}
        />
      </motion.div>

      {/* Core pulsing orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.07, 1], opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative grid place-items-center rounded-full"
          style={{
            width: 80,
            height: 80,
            background:
              "radial-gradient(circle at 38% 38%, rgba(185,165,255,0.95) 0%, #7B61FF 48%, #5440CC 100%)",
            boxShadow:
              "0 0 0 10px rgba(123,97,255,0.10), 0 0 0 20px rgba(123,97,255,0.05), 0 8px 40px rgba(123,97,255,0.38)",
          }}
        >
          <img
            src="/zelaa-icon.png"
            alt=""
            width={40}
            height={40}
            className="rounded-[10px]"
            style={{ width: 40, height: 40, filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
          />
        </motion.div>
      </div>

      {/* Floating nodes */}
      {nodes.map(({ angle, r, color, size }, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 90 + r * Math.cos(rad);
        const cy = 90 + r * Math.sin(rad);
        return (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.8 + i * 0.9, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: cx - size / 2,
              top: cy - size / 2,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
}

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" className="px-4 py-24 sm:px-8 sm:py-32" style={{ background: "#FBFAFF" }}>
      <div className="mx-auto max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8"
            style={{
              background: [
                "radial-gradient(circle at 25% 30%, rgba(123,97,255,0.18) 0%, transparent 50%)",
                "radial-gradient(circle at 75% 70%, rgba(243,91,200,0.14) 0%, transparent 50%)",
              ].join(", "),
              filter: "blur(44px)",
            }}
          />

          {/* CTA card */}
          <div
            className="relative overflow-hidden rounded-[36px] px-6 py-20 text-center sm:px-12 sm:py-28"
            style={{
              background: "linear-gradient(145deg, #EDE6FF 0%, #F5F0FF 50%, #FCF0FA 100%)",
              border: "1px solid rgba(123,97,255,0.18)",
            }}
          >
            {/* Top glow inside card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0"
              style={{
                height: "60%",
                background:
                  "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(169,141,255,0.28) 0%, transparent 70%)",
              }}
            />
            {/* Inner highlight ring */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[36px]"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.55)" }}
            />

            <div className="relative mx-auto max-w-[600px]">
              {/* Core Orb */}
              <CoreOrb />

              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 6vw, 3.75rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                  color: "#130B2A",
                }}
              >
                Your future wallet
                <br />
                <em style={{ color: "#7B61FF" }}>will thank you.</em>
              </h2>

              <p
                className="mx-auto mt-6 max-w-[440px]"
                style={{ fontSize: 15, lineHeight: 1.6, color: "#686176" }}
              >
                Zelaa runs silently in Chrome and shows a risk signal every time your
                wallet asks for permission — before you click confirm.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4">
                {submitted ? (
                  <p style={{ fontSize: 14, fontWeight: 500, color: "#2D6B4A" }}>
                    You&apos;re on the list — we&apos;ll email you when the beta opens.
                  </p>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email.trim()) setSubmitted(true);
                    }}
                    className="flex w-full max-w-[400px] flex-col gap-2.5 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 rounded-full px-5 py-3 text-[14px] outline-none transition-colors placeholder:text-ink-ghost"
                      style={{ border: "1px solid rgba(123,97,255,0.20)", background: "rgba(255,255,255,0.90)", color: "#130B2A" }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(123,97,255,0.20)")}
                    />
                    <button
                      type="submit"
                      className="btn-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3 text-[14px] font-medium"
                    >
                      <ChromeIcon size={16} />
                      Join Chrome Beta
                    </button>
                  </form>
                )}
                <p style={{ fontSize: 12, color: "#9A92AA", letterSpacing: "0.01em" }}>
                  No seed phrase · Non-custodial · Read-only by design
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
