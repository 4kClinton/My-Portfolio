"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [theme, setTheme] = useState("default")

  useEffect(() => {
    if (pathname.includes("/tech")) {
      setTheme("tech")
    } else if (pathname.includes("/art")) {
      setTheme("art")
    } else if (pathname.includes("/design")) {
      setTheme("design")
    } else {
      setTheme("default")
    }
  }, [pathname])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tech", path: "/tech" },
    { name: "Art", path: "/art" },
    { name: "Design", path: "/design" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const themeStyles = {
    tech: "bg-[hsl(var(--tech-bg))] text-[hsl(var(--tech-text))]",
    art: "bg-[hsl(var(--art-bg))] text-[hsl(var(--art-text))]",
    design: "bg-[hsl(var(--design-bg))] text-[hsl(var(--design-text))]",
    default: "bg-background text-foreground",
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        themeStyles[theme as keyof typeof themeStyles],
        theme === "default" || theme === "design" ? "glass-card" : "glass-card-dark",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CK
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative font-medium transition-colors hover:text-primary",
                pathname === item.path ? "font-bold" : "",
              )}
            >
              {pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className={cn(
                    "absolute left-0 top-full block h-[2px] w-full",
                    theme === "tech"
                      ? "bg-[hsl(var(--tech-accent))]"
                      : theme === "art"
                        ? "bg-[hsl(var(--art-accent))]"
                        : theme === "design"
                          ? "bg-[hsl(var(--design-accent))]"
                          : "bg-primary",
                  )}
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "md:hidden py-4 px-4",
            themeStyles[theme as keyof typeof themeStyles],
            theme === "default" || theme === "design" ? "glass-card" : "glass-card-dark",
          )}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn("py-2 px-4 rounded-md transition-colors", pathname === item.path ? "font-bold" : "")}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Navigation
