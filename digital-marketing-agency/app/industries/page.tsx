"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Monitor, Heart, DollarSign, ShoppingCart, Factory, GraduationCap } from "lucide-react"

const IndustriesPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const industries = [
    {
      id: 0,
      name: "Technology",
      icon: Monitor,
      description: "Cutting-edge marketing solutions for tech companies",
      caseStudies: ["SaaS Startup - 400% user acquisition", "AI Company - 250% lead generation"],
      metrics: [
        "300% increase in qualified leads",
        "150% improvement in conversion rates",
        "200% growth in organic traffic",
      ],
      approaches: [
        "Technical content marketing",
        "Developer-focused campaigns",
        "B2B lead generation",
        "Product launch strategies",
      ],
    },
    {
      id: 1,
      name: "Healthcare",
      icon: Heart,
      description: "Compliant and effective marketing for healthcare providers",
      caseStudies: ["Medical Practice - 200% patient acquisition", "Health Tech - 180% app downloads"],
      metrics: [
        "250% increase in patient inquiries",
        "120% improvement in appointment bookings",
        "300% growth in online reviews",
      ],
      approaches: [
        "HIPAA-compliant campaigns",
        "Patient education content",
        "Local SEO optimization",
        "Reputation management",
      ],
    },
    {
      id: 2,
      name: "Finance",
      icon: DollarSign,
      description: "Trust-building marketing strategies for financial services",
      caseStudies: ["FinTech Startup - 350% user growth", "Investment Firm - 200% client acquisition"],
      metrics: [
        "400% increase in qualified leads",
        "180% improvement in client retention",
        "250% growth in assets under management",
      ],
      approaches: [
        "Compliance-focused content",
        "Trust-building campaigns",
        "Educational webinars",
        "Thought leadership",
      ],
    },
    {
      id: 3,
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Revenue-driving strategies for online retailers",
      caseStudies: ["Fashion Brand - 300% online sales", "Electronics Store - 250% conversion rate"],
      metrics: [
        "350% increase in online revenue",
        "200% improvement in cart conversion",
        "180% growth in customer lifetime value",
      ],
      approaches: ["Product advertising", "Shopping campaigns", "Email automation", "Social commerce"],
    },
    {
      id: 4,
      name: "Manufacturing",
      icon: Factory,
      description: "B2B marketing solutions for manufacturing companies",
      caseStudies: ["Industrial Equipment - 280% lead generation", "Manufacturing Corp - 220% sales pipeline"],
      metrics: ["300% increase in B2B leads", "160% improvement in sales cycle", "240% growth in qualified prospects"],
      approaches: [
        "Technical content creation",
        "Trade show integration",
        "LinkedIn advertising",
        "Industry partnerships",
      ],
    },
    {
      id: 5,
      name: "Education",
      icon: GraduationCap,
      description: "Student acquisition and engagement strategies for educational institutions",
      caseStudies: ["Online University - 400% enrollment", "Training Institute - 300% course completion"],
      metrics: [
        "350% increase in student inquiries",
        "200% improvement in enrollment rates",
        "180% growth in course completion",
      ],
      approaches: [
        "Student journey mapping",
        "Educational content marketing",
        "Social media engagement",
        "Parent outreach campaigns",
      ],
    },
  ]

  const ActiveIcon = industries[activeTab].icon

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized marketing solutions tailored to your industry's unique challenges and opportunities
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-xl transition-all duration-300 overflow-hidden group text-white ${
                activeTab === index ? "" : "bg-primary-950 hover:bg-primary-900"
              }`}
              style={{
                border:
                  activeTab === index ? "2px solid rgba(147, 51, 234, 0.8)" : "2px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                background:
                  activeTab === index
                    ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.20) 50%, rgba(239, 68, 68, 0.15) 100%)"
                    : "",
                boxShadow:
                  activeTab === index
                    ? "inset 0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(147, 51, 234, 0.2), inset 0 0 60px rgba(239, 68, 68, 0.1)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.border = "2px solid rgba(147, 51, 234, 0.4)"
                  e.currentTarget.style.background =
                    "radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.08) 50%, rgba(239, 68, 68, 0.05) 100%)"
                  e.currentTarget.style.boxShadow =
                    "inset 0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(147, 51, 234, 0.15), inset 0 0 45px rgba(239, 68, 68, 0.08)"
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== index) {
                  e.currentTarget.style.border = "2px solid rgba(255, 255, 255, 0.1)"
                  e.currentTarget.style.background = ""
                  e.currentTarget.style.boxShadow = "none"
                }
              }}
            >
              {/* Inner glow overlay for active state */}
              {activeTab === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-red-500/10 rounded-xl animate-pulse"></div>
              )}

              {/* Hover glow overlay for non-active buttons */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/8 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="flex items-center space-x-2 relative z-10">
                <industry.icon className="h-5 w-5" />
                <span>{industry.name}</span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Industry Content */}
        <motion.div
          key={activeTab}
          className="relative bg-github-canvas-overlay/30 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            borderImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1)) 1",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glass border effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400/6 via-blue-500/8 via-violet-400/5 to-rose-400/7 overflow-hidden">
            <div
              className="h-full w-full backdrop-blur-lg"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15) 0%, rgba(147, 51, 234, 0.12) 20%, rgba(99, 102, 241, 0.10) 35%, rgba(59, 130, 246, 0.08) 50%, rgba(30, 64, 175, 0.06) 65%, transparent 80%), radial-gradient(circle at 70% 20%, rgba(168, 85, 247, 0.08) 0%, rgba(124, 58, 237, 0.06) 30%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.07) 0%, rgba(67, 56, 202, 0.05) 40%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(139, 92, 246, 0.06) 0%, rgba(109, 40, 217, 0.04) 35%, transparent 55%)",
                border: "4px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 30px rgba(147, 51, 234, 0.08)",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Keep the existing grid content but wrap it in the relative z-10 div */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  {ActiveIcon && <ActiveIcon className="h-12 w-12 text-accent" />}
                  <div>
                    <h2 className="text-3xl font-bold text-white">{industries[activeTab].name}</h2>
                    <p className="text-gray-300">{industries[activeTab].description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-accent mb-4">Success Metrics</h3>
                  <div className="space-y-3">
                    {industries[activeTab].metrics.map((metric, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-accent mb-4">Our Approach</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industries[activeTab].approaches.map((approach, index) => (
                      <div key={index} className="bg-primary-900 rounded-lg p-3 text-center">
                        <span className="text-white text-sm">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-accent mb-4">Case Studies</h3>
                  <div className="space-y-4">
                    {industries[activeTab].caseStudies.map((study, index) => (
                      <div key={index} className="bg-primary-900 rounded-lg p-4 border-l-4 border-accent">
                        <p className="text-white font-medium">{study}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss how our {industries[activeTab].name.toLowerCase()} expertise can help grow your
                    business.
                  </p>
                  <div className="text-center">
                    <button
                      onClick={() => (window.location.href = "/contact")}
                      className="px-8 py-4 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IndustriesPage
