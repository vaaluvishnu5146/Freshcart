export default function CartCard() {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
      <img
        src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=150"
        className="w-20 h-20 object-cover rounded-xl bg-gray-50"
      />
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">Organic Red Tomatoes</h3>
        <p className="text-sm text-gray-400">1 kg</p>
        <span className="text-brand font-bold text-sm block mt-1">
          $2.99 / kg
        </span>
      </div>
      <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-1 bg-gray-50">
        <button className="w-8 h-8 rounded-lg hover:bg-white text-gray-500 hover:text-brand transition font-bold">
          -
        </button>
        <span className="font-bold text-gray-800 w-4 text-center">2</span>
        <button className="w-8 h-8 rounded-lg hover:bg-white text-gray-500 hover:text-brand transition font-bold">
          +
        </button>
      </div>
      <div className="text-right">
        <span className="font-black text-brand-dark text-lg block">$5.98</span>
        <button className="text-xs text-red-400 hover:text-red-600 mt-1">
          <i className="fa-regular fa-trash-can"></i> Remove
        </button>
      </div>
    </div>
  );
}
