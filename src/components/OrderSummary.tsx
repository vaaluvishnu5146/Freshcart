export default function OrderSummary() {
  return (
    <aside className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
      <h3 className="font-bold text-brand-dark text-lg mb-4">Order Summary</h3>
      <div className="space-y-3 border-b border-gray-100 pb-4 text-gray-600 text-sm">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span className="font-semibold text-gray-800">$18.97</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="font-semibold text-brand">FREE</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span className="font-semibold text-gray-800">$1.20</span>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 mb-4">
        <span className="font-bold text-brand-dark">Total Amount</span>
        <span className="text-2xl font-black text-brand">$20.17</span>
      </div>
      <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg shadow-brand/20">
        Proceed to Checkout <i className="fa-solid fa-arrow-right ml-2"></i>
      </button>
    </aside>
  );
}
