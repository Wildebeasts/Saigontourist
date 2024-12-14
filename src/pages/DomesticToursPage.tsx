import { useState } from 'react';
import { domesticTours } from "../data/tours"
import { Card } from "../components/ui/card";
import { Link } from "react-router-dom";
import bg from "../assets/chua-huong-ha-tay-hanoi1.jpg"
import { DomesticTour } from '../types/tour';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DomesticToursPage = (): JSX.Element => {
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
                placeholder="Nhập địa điểm"
                className="flex-1 border rounded p-2 min-w-[200px]"
              />
              <div className="flex gap-4">
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Từ ngày"
                    className="border rounded p-2 pr-8"
                  />
                  <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Đến ngày"
                    className="border rounded p-2 pr-8"
                  />
                  <i className="far fa-calendar-alt absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <select className="border rounded p-2">
                  <option>Trong nước</option>
                </select>
                <button 
                  onClick={handleSearch}
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                >
                  TÌM KIẾM
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
              Kết quả tìm kiếm: "{displayedSearchTerm}"
            </h1>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Sort Options */}
        <div className="mb-4 text-sm">
          <span className="text-gray-600">Sắp xếp: </span>
          <button className="text-blue-600 hover:underline mx-2">
            [Ngày gần nhất]
          </button>
          <button className="text-blue-600 hover:underline mx-2">
            [Giá thấp nhất]
          </button>
          <button className="text-blue-600 hover:underline mx-2">
            [Hấp dẫn nhất]
          </button>
        </div>

        {/* Tour List */}
        <div className="space-y-6">
          {filteredTours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tour/${tour.brand}/${tour.id}`}
              className="block"
            >
              <Card className="overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-600 text-lg mb-2 hover:underline">
                          {tour.name}
                        </h3>
                        <p className="text-gray-700 font-medium mb-2">
                          {tour.location}
                        </p>
                        <p className="text-gray-600 mb-1">
                          Thời gian: {tour.duration}
                        </p>
                        <p className="text-gray-600 mb-1">
                          Phương tiện: {tour.transport}
                        </p>
                        <p className="text-gray-600">{tour.description}</p>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-orange-500 font-bold text-2xl mb-2">
                          Giá từ {tour.price}đ
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
                          Xem thêm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomesticToursPage;
