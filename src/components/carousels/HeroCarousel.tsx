import React, { useCallback, useEffect, useState } from "react"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel"

interface HeroCarouselItemProps {
  title: string
  description: string
}
type HeroCarouselList = HeroCarouselItemProps[]

const heroContents: HeroCarouselList = [
  {
    title: "We are Kickup Geers",
    description: "Award-Winning Construction Company & Real Estate Company",
  },
  {
    title: "We are experienced",
    description: "Quality Infrastructure Development For Over Three Decades",
  },
  {
    title: "We are dedicated",
    description: "Commited To Creating & Sustaining Tangible Results that work",
  },
]

interface HeroCarouselProps {
  activeIndex: number
  changeBackgroundCallback: (index: number) => void
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  activeIndex,
  changeBackgroundCallback,
}) => {
  const [api, setApi] = useState<CarouselApi>()

  const handleChangeBackgroundCallback = (index: number) => {
    changeBackgroundCallback(index)
    if (!api) return

    api.scrollTo(index, false)
  }

  const handleSetActiveItem = useCallback(
    (index: number) => {
      if (!api) return
      api.scrollTo(index)
    },
    [api]
  )

  useEffect(() => {
    handleSetActiveItem(activeIndex)
  }, [handleSetActiveItem, activeIndex])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {heroContents.map((card) => (
          <CarouselItem key={card.title}>
            <HeroCarouselItem {...card} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-10 w-full flex items-center justify-start gap-6 pl-5">
        {Array.from({ length: heroContents.length }).map((_, index) => (
          <div
            key={index}
            className={clsx([
              "w-[15px] h-[15px] cursor-pointer",
              {
                "bg-white": activeIndex === index,
                "bg-white/50": activeIndex !== index,
              },
            ])}
            onClick={() => handleChangeBackgroundCallback(index)}
          ></div>
        ))}
      </div>
    </Carousel>
  )
}

const HeroCarouselItem: React.FC<HeroCarouselItemProps> = ({
  title,
  description,
}) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg text-[#F5F5F0] font-bold uppercase">{title}</p>
      <p className="text-3xl md:text-6xl text-[#F5F5F0] font-bold">
        {description}
      </p>

      <button
        name={`learn-more-${title}-btn`}
        type="button"
        className="mt-5 text-black w-fit bg-[#FF8C00] text-sm md:text-base py-3 px-4 md:px-6 flex items-center gap-2 hover:rounded-[7px] duration-500"
        onClick={() => navigate("/")}
      >
        Learn more
        <HiOutlineArrowNarrowRight size={20} />
      </button>
    </div>
  )
}

export default HeroCarousel
