import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Providers from "./Providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Studio - Digital Solutions That Scale",
  description: "Creative studio solutions — web, apps, AI automations, interactive tools and more. Clear pricing, concise deliverables, and full documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>
          <NavBar />
          <main className="main-content">
            {children}
          </main>
          <footer className="footer">
            <div className="footer-container">
              <div className="footer-section">
                <h3>Tech Studio</h3>
                <p>Empower Your Digital Journey With Us</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/packages">Packages</a></li>
                  <li><a href="/web-ocean">Web Ocean</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <p><a href="mailto:info@techstudio.co.in">info@techstudio.co.in</a></p>
                <p><a href="tel:+918319775876">+91 8319775876</a></p>
                <p><a href="https://www.techstudio.co.in" target="_blank" rel="noopener noreferrer">www.techstudio.co.in</a></p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Tech Studio. All rights reserved.</p>
              <p>- Shubham Tiwari (Founder TechStudio)</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
