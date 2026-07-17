const TICKER_ITEMS = [
  'Corporate Advisory',
  'Company Secretarial',
  'Compliance & Governance',
  'Corporate Legal Advisory',
  'Banking & Finance Advisory',
  'FEMA, RBI & Foreign Investment',
  'Due Diligence & M&A',
  'Secretarial Audit',
  'Startups & MSME',
  'Treasury & Financial Support',
]

const Ticker = () => {
  // Duplicate so the -50% translate loops seamlessly
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="overflow-hidden"
      style={{ background: 'var(--navy)', padding: '14px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex ticker-animate" style={{ whiteSpace: 'nowrap' }}>
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center uppercase"
            style={{ gap: '16px', padding: '0 32px', fontSize: '10px', letterSpacing: '3px', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}
          >
            <span style={{ width: '4px', height: '4px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
