"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"
import AnimatedBackground from "@/components/animated-background"
import { ExternalLink, Github } from "lucide-react"

export default function TechPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = {
    frontend: [
      { name: "React.js", logo: "/images/tech/react.svg" },
      { name: "JavaScript", logo: "/images/tech/javascript.svg" },
      { name: "React Native", logo: "/images/tech/react-native.svg" },
      { name: "Vite", logo: "/images/tech/vite.svg" },
      { name: "HTML5", logo: "/images/tech/html5.svg" },
      { name: "CSS3", logo: "/images/tech/css3.svg" },
    ],
    backend: [
      { name: "Node.js", logo: "/images/tech/nodejs.svg" },
      { name: "Laravel", logo: "/images/tech/laravel.png" },
      { name: "Flask", logo: "/images/tech/flask.svg" },
      { name: "Supabase", logo: "/images/tech/supabase.svg" },
      { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    ],
    tools: [
      { name: "Git", logo: "/images/tech/git.svg" },
      { name: "Firebase", logo: "/images/tech/firebase.svg" },
      { name: "WSL", logo: "/images/tech/wsl.svg" },
      { name: "VS Code", logo: "/images/tech/vscode.svg" },
      { name: "Figma", logo: "/images/tech/figma.svg" },
    ],
  }

  const projects = [
    {
      title: "Swyft",
      description: "Bulk Moving Platform",
      stack: ["React Native", "Laravel", "Firebase"],
      liveLink: "https://www.swyft.africa",
      githubLink: "#",
      image: "/images/projects/swyft-app.png",
    },
    {
      title: "Tattoo Booking App",
      description: "Appointment scheduling for tattoo artists",
      stack: ["React", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my work",
      stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      image: "/placeholder.svg?height=400&width=600",
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
    <div className="tech-theme min-h-screen pb-20">
      <AnimatedBackground theme="tech" />

      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle theme="tech">Digital Blueprint</SectionTitle>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <motion.div variants={item}>
              <GlassCard theme="tech" className="h-full">
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--tech-accent))]">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={item}>
              <GlassCard theme="tech" className="h-full">
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--tech-accent))]">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.backend.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={item}>
              <GlassCard theme="tech" className="h-full">
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--tech-accent))]">Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5">
                      <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md p-1">
                        <img
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <SectionTitle theme="tech">Highlighted Projects</SectionTitle>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={item}>
                <GlassCard theme="tech" className="h-full flex flex-col">
                  <div className="relative mb-4 overflow-hidden rounded-md">
                    <div className="w-full h-48 flex items-center justify-center bg-black/20">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`${
                          project.image.includes("swyft-app")
                            ? "h-44 w-auto object-contain"
                            : "w-full h-48 object-cover"
                        } transition-transform duration-300 hover:scale-105`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--tech-accent))]">{project.title}</h3>
                  <p className="mb-4 text-[hsl(var(--tech-text))]">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-[hsl(var(--tech-accent))]/20 text-[hsl(var(--tech-text))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[hsl(var(--tech-accent))] hover:underline"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[hsl(var(--tech-accent))] hover:underline"
                    >
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
