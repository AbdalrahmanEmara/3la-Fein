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
// <<<<<<< HEAD:src/components/PublicGroups.jsx
//     <div className="public-groups-container">
//       <div className="public-group-title">
//         <h2 className="section-title">What our happy clients say</h2>

//         <button className="book-btn">Book now</button>
//       </div>

//       <div className="wave-line">
// =======
    <div className={Style.publicGroupsContainer}>
      <h2 className={Style.sectionTitle}>Public Groups</h2>

      <button className={Style.bookBtn}>Book now</button>
      <img
        alt=""
        src="/images/Vector634(Stroke).svg"
        className={Style.vector634stroke}
      />
      <div className={Style.waveLine}>
{/* >>>>>>> 50406cac44b90b704be828f16be253136a0e1aea:src/Componets/PublicGroups/PublicGroups.jsx */}
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
