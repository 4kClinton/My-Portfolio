"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"
import AnimatedBackground from "@/components/animated-background"
import { ExternalLink, Calendar, Users, Code } from "lucide-react"

export default function BusinessesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const businesses = [
    {
      id: 1,
      name: "Munchez",
      year: "2022",
      logo: "/images/businesses/munchez-logo.png",
      website: "https://munchez.vercel.app/",
      description: "Premium catering services for all your special occasions",
      services: [
        "Outside Catering for weddings",
        "Baby showers & celebrations",
        "Corporate Lunches & Dinners",
        "Private Chef services",
      ],
      icon: <Users className="h-6 w-6" />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 2,
      name: "Dr.Ink Tattoos",
      year: "2021",
      logo: "/images/dr-ink-logo.png",
      website: "#",
      description: "Professional tattoo artistry turning skin into living art",
      services: ["Custom tattoo designs", "Black & grey tattoos", "Watercolor tattoos", "Tattoo consultations"],
      icon: <Calendar className="h-6 w-6" />,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      name: "Barak Labs LTD",
      year: "2025",
      logo: "/images/businesses/barak-labs-logo.png",
      website: "#",
      description: "Software development company creating innovative digital solutions",
      services: [
        "Swyft - Bulk transport platform",
        "Zydi - Ride sharing application",
        "Custom software development",
        "Mobile app development",
      ],
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen pb-20">
      <AnimatedBackground theme="default" />

      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle>My Businesses</SectionTitle>

          <motion.p
            className="text-xl text-center mb-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Entrepreneurial ventures spanning catering, art, and technology
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businesses.map((business) => (
              <motion.div key={business.id} variants={item}>
                <GlassCard className="h-full flex flex-col relative overflow-hidden group">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Logo and header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {business.icon}
                        <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full">
                          Est. {business.year}
                        </span>
                      </div>
                      {business.website !== "#" && (
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 flex items-center justify-center rounded-2xl overflow-hidden bg-white/5 p-4">
                        <img
                          src={business.logo || "/placeholder.svg"}
                          alt={`${business.name} logo`}
                          className="max-w-full max-h-full object-contain rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Business name and description */}
                    <h3 className="text-2xl font-bold mb-3 text-center">{business.name}</h3>
                    <p className="text-muted-foreground mb-6 text-center">{business.description}</p>

                    {/* Services */}
                    <div className="space-y-2">
                      <h4 className="font-semibold mb-3">Services:</h4>
                      <ul className="space-y-2">
                        {business.services.map((service, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visit button */}
                    {business.website !== "#" && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you need catering services, custom tattoo art, or software development, I&apos;d love to discuss
                how we can bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </a>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
