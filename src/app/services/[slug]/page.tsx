import Link from 'next/link';
import { serviceDetails } from './serviceData';

export async function generateStaticParams() {
  const services = Object.keys(serviceDetails);
  return services.map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <main>
        <section className="hero">
          <div className="hero-container">
            <h1 className="hero-title">Service Not Found</h1>
            <Link href="/services" className="btn btn-primary">Back to Services</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-subtitle">{service.tagline}</p>
          <div className="service-detail-price">{service.price}</div>
        </div>
      </section>

      {/* CTA 1 - Top */}
      <section className="section cta-section-inline">
        <div className="container">
          <Link href={`/quote/${slug}`} className="btn btn-primary btn-large">
            Submit Your Query →
          </Link>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            <h2 className="section-title">Overview</h2>
            {service.description.map((para, index) => (
              <p key={index} className="service-detail-paragraph">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="section section-alt">
        <div className="container">
          <div className="service-detail-content">
            <h2 className="section-title">{service.mechanism.title}</h2>
            <div className="mechanism-steps">
              {service.mechanism.steps.map((step, index) => (
                <div key={index} className="mechanism-step">
                  <div className="mechanism-step-number">{index + 1}</div>
                  <div className="mechanism-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA 2 - Middle */}
      <section className="section cta-section-inline">
        <div className="container">
          <Link href={`/quote/${slug}`} className="btn btn-primary btn-large">
            Get Your Quote →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            <h2 className="section-title">Key Features & Benefits</h2>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-card-detail">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section section-alt">
        <div className="container">
          <div className="service-detail-content">
            <h2 className="section-title">Technology Stack</h2>
            <div className="tech-stack-grid">
              {service.techStack.map((tech, index) => (
                <div key={index} className="tech-badge">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section">
        <div className="container">
          <div className="service-detail-content">
            <h2 className="section-title">Specifications</h2>
            <div className="specifications-grid">
              {service.specifications.map((spec, index) => (
                <div key={index} className="specification-item">
                  <div className="specification-label">{spec.label}</div>
                  <div className="specification-value">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA 3 - Bottom */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Connect with us and let's discuss your project requirements</p>
            <Link href={`/quote/${slug}`} className="btn btn-primary btn-large">
              Connect With Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
