import { useState } from 'react'
import { COMPANY } from '../../constants'
import { useIsIT } from '../../context/VerticalContext'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const linkStyle = { color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }

const CONTACT_DETAILS = [
  {
    label: 'Registered Office',
    value: COMPANY.address,
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
  },
  {
    label: 'Phone',
    value: <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} style={linkStyle}>{COMPANY.phone}</a>,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
  },
  {
    label: 'Email',
    value: (
      <>
        <a href={`mailto:${COMPANY.email}`} style={linkStyle}>{COMPANY.email}</a>
        <br />
        <a href={`mailto:${COMPANY.emailPartner}`} style={linkStyle}>{COMPANY.emailPartner}</a>
      </>
    ),
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />,
  },
  {
    label: 'Website',
    value: <a href={`https://${COMPANY.website}`} style={linkStyle}>{COMPANY.website}</a>,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
  },
  {
    label: 'LinkedIn',
    value: <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>CS Raj Kiran B S</a>,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />,
  },
]

const FIELDS = [
  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name' },
  { id: 'company', label: 'Company / Organisation', type: 'text', placeholder: 'Company name' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
  { id: 'service', label: 'Service Required', type: 'text', placeholder: 'e.g. Secretarial retainer, FEMA advisory...' },
]

const inputBase = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(197,160,89,0.25)',
  color: 'var(--white)',
  padding: '12px 16px',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '13px',
  borderRadius: '2px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = { fontSize: '10px', letterSpacing: '2px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase' }

const Contact = () => {
  const isIT = useIsIT()
  const [form, setForm] = useState({ name: '', company: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState(null)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))
  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const borderFor = field => (errors[field] ? 'rgba(220,90,90,0.6)' : 'rgba(197,160,89,0.25)')

  const handleSubmit = () => {
    const errs = {}
    if (form.name.trim().length < 2) errs.name = true
    if (!isEmail(form.email.trim())) errs.email = true
    if (form.message.trim().length < 5) errs.message = true
    setErrors(errs)

    if (Object.keys(errs).length) {
      setFeedback({ type: 'error', text: 'Please enter your name, a valid email, and a short message before sending.' })
      return
    }

    const subject = `Website Enquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || 'N/A'}`,
      `Email: ${form.email}`,
      `Service Required: ${form.service || 'N/A'}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback({
      type: 'success',
      text: `Thank you, ${form.name}. Your email client is opening with the enquiry ready to send. If it does not, write to us directly at ${COMPANY.email}.`,
    })
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--navy)' }}>
      <div className="section-inner">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Engage Vyomnexara"
          subtitle={
            isIT
              ? 'Whether you need a new build, a dedicated team, an audit of an existing system, or ongoing managed support, reach out and we will revert within one business day.'
              : 'Whether you need ongoing retainer support, a Virtual Company Secretary, a project mandate, or a one-time advisory opinion, reach out and we will revert within one business day.'
          }
          light
        />

        <div className="grid-2col-start" style={{ marginTop: '56px' }}>
          {/* Form */}
          <Reveal variant="left" className="flex flex-col" style={{ gap: '16px' }}>
            {FIELDS.map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col" style={{ gap: '6px' }}>
                <label style={labelStyle}>{label}</label>
                <input
                  type={type}
                  placeholder={
                    id === 'service' && isIT
                      ? 'e.g. Web application, cloud migration, dashboards...'
                      : placeholder
                  }
                  value={form[id]}
                  onChange={set(id)}
                  style={{ ...inputBase, borderColor: borderFor(id) }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.target.style.borderColor = borderFor(id))}
                />
              </div>
            ))}

            <div className="flex flex-col" style={{ gap: '6px' }}>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Brief description of your requirement..."
                value={form.message}
                onChange={set('message')}
                style={{ ...inputBase, minHeight: '120px', resize: 'vertical', borderColor: borderFor('message') }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = borderFor('message'))}
              />
            </div>

            <button type="button" className="btn-primary" style={{ width: '100%' }} onClick={handleSubmit}>
              Send Enquiry
            </button>

            {feedback && (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: '14px 18px',
                  borderRadius: '2px',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  marginTop: '4px',
                  ...(feedback.type === 'success'
                    ? { background: 'rgba(197,160,89,0.12)', border: '1px solid var(--gold)', color: 'var(--gold-light)' }
                    : { background: 'rgba(220,90,90,0.1)', border: '1px solid rgba(220,90,90,0.5)', color: '#e89a9a' }),
                }}
              >
                {feedback.text}
              </div>
            )}
          </Reveal>

          {/* Details */}
          <Reveal variant="right" className="flex flex-col" style={{ gap: '28px' }}>
            {CONTACT_DETAILS.filter(d => !(isIT && d.label === 'LinkedIn')).map(({ label, value, icon }) => (
              <div key={label} className="flex items-start" style={{ gap: '16px' }}>
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: '44px', height: '44px', border: '1px solid var(--border)', borderRadius: '2px' }}
                >
                  <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--gold)" fill="none" style={{ width: '20px', height: '20px' }}>
                    {icon}
                  </svg>
                </div>
                <div>
                  <div className="uppercase" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 600, color: 'var(--gold)', marginBottom: '4px' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>{value}</div>
                </div>
              </div>
            ))}

            {!isIT && (
              <div style={{ marginTop: '8px', padding: '20px 22px', border: '1px solid rgba(197,160,89,0.2)', borderLeft: '3px solid var(--gold)', borderRadius: '3px' }}>
                <div className="uppercase" style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--gold)', fontWeight: 600, marginBottom: '8px' }}>
                  LLPIN
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                  To be assigned upon completion of incorporation with MCA.
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
