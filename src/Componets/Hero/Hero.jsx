import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
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
            <button className={`${styles.mainBtn} ${styles.start}`}>
              3la-fe!n
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
