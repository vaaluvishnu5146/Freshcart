export default function Orders() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-brand-dark mb-2">Order History</h1>
      <p className="text-gray-500 mb-8">
        Track ongoing shipments and view structural invoices.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm overflow-hidden">
          <div className="bg-emerald-50/50 px-6 py-4 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-gray-400">Order Placed</p>
                <p className="font-bold text-gray-700">June 24, 2026</p>
              </div>
              <div>
                <p className="text-gray-400">Total Price</p>
                <p className="font-bold text-brand-dark">$34.50</p>
              </div>
              <div>
                <p className="text-gray-400">Order ID</p>
                <p className="font-mono font-semibold text-gray-700">
                  #FC-89301
                </p>
              </div>
            </div>
            <span className="bg-emerald-100 text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Out for Delivery
            </span>
          </div>
          <div className="p-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4 overflow-hidden">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">
                  🥦
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">
                  🥩
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  Fresh Broccoli, Ribeye Steak + 4 more
                </h4>
                <p className="text-sm text-gray-500">
                  Estimated delivery: Today by 8:30 PM
                </p>
              </div>
            </div>
            <button className="border border-brand text-brand hover:bg-brand hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition">
              Track Live
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-gray-400">Order Placed</p>
                <p className="font-bold text-gray-700">May 12, 2026</p>
              </div>
              <div>
                <p className="text-gray-400">Total Price</p>
                <p className="font-bold text-gray-700">$18.20</p>
              </div>
              <div>
                <p className="text-gray-400">Order ID</p>
                <p className="font-mono text-gray-600">#FC-77491</p>
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="fa-solid fa-circle-check text-gray-400 mr-1"></i>
              Delivered
            </span>
          </div>
          <div className="p-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl">
                🥛
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  Organic Whole Milk x 2
                </h4>
                <p className="text-sm text-gray-500">
                  Delivered successfully on May 12
                </p>
              </div>
            </div>
            <button className="bg-brand-light hover:bg-brand text-brand hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition">
              Order Again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
