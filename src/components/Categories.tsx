import CategoryCard from "../elements/CategoryCard";

export default function Categories() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-brand-dark mb-2">
        Explore Popular Categories
      </h2>
      <p className="text-gray-500 mb-8">
        Strictly curated for premium taste and nutritional quality.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <CategoryCard label="Vegetables" icon="fa-solid fa-carrot" path="/" />
        <CategoryCard
          label="Fresh Meat"
          icon="a-solid fa-drumstick-bite"
          path="/"
        />
        <CategoryCard
          label="Daily Groceries"
          icon="fa-solid fa-wheat-awn"
          path="/"
        />
        <CategoryCard label="Dairy Products" icon="fa-solid fa-cow" path="/" />
      </div>
    </section>
  );
}
