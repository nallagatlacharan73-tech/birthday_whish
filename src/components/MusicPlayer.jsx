import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Pointing to a local file. The user needs to place their Telugu MP3 in the public folder.
  const audioRef = useRef(new Audio("/birthday.mp3"));

  useEffect(() => {
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((e) =>
          console.log("Audio play failed, likely due to browser policy:", e),
        );
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="glass-panel"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "14px 22px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        zIndex: 100,
        borderRadius: "30px",
        flexDirection: "column",
        minWidth: "260px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          For You, With Love
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.9rem",
                color: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: "700",
              }}
            >
              <Music size={16} /> Gaaju Bomma
            </span>
            <p
              style={{
                margin: "6px 0 0",
                fontSize: "0.78rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.4,
              }}
            >
              Every note is a wish, every word is for you.
            </p>
          </div>

          <button
            onClick={togglePlay}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              background: "var(--color-primary)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(255, 75, 130, 0.35)",
            }}
          >
            {isPlaying ? (
              <Pause size={18} />
            ) : (
              <Play size={18} style={{ marginLeft: "2px" }} />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
