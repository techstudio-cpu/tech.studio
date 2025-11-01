import HeroSection from '@/components/HeroSection';
import { contactInfo } from '@/data/services';

export default function Contact() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with Tech Studio"
      />
      
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>{contactInfo.ctaDescription}</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${contactInfo.email}`} className="contact-link">
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
                
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-link">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
                
                <div className="contact-item">
                  <h3>Website</h3>
                  <p>
                    <a 
                      href={`https://${contactInfo.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {contactInfo.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send us a message</h2>
              <p>Feel free to reach out using the contact information above, or send us an email directly.</p>
              <div className="cta-section">
                <a href={`mailto:${contactInfo.email}?subject=Inquiry from Tech Studio Website`} className="btn btn-primary">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

