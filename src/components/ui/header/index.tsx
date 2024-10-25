import { Link } from "react-router-dom"
import HeaderActionButton from "./HeaderActionButton"
import HeaderNavigationMenu from "./HeaderNavigationMenu"
import clsx from "clsx"
import useScrollIndex from "@/hooks/useScrollIndex"

const Header = () => {
  const { isPageTop } = useScrollIndex()

  return (
    <header
      className={clsx([
        "fixed z-20 w-full pl-0 pr-10 sm:px-10 duration-500",
        {
          "bg-transparent": isPageTop,
          "bg-[#F5F5F0] shadow-lg": !isPageTop,
        },
      ])}
    >
      <div className="bg-transparent w-full max-w-[1400px] mx-auto flex items-center justify-between h-[120px]">
        <Link to={"/"}>
          <img
            src="/png/kickupgeers.png"
            alt="Kickup Geers Limited"
            width={0}
            height={0}
            className="relative w-[150px] h-auto"
          />
        </Link>

        <HeaderNavigationMenu />

        <HeaderActionButton />
      </div>
    </header>
  )
}

export default Header
