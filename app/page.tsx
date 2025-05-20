"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import AnimatedBackground from "@/components/animated-background"
import GlassCard from "@/components/glass-card"
import Link from "next/link"
import TypingAnimation from "@/components/typing-animation"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground theme="default" />
      <div className="bg-glow"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center relative neon-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <GlassCard className="bg-[#121630]/80 text-white border-white/10">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I&apos;m Clinton Kibet.
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl mb-12 flex flex-row justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <TypingAnimation className="min-h-[40px] inline-block" />
              </motion.div>

              <motion.div
                className="flex flex-row justify-center gap-4 mt-8 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/tech"
                  className="px-8 py-3 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30"
                >
                  Explore Tech
                </Link>
                <Link
                  href="/art"
                  className="px-8 py-3 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 bg-red-500/10 backdrop-blur-md border border-red-500/20 shadow-lg hover:bg-red-500/20 hover:border-red-500/30"
                >
                  Explore Art
                </Link>
                <Link
                  href="/design"
                  className="px-8 py-3 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 shadow-lg hover:bg-amber-500/20 hover:border-amber-500/30"
                >
                  Explore Design
                </Link>
              </motion.div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-6xl mx-auto w-full"
          >
            <GlassCard className="bg-white/10 backdrop-blur-md border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-20%20at%2000.59.38_f6a41922.jpg-5un9oOn54mB68x0v630XJrpPvhGvB2.jpeg"
                      alt="Clinton Kibet"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </motion.div>
                </div>

                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="mb-6">
                    Nairobi-based creative with a BSc. in Computer Science and a graduate of Moringa School. I blend the
                    logic of frontend code with the flow of design, creating digital experiences that are both
                    functional and beautiful.
                  </p>
                  <p className="mb-6">
                    As the CEO of Swyft, a bulk transport application, I lead our team in developing innovative
                    solutions for logistics challenges. My diverse background in technology, art, and design allows me
                    to approach problems from multiple perspectives.
                  </p>
                  <div className="flex justify-end">
                    <Link href="/about" className="text-primary hover:underline font-medium">
                      Learn more about me →
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
