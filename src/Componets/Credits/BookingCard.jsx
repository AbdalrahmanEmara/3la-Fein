import styles from "./Credit.module.css";

const BookingCard = ({
  imageSrc,
  title,
  subtitle,
  status,
  dates,
  priceDetails,
  row1,
  res1,
  row2,
  res2,
  row3,
  res3,
  row4,
  res4,
  cancellationPolicy,
}) => {
  return (
    <div className={styles.bookingCard + " mt-4"}>
      <div className={styles.headerImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.priceDetails}>
          <p>{priceDetails}</p>
        </div>
        <div className={styles.receiptDetails}>
          <p className={styles.FirRow}>
            <span></span>
            <span className={styles.row1}>{row1}</span>
            <span className={styles.res1}>{res1}</span>
          </p>
          <p className={styles.SecRow}>
            <span></span>
            <span className={styles.row2}>{row2}</span>
            <span className={styles.res2}>{res2}</span>
          </p>
          <p className={styles.ThrRow}>
            <span></span>
            <span className={styles.row3}>{row3}</span>
            <span className={styles.res3}>{res3}</span>
          </p>
          <p className={styles.FourthRow}>
            <span></span>
            <span className={styles.row4}>{row4}</span>
            <span className={styles.res4}>{res4}</span>
          </p>
        </div>
        <div className={styles.footerNote}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.9987 13.333C10.9442 13.333 13.332 10.9452 13.332 7.99967C13.332 5.05416 10.9442 2.66634 7.9987 2.66634C5.05318 2.66634 2.66536 5.05416 2.66536 7.99967C2.66536 10.9452 5.05318 13.333 7.9987 13.333ZM7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z"
              fill="#777E91"
            />
            <path
              d="M7.33203 4.66667C7.33203 4.29848 7.63051 4 7.9987 4C8.36689 4 8.66536 4.29848 8.66536 4.66667C9.76993 4.66667 10.6654 5.5621 10.6654 6.66667C10.6654 7.03486 10.3669 7.33333 9.9987 7.33333C9.63051 7.33333 9.33203 7.03486 9.33203 6.66667C9.33203 6.29848 9.03355 6 8.66536 6H7.16098C6.88726 6 6.66536 6.22189 6.66536 6.49561C6.66536 6.70894 6.80187 6.89833 7.00425 6.96579L9.41478 7.7693C10.1616 8.01825 10.6654 8.71716 10.6654 9.50439C10.6654 10.5145 9.84652 11.3333 8.83642 11.3333H8.66536C8.66536 11.7015 8.36689 12 7.9987 12C7.63051 12 7.33203 11.7015 7.33203 11.3333C6.22746 11.3333 5.33203 10.4379 5.33203 9.33333C5.33203 8.96514 5.63051 8.66667 5.9987 8.66667C6.36689 8.66667 6.66536 8.96514 6.66536 9.33333C6.66536 9.70152 6.96384 10 7.33203 10H8.83642C9.11014 10 9.33203 9.77811 9.33203 9.50439C9.33203 9.29106 9.19552 9.10167 8.99315 9.03421L6.58261 8.2307C5.83578 7.98176 5.33203 7.28284 5.33203 6.49561C5.33203 5.48551 6.15088 4.66667 7.16098 4.66667H7.33203Z"
              fill="#777E91"
            />
          </svg>
          <span>{cancellationPolicy}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
