import { useTranslation } from 'react-i18next';

interface DestinationCardProps {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  altText: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  titleKey, 
  descriptionKey, 
  imageUrl, 
  altText 
}) => {
  const { t } = useTranslation();

  return (
    <div className="card bg-secondary text-light destination-card-top destino-card-top rounded-3 h-100">
      <img src={imageUrl} className="card-img rounded-3" alt={altText} />
      <div className="card-body purple rounded-3">
        <h5 className="card-title">{t(titleKey)}</h5>
        <p className="card-text">{t(descriptionKey)}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
