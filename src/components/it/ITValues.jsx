import { IT_VALUES } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ITValues = () => {
  return (
    <section id="values" className="section" style={{ background: 'var(--white)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="What Guides Us" title="Core Values" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 48px', marginTop: '56px' }}>
          {IT_VALUES.map((value, i) => (
            <Reveal key={value.title} variant="up" delay={i * 80} className="flex items-start" style={{ gap: '18px' }}>
              <div
                className="font-cormorant flex items-center justify-center shrink-0"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--navy)',
                  border: '2px solid var(--gold)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--gold)',
                }}
              >
                {value.letter}
              </div>
              <div>
                <div className="font-cormorant" style={{ fontSize: '19px', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                  {value.title}
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--charcoal-light)' }}>
                  {value.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ITValues
