import { IT_INDUSTRIES } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ITIndustries = () => {
  return (
    <section id="industries" className="section" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="Where We Work" title="Industries We Serve" />

        <div className="industries-grid" style={{ marginTop: '56px' }}>
          {IT_INDUSTRIES.map((ind, i) => (
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

export default ITIndustries
