import { useState, useEffect, useRef } from 'react'
import AudioPrompt from './AudioPrompt'
import AudioControls from './AudioControls'
import AudioProgress from './AudioProgress'
import { AUDIO_PLAYLIST, AUDIO_CONFIG, AUDIO_STORAGE_KEY } from '../../../constants/audio'
import './AudioPlayer.css'

const AudioPlayer = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(AUDIO_CONFIG.volume)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)
  
  const audioRef = useRef(null)
  const progressIntervalRef = useRef(null)

  // Force autoplay attempt on page load
  useEffect(() => {
    // Try immediate autoplay
    if (AUDIO_CONFIG.autoPlay) {
      setIsEnabled(true)
      setIsPlaying(true)
      
      // Try to start audio immediately
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = AUDIO_CONFIG.volume
          audioRef.current.play()
            .then(() => {
              console.log('Autoplay successful')
            })
            .catch((error) => {
              console.log('Autoplay blocked by browser:', error)
              // Show prompt if autoplay fails
              setIsEnabled(false)
              setIsPlaying(false)
            })
        }
      }, 1000)
    }

    // Fallback: Check saved preference
    const savedPreference = localStorage.getItem(AUDIO_STORAGE_KEY)
    if (savedPreference === 'true') {
      setIsEnabled(true)
    }
  }, [])

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      // Auto-advance to next track for infinite loop
      const nextIndex = (currentTrackIndex + 1) % AUDIO_PLAYLIST.length
      setCurrentTrackIndex(nextIndex)
      
      // Ensure the next track starts playing automatically
      setTimeout(() => {
        if (audioRef.current && isPlaying) {
          audioRef.current.play().catch(console.error)
        }
      }, 100)
    }

    const handleCanPlayThrough = () => {
      if (isPlaying && isEnabled) {
        audio.play().catch(console.error)
      }
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('canplaythrough', handleCanPlayThrough)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('canplaythrough', handleCanPlayThrough)
    }
  }, [currentTrackIndex, isPlaying, isEnabled])

  // Progress tracking
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime)
        }
      }, 1000)
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [isPlaying])

  const enableAudio = () => {
    setIsEnabled(true)
    setIsPlaying(true)
    localStorage.setItem(AUDIO_STORAGE_KEY, 'true')
    
    // Start playing with fade-in effect
    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().then(() => {
        // Fade in
        let currentVolume = 0
        const fadeInterval = setInterval(() => {
          currentVolume += volume / (AUDIO_CONFIG.fadeInDuration / 50)
          if (currentVolume >= volume) {
            audioRef.current.volume = volume
            clearInterval(fadeInterval)
          } else {
            audioRef.current.volume = currentVolume
          }
        }, 50)
      }).catch(console.error)
    }
  }

  const togglePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(console.error)
    }
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % AUDIO_PLAYLIST.length
    setCurrentTrackIndex(nextIndex)
  }

  const previousTrack = () => {
    const prevIndex = currentTrackIndex === 0 
      ? AUDIO_PLAYLIST.length - 1 
      : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
  }

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleProgressChange = (newTime) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const currentTrack = AUDIO_PLAYLIST[currentTrackIndex]

  // Show initial prompt if audio not enabled
  if (!isEnabled) {
    return <AudioPrompt onEnable={enableAudio} />
  }

  return (
    <div className={`audio-player ${isMinimized ? 'audio-player--minimized' : ''}`}>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        volume={volume}
        preload="metadata"
      />
      
      <div className="audio-player__header">
        <div className="audio-player__track-info">
          <div className="audio-player__title">{currentTrack.title}</div>
          <div className="audio-player__track-number">
            Track {currentTrackIndex + 1} of {AUDIO_PLAYLIST.length}
          </div>
        </div>
        <button 
          className="audio-player__minimize"
          onClick={toggleMinimize}
          aria-label={isMinimized ? 'Expand player' : 'Minimize player'}
        >
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>

      {!isMinimized && (
        <>
          <AudioProgress 
            currentTime={currentTime}
            duration={duration}
            onProgressChange={handleProgressChange}
          />
          
          <AudioControls
            isPlaying={isPlaying}
            volume={volume}
            onPlayPause={togglePlayPause}
            onNext={nextTrack}
            onPrevious={previousTrack}
            onVolumeChange={handleVolumeChange}
          />
        </>
      )}
    </div>
  )
}

export default AudioPlayer