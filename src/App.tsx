import "./App.css";
import NavbarV1 from "./components/NavbarV1";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/shop";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import { Routes, Route } from "react-router";
import ProductDetails from "./pages/ProductDetails";
import CartContextProvider from "./context/CartContext";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import Checkout from "./pages/Checkout";
import PaymentInformationProvider from "./context/PaymentInfo";

function App() {
  const { products = [] } = useContext(ProductContext);

  console.log("App page", products);

  return (
    <CartContextProvider>
      <section className="app-container">
        <NavbarV1 />
        <div className="routes-container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
            <Route path="/shop">
              <Route index Component={Shop} />
              <Route
                path="/shop/product/:productId"
                Component={ProductDetails}
              />
            </Route>
            <Route path="/orders" Component={Orders} />
            <Route
              path="/checkout"
              element={
                <PaymentInformationProvider>
                  <Checkout />
                </PaymentInformationProvider>
              }
            />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </section>
    </CartContextProvider>
  );
}

export default App;
