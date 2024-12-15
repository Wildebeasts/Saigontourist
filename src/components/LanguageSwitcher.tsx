import { useLanguage } from '../contexts/LanguageContext';
import vietnamFlag from '../assets/Flag_of_Vietnam.svg.png';
import englishFlag from '../assets/Flag_of_the_United_Kingdom_(1-2).svg.png';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center hover:text-gray-200"
    >
      <img 
        src={language === 'en' ? englishFlag : vietnamFlag} 
        alt={language === 'en' ? 'English' : 'Tiếng Việt'} 
        className="w-5 h-5 mr-2" 
      />
      {language === 'en' ? 'English' : 'Tiếng Việt'}
    </button>
  );
} 