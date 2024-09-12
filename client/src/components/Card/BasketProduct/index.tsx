import React from "react";
import "./style.scss";
import product from "../../../assets/images/product_1.webp";

export const BasketProduct = () => {
  return (
    <div className="basket-product-item-container">
      <figure className="left-container">
        <img src={product} alt="produit" />
      </figure>
      <div className="right-container">
        <p className="name">Hoodie Awakened - Marron, L</p>
        <p className="price">60,00€</p>
        <button className="delete">x</button>
      </div>
    </div>
  );
};
