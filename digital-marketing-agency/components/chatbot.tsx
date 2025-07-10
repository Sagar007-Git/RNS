"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

const TypingIndicator = () => (
  <motion.div
    className="flex items-center space-x-1.5 p-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
  >
    <span className="sr-only">Bot is typing</span>
    <motion.div
      className="h-2 w-2 bg-github-fg-subtle rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
    <motion.div
      className="h-2 w-2 bg-github-fg-subtle rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
    />
    <motion.div
      className="h-2 w-2 bg-github-fg-subtle rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
    />
  </motion.div>
)

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI marketing assistant. How can I help you today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = { id: Date.now(), text: inputValue, isBot: false }
    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services.",
        isBot: true,
      }
      setIsTyping(false)
      setMessages((prev) => [...prev, botResponse])
    }, 2000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-github-accent-emphasis text-white p-4 rounded-full shadow-github-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, backgroundColor: "#58a6ff" }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          scale: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            repeatDelay: 2.5,
            ease: "easeInOut",
          },
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "x" : "message"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-[450px] bg-github-canvas-inset border border-github-border-default rounded-github shadow-github-lg flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
          >
            {/* Header */}
            <div className="bg-github-canvas-overlay text-github-fg-default p-4 rounded-t-github border-b border-github-border-default flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-github-accent-emphasis rounded-full flex items-center justify-center font-bold text-white">
                  AI
                </div>
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-github-success-fg ring-2 ring-github-canvas-overlay" />
              </div>
              <div>
                <h3 className="font-bold">AI Marketing Assistant</h3>
                <p className="text-sm text-github-fg-muted">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg text-sm ${
                        message.isBot
                          ? "bg-github-canvas-subtle text-github-fg-default rounded-bl-none"
                          : "bg-github-accent-emphasis text-white rounded-br-none"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-github-border-default">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="input-github flex-1"
                />
                <button onClick={handleSendMessage} className="btn-primary p-2" aria-label="Send message">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
