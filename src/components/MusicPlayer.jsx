import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Pointing to a local file. The user needs to place their Telugu MP3 in the public folder.
  const audioRef = useRef(new Audio('/birthday.mp3'));

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
      audioRef.current.play().catch(e => console.log("Audio play failed, likely due to browser policy:", e));
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
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        zIndex: 100,
        borderRadius: '30px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>Background Music</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Music size={14} /> Gaaju Bomma 🎵
        </span>
      </div>
      
      <button 
        onClick={togglePlay}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: 'none',
          background: 'var(--color-primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(255, 75, 130, 0.4)'
        }}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
