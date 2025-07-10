"use client"

import { motion } from "framer-motion"
import { ArrowRight, Search, Target, Share2, Mail, BarChart, Zap } from "lucide-react"

const ServicesTeaser = () => {
  const services = [
    {
      icon: Search,
      title: "SEO/SEM",
      description: "Boost your search engine visibility",
      color: "github-accent",
    },
    {
      icon: Target,
      title: "PPC Management",
      description: "Maximize ROI with strategic campaigns",
      color: "github-success",
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Build brand awareness and engagement",
      color: "github-attention",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads with targeted campaigns",
      color: "github-severe",
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Data-driven insights and optimization",
      color: "github-sponsors",
    },
    {
      icon: Zap,
      title: "AI Marketing",
      description: "Leverage AI for smarter decisions",
      color: "github-danger",
    },
  ]

  return (
    <section className="py-24 bg-github-canvas-default">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-github-fg-default mb-6">
            Comprehensive marketing solutions
          </h2>
          <p className="text-xl text-github-fg-muted max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale your marketing campaigns with confidence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              onClick={() => {
                window.location.href = "/services"
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }}
              className="card-github group cursor-pointer hover:scale-105 transition-all duration-300 hover:border-blue-400/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = ""
                e.currentTarget.style.boxShadow = ""
              }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-${service.color}-subtle rounded-github mb-4 group-hover:bg-${service.color}-muted transition-colors duration-200`}
              >
                <service.icon className={`w-6 h-6 text-${service.color}-fg`} />
              </div>
              <h3 className="text-lg font-semibold text-github-fg-default mb-2">{service.title}</h3>
              <p className="text-github-fg-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => {
              window.location.href = "/services"
              // Ensure page loads at top
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }, 100)
            }}
            className="inline-flex items-center text-base py-3 px-6 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
            style={{
              background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(45deg, #2563EB, #7C3AED, #DB2777)"
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)"
              e.currentTarget.style.transform = "translateY(0) scale(1)"
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
          >
            Explore all services
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesTeaser
