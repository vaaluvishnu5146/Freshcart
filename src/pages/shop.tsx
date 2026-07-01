import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Dropdown from "../elements/Dropdown";
import { useSelector } from "react-redux";
import { addItemToCart } from "../redux/slices/Cart.slice";

export default function Shop() {
  const products = useSelector((store) => store.products.data);
  const cart = useSelector((store) => store.cart.data);

  function computeIsAddedToCart(productId: number) {
    return cart.find((e) => {
      if (e.id === productId) {
        return true;
      }
      return false;
    });
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
      <Filters />
      <section className="md:col-span-3">
        <Dropdown />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard
              key={`${p.id}-${p.title}-${i}`}
              data={p}
              addToCart={addItemToCart}
              isAddedToCart={computeIsAddedToCart(p.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
