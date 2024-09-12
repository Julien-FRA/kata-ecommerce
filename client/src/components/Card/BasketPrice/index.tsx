import React from "react";
import "./style.scss";

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
      <button className="p">Paiement</button>
    </div>
  );
};
