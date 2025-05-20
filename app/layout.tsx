import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

export const metadata: Metadata = {
  title: "Clinton Kibet | Developer • Tattoo Artist • Designer",
  description:
    "Portfolio of Clinton Kibet - Frontend Developer, Tattoo Artist, and Graphic Designer from Nairobi, Kenya.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
