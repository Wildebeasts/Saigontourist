import { Card, Row, Col, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import hotelImage from "../assets/Burj-Al-Arab_174741755.jpg"
import historyImage from "../assets/Complex-of-Hue-Monuments.jpg"
import resortImage from "../assets/BinhChau-1.jpg"

const { Title, Text } = Typography;

const AboutPage = (): JSX.Element => {
  return (
    <>
      <div>
        {/* Hero Section with Dark Background */}
        <div className="bg-gray-900 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Giới Thiệu Về Saigontourist</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Tổng công ty Du lịch Sài Gòn (Saigontourist) là một doanh nghiệp nhà nước được thành lập ngày 1 tháng 8 năm 1975, là một trong những công ty du lịch lớn nhất Việt Nam.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* History Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lịch Sử Phát Triển</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Saigontourist được thành lập ngay sau ngày thống nhất đất nước, tiếp quản các cơ sở khách sạn, nhà hàng của chế độ cũ để lại.
                </p>
                <p className="text-lg text-gray-700">
                  Qua hơn 45 năm hình thành và phát triển, Saigontourist đã xây dựng được một hệ thống khách sạn, khu nghỉ dưỡng cao cấp trải dài khắp cả nước, cùng với các dịch vụ du lịch chất lượng cao.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={historyImage}
                  alt="Lịch sử Saigontourist"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lĩnh Vực Hoạt Động</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={hotelImage} 
                  alt="Khách sạn & Resort"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Khách sạn & Resort</h3>
                <p className="text-gray-600">
                  Quản lý và vận hành hệ thống khách sạn, khu nghỉ dưỡng cao cấp trên toàn quốc
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={resortImage}
                  alt="Lữ hành & Tour"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Lữ hành & Tour</h3>
                <p className="text-gray-600">
                  Tổ chức các tour du lịch trong nước và quốc tế với chất lượng cao
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={historyImage}
                  alt="Ẩm thực & Giải trí"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">Ẩm thực & Giải trí</h3>
                <p className="text-gray-600">
                  Vận hành hệ thống nhà hàng và các khu vui chơi giải trí
                </p>
              </Card>
            </div>
          </div>

          {/* Achievements Section with Ant Design */}
          <div className="mb-16">
            <Title level={2} className="mb-8">Thành Tựu & Giải Thưởng</Title>
            <Row gutter={[16, 16]}>
              {[
                {
                  title: "Huân chương Độc lập hạng Nhất",
                  icon: "🏅"
                },
                {
                  title: "Thương hiệu Quốc gia Vietnam Value nhiều năm liền",
                  icon: "🏆"
                },
                {
                  title: "Top 10 doanh nghiệp du lịch lữ hành hàng đầu Việt Nam",
                  icon: "⭐"
                },
                {
                  title: "Nhiều giải thưởng du lịch quốc tế uy tín",
                  icon: "🌟"
                }
              ].map((achievement, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card 
                    hoverable 
                    className="h-full text-center"
                    style={{ backgroundColor: '#f0f5ff', borderColor: '#91caff' }}
                  >
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <Text strong>{achievement.title}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Vision & Mission with Ant Design */}
          <div className="mb-16">
            <Title level={2} className="mb-8">Tầm Nhìn & Sứ Mệnh</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card 
                  className="h-full" 
                  style={{ 
                    background: 'linear-gradient(135deg, #4096ff 0%, #1677ff 100%)',
                    border: 'none'
                  }}
                  bodyStyle={{ height: '100%' }}
                >
                  <div className="flex flex-col h-full">
                    <Title level={3} style={{ color: 'white', marginBottom: '1rem' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        Tầm Nhìn
                      </div>
                    </Title>
                    <Text style={{ color: 'white', fontSize: '16px', lineHeight: '1.6' }}>
                      Trở thành tập đoàn du lịch - dịch vụ hàng đầu khu vực Đông Nam Á, mang đến những trải nghiệm du lịch độc đáo và dịch vụ chất lượng cao.
                    </Text>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  className="h-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff7a45 0%, #fa541c 100%)',
                    border: 'none'
                  }}
                  bodyStyle={{ height: '100%' }}
                >
                  <div className="flex flex-col h-full">
                    <Title level={3} style={{ color: 'white', marginBottom: '1rem' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🌟</span>
                        Sứ Mệnh
                      </div>
                    </Title>
                    <Text style={{ color: 'white', fontSize: '16px', lineHeight: '1.6' }}>
                      Góp phần phát triển ngành du lịch Việt Nam, quảng bá hình ảnh đất nước và con người Việt Nam đến với bạn bè quốc tế.
                    </Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Contact Information with Ant Design */}
          <div>
            <Title level={2} className="mb-8">Thông Tin Liên Hệ</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card title="Trụ sở chính" className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <EnvironmentOutlined className="text-blue-600 text-xl" />
                      <div>
                        <Text>45 Lê Thánh Tôn, Phường Bến Nghé</Text>
                        <br />
                        <Text>Quận 1, TP. Hồ Chí Minh</Text>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneOutlined className="text-blue-600 text-xl" />
                      <Text>Điện thoại: (84-28) 38 279 279</Text>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailOutlined className="text-blue-600 text-xl" />
                      <Text>Email: info@saigontourist.net</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Đường dây nóng" className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <PhoneOutlined className="text-blue-600 text-2xl" />
                      <Title level={2} style={{ margin: 0, color: '#1677ff' }}>
                        1900 1808
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockCircleOutlined className="text-blue-600 text-xl" />
                      <Text>Hỗ trợ 24/7</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;