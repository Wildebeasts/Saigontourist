import vungTauImage from "../../assets/city-view-vung-tau.jpg"
import danangImage from "../../assets/Hai-Van-Da-Nang_270841277.jpg"
import hochiminhImage from "../../assets/Complex-of-Hue-Monuments.jpg"
import danangImage2 from "../../assets/Burj-Al-Arab_174741755.jpg"
import danangImage3 from "../../assets/city-view-vung-tau.jpg"

export const DestinationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase">
            ĐIỂM ĐẾN & TRẢI NGHIỆM
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Destination */}
          <div className="lg:col-span-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden group">
              <img
                src={danangImage3}
                alt="Vung Tau City View"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Vũng Tàu</h3>
                  <p>Thành phố biển năng động</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Destinations Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Đà Nẵng",
                  description: "Thành phố đáng sống",
                  image: danangImage
                },
                {
                  name: "Hồ Chí Minh",
                  description: "Thành phố năng động",
                  image: hochiminhImage
                },
                {
                  name: "Vũng Tàu",
                  description: "Thiên đường biển",
                  image: vungTauImage
                },
                {
                  name: "Đà Nẵng",
                  description: "Cảnh đẹp về đêm",
                  image: danangImage2
                }
              ].map((destination, index) => (
                <div key={index} className="relative h-[190px] rounded-lg overflow-hidden group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm">{destination.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};