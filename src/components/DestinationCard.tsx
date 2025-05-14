interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  altText 
}) => {
  return (
    <div className="card bg-secondary text-light destination-card destino-card h-100">
      <img src={imageUrl} className="card-img-top" alt={altText} />
      <div className="card-body bg-purple">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
