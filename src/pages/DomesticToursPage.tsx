import { useState } from 'react';
import { domesticTours } from "../data/tours"
import { Link } from "react-router-dom";
import bg from "../assets/chua-huong-ha-tay-hanoi1.jpg"
import { DomesticTour } from '../types/tour';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from '../hooks/useTranslation';

const DomesticToursPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedSearchTerm, setDisplayedSearchTerm] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredTours, setFilteredTours] = useState<DomesticTour[]>(domesticTours);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    setDisplayedSearchTerm(searchTerm);
    
    const normalizeText = (text: string) => {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/\s+/g, ' ')
        .trim();
    };

    const searchNormalized = normalizeText(searchTerm);

    const filtered = domesticTours.filter(tour => {
      const nameNormalized = normalizeText(tour.name);
      const locationNormalized = normalizeText(tour.location);
      
      const matchesSearch = 
        nameNormalized.includes(searchNormalized) ||
        locationNormalized.includes(searchNormalized);
      
      const tourDates = tour.startDates.map(date => {
        const [day, month, year] = date.split('/');
        return new Date(Number(year), Number(month) - 1, Number(day));
      });

      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      
      const matchesDates = !start || !end || tourDates.some(date => {
        const tourDate = new Date(date.setHours(0, 0, 0, 0));
        const startDateTime = start && new Date(start.setHours(0, 0, 0, 0));
        const endDateTime = end && new Date(end.setHours(0, 0, 0, 0));
        
        return startDateTime && endDateTime ? 
          tourDate >= startDateTime && tourDate <= endDateTime : true;
      });

      return matchesSearch && matchesDates;
    });

    setFilteredTours(filtered);
  };

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
      {/* Hero Image Section */}
      <div className="relative h-[300px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`
          }}
        />
      </div>

      {/* Search Section with Grey Background */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('tour.search.location') as string}
                className="flex-1 border rounded p-2 min-w-[200px]"
              />
              <div className="flex gap-4">
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={t('tour.search.fromDate') as string}
                    className="border rounded p-2 pr-8"
                  />
                  <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText={t('tour.search.toDate') as string}
                    className="border rounded p-2 pr-8"
                  />
                  <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <select className="border rounded p-2">
                  <option>{t('tour.search.domestic') as string}</option>
                </select>
                <button 
                  onClick={handleSearch}
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                >
                  {t('tour.search.searchBtn') as string}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Title - Only show after search and when there's a search term */}
      {hasSearched && displayedSearchTerm && (
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-white">
              {(t('tour.search.results') as string).replace('{term}', displayedSearchTerm)}
            </h1>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t('tour.domestic.title') as string}</h1>
        {/* Sort Options */}
        <div className="mb-4 text-sm">
          <span className="text-gray-600">{t('tour.sort.label') as string}: </span>
          <button className="text-blue-600 hover:underline mx-2">
            [{t('tour.sort.nearest') as string}]
          </button>
          <button className="text-blue-600 hover:underline mx-2">
            [{t('tour.sort.lowestPrice') as string}]
          </button>
          <button className="text-blue-600 hover:underline mx-2">
            [{t('tour.sort.mostPopular') as string}]
          </button>
        </div>

        {/* Tour List */}
        <div className="space-y-6">
          {filteredTours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tour/${tour.brand}/${tour.id}`}
              className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src={tour.image}
                    alt={t(`tours.domestic.${getTourIdentifier(tour.id)}.name`) as string}
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-600 text-lg mb-2 hover:underline">
                        {t(`tours.domestic.${getTourIdentifier(tour.id)}.name`) as string}
                      </h3>
                      <p className="text-gray-700 font-medium mb-2">
                        {t(`tours.domestic.${getTourIdentifier(tour.id)}.location`) as string}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span>{t('tour.detail.duration') as string}: </span>
                        {t(`tours.domestic.${getTourIdentifier(tour.id)}.duration`) as string}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span>{t('tour.detail.transport') as string}: </span>
                        {t(`tours.domestic.${getTourIdentifier(tour.id)}.transport`) as string}
                      </p>
                      <p className="text-gray-600">
                        {t(`tours.domestic.${getTourIdentifier(tour.id)}.description`) as string  }
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-orange-500 font-bold text-2xl mb-2">
                        {t('home.popularTours.from') as string} {tour.price}
                      </div>
                      <div className="space-y-2">
                        {tour.startDates.map((date, index) => (
                          <div key={index} className="text-gray-600">
                            <i className="far fa-calendar-alt mr-2"></i>
                            {date}
                          </div>
                        ))}
                      </div>
                      <button className="text-blue-600 hover:underline mt-4">
                        {t('home.popularTours.viewAll') as string}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomesticToursPage;
