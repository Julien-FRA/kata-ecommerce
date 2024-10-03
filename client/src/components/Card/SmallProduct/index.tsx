import React from "react";
import product from "../../../assets/images/product_1.webp";
import "./style.scss";
import { Link } from "react-router-dom";

interface ProductProps {
  id: string;
  name: string;
  price: number;
}

export const SmallProductCard = ({ id, name, price }: ProductProps) => {
  return (
    <Link to={`${id}`} className="small-product-card rotating">
      <figure>
        <img src={product} alt="product" />
      </figure>
      <p className="categ">{name}</p>
      <p className="price">{price}€</p>
    </Link>
  );
};
