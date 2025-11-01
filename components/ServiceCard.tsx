import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      {service.features && service.features.length > 0 && (
        <ul className="service-card-features">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <div className="service-card-price">{service.price}</div>
    </div>
  );
}

