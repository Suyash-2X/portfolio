"use client"

import { motion } from "framer-motion"

const tools = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "Y" },
  { name: "HTML5", icon: "🕷️" },
  { name: "Javascript", icon: "⚙️" },
  { name: "Pandas", icon: "🐼" },
  { name: "APIs", icon: "🔌" },
]

export function ToolBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
          onHoverStart={() => {}}
        >
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg pointer-events-none"
            style={{
              background: "linear-gradient(to bottom-right, #00eeff, #b967ff)",
            }}
          />

          <div
            className="relative px-4 py-3 rounded-lg border transition-colors"
            style={{
              borderColor: "#00eeff4d",
              background: "linear-gradient(to bottom-right, rgba(10, 10, 15, 0.6), rgba(13, 17, 23, 0.6))",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-2xl mb-2">{tool.icon}</div>
            <p
              className="text-sm font-medium group-hover:transition-colors"
              style={{ color: "#00eeff" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b967ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#00eeff")}
            >
              {tool.name}
            </p>
          </div>

          {/* Pulsing ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg border"
            style={{ borderColor: "#b967ff" }}
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
