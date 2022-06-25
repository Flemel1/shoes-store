import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Icon } from "@iconify/react";
import TestimonialCard from "../components/cards/TestimonialCard";
import { useParams } from "react-router-dom";
import { flasSaleItems, products } from "../consts/variables";
import { useDispatch } from "react-redux";
import { cartActions } from "../slices/cart-slice";

const Detailpage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let product = null;

  flasSaleItems.forEach((item) => {
    if (item.slug === slug) product = item;
  });

  if (product === null) {
    products.forEach((item) => {
      if (item.slug === slug) product = item;
    });
  }

  const increment = (product) => {
    const newQuantity = product.quantity + 1;
    product.quantity++;
    setQuantity(newQuantity);
  };

  const decrement = (product) => {
    const newQuantity = product.quantity - 1;
    if (newQuantity < 1) {
      return;
    }
    product.quantity--;
    setQuantity(newQuantity);
  };

  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product))
  };

  useEffect(() => {}, [quantity]);

  return (
    product && (
      <>
        <Header />
        <div className="detail">
          <div className="detail__left">
            <div className="detail__left__images">
              <div className="detail__left__images__current">
                <img src={`/images/${product.image}`} alt="product photo" />
              </div>
              <div className="detail__left__images__collection">
                <img src={`/images/${product.image}`} alt="product photo" />
                <img src={`/images/${product.image}`} alt="product photo" />
                <img src={`/images/${product.image}`} alt="product photo" />
                <img src={`/images/${product.image}`} alt="product photo" />
              </div>
            </div>
          </div>
          <div className="detail__right">
            <h2>Rainbow Sneaker</h2>
            <div className="detail__right__prices">
              <div
                className={
                  product.disc === 0
                    ? "detail__right__prices__no-discount-label"
                    : "detail__right__prices__discount-label"
                }
              >
                Rp. {product.price}
              </div>
              {product.disc !== 0 && (
                <div className="detail__right__prices__discount">
                  <div className="detail__right__prices__discount__price">
                    Rp. {product.price * (product.disc / 100)}
                  </div>
                  <div className="detail__right__prices__discount__off">
                    {`${product.disc}% OFF`}
                  </div>
                </div>
              )}
            </div>
            <div className="detail__right__voucher">
              <p>Voucher</p>
              <div className="detail__right__voucher__collection">
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
                <div className="detail__right__voucher__collection__wrapper">
                  <div className="detail__right__voucher__collection__wrapper__label">
                    15% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="detail__right__quantity">
              <p>Quantity</p>
              <div className="detail__right__quantity__actions">
                <button
                onClick={() => decrement(product)}
                  className="detail__right__quantity__actions__decrement"
                  type="button"
                >
                  <Icon icon="akar-icons:minus" height={24} color="#000" />
                </button>
                <p className="detail__right__quantity__actions__total">
                  {quantity}
                </p>

                <button
                  onClick={() => increment(product)}
                  className="detail__right__quantity__actions__increment"
                  type="button"
                >
                  <Icon icon="carbon:add" height={24} color="#000" />
                </button>
              </div>
            </div>
            <div className="detail__right__description">
              <div className="detail__right__description__label">
                Description
              </div>
              <div className="detail__right__description__content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pretium, sed a, tortor phasellus velit suspendisse. Massa risus
                viverra ligula massa, vel risus ultrices cursus. Ac et a tortor
                a. Sed nisl vulputate tincidunt risus sodales mi, quam turpis
                urna. Sit nisl sapien lectus risus, est. Tellus ornare
                ullamcorper tristique integer tellus interdum etiam. Elit vel
                tortor nunc pretium, non viverra imperdiet tristique elementum.
                Sed feugiat varius nulla lorem et morbi magnis aliquam. Pretium
                iaculis nisl morbi quam elit. Sagittis odio aliquam est
                pellentesque consectetur proin felis. Enim sed urna ut amet.
                Purus elit tellus nibh bibendum orci. In est id id elementum at
                faucibus consectetur. Morbi arcu lacus, libero fringilla est,
                tincidunt et. Eu urna eget integer justo iaculis sed netus
                cursus massa. Dignissim ultrices quisque convallis pretium, a
                sit ultrices tincidunt. At porta sed etiam massa. Non ut augue
                commodo ipsum eu blandit. Sagittis egestas quis imperdiet nec
                vel.
              </div>
            </div>
            <div className="detail__right__buttons">
              <button
                type="button"
                className="detail__right__buttons__cart"
                onClick={() => addToCart(product)}
              >
                <Icon
                  icon="ant-design:shopping-cart-outlined"
                  height={20}
                  color={"#000"}
                />
                <div className="detail__right__buttons__cart__label">
                  Add To Cart
                </div>
              </button>
              <button
                type="button"
                className="detail__right__buttons__checkout"
              >
                <div className="detail__right__buttons__checkout__label">
                  Buy Now
                </div>
              </button>
            </div>
          </div>
        </div>
        <TestimonialCard />
      </>
    )
  );
};

export default Detailpage;
