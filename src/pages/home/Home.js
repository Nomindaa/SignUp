import React from "react";
import { Footer, Header, ProductList } from "../../components";
import { products } from "../data";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};
