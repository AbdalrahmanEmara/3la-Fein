import { useState } from "react";
import styles from "./categoriesstyle.module.css"; // ← import styles

function Categories({ image, title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.categoryCard}>
      <a href="#">
        <div className={styles.imageCategory}>
          <img src={image} alt={title} />
          <div className={styles.heartCat}>
            <button
              className={styles.heartBtnCat}
              onClick={() => setLiked(!liked)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9987 4.00798C9.02545 3.074 7.70411 2.5 6.2487 2.5C3.25716 2.5 0.832031 4.92512 0.832031 7.91667C0.832031 13.2235 6.64065 16.1542 9.01019 17.1289C9.64834 17.3914 10.3491 17.3914 10.9872 17.1289C13.3567 16.1542 19.1654 13.2235 19.1654 7.91667C19.1654 4.92512 16.7402 2.5 13.7487 2.5C12.2933 2.5 10.9719 3.074 9.9987 4.00798Z"
                  fill={liked ? "#FD7FE9" : "none"}
                  stroke="#FD7FE9"
                />
              </svg>
            </button>
          </div>
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
