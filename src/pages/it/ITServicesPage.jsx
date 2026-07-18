import { Link } from 'react-router-dom'
import { IT_SERVICES, IT_ENGAGEMENT_MODELS } from '../../constants/it'
import Reveal from '../../components/ui/Reveal'

const ServiceCard = ({ service, index }) => {
  return (
    <Reveal
      variant="up"
      delay={(index % 2) * 90}
      id={service.slug}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderBottom: '3px solid var(--gold)',
        borderRadius: '4px',
        padding: '40px 36px',
        scrollMarginTop: '90px',
      }}
    >
      <div className="flex items-center" style={{ gap: '16px', marginBottom: '18px' }}>
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: '48px', height: '48px', background: 'var(--navy)', borderRadius: '2px' }}
        >
          <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--gold)" fill="none" style={{ width: '24px', height: '24px' }}>
            {service.icon}
          </svg>
        </div>
        <div className="font-cormorant" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
          {service.title}
        </div>
      </div>

      <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--charcoal-light)', marginBottom: '22px' }}>
        {service.desc}
      </p>

      <ul className="flex flex-col" style={{ gap: '8px', listStyle: 'none' }}>
        {service.items.map(item => (
          <li key={item} style={{ fontSize: '13px', color: 'var(--charcoal)', paddingLeft: '16px', position: 'relative', lineHeight: 1.6 }}>
            <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '1px', background: 'var(--gold)' }} />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

const ITServicesPage = () => {
  return (
    <main>
      {/* Page header */}
      <section style={{ background: 'var(--navy)', padding: '140px 5% 70px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="flex items-center gap-3 uppercase"
            style={{ fontSize: '10px', letterSpacing: '4px', fontWeight: 600, color: 'var(--gold)', marginBottom: '20px' }}
          >
            <span className="block" style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            What We Do
          </div>
          <h1
            className="font-cormorant"
            style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--white)', marginBottom: '20px' }}
          >
            Our <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Services</em>
          </h1>
          <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '640px' }}>
            Software development, web and mobile applications, websites and digital storefronts, databases and cloud infrastructure, dashboards and data, process automation and IT consulting — engineered to fit the business and built to scale.
          </p>
        </div>
      </section>

      {/* Detailed service cards */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {IT_SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section" style={{ background: 'var(--white)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {IT_ENGAGEMENT_MODELS.map((model, i) => (
              <Reveal
                key={model.title}
                variant="up"
                delay={i * 90}
                style={{ background: 'var(--white)', border: '1px solid var(--border)', borderTop: '3px solid var(--gold)', borderRadius: '4px', padding: '32px 36px' }}
              >
                <div className="font-cormorant" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
                  {model.title}
                </div>
                <ul className="flex flex-col" style={{ gap: '8px', listStyle: 'none' }}>
                  {model.items.map(item => (
                    <li key={item} style={{ fontSize: '13px', color: 'var(--charcoal)', paddingLeft: '16px', position: 'relative', lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, top: '10px', width: '6px', height: '1px', background: 'var(--gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: 'var(--gold)', padding: '56px 5%' }}>
        <div className="cta-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            className="font-cormorant"
            style={{ fontSize: 'clamp(24px, 2.6vw, 36px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2, maxWidth: '580px' }}
          >
            Not sure which service fits? <em style={{ fontStyle: 'italic' }}>Talk to us.</em>
          </div>
          <Link to="/it#contact" className="btn-navy">Get in Touch</Link>
        </div>
      </div>
    </main>
  )
}

export default ITServicesPage
