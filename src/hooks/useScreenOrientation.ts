import { useEffect, useState } from "react"

export type ScreenType = "mobile" | "desktop" | "tablet"

// <564 Mobile
// <1000 Tablet

const useScreenOrientation = () => {
  const [screenType, setScreenType] = useState<ScreenType>("desktop")

  const handleScreenResize = () => {
    const innerWidth = window.innerWidth

    if (innerWidth > 1000) {
      setScreenType("desktop")
    } else if (innerWidth > 564) {
      setScreenType("tablet")
    } else {
      setScreenType("mobile")
    }
  }

  useEffect(() => {
    handleScreenResize()
    window.addEventListener("resize", handleScreenResize)

    return () => window.removeEventListener("resize", handleScreenResize)
  }, [])

  return { screenType }
}

export default useScreenOrientation
