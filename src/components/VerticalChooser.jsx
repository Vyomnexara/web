import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LogoMark = () => (
  <svg style={{ width: '54px', height: '66px' }} viewBox="0 0 88 108" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 20,0 44,82 68,0 88,0 52,108 36,108" fill="#FFFFFF" />
    <polygon points="68,0 88,0 60,90 50,58" fill="#C5A059" />
  </svg>
)

const VERTICALS = [
  {
    key: 'advisory',
    path: '/',
    label: 'Corporate Advisory',
    sub: 'Vyomnexara Consulting LLP',
    desc: 'Company secretarial, corporate legal, compliance and governance, banking and finance advisory, and cross-border regulatory support.',
    tags: ['Company Secretarial', 'Compliance & Governance', 'Banking & Finance'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    ),
  },
  {
    key: 'it',
    path: '/it',
    label: 'Information Technology',
    sub: 'Vyomnexara Information Technology',
    desc: 'Custom software, web and mobile applications, databases and cloud, dashboards and data, process automation and IT consulting.',
    tags: ['Software Development', 'Web & Applications', 'Data & Cloud'],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    ),
  },
]

/* Full-screen vertical chooser shown on each fresh visit to the site root.
   Deep links into either vertical bypass it entirely. */
const VerticalChooser = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(pathname === '/')
  const [leaving, setLeaving] = useState(false)
  const [chosen, setChosen] = useState(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = overflow }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') choose(VERTICALS[0]) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  const choose = vertical => {
    if (leaving) return
    setChosen(vertical.key)
    setLeaving(true)
    // Let the selection animation play out before routing away.
    setTimeout(() => {
      if (vertical.path !== pathname) navigate(vertical.path)
      setOpen(false)
    }, 720)
  }

  return (
    <div
      className={`vc-overlay${leaving ? ' vc-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose a business vertical"
    >
      <div className="vc-glow" />

      <div className="vc-inner">
        <div className="vc-brand">
          <LogoMark />
          <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
            <span className="font-cormorant vc-wordmark">VYOMNEXARA</span>
            <span className="vc-tagline">Envision. Execute. Excel.</span>
          </div>
        </div>

        <div className="vc-prompt">Select a practice to continue</div>

        <div className="vc-grid">
          {VERTICALS.map((v, i) => (
            <button
              key={v.key}
              type="button"
              className="vc-card"
              style={{ '--vc-delay': `${i * 130 + 220}ms` }}
              onClick={() => choose(v)}
              onMouseEnter={() => setHovered(v.key)}
              onMouseLeave={() => setHovered(null)}
              data-state={chosen ? (chosen === v.key ? 'chosen' : 'dismissed') : undefined}
              data-dimmed={hovered && hovered !== v.key ? 'true' : undefined}
              disabled={leaving}
            >
              <span className="vc-sheen" aria-hidden="true" />

              <span className="vc-icon">
                <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none">
                  {v.icon}
                </svg>
              </span>

              <span className="font-cormorant vc-card-title">{v.label}</span>
              <span className="vc-card-sub">{v.sub}</span>
              <span className="vc-card-desc">{v.desc}</span>

              <span className="vc-tags">
                {v.tags.map((t, ti) => (
                  <span key={t} className="vc-tag" style={{ '--vc-tag-delay': `${ti * 60}ms` }}>
                    {t}
                  </span>
                ))}
              </span>

              <span className="vc-enter">
                Enter{' '}
                <span className="vc-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </button>
          ))}
        </div>

        <div className="vc-foot">Bengaluru, India</div>
      </div>
    </div>
  )
}

export default VerticalChooser
