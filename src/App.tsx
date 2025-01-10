import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import ProductListing from "./pages/ProductListing";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <Router>
      <div className="flex justify-around bg-gray-100 p-4">
        <Link to="/" className="text-blue-500 font-bold">Login</Link>
        <Link to="/products" className="text-blue-500 font-bold">Products</Link>
        <Link to="/categories" className="text-blue-500 font-bold">Categories</Link>
        <Link to="/cart" className="text-blue-500 font-bold">Cart</Link>
      </div>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/categories" element={<ProductCategory />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
