import React from "react";
import "./style.scss";

export const Select = () => {
  return (
    <div className="select-container">
      <h2>Hoodie Awakened</h2>
      <p className="price">60,00€</p>
      <form>
        <div className="option">
          <label className="color p">Taille</label>
          <select name="" id="">
            <option value="marron">XS</option>
            <option value="bleu">S</option>
            <option value="bleu">M</option>
          </select>
        </div>
        <div className="option">
          <label className="color p">Couleurs</label>
          <select name="" id="">
            <option value="marron">Marron</option>
            <option value="bleu">Bleu</option>
          </select>
        </div>
        <button className="p">Ajouter au panier</button>
      </form>
    </div>
  );
};
