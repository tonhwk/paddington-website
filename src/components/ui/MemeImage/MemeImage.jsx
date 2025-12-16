import Image from '../Image'
import './MemeImage.css'

const MemeImage = ({ 
  src, 
  alt, 
  quote,
  title,
  memeId,
  showFallback = true 
}) => {
  return (
    <div className="meme-image">
      <div className="meme-image__container">
        {src ? (
          <Image
            src={src}
            alt={alt}
            className="meme-image__img"
            loading="lazy"
          />
        ) : showFallback ? (
          <div className="meme-image__placeholder">
            <div className="meme-image__quote">"{quote}"</div>
            <div className="meme-image__id">PADDINGTON MEME #{String(memeId).padStart(3, '0')}</div>
          </div>
        ) : null}
        
        {src && (
          <div className="meme-image__overlay">
            <div className="meme-image__quote">"{quote}"</div>
          </div>
        )}
      </div>
      
      <div className="meme-image__title">{title}</div>
    </div>
  )
}

export default MemeImage