import { teamMembers } from '../database/database';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section id="about" className="py-5 bg-light text-secondary">
        <div className="container">
          <h1 className="text-center text-uppercase mb-5 text-secondary">{t('who_we_are')}</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="text-center mb-4 lead text-secondary fw-normal">
                {t('passionate_about_travel')}
              </p>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">{t('our_mission')}</h3>
                  <p className="card-text text-secondary">
                    {t('mission_text')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">{t('our_vision')}</h3>
                  <p className="card-text text-secondary">
                    {t('vision_text')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 ">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">{t('our_values')}</h3>
                  <ul className="list-unstyled text-secondary">
                    {t('values_list', { returnObjects: true }).map((value, index) => (
                      <li key={index} className="mb-2">{value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-5 mb-5">
        <div className="container">
          <h2 className="text-center text-uppercase mb-5">{t('our_team')}</h2>
          <div className="row g-4">
            {teamMembers.map(member => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div className="card team-member h-100 border-0 shadow-sm">
                  <img 
                    src={member.image} 
                    className="card-img-top" 
                    alt={`${member.name} - ${t(member.roleKey)}`} 
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title h5">{member.name}</h3>
                    <p className="text-muted mb-3">{t(member.roleKey)}</p>
                    <p className="card-text">{t(member.descriptionKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
