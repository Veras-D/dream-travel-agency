import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-3 text-center">
      <div className="container">
        <p>&copy; {currentYear} {t('all_rights_reserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
