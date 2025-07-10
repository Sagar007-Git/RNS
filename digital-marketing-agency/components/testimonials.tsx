"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "DigitalPro transformed our online presence completely. Their AI-driven approach increased our leads by 300% in just 6 months.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "E-Commerce Plus",
      role: "Marketing Director",
      content:
        "The ROI we've seen from their campaigns is incredible. Professional, data-driven, and results-focused team.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "Founder",
      content:
        "Their expertise in healthcare marketing is unmatched. They understand our industry and deliver targeted campaigns that work.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=ER",
    },
    {
      id: 4,
      name: "David Kim",
      company: "StartupFlow",
      role: "Founder",
      content:
        "Amazing results! Our conversion rate doubled within 3 months. The team is professional and delivers on their promises.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=DK",
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "GrowthLab",
      role: "CMO",
      content:
        "Best investment we made for our marketing. The AI-powered insights helped us understand our customers better.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=LW",
    },
  ])

  const [dragPositions, setDragPositions] = useState(testimonials.map(() => ({ x: 0, y: 0 })))

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117]">
      {/* GitHub-style galaxy background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">Drag the sticky notes to explore reviews</p>
        </motion.div>

        <div className="flex justify-center relative min-h-[500px] overflow-hidden">
          {/* Galaxy Core Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-radial from-purple-500/30 via-blue-600/20 via-indigo-700/15 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute w-64 h-64 bg-gradient-radial from-pink-400/25 via-purple-600/15 to-transparent rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-32 h-32 bg-gradient-radial from-cyan-400/30 via-blue-500/20 to-transparent rounded-full blur-md animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Enhanced Particle System */}
          <div className="absolute inset-0">
            {/* Center cluster particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`center-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"
                style={{
                  left: `${45 + Math.random() * 10}%`,
                  top: `${45 + Math.random() * 10}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
                }}
              />
            ))}

            {/* Mid-range particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`mid-${i}`}
                className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full opacity-40 animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}

            {/* Outer particles */}
            {[...Array(25)].map((_, i) => (
              <div
                key={`outer-${i}`}
                className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full opacity-20 animate-drift"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          {/* New Testimonials Grid with Revolving Border */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Revolving Border Container */}
                <div className="relative p-[1px] rounded-lg overflow-hidden bg-gradient-to-r from-purple-400/30 via-blue-400/30 via-cyan-400/30 to-purple-400/30 animate-spin-slow">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-transparent via-blue-400/20 to-transparent animate-pulse"></div>

                  {/* Content Card */}
                  <div className="relative bg-github-canvas-overlay rounded-lg p-6 h-full backdrop-blur-sm">
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-3">
                        <h3 className="text-github-fg-default font-semibold text-sm">{testimonial.name}</h3>
                        <p className="text-github-fg-muted text-xs">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Review Content */}
                    <p className="text-github-fg-default text-sm leading-relaxed mb-4">"{testimonial.content}"</p>

                    {/* Rating */}
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
