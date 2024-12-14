import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { domesticTours } from '../data/tours';
import { cn } from '../lib/utils';

const TourDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const tour = domesticTours.find(t => t.id === Number(id));
  const [activeTab, setActiveTab] = useState<'itinerary' | 'policies' | 'visa'>('itinerary');

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{tour.name}</h1>
            <div className="flex items-center text-white space-x-6">
              <span className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <i className="far fa-clock mr-2"></i>
                {tour.duration}
              </span>
              <span className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <i className="far fa-map-marker-alt mr-2"></i>
                {tour.location}
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
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Tổng Quan</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-clock text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">Thời gian:</span>
                    {tour.duration}
                  </p>
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-plane-departure text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">Điểm xuất phát:</span>
                    {tour.departurePoint}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-car text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">Phương tiện:</span>
                    {tour.transport}
                  </p>
                  <p className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                    <i className="far fa-map-marker-alt text-blue-500 mr-3 w-6"></i>
                    <span className="font-medium mr-2">Điểm đến:</span>
                    {tour.destination}
                  </p>
                </div>
              </div>
            </div>

            {/* Available Dates */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Lịch Khởi Hành</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Khởi hành</th>
                      <th className="px-4 py-2 text-left">Mã Tour</th>
                      <th className="px-4 py-2 text-right">Giá</th>
                      <th className="px-4 py-2 text-right">Giá trẻ em</th>
                      <th className="px-4 py-2 text-right">Giá em bé</th>
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
              <h2 className="text-2xl font-bold mb-4">Tour này có gì hay</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {tour.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex border-b bg-gray-50 rounded-t-lg">
                <button
                  className={cn(
                    "flex-1 px-8 py-4 text-sm font-medium transition-all",
                    activeTab === 'itinerary' 
                      ? "border-b-2 border-blue-600 text-blue-600 bg-white" 
                      : "text-gray-600 hover:text-blue-500"
                  )}
                  onClick={() => setActiveTab('itinerary')}
                >
                  Chương trình Tour
                </button>
                <button
                  className={cn(
                    "flex-1 px-6 py-3 text-sm font-medium",
                    activeTab === 'policies' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                  )}
                  onClick={() => setActiveTab('policies')}
                >
                  Chính sách Tour
                </button>
                <button
                  className={cn(
                    "flex-1 px-6 py-3 text-sm font-medium",
                    activeTab === 'visa' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
                  )}
                  onClick={() => setActiveTab('visa')}
                >
                  Thủ tục & Visa
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'itinerary' && (
                  <div className="space-y-8">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 text-blue-800">
                          NGÀY {day.day}: {day.title}
                        </h3>
                        <div className="flex items-center mb-4 text-gray-600">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {day.meals.join(' • ')}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{day.description}</p>
                        {day.images && (
                          <div className="grid grid-cols-2 gap-4 mt-6">
                            {day.images.map((image, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={image}
                                alt={`Day ${day.day} - Image ${imgIndex + 1}`}
                                className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'policies' && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {tour.policies?.map((policy, index) => (
                      <li key={index}>{policy}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'visa' && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {tour.visaInfo?.map((info, index) => (
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
                <p className="text-gray-600 mb-2">Giá chỉ từ</p>
                <p className="text-4xl font-bold text-orange-500">{tour.price}</p>
              </div>
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-medium mb-4">
                ĐẶT TOUR NGAY
              </button>
              <button className="w-full border-2 border-orange-500 text-orange-500 py-4 rounded-lg hover:bg-orange-50 transition-all font-medium">
                LIÊN HỆ TƯ VẤN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage; 