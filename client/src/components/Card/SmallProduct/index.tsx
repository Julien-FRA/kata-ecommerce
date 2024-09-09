import React from "react";
import product from "../../../assets/images/product_1.webp";
import "./style.scss";

export const SmallProductCard = () => {
  return (
    <a href="#" className="small-product-card rotating">
      <figure>
        <img src={product} alt="product" />
      </figure>
      <p className="categ">Hoodie Awakened</p>
      <p className="price">60,00€</p>
    </a>
  );
};
