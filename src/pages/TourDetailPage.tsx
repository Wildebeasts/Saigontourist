import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { domesticTours } from '../data/tours';
import { cn } from '../lib/utils';
import { useTranslation } from '../hooks/useTranslation';

const TourDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const tour = domesticTours.find(t => t.id === Number(id));
  const [activeTab, setActiveTab] = useState<'itinerary' | 'policies' | 'visa'>('itinerary');
  const { t } = useTranslation();

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
      default: return 'baoLoc';
    }
  };

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={tour.image}
          alt={t(`tours.domestic.${getTourIdentifier(tour.id)}.name`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t(`tours.domestic.${getTourIdentifier(tour.id)}.name`)}
            </h1>
            <div className="flex items-center text-white space-x-6">
              <span className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <i className="far fa-clock mr-2"></i>
                {t('tour.detail.duration')}: {t(`tours.domestic.${getTourIdentifier(tour.id)}.duration`)}
              </span>
              <span className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <i className="far fa-map-marker-alt mr-2"></i>
                {t(`tours.domestic.${getTourIdentifier(tour.id)}.location`)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Tour Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {t('tour.detail.overview')}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-clock text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">{t('tour.detail.duration')}:</span>
                    {t(`tours.domestic.${getTourIdentifier(tour.id)}.duration`)}
                  </p>
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-plane-departure text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">{t('tour.detail.departure')}:</span>
                    {t(`tours.domestic.${getTourIdentifier(tour.id)}.location`)}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-car text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">{t('tour.detail.transport')}:</span>
                    {t(`tours.domestic.${getTourIdentifier(tour.id)}.transport`)}
                  </p>
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-map-marker-alt text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">{t('tour.detail.destination')}:</span>
                    {t(`tours.domestic.${getTourIdentifier(tour.id)}.location`)}
                  </p>
                </div>
              </div>
            </div>

            {/* Available Dates */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {t('tour.schedule.title')}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">{t('tour.schedule.departure')}</th>
                      <th className="px-4 py-2 text-left">{t('tour.schedule.tourCode')}</th>
                      <th className="px-4 py-2 text-right">{t('tour.schedule.price')}</th>
                      <th className="px-4 py-2 text-right">{t('tour.schedule.childPrice')}</th>
                      <th className="px-4 py-2 text-right">{t('tour.schedule.infantPrice')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tour.tourDates.map((date, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{date.date}</td>
                        <td className="px-4 py-2">{date.tourCode}</td>
                        <td className="px-4 py-2 text-right">{date.price}</td>
                        <td className="px-4 py-2 text-right">{date.childPrice}</td>
                        <td className="px-4 py-2 text-right">{date.infantPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">
                {t('tour.detail.highlights')}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {(t(`tours.domestic.${getTourIdentifier(tour.id)}.highlights`, { 
                  returnObjects: true,
                  defaultValue: { items: [] }
                }).items || []).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={cn(
                      "flex-1 px-6 py-3 text-sm font-medium",
                      activeTab === 'itinerary' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                    )}
                    onClick={() => setActiveTab('itinerary')}
                  >
                    {t('tour.tabs.itinerary')}
                  </button>
                  <button
                    className={cn(
                      "flex-1 px-6 py-3 text-sm font-medium",
                      activeTab === 'policies' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                    )}
                    onClick={() => setActiveTab('policies')}
                  >
                    {t('tour.tabs.policies')}
                  </button>
                  <button
                    className={cn(
                      "flex-1 px-6 py-3 text-sm font-medium",
                      activeTab === 'visa' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                    )}
                    onClick={() => setActiveTab('visa')}
                  >
                    {t('tour.tabs.visa')}
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'itinerary' && (
                  <div className="space-y-8">
                    {Object.keys(t(`tours.domestic.${getTourIdentifier(tour.id)}.itinerary`, { returnObjects: true })).map((day, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 text-blue-800">
                          {t(`tours.domestic.${getTourIdentifier(tour.id)}.itinerary.${day}.title`)}
                        </h3>
                        <div className="flex items-center mb-4 text-gray-600">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {t(`tours.domestic.${getTourIdentifier(tour.id)}.itinerary.${day}.meals`)}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {t(`tours.domestic.${getTourIdentifier(tour.id)}.itinerary.${day}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'policies' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      {t(`tours.domestic.${getTourIdentifier(tour.id)}.policies.title`)}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {(t(`tours.domestic.${getTourIdentifier(tour.id)}.policies.items`, {
                        returnObjects: true,
                        defaultValue: []
                      }) as string[]).map((policy, index) => (
                        <li key={index}>{policy}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'visa' && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {(t(`tours.domestic.${getTourIdentifier(tour.id)}.visaInfo.items`, {
                      returnObjects: true,
                      defaultValue: []
                    }) as string[]).map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-8">
                <p className="text-gray-600 mb-2">{t('tour.detail.priceFrom')}</p>
                <p className="text-4xl font-bold text-orange-500">{tour.price}</p>
              </div>
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-medium mb-4">
                {t('tour.detail.bookNow')}
              </button>
              <button className="w-full border-2 border-orange-500 text-orange-500 py-4 rounded-lg hover:bg-orange-50 transition-all font-medium">
                {t('tour.detail.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage; 