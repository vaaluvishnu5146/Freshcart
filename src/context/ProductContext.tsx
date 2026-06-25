import { createContext, type ReactNode, useEffect, useState } from "react";
import type { ProductContextType } from "../types/ContextTypes";
import axios from "axios";
import type { Product } from "../types/ApiInterfaces";

export const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

export default function ProductContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://localhost:5173/products.json`)
      .then((response) => {
        if (response && response.status === 200) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
