import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet"
import MenuItem from "./MenuItem"
import { navlinks } from "@/lib/data/navlinks"
import { RxHamburgerMenu } from "react-icons/rx"
import useScrollIndex from "@/hooks/useScrollIndex"

const MobileMenuSheet = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { isPageTop } = useScrollIndex()
  const [activeElementId, setActiveElementId] = useState<string>("")

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button type="button" name="show-mobile-menu-btn">
          <RxHamburgerMenu
            size={25}
            color={isPageTop ? "#F5F5F0" : "#4B4B4B"}
          />
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="w-full">
          <ul className="mt-20 flex flex-col gap-10">
            {navlinks.map((link, index) => (
              <MenuItem
                key={index}
                title={link.title}
                elementid={link.href}
                activeelementid={activeElementId}
                setactiveelementid={setActiveElementId}
                onclickcallback={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenuSheet
