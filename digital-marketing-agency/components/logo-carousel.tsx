"use client"

import { motion } from "framer-motion"

const LogoCarousel = () => {
  const logos = [
    { name: "Loom", src: "https://blobs.vusercontent.net/blob/Company%3DLoom-lWT5FNlaFGJdis1aeLbfBoRYCHElbL.svg" },
    {
      name: "Pipedrive",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%3DPipedrive-OnDbGqCAXpQ0qHVtfxY6qd3DWBJqJ9.svg",
    },
    {
      name: "Basecamp",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%3DBasecamp-WuYlyftMM93iy0nfNv3J9jgiop3YyH.svg",
    },
    {
      name: "Dribbble",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%3DDribbble-jv7d88Qwj9xvJHddggr6A6S4j7uPej.svg",
    },
    { name: "Twitch", src: "https://blobs.vusercontent.net/blob/Company%3DTwitch-JI50xqG86kIdkIJHLdXosGPz8udP6d.svg" },
    { name: "Stripe", src: "https://blobs.vusercontent.net/blob/Company%3DStripe-GVBigEdasJZYkrWVA9X8Tt98xvnnbh.svg" },
    { name: "Gitlab", src: "https://blobs.vusercontent.net/blob/Company%3DGitlab-D1kFJODVYzkhS79fiYTuQkWP8fwrSf.svg" },
    { name: "Notion", src: "https://blobs.vusercontent.net/blob/Company%3DNotion-gAOqllbr844xKDZAGgseDvnjQ07My9.svg" },
    {
      name: "Discord",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%3DDiscord-FuTN1Isn43C3ry5y6QtO69wszC41ih.svg",
    },
    { name: "Google", src: "https://blobs.vusercontent.net/blob/Company%3DGoogle-e3oSvOHbjfALgeXDTTKmGU6JLTsNex.svg" },
    {
      name: "Atlassian",
      src: "https://blobs.vusercontent.net/blob/Company%3DAtlassian-zJ3oig5moXQm1jAznvFVUGK2wjdvtz.svg",
    },
    { name: "Adobe", src: "https://blobs.vusercontent.net/blob/Company%3DAdobe-EBlItZpSJtmL8Erg9h8Dlbm4jhDeQ5.svg" },
  ]

  return (
    <section className="py-16 bg-github-canvas-overlay border-y border-github-border-default">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-github-fg-default mb-2">
            Trusted by the world's leading organizations
          </h2>
          <p className="text-github-fg-muted">
            Millions of developers and companies build, ship, and maintain their software on DigitalPro.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [-1800, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="bg-github-canvas-overlay rounded-lg h-12 flex items-center justify-center px-6 py-2">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    className="max-h-8 w-auto object-contain opacity-60 transition-opacity duration-200 filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
