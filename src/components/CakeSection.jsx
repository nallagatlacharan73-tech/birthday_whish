import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame } from 'lucide-react';

const CakeSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [candlesBlown, setCandlesBlown] = useState(false);

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem' }} className="text-gradient">
          Make a Wish
        </h2>

        <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
          
          {/* Candles */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '-10px', zIndex: 10 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AnimatePresence mode='wait'>
                  {!candlesBlown && (
                    <motion.div
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 0.5 + Math.random() }}
                        style={{ color: '#ff9d00', filter: 'drop-shadow(0 0 10px #ff9d00)' }}
                      >
                        <Flame size={30} fill="#ff9d00" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div style={{ width: '12px', height: '40px', background: 'linear-gradient(to bottom, #f0f0f0, #d0d0d0)', borderRadius: '6px', border: '1px solid #ccc' }} />
              </div>
            ))}
          </div>

          {/* Cake Tiers */}
          <motion.div 
            style={{ width: '160px', height: '60px', background: 'var(--color-primary)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', position: 'relative', zIndex: 2, borderBottom: '5px solid rgba(0,0,0,0.1)' }}
          />
          <motion.div 
            style={{ width: '220px', height: '80px', background: 'var(--color-secondary)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', position: 'relative', zIndex: 1, borderBottom: '5px solid rgba(0,0,0,0.2)' }}
          />
          
          {/* Plate */}
          <div style={{ width: '280px', height: '20px', background: '#e0e0e0', borderRadius: '50%', marginTop: '-10px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} />

        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          onClick={() => setCandlesBlown(true)}
          className="glass-button"
          style={{ marginTop: '3rem' }}
          disabled={candlesBlown}
        >
          {candlesBlown ? 'Wish Made! ✨' : 'Blow the Candles'}
        </motion.button>
      </motion.div>
    </section>
  );
};

// Quick fix for AnimatePresence inside CakeSection
import { AnimatePresence } from 'framer-motion';

export default CakeSection;
