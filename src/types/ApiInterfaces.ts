export interface Product {
  id: number;
  title: string;
  type: string;
  isFresh: boolean;
  unit: string;
  price: number;
  image: string;
}

export interface ProductCardProps {
  data: Product;
  addToCart: (product: Product) => void;
  isAddedToCart: boolean;
}

export interface CategoryCardProps {
  label: string;
  path: string;
  icon: string;
}
