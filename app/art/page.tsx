"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"

export default function ArtPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tattooWorks = [
    {
      id: 1,
      title: "Butterfly Collection",
      image: "/images/tattoos/butterflies.jpeg",
      category: "Black & Grey",
    },
    {
      id: 2,
      title: "Spiritual Journey",
      image: "/images/tattoos/back-tattoos.jpeg",
      category: "Minimalist",
    },
    {
      id: 3,
      title: "Rose & Butterfly",
      image: "/images/tattoos/butterfly-rose.jpeg",
      category: "Floral",
    },
    {
      id: 4,
      title: "Jungle June Event",
      image: "/images/tattoos/jungle-june.jpeg",
      category: "Promotional",
    },
    {
      id: 5,
      title: "Tribal Pattern",
      image: "/placeholder.svg?height=400&width=300",
      category: "Tribal",
    },
    {
      id: 6,
      title: "Watercolor Abstract",
      image: "/placeholder.svg?height=400&width=300",
      category: "Watercolor",
    },
  ]

  const skills = ["Tattoo Design", "Creative Direction", "Freehand Sketching", "Digital Inking"]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen pb-20 relative">
      {/* Japanese-inspired background */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PVmSlsowKlxVNgIs5Ja0ON9JF2UJ7Z.png"
          alt="Japanese Torii Gate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-red-900/30"></div>
      </div>

      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dr.Ink Tattoos</h1>
            <p className="text-xl text-white/80">TURNING SKIN INTO LIVING ART</p>
          </div>

          <motion.div variants={container} initial="hidden" animate="show" className="mb-16">
            <GlassCard className="mb-12 bg-black/40 border-red-500/20 text-white backdrop-blur-md">
              <h3 className="text-xl font-bold mb-6 text-red-500">Artistic Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="p-4 border border-red-500/30 rounded-md text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <SectionTitle className="text-white">Tattoo Gallery</SectionTitle>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tattooWorks.map((work) => (
                <motion.div key={work.id} variants={item} whileHover={{ scale: 1.03 }} className="group">
                  <div className="relative overflow-hidden rounded-lg glass-card-dark">
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-xl font-bold text-white">{work.title}</h3>
                      <p className="text-red-400">{work.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
