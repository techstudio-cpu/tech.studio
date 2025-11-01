import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Tech Studio
        </Link>
        <ul className="nav-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about/">About</Link>
          </li>
          <li>
            <Link href="/services/">Services</Link>
          </li>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

