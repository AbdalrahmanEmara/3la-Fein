import styles from "./TripDetails.module.css";
import tripImg from "/place.png";

const TripDetails = () => {
  const basePrice = 100;
  const members = 4;
  const discount = 0.1;
  const serviceFee = 50;

  const subtotal = basePrice * members;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + serviceFee;
  console.log("Rendering TripDetails");

  return (
    <div className={styles.container}>
      <img src={tripImg} alt=" ..." className={styles.image} />

      <h2>Venice, Rome & Milan</h2>
      <p className={styles.location}>Karinseide</p>

      <div className={styles.status}>
        <span className={styles.opened}>
          <svg
            style={{ marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <path
              d="M7.5013 11.667C8.73898 11.667 9.92596 11.1753 10.8011 10.3002C11.6763 9.42499 12.168 8.238 12.168 7.00033C12.168 5.76265 11.6763 4.57566 10.8011 3.70049C9.92596 2.82532 8.73898 2.33366 7.5013 2.33366C6.26363 2.33366 5.07664 2.82532 4.20147 3.70049C3.3263 4.57566 2.83464 5.76265 2.83464 7.00033C2.83464 8.238 3.3263 9.42499 4.20147 10.3002C5.07664 11.1753 6.26363 11.667 7.5013 11.667ZM7.5013 1.16699C8.26735 1.16699 9.02589 1.31788 9.73362 1.61103C10.4414 1.90418 11.0844 2.33386 11.6261 2.87554C12.1678 3.41721 12.5974 4.06027 12.8906 4.76801C13.1838 5.47574 13.3346 6.23428 13.3346 7.00033C13.3346 8.54742 12.7201 10.0312 11.6261 11.1251C10.5321 12.2191 9.0484 12.8337 7.5013 12.8337C4.27547 12.8337 1.66797 10.2087 1.66797 7.00033C1.66797 5.45323 2.28255 3.9695 3.37651 2.87554C4.47047 1.78157 5.95421 1.16699 7.5013 1.16699ZM7.79297 4.08366V7.14616L10.418 8.70366L9.98047 9.42116L6.91797 7.58366V4.08366H7.79297Z"
              fill="#3FAFC6"
            />
          </svg>
          Opened
        </span>
        <span style={{ color: "#777E90", fontSize: "12px" }}>
          Sunday – Thursday
        </span>
      </div>

      <div className={styles.priceBox}>
        <h3>Price details</h3>
        <div className={styles.priceRow}>
          <span className={styles.process}>
            ${basePrice} × {members} members
          </span>
          <span className={styles.result}>${subtotal}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.process}>10% campaign discount</span>
          <span className={styles.result}>−${discountAmount}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.process}>Service fee</span>
          <span className={styles.result}>${serviceFee}</span>
        </div>
        <div className={`${styles.priceRow} ${styles.total}`}>
          <strong>Total</strong>
          <strong>${total}</strong>
        </div>
      </div>

      <p className={styles.note}>
        <svg
          style={{ marginRight: "10px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.4987 13.333C11.4442 13.333 13.832 10.9452 13.832 7.99967C13.832 5.05416 11.4442 2.66634 8.4987 2.66634C5.55318 2.66634 3.16536 5.05416 3.16536 7.99967C3.16536 10.9452 5.55318 13.333 8.4987 13.333ZM8.4987 14.6663C12.1806 14.6663 15.1654 11.6816 15.1654 7.99967C15.1654 4.31778 12.1806 1.33301 8.4987 1.33301C4.8168 1.33301 1.83203 4.31778 1.83203 7.99967C1.83203 11.6816 4.8168 14.6663 8.4987 14.6663Z"
            fill="#777E91"
          />
          <path
            d="M7.83203 4.66667C7.83203 4.29848 8.13051 4 8.4987 4C8.86689 4 9.16536 4.29848 9.16536 4.66667C10.2699 4.66667 11.1654 5.5621 11.1654 6.66667C11.1654 7.03486 10.8669 7.33333 10.4987 7.33333C10.1305 7.33333 9.83203 7.03486 9.83203 6.66667C9.83203 6.29848 9.53355 6 9.16536 6H7.66098C7.38726 6 7.16536 6.22189 7.16536 6.49561C7.16536 6.70894 7.30187 6.89833 7.50425 6.96579L9.91478 7.7693C10.6616 8.01825 11.1654 8.71716 11.1654 9.50439C11.1654 10.5145 10.3465 11.3333 9.33642 11.3333H9.16536C9.16536 11.7015 8.86689 12 8.4987 12C8.13051 12 7.83203 11.7015 7.83203 11.3333C6.72746 11.3333 5.83203 10.4379 5.83203 9.33333C5.83203 8.96514 6.13051 8.66667 6.4987 8.66667C6.86689 8.66667 7.16536 8.96514 7.16536 9.33333C7.16536 9.70152 7.46384 10 7.83203 10H9.33642C9.61014 10 9.83203 9.77811 9.83203 9.50439C9.83203 9.29106 9.69552 9.10167 9.49315 9.03421L7.08261 8.2307C6.33578 7.98176 5.83203 7.28284 5.83203 6.49561C5.83203 5.48551 6.65088 4.66667 7.66098 4.66667H7.83203Z"
            fill="#777E91"
          />
        </svg>
        Free cancellation until 3:00 PM on May 05, 2024
      </p>
    </div>
  );
};

export default TripDetails;
