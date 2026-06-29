import React, { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import MemoryGallery from "./components/MemoryGallery";
import VideoMemories from "./components/VideoMemories";
import SpecialMessage from "./components/SpecialMessage";
import CakeSection from "./components/CakeSection";
import CelebrationSection from "./components/CelebrationSection";
import MusicPlayer from "./components/MusicPlayer";
import CartoonCharacters from "./components/CartoonCharacters";
function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleScrollButton = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleScrollButton);
    toggleScrollButton();

    return () => window.removeEventListener("scroll", toggleScrollButton);
  }, []);

  const handleStartSurprise = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <div className="celebration-banner" role="status" aria-live="polite">
            <span>✨ Today is your day ✨</span>
            <span>Let this page glow just for you</span>
          </div>

          <div className="sparkle-layer" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={index} className={`sparkle sparkle-${index + 1}`}>
                ✦
              </span>
            ))}
          </div>

          <main>
            <HeroSection onStart={handleStartSurprise} />
            <SpecialMessage />
            <CartoonCharacters />
            <MemoryGallery />
            <VideoMemories />
            <CakeSection />
            <CelebrationSection />
            <MusicPlayer />
          </main>

          <button
            type="button"
            className={`scroll-top-button ${showScrollTop ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </>
      )}
    </>
  );
}

export default App;
