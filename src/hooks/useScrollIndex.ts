import { useCallback, useEffect, useState } from "react"

const useScrollIndex = () => {
  const [scrollIndex, setScrollIndex] = useState(0)

  const handleSetScrollIndex = useCallback(() => {
    setScrollIndex(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleSetScrollIndex)
    handleSetScrollIndex()

    return () => {
      window.removeEventListener("scroll", handleSetScrollIndex)
    }
  }, [handleSetScrollIndex])

  const isPageTop = scrollIndex < 150

  return { isPageTop }
}

export default useScrollIndex
