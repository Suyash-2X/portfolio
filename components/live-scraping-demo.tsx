"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DataLine {
  id: string
  text: string
  timestamp: Date
}

export function LiveScrapingDemo() {
  const [dataLines, setDataLines] = useState<DataLine[]>([])

  useEffect(() => {
    const demoData = [
      "→ Connecting to source.example.com",
      "✓ Connection established",
      "→ Parsing DOM structure",
      "→ Extracting product listings",
      "✓ Found 247 items",
      '→ Cleaning data: {"title": "Quantum Processor", "price": "$899.99"}',
      '→ Cleaning data: {"title": "Neural Interface", "price": "$1,299.99"}',
      '→ Cleaning data: {"title": "Data Router", "price": "$749.99"}',
      "→ Validating entries",
      "✓ Validation complete",
      "→ Writing to database",
      "✓ Successfully stored 247 records",
      "→ Generating visualization",
      "✓ Process complete in 2.3s",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < demoData.length) {
        setDataLines((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: demoData[index],
            timestamp: new Date(),
          },
        ])
        index++
      } else {
        index = 0
        setDataLines([])
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative rounded-lg border overflow-hidden p-6"
      style={{
        borderColor: "#00eeff33",
        background: "linear-gradient(to bottom-right, rgba(10, 10, 15, 0.6), rgba(13, 17, 23, 0.6))",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 pb-4 border-b mb-4" style={{ borderColor: "#00eeff1a" }}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff6b6b" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#ffd93d" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#00eeff" }} />
        </div>
        <span className="text-xs font-mono ml-3" style={{ color: "#7ee3ff" }}>
          scraper@terminal ~ python scrape.py
        </span>
      </div>

      {/* Data lines container */}
      <div className="h-64 overflow-y-auto font-mono text-sm space-y-1 scrollbar-hide">
        {dataLines.map((line, index) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <span style={{ color: "#7ee3ff" }}>{line?.text?.includes?.("✓") ? "✓" : "→"}</span>
            <span style={{ color: line?.text?.includes?.("✓") ? "#00eeff" : "#aaaacc" }}>{line?.text || ""}</span>
            {index === dataLines.length - 1 && (
              <motion.span
                animate={{ opacity: [0.3, 1] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                className="w-1.5 h-4"
                style={{ background: "#b967ff" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Glow effect at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-5 pointer-events-none blur-xl"
        style={{
          background: "linear-gradient(to top, #00eeff, transparent)",
        }}
      />
    </div>
  )
}
