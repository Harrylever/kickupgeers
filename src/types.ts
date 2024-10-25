type RentalItemRating = "1" | "2" | "3" | "4" | "5"

export interface IRentalItem {
  img: string
  name: string
  description: string
  rating: RentalItemRating
}
