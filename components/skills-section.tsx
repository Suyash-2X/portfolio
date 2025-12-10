"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    category: "Web Development",
    skills: ["HTML5, CSS3", "JavaScript", "Python","Django"],
  },
  {
    category: "Data Processing",
    skills: ["Pandas", "NumPy", "Polars", "SQL", ],
  },
  {
    category: "APIs & Integrations",
    skills: ["REST APIs", "Webhooks", "OAuth2", "API Design"],
  },
  {
    category: "Technologies",
    skills: ["Python", "PostgreSQL", "Redis", "Docker", "FastAPI"],
  },
]

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0, 238, 255, 0.2) 0%, transparent 70%)" }}
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
              textShadow: "0 0 20px rgba(185, 103, 255, 0.2)",
            }}
          >
            Skills & Expertise
          </h2>
          <p style={{ color: "#b0b0b0" }} className="text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust data automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="rounded-xl p-8 border-2 backdrop-blur-sm group"
              style={{
                borderColor: "rgba(185, 103, 255, 0.3)",
                backgroundColor: "rgba(10, 10, 15, 0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(185, 103, 255, 0.8)"
                e.currentTarget.style.boxShadow = "0 0 40px rgba(185, 103, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(185, 103, 255, 0.3)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#b967ff" }}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium border transition-all"
                    style={{
                      borderColor: "#7ee3ff",
                      color: "#7ee3ff",
                      backgroundColor: "rgba(126, 227, 255, 0.05)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
