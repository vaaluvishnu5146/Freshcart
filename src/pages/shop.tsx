import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import Dropdown from "../elements/Dropdown";
import type { ProductsResponse } from "../types/ApiInterfaces";

export default function Shop() {
  const [products, setProducts] = useState<ProductsResponse[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5173/products.json`)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setProducts(result.products);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
      <Filters />
      <section className="md:col-span-3">
        <Dropdown />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={`${p.id}-${p.title}-${i}`} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
