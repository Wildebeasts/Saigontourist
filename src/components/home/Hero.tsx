import { useState, useEffect } from 'react'
import dubai from '../../assets/Burj-Al-Arab_174741755.jpg'
import indonesia from '../../assets/Indo_Bali_Lembongan_785773840.jpg'
import { useTranslation } from '../../hooks/useTranslation'
import { useNavigate } from 'react-router-dom'



export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const slides = [
    {
      image: indonesia,
      title: 'home.hero.indonesia.title',
      subtitle: 'home.hero.indonesia.subtitle',
      discount: 'home.hero.indonesia.discount'
    },
    {
      image: dubai,
      title: 'home.hero.tet2025.title',
      subtitle: 'home.hero.tet2025.subtitle',
      discount: 'home.hero.tet2025.discount'
    },
    // Add more slides as needed
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = () => {
    navigate(`/tour-trong-nuoc?search=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <div className="relative w-full">
      {/* Carousel Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Navigation Buttons */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-4 rounded-xl w-14 h-14"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-4 rounded-xl w-14 h-14"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">{t(slide.title) as string}</h1>
                <h2 className="text-4xl font-semibold mb-6">{t(slide.subtitle) as string}</h2>
                <p className="text-2xl mb-8">{t(slide.discount) as string}</p>
                <a
                  href="#"
                  className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                >
                  {t('home.hero.viewMore') as string}
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {/* Move slide indicators above search bar */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl">
        <div className="mx-4">
          <div className="relative bg-white rounded-xl shadow-lg flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('home.hero.search') as string}
              className="w-full py-4 px-8 rounded-full text-lg focus:outline-none"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 p-3 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 