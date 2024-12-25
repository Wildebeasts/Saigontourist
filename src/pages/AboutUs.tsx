import { Typography } from 'antd';
import { useTranslation } from '../hooks/useTranslation';

const { Title } = Typography;

const VideoAboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-44 pb-8">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-12">
          {t('about.videoPage.title')}
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Video 1 */}
          <div className="aspect-video flex flex-col">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/LhKtKJatvwA"
              title={t('about.videoPage.video1.title') as string}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-2xl font-semibold mt-6 mb-3">
              {t('about.videoPage.video1.title') as string}
            </h3>
            <p className="text-gray-600 text-lg">
              {t('about.videoPage.video1.description') as string}
            </p>
          </div>

          {/* Video 2 */}
          <div className="aspect-video flex flex-col">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/VnjZxB9nt0w"
              title={t('about.videoPage.video2.title') as string}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-2xl font-semibold mt-6 mb-3">
              {t('about.videoPage.video2.title') as string}
            </h3>
            <p className="text-gray-600 text-lg">
              {t('about.videoPage.video2.description') as string}
            </p>
          </div>

          {/* Video 3 - Centered in its own row */}
          <div className="aspect-video flex flex-col lg:col-span-2 max-w-2xl mx-auto">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/L341PuL5LJc"
              title={t('about.videoPage.video3.title') as string}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-2xl font-semibold mt-6 mb-3">
              {t('about.videoPage.video3.title') as string}
            </h3>
            <p className="text-gray-600 text-lg">
              {t('about.videoPage.video3.description') as string}
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.videoPage.closing') as string}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoAboutPage; 