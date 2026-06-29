import React, { useState } from "react";
import { motion } from "framer-motion";

const CharacterCard = ({ name, accent, imageSrc, alt, fallbackSrc }) => {
  const [src, setSrc] = useState(imageSrc);

  return (
    <motion.div
      className="cartoon-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, y: -4 }}
    >
      <div className="cartoon-avatar" style={{ "--accent": accent }}>
        <img
          src={src}
          alt={alt}
          className="cartoon-image"
          onError={() => setSrc(fallbackSrc)}
        />
      </div>
      <div className="cartoon-name">{name}</div>
      <div className="cartoon-tag">Cute & cheerful</div>
    </motion.div>
  );
};

const CartoonCharacters = () => {
  return (
    <section className="cartoon-strip">
      <div className="cartoon-title">A little extra fun ✨</div>
      <div className="cartoon-grid">
        <CharacterCard
          name="Shinchan"
          accent="#ff4b82"
          imageSrc="/sinchan.png"
          fallbackSrc="/memory1.png"
          alt="Shinchan character"
        />

        <CharacterCard
          name="Himawari"
          accent="#9d4edd"
          imageSrc="/himawari.png"
          fallbackSrc="/memory2.jpg"
          alt="Himawari character"
        />

        <CharacterCard
          name="Together"
          accent="#ffd700"
          imageSrc="/shinchan-himawari.png"
          fallbackSrc="/memory3.jpg"
          alt="Shinchan and Himawari together"
        />
      </div>
    </section>
  );
};

export default CartoonCharacters;
