import React from "react";
import "./style.scss";
import { Button } from "../../Buttons";

export const BasketPrice = () => {
  return (
    <div className="basket-price-item-container">
      <p className="h2">Total panier:</p>
      <span />
      <div className="total-price">
        <p>Sous-total</p>
        <p>120,00€</p>
      </div>
      <div className="delivery">
        <p>Livraison</p>
        <p>9,99€</p>
      </div>
      <span />
      <Button
        type={"submit"}
        variant={"black"}
        size={"large"}
        content={"Paiement"}
      />
    </div>
  );
};
