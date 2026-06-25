import { useContext } from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const {
    cart = [],
    quantityDecrement,
    quantityIncrement,
  } = useContext(CartContext);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
      <section className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold text-brand-dark mb-2">
          Your Shopping Basket
        </h1>
        {cart.map((e, i) => (
          <CartCard
            key={`${e.id}-${e.title}-${e.price}-${i}`}
            data={e}
            increment={quantityIncrement}
            decrement={quantityDecrement}
          />
        ))}
      </section>
      <OrderSummary />
    </main>
  );
}
