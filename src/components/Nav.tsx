"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Risk Engine", href: "#risk-engine" },
  { label: "Wallet Scan", href: "#wallet-scan" },
  { label: "Security", href: "#security" },
  { label: "Early Access", href: "#waitlist" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-canvas/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#" aria-label="ZeFi home">
          <Logo />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-[1.03] active:scale-[0.98] md:inline-block"
          >
            Get early access
          </a>
          <button
            className="grid size-10 place-items-center rounded-full bg-ink/5 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-ink/5 bg-canvas px-5 pb-5 pt-2 md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-[15px] text-ink-soft hover:bg-canvas-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-ink px-4 py-3 text-center text-[15px] font-medium text-canvas"
          >
            Get early access
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}
