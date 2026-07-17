import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../constants'

const LogoV = () => (
  <svg style={{ width: '36px', height: '44px', flexShrink: 0 }} viewBox="0 0 88 108" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 20,0 44,82 68,0 88,0 52,108 36,108" fill="#FFFFFF" />
    <polygon points="68,0 88,0 60,90 50,58" fill="#C5A059" />
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
    const sections = ['about', 'services', 'credentials', 'industries', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [onHome])

  const close = () => setMenuOpen(false)
  const isActive = href => {
    if (href === '/services') return pathname === '/services'
    return onHome && href.includes('#') && activeSection === href.split('#')[1]
  }

  return (
    <nav
      className="site-nav"
      style={{
        background: scrolled ? 'rgba(11,27,61,1)' : 'rgba(11,27,61,0.97)',
        height: scrolled ? '60px' : '68px',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      {/* Brand */}
      <Link to="/" className="nav-brand" onClick={close}>
        <LogoV />
        <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
          <span className="font-cormorant" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '2px', color: 'var(--white)' }}>
            VYOMNEXARA
          </span>
          <span className="uppercase" style={{ fontSize: '9px', letterSpacing: '3px', fontWeight: 500, color: 'var(--gold)' }}>
            Consulting LLP
          </span>
        </div>
      </Link>

      {/* Hamburger toggle (mobile only — shown/hidden purely via CSS) */}
      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {/* Nav links — desktop row / mobile drop panel, controlled by CSS only */}
      <ul
        className={`nav-links${menuOpen ? ' open' : ''}`}
        style={{ '--nav-top': scrolled ? '60px' : '68px' }}
      >
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <Link
              to={link.href}
              onClick={close}
              className="nav-link"
              style={{ color: isActive(link.href) ? 'var(--gold)' : 'rgba(255,255,255,0.75)' }}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/#contact" onClick={close} className="nav-cta">
            Engage Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
