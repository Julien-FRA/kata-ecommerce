import React from "react";
import "./style.scss";
import { BasketProduct } from "../../Card/BasketProduct";
import { BasketPrice } from "../../Card/BasketPrice";
import { useAuth } from "../../../utils/context/useAuth";

export const ItemBasket = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="basket-container wrapper">
      <h1>Salut, {user?.name}</h1>
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
