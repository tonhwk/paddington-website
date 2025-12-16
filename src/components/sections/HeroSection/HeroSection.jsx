import Button from '../../ui/Button'
import ContractAddress from '../../ui/ContractAddress'
import Icons from '../../ui/Icons'
import { CONTRACT_ADDRESS } from '../../../constants'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>Trustworthy Fake News & Memes</span>
        </div>
        
        <h1 className="hero-title">
          The <span className="highlight">Hard Stare</span> Revolution
        </h1>
        
        <p className="hero-subtitle">
          "This is not normal." - Paddington Bear, probably
        </p>
        
        <div className="hero-description">
          <p>
            When a polite British bear has had enough of modern absurdities, 
            bureaucratic nonsense, and cultural chaos - the hard stare becomes revolution.
          </p>
        </div>
        
        <ContractAddress 
          address={CONTRACT_ADDRESS} 
          title="Contract Address (Solana)"
        />

        <div className="cta-buttons">
          <Button
            variant="primary"
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Icons.Stack />}
          >
            Buy on Raydium
          </Button>
          
          <Button
            variant="secondary"
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Icons.TrendingUp />}
          >
            View Charts
          </Button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="paddington-stare">
          <div className="stare-text">*HARD STARE INTENSIFIES*</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection