import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';

const Home = () => {
  const destinations = [
    {
      id: 1,
      title: 'Tropical Beaches',
      description: 'Enjoy a tropical paradise with crystal clear waters and white sands. Perfect to relax and reconnect with nature.',
      imageUrl: 'https://mangojourneys.com/en/wp-content/uploads/2015/05/950x475-bigstock-Two-beach-lounge-chairs-under-68994418-400x300.jpg',
      altText: 'Beach'
    },
    {
      id: 2,
      title: 'Mountains',
      description: 'Explore incredible trails and live adventures in the mountains. Ideal for ecotourism and adrenaline lovers.',
      imageUrl: 'https://alaska-highway.org/wp-content/uploads/2016/12/mthayes.jpg',
      altText: 'Mountains'
    },
    {
      id: 3,
      title: 'Iconic Cities',
      description: 'Immerse yourself in the culture and gastronomy of a modern city. Leisure, art, and fun await you!',
      imageUrl: 'https://caminhodafe.com.br/ptbr/wp-content/uploads/2021/03/8-400x300.jpg',
      altText: 'Cities'
    }
  ];

  const packages = [
    {
      id: 1,
      title: 'Romantic Package',
      description: 'Perfect experiences for couples in stunning places.'
    },
    {
      id: 2,
      title: 'Family Package',
      description: 'Guaranteed fun for the whole family in unique destinations.'
    }
  ];

  return (
    <>
      <Hero />
      
      <section id="destinations" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-secondary">Popular Destinations</h2>
          <div className="row row-gap-3">
            {destinations.map(destination => (
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
            {packages.map(pkg => (
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
