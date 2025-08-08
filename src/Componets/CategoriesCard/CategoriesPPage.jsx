import styles from "./CategoriesPPage.module.css";
import CategoriesCCard from "./CategoriesCCard";
import React, { useState } from "react";
import CardDDetailes from "../CardDetails/CardDDetailes";
import style from "../Hero/Hero.module.css";
import { useNavigate } from "react-router-dom";

const CategoriesPPage = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={`${styles.pageName}`}>
        <h1>Categories</h1>
        <p className={styles.paragraph}>Discover Our Special Categories</p>
      </div>

      <div className={styles.divOne}>
        <div
          className={styles.divTwo}
          onClick={() => navigate("/categories/restaurant")}
        >
          <CategoriesCCard
            image="/Restaurants.jpg"
            buttonText="Restaurants"
            title="Explore top-rated restaurants near you."
          />
        </div>

        <div
          className={styles.divThree}
          onClick={() => navigate("/categories/cafe")}
        >
          <CategoriesCCard
            image="/cafes.jpg"
            buttonText="Cafés"
            title="Discover cozy cafés around you."
          />
        </div>

        <div
          className={styles.divFour}
          onClick={() => navigate("/categories/cinema")}
        >
          <CategoriesCCard
            image="/cinemas.jpg"
            buttonText="Cinemas"
            title="Enjoy the latest movies at local cinemas."
          />
        </div>

        <div
          className={styles.divFive}
          onClick={() => navigate("/categories/shopping")}
        >
          <CategoriesCCard
            image="/shopping.jpg"
            buttonText="Shopping Malls"
            title="Browse popular shopping malls and shops."
          />
        </div>

        <div
          className={styles.divTwo2}
          onClick={() => navigate("/categories/landmark")}
        >
          <CategoriesCCard
            image="./landmark.jpg"
            buttonText="Landmarks"
            title="Visit famous attractions & cultural sites."
          />
        </div>

        <div
          className={styles.divThree2}
          onClick={() => navigate("/categories/amusement")}
        >
          <CategoriesCCard
            image="./amusementpark.jpg"
            buttonText="Amusement Parks"
            title="Have fun at theme parks and rides."
          />
        </div>

        <div
          className={styles.divFour2}
          onClick={() => navigate("/categories/beache")}
        >
          <CategoriesCCard
            image="./beach.jpg"
            buttonText="Beaches & Diving"
            title="Relax at beaches or dive in the Red Sea."
          />
        </div>

        <div
          className={styles.divFive2}
          onClick={() => navigate("/categories/park")}
        >
          <CategoriesCCard
            image="/parks.jpg"
            buttonText="Parks"
            title="Relax at nearby parks and open green spaces."
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPPage;
