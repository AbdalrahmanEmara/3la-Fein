import PublicGroupsCards from "../../Componets/discoverCards/publicGroupsCards";
import Style from "./publicGroupsPage.module.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PublicGroupsPage(groups) {
  const [groupsLength, setGroupsLength] = useState(
    Math.ceil((groups?.groups?.length || 0) / 8)
  );
  const [groupsBatch, setGroupsBatch] = useState([]);
  const [c, setC] = useState(8);
  const [direction, setDirection] = useState(0);

  const moveForward = () => {
    if (c / 8 !== groupsLength) {
      setC(c + 8);
    }
  };

  const moveBackward = () => {
    if (c > 8) {
      setC(c - 8);
    }
  };

  useEffect(() => {
    setGroupsBatch((groups?.groups || []).slice(c - 8, c));
  }, [c]);

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div style={{ width: "77%", height: "auto", margin: "auto" }}>
      <p className={Style.publicGroupsTitle}>Public Groups</p>
      <p style={{ margin: "0px", width: "100%", textAlign: "center" }}>
        <span style={{ font: '500 15px "Poppins"', color: "#777E90" }}>
          Get in touch{" "}
        </span>
        <span style={{ font: '600 20px "Poppins"' }}>with people</span>
      </p>

      <div className={Style.publicGroupsPageDiv}>
        <p
          style={{
            width: "100%",
            font: '500 16px "Poppins"',
            color: "#777E90",
            margin: "0px",
          }}
        >
          Join Now to our public groups!
        </p>

        <AnimatePresence custom={direction}>
          {groupsBatch.map((group, index) => (
            <motion.div
              key={group.name}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              layout
            >
              <PublicGroupsCards
                image={group.image}
                name={group.name}
                category={group.category}
                rating={group.rating}
                visitors={group.visitors}
                adminPic={group.adminPic}
                adminName={group.adminName}
                currentMembers={group.currentMembers}
                maxMembers={group.maxMembers}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className={Style.arrowButtons}>
        <div
          onClick={moveBackward}
          className={c > 8 ? `${Style.arrowBig}` : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
              fill="#777E91"
            />
          </svg>
        </div>

        <div
          onClick={moveForward}
          className={c / 8 !== groupsLength ? `${Style.arrowBig}` : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
              fill="#777E91"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PublicGroupsPage;
