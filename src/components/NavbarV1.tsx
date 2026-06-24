import { NavLink } from "react-router";

export default function NavbarV1() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-leaf text-brand text-2xl"></i>
            <span className="text-xl font-bold text-brand-dark tracking-tight">
              Fresh<span className="text-brand">Cart</span>
            </span>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search fresh vegetables, meat, groceries..."
                className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-brand pl-10"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-gray-400"></i>
            </div>
          </div>
          <div className="flex items-center gap-6 font-medium text-gray-600">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-brand pb-1 border-b-2 border-brand"
                  : "text-brand pb-1"
              }
              to={`/`}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-brand pb-1 border-b-2 border-brand"
                  : "text-brand pb-1"
              }
              to={`/shop`}
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-brand pb-1 border-b-2 border-brand"
                  : "text-brand pb-1"
              }
              to={`/orders`}
            >
              Orders
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-brand pb-1 border-b-2 border-brand relative"
                  : "text-brand pb-1 relative"
              }
              to={`/cart`}
            >
              <i className="fa-solid fa-basket-shopping text-xl"></i>
              <span className="absolute -top-2 -right-3 bg-brand text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
