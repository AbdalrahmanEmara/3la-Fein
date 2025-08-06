import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import categoriesData from "./categorisedata";
import Categories from "./categories";
import styles from "./categoriesstyle.module.css"; // ← import styles

function MainCategories() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(categoriesData.length / cardsPerPage);

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
  const visibleCards = categoriesData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
          <div className="flex-grow-1 me-3">
            <h2>Categories</h2>
            <p className="text-muted mb-0">
              An enim nullam tempor gravida donec enim congue magna at pretium
              purus pretium ligula rutrum luctus risus diam eget risus varius
              blandit sit amet non magna.
            </p>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
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
