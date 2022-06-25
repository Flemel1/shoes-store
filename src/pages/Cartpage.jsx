import React from "react";
import CartCard from "../components/cards/CartCartd";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Cartpage = () => {
  const cartList = useSelector((state) => state.cart.itemList);

  return (
    <>
      <Header />
      <h2>Shopping Cart</h2>
      {cartList.length === 0 ? (
        <>
          <p>Cart Is Empty Please Check the Product</p>
        </>
      ) : (
        cartList.map((product) => {
          return <CartCard product={product} />;
        })
      )}
    </>
  );
};

export default Cartpage;
