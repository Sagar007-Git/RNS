"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <motion.button
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 8,
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  )
}

export default WhatsAppButton
