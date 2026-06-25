import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 800); // Wait a bit before completing
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--color-bg-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Heart size={64} color="var(--color-primary)" fill="var(--color-primary)" className="text-glow" />
        </motion.div>
        
        <div style={{ marginTop: '2rem', width: '200px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
          <motion.div
            style={{ height: '100%', background: 'linear-gradient(to right, var(--color-primary), var(--color-accent))' }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '1rem', color: 'var(--color-text-muted)', letterSpacing: '2px', fontSize: '0.9rem' }}
        >
          PREPARING YOUR SURPRISE... {progress}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
