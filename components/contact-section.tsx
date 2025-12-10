"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const contactLinks = [
    { label: "Email", value: "suyashpro9595@gmail.com", icon: "✉", href: "mailto:suyashpro9595@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/suyash-pratap-singh-b28656397", icon: "🔗", href: "https://linkedin.com/in/suyash-pratap-singh-b28656397" },
    { label: "GitHub", value: "github.com/yourprofile", icon: "⚙", href: "https://github.com/yourprofile" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    setIsModalOpen(false)
  }

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(185, 103, 255, 0.3) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(0, 238, 255, 0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: "#f0f0f0",
              textShadow: "0 0 20px rgba(0, 238, 255, 0.2)",
            }}
          >
            Let's Connect
          </h2>
          <p className="text-lg mb-12" style={{ color: "#b0b0b0" }}>
            Have a data project in mind? I'd love to discuss how I can help transform your data challenges into
            opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            style={{
              background: "linear-gradient(135deg, #00eeff 0%, #b967ff 100%)",
              color: "#0a0a0f",
              boxShadow: "0 0 30px rgba(0, 238, 255, 0.4)",
            }}
          >
            Start a Project
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-8 justify-center flex-wrap"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="text-3xl mb-2 transition-all" style={{ opacity: hoveredLink === link.label ? 1 : 0.7 }}>
                {link.icon}
              </div>
              <p className="text-sm font-semibold" style={{ color: "#7ee3ff" }}>
                {link.label}
              </p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={hoveredLink === link.label ? { opacity: 1, height: "auto" } : {}}
                className="text-xs mt-1 overflow-hidden"
                style={{ color: "#b0b0b0" }}
              >
                {link.value}
              </motion.p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t"
          style={{ borderColor: "rgba(0, 238, 255, 0.2)" }}
        >
          <p style={{ color: "#666" }} className="text-sm">
            © 2025 Data Engineer. Crafted with code and ✨
          </p>
        </motion.div>
      </div>

      {/* Modal Backdrop & Contact Form */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            >
              <div
                className="relative rounded-2xl p-8 backdrop-blur-xl border"
                style={{
                  background: "rgba(15, 15, 25, 0.8)",
                  borderColor: "rgba(0, 238, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 238, 255, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
                }}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-2xl transition-all hover:scale-110"
                  style={{ color: "#7ee3ff" }}
                >
                  ✕
                </button>

                <h3
                  className="text-3xl font-bold mb-6"
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: "#f0f0f0",
                  }}
                >
                  Start Your Project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#7ee3ff" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(0, 238, 255, 0.3)",
                        color: "#f0f0f0",
                        focusBorderColor: "rgba(0, 238, 255, 0.6)",
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#7ee3ff" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all focus:outline-none focus:ring-2"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(0, 238, 255, 0.3)",
                        color: "#f0f0f0",
                      }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#7ee3ff" }}>
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all focus:outline-none focus:ring-2 resize-none"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(0, 238, 255, 0.3)",
                        color: "#f0f0f0",
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg font-semibold text-lg transition-all mt-6"
                    style={{
                      background: "linear-gradient(135deg, #00eeff 0%, #b967ff 100%)",
                      color: "#0a0a0f",
                      boxShadow: "0 0 30px rgba(0, 238, 255, 0.3)",
                    }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
