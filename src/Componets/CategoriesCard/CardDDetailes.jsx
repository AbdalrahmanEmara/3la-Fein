import styles from "./CardDDetails.module.css";
import img from "/tourcard.png";

const CardDDetailes = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.cardContainer}>
        <button
          type="button"
          className={`btn-close ${styles.closeBtn}`}
          aria-label="Close"
          onClick={onClose}
        >
          X
        </button>

        <div className={styles.cardContent}>
          {/* Left */}
          <div className={styles.cardLeft}>
            <div className={styles.title}>
              <span className={styles.badge}>Restaurants</span>
              <h2>Venice, Rome & Milan</h2>
            </div>

            <div
              className={`info ${styles.bb} d-flex justify-content-between mb-2`}
            >
              <p> Location</p>
              <p>⭐ 4.9 (1.2k)</p>
            </div>

            <div
              className={`info ${styles.bb} d-flex justify-content-between mb-2`}
            >
              <p className={styles.status}> Opened</p>
              <p>Sunday - Thursday</p>
            </div>

            <div className={`info d-flex justify-content-between mb-2`}>
              <p> Distance from your location</p>
              <p className={styles.kelo}>10km</p>
            </div>

            <div className={styles.offer}>
              Now’s the time, amazing OFFER inside!
            </div>
            <button className={`${styles.bookBtn} my-1 w-100`}>Book now</button>
          </div>

          {/* Right */}
          <div className={styles.cardRight}>
            <img src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDDetailes;
