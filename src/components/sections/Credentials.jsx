import { TIMELINE, ACHIEVEMENTS } from '../../constants'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const Credentials = () => {
  return (
    <section id="credentials" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="Track Record" title={<>Experience &amp; Achievements</>} />

        <div className="grid-2col-start" style={{ marginTop: '56px' }}>
          {/* Timeline */}
          <div>
            <Reveal variant="up" as="p" className="section-subtitle" style={{ marginBottom: '32px' }}>
              A career spanning manufacturing, airports, aviation, hospitality, electric vehicles and technology, in both in-house and advisory capacities, over sixteen years.
            </Reveal>

            <div className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <Reveal
                  key={i}
                  variant="left"
                  delay={i * 90}
                  className="flex"
                  style={{ gap: '20px', paddingBottom: '32px', position: 'relative' }}
                >
                  {i < TIMELINE.length - 1 && (
                    <span
                      style={{ position: 'absolute', left: '19px', top: '40px', bottom: 0, width: '1px', background: 'var(--border)' }}
                    />
                  )}
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--navy)',
                      border: '2px solid var(--gold)',
                      zIndex: 1,
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--gold)',
                    }}
                  >
                    {item.dot}
                  </div>
                  <div>
                    <div className="uppercase" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 600, color: 'var(--gold)', marginBottom: '4px' }}>
                      {item.period}
                    </div>
                    <div className="font-cormorant" style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)' }}>
                      {item.org}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--charcoal-light)', marginTop: '2px' }}>
                      {item.role}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="flex flex-col" style={{ gap: '16px' }}>
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal
                key={i}
                variant="right"
                delay={i * 80}
                className="flex items-start"
                style={{
                  gap: '16px',
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--gold)',
                  padding: '20px 22px',
                  borderRadius: '3px',
                }}
              >
                <div
                  className="font-cormorant flex items-center justify-center shrink-0"
                  style={{ width: '36px', height: '36px', background: 'rgba(197,160,89,0.1)', borderRadius: '2px', fontSize: '18px', fontWeight: 700, color: 'var(--gold)' }}
                >
                  {a.icon}
                </div>
                <div style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--charcoal)' }}>
                  <strong style={{ display: 'block', color: 'var(--navy)', fontWeight: 600, marginBottom: '3px', fontSize: '13px' }}>
                    {a.title}
                  </strong>
                  {a.desc}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credentials
