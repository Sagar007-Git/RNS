import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chatbot"
import WhatsAppButton from "@/components/whatsapp-button"
import LoadingAnimation from "@/components/loading-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Marketing Agency - AI-Driven Solutions",
  description: "Empowering Brands with AI-Driven Digital Marketing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <LoadingAnimation />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatBot />
        <WhatsAppButton />
      </body>
    </html>
  )
}
