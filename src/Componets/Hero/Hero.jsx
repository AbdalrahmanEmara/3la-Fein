import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.landing}>
      <div className="hero d-flex align-items-center justify-content-center h-100">
        <div className="content text-center w-50 h-50 position-relative">
          <div className={styles.textBlock}>
            <h1>Discover the most engaging places</h1>
            <p>Let's giving 45,000 Activities are ready for you</p>
          </div>
          <div className="button mt-5 d-flex align-items-center justify-content-center">
            <button className={`${styles.mainBtn} ${styles.start}`}>
              3la-fe!n
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
