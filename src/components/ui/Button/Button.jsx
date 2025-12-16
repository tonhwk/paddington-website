
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  href,
  target,
  rel,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = `btn btn--${variant} btn--${size} ${className}`

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button