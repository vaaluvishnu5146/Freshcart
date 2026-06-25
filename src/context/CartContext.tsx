import { createContext, type ReactNode, useState } from "react";
import type { CartContextType } from "../types/ContextTypes";
import type { Product } from "../types/ApiInterfaces";

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addItemToCart: () => {},
  quantityIncrement: () => {},
  quantityDecrement: () => {},
});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);

  function addItemToCart(product: Product) {
    const cartCopy = [...cart];
    cartCopy.push({ ...product, quantity: 1 });
    setCart(cartCopy);
  }

  function quantityIncrement(productId: number) {
    const cartCopy = [...cart].map((e) => {
      if (e.id === productId) {
        e.quantity += 1;
      }
      return e;
    });
    console.log(cartCopy);
    setCart(cartCopy);
  }

  function quantityDecrement(productId: number) {
    const cartCopy = [...cart].map((e) => {
      if (e.id === productId) {
        e.quantity -= 1;
      }
      return e;
    });
    setCart(cartCopy);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        quantityIncrement,
        quantityDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
