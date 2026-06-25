import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Camera } from 'lucide-react';

const photos = [
  { 
    id: 1, 
    url: '/memory1.png',
    alt: 'Chill Maar Vibes 😎',
    label: 'Chill Maar 😎'
  },
  { 
    id: 2, 
    url: '/memory2.jpg',
    alt: 'Purple Cat Ears ✨',
    label: 'Purple Vibes ✨'
  },
  { 
    id: 3, 
    url: '/memory3.jpg',
    alt: 'Cat Filter Fun 🐱',
    label: 'Cat Filter Fun 🐱'
  },
  { 
    id: 4, 
    url: '/memory4.jpg',
    alt: 'Birthday Cake Cutting 🎂',
    label: 'Birthday Celebration 🎂'
  },
];

const MemoryGallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section ref={ref} className="section-padding" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📸</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem' }} className="text-gradient">
            Our Beautiful Memories
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', letterSpacing: '1px' }}>
            Click any photo to view it full screen
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          padding: '0 10px'
        }}>
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelectedPhoto(photo)}
              style={{ 
                height: '380px',
                borderRadius: '20px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                border: '2px solid rgba(255, 75, 130, 0.2)',
                position: 'relative',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  objectPosition: 'center top',
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.15)',
                  display: 'block'
                }} 
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,5,16,0.85) 0%, rgba(10,5,16,0.1) 50%, transparent 100%)',
              }} />
              {/* Label */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'white',
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                fontFamily: 'var(--font-handwriting)',
                letterSpacing: '0.5px',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                padding: '0 12px'
              }}>
                {photo.label}
              </div>
              {/* Pink glow on hover */}
              <motion.div
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid var(--color-primary)',
                  borderRadius: '20px',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  boxShadow: 'inset 0 0 20px rgba(255,75,130,0.3)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Note to add real photos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            padding: '12px 24px',
            background: 'rgba(255, 75, 130, 0.08)',
            borderRadius: '12px',
            border: '1px dashed rgba(255, 75, 130, 0.4)',
            maxWidth: '500px',
            margin: '2rem auto 0'
          }}
        >
          <Camera size={16} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-primary)' }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            Replace placeholder photos: save your images as <strong style={{ color: 'var(--color-primary)' }}>memory1.jpg – memory4.jpg</strong> in the <code>public/</code> folder
          </span>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 5, 16, 0.95)',
              backdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <button 
              onClick={() => setSelectedPhoto(null)}
              style={{ 
                position: 'absolute', top: '24px', right: '24px', 
                background: 'rgba(255,75,130,0.2)', 
                border: '1px solid rgba(255,75,130,0.5)', 
                color: 'white', cursor: 'pointer',
                borderRadius: '50%', width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                style={{ 
                  maxWidth: '90vw', maxHeight: '80vh', 
                  borderRadius: '16px', 
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.15)',
                  objectFit: 'contain'
                }}
              />
              <p style={{ color: 'white', fontFamily: 'var(--font-handwriting)', fontSize: '1.4rem' }}>
                {selectedPhoto.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGallery;
