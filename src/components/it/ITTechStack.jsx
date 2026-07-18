import { IT_TECH_STACK } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ITTechStack = () => {
  return (
    <section id="technology" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="Our Toolkit" title="Technology Stack and Capabilities" />

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '56px' }}
        >
          {IT_TECH_STACK.map((group, i) => (
            <Reveal
              key={group.group}
              variant="up"
              delay={i * 80}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--gold)',
                borderRadius: '4px',
                padding: '30px 32px',
              }}
            >
              <div className="font-cormorant" style={{ fontSize: '21px', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px' }}>
                {group.group}
              </div>
              <ul className="flex flex-col" style={{ gap: '9px', listStyle: 'none' }}>
                {group.items.map(item => (
                  <li
                    key={item}
                    style={{ fontSize: '13px', color: 'var(--charcoal)', paddingLeft: '16px', position: 'relative', lineHeight: 1.6 }}
                  >
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
  )
}

export default ITTechStack
