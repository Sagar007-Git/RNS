"use client"

import HeroSection from "@/components/hero-section"
import LogoCarousel from "@/components/logo-carousel"
import ServicesTeaser from "@/components/services-teaser"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <LogoCarousel />
      <ServicesTeaser />
      <Testimonials />
    </div>
  )
}
