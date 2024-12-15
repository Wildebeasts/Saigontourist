import { FaPlane, FaHotel, FaCar, FaPassport } from 'react-icons/fa'; // For travel services
import { FaUserCircle, FaGift, FaCoins } from 'react-icons/fa'; // For membership benefits
import { FaHistory, FaShieldAlt, FaMoneyBillWave, FaHeadset } from 'react-icons/fa'; // For why choose us
import { useTranslation } from '../../hooks/useTranslation'; // Add this import

export const MembershipSection = () => {
  const { t } = useTranslation(); // Add this hook

  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold text-center mb-12">{t('home.membership.title') as string}</h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Membership Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaUserCircle />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.membership.card.title') as string}</h3>
            <p className="text-gray-600 mb-4">{t('home.membership.card.desc') as string}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              {t('home.membership.register') as string}
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaGift />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.membership.benefits.title') as string}</h3>
            <p className="text-gray-600 mb-4">{t('home.membership.benefits.desc') as string}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              {t('home.membership.register') as string}
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaCoins />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.membership.points.title') as string}</h3>
            <p className="text-gray-600 mb-4">{t('home.membership.points.desc') as string}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              {t('home.membership.register') as string}
            </button>
          </div>
        </div>
      </div>

      {/* Travel Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-12">{t('home.services.title') as string}</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaPlane />, title: t('home.services.flight.title') as string, desc: t('home.services.flight.desc') as string },
                { icon: <FaHotel />, title: t('home.services.hotel.title') as string, desc: t('home.services.hotel.desc') as string },
              { icon: <FaCar />, title: t('home.services.car.title') as string, desc: t('home.services.car.desc') as string },
              { icon: <FaPassport />, title: t('home.services.visa.title') as string, desc: t('home.services.visa.desc') as string }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title as string}</h3>
                <p className="text-gray-600 mb-4">{service.desc as string}</p>
                <button className="text-blue-600 hover:text-blue-800">{t('home.services.learnMore') as string}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-12">{t('home.whyChooseUs.title') as string}</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaHistory />, title: t('home.whyChooseUs.experience.title') as string, desc: t('home.whyChooseUs.experience.desc') as string },
              { icon: <FaShieldAlt />, title: t('home.whyChooseUs.safety.title') as string, desc: t('home.whyChooseUs.safety.desc') as string },
              { icon: <FaMoneyBillWave />, title: t('home.whyChooseUs.price.title') as string, desc: t('home.whyChooseUs.price.desc') as string },
              { icon: <FaHeadset />, title: t('home.whyChooseUs.support.title') as string, desc: t('home.whyChooseUs.support.desc') as string }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title as string}</h3>
                <p className="text-gray-600">{feature.desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};