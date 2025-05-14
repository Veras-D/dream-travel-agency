import { Link } from 'react-router-dom';

interface PackageCardProps {
  title: string;
  description: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description }) => {
  return (
    <div className="card bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to="#" className="btn btn-custom">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
