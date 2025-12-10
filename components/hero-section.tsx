"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(185, 103, 255, 0.3) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 238, 255, 0.2) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div
            className="inline-block px-4 py-2 rounded-full border"
            style={{
              borderColor: "rgba(0, 238, 255, 0.5)",
              backgroundColor: "rgba(0, 238, 255, 0.05)",
            }}
          >
            <span style={{ color: "#7ee3ff" }} className="text-sm font-medium">
              Welcome to my digital space
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: "#f0f0f0",
            textShadow: "0 0 30px rgba(0, 238, 255, 0.3)",
          }}
        >
          I am <br />
          <span style={{ color: "#b967ff" }}>Suyash Pratap Singh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#b0b0b0" }}
        >
          Web Developer Transitioning into AI/ML and Transforming raw data into actionable intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-semibold transition-all"
            style={{
              background: "linear-gradient(135deg, #00eeff 0%, #b967ff 100%)",
              color: "#0a0a0f",
              boxShadow: "0 0 20px rgba(0, 238, 255, 0.4)",
            }}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-semibold border-2 transition-all"
            style={{
              borderColor: "#00eeff",
              color: "#00eeff",
              boxShadow: "0 0 15px rgba(0, 238, 255, 0.2)",
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div style={{ color: "#7ee3ff" }} className="text-sm">
          Scroll to explore
        </div>
        <div className="w-0.5 h-8 mx-auto mt-2 rounded-full" style={{ backgroundColor: "#7ee3ff", opacity: 0.5 }} />
      </motion.div>
    </section>
  )
}
