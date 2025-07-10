"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, Target, Share2, Mail, Users, BarChart, Zap, Bot, Globe, TrendingUp } from "lucide-react"

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const services = [
    {
      id: 1,
      icon: Search,
      title: "SEO/SEM",
      category: "search",
      brief: "Boost your search engine visibility and drive organic traffic",
      explanation:
        "Our comprehensive SEO/SEM services combine technical optimization, content strategy, and paid search campaigns to maximize your online visibility.",
      process: [
        "Keyword Research & Analysis",
        "Technical SEO Audit",
        "Content Optimization",
        "Link Building",
        "PPC Campaign Setup",
        "Performance Monitoring",
      ],
      caseStudy: "TechStart Inc. - 300% increase in organic traffic",
      pricing: "Premium",
      features: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO",
        "Local SEO",
        "PPC Management",
        "Analytics & Reporting",
      ],
    },
    {
      id: 2,
      icon: Target,
      title: "PPC Management",
      category: "advertising",
      brief: "Maximize ROI with strategic paid advertising campaigns",
      explanation:
        "Data-driven PPC management across Google Ads, Facebook, LinkedIn, and other platforms to ensure optimal ad spend and maximum conversions.",
      process: [
        "Campaign Strategy",
        "Audience Research",
        "Ad Creation",
        "Bid Management",
        "A/B Testing",
        "Performance Optimization",
      ],
      caseStudy: "E-Commerce Plus - 250% ROI improvement",
      pricing: "Premium",
      features: [
        "Google Ads",
        "Facebook Ads",
        "LinkedIn Ads",
        "Display Advertising",
        "Remarketing",
        "Conversion Tracking",
      ],
    },
    {
      id: 3,
      icon: Share2,
      title: "Social Media Marketing",
      category: "social",
      brief: "Build brand awareness and engage your audience",
      explanation:
        "Comprehensive social media strategies that build communities, drive engagement, and convert followers into customers.",
      process: [
        "Social Media Audit",
        "Content Strategy",
        "Content Creation",
        "Community Management",
        "Influencer Outreach",
        "Performance Analysis",
      ],
      caseStudy: "HealthTech Solutions - 400% engagement increase",
      pricing: "Standard",
      features: [
        "Content Creation",
        "Community Management",
        "Social Advertising",
        "Influencer Marketing",
        "Analytics",
        "Brand Monitoring",
      ],
    },
    {
      id: 4,
      icon: Mail,
      title: "Email Marketing",
      category: "content",
      brief: "Nurture leads and retain customers with targeted email campaigns",
      explanation:
        "Personalized email marketing campaigns that nurture leads, increase customer retention, and drive repeat business.",
      process: [
        "List Segmentation",
        "Campaign Design",
        "Automation Setup",
        "A/B Testing",
        "Performance Tracking",
        "Optimization",
      ],
      caseStudy: "RetailPro - 180% increase in email revenue",
      pricing: "Standard",
      features: [
        "Email Automation",
        "List Management",
        "Template Design",
        "Personalization",
        "Analytics",
        "Deliverability Optimization",
      ],
    },
    {
      id: 5,
      icon: Users,
      title: "Influencer Marketing",
      category: "social",
      brief: "Leverage influencer partnerships for authentic brand promotion",
      explanation:
        "Strategic influencer partnerships that amplify your brand message and reach new audiences through trusted voices.",
      process: [
        "Influencer Research",
        "Partnership Negotiation",
        "Campaign Planning",
        "Content Collaboration",
        "Performance Tracking",
        "ROI Analysis",
      ],
      caseStudy: "Fashion Forward - 500% brand awareness increase",
      pricing: "Premium",
      features: [
        "Influencer Discovery",
        "Campaign Management",
        "Content Creation",
        "Performance Tracking",
        "Relationship Management",
        "ROI Measurement",
      ],
    },
    {
      id: 6,
      icon: BarChart,
      title: "Web Analytics",
      category: "analytics",
      brief: "Data-driven insights to optimize your digital performance",
      explanation:
        "Comprehensive analytics setup and reporting to track, measure, and optimize your digital marketing performance.",
      process: [
        "Analytics Setup",
        "Goal Configuration",
        "Custom Reporting",
        "Data Analysis",
        "Insights Generation",
        "Optimization Recommendations",
      ],
      caseStudy: "ServicePro - 200% conversion rate improvement",
      pricing: "Standard",
      features: [
        "Google Analytics",
        "Custom Dashboards",
        "Conversion Tracking",
        "User Behavior Analysis",
        "Performance Reports",
        "Data Visualization",
      ],
    },
    {
      id: 7,
      icon: Zap,
      title: "Conversion Optimization",
      category: "optimization",
      brief: "Optimize your website to convert more visitors into customers",
      explanation:
        "Systematic approach to improving your website's conversion rate through testing, analysis, and optimization.",
      process: [
        "Conversion Audit",
        "User Experience Analysis",
        "A/B Testing",
        "Landing Page Optimization",
        "Funnel Analysis",
        "Performance Monitoring",
      ],
      caseStudy: "B2B Solutions - 150% lead generation increase",
      pricing: "Premium",
      features: [
        "A/B Testing",
        "Landing Page Optimization",
        "User Experience Design",
        "Funnel Analysis",
        "Heat Mapping",
        "Conversion Tracking",
      ],
    },
    {
      id: 8,
      icon: Bot,
      title: "Marketing Automation",
      category: "automation",
      brief: "Automate your marketing processes for efficiency and scale",
      explanation:
        "Implement marketing automation systems that nurture leads, personalize customer journeys, and scale your marketing efforts.",
      process: [
        "Automation Strategy",
        "Platform Setup",
        "Workflow Creation",
        "Lead Scoring",
        "Personalization",
        "Performance Optimization",
      ],
      caseStudy: "SaaS Startup - 300% lead nurturing efficiency",
      pricing: "Premium",
      features: [
        "Lead Nurturing",
        "Email Automation",
        "Lead Scoring",
        "CRM Integration",
        "Personalization",
        "Analytics",
      ],
    },
    {
      id: 9,
      icon: Globe,
      title: "Content Marketing",
      category: "content",
      brief: "Create valuable content that attracts and engages your audience",
      explanation:
        "Strategic content creation and distribution that builds authority, drives traffic, and generates leads.",
      process: [
        "Content Strategy",
        "Content Creation",
        "SEO Optimization",
        "Distribution",
        "Promotion",
        "Performance Analysis",
      ],
      caseStudy: "TechBlog - 400% organic traffic growth",
      pricing: "Standard",
      features: ["Blog Writing", "Video Content", "Infographics", "eBooks", "Content Distribution", "SEO Optimization"],
    },
    {
      id: 10,
      icon: TrendingUp,
      title: "AI-Powered Marketing",
      category: "ai",
      brief: "Leverage AI technology for smarter marketing decisions",
      explanation:
        "Cutting-edge AI tools and strategies that automate processes, predict customer behavior, and optimize campaigns.",
      process: [
        "AI Strategy Development",
        "Tool Implementation",
        "Data Integration",
        "Model Training",
        "Automation Setup",
        "Performance Monitoring",
      ],
      caseStudy: "AI Innovators - 250% marketing efficiency increase",
      pricing: "Premium",
      features: [
        "Predictive Analytics",
        "Chatbots",
        "Personalization",
        "Automated Optimization",
        "Customer Insights",
        "Trend Analysis",
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Services" },
    { id: "search", name: "Search Marketing" },
    { id: "advertising", name: "Paid Advertising" },
    { id: "social", name: "Social Media" },
    { id: "content", name: "Content Marketing" },
    { id: "analytics", name: "Analytics" },
    { id: "optimization", name: "Optimization" },
    { id: "automation", name: "Automation" },
    { id: "ai", name: "AI Marketing" },
  ]

  const filteredServices = filter === "all" ? services : services.filter((service) => service.category === filter)

  const toggleService = (id: number) => setExpandedService(expandedService === id ? null : id)

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
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business and maximize ROI
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-6 py-3 rounded-xl transition-all duration-300 overflow-hidden group text-white ${
                filter === category.id ? "" : "bg-primary-950 hover:bg-primary-900"
              }`}
              style={{
                border:
                  filter === category.id ? "2px solid rgba(147, 51, 234, 0.8)" : "2px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                background:
                  filter === category.id
                    ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.20) 50%, rgba(239, 68, 68, 0.15) 100%)"
                    : "",
                boxShadow:
                  filter === category.id
                    ? "inset 0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 40px rgba(147, 51, 234, 0.2), inset 0 0 60px rgba(239, 68, 68, 0.1)"
                    : "none",
              }}
              onMouseEnter={(e) => {
                if (filter !== category.id) {
                  e.currentTarget.style.border = "2px solid rgba(147, 51, 234, 0.4)"
                  e.currentTarget.style.background =
                    "radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.08) 50%, rgba(239, 68, 68, 0.05) 100%)"
                  e.currentTarget.style.boxShadow =
                    "inset 0 0 15px rgba(59, 130, 246, 0.2), inset 0 0 30px rgba(147, 51, 234, 0.15), inset 0 0 45px rgba(239, 68, 68, 0.08)"
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== category.id) {
                  e.currentTarget.style.border = "2px solid rgba(255, 255, 255, 0.1)"
                  e.currentTarget.style.background = ""
                  e.currentTarget.style.boxShadow = "none"
                }
              }}
            >
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                layout
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative bg-github-canvas-overlay/30 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                  borderImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1)) 1",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
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
                  <motion.div
                    layout="position"
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <service.icon className="h-8 w-8 text-accent" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-gray-300">{service.brief}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <motion.div animate={{ rotate: expandedService === service.id ? 180 : 0 }}>
                        <ChevronDown className="h-6 w-6 text-accent" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          opacity: { duration: 0.3, delay: 0.1 },
                          height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        }}
                      >
                        <div className="mt-6 pt-6 border-t border-blue-500/30">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-accent mb-3">Service Overview</h4>
                              <p className="text-gray-300 mb-6">{service.explanation}</p>

                              <h4 className="text-lg font-semibold text-accent mb-3">Our Process</h4>
                              <ol className="space-y-2">
                                {service.process.map((step, idx) => (
                                  <li key={idx} className="flex items-center text-gray-300">
                                    <span className="w-6 h-6 bg-accent text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                      {idx + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-accent mb-3">Key Features</h4>
                              <div className="grid grid-cols-2 gap-2 mb-6">
                                {service.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-center text-gray-300">
                                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                                    {feature}
                                  </div>
                                ))}
                              </div>

                              <div className="bg-primary-900 rounded-lg p-4 mb-4">
                                <h4 className="text-lg font-semibold text-accent mb-2">Case Study</h4>
                                <p className="text-gray-300">{service.caseStudy}</p>
                              </div>

                              <div className="text-center">
                                <button
                                  onClick={() => (window.location.href = "/contact")}
                                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                                  style={{
                                    background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(45deg, #2563EB, #7C3AED, #DB2777)"
                                    e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"
                                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                      "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)"
                                    e.currentTarget.style.transform = "translateY(0) scale(1)"
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)"
                                  }}
                                >
                                  Book a Strategy Call
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
