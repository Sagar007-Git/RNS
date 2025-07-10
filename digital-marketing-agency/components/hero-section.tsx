"use client"

import { motion } from "framer-motion"
import { Zap, GitBranch, Users } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117]">
      {/* Dynamic Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(88, 166, 255, 0.1)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.08)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.12)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.08)" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.06)" />
              <stop offset="50%" stopColor="rgba(251, 146, 60, 0.1)" />
              <stop offset="100%" stopColor="rgba(88, 166, 255, 0.06)" />
            </linearGradient>
          </defs>

          {/* Wave Layer 1 */}
          <path
            d="M0,400 C300,320 600,480 900,400 C1050,360 1150,440 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -100,20; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>

          {/* Wave Layer 2 */}
          <path
            d="M0,450 C200,380 500,520 800,450 C950,410 1100,490 1200,450 L1200,800 L0,800 Z"
            fill="url(#waveGradient2)"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 80,-15; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>

          {/* Wave Layer 3 */}
          <path
            d="M0,500 C250,440 550,560 850,500 C1000,460 1120,520 1200,500 L1200,800 L0,800 Z"
            fill="url(#waveGradient3)"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -60,25; 0,0"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>

          {/* Floating Wave Elements */}
          <path
            d="M100,200 Q300,150 500,200 T900,200"
            stroke="rgba(88, 166, 255, 0.2)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              values="M100,200 Q300,150 500,200 T900,200;M100,220 Q300,170 500,220 T900,220;M100,200 Q300,150 500,200 T900,200"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M200,300 Q400,250 600,300 T1000,300"
            stroke="rgba(139, 92, 246, 0.15)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="M200,300 Q400,250 600,300 T1000,300;M200,280 Q400,230 600,280 T1000,280;M200,300 Q400,250 600,300 T1000,300"
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-white">Empowering Brands with </span>
          <br />
          <span className="text-github-accent-fg">AI-Driven Digital Marketing</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-github-accent-subtle rounded-full mb-4">
              <GitBranch className="w-6 h-6 text-github-accent-fg" />
            </div>
            <div className="text-3xl font-bold text-github-fg-default mb-2">100M+</div>
            <div className="text-github-fg-muted">Campaigns launched</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-github-success-subtle rounded-full mb-4">
              <Users className="w-6 h-6 text-github-success-fg" />
            </div>
            <div className="text-3xl font-bold text-github-fg-default mb-2">4M+</div>
            <div className="text-github-fg-muted">Organizations</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-github-attention-subtle rounded-full mb-4">
              <Zap className="w-6 h-6 text-github-attention-fg" />
            </div>
            <div className="text-3xl font-bold text-github-fg-default mb-2">99.9%</div>
            <div className="text-github-fg-muted">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
