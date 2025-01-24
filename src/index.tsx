import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/ProductListing');
  }, [router]);

  return null;
};

export default Home;