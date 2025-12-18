const AudioProgress = ({ currentTime, duration, onProgressChange }) => {
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleProgressClick = (e) => {
    if (!duration) return
    
    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    
    onProgressChange(newTime)
  }

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0

  return (
    <div className="audio-progress">
      <span className="audio-progress__time audio-progress__time--current">
        {formatTime(currentTime)}
      </span>
      
      <div 
        className="audio-progress__bar"
        onClick={handleProgressClick}
        role="slider"
        aria-valuemin="0"
        aria-valuemax={duration || 0}
        aria-valuenow={currentTime}
        aria-label="Audio progress"
      >
        <div className="audio-progress__track">
          <div 
            className="audio-progress__fill"
            style={{ width: `${progressPercentage}%` }}
          />
          <div 
            className="audio-progress__handle"
            style={{ left: `${progressPercentage}%` }}
          />
        </div>
      </div>
      
      <span className="audio-progress__time audio-progress__time--duration">
        {formatTime(duration)}
      </span>
    </div>
  )
}

export default AudioProgress