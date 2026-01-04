export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Tech Studio</h1>
          <p className="hero-tagline" data-text="Where Ideas Become Digital Reality">Where Ideas Become Digital Reality</p>
          <h2 className="hero-subtitle">Professional Web & App Development</h2>
          <p className="hero-description">We craft beautiful, high-performance websites and applications that help businesses grow. From stunning designs to powerful functionality — all at transparent, affordable prices.</p>
          <div className="hero-cta-buttons">
            <a className="btn btn-primary btn-large" href="/services">Explore Services</a>
            <a className="btn btn-secondary btn-large" href="/web-ocean">Explore Web Ocean</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Tech Studio?</h2>
          <p className="section-intro">We combine creativity with technical expertise to deliver solutions that truly make a difference for your business.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden costs or surprises. You know exactly what you're paying for from day one.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround without compromising quality. Most projects delivered within 5-15 days.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>Every website looks perfect on phones, tablets, and desktops. Your customers can reach you anywhere.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Full Support</h3>
              <p>Comprehensive documentation, training, and ongoing support to keep your site running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Popular Services</h2>
          <p className="section-intro">From simple business websites to complex web applications — we have solutions for every need and budget.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">🌐</div>
              <h3 className="service-card-title">Basic Website</h3>
              <p className="service-card-description">Perfect for small businesses, startups, and personal brands who need a professional online presence.</p>
              <ul className="service-card-features">
                <li>5 beautifully designed pages</li>
                <li>Mobile-responsive design</li>
                <li>SEO optimization included</li>
                <li>Contact form integration</li>
              </ul>
              <div className="service-card-price">Starting at ₹7,500</div>
              <a className="btn btn-secondary" href="/services/website-design-basic">Learn More</a>
            </div>
            <div className="service-card service-card-featured">
              <div className="service-card-badge">Most Popular</div>
              <div className="service-card-icon">🚀</div>
              <h3 className="service-card-title">Premium Website</h3>
              <p className="service-card-description">For growing businesses that need advanced features, custom functionality, and a unique brand experience.</p>
              <ul className="service-card-features">
                <li>Custom UI/UX design</li>
                <li>Content management system</li>
                <li>Advanced animations</li>
                <li>Admin dashboard options</li>
              </ul>
              <div className="service-card-price">₹15,000 – ₹25,000</div>
              <a className="btn btn-primary" href="/services/website-design-premium">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-card-icon">📱</div>
              <h3 className="service-card-title">Mobile App</h3>
              <p className="service-card-description">Cross-platform mobile applications that work seamlessly on both iOS and Android devices.</p>
              <ul className="service-card-features">
                <li>React Native development</li>
                <li>iOS & Android compatible</li>
                <li>API integration</li>
                <li>App store deployment</li>
              </ul>
              <div className="service-card-price">Starting at ₹12,000</div>
              <a className="btn btn-secondary" href="/services/react-native-app-basic">Learn More</a>
            </div>
          </div>
          <div className="cta-section">
            <a className="btn btn-primary btn-large" href="/services">View All 20+ Services</a>
            <a className="btn btn-secondary btn-large" href="/packages">Compare Packages</a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-intro">A simple, straightforward process designed to make your experience smooth and hassle-free.</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Share Your Vision</h3>
              <p>Tell us about your project, goals, and requirements. We'll listen carefully and understand your needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Get Your Quote</h3>
              <p>Receive a detailed proposal with clear pricing, timeline, and deliverables within 24-48 hours.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>We Build & Deliver</h3>
              <p>Our team brings your vision to life with regular updates and your feedback incorporated throughout.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Launch & Support</h3>
              <p>Go live with confidence. We provide full documentation, training, and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's discuss your project and create something that truly represents your brand. Get a free consultation and personalized quote — no obligations, no pressure.</p>
            <div className="cta-buttons">
              <a className="btn btn-primary btn-large" href="/contact">Start Your Project</a>
              <a className="btn btn-secondary btn-large" href="tel:+918319775876">Call Us: +91 8319775876</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
