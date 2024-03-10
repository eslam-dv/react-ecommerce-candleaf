import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/product/:id"} element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
