
import categoriesData from "./categorisedata";
import Categories from"./categories";
import "./categoriesstyle.css"
function MainCategories() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className=" mb-5">
          <h2 >Categories</h2>
          <p className="text-muted ">
            An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula
            rutrum luctus risus diam eget risus varius blandit sit amet non magna.
          </p>
        </div>

        <div className="row">
          {categoriesData.map((cat) => (
          <div key={cat.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <Categories
           image={cat.image}
           title={cat.title}
           description={cat.description}
          />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainCategories;