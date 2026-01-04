import HeroSection from '@/components/HeroSection';
import { aboutContent, heroContent } from '@/data/services';

export default function About() {
  return (
    <>
      <HeroSection
        title="About Tech Studio"
        subtitle={heroContent.subtitle}
      />
      
      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p className="about-text">
              {aboutContent.mission}
            </p>
            
            <div className="founder-section">
              <h2>Founder</h2>
              <div className="founder-info">
                <p className="founder-name">{aboutContent.founder.name}</p>
                <p className="founder-title">{aboutContent.founder.title}</p>
              </div>
            </div>

            <div className="values-section">
              <h2>What We Offer</h2>
              <p className="about-text">
                Tech Studio provides comprehensive digital solutions tailored to your needs. 
                We focus on clear pricing, concise deliverables, and full documentation to ensure 
                transparency and quality in every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

