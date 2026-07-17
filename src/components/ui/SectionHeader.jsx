import Reveal from './Reveal'

/**
 * Standard eyebrow + title (+ optional subtitle) header used across sections.
 * `light` switches title/subtitle colours for dark-background sections.
 */
const SectionHeader = ({ eyebrow, title, subtitle, light = false, titleStyle = {} }) => {
  return (
    <>
      <Reveal variant="up" className="section-eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal
        variant="up"
        delay={80}
        as="h2"
        className="section-title"
        style={{ color: light ? 'var(--white)' : 'var(--navy)', ...titleStyle }}
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          variant="up"
          delay={160}
          as="p"
          className="section-subtitle"
          style={light ? { color: 'rgba(255,255,255,0.55)' } : {}}
        >
          {subtitle}
        </Reveal>
      )}
    </>
  )
}

export default SectionHeader
