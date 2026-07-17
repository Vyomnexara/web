import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const INDUSTRIES = [
  {
    name: 'Technology and Digital',
    items: ['Information Technology', 'SaaS', 'AI and Technology', 'FinTech', 'E-commerce', 'Media and Entertainment'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />,
  },
  {
    name: 'Industrial and Energy',
    items: ['Manufacturing', 'Automobile', 'EV', 'Aerospace', 'Renewable Energy'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
  },
  {
    name: 'Life Sciences and Consumer',
    items: ['Healthcare', 'Agriculture', 'Retail', 'Hospitality', 'Food Processing', 'Textiles'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
  },
  {
    name: 'Infrastructure and Real Estate',
    items: ['Construction', 'Infrastructure', 'Real Estate', 'Logistics'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />,
  },
  {
    name: 'Financial Services',
    items: ['Banking', 'NBFC', 'FinTech'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />,
  },
  {
    name: 'Emerging and Social',
    items: ['Startups', 'Family Businesses', 'Education', 'NGOs and Section 8 Companies'],
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
  },
]

const Industries = () => {
  return (
    <section id="industries" className="section" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="Where We Work" title="Industries We Serve" />

        <div className="industries-grid" style={{ marginTop: '56px' }}>
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              variant="scale"
              delay={i * 70}
              className="text-center"
              style={{ background: 'var(--white)', padding: '32px 24px', transition: 'background 0.2s, opacity 0.7s, transform 0.7s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--off-white)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--white)')}
            >
              <div
                className="flex items-center justify-center"
                style={{ width: '52px', height: '52px', background: 'var(--navy)', borderRadius: '50%', margin: '0 auto 14px' }}
              >
                <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--gold)" fill="none" style={{ width: '24px', height: '24px' }}>
                  {ind.icon}
                </svg>
              </div>
              <div className="uppercase" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1px', color: 'var(--navy)', marginBottom: '10px' }}>
                {ind.name}
              </div>
              <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--charcoal-light)' }}>
                {ind.items.join(' · ')}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
