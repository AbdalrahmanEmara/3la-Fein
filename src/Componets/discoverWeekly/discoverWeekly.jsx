import DiscoverCards from "../discoverCards/discoverCards";
import Style from "./discoverWeekly.module.css";
import CardDDetailes from "../CardDetails/CardDDetailes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function DiscoverWeekly() {
  const places = [
    {
      name: "Coffe Point",
      image: "/images/coffee_point.jpg",
      category: { title: "Caf&eacute;" },
      rating: "4.2",
      visitors: "211",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },

    {
      name: "Cinema Galaxy",
      image: "/images/cinema_galaxy.jpg",
      category: { title: "Cinema" },
      rating: "3.9",
      visitors: "403",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Bremer",
      image: "/images/bremer.jpg",
      category: { title: "Restaurant" },
      rating: "4.6",
      visitors: "3.6k",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Stereo",
      image: "/images/stereo.jpg",
      category: { title: "Restaurant & caf&eacute;" },
      rating: "4.3",
      visitors: "1.9k",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Hustle House",
      image: "/images/hustle_house.jpg",
      category: { title: "Co-working Space" },
      rating: "4.2",
      visitors: "42",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Al Gama'a Plaza Mall",
      image: "/images/elgam3a_mall.jpg",
      category: {
        title: "Shopping Mall",
      },
      rating: "4.1",
      visitors: "5k",
      isOpen: false,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Index",
      image: "/images/index_workspace.jpg",
      category: {
        title: "Co-working Space",
      },
      rating: "4.7",
      visitors: "176",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
    {
      name: "Ace Town",
      image: "/images/ace_town.jpg",
      category: { title: "Sports Complex" },
      rating: "4.6",
      visitors: "27",
      isOpen: true,
      openDate: "Saturday - Friday",
      location: "Nearby",
    },
  ];

  const [showCard, setShowCard] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className={Style.discoverWeekly}>
      <div style={{ width: "100%" }}>
        <p className={Style.discoverTitle}>Discover Weekly</p>
        <p className={Style.discoverDescription}>
          An enim nullam tempor sapien gravida donec enim ipsum
        </p>
      </div>

      {places.map((place) => (
        <DiscoverCards
          key={place.id}
          className={Style.discoverCard}
          name={place.name}
          image={place.image}
          category={place.category}
          rating={place.rating}
          visitors={place.visitors}
          isOpen={place.isOpen}
          openDate={place.openDate}
          id={place.id}
          onCardClick={() => {
            setSelectedRestaurant(place);
            setShowCard(true);
          }}
        />
      ))}

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

export default DiscoverWeekly;
