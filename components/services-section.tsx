"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const services = [
  {
    title: "Web Scraping Solutions",
    description: "Custom-built scrapers for any data source with automatic updates and error handling",
    features: ["Multi-site scraping", "JavaScript rendering", "Proxy rotation", "24/7 monitoring"],
  },
  {
    title: "Frontend Development",
    description: "Responsive and dynamic user interfaces using the latest web technologies",
    features: ["HTML5 & CSS3", "Performance optimization", "Cross-browser compatibility"],
  },
  {
    title: "API Integration",
    description: "Seamless integration of complex APIs with comprehensive error handling",
    features: ["Rate limiting", "Authentication", "Caching strategies", "Performance optimization"],
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with scalable architectures and database management",
    features: ["Node.js", "Django", "Database design", "RESTful APIs"],
  },
  {
    title: "Consulting & Training",
    description: "Expert guidance on data strategies and hands-on training for your team",
    features: ["Strategy planning", "Best practices", "Team training", "Code reviews"],
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
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
              textShadow: "0 0 20px rgba(0, 238, 255, 0.2)",
            }}
          >
            Services
          </h2>
          <p style={{ color: "#b0b0b0" }} className="text-lg max-w-2xl mx-auto">
            Comprehensive data solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="rounded-xl p-6 border-2 backdrop-blur-sm group transition-all"
              style={{
                borderColor: "rgba(0, 238, 255, 0.3)",
                backgroundColor: "rgba(10, 10, 15, 0.6)",
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
                {service.title}
              </h3>
              <p className="mb-4" style={{ color: "#b0b0b0" }} className="text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "#888" }}>
                    <span style={{ color: "#b967ff" }} className="mt-1">
                      ▸
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
