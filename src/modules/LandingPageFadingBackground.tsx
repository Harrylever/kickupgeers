import { useCallback, useEffect, useState } from "react"
import HeroCarousel from "@/components/carousels/HeroCarousel"

const images = [
  "/jpg/background-1.jpg",
  "/jpg/background-2.jpg",
  "/jpg/background-3.jpg",
]

const LandingPageFadingBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const changeBackground = useCallback((index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex(index)
      setNextImageIndex((index + 1) % images.length)
      setIsTransitioning(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackground(nextImageIndex)
    }, 8000)

    return () => clearInterval(interval)
  }, [changeBackground, nextImageIndex])

  return (
    <section className="relative h-screen w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex
              ? "opacity-100"
              : index === nextImageIndex && isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      Hello
      <div className="absolute bg-black/45 inset-0 flex items-center px-10">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="w-full max-w-[700px]">
            <HeroCarousel
              activeIndex={currentImageIndex}
              changeBackgroundCallback={changeBackground}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPageFadingBackground
