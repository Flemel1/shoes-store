import React from "react";
import { flasSaleItems } from "../consts/variables";
import { Link } from "react-router-dom";

const FlashSale = () => {
  return (
    <div className="flash-sale">
      <h2>Flash Sale</h2>
      <div className="flash-sale__wrapper">
        {flasSaleItems.map((item) => {
          return (
            <Link to={`/product/${item.slug}`}>
              <div className="flash-sale__wrapper__card">
                <div className="flash-sale__wrapper__card__badge">
                  {item.disc}% OFF
                </div>
                <img
                  className="flash-sale__wrapper__card__image"
                  src={`/images/${item.image}`}
                  alt="product photo"
                />
                <div className="flash-sale__wrapper__card__label">
                  Rp. {item.price * (item.disc / 100)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FlashSale;
