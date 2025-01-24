import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";

const mockProducts = [
  { id: "1", title: "Product 1", description: "Description 1", price: 100, image: "image1.jpg" },
  { id: "2", title: "Product 2", description: "Description 2", price: 200, image: "image2.jpg" },
];

const App = () => (
  <Router>
    <Routes>
      <Route path="/products" element={<ProductListing products={mockProducts} />} />
      <Route
        path="/products/:id"
        element={<ProductDetail product={mockProducts[0]} />} // Example product
      />
    </Routes>
  </Router>
);

export default App;
