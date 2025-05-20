"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import GlassCard from "@/components/glass-card"
import SectionTitle from "@/components/section-title"
import AnimatedBackground from "@/components/animated-background"
import { Mail, Phone, Github, Linkedin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Message from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`,
    )

    // WhatsApp API URL with your phone number
    const whatsappUrl = `https://wa.me/254796205375?text=${whatsappMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Reset form and show success message
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "borclinton20@gmail.com",
      link: "mailto:borclinton20@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+254 796 205 375",
      link: "tel:+254796205375",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "4kClinton",
      link: "https://github.com/4kClinton",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Clinton Kibet",
      link: "#",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+254 796 205 375",
      link: "https://wa.me/254796205375",
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
          <SectionTitle>Get In Touch</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div variants={container} initial="hidden" animate="show">
              <GlassCard className="h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div key={index} variants={item} className="flex items-center">
                      <div className="mr-4 p-3 rounded-full bg-primary/10">{info.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:underline"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show">
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 text-green-800 rounded-md mb-4"
                  >
                    Thank you for your message! I&apos;ll get back to you soon.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div variants={item}>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                      />
                    </motion.div>

                    <motion.div variants={item}>
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
