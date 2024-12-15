import icon from '../../assets/logo.png'
import paymentMethods from '../../assets/thequocte.gif'
import { useTranslation } from '../../hooks/useTranslation'

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={icon} alt="Saigontourist Travel" className="h-12 mb-4" />
            <p className="text-gray-300 text-sm">
              {t('footer.companyInfo.description') as string}
              <br />
              {t('footer.companyInfo.brandTitle') as string}
            </p>
            <p className="text-sm mt-4">
              {t('footer.companyInfo.contact.hotline') as string}
              <br />
              {t('footer.companyInfo.contact.email') as string}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-semibold mb-4">{t('footer.services.title') as string}</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              {Object.entries(t('footer.services.items')).map(([key, value]) => (
                <li key={key}>
                  <a href={`/${key}`} className="hover:text-white">{value}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <h5 className="font-semibold mb-4">{t('footer.customerCare.title') as string}</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              {Object.entries(t('footer.customerCare.items')).map(([key, value]) => (
                <li key={key}>
                  <a href={`/${key}`} className="hover:text-white">{value}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-semibold mb-4">{t('footer.contact.title') as string}</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              {Object.entries(t('footer.contact.items')).map(([key, value]) => (
                <li key={key}>
                  <a href={`/${key}`} className="hover:text-white">{value}</a>
                </li>
              ))}
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
          <p>{t('footer.copyright.text') as string}</p>
          <p>{t('footer.copyright.address') as string}</p>
          <p>{t('footer.copyright.phone') as string}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 