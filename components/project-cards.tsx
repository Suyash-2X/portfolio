"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "GeneTalk - Cross Species Communication",
    description:
      "A Project that helps us understand Animals more easily and communicate with them using data analysis techniques. It has 3 main Deep Learning models to interpret animal behaviors : By using voice, images, and text data.",
    tech: ["Tensorflow", "Next.js", "Pandas", "FastAPI"],
  },
  {
    title: "SilentVoice",
    description:
      "An AI-powered application that translates sign language into text and speech in real-time using computer vision and natural language processing techniques.",
    tech: ["APIs", "Python", "Node.js", "React.js", "Tensorflow"],
  },
]

export function ProjectCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <motion.div key={project.title} variants={cardVariants} whileHover={{ y: -10 }} className="group relative">
          {/* Glassmorphism card */}
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg pointer-events-none"
            style={{
              background: "linear-gradient(to bottom-right, #00eeff, #b967ff)",
            }}
          />

          <div
            className="relative p-6 rounded-lg border transition-colors min-h-80 flex flex-col"
            style={{
              borderColor: "#00eeff33",
              background: "linear-gradient(to bottom-right, rgba(10, 10, 15, 0.5), rgba(13, 17, 23, 0.5))",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#b967ff66"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#00eeff33"
            }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-lg pointer-events-none"
              style={{
                background: "linear-gradient(to bottom-left, #b967ff, transparent)",
              }}
            />

            <h4
              className="text-lg font-semibold mb-3 group-hover:transition-colors"
              style={{ color: "#00eeff" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#b967ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#00eeff")}
            >
              {project.title}
            </h4>

            <p className="text-sm mb-6 flex-grow" style={{ color: "#aaaacc" }}>
              {project.description}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full border transition-colors"
                  style={{
                    borderColor: "#7ee3ff66",
                    background: "#7ee3ff08",
                    color: "#7ee3ff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#b967ff99"
                    e.currentTarget.style.background = "#b967ff18"
                    e.currentTarget.style.color = "#b967ff"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#7ee3ff66"
                    e.currentTarget.style.background = "#7ee3ff08"
                    e.currentTarget.style.color = "#7ee3ff"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Animated bottom line on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: "linear-gradient(to right, #00eeff, #b967ff)",
              }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
