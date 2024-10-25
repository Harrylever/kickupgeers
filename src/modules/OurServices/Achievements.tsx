import clsx from "clsx"
import anime from "animejs"
import AchievementTab from "./AchievementTab"
import { useCallback, useEffect, useRef, useState } from "react"

const achievementsList: { amount: number; label: string; excerpt: string }[] = [
  {
    amount: 600,
    label: "billion naira",
    excerpt:
      "Over 100 billion Naira has been invested in the projects we have been involved in for the last 30 years by governments, organizations, and private clients across the country and beyond.",
  },
  {
    amount: 300,
    label: "Projects Completed",
    excerpt:
      "As a construction company with headquarters in Lagos, an integrated infrastructure and housing development provider, we have worked on over 300 projects ranging from building construction, civil engineering, real estate, and facility management.",
  },
  {
    amount: 9500,
    label: "Jobs Created",
    excerpt:
      "Over the course of our operations, we have created and retained over ten thousand jobs for hardworking professionals across multiple fields ranging from actual construction to supporting services.",
  },
]

const Achievements = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  const tabContainerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Array<HTMLDivElement | null>>([])

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setIsIntersecting(entry.isIntersecting)
    },
    []
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-200px",
    })

    const tabContainerRefCopy = tabContainerRef.current
    if (tabContainerRef.current) {
      observer.observe(tabContainerRef.current)
    }

    return () => {
      if (tabContainerRefCopy) {
        observer.disconnect()
      }
    }
  }, [handleIntersection])

  useEffect(() => {
    if (isIntersecting && !isMounted) {
      anime({
        targets: tabRefs.current,
        translateX: [400, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3000,
        delay: anime.stagger(200),
      })

      setIsMounted(true)
    }
  }, [isIntersecting, isMounted])

  return (
    <div
      ref={tabContainerRef}
      className="mt-6 lg:ml-12 flex flex-col gap-5 max-w-[800px]"
    >
      {achievementsList.map((item, index) => (
        <div
          key={item.label}
          ref={(el) => (tabRefs.current[index] = el)}
          className={clsx([
            "",
            {
              "opacity-100": isIntersecting,
              "opacity-0": !isIntersecting,
            },
          ])}
        >
          <AchievementTab {...item} />
        </div>
      ))}
    </div>
  )
}

export default Achievements
