export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
  price: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export const heroContent = {
  welcome: "Welcome to Tech Studio",
  tagline: "Empower Your Digital Journey With Us",
  subtitle: "Digital Solutions That Scale With Your Vision",
  description: "Creative studio solutions — web, apps, AI automations, interactive tools and more. Clear pricing, concise deliverables, and full documentation."
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web-design",
    name: "Web Design & Hosting",
    services: [
      {
        id: "website-basic",
        title: "Website Design — Basic",
        description: "Perfect for small businesses or personal brands",
        features: [
          "5 responsive pages (Home, About, Services, Contact, Gallery)",
          "SEO setup + mobile optimization",
          "Contact form integration",
          "Basic on-page speed optimization"
        ],
        price: "₹7,500"
      },
      {
        id: "website-premium",
        title: "Website Design — Premium",
        description: "Tailored for growing brands & agencies",
        features: [
          "Custom UI/UX design & CMS/blog",
          "Multilanguage support, animations",
          "Admin dashboard (optional)"
        ],
        price: "₹15,000 – ₹25,000"
      },
      {
        id: "landing-page",
        title: "Landing Page (Promo/Product)",
        description: "High-conversion pages for marketing",
        features: [
          "CTA, analytics tracking, optimized visuals"
        ],
        price: "₹4,000 – ₹6,000"
      },
      {
        id: "domain-hosting",
        title: "Domain + Hosting Setup",
        description: "Get your brand online, securely",
        features: [
          "SSL, DNS, VPS setup, branded email"
        ],
        price: "₹2,000 – ₹3,500"
      }
    ]
  },
  {
    id: "app-development",
    name: "App Development",
    services: [
      {
        id: "react-native-basic",
        title: "React Native App — Basic",
        description: "Lightweight cross-platform apps",
        features: [
          "3–5 screens, API integration"
        ],
        price: "₹12,000 – ₹18,000"
      },
      {
        id: "react-native-advanced",
        title: "React Native App — Advanced",
        description: "Production-ready mobile apps",
        features: [
          "Push notifications, auth, analytics"
        ],
        price: "₹25,000 – ₹40,000"
      },
      {
        id: "pwa",
        title: "Progressive Web App (PWA)",
        description: "Installable web apps with offline support",
        price: "₹10,000 – ₹15,000"
      }
    ]
  },
  {
    id: "ai-automations",
    name: "AI Automations & Agents",
    services: [
      {
        id: "n8n-automation",
        title: "n8n Automation Setup",
        description: "Automate workflows without coding",
        price: "₹5,000 – ₹8,000"
      },
      {
        id: "ai-agent",
        title: "AI Agent (Chatbot/Assistant)",
        description: "Custom-trained assistant integrated into your product",
        price: "₹12,000 – ₹20,000"
      },
      {
        id: "quantalyze",
        title: "Quantalyze Audit Engine",
        description: "Automated analytics and audit reports",
        price: "₹8,000 – ₹15,000"
      }
    ]
  },
  {
    id: "games-interactive",
    name: "Games & Interactive Tools",
    services: [
      {
        id: "mini-game-web",
        title: "Mini Game (Web)",
        description: "HTML5/Canvas games for engagement",
        price: "₹6,000 – ₹10,000"
      },
      {
        id: "mobile-game",
        title: "Mobile Game (React Native)",
        description: "Ad-enabled, lightweight mobile games",
        price: "₹15,000 – ₹25,000"
      }
    ]
  },
  {
    id: "dashboards-exports",
    name: "Dashboards & Exports",
    services: [
      {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        description: "Charts, filters, exports (PDF/DOCX)",
        price: "₹10,000 – ₹18,000"
      },
      {
        id: "export-engine",
        title: "Export Engine",
        description: "Markdown to PDF/DOCX templates",
        price: "₹4,000 – ₹7,000"
      }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Workflow Setup",
    services: [
      {
        id: "dockerized-vps",
        title: "Dockerized VPS Setup",
        description: "Full-stack Docker deployment with SSL",
        price: "₹5,000 – ₹8,000"
      },
      {
        id: "cicd-pipeline",
        title: "CI/CD Pipeline",
        description: "GitHub Actions, versioning & rollback",
        price: "₹3,000 – ₹5,000"
      }
    ]
  },
  {
    id: "licensing-policy",
    name: "Licensing, Policy & Support",
    services: [
      {
        id: "privacy-policy",
        title: "Privacy Policy (Hindi/Eng)",
        description: "Custom multilingual privacy documents",
        price: "₹1,500 – ₹3,000"
      },
      {
        id: "license-attribution",
        title: "License & Attribution",
        description: "Copyright statements & attribution setup",
        price: "₹1,000 – ₹2,000"
      },
      {
        id: "monthly-maintenance",
        title: "Monthly Maintenance Plan",
        description: "Updates, backups, security patches",
        price: "₹2,000 – ₹4,000 / month"
      },
      {
        id: "one-time-fix",
        title: "One-Time Fix/Update",
        description: "Minor fixes or optimizations",
        price: "₹1,000 – ₹2,500"
      }
    ]
  }
];

export const contactInfo = {
  email: "info@techstudio.co.in",
  phone: "+91 8319775876",
  website: "www.techstudio.co.in",
  founder: "Shubham Tiwari",
  founderTitle: "Founder TechStudio",
  cta: "Ready to start?",
  ctaDescription: "Contact TechStudio to get a tailored quote and project timeline. All projects include documentation, transfer of ownership, and optional training."
};

export const aboutContent = {
  mission: heroContent.description,
  founder: {
    name: contactInfo.founder,
    title: contactInfo.founderTitle
  }
};

