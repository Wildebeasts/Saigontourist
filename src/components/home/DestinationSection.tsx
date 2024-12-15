import vungTauImage from "../../assets/city-view-vung-tau.jpg"
import danangImage from "../../assets/Hai-Van-Da-Nang_270841277.jpg"
import hochiminhImage from "../../assets/Complex-of-Hue-Monuments.jpg"
import danangImage2 from "../../assets/Burj-Al-Arab_174741755.jpg"
import danangImage3 from "../../assets/city-view-vung-tau.jpg"
import { useTranslation } from '../../hooks/useTranslation';

export const DestinationSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase">
            {t('home.destinations.title') as string}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden group">
              <img
                src={danangImage3}
                alt={t('home.destinations.vungTau.title') as string}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{t('home.destinations.vungTau.title') as string}</h3>
                  <p>{t('home.destinations.vungTau.desc') as string}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Destinations Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: t('home.destinations.danang.title') as string,
                  description: t('home.destinations.danang.desc') as string,
                  image: danangImage
                },
                {
                  name: t('home.destinations.hochiminh.title') as string,
                  description: t('home.destinations.hochiminh.desc') as string,
                  image: hochiminhImage
                },
                {
                  name: t('home.destinations.vungTau.title') as string,
                  description: t('home.destinations.vungTau.desc') as string,
                  image: vungTauImage
                },
                {
                  name: t('home.destinations.danangNight.title') as string,
                  description: t('home.destinations.danangNight.desc') as string,
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