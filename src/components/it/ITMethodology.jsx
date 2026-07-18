import { IT_METHODOLOGY } from '../../constants/it'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const ITMethodology = () => {
  return (
    <section id="methodology" className="section" style={{ background: 'var(--navy)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="How We Deliver" title="Our Delivery Methodology" light />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px 56px', marginTop: '56px' }}>
          {IT_METHODOLOGY.map((step, i) => (
            <Reveal key={step.num} variant="up" delay={i * 80} className="flex items-start" style={{ gap: '20px' }}>
              <div className="font-cormorant shrink-0" style={{ fontSize: '40px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                {step.num}
              </div>
              <div>
                <div className="font-cormorant" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ITMethodology
