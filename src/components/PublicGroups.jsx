
import React from "react";
import "./PublicGroups.css"; 

const people = [
  { img: "/images/person1.png" },
  { img: "/images/person2.png" },
  { img: "/images/person3.png" },
  { img: "/images/person4.png" },
  { img: "/images/person5.png" },
  { img: "/images/person6.png" },
  { img: "/images/person7.png" },
];

export default function PublicGroups() {
  return (
    <div className="public-groups-container">
      
      <h2 className="section-title">Public Groups</h2>

      <button className="book-btn">Book now</button>

      <div className="wave-line">
        {people.map((person, index) => (
          <div className={`person person-${index}`} key={index}>
            <img src={person.img} alt={`person-${index}`} />
          </div>
        ))}
      </div>

      <p className="quote">
        “An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risus diam.”
      </p>
    </div>
  );
}
