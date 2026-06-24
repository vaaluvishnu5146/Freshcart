export default function Dropdown() {
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-500 font-medium">
        Showing <span className="text-brand-dark font-bold">12 Products</span>
      </p>
      <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand bg-white text-gray-600">
        <option>Sort by: Featured</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}
