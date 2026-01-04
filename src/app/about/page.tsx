export default function About() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">About Tech Studio</h1>
          <h2 className="hero-subtitle">Crafting Digital Experiences That Matter</h2>
          <p className="hero-description">
            We're a passionate team dedicated to helping businesses establish a powerful online presence through thoughtful design and reliable technology.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-block">
              <h2 className="section-title-left">Our Story</h2>
              <p className="about-text">
                Tech Studio was founded with a simple belief: every business deserves access to quality digital solutions without the complexity or inflated costs that often come with traditional agencies.
              </p>
              <p className="about-text">
                We started by helping small businesses in our local community build their first websites. Today, we serve clients across India, delivering everything from simple landing pages to sophisticated web applications — all while maintaining the personal touch and attention to detail that defined our beginnings.
              </p>
              <p className="about-text">
                Our approach is straightforward: understand your needs, provide clear pricing, deliver quality work on time, and support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Clarity</h3>
              <p>No jargon, no hidden fees. We communicate in plain language and provide transparent pricing from day one.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We don't just build websites — we become your technology partner, invested in your long-term success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Every project receives our full attention. We take pride in delivering work that exceeds expectations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Reliability</h3>
              <p>Deadlines matter. We honor our commitments and keep you informed throughout the process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-intro">Comprehensive digital solutions tailored to businesses of all sizes.</p>
          <div className="offerings-grid">
            <div className="offering-item">
              <div className="offering-icon">🌐</div>
              <div className="offering-content">
                <h3>Website Design & Development</h3>
                <p>Beautiful, responsive websites that represent your brand and convert visitors into customers.</p>
              </div>
            </div>
            <div className="offering-item">
              <div className="offering-icon">📱</div>
              <div className="offering-content">
                <h3>Mobile App Development</h3>
                <p>Cross-platform applications for iOS and Android that extend your reach to mobile users.</p>
              </div>
            </div>
            <div className="offering-item">
              <div className="offering-icon">🛒</div>
              <div className="offering-content">
                <h3>E-Commerce Solutions</h3>
                <p>Online stores with secure payment integration, inventory management, and order tracking.</p>
              </div>
            </div>
            <div className="offering-item">
              <div className="offering-icon">🔧</div>
              <div className="offering-content">
                <h3>Maintenance & Support</h3>
                <p>Ongoing updates, security patches, and technical support to keep your site running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="founder-section-new">
            <div className="founder-content">
              <h2 className="section-title">Meet the Founder</h2>
              <div className="founder-card">
                <div className="founder-avatar">ST</div>
                <div className="founder-details">
                  <h3 className="founder-name">Shubham Tiwari</h3>
                  <p className="founder-role">Founder & Lead Developer</p>
                  <p className="founder-bio">
                    With a passion for clean code and user-centered design, Shubham founded Tech Studio to bridge the gap between complex technology and accessible solutions for businesses. His hands-on approach ensures every project receives personal attention and meets the highest standards of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>Ready to bring your digital vision to life? We'd love to hear about your project and explore how we can help.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">Start a Conversation</a>
              <a href="/services" className="btn btn-secondary btn-large">Explore Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
