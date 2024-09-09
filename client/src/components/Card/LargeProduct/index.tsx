import React from "react";
import product from "../../../assets/images/product_1.webp";
import "./style.scss";

export const LargeProductCard = () => {
  return (
    <a href="#" className="large-product-container">
      <figure>
        <img src={product} alt="product" />
      </figure>
      <h2>Hoodies</h2>
      <p>Découvrir</p>
    </a>
  );
};
