export interface Tour {
  id: number
  name: string
  brand: string
  category: string
  list: string
  position: number
  price: string
  image: string
  promotion?: string
}

export interface TourDate {
  date: string
  tourCode: string
  price: string
  childPrice: string
  infantPrice: string
}

export interface DomesticTour extends Tour {
  duration: string
  transport: string
  description: string
  startDates: string[]
  location: string
  // New fields
  departurePoint: string
  destination: string
  tourDates: TourDate[]
  highlights: string[]
  itinerary: {
    day: number
    title: string
    meals: string[]
    description: string
    images?: string[]
  }[]
  additionalImages?: string[]
  policies?: string[]
  visaInfo?: string[]
} 