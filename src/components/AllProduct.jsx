import React from "react";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const AllProduct = () => {

  const allProduct = useSelector((state) => state.product.products);

  return (
    <div className="all-product">
      <h2>All Product</h2>
      <div className="all-product__wrapper">
        {allProduct.map((product) => {
          return (
            <Link to={`product/${product.slug}`}>
              <div className="all-product__wrapper__card">
                <img
                  className="all-product__wrapper__card__image"
                  src={`/images/${product.image}`}
                  alt="product photo"
                />
                <div className="all-product__wrapper__card__name">
                  {product.name}
                </div>
                <div className="all-product__wrapper__card__bottom">
                  <div className="all-product__wrapper__card__bottom__price">
                    Rp. {product.price}
                  </div>
                  <div className="all-product__wrapper__card__bottom__rating">
                    <Icon
                      icon="ant-design:star-filled"
                      height="24"
                      color="#F0D909"
                    />
                    <div className="all-product__wrapper__card__bottom__rating__review">
                      {product.rating}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
