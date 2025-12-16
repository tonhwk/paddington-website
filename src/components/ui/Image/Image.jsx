const Image = ({ 
  src, 
  alt, 
  className = '', 
  fallback = null,
  loading = 'lazy',
  ...props 
}) => {
  const handleError = (e) => {
    if (fallback) {
      e.target.src = fallback
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={handleError}
      className={`image ${className}`}
      {...props}
    />
  )
}

export default Image