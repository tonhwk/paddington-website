import './styles/index.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// UI Components  
import AudioPlayer from './components/ui/AudioPlayer'

// Section Components
import {
  HeroSection,
  LoreSection,
  MemesSection,
  TokenInfoSection,
  CommunitySection
} from './components/sections'

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <HeroSection />
        <LoreSection />
        <MemesSection />
        <TokenInfoSection />
        <CommunitySection />
      </main>
      
      <Footer />
      
      {/* Floating Audio Player */}
      <AudioPlayer />
    </div>
  )
}

export default App
