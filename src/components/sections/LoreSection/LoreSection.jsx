import Card from '../../ui/Card'
import { LORE_CARDS } from '../../../constants'

const LoreSection = () => {
  return (
    <section id="lore" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Satirical Thesis</h2>
        </div>

        <Card variant="primary" size="lg" className="main-thesis">
          <h3>"Aunt Lucy said if we're kind and polite, the world will be right..."</h3>
          <p>But what happens when kindness meets bureaucratic madness? When politeness encounters cultural chaos? 
          When a bear from Peru watches the world lose its marbles?</p>
          <p><strong>Paddington gives his legendary hard stare.</strong></p>
        </Card>

        <div className="grid grid--3">
          {LORE_CARDS.map((card, index) => (
            <Card key={index} hover className="lore-card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>

        <Card variant="accent" size="lg" className="manifesto">
          <h3>The Paddington Manifesto</h3>
          <p>This is satire. This is absurdism. This is a polite British bear having an existential crisis 
          about modernity while clutching a marmalade sandwich. $PADDINGTON is the people's coin for those 
          who understand that sometimes the only rational response to an irrational world is a hard stare.</p>
        </Card>
      </div>
    </section>
  )
}

export default LoreSection