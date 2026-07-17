import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Wraps children in a scroll-revealed element.
 *
 * @param {('up'|'left'|'right'|'scale')} variant
 * @param {number} delay  - stagger delay in ms
 * @param {string} as     - element tag (default 'div')
 */
const VARIANT_CLASS = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

const Reveal = ({
  children,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  style = {},
  ...rest
}) => {
  const ref = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`${VARIANT_CLASS[variant]} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
