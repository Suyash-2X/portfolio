"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "E-Commerce Price Monitor",
    description: "Real-time price tracking across 50+ retailers with ML-powered trend analysis",
    tags: ["Python", "Scrapy", "PostgreSQL", "React"],
    stats: { data: "2.5M+", frequency: "Hourly" },
  },
  {
    id: 2,
    title: "Job Market Intelligence",
    description: "Aggregated job postings with salary analysis and market trends",
    tags: ["Beautiful Soup", "Selenium", "APIs", "Pandas"],
    stats: { data: "500K+", frequency: "Daily" },
  },
  {
    id: 3,
    title: "News Sentiment Analyzer",
    description: "Scrapes financial news and applies NLP sentiment analysis in real-time",
    tags: ["Scrapy", "NLP", "APIs", "FastAPI"],
    stats: { data: "100K+", frequency: "Real-time" },
  },
]

export function FeaturedProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(185, 103, 255, 0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: "#f0f0f0",
              textShadow: "0 0 20px rgba(0, 238, 255, 0.2)",
            }}
          >
            Featured Projects
          </h2>
          <p style={{ color: "#b0b0b0" }} className="text-lg max-w-2xl mx-auto">
            Innovative data collection and analysis solutions powering business intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-xl p-6 border-2 transition-all duration-300 backdrop-blur-sm"
              style={{
                borderColor: "rgba(0, 238, 255, 0.3)",
                backgroundColor: "rgba(10, 10, 15, 0.6)",
                boxShadow: "0 0 20px rgba(0, 238, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 238, 255, 0.8)"
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0, 238, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 238, 255, 0.3)"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 238, 255, 0.1)"
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: "#00eeff" }}>
                {project.title}
              </h3>
              <p className="mb-4" style={{ color: "#b0b0b0" }}>
                {project.description}
              </p>

              <div className="flex gap-2 flex-wrap mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(185, 103, 255, 0.15)",
                      color: "#b967ff",
                      border: "1px solid rgba(185, 103, 255, 0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <div>
                  <div style={{ color: "#00eeff" }} className="font-bold">
                    {project.stats.data}
                  </div>
                  <div style={{ color: "#888" }}>data points</div>
                </div>
                <div>
                  <div style={{ color: "#00eeff" }} className="font-bold">
                    {project.stats.frequency}
                  </div>
                  <div style={{ color: "#888" }}>update cycle</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
