import { DomesticTour, Tour } from "../types/tour"
import cover1 from "../assets/Tea Resort 2.jpg"
import cover2 from "../assets/coffee-plantation.jpg"
import cover3 from "../assets/thien-duong-cave.jpg"
import cover4 from "../assets/Halong-Bay-Vietnam_344233349.jpg"
import cover5 from "../assets/city-view-vung-tau.jpg"
import cover6 from "../assets/BinhChau-1.jpg"
import cover7 from "../assets/Complex-of-Hue-Monuments.jpg"
import cover8 from "../assets/Hai-Van-Da-Nang_270841277.jpg"
import cover9 from "../assets/Phong-Nha_328092149.jpg"

export const domesticTours: DomesticTour[] = [
  {
    id: 1001,
    name: "Du lịch nghỉ dưỡng tại Bảo Lộc - Doi Dep Tea Resort",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 1,
    price: "4.379.000đ",
    image: cover1,
    duration: "3 ngày 2 đêm",
    transport: "Đi về bằng xe",
    description: "Khởi hành Chủ nhật cách tuần - Sử dụng miễn phí các dịch vụ tại Resort",
    startDates: ["15/12/2024", "05/01/2025"],
    location: "TP. HỒ CHÍ MINH - TÂY NGUYÊN",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Tây Nguyên",
    tourDates: [
      {
        date: "15/12/2024",
        tourCode: "STN084-2024-02300",
        price: "4.379.000",
        childPrice: "2.190.000",
        infantPrice: "0"
      },
      {
        date: "05/01/2025",
        tourCode: "STN084-2025-00426",
        price: "4.379.000",
        childPrice: "2.190.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Khởi hành Chủ nhật cách tuần",
      "Sử dụng miễn phí các dịch vụ chăm sóc sức khỏe Thư giãn tắm hồ bơi – rửa trôi mọi mệt mỏi với hệ thống ôn tuyền thủy liệu pháp của thác suối khoáng và hồ bơi thủy lực jacuzzi",
      "Thưởng thức trà đạo tại khu Tea House – khu trà đạo nằm trong khuôn viên của Tea Resort mang phong cách uống trà hướng đến giá trị tinh thần"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - BẢO LỘC",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Đón du khách tại văn phòng Saigontourist 01 Nguyễn Chí Thanh lúc 5h00 sáng hoặc 45 Lê Thánh Tôn lúc 5h30 sáng. Khởi hành đi Bảo Lộc, Đoàn di chuyển đến với DoiDep Tea Resort & Spa – khu nghỉ dưỡng bậc nhất Việt Nam nằm giữa lòng TP. Bảo Lộc làm thủ tục nhận phòng nghỉ ngơi. Thưởng thức trà đạo tại khu Tea House – khu trà đạo nằm trong khuôn viên của Tea Resort mang phong cách uống trà hướng đến giá trị tinh thần. Nghỉ đêm tại Bảo Lộc.",
        images: [cover1]
      },
      {
        day: 2,
        title: "BẢO LỘC",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Sáng quý khách dùng điểm tâm sáng tại Resort , xe đưa đoàn đến với Chùa Di Đà - một quần thể kiến trúc độc đáo, kết hợp hài hoà phong cách Phật Giáo, Châu Mạ và Tây Nguyên, tới đây du khách cùng trải bước nhẹ nhàng tham quan từng địa điểm của chùa để cảm nhận sự bình an, thanh tịnh. Nếu quý khách đam mê chụp ảnh thì đừng nên bỏ qua địa điểm Nông trường trà Phước Lạc trong hình trình này vì cả một khoảng đồi xanh mướt nằm trọn dưới áng mây trời lơ lửng cùng những tia nắng trong veo sẽ giúp du khách có những tấm hình siêu xinh. Ngoài ra, bầu không khí ở đây cũng trong lành, tươi mát giúp quý khách cảm thấy thư thái, dễ chịu, quên đi mọi muộn phiền. Buổi chiều tại resort: Tắm bùn khoáng nóng tận hưởng cảm giác thư thái khi vừa hít hà không khí cao nguyên trong lành, vừa để cơ thể được vỗ về bởi lớp bùn vô cơ sánh mịn, ấm nóng, thoảng mùi quế. Nghỉ đêm tại Bảo Lộc."
      },
      {
        day: 3,
        title: "BẢO LỘC – TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Buổi sáng quý khách tự nghỉ ngơi và tự do sử dụng các dịch vụ tại Resort: tắm hồ bơi, tắm biển nhân tạo, thưởng thức trà đạo tận hưởng không gian yên tĩnh và trong lành. Nơi đây có khí hậu hài hoà và mang lại cho bạn cảm giác thư thái và bình yên, rất tốt cho sức khỏe.\n\nTrưa trả phòng. Đoàn khởi hành về văn phòng lữ hành Saigontourist số 19 Hoàng Việt, Phường 4, Quận Tân Bình. Kết thúc chương trình tour./."
      }
    ],
    policies: [
      "Ghi chú: Điểm tham quan có thể sắp xếp lại cho phù hợp mà vẫn bảo đảm đầy đủ nội dung của từng chương trình."
    ],
    additionalImages: [
      cover1,
      // Add more images here
    ]
  },
  {
    id: 1002,
    name: "Du lịch Buôn Ma Thuột - Buôn Đôn - Pleiku - Kontum - Măng Đen - Dakke Resort",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 2,
    price: "6.279.000đ",
    image: cover2,
    duration: "5 ngày 4 đêm",
    transport: "Đi về bằng xe",
    description: "Khởi hành thứ 4 cách tuần - Thăm quan thác Dray Sáp - ngọn thác hùng vĩ",
    startDates: ["18/12/2024", "15/01/2025"],
    location: "TP. HỒ CHÍ MINH - BUÔN MA THUỘT",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Tây Nguyên",
    tourDates: [
      {
        date: "18/12/2024",
        tourCode: "STN085-2024-02301",
        price: "6.279.000",
        childPrice: "3.140.000",
        infantPrice: "0"
      },
      {
        date: "15/01/2025",
        tourCode: "STN085-2025-00427",
        price: "6.279.000",
        childPrice: "3.140.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Khám phá Buôn Ma Thuột - thủ phủ cà phê Việt Nam",
      "Tham quan Buôn Đôn - làng văn hóa dân tộc đặc sắc",
      "Trải nghiệm nghỉ dưỡng tại Dakke Resort cao cấp",
      "Thưởng thức ẩm thực Tây Nguyên đặc trưng"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - BUÔN MA THUỘT",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khởi hành từ TP.HCM đi Buôn Ma Thuột. Tham quan thác Dray Sáp - một trong những thác nước hùng vĩ nhất Tây Nguyên. Chiều check-in khách sạn, tự do khám phá thành phố về đêm.",
        images: [cover2]
      },
      {
        day: 2,
        title: "BUÔN ĐÔN - PLEIKU",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan Buôn Đôn, trải nghiệm văn hóa dân tộc bản địa. Chiều di chuyển đến Pleiku, thăm biển Hồ Chè và nhà thờ Đức An."
      },
      {
        day: 3,
        title: "PLEIKU - KONTUM",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khám phá Kontum với nhà thờ gỗ cổ kính, thăm làng đồng bào dân tộc Ba Na. Tối thưởng thức đặc sản địa phương."
      },
      {
        day: 4,
        title: "MĂNG ĐEN - DAKKE RESORT",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Di chuyển đến Măng Đen - được mệnh danh là Đà Lạt thứ 2. Nghỉ dưỡng tại Dakke Resort, tận hưởng không khí trong lành."
      },
      {
        day: 5,
        title: "DAKKE - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tự do tận hưởng tiện ích resort buổi sáng. Trưa trả phòng và khởi hành về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Giá tour bao gồm vé tham quan theo chương trình",
      "Bảo hiểm du lịch mức đền bù tối đa 20.000.000đ/người/vụ",
      "Không bao gồm chi phí cá nhân và tiền tip cho hướng dẫn viên"
    ]
  },
  {
    id: 1003,
    name: "Du lịch Đà Nẵng - Bà Nà - Hội An - Động Thiên Đường - Huế",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 3,
    price: "9.479.000đ",
    image: cover3,
    duration: "5 ngày 4 đêm",
    transport: "Hãng không Vietnam Airlines",
    description: "Khởi hành thứ 4 - Tham quan bán đảo Sơn Trà, ngắm cảng Tiên Sa",
    startDates: ["18/12/2024"],
    location: "TP. HỒ CHÍ MINH - HUẾ | HỘI AN | ĐÀ NẴNG",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Miền Trung",
    tourDates: [
      {
        date: "18/12/2024",
        tourCode: "MTG084-2024-02302",
        price: "9.479.000",
        childPrice: "4.740.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Khám phá Bà Nà Hills với Cầu Vàng nổi tiếng",
      "Tham quan phố cổ Hội An về đêm",
      "Chiêm ngưỡng động Thiên Đường - hang động lớn nhất thế giới",
      "Thăm Đại Nội Huế - di sản văn hóa thế giới"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - ĐÀ NẴNG",
        meals: ["Ăn trưa", "chiều"],
        description: "Bay đến Đà Nẵng, tham quan bán đảo Sơn Trà và chùa Linh Ứng. Chiều check-in khách sạn và tự do tắm biển.",
        images: [cover3]
      },
      {
        day: 2,
        title: "BÀ NÀ HILLS - HỘI AN",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khám phá Bà Nà Hills, chụp hình Cầu Vàng, tham quan làng Pháp. Chiều thăm phố cổ Hội An, trải nghiệm thả đèn hoa đăng."
      },
      {
        day: 3,
        title: "ĐỘNG THIÊN ĐƯỜNG",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Di chuyển đến Quảng Bình, khám phá động Thiên Đường với những khối thạch nhũ tuyệt đẹp."
      },
      {
        day: 4,
        title: "HUẾ",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan Đại Nội Huế, lăng Tự Đức, chùa Thiên Mụ. Chiều đi thuyền trên sông Hương."
      },
      {
        day: 5,
        title: "HUẾ - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tự do mua sắm đặc sản Huế. Trưa ra sân bay về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Bao gồm vé máy bay khứ hồi Vietnam Airlines",
      "Khách sạn 4 sao theo tiêu chuẩn 2 người/phòng",
      "Vé tham quan và hướng dẫn viên suốt tuyến"
    ],
    visaInfo: [
      "Khách mang theo CMND/CCCD bản chính còn hạn sử dụng",
      "Trẻ em dưới 14 tuổi mang theo giấy khai sinh bản chính"
    ]
  },
  {
    id: 1004,
    name: "Du lịch Hà Nội - Sapa - Fansipan - Lào Cai - Hạ Long",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 4,
    price: "10.579.000đ",
    image: cover4,
    duration: "5 ngày 4 đêm",
    transport: "Hãng không Vietnam Airlines",
    description: "Khởi hành thứ 4 cách tuần - Khám phá vẻ đẹp Tây Bắc",
    startDates: ["18/12/2024"],
    location: "TP. HỒ CHÍ MINH - HÀ NỘI | HẠ LONG | SAPA",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Miền Bắc",
    tourDates: [
      {
        date: "18/12/2024",
        tourCode: "MBG084-2024-02303",
        price: "10.579.000",
        childPrice: "5.290.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Chinh phục đỉnh Fansipan - Nóc nhà Đông Dương",
      "Du thuyền ngắm vịnh Hạ Long - Di sản thiên nhiên thế giới",
      "Thăm bản Cát Cát - làng văn hóa dân tộc H'Mông",
      "Khám phá phố cổ Hà Nội về đêm"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - HÀ NỘI - SAPA",
        meals: ["Ăn trưa", "chiều"],
        description: "Bay đến Hà Nội, di chuyển đến Sapa. Check-in khách sạn, tự do khám phá thị trấn trong sương. Tối thưởng thức đặc sản vùng cao.",
        images: [cover4]
      },
      {
        day: 2,
        title: "SAPA - FANSIPAN",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Chinh phục đỉnh Fansipan bằng cáp treo, thăm quan khu du lịch Bản Cát Cát, tìm hiểu văn hóa người H'Mông. Tối tự do dạo chợ đêm Sapa."
      },
      {
        day: 3,
        title: "SAPA - HÀ NỘI",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan Nhà thờ Đá Sapa, vườn hoa trung tâm. Chiều về Hà Nội, tham quan Văn Miếu - Quốc Tử Giám, Hồ Hoàn Kiếm."
      },
      {
        day: 4,
        title: "HÀ NỘI - HẠ LONG",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Di chuyển đến Hạ Long, du thuyền tham quan vịnh, khám phá hang động, tắm biển (nếu thời tiết cho phép). Đêm nghỉ trên du thuyền."
      },
      {
        day: 5,
        title: "HẠ LONG - HÀ NỘI - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Ngắm bình minh trên vịnh, tập Tai Chi, thăm làng chài. Trưa về Hà Nội, ra sân bay về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Bao gồm vé máy bay khứ hồi Vietnam Airlines",
      "Khách sạn 4 sao và du thuyền Hạ Long",
      "Vé cáp treo Fansipan và các điểm tham quan",
      "Bảo hiểm du lịch theo quy định"
    ],
    visaInfo: [
      "Khách mang theo CMND/CCCD bản chính còn hạn sử dụng",
      "Trẻ em dưới 14 tuổi mang theo giấy khai sinh bản chính"
    ]
  },
  {
    id: 1005,
    name: "Du lịch Vũng Tàu - Cần Giờ",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 5,
    price: "2.979.000đ",
    image: cover5,
    duration: "2 ngày 1 đêm",
    transport: "Đi về bằng xe",
    description: "Khởi hành thứ 7 cách tuần - Tham quan Giáo xứ Song Vĩnh",
    startDates: ["21/12/2024", "04/01/2025"],
    location: "TP. HỒ CHÍ MINH - VŨNG TÀU",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Vũng Tàu",
    tourDates: [
      {
        date: "21/12/2024",
        tourCode: "VTG084-2024-02304",
        price: "2.979.000",
        childPrice: "1.490.000",
        infantPrice: "0"
      },
      {
        date: "04/01/2025",
        tourCode: "VTG084-2025-00428",
        price: "2.979.000",
        childPrice: "1.490.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Tham quan Khu du lịch sinh thái Cần Giờ",
      "Check-in tượng Chúa Kitô trên núi Tao Phùng",
      "Thưởng thức hải sản tươi ngon",
      "Tắm biển tại bãi Trước hoặc bãi Sau"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - CẦN GIỜ - VŨNG TÀU",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khởi hành từ TP.HCM đi Cần Giờ, tham quan Khu dự trữ sinh quyển Cần Giờ, trải nghiệm đi cano quan sát rừng ngập mặn. Chiều đến Vũng Tàu, check-in khách sạn, tự do tắm biển.",
        images: [cover5]
      },
      {
        day: 2,
        title: "VŨNG TÀU - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tham quan Tượng Chúa Kitô, Bạch Dinh, Ngọn Hải Đăng. Mua sắm đặc sản. Chiều về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Bao gồm xe đời mới máy lạnh",
      "Khách sạn 3 sao trung tâm thành phố",
      "Các bữa ăn theo chương trình",
      "Hướng dẫn viên nhiệt tình, kinh nghiệm"
    ]
  },
  {
    id: 1006,
    name: "Du lịch nghỉ dưỡng tại Minera Hot Spring Bình Châu",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 6,
    price: "5.179.000đ",
    image: cover6,
    duration: "3 ngày 2 đêm",
    transport: "Đi về bằng xe",
    description: "Khởi hành Chủ nhật cách tuần - Tham quan suối khoáng nóng Bình Châu",
    startDates: ["23/02/2025", "09/03/2025"],
    location: "TP. HỒ CHÍ MINH - HỒ TRÀM | VŨNG TÀU",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Bình Châu - Hồ Tràm",
    tourDates: [
      {
        date: "23/02/2025",
        tourCode: "BCG084-2025-00429",
        price: "5.179.000",
        childPrice: "2.590.000",
        infantPrice: "0"
      },
      {
        date: "09/03/2025",
        tourCode: "BCG084-2025-00430",
        price: "5.179.000",
        childPrice: "2.590.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Nghỉ dưỡng tại Minera Hot Springs Bình Châu 4 sao",
      "Trải nghiệm tắm khoáng nóng tự nhiên",
      "Thư giãn với liệu pháp onsen kiểu Nhật",
      "Khám phá rừng nguyên sinh Bình Châu - Phước Bửu"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - BÌNH CHÂU",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khởi hành đi Bình Châu, nhận phòng resort, tự do tắm khoáng và sử dụng các dịch vụ. Tối thưởng thức set menu hải sản.",
        images: [cover6]
      },
      {
        day: 2,
        title: "BÌNH CHÂU - HỒ TRÀM",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan rừng nguyên sinh, trải nghiệm tắm bùn khoáng. Chiều tự do tắm biển Hồ Tràm hoặc tham gia các hoạt động giải trí tại resort."
      },
      {
        day: 3,
        title: "BÌNH CHÂU - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tự do sử dụng tiện ích resort, tắm khoáng. Trưa trả phòng, về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Miễn phí sử dụng hồ bơi và các tiện ích tại resort",
      "Bao gồm 1 lần tắm bùn khoáng",
      "Các bữa ăn theo chương trình",
      "Bảo hiểm du lịch theo quy định"
    ]
  },
  {
    id: 1007,
    name: "Du lịch Đà Nẵng - Hội An - Cầu Vàng - Công viên nước Mikazuki 365 - Huế",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 7,
    price: "8.039.000đ",
    image: cover7,
    duration: "4 ngày 3 đêm",
    transport: "Hãng không Vietnam Airlines",
    description: "Khởi hành thứ 7 - Dạo bước trên Cầu Vàng tọa lạc tại Vườn Thiên Thai",
    startDates: ["21/12/2024"],
    location: "TP. HỒ CHÍ MINH - HUẾ | HỘI AN | ĐÀ NẴNG",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Miền Trung",
    tourDates: [
      {
        date: "21/12/2024",
        tourCode: "MTG084-2024-02305",
        price: "8.039.000",
        childPrice: "4.020.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Trải nghiệm Công viên nước Mikazuki 365 hiện đại",
      "Check-in Cầu Vàng - biểu tượng du lịch Đà Nẵng",
      "Khám phá Phố cổ Hội An về đêm",
      "Tham quan Kinh thành Huế - Di sản văn hóa thế giới"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - ĐÀ NẴNG - HỘI AN",
        meals: ["Ăn trưa", "chiều"],
        description: "Bay đến Đà Nẵng, tham quan Ngũ Hành Sơn, làng đá mỹ nghệ. Chiều đến Hội An, check-in khách sạn, tự do khám phá phố cổ về đêm.",
        images: [cover7]
      },
      {
        day: 2,
        title: "BÀ NÀ HILLS - CẦU VÀNG",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khám phá quần thể du lịch Bà Nà Hills, check-in Cầu Vàng, tham quan làng Pháp, vườn hoa Le Jardin D'Amour. Chiều tự do tại Đà Nẵng."
      },
      {
        day: 3,
        title: "CÔNG VIÊN NƯỚC MIKAZUKI - HUẾ",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Vui chơi tại Công viên nước Mikazuki 365. Chiều di chuyển ra Huế, tham quan Đại Nội, chùa Thiên Mụ, thưởng thức ca Huế trên sông Hương."
      },
      {
        day: 4,
        title: "HUẾ - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tham quan lăng Tự Đức, mua sắm đặc sản. Ra sân bay Phú Bài về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Vé máy bay khứ hồi Vietnam Airlines",
      "Khách sạn 4 sao tiêu chuẩn",
      "Vé tham quan theo chương trình",
      "Bảo hiểm du lịch"
    ],
    visaInfo: [
      "Khách mang theo CMND/CCCD bản chính còn hạn sử dụng",
      "Trẻ em dưới 14 tuổi mang theo giấy khai sinh bản chính"
    ]
  },
  {
    id: 1008,
    name: "Du lịch Huế - Đà Nẵng - Hội An - Bà Nà Hills - Bảo tàng tranh 3D",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 8,
    price: "8.039.000đ",
    image: cover8,
    duration: "4 ngày 3 đêm",
    transport: "Hãng không Vietnam Airlines",
    description: "Khởi hành thứ 7: 04,01; 01, 22, 29/03/2025 - Tham quan Bảo tàng tranh 3D",
    startDates: ["04/01/2025", "01/03/2025"],
    location: "TP. HỒ CHÍ MINH - HUẾ | HỘI AN | ĐÀ NẴNG",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Miền Trung",
    tourDates: [
      {
        date: "04/01/2025",
        tourCode: "MTG084-2025-00431",
        price: "8.039.000",
        childPrice: "4.020.000",
        infantPrice: "0"
      },
      {
        date: "01/03/2025",
        tourCode: "MTG084-2025-00432",
        price: "8.039.000",
        childPrice: "4.020.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Khám phá Bảo tàng tranh 3D độc đáo",
      "Trải nghiệm Bà Nà Hills - Làng Pháp",
      "Thăm phố cổ Hội An - Di sản văn hóa thế giới",
      "Tour thành phố Huế - Kinh đô xưa"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - HUẾ",
        meals: ["Ăn trưa", "chiều"],
        description: "Bay đến Huế, tham quan Đại Nội, chùa Thiên Mụ. Chiều đi thuyền trên sông Hương, thưởng thức ca Huế.",
        images: [cover8]
      },
      {
        day: 2,
        title: "HUẾ - ĐÀ NẴNG",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan lăng Minh Mạng, lăng Tự Đức. Chiều di chuyển vào Đà Nẵng, check-in Bảo tàng tranh 3D, tham quan cầu Rồng."
      },
      {
        day: 3,
        title: "BÀ NÀ HILLS - HỘI AN",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khám phá Bà Nà Hills, chụp hình Cầu Vàng, tham quan làng Pháp. Chiều đến Hội An, tự do khám phá phố cổ."
      },
      {
        day: 4,
        title: "ĐÀ NẴNG - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tham quan bán đảo Sơn Trà, chùa Linh Ứng. Mua sắm đặc sản. Ra sân bay về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Vé máy bay khứ hồi Vietnam Airlines",
      "Khách sạn 4 sao tiêu chuẩn",
      "Vé tham quan theo chương trình",
      "Bảo hiểm du lịch"
    ],
    visaInfo: [
      "Khách mang theo CMND/CCCD bản chính còn hạn sử dụng",
      "Trẻ em dưới 14 tuổi mang theo giấy khai sinh bản chính"
    ]
  },
  {
    id: 1009,
    name: "Du lịch Đà Nẵng - Hội An - Bà Nà - Động Phong Nha - Huế",
    brand: "tour-trong-nuoc",
    category: "Ho Chi Minh",
    list: "Domestic",
    position: 9,
    price: "9.639.000đ",
    image: cover9,
    duration: "5 ngày 4 đêm",
    transport: "Hãng không Vietnam Airlines",
    description: "Khởi hành thứ 4: 08/01/2025 - Tham quan Di sản Văn hóa Thế giới Phong Nha-Kẻ Bàng",
    startDates: ["08/01/2025"],
    location: "TP. HỒ CHÍ MINH - HUẾ | HỘI AN | ĐÀ NẴNG",
    departurePoint: "TP. Hồ Chí Minh",
    destination: "Miền Trung",
    tourDates: [
      {
        date: "08/01/2025",
        tourCode: "MTG084-2025-00433",
        price: "9.639.000",
        childPrice: "4.820.000",
        infantPrice: "0"
      }
    ],
    highlights: [
      "Khám phá Động Phong Nha - Di sản thiên nhiên thế giới",
      "Trải nghiệm Bà Nà Hills và Cầu Vàng",
      "Thăm phố cổ Hội An về đêm",
      "Tour Đại Nội Huế - Kinh thành xưa"
    ],
    itinerary: [
      {
        day: 1,
        title: "TP. HỒ CHÍ MINH - ĐÀ NẴNG",
        meals: ["Ăn trưa", "chiều"],
        description: "Bay đến Đà Nẵng, tham quan bán đảo Sơn Trà, chùa Linh Ứng. Chiều check-in khách sạn, tự do tắm biển.",
        images: [cover9]
      },
      {
        day: 2,
        title: "BÀ NÀ HILLS - HỘI AN",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Khám phá Bà Nà Hills, chụp hình Cầu Vàng, tham quan làng Pháp. Chiều đến Hội An, tự do khám phá phố cổ."
      },
      {
        day: 3,
        title: "ĐỘNG PHONG NHA",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Di chuyển đến Quảng Bình, thăm động Phong Nha bằng thuyền, khám phá hệ thống hang động kỳ vĩ."
      },
      {
        day: 4,
        title: "HUẾ",
        meals: ["Ăn sáng", "trưa", "chiều"],
        description: "Tham quan Đại Nội, chùa Thiên Mụ, lăng Tự Đức. Chiều đi thuyền trên sông Hương."
      },
      {
        day: 5,
        title: "HUẾ - TP HCM",
        meals: ["Ăn sáng", "trưa"],
        description: "Tự do mua sắm đặc sản. Trưa ra sân bay về TP.HCM. Kết thúc chương trình tour."
      }
    ],
    policies: [
      "Vé máy bay khứ hồi Vietnam Airlines",
      "Khách sạn 4 sao tiêu chuẩn",
      "Vé tham quan theo chương trình",
      "Bảo hiểm du lịch"
    ],
    visaInfo: [
      "Khách mang theo CMND/CCCD bản chính còn hạn sử dụng",
      "Trẻ em dưới 14 tuổi mang theo giấy khai sinh bản chính"
    ]
  }
]

export const featuredTours: Tour[] = [
  {
    id: 5910,
    name: "Du Lịch Nhật Bản Tết Nguyên Đán 2025 [Tokyo - Trải nghiệm trượt tuyết Núi Phú Sĩ - Nagoya - Kyoto - Osaka] (25 Tết)",
    brand: "tour-nuoc-ngoai",
    category: "Tết 2025",
    list: "List",
    position: 1,
    price: "7.939.000đ",
    image: "/images/tours/japan-2025.jpg",
    promotion: "Giảm 500.000đ/khách"
  },
  {
    id: 5150,
    name: "Du Lịch Trung Quốc - Tết Nguyên Đán 2025 [Thượng Hải - Ô Trấn - Tô Châu - Hàng Châu] (28 Tết)",
    brand: "tour-nuoc-ngoai",
    category: "Tết 2025",
    list: "List",
    position: 2,
    price: "6.939.000đ",
    image: "/images/tours/china-2025.jpg"
  }
] 