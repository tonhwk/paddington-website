import Icons from '../Icons'

const AudioControls = ({ 
  isPlaying, 
  volume, 
  onPlayPause, 
  onNext, 
  onPrevious, 
  onVolumeChange 
}) => {
  return (
    <div className="audio-controls">
      <div className="audio-controls__playback">
        <button 
          className="audio-controls__button audio-controls__button--small"
          onClick={onPrevious}
          aria-label="Previous track"
        >
          ⏮
        </button>
        
        <button 
          className="audio-controls__button audio-controls__button--main"
          onClick={onPlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>
        
        <button 
          className="audio-controls__button audio-controls__button--small"
          onClick={onNext}
          aria-label="Next track"
        >
          ⏭
        </button>
      </div>

      <div className="audio-controls__volume">
        <span className="audio-controls__volume-icon">
          {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="audio-controls__volume-slider"
          aria-label="Volume control"
        />
        <span className="audio-controls__volume-value">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </div>
  )
}

export default AudioControls