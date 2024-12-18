import { useTranslation } from '../hooks/useTranslation';
import { Hero } from '../components/home/Hero';
import { DestinationSection } from "../components/home/DestinationSection"
import { MembershipSection } from "../components/home/MembershipSection"
import ChatwootWidget from '../components/ChatwootWidget';
import { domesticTours } from "../data/tours";
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";

const LandingPage = (): JSX.Element => {
  const { t } = useTranslation();
  
    // Helper function to get tour identifier
    const getTourIdentifier = (tourId: number): string => {
      switch(tourId) {
        case 1001: return 'baoLoc';
        case 1002: return 'buonMaThuot';
        case 1003: return 'danang';
        case 1004: return 'hanoi';
        case 1005: return 'vungTau';
        case 1006: return 'binhChau';
        case 1007: return 'danangHue';
        case 1008: return 'danangPhongNha';
        default: return 'baoLoc'; // fallback
      }
    };

  return (
    <div>
      <Hero />
      
      {/* Popular Domestic Tours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">{t('home.popularTours.title') as string}</h2>
            <Link 
              to="/tour-trong-nuoc"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              {t('home.popularTours.viewAll') as string}
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domesticTours.slice(0, 6).map((tour) => (
              <Link
                key={tour.id}
                to={`/tour/${tour.brand}/${tour.id}`}
                className="block group"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                      {t('home.popularTours.from') as string} {tour.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {t(`tours.domestic.${getTourIdentifier(tour.id)}.name`) as string}
                    </h3>
                    <div className="text-gray-600 space-y-1 text-sm">
                      <p className="flex items-center">
                        <i className="far fa-clock mr-2"></i>
                        {t('home.popularTours.duration') as string}: {t(`tours.domestic.${getTourIdentifier(tour.id)}.duration`) as string}
                      </p>
                      <p className="flex items-center">
                        <i className="far fa-map-marker-alt mr-2"></i>
                        {t('home.popularTours.location') as string}: {t(`tours.domestic.${getTourIdentifier(tour.id)}.location`) as string}
                      </p>
                      <p className="flex items-center">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {t('home.popularTours.departure') as string}: {tour.startDates[0]}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DestinationSection />
      <MembershipSection />
      <ChatwootWidget />
    </div>
  );
};

export default LandingPage;