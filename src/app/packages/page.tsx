export default function PackagesComparison() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Website Packages Comparison</h1>
          <h2 className="hero-subtitle">Choose the Perfect Solution for Your Business</h2>
          <p className="hero-description">
            Compare our Basic and Premium website packages to find the right fit for your needs and budget.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Package Cards Side by Side */}
          <div className="packages-comparison-grid">
            
            {/* Basic Package Card */}
            <div className="package-card">
              <div className="package-header">
                <h3 className="package-title">Basic Website</h3>
                <div className="package-price">₹7,500</div>
                <p className="package-subtitle">Perfect for Small Businesses</p>
              </div>
              
              <div className="package-content">
                <h4 className="package-section-title">What You Get</h4>
                <ul className="package-features-list">
                  <li>✓ 5 Responsive Pages (Home, About, Services, Contact, Gallery)</li>
                  <li>✓ Mobile-First Design</li>
                  <li>✓ SEO Setup & Optimization</li>
                  <li>✓ Contact Form Integration</li>
                  <li>✓ Basic Speed Optimization</li>
                  <li>✓ Social Media Links</li>
                  <li>✓ Google Maps Integration</li>
                  <li>✓ 1 Month Free Support</li>
                </ul>

                <h4 className="package-section-title">Technology Stack</h4>
                <div className="tech-stack-simple">
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                </div>

                <h4 className="package-section-title">Best For</h4>
                <ul className="package-use-cases">
                  <li>• Small businesses & startups</li>
                  <li>• Personal brands & portfolios</li>
                  <li>• Service providers</li>
                  <li>• Local businesses</li>
                </ul>

                <h4 className="package-section-title">Website Type</h4>
                <p className="package-description">
                  <strong>Static Website:</strong> Think of it like a digital brochure. All the information is pre-written and stays the same for every visitor. It's fast, secure, and perfect when your content doesn't change frequently.
                </p>
                <p className="package-example">
                  <strong>Real-life example:</strong> Like a printed menu at a restaurant - everyone sees the same dishes and prices.
                </p>
              </div>

              <div className="package-footer">
                <a href="/services/website-design-basic" className="btn btn-secondary btn-block">
                  View Details
                </a>
              </div>
            </div>

            {/* Premium Package Card */}
            <div className="package-card package-card-featured">
              <div className="package-badge">RECOMMENDED</div>
              <div className="package-header">
                <h3 className="package-title">Premium Website</h3>
                <div className="package-price">₹15,000 – ₹25,000</div>
                <p className="package-subtitle">For Growing Brands & Agencies</p>
              </div>
              
              <div className="package-content">
                <h4 className="package-section-title">Everything in Basic, Plus</h4>
                <ul className="package-features-list">
                  <li>✓ Unlimited Pages</li>
                  <li>✓ Custom UI/UX Design</li>
                  <li>✓ Content Management System (CMS)</li>
                  <li>✓ Blog/News Section</li>
                  <li>✓ Multilanguage Support</li>
                  <li>✓ Advanced Animations</li>
                  <li>✓ Admin Dashboard (Optional)</li>
                  <li>✓ API Integrations</li>
                  <li>✓ Database Integration</li>
                  <li>✓ User Authentication</li>
                  <li>✓ Advanced Speed & Security</li>
                  <li>✓ 3 Months Free Support</li>
                </ul>

                <h4 className="package-section-title">Technology Stack</h4>
                <div className="tech-stack-simple">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Tailwind CSS</span>
                </div>

                <h4 className="package-section-title">Best For</h4>
                <ul className="package-use-cases">
                  <li>• Growing businesses & agencies</li>
                  <li>• E-commerce platforms</li>
                  <li>• Content-heavy websites</li>
                  <li>• Membership sites</li>
                  <li>• Custom web applications</li>
                </ul>

                <h4 className="package-section-title">Website Type</h4>
                <p className="package-description">
                  <strong>Dynamic Website with Node.js:</strong> Think of it like a smart assistant that can remember things, make decisions, and show different content to different people. The website can update in real-time and interact with databases.
                </p>
              </div>

              <div className="package-footer">
                <a href="/services/website-design-premium" className="btn btn-primary btn-block">
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Node.js Explanation Section */}
          <div className="nodejs-explanation-section">
            <h2 className="section-title">Why Node.js Matters for Premium Websites</h2>
            <p className="section-intro">
              Node.js is the technology that powers dynamic, interactive websites. Here's what it means for your business in simple terms:
            </p>

            <div className="nodejs-features-grid">
              
              <div className="nodejs-feature-card">
                <div className="nodejs-icon">🔄</div>
                <h3>Real-Time Updates</h3>
                <p className="nodejs-description">
                  Your website can update information instantly without refreshing the page.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like a live scoreboard at a cricket match - scores update automatically as the game progresses. Your website can show live inventory, booking availability, or notifications without users clicking refresh.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">👤</div>
                <h3>Personalized Experience</h3>
                <p className="nodejs-description">
                  Show different content to different users based on their preferences or login status.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like Netflix showing you recommendations based on what you've watched. Your website can remember customer preferences, show personalized product suggestions, or display custom dashboards for logged-in users.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">💾</div>
                <h3>Data Storage & Management</h3>
                <p className="nodejs-description">
                  Store and retrieve customer information, orders, bookings, or any data securely.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like a digital filing cabinet that remembers everything. Your website can save customer orders, appointment bookings, user profiles, or form submissions and retrieve them anytime.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">🔐</div>
                <h3>User Accounts & Authentication</h3>
                <p className="nodejs-description">
                  Create secure login systems where users can have their own accounts and private areas.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like having a members-only club. Users can create accounts, log in securely, access their order history, save favorites, or manage their subscriptions privately.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">🔗</div>
                <h3>Third-Party Integrations</h3>
                <p className="nodejs-description">
                  Connect your website to payment gateways, email services, SMS, or other business tools.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like connecting your phone to your smartwatch. Your website can process payments through Razorpay, send automated emails, sync with your CRM, or connect to shipping APIs.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">📊</div>
                <h3>Admin Dashboard</h3>
                <p className="nodejs-description">
                  Manage your website content, users, and data through a custom control panel.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like the control room of a building. You can add/edit products, manage customer orders, view analytics, update blog posts, or control user permissions - all from one place.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">⚡</div>
                <h3>Fast & Scalable</h3>
                <p className="nodejs-description">
                  Handle thousands of users simultaneously without slowing down.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like a highway that can expand lanes during rush hour. Whether you have 10 or 10,000 visitors, your website stays fast and responsive.
                </div>
              </div>

              <div className="nodejs-feature-card">
                <div className="nodejs-icon">🤖</div>
                <h3>Automation & Smart Features</h3>
                <p className="nodejs-description">
                  Automate repetitive tasks and add intelligent features to save time.
                </p>
                <div className="nodejs-example">
                  <strong>Real-life example:</strong> Like having a virtual assistant. Your website can send automated booking confirmations, generate invoices, send birthday wishes to customers, or trigger alerts when inventory is low.
                </div>
              </div>

            </div>
          </div>

          {/* Comparison Table */}
          <div className="comparison-table-section">
            <h2 className="section-title">Feature-by-Feature Comparison</h2>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic Package</th>
                    <th>Premium Package</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Number of Pages</td>
                    <td>5 Pages</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Mobile Responsive</td>
                    <td>✓ Yes</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>SEO Optimization</td>
                    <td>✓ Basic</td>
                    <td>✓ Advanced</td>
                  </tr>
                  <tr>
                    <td>Contact Form</td>
                    <td>✓ Yes</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Content Management System</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Blog/News Section</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>User Authentication</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Database Integration</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Admin Dashboard</td>
                    <td>✗ No</td>
                    <td>✓ Optional</td>
                  </tr>
                  <tr>
                    <td>API Integrations</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Multilanguage Support</td>
                    <td>✗ No</td>
                    <td>✓ Yes</td>
                  </tr>
                  <tr>
                    <td>Custom Animations</td>
                    <td>Basic</td>
                    <td>Advanced</td>
                  </tr>
                  <tr>
                    <td>Free Support Period</td>
                    <td>1 Month</td>
                    <td>3 Months</td>
                  </tr>
                  <tr>
                    <td>Delivery Time</td>
                    <td>5-7 Days</td>
                    <td>10-20 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Choose the package that fits your needs or contact us for a custom solution.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary btn-large">
                Get a Custom Quote
              </a>
              <a href="/services" className="btn btn-secondary btn-large">
                View All Services
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
