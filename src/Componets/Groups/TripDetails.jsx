import styles from "./TripDetails.module.css";
import { useLocation } from "react-router-dom";

const TripDetails = ({ joined }) => {
  const location = useLocation();
  const group = location.state;
  console.log(joined);
  // Dynamic price data
  const basePrice = 100;
  const members = parseInt(group.currentMembers, 10);
  const discount = 0.1;
  const serviceFee = 50;

  const subtotal = basePrice * members;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount + serviceFee;

  return (
    <div className={styles.container}>
      {/* Dynamic Group Image */}
      <img src={group.image} alt={group.name} className={styles.image} />

      {/* Dynamic Title & Category */}
      <h2>{group.name}</h2>
      <p className={styles.location}>{group.category}</p>

      {/* Status */}
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

      {/* Price Details */}
      <div className={styles.priceBox}>
        <h3>Price details</h3>
        <div className={styles.priceRow}>
          <span className={styles.process}>
            ${basePrice} × {members + joined} members
          </span>
          <span className={styles.result}>
            ${basePrice * (members + joined)}
          </span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.process}>10% campaign discount</span>
          <span className={styles.result}>
            −${discountAmount + (joined ? 10 : 0)}
          </span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.process}>Service fee</span>
          <span className={styles.result}>${serviceFee}</span>
        </div>
        <div className={`${styles.priceRow} ${styles.total}`}>
          <strong>Total</strong>
          <strong>
            $
            {basePrice * (members + joined) -
              (discountAmount + (joined ? 10 : 0)) +
              serviceFee}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
