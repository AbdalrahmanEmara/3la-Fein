import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CardDDetails.module.css";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../Forms/Storage";

const CardDDetailes = ({ onClose, data }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });
  const navigate = useNavigate();

  const handleClick = () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
      navigate("/signup");
    } else {
      navigate("/confirmPayment", { state: { props: data } });
    }
  };
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Map mouse position to rotation
    const rotateX = ((y - rect.height / 2) / rect.height) * -18;
    const rotateY = ((x - rect.width / 2) / rect.width) * 18;

    setRotate({ x: rotateX, y: rotateY });

    // Update shine gradient position
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    setShinePos({ x: shineX, y: shineY });
  };

  const handleMouseLeave = () => {
    // Animate back to center smoothly
    setRotate((prev) => ({ ...prev, x: 0, y: 0 }));
    setShinePos({ x: 50, y: 50 });
  };
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(Math.random() < 0.5);
  }, []);

  const openDaysOptions = [
    "Sunday - Thursday",
    "Monday - Friday",
    "Tuesday - Saturday",
    "Wednesday - Sunday",
    "Saturday - Friday",
    "Thursday - Monday",
    "Friday - Tuesday",
    "Everyday",
    "Weekends Only",
  ];

  const [randomOpenDays, setRandomOpenDays] = useState("");

  useEffect(() => {
    setRandomOpenDays(
      openDaysOptions[Math.floor(Math.random() * openDaysOptions.length)]
    );
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.cardContainer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            background: `
    linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%),
    radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.4), rgba(255,255,255,0) 60%)
`,
            backdropFilter: "blur(12px) saturate(150%)",
            WebkitBackdropFilter: "blur(12px) saturate(150%)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: `
    0 10px 20px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(255, 255, 255, 0.1) inset
`,
            willChange: "transform, background",
            borderRadius: "20px",
          }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: rotate.x,
            rotateY: rotate.y,
            background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.5), transparent)`,
          }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{
            ease: "easeOut",
            stiffness: 120,
            damping: 12,
            duration: 0.5,
          }}
        >
          <button
            type="button"
            className={` ${styles.closeBtn}`}
            aria-label="Close"
            onClick={onClose}
          >
            X
          </button>

          <div className={styles.cardContent}>
            {/* Left */}
            <div className={styles.cardLeft}>
              <div className={styles.title}>
                <span className={styles.badge}>{data.category.title}</span>
                <h2>{data.name}</h2>
              </div>

              <div
                className={`info ${styles.bb} d-flex justify-content-between mb-2`}
              >
                <p>
                  {data.country} - {data.city} - {data.address}
                </p>
                <p>
                  ⭐{data.rating} ( {data.visitors} visitors)
                </p>
              </div>

              <div
                className={`info ${styles.bb} d-flex justify-content-between mb-2`}
              >
                <p
                  className={styles.status}
                  style={{ color: isOpen ? "green" : "red" }}
                >
                  {isOpen ? "Opened" : "Closed"}
                </p>
                <p>{randomOpenDays}</p>
              </div>

              <div className={`info d-flex justify-content-between mb-2`}>
                <p> Distance from your location</p>
                <p className={styles.kelo}> {data.location}</p>
              </div>

              <div className={styles.offer}>
                Now’s the time, amazing OFFER inside!
              </div>
              <button
                className={`${styles.bookBtn} my-1 w-100`}
                onClick={handleClick}
              >
                Book now
              </button>
            </div>

            {/* Right */}
            <div className={styles.cardRight}>
              <img src={data.image} alt="Tour" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CardDDetailes;
