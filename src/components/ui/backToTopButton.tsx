import { useEffect, useState } from "react"
import { AnimatePresence, motion, Variants } from "framer-motion"

const BackToTopButton = () => {
  const [windowYPosition, setWindowYPosition] = useState(0)

  useEffect(() => {
    const updateScroll = () => setWindowYPosition(window.scrollY)
    window.addEventListener("scroll", updateScroll)

    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const variants: Variants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, x: 200, transition: { duration: 0.7 } },
  }

  return (
    <AnimatePresence>
      {windowYPosition ? (
        <motion.button
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="back-to-top"
          onClick={scrollToTop}
          name="back-to-top-button"
          className="fixed bottom-[50px] right-[20px] z-[10000] p-3 bg-transparent border-none outline-none leading-3 text-xs text-[#FF8C00] font-semibold hover:underline"
        >
          Back to top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTopButton
