"use client"

import { HeroSection } from "@/components/hero-section"
import { WebScrapingSection } from "@/components/web-scraping-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <HeroSection />
      <WebScrapingSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
