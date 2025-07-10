"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary-950 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">DigitalPro</h3>
            <p className="text-gray-300 mb-6">
              Empowering brands with AI-driven digital marketing solutions that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <LinkedIn className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#seo" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  SEO/SEM
                </Link>
              </li>
              <li>
                <Link href="/services#ppc" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services#social"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#content"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  AI Marketing Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest marketing insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-900 text-white px-4 py-2 rounded-l-lg border border-primary-800 focus:border-accent focus:outline-none"
              />
              <button className="bg-accent text-black px-4 py-2 rounded-r-lg hover:bg-accent/80 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-accent mr-3" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-accent mr-3" />
              <span className="text-gray-300">hello@digitalpro.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-accent mr-3" />
              <span className="text-gray-300">123 Business Ave, Suite 100</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 DigitalPro. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
