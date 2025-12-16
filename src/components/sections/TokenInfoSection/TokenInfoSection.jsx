import Card from '../../ui/Card'
import { TOKENOMICS_DATA } from '../../../constants'

const TokenInfoSection = () => {
  return (
    <section id="token" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Token Information</h2>
        </div>
        
        <div className="grid grid--4">
          {TOKENOMICS_DATA.map((item, index) => (
            <Card key={index} hover className="token-card">
              <h3 className="token-card__title">{item.title}</h3>
              <p className="token-card__value">{item.value}</p>
              <small className="token-card__description">{item.description}</small>
            </Card>
          ))}
        </div>
        
        <Card variant="primary" size="lg" className="pump-info">
          <h3>Launched on Pump.fun</h3>
          <p>Community-driven, satirical, and absolutely ridiculous. Just how Paddington would want it.</p>
        </Card>
      </div>
    </section>
  )
}

export default TokenInfoSection