import QuoteForm from './quote-form';

export async function generateStaticParams() {
    const services = [
        'website-design-basic',
        'website-design-premium',
        'landing-page-promo-product',
        'domain-hosting-setup',
        'react-native-app-basic',
        'react-native-app-advanced',
        'progressive-web-app',
        'n8n-automation-setup',
        'ai-agent-chatbot-assistant',
        'quantalyze-audit-engine',
        'mini-game-web',
        'mobile-game-react-native',
        'analytics-dashboard',
        'export-engine',
        'dockerized-vps-setup',
        'ci-cd-pipeline',
        'privacy-policy',
        'license-attribution',
        'monthly-maintenance-plan',
        'one-time-fix-update',
        'privacy-policy-hindi-eng',
    ];

    return services.map((service) => ({
        service: service,
    }));
}

const serviceConfigs: Record<string, { title: string; fields: Array<{name: string, type: string, label: string, required?: boolean, options?: string[]}> }> = {
    'website-design-basic': {
        title: 'Website Design — Basic',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name' },
            { name: 'websiteType', type: 'select', label: 'Website Type', options: ['Business Website', 'Personal Portfolio', 'Blog', 'E-commerce', 'Other'], required: true },
            { name: 'pages', type: 'number', label: 'Number of Pages Needed', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹5,000 - ₹10,000', '₹10,000 - ₹15,000', '₹15,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Specific Requirements', required: true }
        ]
    },
    'website-design-premium': {
        title: 'Website Design — Premium',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'industry', type: 'select', label: 'Industry', options: ['Technology', 'E-commerce', 'Healthcare', 'Education', 'Finance', 'Other'], required: true },
            { name: 'pages', type: 'number', label: 'Number of Pages Needed', required: true },
            { name: 'cms', type: 'select', label: 'CMS Required', options: ['WordPress', 'Custom CMS', 'Headless', 'No CMS'], required: true },
            { name: 'multilang', type: 'select', label: 'Multilanguage Support', options: ['Yes', 'No'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹15,000 - ₹20,000', '₹20,000 - ₹25,000', '₹25,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Specific Requirements & Features', required: true }
        ]
    },
    'landing-page-promo-product': {
        title: 'Landing Page (Promo/Product)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'product', type: 'text', label: 'Product/Service Name', required: true },
            { name: 'goal', type: 'select', label: 'Primary Goal', options: ['Lead Generation', 'Product Launch', 'Event Promotion', 'Newsletter Signup', 'Other'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹4,000 - ₹5,000', '₹5,000 - ₹6,000', '₹6,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Specific Requirements', required: true }
        ]
    },
    'domain-hosting-setup': {
        title: 'Domain + Hosting Setup',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'domain', type: 'text', label: 'Desired Domain Name', required: true },
            { name: 'hostingType', type: 'select', label: 'Hosting Type', options: ['Shared Hosting', 'VPS', 'Dedicated Server', 'Cloud Hosting'], required: true },
            { name: 'ssl', type: 'select', label: 'SSL Certificate', options: ['Basic SSL', 'Wildcard SSL', 'EV SSL'], required: true },
            { name: 'emailAccounts', type: 'number', label: 'Number of Email Accounts Needed', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Setup Date' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹2,000 - ₹2,500', '₹2,500 - ₹3,000', '₹3,000 - ₹3,500', '₹3,500+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'react-native-app-basic': {
        title: 'React Native App — Basic',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'appType', type: 'select', label: 'App Type', options: ['Business App', 'E-commerce App', 'Social App', 'Utility App', 'Other'], required: true },
            { name: 'platforms', type: 'select', label: 'Target Platforms', options: ['iOS & Android', 'iOS Only', 'Android Only'], required: true },
            { name: 'screens', type: 'number', label: 'Number of Screens Needed', required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹12,000 - ₹15,000', '₹15,000 - ₹18,000', '₹18,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'react-native-app-advanced': {
        title: 'React Native App — Advanced',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'appType', type: 'select', label: 'App Type', options: ['Business App', 'E-commerce App', 'Social App', 'Utility App', 'Gaming App', 'Other'], required: true },
            { name: 'platforms', type: 'select', label: 'Target Platforms', options: ['iOS & Android', 'iOS Only', 'Android Only'], required: true },
            { name: 'screens', type: 'number', label: 'Number of Screens Needed', required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required (Push notifications, auth, analytics, etc.)', required: true },
            { name: 'backend', type: 'select', label: 'Backend Requirements', options: ['API Development', 'Database Setup', 'Authentication System', 'Full Backend'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹25,000 - ₹30,000', '₹30,000 - ₹35,000', '₹35,000 - ₹40,000', '₹40,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'progressive-web-app': {
        title: 'Progressive Web App (PWA)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'appType', type: 'select', label: 'App Type', options: ['Business App', 'E-commerce App', 'Social App', 'Utility App', 'Productivity App', 'Other'], required: true },
            { name: 'screens', type: 'number', label: 'Number of Screens Needed', required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required (offline support, push notifications, etc.)', required: true },
            { name: 'platforms', type: 'select', label: 'Target Platforms', options: ['Mobile & Desktop', 'Mobile Only', 'Desktop Only'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹10,000 - ₹12,000', '₹12,000 - ₹15,000', '₹15,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'n8n-automation-setup': {
        title: 'n8n Automation Setup',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'workflows', type: 'textarea', label: 'Describe the Workflows to Automate', required: true },
            { name: 'integrations', type: 'textarea', label: 'Required Integrations (e.g., APIs, tools)', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹5,000 - ₹6,000', '₹6,000 - ₹7,000', '₹7,000 - ₹8,000', '₹8,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'ai-agent-chatbot-assistant': {
        title: 'AI Agent (Chatbot/Assistant)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'agentType', type: 'select', label: 'Agent Type', options: ['Chatbot', 'Voice Assistant', 'Text Assistant', 'Hybrid'], required: true },
            { name: 'integration', type: 'select', label: 'Integration Platform', options: ['Website', 'App', 'Social Media', 'API', 'Other'], required: true },
            { name: 'trainingData', type: 'textarea', label: 'Training Data Description', required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹12,000 - ₹15,000', '₹15,000 - ₹18,000', '₹18,000 - ₹20,000', '₹20,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'quantalyze-audit-engine': {
        title: 'Quantalyze Audit Engine',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'auditType', type: 'select', label: 'Audit Type', options: ['Website Audit', 'App Audit', 'Business Process Audit', 'Compliance Audit', 'Other'], required: true },
            { name: 'dataSources', type: 'textarea', label: 'Data Sources to Analyze', required: true },
            { name: 'reportFrequency', type: 'select', label: 'Report Frequency', options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'On-Demand'], required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required (analytics, alerts, etc.)', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹8,000 - ₹10,000', '₹10,000 - ₹12,000', '₹12,000 - ₹15,000', '₹15,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'mini-game-web': {
        title: 'Mini Game (Web)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'gameType', type: 'select', label: 'Game Type', options: ['Puzzle', 'Action', 'Arcade', 'Trivia', 'Other'], required: true },
            { name: 'platforms', type: 'select', label: 'Target Platforms', options: ['Web Only', 'Mobile Web', 'Both'], required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹6,000 - ₹7,000', '₹7,000 - ₹8,000', '₹8,000 - ₹10,000', '₹10,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'mobile-game-react-native': {
        title: 'Mobile Game (React Native)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'gameType', type: 'select', label: 'Game Type', options: ['Puzzle', 'Action', 'Arcade', 'Trivia', 'Racing', 'Other'], required: true },
            { name: 'platforms', type: 'select', label: 'Target Platforms', options: ['iOS & Android', 'iOS Only', 'Android Only'], required: true },
            { name: 'monetization', type: 'select', label: 'Monetization Model', options: ['Ads', 'In-App Purchases', 'Freemium', 'Paid'], required: true },
            { name: 'features', type: 'textarea', label: 'Key Features Required', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹15,000 - ₹18,000', '₹18,000 - ₹20,000', '₹20,000 - ₹25,000', '₹25,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'analytics-dashboard': {
        title: 'Analytics Dashboard',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'dataSources', type: 'textarea', label: 'Data Sources to Integrate', required: true },
            { name: 'chartTypes', type: 'textarea', label: 'Required Chart Types (e.g., bar, line, pie)', required: true },
            { name: 'exportFormats', type: 'select', label: 'Export Formats Needed', options: ['PDF', 'DOCX', 'CSV', 'All'], required: true },
            { name: 'filters', type: 'textarea', label: 'Filtering Options Required', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹10,000 - ₹12,000', '₹12,000 - ₹15,000', '₹15,000 - ₹18,000', '₹18,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'export-engine': {
        title: 'Export Engine',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'inputFormat', type: 'select', label: 'Input Format', options: ['Markdown', 'HTML', 'JSON', 'Other'], required: true },
            { name: 'outputFormats', type: 'select', label: 'Output Formats', options: ['PDF', 'DOCX', 'Both'], required: true },
            { name: 'templates', type: 'textarea', label: 'Template Requirements', required: true },
            { name: 'integrations', type: 'textarea', label: 'Required Integrations (e.g., APIs, databases)', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹4,000 - ₹5,000', '₹5,000 - ₹6,000', '₹6,000 - ₹7,000', '₹7,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'dockerized-vps-setup': {
        title: 'Dockerized VPS Setup',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'vpsType', type: 'select', label: 'VPS Type', options: ['Shared Hosting', 'VPS', 'Dedicated Server', 'Cloud Hosting'], required: true },
            { name: 'ssl', type: 'select', label: 'SSL Required', options: ['Yes', 'No'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹5,000 - ₹6,000', '₹6,000 - ₹7,000', '₹7,000 - ₹8,000', '₹8,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'ci-cd-pipeline': {
        title: 'CI/CD Pipeline',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'tools', type: 'select', label: 'Preferred Tools', options: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Other'], required: true },
            { name: 'features', type: 'textarea', label: 'Required Features (versioning, rollback, etc.)', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹3,000 - ₹4,000', '₹4,000 - ₹5,000', '₹5,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'privacy-policy': {
        title: 'Privacy Policy (Hindi/Eng)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'languages', type: 'select', label: 'Languages Required', options: ['English', 'Hindi', 'Both'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹1,500 - ₹2,000', '₹2,000 - ₹2,500', '₹2,500 - ₹3,000', '₹3,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'license-attribution': {
        title: 'License & Attribution',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'licenseType', type: 'select', label: 'License Type', options: ['Open Source', 'Commercial', 'Custom'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹1,000 - ₹1,500', '₹1,500 - ₹2,000', '₹2,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'monthly-maintenance-plan': {
        title: 'Monthly Maintenance Plan',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'planType', type: 'select', label: 'Plan Type', options: ['Basic', 'Standard', 'Premium'], required: true },
            { name: 'duration', type: 'select', label: 'Duration', options: ['1 Month', '3 Months', '6 Months', '1 Year'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Start Date' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹2,000 - ₹3,000', '₹3,000 - ₹4,000', '₹4,000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'one-time-fix-update': {
        title: 'One-Time Fix/Update',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'description', type: 'textarea', label: 'Description of Fix/Update', required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹1,000 - ₹1,500', '₹1,500 - ₹2,000', '₹2,000 - ₹2,500', '₹2,500+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    },
    'privacy-policy-hindi-eng': {
        title: 'Privacy Policy (Hindi/Eng)',
        fields: [
            { name: 'name', type: 'text', label: 'Full Name', required: true },
            { name: 'email', type: 'email', label: 'Email Address', required: true },
            { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
            { name: 'company', type: 'text', label: 'Company Name', required: true },
            { name: 'languages', type: 'select', label: 'Languages Required', options: ['English', 'Hindi', 'Both'], required: true },
            { name: 'deadline', type: 'date', label: 'Preferred Deadline' },
            { name: 'budget', type: 'select', label: 'Budget Range', options: ['₹1500 - ₹2000', '₹2000 - ₹2500', '₹2500 - ₹3000', '₹3000+'], required: true },
            { name: 'requirements', type: 'textarea', label: 'Additional Requirements', required: true }
        ]
    }
};

export default async function ServiceQuote({ params }: { params: Promise<{ service: string }> }) {
    const { service } = await params;
    const serviceConfig = serviceConfigs[service];

    return <QuoteForm serviceConfig={serviceConfig} service={service} />;
}
