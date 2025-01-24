import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "../src/pages/ProductDetail";

const mockProduct = {
  id: "1",
  title: "Product 1",
  description: "Description 1",
  price: 100,
  image: "image1.jpg",
};

test("renders product details", () => {
  render(<ProductDetail product={mockProduct} />);
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Description 1")).toBeInTheDocument();
  expect(screen.getByText("$100")).toBeInTheDocument();
});
