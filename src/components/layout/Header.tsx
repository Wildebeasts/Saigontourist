import { useState, useEffect } from 'react'
import { Button } from "../ui/button"
import { cn } from "../../lib/utils"
import { Search } from "lucide-react"
import logo from "../../assets/logo.png"
import logoAlt from "../../assets/logo-color-big.png"
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageSwitcher } from '../LanguageSwitcher'

// Add darkBg prop
interface HeaderProps {
  darkBg?: boolean;
}

export const Header = ({ darkBg = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50">
      {/* Top bar */}
      <div 
        className={cn(
          "transform transition-all duration-300 bg-[#55b2ff3b] text-white py-3",
          isScrolled && "-translate-y-full opacity-0"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href={`mailto:${t('header.email')}`} className="flex items-center hover:text-gray-200">
              <i className="fa fa-envelope mr-2"></i>
              {t('header.email') as string}: info@saigontourist.net
            </a>
            <a href="tel:1900 1808" className="flex items-center hover:text-gray-200">
              <i className="fa fa-phone mr-2"></i>
              {t('header.hotline') as string}: 1900 1808
            </a>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="flex items-center hover:text-gray-200">
              <i className="fa fa-map-marker mr-2"></i>
              {t('header.selectLocation') as string}
            </a>
            <a href="/login" className="flex items-center hover:text-gray-200">
              <i className="fa fa-sign-in mr-2"></i>
              {t('header.login') as string}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav 
        className={cn(
          "transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-transparent",
          isScrolled ? "transform translate-y-[-45px]" : "transform translate-y-0"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo with transition */}
          <div className="w-48 relative">
            <img
              src={logo}
              alt="Logo"
              className={cn(
                "w-full h-full transition-opacity duration-300",
                isScrolled ? "opacity-0" : "opacity-100"
              )}
            />
            <img
              src={logoAlt}
              alt="Logo"
              className={cn(
                "w-full h-full absolute top-0 transition-opacity duration-300",
                isScrolled ? "opacity-100" : "opacity-0"
              )}
            />
          </div>

          {/* Modified navigation items with conditional text color */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={cn(
                "transition-colors",
                isScrolled 
                  ? "text-gray-800 hover:text-primary-600" 
                  : darkBg 
                    ? "text-white hover:text-gray-200"
                    : "text-gray-800 hover:text-primary-600"
              )}
            >
              {t('nav.home') as string}
            </Link>
            <Link 
              to="/tour-trong-nuoc" 
              className={cn(
                "transition-colors",
                isScrolled 
                  ? "text-gray-800 hover:text-primary-600" 
                  : darkBg 
                    ? "text-white hover:text-gray-200"
                    : "text-gray-800 hover:text-primary-600"
              )}
            >
              {t('nav.domesticTours') as string}
            </Link>
            <Link 
              to="/gioi-thieu" 
              className={cn(
                "transition-colors",
                isScrolled 
                  ? "text-gray-800 hover:text-primary-600" 
                  : darkBg 
                    ? "text-white hover:text-gray-200"
                    : "text-gray-800 hover:text-primary-600"
              )}
            >
              {t('nav.about') as string}
            </Link>
          </div>

          {/* Search Button */}
          <Button 
            variant="default" 
            size="icon"
            onClick={() => navigate('/tour-trong-nuoc')}
            className={cn(
              "transition-colors",
              isScrolled 
                ? "bg-orange-500 hover:bg-orange-600" 
                : darkBg 
                  ? "bg-white text-gray-800 hover:bg-gray-100"
                  : "bg-orange-500 hover:bg-orange-600"
            )}
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header