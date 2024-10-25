import { CiSearch } from "react-icons/ci"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchSheetForm from "./SearchSheetForm"
import useScrollIndex from "@/hooks/useScrollIndex"

const SearchSheet = () => {
  const { isPageTop } = useScrollIndex()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" name="show-search-sheet-btn">
          <CiSearch size={25} color={isPageTop ? "#F5F5F0" : "#4B4B4B"} />
        </button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
          <SheetDescription>
            Search for trucks or equipment you would want to hire?
          </SheetDescription>
        </SheetHeader>

        <SearchSheetForm />
      </SheetContent>
    </Sheet>
  )
}

export default SearchSheet
