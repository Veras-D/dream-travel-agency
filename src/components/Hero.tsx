import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center py-5">
      <div className="container">
        <h1>{t('explore_world')}</h1>
        <p className="lead">{t('discover_destinations')}</p>
        <Link to="#packages" className="btn btn-custom btn-lg">
          {t('check_packages')}
        </Link>
      </div>
    </header>
  );
};

export default Hero;
