import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import categoriesData from "./categorisedata";
import Categories from "./categories";
import styles from "./categoriesstyle.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UNSPLASH_ACCESS_KEY = "F40xPBLNDZNgteLeR4nAeQ0X9yoeJH0bK34kTuElI58";

function MainCategories() {
  const [currentPage, setCurrentPage] = useState(0);
  const [categoriesWithImages, setCategoriesWithImages] = useState([]);
  const cardsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async (query) => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              per_page: 1,
              orientation: "landscape",
            },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          }
        );
        return response.data.results[0]?.urls?.regular || "";
      } catch (err) {
        console.error("Image fetch failed for:", query, err);
        return "";
      }
    };

    const loadImages = async () => {
      const updated = await Promise.all(
        categoriesData.map(async (category) => {
          const image = await fetchImage(category.title);
          return { ...category, image };
        })
      );
      setCategoriesWithImages(updated);
    };

    loadImages();
  }, []);

  const totalPages = Math.ceil(categoriesWithImages.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const visibleCards = categoriesWithImages.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center mb-5 flex-wrap">
          <div className="flex-grow-1 me-3 ms-5 ">
            <h2>Categories</h2>
            <p className="text-muted mb-0">
              Bored? Looking for an adventure? We've got you.
            </p>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0 me-5">
            <button
              className={styles.scrollBtn}
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              ←
            </button>
            <button
              className={styles.scrollBtn}
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
            >
              →
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="row"
          >
            {visibleCards.map((cat) => (
              <div
                key={cat.id}
                className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
                onClick={(e) => {
                  e.preventDefault(); // prevent # from being added
                  navigate(cat.path);
                }}
              >
                <Categories
                  image={cat.image}
                  title={cat.title}
                  description={cat.description}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default MainCategories;
