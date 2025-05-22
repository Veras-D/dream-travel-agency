import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import { destinationsHome, packagesHome } from '../database/database';
import PackageCard from '../components/PackageCard';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section id="destinations" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-secondary">Popular Destinations</h2>
          <div className="row row-gap-3">
            {destinationsHome.map(destination => (
              <div className="col-md-4" key={destination.id}>
                <DestinationCard 
                  title={destination.title}
                  description={destination.description}
                  imageUrl={destination.imageUrl}
                  altText={destination.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-5 mb-5">
        <div className="container">
          <h2 className="text-center mb-4">Special Packages</h2>
          <div className="row row-gap-3">
            {packagesHome.map(pkg => (
              <div className="col-md-6" key={pkg.id}>
                <PackageCard 
                  title={pkg.title}
                  description={pkg.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
