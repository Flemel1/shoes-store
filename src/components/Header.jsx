import React from "react";
import { Icon } from "@iconify/react";
import AlertIcon from "./Alerts/AlertIcon";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "../slices/product-slice";

const Header = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  const wishList = useSelector((state) => state.product.wishList);
  const dispatch = useDispatch();

  const onSearch = (event) => {
    const keyword = event.target.value;
    dispatch(productActions.searchProduct(keyword));
  };

  return (
    <div className="header">
      <ul className="header__wrapper">
        <li>
          <img src="/icons/icon-shoes.png" alt="icon-shoes" />
        </li>
        <li>
          <Link to={"/"}>
            <h1 className="header__wrapper__brand">Shoes Mart</h1>
          </Link>
        </li>
        <li className="header__wrapper__search">
          <Icon
            className="header__wrapper__search__icon"
            icon="bx:search"
            height="24"
            color="#000"
          />
          <input
            onChange={onSearch}
            className="header__wrapper__search__input"
            type="text"
            name="search"
            placeholder="Search"
          />
        </li>
        <li>
          <Link to={"/cart"}>
            <AlertIcon
              icon="ant-design:shopping-cart-outlined"
              number={cartItem.length}
            />
          </Link>
        </li>
        <li>
          <AlertIcon
            icon="ant-design:heart-filled"
            number={wishList.length}
            color="#DD1F1F"
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
