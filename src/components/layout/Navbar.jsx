import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../constants'
import { IT_NAV_LINKS } from '../../constants/it'
import { useIsIT } from '../../context/VerticalContext'

const LogoV = () => (
  <svg style={{ width: '36px', height: '44px', flexShrink: 0 }} viewBox="0 0 88 108" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 20,0 44,82 68,0 88,0 52,108 36,108" fill="#FFFFFF" />
    <polygon points="68,0 88,0 60,90 50,58" fill="#C5A059" />
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  /* Gates pointer events on the mobile panel until its slide-in has finished —
     see .nav-links.nav-ready in index.css. */
  const [menuReady, setMenuReady] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { pathname } = useLocation()
  const isIT = useIsIT()
  const home = isIT ? '/it' : '/'
  const links = isIT ? IT_NAV_LINKS : NAV_LINKS
  const servicesPath = isIT ? '/it/services' : '/services'
  const onHome = pathname === home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!onHome) return
    const sections = (isIT
      ? ['about', 'services', 'technology', 'industries', 'contact']
      : ['about', 'services', 'credentials', 'industries', 'contact'])
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
  }, [onHome, isIT])

  /* Arm the panel only after the 350ms slide completes; disarm immediately on
     close so a stale tap cannot reach it on the way out. */
  useEffect(() => {
    if (!menuOpen) {
      setMenuReady(false)
      return
    }
    const t = setTimeout(() => setMenuReady(true), 380)
    return () => clearTimeout(t)
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const isActive = href => {
    if (href === servicesPath) return pathname === servicesPath
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
      <Link to={home} className="nav-brand" onClick={close}>
        <LogoV />
        <div className="flex flex-col" style={{ lineHeight: 1.1 }}>
          <span className="font-cormorant" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '2px', color: 'var(--white)' }}>
            VYOMNEXARA
          </span>
          <span className="uppercase" style={{ fontSize: '9px', letterSpacing: '3px', fontWeight: 500, color: 'var(--gold)' }}>
            {isIT ? 'Information Technology' : 'Consulting LLP'}
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
        className={`nav-links${menuOpen ? ' open' : ''}${menuReady ? ' nav-ready' : ''}`}
        style={{ '--nav-top': scrolled ? '60px' : '68px' }}
      >
        {links.map(link => (
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
          <Link to={`${home}#contact`} onClick={close} className="nav-cta">
            Engage Us
          </Link>
        </li>
        <li>
          <Link
            to={isIT ? '/' : '/it'}
            onClick={close}
            className="nav-switch"
            title={isIT ? 'Switch to Corporate Advisory' : 'Switch to Information Technology'}
          >
            <span className="nav-switch-label">
              {isIT ? 'Corporate Advisory' : 'Information Technology'}
            </span>
            {/* Shown only in the tight 901–1010px band — see index.css */}
            <span className="nav-switch-short">{isIT ? 'Advisory' : 'IT'}</span>
            <span aria-hidden="true" style={{ marginLeft: '6px' }}>&#8646;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
