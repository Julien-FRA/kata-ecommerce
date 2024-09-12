import React from "react";
import "./style.scss";
import { BasketProduct } from "../../Card/BasketProduct";
import { BasketPrice } from "../../Card/BasketPrice";

export const ItemBasket = () => {
  return (
    <div className="basket-container wrapper">
      <h1>Panier</h1>
      <div className="items-container">
        <div className="basket-item-container">
          <BasketProduct />
          <BasketProduct />
          <BasketProduct />
        </div>
        <div className="basket-price-container">
          <BasketPrice />
        </div>
      </div>
    </div>
  );
};
