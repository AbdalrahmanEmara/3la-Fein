import DiscoverCards from "../discoverCards/discoverCards";
import Style from "./favoriteList.module.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardDDetailes from "../CardDetails/CardDDetailes";

function FavoriteList(favoriteList) {
  const listLength = favoriteList?.favoriteList?.length || 0;
  const [c, setC] = useState(0);
  const [favoriteBatch, setFavoriteBatch] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const Button = () => {
    if (c === 1) {
      setC(0);
    } else {
      setC(1);
    }
  };

  useEffect(() => {
    if (
      favoriteList?.favoriteList &&
      Array.isArray(favoriteList.favoriteList)
    ) {
      if (c) {
        setFavoriteBatch(favoriteList.favoriteList.slice(0, listLength));
      } else {
        setFavoriteBatch(favoriteList.favoriteList.slice(0, 5));
      }
    } else {
      setFavoriteBatch([]);
    }
  }, [c]);

  return (
    <div className={Style.favoriteList}>
      <p
        style={{ font: '600 24px "Poppins"', color: "#23262F", width: "100%" }}
      >
        Favorite List
      </p>

      {favoriteBatch.length === 0 ? (
        <p style={{ color: "#666", fontSize: "18px", marginTop: "1rem" }}>
          No favorite list
        </p>
      ) : (
        favoriteBatch.map((favoriteList) => (
          <DiscoverCards
            name={favoriteList.name}
            image={favoriteList.image}
            category={favoriteList.category}
            rating={favoriteList.rating}
            visitors={favoriteList.visitors}
            isOpen={favoriteList.isOpen}
            openDate={favoriteList.openDate}
            id={favoriteList.id}
            onCardClick={() => {
              setSelectedRestaurant(favoriteList);
              setShowCard(true);
            }}
            key={favoriteList.id}
          />
        ))
      )}

      <div className={Style.favoriteButtonContainer}>
        <div onClick={Button} className={Style.favoriteButton}>
          <svg
            className={c ? `${Style.flipArrow}` : ""}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.8047 6.5286C10.5444 6.26825 10.1223 6.26825 9.86193 6.5286L8 8.39052L6.13807 6.5286C5.87772 6.26825 5.45561 6.26825 5.19526 6.5286C4.93491 6.78894 4.93491 7.21105 5.19526 7.4714L7.5286 9.80474C7.78894 10.0651 8.21105 10.0651 8.4714 9.80474L10.8047 7.4714C11.0651 7.21105 11.0651 6.78894 10.8047 6.5286Z"
              fill="#777E91"
            />
          </svg>

          <p style={{ margin: "0px" }}>
            {c ? "Show less" : "Show all favorite"}
          </p>
        </div>
      </div>
      <AnimatePresence>
        {showCard && (
          <CardDDetailes
            data={selectedRestaurant}
            onClose={() => setShowCard(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default FavoriteList;
