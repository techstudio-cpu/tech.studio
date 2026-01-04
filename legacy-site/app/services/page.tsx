import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { serviceCategories } from '@/data/services';

export default function Services() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Digital Solutions That Scale With Your Vision"
      />
      
      <section className="section">
        <div className="container">
          {serviceCategories.map((category) => (
            <div key={category.id} className="service-category">
              <h2 className="category-title">{category.name}</h2>
              <div className="services-grid">
                {category.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

