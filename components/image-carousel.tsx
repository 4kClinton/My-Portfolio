"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
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
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setVideoError(false)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setVideoError(false)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
    setVideoError(false)
  }

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const slideInterval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  useEffect(() => {
    // Try to play the video when the slide changes to a video
    if (images[currentIndex]?.type === "video" && videoRef.current) {
      const playPromise = videoRef.current.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video playback error:", error)
          setVideoError(true)
        })
      }
    }
  }, [currentIndex, images])

  if (!images || images.length === 0) {
    return null
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Manual play error:", error)
      })
      setVideoError(false)
    }
  }

  return (
    <div className={cn("relative w-full h-full group", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-md flex items-center justify-center bg-gray-100/10">
        {images[currentIndex].type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={images[currentIndex].src}
              autoPlay
              muted
              playsInline
              controls={videoError}
              preload="auto"
              className="w-full h-full object-contain max-h-[300px]"
              onError={() => setVideoError(true)}
            />
            {videoError && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
                onClick={handleVideoPlay}
              >
                <div className="bg-white/20 p-4 rounded-full">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <span className="sr-only">Play video</span>
              </div>
            )}
          </>
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
