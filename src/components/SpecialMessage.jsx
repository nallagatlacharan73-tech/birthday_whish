import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Premium bold italic Google Font for the special message
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const SpecialMessage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [text, setText] = useState('');
  const fullText = "Brother: You know you're the most annoying person in the world, right?\n\nSister: And you know you wouldn't survive a single day without me! 😜\n\nHappy Birthday! We might fight like Tom and Jerry, but no matter how much we argue, you will always be my favorite person to annoy. Thank you for being the best sibling I could ever ask for. Have an amazing day! ❤️";
  
  useEffect(() => {
    if (inView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setText((prev) => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50); // Speed of typing
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{
          maxWidth: '800px',
          width: '90%',
          padding: 'clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', fontSize: '60px' }}>
          💌
        </div>
        
        <h2 style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
          marginBottom: '2rem', 
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #ff4b82, #ffd700, #ff4b82)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '1px'
        }}>
          💌 A Special Message For You
        </h2>
        
        <div style={{ 
          minHeight: '200px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <p style={{ 
            fontSize: 'clamp(1.3rem, 3vw, 2rem)', 
            lineHeight: 2,
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            color: '#fff',
            textShadow: '0 0 18px rgba(255, 75, 130, 0.45), 0 2px 8px rgba(0,0,0,0.5)',
            whiteSpace: 'pre-wrap',
            textAlign: 'left',
            letterSpacing: '0.3px',
            paddingLeft: '12px',
            paddingTop: '8px',
            borderLeft: '3px solid var(--color-primary)',
            marginLeft: '4px'
          }}>
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ borderRight: '3px solid var(--color-primary)', marginLeft: '3px' }}
            >
              &nbsp;
            </motion.span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialMessage;
