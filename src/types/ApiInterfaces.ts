export interface ProductsResponse {
  id: number;
  title: string;
  type: string;
  isFresh: boolean;
  unit: string;
  price: string;
  image: string;
}

export interface CategoryCardProps {
  label: string;
  path: string;
  icon: string;
}
