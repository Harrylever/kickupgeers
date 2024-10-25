import { Fragment } from "react"
import Contact from "@/modules/Contact"
import OurRentals from "@/modules/OurRentals"
import OurServices from "@/modules/OurServices"
import LandingPageFadingBackground from "@/modules/LandingPageFadingBackground"

export default function HomePage() {
  return (
    <Fragment>
      <LandingPageFadingBackground />
      <OurServices />
      <OurRentals />
      <Contact />
    </Fragment>
  )
}
