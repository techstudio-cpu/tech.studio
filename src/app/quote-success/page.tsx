import Link from 'next/link';

export default function QuoteSuccessPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-container">
          <div className="success-icon">✓</div>
          <h1 className="hero-title">Thank You for Your Inquiry!</h1>
          <p className="hero-subtitle">We've received your request and our team will review it shortly</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="success-content">
            <div className="success-card">
              <h2>📩 What Happens Next?</h2>
              <div className="success-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">1</div>
                  <div className="timeline-content">
                    <h3>Review</h3>
                    <p>Our team will carefully review your requirements and project details</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">2</div>
                  <div className="timeline-content">
                    <h3>Personalized Quote</h3>
                    <p>We'll prepare a detailed quote tailored to your specific needs</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">3</div>
                  <div className="timeline-content">
                    <h3>Get in Touch</h3>
                    <p>You'll receive our response within 24-48 hours via email</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="success-card">
              <h2>⏱️ Response Time</h2>
              <div className="response-time-box">
                <div className="response-time-value">24-48 Hours</div>
                <p>Our team typically responds within this timeframe during business days</p>
              </div>
            </div>

            <div className="success-card">
              <h2>📞 Need Immediate Assistance?</h2>
              <p>If you have urgent questions or would like to discuss your project right away, feel free to reach out to us directly:</p>
              <div className="contact-quick-links">
                <a href="mailto:info@techstudio.co.in" className="contact-quick-link">
                  📧 Email Us
                </a>
                <a href="tel:+918319775876" className="contact-quick-link">
                  📱 Call Us
                </a>
                <a href="https://wa.me/918319775876" className="contact-quick-link" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <div className="success-actions">
              <Link href="/services" className="btn btn-primary">
                Browse More Services
              </Link>
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
