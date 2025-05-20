"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ThemeButtonProps {
  children: ReactNode
  href: string
  theme: "tech" | "art" | "design"
  className?: string
}

const ThemeButton = ({ children, href, theme, className }: ThemeButtonProps) => {
  const themeClasses = {
    tech: "bg-[hsl(var(--tech-accent))] text-white hover:bg-[hsl(var(--tech-accent))]",
    art: "bg-[hsl(var(--art-accent))] text-white hover:bg-[hsl(var(--art-accent))]",
    design: "bg-[hsl(var(--design-accent))] text-[hsl(var(--design-text))] hover:bg-[hsl(var(--design-accent))]",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={className}>
      <Link
        href={href}
        className={cn(
          "inline-block px-6 py-3 rounded-md font-medium transition-colors duration-300",
          themeClasses[theme],
        )}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default ThemeButton
