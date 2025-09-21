import { destinations } from '../database/database';
import { useTranslation } from 'react-i18next';

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="py-5 mb-5">
      <div className="container">
        <h2 className="text-center text-uppercase mb-5">{t('available_destinations')}</h2>
        <div className="row">
          {destinations.map(destination => (
            <div className="col-lg-4 col-md-6 mb-4" key={destination.id}>
              <div className="card bg-purple text-light destination-card destino-card h-100">
                <img 
                  src={destination.image} 
                  className="card-img-top destino-img" 
                  alt={t(destination.titleKey)} 
                />
                <div className="card-body">
                  <h5 className="card-title">{t(destination.titleKey)}</h5>
                  <p className="card-text">{t(destination.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
