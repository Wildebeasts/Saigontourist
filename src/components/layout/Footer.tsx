import icon from '../../assets/logo.png'
import paymentMethods from '../../assets/thequocte.gif'

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={icon} alt="Saigontourist Travel" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm">
              Lữ hành Saigontourist, thương hiệu lữ hành hàng đầu Việt Nam
              <br />
              Thương hiệu quốc gia
            </p>
            <p className="text-sm mt-4">
              Tổng đài: 1900 1808
              <br />
              Email: info@saigontourist.net
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-semibold mb-4">DỊCH VỤ</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/tour-trong-nuoc" className="hover:text-white">Tour trong nước</a></li>
              <li><a href="/tour-nuoc-ngoai" className="hover:text-white">Tour nước ngoài</a></li>
              <li><a href="/dich-vu-du-lich" className="hover:text-white">Dịch vụ du lịch</a></li>
              <li><a href="/ve-may-bay" className="hover:text-white">Vé máy bay</a></li>
              <li><a href="/thue-xe" className="hover:text-white">Thuê xe</a></li>
              <li><a href="/du-hoc" className="hover:text-white">Du học Saigontourist</a></li>
              <li><a href="/viec-lam" className="hover:text-white">Việc làm ngoài nước</a></li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h5 className="font-semibold mb-4">CHĂM SÓC KHÁCH HÀNG</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/the-khach-hang" className="hover:text-white">Thẻ khách hàng</a></li>
              <li><a href="/doi-diem" className="hover:text-white">Đổi điểm Hoa Mai Vàng</a></li>
              <li><a href="/voucher" className="hover:text-white">Travel Voucher</a></li>
              <li><a href="/bao-hiem" className="hover:text-white">Bảo hiểm Du lịch</a></li>
              <li><a href="/y-kien" className="hover:text-white">Ý kiến khách hàng</a></li>
              <li><a href="/tra-cuu" className="hover:text-white">Tra cứu thông tin Đoàn</a></li>
              <li><a href="/khieu-nai" className="hover:text-white">Giải quyết khiếu nại</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-semibold mb-4">LIÊN HỆ</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/gioi-thieu" className="hover:text-white">Giới thiệu</a></li>
              <li><a href="/lien-he" className="hover:text-white">Liên hệ</a></li>
              <li><a href="/chi-nhanh" className="hover:text-white">Chi nhánh</a></li>
              <li><a href="/quy-dinh" className="hover:text-white">Quy định bảo vệ</a></li>
              <li><a href="/dieu-khoan" className="hover:text-white">Điều khoản chung</a></li>
              <li><a href="/huong-dan" className="hover:text-white">Hướng dẫn mua tour online</a></li>
              <li><a href="/thanh-toan" className="hover:text-white">Quy định thanh toán</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center py-6 border-t border-gray-700">
          <img 
            src={paymentMethods}
            alt="Payment Methods" 
            className="h-28"
          />
        </div>

        {/* Copyright and Info */}
        <div className="text-center text-sm text-gray-300 space-y-2">
          <p>Bản quyền 2006 - 2024 © Công ty TNHH Một Thành Viên Dịch vụ Lữ hành Saigontourist.</p>
          <p>45 Lê Thánh Tôn, Quận 1, TP.HCM</p>
          <p>ĐT: (84-28) 38 279 279 - Fax: (84-28) 38 224 987</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 