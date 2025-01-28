import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Welcome to ShopSmart</h1>
      <Link href="/products/1" className="text-blue-500 underline">
        Go to Product Page
      </Link>
    </div>
  );
};

export default Home;
