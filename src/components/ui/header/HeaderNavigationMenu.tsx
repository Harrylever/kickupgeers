import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import useScreenOrientation from "@/hooks/useScreenOrientation"
import useScrollIndex from "@/hooks/useScrollIndex"
import clsx from "clsx"
import { navlinks } from "@/lib/data/navlinks"

const HeaderNavigationMenu = () => {
  const { screenType } = useScreenOrientation()
  const [activeElementId, setActiveElementId] = useState<string>("")

  return (
    <>
      {screenType === "desktop" && (
        <ul className="hidden lg:flex flex-row items-center justify-center gap-10 p-4">
          {navlinks.map((link, index) => (
            <ListItem
              key={index}
              title={link.title}
              elementid={link.href}
              activeelementid={activeElementId}
              setactiveelementid={setActiveElementId}
            />
          ))}
        </ul>
      )}
    </>
  )
}

interface CustomListItemProps {
  elementid: string
  activeelementid: string
  setactiveelementid: (elementid: string) => void
  onclickcallback?: () => void
}

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & CustomListItemProps
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
    const { isPageTop } = useScrollIndex()
    const { screenType } = useScreenOrientation()
    const [windowYPosition, setWindowYPosition] = useState(0)

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
      <li>
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
          <p
            className={clsx([
              "relative text-base font-normal group",
              {
                "text-[#F5F5F0]": isPageTop && screenType === "desktop",
                "text-[#4B4B4B] hover:text-black":
                  !isPageTop && screenType === "desktop",
                "text-black": screenType !== "desktop",
              },
            ])}
          >
            {title}
            <span
              className={clsx([
                "absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100",
                {
                  "bg-[#F5F5F0]": isPageTop && screenType === "desktop",
                  "bg-[#4B4B4B] hover:bg-black":
                    !isPageTop && screenType === "desktop",
                  "bg-[#FF8C00]": screenType !== "desktop",
                },
              ])}
            ></span>
          </p>
        </button>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export default HeaderNavigationMenu
