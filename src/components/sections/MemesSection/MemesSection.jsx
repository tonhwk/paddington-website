import Card from '../../ui/Card'
import { MEMES_DATA } from '../../../constants'

const MemesSection = () => {
  return (
    <section id="memes" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meme Gallery</h2>
          <p className="section-subtitle">Featuring the finest AI-generated Paddington reactions to world events</p>
        </div>
        
        <div className="grid grid--4">
          {MEMES_DATA.map((meme) => (
            <Card key={meme.id} variant="default" hover className="meme-card">
              <div className="meme-placeholder">
                <p className="meme-quote">"{meme.quote}"</p>
                <small className="meme-id">PADDINGTON MEME #{String(meme.id).padStart(3, '0')}</small>
              </div>
              <h4 className="meme-title">{meme.title}</h4>
            </Card>
          ))}
        </div>
        
        <Card variant="accent" size="md" className="meme-cta">
          <p>Got a spicy Paddington meme? Share it on Twitter!</p>
        </Card>
      </div>
    </section>
  )
}

export default MemesSection