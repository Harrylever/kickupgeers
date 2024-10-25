import { Fragment, useEffect, useState } from "react"
import SearchSheet from "../../sheets/SearchSheet"
import MobileMenuSheet from "../../sheets/MobileMenuSheet/index"
import useScreenOrientation, { ScreenType } from "@/hooks/useScreenOrientation"

const HeaderActionButton = () => {
  const [screenOrientation, setScreenOrientation] =
    useState<ScreenType>("desktop")

  const { screenType } = useScreenOrientation()

  useEffect(() => {
    setScreenOrientation(screenType)
  }, [screenType])

  return (
    <Fragment>
      {screenOrientation === "desktop" ? <SearchSheet /> : <MobileMenuSheet />}
    </Fragment>
  )
}

export default HeaderActionButton
