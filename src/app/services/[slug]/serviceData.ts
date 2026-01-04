// Comprehensive service details data for all 20 services

export interface ServiceDetail {
  title: string;
  tagline: string;
  price: string;
  description: string[];
  mechanism: {
    title: string;
    steps: { title: string; description: string }[];
  };
  features: { title: string; description: string }[];
  techStack: string[];
  specifications: { label: string; value: string }[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'website-design-basic': {
    title: 'Website Design — Basic',
    tagline: 'Professional website for small businesses and startups',
    price: '₹7,500',
    description: [
      'Perfect for small businesses, startups, or personal brands looking to establish their online presence with a professional website that converts visitors into customers.',
      'Our Basic Website Design package provides you with a fully responsive, SEO-optimized site that looks great on all devices. We focus on clean, modern design principles that align with your brand identity while ensuring fast loading speeds and excellent user experience.',
      'This package is ideal for businesses that need a solid online presence without complex features. Get your business online quickly and professionally with our streamlined development process.',
    ],
    mechanism: {
      title: 'How We Build Your Website',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'We start by understanding your business, target audience, and goals. We gather all necessary content, branding materials, and define the site structure with you.',
        },
        {
          title: 'Design & Development',
          description: 'Our designers create mockups based on modern design trends and your brand. Once approved, developers build your site using Next.js and TailwindCSS for optimal performance.',
        },
        {
          title: 'Content Integration',
          description: 'We integrate all your content, images, and media while optimizing for SEO and ensuring mobile responsiveness across all devices.',
        },
        {
          title: 'Testing & Launch',
          description: 'Rigorous testing across browsers and devices ensures everything works perfectly. We then deploy your site and provide training on basic updates.',
        },
      ],
    },
    features: [
      { title: '5 Responsive Pages', description: 'Home, About, Services, Contact, and Gallery pages designed to showcase your business effectively with consistent branding.' },
      { title: 'Mobile-First Design', description: 'Optimized for mobile devices first, ensuring perfect display on smartphones, tablets, and desktops with responsive layouts.' },
      { title: 'SEO Optimization', description: 'Built-in SEO best practices including meta tags, structured data, sitemap, and Google Analytics integration for tracking.' },
      { title: 'Contact Form', description: 'Integrated contact form with email notifications to capture leads directly from your website without any additional setup.' },
      { title: 'Social Media Integration', description: 'Connect your social media profiles with elegant icons and sharing capabilities to expand your online presence.' },
      { title: 'Fast Loading Speed', description: 'Optimized code and images ensure your site loads in under 3 seconds for better user experience and SEO rankings.' },
    ],
    techStack: ['Next.js 14', 'React 18', 'TailwindCSS', 'TypeScript', 'Vercel Hosting'],
    specifications: [
      { label: 'Pages', value: '5 pages' },
      { label: 'Delivery Time', value: '7-10 days' },
      { label: 'Revisions', value: '2 rounds' },
      { label: 'Support', value: '30 days' },
      { label: 'Responsive', value: 'Yes' },
      { label: 'SEO Ready', value: 'Yes' },
    ],
  },

  'website-design-premium': {
    title: 'Website Design — Premium',
    tagline: 'Enterprise-grade solution with advanced features',
    price: '₹15,000 – ₹25,000',
    description: [
      'Our Premium Website Design package is tailored for growing brands, agencies, and businesses that demand advanced features and custom functionality. Get a sophisticated website that stands out from the competition.',
      'This comprehensive solution includes custom UI/UX design, content management systems, multilingual support, and advanced animations. Perfect for businesses ready to scale their online presence with professional-grade technology.',
      'We build your premium website using cutting-edge technologies and best practices, ensuring scalability, security, and exceptional performance that can handle your business growth.',
    ],
    mechanism: {
      title: 'Our Premium Development Process',
      steps: [
        {
          title: 'Strategy & Research',
          description: 'Deep dive into your business model, competitor analysis, user personas, and creating a comprehensive project roadmap with milestone planning.',
        },
        {
          title: 'Custom Design System',
          description: 'We create a complete design system with custom components, style guide, and interactive prototypes that reflect your brand personality.',
        },
        {
          title: 'Advanced Development',
          description: 'Full-stack development with custom CMS, API integrations, advanced animations, and multilingual support using modern technologies.',
        },
        {
          title: 'QA & Optimization',
          description: 'Comprehensive testing, performance optimization, security hardening, and deployment with ongoing monitoring and documentation.',
        },
      ],
    },
    features: [
      { title: 'Custom UI/UX Design', description: 'Tailored design system created specifically for your brand with custom components, micro-interactions, and seamless user flows.' },
      { title: 'CMS Integration', description: 'Easy-to-use Content Management System allowing you to update content, images, and pages without technical knowledge.' },
      { title: 'Multilanguage Support', description: 'Reach global audiences with multilingual functionality, supporting multiple languages with automatic translation integration.' },
      { title: 'Admin Dashboard', description: 'Powerful admin panel to manage content, users, analytics, and site settings from a centralized dashboard.' },
      { title: 'API Integrations', description: 'Connect with third-party services like CRM, payment gateways, email marketing, and analytics tools seamlessly.' },
      { title: 'Advanced Animations', description: 'Sophisticated animations and transitions that create engaging user experiences and bring your website to life.' },
    ],
    techStack: ['Next.js 14', 'React 18', 'TailwindCSS', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Vercel/AWS'],
    specifications: [
      { label: 'Pages', value: 'Unlimited' },
      { label: 'Delivery Time', value: '3-4 weeks' },
      { label: 'Revisions', value: 'Unlimited' },
      { label: 'Support', value: '90 days' },
      { label: 'CMS', value: 'Yes' },
      { label: 'Multilingual', value: 'Yes' },
    ],
  },

  'landing-page-promo-product': {
    title: 'Landing Page (Promo/Product)',
    tagline: 'High-conversion pages for marketing campaigns',
    price: '₹4,000 – ₹6,000',
    description: [
      'Laser-focused, conversion-optimized landing pages designed specifically to capture leads and drive sales. Perfect for product launches, marketing campaigns, events, and promotional activities.',
      'Our landing pages are built with psychology-backed design principles, compelling CTAs, and analytics tracking to maximize your campaign ROI. Every element is strategically placed to guide visitors toward conversion.',
      'Get a professional landing page that loads fast, looks stunning, and converts visitors into customers. Ideal for paid advertising campaigns, email marketing, and social media promotions.',
    ],
    mechanism: {
      title: 'Our Landing Page Creation Process',
      steps: [
        {
          title: 'Campaign Analysis',
          description: 'Understanding your campaign goals, target audience, value proposition, and defining key conversion metrics for success tracking.',
        },
        {
          title: 'Conversion-Focused Design',
          description: 'Creating high-impact design with compelling headlines, persuasive copy, strategic CTA placement, and trust-building elements.',
        },
        {
          title: 'Development & Integration',
          description: 'Building the landing page with lead capture forms, analytics tracking, A/B testing setup, and integration with your marketing tools.',
        },
        {
          title: 'Launch & Optimize',
          description: 'Deploying the page, setting up tracking pixels, monitoring performance, and providing optimization recommendations.',
        },
      ],
    },
    features: [
      { title: 'High-Impact Design', description: 'Single-page design focused on one clear goal with attention-grabbing headlines and persuasive visual hierarchy.' },
      { title: 'Lead Capture Forms', description: 'Optimized forms with minimal fields to maximize completion rates, integrated with your CRM or email marketing platform.' },
      { title: 'Analytics Tracking', description: 'Google Analytics, Facebook Pixel, and conversion tracking setup to measure campaign performance and ROI.' },
      { title: 'A/B Testing Ready', description: 'Structure built for easy A/B testing of headlines, CTAs, and layouts to continuously improve conversion rates.' },
      { title: 'Mobile-Optimized', description: 'Perfect display on all devices with fast loading times and touch-friendly interactions for mobile users.' },
      { title: 'Social Proof Elements', description: 'Testimonials, reviews, trust badges, and statistics strategically placed to build credibility and trust.' },
    ],
    techStack: ['Next.js', 'React', 'TailwindCSS', 'Google Analytics', 'Email Marketing APIs'],
    specifications: [
      { label: 'Pages', value: '1 page' },
      { label: 'Delivery Time', value: '3-5 days' },
      { label: 'Revisions', value: '2 rounds' },
      { label: 'Support', value: '15 days' },
      { label: 'Analytics', value: 'Yes' },
      { label: 'Forms', value: 'Yes' },
    ],
  },

  'domain-hosting-setup': {
    title: 'Domain + Hosting Setup',
    tagline: 'Complete infrastructure to get your website live',
    price: '₹2,000 – ₹3,500',
    description: [
      'Complete technical infrastructure setup to get your website live securely and professionally. We handle all the technical complexities of domain registration, hosting configuration, and email setup.',
      'Our service includes domain registration or transfer, SSL certificate installation for secure HTTPS, DNS configuration, hosting setup on reliable servers, and professional email accounts with your domain name.',
      'Get your online presence up and running quickly with our hassle-free setup service. We configure everything correctly from the start, ensuring optimal performance and security.',
    ],
    mechanism: {
      title: 'Setup Process',
      steps: [
        {
          title: 'Domain Registration',
          description: 'Helping you choose and register the perfect domain name, or transfer your existing domain with zero downtime.',
        },
        {
          title: 'Hosting Configuration',
          description: 'Setting up reliable hosting on VPS or cloud servers with optimal configurations for your website requirements.',
        },
        {
          title: 'Security Setup',
          description: 'Installing SSL certificates, configuring firewall rules, setting up automatic backups, and implementing security best practices.',
        },
        {
          title: 'Email & DNS',
          description: 'Creating professional email accounts, configuring DNS records, and ensuring everything works perfectly together.',
        },
      ],
    },
    features: [
      { title: 'Domain Registration', description: 'Help with selecting and registering your domain name from top registrars with competitive pricing.' },
      { title: 'SSL Certificate', description: 'Free SSL certificate installation for secure HTTPS connection, building trust and improving SEO rankings.' },
      { title: 'Hosting Configuration', description: 'VPS or cloud hosting setup with optimized server configurations for maximum performance and reliability.' },
      { title: 'Professional Email', description: 'Branded email accounts (you@yourdomain.com) with spam protection and ample storage space.' },
      { title: 'DNS Management', description: 'Complete DNS configuration including A records, MX records, and SPF/DKIM setup for email deliverability.' },
      { title: 'Backup Configuration', description: 'Automated daily backups setup ensuring your data is always protected and recoverable.' },
    ],
    techStack: ['Namecheap/GoDaddy', 'DigitalOcean/AWS', 'Nginx', 'Let\'s Encrypt SSL', 'cPanel/DirectAdmin'],
    specifications: [
      { label: 'Domain', value: '1 domain' },
      { label: 'SSL', value: 'Free (Let\'s Encrypt)' },
      { label: 'Email Accounts', value: '5-10 accounts' },
      { label: 'Backups', value: 'Daily' },
      { label: 'Support', value: '30 days' },
      { label: 'Setup Time', value: '1-2 days' },
    ],
  },

  'react-native-app-basic': {
    title: 'React Native App — Basic',
    tagline: 'Cross-platform mobile apps for iOS & Android',
    price: '₹12,000 – ₹18,000',
    description: [
      'Cross-platform mobile application that works seamlessly on both iOS and Android with a single codebase. Perfect for MVPs, simple business apps, and proof-of-concept projects.',
      'Our Basic React Native App package includes essential features like responsive screens, API integration, local data storage, and basic user authentication. Get your app idea validated quickly and cost-effectively.',
      'We build native-quality apps using React Native, ensuring smooth performance and native look-and-feel on both platforms. Ideal for startups and businesses testing new app concepts.',
    ],
    mechanism: {
      title: 'App Development Workflow',
      steps: [
        {
          title: 'Requirements & Wireframes',
          description: 'Defining app features, user flows, creating wireframes, and planning the technical architecture for your mobile application.',
        },
        {
          title: 'UI Design',
          description: 'Designing beautiful and intuitive interfaces following iOS and Android design guidelines for optimal user experience.',
        },
        {
          title: 'Development',
          description: 'Building your app with React Native, implementing features, integrating APIs, and ensuring smooth performance on both platforms.',
        },
        {
          title: 'Testing & Deployment',
          description: 'Thorough testing on multiple devices, bug fixing, and assistance with App Store and Play Store submissions.',
        },
      ],
    },
    features: [
      { title: '3-5 Responsive Screens', description: 'Clean, modern screens designed for your app\'s core functionality with smooth navigation and transitions.' },
      { title: 'Cross-Platform Compatibility', description: 'Single codebase that runs on both iOS and Android, reducing development time and maintenance costs.' },
      { title: 'API Integration', description: 'RESTful API integration to connect your app with backend services and third-party platforms.' },
      { title: 'Local Data Storage', description: 'AsyncStorage implementation for offline data persistence and better user experience.' },
      { title: 'Basic Authentication', description: 'User login/signup functionality with secure token-based authentication and session management.' },
      { title: 'App Store Deployment', description: 'Assistance with app submission to both Apple App Store and Google Play Store with proper configurations.' },
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'AsyncStorage', 'Axios'],
    specifications: [
      { label: 'Screens', value: '3-5 screens' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Delivery Time', value: '2-3 weeks' },
      { label: 'Revisions', value: '2 rounds' },
      { label: 'Support', value: '60 days' },
      { label: 'Source Code', value: 'Included' },
    ],
  },

  'react-native-app-advanced': {
    title: 'React Native App — Advanced',
    tagline: 'Production-ready apps with advanced features',
    price: '₹25,000 – ₹40,000',
    description: [
      'Full-featured, production-ready mobile application with advanced capabilities for serious businesses. Includes complex features like real-time updates, push notifications, and advanced authentication.',
      'Our Advanced React Native App package provides enterprise-grade functionality with unlimited screens, scalable backend API, advanced analytics, payment integration, and sophisticated user experiences.',
      'Perfect for businesses launching production apps that need to scale. We build robust, secure, and high-performance applications using industry best practices and modern architecture.',
    ],
    mechanism: {
      title: 'Enterprise Development Process',
      steps: [
        {
          title: 'Architecture Planning',
          description: 'Comprehensive technical planning including database design, API architecture, security protocols, and scalability considerations.',
        },
        {
          title: 'Design System',
          description: 'Creating a complete design system with reusable components, animations, and consistent branding across all screens.',
        },
        {
          title: 'Full-Stack Development',
          description: 'Building both mobile app and backend API with advanced features, real-time capabilities, and third-party integrations.',
        },
        {
          title: 'QA & Launch',
          description: 'Extensive testing, performance optimization, security audits, and production deployment with monitoring setup.',
        },
      ],
    },
    features: [
      { title: 'Unlimited Screens', description: 'Complex app flows with unlimited screens, sophisticated navigation patterns, and seamless user experiences.' },
      { title: 'Push Notifications', description: 'Firebase Cloud Messaging (FCM) and Apple Push Notification (APNs) integration for engaging users with timely updates.' },
      { title: 'Advanced Authentication', description: 'OAuth 2.0, social login (Google, Facebook, Apple), biometric authentication (Face ID, Touch ID), and secure session management.' },
      { title: 'Backend API Development', description: 'Custom RESTful or GraphQL API with database, authentication, file uploads, and business logic implementation.' },
      { title: 'Real-time Features', description: 'WebSocket support for real-time chat, notifications, live updates, and collaborative features.' },
      { title: 'Analytics & Monitoring', description: 'Firebase Analytics, crash reporting, performance monitoring, and user behavior tracking integrated.' },
    ],
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Node.js', 'PostgreSQL', 'AWS'],
    specifications: [
      { label: 'Screens', value: 'Unlimited' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Delivery Time', value: '6-8 weeks' },
      { label: 'Backend API', value: 'Included' },
      { label: 'Support', value: '90 days' },
      { label: 'Maintenance', value: 'Available' },
    ],
  },

  'progressive-web-app': {
    title: 'Progressive Web App (PWA)',
    tagline: 'Installable web apps with offline support',
    price: '₹10,000 – ₹15,000',
    description: [
      'Modern web applications that work offline and can be installed on devices like native apps. Combines the best of web and mobile apps with app-like experience and offline functionality.',
      'PWAs provide native app-like experience without the complexity and cost of separate iOS and Android development. Users can install your PWA directly from the browser onto their home screen.',
      'Perfect for businesses wanting mobile presence without app store submissions. PWAs are faster to develop, easier to maintain, and provide excellent user experience across all devices.',
    ],
    mechanism: {
      title: 'PWA Development Process',
      steps: [
        {
          title: 'Planning & Design',
          description: 'Defining PWA features, creating responsive designs, and planning offline functionality and caching strategies.',
        },
        {
          title: 'Web App Development',
          description: 'Building responsive web application with modern frameworks, implementing app-like navigation and interactions.',
        },
        {
          title: 'PWA Enhancement',
          description: 'Adding service workers for offline support, manifest file for installability, and push notification setup.',
        },
        {
          title: 'Testing & Optimization',
          description: 'Testing offline functionality, optimizing performance, ensuring proper caching, and validating PWA compliance.',
        },
      ],
    },
    features: [
      { title: 'Installable on Devices', description: 'Users can install your PWA on their device\'s home screen without going through app stores, with custom icon and splash screen.' },
      { title: 'Offline Functionality', description: 'Service workers enable offline access and background sync, ensuring your app works even without internet connection.' },
      { title: 'Push Notifications', description: 'Web push notifications to re-engage users with timely updates, similar to native mobile apps.' },
      { title: 'App-Like Experience', description: 'Full-screen mode, smooth animations, and native-like navigation creating an immersive app experience.' },
      { title: 'Cross-Platform', description: 'Single codebase works on all platforms - mobile, tablet, and desktop - saving development time and cost.' },
      { title: 'Fast Loading', description: 'Advanced caching strategies ensure instant loading, even on slow networks, improving user experience and engagement.' },
    ],
    techStack: ['Next.js', 'React', 'Service Workers', 'PWA Manifest', 'Web Push', 'IndexedDB'],
    specifications: [
      { label: 'Screens', value: '5-8 screens' },
      { label: 'Delivery Time', value: '2-3 weeks' },
      { label: 'Platforms', value: 'All (iOS, Android, Desktop)' },
      { label: 'Offline Mode', value: 'Yes' },
      { label: 'Installable', value: 'Yes' },
      { label: 'Push Notifications', value: 'Yes' },
    ],
  },

  'n8n-automation-setup': {
    title: 'n8n Automation Setup',
    tagline: 'No-code workflow automation for your business',
    price: '₹5,000 – ₹8,000',
    description: [
      'Streamline your business operations with powerful no-code workflow automation. Connect your apps, automate repetitive tasks, and save countless hours with intelligent workflows.',
      'Perfect for businesses looking to eliminate manual data entry, automate notifications, sync data between tools, and improve operational efficiency.',
      'We set up custom workflows that connect hundreds of apps and services, transforming your business processes.',
    ],
    mechanism: {
      title: 'Automation Setup Process',
      steps: [
        { title: 'Workflow Analysis', description: 'Understanding your business processes and identifying automation opportunities.' },
        { title: 'n8n Configuration', description: 'Setting up n8n instance and connecting your apps and services.' },
        { title: 'Workflow Development', description: 'Building automated workflows with triggers, actions, and data transformation.' },
        { title: 'Testing & Training', description: 'Testing workflows and training your team on monitoring and maintenance.' },
      ],
    },
    features: [
      { title: 'Custom Workflows', description: 'Tailored automation workflows designed for your business processes.' },
      { title: 'Multi-App Integration', description: 'Connect Gmail, Slack, Google Sheets, and 300+ other apps.' },
      { title: 'Trigger-Based Automation', description: 'Set up triggers based on schedules, webhooks, or events.' },
      { title: 'Error Handling', description: 'Built-in error handling and retry logic for reliable workflows.' },
      { title: 'Documentation', description: 'Complete documentation and training materials for your team.' },
    ],
    techStack: ['n8n', 'Node.js', 'PostgreSQL', 'Docker'],
    specifications: [
      { label: 'Workflows', value: '3-5 workflows' },
      { label: 'Integrations', value: 'Unlimited' },
      { label: 'Delivery Time', value: '5-7 days' },
      { label: 'Support', value: '30 days' },
    ],
  },

  'ai-agent-chatbot-assistant': {
    title: 'AI Agent (Chatbot/Assistant)',
    tagline: 'Intelligent AI chatbot trained on your data',
    price: '₹12,000 – ₹20,000',
    description: [
      'Intelligent AI-powered chatbot trained on your business data to handle customer queries and provide 24/7 support.',
      'Our AI agents use advanced natural language processing to understand user intent and provide accurate responses.',
      'Perfect for improving customer support, qualifying leads, and providing instant assistance.',
    ],
    mechanism: {
      title: 'AI Development Process',
      steps: [
        { title: 'Data Collection', description: 'Gathering your business data and training the AI model.' },
        { title: 'Chatbot Development', description: 'Building the chatbot interface and conversation flows.' },
        { title: 'Integration', description: 'Integrating with your platforms and testing quality.' },
        { title: 'Deployment', description: 'Deploying and providing monitoring dashboard.' },
      ],
    },
    features: [
      { title: 'Custom AI Training', description: 'AI trained on your business data and brand voice.' },
      { title: 'Natural Language Processing', description: 'Advanced NLP to understand user intent.' },
      { title: 'Multi-Channel', description: 'Deploy on website, WhatsApp, Facebook Messenger.' },
      { title: 'Analytics', description: 'Detailed analytics on conversations and performance.' },
    ],
    techStack: ['OpenAI GPT', 'LangChain', 'Python', 'FastAPI', 'React'],
    specifications: [
      { label: 'Channels', value: '2-3 platforms' },
      { label: 'Delivery Time', value: '2-3 weeks' },
      { label: 'Support', value: '60 days' },
    ],
  },

  'quantalyze-audit-engine': {
    title: 'Quantalyze Audit Engine',
    tagline: 'Automated digital auditing and analytics',
    price: '₹8,000 – ₹15,000',
    description: [
      'Comprehensive digital audit platform that automatically scans and generates detailed reports.',
      'Provides multi-metric analysis across SEO, performance, accessibility, and security.',
      'Perfect for agencies and businesses needing regular audits and professional reporting.',
    ],
    mechanism: {
      title: 'Audit Engine Setup',
      steps: [
        { title: 'Requirements', description: 'Understanding metrics to audit and scoring criteria.' },
        { title: 'Development', description: 'Building the audit engine with scanning and analysis.' },
        { title: 'Reports', description: 'Implementing professional report templates.' },
        { title: 'Automation', description: 'Setting up scheduled audits and alerts.' },
      ],
    },
    features: [
      { title: 'Automated Scheduling', description: 'Schedule audits to run automatically.' },
      { title: 'Multi-Metric Analysis', description: 'Analyze SEO, performance, accessibility, security.' },
      { title: 'Report Generation', description: 'Professional PDF and DOCX reports.' },
      { title: 'Alert System', description: 'Instant notifications when issues detected.' },
    ],
    techStack: ['Python', 'Selenium', 'Lighthouse', 'ReportLab'],
    specifications: [
      { label: 'Audit Types', value: '5-7 metrics' },
      { label: 'Delivery Time', value: '2-3 weeks' },
      { label: 'Support', value: '60 days' },
    ],
  },

  'mini-game-web': {
    title: 'Mini Game (Web)',
    tagline: 'HTML5 browser games for engagement',
    price: '₹6,000 – ₹10,000',
    description: [
      'Engaging HTML5/Canvas-based browser games perfect for marketing campaigns and brand engagement.',
      'Works seamlessly across all devices without installation, providing instant interactive experiences.',
      'Built with HTML5 Canvas for smooth animations and performance.',
    ],
    mechanism: {
      title: 'Game Development Process',
      steps: [
        { title: 'Game Design', description: 'Conceptualizing mechanics and creating storyboards.' },
        { title: 'Development', description: 'Building game logic with HTML5 Canvas.' },
        { title: 'Integration', description: 'Adding score tracking and leaderboards.' },
        { title: 'Launch', description: 'Testing and deploying on your platform.' },
      ],
    },
    features: [
      { title: 'Custom Game Design', description: 'Unique mechanics tailored to your brand.' },
      { title: 'HTML5 Canvas', description: 'Smooth 60 FPS performance.' },
      { title: 'Mobile Responsive', description: 'Touch-optimized controls.' },
      { title: 'Analytics', description: 'Track gameplay metrics and engagement.' },
    ],
    techStack: ['HTML5 Canvas', 'JavaScript', 'Phaser.js', 'React'],
    specifications: [
      { label: 'Platforms', value: 'Web (all devices)' },
      { label: 'Delivery Time', value: '2-3 weeks' },
      { label: 'Support', value: '30 days' },
    ],
  },

  'mobile-game-react-native': {
    title: 'Mobile Game (React Native)',
    tagline: 'Cross-platform mobile games with monetization',
    price: '₹15,000 – ₹25,000',
    description: [
      'Full-featured mobile games for iOS and Android with monetization capabilities.',
      'Includes engaging gameplay, smooth animations, ad integration, and in-app purchases.',
      'Built with React Native for native-like performance on both platforms.',
    ],
    mechanism: {
      title: 'Mobile Game Development',
      steps: [
        { title: 'Game Concept', description: 'Defining mechanics and monetization strategy.' },
        { title: 'Development', description: 'Building game with gameplay logic and animations.' },
        { title: 'Monetization', description: 'Integrating ads and in-app purchases.' },
        { title: 'Publishing', description: 'Testing and publishing to app stores.' },
      ],
    },
    features: [
      { title: 'Cross-Platform', description: 'Single codebase for iOS and Android.' },
      { title: '60 FPS Gameplay', description: 'Smooth performance with optimized rendering.' },
      { title: 'Ad Integration', description: 'AdMob and Facebook Ads integration.' },
      { title: 'In-App Purchases', description: 'Setup for purchases and subscriptions.' },
    ],
    techStack: ['React Native', 'Expo', 'Firebase', 'AdMob'],
    specifications: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Delivery Time', value: '4-6 weeks' },
      { label: 'Support', value: '60 days' },
    ],
  },

  'analytics-dashboard': {
    title: 'Analytics Dashboard',
    tagline: 'Interactive data visualization and reports',
    price: '₹10,000 – ₹18,000',
    description: [
      'Powerful data visualization dashboard that transforms raw data into actionable insights.',
      'Features interactive charts, advanced filtering, real-time updates, and professional exports.',
      'Perfect for business intelligence and monitoring KPIs.',
    ],
    mechanism: {
      title: 'Dashboard Development',
      steps: [
        { title: 'Data Requirements', description: 'Understanding data sources and metrics to track.' },
        { title: 'Design', description: 'Creating dashboard layout and chart designs.' },
        { title: 'Development', description: 'Building dashboard with interactive charts.' },
        { title: 'Deployment', description: 'Connecting data sources and deploying.' },
      ],
    },
    features: [
      { title: 'Interactive Charts', description: 'Bar, line, pie charts with drill-down capabilities.' },
      { title: 'Real-Time Updates', description: 'Live data updates with WebSocket connections.' },
      { title: 'Advanced Filtering', description: 'Date range selectors and multi-criteria filters.' },
      { title: 'Export Functionality', description: 'Export as PDF, DOCX, CSV with branding.' },
    ],
    techStack: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    specifications: [
      { label: 'Charts', value: '10-15 charts' },
      { label: 'Delivery Time', value: '3-4 weeks' },
      { label: 'Support', value: '90 days' },
    ],
  },

  'export-engine': {
    title: 'Export Engine',
    tagline: 'Automated PDF/DOCX document generation',
    price: '₹4,000 – ₹7,000',
    description: [
      'Automated document generation system that converts data into professional PDF and DOCX files.',
      'Perfect for reports, invoices, certificates, and automated documentation.',
      'Handles complex layouts, dynamic data binding, and custom styling.',
    ],
    mechanism: {
      title: 'Engine Development',
      steps: [
        { title: 'Template Design', description: 'Creating document templates with your branding.' },
        { title: 'Development', description: 'Building the export engine with rendering logic.' },
        { title: 'API Integration', description: 'Creating API endpoints for generation.' },
        { title: 'Deployment', description: 'Testing and deploying with monitoring.' },
      ],
    },
    features: [
      { title: 'PDF/DOCX Conversion', description: 'Convert Markdown, HTML, or JSON to documents.' },
      { title: 'Custom Templates', description: 'Fully customizable with your branding.' },
      { title: 'Batch Processing', description: 'Generate hundreds of documents simultaneously.' },
      { title: 'API Integration', description: 'RESTful API for easy integration.' },
    ],
    techStack: ['Python', 'ReportLab', 'Jinja2', 'FastAPI'],
    specifications: [
      { label: 'Formats', value: 'PDF & DOCX' },
      { label: 'Delivery Time', value: '1-2 weeks' },
      { label: 'Support', value: '30 days' },
    ],
  },

  'dockerized-vps-setup': {
    title: 'Dockerized VPS Setup',
    tagline: 'Production-ready Docker infrastructure',
    price: '₹5,000 – ₹8,000',
    description: [
      'Production-ready Docker containerized infrastructure on your VPS with SSL and security.',
      'Complete Docker environment with container orchestration and automated deployments.',
      'Perfect for businesses moving to containers or setting up new infrastructure.',
    ],
    mechanism: {
      title: 'Infrastructure Setup',
      steps: [
        { title: 'Server Provisioning', description: 'Setting up VPS and installing software.' },
        { title: 'Docker Configuration', description: 'Installing Docker and Docker Compose.' },
        { title: 'Deployment', description: 'Containerizing applications and databases.' },
        { title: 'Monitoring', description: 'Setting up monitoring and backups.' },
      ],
    },
    features: [
      { title: 'Docker Setup', description: 'Complete Docker installation with best practices.' },
      { title: 'SSL Configuration', description: 'Automatic SSL with Let\'s Encrypt.' },
      { title: 'Database Containerization', description: 'PostgreSQL/MySQL setup in containers.' },
      { title: 'Security Hardening', description: 'Firewall and security implementation.' },
    ],
    techStack: ['Docker', 'Docker Compose', 'Nginx', 'Let\'s Encrypt', 'Ubuntu'],
    specifications: [
      { label: 'Containers', value: '3-5 containers' },
      { label: 'Delivery Time', value: '3-5 days' },
      { label: 'Support', value: '60 days' },
    ],
  },

  'ci-cd-pipeline': {
    title: 'CI/CD Pipeline',
    tagline: 'Automated testing and deployment pipeline',
    price: '₹3,000 – ₹5,000',
    description: [
      'Automated continuous integration and deployment pipeline for your development workflow.',
      'Automatically test, build, and deploy your code with version control and rollback.',
      'Perfect for teams wanting to improve code quality and reduce deployment time.',
    ],
    mechanism: {
      title: 'Pipeline Setup',
      steps: [
        { title: 'Workflow Analysis', description: 'Understanding your development workflow.' },
        { title: 'Configuration', description: 'Setting up CI/CD tool and build steps.' },
        { title: 'Integration', description: 'Integrating with version control.' },
        { title: 'Documentation', description: 'Testing pipeline and documenting workflow.' },
      ],
    },
    features: [
      { title: 'GitHub Actions', description: 'Complete workflow configuration.' },
      { title: 'Automated Testing', description: 'Integration of unit and integration tests.' },
      { title: 'Deployment Automation', description: 'Automatic deployment to environments.' },
      { title: 'One-Click Rollback', description: 'Easy rollback to previous versions.' },
    ],
    techStack: ['GitHub Actions', 'Docker', 'AWS/Azure', 'Slack'],
    specifications: [
      { label: 'Environments', value: '2-3 (dev, prod)' },
      { label: 'Delivery Time', value: '3-5 days' },
      { label: 'Support', value: '30 days' },
    ],
  },

  'privacy-policy': {
    title: 'Privacy Policy (Hindi/Eng)',
    tagline: 'GDPR-compliant privacy policy documentation',
    price: '₹1,500 – ₹3,000',
    description: [
      'Professionally crafted, legally compliant privacy policy documents for your business.',
      'Available in Hindi, English, or both languages to meet GDPR and Indian IT Act compliance.',
      'Essential for any website or app that collects user data.',
    ],
    mechanism: {
      title: 'Policy Creation',
      steps: [
        { title: 'Business Analysis', description: 'Understanding your data collection practices.' },
        { title: 'Drafting', description: 'Creating comprehensive privacy policy.' },
        { title: 'Legal Review', description: 'Ensuring GDPR and IT Act compliance.' },
        { title: 'Delivery', description: 'Providing policy in both languages.' },
      ],
    },
    features: [
      { title: 'GDPR Compliant', description: 'Full GDPR compliance with required sections.' },
      { title: 'IT Act Compliant', description: 'Meets Indian IT Act 2000 requirements.' },
      { title: 'Bilingual', description: 'Professional translation in Hindi and English.' },
      { title: 'Cookie Policy', description: 'Comprehensive cookie policy included.' },
    ],
    techStack: ['Legal Templates', 'GDPR Framework'],
    specifications: [
      { label: 'Languages', value: 'Hindi & English' },
      { label: 'Delivery Time', value: '3-5 days' },
      { label: 'Format', value: 'DOCX & HTML' },
    ],
  },

  'license-attribution': {
    title: 'License & Attribution',
    tagline: 'Copyright and licensing documentation',
    price: '₹1,000 – ₹2,000',
    description: [
      'Proper licensing documentation and copyright attribution setup for your digital products.',
      'Protects your intellectual property while ensuring compliance with open-source licenses.',
      'Essential for software products, websites, and digital assets.',
    ],
    mechanism: {
      title: 'Licensing Setup',
      steps: [
        { title: 'Project Analysis', description: 'Understanding your project and dependencies.' },
        { title: 'License Selection', description: 'Choosing the right license type.' },
        { title: 'Documentation', description: 'Creating license files and statements.' },
        { title: 'Implementation', description: 'Setting up license headers and attribution.' },
      ],
    },
    features: [
      { title: 'License Selection', description: 'Expert guidance in choosing the right license.' },
      { title: 'Copyright Statements', description: 'Professional copyright statements.' },
      { title: 'Third-Party Attribution', description: 'Proper attribution for dependencies.' },
      { title: 'Terms of Service', description: 'Basic Terms of Service document.' },
    ],
    techStack: ['Legal Templates', 'OSS License Standards'],
    specifications: [
      { label: 'Documents', value: '3-4 documents' },
      { label: 'Delivery Time', value: '2-3 days' },
      { label: 'Format', value: 'TXT & MD' },
    ],
  },

  'monthly-maintenance-plan': {
    title: 'Monthly Maintenance Plan',
    tagline: 'Ongoing support and maintenance',
    price: '₹2,000 – ₹4,000 / month',
    description: [
      'Comprehensive ongoing support and maintenance to keep your website or app running smoothly.',
      'Includes regular updates, security patches, backups, and priority support.',
      'Perfect for businesses that want peace of mind with professional maintenance.',
    ],
    mechanism: {
      title: 'Maintenance Workflow',
      steps: [
        { title: 'Initial Audit', description: 'Complete audit and creating maintenance schedule.' },
        { title: 'Monitoring', description: 'Daily monitoring of uptime and performance.' },
        { title: 'Updates', description: 'Monthly security patches and bug fixes.' },
        { title: 'Reporting', description: 'Monthly reports on site health and metrics.' },
      ],
    },
    features: [
      { title: 'Security Updates', description: 'Regular security patches and vulnerability scanning.' },
      { title: 'Daily Backups', description: 'Automated daily backups with secure storage.' },
      { title: 'Performance Monitoring', description: 'Continuous monitoring of load times.' },
      { title: 'Priority Support', description: 'Direct access to support team.' },
    ],
    techStack: ['Monitoring Tools', 'Backup Systems', 'Security Scanners'],
    specifications: [
      { label: 'Updates', value: 'Weekly' },
      { label: 'Backups', value: 'Daily' },
      { label: 'Support', value: 'Priority' },
      { label: 'Reports', value: 'Monthly' },
    ],
  },

  'one-time-fix-update': {
    title: 'One-Time Fix/Update',
    tagline: 'Quick fixes and minor updates',
    price: '₹1,000 – ₹2,500',
    description: [
      'Quick turnaround service for minor bug fixes, feature updates, or optimizations.',
      'Perfect for small changes and emergency fixes without a maintenance contract.',
      'Fast turnaround within 24-48 hours for urgent issues.',
    ],
    mechanism: {
      title: 'Fix/Update Process',
      steps: [
        { title: 'Assessment', description: 'Understanding the problem and providing estimate.' },
        { title: 'Implementation', description: 'Implementing the fix efficiently.' },
        { title: 'Testing', description: 'Comprehensive testing across devices.' },
        { title: 'Deployment', description: 'Deploying changes to production.' },
      ],
    },
    features: [
      { title: 'Bug Fixes', description: 'Quick resolution of bugs and errors.' },
      { title: 'Minor Features', description: 'Small feature additions.' },
      { title: 'Performance Optimization', description: 'Speed improvements and optimization.' },
      { title: 'Quick Turnaround', description: 'Most fixes completed within 24-48 hours.' },
    ],
    techStack: ['Various (depends on project)'],
    specifications: [
      { label: 'Turnaround', value: '24-48 hours' },
      { label: 'Complexity', value: 'Simple to moderate' },
      { label: 'Support', value: '7 days' },
    ],
  },
};
