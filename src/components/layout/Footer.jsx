const Footer = () => {
  return (
    <footer style={{ background: '#050e1f', padding: '32px 5%', borderTop: '1px solid rgba(197,160,89,0.15)' }}>
      <div
        className="flex items-center justify-between flex-wrap"
        style={{ maxWidth: '1200px', margin: '0 auto', gap: '16px' }}
      >
        <div className="font-cormorant" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '1px', color: 'var(--white)' }}>
          VYOMNEXARA <span style={{ color: 'var(--gold)' }}>CONSULTING LLP</span>
        </div>

        <div className="text-center" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
          &copy; 2026 Vyomnexara Consulting LLP. All rights reserved.<br />
          Regulated by the Institute of Company Secretaries of India.
        </div>

        <div className="text-right" style={{ fontSize: '10px', letterSpacing: '1px', color: 'rgba(255,255,255,0.3)' }}>
          Langford Town, Bengaluru 560 025<br />
          Karnataka, India
        </div>
      </div>

      <div
        className="text-center"
        style={{ maxWidth: '900px', margin: '20px auto 0', fontSize: '10px', lineHeight: 1.7, color: 'rgba(255,255,255,0.25)' }}
      >
        Disclaimer: This website is issued for general information about the firm and the services it offers. It is not a solicitation of work and does not constitute professional advice.
      </div>
    </footer>
  )
}

export default Footer
