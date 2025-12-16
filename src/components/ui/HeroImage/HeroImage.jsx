import Image from '../Image'
import './HeroImage.css'

const HeroImage = ({ 
  src, 
  alt = "Paddington Bear", 
  showFallback = true,
  caption 
}) => {
  return (
    <div className="hero-image">
      <div className="hero-image__container">
        {src ? (
          <Image
            src={src}
            alt={alt}
            className="hero-image__img"
            loading="eager" // Hero images should load immediately
          />
        ) : showFallback ? (
          <div className="hero-image__fallback">
            <div className="hero-image__fallback-text">THE STARE</div>
          </div>
        ) : null}
        
        {caption && (
          <div className="hero-image__caption">
            {caption}
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroImage