import { useState } from "react";
import styles from "./categoriesstyle.module.css"; // ← import styles

function Categories({ image, title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.categoryCard}>
      <a href="#">
        <div className={styles.imageCategory}>
          <img src={image} alt={title} />
        </div>

        <div className="content-category py-4">
          <h5 className="text-dark">{title}</h5>
          <p className="text-muted">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Categories;
