const STATS = [
  { number: <>16+</>, label: 'Years of Professional Experience of Founder' },
  { number: <>FCS</>, label: 'Fellow Member of the Institute of Company Secretaries of India' },
  { number: <>Multi</>, label: 'Multi-Disciplinary Corporate Practice' },
  { number: <>Diverse</>, label: 'Startups to Listed MNCs · NBFC, Tech, Aviation & EV' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ background: 'var(--navy)', minHeight: '100vh', padding: '100px 5% 60px' }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          right: '-80px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Giant V watermark */}
      <div
        className="absolute pointer-events-none font-cormorant font-bold select-none"
        style={{
          right: '4%',
          bottom: '-40px',
          fontSize: 'clamp(220px, 30vw, 420px)',
          fontWeight: 700,
          letterSpacing: '-10px',
          color: 'rgba(197,160,89,0.04)',
          lineHeight: 1,
        }}
      >
        V
      </div>

      <div
        className="mx-auto w-full grid-2col relative z-10"
        style={{ maxWidth: '1200px' }}
      >
        {/* ── Left column ── */}
        <div className="hero-left">
          <div
            className="hero-in flex items-center gap-3 uppercase"
            style={{ '--hero-delay': '0ms', fontSize: '10px', letterSpacing: '4px', fontWeight: 600, color: 'var(--gold)', marginBottom: '20px' }}
          >
            <span className="block" style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            Bengaluru, India
          </div>

          <h1
            className="hero-in font-cormorant"
            style={{ '--hero-delay': '120ms', fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--white)', marginBottom: '20px' }}
          >
            Envision. Execute.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Excel.</em>
          </h1>

          <div
            className="hero-in uppercase"
            style={{ '--hero-delay': '180ms', fontSize: '11px', letterSpacing: '3px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '20px' }}
          >
            Corporate Advisory &middot; Company Secretarial &middot; Compliance and Governance
          </div>

          <p
            className="hero-in"
            style={{ '--hero-delay': '240ms', fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: '40px', maxWidth: '480px' }}
          >
            Vyomnexara Consulting LLP is a Bengaluru based professional services firm offering corporate advisory, company secretarial, corporate legal and compliance services to companies, limited liability partnerships, startups and growing enterprises.
          </p>

          <div className="hero-in flex gap-4 flex-wrap" style={{ '--hero-delay': '360ms' }}>
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-ghost">Schedule a Consultation</a>
          </div>
        </div>

        {/* ── Right column: stats ── */}
        <div
          className="hero-in grid overflow-hidden"
          style={{
            '--hero-delay': '480ms',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            background: 'rgba(197,160,89,0.15)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{ background: 'rgba(11,27,61,0.6)', padding: '32px 28px', border: '1px solid rgba(197,160,89,0.08)' }}
            >
              <div className="font-cormorant" style={{ fontSize: '48px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                {stat.number}
              </div>
              <div className="uppercase" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
