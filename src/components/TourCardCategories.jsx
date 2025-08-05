import React from "react";
import Style from "./TourCardCategories.module.css";


const TourCard = ({ image, title, button, width, height }) => {
  return (
    <div className={Style["tour-card"]} style={{ 
      backgroundImage: `url(${image})`,
      width: width,
      height: height
     }}>
      <div className={Style["tour-card-content"]}>
        <button className={Style["tour-btn"]}>{button}</button>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default TourCard;
