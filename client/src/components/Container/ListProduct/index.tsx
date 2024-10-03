import React from "react";
import "./style.scss";
import { SmallProductCard } from "../../Card/SmallProduct";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/api/product/products.api";
import { Product } from "../../../utils/types/product.type";

export const ListProduct = () => {
  const queryKey = ["products"];
  const { isLoading, error, data } = useQuery(queryKey, () => getProducts());
  const products: Product[] = data || [];

  return (
    <div className="selected-container">
      <h1 className="title-categ">Catégorie</h1>
      <p className="subtitle-categ">Notre sélection de CATEGORIE</p>
      <div className="small-product-container">
        {products.map((product, key) => (
          <SmallProductCard
            key={key}
            id={product._id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
