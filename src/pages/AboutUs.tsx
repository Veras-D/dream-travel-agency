import { teamMembers } from '../database/database';

const AboutUs = () => {
  return (
    <main>
      <section id="about" className="py-5 bg-light text-secondary">
        <div className="container">
          <h1 className="text-center text-uppercase mb-5 text-secondary">Who We Are</h1>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="text-center mb-4 lead text-secondary fw-normal">
                At Dream Travel, we are passionate about offering unique experiences to travelers from all over the world. 
                Our goal is to provide unforgettable journeys with exclusive destinations and personalized packages.
              </p>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">Our Mission</h3>
                  <p className="card-text text-secondary">
                    To connect people with the best tourist destinations through quality, trust, and service excellence. 
                    We create experiences that make your travels more exciting and safe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">Our Vision</h3>
                  <p className="card-text text-secondary">
                    To be the leading digital travel agency in Brazil, recognized for innovation, 
                    sustainability, and excellence in customer service.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 ">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="card-title mb-4 text-secondary">Our Values</h3>
                  <ul className="list-unstyled text-secondary">
                    <li className="mb-2">Quality in all services</li>
                    <li className="mb-2">Sustainability and social responsibility</li>
                    <li className="mb-2">Continuous innovation in offerings</li>
                    <li>Focus on customer experience</li>
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
          <h2 className="text-center text-uppercase mb-5">Our Team</h2>
          <div className="row g-4">
            {teamMembers.map(member => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div className="card team-member h-100 border-0 shadow-sm">
                  <img 
                    src={member.image} 
                    className="card-img-top" 
                    alt={`${member.name} - ${member.role}`} 
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title h5">{member.name}</h3>
                    <p className="text-muted mb-3">{member.role}</p>
                    <p className="card-text">{member.description}</p>
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
