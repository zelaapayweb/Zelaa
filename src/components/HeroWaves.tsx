"use client";

/**
 * Soft atmospheric pink/blush/peach glow backdrop for the hero.
 * Pure CSS radial gradients — no SVG paths, no saturation, barely-there.
 * Decorative only — aria-hidden, pointer-inert.
 */
export function HeroWaves() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Central pink halo behind the headline */}
      <div
        className="absolute left-1/2 top-1/4 h-[36rem] w-[60rem] -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,199,217,0.32) 0%, transparent 60%)" }}
      />
      {/* Left peach accent */}
      <div
        className="absolute -left-20 top-1/3 h-80 w-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(248,223,201,0.22) 0%, transparent 62%)" }}
      />
      {/* Right blush accent */}
      <div
        className="absolute -right-20 top-2/5 h-72 w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(246,214,226,0.28) 0%, transparent 58%)" }}
      />
      {/* Bottom warm cream lift */}
      <div
        className="absolute bottom-0 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(249,236,216,0.20) 0%, transparent 65%)" }}
      />
    </div>
  );
}
