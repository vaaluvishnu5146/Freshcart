import { useParams, useSearchParams } from "react-router";
import Gallery from "../components/Gallery";

export default function ProductDetails() {
  const params = useParams();
  const searchParams = useSearchParams();

  console.log(searchParams[0].get("qty"));
  console.log(searchParams[0].get("a"));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-12 grid md:grid-cols-2 gap-12 items-start">
        <Gallery />
        <section className="flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="text-brand font-bold text-sm tracking-wider uppercase bg-brand-light px-3 py-1 rounded-md">
              Farm Fresh Produce
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-brand-dark mt-3 tracking-tight">
              Organic Red Tomatoes
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Net Weight:
              <span className="font-semibold text-gray-700">
                1.0 kg (Approx. 6-8 pieces)
              </span>
            </p>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-amber-400 gap-0.5 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <span className="text-sm font-bold text-gray-700">4.8</span>
              <span className="text-xs text-gray-400 border-l border-gray-200 pl-3">
                (124 verified customer reviews)
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-4 border-b border-gray-100 pb-6">
              <span className="text-4xl font-black text-brand-dark tracking-tight">
                $2.99
              </span>
              <span className="text-lg text-gray-400 line-through">$3.99</span>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">
                Save 25%
              </span>
            </div>

            <div className="mt-6 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                Plucked straight from certified ecological family farmlands.
                These vine-ripened red tomatoes carry a crisp, juicy profile
                packed with sweet flavor notes and heavy antioxidant properties,
                ideal for gourmet sauces, salads, or sandwiches.
              </p>
              <ul className="space-y-1.5 text-gray-500 font-medium">
                <li>
                  <i className="fa-solid fa-circle-check text-brand mr-2"></i>{" "}
                  No chemical pesticides or heavy synthetics used.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check text-brand mr-2"></i>
                  Hand-sorted and cold-chain packaged for guaranteed crispness.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 font-medium">
                Select Quantity
              </span>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-1 bg-white shadow-sm">
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-brand font-black transition">
                  -
                </button>
                <span className="font-bold text-gray-800 w-6 text-center">
                  1
                </span>
                <button className="w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-brand font-black transition">
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-brand/20 flex items-center justify-center gap-2 text-base">
                <i className="fa-solid fa-cart-plus text-lg"></i> Add to Cart
              </button>
              <button className="border border-gray-200 hover:border-red-400 hover:text-red-500 text-gray-400 px-4 rounded-xl transition bg-white">
                <i className="fa-regular fa-heart text-xl"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
