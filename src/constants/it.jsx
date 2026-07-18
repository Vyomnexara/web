/* Content for the IT Consulting vertical (Vyomnexara Information Technology).
   Mirrors the shape of ../constants/index.js so the shared section components
   can render either vertical from context. */

const ICONS = {
  software: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  ),
  application: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  ),
  website: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  ),
  database: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
  ),
  dashboard: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  ),
  process: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V3m0 3a3 3 0 100 6 3 3 0 000-6zm0 12a3 3 0 100-6 3 3 0 000 6zm0 0v3m-6.364-3.636l2.121-2.121M4.5 12h3m-3 0H3m2.636-6.364l2.121 2.121M18.364 5.636l-2.121 2.121M19.5 12h-3m3 0H21m-2.636 6.364l-2.121-2.121" />
  ),
  consulting: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  ),
}

export const IT_COMPANY = {
  name: 'Vyomnexara Information Technology',
  short: 'Information Technology',
  tagline: 'Envision. Execute. Excel.',
}

export const IT_NAV_LINKS = [
  { label: 'About', href: '/it#about' },
  { label: 'Services', href: '/it/services' },
  { label: 'Technology', href: '/it#technology' },
  { label: 'Industries', href: '/it#industries' },
]

export const IT_HERO = {
  eyebrow: 'Bengaluru, India',
  subtitle: 'Software Development · Web and Applications · Data and IT Consulting',
  intro:
    'Vyomnexara Information Technology is the technology vertical of the Vyomnexara group, a Bengaluru based firm delivering software development, web and application engineering, database and data solutions and IT consulting to startups, enterprises and growing businesses.',
  stats: [
    { number: 'Full Stack', label: 'End to End Software, Web and Data Delivery' },
    { number: 'Agile', label: 'Iterative and Transparent Delivery Model' },
    { number: 'Secure', label: 'Security and Quality Built Into Every Build' },
    { number: 'Scalable', label: 'Cloud Ready Solutions That Grow With You' },
  ],
}

export const IT_TICKER_ITEMS = [
  'Software Development',
  'Web Applications',
  'Mobile Applications',
  'Website Creation',
  'Database Optimization',
  'Cloud & DevOps',
  'Dashboards & BI',
  'Process Automation',
  'IT Consulting',
  'Managed Support',
]

export const IT_ABOUT_PARAGRAPHS = [
  'Vyomnexara Information Technology is the technology vertical of the Vyomnexara group, a Bengaluru based firm delivering software development, web and application engineering, database and data solutions and IT consulting to startups, enterprises and growing businesses.',
  'We design, build and maintain software that is practical, secure and scalable. From custom applications and websites to database optimization, dashboards and process automation, we bring engineering discipline and business understanding together under one roof.',
  'Our approach is outcome driven. We combine modern engineering practices, clean architecture and clear communication so that technology stays reliable, delivery stays predictable and management can stay focused on the business.',
]

export const IT_VISION_MISSION = [
  {
    heading: 'Vision',
    text: 'To be a trusted technology partner that helps businesses build reliable, secure and future ready digital solutions.',
  },
  {
    heading: 'Mission',
    text: 'To deliver well engineered software, web and data solutions through a transparent, process driven approach that keeps our clients productive, informed and ready to scale.',
  },
]

export const IT_VALUES = [
  { letter: 'I', title: 'Innovation', desc: 'We embrace modern tools and practices to solve problems in better ways.' },
  { letter: 'Q', title: 'Quality', desc: 'We hold our code and delivery to high engineering and testing standards.' },
  { letter: 'S', title: 'Security', desc: 'We build with data protection and security in mind at every layer.' },
  { letter: 'C', title: 'Client Focus', desc: 'We listen first and shape our work around real business objectives.' },
  { letter: 'I', title: 'Integrity', desc: 'We act with honesty and transparency across every engagement.' },
  { letter: 'C', title: 'Continuous Learning', desc: 'We keep pace with a fast changing technology landscape.' },
]

export const IT_WHY_CARDS = [
  { num: '01', title: 'Business First Engineering', desc: 'We start from your objectives, not just the technology, so solutions fit the business.' },
  { num: '02', title: 'Full Stack Capability', desc: 'Software, web, mobile, databases and dashboards handled by one team, reducing hand offs.' },
  { num: '03', title: 'Process Driven Delivery', desc: 'Clear scope, sprints, checklists and documentation keep delivery predictable.' },
  { num: '04', title: 'Secure and Reliable', desc: 'Security, testing and code quality are built in, not bolted on.' },
  { num: '05', title: 'Scalable Architecture', desc: 'Cloud ready, modular builds that grow with your users and your data.' },
  { num: '06', title: 'Long Term Support', desc: 'From build to deployment, maintenance and enhancements, we stay with you.' },
]

export const IT_METHODOLOGY = [
  { num: '01', title: 'Discover', desc: 'We understand your business, goals, users and requirements.' },
  { num: '02', title: 'Design', desc: 'We design the architecture, data model and user experience.' },
  { num: '03', title: 'Develop', desc: 'We build in agile sprints with clean, reviewed and tested code.' },
  { num: '04', title: 'Test', desc: 'We run quality assurance, security and performance testing.' },
  { num: '05', title: 'Deploy', desc: 'We release to production with a smooth, monitored rollout.' },
  { num: '06', title: 'Support', desc: 'We maintain, monitor and enhance as your business evolves.' },
]

/* Technology stack — reflects the marked-up profile: native mobile retained,
   Java/Spring, .NET/C# and Power BI/Tableau removed. */
export const IT_TECH_STACK = [
  { group: 'Front End', items: ['HTML5 and CSS3', 'JavaScript and TypeScript', 'React and Next.js', 'Angular and Vue', 'Tailwind and Bootstrap'] },
  { group: 'Back End', items: ['Node.js and Express', 'Python and Django', 'PHP and Laravel'] },
  { group: 'Mobile', items: ['Android (Kotlin)', 'iOS (Swift)', 'Flutter'] },
  { group: 'Databases', items: ['MySQL and PostgreSQL', 'MongoDB', 'SQL Server', 'Redis and caching'] },
  { group: 'Cloud and DevOps', items: ['AWS, Azure and GCP', 'Docker and containers', 'CI / CD pipelines', 'Git and version control'] },
  { group: 'Data and BI', items: ['Python for analytics', 'ETL and pipelines', 'REST and GraphQL APIs'] },
]

export const IT_INDUSTRIES = [
  {
    name: 'Technology and Startups',
    items: ['SaaS and Software', 'FinTech', 'E-commerce', 'EdTech', 'Startups'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />,
  },
  {
    name: 'Financial Services',
    items: ['Banking', 'NBFC', 'Insurance', 'Payments and FinTech'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />,
  },
  {
    name: 'Retail and Consumer',
    items: ['Retail', 'E-commerce and D2C', 'Hospitality', 'Consumer brands'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12A1.125 1.125 0 0119.75 22H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />,
  },
  {
    name: 'Healthcare and Education',
    items: ['Healthcare and HealthTech', 'Education and E-learning', 'Clinics and diagnostics'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  },
  {
    name: 'Manufacturing and Logistics',
    items: ['Manufacturing', 'Supply chain', 'Logistics', 'EV and mobility'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
  },
  {
    name: 'Professional and Public',
    items: ['Professional services', 'Real estate', 'NGOs and Section 8', 'Government and public sector'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />,
  },
]

/* Services — each maps to a spread in the corporate profile deck.
   Struck-through deck items (RPA, CMS/WordPress, Shopify/WooCommerce,
   KPI dashboards, Power BI/Tableau) are omitted. */
export const IT_SERVICES = [
  {
    slug: 'software-development',
    icon: ICONS.software,
    title: 'Software Development',
    desc: 'Custom software engineered to fit your business and built to scale.',
    items: [
      'Custom software design and development',
      'Enterprise and business applications',
      'SaaS product development',
      'API design and integration',
      'Microservices and modular architecture',
      'Legacy system modernization',
      'Requirement analysis and solution design',
      'Agile development and sprints',
      'Code review and quality assurance',
      'Automated and manual testing',
      'ERP and CRM customization',
      'Workflow and approval systems',
      'Inventory and order management',
      'Document and content management',
      'Third party system integration',
      'Role based access and security',
      'Reporting and audit trails',
      'Deployment and rollout support',
    ],
  },
  {
    slug: 'application-development',
    icon: ICONS.application,
    title: 'Application Development',
    desc: 'Responsive web and mobile applications that people love to use.',
    items: [
      'Single page applications (SPA)',
      'Progressive web apps (PWA)',
      'Admin panels and dashboards',
      'Customer and vendor portals',
      'Real time and interactive apps',
      'Responsive UI development',
      'UI / UX design and prototyping',
      'Accessibility and performance tuning',
      'Android and iOS applications',
      'Cross platform apps (Flutter)',
      'App store deployment support',
      'Push notifications and integrations',
      'App maintenance and updates',
      'Performance monitoring',
      'Version and release management',
    ],
  },
  {
    slug: 'website-creation',
    icon: ICONS.website,
    title: 'Website Creation',
    desc: 'Websites and digital storefronts that represent your brand and convert.',
    items: [
      'Corporate and business websites',
      'Landing pages and microsites',
      'Blog and content platforms',
      'Website redesign and migration',
      'SEO ready development',
      'Speed and performance tuning',
      'Responsive, mobile first design',
      'Online stores and product catalogs',
      'Payment gateway integration',
      'Cart, checkout and order flows',
      'Content management setup',
      'Domain, hosting and SSL setup',
      'Analytics and tracking integration',
    ],
  },
  {
    slug: 'database-cloud',
    icon: ICONS.database,
    title: 'Database and Cloud',
    desc: 'Fast, reliable and well structured data and infrastructure.',
    items: [
      'Database design and data modelling',
      'Query and performance optimization',
      'Indexing and tuning',
      'Data migration and integration',
      'Backup and recovery setup',
      'SQL and NoSQL databases',
      'Database security and access control',
      'Monitoring and health checks',
      'Cloud migration and setup (AWS, Azure, GCP)',
      'Server configuration and management',
      'CI / CD pipeline setup',
      'Containerization (Docker)',
      'Deployment automation',
      'Monitoring, logging and alerts',
      'Cost and performance optimization',
    ],
  },
  {
    slug: 'dashboards-data',
    icon: ICONS.dashboard,
    title: 'Dashboards and Data',
    desc: 'Turn your data into clear, actionable dashboards and insights.',
    items: [
      'Interactive business dashboards',
      'Real time data visualization',
      'Automated report generation',
      'MIS and management reporting',
      'Role based data views',
      'Data warehouse and pipeline setup',
      'ETL and data integration',
      'Data cleaning and transformation',
      'API and third party data feeds',
      'Trend and performance analysis',
      'Data driven decision support',
      'Custom analytics solutions',
    ],
  },
  {
    slug: 'process-improvement',
    icon: ICONS.process,
    title: 'Process Improvement',
    desc: 'Automate repetitive work and streamline how your business runs.',
    items: [
      'Workflow automation',
      'Business process automation (BPA)',
      'Task and approval automation',
      'Notification and alert systems',
      'Manual process digitization',
      'Form and document automation',
      'Scheduled jobs and batch processing',
      'System and API integration',
      'Data synchronization across tools',
      'ERP, CRM and tool connectivity',
      'Process mapping and analysis',
      'Efficiency and bottleneck reviews',
      'Standard operating procedures (SOPs)',
    ],
  },
  {
    slug: 'it-consulting-support',
    icon: ICONS.consulting,
    title: 'IT Consulting and Support',
    desc: 'Guidance, maintenance and support across your technology stack.',
    items: [
      'Technology strategy and roadmap',
      'Architecture and solution consulting',
      'Digital transformation advisory',
      'Technology selection and evaluation',
      'IT audit and process review',
      'Requirement and feasibility studies',
      'Project scoping and estimation',
      'Vendor and tool evaluation',
      'Application maintenance and support',
      'Bug fixes and enhancements',
      'Managed IT services',
      'SLA based support',
      'Monitoring and uptime management',
      'Security patches and updates',
      'Documentation and knowledge transfer',
    ],
  },
]

export const IT_ENGAGEMENT_MODELS = [
  {
    title: 'Ongoing Partnership',
    items: ['Dedicated team and managed services', 'Monthly maintenance and enhancements', 'SLA based support and monitoring'],
  },
  {
    title: 'Project Based',
    items: ['Fixed scope builds and rollouts', 'Architecture and technology consulting', 'Audits, migrations and modernization'],
  },
]
