import { IT_ABOUT_PARAGRAPHS, IT_VISION_MISSION, IT_HERO } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ITAbout = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="section-inner">
        <SectionHeader
          eyebrow="Who We Are"
          title={<>Engineering Discipline,<br />Business Understanding.</>}
        />

        <div className="grid-2col-start" style={{ marginTop: '56px' }}>
          {/* Text column */}
          <Reveal variant="left">
            {IT_ABOUT_PARAGRAPHS.map((para, i) => (
              <p key={i} style={{ fontSize: '14px', lineHeight: 1.9, color: 'var(--charcoal)', marginBottom: '20px' }}>
                {para}
              </p>
            ))}
          </Reveal>

          {/* Capability pillars */}
          <Reveal
            variant="right"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', alignContent: 'start' }}
          >
            {IT_HERO.stats.map(pillar => (
              <div
                key={pillar.number}
                style={{
                  background: 'var(--navy)',
                  border: '1px solid rgba(197,160,89,0.15)',
                  borderRadius: '4px',
                  padding: '28px 24px',
                }}
              >
                <div className="font-cormorant" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--gold)', marginBottom: '8px' }}>
                  {pillar.number}
                </div>
                <p style={{ fontSize: '12px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
                  {pillar.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>
          {IT_VISION_MISSION.map((item, i) => (
            <Reveal
              key={item.heading}
              variant="up"
              delay={i * 120}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--gold)',
                borderRadius: '4px',
                padding: '32px 36px',
              }}
            >
              <div className="font-cormorant" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold)', marginBottom: '12px' }}>
                {item.heading}
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ITAbout
