import React from "react";
import AllProduct from "../components/AllProduct";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import Header from "../components/Header";


const Homepage = () => {
  return (
    <>
      <Header />
      <Category />
      <FlashSale />
      <AllProduct />
    </>
  );
};

export default Homepage;
