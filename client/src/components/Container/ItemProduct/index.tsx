import React, { useEffect } from "react";
import "./style.scss";
import { Carousel } from "../../Carousel";
import { Select } from "../../Select";
import { Details } from "../../Details";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../utils/api/product/product.api";
import { Product } from "../../../utils/types/product.type";

export const ItemProduct = () => {
  const { category, idProduct } = useParams<{
    category: string;
    idProduct: string;
  }>();
  const navigate = useNavigate();
  const queryKey = ["product", idProduct];
  const { isLoading, error, data } = useQuery(queryKey, () =>
    getProduct(idProduct)
  );
  const product: Product = data || [];

  console.log(product._id, idProduct);

  const listCategory: any[] = ["hoodies", "sweats", "t-shirts", "caps"];

  useEffect(() => {
    if (!listCategory.includes(category)) {
      navigate("/");
    }
  }, [category, idProduct, navigate]);

  return (
    <div className="item-product-container wrapper">
      {product._id ? (
        <>
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
        </>
      ) : (
        <h1 className="text-center">Produit introuvable</h1>
      )}
    </div>
  );
};
