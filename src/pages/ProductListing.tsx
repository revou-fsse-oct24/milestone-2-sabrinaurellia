// pages/ProductListing.tsx
import { GetServerSideProps } from 'next';
import React from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductListing = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
    {products.map((product) => (
      <div key={product.id} className="border p-3 rounded">
        <img src={product.image} alt={product.title} className="w-full" />
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-blue-500">${product.price}</p>
      </div>
    ))}
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://api.platzi.com/products');
  const products = await res.json();
  return { props: { products } };
};

export default ProductListing;
