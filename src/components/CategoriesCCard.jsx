import React from "react";
import "./CategoriesPPage.css";

const CategoryCard = ({ image, buttonText, title }) => {
  return (
    <>
      <img src={image} alt={title} />
      <div className="overlay-content">
        <button className="button">{buttonText}</button>
        <h6 className="text">{title}</h6>
      </div>
    </>
  );
};

export default CategoryCard;