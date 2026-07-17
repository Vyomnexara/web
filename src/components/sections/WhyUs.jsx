import { WHY_CARDS } from '../../constants'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const WhyUs = () => {
  return (
    <section id="why" className="section" style={{ background: 'var(--navy)' }}>
      <div className="section-inner">
        <SectionHeader eyebrow="The Difference" title="Why Work With Vyomnexara" light />

        <div className="why-grid" style={{ marginTop: '56px' }}>
          {WHY_CARDS.map((card, i) => (
            <Reveal
              key={card.num}
              variant="up"
              delay={i * 100}
              style={{ background: 'var(--navy)', padding: '40px 28px', border: '1px solid rgba(197,160,89,0.1)', transition: 'background 0.2s, opacity 0.7s, transform 0.7s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(22,45,94,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy)')}
            >
              <div className="font-cormorant" style={{ fontSize: '56px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, marginBottom: '16px' }}>
                {card.num}
              </div>
              <div className="uppercase" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '1px', color: 'var(--white)', marginBottom: '10px' }}>
                {card.title}
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.55)' }}>
                {card.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
