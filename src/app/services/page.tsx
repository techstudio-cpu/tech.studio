'use client';
import { useEffect } from 'react';

export default function Services() {
  // Add staggered animation effect to service cards
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 100);
    });
  }, []);

  

  return (
    <main className="services-page" role="main">

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-container">
          <h1 id="hero-title" className="hero-title animate-fade-in">Our Services</h1>
          <h2 className="hero-subtitle animate-fade-in-delayed">Digital Solutions That Scale With Your Vision</h2>
          <div className="hero-overlay"></div>
        </div>
      </section>

      <section className="section services-section" aria-label="Services Categories">
        <div className="container animate-fade-up">

          <div className="service-category">
            <h2 className="category-title">Web Design & Hosting</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Website Design — Basic</h3>
                <p className="service-card-description">Professional website for small businesses and startups</p>
                <ul className="service-card-features">
                  <li>5 responsive pages</li>
                  <li>Mobile-first design</li>
                  <li>SEO optimization</li>
                  <li>Contact form integration</li>
                </ul>
                <div className="service-card-price">₹7,500</div>
                <a href="/services/website-design-basic" className="btn btn-primary" aria-label="Learn more about Website Design Basic">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Website Design — Premium</h3>
                <p className="service-card-description">Enterprise-grade solution with advanced features</p>
                <ul className="service-card-features">
                  <li>Custom UI/UX design</li>
                  <li>CMS integration</li>
                  <li>Multilanguage support</li>
                  <li>Admin dashboard</li>
                  <li>API integrations</li>
                </ul>
                <div className="service-card-price">₹15,000 – ₹25,000</div>
                <a href="/services/website-design-premium" className="btn btn-primary" aria-label="Learn more about Website Design Premium">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Landing Page (Promo/Product)</h3>
                <p className="service-card-description">High-conversion pages for marketing campaigns</p>
                <ul className="service-card-features">
                  <li>Single-page design</li>
                  <li>Lead capture forms</li>
                  <li>Analytics tracking</li>
                  <li>Mobile-optimized</li>
                </ul>
                <div className="service-card-price">₹4,000 – ₹6,000</div>
                <a href="/services/landing-page-promo-product" className="btn btn-primary" aria-label="Learn more about Landing Page">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Domain + Hosting Setup</h3>
                <p className="service-card-description">Complete infrastructure to get your website live</p>
                <ul className="service-card-features">
                  <li>Domain registration</li>
                  <li>SSL certificate setup</li>
                  <li>Hosting configuration</li>
                  <li>Professional email</li>
                </ul>
                <div className="service-card-price">₹2,000 – ₹3,500</div>
                <a href="/services/domain-hosting-setup" className="btn btn-primary" aria-label="Learn more about Domain + Hosting Setup">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">App Development</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">React Native App — Basic</h3>
                <p className="service-card-description">Cross-platform mobile apps for iOS & Android</p>
                <ul className="service-card-features">
                  <li>3-5 responsive screens</li>
                  <li>Cross-platform compatibility</li>
                  <li>API integration</li>
                  <li>App store deployment</li>
                </ul>
                <div className="service-card-price">₹12,000 – ₹18,000</div>
                <a href="/services/react-native-app-basic" className="btn btn-primary" aria-label="Learn more about React Native App Basic">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">React Native App — Advanced</h3>
                <p className="service-card-description">Production-ready apps with advanced features</p>
                <ul className="service-card-features">
                  <li>Unlimited screens</li>
                  <li>Push notifications</li>
                  <li>Advanced authentication</li>
                  <li>Backend API development</li>
                </ul>
                <div className="service-card-price">₹25,000 – ₹40,000</div>
                <a href="/services/react-native-app-advanced" className="btn btn-primary" aria-label="Learn more about React Native App Advanced">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Progressive Web App (PWA)</h3>
                <p className="service-card-description">Installable web apps with offline support</p>
                <ul className="service-card-features">
                  <li>Installable on devices</li>
                  <li>Offline functionality</li>
                  <li>Push notifications</li>
                  <li>Cross-platform</li>
                </ul>
                <div className="service-card-price">₹10,000 – ₹15,000</div>
                <a href="/services/progressive-web-app" className="btn btn-primary" aria-label="Learn more about Progressive Web App">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">AI Automations & Agents</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">n8n Automation Setup</h3>
                <p className="service-card-description">No-code workflow automation for your business</p>
                <ul className="service-card-features">
                  <li>Custom workflows</li>
                  <li>Multi-app integration</li>
                  <li>Trigger-based automation</li>
                  <li>Documentation included</li>
                </ul>
                <div className="service-card-price">₹5,000 – ₹8,000</div>
                <a href="/services/n8n-automation-setup" className="btn btn-primary" aria-label="Learn more about n8n Automation Setup">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">AI Agent (Chatbot/Assistant)</h3>
                <p className="service-card-description">Intelligent AI chatbot trained on your data</p>
                <ul className="service-card-features">
                  <li>Custom AI training</li>
                  <li>Natural language processing</li>
                  <li>Multi-channel integration</li>
                  <li>Analytics & insights</li>
                </ul>
                <div className="service-card-price">₹12,000 – ₹20,000</div>
                <a href="/services/ai-agent-chatbot-assistant" className="btn btn-primary" aria-label="Learn more about AI Agent">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Quantalyze Audit Engine</h3>
                <p className="service-card-description">Automated digital auditing and analytics</p>
                <ul className="service-card-features">
                  <li>Automated scheduling</li>
                  <li>Multi-metric analysis</li>
                  <li>Report generation</li>
                  <li>Performance monitoring</li>
                </ul>
                <div className="service-card-price">₹8,000 – ₹15,000</div>
                <a href="/services/quantalyze-audit-engine" className="btn btn-primary" aria-label="Learn more about Quantalyze Audit Engine">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">Games & Interactive Tools</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Mini Game (Web)</h3>
                <p className="service-card-description">HTML5 browser games for engagement</p>
                <ul className="service-card-features">
                  <li>HTML5 canvas</li>
                  <li>Mobile responsive</li>
                  <li>Score tracking</li>
                  <li>Analytics integration</li>
                </ul>
                <div className="service-card-price">₹6,000 – ₹10,000</div>
                <a href="/services/mini-game-web" className="btn btn-primary" aria-label="Learn more about Mini Game (Web)">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Mobile Game (React Native)</h3>
                <p className="service-card-description">Cross-platform mobile games with monetization</p>
                <ul className="service-card-features">
                  <li>Cross-platform</li>
                  <li>60 FPS gameplay</li>
                  <li>Ad integration</li>
                  <li>App store deployment</li>
                </ul>
                <div className="service-card-price">₹15,000 – ₹25,000</div>
                <a href="/services/mobile-game-react-native" className="btn btn-primary" aria-label="Learn more about Mobile Game">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">Data & Export Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Analytics Dashboard</h3>
                <p className="service-card-description">Interactive data visualization and reports</p>
                <ul className="service-card-features">
                  <li>Interactive charts</li>
                  <li>Real-time updates</li>
                  <li>Advanced filtering</li>
                  <li>Multi-format exports</li>
                </ul>
                <div className="service-card-price">₹10,000 – ₹18,000</div>
                <a href="/services/analytics-dashboard" className="btn btn-primary" aria-label="Learn more about Analytics Dashboard">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Export Engine</h3>
                <p className="service-card-description">Automated PDF/DOCX document generation</p>
                <ul className="service-card-features">
                  <li>PDF/DOCX conversion</li>
                  <li>Custom templates</li>
                  <li>Batch processing</li>
                  <li>API integration</li>
                </ul>
                <div className="service-card-price">₹4,000 – ₹7,000</div>
                <a href="/services/export-engine" className="btn btn-primary" aria-label="Learn more about Export Engine">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">DevOps & Workflow Setup</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Dockerized VPS Setup</h3>
                <p className="service-card-description">Production-ready Docker infrastructure</p>
                <ul className="service-card-features">
                  <li>Docker setup</li>
                  <li>SSL configuration</li>
                  <li>Database containerization</li>
                  <li>Security hardening</li>
                </ul>
                <div className="service-card-price">₹5,000 – ₹8,000</div>
                <a href="/services/dockerized-vps-setup" className="btn btn-primary" aria-label="Learn more about Dockerized VPS Setup">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">CI/CD Pipeline</h3>
                <p className="service-card-description">Automated testing and deployment pipeline</p>
                <ul className="service-card-features">
                  <li>GitHub Actions setup</li>
                  <li>Automated testing</li>
                  <li>Deployment automation</li>
                  <li>One-click rollback</li>
                </ul>
                <div className="service-card-price">₹3,000 – ₹5,000</div>
                <a href="/services/ci-cd-pipeline" className="btn btn-primary" aria-label="Learn more about CI/CD Pipeline">Learn More</a>
              </div>
            </div>
          </div>
          <div className="service-category">
            <h2 className="category-title">Licensing, Policy & Support</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-card-title">Privacy Policy (Hindi/Eng)</h3>
                <p className="service-card-description">GDPR-compliant privacy policy documentation</p>
                <ul className="service-card-features">
                  <li>GDPR compliant</li>
                  <li>Bilingual support</li>
                  <li>Cookie policy included</li>
                  <li>Regular updates</li>
                </ul>
                <div className="service-card-price">₹1,500 – ₹3,000</div>
                <a href="/services/privacy-policy" className="btn btn-primary" aria-label="Learn more about Privacy Policy">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">License & Attribution</h3>
                <p className="service-card-description">Copyright and licensing documentation</p>
                <ul className="service-card-features">
                  <li>License drafting</li>
                  <li>Copyright statements</li>
                  <li>Third-party attribution</li>
                  <li>Terms of Service</li>
                </ul>
                <div className="service-card-price">₹1,000 – ₹2,000</div>
                <a href="/services/license-attribution" className="btn btn-primary" aria-label="Learn more about License & Attribution">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">Monthly Maintenance Plan</h3>
                <p className="service-card-description">Ongoing support and maintenance</p>
                <ul className="service-card-features">
                  <li>Security updates</li>
                  <li>Daily backups</li>
                  <li>Performance monitoring</li>
                  <li>Priority support</li>
                </ul>
                <div className="service-card-price">₹2,000 – ₹4,000 / month</div>
                <a href="/services/monthly-maintenance-plan" className="btn btn-primary" aria-label="Learn more about Monthly Maintenance Plan">Learn More</a>
              </div>
              <div className="service-card">
                <h3 className="service-card-title">One-Time Fix/Update</h3>
                <p className="service-card-description">Quick fixes and minor updates</p>
                <ul className="service-card-features">
                  <li>Bug fixes</li>
                  <li>Minor features</li>
                  <li>Performance optimization</li>
                  <li>Quick turnaround (24-48h)</li>
                </ul>
                <div className="service-card-price">₹1,000 – ₹2,500</div>
                <a href="/services/one-time-fix-update" className="btn btn-primary" aria-label="Learn more about One-Time Fix/Update">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
