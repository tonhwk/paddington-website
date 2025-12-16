import { useState } from 'react'
import { NAVIGATION_LINKS } from '../../../constants'
import Icons from '../../ui/Icons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>$PADDINGTON</h1>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}>
          {NAVIGATION_LINKS.map((link) => (
            link.locked ? (
              <div 
                key={link.href}
                className="nav-link nav-link--locked"
                title="Coming Soon"
              >
                <Icons.Lock size={14} />
                <span>{link.label}</span>
                <span className="nav-link__status">Coming Soon</span>
              </div>
            ) : (
              <a 
                key={link.href} 
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
              </a>
            )
          ))}
        </div>

        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </nav>
    </header>
  )
}

export default Header