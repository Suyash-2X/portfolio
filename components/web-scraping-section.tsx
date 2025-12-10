"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ParticleBackground } from "./particle-background"
import { DataFlowVisualization } from "./data-flow-visualization"
import { ToolBadges } from "./tool-badges"
import { ProjectCards } from "./project-cards"
import { LiveScrapingDemo } from "./live-scraping-demo"

export function WebScrapingSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background Elements */}
      <ParticleBackground />

      {/* Gradient Overlays */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 blur-3xl rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom-right, #b967ff, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-5 blur-3xl rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to top-right, #00eeff, transparent)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-12 py-20">
        {/* Header Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="font-exo2 text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00eeff, #b967ff, #7ee3ff)",
            }}
          >
            Web Scraping & Data Flow
          </h2>
          <p className="text-xl md:text-2xl font-light mb-6" style={{ color: "#7ee3ff" }}>
            Transforming the web into structured insight.
          </p>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#aaaacc" }}>
            I build automated scripts and pipelines that harvest, clean, and visualize data from the web—turning chaos
            into clarity. Every data point tells a story; I extract and illuminate it.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Description & Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-exo2 text-2xl font-semibold mb-6" style={{ color: "#00eeff" }}>
              Core Technologies
            </h3>
            <p className="mb-8" style={{ color: "#aaaacc" }}>
              My toolkit combines powerful Python libraries with modern APIs to create robust, scalable data collection
              systems. On the backend, I leverage frameworks like Django and FastAPI for efficient data processing. On the frontend, I use React and Next.js to visualize and interact with collected data in real-time.
              
            </p>
            <ToolBadges />
          </motion.div>

          {/* Right Column: Data Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DataFlowVisualization />
          </motion.div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-exo2 text-3xl font-semibold mb-10" style={{ color: "#00eeff" }}>
            Scraping Projects
          </h3>
          <ProjectCards />
        </motion.div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-exo2 text-3xl font-semibold mb-10" style={{ color: "#00eeff" }}>
            Live Scraping Simulation
          </h3>
          <LiveScrapingDemo />
        </motion.div>
      </div>
    </div>
  )
}
