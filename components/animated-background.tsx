"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  theme: "default" | "tech" | "art" | "design"
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ theme }) => {
  const [particles, setParticles] = useState<Array<{ id: number; duration: number; delay: number; x: number }>>([])

  useEffect(() => {
    if (theme === "art") {
      // Create sakura petals for art theme
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        x: Math.random() * window.innerWidth,
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [theme])

  if (theme === "default") {
    return <div className="fixed inset-0 -z-10 bg-[#121630] bg-opacity-95" />
  }

  if (theme === "tech") {
    return (
      <div className="fixed inset-0 -z-10 bg-[hsl(var(--tech-bg))]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-5" />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[hsl(var(--tech-accent))] rounded-full"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (theme === "art") {
    return (
      <div className="fixed inset-0 -z-10 bg-[hsl(var(--art-bg))]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-5" />
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="sakura absolute"
            style={{
              left: `${particle.x}px`,
              top: "-20px",
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
    )
  }

  if (theme === "design") {
    return (
      <div className="fixed inset-0 -z-10 bg-[hsl(var(--design-bg))]">
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    )
  }

  return null
}

export default AnimatedBackground
