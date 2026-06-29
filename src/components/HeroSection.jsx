import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { birthdayContent } from "../content";

const HeroSection = ({ onStart }) => {
  const { hero } = birthdayContent;
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Particles/Glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: "300px",
          height: "300px",
          background: "var(--color-primary)",
          filter: "blur(150px)",
          opacity: 0.3,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "250px",
          height: "250px",
          background: "var(--color-secondary)",
          filter: "blur(120px)",
          opacity: 0.3,
          borderRadius: "50%",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ textAlign: "center", zIndex: 10, padding: "0 20px" }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ display: "inline-block", marginBottom: "1rem" }}
        >
          <Sparkles
            color="var(--color-accent)"
            size={48}
            className="text-glow"
          />
        </motion.div>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
          className="text-gradient"
        >
          {hero.title} ❤️
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "var(--color-text-light)",
            marginBottom: "3rem",
            fontFamily: "var(--font-handwriting)",
            letterSpacing: "1px",
          }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={onStart}
          className="glass-button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "0 auto",
          }}
        >
          {hero.buttonText} <ChevronDown size={20} />
        </motion.button>
      </motion.div>

      {/* Floating hearts background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.5, 0],
            x: Math.sin(i) * 100,
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 20 + 10}px`,
            color: "var(--color-primary)",
            filter: "blur(1px)",
            zIndex: 1,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </section>
  );
};

export default HeroSection;
