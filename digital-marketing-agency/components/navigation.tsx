"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const router = useRouter()

  useEffect(() => {
    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    // Listen for route changes
    window.addEventListener("beforeunload", handleRouteChange)

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange)
    }
  }, [])

  const handleNavClick = (href) => {
    if (href.startsWith("/")) {
      // For page navigation, scroll to top smoothly after navigation
      router.push(href)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    } else {
      // For anchor links within the same page
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className={`nav-github fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? "shadow-github-sm" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 hover-github rounded-github px-2 py-1"
              onClick={(e) => {
                e.preventDefault()
                // Navigate to home page
                router.push("/")
                // Ensure smooth scroll to top after navigation
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }}
            >
              <div className="w-8 h-8 bg-github-fg-onEmphasis rounded-full flex items-center justify-center">
                <span className="text-github-canvas-default font-bold text-sm">RNS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-github-fg-default hover:text-github-fg-onEmphasis transition-colors duration-200 py-2 px-2 rounded-github hover-github text-sm font-medium"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-github-fg-default hover:text-github-fg-onEmphasis transition-colors duration-200 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden border-t border-github-border-default"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-github-fg-default hover:text-github-fg-onEmphasis hover:bg-github-canvas-subtle transition-all duration-200 rounded-github text-sm font-medium"
                    onClick={() => {
                      handleNavClick(item.href)
                      setIsOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-github-border-default">
                  <div className="px-4">
                    <input type="text" placeholder="Search..." className="input-github w-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
