"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Risk engine", href: "#detection" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

const GRAD = "linear-gradient(90deg, #6F5BFF, #F35BC8)";

function NavLogo() {
  return (
    <a href="#" aria-label="Zelaa home" className="inline-flex items-center gap-2.5">
      <img
        src="/zelaa-icon.png"
        alt=""
        width={34}
        height={34}
        className="shrink-0 rounded-[9px]"
        style={{ width: 34, height: 34 }}
      />
      <span
        style={{
          fontSize: 21,
          fontWeight: 650,
          letterSpacing: "-0.03em",
          color: "#130B2A",
          lineHeight: 1,
        }}
      >
        Zelaa
      </span>
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-5 z-50 px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          height: 68,
          borderRadius: 999,
          background: "rgba(251,250,255,0.90)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(123,97,255,0.12)",
          boxShadow:
            "0 2px 8px rgba(19,11,42,0.04), 0 16px 48px rgba(123,97,255,0.08)",
        }}
        className="relative flex items-center px-7"
      >
        {/* Logo */}
        <div style={{ flex: "0 0 auto", marginRight: "auto" }}>
          <NavLogo />
        </div>

        {/* Center links — absolutely positioned so they're visually centered
            regardless of asymmetric logo/button widths */}
        <nav
          className="absolute hidden items-center lg:flex"
          style={{ left: "50%", transform: "translateX(-50%)", gap: 30 }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#9A92AA",
                transition: "color 0.15s",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#130B2A")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#9A92AA")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: buttons */}
        <div
          className="hidden items-center lg:flex"
          style={{ gap: 8, flex: "0 0 auto", marginLeft: "auto" }}
        >
          <a
            href="mailto:hello@zelaa.xyz"
            style={{
              height: 42,
              paddingLeft: 22,
              paddingRight: 22,
              borderRadius: 999,
              background: "transparent",
              color: "#9A92AA",
              fontSize: 13,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#130B2A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#9A92AA")
            }
          >
            Contact
          </a>
          <a
            href="#waitlist"
            className="btn-gradient"
            style={{
              height: 42,
              paddingLeft: 22,
              paddingRight: 22,
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            Join Chrome Beta
          </a>
        </div>

        {/* Hamburger — no inline display so lg:hidden works correctly */}
        <button
          className="grid place-items-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            marginLeft: "auto",
            width: 42,
            height: 42,
            borderRadius: 999,
            background: "rgba(123,97,255,0.08)",
            border: "none",
            color: "#130B2A",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              maxWidth: 1240,
              margin: "8px auto 0",
              borderRadius: 24,
              background: "rgba(251,250,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(123,97,255,0.12)",
              boxShadow: "0 8px 32px rgba(19,11,42,0.10)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "10px 22px 22px" }}>
              {LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "13px 0",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#130B2A",
                    borderBottom:
                      i < LINKS.length - 1
                        ? "1px solid rgba(123,97,255,0.08)"
                        : "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 18,
                }}
              >
                <a
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="btn-gradient"
                  style={{
                    height: 50,
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Join Chrome Beta
                </a>
                <a
                  href="mailto:hello@zelaa.xyz"
                  onClick={() => setOpen(false)}
                  style={{
                    height: 50,
                    borderRadius: 999,
                    background: "transparent",
                    color: "#686176",
                    fontSize: 14,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(123,97,255,0.15)",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
