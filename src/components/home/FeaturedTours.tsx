import { featuredTours } from "../../data/tours"
import { Card } from "../ui/card"
import { Link } from "react-router-dom"

export const FeaturedTours = (): JSX.Element => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tour Nổi Bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <Link 
              key={tour.id}
              to={`/tour/${tour.brand}/${tour.id}`}
              className="GAproductClick"
              data-id={tour.id}
              data-name={tour.name}
              data-brand={tour.brand}
              data-category={tour.category}
              data-list={tour.list}
              data-position={tour.position}
            >
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  {tour.promotion && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                      {tour.promotion}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{tour.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Giá từ</p>
                      <p className="text-lg font-bold text-primary">{tour.price}</p>
                    </div>
                    <span className="text-sm text-gray-500">{tour.category}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}