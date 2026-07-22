import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="px-16 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 gap-8">

        <Link to="/dogs">
          <CategoryCard
            title="Dogs"
            image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600"
          />
        </Link>

        <Link to="/cats">
          <CategoryCard
            title="Cats"
            image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500"
          />
        </Link>

        <Link to="/birds">
          <CategoryCard
            title="Birds"
            image="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500"
          />
        </Link>

        <Link to="/fish">
          <CategoryCard
            title="Fish"
            image="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=500"
          />
        </Link>

      </div>
    </section>
  );
}

export default Categories;