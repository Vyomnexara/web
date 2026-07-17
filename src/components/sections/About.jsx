import { FOUNDER, VISION_MISSION } from '../../constants'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

const PARAGRAPHS = [
  'Vyomnexara Consulting LLP is a Bengaluru based professional services firm offering corporate advisory, company secretarial, corporate legal and compliance services to companies, limited liability partnerships, startups and growing enterprises.',
  'The firm is led by a Fellow Member of the Institute of Company Secretaries of India and brings corporate governance, secretarial practice, banking and finance advisory and regulatory support together under one roof. We work with founders, boards, promoters and finance teams to build sound governance foundations, keep statutory compliance current, and support key corporate events across the business lifecycle, from incorporation to fundraising and beyond.',
  'Our approach is practical and process driven. We combine a working understanding of the Companies Act 2013, the LLP Act 2008, FEMA, SEBI and RBI regulations and allied laws with hands-on execution, so that compliance stays predictable and management can stay focused on the business.',
]

const About = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--off-white)' }}>
      <div className="section-inner">
        <SectionHeader
          eyebrow="About the Firm"
          title={<>Institutional Expertise,<br />Independent Practice.</>}
        />

        <div className="grid-2col-start" style={{ marginTop: '56px' }}>
          {/* Text column */}
          <Reveal variant="left">
            {PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                style={{ fontSize: '14px', lineHeight: 1.9, color: 'var(--charcoal)', marginBottom: '20px' }}
              >
                {para}
              </p>
            ))}
          </Reveal>

          {/* Founder card */}
          <Reveal
            variant="right"
            style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}
          >
            {/* Header band */}
            <div className="flex items-center gap-5" style={{ background: 'var(--navy)', padding: '32px' }}>
              <div
                className="font-cormorant flex items-center justify-center shrink-0"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  border: '2px solid var(--gold)',
                  background: 'var(--navy-mid)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'var(--gold)',
                }}
              >
                {FOUNDER.initials}
              </div>
              <div>
                <div className="font-cormorant" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1 }}>
                  {FOUNDER.name}
                </div>
                <div className="uppercase" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: 500, color: 'var(--gold)', marginTop: '4px' }}>
                  {FOUNDER.title}
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--charcoal)', marginBottom: '20px' }}>
                {FOUNDER.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {FOUNDER.chips.map(chip => (
                  <span
                    key={chip}
                    className="uppercase"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: '2px',
                      background: 'rgba(11,27,61,0.07)',
                      color: 'var(--navy)',
                      border: '1px solid rgba(11,27,61,0.12)',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}
        >
          {VISION_MISSION.map((item, i) => (
            <Reveal
              key={item.heading}
              variant="up"
              delay={i * 120}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--gold)',
                borderRadius: '4px',
                padding: '32px 36px',
              }}
            >
              <div className="font-cormorant" style={{ fontSize: '24px', fontWeight: 700, color: 'var(--gold)', marginBottom: '12px' }}>
                {item.heading}
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--charcoal)' }}>
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
