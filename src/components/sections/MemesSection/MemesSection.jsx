import Card from '../../ui/Card'
import MemeImage from '../../ui/MemeImage'
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
              <MemeImage
                src={meme.image}
                alt={`Paddington meme: ${meme.title}`}
                quote={meme.quote}
                title={meme.title}
                memeId={meme.id}
              />
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