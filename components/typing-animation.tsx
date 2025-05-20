"use client"

import { TypeAnimation } from "react-type-animation"

interface TypingAnimationProps {
  className?: string
}

export default function TypingAnimation({ className }: TypingAnimationProps) {
  return (
    <TypeAnimation
      sequence={[
        "I make websites.",
        1000,
        "I build apps.",
        1000,
        "I ink skin.",
        1000,
        "I design brands and help them grow.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Number.POSITIVE_INFINITY}
      className={className}
    />
  )
}
