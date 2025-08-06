import React from "react";
import Style from "./PublicGroups.module.css";

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
    <div className={Style.publicGroupsContainer}>
      <h2 className={Style.sectionTitle}>Public Groups</h2>
      <button className={Style.bookBtn}>Book now</button>

      <div className={Style.waveLine}>
      <img
        alt=""
        src="/images/wave.svg"
        className={Style.vector634stroke}
      />
        {people.map((person, index) => (
          <div
            className={`${Style.person} ${Style[`person${index}`]}`}
            key={index}
          >
            <img src={person.img} alt={`person-${index}`} />
          </div>
        ))}
      </div>

      <p className={Style.quote}>
        “An enim nullam tempor gravida donec enim congue magna at pretium purus
        pretium ligula rutrum luctus risus diam.”
      </p>
    </div>
  );
}
