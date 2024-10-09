import React from "react";
import "./style.scss";
import { Carousel } from "../../Carousel";
import { Select } from "../../Select";
import { Details } from "../../Details";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../utils/api/product/product.api";
import { Product } from "../../../utils/types/product.type";

export const ItemProduct = () => {
  const { idProduct } = useParams<{ idProduct: string }>();
  const queryKey = ["product", idProduct];
  const { isLoading, error, data } = useQuery(queryKey, () =>
    getProduct(idProduct)
  );

  const product: Product = data || [];

  return (
    <div className="item-product-container wrapper">
      <div className="top-container">
        <Carousel />
        <Select
          name={product.name}
          price={product.price}
          size={product.size}
          color={product.color}
        />
      </div>
      <Details />
    </div>
  );
};
