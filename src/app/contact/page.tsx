export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-description">
            Contact TechStudio to get a tailored quote and project timeline. All projects include documentation, transfer of ownership, and optional training.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Contact Cards Grid */}
          <div className="contact-cards-grid">
            {/* Email Card */}
            <a href="mailto:info@techstudio.co.in" className="contact-card">
              <div className="contact-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Email</h3>
                <p className="contact-card-value">info@techstudio.co.in</p>
                <p className="contact-card-description">Send us an email anytime</p>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+918319775876" className="contact-card">
              <div className="contact-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Phone</h3>
                <p className="contact-card-value">+91 8319775876</p>
                <p className="contact-card-description">Mon-Sat, 10 AM - 7 PM IST</p>
              </div>
            </a>

            {/* Website Card */}
            <a href="https://www.techstudio.co.in" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">Website</h3>
                <p className="contact-card-value">www.techstudio.co.in</p>
                <p className="contact-card-description">Visit our website</p>
              </div>
            </a>
          </div>

          {/* CTA Section */}
          <div className="contact-cta-section">
            <div className="contact-cta-card">
              <h2 className="contact-cta-title">Ready to Start Your Project?</h2>
              <p className="contact-cta-description">
                Let's discuss how we can help bring your digital vision to life. Get a detailed quote, project timeline, and personalized consultation.
              </p>
              <div className="contact-cta-buttons">
                <a href="mailto:info@techstudio.co.in?subject=New Project Inquiry from Tech Studio Website" className="btn btn-primary btn-large">
                  Start a Conversation
                </a>
                <a href="/services" className="btn btn-secondary btn-large">
                  View Our Services
                </a>
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="contact-info-banner">
            <div className="contact-info-banner-content">
              <h3>What to Expect</h3>
              <div className="contact-info-features">
                <div className="contact-info-feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Response within 24-48 hours</span>
                </div>
                <div className="contact-info-feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Detailed project timeline & quote</span>
                </div>
                <div className="contact-info-feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Full documentation & ownership transfer</span>
                </div>
                <div className="contact-info-feature">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Optional training & ongoing support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
