import Reveal from '../ui/Reveal'

const CTABand = () => {
  return (
    <div style={{ background: 'var(--gold)', padding: '70px 5%' }}>
      <Reveal variant="up" className="cta-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="font-cormorant"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2, maxWidth: '580px' }}
        >
          Ready to build a <em style={{ fontStyle: 'italic' }}>durable, well governed</em> and future ready organisation?
        </div>
        <a href="#contact" className="btn-navy">Start a Conversation</a>
      </Reveal>
    </div>
  )
}

export default CTABand
