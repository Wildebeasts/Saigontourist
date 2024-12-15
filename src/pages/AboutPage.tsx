import { Card, Row, Col, Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import hotelImage from "../assets/Burj-Al-Arab_174741755.jpg"
import historyImage from "../assets/Complex-of-Hue-Monuments.jpg"
import resortImage from "../assets/BinhChau-1.jpg"
import { useTranslation } from '../hooks/useTranslation';

const { Title, Text } = Typography;

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{t('about.hero.title') as string}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {t('about.hero.description') as string}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* History Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('about.history.title') as string}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">{t('about.history.desc1') as string}</p>
                <p className="text-lg text-gray-700">{t('about.history.desc2') as string}</p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={historyImage}
                  alt={t('about.history.title') as string}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Business Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t('about.business.title') as string}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={hotelImage} 
                  alt={t('about.business.hotels.title') as string}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{t('about.business.hotels.title') as string}</h3>
                <p className="text-gray-600">{t('about.business.hotels.description') as string}</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={resortImage}
                  alt={t('about.business.tours.title') as string}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{t('about.business.tours.title') as string}</h3>
                <p className="text-gray-600">{t('about.business.tours.description') as string}</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={historyImage}
                  alt={t('about.business.dining.title') as string}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{t('about.business.dining.title') as string}</h3>
                <p className="text-gray-600">{t('about.business.dining.description') as string}</p>
              </Card>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <Title level={2} className="mb-8">{t('about.achievements.title') as string}</Title>
            <Row gutter={[16, 16]}>
              {(t('about.achievements.items') as Array<{icon: string, title: string}>).map((achievement, index) => (
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

          {/* Vision & Mission */}
          <div className="mb-16">
            <Title level={2} className="mb-8">{t('about.visionMission.title') as string}</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card className="h-full" style={{background: 'linear-gradient(135deg, #4096ff 0%, #1677ff 100%)', border: 'none'}}>
                  <div className="flex flex-col h-full">
                    <Title level={3} style={{ color: 'white', marginBottom: '1rem' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        {t('about.visionMission.vision.title') as string}
                      </div>
                    </Title>
                    <Text style={{ color: 'white', fontSize: '16px', lineHeight: '1.6' }}>
                      {t('about.visionMission.vision.description') as string}
                    </Text>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className="h-full" style={{background: 'linear-gradient(135deg, #ff7a45 0%, #fa541c 100%)', border: 'none'}}>
                  <div className="flex flex-col h-full">
                    <Title level={3} style={{ color: 'white', marginBottom: '1rem' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🌟</span>
                        {t('about.visionMission.mission.title') as string}
                      </div>
                    </Title>
                    <Text style={{ color: 'white', fontSize: '16px', lineHeight: '1.6' }}>
                      {t('about.visionMission.mission.description') as string}
                    </Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Contact Information */}
          <div>
            <Title level={2} className="mb-8">{t('about.contact.title') as string}</Title>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card title={t('about.contact.headquarters.title') as string} className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <EnvironmentOutlined className="text-blue-600 text-xl" />
                      <Text>{t('about.contact.headquarters.address') as string}</Text>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneOutlined className="text-blue-600 text-xl" />
                      <Text>{t('about.contact.headquarters.phone') as string}</Text>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailOutlined className="text-blue-600 text-xl" />
                      <Text>{t('about.contact.headquarters.email') as string}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title={t('about.contact.hotline.title') as string} className="h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <PhoneOutlined className="text-blue-600 text-2xl" />
                      <Title level={2} style={{ margin: 0, color: '#1677ff' }}>
                        {t('about.contact.hotline.number') as string}
                      </Title>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockCircleOutlined className="text-blue-600 text-xl" />
                      <Text>{t('about.contact.hotline.support') as string}</Text>
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