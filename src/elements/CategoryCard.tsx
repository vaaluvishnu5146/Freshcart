import { Link } from "react-router";
import type { CategoryCardProps } from "../types/ApiInterfaces";

export default function CategoryCard({ label, path, icon }: CategoryCardProps) {
  return (
    <Link
      to={path}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand text-center transition group"
    >
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-light transition">
        <i className={`${icon} text-2xl text-brand`}></i>
      </div>
      <h3 className="font-bold text-gray-800">{label}</h3>
    </Link>
  );
}
