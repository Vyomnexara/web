import { Link } from 'react-router-dom'
import { IT_SERVICES } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ServiceTile = ({ service, index }) => {
  const onEnter = e => {
    e.currentTarget.style.borderBottomColor = 'var(--gold)'
    e.currentTarget.style.transform = 'translateY(-2px)'
  }
  const onLeave = e => {
    e.currentTarget.style.borderBottomColor = 'transparent'
    e.currentTarget.style.transform = 'none'
  }

  return (
    <Reveal
      variant="scale"
      delay={index * 70}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        background: 'var(--white)',
        borderBottom: '3px solid transparent',
        transition: 'border-color 0.25s, transform 0.25s, opacity 0.7s, transform 0.7s',
      }}
    >
      <Link
        to={`/it/services#${service.slug}`}
        className="flex items-center"
        style={{ gap: '18px', padding: '26px 28px', textDecoration: 'none' }}
      >
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: '44px', height: '44px', background: 'var(--navy)', borderRadius: '2px' }}
        >
          <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--gold)" fill="none" style={{ width: '22px', height: '22px' }}>
            {service.icon}
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div className="font-cormorant" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.25 }}>
            {service.title}
          </div>
        </div>
        <span style={{ color: 'var(--gold)', fontSize: '18px', lineHeight: 1 }} aria-hidden="true">
          &rarr;
        </span>
      </Link>
    </Reveal>
  )
}

const ITServices = () => {
  return (
    <section id="services" className="section" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <div className="grid-2col-end" style={{ marginBottom: '56px' }}>
          <div>
            <SectionHeader eyebrow="What We Do" title="Our Service Lines" />
          </div>
          <Reveal variant="up" delay={160} as="p" className="section-subtitle">
            Software development, web and mobile applications, websites, databases and cloud, dashboards and data, process automation and IT consulting — delivered by one team, end to end.
          </Reveal>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2px',
            background: 'rgba(11,27,61,0.08)',
            border: '2px solid rgba(11,27,61,0.08)',
          }}
        >
          {IT_SERVICES.map((service, i) => (
            <ServiceTile key={service.slug} service={service} index={i} />
          ))}
        </div>

        <Reveal variant="up" delay={200} className="text-center" style={{ marginTop: '40px' }}>
          <Link to="/it/services" className="btn-navy">
            Explore All Services in Detail
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default ITServices
