import Card from '../../ui/Card'
import { COMMUNITY_STATS, SOCIAL_LINKS } from '../../../constants'

const CommunitySection = () => {
  return (
    <section id="community" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join the Hard Stare Community</h2>
        </div>
        
        <div className="community-stats">
          {COMMUNITY_STATS.map((stat, index) => (
            <Card key={index} hover className="stat-card">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </Card>
          ))}
        </div>
        
        <div className="social-links-grid">
          {SOCIAL_LINKS.map((social) => (
            <Card 
              key={social.id} 
              as="a" 
              href={social.href}
              hover 
              className="social-card"
            >
              <div className="social-header">{social.shortLabel}</div>
              <h4 className="social-title">{social.label}</h4>
              <p className="social-description">{social.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunitySection