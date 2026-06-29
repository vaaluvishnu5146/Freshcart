import type { Product } from "./ApiInterfaces";

export type ProductContextType = {
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

export type Cart = {
  id: number;
  title: string;
  type: string;
  isFresh: boolean;
  unit: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  addItemToCart: (product: Product) => void;
  quantityIncrement: (productId: number) => void;
  quantityDecrement: (productId: number) => void;
};

export type PaymentContextType = {
  cardInfo: {};
};
