import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/Products/ProductsDetails";
import Downloads from "./pages/Downloads/Downloads";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer"; 

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/downloads" element={<Downloads />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
