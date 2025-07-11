"use client"

import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
       onCanPlay={(e) => {
    const video = e.target;
    video.playbackRate = 0.7; // Adjust this value (0.5 = half speed, 2.0 = double speed)
    video.play();
        }}
      >
        <source src="/new-vd.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            color: 'white',
            textShadow: `
              0.05em 0.05em 0 rgba(0,0,0,0.25),
              0.1em 0.1em 0 rgba(0,0,0,0.15),
              0.15em 0.15em 0 rgba(0,0,0,0.1)
            `,
            transform: 'perspective(500px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <span>Empowering Brands with </span>
          <br />
          <span 
            style={{
              color: '#58a6ff',
              display: 'inline-block',
              transform: 'translateZ(20px)',
              textShadow: `
                0.05em 0.05em 0 rgba(0,0,0,0.25),
                0.1em 0.1em 0 rgba(0,0,0,0.15)
              `
            }}
          >
            AI-Driven Digital Marketing
          </span>
        </motion.h1>
      </div>
    </section>
  )
}

export default HeroSection
