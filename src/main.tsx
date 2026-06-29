import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router";
import ProductContextProvider from "./context/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductContextProvider>
    <Router>
      <App />
    </Router>
  </ProductContextProvider>
);
