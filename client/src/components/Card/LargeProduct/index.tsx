import React from "react";
import product from "../../../assets/images/product_1.webp";
import "./style.scss";
import { Button } from "../../Buttons";
import { Link } from "react-router-dom";

interface LargeProductCardProps {
  category: "hoodies" | "sweats" | "t-shirts" | "caps";
}

export const LargeProductCard = ({ category }: LargeProductCardProps) => {
  return (
    <Link to={`/${category}`} className="large-product-container">
      <figure>
        <img src={product} alt="product" />
      </figure>
      <h2>{category}</h2>
      <Button
        type={"submit"}
        variant={"red"}
        size={"small"}
        content={"Découvrir"}
      />
    </Link>
  );
};
