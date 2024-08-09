import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import TermsOfServices from "./Pages/TermsOfServices";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import FAQ from "./Pages/FAQ";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/fashion"
            element={<ShopCategory category="fashion" />}
          />
          <Route
            path="/skincare"
            element={<ShopCategory category="skincare" />}
          />
          <Route
            path="/accessories"
            element={<ShopCategory category="accessories" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/shopping-cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/terms-of-service" element={<TermsOfServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
