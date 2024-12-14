import { FaPlane, FaHotel, FaCar, FaPassport } from 'react-icons/fa'; // For travel services
import { FaUserCircle, FaGift, FaCoins } from 'react-icons/fa'; // For membership benefits
import { FaHistory, FaShieldAlt, FaMoneyBillWave, FaHeadset } from 'react-icons/fa'; // For why choose us

export const MembershipSection = () => {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold text-center mb-12">Thành Viên Saigontourist</h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Membership Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaUserCircle />
            </div>
            <h3 className="text-xl font-semibold mb-3">Thẻ Thành Viên</h3>
            <p className="text-gray-600 mb-4">Đăng ký thành viên để nhận ưu đãi đặc biệt và tích điểm cho mỗi chuyến đi</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Đăng Ký Ngay</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaGift />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ưu Đãi Độc Quyền</h3>
            <p className="text-gray-600 mb-4">Nhận các ưu đãi và khuyến mãi đặc biệt dành riêng cho thành viên</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Đăng Ký Ngay</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-blue-600 mb-4 flex justify-center">
              <FaCoins />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tích Lũy Điểm</h3>
            <p className="text-gray-600 mb-4">Tích lũy điểm thưởng và đổi những ưu đãi hấp dẫn</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Đăng Ký Ngay</button>
          </div>
        </div>
      </div>

      {/* Travel Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-12">Dịch Vụ Du Lịch</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaPlane />, title: "Vé Máy Bay", desc: "Đặt vé máy bay với giá ưu đãi" },
              { icon: <FaHotel />, title: "Khách Sạn", desc: "Đặt phòng khách sạn toàn cầu" },
              { icon: <FaCar />, title: "Thuê Xe", desc: "Dịch vụ thuê xe đa dạng" },
              { icon: <FaPassport />, title: "Visa", desc: "Dịch vụ làm visa nhanh chóng" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button className="text-blue-600 hover:text-blue-800">Tìm hiểu thêm</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-12">Tại Sao Chọn Saigontourist?</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaHistory />, title: "45+ Năm Kinh Nghiệm", desc: "Thương hiệu du lịch hàng đầu Việt Nam" },
              { icon: <FaShieldAlt />, title: "An Toàn & Đáng Tin Cậy", desc: "Cam kết chất lượng dịch vụ tốt nhất" },
              { icon: <FaMoneyBillWave />, title: "Giá Cả Hợp Lý", desc: "Nhiều ưu đãi và khuyến mãi hấp dẫn" },
              { icon: <FaHeadset />, title: "Hỗ Trợ 24/7", desc: "Đội ngũ tư vấn chuyên nghiệp" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};