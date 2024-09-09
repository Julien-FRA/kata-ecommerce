import React from "react";
import "./style.scss";
import { SmallProductCard } from "../../Card/SmallProduct";

export const ListProduct = () => {
  return (
    <div className="selected-container">
      <h1 className="title-categ">Catégorie</h1>
      <p className="subtitle-categ">Notre sélection de CATEGORIE</p>
      <div className="small-product-container">
        <SmallProductCard />
        <SmallProductCard />
        <SmallProductCard />
        <SmallProductCard />
        <SmallProductCard />
        <SmallProductCard />
      </div>
    </div>
  );
};
