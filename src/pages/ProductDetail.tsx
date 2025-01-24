import { GetServerSideProps } from 'next';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

const ProductDetail = ({ product }: { product: Product }) => (
  <div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <img src={product.image} alt={product.title} />
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://api.platzi.com/products/${id}`);
  const product = await res.json();
  return { props: { product } };
};

export default ProductDetail;
