"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"
import AnimatedBackground from "@/components/animated-background"
import ImageCarousel from "@/components/image-carousel"
import { X } from "lucide-react"

export default function DesignPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState<null | {
    id: number
    title: string
    category: string
    image: string | string[]
    description: string
    isCarousel?: boolean
    carouselItems?: Array<{ src: string; alt: string; type?: "image" | "video" }>
  }>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const designWorks = [
    {
      id: 1,
      title: "Swyft Brand Identity",
      category: "Logo Design",
      image: "/images/design/swyft-brand.jpeg",
      description:
        "Complete brand identity for Swyft, a bulk moving platform. Includes logo, color palette, typography, and brand guidelines.",
    },
    {
      id: 2,
      title: "Zydi Ride Sharing",
      category: "UI/UX Design",
      image: ["/images/design/zydi-app.mp4", "/images/design/ride-with-friends.png"],
      description: "UI/UX design for Zydi, a ride sharing application focused on connecting friends for shared rides.",
      isCarousel: true,
      carouselItems: [
        { src: "/images/design/zydi-app.mp4", alt: "Zydi App UI", type: "video" },
        { src: "/images/design/ride-with-friends.png", alt: "Ride with Friends Feature" },
      ],
    },
    {
      id: 3,
      title: "Tech Conference Poster",
      category: "Print Design",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Promotional poster for a tech conference in Nairobi, featuring modern design elements and clear information hierarchy.",
    },
    {
      id: 4,
      title: "Swyft Mobile App UI",
      category: "UI/UX Design",
      image: "/images/design/swyft-ui.png",
      description:
        "User interface design for the Swyft mobile application, focusing on usability and modern aesthetics.",
    },
    {
      id: 5,
      title: "Jungle June Event",
      category: "Print Design",
      image: "/images/tattoos/jungle-june.jpeg",
      description:
        "Eye-catching flyer design for the Jungle June tattoo event, designed to attract attention and convey essential information.",
    },
    {
      id: 6,
      title: "E-commerce Website",
      category: "Web Design",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete design for an e-commerce website, including homepage, product pages, and checkout flow.",
    },
  ]

  const tools = ["Photoshop", "Illustrator", "Figma", "Canva"]

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
    <div className="design-theme min-h-screen pb-20">
      <AnimatedBackground theme="design" />

      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle theme="design">Minimal Studio</SectionTitle>

          <motion.div variants={container} initial="hidden" animate="show" className="mb-16">
            <GlassCard theme="design" className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-[hsl(var(--design-accent))]">Design Tools</h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <motion.div
                    key={tool}
                    variants={item}
                    className="px-4 py-2 bg-[hsl(var(--design-accent))]/10 rounded-md flex items-center gap-2"
                  >
                    <img
                      src={`/images/design/${tool.toLowerCase()}.svg`}
                      alt={tool}
                      className="w-5 h-5"
                      width={20}
                      height={20}
                    />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <SectionTitle theme="design">Design Portfolio</SectionTitle>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {designWorks.map((work) => (
                <motion.div
                  key={work.id}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedDesign(work)}
                >
                  <GlassCard theme="design" className="h-full overflow-hidden">
                    <div className="relative mb-4 overflow-hidden rounded-md h-48">
                      {work.isCarousel ? (
                        <ImageCarousel images={work.carouselItems || []} className="h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100/10">
                          <img
                            src={Array.isArray(work.image) ? work.image[0] : work.image}
                            alt={work.title}
                            className={`${
                              work.image.toString().includes("swyft-ui")
                                ? "h-44 w-auto object-contain"
                                : work.image.toString().includes("swyft-brand") ||
                                    work.image.toString().includes("jungle-june")
                                  ? "h-full w-full object-cover"
                                  : "w-full h-48 object-cover"
                            } transition-transform duration-300 hover:scale-105`}
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[hsl(var(--design-text))]">{work.title}</h3>
                    <p className="text-[hsl(var(--design-accent))]">{work.category}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for selected design */}
      {selectedDesign && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedDesign(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassCard theme="design" className="relative">
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[hsl(var(--design-accent))] text-white z-10"
              >
                <X size={20} />
              </button>

              <div className="flex justify-center mb-6 h-[400px]">
                {selectedDesign.isCarousel ? (
                  <ImageCarousel images={selectedDesign.carouselItems || []} className="w-full h-full" />
                ) : (
                  <img
                    src={Array.isArray(selectedDesign.image) ? selectedDesign.image[0] : selectedDesign.image}
                    alt={selectedDesign.title}
                    className={`${
                      selectedDesign.image.toString().includes("swyft-ui")
                        ? "h-80 w-auto object-contain"
                        : "w-full h-full object-contain"
                    } rounded-md`}
                  />
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">{selectedDesign.title}</h2>
              <p className="text-[hsl(var(--design-accent))] mb-4">{selectedDesign.category}</p>
              <p className="text-[hsl(var(--design-text))]">{selectedDesign.description}</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
