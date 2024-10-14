import React from "react";
import { LargeProductCard } from "../../Card/LargeProduct";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/api/product/product.api";
import { Product } from "../../../utils/types/product.type";

export const DiscoverContainer = () => {
  const queryKey = ["products"];
  const { isLoading, error, data } = useQuery(queryKey, () => getProducts());
  const products: Product[] = data || [];

  const showProduct = products.slice(0, 2);

  return (
    <div className="discover-container wrapper">
      {showProduct.map((product, key) => (
        <LargeProductCard key={key} category={product.category} />
      ))}
    </div>
  );
};
