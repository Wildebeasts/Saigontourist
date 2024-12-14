export const ServiceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Dịch Vụ Du Lịch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Vé Máy Bay",
              description: "Đặt vé máy bay với giá ưu đãi",
              icon: "fa-plane"
            },
            {
              title: "Khách Sạn",
              description: "Đặt phòng khách sạn toàn cầu",
              icon: "fa-hotel"
            },
            {
              title: "Thuê Xe",
              description: "Dịch vụ thuê xe đa dạng",
              icon: "fa-car"
            },
            {
              title: "Visa",
              description: "Dịch vụ làm visa nhanh chóng",
              icon: "fa-passport"
            }
          ].map((service, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <i className={`fas ${service.icon} text-3xl text-blue-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Tìm hiểu thêm
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};