import { Link } from "react-router";

export default function AdvertisementBanner() {
  return (
    <header className="bg-brand-light py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="bg-brand text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
            100% Organic & Fresh
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark mt-4 leading-tight">
            Feed Your Family <br />
            <span className="text-brand">Healthy, Crisp</span>
            Food
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Get farm-fresh vegetables, premium halal meat, and daily essential
            groceries delivered right to your doorstep within 2 hours.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-brand/20 transition duration-300"
              to={`/shop`}
            >
              Shop Now
            </Link>
            <a
              href="#categories"
              className="bg-white border border-gray-200 hover:border-brand text-gray-700 font-semibold px-6 py-3 rounded-xl transition"
            >
              Browse Categories
            </a>
          </div>
        </div>
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
            alt="Fresh Produce"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}
