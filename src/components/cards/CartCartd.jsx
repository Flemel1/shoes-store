import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../slices/cart-slice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const increment = (product) => {
    const productCart = { ...product };
    productCart.quantity++;
    dispatch(cartActions.addToCart(productCart));
  };

  const decrement = (product) => {
    const productCart = { ...product };
    const newQuantity = productCart.quantity - 1;
    if (newQuantity < 1) {
      return;
    }
    productCart.quantity--;
    console.log(productCart);
    dispatch(cartActions.decrementItemOnCart(productCart));
  };

  const onRemove = (product) => {
    dispatch(cartActions.removeProduct(product));
  }

  return (
    <div className="cart-card">
      <div className="cart-card__wrapper">
        <img
          className="cart-card__wrapper__image"
          src={`/images/${product.image}`}
          alt="product photo"
        />
        <div className="cart-card__wrapper__product">
          <div className="cart-card__wrapper__product__name">
            {product.name}
          </div>
          <div className="cart-card__wrapper__product__category">Sneaker</div>
        </div>
        <div className="cart-card__wrapper__quantity">
          <div className="cart-card__wrapper__quantity__label">Quantity</div>
          <div className="cart-card__wrapper__quantity__actions">
            <button
              onClick={() => decrement(product)}
              className="cart-card__wrapper__quantity__actions__decrement"
              type="button"
            >
              <Icon icon="akar-icons:minus" height={24} color="#000" />
            </button>
            <p className="cart-card__wrapper__quantity__actions__total">
              {product.quantity}
            </p>

            <button
              onClick={() => increment(product)}
              className="cart-card__wrapper__quantity__actions__increment"
              type="button"
            >
              <Icon icon="carbon:add" height={24} color="#000" />
            </button>
          </div>
        </div>
        <div className="cart-card__wrapper__prices">
          <div className="cart-card__wrapper__prices__label">Price</div>
          <div className="cart-card__wrapper__prices__total">
            Rp{" "}
            {product.disc === 0
              ? product.price
              : product.price * (product.disc / 100)}
          </div>
        </div>
        <div className="cart-card__wrapper__total">
          <div className="cart-card__wrapper__total__label">Total</div>
          <div className="cart-card__wrapper__total__total">
            {product.total}
          </div>
        </div>
        <div className="cart-card__wrapper__buttons">
          <button type="button" className="cart-card__wrapper__buttons__remove" onClick={() => onRemove(product)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
