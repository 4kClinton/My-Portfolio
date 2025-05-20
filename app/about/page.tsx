"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"
import AnimatedBackground from "@/components/animated-background"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      title: "CEO & Co-founder",
      company: "Swyft",
      period: "2022 - Present",
      description: "Leading the development and growth of Swyft, a bulk transport application.",
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2020 - Present",
      description: "Building responsive and interactive web applications for various clients.",
    },
    {
      title: "Tattoo Artist",
      company: "Independent",
      period: "2019 - Present",
      description: "Creating custom tattoo designs and providing professional tattoo services.",
    },
  ]

  const education = [
    {
      degree: "BSc. Computer Science",
      institution: "University",
      year: "2018 - 2022",
    },
    {
      degree: "Software Development",
      institution: "Moringa School",
      year: "2020",
    },
  ]

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
    <div className="min-h-screen pb-20">
      <AnimatedBackground theme="default" />

      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle>About Me</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <GlassCard>
                <h2 className="text-2xl font-bold mb-4">Clinton Kibet</h2>
                <p className="mb-6 text-lg">
                  Nairobi-based creative with a BSc. in Computer Science and a graduate of Moringa School. I blend the
                  logic of frontend code with the flow of design, creating digital experiences that are both functional
                  and beautiful.
                </p>
                <p className="mb-6">
                  As the CEO and co-founder of Swyft, a bulk transport application, I lead our team in developing
                  innovative solutions for logistics challenges. My diverse background in technology, art, and design
                  allows me to approach problems from multiple perspectives.
                </p>
                <p>
                  Whether I&apos;m coding a complex web application, designing a brand identity, or creating custom
                  tattoo art, I bring the same level of dedication and creativity to every project.
                </p>
              </GlassCard>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div variants={container} initial="hidden" animate="show">
              <SectionTitle>Experience</SectionTitle>

              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item} className="mb-6">
                  <GlassCard>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show">
              <SectionTitle>Education</SectionTitle>

              {education.map((edu, index) => (
                <motion.div key={index} variants={item} className="mb-6">
                  <GlassCard>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{edu.institution}</span>
                      <span className="text-sm text-muted-foreground">{edu.year}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}

              <SectionTitle>Skills</SectionTitle>

              <motion.div variants={item}>
                <GlassCard>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Technical</h3>
                      <ul className="space-y-1">
                        <li>Frontend Development</li>
                        <li>Backend Integration</li>
                        <li>Responsive Design</li>
                        <li>UI/UX Design</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Creative</h3>
                      <ul className="space-y-1">
                        <li>Tattoo Design</li>
                        <li>Brand Identity</li>
                        <li>Logo Design</li>
                        <li>Digital Illustration</li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
