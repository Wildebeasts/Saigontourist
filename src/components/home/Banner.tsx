export const Banner = () => {
  return (
    <section className="relative w-full bg-cover bg-center min-h-[500px]" 
      style={{
        backgroundImage: "url(/uploads/images/2024 TTTT/tàu biển trang chủ.jpg)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          <div className="w-full md:w-1/2 lg:w-5/12 bg-white/90 p-6 rounded-lg shadow-lg mt-20">
            <div className="text-blue-600 font-semibold mb-2">
              Tin mới
            </div>
            <h2 className="text-2xl font-bold mb-4">
              2 Tháng Cuối Năm 2024: Lữ Hành Saigontourist Đón 7 Chuyến Tàu Biển
            </h2>
            <p className="text-gray-600 mb-6">
              Vào 7:30 sáng ngày 9.11.2024, Công ty Dịch vụ Lữ hành Saigontourist đón và phục vụ tàu biển Celebrity Solstice...
            </p>
            <a 
              href="/news"
              className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}