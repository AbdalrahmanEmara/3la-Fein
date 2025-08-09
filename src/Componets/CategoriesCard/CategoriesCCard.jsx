import styles from "./CategoriesPPage.module.css";

const CategoryCard = ({ image, buttonText, title }) => {
  return (
    <>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlayContent}>
        <button className={styles.button}>{buttonText}</button>
        <h6 className={styles.text}>{title}</h6>
      </div>
    </>
  );
};

export default CategoryCard;
