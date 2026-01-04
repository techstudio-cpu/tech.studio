import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { heroContent, serviceCategories } from '@/data/services';

export default function Home() {
  // Get featured services from first category
  const featuredServices = serviceCategories[0].services.slice(0, 3);

  return (
    <>
      <HeroSection
        title={heroContent.welcome}
        tagline={heroContent.tagline}
        subtitle={heroContent.subtitle}
        description={heroContent.description}
      />
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Services</h2>
          <div className="services-grid">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="cta-section">
            <Link href="/services/" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start?</h2>
            <p>
              Contact TechStudio to get a tailored quote and project timeline. 
              All projects include documentation, transfer of ownership, and optional training.
            </p>
            <Link href="/contact/" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

