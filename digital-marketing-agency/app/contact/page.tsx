"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const [otpData, setOtpData] = useState({
    otp: "",
    isOtpSent: false,
    isOtpVerified: false,
    isVerifying: false,
    isSendingOtp: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    "SEO/SEM",
    "PPC Management",
    "Social Media Marketing",
    "Email Marketing",
    "Influencer Marketing",
    "Web Analytics",
    "Conversion Optimization",
    "Marketing Automation",
    "Content Marketing",
    "AI-Powered Marketing",
  ]

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[\d\s\-$$$$]{10,}$/
    return phoneRegex.test(phone)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required"
    } else if (!validatePhone(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number"
    } else if (!otpData.isOtpVerified) {
      newErrors.contactNumber = "Please verify your phone number with OTP"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendOtp = async () => {
    if (!validatePhone(formData.contactNumber)) {
      setErrors({ ...errors, contactNumber: "Please enter a valid phone number" })
      return
    }

    setOtpData({ ...otpData, isSendingOtp: true })

    // Simulate OTP sending (replace with actual OTP service)
    setTimeout(() => {
      setOtpData({
        ...otpData,
        isOtpSent: true,
        isSendingOtp: false,
      })
      // In real implementation, integrate with Firebase/Twilio/MSG91
      console.log("OTP sent to:", formData.contactNumber)
    }, 2000)
  }

  const verifyOtp = async () => {
    if (!otpData.otp.trim()) {
      setErrors({ ...errors, otp: "Please enter the OTP" })
      return
    }

    setOtpData({ ...otpData, isVerifying: true })

    // Simulate OTP verification (replace with actual verification)
    setTimeout(() => {
      // For demo purposes, accept "123456" as valid OTP
      if (otpData.otp === "123456") {
        setOtpData({
          ...otpData,
          isOtpVerified: true,
          isVerifying: false,
        })
        setErrors({ ...errors, otp: undefined })
      } else {
        setErrors({ ...errors, otp: "Invalid OTP. Please try again." })
        setOtpData({ ...otpData, isVerifying: false })
      }
    }, 1500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      alert("Thank you! Your message has been sent successfully. We'll get back to you soon.")

      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        company: "",
        service: "",
        message: "",
      })
      setOtpData({
        otp: "",
        isOtpSent: false,
        isOtpVerified: false,
        isVerifying: false,
        isSendingOtp: false,
      })
      setErrors({})
      setIsSubmitting(false)
    }, 2000)
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your digital marketing? Let's start the conversation and grow your business together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Phone, text: "+1 (555) 123-4567", label: "Call Us" },
              { icon: Mail, text: "hello@digitalpro.com", label: "Email Us" },
              { icon: MapPin, text: "123 Business Ave, Suite 100", label: "Visit Us" },
            ].map((contact, index) => (
              <div
                key={index}
                className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-lg p-4 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105 hover:border-orange-400/50"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                  boxShadow: "0 4px 16px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(251, 146, 60, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600/10 to-orange-500/10 group-hover:from-orange-500/15 group-hover:to-blue-600/15 transition-all duration-300"></div>

                <div className="relative z-10">
                  <contact.icon className="h-5 w-5 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-orange-400 transition-colors duration-300">
                    {contact.label}
                  </h3>
                  <p className="text-blue-200 text-xs group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="relative bg-slate-800/50 backdrop-blur-md border border-blue-500/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
              boxShadow: "0 8px 32px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/5 to-orange-500/5"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-blue-200">We'd love to hear from you! Let's discuss your project</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">
                    Full Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                      errors.fullName ? "border-red-400" : "border-slate-600"
                    } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm hover:border-blue-400/50`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Contact Number with OTP */}
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">
                    Contact Number <span className="text-orange-400">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                      placeholder="Enter your phone number"
                      disabled={otpData.isOtpVerified}
                      className={`flex-1 bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                        errors.contactNumber ? "border-red-400" : "border-slate-600"
                      } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm hover:border-blue-400/50 disabled:opacity-50`}
                    />
                    {!otpData.isOtpVerified && (
                      <button
                        type="button"
                        onClick={sendOtp}
                        disabled={otpData.isSendingOtp || !formData.contactNumber}
                        className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                      >
                        {otpData.isSendingOtp ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : otpData.isOtpSent ? (
                          "Resend"
                        ) : (
                          "Send OTP"
                        )}
                      </button>
                    )}
                    {otpData.isOtpVerified && (
                      <div className="flex items-center px-3 py-3 bg-green-500/20 border border-green-400 rounded-lg">
                        <Check className="h-4 w-4 text-green-400" />
                      </div>
                    )}
                  </div>
                  {errors.contactNumber && <p className="text-red-400 text-xs mt-1">{errors.contactNumber}</p>}

                  {/* OTP Input */}
                  {otpData.isOtpSent && !otpData.isOtpVerified && (
                    <div className="mt-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={otpData.otp}
                          onChange={(e) => setOtpData({ ...otpData, otp: e.target.value })}
                          placeholder="Enter OTP (Demo: 123456)"
                          className={`flex-1 bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                            errors.otp ? "border-red-400" : "border-slate-600"
                          } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm`}
                        />
                        <button
                          type="button"
                          onClick={verifyOtp}
                          disabled={otpData.isVerifying || !otpData.otp}
                          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                        >
                          {otpData.isVerifying ? <Loader2 className="h-4 w-4 animate-spin" /> : "Verify"}
                        </button>
                      </div>
                      {errors.otp && <p className="text-red-400 text-xs mt-1">{errors.otp}</p>}
                      <p className="text-blue-300 text-xs mt-1">We've sent a verification code to your phone number</p>
                    </div>
                  )}
                </div>

                {/* Email and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">
                      Email Address <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={`w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-400" : "border-slate-600"
                      } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm hover:border-blue-400/50`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-2">Company/Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      className="w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm hover:border-blue-400/50"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">
                    Service Required <span className="text-orange-400">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    className={`w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                      errors.service ? "border-red-400" : "border-slate-600"
                    } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm backdrop-blur-sm hover:border-blue-400/50`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-slate-700">
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">
                    Message About Your Project <span className="text-orange-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your project, goals, and how we can help you succeed... (minimum 10 characters)"
                    className={`w-full bg-slate-700/50 text-white px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-400" : "border-slate-600"
                    } focus:border-orange-400 focus:outline-none transition-all duration-300 text-sm resize-none backdrop-blur-sm hover:border-blue-400/50`}
                  ></textarea>
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                    <p className="text-blue-300 text-xs ml-auto">{formData.message.length}/10 characters minimum</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 text-white rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
                    style={{
                      background: isSubmitting ? "#6B7280" : "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = "linear-gradient(45deg, #2563EB, #7C3AED, #DB2777)"
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)"
                        e.currentTarget.style.transform = "translateY(0) scale(1)"
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)"
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
