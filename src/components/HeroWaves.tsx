"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated recreation of the hero backdrop artwork: layered sage waves
 * with contour-line texture, soft mist, and a faint glowing node network.
 * Decorative only — aria-hidden, pointer-inert, reduced-motion aware.
 */

// Node network laid along the wave crests (viewBox 1600x600)
const NODES: [number, number][] = [
  [70, 470], [180, 525], [305, 458], [420, 540], [610, 470],
  [760, 492], [905, 470], [1060, 505], [1190, 420], [1320, 470],
  [1430, 392], [1520, 452],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
];

const WAVES = [
  {
    // Far ridge — palest, slowest
    d: "M0,430 C190,360 360,320 540,355 C740,395 880,310 1070,340 C1270,372 1420,310 1600,355 L1600,600 L0,600 Z",
    fill: "url(#wave-light)",
    opacity: 0.65,
    drift: 26,
    duration: 26,
    blur: "blur(2px)",
  },
  {
    // Mid swell
    d: "M0,500 C210,430 400,390 580,430 C780,475 950,385 1130,420 C1310,455 1460,395 1600,440 L1600,600 L0,600 Z",
    fill: "url(#wave-mid)",
    opacity: 0.8,
    drift: -34,
    duration: 21,
    blur: "blur(1px)",
  },
  {
    // Front dark mass
    d: "M0,545 C170,480 330,455 520,495 C720,538 900,460 1090,495 C1290,532 1450,470 1600,515 L1600,600 L0,600 Z",
    fill: "url(#wave-dark)",
    opacity: 0.92,
    drift: 24,
    duration: 17,
    blur: "none",
  },
];

// Contour strokes echoing the front wave edge
const CONTOURS = [
  "M0,560 C170,498 330,474 520,512 C720,553 900,478 1090,512 C1290,548 1450,488 1600,530",
  "M0,575 C170,516 330,492 520,528 C720,567 900,496 1090,528 C1290,562 1450,505 1600,545",
  "M0,590 C170,534 330,511 520,545 C720,581 900,514 1090,545 C1290,576 1450,522 1600,560",
];

function WaveSvg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1600 600"
      preserveAspectRatio="xMidYMax slice"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="wave-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9ecdd" />
          <stop offset="60%" stopColor="#cdd7bc" />
          <stop offset="100%" stopColor="#b4c1a4" />
        </linearGradient>
        <linearGradient id="wave-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6decb" />
          <stop offset="55%" stopColor="#97a886" />
          <stop offset="100%" stopColor="#6c7f5c" />
        </linearGradient>
        <linearGradient id="wave-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ba075" />
          <stop offset="45%" stopColor="#5d7050" />
          <stop offset="100%" stopColor="#3a4730" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

export function HeroWaves() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Mist halo above the waves */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-moss-100/50 via-transparent to-transparent" />

      {/* Drifting wave layers — oversized to hide the drift at the edges */}
      {WAVES.map((wave, i) => (
        <motion.div
          key={i}
          className="absolute -inset-x-[4%] bottom-0 top-0"
          animate={reduceMotion ? undefined : { x: [0, wave.drift, 0] }}
          transition={{
            duration: wave.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <WaveSvg>
            <path
              d={wave.d}
              fill={wave.fill}
              opacity={wave.opacity}
              style={{ filter: wave.blur }}
            />
            {/* Contour-line texture rides the front wave only */}
            {i === 2 &&
              CONTOURS.map((c) => (
                <path
                  key={c}
                  d={c}
                  fill="none"
                  stroke="#f7f7f1"
                  strokeWidth="1"
                  opacity="0.14"
                />
              ))}
          </WaveSvg>
        </motion.div>
      ))}

      {/* Node network — faint lines, pulsing glow points */}
      <WaveSvg>
        <g stroke="#f7f7f1" strokeWidth="1" opacity="0.22">
          {EDGES.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={NODES[a][0]}
              y1={NODES[a][1]}
              x2={NODES[b][0]}
              y2={NODES[b][1]}
            />
          ))}
        </g>
        {NODES.map(([x, y], i) => (
          <motion.g
            key={i}
            animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 4.5,
              delay: i * 0.55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <circle cx={x} cy={y} r="9" fill="#f7f7f1" opacity="0.18" />
            <circle cx={x} cy={y} r="3" fill="#fdfdf9" />
          </motion.g>
        ))}
      </WaveSvg>

      {/* Soft fade where the waves meet the content above */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-canvas via-canvas/60 to-transparent" />
    </div>
  );
}
