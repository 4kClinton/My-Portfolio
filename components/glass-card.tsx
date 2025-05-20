import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  theme?: "default" | "tech" | "art" | "design"
}

const GlassCard = ({ children, className, theme = "default" }: GlassCardProps) => {
  const themeClasses = {
    default: "bg-white/20 border-white/20 backdrop-blur-md",
    tech: "bg-white/10 border-white/20 text-[hsl(var(--tech-text))] backdrop-blur-md",
    art: "bg-black/40 border-[hsl(var(--art-accent))]/20 text-[hsl(var(--art-text))] backdrop-blur-md",
    design: "bg-white/60 border-[hsl(var(--design-accent))]/20 text-[hsl(var(--design-text))] backdrop-blur-md",
  }

  return (
    <div className={cn("rounded-lg shadow-lg p-6 transition-all duration-300", themeClasses[theme], className)}>
      {children}
    </div>
  )
}

export default GlassCard
