import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useInView } from "react-intersection-observer";
import { birthdayContent } from "../content";

const CelebrationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [showConfetti, setShowConfetti] = useState(false);
  const { celebration } = birthdayContent;

  // Trigger confetti when section comes into view
  React.useEffect(() => {
    if (inView) {
      setShowConfetti(true);
      // Optional: Stop confetti after 10 seconds to save performance
      const timer = setTimeout(() => setShowConfetti(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      {showConfetti && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={["#ff4b82", "#9d4edd", "#ffd700", "#ffffff"]}
            numberOfPieces={200}
            gravity={0.15}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        style={{ zIndex: 10, textAlign: "center", padding: "20px" }}
      >
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "1rem",
            fontFamily: "var(--font-handwriting)",
          }}
          className="text-gradient"
        >
          {celebration.line1}
        </h2>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontFamily: "var(--font-handwriting)",
          }}
          className="text-gradient"
        >
          {celebration.line2}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          style={{
            fontSize: "1.2rem",
            color: "var(--color-text-muted)",
            marginTop: "2rem",
          }}
        >
          {celebration.caption}
        </motion.p>
      </motion.div>

      {/* Background radial glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default CelebrationSection;
