import "./App.css";
import NavbarV1 from "./components/NavbarV1";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/shop";
import Vegetables from "./pages/shop";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router";

function App() {
  return (
    <section className="app-container">
      <NavbarV1 />
      <div className="routes-container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
          <Route path="/shop" Component={Shop} />
          <Route path="/orders" Component={Orders} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
