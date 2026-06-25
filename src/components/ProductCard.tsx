import { Link } from "react-router";
import type { ProductsResponse } from "../types/ApiInterfaces";

export default function ProductCard({
  id,
  title,
  type,
  isFresh,
  unit,
  price,
  image,
}: ProductsResponse) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative bg-gray-100 h-48 flex items-center justify-center">
          <img
            src={image}
            alt="Tomatoes"
            className="object-cover h-full w-full"
          />
          {isFresh && (
            <span className="absolute top-3 left-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded">
              Fresh
            </span>
          )}
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold text-brand tracking-wider uppercase">
            {type}
          </span>
          <Link to={`/shop/product/${id}`}>
            <h4 className="font-bold text-gray-800 text-lg mt-1">{title}</h4>
          </Link>

          <p className="text-sm text-gray-400 mt-1">{unit}</p>
        </div>
      </div>
      <div className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xl font-black text-brand-dark">{price}</span>
        <button className="bg-brand-light hover:bg-brand text-brand hover:text-white px-3 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
    </div>
  );
}
