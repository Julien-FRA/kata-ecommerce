import React from "react";
import product from "../../../assets/images/product_1.webp";
import "./style.scss";
import { Button } from "../../Buttons";

export const LargeProductCard = () => {
  return (
    <a href="#" className="large-product-container">
      <figure>
        <img src={product} alt="product" />
      </figure>
      <h2>Hoodies</h2>
      <Button
        type={"submit"}
        variant={"red"}
        size={"small"}
        content={"Découvrir"}
      />
    </a>
  );
};
