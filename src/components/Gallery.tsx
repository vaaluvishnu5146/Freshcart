export default function Gallery() {
  return (
    <section className="space-y-4">
      <div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800"
          alt="Organic Tomatoes Showcase View"
          className="object-cover h-full w-full"
        />
        <span className="absolute top-4 left-4 bg-brand text-white font-bold text-xs px-3 py-1.5 rounded-full tracking-wide shadow-sm">
          100% Organic
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button className="border-2 border-brand rounded-xl overflow-hidden bg-gray-50 aspect-square">
          <img
            src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=200"
            className="object-cover h-full w-full opacity-80"
          />
        </button>
        <button className="border border-gray-200 hover:border-brand rounded-xl overflow-hidden bg-gray-50 aspect-square transition">
          <img
            src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=200"
            className="object-cover h-full w-full"
          />
        </button>
        <button className="border border-gray-200 hover:border-brand rounded-xl overflow-hidden bg-gray-50 aspect-square transition">
          <img
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=200"
            className="object-cover h-full w-full"
          />
        </button>
        <button className="border border-gray-200 hover:border-brand rounded-xl overflow-hidden bg-gray-50 aspect-square transition opacity-60 flex items-center justify-center font-bold text-gray-500 text-sm bg-gray-100">
          +2 More
        </button>
      </div>
    </section>
  );
}
