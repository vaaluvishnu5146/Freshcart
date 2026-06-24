export default function Filters() {
  return (
    <aside className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-brand-dark text-lg mb-4">Categories</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand">
            <input
              type="checkbox"
              checked
              className="accent-brand w-4 h-4 rounded"
            />
            All Items
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand">
            <input type="checkbox" className="accent-brand w-4 h-4 rounded" />
            Vegetables
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand">
            <input type="checkbox" className="accent-brand w-4 h-4 rounded" />
            Meat & Poultry
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-brand">
            <input type="checkbox" className="accent-brand w-4 h-4 rounded" />
            Staples & Groceries
          </label>
        </div>
      </div>
    </aside>
  );
}
