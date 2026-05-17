"use client";

import { motion } from "framer-motion";

type MathAssistantMascotProps = {
  className?: string;
};

/** Inline SVG math assistant — no external image assets. */
export default function MathAssistantMascot({ className = "" }: MathAssistantMascotProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[140px] h-[140px] sm:w-[168px] sm:h-[168px] lg:w-[190px] lg:h-[190px]"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400/30 via-cyan-400/20 to-indigo-500/30 blur-2xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg
          viewBox="0 0 200 200"
          className="relative z-10 h-full w-full drop-shadow-[0_12px_28px_rgba(99,102,241,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bot-body" x1="40" y1="50" x2="160" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="0.5" stopColor="#6366F1" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id="bot-face" x1="70" y1="75" x2="130" y2="135" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEF2FF" />
              <stop offset="1" stopColor="#C7D2FE" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="178" rx="52" ry="10" fill="#6366F1" fillOpacity="0.2" />
          <rect x="55" y="70" width="90" height="88" rx="28" fill="url(#bot-body)" />
          <rect x="68" y="82" width="64" height="52" rx="16" fill="url(#bot-face)" />
          <motion.g
            animate={{ scaleY: [1, 0.12, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.2 }}
            style={{ transformOrigin: "82px 102px" }}
          >
            <ellipse cx="82" cy="102" rx="7" ry="9" fill="#312E81" />
          </motion.g>
          <motion.g
            animate={{ scaleY: [1, 0.12, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.2, delay: 0.05 }}
            style={{ transformOrigin: "118px 102px" }}
          >
            <ellipse cx="118" cy="102" rx="7" ry="9" fill="#312E81" />
          </motion.g>
          <path
            d="M88 118 Q100 128 112 118"
            stroke="#4F46E5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="62" cy="95" r="6" fill="#22D3EE" fillOpacity="0.9" />
          <circle cx="138" cy="95" r="6" fill="#22D3EE" fillOpacity="0.9" />
          <rect x="88" y="42" width="24" height="18" rx="6" fill="#A78BFA" />
          <circle cx="100" cy="36" r="10" fill="#22D3EE" />
          <path
            d="M40 115 L28 125 L40 132"
            stroke="#8B5CF6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M160 115 L172 125 L160 132"
            stroke="#8B5CF6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="168"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="700"
            fontFamily="system-ui, sans-serif"
          >
            d/dx
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}
