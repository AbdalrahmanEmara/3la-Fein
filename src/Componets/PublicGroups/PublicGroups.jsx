import Style from "./PublicGroups.module.css";
import { Link } from "react-router-dom";

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
      <Link to="/publicGroups" className="nav-link">
        <button className={Style.bookBtn}>BookNow</button>
      </Link>

      <div className={Style.waveLine}>
        <img alt="" src="/images/wave.svg" className={Style.wave} />

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
        Join a public group and connect with others who are heading to the same
        destination. Whether you're exploring new places, attending events, or
        just looking for fun company — public groups make shared experiences
        easier and more enjoyable.
      </p>
    </div>
  );
}
