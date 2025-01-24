import React from "react";
import { render, screen } from "@testing-library/react";
import ProductListing from "../src/pages/ProductListing";

const mockProducts = [
  { id: "1", title: "Product 1", description: "Description 1", price: 100, image: "image1.jpg" },
  { id: "2", title: "Product 2", description: "Description 2", price: 200, image: "image2.jpg" },
];

test("renders product list", () => {
  render(<ProductListing products={mockProducts} />);
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Product 2")).toBeInTheDocument();
});
