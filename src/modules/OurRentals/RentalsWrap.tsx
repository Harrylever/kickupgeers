import { IRentalItem } from "@/types"
import RentalItemTab from "./RentalTab"

const rentals: IRentalItem[] = [
  {
    img: "/jpg/truck-1.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-2.jpg",
    name: "Bridge",
    description: "Bridge",
    rating: "4",
  },
  {
    img: "/jpg/truck-3.jpg",
    name: "Bridge",
    description: "Bridge",
    rating: "4",
  },
  {
    img: "/jpg/truck-4.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-5.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-6.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-7.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-8.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-9.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-10.jpg",
    name: "",
    description: "",
    rating: "4",
  },
  {
    img: "/jpg/truck-11.jpg",
    name: "",
    description: "",
    rating: "4",
  },
]

const RentalsWrap = () => {
  return (
    <div id="our-rentals" className="w-full pt-[120px]">
      <div className="max-w-[400px] flex flex-col gap-2">
        <h2 className="text-5xl text-black font-medium">Hire From Us</h2>
        <p className="text-sm text-[#4B4B4B]">
          We believe that a successful business is clear on its vision, values
          and purpose and these guide its long term strategies and day-to-day
          activities.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-20 justify-items-center duration-300">
        {rentals.map((item, index) => (
          <RentalItemTab key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default RentalsWrap
