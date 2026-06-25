export default function Breadcrumbs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <nav className="flex text-sm text-gray-500 gap-2 items-center">
        <a href="home.html" className="hover:text-brand">
          Home
        </a>
        <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
        <a href="listings.html" className="hover:text-brand">
          Vegetables
        </a>
        <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
        <span className="text-gray-800 font-medium">Organic Red Tomatoes</span>
      </nav>
    </div>
  );
}
