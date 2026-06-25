import React, { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import MemoryGallery from './components/MemoryGallery'
import VideoMemories from './components/VideoMemories'
import SpecialMessage from './components/SpecialMessage'
import CakeSection from './components/CakeSection'
import CelebrationSection from './components/CelebrationSection'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [loading, setLoading] = useState(true);

  const handleStartSurprise = () => {
    // Scroll to the next section smoothly
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <main>
          <HeroSection onStart={handleStartSurprise} />
          <SpecialMessage />
          <MemoryGallery />
          <VideoMemories />
          <CakeSection />
          <CelebrationSection />
          <MusicPlayer />
        </main>
      )}
    </>
  )
}

export default App
