import { cn } from "@/lib/utils"
import { animate, stagger, useInView } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

interface CustomMenuItemProps {
  elementid: string
  activeelementid: string
  setactiveelementid: (elementid: string) => void
  onclickcallback?: () => void
}

const MenuItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & CustomMenuItemProps
>(
  (
    {
      className,
      title,
      elementid,
      activeelementid,
      setactiveelementid,
      onclickcallback,
      ...props
    },
    ref
  ) => {
    const [windowYPosition, setWindowYPosition] = useState(0)

    const liRef = useRef<HTMLLIElement>(null)
    const isInView = useInView(liRef, { once: true })

    const staggerMenuItems = stagger(0.1, { ease: "easeInOut" })

    useEffect(() => {
      if (liRef.current) {
        animate(
          "#menu-item",
          isInView
            ? { opacity: 1, scale: 1, x: 0 }
            : { opacity: 0, scale: 0.9, x: 300 },
          {
            duration: 0.6,
            delay: isInView ? staggerMenuItems : 0,
          }
        )
      }
    }, [isInView, staggerMenuItems])

    useEffect(() => {
      const updateScroll = () => setWindowYPosition(window.scrollY)
      window.addEventListener("scroll", updateScroll)

      return () => window.removeEventListener("scroll", updateScroll)
    }, [])

    const goToSection = () => {
      const elementToScroll = document.querySelector(elementid)

      if (elementToScroll) {
        const elementYPosition =
          elementToScroll.getBoundingClientRect().top + window.scrollY

        if (
          activeelementid !== elementid ||
          windowYPosition !== elementYPosition
        ) {
          window.scrollTo({
            top: elementYPosition,
            behavior: "smooth",
          })
        }
        setactiveelementid(elementid)
        if (onclickcallback) onclickcallback()
      }
    }

    return (
      <li id="menu-item" ref={liRef}>
        <button
          name={`${title?.split(" ").join("-").toLowerCase()}-btn`}
          type={"button"}
          ref={ref}
          className={cn(
            "block bg-transparent select-none no-underline leading-none transition-colors",
            className
          )}
          {...props}
          onClick={goToSection}
        >
          <p className={"relative text-base font-normal group text-black"}>
            {title}
            <span
              className={
                "absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100 bg-[#FF8C00]"
              }
            ></span>
          </p>
        </button>
      </li>
    )
  }
)
MenuItem.displayName = "MenuItem"

export default MenuItem
