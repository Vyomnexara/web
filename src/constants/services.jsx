const ICONS = {
  startup: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  ),
  secretarial: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
  ),
  legal: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  ),
  governance: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  ),
  banking: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  ),
  crossborder: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  ),
  diligence: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  ),
  financial: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  ),
}

export const SERVICES = [
  {
    slug: 'startups-msme',
    icon: ICONS.startup,
    title: 'Start-Ups & MSME',
    desc: 'Company formation, statutory compliance and legal support built for early-stage and growth startups.',
    items: ['Private, Public and One Person Company registration', 'LLP, partnership firm and proprietorship setup', 'Udyam (MSME) registration and compliance', 'Startup India and DPIIT recognition', 'Government incentive and subsidy advisory', 'Delayed payment recovery and Samadhaan', 'Entity conversions across OPC, LLP and company', 'PAN, TAN, trade and other state registrations'],
  },
  {
    slug: 'corporate-secretarial',
    icon: ICONS.secretarial,
    title: 'Corporate Secretarial Services',
    desc: 'Company formation and full-scope secretarial function management across entity types, from incorporation to listing.',
    items: ['Incorporation and entity setup, including foreign subsidiaries', 'Secretarial Audit (Form MR-3)', 'Annual compliance and ROC filings', 'Board and shareholder meeting management', 'Listing compliance and XBRL filings', 'Charge creation, modification and management', 'Share capital restructuring and allotment', 'Maintenance of statutory registers and records'],
  },
  {
    slug: 'corporate-legal',
    icon: ICONS.legal,
    title: 'Corporate Legal Advisory',
    desc: 'Contracts, opinions and corporate legal support for boards, promoters and management teams.',
    items: ['Commercial and vendor contracts', "Shareholders' and founders' agreements", 'Joint venture and collaboration agreements', 'Employment, NDA and service level agreements', 'Legal opinions and memoranda', 'Legal due diligence', 'Representation before ROC, RD and Tribunals'],
  },
  {
    slug: 'governance-compliance-risk',
    icon: ICONS.governance,
    title: 'Governance, Compliance & Risk',
    desc: 'Board governance and the obligations that keep an enterprise compliant.',
    items: ['Board and committee structuring and charters', 'Secretarial Standards (SS-1, SS-2) implementation', 'Corporate governance policies and handbooks', 'MCA, ROC, SEBI, RBI and FEMA compliance', 'Labour law compliance support', 'Compliance dashboards and calendars', 'Enterprise risk management (ERM) frameworks'],
  },
  {
    slug: 'banking-finance',
    icon: ICONS.banking,
    title: 'Banking & Finance Advisory',
    desc: 'Documentation, compliance and correspondence for corporates, promoters and individuals.',
    items: ['Loan and project finance documentation', 'Security documentation and charge registration', 'Consortium and multiple banking arrangements', 'Credit monitoring and covenant tracking', 'Debt restructuring documentation support', 'Refinancing and interest reset review', 'KYC, NACH and mandate documentation'],
  },
  {
    slug: 'cross-border',
    icon: ICONS.crossborder,
    title: 'Cross Border — FEMA & RBI',
    desc: 'Foreign investment structuring, reporting and regulatory liaison for cross-border businesses.',
    items: ['Foreign Direct Investment (FDI) structuring and reporting', 'Overseas Direct Investment (ODI) advisory', 'External Commercial Borrowing (ECB) compliance', 'FC-GPR, FC-TRS and FLA reporting', 'Import Export Code (IEC) and DGFT liaison', 'FEMA health checks and compounding of contraventions', 'RBI approvals, reporting and inspection support'],
  },
  {
    slug: 'diligence-transactions-ma',
    icon: ICONS.diligence,
    title: 'Due Diligence, Transactions & M&A',
    desc: 'Diligence and transaction support across fundraising, restructuring and corporate events.',
    items: ['Legal and secretarial due diligence', 'Search and status reports for lenders', 'Red flag and gap analysis', 'Investment and fundraising documentation support', 'Merger, acquisition and restructuring support', 'Scheme and approval documentation', 'Post transaction integration and compliance'],
  },
  {
    slug: 'financial-support',
    icon: ICONS.financial,
    title: 'Financial Support Services',
    desc: 'Treasury, cost optimization and process improvement support for finance teams.',
    items: ['Cash flow forecasting and liquidity management', 'Working capital and fund flow optimization', 'Foreign exchange and hedging advisory', 'Cost benchmarking and vendor negotiation', 'Budgeting, forecasting and variance analysis', 'SOP design and internal controls', 'MIS and ERP implementation support'],
  },
]
