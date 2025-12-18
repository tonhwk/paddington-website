import Icons from '../Icons'

const AudioPrompt = ({ onEnable }) => {
  return (
    <div className="audio-prompt">
      <div className="audio-prompt__content">
        <div className="audio-prompt__icon">
          <Icons.Stack size={20} />
        </div>
        <div className="audio-prompt__text">
          <span className="audio-prompt__title">Enable Audio Experience</span>
          <span className="audio-prompt__subtitle">Hard Stare Soundtrack</span>
        </div>
        <button 
          className="audio-prompt__button"
          onClick={onEnable}
          aria-label="Enable background audio"
        >
          🎵
        </button>
      </div>
    </div>
  )
}

export default AudioPrompt