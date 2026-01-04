interface HeroSectionProps {
  title: string;
  tagline?: string;
  subtitle?: string;
  description?: string;
}

export default function HeroSection({ title, tagline, subtitle, description }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        {tagline && <p className="hero-tagline">{tagline}</p>}
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        {description && <p className="hero-description">{description}</p>}
      </div>
    </section>
  );
}

