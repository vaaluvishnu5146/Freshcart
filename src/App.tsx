import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <section className="app-container">
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/listing"}>Listings</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/orders/history"}>History</Link>
      </nav>
      <div className="routes-container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
          <Route path="/listing" Component={Listing} />
          <Route path="/orders" Component={Orders} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
