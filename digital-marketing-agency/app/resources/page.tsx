"use client"

import { motion } from "framer-motion"

const ResourcesPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Blog posts and guides coming soon...</p>
        </motion.div>
      </div>
    </div>
  )
}

export default ResourcesPage
