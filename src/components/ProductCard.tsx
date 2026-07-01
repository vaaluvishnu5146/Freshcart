import { Link, useNavigate } from "react-router";
import type { ProductCardProps } from "../types/ApiInterfaces";
import { useDispatch } from "react-redux";

export default function ProductCard({
  data,
  addToCart,
  isAddedToCart,
}: ProductCardProps) {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative bg-gray-100 h-48 flex items-center justify-center">
          <img
            src={data.image}
            alt="Tomatoes"
            className="object-cover h-full w-full"
          />
          {data.isFresh && (
            <span className="absolute top-3 left-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded">
              Fresh
            </span>
          )}
        </div>
        <div className="p-4">
          <span className="text-xs font-semibold text-brand tracking-wider uppercase">
            {data.type}
          </span>
          <Link to={`/shop/product/${data.id}`}>
            <h4 className="font-bold text-gray-800 text-lg mt-1">
              {data.title}
            </h4>
          </Link>

          <p className="text-sm text-gray-400 mt-1">{data.unit}</p>
        </div>
      </div>
      <div className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xl font-black text-brand-dark">
          ${data.price}
        </span>
        <span className="flex gap-3">
          <button
            onClick={() => navigate(`/shop/product/${data.id}`)}
            className="bg-brand-light hover:bg-brand text-brand hover:text-white px-3 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            onClick={() => dispatcher(addToCart(data))}
            disabled={isAddedToCart}
            className="bg-brand-light hover:bg-brand text-brand hover:text-white px-3 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 disabled:bg-gray-400 disabled:text-white"
          >
            <i className="fa-solid fa-plus"></i>{" "}
            {isAddedToCart ? "Added" : "Add"}
          </button>
        </span>
      </div>
    </div>
  );
}
