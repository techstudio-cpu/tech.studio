"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <Link className="nav-logo" href="/">
          <span className="logo-icon">⚡</span>
          Tech Studio
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <ul id="primary-navigation" className={`nav-menu ${open ? "is-open" : ""}`}>
          <li>
            <Link href="/" aria-current={isActive("/") ? "page" : undefined}>Home</Link>
          </li>
          <li>
            <Link href="/about" aria-current={isActive("/about") ? "page" : undefined}>About</Link>
          </li>
          <li>
            <Link href="/services" aria-current={isActive("/services") ? "page" : undefined}>Services</Link>
          </li>
          <li>
            <Link href="/packages" aria-current={isActive("/packages") ? "page" : undefined}>Packages</Link>
          </li>
          <li>
            <Link href="/web-ocean" aria-current={isActive("/web-ocean") ? "page" : undefined}>Web Ocean</Link>
          </li>
          <li>
            <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
