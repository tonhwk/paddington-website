export const AUDIO_PLAYLIST = [
  {
    id: 1,
    title: "Marmalade Menace (feat. The Brown Family)",
    src: "/audio/Marmalademenace.mp3", // Replace with your MP3 filename
    duration: null // Will be auto-detected
  },
  {
    id: 2,
    title: "Duffel Coat On (feat. Nicki Minaj)", 
    src: "/audio/duffelcoaton.mp3", // Replace with your MP3 filename
    duration: null
  }
]

export const AUDIO_CONFIG = {
  autoPlay: true,            // Force autoplay attempt
  loop: true,               // Loop entire playlist
  volume: 0.3,              // Default volume (30%)
  fadeInDuration: 2000,     // 2 second fade-in
  crossFadeDuration: 1000,  // 1 second crossfade between tracks
  enableVisualizer: false   // Future feature
}

export const AUDIO_STORAGE_KEY = 'paddington-audio-enabled'