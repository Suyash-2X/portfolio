"use client"

import { motion } from "framer-motion"

export function DataFlowVisualization() {
  const duration = 6

  return (
    <div
      className="relative w-full h-80 rounded-lg border overflow-hidden p-8"
      style={{
        borderColor: "#00eeff33",
        background: "linear-gradient(to bottom-right, rgba(10, 10, 15, 0.4), rgba(13, 17, 23, 0.4))",
        backdropFilter: "blur(12px)",
      }}
    >
      <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 238, 255, 0.05)" strokeWidth="0.5" />
          </pattern>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="400" height="300" fill="url(#grid)" />

        {/* Source icon */}
        <g>
          <circle cx="50" cy="150" r="25" fill="none" stroke="#00eeff" strokeWidth="2" />
          <text x="50" y="155" textAnchor="middle" fill="#00eeff" fontSize="12" fontFamily="monospace">
            WEB
          </text>
        </g>

        {/* Scraper module */}
        <g>
          <rect x="170" y="125" width="60" height="50" rx="4" fill="none" stroke="#b967ff" strokeWidth="2" />
          <text x="200" y="155" textAnchor="middle" fill="#b967ff" fontSize="11" fontFamily="monospace">
            SCRAPER
          </text>
        </g>

        {/* Output/Database icon */}
        <g>
          <circle cx="350" cy="150" r="25" fill="none" stroke="#7ee3ff" strokeWidth="2" />
          <text x="350" y="152" textAnchor="middle" fill="#7ee3ff" fontSize="10" fontFamily="monospace">
            DB
          </text>
          <text x="350" y="165" textAnchor="middle" fill="#7ee3ff" fontSize="8" fontFamily="monospace">
            OUTPUT
          </text>
        </g>

        {/* Animated data flow lines */}
        <motion.line
          x1="75"
          y1="150"
          x2="170"
          y2="150"
          stroke="#00eeff"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: duration - 1.5 }}
          filter="url(#glow)"
        />

        <motion.line
          x1="230"
          y1="150"
          x2="325"
          y2="150"
          stroke="#b967ff"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: duration - 1.5 }}
          filter="url(#glow)"
        />

        {/* Moving data dots */}
        {[0, 1].map((i) => (
          <motion.circle
            key={i}
            cx="50"
            cy="150"
            r="4"
            fill="#00eeff"
            filter="url(#glow)"
            animate={{
              cx: [50, 170, 230, 350],
              cy: [150, 150, 150, 150],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * (duration / 2),
            }}
          />
        ))}

        {/* Label lines */}
        <text x="112" y="140" fill="#7ee3ff" fontSize="10" fontFamily="monospace" opacity="0.6">
          fetch
        </text>
        <text x="277" y="140" fill="#7ee3ff" fontSize="10" fontFamily="monospace" opacity="0.6">
          parse
        </text>
      </svg>

      {/* Corner glow accents */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom-left, #b967ff, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-10 blur-2xl rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to top-right, #00eeff, transparent)",
        }}
      />
    </div>
  )
}
