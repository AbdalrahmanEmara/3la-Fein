import { useState, useEffect } from "react";
import { getCurrentUser } from "../Forms/Storage"; // Adjust the import path as needed
import styles from "./History.module.css";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser && Array.isArray(currentUser.history)) {
      setHistory(currentUser.history);
    } else {
      setHistory([]); // No history or no user
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My History</h2>

      {history.length === 0 && <p>No history found.</p>}

      {history.map((item, index) => (
        <div key={index} className={styles.tripCard}>
          <img
            src={item.image || "/images/default.png"}
            alt={item.name || "Trip"}
            className={styles.tripImage}
          />
          <div className={styles.tripDetails}>
            <div className={styles.tripInfo}>
              <h3 className={styles.tripTitle}>{item.name || "Trip"}</h3>
              <span
                className={`${styles.tripType} ${
                  item.category ? styles[item.category.replace(" ", "-")] : ""
                }`}
              >
                {item.category
                  ? item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)
                  : "Unknown Category"}
              </span>
              <p className={styles.tripDate}>
                Booked at: {new Date(item.timestamp).toLocaleString()}
              </p>
              <p className={styles.tripPrice}>{item.totalPrice || "$0.00"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
