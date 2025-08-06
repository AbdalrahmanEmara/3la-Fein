import styles from "./History.module.css";

const History = () => {
  const trips = [
    {
      id: 1,
      title: "Venice, Rome & Milan Tour",
      price: "$225.4",
      checkIn: "May 15, 2024",
      checkOut: "May 18, 2024",
      image: "/images/venice.png",
      type: "restaurant",
    },
    {
      id: 2,
      title: "Venice, Rome & Milan Tour",
      price: "$225.4",
      checkIn: "May 15, 2024",
      checkOut: "May 18, 2024",
      image: "/images/venice.png",
      type: "snorkeling",
    },
    {
      id: 3,
      title: "Venice, Rome & Milan Tour",
      price: "$225.4",
      checkIn: "May 15, 2024",
      checkOut: "May 18, 2024",
      image: "/images/venice.png",
      type: "experienced trip",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My History</h2>
      {trips.map((trip) => (
        <div key={trip.id} className={styles.tripCard}>
          <img src={trip.image} alt={trip.title} className={styles.tripImage} />
          <div className={styles.tripDetails}>
            <div className={styles.tripInfo}>
              <h3 className={styles.tripTitle}>{trip.title}</h3>
              <span
                className={`${styles.tripType} ${
                  styles[trip.type.replace(" ", "-")]
                }`}
              >
                {trip.type.charAt(0).toUpperCase() + trip.type.slice(1)}
              </span>
              <p className={styles.tripDate}>
                Check-in: {trip.checkIn} | Check-out: {trip.checkOut}
              </p>
              <p className={styles.tripPrice}>{trip.price}</p>
            </div>
            <button className={styles.detailBtn}>Detail</button>
          </div>
        </div>
      ))}
      <button className={styles.showReviews}>Show all reviews</button>
    </div>
  );
};

export default History;
