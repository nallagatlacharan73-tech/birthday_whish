import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    id: 1,
    title: "Special Birthday Moment",
    src: "/whatsapp-video.mp4",
  },
];

const VideoMemories = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: "1000px" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "3rem",
          }}
          className="text-gradient"
        >
          Moments in Motion
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            padding: "20px",
          }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel"
              style={{ overflow: "hidden", padding: "15px" }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                }}
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    background: "#000",
                  }}
                />
              </div>
              <h3
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: "var(--color-text-light)",
                  fontSize: "1.2rem",
                }}
              >
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VideoMemories;
