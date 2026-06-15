"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-moss-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
