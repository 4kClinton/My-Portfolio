"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
    type?: "image" | "video"
  }[]
  className?: string
}

export default function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const slideInterval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn("relative w-full h-full group", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-md flex items-center justify-center bg-gray-100/10">
        {images[currentIndex].type === "video" ? (
          <video
            src={images[currentIndex].src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain max-h-[300px]"
          />
        ) : (
          <img
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain max-h-[300px] transition-transform duration-500"
          />
        )}
      </div>

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-2 text-white cursor-pointer p-2 bg-black/30 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft size={20} />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-2 text-white cursor-pointer p-2 bg-black/30 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight size={20} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              slideIndex === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
