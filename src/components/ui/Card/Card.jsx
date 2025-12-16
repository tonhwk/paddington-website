
const Card = ({ 
  children, 
  variant = 'default',
  size = 'md',
  hover = false,
  className = '',
  as = 'div',
  ...props 
}) => {
  const Component = as
  const classes = `card card--${variant} card--${size} ${hover ? 'card--hover' : ''} ${className}`

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Card