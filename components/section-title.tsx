import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: ReactNode
  theme?: "default" | "tech" | "art" | "design"
  className?: string
}

const SectionTitle = ({ children, theme = "default", className }: SectionTitleProps) => {
  const themeClasses = {
    default: "text-primary",
    tech: "text-[hsl(var(--tech-accent))]",
    art: "text-[hsl(var(--art-accent))]",
    design: "text-[hsl(var(--design-accent))]",
  }

  return <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", themeClasses[theme], className)}>{children}</h2>
}

export default SectionTitle
