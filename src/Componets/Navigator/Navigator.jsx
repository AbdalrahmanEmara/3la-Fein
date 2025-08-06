import styles from "./Navigator.module.css";

const Navigator = ({ color, icon, title, text }) => (
  <button className={`${styles.navigator} ${styles[color]}`}>
    <div className={styles.iconContainer}>{icon}</div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{text}</p>
  </button>
);

export default Navigator;
