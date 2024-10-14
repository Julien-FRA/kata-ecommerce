import React, { useEffect } from "react";
import "./style.scss";
import { SmallProductCard } from "../../Card/SmallProduct";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../utils/api/product/product.api";
import { Product } from "../../../utils/types/product.type";
import { useNavigate, useParams } from "react-router-dom";

export const ListProduct = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const queryKey = ["products"];
  const { isLoading, error, data } = useQuery(queryKey, () => getProducts());
  const products: Product[] = data || [];

  const listCategory: any[] = ["hoodies", "sweats", "t-shirts", "caps"];

  useEffect(() => {
    if (!listCategory.includes(category)) {
      navigate("/");
    }
  }, [category, navigate]);

  return (
    <div className="selected-container">
      <h1 className="title-categ">{category}</h1>
      <p className="subtitle-categ">Notre sélection de {category}</p>
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
