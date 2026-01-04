import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Tech Studio</h3>
          <p>Empower Your Digital Journey With Us</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/services/">Services</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:info@techstudio.co.in">info@techstudio.co.in</a>
          </p>
          <p>
            <a href="tel:+918319775876">+91 8319775876</a>
          </p>
          <p>
            <a href="https://www.techstudio.co.in" target="_blank" rel="noopener noreferrer">
              www.techstudio.co.in
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tech Studio. All rights reserved.</p>
        <p>- Shubham Tiwari (Founder TechStudio)</p>
      </div>
    </footer>
  );
}

