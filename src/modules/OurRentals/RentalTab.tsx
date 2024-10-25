import React, { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { IRentalItem } from "@/types"
import { CardTitle } from "@/components/ui/card"
import {
  AnimatePresence,
  useInView,
  stagger,
  motion,
  animate,
} from "framer-motion"

type RentalItemTabProps = IRentalItem

const RentalItemTab: React.FC<RentalItemTabProps> = ({
  name,
  img,
  description,
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(divRef, { once: true })

  const staggerMenuItems = stagger(0.1, { ease: 'easeInOut' })

  const [isExpanded, setIsExpanded] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleExpandAndFlip = () => {
    setIsExpanded(!isExpanded)
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    if (divRef.current) {
      animate(
        "#item-rentalItem",
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.9, y: 200 },
        {
          duration: 0.5,
          delay: isInView ? staggerMenuItems : 0,
        }
      )
    }
  }, [isInView, staggerMenuItems])

  return (
    <AnimatePresence>
      <motion.div
        id="item-rentalItem"
        ref={divRef}
        layout
        onClick={toggleExpandAndFlip}
        className={clsx([
          "group cursor-pointer flex flex-col rounded-md overflow-hidden z-20",
          {
            "fixed top-[10vh] left-[15vw] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh]":
              isExpanded,
            "relative w-full max-w-[260px]": !isExpanded,
          },
        ])}
        initial={false}
        animate={{
          zIndex: isExpanded ? 1001 : 0,
          rotateX: isFlipped ? 360 : 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          layout
          className="w-full rounded-t-md overflow-hidden z-10"
          style={{
            height: isFlipped ? "100%" : "180px",
            backfaceVisibility: "hidden",
            position: isFlipped ? "absolute" : "relative",
          }}
        >
          <img
            src={img}
            alt={name}
            width={0}
            height={0}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
          />

          {isFlipped && isExpanded && (
            <div className="absolute bottom-0 right-0 p-5">
              <CardTitle>{name}</CardTitle>
              <p>{description}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RentalItemTab
