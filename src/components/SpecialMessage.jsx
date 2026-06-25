import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '2rem', color: 'var(--color-primary)' }}>
          A Special Message For You
        </h2>
        
        <div style={{ 
          minHeight: '200px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            lineHeight: 1.8, 
            fontFamily: 'var(--font-handwriting)',
            color: 'var(--color-text-light)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            whiteSpace: 'pre-wrap',
            textAlign: 'left'
          }}>
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ borderRight: '2px solid var(--color-primary)', marginLeft: '2px' }}
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
