import React from "react";
import { categories } from "../consts/variables";

const Category = () => {
  return (
    <div className="category">
      {categories.map((category) => {
        return (
          <div className="category__wrapper">
            <div className="category__wrapper__label">{category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
