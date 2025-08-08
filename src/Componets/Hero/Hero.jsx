import styles from "./Hero.module.css";
import CardDDetailes from "../CardDetails/CardDDetailes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [animating, setAnimating] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      setShowCard(true);
    }, 2000); // 2s smooth animation before showing card
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0px rgba(0,255,255,0)" },
    animate: {
      scale: [1, 0.95, 1.05, 1],
      boxShadow: [
        "0 0 0px rgba(0,255,255,0)",
        "0 0 20px rgba(0,255,255,0.8)",
        "0 0 40px rgba(0,255,255,1)",
        "0 0 0px rgba(0,255,255,0)",
      ],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.landing}>
      <div className="hero d-flex align-items-center justify-content-center h-100">
        <div className="content text-center w-50 h-50 position-relative">
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1>Discover the most engaging places</h1>
            <p>Let's giving 45,000 Activities are ready for you</p>
          </motion.div>

          <motion.div
            className="button mt-5 d-flex align-items-center justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              className={`${styles.mainBtn} ${styles.start}`}
              variants={buttonVariants}
              initial="initial"
              animate={animating ? "animate" : "initial"}
              onClick={handleClick}
              disabled={animating}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {animating ? "Activating..." : "3la-fe!n"}

              {/* Neon scan line */}
              {animating && (
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent)",
                  }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>

            <AnimatePresence>
              {showCard && <CardDDetailes onClose={() => setShowCard(false)} />}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
