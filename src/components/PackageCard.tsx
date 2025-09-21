import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface PackageCardProps {
  titleKey: string;
  descriptionKey: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ titleKey, descriptionKey }) => {
  const { t } = useTranslation();

  return (
    <div className="card bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">{t(titleKey)}</h5>
        <p className="card-text">{t(descriptionKey)}</p>
        <Link to="#" className="btn btn-custom">
          {t('learn_more')}
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
