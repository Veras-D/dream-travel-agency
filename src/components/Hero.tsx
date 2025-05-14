import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="text-center py-5">
      <div className="container">
        <h1>Explore the world with Dream Travel</h1>
        <p className="lead">Discover incredible destinations and create unforgettable memories.</p>
        <Link to="#packages" className="btn btn-custom btn-lg">
          Check out our packages
        </Link>
      </div>
    </header>
  );
};

export default Hero;
